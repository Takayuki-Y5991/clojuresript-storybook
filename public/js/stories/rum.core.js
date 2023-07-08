var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljsjs.react.js");
require("./cljsjs.react.dom.js");
require("./sablono.core.js");
require("./rum.cursor.js");
require("./rum.util.js");
require("./rum.derived_atom.js");
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

$CLJS.SHADOW_ENV.setLoaded("rum.core.js");

goog.provide('rum.core');
goog.scope(function(){
  rum.core.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return rum.core.goog$module$goog$object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__28706 = cljs.core.seq(props);
var chunk__28708 = null;
var count__28709 = (0);
var i__28710 = (0);
while(true){
if((i__28710 < count__28709)){
var vec__28718 = chunk__28708.cljs$core$IIndexed$_nth$arity$2(null,i__28710);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28718,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28718,(1),null);
if((!((v == null)))){
rum.core.goog$module$goog$object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__28768 = seq__28706;
var G__28769 = chunk__28708;
var G__28770 = count__28709;
var G__28771 = (i__28710 + (1));
seq__28706 = G__28768;
chunk__28708 = G__28769;
count__28709 = G__28770;
i__28710 = G__28771;
continue;
} else {
var G__28772 = seq__28706;
var G__28773 = chunk__28708;
var G__28774 = count__28709;
var G__28775 = (i__28710 + (1));
seq__28706 = G__28772;
chunk__28708 = G__28773;
count__28709 = G__28774;
i__28710 = G__28775;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28706);
if(temp__5753__auto__){
var seq__28706__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28706__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28706__$1);
var G__28776 = cljs.core.chunk_rest(seq__28706__$1);
var G__28777 = c__4679__auto__;
var G__28778 = cljs.core.count(c__4679__auto__);
var G__28779 = (0);
seq__28706 = G__28776;
chunk__28708 = G__28777;
count__28709 = G__28778;
i__28710 = G__28779;
continue;
} else {
var vec__28721 = cljs.core.first(seq__28706__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28721,(1),null);
if((!((v == null)))){
rum.core.goog$module$goog$object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__28780 = cljs.core.next(seq__28706__$1);
var G__28781 = null;
var G__28782 = (0);
var G__28783 = (0);
seq__28706 = G__28780;
chunk__28708 = G__28781;
count__28709 = G__28782;
i__28710 = G__28783;
continue;
} else {
var G__28784 = cljs.core.next(seq__28706__$1);
var G__28785 = null;
var G__28786 = (0);
var G__28787 = (0);
seq__28706 = G__28784;
chunk__28708 = G__28785;
count__28709 = G__28786;
i__28710 = G__28787;
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
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28725_SHARP_,p2__28724_SHARP_){
return (p2__28724_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__28724_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__28725_SHARP_) : p2__28724_SHARP_.call(null,p1__28725_SHARP_));
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect(new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect(new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect(new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect(new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect(new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
rum.core.goog$module$goog$object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rum.core.goog$module$goog$object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = rum.core.goog$module$goog$object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
}));
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
}));
}

rum.core.goog$module$goog$object.set(prototype,"componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,rum.core.goog$module$goog$object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28727_SHARP_,p2__28726_SHARP_){
return (p2__28726_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__28726_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__28727_SHARP_) : p2__28726_SHARP_.call(null,old_state,p1__28727_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(rum.core.goog$module$goog$object.get(next_state,":rum/state"));
var or__4253__auto__ = cljs.core.some((function (p1__28728_SHARP_){
return (p1__28728_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__28728_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__28728_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = rum.core.goog$module$goog$object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
}));
}

rum.core.goog$module$goog$object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__28730 = (function (){var G__28733 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__28733) : wrapped_render.call(null,G__28733));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28730,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28730,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_(did_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),rum.core.goog$module$goog$object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
}));
}

rum.core.goog$module$goog$object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return rum.core.goog$module$goog$object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_(child_context)){
} else {
rum.core.goog$module$goog$object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28729_SHARP_){
return (p1__28729_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28729_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__28729_SHARP_.call(null,state));
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_(prototype,class_props);

rum.core.goog$module$goog$object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__28791__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__28791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28792__i = 0, G__28792__a = new Array(arguments.length -  0);
while (G__28792__i < G__28792__a.length) {G__28792__a[G__28792__i] = arguments[G__28792__i + 0]; ++G__28792__i;}
  args = new cljs.core.IndexedSeq(G__28792__a,0,null);
} 
return G__28791__delegate.call(this,args);};
G__28791.cljs$lang$maxFixedArity = 0;
G__28791.cljs$lang$applyTo = (function (arglist__28793){
var args = cljs.core.seq(arglist__28793);
return G__28791__delegate(args);
});
G__28791.cljs$core$IFn$_invoke$arity$variadic = G__28791__delegate;
return G__28791;
})()
:(function() { 
var G__28794__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__28794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28795__i = 0, G__28795__a = new Array(arguments.length -  0);
while (G__28795__i < G__28795__a.length) {G__28795__a[G__28795__i] = arguments[G__28795__i + 0]; ++G__28795__i;}
  args = new cljs.core.IndexedSeq(G__28795__a,0,null);
} 
return G__28794__delegate.call(this,args);};
G__28794.cljs$lang$maxFixedArity = 0;
G__28794.cljs$lang$applyTo = (function (arglist__28796){
var args = cljs.core.seq(arglist__28796);
return G__28794__delegate(args);
});
G__28794.cljs$core$IFn$_invoke$arity$variadic = G__28794__delegate;
return G__28794;
})()
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__28797__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__28797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28798__i = 0, G__28798__a = new Array(arguments.length -  0);
while (G__28798__i < G__28798__a.length) {G__28798__a[G__28798__i] = arguments[G__28798__i + 0]; ++G__28798__i;}
  args = new cljs.core.IndexedSeq(G__28798__a,0,null);
} 
return G__28797__delegate.call(this,args);};
G__28797.cljs$lang$maxFixedArity = 0;
G__28797.cljs$lang$applyTo = (function (arglist__28799){
var args = cljs.core.seq(arglist__28799);
return G__28797__delegate(args);
});
G__28797.cljs$core$IFn$_invoke$arity$variadic = G__28797__delegate;
return G__28797;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = (typeof window !== 'undefined');
if(and__4251__auto__){
var or__4253__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (p1__28734_SHARP_){
return setTimeout(p1__28734_SHARP_,(16));
});
}
})();
rum.core.batch = (function (){var or__4253__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__28735 = cljs.core.seq(queue);
var chunk__28737 = null;
var count__28738 = (0);
var i__28739 = (0);
while(true){
if((i__28739 < count__28738)){
var comp = chunk__28737.cljs$core$IIndexed$_nth$arity$2(null,i__28739);
if((((!((comp == null)))) && (cljs.core.not(rum.core.goog$module$goog$object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__28801 = seq__28735;
var G__28802 = chunk__28737;
var G__28803 = count__28738;
var G__28804 = (i__28739 + (1));
seq__28735 = G__28801;
chunk__28737 = G__28802;
count__28738 = G__28803;
i__28739 = G__28804;
continue;
} else {
var G__28805 = seq__28735;
var G__28806 = chunk__28737;
var G__28807 = count__28738;
var G__28808 = (i__28739 + (1));
seq__28735 = G__28805;
chunk__28737 = G__28806;
count__28738 = G__28807;
i__28739 = G__28808;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28735);
if(temp__5753__auto__){
var seq__28735__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28735__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28735__$1);
var G__28809 = cljs.core.chunk_rest(seq__28735__$1);
var G__28810 = c__4679__auto__;
var G__28811 = cljs.core.count(c__4679__auto__);
var G__28812 = (0);
seq__28735 = G__28809;
chunk__28737 = G__28810;
count__28738 = G__28811;
i__28739 = G__28812;
continue;
} else {
var comp = cljs.core.first(seq__28735__$1);
if((((!((comp == null)))) && (cljs.core.not(rum.core.goog$module$goog$object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__28813 = cljs.core.next(seq__28735__$1);
var G__28814 = null;
var G__28815 = (0);
var G__28816 = (0);
seq__28735 = G__28813;
chunk__28737 = G__28814;
count__28738 = G__28815;
i__28739 = G__28816;
continue;
} else {
var G__28817 = cljs.core.next(seq__28735__$1);
var G__28818 = null;
var G__28819 = (0);
var G__28820 = (0);
seq__28735 = G__28817;
chunk__28737 = G__28818;
count__28738 = G__28819;
i__28739 = G__28820;
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
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return rum.core.render_queue.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rum.core.render_queue.cljs$core$IDeref$_deref$arity$1(null),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__28742 = arguments.length;
switch (G__28742) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,(function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__28743 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__28744 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__28744);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__28745 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28745,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28745,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__28748_28822 = cljs.core.seq(old_reactions);
var chunk__28749_28823 = null;
var count__28750_28824 = (0);
var i__28751_28825 = (0);
while(true){
if((i__28751_28825 < count__28750_28824)){
var ref_28826 = chunk__28749_28823.cljs$core$IIndexed$_nth$arity$2(null,i__28751_28825);
if(cljs.core.contains_QMARK_(new_reactions,ref_28826)){
} else {
cljs.core.remove_watch(ref_28826,key);
}


var G__28827 = seq__28748_28822;
var G__28828 = chunk__28749_28823;
var G__28829 = count__28750_28824;
var G__28830 = (i__28751_28825 + (1));
seq__28748_28822 = G__28827;
chunk__28749_28823 = G__28828;
count__28750_28824 = G__28829;
i__28751_28825 = G__28830;
continue;
} else {
var temp__5753__auto___28831 = cljs.core.seq(seq__28748_28822);
if(temp__5753__auto___28831){
var seq__28748_28832__$1 = temp__5753__auto___28831;
if(cljs.core.chunked_seq_QMARK_(seq__28748_28832__$1)){
var c__4679__auto___28833 = cljs.core.chunk_first(seq__28748_28832__$1);
var G__28834 = cljs.core.chunk_rest(seq__28748_28832__$1);
var G__28835 = c__4679__auto___28833;
var G__28836 = cljs.core.count(c__4679__auto___28833);
var G__28837 = (0);
seq__28748_28822 = G__28834;
chunk__28749_28823 = G__28835;
count__28750_28824 = G__28836;
i__28751_28825 = G__28837;
continue;
} else {
var ref_28838 = cljs.core.first(seq__28748_28832__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_28838)){
} else {
cljs.core.remove_watch(ref_28838,key);
}


var G__28839 = cljs.core.next(seq__28748_28832__$1);
var G__28840 = null;
var G__28841 = (0);
var G__28842 = (0);
seq__28748_28822 = G__28839;
chunk__28749_28823 = G__28840;
count__28750_28824 = G__28841;
i__28751_28825 = G__28842;
continue;
}
} else {
}
}
break;
}

var seq__28752_28843 = cljs.core.seq(new_reactions);
var chunk__28753_28844 = null;
var count__28754_28845 = (0);
var i__28755_28846 = (0);
while(true){
if((i__28755_28846 < count__28754_28845)){
var ref_28847 = chunk__28753_28844.cljs$core$IIndexed$_nth$arity$2(null,i__28755_28846);
if(cljs.core.contains_QMARK_(old_reactions,ref_28847)){
} else {
cljs.core.add_watch(ref_28847,key,((function (seq__28752_28843,chunk__28753_28844,count__28754_28845,i__28755_28846,ref_28847,comp,old_reactions,vec__28745,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__28743,_STAR_reactions_STAR__temp_val__28744){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__28752_28843,chunk__28753_28844,count__28754_28845,i__28755_28846,ref_28847,comp,old_reactions,vec__28745,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__28743,_STAR_reactions_STAR__temp_val__28744))
);
}


var G__28848 = seq__28752_28843;
var G__28849 = chunk__28753_28844;
var G__28850 = count__28754_28845;
var G__28851 = (i__28755_28846 + (1));
seq__28752_28843 = G__28848;
chunk__28753_28844 = G__28849;
count__28754_28845 = G__28850;
i__28755_28846 = G__28851;
continue;
} else {
var temp__5753__auto___28852 = cljs.core.seq(seq__28752_28843);
if(temp__5753__auto___28852){
var seq__28752_28853__$1 = temp__5753__auto___28852;
if(cljs.core.chunked_seq_QMARK_(seq__28752_28853__$1)){
var c__4679__auto___28854 = cljs.core.chunk_first(seq__28752_28853__$1);
var G__28855 = cljs.core.chunk_rest(seq__28752_28853__$1);
var G__28856 = c__4679__auto___28854;
var G__28857 = cljs.core.count(c__4679__auto___28854);
var G__28858 = (0);
seq__28752_28843 = G__28855;
chunk__28753_28844 = G__28856;
count__28754_28845 = G__28857;
i__28755_28846 = G__28858;
continue;
} else {
var ref_28859 = cljs.core.first(seq__28752_28853__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_28859)){
} else {
cljs.core.add_watch(ref_28859,key,((function (seq__28752_28843,chunk__28753_28844,count__28754_28845,i__28755_28846,ref_28859,seq__28752_28853__$1,temp__5753__auto___28852,comp,old_reactions,vec__28745,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__28743,_STAR_reactions_STAR__temp_val__28744){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__28752_28843,chunk__28753_28844,count__28754_28845,i__28755_28846,ref_28859,seq__28752_28853__$1,temp__5753__auto___28852,comp,old_reactions,vec__28745,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__28743,_STAR_reactions_STAR__temp_val__28744))
);
}


var G__28860 = cljs.core.next(seq__28752_28853__$1);
var G__28861 = null;
var G__28862 = (0);
var G__28863 = (0);
seq__28752_28843 = G__28860;
chunk__28753_28844 = G__28861;
count__28754_28845 = G__28862;
i__28755_28846 = G__28863;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__28743);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_28864 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__28756_28865 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__28757_28866 = null;
var count__28758_28867 = (0);
var i__28759_28868 = (0);
while(true){
if((i__28759_28868 < count__28758_28867)){
var ref_28869 = chunk__28757_28866.cljs$core$IIndexed$_nth$arity$2(null,i__28759_28868);
cljs.core.remove_watch(ref_28869,key_28864);


var G__28870 = seq__28756_28865;
var G__28871 = chunk__28757_28866;
var G__28872 = count__28758_28867;
var G__28873 = (i__28759_28868 + (1));
seq__28756_28865 = G__28870;
chunk__28757_28866 = G__28871;
count__28758_28867 = G__28872;
i__28759_28868 = G__28873;
continue;
} else {
var temp__5753__auto___28874 = cljs.core.seq(seq__28756_28865);
if(temp__5753__auto___28874){
var seq__28756_28875__$1 = temp__5753__auto___28874;
if(cljs.core.chunked_seq_QMARK_(seq__28756_28875__$1)){
var c__4679__auto___28876 = cljs.core.chunk_first(seq__28756_28875__$1);
var G__28877 = cljs.core.chunk_rest(seq__28756_28875__$1);
var G__28878 = c__4679__auto___28876;
var G__28879 = cljs.core.count(c__4679__auto___28876);
var G__28880 = (0);
seq__28756_28865 = G__28877;
chunk__28757_28866 = G__28878;
count__28758_28867 = G__28879;
i__28759_28868 = G__28880;
continue;
} else {
var ref_28881 = cljs.core.first(seq__28756_28875__$1);
cljs.core.remove_watch(ref_28881,key_28864);


var G__28882 = cljs.core.next(seq__28756_28875__$1);
var G__28883 = null;
var G__28884 = (0);
var G__28885 = (0);
seq__28756_28865 = G__28882;
chunk__28757_28866 = G__28883;
count__28758_28867 = G__28884;
i__28759_28868 = G__28885;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142)], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28886 = arguments.length;
var i__4865__auto___28887 = (0);
while(true){
if((i__4865__auto___28887 < len__4864__auto___28886)){
args__4870__auto__.push((arguments[i__4865__auto___28887]));

var G__28888 = (i__4865__auto___28887 + (1));
i__4865__auto___28887 = G__28888;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__28763){
var map__28764 = p__28763;
var map__28764__$1 = cljs.core.__destructure_map(map__28764);
var options = map__28764__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq28760){
var G__28761 = cljs.core.first(seq28760);
var seq28760__$1 = cljs.core.next(seq28760);
var G__28762 = cljs.core.first(seq28760__$1);
var seq28760__$2 = cljs.core.next(seq28760__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28761,G__28762,seq28760__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28889 = arguments.length;
var i__4865__auto___28890 = (0);
while(true){
if((i__4865__auto___28890 < len__4864__auto___28889)){
args__4870__auto__.push((arguments[i__4865__auto___28890]));

var G__28891 = (i__4865__auto___28890 + (1));
i__4865__auto___28890 = G__28891;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq28765){
var G__28766 = cljs.core.first(seq28765);
var seq28765__$1 = cljs.core.next(seq28765);
var G__28767 = cljs.core.first(seq28765__$1);
var seq28765__$2 = cljs.core.next(seq28765__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28766,G__28767,seq28765__$2);
}));

Object.defineProperty(module.exports, "mount", { enumerable: false, get: function() { return rum.core.mount; } });
Object.defineProperty(module.exports, "unmount", { enumerable: false, get: function() { return rum.core.unmount; } });
Object.defineProperty(module.exports, "local", { enumerable: false, get: function() { return rum.core.local; } });
Object.defineProperty(module.exports, "reactive", { enumerable: false, get: function() { return rum.core.reactive; } });
Object.defineProperty(module.exports, "render_all", { enumerable: false, get: function() { return rum.core.render_all; } });
Object.defineProperty(module.exports, "ref_node", { enumerable: false, get: function() { return rum.core.ref_node; } });
Object.defineProperty(module.exports, "react", { enumerable: false, get: function() { return rum.core.react; } });
Object.defineProperty(module.exports, "schedule", { enumerable: false, get: function() { return rum.core.schedule; } });
Object.defineProperty(module.exports, "request_render", { enumerable: false, get: function() { return rum.core.request_render; } });
Object.defineProperty(module.exports, "render_queue", { enumerable: false, get: function() { return rum.core.render_queue; } });
Object.defineProperty(module.exports, "portal", { enumerable: false, get: function() { return rum.core.portal; } });
Object.defineProperty(module.exports, "with_key", { enumerable: false, get: function() { return rum.core.with_key; } });
Object.defineProperty(module.exports, "extend_BANG_", { enumerable: false, get: function() { return rum.core.extend_BANG_; } });
Object.defineProperty(module.exports, "build_defcs", { enumerable: false, get: function() { return rum.core.build_defcs; } });
Object.defineProperty(module.exports, "_STAR_reactions_STAR_", { enumerable: false, get: function() { return rum.core._STAR_reactions_STAR_; } });
Object.defineProperty(module.exports, "ref", { enumerable: false, get: function() { return rum.core.ref; } });
Object.defineProperty(module.exports, "static$", { enumerable: false, get: function() { return rum.core.static$; } });
Object.defineProperty(module.exports, "cursor", { enumerable: false, get: function() { return rum.core.cursor; } });
Object.defineProperty(module.exports, "state", { enumerable: false, get: function() { return rum.core.state; } });
Object.defineProperty(module.exports, "cursor_in", { enumerable: false, get: function() { return rum.core.cursor_in; } });
Object.defineProperty(module.exports, "dom_node", { enumerable: false, get: function() { return rum.core.dom_node; } });
Object.defineProperty(module.exports, "batch", { enumerable: false, get: function() { return rum.core.batch; } });
Object.defineProperty(module.exports, "with_ref", { enumerable: false, get: function() { return rum.core.with_ref; } });
Object.defineProperty(module.exports, "build_defc", { enumerable: false, get: function() { return rum.core.build_defc; } });
Object.defineProperty(module.exports, "hydrate", { enumerable: false, get: function() { return rum.core.hydrate; } });
Object.defineProperty(module.exports, "build_defcc", { enumerable: false, get: function() { return rum.core.build_defcc; } });
Object.defineProperty(module.exports, "derived_atom", { enumerable: false, get: function() { return rum.core.derived_atom; } });
Object.defineProperty(module.exports, "render", { enumerable: false, get: function() { return rum.core.render; } });
Object.defineProperty(module.exports, "empty_queue", { enumerable: false, get: function() { return rum.core.empty_queue; } });
Object.defineProperty(module.exports, "build_class", { enumerable: false, get: function() { return rum.core.build_class; } });
Object.defineProperty(module.exports, "build_ctor", { enumerable: false, get: function() { return rum.core.build_ctor; } });
//# sourceMappingURL=rum.core.js.map
