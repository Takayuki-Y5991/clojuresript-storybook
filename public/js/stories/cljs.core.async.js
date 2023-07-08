var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.js");

goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29814 = arguments.length;
switch (G__29814) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29821 = (function (f,blockable,meta29822){
this.f = f;
this.blockable = blockable;
this.meta29822 = meta29822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29823,meta29822__$1){
var self__ = this;
var _29823__$1 = this;
return (new cljs.core.async.t_cljs$core$async29821(self__.f,self__.blockable,meta29822__$1));
}));

(cljs.core.async.t_cljs$core$async29821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29823){
var self__ = this;
var _29823__$1 = this;
return self__.meta29822;
}));

(cljs.core.async.t_cljs$core$async29821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29822","meta29822",-1664373406,null)], null);
}));

(cljs.core.async.t_cljs$core$async29821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29821");

(cljs.core.async.t_cljs$core$async29821.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29821.
 */
cljs.core.async.__GT_t_cljs$core$async29821 = (function cljs$core$async$__GT_t_cljs$core$async29821(f__$1,blockable__$1,meta29822){
return (new cljs.core.async.t_cljs$core$async29821(f__$1,blockable__$1,meta29822));
});

}

return (new cljs.core.async.t_cljs$core$async29821(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29846 = arguments.length;
switch (G__29846) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29850 = arguments.length;
switch (G__29850) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29860 = arguments.length;
switch (G__29860) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32831 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32831) : fn1.call(null,val_32831));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32831) : fn1.call(null,val_32831));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29879 = arguments.length;
switch (G__29879) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32837 = n;
var x_32838 = (0);
while(true){
if((x_32838 < n__4741__auto___32837)){
(a[x_32838] = x_32838);

var G__32839 = (x_32838 + (1));
x_32838 = G__32839;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29900 = (function (flag,meta29901){
this.flag = flag;
this.meta29901 = meta29901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29902,meta29901__$1){
var self__ = this;
var _29902__$1 = this;
return (new cljs.core.async.t_cljs$core$async29900(self__.flag,meta29901__$1));
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29902){
var self__ = this;
var _29902__$1 = this;
return self__.meta29901;
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29901","meta29901",-2083029093,null)], null);
}));

(cljs.core.async.t_cljs$core$async29900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29900");

(cljs.core.async.t_cljs$core$async29900.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29900.
 */
cljs.core.async.__GT_t_cljs$core$async29900 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29900(flag__$1,meta29901){
return (new cljs.core.async.t_cljs$core$async29900(flag__$1,meta29901));
});

}

return (new cljs.core.async.t_cljs$core$async29900(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29923 = (function (flag,cb,meta29924){
this.flag = flag;
this.cb = cb;
this.meta29924 = meta29924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29925,meta29924__$1){
var self__ = this;
var _29925__$1 = this;
return (new cljs.core.async.t_cljs$core$async29923(self__.flag,self__.cb,meta29924__$1));
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29925){
var self__ = this;
var _29925__$1 = this;
return self__.meta29924;
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29924","meta29924",607062236,null)], null);
}));

(cljs.core.async.t_cljs$core$async29923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29923");

(cljs.core.async.t_cljs$core$async29923.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29923.
 */
cljs.core.async.__GT_t_cljs$core$async29923 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29923(flag__$1,cb__$1,meta29924){
return (new cljs.core.async.t_cljs$core$async29923(flag__$1,cb__$1,meta29924));
});

}

return (new cljs.core.async.t_cljs$core$async29923(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29936_SHARP_){
var G__29942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29936_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29942) : fret.call(null,G__29942));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29937_SHARP_){
var G__29943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29937_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29943) : fret.call(null,G__29943));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32845 = (i + (1));
i = G__32845;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32846 = arguments.length;
var i__4865__auto___32847 = (0);
while(true){
if((i__4865__auto___32847 < len__4864__auto___32846)){
args__4870__auto__.push((arguments[i__4865__auto___32847]));

var G__32848 = (i__4865__auto___32847 + (1));
i__4865__auto___32847 = G__32848;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29946){
var map__29948 = p__29946;
var map__29948__$1 = cljs.core.__destructure_map(map__29948);
var opts = map__29948__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29944){
var G__29945 = cljs.core.first(seq29944);
var seq29944__$1 = cljs.core.next(seq29944);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29945,seq29944__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29973 = arguments.length;
switch (G__29973) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29736__auto___32852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30042){
var state_val_30043 = (state_30042[(1)]);
if((state_val_30043 === (7))){
var inst_30036 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30061_32853 = state_30042__$1;
(statearr_30061_32853[(2)] = inst_30036);

(statearr_30061_32853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (1))){
var state_30042__$1 = state_30042;
var statearr_30064_32854 = state_30042__$1;
(statearr_30064_32854[(2)] = null);

(statearr_30064_32854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (4))){
var inst_30013 = (state_30042[(7)]);
var inst_30013__$1 = (state_30042[(2)]);
var inst_30019 = (inst_30013__$1 == null);
var state_30042__$1 = (function (){var statearr_30074 = state_30042;
(statearr_30074[(7)] = inst_30013__$1);

return statearr_30074;
})();
if(cljs.core.truth_(inst_30019)){
var statearr_30079_32855 = state_30042__$1;
(statearr_30079_32855[(1)] = (5));

} else {
var statearr_30082_32856 = state_30042__$1;
(statearr_30082_32856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (13))){
var state_30042__$1 = state_30042;
var statearr_30101_32857 = state_30042__$1;
(statearr_30101_32857[(2)] = null);

(statearr_30101_32857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (6))){
var inst_30013 = (state_30042[(7)]);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30042__$1,(11),to,inst_30013);
} else {
if((state_val_30043 === (3))){
var inst_30040 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30042__$1,inst_30040);
} else {
if((state_val_30043 === (12))){
var state_30042__$1 = state_30042;
var statearr_30122_32858 = state_30042__$1;
(statearr_30122_32858[(2)] = null);

(statearr_30122_32858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (2))){
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30042__$1,(4),from);
} else {
if((state_val_30043 === (11))){
var inst_30029 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
if(cljs.core.truth_(inst_30029)){
var statearr_30127_32860 = state_30042__$1;
(statearr_30127_32860[(1)] = (12));

} else {
var statearr_30129_32862 = state_30042__$1;
(statearr_30129_32862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (9))){
var state_30042__$1 = state_30042;
var statearr_30133_32863 = state_30042__$1;
(statearr_30133_32863[(2)] = null);

(statearr_30133_32863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (5))){
var state_30042__$1 = state_30042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30135_32864 = state_30042__$1;
(statearr_30135_32864[(1)] = (8));

} else {
var statearr_30136_32865 = state_30042__$1;
(statearr_30136_32865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (14))){
var inst_30034 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30138_32866 = state_30042__$1;
(statearr_30138_32866[(2)] = inst_30034);

(statearr_30138_32866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (10))){
var inst_30026 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30146_32870 = state_30042__$1;
(statearr_30146_32870[(2)] = inst_30026);

(statearr_30146_32870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (8))){
var inst_30022 = cljs.core.async.close_BANG_(to);
var state_30042__$1 = state_30042;
var statearr_30147_32873 = state_30042__$1;
(statearr_30147_32873[(2)] = inst_30022);

(statearr_30147_32873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_30152 = [null,null,null,null,null,null,null,null];
(statearr_30152[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_30152[(1)] = (1));

return statearr_30152;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_30042){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30042);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30161){var ex__29458__auto__ = e30161;
var statearr_30162_32874 = state_30042;
(statearr_30162_32874[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30042[(4)]))){
var statearr_30165_32875 = state_30042;
(statearr_30165_32875[(1)] = cljs.core.first((state_30042[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32879 = state_30042;
state_30042 = G__32879;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_30042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_30042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30168 = f__29737__auto__();
(statearr_30168[(6)] = c__29736__auto___32852);

return statearr_30168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30180){
var vec__30181 = p__30180;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30181,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30181,(1),null);
var job = vec__30181;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29736__auto___32883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30188){
var state_val_30189 = (state_30188[(1)]);
if((state_val_30189 === (1))){
var state_30188__$1 = state_30188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30188__$1,(2),res,v);
} else {
if((state_val_30189 === (2))){
var inst_30185 = (state_30188[(2)]);
var inst_30186 = cljs.core.async.close_BANG_(res);
var state_30188__$1 = (function (){var statearr_30190 = state_30188;
(statearr_30190[(7)] = inst_30185);

return statearr_30190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30188__$1,inst_30186);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0 = (function (){
var statearr_30191 = [null,null,null,null,null,null,null,null];
(statearr_30191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__);

(statearr_30191[(1)] = (1));

return statearr_30191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1 = (function (state_30188){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30188);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30192){var ex__29458__auto__ = e30192;
var statearr_30193_32884 = state_30188;
(statearr_30193_32884[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30188[(4)]))){
var statearr_30195_32885 = state_30188;
(statearr_30195_32885[(1)] = cljs.core.first((state_30188[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32886 = state_30188;
state_30188 = G__32886;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = function(state_30188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1.call(this,state_30188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30196 = f__29737__auto__();
(statearr_30196[(6)] = c__29736__auto___32883);

return statearr_30196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30197){
var vec__30199 = p__30197;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30199,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30199,(1),null);
var job = vec__30199;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___32891 = n;
var __32892 = (0);
while(true){
if((__32892 < n__4741__auto___32891)){
var G__30207_32893 = type;
var G__30207_32894__$1 = (((G__30207_32893 instanceof cljs.core.Keyword))?G__30207_32893.fqn:null);
switch (G__30207_32894__$1) {
case "compute":
var c__29736__auto___32923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32892,c__29736__auto___32923,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async){
return (function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = ((function (__32892,c__29736__auto___32923,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async){
return (function (state_30223){
var state_val_30224 = (state_30223[(1)]);
if((state_val_30224 === (1))){
var state_30223__$1 = state_30223;
var statearr_30225_32931 = state_30223__$1;
(statearr_30225_32931[(2)] = null);

(statearr_30225_32931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (2))){
var state_30223__$1 = state_30223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30223__$1,(4),jobs);
} else {
if((state_val_30224 === (3))){
var inst_30221 = (state_30223[(2)]);
var state_30223__$1 = state_30223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30223__$1,inst_30221);
} else {
if((state_val_30224 === (4))){
var inst_30211 = (state_30223[(2)]);
var inst_30213 = process(inst_30211);
var state_30223__$1 = state_30223;
if(cljs.core.truth_(inst_30213)){
var statearr_30226_32935 = state_30223__$1;
(statearr_30226_32935[(1)] = (5));

} else {
var statearr_30227_32937 = state_30223__$1;
(statearr_30227_32937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (5))){
var state_30223__$1 = state_30223;
var statearr_30228_32938 = state_30223__$1;
(statearr_30228_32938[(2)] = null);

(statearr_30228_32938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (6))){
var state_30223__$1 = state_30223;
var statearr_30229_32939 = state_30223__$1;
(statearr_30229_32939[(2)] = null);

(statearr_30229_32939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30224 === (7))){
var inst_30219 = (state_30223[(2)]);
var state_30223__$1 = state_30223;
var statearr_30230_32941 = state_30223__$1;
(statearr_30230_32941[(2)] = inst_30219);

(statearr_30230_32941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32892,c__29736__auto___32923,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async))
;
return ((function (__32892,switch__29453__auto__,c__29736__auto___32923,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0 = (function (){
var statearr_30231 = [null,null,null,null,null,null,null];
(statearr_30231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__);

(statearr_30231[(1)] = (1));

return statearr_30231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1 = (function (state_30223){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30223);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30232){var ex__29458__auto__ = e30232;
var statearr_30233_32945 = state_30223;
(statearr_30233_32945[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30223[(4)]))){
var statearr_30234_32946 = state_30223;
(statearr_30234_32946[(1)] = cljs.core.first((state_30223[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32948 = state_30223;
state_30223 = G__32948;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = function(state_30223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1.call(this,state_30223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__;
})()
;})(__32892,switch__29453__auto__,c__29736__auto___32923,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async))
})();
var state__29738__auto__ = (function (){var statearr_30235 = f__29737__auto__();
(statearr_30235[(6)] = c__29736__auto___32923);

return statearr_30235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
});})(__32892,c__29736__auto___32923,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async))
);


break;
case "async":
var c__29736__auto___32950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32892,c__29736__auto___32950,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async){
return (function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = ((function (__32892,c__29736__auto___32950,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async){
return (function (state_30248){
var state_val_30249 = (state_30248[(1)]);
if((state_val_30249 === (1))){
var state_30248__$1 = state_30248;
var statearr_30250_32954 = state_30248__$1;
(statearr_30250_32954[(2)] = null);

(statearr_30250_32954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (2))){
var state_30248__$1 = state_30248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30248__$1,(4),jobs);
} else {
if((state_val_30249 === (3))){
var inst_30246 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30248__$1,inst_30246);
} else {
if((state_val_30249 === (4))){
var inst_30238 = (state_30248[(2)]);
var inst_30239 = async(inst_30238);
var state_30248__$1 = state_30248;
if(cljs.core.truth_(inst_30239)){
var statearr_30255_32956 = state_30248__$1;
(statearr_30255_32956[(1)] = (5));

} else {
var statearr_30256_32957 = state_30248__$1;
(statearr_30256_32957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (5))){
var state_30248__$1 = state_30248;
var statearr_30257_32960 = state_30248__$1;
(statearr_30257_32960[(2)] = null);

(statearr_30257_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (6))){
var state_30248__$1 = state_30248;
var statearr_30258_32962 = state_30248__$1;
(statearr_30258_32962[(2)] = null);

(statearr_30258_32962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (7))){
var inst_30244 = (state_30248[(2)]);
var state_30248__$1 = state_30248;
var statearr_30259_32963 = state_30248__$1;
(statearr_30259_32963[(2)] = inst_30244);

(statearr_30259_32963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32892,c__29736__auto___32950,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async))
;
return ((function (__32892,switch__29453__auto__,c__29736__auto___32950,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0 = (function (){
var statearr_30261 = [null,null,null,null,null,null,null];
(statearr_30261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__);

(statearr_30261[(1)] = (1));

return statearr_30261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1 = (function (state_30248){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30248);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30263){var ex__29458__auto__ = e30263;
var statearr_30264_32967 = state_30248;
(statearr_30264_32967[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30248[(4)]))){
var statearr_30266_32969 = state_30248;
(statearr_30266_32969[(1)] = cljs.core.first((state_30248[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32970 = state_30248;
state_30248 = G__32970;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = function(state_30248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1.call(this,state_30248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__;
})()
;})(__32892,switch__29453__auto__,c__29736__auto___32950,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async))
})();
var state__29738__auto__ = (function (){var statearr_30267 = f__29737__auto__();
(statearr_30267[(6)] = c__29736__auto___32950);

return statearr_30267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
});})(__32892,c__29736__auto___32950,G__30207_32893,G__30207_32894__$1,n__4741__auto___32891,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30207_32894__$1)].join('')));

}

var G__32972 = (__32892 + (1));
__32892 = G__32972;
continue;
} else {
}
break;
}

var c__29736__auto___32974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30298){
var state_val_30299 = (state_30298[(1)]);
if((state_val_30299 === (7))){
var inst_30294 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30312_32977 = state_30298__$1;
(statearr_30312_32977[(2)] = inst_30294);

(statearr_30312_32977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (1))){
var state_30298__$1 = state_30298;
var statearr_30316_32979 = state_30298__$1;
(statearr_30316_32979[(2)] = null);

(statearr_30316_32979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (4))){
var inst_30270 = (state_30298[(7)]);
var inst_30270__$1 = (state_30298[(2)]);
var inst_30271 = (inst_30270__$1 == null);
var state_30298__$1 = (function (){var statearr_30317 = state_30298;
(statearr_30317[(7)] = inst_30270__$1);

return statearr_30317;
})();
if(cljs.core.truth_(inst_30271)){
var statearr_30322_32982 = state_30298__$1;
(statearr_30322_32982[(1)] = (5));

} else {
var statearr_30323_32983 = state_30298__$1;
(statearr_30323_32983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (6))){
var inst_30275 = (state_30298[(8)]);
var inst_30270 = (state_30298[(7)]);
var inst_30275__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30286 = [inst_30270,inst_30275__$1];
var inst_30287 = (new cljs.core.PersistentVector(null,2,(5),inst_30285,inst_30286,null));
var state_30298__$1 = (function (){var statearr_30330 = state_30298;
(statearr_30330[(8)] = inst_30275__$1);

return statearr_30330;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30298__$1,(8),jobs,inst_30287);
} else {
if((state_val_30299 === (3))){
var inst_30296 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30298__$1,inst_30296);
} else {
if((state_val_30299 === (2))){
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30298__$1,(4),from);
} else {
if((state_val_30299 === (9))){
var inst_30291 = (state_30298[(2)]);
var state_30298__$1 = (function (){var statearr_30331 = state_30298;
(statearr_30331[(9)] = inst_30291);

return statearr_30331;
})();
var statearr_30336_32984 = state_30298__$1;
(statearr_30336_32984[(2)] = null);

(statearr_30336_32984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (5))){
var inst_30273 = cljs.core.async.close_BANG_(jobs);
var state_30298__$1 = state_30298;
var statearr_30337_32985 = state_30298__$1;
(statearr_30337_32985[(2)] = inst_30273);

(statearr_30337_32985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (8))){
var inst_30275 = (state_30298[(8)]);
var inst_30289 = (state_30298[(2)]);
var state_30298__$1 = (function (){var statearr_30338 = state_30298;
(statearr_30338[(10)] = inst_30289);

return statearr_30338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30298__$1,(9),results,inst_30275);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0 = (function (){
var statearr_30339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__);

(statearr_30339[(1)] = (1));

return statearr_30339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1 = (function (state_30298){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30298);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30340){var ex__29458__auto__ = e30340;
var statearr_30342_32988 = state_30298;
(statearr_30342_32988[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30298[(4)]))){
var statearr_30344_32989 = state_30298;
(statearr_30344_32989[(1)] = cljs.core.first((state_30298[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32990 = state_30298;
state_30298 = G__32990;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = function(state_30298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1.call(this,state_30298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30345 = f__29737__auto__();
(statearr_30345[(6)] = c__29736__auto___32974);

return statearr_30345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30384){
var state_val_30385 = (state_30384[(1)]);
if((state_val_30385 === (7))){
var inst_30379 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30386_32991 = state_30384__$1;
(statearr_30386_32991[(2)] = inst_30379);

(statearr_30386_32991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (20))){
var state_30384__$1 = state_30384;
var statearr_30387_32992 = state_30384__$1;
(statearr_30387_32992[(2)] = null);

(statearr_30387_32992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (1))){
var state_30384__$1 = state_30384;
var statearr_30388_32993 = state_30384__$1;
(statearr_30388_32993[(2)] = null);

(statearr_30388_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (4))){
var inst_30348 = (state_30384[(7)]);
var inst_30348__$1 = (state_30384[(2)]);
var inst_30349 = (inst_30348__$1 == null);
var state_30384__$1 = (function (){var statearr_30389 = state_30384;
(statearr_30389[(7)] = inst_30348__$1);

return statearr_30389;
})();
if(cljs.core.truth_(inst_30349)){
var statearr_30390_32995 = state_30384__$1;
(statearr_30390_32995[(1)] = (5));

} else {
var statearr_30391_32996 = state_30384__$1;
(statearr_30391_32996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (15))){
var inst_30361 = (state_30384[(8)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30384__$1,(18),to,inst_30361);
} else {
if((state_val_30385 === (21))){
var inst_30374 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30392_32998 = state_30384__$1;
(statearr_30392_32998[(2)] = inst_30374);

(statearr_30392_32998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (13))){
var inst_30376 = (state_30384[(2)]);
var state_30384__$1 = (function (){var statearr_30393 = state_30384;
(statearr_30393[(9)] = inst_30376);

return statearr_30393;
})();
var statearr_30394_33000 = state_30384__$1;
(statearr_30394_33000[(2)] = null);

(statearr_30394_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (6))){
var inst_30348 = (state_30384[(7)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30384__$1,(11),inst_30348);
} else {
if((state_val_30385 === (17))){
var inst_30369 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
if(cljs.core.truth_(inst_30369)){
var statearr_30395_33001 = state_30384__$1;
(statearr_30395_33001[(1)] = (19));

} else {
var statearr_30396_33002 = state_30384__$1;
(statearr_30396_33002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (3))){
var inst_30381 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30384__$1,inst_30381);
} else {
if((state_val_30385 === (12))){
var inst_30358 = (state_30384[(10)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30384__$1,(14),inst_30358);
} else {
if((state_val_30385 === (2))){
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30384__$1,(4),results);
} else {
if((state_val_30385 === (19))){
var state_30384__$1 = state_30384;
var statearr_30397_33003 = state_30384__$1;
(statearr_30397_33003[(2)] = null);

(statearr_30397_33003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (11))){
var inst_30358 = (state_30384[(2)]);
var state_30384__$1 = (function (){var statearr_30398 = state_30384;
(statearr_30398[(10)] = inst_30358);

return statearr_30398;
})();
var statearr_30399_33004 = state_30384__$1;
(statearr_30399_33004[(2)] = null);

(statearr_30399_33004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (9))){
var state_30384__$1 = state_30384;
var statearr_30400_33005 = state_30384__$1;
(statearr_30400_33005[(2)] = null);

(statearr_30400_33005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (5))){
var state_30384__$1 = state_30384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30401_33006 = state_30384__$1;
(statearr_30401_33006[(1)] = (8));

} else {
var statearr_30406_33007 = state_30384__$1;
(statearr_30406_33007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (14))){
var inst_30363 = (state_30384[(11)]);
var inst_30361 = (state_30384[(8)]);
var inst_30361__$1 = (state_30384[(2)]);
var inst_30362 = (inst_30361__$1 == null);
var inst_30363__$1 = cljs.core.not(inst_30362);
var state_30384__$1 = (function (){var statearr_30407 = state_30384;
(statearr_30407[(11)] = inst_30363__$1);

(statearr_30407[(8)] = inst_30361__$1);

return statearr_30407;
})();
if(inst_30363__$1){
var statearr_30408_33008 = state_30384__$1;
(statearr_30408_33008[(1)] = (15));

} else {
var statearr_30412_33009 = state_30384__$1;
(statearr_30412_33009[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (16))){
var inst_30363 = (state_30384[(11)]);
var state_30384__$1 = state_30384;
var statearr_30413_33010 = state_30384__$1;
(statearr_30413_33010[(2)] = inst_30363);

(statearr_30413_33010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (10))){
var inst_30355 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30414_33011 = state_30384__$1;
(statearr_30414_33011[(2)] = inst_30355);

(statearr_30414_33011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (18))){
var inst_30366 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30419_33012 = state_30384__$1;
(statearr_30419_33012[(2)] = inst_30366);

(statearr_30419_33012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (8))){
var inst_30352 = cljs.core.async.close_BANG_(to);
var state_30384__$1 = state_30384;
var statearr_30423_33013 = state_30384__$1;
(statearr_30423_33013[(2)] = inst_30352);

(statearr_30423_33013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0 = (function (){
var statearr_30427 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__);

(statearr_30427[(1)] = (1));

return statearr_30427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1 = (function (state_30384){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30384);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30428){var ex__29458__auto__ = e30428;
var statearr_30429_33014 = state_30384;
(statearr_30429_33014[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30384[(4)]))){
var statearr_30433_33015 = state_30384;
(statearr_30433_33015[(1)] = cljs.core.first((state_30384[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33017 = state_30384;
state_30384 = G__33017;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__ = function(state_30384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1.call(this,state_30384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30437 = f__29737__auto__();
(statearr_30437[(6)] = c__29736__auto__);

return statearr_30437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30440 = arguments.length;
switch (G__30440) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30442 = arguments.length;
switch (G__30442) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30444 = arguments.length;
switch (G__30444) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29736__auto___33025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30501){
var state_val_30502 = (state_30501[(1)]);
if((state_val_30502 === (7))){
var inst_30496 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30510_33027 = state_30501__$1;
(statearr_30510_33027[(2)] = inst_30496);

(statearr_30510_33027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (1))){
var state_30501__$1 = state_30501;
var statearr_30522_33028 = state_30501__$1;
(statearr_30522_33028[(2)] = null);

(statearr_30522_33028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (4))){
var inst_30474 = (state_30501[(7)]);
var inst_30474__$1 = (state_30501[(2)]);
var inst_30475 = (inst_30474__$1 == null);
var state_30501__$1 = (function (){var statearr_30529 = state_30501;
(statearr_30529[(7)] = inst_30474__$1);

return statearr_30529;
})();
if(cljs.core.truth_(inst_30475)){
var statearr_30530_33029 = state_30501__$1;
(statearr_30530_33029[(1)] = (5));

} else {
var statearr_30537_33030 = state_30501__$1;
(statearr_30537_33030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (13))){
var state_30501__$1 = state_30501;
var statearr_30544_33032 = state_30501__$1;
(statearr_30544_33032[(2)] = null);

(statearr_30544_33032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (6))){
var inst_30474 = (state_30501[(7)]);
var inst_30480 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30474) : p.call(null,inst_30474));
var state_30501__$1 = state_30501;
if(cljs.core.truth_(inst_30480)){
var statearr_30556_33033 = state_30501__$1;
(statearr_30556_33033[(1)] = (9));

} else {
var statearr_30559_33034 = state_30501__$1;
(statearr_30559_33034[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (3))){
var inst_30498 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30501__$1,inst_30498);
} else {
if((state_val_30502 === (12))){
var state_30501__$1 = state_30501;
var statearr_30577_33037 = state_30501__$1;
(statearr_30577_33037[(2)] = null);

(statearr_30577_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (2))){
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30501__$1,(4),ch);
} else {
if((state_val_30502 === (11))){
var inst_30474 = (state_30501[(7)]);
var inst_30485 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30501__$1,(8),inst_30485,inst_30474);
} else {
if((state_val_30502 === (9))){
var state_30501__$1 = state_30501;
var statearr_30585_33038 = state_30501__$1;
(statearr_30585_33038[(2)] = tc);

(statearr_30585_33038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (5))){
var inst_30477 = cljs.core.async.close_BANG_(tc);
var inst_30478 = cljs.core.async.close_BANG_(fc);
var state_30501__$1 = (function (){var statearr_30589 = state_30501;
(statearr_30589[(8)] = inst_30477);

return statearr_30589;
})();
var statearr_30591_33039 = state_30501__$1;
(statearr_30591_33039[(2)] = inst_30478);

(statearr_30591_33039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (14))){
var inst_30494 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30596_33040 = state_30501__$1;
(statearr_30596_33040[(2)] = inst_30494);

(statearr_30596_33040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (10))){
var state_30501__$1 = state_30501;
var statearr_30599_33041 = state_30501__$1;
(statearr_30599_33041[(2)] = fc);

(statearr_30599_33041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (8))){
var inst_30489 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
if(cljs.core.truth_(inst_30489)){
var statearr_30602_33044 = state_30501__$1;
(statearr_30602_33044[(1)] = (12));

} else {
var statearr_30604_33045 = state_30501__$1;
(statearr_30604_33045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_30605 = [null,null,null,null,null,null,null,null,null];
(statearr_30605[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_30605[(1)] = (1));

return statearr_30605;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_30501){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30501);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30611){var ex__29458__auto__ = e30611;
var statearr_30612_33049 = state_30501;
(statearr_30612_33049[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30501[(4)]))){
var statearr_30613_33050 = state_30501;
(statearr_30613_33050[(1)] = cljs.core.first((state_30501[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33051 = state_30501;
state_30501 = G__33051;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_30501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_30501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30617 = f__29737__auto__();
(statearr_30617[(6)] = c__29736__auto___33025);

return statearr_30617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30662){
var state_val_30663 = (state_30662[(1)]);
if((state_val_30663 === (7))){
var inst_30649 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30668_33052 = state_30662__$1;
(statearr_30668_33052[(2)] = inst_30649);

(statearr_30668_33052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (1))){
var inst_30622 = init;
var inst_30623 = inst_30622;
var state_30662__$1 = (function (){var statearr_30669 = state_30662;
(statearr_30669[(7)] = inst_30623);

return statearr_30669;
})();
var statearr_30670_33055 = state_30662__$1;
(statearr_30670_33055[(2)] = null);

(statearr_30670_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (4))){
var inst_30630 = (state_30662[(8)]);
var inst_30630__$1 = (state_30662[(2)]);
var inst_30634 = (inst_30630__$1 == null);
var state_30662__$1 = (function (){var statearr_30671 = state_30662;
(statearr_30671[(8)] = inst_30630__$1);

return statearr_30671;
})();
if(cljs.core.truth_(inst_30634)){
var statearr_30672_33058 = state_30662__$1;
(statearr_30672_33058[(1)] = (5));

} else {
var statearr_30676_33059 = state_30662__$1;
(statearr_30676_33059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (6))){
var inst_30623 = (state_30662[(7)]);
var inst_30637 = (state_30662[(9)]);
var inst_30630 = (state_30662[(8)]);
var inst_30637__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30623,inst_30630) : f.call(null,inst_30623,inst_30630));
var inst_30638 = cljs.core.reduced_QMARK_(inst_30637__$1);
var state_30662__$1 = (function (){var statearr_30677 = state_30662;
(statearr_30677[(9)] = inst_30637__$1);

return statearr_30677;
})();
if(inst_30638){
var statearr_30678_33060 = state_30662__$1;
(statearr_30678_33060[(1)] = (8));

} else {
var statearr_30679_33061 = state_30662__$1;
(statearr_30679_33061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (3))){
var inst_30651 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30662__$1,inst_30651);
} else {
if((state_val_30663 === (2))){
var state_30662__$1 = state_30662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30662__$1,(4),ch);
} else {
if((state_val_30663 === (9))){
var inst_30637 = (state_30662[(9)]);
var inst_30623 = inst_30637;
var state_30662__$1 = (function (){var statearr_30683 = state_30662;
(statearr_30683[(7)] = inst_30623);

return statearr_30683;
})();
var statearr_30684_33062 = state_30662__$1;
(statearr_30684_33062[(2)] = null);

(statearr_30684_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (5))){
var inst_30623 = (state_30662[(7)]);
var state_30662__$1 = state_30662;
var statearr_30685_33066 = state_30662__$1;
(statearr_30685_33066[(2)] = inst_30623);

(statearr_30685_33066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (10))){
var inst_30647 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30686_33067 = state_30662__$1;
(statearr_30686_33067[(2)] = inst_30647);

(statearr_30686_33067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (8))){
var inst_30637 = (state_30662[(9)]);
var inst_30643 = cljs.core.deref(inst_30637);
var state_30662__$1 = state_30662;
var statearr_30687_33069 = state_30662__$1;
(statearr_30687_33069[(2)] = inst_30643);

(statearr_30687_33069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29455__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29455__auto____0 = (function (){
var statearr_30688 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30688[(0)] = cljs$core$async$reduce_$_state_machine__29455__auto__);

(statearr_30688[(1)] = (1));

return statearr_30688;
});
var cljs$core$async$reduce_$_state_machine__29455__auto____1 = (function (state_30662){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30662);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30689){var ex__29458__auto__ = e30689;
var statearr_30690_33070 = state_30662;
(statearr_30690_33070[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30662[(4)]))){
var statearr_30691_33071 = state_30662;
(statearr_30691_33071[(1)] = cljs.core.first((state_30662[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33073 = state_30662;
state_30662 = G__33073;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29455__auto__ = function(state_30662){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29455__auto____1.call(this,state_30662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29455__auto____0;
cljs$core$async$reduce_$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29455__auto____1;
return cljs$core$async$reduce_$_state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30693 = f__29737__auto__();
(statearr_30693[(6)] = c__29736__auto__);

return statearr_30693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30701){
var state_val_30702 = (state_30701[(1)]);
if((state_val_30702 === (1))){
var inst_30696 = cljs.core.async.reduce(f__$1,init,ch);
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30701__$1,(2),inst_30696);
} else {
if((state_val_30702 === (2))){
var inst_30698 = (state_30701[(2)]);
var inst_30699 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30698) : f__$1.call(null,inst_30698));
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30701__$1,inst_30699);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29455__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29455__auto____0 = (function (){
var statearr_30703 = [null,null,null,null,null,null,null];
(statearr_30703[(0)] = cljs$core$async$transduce_$_state_machine__29455__auto__);

(statearr_30703[(1)] = (1));

return statearr_30703;
});
var cljs$core$async$transduce_$_state_machine__29455__auto____1 = (function (state_30701){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30701);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30704){var ex__29458__auto__ = e30704;
var statearr_30705_33075 = state_30701;
(statearr_30705_33075[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30701[(4)]))){
var statearr_30706_33076 = state_30701;
(statearr_30706_33076[(1)] = cljs.core.first((state_30701[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33077 = state_30701;
state_30701 = G__33077;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29455__auto__ = function(state_30701){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29455__auto____1.call(this,state_30701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29455__auto____0;
cljs$core$async$transduce_$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29455__auto____1;
return cljs$core$async$transduce_$_state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30707 = f__29737__auto__();
(statearr_30707[(6)] = c__29736__auto__);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30710 = arguments.length;
switch (G__30710) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30740){
var state_val_30741 = (state_30740[(1)]);
if((state_val_30741 === (7))){
var inst_30720 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30742_33082 = state_30740__$1;
(statearr_30742_33082[(2)] = inst_30720);

(statearr_30742_33082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (1))){
var inst_30714 = cljs.core.seq(coll);
var inst_30715 = inst_30714;
var state_30740__$1 = (function (){var statearr_30743 = state_30740;
(statearr_30743[(7)] = inst_30715);

return statearr_30743;
})();
var statearr_30744_33085 = state_30740__$1;
(statearr_30744_33085[(2)] = null);

(statearr_30744_33085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (4))){
var inst_30715 = (state_30740[(7)]);
var inst_30718 = cljs.core.first(inst_30715);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30740__$1,(7),ch,inst_30718);
} else {
if((state_val_30741 === (13))){
var inst_30733 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30745_33090 = state_30740__$1;
(statearr_30745_33090[(2)] = inst_30733);

(statearr_30745_33090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (6))){
var inst_30723 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
if(cljs.core.truth_(inst_30723)){
var statearr_30750_33099 = state_30740__$1;
(statearr_30750_33099[(1)] = (8));

} else {
var statearr_30751_33103 = state_30740__$1;
(statearr_30751_33103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (3))){
var inst_30737 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30740__$1,inst_30737);
} else {
if((state_val_30741 === (12))){
var state_30740__$1 = state_30740;
var statearr_30756_33106 = state_30740__$1;
(statearr_30756_33106[(2)] = null);

(statearr_30756_33106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (2))){
var inst_30715 = (state_30740[(7)]);
var state_30740__$1 = state_30740;
if(cljs.core.truth_(inst_30715)){
var statearr_30757_33114 = state_30740__$1;
(statearr_30757_33114[(1)] = (4));

} else {
var statearr_30758_33115 = state_30740__$1;
(statearr_30758_33115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (11))){
var inst_30730 = cljs.core.async.close_BANG_(ch);
var state_30740__$1 = state_30740;
var statearr_30759_33119 = state_30740__$1;
(statearr_30759_33119[(2)] = inst_30730);

(statearr_30759_33119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (9))){
var state_30740__$1 = state_30740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30764_33121 = state_30740__$1;
(statearr_30764_33121[(1)] = (11));

} else {
var statearr_30765_33122 = state_30740__$1;
(statearr_30765_33122[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (5))){
var inst_30715 = (state_30740[(7)]);
var state_30740__$1 = state_30740;
var statearr_30766_33128 = state_30740__$1;
(statearr_30766_33128[(2)] = inst_30715);

(statearr_30766_33128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (10))){
var inst_30735 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30767_33132 = state_30740__$1;
(statearr_30767_33132[(2)] = inst_30735);

(statearr_30767_33132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (8))){
var inst_30715 = (state_30740[(7)]);
var inst_30725 = cljs.core.next(inst_30715);
var inst_30715__$1 = inst_30725;
var state_30740__$1 = (function (){var statearr_30768 = state_30740;
(statearr_30768[(7)] = inst_30715__$1);

return statearr_30768;
})();
var statearr_30769_33137 = state_30740__$1;
(statearr_30769_33137[(2)] = null);

(statearr_30769_33137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_30770 = [null,null,null,null,null,null,null,null];
(statearr_30770[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_30770[(1)] = (1));

return statearr_30770;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_30740){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30740);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e30771){var ex__29458__auto__ = e30771;
var statearr_30772_33156 = state_30740;
(statearr_30772_33156[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30740[(4)]))){
var statearr_30773_33161 = state_30740;
(statearr_30773_33161[(1)] = cljs.core.first((state_30740[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_30740;
state_30740 = G__33166;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_30740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_30740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30774 = f__29737__auto__();
(statearr_30774[(6)] = c__29736__auto__);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30776 = arguments.length;
switch (G__30776) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33186 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33186(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33190 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33190(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33197 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33197(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33203 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33203(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30800 = (function (ch,cs,meta30801){
this.ch = ch;
this.cs = cs;
this.meta30801 = meta30801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30802,meta30801__$1){
var self__ = this;
var _30802__$1 = this;
return (new cljs.core.async.t_cljs$core$async30800(self__.ch,self__.cs,meta30801__$1));
}));

(cljs.core.async.t_cljs$core$async30800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30802){
var self__ = this;
var _30802__$1 = this;
return self__.meta30801;
}));

(cljs.core.async.t_cljs$core$async30800.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30800.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30800.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30800.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30800.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30801","meta30801",555899036,null)], null);
}));

(cljs.core.async.t_cljs$core$async30800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30800");

(cljs.core.async.t_cljs$core$async30800.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30800.
 */
cljs.core.async.__GT_t_cljs$core$async30800 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30800(ch__$1,cs__$1,meta30801){
return (new cljs.core.async.t_cljs$core$async30800(ch__$1,cs__$1,meta30801));
});

}

return (new cljs.core.async.t_cljs$core$async30800(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29736__auto___33230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_30996){
var state_val_30997 = (state_30996[(1)]);
if((state_val_30997 === (7))){
var inst_30987 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31033_33236 = state_30996__$1;
(statearr_31033_33236[(2)] = inst_30987);

(statearr_31033_33236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (20))){
var inst_30864 = (state_30996[(7)]);
var inst_30876 = cljs.core.first(inst_30864);
var inst_30877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30876,(0),null);
var inst_30880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30876,(1),null);
var state_30996__$1 = (function (){var statearr_31054 = state_30996;
(statearr_31054[(8)] = inst_30877);

return statearr_31054;
})();
if(cljs.core.truth_(inst_30880)){
var statearr_31055_33252 = state_30996__$1;
(statearr_31055_33252[(1)] = (22));

} else {
var statearr_31056_33253 = state_30996__$1;
(statearr_31056_33253[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (27))){
var inst_30915 = (state_30996[(9)]);
var inst_30830 = (state_30996[(10)]);
var inst_30920 = (state_30996[(11)]);
var inst_30913 = (state_30996[(12)]);
var inst_30920__$1 = cljs.core._nth(inst_30913,inst_30915);
var inst_30921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30920__$1,inst_30830,done);
var state_30996__$1 = (function (){var statearr_31057 = state_30996;
(statearr_31057[(11)] = inst_30920__$1);

return statearr_31057;
})();
if(cljs.core.truth_(inst_30921)){
var statearr_31058_33271 = state_30996__$1;
(statearr_31058_33271[(1)] = (30));

} else {
var statearr_31060_33275 = state_30996__$1;
(statearr_31060_33275[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (1))){
var state_30996__$1 = state_30996;
var statearr_31061_33277 = state_30996__$1;
(statearr_31061_33277[(2)] = null);

(statearr_31061_33277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (24))){
var inst_30864 = (state_30996[(7)]);
var inst_30885 = (state_30996[(2)]);
var inst_30887 = cljs.core.next(inst_30864);
var inst_30839 = inst_30887;
var inst_30840 = null;
var inst_30841 = (0);
var inst_30842 = (0);
var state_30996__$1 = (function (){var statearr_31063 = state_30996;
(statearr_31063[(13)] = inst_30841);

(statearr_31063[(14)] = inst_30842);

(statearr_31063[(15)] = inst_30840);

(statearr_31063[(16)] = inst_30839);

(statearr_31063[(17)] = inst_30885);

return statearr_31063;
})();
var statearr_31064_33284 = state_30996__$1;
(statearr_31064_33284[(2)] = null);

(statearr_31064_33284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (39))){
var state_30996__$1 = state_30996;
var statearr_31068_33285 = state_30996__$1;
(statearr_31068_33285[(2)] = null);

(statearr_31068_33285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (4))){
var inst_30830 = (state_30996[(10)]);
var inst_30830__$1 = (state_30996[(2)]);
var inst_30831 = (inst_30830__$1 == null);
var state_30996__$1 = (function (){var statearr_31069 = state_30996;
(statearr_31069[(10)] = inst_30830__$1);

return statearr_31069;
})();
if(cljs.core.truth_(inst_30831)){
var statearr_31070_33295 = state_30996__$1;
(statearr_31070_33295[(1)] = (5));

} else {
var statearr_31071_33297 = state_30996__$1;
(statearr_31071_33297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (15))){
var inst_30841 = (state_30996[(13)]);
var inst_30842 = (state_30996[(14)]);
var inst_30840 = (state_30996[(15)]);
var inst_30839 = (state_30996[(16)]);
var inst_30857 = (state_30996[(2)]);
var inst_30859 = (inst_30842 + (1));
var tmp31065 = inst_30841;
var tmp31066 = inst_30840;
var tmp31067 = inst_30839;
var inst_30839__$1 = tmp31067;
var inst_30840__$1 = tmp31066;
var inst_30841__$1 = tmp31065;
var inst_30842__$1 = inst_30859;
var state_30996__$1 = (function (){var statearr_31072 = state_30996;
(statearr_31072[(13)] = inst_30841__$1);

(statearr_31072[(14)] = inst_30842__$1);

(statearr_31072[(15)] = inst_30840__$1);

(statearr_31072[(18)] = inst_30857);

(statearr_31072[(16)] = inst_30839__$1);

return statearr_31072;
})();
var statearr_31073_33317 = state_30996__$1;
(statearr_31073_33317[(2)] = null);

(statearr_31073_33317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (21))){
var inst_30890 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31081_33320 = state_30996__$1;
(statearr_31081_33320[(2)] = inst_30890);

(statearr_31081_33320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (31))){
var inst_30920 = (state_30996[(11)]);
var inst_30925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30920);
var state_30996__$1 = state_30996;
var statearr_31086_33321 = state_30996__$1;
(statearr_31086_33321[(2)] = inst_30925);

(statearr_31086_33321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (32))){
var inst_30915 = (state_30996[(9)]);
var inst_30914 = (state_30996[(19)]);
var inst_30912 = (state_30996[(20)]);
var inst_30913 = (state_30996[(12)]);
var inst_30927 = (state_30996[(2)]);
var inst_30928 = (inst_30915 + (1));
var tmp31074 = inst_30914;
var tmp31075 = inst_30912;
var tmp31076 = inst_30913;
var inst_30912__$1 = tmp31075;
var inst_30913__$1 = tmp31076;
var inst_30914__$1 = tmp31074;
var inst_30915__$1 = inst_30928;
var state_30996__$1 = (function (){var statearr_31091 = state_30996;
(statearr_31091[(9)] = inst_30915__$1);

(statearr_31091[(19)] = inst_30914__$1);

(statearr_31091[(21)] = inst_30927);

(statearr_31091[(20)] = inst_30912__$1);

(statearr_31091[(12)] = inst_30913__$1);

return statearr_31091;
})();
var statearr_31092_33322 = state_30996__$1;
(statearr_31092_33322[(2)] = null);

(statearr_31092_33322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (40))){
var inst_30952 = (state_30996[(22)]);
var inst_30957 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30952);
var state_30996__$1 = state_30996;
var statearr_31094_33323 = state_30996__$1;
(statearr_31094_33323[(2)] = inst_30957);

(statearr_31094_33323[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (33))){
var inst_30932 = (state_30996[(23)]);
var inst_30936 = cljs.core.chunked_seq_QMARK_(inst_30932);
var state_30996__$1 = state_30996;
if(inst_30936){
var statearr_31095_33324 = state_30996__$1;
(statearr_31095_33324[(1)] = (36));

} else {
var statearr_31096_33325 = state_30996__$1;
(statearr_31096_33325[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (13))){
var inst_30851 = (state_30996[(24)]);
var inst_30854 = cljs.core.async.close_BANG_(inst_30851);
var state_30996__$1 = state_30996;
var statearr_31097_33330 = state_30996__$1;
(statearr_31097_33330[(2)] = inst_30854);

(statearr_31097_33330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (22))){
var inst_30877 = (state_30996[(8)]);
var inst_30882 = cljs.core.async.close_BANG_(inst_30877);
var state_30996__$1 = state_30996;
var statearr_31098_33334 = state_30996__$1;
(statearr_31098_33334[(2)] = inst_30882);

(statearr_31098_33334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (36))){
var inst_30932 = (state_30996[(23)]);
var inst_30939 = cljs.core.chunk_first(inst_30932);
var inst_30943 = cljs.core.chunk_rest(inst_30932);
var inst_30944 = cljs.core.count(inst_30939);
var inst_30912 = inst_30943;
var inst_30913 = inst_30939;
var inst_30914 = inst_30944;
var inst_30915 = (0);
var state_30996__$1 = (function (){var statearr_31101 = state_30996;
(statearr_31101[(9)] = inst_30915);

(statearr_31101[(19)] = inst_30914);

(statearr_31101[(20)] = inst_30912);

(statearr_31101[(12)] = inst_30913);

return statearr_31101;
})();
var statearr_31102_33339 = state_30996__$1;
(statearr_31102_33339[(2)] = null);

(statearr_31102_33339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (41))){
var inst_30932 = (state_30996[(23)]);
var inst_30959 = (state_30996[(2)]);
var inst_30961 = cljs.core.next(inst_30932);
var inst_30912 = inst_30961;
var inst_30913 = null;
var inst_30914 = (0);
var inst_30915 = (0);
var state_30996__$1 = (function (){var statearr_31106 = state_30996;
(statearr_31106[(9)] = inst_30915);

(statearr_31106[(19)] = inst_30914);

(statearr_31106[(20)] = inst_30912);

(statearr_31106[(12)] = inst_30913);

(statearr_31106[(25)] = inst_30959);

return statearr_31106;
})();
var statearr_31110_33343 = state_30996__$1;
(statearr_31110_33343[(2)] = null);

(statearr_31110_33343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (43))){
var state_30996__$1 = state_30996;
var statearr_31111_33344 = state_30996__$1;
(statearr_31111_33344[(2)] = null);

(statearr_31111_33344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (29))){
var inst_30970 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31112_33350 = state_30996__$1;
(statearr_31112_33350[(2)] = inst_30970);

(statearr_31112_33350[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (44))){
var inst_30984 = (state_30996[(2)]);
var state_30996__$1 = (function (){var statearr_31116 = state_30996;
(statearr_31116[(26)] = inst_30984);

return statearr_31116;
})();
var statearr_31117_33351 = state_30996__$1;
(statearr_31117_33351[(2)] = null);

(statearr_31117_33351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (6))){
var inst_30902 = (state_30996[(27)]);
var inst_30901 = cljs.core.deref(cs);
var inst_30902__$1 = cljs.core.keys(inst_30901);
var inst_30903 = cljs.core.count(inst_30902__$1);
var inst_30904 = cljs.core.reset_BANG_(dctr,inst_30903);
var inst_30910 = cljs.core.seq(inst_30902__$1);
var inst_30912 = inst_30910;
var inst_30913 = null;
var inst_30914 = (0);
var inst_30915 = (0);
var state_30996__$1 = (function (){var statearr_31118 = state_30996;
(statearr_31118[(9)] = inst_30915);

(statearr_31118[(19)] = inst_30914);

(statearr_31118[(20)] = inst_30912);

(statearr_31118[(28)] = inst_30904);

(statearr_31118[(12)] = inst_30913);

(statearr_31118[(27)] = inst_30902__$1);

return statearr_31118;
})();
var statearr_31122_33356 = state_30996__$1;
(statearr_31122_33356[(2)] = null);

(statearr_31122_33356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (28))){
var inst_30912 = (state_30996[(20)]);
var inst_30932 = (state_30996[(23)]);
var inst_30932__$1 = cljs.core.seq(inst_30912);
var state_30996__$1 = (function (){var statearr_31123 = state_30996;
(statearr_31123[(23)] = inst_30932__$1);

return statearr_31123;
})();
if(inst_30932__$1){
var statearr_31124_33363 = state_30996__$1;
(statearr_31124_33363[(1)] = (33));

} else {
var statearr_31125_33364 = state_30996__$1;
(statearr_31125_33364[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (25))){
var inst_30915 = (state_30996[(9)]);
var inst_30914 = (state_30996[(19)]);
var inst_30917 = (inst_30915 < inst_30914);
var inst_30918 = inst_30917;
var state_30996__$1 = state_30996;
if(cljs.core.truth_(inst_30918)){
var statearr_31126_33368 = state_30996__$1;
(statearr_31126_33368[(1)] = (27));

} else {
var statearr_31128_33370 = state_30996__$1;
(statearr_31128_33370[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (34))){
var state_30996__$1 = state_30996;
var statearr_31129_33371 = state_30996__$1;
(statearr_31129_33371[(2)] = null);

(statearr_31129_33371[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (17))){
var state_30996__$1 = state_30996;
var statearr_31131_33372 = state_30996__$1;
(statearr_31131_33372[(2)] = null);

(statearr_31131_33372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (3))){
var inst_30989 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30996__$1,inst_30989);
} else {
if((state_val_30997 === (12))){
var inst_30897 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31132_33373 = state_30996__$1;
(statearr_31132_33373[(2)] = inst_30897);

(statearr_31132_33373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (2))){
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30996__$1,(4),ch);
} else {
if((state_val_30997 === (23))){
var state_30996__$1 = state_30996;
var statearr_31133_33374 = state_30996__$1;
(statearr_31133_33374[(2)] = null);

(statearr_31133_33374[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (35))){
var inst_30968 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31135_33376 = state_30996__$1;
(statearr_31135_33376[(2)] = inst_30968);

(statearr_31135_33376[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (19))){
var inst_30864 = (state_30996[(7)]);
var inst_30868 = cljs.core.chunk_first(inst_30864);
var inst_30869 = cljs.core.chunk_rest(inst_30864);
var inst_30870 = cljs.core.count(inst_30868);
var inst_30839 = inst_30869;
var inst_30840 = inst_30868;
var inst_30841 = inst_30870;
var inst_30842 = (0);
var state_30996__$1 = (function (){var statearr_31137 = state_30996;
(statearr_31137[(13)] = inst_30841);

(statearr_31137[(14)] = inst_30842);

(statearr_31137[(15)] = inst_30840);

(statearr_31137[(16)] = inst_30839);

return statearr_31137;
})();
var statearr_31138_33377 = state_30996__$1;
(statearr_31138_33377[(2)] = null);

(statearr_31138_33377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (11))){
var inst_30864 = (state_30996[(7)]);
var inst_30839 = (state_30996[(16)]);
var inst_30864__$1 = cljs.core.seq(inst_30839);
var state_30996__$1 = (function (){var statearr_31139 = state_30996;
(statearr_31139[(7)] = inst_30864__$1);

return statearr_31139;
})();
if(inst_30864__$1){
var statearr_31140_33378 = state_30996__$1;
(statearr_31140_33378[(1)] = (16));

} else {
var statearr_31141_33379 = state_30996__$1;
(statearr_31141_33379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (9))){
var inst_30899 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31142_33380 = state_30996__$1;
(statearr_31142_33380[(2)] = inst_30899);

(statearr_31142_33380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (5))){
var inst_30837 = cljs.core.deref(cs);
var inst_30838 = cljs.core.seq(inst_30837);
var inst_30839 = inst_30838;
var inst_30840 = null;
var inst_30841 = (0);
var inst_30842 = (0);
var state_30996__$1 = (function (){var statearr_31145 = state_30996;
(statearr_31145[(13)] = inst_30841);

(statearr_31145[(14)] = inst_30842);

(statearr_31145[(15)] = inst_30840);

(statearr_31145[(16)] = inst_30839);

return statearr_31145;
})();
var statearr_31146_33388 = state_30996__$1;
(statearr_31146_33388[(2)] = null);

(statearr_31146_33388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (14))){
var state_30996__$1 = state_30996;
var statearr_31149_33389 = state_30996__$1;
(statearr_31149_33389[(2)] = null);

(statearr_31149_33389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (45))){
var inst_30980 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31150_33391 = state_30996__$1;
(statearr_31150_33391[(2)] = inst_30980);

(statearr_31150_33391[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (26))){
var inst_30902 = (state_30996[(27)]);
var inst_30972 = (state_30996[(2)]);
var inst_30977 = cljs.core.seq(inst_30902);
var state_30996__$1 = (function (){var statearr_31151 = state_30996;
(statearr_31151[(29)] = inst_30972);

return statearr_31151;
})();
if(inst_30977){
var statearr_31152_33392 = state_30996__$1;
(statearr_31152_33392[(1)] = (42));

} else {
var statearr_31156_33393 = state_30996__$1;
(statearr_31156_33393[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (16))){
var inst_30864 = (state_30996[(7)]);
var inst_30866 = cljs.core.chunked_seq_QMARK_(inst_30864);
var state_30996__$1 = state_30996;
if(inst_30866){
var statearr_31157_33397 = state_30996__$1;
(statearr_31157_33397[(1)] = (19));

} else {
var statearr_31159_33398 = state_30996__$1;
(statearr_31159_33398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (38))){
var inst_30964 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31161_33400 = state_30996__$1;
(statearr_31161_33400[(2)] = inst_30964);

(statearr_31161_33400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (30))){
var state_30996__$1 = state_30996;
var statearr_31164_33401 = state_30996__$1;
(statearr_31164_33401[(2)] = null);

(statearr_31164_33401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (10))){
var inst_30842 = (state_30996[(14)]);
var inst_30840 = (state_30996[(15)]);
var inst_30850 = cljs.core._nth(inst_30840,inst_30842);
var inst_30851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30850,(0),null);
var inst_30852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30850,(1),null);
var state_30996__$1 = (function (){var statearr_31165 = state_30996;
(statearr_31165[(24)] = inst_30851);

return statearr_31165;
})();
if(cljs.core.truth_(inst_30852)){
var statearr_31166_33405 = state_30996__$1;
(statearr_31166_33405[(1)] = (13));

} else {
var statearr_31167_33406 = state_30996__$1;
(statearr_31167_33406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (18))){
var inst_30893 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31168_33408 = state_30996__$1;
(statearr_31168_33408[(2)] = inst_30893);

(statearr_31168_33408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (42))){
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30996__$1,(45),dchan);
} else {
if((state_val_30997 === (37))){
var inst_30830 = (state_30996[(10)]);
var inst_30952 = (state_30996[(22)]);
var inst_30932 = (state_30996[(23)]);
var inst_30952__$1 = cljs.core.first(inst_30932);
var inst_30953 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30952__$1,inst_30830,done);
var state_30996__$1 = (function (){var statearr_31169 = state_30996;
(statearr_31169[(22)] = inst_30952__$1);

return statearr_31169;
})();
if(cljs.core.truth_(inst_30953)){
var statearr_31171_33409 = state_30996__$1;
(statearr_31171_33409[(1)] = (39));

} else {
var statearr_31172_33410 = state_30996__$1;
(statearr_31172_33410[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (8))){
var inst_30841 = (state_30996[(13)]);
var inst_30842 = (state_30996[(14)]);
var inst_30844 = (inst_30842 < inst_30841);
var inst_30845 = inst_30844;
var state_30996__$1 = state_30996;
if(cljs.core.truth_(inst_30845)){
var statearr_31176_33414 = state_30996__$1;
(statearr_31176_33414[(1)] = (10));

} else {
var statearr_31177_33415 = state_30996__$1;
(statearr_31177_33415[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29455__auto__ = null;
var cljs$core$async$mult_$_state_machine__29455__auto____0 = (function (){
var statearr_31178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31178[(0)] = cljs$core$async$mult_$_state_machine__29455__auto__);

(statearr_31178[(1)] = (1));

return statearr_31178;
});
var cljs$core$async$mult_$_state_machine__29455__auto____1 = (function (state_30996){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_30996);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e31179){var ex__29458__auto__ = e31179;
var statearr_31180_33417 = state_30996;
(statearr_31180_33417[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_30996[(4)]))){
var statearr_31181_33418 = state_30996;
(statearr_31181_33418[(1)] = cljs.core.first((state_30996[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_30996;
state_30996 = G__33419;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29455__auto__ = function(state_30996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29455__auto____1.call(this,state_30996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29455__auto____0;
cljs$core$async$mult_$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29455__auto____1;
return cljs$core$async$mult_$_state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_31182 = f__29737__auto__();
(statearr_31182[(6)] = c__29736__auto___33230);

return statearr_31182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31185 = arguments.length;
switch (G__31185) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33421 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33421(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33426 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33426(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33428 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33428(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33435 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33435(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33438 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33438(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33445 = arguments.length;
var i__4865__auto___33446 = (0);
while(true){
if((i__4865__auto___33446 < len__4864__auto___33445)){
args__4870__auto__.push((arguments[i__4865__auto___33446]));

var G__33453 = (i__4865__auto___33446 + (1));
i__4865__auto___33446 = G__33453;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31195){
var map__31196 = p__31195;
var map__31196__$1 = cljs.core.__destructure_map(map__31196);
var opts = map__31196__$1;
var statearr_31197_33454 = state;
(statearr_31197_33454[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31198_33455 = state;
(statearr_31198_33455[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31199_33456 = state;
(statearr_31199_33456[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31191){
var G__31192 = cljs.core.first(seq31191);
var seq31191__$1 = cljs.core.next(seq31191);
var G__31193 = cljs.core.first(seq31191__$1);
var seq31191__$2 = cljs.core.next(seq31191__$1);
var G__31194 = cljs.core.first(seq31191__$2);
var seq31191__$3 = cljs.core.next(seq31191__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31192,G__31193,G__31194,seq31191__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31201 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31201 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31202){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31202 = meta31202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31203,meta31202__$1){
var self__ = this;
var _31203__$1 = this;
return (new cljs.core.async.t_cljs$core$async31201(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31202__$1));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31203){
var self__ = this;
var _31203__$1 = this;
return self__.meta31202;
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31202","meta31202",-202890703,null)], null);
}));

(cljs.core.async.t_cljs$core$async31201.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31201");

(cljs.core.async.t_cljs$core$async31201.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31201");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31201.
 */
cljs.core.async.__GT_t_cljs$core$async31201 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31201(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31202){
return (new cljs.core.async.t_cljs$core$async31201(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31202));
});

}

return (new cljs.core.async.t_cljs$core$async31201(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29736__auto___33478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_31271){
var state_val_31272 = (state_31271[(1)]);
if((state_val_31272 === (7))){
var inst_31231 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31231)){
var statearr_31273_33479 = state_31271__$1;
(statearr_31273_33479[(1)] = (8));

} else {
var statearr_31274_33480 = state_31271__$1;
(statearr_31274_33480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (20))){
var inst_31224 = (state_31271[(7)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31271__$1,(23),out,inst_31224);
} else {
if((state_val_31272 === (1))){
var inst_31207 = calc_state();
var inst_31208 = cljs.core.__destructure_map(inst_31207);
var inst_31209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31208,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31208,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31208,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31212 = inst_31207;
var state_31271__$1 = (function (){var statearr_31275 = state_31271;
(statearr_31275[(8)] = inst_31212);

(statearr_31275[(9)] = inst_31211);

(statearr_31275[(10)] = inst_31210);

(statearr_31275[(11)] = inst_31209);

return statearr_31275;
})();
var statearr_31276_33481 = state_31271__$1;
(statearr_31276_33481[(2)] = null);

(statearr_31276_33481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (24))){
var inst_31215 = (state_31271[(12)]);
var inst_31212 = inst_31215;
var state_31271__$1 = (function (){var statearr_31277 = state_31271;
(statearr_31277[(8)] = inst_31212);

return statearr_31277;
})();
var statearr_31279_33483 = state_31271__$1;
(statearr_31279_33483[(2)] = null);

(statearr_31279_33483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (4))){
var inst_31224 = (state_31271[(7)]);
var inst_31226 = (state_31271[(13)]);
var inst_31223 = (state_31271[(2)]);
var inst_31224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31223,(0),null);
var inst_31225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31223,(1),null);
var inst_31226__$1 = (inst_31224__$1 == null);
var state_31271__$1 = (function (){var statearr_31281 = state_31271;
(statearr_31281[(14)] = inst_31225);

(statearr_31281[(7)] = inst_31224__$1);

(statearr_31281[(13)] = inst_31226__$1);

return statearr_31281;
})();
if(cljs.core.truth_(inst_31226__$1)){
var statearr_31282_33484 = state_31271__$1;
(statearr_31282_33484[(1)] = (5));

} else {
var statearr_31284_33485 = state_31271__$1;
(statearr_31284_33485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (15))){
var inst_31216 = (state_31271[(15)]);
var inst_31245 = (state_31271[(16)]);
var inst_31245__$1 = cljs.core.empty_QMARK_(inst_31216);
var state_31271__$1 = (function (){var statearr_31285 = state_31271;
(statearr_31285[(16)] = inst_31245__$1);

return statearr_31285;
})();
if(inst_31245__$1){
var statearr_31286_33487 = state_31271__$1;
(statearr_31286_33487[(1)] = (17));

} else {
var statearr_31287_33488 = state_31271__$1;
(statearr_31287_33488[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (21))){
var inst_31215 = (state_31271[(12)]);
var inst_31212 = inst_31215;
var state_31271__$1 = (function (){var statearr_31288 = state_31271;
(statearr_31288[(8)] = inst_31212);

return statearr_31288;
})();
var statearr_31289_33489 = state_31271__$1;
(statearr_31289_33489[(2)] = null);

(statearr_31289_33489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (13))){
var inst_31238 = (state_31271[(2)]);
var inst_31239 = calc_state();
var inst_31212 = inst_31239;
var state_31271__$1 = (function (){var statearr_31290 = state_31271;
(statearr_31290[(8)] = inst_31212);

(statearr_31290[(17)] = inst_31238);

return statearr_31290;
})();
var statearr_31291_33491 = state_31271__$1;
(statearr_31291_33491[(2)] = null);

(statearr_31291_33491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (22))){
var inst_31265 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31292_33493 = state_31271__$1;
(statearr_31292_33493[(2)] = inst_31265);

(statearr_31292_33493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (6))){
var inst_31225 = (state_31271[(14)]);
var inst_31229 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31225,change);
var state_31271__$1 = state_31271;
var statearr_31293_33494 = state_31271__$1;
(statearr_31293_33494[(2)] = inst_31229);

(statearr_31293_33494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (25))){
var state_31271__$1 = state_31271;
var statearr_31294_33497 = state_31271__$1;
(statearr_31294_33497[(2)] = null);

(statearr_31294_33497[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (17))){
var inst_31225 = (state_31271[(14)]);
var inst_31217 = (state_31271[(18)]);
var inst_31247 = (inst_31217.cljs$core$IFn$_invoke$arity$1 ? inst_31217.cljs$core$IFn$_invoke$arity$1(inst_31225) : inst_31217.call(null,inst_31225));
var inst_31248 = cljs.core.not(inst_31247);
var state_31271__$1 = state_31271;
var statearr_31295_33498 = state_31271__$1;
(statearr_31295_33498[(2)] = inst_31248);

(statearr_31295_33498[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (3))){
var inst_31269 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31271__$1,inst_31269);
} else {
if((state_val_31272 === (12))){
var state_31271__$1 = state_31271;
var statearr_31297_33500 = state_31271__$1;
(statearr_31297_33500[(2)] = null);

(statearr_31297_33500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (2))){
var inst_31215 = (state_31271[(12)]);
var inst_31212 = (state_31271[(8)]);
var inst_31215__$1 = cljs.core.__destructure_map(inst_31212);
var inst_31216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31215__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31215__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31215__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31271__$1 = (function (){var statearr_31298 = state_31271;
(statearr_31298[(12)] = inst_31215__$1);

(statearr_31298[(15)] = inst_31216);

(statearr_31298[(18)] = inst_31217);

return statearr_31298;
})();
return cljs.core.async.ioc_alts_BANG_(state_31271__$1,(4),inst_31218);
} else {
if((state_val_31272 === (23))){
var inst_31256 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31256)){
var statearr_31299_33501 = state_31271__$1;
(statearr_31299_33501[(1)] = (24));

} else {
var statearr_31300_33505 = state_31271__$1;
(statearr_31300_33505[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (19))){
var inst_31251 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31301_33506 = state_31271__$1;
(statearr_31301_33506[(2)] = inst_31251);

(statearr_31301_33506[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (11))){
var inst_31225 = (state_31271[(14)]);
var inst_31235 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31225);
var state_31271__$1 = state_31271;
var statearr_31302_33507 = state_31271__$1;
(statearr_31302_33507[(2)] = inst_31235);

(statearr_31302_33507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (9))){
var inst_31225 = (state_31271[(14)]);
var inst_31216 = (state_31271[(15)]);
var inst_31242 = (state_31271[(19)]);
var inst_31242__$1 = (inst_31216.cljs$core$IFn$_invoke$arity$1 ? inst_31216.cljs$core$IFn$_invoke$arity$1(inst_31225) : inst_31216.call(null,inst_31225));
var state_31271__$1 = (function (){var statearr_31303 = state_31271;
(statearr_31303[(19)] = inst_31242__$1);

return statearr_31303;
})();
if(cljs.core.truth_(inst_31242__$1)){
var statearr_31304_33508 = state_31271__$1;
(statearr_31304_33508[(1)] = (14));

} else {
var statearr_31305_33509 = state_31271__$1;
(statearr_31305_33509[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (5))){
var inst_31226 = (state_31271[(13)]);
var state_31271__$1 = state_31271;
var statearr_31306_33510 = state_31271__$1;
(statearr_31306_33510[(2)] = inst_31226);

(statearr_31306_33510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (14))){
var inst_31242 = (state_31271[(19)]);
var state_31271__$1 = state_31271;
var statearr_31307_33511 = state_31271__$1;
(statearr_31307_33511[(2)] = inst_31242);

(statearr_31307_33511[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (26))){
var inst_31261 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31308_33512 = state_31271__$1;
(statearr_31308_33512[(2)] = inst_31261);

(statearr_31308_33512[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (16))){
var inst_31253 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31253)){
var statearr_31309_33513 = state_31271__$1;
(statearr_31309_33513[(1)] = (20));

} else {
var statearr_31310_33514 = state_31271__$1;
(statearr_31310_33514[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (10))){
var inst_31267 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31311_33515 = state_31271__$1;
(statearr_31311_33515[(2)] = inst_31267);

(statearr_31311_33515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (18))){
var inst_31245 = (state_31271[(16)]);
var state_31271__$1 = state_31271;
var statearr_31314_33516 = state_31271__$1;
(statearr_31314_33516[(2)] = inst_31245);

(statearr_31314_33516[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (8))){
var inst_31224 = (state_31271[(7)]);
var inst_31233 = (inst_31224 == null);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31233)){
var statearr_31315_33517 = state_31271__$1;
(statearr_31315_33517[(1)] = (11));

} else {
var statearr_31316_33518 = state_31271__$1;
(statearr_31316_33518[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29455__auto__ = null;
var cljs$core$async$mix_$_state_machine__29455__auto____0 = (function (){
var statearr_31318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31318[(0)] = cljs$core$async$mix_$_state_machine__29455__auto__);

(statearr_31318[(1)] = (1));

return statearr_31318;
});
var cljs$core$async$mix_$_state_machine__29455__auto____1 = (function (state_31271){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_31271);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e31319){var ex__29458__auto__ = e31319;
var statearr_31320_33532 = state_31271;
(statearr_31320_33532[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_31271[(4)]))){
var statearr_31321_33533 = state_31271;
(statearr_31321_33533[(1)] = cljs.core.first((state_31271[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33540 = state_31271;
state_31271 = G__33540;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29455__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29455__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29455__auto____0;
cljs$core$async$mix_$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29455__auto____1;
return cljs$core$async$mix_$_state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_31323 = f__29737__auto__();
(statearr_31323[(6)] = c__29736__auto___33478);

return statearr_31323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33541 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33541(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33549 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33549(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33553 = (function() {
var G__33554 = null;
var G__33554__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33554__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33554 = function(p,v){
switch(arguments.length){
case 1:
return G__33554__1.call(this,p);
case 2:
return G__33554__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33554.cljs$core$IFn$_invoke$arity$1 = G__33554__1;
G__33554.cljs$core$IFn$_invoke$arity$2 = G__33554__2;
return G__33554;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31331 = arguments.length;
switch (G__31331) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33553(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33553(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31368 = arguments.length;
switch (G__31368) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31366_SHARP_){
if(cljs.core.truth_((p1__31366_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31366_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31366_SHARP_.call(null,topic)))){
return p1__31366_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31366_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31370 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31371){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31371 = meta31371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31372,meta31371__$1){
var self__ = this;
var _31372__$1 = this;
return (new cljs.core.async.t_cljs$core$async31370(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31371__$1));
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31372){
var self__ = this;
var _31372__$1 = this;
return self__.meta31371;
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31371","meta31371",2107928915,null)], null);
}));

(cljs.core.async.t_cljs$core$async31370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31370");

(cljs.core.async.t_cljs$core$async31370.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31370.
 */
cljs.core.async.__GT_t_cljs$core$async31370 = (function cljs$core$async$__GT_t_cljs$core$async31370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31371){
return (new cljs.core.async.t_cljs$core$async31370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31371));
});

}

return (new cljs.core.async.t_cljs$core$async31370(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29736__auto___33564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_31469){
var state_val_31470 = (state_31469[(1)]);
if((state_val_31470 === (7))){
var inst_31465 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31473_33565 = state_31469__$1;
(statearr_31473_33565[(2)] = inst_31465);

(statearr_31473_33565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (20))){
var state_31469__$1 = state_31469;
var statearr_31474_33566 = state_31469__$1;
(statearr_31474_33566[(2)] = null);

(statearr_31474_33566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (1))){
var state_31469__$1 = state_31469;
var statearr_31475_33567 = state_31469__$1;
(statearr_31475_33567[(2)] = null);

(statearr_31475_33567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (24))){
var inst_31448 = (state_31469[(7)]);
var inst_31457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31448);
var state_31469__$1 = state_31469;
var statearr_31476_33568 = state_31469__$1;
(statearr_31476_33568[(2)] = inst_31457);

(statearr_31476_33568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (4))){
var inst_31388 = (state_31469[(8)]);
var inst_31388__$1 = (state_31469[(2)]);
var inst_31390 = (inst_31388__$1 == null);
var state_31469__$1 = (function (){var statearr_31477 = state_31469;
(statearr_31477[(8)] = inst_31388__$1);

return statearr_31477;
})();
if(cljs.core.truth_(inst_31390)){
var statearr_31478_33569 = state_31469__$1;
(statearr_31478_33569[(1)] = (5));

} else {
var statearr_31479_33570 = state_31469__$1;
(statearr_31479_33570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (15))){
var inst_31442 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31480_33571 = state_31469__$1;
(statearr_31480_33571[(2)] = inst_31442);

(statearr_31480_33571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (21))){
var inst_31462 = (state_31469[(2)]);
var state_31469__$1 = (function (){var statearr_31481 = state_31469;
(statearr_31481[(9)] = inst_31462);

return statearr_31481;
})();
var statearr_31482_33572 = state_31469__$1;
(statearr_31482_33572[(2)] = null);

(statearr_31482_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (13))){
var inst_31424 = (state_31469[(10)]);
var inst_31426 = cljs.core.chunked_seq_QMARK_(inst_31424);
var state_31469__$1 = state_31469;
if(inst_31426){
var statearr_31483_33573 = state_31469__$1;
(statearr_31483_33573[(1)] = (16));

} else {
var statearr_31484_33574 = state_31469__$1;
(statearr_31484_33574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (22))){
var inst_31454 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
if(cljs.core.truth_(inst_31454)){
var statearr_31485_33575 = state_31469__$1;
(statearr_31485_33575[(1)] = (23));

} else {
var statearr_31486_33576 = state_31469__$1;
(statearr_31486_33576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (6))){
var inst_31450 = (state_31469[(11)]);
var inst_31448 = (state_31469[(7)]);
var inst_31388 = (state_31469[(8)]);
var inst_31448__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31388) : topic_fn.call(null,inst_31388));
var inst_31449 = cljs.core.deref(mults);
var inst_31450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31449,inst_31448__$1);
var state_31469__$1 = (function (){var statearr_31489 = state_31469;
(statearr_31489[(11)] = inst_31450__$1);

(statearr_31489[(7)] = inst_31448__$1);

return statearr_31489;
})();
if(cljs.core.truth_(inst_31450__$1)){
var statearr_31490_33577 = state_31469__$1;
(statearr_31490_33577[(1)] = (19));

} else {
var statearr_31491_33578 = state_31469__$1;
(statearr_31491_33578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (25))){
var inst_31459 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31492_33579 = state_31469__$1;
(statearr_31492_33579[(2)] = inst_31459);

(statearr_31492_33579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (17))){
var inst_31424 = (state_31469[(10)]);
var inst_31433 = cljs.core.first(inst_31424);
var inst_31434 = cljs.core.async.muxch_STAR_(inst_31433);
var inst_31435 = cljs.core.async.close_BANG_(inst_31434);
var inst_31436 = cljs.core.next(inst_31424);
var inst_31406 = inst_31436;
var inst_31407 = null;
var inst_31408 = (0);
var inst_31409 = (0);
var state_31469__$1 = (function (){var statearr_31497 = state_31469;
(statearr_31497[(12)] = inst_31409);

(statearr_31497[(13)] = inst_31435);

(statearr_31497[(14)] = inst_31408);

(statearr_31497[(15)] = inst_31406);

(statearr_31497[(16)] = inst_31407);

return statearr_31497;
})();
var statearr_31498_33580 = state_31469__$1;
(statearr_31498_33580[(2)] = null);

(statearr_31498_33580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (3))){
var inst_31467 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31469__$1,inst_31467);
} else {
if((state_val_31470 === (12))){
var inst_31444 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31499_33581 = state_31469__$1;
(statearr_31499_33581[(2)] = inst_31444);

(statearr_31499_33581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (2))){
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31469__$1,(4),ch);
} else {
if((state_val_31470 === (23))){
var state_31469__$1 = state_31469;
var statearr_31500_33583 = state_31469__$1;
(statearr_31500_33583[(2)] = null);

(statearr_31500_33583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (19))){
var inst_31450 = (state_31469[(11)]);
var inst_31388 = (state_31469[(8)]);
var inst_31452 = cljs.core.async.muxch_STAR_(inst_31450);
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31469__$1,(22),inst_31452,inst_31388);
} else {
if((state_val_31470 === (11))){
var inst_31424 = (state_31469[(10)]);
var inst_31406 = (state_31469[(15)]);
var inst_31424__$1 = cljs.core.seq(inst_31406);
var state_31469__$1 = (function (){var statearr_31501 = state_31469;
(statearr_31501[(10)] = inst_31424__$1);

return statearr_31501;
})();
if(inst_31424__$1){
var statearr_31502_33584 = state_31469__$1;
(statearr_31502_33584[(1)] = (13));

} else {
var statearr_31503_33585 = state_31469__$1;
(statearr_31503_33585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (9))){
var inst_31446 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31504_33586 = state_31469__$1;
(statearr_31504_33586[(2)] = inst_31446);

(statearr_31504_33586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (5))){
var inst_31402 = cljs.core.deref(mults);
var inst_31403 = cljs.core.vals(inst_31402);
var inst_31404 = cljs.core.seq(inst_31403);
var inst_31406 = inst_31404;
var inst_31407 = null;
var inst_31408 = (0);
var inst_31409 = (0);
var state_31469__$1 = (function (){var statearr_31505 = state_31469;
(statearr_31505[(12)] = inst_31409);

(statearr_31505[(14)] = inst_31408);

(statearr_31505[(15)] = inst_31406);

(statearr_31505[(16)] = inst_31407);

return statearr_31505;
})();
var statearr_31506_33592 = state_31469__$1;
(statearr_31506_33592[(2)] = null);

(statearr_31506_33592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (14))){
var state_31469__$1 = state_31469;
var statearr_31510_33596 = state_31469__$1;
(statearr_31510_33596[(2)] = null);

(statearr_31510_33596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (16))){
var inst_31424 = (state_31469[(10)]);
var inst_31428 = cljs.core.chunk_first(inst_31424);
var inst_31429 = cljs.core.chunk_rest(inst_31424);
var inst_31430 = cljs.core.count(inst_31428);
var inst_31406 = inst_31429;
var inst_31407 = inst_31428;
var inst_31408 = inst_31430;
var inst_31409 = (0);
var state_31469__$1 = (function (){var statearr_31511 = state_31469;
(statearr_31511[(12)] = inst_31409);

(statearr_31511[(14)] = inst_31408);

(statearr_31511[(15)] = inst_31406);

(statearr_31511[(16)] = inst_31407);

return statearr_31511;
})();
var statearr_31512_33604 = state_31469__$1;
(statearr_31512_33604[(2)] = null);

(statearr_31512_33604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (10))){
var inst_31409 = (state_31469[(12)]);
var inst_31408 = (state_31469[(14)]);
var inst_31406 = (state_31469[(15)]);
var inst_31407 = (state_31469[(16)]);
var inst_31414 = cljs.core._nth(inst_31407,inst_31409);
var inst_31419 = cljs.core.async.muxch_STAR_(inst_31414);
var inst_31420 = cljs.core.async.close_BANG_(inst_31419);
var inst_31421 = (inst_31409 + (1));
var tmp31507 = inst_31408;
var tmp31508 = inst_31406;
var tmp31509 = inst_31407;
var inst_31406__$1 = tmp31508;
var inst_31407__$1 = tmp31509;
var inst_31408__$1 = tmp31507;
var inst_31409__$1 = inst_31421;
var state_31469__$1 = (function (){var statearr_31516 = state_31469;
(statearr_31516[(12)] = inst_31409__$1);

(statearr_31516[(14)] = inst_31408__$1);

(statearr_31516[(17)] = inst_31420);

(statearr_31516[(15)] = inst_31406__$1);

(statearr_31516[(16)] = inst_31407__$1);

return statearr_31516;
})();
var statearr_31517_33622 = state_31469__$1;
(statearr_31517_33622[(2)] = null);

(statearr_31517_33622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (18))){
var inst_31439 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31518_33624 = state_31469__$1;
(statearr_31518_33624[(2)] = inst_31439);

(statearr_31518_33624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (8))){
var inst_31409 = (state_31469[(12)]);
var inst_31408 = (state_31469[(14)]);
var inst_31411 = (inst_31409 < inst_31408);
var inst_31412 = inst_31411;
var state_31469__$1 = state_31469;
if(cljs.core.truth_(inst_31412)){
var statearr_31519_33626 = state_31469__$1;
(statearr_31519_33626[(1)] = (10));

} else {
var statearr_31520_33627 = state_31469__$1;
(statearr_31520_33627[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_31521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31521[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_31521[(1)] = (1));

return statearr_31521;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_31469){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_31469);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e31526){var ex__29458__auto__ = e31526;
var statearr_31527_33628 = state_31469;
(statearr_31527_33628[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_31469[(4)]))){
var statearr_31530_33633 = state_31469;
(statearr_31530_33633[(1)] = cljs.core.first((state_31469[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33634 = state_31469;
state_31469 = G__33634;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_31469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_31469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_31531 = f__29737__auto__();
(statearr_31531[(6)] = c__29736__auto___33564);

return statearr_31531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31541 = arguments.length;
switch (G__31541) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31562 = arguments.length;
switch (G__31562) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31593 = arguments.length;
switch (G__31593) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29736__auto___33656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_31717){
var state_val_31718 = (state_31717[(1)]);
if((state_val_31718 === (7))){
var state_31717__$1 = state_31717;
var statearr_31719_33660 = state_31717__$1;
(statearr_31719_33660[(2)] = null);

(statearr_31719_33660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (1))){
var state_31717__$1 = state_31717;
var statearr_31720_33661 = state_31717__$1;
(statearr_31720_33661[(2)] = null);

(statearr_31720_33661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (4))){
var inst_31638 = (state_31717[(7)]);
var inst_31639 = (state_31717[(8)]);
var inst_31641 = (inst_31639 < inst_31638);
var state_31717__$1 = state_31717;
if(cljs.core.truth_(inst_31641)){
var statearr_31721_33662 = state_31717__$1;
(statearr_31721_33662[(1)] = (6));

} else {
var statearr_31724_33663 = state_31717__$1;
(statearr_31724_33663[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (15))){
var inst_31698 = (state_31717[(9)]);
var inst_31707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31698);
var state_31717__$1 = state_31717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31717__$1,(17),out,inst_31707);
} else {
if((state_val_31718 === (13))){
var inst_31698 = (state_31717[(9)]);
var inst_31698__$1 = (state_31717[(2)]);
var inst_31699 = cljs.core.some(cljs.core.nil_QMARK_,inst_31698__$1);
var state_31717__$1 = (function (){var statearr_31728 = state_31717;
(statearr_31728[(9)] = inst_31698__$1);

return statearr_31728;
})();
if(cljs.core.truth_(inst_31699)){
var statearr_31729_33668 = state_31717__$1;
(statearr_31729_33668[(1)] = (14));

} else {
var statearr_31730_33669 = state_31717__$1;
(statearr_31730_33669[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (6))){
var state_31717__$1 = state_31717;
var statearr_31735_33670 = state_31717__$1;
(statearr_31735_33670[(2)] = null);

(statearr_31735_33670[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (17))){
var inst_31709 = (state_31717[(2)]);
var state_31717__$1 = (function (){var statearr_31752 = state_31717;
(statearr_31752[(10)] = inst_31709);

return statearr_31752;
})();
var statearr_31759_33672 = state_31717__$1;
(statearr_31759_33672[(2)] = null);

(statearr_31759_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (3))){
var inst_31715 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31717__$1,inst_31715);
} else {
if((state_val_31718 === (12))){
var _ = (function (){var statearr_31771 = state_31717;
(statearr_31771[(4)] = cljs.core.rest((state_31717[(4)])));

return statearr_31771;
})();
var state_31717__$1 = state_31717;
var ex31742 = (state_31717__$1[(2)]);
var statearr_31772_33673 = state_31717__$1;
(statearr_31772_33673[(5)] = ex31742);


if((ex31742 instanceof Object)){
var statearr_31773_33675 = state_31717__$1;
(statearr_31773_33675[(1)] = (11));

(statearr_31773_33675[(5)] = null);

} else {
throw ex31742;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (2))){
var inst_31637 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31638 = cnt;
var inst_31639 = (0);
var state_31717__$1 = (function (){var statearr_31796 = state_31717;
(statearr_31796[(7)] = inst_31638);

(statearr_31796[(11)] = inst_31637);

(statearr_31796[(8)] = inst_31639);

return statearr_31796;
})();
var statearr_31821_33677 = state_31717__$1;
(statearr_31821_33677[(2)] = null);

(statearr_31821_33677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (11))){
var inst_31655 = (state_31717[(2)]);
var inst_31660 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31717__$1 = (function (){var statearr_31835 = state_31717;
(statearr_31835[(12)] = inst_31655);

return statearr_31835;
})();
var statearr_31836_33678 = state_31717__$1;
(statearr_31836_33678[(2)] = inst_31660);

(statearr_31836_33678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (9))){
var inst_31639 = (state_31717[(8)]);
var _ = (function (){var statearr_31839 = state_31717;
(statearr_31839[(4)] = cljs.core.cons((12),(state_31717[(4)])));

return statearr_31839;
})();
var inst_31669 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31639) : chs__$1.call(null,inst_31639));
var inst_31670 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31639) : done.call(null,inst_31639));
var inst_31671 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31669,inst_31670);
var ___$1 = (function (){var statearr_31842 = state_31717;
(statearr_31842[(4)] = cljs.core.rest((state_31717[(4)])));

return statearr_31842;
})();
var state_31717__$1 = state_31717;
var statearr_31843_33679 = state_31717__$1;
(statearr_31843_33679[(2)] = inst_31671);

(statearr_31843_33679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (5))){
var inst_31693 = (state_31717[(2)]);
var state_31717__$1 = (function (){var statearr_31857 = state_31717;
(statearr_31857[(13)] = inst_31693);

return statearr_31857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31717__$1,(13),dchan);
} else {
if((state_val_31718 === (14))){
var inst_31702 = cljs.core.async.close_BANG_(out);
var state_31717__$1 = state_31717;
var statearr_31862_33680 = state_31717__$1;
(statearr_31862_33680[(2)] = inst_31702);

(statearr_31862_33680[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (16))){
var inst_31713 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
var statearr_31863_33681 = state_31717__$1;
(statearr_31863_33681[(2)] = inst_31713);

(statearr_31863_33681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (10))){
var inst_31639 = (state_31717[(8)]);
var inst_31674 = (state_31717[(2)]);
var inst_31684 = (inst_31639 + (1));
var inst_31639__$1 = inst_31684;
var state_31717__$1 = (function (){var statearr_31869 = state_31717;
(statearr_31869[(14)] = inst_31674);

(statearr_31869[(8)] = inst_31639__$1);

return statearr_31869;
})();
var statearr_31871_33682 = state_31717__$1;
(statearr_31871_33682[(2)] = null);

(statearr_31871_33682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31718 === (8))){
var inst_31691 = (state_31717[(2)]);
var state_31717__$1 = state_31717;
var statearr_31872_33683 = state_31717__$1;
(statearr_31872_33683[(2)] = inst_31691);

(statearr_31872_33683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_31876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31876[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_31876[(1)] = (1));

return statearr_31876;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_31717){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_31717);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e31877){var ex__29458__auto__ = e31877;
var statearr_31878_33684 = state_31717;
(statearr_31878_33684[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_31717[(4)]))){
var statearr_31881_33685 = state_31717;
(statearr_31881_33685[(1)] = cljs.core.first((state_31717[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33686 = state_31717;
state_31717 = G__33686;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_31717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_31717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_31886 = f__29737__auto__();
(statearr_31886[(6)] = c__29736__auto___33656);

return statearr_31886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31904 = arguments.length;
switch (G__31904) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29736__auto___33688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_31946){
var state_val_31947 = (state_31946[(1)]);
if((state_val_31947 === (7))){
var inst_31923 = (state_31946[(7)]);
var inst_31924 = (state_31946[(8)]);
var inst_31923__$1 = (state_31946[(2)]);
var inst_31924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31923__$1,(0),null);
var inst_31925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31923__$1,(1),null);
var inst_31926 = (inst_31924__$1 == null);
var state_31946__$1 = (function (){var statearr_31957 = state_31946;
(statearr_31957[(7)] = inst_31923__$1);

(statearr_31957[(8)] = inst_31924__$1);

(statearr_31957[(9)] = inst_31925);

return statearr_31957;
})();
if(cljs.core.truth_(inst_31926)){
var statearr_31958_33689 = state_31946__$1;
(statearr_31958_33689[(1)] = (8));

} else {
var statearr_31959_33691 = state_31946__$1;
(statearr_31959_33691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (1))){
var inst_31913 = cljs.core.vec(chs);
var inst_31914 = inst_31913;
var state_31946__$1 = (function (){var statearr_31961 = state_31946;
(statearr_31961[(10)] = inst_31914);

return statearr_31961;
})();
var statearr_31962_33692 = state_31946__$1;
(statearr_31962_33692[(2)] = null);

(statearr_31962_33692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (4))){
var inst_31914 = (state_31946[(10)]);
var state_31946__$1 = state_31946;
return cljs.core.async.ioc_alts_BANG_(state_31946__$1,(7),inst_31914);
} else {
if((state_val_31947 === (6))){
var inst_31941 = (state_31946[(2)]);
var state_31946__$1 = state_31946;
var statearr_31964_33693 = state_31946__$1;
(statearr_31964_33693[(2)] = inst_31941);

(statearr_31964_33693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (3))){
var inst_31943 = (state_31946[(2)]);
var state_31946__$1 = state_31946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31946__$1,inst_31943);
} else {
if((state_val_31947 === (2))){
var inst_31914 = (state_31946[(10)]);
var inst_31916 = cljs.core.count(inst_31914);
var inst_31917 = (inst_31916 > (0));
var state_31946__$1 = state_31946;
if(cljs.core.truth_(inst_31917)){
var statearr_31968_33695 = state_31946__$1;
(statearr_31968_33695[(1)] = (4));

} else {
var statearr_31969_33696 = state_31946__$1;
(statearr_31969_33696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (11))){
var inst_31914 = (state_31946[(10)]);
var inst_31934 = (state_31946[(2)]);
var tmp31965 = inst_31914;
var inst_31914__$1 = tmp31965;
var state_31946__$1 = (function (){var statearr_31970 = state_31946;
(statearr_31970[(11)] = inst_31934);

(statearr_31970[(10)] = inst_31914__$1);

return statearr_31970;
})();
var statearr_31971_33697 = state_31946__$1;
(statearr_31971_33697[(2)] = null);

(statearr_31971_33697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (9))){
var inst_31924 = (state_31946[(8)]);
var state_31946__$1 = state_31946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31946__$1,(11),out,inst_31924);
} else {
if((state_val_31947 === (5))){
var inst_31939 = cljs.core.async.close_BANG_(out);
var state_31946__$1 = state_31946;
var statearr_31972_33698 = state_31946__$1;
(statearr_31972_33698[(2)] = inst_31939);

(statearr_31972_33698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (10))){
var inst_31937 = (state_31946[(2)]);
var state_31946__$1 = state_31946;
var statearr_31973_33699 = state_31946__$1;
(statearr_31973_33699[(2)] = inst_31937);

(statearr_31973_33699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (8))){
var inst_31923 = (state_31946[(7)]);
var inst_31924 = (state_31946[(8)]);
var inst_31925 = (state_31946[(9)]);
var inst_31914 = (state_31946[(10)]);
var inst_31929 = (function (){var cs = inst_31914;
var vec__31919 = inst_31923;
var v = inst_31924;
var c = inst_31925;
return (function (p1__31895_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31895_SHARP_);
});
})();
var inst_31930 = cljs.core.filterv(inst_31929,inst_31914);
var inst_31914__$1 = inst_31930;
var state_31946__$1 = (function (){var statearr_31975 = state_31946;
(statearr_31975[(10)] = inst_31914__$1);

return statearr_31975;
})();
var statearr_31976_33703 = state_31946__$1;
(statearr_31976_33703[(2)] = null);

(statearr_31976_33703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_31985 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31985[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_31985[(1)] = (1));

return statearr_31985;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_31946){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_31946);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e31990){var ex__29458__auto__ = e31990;
var statearr_31991_33704 = state_31946;
(statearr_31991_33704[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_31946[(4)]))){
var statearr_32000_33705 = state_31946;
(statearr_32000_33705[(1)] = cljs.core.first((state_31946[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33707 = state_31946;
state_31946 = G__33707;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_31946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_31946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32001 = f__29737__auto__();
(statearr_32001[(6)] = c__29736__auto___33688);

return statearr_32001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32003 = arguments.length;
switch (G__32003) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29736__auto___33709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_32027){
var state_val_32028 = (state_32027[(1)]);
if((state_val_32028 === (7))){
var inst_32009 = (state_32027[(7)]);
var inst_32009__$1 = (state_32027[(2)]);
var inst_32010 = (inst_32009__$1 == null);
var inst_32011 = cljs.core.not(inst_32010);
var state_32027__$1 = (function (){var statearr_32029 = state_32027;
(statearr_32029[(7)] = inst_32009__$1);

return statearr_32029;
})();
if(inst_32011){
var statearr_32030_33710 = state_32027__$1;
(statearr_32030_33710[(1)] = (8));

} else {
var statearr_32031_33711 = state_32027__$1;
(statearr_32031_33711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (1))){
var inst_32004 = (0);
var state_32027__$1 = (function (){var statearr_32032 = state_32027;
(statearr_32032[(8)] = inst_32004);

return statearr_32032;
})();
var statearr_32033_33712 = state_32027__$1;
(statearr_32033_33712[(2)] = null);

(statearr_32033_33712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (4))){
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32027__$1,(7),ch);
} else {
if((state_val_32028 === (6))){
var inst_32022 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32034_33713 = state_32027__$1;
(statearr_32034_33713[(2)] = inst_32022);

(statearr_32034_33713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (3))){
var inst_32024 = (state_32027[(2)]);
var inst_32025 = cljs.core.async.close_BANG_(out);
var state_32027__$1 = (function (){var statearr_32035 = state_32027;
(statearr_32035[(9)] = inst_32024);

return statearr_32035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32027__$1,inst_32025);
} else {
if((state_val_32028 === (2))){
var inst_32004 = (state_32027[(8)]);
var inst_32006 = (inst_32004 < n);
var state_32027__$1 = state_32027;
if(cljs.core.truth_(inst_32006)){
var statearr_32036_33714 = state_32027__$1;
(statearr_32036_33714[(1)] = (4));

} else {
var statearr_32038_33715 = state_32027__$1;
(statearr_32038_33715[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (11))){
var inst_32004 = (state_32027[(8)]);
var inst_32014 = (state_32027[(2)]);
var inst_32015 = (inst_32004 + (1));
var inst_32004__$1 = inst_32015;
var state_32027__$1 = (function (){var statearr_32039 = state_32027;
(statearr_32039[(10)] = inst_32014);

(statearr_32039[(8)] = inst_32004__$1);

return statearr_32039;
})();
var statearr_32040_33716 = state_32027__$1;
(statearr_32040_33716[(2)] = null);

(statearr_32040_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (9))){
var state_32027__$1 = state_32027;
var statearr_32041_33717 = state_32027__$1;
(statearr_32041_33717[(2)] = null);

(statearr_32041_33717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (5))){
var state_32027__$1 = state_32027;
var statearr_32042_33718 = state_32027__$1;
(statearr_32042_33718[(2)] = null);

(statearr_32042_33718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (10))){
var inst_32019 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32043_33719 = state_32027__$1;
(statearr_32043_33719[(2)] = inst_32019);

(statearr_32043_33719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (8))){
var inst_32009 = (state_32027[(7)]);
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32027__$1,(11),out,inst_32009);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_32044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32044[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_32044[(1)] = (1));

return statearr_32044;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_32027){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_32027);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e32045){var ex__29458__auto__ = e32045;
var statearr_32046_33720 = state_32027;
(statearr_32046_33720[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_32027[(4)]))){
var statearr_32047_33721 = state_32027;
(statearr_32047_33721[(1)] = cljs.core.first((state_32027[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33722 = state_32027;
state_32027 = G__33722;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_32027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_32027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32048 = f__29737__auto__();
(statearr_32048[(6)] = c__29736__auto___33709);

return statearr_32048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32050 = (function (f,ch,meta32051){
this.f = f;
this.ch = ch;
this.meta32051 = meta32051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32052,meta32051__$1){
var self__ = this;
var _32052__$1 = this;
return (new cljs.core.async.t_cljs$core$async32050(self__.f,self__.ch,meta32051__$1));
}));

(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32052){
var self__ = this;
var _32052__$1 = this;
return self__.meta32051;
}));

(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32056 = (function (f,ch,meta32051,_,fn1,meta32057){
this.f = f;
this.ch = ch;
this.meta32051 = meta32051;
this._ = _;
this.fn1 = fn1;
this.meta32057 = meta32057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32058,meta32057__$1){
var self__ = this;
var _32058__$1 = this;
return (new cljs.core.async.t_cljs$core$async32056(self__.f,self__.ch,self__.meta32051,self__._,self__.fn1,meta32057__$1));
}));

(cljs.core.async.t_cljs$core$async32056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32058){
var self__ = this;
var _32058__$1 = this;
return self__.meta32057;
}));

(cljs.core.async.t_cljs$core$async32056.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32049_SHARP_){
var G__32062 = (((p1__32049_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32049_SHARP_) : self__.f.call(null,p1__32049_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32062) : f1.call(null,G__32062));
});
}));

(cljs.core.async.t_cljs$core$async32056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32051","meta32051",1938333876,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32050","cljs.core.async/t_cljs$core$async32050",-10298066,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32057","meta32057",-721504562,null)], null);
}));

(cljs.core.async.t_cljs$core$async32056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32056");

(cljs.core.async.t_cljs$core$async32056.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32056.
 */
cljs.core.async.__GT_t_cljs$core$async32056 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32056(f__$1,ch__$1,meta32051__$1,___$2,fn1__$1,meta32057){
return (new cljs.core.async.t_cljs$core$async32056(f__$1,ch__$1,meta32051__$1,___$2,fn1__$1,meta32057));
});

}

return (new cljs.core.async.t_cljs$core$async32056(self__.f,self__.ch,self__.meta32051,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32069 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32069) : self__.f.call(null,G__32069));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32051","meta32051",1938333876,null)], null);
}));

(cljs.core.async.t_cljs$core$async32050.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32050");

(cljs.core.async.t_cljs$core$async32050.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32050");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32050.
 */
cljs.core.async.__GT_t_cljs$core$async32050 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32050(f__$1,ch__$1,meta32051){
return (new cljs.core.async.t_cljs$core$async32050(f__$1,ch__$1,meta32051));
});

}

return (new cljs.core.async.t_cljs$core$async32050(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32095 = (function (f,ch,meta32096){
this.f = f;
this.ch = ch;
this.meta32096 = meta32096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32097,meta32096__$1){
var self__ = this;
var _32097__$1 = this;
return (new cljs.core.async.t_cljs$core$async32095(self__.f,self__.ch,meta32096__$1));
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32097){
var self__ = this;
var _32097__$1 = this;
return self__.meta32096;
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32096","meta32096",-651993443,null)], null);
}));

(cljs.core.async.t_cljs$core$async32095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32095");

(cljs.core.async.t_cljs$core$async32095.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32095.
 */
cljs.core.async.__GT_t_cljs$core$async32095 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32095(f__$1,ch__$1,meta32096){
return (new cljs.core.async.t_cljs$core$async32095(f__$1,ch__$1,meta32096));
});

}

return (new cljs.core.async.t_cljs$core$async32095(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32128 = (function (p,ch,meta32129){
this.p = p;
this.ch = ch;
this.meta32129 = meta32129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32131,meta32129__$1){
var self__ = this;
var _32131__$1 = this;
return (new cljs.core.async.t_cljs$core$async32128(self__.p,self__.ch,meta32129__$1));
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32131){
var self__ = this;
var _32131__$1 = this;
return self__.meta32129;
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32129","meta32129",756680363,null)], null);
}));

(cljs.core.async.t_cljs$core$async32128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32128");

(cljs.core.async.t_cljs$core$async32128.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32128.
 */
cljs.core.async.__GT_t_cljs$core$async32128 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32128(p__$1,ch__$1,meta32129){
return (new cljs.core.async.t_cljs$core$async32128(p__$1,ch__$1,meta32129));
});

}

return (new cljs.core.async.t_cljs$core$async32128(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32149 = arguments.length;
switch (G__32149) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29736__auto___33738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_32170){
var state_val_32171 = (state_32170[(1)]);
if((state_val_32171 === (7))){
var inst_32166 = (state_32170[(2)]);
var state_32170__$1 = state_32170;
var statearr_32173_33739 = state_32170__$1;
(statearr_32173_33739[(2)] = inst_32166);

(statearr_32173_33739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32171 === (1))){
var state_32170__$1 = state_32170;
var statearr_32174_33740 = state_32170__$1;
(statearr_32174_33740[(2)] = null);

(statearr_32174_33740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32171 === (4))){
var inst_32152 = (state_32170[(7)]);
var inst_32152__$1 = (state_32170[(2)]);
var inst_32153 = (inst_32152__$1 == null);
var state_32170__$1 = (function (){var statearr_32177 = state_32170;
(statearr_32177[(7)] = inst_32152__$1);

return statearr_32177;
})();
if(cljs.core.truth_(inst_32153)){
var statearr_32178_33742 = state_32170__$1;
(statearr_32178_33742[(1)] = (5));

} else {
var statearr_32180_33746 = state_32170__$1;
(statearr_32180_33746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32171 === (6))){
var inst_32152 = (state_32170[(7)]);
var inst_32157 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32152) : p.call(null,inst_32152));
var state_32170__$1 = state_32170;
if(cljs.core.truth_(inst_32157)){
var statearr_32181_33747 = state_32170__$1;
(statearr_32181_33747[(1)] = (8));

} else {
var statearr_32182_33748 = state_32170__$1;
(statearr_32182_33748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32171 === (3))){
var inst_32168 = (state_32170[(2)]);
var state_32170__$1 = state_32170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32170__$1,inst_32168);
} else {
if((state_val_32171 === (2))){
var state_32170__$1 = state_32170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32170__$1,(4),ch);
} else {
if((state_val_32171 === (11))){
var inst_32160 = (state_32170[(2)]);
var state_32170__$1 = state_32170;
var statearr_32183_33753 = state_32170__$1;
(statearr_32183_33753[(2)] = inst_32160);

(statearr_32183_33753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32171 === (9))){
var state_32170__$1 = state_32170;
var statearr_32184_33755 = state_32170__$1;
(statearr_32184_33755[(2)] = null);

(statearr_32184_33755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32171 === (5))){
var inst_32155 = cljs.core.async.close_BANG_(out);
var state_32170__$1 = state_32170;
var statearr_32216_33756 = state_32170__$1;
(statearr_32216_33756[(2)] = inst_32155);

(statearr_32216_33756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32171 === (10))){
var inst_32163 = (state_32170[(2)]);
var state_32170__$1 = (function (){var statearr_32222 = state_32170;
(statearr_32222[(8)] = inst_32163);

return statearr_32222;
})();
var statearr_32226_33757 = state_32170__$1;
(statearr_32226_33757[(2)] = null);

(statearr_32226_33757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32171 === (8))){
var inst_32152 = (state_32170[(7)]);
var state_32170__$1 = state_32170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32170__$1,(11),out,inst_32152);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_32228 = [null,null,null,null,null,null,null,null,null];
(statearr_32228[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_32228[(1)] = (1));

return statearr_32228;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_32170){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_32170);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e32229){var ex__29458__auto__ = e32229;
var statearr_32230_33759 = state_32170;
(statearr_32230_33759[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_32170[(4)]))){
var statearr_32231_33761 = state_32170;
(statearr_32231_33761[(1)] = cljs.core.first((state_32170[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33762 = state_32170;
state_32170 = G__33762;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_32170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_32170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32232 = f__29737__auto__();
(statearr_32232[(6)] = c__29736__auto___33738);

return statearr_32232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32235 = arguments.length;
switch (G__32235) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_32365){
var state_val_32366 = (state_32365[(1)]);
if((state_val_32366 === (7))){
var inst_32357 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32379_33777 = state_32365__$1;
(statearr_32379_33777[(2)] = inst_32357);

(statearr_32379_33777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (20))){
var inst_32267 = (state_32365[(7)]);
var inst_32292 = (state_32365[(2)]);
var inst_32296 = cljs.core.next(inst_32267);
var inst_32253 = inst_32296;
var inst_32254 = null;
var inst_32255 = (0);
var inst_32256 = (0);
var state_32365__$1 = (function (){var statearr_32387 = state_32365;
(statearr_32387[(8)] = inst_32253);

(statearr_32387[(9)] = inst_32255);

(statearr_32387[(10)] = inst_32292);

(statearr_32387[(11)] = inst_32256);

(statearr_32387[(12)] = inst_32254);

return statearr_32387;
})();
var statearr_32392_33778 = state_32365__$1;
(statearr_32392_33778[(2)] = null);

(statearr_32392_33778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (1))){
var state_32365__$1 = state_32365;
var statearr_32393_33780 = state_32365__$1;
(statearr_32393_33780[(2)] = null);

(statearr_32393_33780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (4))){
var inst_32241 = (state_32365[(13)]);
var inst_32241__$1 = (state_32365[(2)]);
var inst_32242 = (inst_32241__$1 == null);
var state_32365__$1 = (function (){var statearr_32397 = state_32365;
(statearr_32397[(13)] = inst_32241__$1);

return statearr_32397;
})();
if(cljs.core.truth_(inst_32242)){
var statearr_32398_33781 = state_32365__$1;
(statearr_32398_33781[(1)] = (5));

} else {
var statearr_32399_33782 = state_32365__$1;
(statearr_32399_33782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (15))){
var state_32365__$1 = state_32365;
var statearr_32405_33783 = state_32365__$1;
(statearr_32405_33783[(2)] = null);

(statearr_32405_33783[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (21))){
var state_32365__$1 = state_32365;
var statearr_32407_33784 = state_32365__$1;
(statearr_32407_33784[(2)] = null);

(statearr_32407_33784[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (13))){
var inst_32253 = (state_32365[(8)]);
var inst_32255 = (state_32365[(9)]);
var inst_32256 = (state_32365[(11)]);
var inst_32254 = (state_32365[(12)]);
var inst_32263 = (state_32365[(2)]);
var inst_32264 = (inst_32256 + (1));
var tmp32400 = inst_32253;
var tmp32401 = inst_32255;
var tmp32402 = inst_32254;
var inst_32253__$1 = tmp32400;
var inst_32254__$1 = tmp32402;
var inst_32255__$1 = tmp32401;
var inst_32256__$1 = inst_32264;
var state_32365__$1 = (function (){var statearr_32411 = state_32365;
(statearr_32411[(8)] = inst_32253__$1);

(statearr_32411[(9)] = inst_32255__$1);

(statearr_32411[(14)] = inst_32263);

(statearr_32411[(11)] = inst_32256__$1);

(statearr_32411[(12)] = inst_32254__$1);

return statearr_32411;
})();
var statearr_32412_33785 = state_32365__$1;
(statearr_32412_33785[(2)] = null);

(statearr_32412_33785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (22))){
var state_32365__$1 = state_32365;
var statearr_32416_33786 = state_32365__$1;
(statearr_32416_33786[(2)] = null);

(statearr_32416_33786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (6))){
var inst_32241 = (state_32365[(13)]);
var inst_32251 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32241) : f.call(null,inst_32241));
var inst_32252 = cljs.core.seq(inst_32251);
var inst_32253 = inst_32252;
var inst_32254 = null;
var inst_32255 = (0);
var inst_32256 = (0);
var state_32365__$1 = (function (){var statearr_32421 = state_32365;
(statearr_32421[(8)] = inst_32253);

(statearr_32421[(9)] = inst_32255);

(statearr_32421[(11)] = inst_32256);

(statearr_32421[(12)] = inst_32254);

return statearr_32421;
})();
var statearr_32422_33787 = state_32365__$1;
(statearr_32422_33787[(2)] = null);

(statearr_32422_33787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (17))){
var inst_32267 = (state_32365[(7)]);
var inst_32273 = cljs.core.chunk_first(inst_32267);
var inst_32284 = cljs.core.chunk_rest(inst_32267);
var inst_32287 = cljs.core.count(inst_32273);
var inst_32253 = inst_32284;
var inst_32254 = inst_32273;
var inst_32255 = inst_32287;
var inst_32256 = (0);
var state_32365__$1 = (function (){var statearr_32423 = state_32365;
(statearr_32423[(8)] = inst_32253);

(statearr_32423[(9)] = inst_32255);

(statearr_32423[(11)] = inst_32256);

(statearr_32423[(12)] = inst_32254);

return statearr_32423;
})();
var statearr_32424_33788 = state_32365__$1;
(statearr_32424_33788[(2)] = null);

(statearr_32424_33788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (3))){
var inst_32359 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32365__$1,inst_32359);
} else {
if((state_val_32366 === (12))){
var inst_32305 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32429_33789 = state_32365__$1;
(statearr_32429_33789[(2)] = inst_32305);

(statearr_32429_33789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (2))){
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32365__$1,(4),in$);
} else {
if((state_val_32366 === (23))){
var inst_32355 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32433_33790 = state_32365__$1;
(statearr_32433_33790[(2)] = inst_32355);

(statearr_32433_33790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (19))){
var inst_32300 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32436_33791 = state_32365__$1;
(statearr_32436_33791[(2)] = inst_32300);

(statearr_32436_33791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (11))){
var inst_32253 = (state_32365[(8)]);
var inst_32267 = (state_32365[(7)]);
var inst_32267__$1 = cljs.core.seq(inst_32253);
var state_32365__$1 = (function (){var statearr_32439 = state_32365;
(statearr_32439[(7)] = inst_32267__$1);

return statearr_32439;
})();
if(inst_32267__$1){
var statearr_32441_33795 = state_32365__$1;
(statearr_32441_33795[(1)] = (14));

} else {
var statearr_32444_33796 = state_32365__$1;
(statearr_32444_33796[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (9))){
var inst_32307 = (state_32365[(2)]);
var inst_32342 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32365__$1 = (function (){var statearr_32449 = state_32365;
(statearr_32449[(15)] = inst_32307);

return statearr_32449;
})();
if(cljs.core.truth_(inst_32342)){
var statearr_32451_33797 = state_32365__$1;
(statearr_32451_33797[(1)] = (21));

} else {
var statearr_32453_33798 = state_32365__$1;
(statearr_32453_33798[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (5))){
var inst_32244 = cljs.core.async.close_BANG_(out);
var state_32365__$1 = state_32365;
var statearr_32456_33799 = state_32365__$1;
(statearr_32456_33799[(2)] = inst_32244);

(statearr_32456_33799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (14))){
var inst_32267 = (state_32365[(7)]);
var inst_32271 = cljs.core.chunked_seq_QMARK_(inst_32267);
var state_32365__$1 = state_32365;
if(inst_32271){
var statearr_32460_33800 = state_32365__$1;
(statearr_32460_33800[(1)] = (17));

} else {
var statearr_32463_33801 = state_32365__$1;
(statearr_32463_33801[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (16))){
var inst_32303 = (state_32365[(2)]);
var state_32365__$1 = state_32365;
var statearr_32466_33802 = state_32365__$1;
(statearr_32466_33802[(2)] = inst_32303);

(statearr_32466_33802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32366 === (10))){
var inst_32256 = (state_32365[(11)]);
var inst_32254 = (state_32365[(12)]);
var inst_32261 = cljs.core._nth(inst_32254,inst_32256);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32365__$1,(13),out,inst_32261);
} else {
if((state_val_32366 === (18))){
var inst_32267 = (state_32365[(7)]);
var inst_32290 = cljs.core.first(inst_32267);
var state_32365__$1 = state_32365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32365__$1,(20),out,inst_32290);
} else {
if((state_val_32366 === (8))){
var inst_32255 = (state_32365[(9)]);
var inst_32256 = (state_32365[(11)]);
var inst_32258 = (inst_32256 < inst_32255);
var inst_32259 = inst_32258;
var state_32365__$1 = state_32365;
if(cljs.core.truth_(inst_32259)){
var statearr_32469_33807 = state_32365__$1;
(statearr_32469_33807[(1)] = (10));

} else {
var statearr_32472_33808 = state_32365__$1;
(statearr_32472_33808[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29455__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29455__auto____0 = (function (){
var statearr_32473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32473[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29455__auto__);

(statearr_32473[(1)] = (1));

return statearr_32473;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29455__auto____1 = (function (state_32365){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_32365);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e32474){var ex__29458__auto__ = e32474;
var statearr_32475_33812 = state_32365;
(statearr_32475_33812[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_32365[(4)]))){
var statearr_32476_33813 = state_32365;
(statearr_32476_33813[(1)] = cljs.core.first((state_32365[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33814 = state_32365;
state_32365 = G__33814;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29455__auto__ = function(state_32365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29455__auto____1.call(this,state_32365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29455__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29455__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32482 = f__29737__auto__();
(statearr_32482[(6)] = c__29736__auto__);

return statearr_32482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32492 = arguments.length;
switch (G__32492) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32506 = arguments.length;
switch (G__32506) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32519 = arguments.length;
switch (G__32519) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29736__auto___33818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_32558){
var state_val_32559 = (state_32558[(1)]);
if((state_val_32559 === (7))){
var inst_32553 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32569_33819 = state_32558__$1;
(statearr_32569_33819[(2)] = inst_32553);

(statearr_32569_33819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (1))){
var inst_32533 = null;
var state_32558__$1 = (function (){var statearr_32574 = state_32558;
(statearr_32574[(7)] = inst_32533);

return statearr_32574;
})();
var statearr_32577_33820 = state_32558__$1;
(statearr_32577_33820[(2)] = null);

(statearr_32577_33820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (4))){
var inst_32536 = (state_32558[(8)]);
var inst_32536__$1 = (state_32558[(2)]);
var inst_32537 = (inst_32536__$1 == null);
var inst_32538 = cljs.core.not(inst_32537);
var state_32558__$1 = (function (){var statearr_32579 = state_32558;
(statearr_32579[(8)] = inst_32536__$1);

return statearr_32579;
})();
if(inst_32538){
var statearr_32580_33821 = state_32558__$1;
(statearr_32580_33821[(1)] = (5));

} else {
var statearr_32581_33822 = state_32558__$1;
(statearr_32581_33822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (6))){
var state_32558__$1 = state_32558;
var statearr_32582_33823 = state_32558__$1;
(statearr_32582_33823[(2)] = null);

(statearr_32582_33823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (3))){
var inst_32555 = (state_32558[(2)]);
var inst_32556 = cljs.core.async.close_BANG_(out);
var state_32558__$1 = (function (){var statearr_32583 = state_32558;
(statearr_32583[(9)] = inst_32555);

return statearr_32583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32558__$1,inst_32556);
} else {
if((state_val_32559 === (2))){
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32558__$1,(4),ch);
} else {
if((state_val_32559 === (11))){
var inst_32536 = (state_32558[(8)]);
var inst_32547 = (state_32558[(2)]);
var inst_32533 = inst_32536;
var state_32558__$1 = (function (){var statearr_32597 = state_32558;
(statearr_32597[(7)] = inst_32533);

(statearr_32597[(10)] = inst_32547);

return statearr_32597;
})();
var statearr_32599_33827 = state_32558__$1;
(statearr_32599_33827[(2)] = null);

(statearr_32599_33827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (9))){
var inst_32536 = (state_32558[(8)]);
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32558__$1,(11),out,inst_32536);
} else {
if((state_val_32559 === (5))){
var inst_32533 = (state_32558[(7)]);
var inst_32536 = (state_32558[(8)]);
var inst_32542 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32536,inst_32533);
var state_32558__$1 = state_32558;
if(inst_32542){
var statearr_32603_33857 = state_32558__$1;
(statearr_32603_33857[(1)] = (8));

} else {
var statearr_32605_33858 = state_32558__$1;
(statearr_32605_33858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (10))){
var inst_32550 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32607_33859 = state_32558__$1;
(statearr_32607_33859[(2)] = inst_32550);

(statearr_32607_33859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (8))){
var inst_32533 = (state_32558[(7)]);
var tmp32601 = inst_32533;
var inst_32533__$1 = tmp32601;
var state_32558__$1 = (function (){var statearr_32612 = state_32558;
(statearr_32612[(7)] = inst_32533__$1);

return statearr_32612;
})();
var statearr_32616_33860 = state_32558__$1;
(statearr_32616_33860[(2)] = null);

(statearr_32616_33860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_32633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32633[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_32633[(1)] = (1));

return statearr_32633;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_32558){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_32558);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e32639){var ex__29458__auto__ = e32639;
var statearr_32644_33881 = state_32558;
(statearr_32644_33881[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_32558[(4)]))){
var statearr_32651_33882 = state_32558;
(statearr_32651_33882[(1)] = cljs.core.first((state_32558[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33883 = state_32558;
state_32558 = G__33883;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_32558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_32558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32653 = f__29737__auto__();
(statearr_32653[(6)] = c__29736__auto___33818);

return statearr_32653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32661 = arguments.length;
switch (G__32661) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29736__auto___33885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_32700){
var state_val_32701 = (state_32700[(1)]);
if((state_val_32701 === (7))){
var inst_32696 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32703_33886 = state_32700__$1;
(statearr_32703_33886[(2)] = inst_32696);

(statearr_32703_33886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (1))){
var inst_32663 = (new Array(n));
var inst_32664 = inst_32663;
var inst_32665 = (0);
var state_32700__$1 = (function (){var statearr_32704 = state_32700;
(statearr_32704[(7)] = inst_32664);

(statearr_32704[(8)] = inst_32665);

return statearr_32704;
})();
var statearr_32705_33887 = state_32700__$1;
(statearr_32705_33887[(2)] = null);

(statearr_32705_33887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (4))){
var inst_32668 = (state_32700[(9)]);
var inst_32668__$1 = (state_32700[(2)]);
var inst_32669 = (inst_32668__$1 == null);
var inst_32670 = cljs.core.not(inst_32669);
var state_32700__$1 = (function (){var statearr_32706 = state_32700;
(statearr_32706[(9)] = inst_32668__$1);

return statearr_32706;
})();
if(inst_32670){
var statearr_32707_33888 = state_32700__$1;
(statearr_32707_33888[(1)] = (5));

} else {
var statearr_32708_33889 = state_32700__$1;
(statearr_32708_33889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (15))){
var inst_32690 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32709_33896 = state_32700__$1;
(statearr_32709_33896[(2)] = inst_32690);

(statearr_32709_33896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (13))){
var state_32700__$1 = state_32700;
var statearr_32710_33897 = state_32700__$1;
(statearr_32710_33897[(2)] = null);

(statearr_32710_33897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (6))){
var inst_32665 = (state_32700[(8)]);
var inst_32686 = (inst_32665 > (0));
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32686)){
var statearr_32711_33898 = state_32700__$1;
(statearr_32711_33898[(1)] = (12));

} else {
var statearr_32712_33899 = state_32700__$1;
(statearr_32712_33899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (3))){
var inst_32698 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32700__$1,inst_32698);
} else {
if((state_val_32701 === (12))){
var inst_32664 = (state_32700[(7)]);
var inst_32688 = cljs.core.vec(inst_32664);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32700__$1,(15),out,inst_32688);
} else {
if((state_val_32701 === (2))){
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32700__$1,(4),ch);
} else {
if((state_val_32701 === (11))){
var inst_32680 = (state_32700[(2)]);
var inst_32681 = (new Array(n));
var inst_32664 = inst_32681;
var inst_32665 = (0);
var state_32700__$1 = (function (){var statearr_32713 = state_32700;
(statearr_32713[(7)] = inst_32664);

(statearr_32713[(10)] = inst_32680);

(statearr_32713[(8)] = inst_32665);

return statearr_32713;
})();
var statearr_32714_33900 = state_32700__$1;
(statearr_32714_33900[(2)] = null);

(statearr_32714_33900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (9))){
var inst_32664 = (state_32700[(7)]);
var inst_32678 = cljs.core.vec(inst_32664);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32700__$1,(11),out,inst_32678);
} else {
if((state_val_32701 === (5))){
var inst_32668 = (state_32700[(9)]);
var inst_32664 = (state_32700[(7)]);
var inst_32673 = (state_32700[(11)]);
var inst_32665 = (state_32700[(8)]);
var inst_32672 = (inst_32664[inst_32665] = inst_32668);
var inst_32673__$1 = (inst_32665 + (1));
var inst_32674 = (inst_32673__$1 < n);
var state_32700__$1 = (function (){var statearr_32715 = state_32700;
(statearr_32715[(12)] = inst_32672);

(statearr_32715[(11)] = inst_32673__$1);

return statearr_32715;
})();
if(cljs.core.truth_(inst_32674)){
var statearr_32716_33901 = state_32700__$1;
(statearr_32716_33901[(1)] = (8));

} else {
var statearr_32717_33902 = state_32700__$1;
(statearr_32717_33902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (14))){
var inst_32693 = (state_32700[(2)]);
var inst_32694 = cljs.core.async.close_BANG_(out);
var state_32700__$1 = (function (){var statearr_32719 = state_32700;
(statearr_32719[(13)] = inst_32693);

return statearr_32719;
})();
var statearr_32720_33903 = state_32700__$1;
(statearr_32720_33903[(2)] = inst_32694);

(statearr_32720_33903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (10))){
var inst_32684 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32721_33904 = state_32700__$1;
(statearr_32721_33904[(2)] = inst_32684);

(statearr_32721_33904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (8))){
var inst_32664 = (state_32700[(7)]);
var inst_32673 = (state_32700[(11)]);
var tmp32718 = inst_32664;
var inst_32664__$1 = tmp32718;
var inst_32665 = inst_32673;
var state_32700__$1 = (function (){var statearr_32722 = state_32700;
(statearr_32722[(7)] = inst_32664__$1);

(statearr_32722[(8)] = inst_32665);

return statearr_32722;
})();
var statearr_32723_33905 = state_32700__$1;
(statearr_32723_33905[(2)] = null);

(statearr_32723_33905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_32725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32725[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_32725[(1)] = (1));

return statearr_32725;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_32700){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_32700);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e32726){var ex__29458__auto__ = e32726;
var statearr_32727_33906 = state_32700;
(statearr_32727_33906[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_32700[(4)]))){
var statearr_32728_33907 = state_32700;
(statearr_32728_33907[(1)] = cljs.core.first((state_32700[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33908 = state_32700;
state_32700 = G__33908;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_32700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_32700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32729 = f__29737__auto__();
(statearr_32729[(6)] = c__29736__auto___33885);

return statearr_32729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32731 = arguments.length;
switch (G__32731) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29736__auto___33910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32778_33911 = state_32776__$1;
(statearr_32778_33911[(2)] = inst_32772);

(statearr_32778_33911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var inst_32732 = [];
var inst_32733 = inst_32732;
var inst_32734 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32776__$1 = (function (){var statearr_32779 = state_32776;
(statearr_32779[(7)] = inst_32734);

(statearr_32779[(8)] = inst_32733);

return statearr_32779;
})();
var statearr_32780_33912 = state_32776__$1;
(statearr_32780_33912[(2)] = null);

(statearr_32780_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32737 = (state_32776[(9)]);
var inst_32737__$1 = (state_32776[(2)]);
var inst_32738 = (inst_32737__$1 == null);
var inst_32739 = cljs.core.not(inst_32738);
var state_32776__$1 = (function (){var statearr_32781 = state_32776;
(statearr_32781[(9)] = inst_32737__$1);

return statearr_32781;
})();
if(inst_32739){
var statearr_32782_33913 = state_32776__$1;
(statearr_32782_33913[(1)] = (5));

} else {
var statearr_32783_33914 = state_32776__$1;
(statearr_32783_33914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (15))){
var inst_32733 = (state_32776[(8)]);
var inst_32764 = cljs.core.vec(inst_32733);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32776__$1,(18),out,inst_32764);
} else {
if((state_val_32777 === (13))){
var inst_32759 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32785_33915 = state_32776__$1;
(statearr_32785_33915[(2)] = inst_32759);

(statearr_32785_33915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var inst_32733 = (state_32776[(8)]);
var inst_32761 = inst_32733.length;
var inst_32762 = (inst_32761 > (0));
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32762)){
var statearr_32786_33916 = state_32776__$1;
(statearr_32786_33916[(1)] = (15));

} else {
var statearr_32787_33917 = state_32776__$1;
(statearr_32787_33917[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (17))){
var inst_32769 = (state_32776[(2)]);
var inst_32770 = cljs.core.async.close_BANG_(out);
var state_32776__$1 = (function (){var statearr_32788 = state_32776;
(statearr_32788[(10)] = inst_32769);

return statearr_32788;
})();
var statearr_32789_33918 = state_32776__$1;
(statearr_32789_33918[(2)] = inst_32770);

(statearr_32789_33918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (12))){
var inst_32733 = (state_32776[(8)]);
var inst_32752 = cljs.core.vec(inst_32733);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32776__$1,(14),out,inst_32752);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32776__$1,(4),ch);
} else {
if((state_val_32777 === (11))){
var inst_32737 = (state_32776[(9)]);
var inst_32741 = (state_32776[(11)]);
var inst_32733 = (state_32776[(8)]);
var inst_32749 = inst_32733.push(inst_32737);
var tmp32790 = inst_32733;
var inst_32733__$1 = tmp32790;
var inst_32734 = inst_32741;
var state_32776__$1 = (function (){var statearr_32791 = state_32776;
(statearr_32791[(12)] = inst_32749);

(statearr_32791[(7)] = inst_32734);

(statearr_32791[(8)] = inst_32733__$1);

return statearr_32791;
})();
var statearr_32792_33925 = state_32776__$1;
(statearr_32792_33925[(2)] = null);

(statearr_32792_33925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var inst_32734 = (state_32776[(7)]);
var inst_32745 = cljs.core.keyword_identical_QMARK_(inst_32734,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32776__$1 = state_32776;
var statearr_32793_33926 = state_32776__$1;
(statearr_32793_33926[(2)] = inst_32745);

(statearr_32793_33926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var inst_32737 = (state_32776[(9)]);
var inst_32742 = (state_32776[(13)]);
var inst_32741 = (state_32776[(11)]);
var inst_32734 = (state_32776[(7)]);
var inst_32741__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32737) : f.call(null,inst_32737));
var inst_32742__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32741__$1,inst_32734);
var state_32776__$1 = (function (){var statearr_32794 = state_32776;
(statearr_32794[(13)] = inst_32742__$1);

(statearr_32794[(11)] = inst_32741__$1);

return statearr_32794;
})();
if(inst_32742__$1){
var statearr_32795_33947 = state_32776__$1;
(statearr_32795_33947[(1)] = (8));

} else {
var statearr_32796_33948 = state_32776__$1;
(statearr_32796_33948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (14))){
var inst_32737 = (state_32776[(9)]);
var inst_32741 = (state_32776[(11)]);
var inst_32754 = (state_32776[(2)]);
var inst_32755 = [];
var inst_32756 = inst_32755.push(inst_32737);
var inst_32733 = inst_32755;
var inst_32734 = inst_32741;
var state_32776__$1 = (function (){var statearr_32797 = state_32776;
(statearr_32797[(14)] = inst_32754);

(statearr_32797[(15)] = inst_32756);

(statearr_32797[(7)] = inst_32734);

(statearr_32797[(8)] = inst_32733);

return statearr_32797;
})();
var statearr_32798_33949 = state_32776__$1;
(statearr_32798_33949[(2)] = null);

(statearr_32798_33949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (16))){
var state_32776__$1 = state_32776;
var statearr_32799_33950 = state_32776__$1;
(statearr_32799_33950[(2)] = null);

(statearr_32799_33950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32747 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32747)){
var statearr_32800_33951 = state_32776__$1;
(statearr_32800_33951[(1)] = (11));

} else {
var statearr_32801_33953 = state_32776__$1;
(statearr_32801_33953[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (18))){
var inst_32766 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32802_33955 = state_32776__$1;
(statearr_32802_33955[(2)] = inst_32766);

(statearr_32802_33955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32742 = (state_32776[(13)]);
var state_32776__$1 = state_32776;
var statearr_32804_33956 = state_32776__$1;
(statearr_32804_33956[(2)] = inst_32742);

(statearr_32804_33956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29455__auto__ = null;
var cljs$core$async$state_machine__29455__auto____0 = (function (){
var statearr_32805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32805[(0)] = cljs$core$async$state_machine__29455__auto__);

(statearr_32805[(1)] = (1));

return statearr_32805;
});
var cljs$core$async$state_machine__29455__auto____1 = (function (state_32776){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_32776);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e32806){var ex__29458__auto__ = e32806;
var statearr_32807_33957 = state_32776;
(statearr_32807_33957[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_32776[(4)]))){
var statearr_32808_33959 = state_32776;
(statearr_32808_33959[(1)] = cljs.core.first((state_32776[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33963 = state_32776;
state_32776 = G__33963;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
cljs$core$async$state_machine__29455__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29455__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29455__auto____0;
cljs$core$async$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29455__auto____1;
return cljs$core$async$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32809 = f__29737__auto__();
(statearr_32809[(6)] = c__29736__auto___33910);

return statearr_32809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "Pub", { enumerable: false, get: function() { return cljs.core.async.Pub; } });
Object.defineProperty(module.exports, "reduce", { enumerable: false, get: function() { return cljs.core.async.reduce; } });
Object.defineProperty(module.exports, "remove_GT_", { enumerable: false, get: function() { return cljs.core.async.remove_GT_; } });
Object.defineProperty(module.exports, "t_cljs$core$async30800", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async30800; } });
Object.defineProperty(module.exports, "timeout", { enumerable: false, get: function() { return cljs.core.async.timeout; } });
Object.defineProperty(module.exports, "unsub_STAR_", { enumerable: false, get: function() { return cljs.core.async.unsub_STAR_; } });
Object.defineProperty(module.exports, "admix_STAR_", { enumerable: false, get: function() { return cljs.core.async.admix_STAR_; } });
Object.defineProperty(module.exports, "unmix_STAR_", { enumerable: false, get: function() { return cljs.core.async.unmix_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async29900", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async29900; } });
Object.defineProperty(module.exports, "mapcat_STAR_", { enumerable: false, get: function() { return cljs.core.async.mapcat_STAR_; } });
Object.defineProperty(module.exports, "mix", { enumerable: false, get: function() { return cljs.core.async.mix; } });
Object.defineProperty(module.exports, "pub", { enumerable: false, get: function() { return cljs.core.async.pub; } });
Object.defineProperty(module.exports, "take", { enumerable: false, get: function() { return cljs.core.async.take; } });
Object.defineProperty(module.exports, "unsub_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.unsub_all_STAR_; } });
Object.defineProperty(module.exports, "_LT__BANG_", { enumerable: false, get: function() { return cljs.core.async._LT__BANG_; } });
Object.defineProperty(module.exports, "map", { enumerable: false, get: function() { return cljs.core.async.map; } });
Object.defineProperty(module.exports, "Mux", { enumerable: false, get: function() { return cljs.core.async.Mux; } });
Object.defineProperty(module.exports, "mapcat_GT_", { enumerable: false, get: function() { return cljs.core.async.mapcat_GT_; } });
Object.defineProperty(module.exports, "fhnop", { enumerable: false, get: function() { return cljs.core.async.fhnop; } });
Object.defineProperty(module.exports, "t_cljs$core$async32128", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async32128; } });
Object.defineProperty(module.exports, "buffer", { enumerable: false, get: function() { return cljs.core.async.buffer; } });
Object.defineProperty(module.exports, "close_BANG_", { enumerable: false, get: function() { return cljs.core.async.close_BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async32050", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async32050; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async32095", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async32095; } });
Object.defineProperty(module.exports, "offer_BANG_", { enumerable: false, get: function() { return cljs.core.async.offer_BANG_; } });
Object.defineProperty(module.exports, "chan", { enumerable: false, get: function() { return cljs.core.async.chan; } });
Object.defineProperty(module.exports, "solo_mode_STAR_", { enumerable: false, get: function() { return cljs.core.async.solo_mode_STAR_; } });
Object.defineProperty(module.exports, "onto_chan_BANG_", { enumerable: false, get: function() { return cljs.core.async.onto_chan_BANG_; } });
Object.defineProperty(module.exports, "tap", { enumerable: false, get: function() { return cljs.core.async.tap; } });
Object.defineProperty(module.exports, "admix", { enumerable: false, get: function() { return cljs.core.async.admix; } });
Object.defineProperty(module.exports, "promise_chan", { enumerable: false, get: function() { return cljs.core.async.promise_chan; } });
Object.defineProperty(module.exports, "unique", { enumerable: false, get: function() { return cljs.core.async.unique; } });
Object.defineProperty(module.exports, "muxch_STAR_", { enumerable: false, get: function() { return cljs.core.async.muxch_STAR_; } });
Object.defineProperty(module.exports, "solo_mode", { enumerable: false, get: function() { return cljs.core.async.solo_mode; } });
Object.defineProperty(module.exports, "transduce", { enumerable: false, get: function() { return cljs.core.async.transduce; } });
Object.defineProperty(module.exports, "onto_chan", { enumerable: false, get: function() { return cljs.core.async.onto_chan; } });
Object.defineProperty(module.exports, "t_cljs$core$async29900", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async29900; } });
Object.defineProperty(module.exports, "to_chan", { enumerable: false, get: function() { return cljs.core.async.to_chan; } });
Object.defineProperty(module.exports, "dropping_buffer", { enumerable: false, get: function() { return cljs.core.async.dropping_buffer; } });
Object.defineProperty(module.exports, "untap_all", { enumerable: false, get: function() { return cljs.core.async.untap_all; } });
Object.defineProperty(module.exports, "into", { enumerable: false, get: function() { return cljs.core.async.into; } });
Object.defineProperty(module.exports, "to_chan_BANG_", { enumerable: false, get: function() { return cljs.core.async.to_chan_BANG_; } });
Object.defineProperty(module.exports, "pipeline", { enumerable: false, get: function() { return cljs.core.async.pipeline; } });
Object.defineProperty(module.exports, "sub", { enumerable: false, get: function() { return cljs.core.async.sub; } });
Object.defineProperty(module.exports, "t_cljs$core$async32056", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async32056; } });
Object.defineProperty(module.exports, "alt_flag", { enumerable: false, get: function() { return cljs.core.async.alt_flag; } });
Object.defineProperty(module.exports, "t_cljs$core$async32095", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async32095; } });
Object.defineProperty(module.exports, "map_GT_", { enumerable: false, get: function() { return cljs.core.async.map_GT_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async32056", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async32056; } });
Object.defineProperty(module.exports, "pipeline_STAR_", { enumerable: false, get: function() { return cljs.core.async.pipeline_STAR_; } });
Object.defineProperty(module.exports, "pipe", { enumerable: false, get: function() { return cljs.core.async.pipe; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async31370", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async31370; } });
Object.defineProperty(module.exports, "unmix", { enumerable: false, get: function() { return cljs.core.async.unmix; } });
Object.defineProperty(module.exports, "filter_LT_", { enumerable: false, get: function() { return cljs.core.async.filter_LT_; } });
Object.defineProperty(module.exports, "sub_STAR_", { enumerable: false, get: function() { return cljs.core.async.sub_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async29821", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async29821; } });
Object.defineProperty(module.exports, "remove_LT_", { enumerable: false, get: function() { return cljs.core.async.remove_LT_; } });
Object.defineProperty(module.exports, "t_cljs$core$async31370", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async31370; } });
Object.defineProperty(module.exports, "untap_STAR_", { enumerable: false, get: function() { return cljs.core.async.untap_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async32050", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async32050; } });
Object.defineProperty(module.exports, "toggle", { enumerable: false, get: function() { return cljs.core.async.toggle; } });
Object.defineProperty(module.exports, "untap_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.untap_all_STAR_; } });
Object.defineProperty(module.exports, "sliding_buffer", { enumerable: false, get: function() { return cljs.core.async.sliding_buffer; } });
Object.defineProperty(module.exports, "partition", { enumerable: false, get: function() { return cljs.core.async.partition; } });
Object.defineProperty(module.exports, "Mult", { enumerable: false, get: function() { return cljs.core.async.Mult; } });
Object.defineProperty(module.exports, "merge", { enumerable: false, get: function() { return cljs.core.async.merge; } });
Object.defineProperty(module.exports, "partition_by", { enumerable: false, get: function() { return cljs.core.async.partition_by; } });
Object.defineProperty(module.exports, "unsub_all", { enumerable: false, get: function() { return cljs.core.async.unsub_all; } });
Object.defineProperty(module.exports, "_GT__BANG_", { enumerable: false, get: function() { return cljs.core.async._GT__BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async30800", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async30800; } });
Object.defineProperty(module.exports, "unmix_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.unmix_all_STAR_; } });
Object.defineProperty(module.exports, "nop", { enumerable: false, get: function() { return cljs.core.async.nop; } });
Object.defineProperty(module.exports, "split", { enumerable: false, get: function() { return cljs.core.async.split; } });
Object.defineProperty(module.exports, "unmix_all", { enumerable: false, get: function() { return cljs.core.async.unmix_all; } });
Object.defineProperty(module.exports, "filter_GT_", { enumerable: false, get: function() { return cljs.core.async.filter_GT_; } });
Object.defineProperty(module.exports, "tap_STAR_", { enumerable: false, get: function() { return cljs.core.async.tap_STAR_; } });
Object.defineProperty(module.exports, "untap", { enumerable: false, get: function() { return cljs.core.async.untap; } });
Object.defineProperty(module.exports, "alt_handler", { enumerable: false, get: function() { return cljs.core.async.alt_handler; } });
Object.defineProperty(module.exports, "alts_BANG_", { enumerable: false, get: function() { return cljs.core.async.alts_BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async32128", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async32128; } });
Object.defineProperty(module.exports, "unsub", { enumerable: false, get: function() { return cljs.core.async.unsub; } });
Object.defineProperty(module.exports, "poll_BANG_", { enumerable: false, get: function() { return cljs.core.async.poll_BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async31201", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async31201; } });
Object.defineProperty(module.exports, "t_cljs$core$async29923", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async29923; } });
Object.defineProperty(module.exports, "map_LT_", { enumerable: false, get: function() { return cljs.core.async.map_LT_; } });
Object.defineProperty(module.exports, "fn_handler", { enumerable: false, get: function() { return cljs.core.async.fn_handler; } });
Object.defineProperty(module.exports, "do_alts", { enumerable: false, get: function() { return cljs.core.async.do_alts; } });
Object.defineProperty(module.exports, "random_array", { enumerable: false, get: function() { return cljs.core.async.random_array; } });
Object.defineProperty(module.exports, "pipeline_async", { enumerable: false, get: function() { return cljs.core.async.pipeline_async; } });
Object.defineProperty(module.exports, "Mix", { enumerable: false, get: function() { return cljs.core.async.Mix; } });
Object.defineProperty(module.exports, "toggle_STAR_", { enumerable: false, get: function() { return cljs.core.async.toggle_STAR_; } });
Object.defineProperty(module.exports, "mult", { enumerable: false, get: function() { return cljs.core.async.mult; } });
Object.defineProperty(module.exports, "mapcat_LT_", { enumerable: false, get: function() { return cljs.core.async.mapcat_LT_; } });
Object.defineProperty(module.exports, "ioc_alts_BANG_", { enumerable: false, get: function() { return cljs.core.async.ioc_alts_BANG_; } });
Object.defineProperty(module.exports, "unblocking_buffer_QMARK_", { enumerable: false, get: function() { return cljs.core.async.unblocking_buffer_QMARK_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async29923", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async29923; } });
Object.defineProperty(module.exports, "t_cljs$core$async31201", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async31201; } });
Object.defineProperty(module.exports, "t_cljs$core$async29821", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async29821; } });
Object.defineProperty(module.exports, "put_BANG_", { enumerable: false, get: function() { return cljs.core.async.put_BANG_; } });
Object.defineProperty(module.exports, "take_BANG_", { enumerable: false, get: function() { return cljs.core.async.take_BANG_; } });
//# sourceMappingURL=cljs.core.async.js.map
