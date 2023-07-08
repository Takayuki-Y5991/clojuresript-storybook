var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.impl.ioc_helpers.js");

goog.provide('cljs.core.async.impl.ioc_helpers');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480 = (function (f,meta29481){
this.f = f;
this.meta29481 = meta29481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29482,meta29481__$1){
var self__ = this;
var _29482__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480(self__.f,meta29481__$1));
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29482){
var self__ = this;
var _29482__$1 = this;
return self__.meta29481;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29481","meta29481",-1611547607,null)], null);
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29480");

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29480");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29480.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers29480 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers29480(f__$1,meta29481){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480(f__$1,meta29481));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__29505 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__29505.cljs$core$IFn$_invoke$arity$1 ? fexpr__29505.cljs$core$IFn$_invoke$arity$1(state) : fexpr__29505.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e29524){if((e29524 instanceof Object)){
var ex = e29524;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e29524;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5751__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_29531_29578 = state;
(statearr_29531_29578[(2)] = x);

(statearr_29531_29578[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5751__auto__)){
var cb = temp__5751__auto__;
var statearr_29532_29579 = state;
(statearr_29532_29579[(2)] = cljs.core.deref(cb));

(statearr_29532_29579[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5751__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_29538_29580 = state;
(statearr_29538_29580[(2)] = ret_val);

(statearr_29538_29580[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5751__auto__)){
var cb = temp__5751__auto__;
var statearr_29539_29581 = state;
(statearr_29539_29581[(2)] = cljs.core.deref(cb));

(statearr_29539_29581[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){
return null;
})));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});
Object.defineProperty(module.exports, "EXCEPTION_FRAMES", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async$impl$ioc_helpers29480", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers29480; } });
Object.defineProperty(module.exports, "STATE_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.STATE_IDX; } });
Object.defineProperty(module.exports, "t_cljs$core$async$impl$ioc_helpers29480", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29480; } });
Object.defineProperty(module.exports, "aset_object", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.aset_object; } });
Object.defineProperty(module.exports, "run_state_machine_wrapped", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped; } });
Object.defineProperty(module.exports, "FN_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.FN_IDX; } });
Object.defineProperty(module.exports, "aget_object", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.aget_object; } });
Object.defineProperty(module.exports, "return_chan", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.return_chan; } });
Object.defineProperty(module.exports, "BINDINGS_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.BINDINGS_IDX; } });
Object.defineProperty(module.exports, "CURRENT_EXCEPTION", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION; } });
Object.defineProperty(module.exports, "fn_handler", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.fn_handler; } });
Object.defineProperty(module.exports, "run_state_machine", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.run_state_machine; } });
Object.defineProperty(module.exports, "finished_QMARK_", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.finished_QMARK_; } });
Object.defineProperty(module.exports, "USER_START_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.USER_START_IDX; } });
Object.defineProperty(module.exports, "put_BANG_", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.put_BANG_; } });
Object.defineProperty(module.exports, "take_BANG_", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.take_BANG_; } });
Object.defineProperty(module.exports, "VALUE_IDX", { enumerable: false, get: function() { return cljs.core.async.impl.ioc_helpers.VALUE_IDX; } });
//# sourceMappingURL=cljs.core.async.impl.ioc_helpers.js.map
