var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./sablono.normalize.js");
require("./sablono.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("sablono.interpreter.js");

goog.provide('sablono.interpreter');
goog.scope(function(){
  sablono.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

var sablono$interpreter$IInterpreter$interpret$dyn_26480 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sablono.interpreter.interpret["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
});
/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((((!((this$ == null)))) && ((!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
return sablono$interpreter$IInterpreter$interpret$dyn_26480(this$);
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var on_change = sablono.interpreter.goog$module$goog$object.getValueByKeys(component,"state","onChange");
var next_state = ({});
sablono.interpreter.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

sablono.interpreter.goog$module$goog$object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({});
sablono.interpreter.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(sablono.interpreter.goog$module$goog$object.get(this$,"onChange"),this$)}));

return state;
})());

return React.Component.call(this$,props);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x26469_26481 = ctor.prototype;
(x26469_26481.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return sablono.interpreter.update_state(this$,this$.props,property,sablono.interpreter.goog$module$goog$object.getValueByKeys(event,"target",property));
} else {
return null;
}
}));

(x26469_26481.componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = sablono.interpreter.goog$module$goog$object.getValueByKeys(this$,"state",property);
var element_value = sablono.interpreter.goog$module$goog$object.get(ReactDOM.findDOMNode(this$),property);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return sablono.interpreter.update_state(this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state(this$,new_props,property,sablono.interpreter.goog$module$goog$object.get(new_props,property));
}
}));

(x26469_26481.render = (function (){
var this$ = this;
return React.createElement(element,this$.state);
}));


return ctor;
});
sablono.interpreter.lazy_load_wrappers = (function sablono$interpreter$lazy_load_wrappers(){
if(cljs.core.truth_(sablono.interpreter.wrapped_textarea)){
return null;
} else {
(sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value"));

(sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked"));

(sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value"));

return (sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value"));
}
});
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__4251__auto__ = cljs.core.object_QMARK_(props);
if(and__4251__auto__){
var G__26470 = type;
switch (G__26470) {
case "input":
return (((!((props.checked == null)))) || ((!((props.value == null)))));

break;
case "select":
return (!((props.value == null)));

break;
case "textarea":
return (!((props.value == null)));

break;
default:
return false;

}
} else {
return and__4251__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_(type,props)){
sablono.interpreter.lazy_load_wrappers();

var G__26471 = type;
switch (G__26471) {
case "input":
var G__26472 = (function (){var and__4251__auto__ = cljs.core.object_QMARK_(props);
if(and__4251__auto__){
return props.type;
} else {
return and__4251__auto__;
}
})();
switch (G__26472) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26491 = arguments.length;
var i__4865__auto___26492 = (0);
while(true){
if((i__4865__auto___26492 < len__4864__auto___26491)){
args__4870__auto__.push((arguments[i__4865__auto___26492]));

var G__26493 = (i__4865__auto___26492 + (1));
i__4865__auto___26492 = G__26493;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,sablono.interpreter.element_class(type,props),props,children);
}));

(sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq26473){
var G__26474 = cljs.core.first(seq26473);
var seq26473__$1 = cljs.core.next(seq26473);
var G__26475 = cljs.core.first(seq26473__$1);
var seq26473__$2 = cljs.core.next(seq26473__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26474,G__26475,seq26473__$2);
}));

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5753__auto__ = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5753__auto__)){
var js_attrs = temp__5753__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__26477 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(sablono.util.element_QMARK_(x)){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

(cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
}));

(cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));

(cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
}));
Object.defineProperty(module.exports, "wrapped_textarea", { enumerable: false, get: function() { return sablono.interpreter.wrapped_textarea; } });
Object.defineProperty(module.exports, "attributes", { enumerable: false, get: function() { return sablono.interpreter.attributes; } });
Object.defineProperty(module.exports, "update_state", { enumerable: false, get: function() { return sablono.interpreter.update_state; } });
Object.defineProperty(module.exports, "interpret", { enumerable: false, get: function() { return sablono.interpreter.interpret; } });
Object.defineProperty(module.exports, "wrapped_input", { enumerable: false, get: function() { return sablono.interpreter.wrapped_input; } });
Object.defineProperty(module.exports, "controlled_input_QMARK_", { enumerable: false, get: function() { return sablono.interpreter.controlled_input_QMARK_; } });
Object.defineProperty(module.exports, "wrap_form_element", { enumerable: false, get: function() { return sablono.interpreter.wrap_form_element; } });
Object.defineProperty(module.exports, "element", { enumerable: false, get: function() { return sablono.interpreter.element; } });
Object.defineProperty(module.exports, "IInterpreter", { enumerable: false, get: function() { return sablono.interpreter.IInterpreter; } });
Object.defineProperty(module.exports, "interpret_vec", { enumerable: false, get: function() { return sablono.interpreter.interpret_vec; } });
Object.defineProperty(module.exports, "wrapped_checked", { enumerable: false, get: function() { return sablono.interpreter.wrapped_checked; } });
Object.defineProperty(module.exports, "wrapped_select", { enumerable: false, get: function() { return sablono.interpreter.wrapped_select; } });
Object.defineProperty(module.exports, "element_class", { enumerable: false, get: function() { return sablono.interpreter.element_class; } });
Object.defineProperty(module.exports, "interpret_seq", { enumerable: false, get: function() { return sablono.interpreter.interpret_seq; } });
Object.defineProperty(module.exports, "create_element", { enumerable: false, get: function() { return sablono.interpreter.create_element; } });
Object.defineProperty(module.exports, "lazy_load_wrappers", { enumerable: false, get: function() { return sablono.interpreter.lazy_load_wrappers; } });
//# sourceMappingURL=sablono.interpreter.js.map
