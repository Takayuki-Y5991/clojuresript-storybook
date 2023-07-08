var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("rum.cursor.js");

goog.provide('rum.cursor');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.cursor.Cursor = (function (ref,path,meta){
this.ref = ref;
this.path = path;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(rum.cursor.Cursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
}));

(rum.cursor.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,"#object [rum.cursor.Cursor ");

cljs.core.pr_writer(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),this$__$1.cljs$core$IDeref$_deref$arity$1(null)], null),writer,opts);

return cljs.core._write(writer,"]");
}));

(rum.cursor.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(rum.cursor.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(rum.cursor.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
}));

(rum.cursor.Cursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,newv){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ref,cljs.core.assoc_in,self__.path,newv);

return newv;
}));

(rum.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__26370 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26370) : f.call(null,G__26370));
})());
}));

(rum.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__26371 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
var G__26372 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26371,G__26372) : f.call(null,G__26371,G__26372));
})());
}));

(rum.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__26376 = this$__$1.cljs$core$IDeref$_deref$arity$1(null);
var G__26377 = a;
var G__26378 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26376,G__26377,G__26378) : f.call(null,G__26376,G__26377,G__26378));
})());
}));

(rum.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,rest){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.cljs$core$IDeref$_deref$arity$1(null),a,b,rest));
}));

(rum.cursor.Cursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__.ref,(new cljs.core.List(null,this$__$1,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(function (_,___$1,oldv,newv){
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oldv,self__.path);
var new$ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(newv,self__.path);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return (callback.cljs$core$IFn$_invoke$arity$4 ? callback.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : callback.call(null,key,this$__$1,old,new$));
} else {
return null;
}
}));

return this$__$1;
}));

(rum.cursor.Cursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch(self__.ref,(new cljs.core.List(null,this$__$1,(new cljs.core.List(null,key,null,(1),null)),(2),null)));

return this$__$1;
}));

(rum.cursor.Cursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(self__.ref),self__.path);
}));

(rum.cursor.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(rum.cursor.Cursor.cljs$lang$type = true);

(rum.cursor.Cursor.cljs$lang$ctorStr = "rum.cursor/Cursor");

(rum.cursor.Cursor.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"rum.cursor/Cursor");
}));

/**
 * Positional factory function for rum.cursor/Cursor.
 */
rum.cursor.__GT_Cursor = (function rum$cursor$__GT_Cursor(ref,path,meta){
return (new rum.cursor.Cursor(ref,path,meta));
});

Object.defineProperty(module.exports, "Cursor", { enumerable: false, get: function() { return rum.cursor.Cursor; } });
Object.defineProperty(module.exports, "__GT_Cursor", { enumerable: false, get: function() { return rum.cursor.__GT_Cursor; } });
//# sourceMappingURL=rum.cursor.js.map
