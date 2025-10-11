var wE=Object.defineProperty;var CE=(s,e,t)=>e in s?wE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var xl=(s,e,t)=>CE(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var ad={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function LE(){if($v)return yl;$v=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:s,type:i,key:c,ref:a!==void 0?a:null,props:l}}return yl.Fragment=e,yl.jsx=t,yl.jsxs=t,yl}var e0;function DE(){return e0||(e0=1,ad.exports=LE()),ad.exports}var Xe=DE(),od={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function UE(){if(t0)return ft;t0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function M(N,ee,ve){this.props=N,this.context=ee,this.refs=E,this.updater=ve||x}M.prototype.isReactComponent={},M.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=M.prototype;function U(N,ee,ve){this.props=N,this.context=ee,this.refs=E,this.updater=ve||x}var D=U.prototype=new y;D.constructor=U,S(D,M.prototype),D.isPureReactComponent=!0;var A=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function I(N,ee,ve,Me,Q,he){return ve=he.ref,{$$typeof:s,type:N,key:ee,ref:ve!==void 0?ve:null,props:he}}function G(N,ee){return I(N.type,ee,void 0,void 0,void 0,N.props)}function L(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function w(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ve){return ee[ve]})}var V=/\/+/g;function te(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):ee.toString(36)}function re(){}function de(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(re,re):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ue(N,ee,ve,Me,Q){var he=typeof N;(he==="undefined"||he==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(he){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case s:case e:ye=!0;break;case m:return ye=N._init,ue(ye(N._payload),ee,ve,Me,Q)}}if(ye)return Q=Q(N),ye=Me===""?"."+te(N,0):Me,A(Q)?(ve="",ye!=null&&(ve=ye.replace(V,"$&/")+"/"),ue(Q,ee,ve,"",function(Ye){return Ye})):Q!=null&&(L(Q)&&(Q=G(Q,ve+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(V,"$&/")+"/")+ye)),ee.push(Q)),1;ye=0;var Ae=Me===""?".":Me+":";if(A(N))for(var Ne=0;Ne<N.length;Ne++)Me=N[Ne],he=Ae+te(Me,Ne),ye+=ue(Me,ee,ve,he,Q);else if(Ne=v(N),typeof Ne=="function")for(N=Ne.call(N),Ne=0;!(Me=N.next()).done;)Me=Me.value,he=Ae+te(Me,Ne++),ye+=ue(Me,ee,ve,he,Q);else if(he==="object"){if(typeof N.then=="function")return ue(de(N),ee,ve,Me,Q);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ye}function z(N,ee,ve){if(N==null)return N;var Me=[],Q=0;return ue(N,Me,"","",function(he){return ee.call(ve,he,Q++)}),Me}function j(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(ve){(N._status===0||N._status===-1)&&(N._status=1,N._result=ve)},function(ve){(N._status===0||N._status===-1)&&(N._status=2,N._result=ve)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function xe(){}return ft.Children={map:z,forEach:function(N,ee,ve){z(N,function(){ee.apply(this,arguments)},ve)},count:function(N){var ee=0;return z(N,function(){ee++}),ee},toArray:function(N){return z(N,function(ee){return ee})||[]},only:function(N){if(!L(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ft.Component=M,ft.Fragment=t,ft.Profiler=a,ft.PureComponent=U,ft.StrictMode=i,ft.Suspense=h,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ft.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ft.cache=function(N){return function(){return N.apply(null,arguments)}},ft.cloneElement=function(N,ee,ve){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Me=S({},N.props),Q=N.key,he=void 0;if(ee!=null)for(ye in ee.ref!==void 0&&(he=void 0),ee.key!==void 0&&(Q=""+ee.key),ee)!B.call(ee,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ee.ref===void 0||(Me[ye]=ee[ye]);var ye=arguments.length-2;if(ye===1)Me.children=ve;else if(1<ye){for(var Ae=Array(ye),Ne=0;Ne<ye;Ne++)Ae[Ne]=arguments[Ne+2];Me.children=Ae}return I(N.type,Q,void 0,void 0,he,Me)},ft.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},ft.createElement=function(N,ee,ve){var Me,Q={},he=null;if(ee!=null)for(Me in ee.key!==void 0&&(he=""+ee.key),ee)B.call(ee,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Q[Me]=ee[Me]);var ye=arguments.length-2;if(ye===1)Q.children=ve;else if(1<ye){for(var Ae=Array(ye),Ne=0;Ne<ye;Ne++)Ae[Ne]=arguments[Ne+2];Q.children=Ae}if(N&&N.defaultProps)for(Me in ye=N.defaultProps,ye)Q[Me]===void 0&&(Q[Me]=ye[Me]);return I(N,he,void 0,void 0,null,Q)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:f,render:N}},ft.isValidElement=L,ft.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:j}},ft.memo=function(N,ee){return{$$typeof:d,type:N,compare:ee===void 0?null:ee}},ft.startTransition=function(N){var ee=P.T,ve={};P.T=ve;try{var Me=N(),Q=P.S;Q!==null&&Q(ve,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(xe,Y)}catch(he){Y(he)}finally{P.T=ee}},ft.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ft.use=function(N){return P.H.use(N)},ft.useActionState=function(N,ee,ve){return P.H.useActionState(N,ee,ve)},ft.useCallback=function(N,ee){return P.H.useCallback(N,ee)},ft.useContext=function(N){return P.H.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N,ee){return P.H.useDeferredValue(N,ee)},ft.useEffect=function(N,ee,ve){var Me=P.H;if(typeof ve=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(N,ee)},ft.useId=function(){return P.H.useId()},ft.useImperativeHandle=function(N,ee,ve){return P.H.useImperativeHandle(N,ee,ve)},ft.useInsertionEffect=function(N,ee){return P.H.useInsertionEffect(N,ee)},ft.useLayoutEffect=function(N,ee){return P.H.useLayoutEffect(N,ee)},ft.useMemo=function(N,ee){return P.H.useMemo(N,ee)},ft.useOptimistic=function(N,ee){return P.H.useOptimistic(N,ee)},ft.useReducer=function(N,ee,ve){return P.H.useReducer(N,ee,ve)},ft.useRef=function(N){return P.H.useRef(N)},ft.useState=function(N){return P.H.useState(N)},ft.useSyncExternalStore=function(N,ee,ve){return P.H.useSyncExternalStore(N,ee,ve)},ft.useTransition=function(){return P.H.useTransition()},ft.version="19.1.1",ft}var n0;function rm(){return n0||(n0=1,od.exports=UE()),od.exports}var fi=rm(),ld={exports:{}},Ml={},ud={exports:{}},cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function NE(){return i0||(i0=1,(function(s){function e(z,j){var Y=z.length;z.push(j);e:for(;0<Y;){var xe=Y-1>>>1,N=z[xe];if(0<a(N,j))z[xe]=j,z[Y]=N,Y=xe;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var j=z[0],Y=z.pop();if(Y!==j){z[0]=Y;e:for(var xe=0,N=z.length,ee=N>>>1;xe<ee;){var ve=2*(xe+1)-1,Me=z[ve],Q=ve+1,he=z[Q];if(0>a(Me,Y))Q<N&&0>a(he,Me)?(z[xe]=he,z[Q]=Y,xe=Q):(z[xe]=Me,z[ve]=Y,xe=ve);else if(Q<N&&0>a(he,Y))z[xe]=he,z[Q]=Y,xe=Q;else break e}}return j}function a(z,j){var Y=z.sortIndex-j.sortIndex;return Y!==0?Y:z.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],d=[],m=1,_=null,v=3,x=!1,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function A(z){for(var j=t(d);j!==null;){if(j.callback===null)i(d);else if(j.startTime<=z)i(d),j.sortIndex=j.expirationTime,e(h,j);else break;j=t(d)}}function P(z){if(E=!1,A(z),!S)if(t(h)!==null)S=!0,B||(B=!0,te());else{var j=t(d);j!==null&&ue(P,j.startTime-z)}}var B=!1,I=-1,G=5,L=-1;function w(){return M?!0:!(s.unstable_now()-L<G)}function V(){if(M=!1,B){var z=s.unstable_now();L=z;var j=!0;try{e:{S=!1,E&&(E=!1,U(I),I=-1),x=!0;var Y=v;try{t:{for(A(z),_=t(h);_!==null&&!(_.expirationTime>z&&w());){var xe=_.callback;if(typeof xe=="function"){_.callback=null,v=_.priorityLevel;var N=xe(_.expirationTime<=z);if(z=s.unstable_now(),typeof N=="function"){_.callback=N,A(z),j=!0;break t}_===t(h)&&i(h),A(z)}else i(h);_=t(h)}if(_!==null)j=!0;else{var ee=t(d);ee!==null&&ue(P,ee.startTime-z),j=!1}}break e}finally{_=null,v=Y,x=!1}j=void 0}}finally{j?te():B=!1}}}var te;if(typeof D=="function")te=function(){D(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,de=re.port2;re.port1.onmessage=V,te=function(){de.postMessage(null)}}else te=function(){y(V,0)};function ue(z,j){I=y(function(){z(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var Y=v;v=j;try{return z()}finally{v=Y}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=v;v=z;try{return j()}finally{v=Y}},s.unstable_scheduleCallback=function(z,j,Y){var xe=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xe+Y:xe):Y=xe,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,z={id:m++,callback:j,priorityLevel:z,startTime:Y,expirationTime:N,sortIndex:-1},Y>xe?(z.sortIndex=Y,e(d,z),t(h)===null&&z===t(d)&&(E?(U(I),I=-1):E=!0,ue(P,Y-xe))):(z.sortIndex=N,e(h,z),S||x||(S=!0,B||(B=!0,te()))),z},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(z){var j=v;return function(){var Y=v;v=j;try{return z.apply(this,arguments)}finally{v=Y}}}})(cd)),cd}var r0;function PE(){return r0||(r0=1,ud.exports=NE()),ud.exports}var fd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function OE(){if(s0)return In;s0=1;var s=rm();function e(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)d+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(h,d,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:_==null?null:""+_,children:h,containerInfo:d,implementation:m}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,In.createPortal=function(h,d){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(h,d,null,m)},In.flushSync=function(h){var d=c.T,m=i.p;try{if(c.T=null,i.p=2,h)return h()}finally{c.T=d,i.p=m,i.d.f()}},In.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,i.d.C(h,d))},In.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},In.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var m=d.as,_=f(m,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;m==="style"?i.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):m==="script"&&i.d.X(h,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},In.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var m=f(d.as,d.crossOrigin);i.d.M(h,{crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&i.d.M(h)},In.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var m=d.as,_=f(m,d.crossOrigin);i.d.L(h,m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},In.preloadModule=function(h,d){if(typeof h=="string")if(d){var m=f(d.as,d.crossOrigin);i.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else i.d.m(h)},In.requestFormReset=function(h){i.d.r(h)},In.unstable_batchedUpdates=function(h,d){return h(d)},In.useFormState=function(h,d,m){return c.H.useFormState(h,d,m)},In.useFormStatus=function(){return c.H.useHostTransitionStatus()},In.version="19.1.1",In}var a0;function IE(){if(a0)return fd.exports;a0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),fd.exports=OE(),fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function BE(){if(o0)return Ml;o0=1;var s=PE(),e=rm(),t=IE();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(i(188))}function h(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return f(p),n;if(g===u)return f(p),r;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=p,u=g;else{for(var T=!1,b=p.child;b;){if(b===o){T=!0,o=p,u=g;break}if(b===u){T=!0,u=p,o=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===o){T=!0,o=g,u=p;break}if(b===u){T=!0,u=g,o=p;break}b=b.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:r}function d(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=d(n),r!==null)return r;n=n.sibling}return null}var m=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var re=Symbol.for("react.client.reference");function de(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===re?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case M:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case B:return"SuspenseList";case L:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case D:return(n.displayName||"Context")+".Provider";case U:return(n._context.displayName||"Context")+".Consumer";case A:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return r=n.displayName||null,r!==null?r:de(n.type)||"Memo";case G:r=n._payload,n=n._init;try{return de(n(r))}catch{}}return null}var ue=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xe=[],N=-1;function ee(n){return{current:n}}function ve(n){0>N||(n.current=xe[N],xe[N]=null,N--)}function Me(n,r){N++,xe[N]=n.current,n.current=r}var Q=ee(null),he=ee(null),ye=ee(null),Ae=ee(null);function Ne(n,r){switch(Me(ye,r),Me(he,n),Me(Q,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Rv(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Rv(r),n=wv(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ve(Q),Me(Q,n)}function Ye(){ve(Q),ve(he),ve(ye)}function ot(n){n.memoizedState!==null&&Me(Ae,n);var r=Q.current,o=wv(r,n.type);r!==o&&(Me(he,n),Me(Q,o))}function Dt(n){he.current===n&&(ve(Q),ve(he)),Ae.current===n&&(ve(Ae),pl._currentValue=Y)}var ht=Object.prototype.hasOwnProperty,Ht=s.unstable_scheduleCallback,k=s.unstable_cancelCallback,Rn=s.unstable_shouldYield,pt=s.unstable_requestPaint,tt=s.unstable_now,Ge=s.unstable_getCurrentPriorityLevel,Ut=s.unstable_ImmediatePriority,He=s.unstable_UserBlockingPriority,O=s.unstable_NormalPriority,R=s.unstable_LowPriority,ne=s.unstable_IdlePriority,_e=s.log,Se=s.unstable_setDisableYieldValue,fe=null,Oe=null;function be(n){if(typeof _e=="function"&&Se(n),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(fe,n)}catch{}}var Re=Math.clz32?Math.clz32:Fe,ut=Math.log,Te=Math.LN2;function Fe(n){return n>>>=0,n===0?32:31-(ut(n)/Te|0)|0}var We=256,Ze=4194304;function Pe(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ct(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var p=0,g=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var b=u&134217727;return b!==0?(u=b&~g,u!==0?p=Pe(u):(T&=b,T!==0?p=Pe(T):o||(o=b&~n,o!==0&&(p=Pe(o))))):(b=u&~g,b!==0?p=Pe(b):T!==0?p=Pe(T):o||(o=u&~n,o!==0&&(p=Pe(o)))),p===0?0:r!==0&&r!==p&&(r&g)===0&&(g=p&-p,o=r&-r,g>=o||g===32&&(o&4194048)!==0)?r:p}function nt(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Nt(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var n=We;return We<<=1,(We&4194048)===0&&(We=256),n}function Le(){var n=Ze;return Ze<<=1,(Ze&62914560)===0&&(Ze=4194304),n}function le(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function me(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ue(n,r,o,u,p,g){var T=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var b=n.entanglements,H=n.expirationTimes,$=n.hiddenUpdates;for(o=T&~o;0<o;){var ce=31-Re(o),ge=1<<ce;b[ce]=0,H[ce]=-1;var ie=$[ce];if(ie!==null)for($[ce]=null,ce=0;ce<ie.length;ce++){var se=ie[ce];se!==null&&(se.lane&=-536870913)}o&=~ge}u!==0&&Ce(n,u,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(T&~r))}function Ce(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-Re(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function rt(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Re(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}function Vt(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Qt(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Tt(){var n=j.p;return n!==0?n:(n=window.event,n===void 0?32:Yv(n.type))}function zn(n,r){var o=j.p;try{return j.p=n,r()}finally{j.p=o}}var cn=Math.random().toString(36).slice(2),en="__reactFiber$"+cn,mn="__reactProps$"+cn,Nn="__reactContainer$"+cn,rr="__reactEvents$"+cn,ta="__reactListeners$"+cn,na="__reactHandles$"+cn,Ri="__reactResources$"+cn,wi="__reactMarker$"+cn;function Wi(n){delete n[en],delete n[mn],delete n[rr],delete n[ta],delete n[na]}function Ci(n){var r=n[en];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Nn]||o[en]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Uv(n);n!==null;){if(o=n[en])return o;n=Uv(n)}return r}n=o,o=n.parentNode}return null}function Xi(n){if(n=n[en]||n[Nn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function sr(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function Li(n){var r=n[Ri];return r||(r=n[Ri]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function tn(n){n[wi]=!0}var ia=new Set,ar={};function C(n,r){q(n,r),q(n+"Capture",r)}function q(n,r){for(ar[n]=r,n=0;n<r.length;n++)ia.add(r[n])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},K={};function Ee(n){return ht.call(K,n)?!0:ht.call(oe,n)?!1:ae.test(n)?K[n]=!0:(oe[n]=!0,!1)}function De(n,r,o){if(Ee(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function Be(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Ie(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var et,st;function Ve(n){if(et===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);et=r&&r[1]||"",st=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+n+st}var vt=!1;function At(n,r){if(!n||vt)return"";vt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(se){var ie=se}Reflect.construct(n,[],ge)}else{try{ge.call()}catch(se){ie=se}n.call(ge.prototype)}}else{try{throw Error()}catch(se){ie=se}(ge=n())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(se){if(se&&ie&&typeof se.stack=="string")return[se.stack,ie.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var H=T.split(`
`),$=b.split(`
`);for(p=u=0;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;for(;p<$.length&&!$[p].includes("DetermineComponentFrameRoot");)p++;if(u===H.length||p===$.length)for(u=H.length-1,p=$.length-1;1<=u&&0<=p&&H[u]!==$[p];)p--;for(;1<=u&&0<=p;u--,p--)if(H[u]!==$[p]){if(u!==1||p!==1)do if(u--,p--,0>p||H[u]!==$[p]){var ce=`
`+H[u].replace(" at new "," at ");return n.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",n.displayName)),ce}while(1<=u&&0<=p);break}}}finally{vt=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Ve(o):""}function nn(n){switch(n.tag){case 26:case 27:case 5:return Ve(n.type);case 16:return Ve("Lazy");case 13:return Ve("Suspense");case 19:return Ve("SuspenseList");case 0:case 15:return At(n.type,!1);case 11:return At(n.type.render,!1);case 1:return At(n.type,!0);case 31:return Ve("Activity");default:return""}}function Kt(n){try{var r="";do r+=nn(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function at(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gn(n){var r=je(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,g.call(this,T)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Et(n){n._valueTracker||(n._valueTracker=gn(n))}function Kn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=je(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Di(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Hn=/[\n"\\]/g;function Mn(n){return n.replace(Hn,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Gt(n,r,o,u,p,g,T,b){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),r!=null?T==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+at(r)):n.value!==""+at(r)&&(n.value=""+at(r)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),r!=null?Pn(n,T,at(r)):o!=null?Pn(n,T,at(o)):u!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+at(b):n.removeAttribute("name")}function Vn(n,r,o,u,p,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),r!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||r!=null))return;o=o!=null?""+at(o):"",r=r!=null?""+at(r):o,b||r===n.value||(n.value=r),n.defaultValue=r}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=b?n.checked:!!u,n.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function Pn(n,r,o){r==="number"&&Di(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function rn(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+at(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function wn(n,r,o){if(r!=null&&(r=""+at(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+at(o):""}function ra(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(i(92));if(ue(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=at(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Qn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var AM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rm(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||AM.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function wm(n,r,o){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var p in r)u=r[p],r.hasOwnProperty(p)&&o[p]!==u&&Rm(n,p,u)}else for(var g in r)r.hasOwnProperty(g)&&Rm(n,g,r[g])}function sf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),RM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(n){return RM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var af=null;function of(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sa=null,aa=null;function Cm(n){var r=Xi(n);if(r&&(n=r.stateNode)){var o=n[mn]||null;e:switch(n=r.stateNode,r.type){case"input":if(Gt(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Mn(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=u[mn]||null;if(!p)throw Error(i(90));Gt(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&Kn(u)}break e;case"textarea":wn(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&rn(n,!!o.multiple,r,!1)}}}var lf=!1;function Lm(n,r,o){if(lf)return n(r,o);lf=!0;try{var u=n(r);return u}finally{if(lf=!1,(sa!==null||aa!==null)&&(Ou(),sa&&(r=sa,n=aa,aa=sa=null,Cm(r),n)))for(r=0;r<n.length;r++)Cm(n[r])}}function Ro(n,r){var o=n.stateNode;if(o===null)return null;var u=o[mn]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=!1;if(or)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){uf=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{uf=!1}var Br=null,cf=null,Ql=null;function Dm(){if(Ql)return Ql;var n,r=cf,o=r.length,u,p="value"in Br?Br.value:Br.textContent,g=p.length;for(n=0;n<o&&r[n]===p[n];n++);var T=o-n;for(u=1;u<=T&&r[o-u]===p[g-u];u++);return Ql=p.slice(n,1<u?1-u:void 0)}function Jl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $l(){return!0}function Um(){return!1}function Jn(n){function r(o,u,p,g,T){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(o=n[b],this[b]=o?o(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?$l:Um,this.isPropagationStopped=Um,this}return m(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),r}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Jn(xs),Co=m({},xs,{view:0,detail:0}),wM=Jn(Co),ff,hf,Lo,tu=m({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(ff=n.screenX-Lo.screenX,hf=n.screenY-Lo.screenY):hf=ff=0,Lo=n),ff)},movementY:function(n){return"movementY"in n?n.movementY:hf}}),Nm=Jn(tu),CM=m({},tu,{dataTransfer:0}),LM=Jn(CM),DM=m({},Co,{relatedTarget:0}),df=Jn(DM),UM=m({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),NM=Jn(UM),PM=m({},xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),OM=Jn(PM),IM=m({},xs,{data:0}),Pm=Jn(IM),BM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HM(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=zM[n])?!!r[n]:!1}function pf(){return HM}var VM=m({},Co,{key:function(n){if(n.key){var r=BM[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Jl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?FM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(n){return n.type==="keypress"?Jl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),GM=Jn(VM),kM=m({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=Jn(kM),WM=m({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),XM=Jn(WM),qM=m({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),YM=Jn(qM),jM=m({},tu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ZM=Jn(jM),KM=m({},xs,{newState:0,oldState:0}),QM=Jn(KM),JM=[9,13,27,32],mf=or&&"CompositionEvent"in window,Do=null;or&&"documentMode"in document&&(Do=document.documentMode);var $M=or&&"TextEvent"in window&&!Do,Im=or&&(!mf||Do&&8<Do&&11>=Do),Bm=" ",Fm=!1;function zm(n,r){switch(n){case"keyup":return JM.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var oa=!1;function eS(n,r){switch(n){case"compositionend":return Hm(r);case"keypress":return r.which!==32?null:(Fm=!0,Bm);case"textInput":return n=r.data,n===Bm&&Fm?null:n;default:return null}}function tS(n,r){if(oa)return n==="compositionend"||!mf&&zm(n,r)?(n=Dm(),Ql=cf=Br=null,oa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Im&&r.locale!=="ko"?null:r.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!nS[n.type]:r==="textarea"}function Gm(n,r,o,u){sa?aa?aa.push(u):aa=[u]:sa=u,r=Vu(r,"onChange"),0<r.length&&(o=new eu("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Uo=null,No=null;function iS(n){Sv(n,0)}function nu(n){var r=sr(n);if(Kn(r))return n}function km(n,r){if(n==="change")return r}var Wm=!1;if(or){var gf;if(or){var _f="oninput"in document;if(!_f){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),_f=typeof Xm.oninput=="function"}gf=_f}else gf=!1;Wm=gf&&(!document.documentMode||9<document.documentMode)}function qm(){Uo&&(Uo.detachEvent("onpropertychange",Ym),No=Uo=null)}function Ym(n){if(n.propertyName==="value"&&nu(No)){var r=[];Gm(r,No,n,of(n)),Lm(iS,r)}}function rS(n,r,o){n==="focusin"?(qm(),Uo=r,No=o,Uo.attachEvent("onpropertychange",Ym)):n==="focusout"&&qm()}function sS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nu(No)}function aS(n,r){if(n==="click")return nu(r)}function oS(n,r){if(n==="input"||n==="change")return nu(r)}function lS(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ni=typeof Object.is=="function"?Object.is:lS;function Po(n,r){if(ni(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!ht.call(r,p)||!ni(n[p],r[p]))return!1}return!0}function jm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zm(n,r){var o=jm(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=jm(o)}}function Km(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Km(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Qm(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Di(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Di(n.document)}return r}function vf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var uS=or&&"documentMode"in document&&11>=document.documentMode,la=null,xf=null,Oo=null,yf=!1;function Jm(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;yf||la==null||la!==Di(u)||(u=la,"selectionStart"in u&&vf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Oo&&Po(Oo,u)||(Oo=u,u=Vu(xf,"onSelect"),0<u.length&&(r=new eu("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=la)))}function ys(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var ua={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},Mf={},$m={};or&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function Ms(n){if(Mf[n])return Mf[n];if(!ua[n])return n;var r=ua[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in $m)return Mf[n]=r[o];return n}var eg=Ms("animationend"),tg=Ms("animationiteration"),ng=Ms("animationstart"),cS=Ms("transitionrun"),fS=Ms("transitionstart"),hS=Ms("transitioncancel"),ig=Ms("transitionend"),rg=new Map,Sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sf.push("scrollEnd");function Ui(n,r){rg.set(n,r),C(r,[n])}var sg=new WeakMap;function mi(n,r){if(typeof n=="object"&&n!==null){var o=sg.get(n);return o!==void 0?o:(r={value:n,source:r,stack:Kt(r)},sg.set(n,r),r)}return{value:n,source:r,stack:Kt(r)}}var gi=[],ca=0,Ef=0;function iu(){for(var n=ca,r=Ef=ca=0;r<n;){var o=gi[r];gi[r++]=null;var u=gi[r];gi[r++]=null;var p=gi[r];gi[r++]=null;var g=gi[r];if(gi[r++]=null,u!==null&&p!==null){var T=u.pending;T===null?p.next=p:(p.next=T.next,T.next=p),u.pending=p}g!==0&&ag(o,p,g)}}function ru(n,r,o,u){gi[ca++]=n,gi[ca++]=r,gi[ca++]=o,gi[ca++]=u,Ef|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Tf(n,r,o,u){return ru(n,r,o,u),su(n)}function fa(n,r){return ru(n,null,null,r),su(n)}function ag(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var p=!1,g=n.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&r!==null&&(p=31-Re(o),n=g.hiddenUpdates,u=n[p],u===null?n[p]=[r]:u.push(r),r.lane=o|536870912),g):null}function su(n){if(50<al)throw al=0,Lh=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ha={};function dS(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,r,o,u){return new dS(n,r,o,u)}function Af(n){return n=n.prototype,!(!n||!n.isReactComponent)}function lr(n,r){var o=n.alternate;return o===null?(o=ii(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function og(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function au(n,r,o,u,p,g){var T=0;if(u=n,typeof n=="function")Af(n)&&(T=1);else if(typeof n=="string")T=mE(n,o,Q.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case L:return n=ii(31,o,r,p),n.elementType=L,n.lanes=g,n;case S:return Ss(o.children,p,g,r);case E:T=8,p|=24;break;case M:return n=ii(12,o,r,p|2),n.elementType=M,n.lanes=g,n;case P:return n=ii(13,o,r,p),n.elementType=P,n.lanes=g,n;case B:return n=ii(19,o,r,p),n.elementType=B,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case y:case D:T=10;break e;case U:T=9;break e;case A:T=11;break e;case I:T=14;break e;case G:T=16,u=null;break e}T=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return r=ii(T,o,r,p),r.elementType=n,r.type=u,r.lanes=g,r}function Ss(n,r,o,u){return n=ii(7,n,u,r),n.lanes=o,n}function bf(n,r,o){return n=ii(6,n,null,r),n.lanes=o,n}function Rf(n,r,o){return r=ii(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var da=[],pa=0,ou=null,lu=0,_i=[],vi=0,Es=null,ur=1,cr="";function Ts(n,r){da[pa++]=lu,da[pa++]=ou,ou=n,lu=r}function lg(n,r,o){_i[vi++]=ur,_i[vi++]=cr,_i[vi++]=Es,Es=n;var u=ur;n=cr;var p=32-Re(u)-1;u&=~(1<<p),o+=1;var g=32-Re(r)+p;if(30<g){var T=p-p%5;g=(u&(1<<T)-1).toString(32),u>>=T,p-=T,ur=1<<32-Re(r)+p|o<<p|u,cr=g+n}else ur=1<<g|o<<p|u,cr=n}function wf(n){n.return!==null&&(Ts(n,1),lg(n,1,0))}function Cf(n){for(;n===ou;)ou=da[--pa],da[pa]=null,lu=da[--pa],da[pa]=null;for(;n===Es;)Es=_i[--vi],_i[vi]=null,cr=_i[--vi],_i[vi]=null,ur=_i[--vi],_i[vi]=null}var Gn=null,sn=null,Pt=!1,As=null,qi=!1,Lf=Error(i(519));function bs(n){var r=Error(i(418,""));throw Fo(mi(r,n)),Lf}function ug(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[en]=n,r[mn]=u,o){case"dialog":yt("cancel",r),yt("close",r);break;case"iframe":case"object":case"embed":yt("load",r);break;case"video":case"audio":for(o=0;o<ll.length;o++)yt(ll[o],r);break;case"source":yt("error",r);break;case"img":case"image":case"link":yt("error",r),yt("load",r);break;case"details":yt("toggle",r);break;case"input":yt("invalid",r),Vn(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Et(r);break;case"select":yt("invalid",r);break;case"textarea":yt("invalid",r),ra(r,u.value,u.defaultValue,u.children),Et(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||bv(r.textContent,o)?(u.popover!=null&&(yt("beforetoggle",r),yt("toggle",r)),u.onScroll!=null&&yt("scroll",r),u.onScrollEnd!=null&&yt("scrollend",r),u.onClick!=null&&(r.onclick=Gu),r=!0):r=!1,r||bs(n)}function cg(n){for(Gn=n.return;Gn;)switch(Gn.tag){case 5:case 13:qi=!1;return;case 27:case 3:qi=!0;return;default:Gn=Gn.return}}function Io(n){if(n!==Gn)return!1;if(!Pt)return cg(n),Pt=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||qh(n.type,n.memoizedProps)),o=!o),o&&sn&&bs(n),cg(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){sn=Pi(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}sn=null}}else r===27?(r=sn,$r(n.type)?(n=Kh,Kh=null,sn=n):sn=r):sn=Gn?Pi(n.stateNode.nextSibling):null;return!0}function Bo(){sn=Gn=null,Pt=!1}function fg(){var n=As;return n!==null&&(ti===null?ti=n:ti.push.apply(ti,n),As=null),n}function Fo(n){As===null?As=[n]:As.push(n)}var Df=ee(null),Rs=null,fr=null;function Fr(n,r,o){Me(Df,r._currentValue),r._currentValue=o}function hr(n){n._currentValue=Df.current,ve(Df)}function Uf(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Nf(n,r,o,u){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var T=p.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=p;for(var H=0;H<r.length;H++)if(b.context===r[H]){g.lanes|=o,b=g.alternate,b!==null&&(b.lanes|=o),Uf(g.return,o,n),u||(T=null);break e}g=b.next}}else if(p.tag===18){if(T=p.return,T===null)throw Error(i(341));T.lanes|=o,g=T.alternate,g!==null&&(g.lanes|=o),Uf(T,o,n),T=null}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===n){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}}function zo(n,r,o,u){n=null;for(var p=r,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var T=p.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var b=p.type;ni(p.pendingProps.value,T.value)||(n!==null?n.push(b):n=[b])}}else if(p===Ae.current){if(T=p.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(pl):n=[pl])}p=p.return}n!==null&&Nf(r,n,o,u),r.flags|=262144}function uu(n){for(n=n.firstContext;n!==null;){if(!ni(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ws(n){Rs=n,fr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function On(n){return hg(Rs,n)}function cu(n,r){return Rs===null&&ws(n),hg(n,r)}function hg(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},fr===null){if(n===null)throw Error(i(308));fr=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else fr=fr.next=r;return o}var pS=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},mS=s.unstable_scheduleCallback,gS=s.unstable_NormalPriority,_n={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pf(){return{controller:new pS,data:new Map,refCount:0}}function Ho(n){n.refCount--,n.refCount===0&&mS(gS,function(){n.controller.abort()})}var Vo=null,Of=0,ma=0,ga=null;function _S(n,r){if(Vo===null){var o=Vo=[];Of=0,ma=Bh(),ga={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Of++,r.then(dg,dg),r}function dg(){if(--Of===0&&Vo!==null){ga!==null&&(ga.status="fulfilled");var n=Vo;Vo=null,ma=0,ga=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function vS(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var p=0;p<o.length;p++)(0,o[p])(r)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var pg=z.S;z.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&_S(n,r),pg!==null&&pg(n,r)};var Cs=ee(null);function If(){var n=Cs.current;return n!==null?n:Zt.pooledCache}function fu(n,r){r===null?Me(Cs,Cs.current):Me(Cs,r.pool)}function mg(){var n=If();return n===null?null:{parent:_n._currentValue,pool:n}}var Go=Error(i(460)),gg=Error(i(474)),hu=Error(i(542)),Bf={then:function(){}};function _g(n){return n=n.status,n==="fulfilled"||n==="rejected"}function du(){}function vg(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(du,du),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,yg(n),n;default:if(typeof r.status=="string")r.then(du,du);else{if(n=Zt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=u}},function(u){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,yg(n),n}throw ko=r,Go}}var ko=null;function xg(){if(ko===null)throw Error(i(459));var n=ko;return ko=null,n}function yg(n){if(n===Go||n===hu)throw Error(i(483))}var zr=!1;function Ff(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Hr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Vr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Bt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,r=su(n),ag(n,null,o),r}return ru(n,u,r,o),su(n)}function Wo(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,rt(n,o)}}function Hf(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?p=g=r:g=g.next=r}else p=g=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var Vf=!1;function Xo(){if(Vf){var n=ga;if(n!==null)throw n}}function qo(n,r,o,u){Vf=!1;var p=n.updateQueue;zr=!1;var g=p.firstBaseUpdate,T=p.lastBaseUpdate,b=p.shared.pending;if(b!==null){p.shared.pending=null;var H=b,$=H.next;H.next=null,T===null?g=$:T.next=$,T=H;var ce=n.alternate;ce!==null&&(ce=ce.updateQueue,b=ce.lastBaseUpdate,b!==T&&(b===null?ce.firstBaseUpdate=$:b.next=$,ce.lastBaseUpdate=H))}if(g!==null){var ge=p.baseState;T=0,ce=$=H=null,b=g;do{var ie=b.lane&-536870913,se=ie!==b.lane;if(se?(bt&ie)===ie:(u&ie)===ie){ie!==0&&ie===ma&&(Vf=!0),ce!==null&&(ce=ce.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var it=n,Ke=b;ie=r;var Xt=o;switch(Ke.tag){case 1:if(it=Ke.payload,typeof it=="function"){ge=it.call(Xt,ge,ie);break e}ge=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=Ke.payload,ie=typeof it=="function"?it.call(Xt,ge,ie):it,ie==null)break e;ge=m({},ge,ie);break e;case 2:zr=!0}}ie=b.callback,ie!==null&&(n.flags|=64,se&&(n.flags|=8192),se=p.callbacks,se===null?p.callbacks=[ie]:se.push(ie))}else se={lane:ie,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ce===null?($=ce=se,H=ge):ce=ce.next=se,T|=ie;if(b=b.next,b===null){if(b=p.shared.pending,b===null)break;se=b,b=se.next,se.next=null,p.lastBaseUpdate=se,p.shared.pending=null}}while(!0);ce===null&&(H=ge),p.baseState=H,p.firstBaseUpdate=$,p.lastBaseUpdate=ce,g===null&&(p.shared.lanes=0),Zr|=T,n.lanes=T,n.memoizedState=ge}}function Mg(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function Sg(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Mg(o[n],r)}var _a=ee(null),pu=ee(0);function Eg(n,r){n=xr,Me(pu,n),Me(_a,r),xr=n|r.baseLanes}function Gf(){Me(pu,xr),Me(_a,_a.current)}function kf(){xr=pu.current,ve(_a),ve(pu)}var Gr=0,mt=null,kt=null,fn=null,mu=!1,va=!1,Ls=!1,gu=0,Yo=0,xa=null,xS=0;function ln(){throw Error(i(321))}function Wf(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!ni(n[o],r[o]))return!1;return!0}function Xf(n,r,o,u,p,g){return Gr=g,mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,z.H=n===null||n.memoizedState===null?a_:o_,Ls=!1,g=o(u,p),Ls=!1,va&&(g=Ag(r,o,u,p)),Tg(n),g}function Tg(n){z.H=Su;var r=kt!==null&&kt.next!==null;if(Gr=0,fn=kt=mt=null,mu=!1,Yo=0,xa=null,r)throw Error(i(300));n===null||Sn||(n=n.dependencies,n!==null&&uu(n)&&(Sn=!0))}function Ag(n,r,o,u){mt=n;var p=0;do{if(va&&(xa=null),Yo=0,va=!1,25<=p)throw Error(i(301));if(p+=1,fn=kt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}z.H=bS,g=r(o,u)}while(va);return g}function yS(){var n=z.H,r=n.useState()[0];return r=typeof r.then=="function"?jo(r):r,n=n.useState()[0],(kt!==null?kt.memoizedState:null)!==n&&(mt.flags|=1024),r}function qf(){var n=gu!==0;return gu=0,n}function Yf(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function jf(n){if(mu){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}mu=!1}Gr=0,fn=kt=mt=null,va=!1,Yo=gu=0,xa=null}function $n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?mt.memoizedState=fn=n:fn=fn.next=n,fn}function hn(){if(kt===null){var n=mt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var r=fn===null?mt.memoizedState:fn.next;if(r!==null)fn=r,kt=n;else{if(n===null)throw mt.alternate===null?Error(i(467)):Error(i(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},fn===null?mt.memoizedState=fn=n:fn=fn.next=n}return fn}function Zf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(n){var r=Yo;return Yo+=1,xa===null&&(xa=[]),n=vg(xa,n,r),r=mt,(fn===null?r.memoizedState:fn.next)===null&&(r=r.alternate,z.H=r===null||r.memoizedState===null?a_:o_),n}function _u(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return jo(n);if(n.$$typeof===D)return On(n)}throw Error(i(438,String(n)))}function Kf(n){var r=null,o=mt.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=mt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Zf(),mt.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=w;return r.index++,o}function dr(n,r){return typeof r=="function"?r(n):r}function vu(n){var r=hn();return Qf(r,kt,n)}function Qf(n,r,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var p=n.baseQueue,g=u.pending;if(g!==null){if(p!==null){var T=p.next;p.next=g.next,g.next=T}r.baseQueue=p=g,u.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{r=p.next;var b=T=null,H=null,$=r,ce=!1;do{var ge=$.lane&-536870913;if(ge!==$.lane?(bt&ge)===ge:(Gr&ge)===ge){var ie=$.revertLane;if(ie===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ge===ma&&(ce=!0);else if((Gr&ie)===ie){$=$.next,ie===ma&&(ce=!0);continue}else ge={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(b=H=ge,T=g):H=H.next=ge,mt.lanes|=ie,Zr|=ie;ge=$.action,Ls&&o(g,ge),g=$.hasEagerState?$.eagerState:o(g,ge)}else ie={lane:ge,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(b=H=ie,T=g):H=H.next=ie,mt.lanes|=ge,Zr|=ge;$=$.next}while($!==null&&$!==r);if(H===null?T=g:H.next=b,!ni(g,n.memoizedState)&&(Sn=!0,ce&&(o=ga,o!==null)))throw o;n.memoizedState=g,n.baseState=T,n.baseQueue=H,u.lastRenderedState=g}return p===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Jf(n){var r=hn(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,g=r.memoizedState;if(p!==null){o.pending=null;var T=p=p.next;do g=n(g,T.action),T=T.next;while(T!==p);ni(g,r.memoizedState)||(Sn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function bg(n,r,o){var u=mt,p=hn(),g=Pt;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=r();var T=!ni((kt||p).memoizedState,o);T&&(p.memoizedState=o,Sn=!0),p=p.queue;var b=Cg.bind(null,u,p,n);if(Zo(2048,8,b,[n]),p.getSnapshot!==r||T||fn!==null&&fn.memoizedState.tag&1){if(u.flags|=2048,ya(9,xu(),wg.bind(null,u,p,o,r),null),Zt===null)throw Error(i(349));g||(Gr&124)!==0||Rg(u,r,o)}return o}function Rg(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=mt.updateQueue,r===null?(r=Zf(),mt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function wg(n,r,o,u){r.value=o,r.getSnapshot=u,Lg(r)&&Dg(n)}function Cg(n,r,o){return o(function(){Lg(r)&&Dg(n)})}function Lg(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!ni(n,o)}catch{return!0}}function Dg(n){var r=fa(n,2);r!==null&&li(r,n,2)}function $f(n){var r=$n();if(typeof n=="function"){var o=n;if(n=o(),Ls){be(!0);try{o()}finally{be(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:n},r}function Ug(n,r,o,u){return n.baseState=o,Qf(n,kt,typeof u=="function"?u:dr)}function MS(n,r,o,u,p){if(Mu(n))throw Error(i(485));if(n=r.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};z.T!==null?o(!0):g.isTransition=!1,u(g),o=r.pending,o===null?(g.next=r.pending=g,Ng(r,g)):(g.next=o.next,r.pending=o.next=g)}}function Ng(n,r){var o=r.action,u=r.payload,p=n.state;if(r.isTransition){var g=z.T,T={};z.T=T;try{var b=o(p,u),H=z.S;H!==null&&H(T,b),Pg(n,r,b)}catch($){eh(n,r,$)}finally{z.T=g}}else try{g=o(p,u),Pg(n,r,g)}catch($){eh(n,r,$)}}function Pg(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Og(n,r,u)},function(u){return eh(n,r,u)}):Og(n,r,o)}function Og(n,r,o){r.status="fulfilled",r.value=o,Ig(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Ng(n,o)))}function eh(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Ig(r),r=r.next;while(r!==u)}n.action=null}function Ig(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Bg(n,r){return r}function Fg(n,r){if(Pt){var o=Zt.formState;if(o!==null){e:{var u=mt;if(Pt){if(sn){t:{for(var p=sn,g=qi;p.nodeType!==8;){if(!g){p=null;break t}if(p=Pi(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){sn=Pi(p.nextSibling),u=p.data==="F!";break e}}bs(u)}u=!1}u&&(r=o[0])}}return o=$n(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bg,lastRenderedState:r},o.queue=u,o=i_.bind(null,mt,u),u.dispatch=o,u=$f(!1),g=sh.bind(null,mt,!1,u.queue),u=$n(),p={state:r,dispatch:null,action:n,pending:null},u.queue=p,o=MS.bind(null,mt,p,g,o),p.dispatch=o,u.memoizedState=n,[r,o,!1]}function zg(n){var r=hn();return Hg(r,kt,n)}function Hg(n,r,o){if(r=Qf(n,r,Bg)[0],n=vu(dr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=jo(r)}catch(T){throw T===Go?hu:T}else u=r;r=hn();var p=r.queue,g=p.dispatch;return o!==r.memoizedState&&(mt.flags|=2048,ya(9,xu(),SS.bind(null,p,o),null)),[u,g,n]}function SS(n,r){n.action=r}function Vg(n){var r=hn(),o=kt;if(o!==null)return Hg(r,o,n);hn(),r=r.memoizedState,o=hn();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function ya(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=mt.updateQueue,r===null&&(r=Zf(),mt.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function xu(){return{destroy:void 0,resource:void 0}}function Gg(){return hn().memoizedState}function yu(n,r,o,u){var p=$n();u=u===void 0?null:u,mt.flags|=n,p.memoizedState=ya(1|r,xu(),o,u)}function Zo(n,r,o,u){var p=hn();u=u===void 0?null:u;var g=p.memoizedState.inst;kt!==null&&u!==null&&Wf(u,kt.memoizedState.deps)?p.memoizedState=ya(r,g,o,u):(mt.flags|=n,p.memoizedState=ya(1|r,g,o,u))}function kg(n,r){yu(8390656,8,n,r)}function Wg(n,r){Zo(2048,8,n,r)}function Xg(n,r){return Zo(4,2,n,r)}function qg(n,r){return Zo(4,4,n,r)}function Yg(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function jg(n,r,o){o=o!=null?o.concat([n]):null,Zo(4,4,Yg.bind(null,r,n),o)}function th(){}function Zg(n,r){var o=hn();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Wf(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Kg(n,r){var o=hn();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Wf(r,u[1]))return u[0];if(u=n(),Ls){be(!0);try{n()}finally{be(!1)}}return o.memoizedState=[u,r],u}function nh(n,r,o){return o===void 0||(Gr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=$_(),mt.lanes|=n,Zr|=n,o)}function Qg(n,r,o,u){return ni(o,r)?o:_a.current!==null?(n=nh(n,o,u),ni(n,r)||(Sn=!0),n):(Gr&42)===0?(Sn=!0,n.memoizedState=o):(n=$_(),mt.lanes|=n,Zr|=n,r)}function Jg(n,r,o,u,p){var g=j.p;j.p=g!==0&&8>g?g:8;var T=z.T,b={};z.T=b,sh(n,!1,r,o);try{var H=p(),$=z.S;if($!==null&&$(b,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ce=vS(H,u);Ko(n,r,ce,oi(n))}else Ko(n,r,u,oi(n))}catch(ge){Ko(n,r,{then:function(){},status:"rejected",reason:ge},oi())}finally{j.p=g,z.T=T}}function ES(){}function ih(n,r,o,u){if(n.tag!==5)throw Error(i(476));var p=$g(n).queue;Jg(n,p,r,Y,o===null?ES:function(){return e_(n),o(u)})}function $g(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:Y},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function e_(n){var r=$g(n).next.queue;Ko(n,r,{},oi())}function rh(){return On(pl)}function t_(){return hn().memoizedState}function n_(){return hn().memoizedState}function TS(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=oi();n=Hr(o);var u=Vr(r,n,o);u!==null&&(li(u,r,o),Wo(u,r,o)),r={cache:Pf()},n.payload=r;return}r=r.return}}function AS(n,r,o){var u=oi();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Mu(n)?r_(r,o):(o=Tf(n,r,o,u),o!==null&&(li(o,n,u),s_(o,r,u)))}function i_(n,r,o){var u=oi();Ko(n,r,o,u)}function Ko(n,r,o,u){var p={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Mu(n))r_(r,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var T=r.lastRenderedState,b=g(T,o);if(p.hasEagerState=!0,p.eagerState=b,ni(b,T))return ru(n,r,p,0),Zt===null&&iu(),!1}catch{}finally{}if(o=Tf(n,r,p,u),o!==null)return li(o,n,u),s_(o,r,u),!0}return!1}function sh(n,r,o,u){if(u={lane:2,revertLane:Bh(),action:u,hasEagerState:!1,eagerState:null,next:null},Mu(n)){if(r)throw Error(i(479))}else r=Tf(n,o,u,2),r!==null&&li(r,n,2)}function Mu(n){var r=n.alternate;return n===mt||r!==null&&r===mt}function r_(n,r){va=mu=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function s_(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,rt(n,o)}}var Su={readContext:On,use:_u,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln},a_={readContext:On,use:_u,useCallback:function(n,r){return $n().memoizedState=[n,r===void 0?null:r],n},useContext:On,useEffect:kg,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,yu(4194308,4,Yg.bind(null,r,n),o)},useLayoutEffect:function(n,r){return yu(4194308,4,n,r)},useInsertionEffect:function(n,r){yu(4,2,n,r)},useMemo:function(n,r){var o=$n();r=r===void 0?null:r;var u=n();if(Ls){be(!0);try{n()}finally{be(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=$n();if(o!==void 0){var p=o(r);if(Ls){be(!0);try{o(r)}finally{be(!1)}}}else p=r;return u.memoizedState=u.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},u.queue=n,n=n.dispatch=AS.bind(null,mt,n),[u.memoizedState,n]},useRef:function(n){var r=$n();return n={current:n},r.memoizedState=n},useState:function(n){n=$f(n);var r=n.queue,o=i_.bind(null,mt,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:th,useDeferredValue:function(n,r){var o=$n();return nh(o,n,r)},useTransition:function(){var n=$f(!1);return n=Jg.bind(null,mt,n.queue,!0,!1),$n().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=mt,p=$n();if(Pt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),Zt===null)throw Error(i(349));(bt&124)!==0||Rg(u,r,o)}p.memoizedState=o;var g={value:o,getSnapshot:r};return p.queue=g,kg(Cg.bind(null,u,g,n),[n]),u.flags|=2048,ya(9,xu(),wg.bind(null,u,g,o,r),null),o},useId:function(){var n=$n(),r=Zt.identifierPrefix;if(Pt){var o=cr,u=ur;o=(u&~(1<<32-Re(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=gu++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=xS++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:rh,useFormState:Fg,useActionState:Fg,useOptimistic:function(n){var r=$n();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=sh.bind(null,mt,!0,o),o.dispatch=r,[n,r]},useMemoCache:Kf,useCacheRefresh:function(){return $n().memoizedState=TS.bind(null,mt)}},o_={readContext:On,use:_u,useCallback:Zg,useContext:On,useEffect:Wg,useImperativeHandle:jg,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Kg,useReducer:vu,useRef:Gg,useState:function(){return vu(dr)},useDebugValue:th,useDeferredValue:function(n,r){var o=hn();return Qg(o,kt.memoizedState,n,r)},useTransition:function(){var n=vu(dr)[0],r=hn().memoizedState;return[typeof n=="boolean"?n:jo(n),r]},useSyncExternalStore:bg,useId:t_,useHostTransitionStatus:rh,useFormState:zg,useActionState:zg,useOptimistic:function(n,r){var o=hn();return Ug(o,kt,n,r)},useMemoCache:Kf,useCacheRefresh:n_},bS={readContext:On,use:_u,useCallback:Zg,useContext:On,useEffect:Wg,useImperativeHandle:jg,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Kg,useReducer:Jf,useRef:Gg,useState:function(){return Jf(dr)},useDebugValue:th,useDeferredValue:function(n,r){var o=hn();return kt===null?nh(o,n,r):Qg(o,kt.memoizedState,n,r)},useTransition:function(){var n=Jf(dr)[0],r=hn().memoizedState;return[typeof n=="boolean"?n:jo(n),r]},useSyncExternalStore:bg,useId:t_,useHostTransitionStatus:rh,useFormState:Vg,useActionState:Vg,useOptimistic:function(n,r){var o=hn();return kt!==null?Ug(o,kt,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Kf,useCacheRefresh:n_},Ma=null,Qo=0;function Eu(n){var r=Qo;return Qo+=1,Ma===null&&(Ma=[]),vg(Ma,n,r)}function Jo(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Tu(n,r){throw r.$$typeof===_?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function l_(n){var r=n._init;return r(n._payload)}function u_(n){function r(Z,W){if(n){var J=Z.deletions;J===null?(Z.deletions=[W],Z.flags|=16):J.push(W)}}function o(Z,W){if(!n)return null;for(;W!==null;)r(Z,W),W=W.sibling;return null}function u(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function p(Z,W){return Z=lr(Z,W),Z.index=0,Z.sibling=null,Z}function g(Z,W,J){return Z.index=J,n?(J=Z.alternate,J!==null?(J=J.index,J<W?(Z.flags|=67108866,W):J):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,W,J,pe){return W===null||W.tag!==6?(W=bf(J,Z.mode,pe),W.return=Z,W):(W=p(W,J),W.return=Z,W)}function H(Z,W,J,pe){var ze=J.type;return ze===S?ce(Z,W,J.props.children,pe,J.key):W!==null&&(W.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===G&&l_(ze)===W.type)?(W=p(W,J.props),Jo(W,J),W.return=Z,W):(W=au(J.type,J.key,J.props,null,Z.mode,pe),Jo(W,J),W.return=Z,W)}function $(Z,W,J,pe){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=Rf(J,Z.mode,pe),W.return=Z,W):(W=p(W,J.children||[]),W.return=Z,W)}function ce(Z,W,J,pe,ze){return W===null||W.tag!==7?(W=Ss(J,Z.mode,pe,ze),W.return=Z,W):(W=p(W,J),W.return=Z,W)}function ge(Z,W,J){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=bf(""+W,Z.mode,J),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return J=au(W.type,W.key,W.props,null,Z.mode,J),Jo(J,W),J.return=Z,J;case x:return W=Rf(W,Z.mode,J),W.return=Z,W;case G:var pe=W._init;return W=pe(W._payload),ge(Z,W,J)}if(ue(W)||te(W))return W=Ss(W,Z.mode,J,null),W.return=Z,W;if(typeof W.then=="function")return ge(Z,Eu(W),J);if(W.$$typeof===D)return ge(Z,cu(Z,W),J);Tu(Z,W)}return null}function ie(Z,W,J,pe){var ze=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return ze!==null?null:b(Z,W,""+J,pe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===ze?H(Z,W,J,pe):null;case x:return J.key===ze?$(Z,W,J,pe):null;case G:return ze=J._init,J=ze(J._payload),ie(Z,W,J,pe)}if(ue(J)||te(J))return ze!==null?null:ce(Z,W,J,pe,null);if(typeof J.then=="function")return ie(Z,W,Eu(J),pe);if(J.$$typeof===D)return ie(Z,W,cu(Z,J),pe);Tu(Z,J)}return null}function se(Z,W,J,pe,ze){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Z=Z.get(J)||null,b(W,Z,""+pe,ze);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case v:return Z=Z.get(pe.key===null?J:pe.key)||null,H(W,Z,pe,ze);case x:return Z=Z.get(pe.key===null?J:pe.key)||null,$(W,Z,pe,ze);case G:var _t=pe._init;return pe=_t(pe._payload),se(Z,W,J,pe,ze)}if(ue(pe)||te(pe))return Z=Z.get(J)||null,ce(W,Z,pe,ze,null);if(typeof pe.then=="function")return se(Z,W,J,Eu(pe),ze);if(pe.$$typeof===D)return se(Z,W,J,cu(W,pe),ze);Tu(W,pe)}return null}function it(Z,W,J,pe){for(var ze=null,_t=null,ke=W,Je=W=0,Tn=null;ke!==null&&Je<J.length;Je++){ke.index>Je?(Tn=ke,ke=null):Tn=ke.sibling;var wt=ie(Z,ke,J[Je],pe);if(wt===null){ke===null&&(ke=Tn);break}n&&ke&&wt.alternate===null&&r(Z,ke),W=g(wt,W,Je),_t===null?ze=wt:_t.sibling=wt,_t=wt,ke=Tn}if(Je===J.length)return o(Z,ke),Pt&&Ts(Z,Je),ze;if(ke===null){for(;Je<J.length;Je++)ke=ge(Z,J[Je],pe),ke!==null&&(W=g(ke,W,Je),_t===null?ze=ke:_t.sibling=ke,_t=ke);return Pt&&Ts(Z,Je),ze}for(ke=u(ke);Je<J.length;Je++)Tn=se(ke,Z,Je,J[Je],pe),Tn!==null&&(n&&Tn.alternate!==null&&ke.delete(Tn.key===null?Je:Tn.key),W=g(Tn,W,Je),_t===null?ze=Tn:_t.sibling=Tn,_t=Tn);return n&&ke.forEach(function(rs){return r(Z,rs)}),Pt&&Ts(Z,Je),ze}function Ke(Z,W,J,pe){if(J==null)throw Error(i(151));for(var ze=null,_t=null,ke=W,Je=W=0,Tn=null,wt=J.next();ke!==null&&!wt.done;Je++,wt=J.next()){ke.index>Je?(Tn=ke,ke=null):Tn=ke.sibling;var rs=ie(Z,ke,wt.value,pe);if(rs===null){ke===null&&(ke=Tn);break}n&&ke&&rs.alternate===null&&r(Z,ke),W=g(rs,W,Je),_t===null?ze=rs:_t.sibling=rs,_t=rs,ke=Tn}if(wt.done)return o(Z,ke),Pt&&Ts(Z,Je),ze;if(ke===null){for(;!wt.done;Je++,wt=J.next())wt=ge(Z,wt.value,pe),wt!==null&&(W=g(wt,W,Je),_t===null?ze=wt:_t.sibling=wt,_t=wt);return Pt&&Ts(Z,Je),ze}for(ke=u(ke);!wt.done;Je++,wt=J.next())wt=se(ke,Z,Je,wt.value,pe),wt!==null&&(n&&wt.alternate!==null&&ke.delete(wt.key===null?Je:wt.key),W=g(wt,W,Je),_t===null?ze=wt:_t.sibling=wt,_t=wt);return n&&ke.forEach(function(RE){return r(Z,RE)}),Pt&&Ts(Z,Je),ze}function Xt(Z,W,J,pe){if(typeof J=="object"&&J!==null&&J.type===S&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:e:{for(var ze=J.key;W!==null;){if(W.key===ze){if(ze=J.type,ze===S){if(W.tag===7){o(Z,W.sibling),pe=p(W,J.props.children),pe.return=Z,Z=pe;break e}}else if(W.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===G&&l_(ze)===W.type){o(Z,W.sibling),pe=p(W,J.props),Jo(pe,J),pe.return=Z,Z=pe;break e}o(Z,W);break}else r(Z,W);W=W.sibling}J.type===S?(pe=Ss(J.props.children,Z.mode,pe,J.key),pe.return=Z,Z=pe):(pe=au(J.type,J.key,J.props,null,Z.mode,pe),Jo(pe,J),pe.return=Z,Z=pe)}return T(Z);case x:e:{for(ze=J.key;W!==null;){if(W.key===ze)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){o(Z,W.sibling),pe=p(W,J.children||[]),pe.return=Z,Z=pe;break e}else{o(Z,W);break}else r(Z,W);W=W.sibling}pe=Rf(J,Z.mode,pe),pe.return=Z,Z=pe}return T(Z);case G:return ze=J._init,J=ze(J._payload),Xt(Z,W,J,pe)}if(ue(J))return it(Z,W,J,pe);if(te(J)){if(ze=te(J),typeof ze!="function")throw Error(i(150));return J=ze.call(J),Ke(Z,W,J,pe)}if(typeof J.then=="function")return Xt(Z,W,Eu(J),pe);if(J.$$typeof===D)return Xt(Z,W,cu(Z,J),pe);Tu(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,W!==null&&W.tag===6?(o(Z,W.sibling),pe=p(W,J),pe.return=Z,Z=pe):(o(Z,W),pe=bf(J,Z.mode,pe),pe.return=Z,Z=pe),T(Z)):o(Z,W)}return function(Z,W,J,pe){try{Qo=0;var ze=Xt(Z,W,J,pe);return Ma=null,ze}catch(ke){if(ke===Go||ke===hu)throw ke;var _t=ii(29,ke,null,Z.mode);return _t.lanes=pe,_t.return=Z,_t}finally{}}}var Sa=u_(!0),c_=u_(!1),xi=ee(null),Yi=null;function kr(n){var r=n.alternate;Me(vn,vn.current&1),Me(xi,n),Yi===null&&(r===null||_a.current!==null||r.memoizedState!==null)&&(Yi=n)}function f_(n){if(n.tag===22){if(Me(vn,vn.current),Me(xi,n),Yi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Yi=n)}}else Wr()}function Wr(){Me(vn,vn.current),Me(xi,xi.current)}function pr(n){ve(xi),Yi===n&&(Yi=null),ve(vn)}var vn=ee(0);function Au(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Zh(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function ah(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:m({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var oh={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=oi(),p=Hr(u);p.payload=r,o!=null&&(p.callback=o),r=Vr(n,p,u),r!==null&&(li(r,n,u),Wo(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=oi(),p=Hr(u);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Vr(n,p,u),r!==null&&(li(r,n,u),Wo(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=oi(),u=Hr(o);u.tag=2,r!=null&&(u.callback=r),r=Vr(n,u,o),r!==null&&(li(r,n,o),Wo(r,n,o))}};function h_(n,r,o,u,p,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,T):r.prototype&&r.prototype.isPureReactComponent?!Po(o,u)||!Po(p,g):!0}function d_(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&oh.enqueueReplaceState(r,r.state,null)}function Ds(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=m({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}var bu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function p_(n){bu(n)}function m_(n){console.error(n)}function g_(n){bu(n)}function Ru(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function __(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function lh(n,r,o){return o=Hr(o),o.tag=3,o.payload={element:null},o.callback=function(){Ru(n,r)},o}function v_(n){return n=Hr(n),n.tag=3,n}function x_(n,r,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=u.value;n.payload=function(){return p(g)},n.callback=function(){__(r,o,u)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){__(r,o,u),typeof p!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var b=u.stack;this.componentDidCatch(u.value,{componentStack:b!==null?b:""})})}function RS(n,r,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&zo(r,o,p,!0),o=xi.current,o!==null){switch(o.tag){case 13:return Yi===null?Uh():o.alternate===null&&an===0&&(an=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===Bf?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Ph(n,u,p)),!1;case 22:return o.flags|=65536,u===Bf?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Ph(n,u,p)),!1}throw Error(i(435,o.tag))}return Ph(n,u,p),Uh(),!1}if(Pt)return r=xi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,u!==Lf&&(n=Error(i(422),{cause:u}),Fo(mi(n,o)))):(u!==Lf&&(r=Error(i(423),{cause:u}),Fo(mi(r,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,u=mi(u,o),p=lh(n.stateNode,u,p),Hf(n,p),an!==4&&(an=2)),!1;var g=Error(i(520),{cause:u});if(g=mi(g,o),sl===null?sl=[g]:sl.push(g),an!==4&&(an=2),r===null)return!0;u=mi(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=lh(o.stateNode,u,n),Hf(o,n),!1;case 1:if(r=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kr===null||!Kr.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=v_(p),x_(p,n,o,u),Hf(o,p),!1}o=o.return}while(o!==null);return!1}var y_=Error(i(461)),Sn=!1;function Cn(n,r,o,u){r.child=n===null?c_(r,null,o,u):Sa(r,n.child,o,u)}function M_(n,r,o,u,p){o=o.render;var g=r.ref;if("ref"in u){var T={};for(var b in u)b!=="ref"&&(T[b]=u[b])}else T=u;return ws(r),u=Xf(n,r,o,T,g,p),b=qf(),n!==null&&!Sn?(Yf(n,r,p),mr(n,r,p)):(Pt&&b&&wf(r),r.flags|=1,Cn(n,r,u,p),r.child)}function S_(n,r,o,u,p){if(n===null){var g=o.type;return typeof g=="function"&&!Af(g)&&g.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=g,E_(n,r,g,u,p)):(n=au(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,!gh(n,p)){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:Po,o(T,u)&&n.ref===r.ref)return mr(n,r,p)}return r.flags|=1,n=lr(g,u),n.ref=r.ref,n.return=r,r.child=n}function E_(n,r,o,u,p){if(n!==null){var g=n.memoizedProps;if(Po(g,u)&&n.ref===r.ref)if(Sn=!1,r.pendingProps=u=g,gh(n,p))(n.flags&131072)!==0&&(Sn=!0);else return r.lanes=n.lanes,mr(n,r,p)}return uh(n,r,o,u,p)}function T_(n,r,o){var u=r.pendingProps,p=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=g!==null?g.baseLanes|o:o,n!==null){for(p=r.child=n.child,g=0;p!==null;)g=g|p.lanes|p.childLanes,p=p.sibling;r.childLanes=g&~u}else r.childLanes=0,r.child=null;return A_(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&fu(r,g!==null?g.cachePool:null),g!==null?Eg(r,g):Gf(),f_(r);else return r.lanes=r.childLanes=536870912,A_(n,r,g!==null?g.baseLanes|o:o,o)}else g!==null?(fu(r,g.cachePool),Eg(r,g),Wr(),r.memoizedState=null):(n!==null&&fu(r,null),Gf(),Wr());return Cn(n,r,p,o),r.child}function A_(n,r,o,u){var p=If();return p=p===null?null:{parent:_n._currentValue,pool:p},r.memoizedState={baseLanes:o,cachePool:p},n!==null&&fu(r,null),Gf(),f_(r),n!==null&&zo(n,r,u,!0),null}function wu(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function uh(n,r,o,u,p){return ws(r),o=Xf(n,r,o,u,void 0,p),u=qf(),n!==null&&!Sn?(Yf(n,r,p),mr(n,r,p)):(Pt&&u&&wf(r),r.flags|=1,Cn(n,r,o,p),r.child)}function b_(n,r,o,u,p,g){return ws(r),r.updateQueue=null,o=Ag(r,u,o,p),Tg(n),u=qf(),n!==null&&!Sn?(Yf(n,r,g),mr(n,r,g)):(Pt&&u&&wf(r),r.flags|=1,Cn(n,r,o,g),r.child)}function R_(n,r,o,u,p){if(ws(r),r.stateNode===null){var g=ha,T=o.contextType;typeof T=="object"&&T!==null&&(g=On(T)),g=new o(u,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=oh,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=u,g.state=r.memoizedState,g.refs={},Ff(r),T=o.contextType,g.context=typeof T=="object"&&T!==null?On(T):ha,g.state=r.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(ah(r,o,T,u),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&oh.enqueueReplaceState(g,g.state,null),qo(r,u,g,p),Xo(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){g=r.stateNode;var b=r.memoizedProps,H=Ds(o,b);g.props=H;var $=g.context,ce=o.contextType;T=ha,typeof ce=="object"&&ce!==null&&(T=On(ce));var ge=o.getDerivedStateFromProps;ce=typeof ge=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,ce||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||$!==T)&&d_(r,g,u,T),zr=!1;var ie=r.memoizedState;g.state=ie,qo(r,u,g,p),Xo(),$=r.memoizedState,b||ie!==$||zr?(typeof ge=="function"&&(ah(r,o,ge,u),$=r.memoizedState),(H=zr||h_(r,o,H,u,ie,$,T))?(ce||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=$),g.props=u,g.state=$,g.context=T,u=H):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{g=r.stateNode,zf(n,r),T=r.memoizedProps,ce=Ds(o,T),g.props=ce,ge=r.pendingProps,ie=g.context,$=o.contextType,H=ha,typeof $=="object"&&$!==null&&(H=On($)),b=o.getDerivedStateFromProps,($=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ge||ie!==H)&&d_(r,g,u,H),zr=!1,ie=r.memoizedState,g.state=ie,qo(r,u,g,p),Xo();var se=r.memoizedState;T!==ge||ie!==se||zr||n!==null&&n.dependencies!==null&&uu(n.dependencies)?(typeof b=="function"&&(ah(r,o,b,u),se=r.memoizedState),(ce=zr||h_(r,o,ce,u,ie,se,H)||n!==null&&n.dependencies!==null&&uu(n.dependencies))?($||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,se,H),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,se,H)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===n.memoizedProps&&ie===n.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ie===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=se),g.props=u,g.state=se,g.context=H,u=ce):(typeof g.componentDidUpdate!="function"||T===n.memoizedProps&&ie===n.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ie===n.memoizedState||(r.flags|=1024),u=!1)}return g=u,wu(n,r),u=(r.flags&128)!==0,g||u?(g=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,n!==null&&u?(r.child=Sa(r,n.child,null,p),r.child=Sa(r,null,o,p)):Cn(n,r,o,p),r.memoizedState=g.state,n=r.child):n=mr(n,r,p),n}function w_(n,r,o,u){return Bo(),r.flags|=256,Cn(n,r,o,u),r.child}var ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fh(n){return{baseLanes:n,cachePool:mg()}}function hh(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=yi),n}function C_(n,r,o){var u=r.pendingProps,p=!1,g=(r.flags&128)!==0,T;if((T=g)||(T=n!==null&&n.memoizedState===null?!1:(vn.current&2)!==0),T&&(p=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,n===null){if(Pt){if(p?kr(r):Wr(),Pt){var b=sn,H;if(H=b){e:{for(H=b,b=qi;H.nodeType!==8;){if(!b){b=null;break e}if(H=Pi(H.nextSibling),H===null){b=null;break e}}b=H}b!==null?(r.memoizedState={dehydrated:b,treeContext:Es!==null?{id:ur,overflow:cr}:null,retryLane:536870912,hydrationErrors:null},H=ii(18,null,null,0),H.stateNode=b,H.return=r,r.child=H,Gn=r,sn=null,H=!0):H=!1}H||bs(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Zh(b)?r.lanes=32:r.lanes=536870912,null;pr(r)}return b=u.children,u=u.fallback,p?(Wr(),p=r.mode,b=Cu({mode:"hidden",children:b},p),u=Ss(u,p,o,null),b.return=r,u.return=r,b.sibling=u,r.child=b,p=r.child,p.memoizedState=fh(o),p.childLanes=hh(n,T,o),r.memoizedState=ch,u):(kr(r),dh(r,b))}if(H=n.memoizedState,H!==null&&(b=H.dehydrated,b!==null)){if(g)r.flags&256?(kr(r),r.flags&=-257,r=ph(n,r,o)):r.memoizedState!==null?(Wr(),r.child=n.child,r.flags|=128,r=null):(Wr(),p=u.fallback,b=r.mode,u=Cu({mode:"visible",children:u.children},b),p=Ss(p,b,o,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,Sa(r,n.child,null,o),u=r.child,u.memoizedState=fh(o),u.childLanes=hh(n,T,o),r.memoizedState=ch,r=p);else if(kr(r),Zh(b)){if(T=b.nextSibling&&b.nextSibling.dataset,T)var $=T.dgst;T=$,u=Error(i(419)),u.stack="",u.digest=T,Fo({value:u,source:null,stack:null}),r=ph(n,r,o)}else if(Sn||zo(n,r,o,!1),T=(o&n.childLanes)!==0,Sn||T){if(T=Zt,T!==null&&(u=o&-o,u=(u&42)!==0?1:Vt(u),u=(u&(T.suspendedLanes|o))!==0?0:u,u!==0&&u!==H.retryLane))throw H.retryLane=u,fa(n,u),li(T,n,u),y_;b.data==="$?"||Uh(),r=ph(n,r,o)}else b.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=H.treeContext,sn=Pi(b.nextSibling),Gn=r,Pt=!0,As=null,qi=!1,n!==null&&(_i[vi++]=ur,_i[vi++]=cr,_i[vi++]=Es,ur=n.id,cr=n.overflow,Es=r),r=dh(r,u.children),r.flags|=4096);return r}return p?(Wr(),p=u.fallback,b=r.mode,H=n.child,$=H.sibling,u=lr(H,{mode:"hidden",children:u.children}),u.subtreeFlags=H.subtreeFlags&65011712,$!==null?p=lr($,p):(p=Ss(p,b,o,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,b=n.child.memoizedState,b===null?b=fh(o):(H=b.cachePool,H!==null?($=_n._currentValue,H=H.parent!==$?{parent:$,pool:$}:H):H=mg(),b={baseLanes:b.baseLanes|o,cachePool:H}),p.memoizedState=b,p.childLanes=hh(n,T,o),r.memoizedState=ch,u):(kr(r),o=n.child,n=o.sibling,o=lr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(T=r.deletions,T===null?(r.deletions=[n],r.flags|=16):T.push(n)),r.child=o,r.memoizedState=null,o)}function dh(n,r){return r=Cu({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Cu(n,r){return n=ii(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function ph(n,r,o){return Sa(r,n.child,null,o),n=dh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function L_(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Uf(n.return,r,o)}function mh(n,r,o,u,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=p)}function D_(n,r,o){var u=r.pendingProps,p=u.revealOrder,g=u.tail;if(Cn(n,r,u.children,o),u=vn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&L_(n,o,r);else if(n.tag===19)L_(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(Me(vn,u),p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Au(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),mh(r,!1,p,o,g);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Au(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}mh(r,!0,o,null,g);break;case"together":mh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function mr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Zr|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(zo(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,o=lr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=lr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function gh(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&uu(n)))}function wS(n,r,o){switch(r.tag){case 3:Ne(r,r.stateNode.containerInfo),Fr(r,_n,n.memoizedState.cache),Bo();break;case 27:case 5:ot(r);break;case 4:Ne(r,r.stateNode.containerInfo);break;case 10:Fr(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(kr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?C_(n,r,o):(kr(r),n=mr(n,r,o),n!==null?n.sibling:null);kr(r);break;case 19:var p=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(zo(n,r,o,!1),u=(o&r.childLanes)!==0),p){if(u)return D_(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Me(vn,vn.current),u)break;return null;case 22:case 23:return r.lanes=0,T_(n,r,o);case 24:Fr(r,_n,n.memoizedState.cache)}return mr(n,r,o)}function U_(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Sn=!0;else{if(!gh(n,o)&&(r.flags&128)===0)return Sn=!1,wS(n,r,o);Sn=(n.flags&131072)!==0}else Sn=!1,Pt&&(r.flags&1048576)!==0&&lg(r,lu,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,p=u._init;if(u=p(u._payload),r.type=u,typeof u=="function")Af(u)?(n=Ds(u,n),r.tag=1,r=R_(null,r,u,n,o)):(r.tag=0,r=uh(null,r,u,n,o));else{if(u!=null){if(p=u.$$typeof,p===A){r.tag=11,r=M_(null,r,u,n,o);break e}else if(p===I){r.tag=14,r=S_(null,r,u,n,o);break e}}throw r=de(u)||u,Error(i(306,r,""))}}return r;case 0:return uh(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,p=Ds(u,r.pendingProps),R_(n,r,u,p,o);case 3:e:{if(Ne(r,r.stateNode.containerInfo),n===null)throw Error(i(387));u=r.pendingProps;var g=r.memoizedState;p=g.element,zf(n,r),qo(r,u,null,o);var T=r.memoizedState;if(u=T.cache,Fr(r,_n,u),u!==g.cache&&Nf(r,[_n],o,!0),Xo(),u=T.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){r=w_(n,r,u,o);break e}else if(u!==p){p=mi(Error(i(424)),r),Fo(p),r=w_(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(sn=Pi(n.firstChild),Gn=r,Pt=!0,As=null,qi=!0,o=c_(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Bo(),u===p){r=mr(n,r,o);break e}Cn(n,r,u,o)}r=r.child}return r;case 26:return wu(n,r),n===null?(o=Iv(r.type,null,r.pendingProps,null))?r.memoizedState=o:Pt||(o=r.type,n=r.pendingProps,u=ku(ye.current).createElement(o),u[en]=r,u[mn]=n,Dn(u,o,n),tn(u),r.stateNode=u):r.memoizedState=Iv(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return ot(r),n===null&&Pt&&(u=r.stateNode=Nv(r.type,r.pendingProps,ye.current),Gn=r,qi=!0,p=sn,$r(r.type)?(Kh=p,sn=Pi(u.firstChild)):sn=p),Cn(n,r,r.pendingProps.children,o),wu(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Pt&&((p=u=sn)&&(u=nE(u,r.type,r.pendingProps,qi),u!==null?(r.stateNode=u,Gn=r,sn=Pi(u.firstChild),qi=!1,p=!0):p=!1),p||bs(r)),ot(r),p=r.type,g=r.pendingProps,T=n!==null?n.memoizedProps:null,u=g.children,qh(p,g)?u=null:T!==null&&qh(p,T)&&(r.flags|=32),r.memoizedState!==null&&(p=Xf(n,r,yS,null,null,o),pl._currentValue=p),wu(n,r),Cn(n,r,u,o),r.child;case 6:return n===null&&Pt&&((n=o=sn)&&(o=iE(o,r.pendingProps,qi),o!==null?(r.stateNode=o,Gn=r,sn=null,n=!0):n=!1),n||bs(r)),null;case 13:return C_(n,r,o);case 4:return Ne(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Sa(r,null,u,o):Cn(n,r,u,o),r.child;case 11:return M_(n,r,r.type,r.pendingProps,o);case 7:return Cn(n,r,r.pendingProps,o),r.child;case 8:return Cn(n,r,r.pendingProps.children,o),r.child;case 12:return Cn(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Fr(r,r.type,u.value),Cn(n,r,u.children,o),r.child;case 9:return p=r.type._context,u=r.pendingProps.children,ws(r),p=On(p),u=u(p),r.flags|=1,Cn(n,r,u,o),r.child;case 14:return S_(n,r,r.type,r.pendingProps,o);case 15:return E_(n,r,r.type,r.pendingProps,o);case 19:return D_(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=Cu(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=lr(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return T_(n,r,o);case 24:return ws(r),u=On(_n),n===null?(p=If(),p===null&&(p=Zt,g=Pf(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),r.memoizedState={parent:u,cache:p},Ff(r),Fr(r,_n,p)):((n.lanes&o)!==0&&(zf(n,r),qo(r,null,null,o),Xo()),p=n.memoizedState,g=r.memoizedState,p.parent!==u?(p={parent:u,cache:u},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),Fr(r,_n,u)):(u=g.cache,Fr(r,_n,u),u!==p.cache&&Nf(r,[_n],o,!0))),Cn(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function gr(n){n.flags|=4}function N_(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Vv(r)){if(r=xi.current,r!==null&&((bt&4194048)===bt?Yi!==null:(bt&62914560)!==bt&&(bt&536870912)===0||r!==Yi))throw ko=Bf,gg;n.flags|=8192}}function Lu(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Le():536870912,n.lanes|=r,ba|=r)}function $o(n,r){if(!Pt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function $t(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function CS(n,r,o){var u=r.pendingProps;switch(Cf(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(r),null;case 1:return $t(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),hr(_n),Ye(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Io(r)?gr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,fg())),$t(r),null;case 26:return o=r.memoizedState,n===null?(gr(r),o!==null?($t(r),N_(r,o)):($t(r),r.flags&=-16777217)):o?o!==n.memoizedState?(gr(r),$t(r),N_(r,o)):($t(r),r.flags&=-16777217):(n.memoizedProps!==u&&gr(r),$t(r),r.flags&=-16777217),null;case 27:Dt(r),o=ye.current;var p=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&gr(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return $t(r),null}n=Q.current,Io(r)?ug(r):(n=Nv(p,u,o),r.stateNode=n,gr(r))}return $t(r),null;case 5:if(Dt(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&gr(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return $t(r),null}if(n=Q.current,Io(r))ug(r);else{switch(p=ku(ye.current),n){case 1:n=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=p.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?p.createElement("select",{is:u.is}):p.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?p.createElement(o,{is:u.is}):p.createElement(o)}}n[en]=r,n[mn]=u;e:for(p=r.child;p!==null;){if(p.tag===5||p.tag===6)n.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===r)break e;for(;p.sibling===null;){if(p.return===null||p.return===r)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}r.stateNode=n;e:switch(Dn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&gr(r)}}return $t(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&gr(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(i(166));if(n=ye.current,Io(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,p=Gn,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}n[en]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||bv(n.nodeValue,o)),n||bs(r)}else n=ku(n).createTextNode(u),n[en]=r,r.stateNode=n}return $t(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=Io(r),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[en]=r}else Bo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$t(r),p=!1}else p=fg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(pr(r),r):(pr(r),null)}if(pr(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==p&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),Lu(r,r.updateQueue),$t(r),null;case 4:return Ye(),n===null&&Vh(r.stateNode.containerInfo),$t(r),null;case 10:return hr(r.type),$t(r),null;case 19:if(ve(vn),p=r.memoizedState,p===null)return $t(r),null;if(u=(r.flags&128)!==0,g=p.rendering,g===null)if(u)$o(p,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(g=Au(n),g!==null){for(r.flags|=128,$o(p,!1),n=g.updateQueue,r.updateQueue=n,Lu(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)og(o,n),o=o.sibling;return Me(vn,vn.current&1|2),r.child}n=n.sibling}p.tail!==null&&tt()>Nu&&(r.flags|=128,u=!0,$o(p,!1),r.lanes=4194304)}else{if(!u)if(n=Au(g),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,Lu(r,n),$o(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Pt)return $t(r),null}else 2*tt()-p.renderingStartTime>Nu&&o!==536870912&&(r.flags|=128,u=!0,$o(p,!1),r.lanes=4194304);p.isBackwards?(g.sibling=r.child,r.child=g):(n=p.last,n!==null?n.sibling=g:r.child=g,p.last=g)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=tt(),r.sibling=null,n=vn.current,Me(vn,u?n&1|2:n&1),r):($t(r),null);case 22:case 23:return pr(r),kf(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&($t(r),r.subtreeFlags&6&&(r.flags|=8192)):$t(r),o=r.updateQueue,o!==null&&Lu(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&ve(Cs),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),hr(_n),$t(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function LS(n,r){switch(Cf(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return hr(_n),Ye(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Dt(r),null;case 13:if(pr(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Bo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ve(vn),null;case 4:return Ye(),null;case 10:return hr(r.type),null;case 22:case 23:return pr(r),kf(),n!==null&&ve(Cs),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return hr(_n),null;case 25:return null;default:return null}}function P_(n,r){switch(Cf(r),r.tag){case 3:hr(_n),Ye();break;case 26:case 27:case 5:Dt(r);break;case 4:Ye();break;case 13:pr(r);break;case 19:ve(vn);break;case 10:hr(r.type);break;case 22:case 23:pr(r),kf(),n!==null&&ve(Cs);break;case 24:hr(_n)}}function el(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&n)===n){u=void 0;var g=o.create,T=o.inst;u=g(),T.destroy=u}o=o.next}while(o!==p)}}catch(b){Yt(r,r.return,b)}}function Xr(n,r,o){try{var u=r.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var g=p.next;u=g;do{if((u.tag&n)===n){var T=u.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,p=r;var H=o,$=b;try{$()}catch(ce){Yt(p,H,ce)}}}u=u.next}while(u!==g)}}catch(ce){Yt(r,r.return,ce)}}function O_(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{Sg(r,o)}catch(u){Yt(n,n.return,u)}}}function I_(n,r,o){o.props=Ds(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Yt(n,r,u)}}function tl(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(p){Yt(n,r,p)}}function ji(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){Yt(n,r,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){Yt(n,r,p)}else o.current=null}function B_(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){Yt(n,n.return,p)}}function _h(n,r,o){try{var u=n.stateNode;QS(u,n.type,o,r),u[mn]=r}catch(p){Yt(n,n.return,p)}}function F_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&$r(n.type)||n.tag===4}function vh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||F_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&$r(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Gu));else if(u!==4&&(u===27&&$r(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(xh(n,r,o),n=n.sibling;n!==null;)xh(n,r,o),n=n.sibling}function Du(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&$r(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Du(n,r,o),n=n.sibling;n!==null;)Du(n,r,o),n=n.sibling}function z_(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);Dn(r,u,o),r[en]=n,r[mn]=o}catch(g){Yt(n,n.return,g)}}var _r=!1,un=!1,yh=!1,H_=typeof WeakSet=="function"?WeakSet:Set,En=null;function DS(n,r){if(n=n.containerInfo,Wh=Zu,n=Qm(n),vf(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,b=-1,H=-1,$=0,ce=0,ge=n,ie=null;t:for(;;){for(var se;ge!==o||p!==0&&ge.nodeType!==3||(b=T+p),ge!==g||u!==0&&ge.nodeType!==3||(H=T+u),ge.nodeType===3&&(T+=ge.nodeValue.length),(se=ge.firstChild)!==null;)ie=ge,ge=se;for(;;){if(ge===n)break t;if(ie===o&&++$===p&&(b=T),ie===g&&++ce===u&&(H=T),(se=ge.nextSibling)!==null)break;ge=ie,ie=ge.parentNode}ge=se}o=b===-1||H===-1?null:{start:b,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Xh={focusedElem:n,selectionRange:o},Zu=!1,En=r;En!==null;)if(r=En,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,En=n;else for(;En!==null;){switch(r=En,g=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=r,p=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var it=Ds(o.type,p,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(it,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(Ke){Yt(o,o.return,Ke)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)jh(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":jh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,En=n;break}En=r.return}}function V_(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:qr(n,o),u&4&&el(5,o);break;case 1:if(qr(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(T){Yt(o,o.return,T)}else{var p=Ds(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(p,r,n.__reactInternalSnapshotBeforeUpdate)}catch(T){Yt(o,o.return,T)}}u&64&&O_(o),u&512&&tl(o,o.return);break;case 3:if(qr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Sg(n,r)}catch(T){Yt(o,o.return,T)}}break;case 27:r===null&&u&4&&z_(o);case 26:case 5:qr(n,o),r===null&&u&4&&B_(o),u&512&&tl(o,o.return);break;case 12:qr(n,o);break;case 13:qr(n,o),u&4&&W_(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=HS.bind(null,o),rE(n,o))));break;case 22:if(u=o.memoizedState!==null||_r,!u){r=r!==null&&r.memoizedState!==null||un,p=_r;var g=un;_r=u,(un=r)&&!g?Yr(n,o,(o.subtreeFlags&8772)!==0):qr(n,o),_r=p,un=g}break;case 30:break;default:qr(n,o)}}function G_(n){var r=n.alternate;r!==null&&(n.alternate=null,G_(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Wi(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Jt=null,ei=!1;function vr(n,r,o){for(o=o.child;o!==null;)k_(n,r,o),o=o.sibling}function k_(n,r,o){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(fe,o)}catch{}switch(o.tag){case 26:un||ji(o,r),vr(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:un||ji(o,r);var u=Jt,p=ei;$r(o.type)&&(Jt=o.stateNode,ei=!1),vr(n,r,o),cl(o.stateNode),Jt=u,ei=p;break;case 5:un||ji(o,r);case 6:if(u=Jt,p=ei,Jt=null,vr(n,r,o),Jt=u,ei=p,Jt!==null)if(ei)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(o.stateNode)}catch(g){Yt(o,r,g)}else try{Jt.removeChild(o.stateNode)}catch(g){Yt(o,r,g)}break;case 18:Jt!==null&&(ei?(n=Jt,Dv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),vl(n)):Dv(Jt,o.stateNode));break;case 4:u=Jt,p=ei,Jt=o.stateNode.containerInfo,ei=!0,vr(n,r,o),Jt=u,ei=p;break;case 0:case 11:case 14:case 15:un||Xr(2,o,r),un||Xr(4,o,r),vr(n,r,o);break;case 1:un||(ji(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&I_(o,r,u)),vr(n,r,o);break;case 21:vr(n,r,o);break;case 22:un=(u=un)||o.memoizedState!==null,vr(n,r,o),un=u;break;default:vr(n,r,o)}}function W_(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{vl(n)}catch(o){Yt(r,r.return,o)}}function US(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new H_),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new H_),r;default:throw Error(i(435,n.tag))}}function Mh(n,r){var o=US(n);r.forEach(function(u){var p=VS.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}function ri(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],g=n,T=r,b=T;e:for(;b!==null;){switch(b.tag){case 27:if($r(b.type)){Jt=b.stateNode,ei=!1;break e}break;case 5:Jt=b.stateNode,ei=!1;break e;case 3:case 4:Jt=b.stateNode.containerInfo,ei=!0;break e}b=b.return}if(Jt===null)throw Error(i(160));k_(g,T,p),Jt=null,ei=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)X_(r,n),r=r.sibling}var Ni=null;function X_(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ri(r,n),si(n),u&4&&(Xr(3,n,n.return),el(3,n),Xr(5,n,n.return));break;case 1:ri(r,n),si(n),u&512&&(un||o===null||ji(o,o.return)),u&64&&_r&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=Ni;if(ri(r,n),si(n),u&512&&(un||o===null||ji(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(u){case"title":g=p.getElementsByTagName("title")[0],(!g||g[wi]||g[en]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(u),p.head.insertBefore(g,p.querySelector("head > title"))),Dn(g,u,o),g[en]=n,tn(g),u=g;break e;case"link":var T=zv("link","href",p).get(u+(o.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(b,1);break t}}g=p.createElement(u),Dn(g,u,o),p.head.appendChild(g);break;case"meta":if(T=zv("meta","content",p).get(u+(o.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(b,1);break t}}g=p.createElement(u),Dn(g,u,o),p.head.appendChild(g);break;default:throw Error(i(468,u))}g[en]=n,tn(g),u=g}n.stateNode=u}else Hv(p,n.type,n.stateNode);else n.stateNode=Fv(p,u,n.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?Hv(p,n.type,n.stateNode):Fv(p,u,n.memoizedProps)):u===null&&n.stateNode!==null&&_h(n,n.memoizedProps,o.memoizedProps)}break;case 27:ri(r,n),si(n),u&512&&(un||o===null||ji(o,o.return)),o!==null&&u&4&&_h(n,n.memoizedProps,o.memoizedProps);break;case 5:if(ri(r,n),si(n),u&512&&(un||o===null||ji(o,o.return)),n.flags&32){p=n.stateNode;try{Qn(p,"")}catch(se){Yt(n,n.return,se)}}u&4&&n.stateNode!=null&&(p=n.memoizedProps,_h(n,p,o!==null?o.memoizedProps:p)),u&1024&&(yh=!0);break;case 6:if(ri(r,n),si(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(se){Yt(n,n.return,se)}}break;case 3:if(qu=null,p=Ni,Ni=Wu(r.containerInfo),ri(r,n),Ni=p,si(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{vl(r.containerInfo)}catch(se){Yt(n,n.return,se)}yh&&(yh=!1,q_(n));break;case 4:u=Ni,Ni=Wu(n.stateNode.containerInfo),ri(r,n),si(n),Ni=u;break;case 12:ri(r,n),si(n);break;case 13:ri(r,n),si(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Rh=tt()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Mh(n,u)));break;case 22:p=n.memoizedState!==null;var H=o!==null&&o.memoizedState!==null,$=_r,ce=un;if(_r=$||p,un=ce||H,ri(r,n),un=ce,_r=$,si(n),u&8192)e:for(r=n.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(o===null||H||_r||un||Us(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){H=o=r;try{if(g=H.stateNode,p)T=g.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{b=H.stateNode;var ge=H.memoizedProps.style,ie=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;b.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(se){Yt(H,H.return,se)}}}else if(r.tag===6){if(o===null){H=r;try{H.stateNode.nodeValue=p?"":H.memoizedProps}catch(se){Yt(H,H.return,se)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Mh(n,o))));break;case 19:ri(r,n),si(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Mh(n,u)));break;case 30:break;case 21:break;default:ri(r,n),si(n)}}function si(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(F_(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var p=o.stateNode,g=vh(n);Du(n,g,p);break;case 5:var T=o.stateNode;o.flags&32&&(Qn(T,""),o.flags&=-33);var b=vh(n);Du(n,b,T);break;case 3:case 4:var H=o.stateNode.containerInfo,$=vh(n);xh(n,$,H);break;default:throw Error(i(161))}}catch(ce){Yt(n,n.return,ce)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function q_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;q_(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function qr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)V_(n,r.alternate,r),r=r.sibling}function Us(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Xr(4,r,r.return),Us(r);break;case 1:ji(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&I_(r,r.return,o),Us(r);break;case 27:cl(r.stateNode);case 26:case 5:ji(r,r.return),Us(r);break;case 22:r.memoizedState===null&&Us(r);break;case 30:Us(r);break;default:Us(r)}n=n.sibling}}function Yr(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,p=n,g=r,T=g.flags;switch(g.tag){case 0:case 11:case 15:Yr(p,g,o),el(4,g);break;case 1:if(Yr(p,g,o),u=g,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch($){Yt(u,u.return,$)}if(u=g,p=u.updateQueue,p!==null){var b=u.stateNode;try{var H=p.shared.hiddenCallbacks;if(H!==null)for(p.shared.hiddenCallbacks=null,p=0;p<H.length;p++)Mg(H[p],b)}catch($){Yt(u,u.return,$)}}o&&T&64&&O_(g),tl(g,g.return);break;case 27:z_(g);case 26:case 5:Yr(p,g,o),o&&u===null&&T&4&&B_(g),tl(g,g.return);break;case 12:Yr(p,g,o);break;case 13:Yr(p,g,o),o&&T&4&&W_(p,g);break;case 22:g.memoizedState===null&&Yr(p,g,o),tl(g,g.return);break;case 30:break;default:Yr(p,g,o)}r=r.sibling}}function Sh(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Ho(o))}function Eh(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ho(n))}function Zi(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Y_(n,r,o,u),r=r.sibling}function Y_(n,r,o,u){var p=r.flags;switch(r.tag){case 0:case 11:case 15:Zi(n,r,o,u),p&2048&&el(9,r);break;case 1:Zi(n,r,o,u);break;case 3:Zi(n,r,o,u),p&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ho(n)));break;case 12:if(p&2048){Zi(n,r,o,u),n=r.stateNode;try{var g=r.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){Yt(r,r.return,H)}}else Zi(n,r,o,u);break;case 13:Zi(n,r,o,u);break;case 23:break;case 22:g=r.stateNode,T=r.alternate,r.memoizedState!==null?g._visibility&2?Zi(n,r,o,u):nl(n,r):g._visibility&2?Zi(n,r,o,u):(g._visibility|=2,Ea(n,r,o,u,(r.subtreeFlags&10256)!==0)),p&2048&&Sh(T,r);break;case 24:Zi(n,r,o,u),p&2048&&Eh(r.alternate,r);break;default:Zi(n,r,o,u)}}function Ea(n,r,o,u,p){for(p=p&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var g=n,T=r,b=o,H=u,$=T.flags;switch(T.tag){case 0:case 11:case 15:Ea(g,T,b,H,p),el(8,T);break;case 23:break;case 22:var ce=T.stateNode;T.memoizedState!==null?ce._visibility&2?Ea(g,T,b,H,p):nl(g,T):(ce._visibility|=2,Ea(g,T,b,H,p)),p&&$&2048&&Sh(T.alternate,T);break;case 24:Ea(g,T,b,H,p),p&&$&2048&&Eh(T.alternate,T);break;default:Ea(g,T,b,H,p)}r=r.sibling}}function nl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,p=u.flags;switch(u.tag){case 22:nl(o,u),p&2048&&Sh(u.alternate,u);break;case 24:nl(o,u),p&2048&&Eh(u.alternate,u);break;default:nl(o,u)}r=r.sibling}}var il=8192;function Ta(n){if(n.subtreeFlags&il)for(n=n.child;n!==null;)j_(n),n=n.sibling}function j_(n){switch(n.tag){case 26:Ta(n),n.flags&il&&n.memoizedState!==null&&_E(Ni,n.memoizedState,n.memoizedProps);break;case 5:Ta(n);break;case 3:case 4:var r=Ni;Ni=Wu(n.stateNode.containerInfo),Ta(n),Ni=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=il,il=16777216,Ta(n),il=r):Ta(n));break;default:Ta(n)}}function Z_(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function rl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];En=u,Q_(u,n)}Z_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)K_(n),n=n.sibling}function K_(n){switch(n.tag){case 0:case 11:case 15:rl(n),n.flags&2048&&Xr(9,n,n.return);break;case 3:rl(n);break;case 12:rl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Uu(n)):rl(n);break;default:rl(n)}}function Uu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];En=u,Q_(u,n)}Z_(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Xr(8,r,r.return),Uu(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Uu(r));break;default:Uu(r)}n=n.sibling}}function Q_(n,r){for(;En!==null;){var o=En;switch(o.tag){case 0:case 11:case 15:Xr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ho(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,En=u;else e:for(o=n;En!==null;){u=En;var p=u.sibling,g=u.return;if(G_(u),u===o){En=null;break e}if(p!==null){p.return=g,En=p;break e}En=g}}}var NS={getCacheForType:function(n){var r=On(_n),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},PS=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Zt=null,xt=null,bt=0,Ft=0,ai=null,jr=!1,Aa=!1,Th=!1,xr=0,an=0,Zr=0,Ns=0,Ah=0,yi=0,ba=0,sl=null,ti=null,bh=!1,Rh=0,Nu=1/0,Pu=null,Kr=null,Ln=0,Qr=null,Ra=null,wa=0,wh=0,Ch=null,J_=null,al=0,Lh=null;function oi(){if((Bt&2)!==0&&bt!==0)return bt&-bt;if(z.T!==null){var n=ma;return n!==0?n:Bh()}return Tt()}function $_(){yi===0&&(yi=(bt&536870912)===0||Pt?X():536870912);var n=xi.current;return n!==null&&(n.flags|=32),yi}function li(n,r,o){(n===Zt&&(Ft===2||Ft===9)||n.cancelPendingCommit!==null)&&(Ca(n,0),Jr(n,bt,yi,!1)),me(n,o),((Bt&2)===0||n!==Zt)&&(n===Zt&&((Bt&2)===0&&(Ns|=o),an===4&&Jr(n,bt,yi,!1)),Ki(n))}function ev(n,r,o){if((Bt&6)!==0)throw Error(i(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||nt(n,r),p=u?BS(n,r):Nh(n,r,!0),g=u;do{if(p===0){Aa&&!u&&Jr(n,r,0,!1);break}else{if(o=n.current.alternate,g&&!OS(o)){p=Nh(n,r,!1),g=!1;continue}if(p===2){if(g=r,n.errorRecoveryDisabledLanes&g)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;e:{var b=n;p=sl;var H=b.current.memoizedState.isDehydrated;if(H&&(Ca(b,T).flags|=256),T=Nh(b,T,!1),T!==2){if(Th&&!H){b.errorRecoveryDisabledLanes|=g,Ns|=g,p=4;break e}g=ti,ti=p,g!==null&&(ti===null?ti=g:ti.push.apply(ti,g))}p=T}if(g=!1,p!==2)continue}}if(p===1){Ca(n,0),Jr(n,r,0,!0);break}e:{switch(u=n,g=p,g){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Jr(u,r,yi,!jr);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(p=Rh+300-tt(),10<p)){if(Jr(u,r,yi,!jr),ct(u,0,!0)!==0)break e;u.timeoutHandle=Cv(tv.bind(null,u,o,ti,Pu,bh,r,yi,Ns,ba,jr,g,2,-0,0),p);break e}tv(u,o,ti,Pu,bh,r,yi,Ns,ba,jr,g,0,-0,0)}}break}while(!0);Ki(n)}function tv(n,r,o,u,p,g,T,b,H,$,ce,ge,ie,se){if(n.timeoutHandle=-1,ge=r.subtreeFlags,(ge&8192||(ge&16785408)===16785408)&&(dl={stylesheets:null,count:0,unsuspend:gE},j_(r),ge=vE(),ge!==null)){n.cancelPendingCommit=ge(lv.bind(null,n,r,g,o,u,p,T,b,H,ce,1,ie,se)),Jr(n,g,T,!$);return}lv(n,r,g,o,u,p,T,b,H)}function OS(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],g=p.getSnapshot;p=p.value;try{if(!ni(g(),p))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Jr(n,r,o,u){r&=~Ah,r&=~Ns,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var p=r;0<p;){var g=31-Re(p),T=1<<g;u[g]=-1,p&=~T}o!==0&&Ce(n,o,r)}function Ou(){return(Bt&6)===0?(ol(0),!1):!0}function Dh(){if(xt!==null){if(Ft===0)var n=xt.return;else n=xt,fr=Rs=null,jf(n),Ma=null,Qo=0,n=xt;for(;n!==null;)P_(n.alternate,n),n=n.return;xt=null}}function Ca(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,$S(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Dh(),Zt=n,xt=o=lr(n.current,null),bt=r,Ft=0,ai=null,jr=!1,Aa=nt(n,r),Th=!1,ba=yi=Ah=Ns=Zr=an=0,ti=sl=null,bh=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var p=31-Re(u),g=1<<p;r|=n[p],u&=~g}return xr=r,iu(),o}function nv(n,r){mt=null,z.H=Su,r===Go||r===hu?(r=xg(),Ft=3):r===gg?(r=xg(),Ft=4):Ft=r===y_?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ai=r,xt===null&&(an=1,Ru(n,mi(r,n.current)))}function iv(){var n=z.H;return z.H=Su,n===null?Su:n}function rv(){var n=z.A;return z.A=NS,n}function Uh(){an=4,jr||(bt&4194048)!==bt&&xi.current!==null||(Aa=!0),(Zr&134217727)===0&&(Ns&134217727)===0||Zt===null||Jr(Zt,bt,yi,!1)}function Nh(n,r,o){var u=Bt;Bt|=2;var p=iv(),g=rv();(Zt!==n||bt!==r)&&(Pu=null,Ca(n,r)),r=!1;var T=an;e:do try{if(Ft!==0&&xt!==null){var b=xt,H=ai;switch(Ft){case 8:Dh(),T=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(r=!0);var $=Ft;if(Ft=0,ai=null,La(n,b,H,$),o&&Aa){T=0;break e}break;default:$=Ft,Ft=0,ai=null,La(n,b,H,$)}}IS(),T=an;break}catch(ce){nv(n,ce)}while(!0);return r&&n.shellSuspendCounter++,fr=Rs=null,Bt=u,z.H=p,z.A=g,xt===null&&(Zt=null,bt=0,iu()),T}function IS(){for(;xt!==null;)sv(xt)}function BS(n,r){var o=Bt;Bt|=2;var u=iv(),p=rv();Zt!==n||bt!==r?(Pu=null,Nu=tt()+500,Ca(n,r)):Aa=nt(n,r);e:do try{if(Ft!==0&&xt!==null){r=xt;var g=ai;t:switch(Ft){case 1:Ft=0,ai=null,La(n,r,g,1);break;case 2:case 9:if(_g(g)){Ft=0,ai=null,av(r);break}r=function(){Ft!==2&&Ft!==9||Zt!==n||(Ft=7),Ki(n)},g.then(r,r);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:_g(g)?(Ft=0,ai=null,av(r)):(Ft=0,ai=null,La(n,r,g,7));break;case 5:var T=null;switch(xt.tag){case 26:T=xt.memoizedState;case 5:case 27:var b=xt;if(!T||Vv(T)){Ft=0,ai=null;var H=b.sibling;if(H!==null)xt=H;else{var $=b.return;$!==null?(xt=$,Iu($)):xt=null}break t}}Ft=0,ai=null,La(n,r,g,5);break;case 6:Ft=0,ai=null,La(n,r,g,6);break;case 8:Dh(),an=6;break e;default:throw Error(i(462))}}FS();break}catch(ce){nv(n,ce)}while(!0);return fr=Rs=null,z.H=u,z.A=p,Bt=o,xt!==null?0:(Zt=null,bt=0,iu(),an)}function FS(){for(;xt!==null&&!Rn();)sv(xt)}function sv(n){var r=U_(n.alternate,n,xr);n.memoizedProps=n.pendingProps,r===null?Iu(n):xt=r}function av(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=b_(o,r,r.pendingProps,r.type,void 0,bt);break;case 11:r=b_(o,r,r.pendingProps,r.type.render,r.ref,bt);break;case 5:jf(r);default:P_(o,r),r=xt=og(r,xr),r=U_(o,r,xr)}n.memoizedProps=n.pendingProps,r===null?Iu(n):xt=r}function La(n,r,o,u){fr=Rs=null,jf(r),Ma=null,Qo=0;var p=r.return;try{if(RS(n,p,r,o,bt)){an=1,Ru(n,mi(o,n.current)),xt=null;return}}catch(g){if(p!==null)throw xt=p,g;an=1,Ru(n,mi(o,n.current)),xt=null;return}r.flags&32768?(Pt||u===1?n=!0:Aa||(bt&536870912)!==0?n=!1:(jr=n=!0,(u===2||u===9||u===3||u===6)&&(u=xi.current,u!==null&&u.tag===13&&(u.flags|=16384))),ov(r,n)):Iu(r)}function Iu(n){var r=n;do{if((r.flags&32768)!==0){ov(r,jr);return}n=r.return;var o=CS(r.alternate,r,xr);if(o!==null){xt=o;return}if(r=r.sibling,r!==null){xt=r;return}xt=r=n}while(r!==null);an===0&&(an=5)}function ov(n,r){do{var o=LS(n.alternate,n);if(o!==null){o.flags&=32767,xt=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){xt=n;return}xt=n=o}while(n!==null);an=6,xt=null}function lv(n,r,o,u,p,g,T,b,H){n.cancelPendingCommit=null;do Bu();while(Ln!==0);if((Bt&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(g=r.lanes|r.childLanes,g|=Ef,Ue(n,o,g,T,b,H),n===Zt&&(xt=Zt=null,bt=0),Ra=r,Qr=n,wa=o,wh=g,Ch=p,J_=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,GS(O,function(){return dv(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,p=j.p,j.p=2,T=Bt,Bt|=4;try{DS(n,r,o)}finally{Bt=T,j.p=p,z.T=u}}Ln=1,uv(),cv(),fv()}}function uv(){if(Ln===1){Ln=0;var n=Qr,r=Ra,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var u=j.p;j.p=2;var p=Bt;Bt|=4;try{X_(r,n);var g=Xh,T=Qm(n.containerInfo),b=g.focusedElem,H=g.selectionRange;if(T!==b&&b&&b.ownerDocument&&Km(b.ownerDocument.documentElement,b)){if(H!==null&&vf(b)){var $=H.start,ce=H.end;if(ce===void 0&&(ce=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ce,b.value.length);else{var ge=b.ownerDocument||document,ie=ge&&ge.defaultView||window;if(ie.getSelection){var se=ie.getSelection(),it=b.textContent.length,Ke=Math.min(H.start,it),Xt=H.end===void 0?Ke:Math.min(H.end,it);!se.extend&&Ke>Xt&&(T=Xt,Xt=Ke,Ke=T);var Z=Zm(b,Ke),W=Zm(b,Xt);if(Z&&W&&(se.rangeCount!==1||se.anchorNode!==Z.node||se.anchorOffset!==Z.offset||se.focusNode!==W.node||se.focusOffset!==W.offset)){var J=ge.createRange();J.setStart(Z.node,Z.offset),se.removeAllRanges(),Ke>Xt?(se.addRange(J),se.extend(W.node,W.offset)):(J.setEnd(W.node,W.offset),se.addRange(J))}}}}for(ge=[],se=b;se=se.parentNode;)se.nodeType===1&&ge.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ge.length;b++){var pe=ge[b];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}Zu=!!Wh,Xh=Wh=null}finally{Bt=p,j.p=u,z.T=o}}n.current=r,Ln=2}}function cv(){if(Ln===2){Ln=0;var n=Qr,r=Ra,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var u=j.p;j.p=2;var p=Bt;Bt|=4;try{V_(n,r.alternate,r)}finally{Bt=p,j.p=u,z.T=o}}Ln=3}}function fv(){if(Ln===4||Ln===3){Ln=0,pt();var n=Qr,r=Ra,o=wa,u=J_;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ln=5:(Ln=0,Ra=Qr=null,hv(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(Kr=null),Qt(o),r=r.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(fe,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=z.T,p=j.p,j.p=2,z.T=null;try{for(var g=n.onRecoverableError,T=0;T<u.length;T++){var b=u[T];g(b.value,{componentStack:b.stack})}}finally{z.T=r,j.p=p}}(wa&3)!==0&&Bu(),Ki(n),p=n.pendingLanes,(o&4194090)!==0&&(p&42)!==0?n===Lh?al++:(al=0,Lh=n):al=0,ol(0)}}function hv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Ho(r)))}function Bu(n){return uv(),cv(),fv(),dv()}function dv(){if(Ln!==5)return!1;var n=Qr,r=wh;wh=0;var o=Qt(wa),u=z.T,p=j.p;try{j.p=32>o?32:o,z.T=null,o=Ch,Ch=null;var g=Qr,T=wa;if(Ln=0,Ra=Qr=null,wa=0,(Bt&6)!==0)throw Error(i(331));var b=Bt;if(Bt|=4,K_(g.current),Y_(g,g.current,T,o),Bt=b,ol(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(fe,g)}catch{}return!0}finally{j.p=p,z.T=u,hv(n,r)}}function pv(n,r,o){r=mi(o,r),r=lh(n.stateNode,r,2),n=Vr(n,r,2),n!==null&&(me(n,2),Ki(n))}function Yt(n,r,o){if(n.tag===3)pv(n,n,o);else for(;r!==null;){if(r.tag===3){pv(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Kr===null||!Kr.has(u))){n=mi(o,n),o=v_(2),u=Vr(r,o,2),u!==null&&(x_(o,u,r,n),me(u,2),Ki(u));break}}r=r.return}}function Ph(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new PS;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(Th=!0,p.add(o),n=zS.bind(null,n,r,o),r.then(n,n))}function zS(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Zt===n&&(bt&o)===o&&(an===4||an===3&&(bt&62914560)===bt&&300>tt()-Rh?(Bt&2)===0&&Ca(n,0):Ah|=o,ba===bt&&(ba=0)),Ki(n)}function mv(n,r){r===0&&(r=Le()),n=fa(n,r),n!==null&&(me(n,r),Ki(n))}function HS(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),mv(n,o)}function VS(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(r),mv(n,o)}function GS(n,r){return Ht(n,r)}var Fu=null,Da=null,Oh=!1,zu=!1,Ih=!1,Ps=0;function Ki(n){n!==Da&&n.next===null&&(Da===null?Fu=Da=n:Da=Da.next=n),zu=!0,Oh||(Oh=!0,WS())}function ol(n,r){if(!Ih&&zu){Ih=!0;do for(var o=!1,u=Fu;u!==null;){if(n!==0){var p=u.pendingLanes;if(p===0)var g=0;else{var T=u.suspendedLanes,b=u.pingedLanes;g=(1<<31-Re(42|n)+1)-1,g&=p&~(T&~b),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,xv(u,g))}else g=bt,g=ct(u,u===Zt?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||nt(u,g)||(o=!0,xv(u,g));u=u.next}while(o);Ih=!1}}function kS(){gv()}function gv(){zu=Oh=!1;var n=0;Ps!==0&&(JS()&&(n=Ps),Ps=0);for(var r=tt(),o=null,u=Fu;u!==null;){var p=u.next,g=_v(u,r);g===0?(u.next=null,o===null?Fu=p:o.next=p,p===null&&(Da=o)):(o=u,(n!==0||(g&3)!==0)&&(zu=!0)),u=p}ol(n)}function _v(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var T=31-Re(g),b=1<<T,H=p[T];H===-1?((b&o)===0||(b&u)!==0)&&(p[T]=Nt(b,r)):H<=r&&(n.expiredLanes|=b),g&=~b}if(r=Zt,o=bt,o=ct(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(Ft===2||Ft===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&k(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||nt(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&k(u),Qt(o)){case 2:case 8:o=He;break;case 32:o=O;break;case 268435456:o=ne;break;default:o=O}return u=vv.bind(null,n),o=Ht(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&k(u),n.callbackPriority=2,n.callbackNode=null,2}function vv(n,r){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Bu()&&n.callbackNode!==o)return null;var u=bt;return u=ct(n,n===Zt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(ev(n,u,r),_v(n,tt()),n.callbackNode!=null&&n.callbackNode===o?vv.bind(null,n):null)}function xv(n,r){if(Bu())return null;ev(n,r,!0)}function WS(){eE(function(){(Bt&6)!==0?Ht(Ut,kS):gv()})}function Bh(){return Ps===0&&(Ps=X()),Ps}function yv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Kl(""+n)}function Mv(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function XS(n,r,o,u,p){if(r==="submit"&&o&&o.stateNode===p){var g=yv((p[mn]||null).action),T=u.submitter;T&&(r=(r=T[mn]||null)?yv(r.formAction):T.getAttribute("formAction"),r!==null&&(g=r,T=null));var b=new eu("action","action",null,u,p);n.push({event:b,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ps!==0){var H=T?Mv(p,T):new FormData(p);ih(o,{pending:!0,data:H,method:p.method,action:g},null,H)}}else typeof g=="function"&&(b.preventDefault(),H=T?Mv(p,T):new FormData(p),ih(o,{pending:!0,data:H,method:p.method,action:g},g,H))},currentTarget:p}]})}}for(var Fh=0;Fh<Sf.length;Fh++){var zh=Sf[Fh],qS=zh.toLowerCase(),YS=zh[0].toUpperCase()+zh.slice(1);Ui(qS,"on"+YS)}Ui(eg,"onAnimationEnd"),Ui(tg,"onAnimationIteration"),Ui(ng,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(cS,"onTransitionRun"),Ui(fS,"onTransitionStart"),Ui(hS,"onTransitionCancel"),Ui(ig,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function Sv(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var T=u.length-1;0<=T;T--){var b=u[T],H=b.instance,$=b.currentTarget;if(b=b.listener,H!==g&&p.isPropagationStopped())break e;g=b,p.currentTarget=$;try{g(p)}catch(ce){bu(ce)}p.currentTarget=null,g=H}else for(T=0;T<u.length;T++){if(b=u[T],H=b.instance,$=b.currentTarget,b=b.listener,H!==g&&p.isPropagationStopped())break e;g=b,p.currentTarget=$;try{g(p)}catch(ce){bu(ce)}p.currentTarget=null,g=H}}}}function yt(n,r){var o=r[rr];o===void 0&&(o=r[rr]=new Set);var u=n+"__bubble";o.has(u)||(Ev(r,n,2,!1),o.add(u))}function Hh(n,r,o){var u=0;r&&(u|=4),Ev(o,n,u,r)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function Vh(n){if(!n[Hu]){n[Hu]=!0,ia.forEach(function(o){o!=="selectionchange"&&(jS.has(o)||Hh(o,!1,n),Hh(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Hu]||(r[Hu]=!0,Hh("selectionchange",!1,r))}}function Ev(n,r,o,u){switch(Yv(r)){case 2:var p=ME;break;case 8:p=SE;break;default:p=td}o=p.bind(null,r,o,n),p=void 0,!uf||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function Gh(n,r,o,u,p){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var b=u.stateNode.containerInfo;if(b===p)break;if(T===4)for(T=u.return;T!==null;){var H=T.tag;if((H===3||H===4)&&T.stateNode.containerInfo===p)return;T=T.return}for(;b!==null;){if(T=Ci(b),T===null)return;if(H=T.tag,H===5||H===6||H===26||H===27){u=g=T;continue e}b=b.parentNode}}u=u.return}Lm(function(){var $=g,ce=of(o),ge=[];e:{var ie=rg.get(n);if(ie!==void 0){var se=eu,it=n;switch(n){case"keypress":if(Jl(o)===0)break e;case"keydown":case"keyup":se=GM;break;case"focusin":it="focus",se=df;break;case"focusout":it="blur",se=df;break;case"beforeblur":case"afterblur":se=df;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=LM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=XM;break;case eg:case tg:case ng:se=NM;break;case ig:se=YM;break;case"scroll":case"scrollend":se=wM;break;case"wheel":se=ZM;break;case"copy":case"cut":case"paste":se=OM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Om;break;case"toggle":case"beforetoggle":se=QM}var Ke=(r&4)!==0,Xt=!Ke&&(n==="scroll"||n==="scrollend"),Z=Ke?ie!==null?ie+"Capture":null:ie;Ke=[];for(var W=$,J;W!==null;){var pe=W;if(J=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||J===null||Z===null||(pe=Ro(W,Z),pe!=null&&Ke.push(ul(W,pe,J))),Xt)break;W=W.return}0<Ke.length&&(ie=new se(ie,it,null,o,ce),ge.push({event:ie,listeners:Ke}))}}if((r&7)===0){e:{if(ie=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",ie&&o!==af&&(it=o.relatedTarget||o.fromElement)&&(Ci(it)||it[Nn]))break e;if((se||ie)&&(ie=ce.window===ce?ce:(ie=ce.ownerDocument)?ie.defaultView||ie.parentWindow:window,se?(it=o.relatedTarget||o.toElement,se=$,it=it?Ci(it):null,it!==null&&(Xt=l(it),Ke=it.tag,it!==Xt||Ke!==5&&Ke!==27&&Ke!==6)&&(it=null)):(se=null,it=$),se!==it)){if(Ke=Nm,pe="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=Om,pe="onPointerLeave",Z="onPointerEnter",W="pointer"),Xt=se==null?ie:sr(se),J=it==null?ie:sr(it),ie=new Ke(pe,W+"leave",se,o,ce),ie.target=Xt,ie.relatedTarget=J,pe=null,Ci(ce)===$&&(Ke=new Ke(Z,W+"enter",it,o,ce),Ke.target=J,Ke.relatedTarget=Xt,pe=Ke),Xt=pe,se&&it)t:{for(Ke=se,Z=it,W=0,J=Ke;J;J=Ua(J))W++;for(J=0,pe=Z;pe;pe=Ua(pe))J++;for(;0<W-J;)Ke=Ua(Ke),W--;for(;0<J-W;)Z=Ua(Z),J--;for(;W--;){if(Ke===Z||Z!==null&&Ke===Z.alternate)break t;Ke=Ua(Ke),Z=Ua(Z)}Ke=null}else Ke=null;se!==null&&Tv(ge,ie,se,Ke,!1),it!==null&&Xt!==null&&Tv(ge,Xt,it,Ke,!0)}}e:{if(ie=$?sr($):window,se=ie.nodeName&&ie.nodeName.toLowerCase(),se==="select"||se==="input"&&ie.type==="file")var ze=km;else if(Vm(ie))if(Wm)ze=oS;else{ze=sS;var _t=rS}else se=ie.nodeName,!se||se.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&sf($.elementType)&&(ze=km):ze=aS;if(ze&&(ze=ze(n,$))){Gm(ge,ze,o,ce);break e}_t&&_t(n,ie,$),n==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&Pn(ie,"number",ie.value)}switch(_t=$?sr($):window,n){case"focusin":(Vm(_t)||_t.contentEditable==="true")&&(la=_t,xf=$,Oo=null);break;case"focusout":Oo=xf=la=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,Jm(ge,o,ce);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":Jm(ge,o,ce)}var ke;if(mf)e:{switch(n){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else oa?zm(n,o)&&(Je="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Je="onCompositionStart");Je&&(Im&&o.locale!=="ko"&&(oa||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&oa&&(ke=Dm()):(Br=ce,cf="value"in Br?Br.value:Br.textContent,oa=!0)),_t=Vu($,Je),0<_t.length&&(Je=new Pm(Je,n,null,o,ce),ge.push({event:Je,listeners:_t}),ke?Je.data=ke:(ke=Hm(o),ke!==null&&(Je.data=ke)))),(ke=$M?eS(n,o):tS(n,o))&&(Je=Vu($,"onBeforeInput"),0<Je.length&&(_t=new Pm("onBeforeInput","beforeinput",null,o,ce),ge.push({event:_t,listeners:Je}),_t.data=ke)),XS(ge,n,$,o,ce)}Sv(ge,r)})}function ul(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Vu(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Ro(n,o),p!=null&&u.unshift(ul(n,p,g)),p=Ro(n,r),p!=null&&u.push(ul(n,p,g))),n.tag===3)return u;n=n.return}return[]}function Ua(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Tv(n,r,o,u,p){for(var g=r._reactName,T=[];o!==null&&o!==u;){var b=o,H=b.alternate,$=b.stateNode;if(b=b.tag,H!==null&&H===u)break;b!==5&&b!==26&&b!==27||$===null||(H=$,p?($=Ro(o,g),$!=null&&T.unshift(ul(o,$,H))):p||($=Ro(o,g),$!=null&&T.push(ul(o,$,H)))),o=o.return}T.length!==0&&n.push({event:r,listeners:T})}var ZS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function Av(n){return(typeof n=="string"?n:""+n).replace(ZS,`
`).replace(KS,"")}function bv(n,r){return r=Av(r),Av(n)===r}function Gu(){}function Wt(n,r,o,u,p,g){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Qn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Qn(n,""+u);break;case"className":Be(n,"class",u);break;case"tabIndex":Be(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(n,o,u);break;case"style":wm(n,u,g);break;case"data":if(r!=="object"){Be(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Kl(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(r!=="input"&&Wt(n,r,"name",p.name,p,null),Wt(n,r,"formEncType",p.formEncType,p,null),Wt(n,r,"formMethod",p.formMethod,p,null),Wt(n,r,"formTarget",p.formTarget,p,null)):(Wt(n,r,"encType",p.encType,p,null),Wt(n,r,"method",p.method,p,null),Wt(n,r,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Kl(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Gu);break;case"onScroll":u!=null&&yt("scroll",n);break;case"onScrollEnd":u!=null&&yt("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Kl(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":yt("beforetoggle",n),yt("toggle",n),De(n,"popover",u);break;case"xlinkActuate":Ie(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ie(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ie(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ie(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ie(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ie(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":De(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=bM.get(o)||o,De(n,o,u))}}function kh(n,r,o,u,p,g){switch(o){case"style":wm(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Qn(n,u):(typeof u=="number"||typeof u=="bigint")&&Qn(n,""+u);break;case"onScroll":u!=null&&yt("scroll",n);break;case"onScrollEnd":u!=null&&yt("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Gu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ar.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),r=o.slice(2,p?o.length-7:void 0),g=n[mn]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(r,g,p),typeof u=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,p);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):De(n,o,u)}}}function Dn(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",n),yt("load",n);var u=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var T=o[g];if(T!=null)switch(g){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:Wt(n,r,g,T,o,null)}}p&&Wt(n,r,"srcSet",o.srcSet,o,null),u&&Wt(n,r,"src",o.src,o,null);return;case"input":yt("invalid",n);var b=g=T=p=null,H=null,$=null;for(u in o)if(o.hasOwnProperty(u)){var ce=o[u];if(ce!=null)switch(u){case"name":p=ce;break;case"type":T=ce;break;case"checked":H=ce;break;case"defaultChecked":$=ce;break;case"value":g=ce;break;case"defaultValue":b=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(i(137,r));break;default:Wt(n,r,u,ce,o,null)}}Vn(n,g,b,H,$,T,p,!1),Et(n);return;case"select":yt("invalid",n),u=T=g=null;for(p in o)if(o.hasOwnProperty(p)&&(b=o[p],b!=null))switch(p){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":u=b;default:Wt(n,r,p,b,o,null)}r=g,o=T,n.multiple=!!u,r!=null?rn(n,!!u,r,!1):o!=null&&rn(n,!!u,o,!0);return;case"textarea":yt("invalid",n),g=p=u=null;for(T in o)if(o.hasOwnProperty(T)&&(b=o[T],b!=null))switch(T){case"value":u=b;break;case"defaultValue":p=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(i(91));break;default:Wt(n,r,T,b,o,null)}ra(n,u,p,g),Et(n);return;case"option":for(H in o)if(o.hasOwnProperty(H)&&(u=o[H],u!=null))switch(H){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Wt(n,r,H,u,o,null)}return;case"dialog":yt("beforetoggle",n),yt("toggle",n),yt("cancel",n),yt("close",n);break;case"iframe":case"object":yt("load",n);break;case"video":case"audio":for(u=0;u<ll.length;u++)yt(ll[u],n);break;case"image":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"embed":case"source":case"link":yt("error",n),yt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in o)if(o.hasOwnProperty($)&&(u=o[$],u!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:Wt(n,r,$,u,o,null)}return;default:if(sf(r)){for(ce in o)o.hasOwnProperty(ce)&&(u=o[ce],u!==void 0&&kh(n,r,ce,u,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(u=o[b],u!=null&&Wt(n,r,b,u,o,null))}function QS(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,T=null,b=null,H=null,$=null,ce=null;for(se in o){var ge=o[se];if(o.hasOwnProperty(se)&&ge!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":H=ge;default:u.hasOwnProperty(se)||Wt(n,r,se,null,u,ge)}}for(var ie in u){var se=u[ie];if(ge=o[ie],u.hasOwnProperty(ie)&&(se!=null||ge!=null))switch(ie){case"type":g=se;break;case"name":p=se;break;case"checked":$=se;break;case"defaultChecked":ce=se;break;case"value":T=se;break;case"defaultValue":b=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(i(137,r));break;default:se!==ge&&Wt(n,r,ie,se,u,ge)}}Gt(n,T,b,H,$,ce,g,p);return;case"select":se=T=b=ie=null;for(g in o)if(H=o[g],o.hasOwnProperty(g)&&H!=null)switch(g){case"value":break;case"multiple":se=H;default:u.hasOwnProperty(g)||Wt(n,r,g,null,u,H)}for(p in u)if(g=u[p],H=o[p],u.hasOwnProperty(p)&&(g!=null||H!=null))switch(p){case"value":ie=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==H&&Wt(n,r,p,g,u,H)}r=b,o=T,u=se,ie!=null?rn(n,!!o,ie,!1):!!u!=!!o&&(r!=null?rn(n,!!o,r,!0):rn(n,!!o,o?[]:"",!1));return;case"textarea":se=ie=null;for(b in o)if(p=o[b],o.hasOwnProperty(b)&&p!=null&&!u.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Wt(n,r,b,null,u,p)}for(T in u)if(p=u[T],g=o[T],u.hasOwnProperty(T)&&(p!=null||g!=null))switch(T){case"value":ie=p;break;case"defaultValue":se=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(i(91));break;default:p!==g&&Wt(n,r,T,p,u,g)}wn(n,ie,se);return;case"option":for(var it in o)if(ie=o[it],o.hasOwnProperty(it)&&ie!=null&&!u.hasOwnProperty(it))switch(it){case"selected":n.selected=!1;break;default:Wt(n,r,it,null,u,ie)}for(H in u)if(ie=u[H],se=o[H],u.hasOwnProperty(H)&&ie!==se&&(ie!=null||se!=null))switch(H){case"selected":n.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Wt(n,r,H,ie,u,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ke in o)ie=o[Ke],o.hasOwnProperty(Ke)&&ie!=null&&!u.hasOwnProperty(Ke)&&Wt(n,r,Ke,null,u,ie);for($ in u)if(ie=u[$],se=o[$],u.hasOwnProperty($)&&ie!==se&&(ie!=null||se!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(i(137,r));break;default:Wt(n,r,$,ie,u,se)}return;default:if(sf(r)){for(var Xt in o)ie=o[Xt],o.hasOwnProperty(Xt)&&ie!==void 0&&!u.hasOwnProperty(Xt)&&kh(n,r,Xt,void 0,u,ie);for(ce in u)ie=u[ce],se=o[ce],!u.hasOwnProperty(ce)||ie===se||ie===void 0&&se===void 0||kh(n,r,ce,ie,u,se);return}}for(var Z in o)ie=o[Z],o.hasOwnProperty(Z)&&ie!=null&&!u.hasOwnProperty(Z)&&Wt(n,r,Z,null,u,ie);for(ge in u)ie=u[ge],se=o[ge],!u.hasOwnProperty(ge)||ie===se||ie==null&&se==null||Wt(n,r,ge,ie,u,se)}var Wh=null,Xh=null;function ku(n){return n.nodeType===9?n:n.ownerDocument}function Rv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function qh(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Yh=null;function JS(){var n=window.event;return n&&n.type==="popstate"?n===Yh?!1:(Yh=n,!0):(Yh=null,!1)}var Cv=typeof setTimeout=="function"?setTimeout:void 0,$S=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,eE=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(n){return Lv.resolve(null).then(n).catch(tE)}:Cv;function tE(n){setTimeout(function(){throw n})}function $r(n){return n==="head"}function Dv(n,r){var o=r,u=0,p=0;do{var g=o.nextSibling;if(n.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<u&&8>u){o=u;var T=n.ownerDocument;if(o&1&&cl(T.documentElement),o&2&&cl(T.body),o&4)for(o=T.head,cl(o),T=o.firstChild;T;){var b=T.nextSibling,H=T.nodeName;T[wi]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=b}}if(p===0){n.removeChild(g),vl(r);return}p--}else o==="$"||o==="$?"||o==="$!"?p++:u=o.charCodeAt(0)-48;else u=0;o=g}while(o);vl(r)}function jh(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":jh(o),Wi(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function nE(n,r,o,u){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[wi])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=Pi(n.nextSibling),n===null)break}return null}function iE(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Pi(n.nextSibling),n===null))return null;return n}function Zh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function rE(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Pi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var Kh=null;function Uv(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function Nv(n,r,o){switch(r=ku(o),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function cl(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Wi(n)}var Mi=new Map,Pv=new Set;function Wu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var yr=j.d;j.d={f:sE,r:aE,D:oE,C:lE,L:uE,m:cE,X:hE,S:fE,M:dE};function sE(){var n=yr.f(),r=Ou();return n||r}function aE(n){var r=Xi(n);r!==null&&r.tag===5&&r.type==="form"?e_(r):yr.r(n)}var Na=typeof document>"u"?null:document;function Ov(n,r,o){var u=Na;if(u&&typeof r=="string"&&r){var p=Mn(r);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),Pv.has(p)||(Pv.add(p),n={rel:n,crossOrigin:o,href:r},u.querySelector(p)===null&&(r=u.createElement("link"),Dn(r,"link",n),tn(r),u.head.appendChild(r)))}}function oE(n){yr.D(n),Ov("dns-prefetch",n,null)}function lE(n,r){yr.C(n,r),Ov("preconnect",n,r)}function uE(n,r,o){yr.L(n,r,o);var u=Na;if(u&&n&&r){var p='link[rel="preload"][as="'+Mn(r)+'"]';r==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+Mn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+Mn(o.imageSizes)+'"]')):p+='[href="'+Mn(n)+'"]';var g=p;switch(r){case"style":g=Pa(n);break;case"script":g=Oa(n)}Mi.has(g)||(n=m({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Mi.set(g,n),u.querySelector(p)!==null||r==="style"&&u.querySelector(fl(g))||r==="script"&&u.querySelector(hl(g))||(r=u.createElement("link"),Dn(r,"link",n),tn(r),u.head.appendChild(r)))}}function cE(n,r){yr.m(n,r);var o=Na;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+Mn(u)+'"][href="'+Mn(n)+'"]',g=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Oa(n)}if(!Mi.has(g)&&(n=m({rel:"modulepreload",href:n},r),Mi.set(g,n),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(hl(g)))return}u=o.createElement("link"),Dn(u,"link",n),tn(u),o.head.appendChild(u)}}}function fE(n,r,o){yr.S(n,r,o);var u=Na;if(u&&n){var p=Li(u).hoistableStyles,g=Pa(n);r=r||"default";var T=p.get(g);if(!T){var b={loading:0,preload:null};if(T=u.querySelector(fl(g)))b.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Mi.get(g))&&Qh(n,o);var H=T=u.createElement("link");tn(H),Dn(H,"link",n),H._p=new Promise(function($,ce){H.onload=$,H.onerror=ce}),H.addEventListener("load",function(){b.loading|=1}),H.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Xu(T,r,u)}T={type:"stylesheet",instance:T,count:1,state:b},p.set(g,T)}}}function hE(n,r){yr.X(n,r);var o=Na;if(o&&n){var u=Li(o).hoistableScripts,p=Oa(n),g=u.get(p);g||(g=o.querySelector(hl(p)),g||(n=m({src:n,async:!0},r),(r=Mi.get(p))&&Jh(n,r),g=o.createElement("script"),tn(g),Dn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function dE(n,r){yr.M(n,r);var o=Na;if(o&&n){var u=Li(o).hoistableScripts,p=Oa(n),g=u.get(p);g||(g=o.querySelector(hl(p)),g||(n=m({src:n,async:!0,type:"module"},r),(r=Mi.get(p))&&Jh(n,r),g=o.createElement("script"),tn(g),Dn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function Iv(n,r,o,u){var p=(p=ye.current)?Wu(p):null;if(!p)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Pa(o.href),o=Li(p).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Pa(o.href);var g=Li(p).hoistableStyles,T=g.get(n);if(T||(p=p.ownerDocument||p,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,T),(g=p.querySelector(fl(n)))&&!g._p&&(T.instance=g,T.state.loading=5),Mi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Mi.set(n,o),g||pE(p,n,o,T.state))),r&&u===null)throw Error(i(528,""));return T}if(r&&u!==null)throw Error(i(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Oa(o),o=Li(p).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Pa(n){return'href="'+Mn(n)+'"'}function fl(n){return'link[rel="stylesheet"]['+n+"]"}function Bv(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function pE(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Dn(r,"link",o),tn(r),n.head.appendChild(r))}function Oa(n){return'[src="'+Mn(n)+'"]'}function hl(n){return"script[async]"+n}function Fv(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Mn(o.href)+'"]');if(u)return r.instance=u,tn(u),u;var p=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),tn(u),Dn(u,"style",p),Xu(u,o.precedence,n),r.instance=u;case"stylesheet":p=Pa(o.href);var g=n.querySelector(fl(p));if(g)return r.state.loading|=4,r.instance=g,tn(g),g;u=Bv(o),(p=Mi.get(p))&&Qh(u,p),g=(n.ownerDocument||n).createElement("link"),tn(g);var T=g;return T._p=new Promise(function(b,H){T.onload=b,T.onerror=H}),Dn(g,"link",u),r.state.loading|=4,Xu(g,o.precedence,n),r.instance=g;case"script":return g=Oa(o.src),(p=n.querySelector(hl(g)))?(r.instance=p,tn(p),p):(u=o,(p=Mi.get(g))&&(u=m({},o),Jh(u,p)),n=n.ownerDocument||n,p=n.createElement("script"),tn(p),Dn(p,"link",u),n.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Xu(u,o.precedence,n));return r.instance}function Xu(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,g=p,T=0;T<u.length;T++){var b=u[T];if(b.dataset.precedence===r)g=b;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function Qh(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Jh(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var qu=null;function zv(n,r,o){if(qu===null){var u=new Map,p=qu=new Map;p.set(o,u)}else p=qu,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var g=o[p];if(!(g[wi]||g[en]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(r)||"";T=n+T;var b=u.get(T);b?b.push(g):u.set(T,[g])}}return u}function Hv(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function mE(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Vv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var dl=null;function gE(){}function _E(n,r,o){if(dl===null)throw Error(i(475));var u=dl;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=Pa(o.href),g=n.querySelector(fl(p));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Yu.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=g,tn(g);return}g=n.ownerDocument||n,o=Bv(o),(p=Mi.get(p))&&Qh(o,p),g=g.createElement("link"),tn(g);var T=g;T._p=new Promise(function(b,H){T.onload=b,T.onerror=H}),Dn(g,"link",o),r.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Yu.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function vE(){if(dl===null)throw Error(i(475));var n=dl;return n.stylesheets&&n.count===0&&$h(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&$h(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Yu(){if(this.count--,this.count===0){if(this.stylesheets)$h(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ju=null;function $h(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ju=new Map,r.forEach(xE,n),ju=null,Yu.call(n))}function xE(n,r){if(!(r.state.loading&4)){var o=ju.get(n);if(o)var u=o.get(null);else{o=new Map,ju.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var T=p[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),u=T)}u&&o.set(null,u)}p=r.instance,T=p.getAttribute("data-precedence"),g=o.get(T)||u,g===u&&o.set(null,p),o.set(T,p),this.count++,u=Yu.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),r.state.loading|=4}}var pl={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function yE(n,r,o,u,p,g,T,b){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=le(0),this.hiddenUpdates=le(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Gv(n,r,o,u,p,g,T,b,H,$,ce,ge){return n=new yE(n,r,o,T,b,H,$,ge),r=1,g===!0&&(r|=24),g=ii(3,null,null,r),n.current=g,g.stateNode=n,r=Pf(),r.refCount++,n.pooledCache=r,r.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:r},Ff(g),n}function kv(n){return n?(n=ha,n):ha}function Wv(n,r,o,u,p,g){p=kv(p),u.context===null?u.context=p:u.pendingContext=p,u=Hr(r),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Vr(n,u,r),o!==null&&(li(o,n,r),Wo(o,n,r))}function Xv(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function ed(n,r){Xv(n,r),(n=n.alternate)&&Xv(n,r)}function qv(n){if(n.tag===13){var r=fa(n,67108864);r!==null&&li(r,n,67108864),ed(n,67108864)}}var Zu=!0;function ME(n,r,o,u){var p=z.T;z.T=null;var g=j.p;try{j.p=2,td(n,r,o,u)}finally{j.p=g,z.T=p}}function SE(n,r,o,u){var p=z.T;z.T=null;var g=j.p;try{j.p=8,td(n,r,o,u)}finally{j.p=g,z.T=p}}function td(n,r,o,u){if(Zu){var p=nd(u);if(p===null)Gh(n,r,u,Ku,o),jv(n,u);else if(TE(p,n,r,o,u))u.stopPropagation();else if(jv(n,u),r&4&&-1<EE.indexOf(n)){for(;p!==null;){var g=Xi(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Pe(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var H=1<<31-Re(T);b.entanglements[1]|=H,T&=~H}Ki(g),(Bt&6)===0&&(Nu=tt()+500,ol(0))}}break;case 13:b=fa(g,2),b!==null&&li(b,g,2),Ou(),ed(g,2)}if(g=nd(u),g===null&&Gh(n,r,u,Ku,o),g===p)break;p=g}p!==null&&u.stopPropagation()}else Gh(n,r,u,null,o)}}function nd(n){return n=of(n),id(n)}var Ku=null;function id(n){if(Ku=null,n=Ci(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ku=n,null}function Yv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Ut:return 2;case He:return 8;case O:case R:return 32;case ne:return 268435456;default:return 32}default:return 32}}var rd=!1,es=null,ts=null,ns=null,ml=new Map,gl=new Map,is=[],EE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jv(n,r){switch(n){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":ml.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(r.pointerId)}}function _l(n,r,o,u,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},r!==null&&(r=Xi(r),r!==null&&qv(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function TE(n,r,o,u,p){switch(r){case"focusin":return es=_l(es,n,r,o,u,p),!0;case"dragenter":return ts=_l(ts,n,r,o,u,p),!0;case"mouseover":return ns=_l(ns,n,r,o,u,p),!0;case"pointerover":var g=p.pointerId;return ml.set(g,_l(ml.get(g)||null,n,r,o,u,p)),!0;case"gotpointercapture":return g=p.pointerId,gl.set(g,_l(gl.get(g)||null,n,r,o,u,p)),!0}return!1}function Zv(n){var r=Ci(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,zn(n.priority,function(){if(o.tag===13){var u=oi();u=Vt(u);var p=fa(o,u);p!==null&&li(p,o,u),ed(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qu(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=nd(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);af=u,o.target.dispatchEvent(u),af=null}else return r=Xi(o),r!==null&&qv(r),n.blockedOn=o,!1;r.shift()}return!0}function Kv(n,r,o){Qu(n)&&o.delete(r)}function AE(){rd=!1,es!==null&&Qu(es)&&(es=null),ts!==null&&Qu(ts)&&(ts=null),ns!==null&&Qu(ns)&&(ns=null),ml.forEach(Kv),gl.forEach(Kv)}function Ju(n,r){n.blockedOn===r&&(n.blockedOn=null,rd||(rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,AE)))}var $u=null;function Qv(n){$u!==n&&($u=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){$u===n&&($u=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],p=n[r+2];if(typeof u!="function"){if(id(u||o)===null)continue;break}var g=Xi(o);g!==null&&(n.splice(r,3),r-=3,ih(g,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function vl(n){function r(H){return Ju(H,n)}es!==null&&Ju(es,n),ts!==null&&Ju(ts,n),ns!==null&&Ju(ns,n),ml.forEach(r),gl.forEach(r);for(var o=0;o<is.length;o++){var u=is[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<is.length&&(o=is[0],o.blockedOn===null);)Zv(o),o.blockedOn===null&&is.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],g=o[u+1],T=p[mn]||null;if(typeof g=="function")T||Qv(o);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(p=g,T=g[mn]||null)b=T.formAction;else if(id(p)!==null)continue}else b=T.action;typeof b=="function"?o[u+1]=b:(o.splice(u,3),u-=3),Qv(o)}}}function sd(n){this._internalRoot=n}ec.prototype.render=sd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var o=r.current,u=oi();Wv(o,u,n,r,null,null)},ec.prototype.unmount=sd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Wv(n.current,2,null,n,null,null),Ou(),r[Nn]=null}};function ec(n){this._internalRoot=n}ec.prototype.unstable_scheduleHydration=function(n){if(n){var r=Tt();n={blockedOn:null,target:n,priority:r};for(var o=0;o<is.length&&r!==0&&r<is[o].priority;o++);is.splice(o,0,n),o===0&&Zv(n)}};var Jv=e.version;if(Jv!=="19.1.1")throw Error(i(527,Jv,"19.1.1"));j.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(r),n=n!==null?d(n):null,n=n===null?null:n.stateNode,n};var bE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{fe=tc.inject(bE),Oe=tc}catch{}}return Ml.createRoot=function(n,r){if(!a(n))throw Error(i(299));var o=!1,u="",p=p_,g=m_,T=g_,b=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=Gv(n,1,!1,null,null,o,u,p,g,T,b,null),n[Nn]=r.current,Vh(n),new sd(r)},Ml.hydrateRoot=function(n,r,o){if(!a(n))throw Error(i(299));var u=!1,p="",g=p_,T=m_,b=g_,H=null,$=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(H=o.unstable_transitionCallbacks),o.formState!==void 0&&($=o.formState)),r=Gv(n,1,!0,r,o??null,u,p,g,T,b,H,$),r.context=kv(null),o=r.current,u=oi(),u=Vt(u),p=Hr(u),p.callback=null,Vr(o,p,u),o=u,r.current.lanes=o,me(r,o),Ki(r),n[Nn]=r.current,Vh(n),new ec(r)},Ml.version="19.1.1",Ml}var l0;function FE(){if(l0)return ld.exports;l0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ld.exports=BE(),ld.exports}var zE=FE();function HE({text:s,isStreaming:e}){return s?Xe.jsxs("div",{className:"rounded-lg border border-emerald-300/40 bg-emerald-200/10 p-4 text-sm leading-relaxed text-emerald-100 shadow-lg",children:[Xe.jsx("p",{className:"font-semibold uppercase tracking-[0.3em] text-emerald-200/70",children:"Ответ"}),Xe.jsxs("p",{className:"mt-2 whitespace-pre-wrap",children:[s,e?Xe.jsx("span",{className:"ml-1 animate-pulse",children:"▌"}):null]})]}):null}function VE({thought:s}){return s?Xe.jsxs("div",{className:"rounded-lg border border-amber-300/30 bg-amber-200/10 p-4 text-xs leading-relaxed text-amber-100 shadow-lg",children:[Xe.jsx("p",{className:"font-semibold uppercase tracking-[0.3em] text-amber-200/70",children:"Мысль"}),Xe.jsx("p",{className:"mt-2 whitespace-pre-wrap text-amber-50/90",children:s})]}):null}function GE({messages:s}){return Xe.jsx("div",{className:"flex flex-1 flex-col gap-3 overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white shadow-inner",children:s.length===0?Xe.jsx("p",{className:"text-center text-xs text-white/50",children:"История пуста. Отправьте первое сообщение, чтобы начать диалог."}):s.map(e=>Xe.jsxs("article",{className:"space-y-1",children:[Xe.jsx("header",{className:"text-xs uppercase tracking-[0.2em] text-white/40",children:e.role==="user"?"Вы":"Ассистент"}),Xe.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed text-white/90",children:e.displayText||e.text})]},e.id))})}const kE="https://github.com/your-org/localchatvrm";function WE(){return Xe.jsx("a",{href:kE,target:"_blank",rel:"noreferrer",className:"text-xs uppercase tracking-[0.3em] text-white/40 transition hover:text-emerald-200",children:"GitHub"})}function XE({onToggleSettings:s,isSettingsOpen:e}){return Xe.jsxs("header",{className:"flex items-center justify-between bg-slate-900/80 px-6 py-4 text-sm text-white shadow-lg backdrop-blur",children:[Xe.jsx("div",{className:"flex items-center gap-3 font-semibold uppercase tracking-[0.2em] text-white/70",children:"LocalChatVRM"}),Xe.jsx("div",{className:"flex items-center gap-3",children:Xe.jsx("button",{type:"button",onClick:s,className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-emerald-400 hover:text-emerald-200","aria-expanded":e,children:"Настройки"})})]})}function qE({disabled:s,onSend:e,onMicClick:t}){const[i,a]=fi.useState("");async function l(c){c.preventDefault();const f=i.trim();f&&(await e(f),a(""))}return Xe.jsxs("form",{onSubmit:l,className:"flex items-center gap-3",children:[Xe.jsx("button",{type:"button",title:"TODO: голосовой ввод",onClick:t,disabled:s,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-emerald-400 hover:text-emerald-200 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Включить микрофон",children:"🎙"}),Xe.jsx("input",{className:"flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40",placeholder:"Спроси что-нибудь у ассистента",value:i,onChange:c=>a(c.target.value),disabled:s,"aria-label":"Сообщение"}),Xe.jsx("button",{type:"submit",disabled:s,className:"rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-emerald-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-800/60",children:"Отправить"})]})}function YE({open:s,onClose:e,children:t}){return s?Xe.jsx("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-sm",children:Xe.jsxs("div",{className:"h-full w-full max-w-md overflow-y-auto bg-slate-900/95 p-6 text-sm text-white shadow-2xl",children:[Xe.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[Xe.jsx("h2",{className:"text-base font-semibold",children:"Настройки"}),Xe.jsx("button",{type:"button",onClick:e,className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white transition hover:border-emerald-400 hover:text-emerald-200",children:"Закрыть"})]}),Xe.jsxs("div",{className:"space-y-4",children:[Xe.jsxs("section",{className:"rounded-lg border border-white/10 bg-white/5 p-4",children:[Xe.jsx("h3",{className:"text-sm font-semibold text-white/80",children:"Голоса Piper"}),Xe.jsx("p",{className:"mt-2 text-xs text-white/60",children:"TODO: выбрать голос, предзагрузить модель, указать локальные пути к ort-файлам."})]}),Xe.jsxs("section",{className:"rounded-lg border border-white/10 bg-white/5 p-4",children:[Xe.jsx("h3",{className:"text-sm font-semibold text-white/80",children:"Транскрибация"}),Xe.jsx("p",{className:"mt-2 text-xs text-white/60",children:"TODO: подключить Gemini Nano и OpenAI."})]}),t]})]})}):null}const jE=/\[[^\]]+\]/g;function ZE(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`msg-${Date.now()}-${Math.random().toString(16).slice(2)}`}function hd(s,e){return{id:ZE(),role:s,text:e,createdAt:Date.now()}}function KE(s){return{...s,displayText:sm(s.text)}}function sm(s){return s.replace(jE,"").trim()}function QE(s){return s.map(e=>{const t=e.role.toUpperCase(),i=sm(e.text);return`${t}: ${i}`}).join(`
`)}const JE=`Ты — дружелюбный ассистент для локального VRM-чатбота.
Говори живым, эмоциональным русским, оформляй мысли в стиле сценария и поясняй эмоции в квадратных скобках.
Если необходимо размышление, используй <think>…</think>, но не показывай его пользователю.
`,$E=/<think>([\s\S]*?)<\/think>/g;function eT(s){return s.some(t=>t.role==="system")?s:[{id:"system",role:"system",text:JE,createdAt:Date.now()},...s]}function tT(s){let e=s,t="";return e=e.replace($E,(i,a)=>(t+=`${a.trim()}
`,"")),{thought:t.trim(),cleaned:e.trim()}}async function nT(s){return{text:`Пока Ollama недоступна. Я получил сценарий:
${QE(s)}`,thought:"Нужно запустить Ollama и модель qwen3:4b"}}async function iT(s,e={},t={}){var a,l,c;const i=eT(s);try{const f=await fetch("/ollama/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"qwen3:4b",stream:!0,messages:i.map(x=>({role:x.role,content:x.text}))}),signal:t.signal});if(!f.body)throw new Error("Readable stream is not supported in this environment");const h=f.body.getReader(),d=new TextDecoder;let m="",_="",v="";for(;;){const{value:x,done:S}=await h.read();if(S)break;m+=d.decode(x,{stream:!0});const E=m.split(`
`);m=E.pop()??"";for(const M of E){const y=M.trim();if(!y)continue;let U;try{U=JSON.parse(y)}catch(D){console.warn("Failed to parse Ollama chunk",D,y);continue}if(U.error)throw new Error(U.error);if((a=U.message)!=null&&a.content){const{thought:D,cleaned:A}=tT(U.message.content);if(D&&(v=[v,D].filter(Boolean).join(`
`),(l=e.onThought)==null||l.call(e,v)),A){const P=sm(A);_+=P+" ",(c=e.onContent)==null||c.call(e,_.trim())}}}}return{text:_.trim(),thought:v.trim()}}catch(f){return console.warn("Falling back to offline response",f),nT(s)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ks="171",rT=0,u0=1,sT=2,hy=1,aT=2,Rr=3,Nr=0,Yn=1,Ai=2,gs=0,ao=1,c0=2,f0=3,h0=4,oT=5,Ys=100,lT=101,uT=102,cT=103,fT=104,hT=200,dT=201,pT=202,mT=203,op=204,lp=205,gT=206,_T=207,vT=208,xT=209,yT=210,MT=211,ST=212,ET=213,TT=214,up=0,cp=1,fp=2,co=3,hp=4,dp=5,pp=6,mp=7,dy=0,AT=1,bT=2,_s=0,RT=1,wT=2,CT=3,LT=4,DT=5,UT=6,NT=7,d0="attached",PT="detached",py=300,fo=301,ho=302,gp=303,_p=304,Jc=306,po=1e3,ps=1001,kc=1002,jn=1003,my=1004,Il=1005,hi=1006,Nc=1007,Cr=1008,Pr=1009,gy=1010,_y=1011,Gl=1012,am=1013,Qs=1014,Hi=1015,ql=1016,om=1017,lm=1018,mo=1020,vy=35902,xy=1021,yy=1022,bi=1023,My=1024,Sy=1025,oo=1026,go=1027,um=1028,cm=1029,Ey=1030,fm=1031,hm=1033,Pc=33776,Oc=33777,Ic=33778,Bc=33779,vp=35840,xp=35841,yp=35842,Mp=35843,Sp=36196,Ep=37492,Tp=37496,Ap=37808,bp=37809,Rp=37810,wp=37811,Cp=37812,Lp=37813,Dp=37814,Up=37815,Np=37816,Pp=37817,Op=37818,Ip=37819,Bp=37820,Fp=37821,Fc=36492,zp=36494,Hp=36495,Ty=36283,Vp=36284,Gp=36285,kp=36286,OT=2200,IT=2201,BT=2202,kl=2300,Wl=2301,dd=2302,io=2400,ro=2401,Wc=2402,dm=2500,FT=2501,zT=0,Ay=1,Wp=2,HT=3200,VT=3201,pm=0,GT=1,ds="",Un="srgb",Zn="srgb-linear",Xc="linear",qt="srgb",Ia=7680,p0=519,kT=512,WT=513,XT=514,by=515,qT=516,YT=517,jT=518,ZT=519,Xp=35044,KT=35048,m0="300 es",Lr=2e3,qc=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let g0=1234567;const zl=Math.PI/180,_o=180/Math.PI;function Vi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function mm(s,e){return(s%e+e)%e}function QT(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function JT(s,e,t){return s!==e?(t-s)/(e-s):0}function Hl(s,e,t){return(1-t)*s+t*e}function $T(s,e,t,i){return Hl(s,e,1-Math.exp(-t*i))}function eA(s,e=1){return e-Math.abs(mm(s,e*2)-e)}function tA(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nA(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function iA(s,e){return s+Math.floor(Math.random()*(e-s+1))}function rA(s,e){return s+Math.random()*(e-s)}function sA(s){return s*(.5-Math.random())}function aA(s){s!==void 0&&(g0=s);let e=g0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oA(s){return s*zl}function lA(s){return s*_o}function uA(s){return(s&s-1)===0&&s!==0}function cA(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fA(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hA(s,e,t,i,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),d=l((e+i)/2),m=c((e+i)/2),_=l((e-i)/2),v=c((e-i)/2),x=l((i-e)/2),S=c((i-e)/2);switch(a){case"XYX":s.set(f*m,h*_,h*v,f*d);break;case"YZY":s.set(h*v,f*m,h*_,f*d);break;case"ZXZ":s.set(h*_,h*v,f*m,f*d);break;case"XZX":s.set(f*m,h*S,h*x,f*d);break;case"YXY":s.set(h*x,f*m,h*S,f*d);break;case"ZYZ":s.set(h*S,h*x,f*m,f*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const on={DEG2RAD:zl,RAD2DEG:_o,generateUUID:Vi,clamp:Mt,euclideanModulo:mm,mapLinear:QT,inverseLerp:JT,lerp:Hl,damp:$T,pingpong:eA,smoothstep:tA,smootherstep:nA,randInt:iA,randFloat:rA,randFloatSpread:sA,seededRandom:aA,degToRad:oA,radToDeg:lA,isPowerOfTwo:uA,ceilPowerOfTwo:cA,floorPowerOfTwo:fA,setQuaternionFromProperEuler:hA,normalize:zt,denormalize:Fi};class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*a+e.x,this.y=l*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,a,l,c,f,h,d){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,f,h,d)}set(e,t,i,a,l,c,f,h,d){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=h,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],f=i[3],h=i[6],d=i[1],m=i[4],_=i[7],v=i[2],x=i[5],S=i[8],E=a[0],M=a[3],y=a[6],U=a[1],D=a[4],A=a[7],P=a[2],B=a[5],I=a[8];return l[0]=c*E+f*U+h*P,l[3]=c*M+f*D+h*B,l[6]=c*y+f*A+h*I,l[1]=d*E+m*U+_*P,l[4]=d*M+m*D+_*B,l[7]=d*y+m*A+_*I,l[2]=v*E+x*U+S*P,l[5]=v*M+x*D+S*B,l[8]=v*y+x*A+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8];return t*c*m-t*f*d-i*l*m+i*f*h+a*l*d-a*c*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8],_=m*c-f*d,v=f*h-m*l,x=d*l-c*h,S=t*_+i*v+a*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=_*E,e[1]=(a*d-m*i)*E,e[2]=(f*i-a*c)*E,e[3]=v*E,e[4]=(m*t-a*h)*E,e[5]=(a*l-f*t)*E,e[6]=x*E,e[7]=(i*h-d*t)*E,e[8]=(c*t-i*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,c,f){const h=Math.cos(l),d=Math.sin(l);return this.set(i*h,i*d,-i*(h*c+d*f)+c+e,-a*d,a*h,-a*(-d*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(pd.makeScale(e,t)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new Qe;function Ry(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dA(){const s=Xl("canvas");return s.style.display="block",s}const _0={};function eo(s){s in _0||(_0[s]=!0,console.warn(s))}function pA(s,e,t){return new Promise(function(i,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}function mA(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gA(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const v0=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _A(){const s={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===qt&&(a.r=Ur(a.r),a.g=Ur(a.g),a.b=Ur(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===qt&&(a.r=lo(a.r),a.g=lo(a.g),a.b=lo(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ds?Xc:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Zn]:{primaries:e,whitePoint:i,transfer:Xc,toXYZ:v0,fromXYZ:x0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:qt,toXYZ:v0,fromXYZ:x0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),s}const Rt=_A();function Ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ba;class vA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ba===void 0&&(Ba=Xl("canvas")),Ba.width=e.width,Ba.height=e.height;const i=Ba.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ba}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Ur(l[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ur(t[i]/255)*255):t[i]=Ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xA=0;class wy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(md(a[c].image)):l.push(md(a[c]))}else l=md(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vA.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yA=0;class bn extends $s{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=ps,a=ps,l=hi,c=Cr,f=bi,h=Pr,d=bn.DEFAULT_ANISOTROPY,m=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=Vi(),this.name="",this.source=new wy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==py)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case po:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case po:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=py;bn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,a=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const h=e.elements,d=h[0],m=h[4],_=h[8],v=h[1],x=h[5],S=h[9],E=h[2],M=h[6],y=h[10];if(Math.abs(m-v)<.01&&Math.abs(_-E)<.01&&Math.abs(S-M)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+E)<.1&&Math.abs(S+M)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,A=(x+1)/2,P=(y+1)/2,B=(m+v)/4,I=(_+E)/4,G=(S+M)/4;return D>A&&D>P?D<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(D),a=B/i,l=I/i):A>P?A<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),i=B/a,l=G/a):P<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(P),i=I/l,a=G/l),this.set(i,a,l,t),this}let U=Math.sqrt((M-S)*(M-S)+(_-E)*(_-E)+(v-m)*(v-m));return Math.abs(U)<.001&&(U=1),this.x=(M-S)/U,this.y=(_-E)/U,this.z=(v-m)/U,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MA extends $s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new bn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends MA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cy extends bn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=jn,this.minFilter=jn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SA extends bn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=jn,this.minFilter=jn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lt{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,c,f){let h=i[a+0],d=i[a+1],m=i[a+2],_=i[a+3];const v=l[c+0],x=l[c+1],S=l[c+2],E=l[c+3];if(f===0){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=x,e[t+2]=S,e[t+3]=E;return}if(_!==E||h!==v||d!==x||m!==S){let M=1-f;const y=h*v+d*x+m*S+_*E,U=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const P=Math.sqrt(D),B=Math.atan2(P,y*U);M=Math.sin(M*B)/P,f=Math.sin(f*B)/P}const A=f*U;if(h=h*M+v*A,d=d*M+x*A,m=m*M+S*A,_=_*M+E*A,M===1-f){const P=1/Math.sqrt(h*h+d*d+m*m+_*_);h*=P,d*=P,m*=P,_*=P}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,l,c){const f=i[a],h=i[a+1],d=i[a+2],m=i[a+3],_=l[c],v=l[c+1],x=l[c+2],S=l[c+3];return e[t]=f*S+m*_+h*x-d*v,e[t+1]=h*S+m*v+d*_-f*x,e[t+2]=d*S+m*x+f*v-h*_,e[t+3]=m*S-f*_-h*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,d=f(i/2),m=f(a/2),_=f(l/2),v=h(i/2),x=h(a/2),S=h(l/2);switch(c){case"XYZ":this._x=v*m*_+d*x*S,this._y=d*x*_-v*m*S,this._z=d*m*S+v*x*_,this._w=d*m*_-v*x*S;break;case"YXZ":this._x=v*m*_+d*x*S,this._y=d*x*_-v*m*S,this._z=d*m*S-v*x*_,this._w=d*m*_+v*x*S;break;case"ZXY":this._x=v*m*_-d*x*S,this._y=d*x*_+v*m*S,this._z=d*m*S+v*x*_,this._w=d*m*_-v*x*S;break;case"ZYX":this._x=v*m*_-d*x*S,this._y=d*x*_+v*m*S,this._z=d*m*S-v*x*_,this._w=d*m*_+v*x*S;break;case"YZX":this._x=v*m*_+d*x*S,this._y=d*x*_+v*m*S,this._z=d*m*S-v*x*_,this._w=d*m*_-v*x*S;break;case"XZY":this._x=v*m*_-d*x*S,this._y=d*x*_-v*m*S,this._z=d*m*S+v*x*_,this._w=d*m*_+v*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],d=t[2],m=t[6],_=t[10],v=i+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-h)*x,this._y=(l-d)*x,this._z=(c-a)*x}else if(i>f&&i>_){const x=2*Math.sqrt(1+i-f-_);this._w=(m-h)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(l+d)/x}else if(f>_){const x=2*Math.sqrt(1+f-i-_);this._w=(l-d)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+_-i-f);this._w=(c-a)/x,this._x=(l+d)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,d=t._z,m=t._w;return this._x=i*m+c*f+a*d-l*h,this._y=a*m+c*h+l*f-i*d,this._z=l*m+c*d+i*h-a*f,this._w=c*m-i*f-a*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+i*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=i,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*a+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const d=Math.sqrt(h),m=Math.atan2(d,f),_=Math.sin((1-t)*m)/d,v=Math.sin(t*m)/d;return this._w=c*_+this._w*v,this._x=i*_+this._x*v,this._y=a*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(y0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,d=2*(c*a-f*i),m=2*(f*t-l*a),_=2*(l*i-c*t);return this.x=t+h*d+c*_-f*m,this.y=i+h*m+f*d-l*_,this.z=a+h*_+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-i*h,this.z=i*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gd=new F,y0=new lt;class Ir{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Oi):Oi.fromBufferAttribute(l,c),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),ic.subVectors(this.max,Sl),Fa.subVectors(e.a,Sl),za.subVectors(e.b,Sl),Ha.subVectors(e.c,Sl),ss.subVectors(za,Fa),as.subVectors(Ha,za),Os.subVectors(Fa,Ha);let t=[0,-ss.z,ss.y,0,-as.z,as.y,0,-Os.z,Os.y,ss.z,0,-ss.x,as.z,0,-as.x,Os.z,0,-Os.x,-ss.y,ss.x,0,-as.y,as.x,0,-Os.y,Os.x,0];return!_d(t,Fa,za,Ha,ic)||(t=[1,0,0,0,1,0,0,0,1],!_d(t,Fa,za,Ha,ic))?!1:(rc.crossVectors(ss,as),t=[rc.x,rc.y,rc.z],_d(t,Fa,za,Ha,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mr=[new F,new F,new F,new F,new F,new F,new F,new F],Oi=new F,nc=new Ir,Fa=new F,za=new F,Ha=new F,ss=new F,as=new F,Os=new F,Sl=new F,ic=new F,rc=new F,Is=new F;function _d(s,e,t,i,a){for(let l=0,c=s.length-3;l<=c;l+=3){Is.fromArray(s,l);const f=a.x*Math.abs(Is.x)+a.y*Math.abs(Is.y)+a.z*Math.abs(Is.z),h=e.dot(Is),d=t.dot(Is),m=i.dot(Is);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>f)return!1}return!0}const EA=new Ir,El=new F,vd=new F;class tr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):EA.setFromPoints(e).getCenter(i);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const t=El.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(El,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(vd)),this.expandByPoint(El.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new F,xd=new F,sc=new F,os=new F,yd=new F,ac=new F,Md=new F;class $c{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){xd.copy(e).add(t).multiplyScalar(.5),sc.copy(t).sub(e).normalize(),os.copy(this.origin).sub(xd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(sc),f=os.dot(this.direction),h=-os.dot(sc),d=os.lengthSq(),m=Math.abs(1-c*c);let _,v,x,S;if(m>0)if(_=c*h-f,v=c*f-h,S=l*m,_>=0)if(v>=-S)if(v<=S){const E=1/m;_*=E,v*=E,x=_*(_+c*v+2*f)+v*(c*_+v+2*h)+d}else v=l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*h)+d;else v=-l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*h)+d;else v<=-S?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-h),l),x=-_*_+v*(v+2*h)+d):v<=S?(_=0,v=Math.min(Math.max(-l,-h),l),x=v*(v+2*h)+d):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-h),l),x=-_*_+v*(v+2*h)+d);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(xd).addScaledVector(sc,v),x}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const i=Sr.dot(this.direction),a=Sr.dot(Sr)-i*i,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,h=i+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,c,f,h;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,a=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,a=(e.min.x-v.x)*d),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),i>h||f>a)||((f>i||i!==i)&&(i=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,i,a,l){yd.subVectors(t,e),ac.subVectors(i,e),Md.crossVectors(yd,ac);let c=this.direction.dot(Md),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;os.subVectors(this.origin,e);const h=f*this.direction.dot(ac.crossVectors(os,ac));if(h<0)return null;const d=f*this.direction.dot(yd.cross(os));if(d<0||h+d>c)return null;const m=-f*os.dot(Md);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,i,a,l,c,f,h,d,m,_,v,x,S,E,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,f,h,d,m,_,v,x,S,E,M)}set(e,t,i,a,l,c,f,h,d,m,_,v,x,S,E,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=d,y[6]=m,y[10]=_,y[14]=v,y[3]=x,y[7]=S,y[11]=E,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Va.setFromMatrixColumn(e,0).length(),l=1/Va.setFromMatrixColumn(e,1).length(),c=1/Va.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),h=Math.cos(a),d=Math.sin(a),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*m,x=c*_,S=f*m,E=f*_;t[0]=h*m,t[4]=-h*_,t[8]=d,t[1]=x+S*d,t[5]=v-E*d,t[9]=-f*h,t[2]=E-v*d,t[6]=S+x*d,t[10]=c*h}else if(e.order==="YXZ"){const v=h*m,x=h*_,S=d*m,E=d*_;t[0]=v+E*f,t[4]=S*f-x,t[8]=c*d,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=x*f-S,t[6]=E+v*f,t[10]=c*h}else if(e.order==="ZXY"){const v=h*m,x=h*_,S=d*m,E=d*_;t[0]=v-E*f,t[4]=-c*_,t[8]=S+x*f,t[1]=x+S*f,t[5]=c*m,t[9]=E-v*f,t[2]=-c*d,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const v=c*m,x=c*_,S=f*m,E=f*_;t[0]=h*m,t[4]=S*d-x,t[8]=v*d+E,t[1]=h*_,t[5]=E*d+v,t[9]=x*d-S,t[2]=-d,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,x=c*d,S=f*h,E=f*d;t[0]=h*m,t[4]=E-v*_,t[8]=S*_+x,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-d*m,t[6]=x*_+S,t[10]=v-E*_}else if(e.order==="XZY"){const v=c*h,x=c*d,S=f*h,E=f*d;t[0]=h*m,t[4]=-_,t[8]=d*m,t[1]=v*_+E,t[5]=c*m,t[9]=x*_-S,t[2]=S*_-x,t[6]=f*m,t[10]=E*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TA,e,AA)}lookAt(e,t,i){const a=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ls.crossVectors(i,ui),ls.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ls.crossVectors(i,ui)),ls.normalize(),oc.crossVectors(ui,ls),a[0]=ls.x,a[4]=oc.x,a[8]=ui.x,a[1]=ls.y,a[5]=oc.y,a[9]=ui.y,a[2]=ls.z,a[6]=oc.z,a[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],f=i[4],h=i[8],d=i[12],m=i[1],_=i[5],v=i[9],x=i[13],S=i[2],E=i[6],M=i[10],y=i[14],U=i[3],D=i[7],A=i[11],P=i[15],B=a[0],I=a[4],G=a[8],L=a[12],w=a[1],V=a[5],te=a[9],re=a[13],de=a[2],ue=a[6],z=a[10],j=a[14],Y=a[3],xe=a[7],N=a[11],ee=a[15];return l[0]=c*B+f*w+h*de+d*Y,l[4]=c*I+f*V+h*ue+d*xe,l[8]=c*G+f*te+h*z+d*N,l[12]=c*L+f*re+h*j+d*ee,l[1]=m*B+_*w+v*de+x*Y,l[5]=m*I+_*V+v*ue+x*xe,l[9]=m*G+_*te+v*z+x*N,l[13]=m*L+_*re+v*j+x*ee,l[2]=S*B+E*w+M*de+y*Y,l[6]=S*I+E*V+M*ue+y*xe,l[10]=S*G+E*te+M*z+y*N,l[14]=S*L+E*re+M*j+y*ee,l[3]=U*B+D*w+A*de+P*Y,l[7]=U*I+D*V+A*ue+P*xe,l[11]=U*G+D*te+A*z+P*N,l[15]=U*L+D*re+A*j+P*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],d=e[13],m=e[2],_=e[6],v=e[10],x=e[14],S=e[3],E=e[7],M=e[11],y=e[15];return S*(+l*h*_-a*d*_-l*f*v+i*d*v+a*f*x-i*h*x)+E*(+t*h*x-t*d*v+l*c*v-a*c*x+a*d*m-l*h*m)+M*(+t*d*_-t*f*x-l*c*_+i*c*x+l*f*m-i*d*m)+y*(-a*f*m-t*h*_+t*f*v+a*c*_-i*c*v+i*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],m=e[8],_=e[9],v=e[10],x=e[11],S=e[12],E=e[13],M=e[14],y=e[15],U=_*M*d-E*v*d+E*h*x-f*M*x-_*h*y+f*v*y,D=S*v*d-m*M*d-S*h*x+c*M*x+m*h*y-c*v*y,A=m*E*d-S*_*d+S*f*x-c*E*x-m*f*y+c*_*y,P=S*_*h-m*E*h-S*f*v+c*E*v+m*f*M-c*_*M,B=t*U+i*D+a*A+l*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=U*I,e[1]=(E*v*l-_*M*l-E*a*x+i*M*x+_*a*y-i*v*y)*I,e[2]=(f*M*l-E*h*l+E*a*d-i*M*d-f*a*y+i*h*y)*I,e[3]=(_*h*l-f*v*l-_*a*d+i*v*d+f*a*x-i*h*x)*I,e[4]=D*I,e[5]=(m*M*l-S*v*l+S*a*x-t*M*x-m*a*y+t*v*y)*I,e[6]=(S*h*l-c*M*l-S*a*d+t*M*d+c*a*y-t*h*y)*I,e[7]=(c*v*l-m*h*l+m*a*d-t*v*d-c*a*x+t*h*x)*I,e[8]=A*I,e[9]=(S*_*l-m*E*l-S*i*x+t*E*x+m*i*y-t*_*y)*I,e[10]=(c*E*l-S*f*l+S*i*d-t*E*d-c*i*y+t*f*y)*I,e[11]=(m*f*l-c*_*l-m*i*d+t*_*d+c*i*x-t*f*x)*I,e[12]=P*I,e[13]=(m*E*a-S*_*a+S*i*v-t*E*v-m*i*M+t*_*M)*I,e[14]=(S*f*a-c*E*a-S*i*h+t*E*h+c*i*M-t*f*M)*I,e[15]=(c*_*a-m*f*a+m*i*h-t*_*h-c*i*v+t*f*v)*I,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,c=e.x,f=e.y,h=e.z,d=l*c,m=l*f;return this.set(d*c+i,d*f-a*h,d*h+a*f,0,d*f+a*h,m*f+i,m*h-a*c,0,d*h-a*f,m*h+a*c,l*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,c){return this.set(1,i,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,d=l+l,m=c+c,_=f+f,v=l*d,x=l*m,S=l*_,E=c*m,M=c*_,y=f*_,U=h*d,D=h*m,A=h*_,P=i.x,B=i.y,I=i.z;return a[0]=(1-(E+y))*P,a[1]=(x+A)*P,a[2]=(S-D)*P,a[3]=0,a[4]=(x-A)*B,a[5]=(1-(v+y))*B,a[6]=(M+U)*B,a[7]=0,a[8]=(S+D)*I,a[9]=(M-U)*I,a[10]=(1-(v+E))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let l=Va.set(a[0],a[1],a[2]).length();const c=Va.set(a[4],a[5],a[6]).length(),f=Va.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Ii.copy(this);const d=1/l,m=1/c,_=1/f;return Ii.elements[0]*=d,Ii.elements[1]*=d,Ii.elements[2]*=d,Ii.elements[4]*=m,Ii.elements[5]*=m,Ii.elements[6]*=m,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,t.setFromRotationMatrix(Ii),i.x=l,i.y=c,i.z=f,this}makePerspective(e,t,i,a,l,c,f=Lr){const h=this.elements,d=2*l/(t-e),m=2*l/(i-a),_=(t+e)/(t-e),v=(i+a)/(i-a);let x,S;if(f===Lr)x=-(c+l)/(c-l),S=-2*c*l/(c-l);else if(f===qc)x=-c/(c-l),S=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,l,c,f=Lr){const h=this.elements,d=1/(t-e),m=1/(i-a),_=1/(c-l),v=(t+e)*d,x=(i+a)*m;let S,E;if(f===Lr)S=(c+l)*_,E=-2*_;else if(f===qc)S=l*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=E,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Va=new F,Ii=new $e,TA=new F(0,0,0),AA=new F(1,1,1),ls=new F,oc=new F,ui=new F,M0=new $e,S0=new lt;class pi{constructor(e=0,t=0,i=0,a=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],d=a[5],m=a[9],_=a[2],v=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return M0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return S0.setFromEuler(this),this.setFromQuaternion(S0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Ly{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bA=0;const E0=new F,Ga=new lt,Er=new $e,lc=new F,Tl=new F,RA=new F,wA=new lt,T0=new F(1,0,0),A0=new F(0,1,0),b0=new F(0,0,1),R0={type:"added"},CA={type:"removed"},ka={type:"childadded",child:null},Sd={type:"childremoved",child:null};class jt extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new F,t=new pi,i=new lt,a=new F(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $e},normalMatrix:{value:new Qe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ly,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ga.setFromAxisAngle(e,t),this.quaternion.multiply(Ga),this}rotateOnWorldAxis(e,t){return Ga.setFromAxisAngle(e,t),this.quaternion.premultiply(Ga),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(A0,e)}rotateZ(e){return this.rotateOnAxis(b0,e)}translateOnAxis(e,t){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(A0,e)}translateZ(e){return this.translateOnAxis(b0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lc.copy(e):lc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Tl,lc,this.up):Er.lookAt(lc,Tl,this.up),this.quaternion.setFromRotationMatrix(Er),a&&(Er.extractRotation(a.matrixWorld),Ga.setFromRotationMatrix(Er),this.quaternion.premultiply(Ga.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R0),ka.child=e,this.dispatchEvent(ka),ka.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(CA),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R0),ka.child=e,this.dispatchEvent(ka),ka.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,RA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,wA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const _=h[d];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),d=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),x=c(e.animations),S=c(e.nodes);f.length>0&&(i.geometries=f),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),S.length>0&&(i.nodes=S)}return i.object=a,i;function c(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}jt.DEFAULT_UP=new F(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new F,Tr=new F,Ed=new F,Ar=new F,Wa=new F,Xa=new F,w0=new F,Td=new F,Ad=new F,bd=new F,Rd=new Ot,wd=new Ot,Cd=new Ot;class zi{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Bi.subVectors(e,t),a.cross(Bi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){Bi.subVectors(a,t),Tr.subVectors(i,t),Ed.subVectors(e,t);const c=Bi.dot(Bi),f=Bi.dot(Tr),h=Bi.dot(Ed),d=Tr.dot(Tr),m=Tr.dot(Ed),_=c*d-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(d*h-f*m)*v,S=(c*m-f*h)*v;return l.set(1-x-S,S,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,i,a,l,c,f,h){return this.getBarycoord(e,t,i,a,Ar)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ar.x),h.addScaledVector(c,Ar.y),h.addScaledVector(f,Ar.z),h)}static getInterpolatedAttribute(e,t,i,a,l,c){return Rd.setScalar(0),wd.setScalar(0),Cd.setScalar(0),Rd.fromBufferAttribute(e,t),wd.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Rd,l.x),c.addScaledVector(wd,l.y),c.addScaledVector(Cd,l.z),c}static isFrontFacing(e,t,i,a){return Bi.subVectors(i,t),Tr.subVectors(e,t),Bi.cross(Tr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Bi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,l){return zi.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let c,f;Wa.subVectors(a,i),Xa.subVectors(l,i),Td.subVectors(e,i);const h=Wa.dot(Td),d=Xa.dot(Td);if(h<=0&&d<=0)return t.copy(i);Ad.subVectors(e,a);const m=Wa.dot(Ad),_=Xa.dot(Ad);if(m>=0&&_<=m)return t.copy(a);const v=h*_-m*d;if(v<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(i).addScaledVector(Wa,c);bd.subVectors(e,l);const x=Wa.dot(bd),S=Xa.dot(bd);if(S>=0&&x<=S)return t.copy(l);const E=x*d-h*S;if(E<=0&&d>=0&&S<=0)return f=d/(d-S),t.copy(i).addScaledVector(Xa,f);const M=m*S-x*_;if(M<=0&&_-m>=0&&x-S>=0)return w0.subVectors(l,a),f=(_-m)/(_-m+(x-S)),t.copy(a).addScaledVector(w0,f);const y=1/(M+E+v);return c=E*y,f=v*y,t.copy(i).addScaledVector(Wa,c).addScaledVector(Xa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Rt.workingColorSpace){if(e=mm(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=Ld(c,l,e+1/3),this.g=Ld(c,l,e),this.b=Ld(c,l,e-1/3)}return Rt.toWorkingColorSpace(this,a),this}setStyle(e,t=Un){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=Dy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Rt.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Mt(Fn.r*255,0,255))*65536+Math.round(Mt(Fn.g*255,0,255))*256+Math.round(Mt(Fn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Fn.copy(this),t);const i=Fn.r,a=Fn.g,l=Fn.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let h,d;const m=(f+c)/2;if(f===c)h=0,d=0;else{const _=c-f;switch(d=m<=.5?_/(c+f):_/(2-c-f),c){case i:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-i)/_+2;break;case l:h=(i-a)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Un){Rt.fromWorkingColorSpace(Fn.copy(this),e);const t=Fn.r,i=Fn.g,a=Fn.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(uc);const i=Hl(us.h,uc.h,t),a=Hl(us.s,uc.s,t),l=Hl(us.l,uc.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new qe;qe.NAMES=Dy;let LA=0;class Gi extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=ao,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=op,this.blendDst=lp,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==op&&(i.blendSrc=this.blendSrc),this.blendDst!==lp&&(i.blendDst=this.blendDst),this.blendEquation!==Ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dr extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=dy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new F,cc=new gt;class Lt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cc.fromBufferAttribute(this,t),cc.applyMatrix3(e),this.setXY(t,cc.x,cc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array),l=zt(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class Uy extends Lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ny extends Lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ki extends Lt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let DA=0;const Si=new $e,Dd=new jt,qa=new F,ci=new Ir,Al=new Ir,An=new F;class pn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ry(e)?Ny:Uy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new Qe().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,i){return Si.makeTranslation(e,t,i),this.applyMatrix4(Si),this}scale(e,t,i){return Si.makeScale(e,t,i),this.applyMatrix4(Si),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qa).negate(),this.translate(qa.x,qa.y,qa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ki(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];ci.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Al.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(ci.min,Al.min),ci.expandByPoint(An),An.addVectors(ci.max,Al.max),ci.expandByPoint(An)):(ci.expandByPoint(Al.min),ci.expandByPoint(Al.max))}ci.getCenter(i);let a=0;for(let l=0,c=e.count;l<c;l++)An.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(An));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,m=f.count;d<m;d++)An.fromBufferAttribute(f,d),h&&(qa.fromBufferAttribute(e,d),An.add(qa)),a=Math.max(a,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let G=0;G<i.count;G++)f[G]=new F,h[G]=new F;const d=new F,m=new F,_=new F,v=new gt,x=new gt,S=new gt,E=new F,M=new F;function y(G,L,w){d.fromBufferAttribute(i,G),m.fromBufferAttribute(i,L),_.fromBufferAttribute(i,w),v.fromBufferAttribute(l,G),x.fromBufferAttribute(l,L),S.fromBufferAttribute(l,w),m.sub(d),_.sub(d),x.sub(v),S.sub(v);const V=1/(x.x*S.y-S.x*x.y);isFinite(V)&&(E.copy(m).multiplyScalar(S.y).addScaledVector(_,-x.y).multiplyScalar(V),M.copy(_).multiplyScalar(x.x).addScaledVector(m,-S.x).multiplyScalar(V),f[G].add(E),f[L].add(E),f[w].add(E),h[G].add(M),h[L].add(M),h[w].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,L=U.length;G<L;++G){const w=U[G],V=w.start,te=w.count;for(let re=V,de=V+te;re<de;re+=3)y(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const D=new F,A=new F,P=new F,B=new F;function I(G){P.fromBufferAttribute(a,G),B.copy(P);const L=f[G];D.copy(L),D.sub(P.multiplyScalar(P.dot(L))).normalize(),A.crossVectors(B,L);const V=A.dot(h[G])<0?-1:1;c.setXYZW(G,D.x,D.y,D.z,V)}for(let G=0,L=U.length;G<L;++G){const w=U[G],V=w.start,te=w.count;for(let re=V,de=V+te;re<de;re+=3)I(e.getX(re+0)),I(e.getX(re+1)),I(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const a=new F,l=new F,c=new F,f=new F,h=new F,d=new F,m=new F,_=new F;if(e)for(let v=0,x=e.count;v<x;v+=3){const S=e.getX(v+0),E=e.getX(v+1),M=e.getX(v+2);a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,M),m.subVectors(c,l),_.subVectors(a,l),m.cross(_),f.fromBufferAttribute(i,S),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.add(m),h.add(m),d.add(m),i.setXYZ(S,f.x,f.y,f.z),i.setXYZ(E,h.x,h.y,h.z),i.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),_.subVectors(a,l),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(f,h){const d=f.array,m=f.itemSize,_=f.normalized,v=new d.constructor(h.length*m);let x=0,S=0;for(let E=0,M=h.length;E<M;E++){f.isInterleavedBufferAttribute?x=h[E]*f.data.stride+f.offset:x=h[E]*m;for(let y=0;y<m;y++)v[S++]=d[x++]}return new Lt(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,a=this.attributes;for(const f in a){const h=a[f],d=e(h,i);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let m=0,_=d.length;m<_;m++){const v=d[m],x=e(v,i);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];m.push(x.toJSON(e.data))}m.length>0&&(a[h]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const m=a[d];this.setAttribute(d,m.clone(t))}const l=e.morphAttributes;for(const d in l){const m=[],_=l[d];for(let v=0,x=_.length;v<x;v++)m.push(_[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C0=new $e,Bs=new $c,fc=new tr,L0=new F,hc=new F,dc=new F,pc=new F,Ud=new F,mc=new F,D0=new F,gc=new F;class qn extends jt{constructor(e=new pn,t=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){mc.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const m=f[h],_=l[h];m!==0&&(Ud.fromBufferAttribute(_,e),c?mc.addScaledVector(Ud,m):mc.addScaledVector(Ud.sub(t),m))}t.add(mc)}return t}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(l),Bs.copy(e.ray).recast(e.near),!(fc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(fc,L0)===null||Bs.origin.distanceToSquared(L0)>(e.far-e.near)**2))&&(C0.copy(l).invert(),Bs.copy(e.ray).applyMatrix4(C0),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,i){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,E=v.length;S<E;S++){const M=v[S],y=c[M.materialIndex],U=Math.max(M.start,x.start),D=Math.min(f.count,Math.min(M.start+M.count,x.start+x.count));for(let A=U,P=D;A<P;A+=3){const B=f.getX(A),I=f.getX(A+1),G=f.getX(A+2);a=_c(this,y,e,i,d,m,_,B,I,G),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const S=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let M=S,y=E;M<y;M+=3){const U=f.getX(M),D=f.getX(M+1),A=f.getX(M+2);a=_c(this,c,e,i,d,m,_,U,D,A),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,E=v.length;S<E;S++){const M=v[S],y=c[M.materialIndex],U=Math.max(M.start,x.start),D=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let A=U,P=D;A<P;A+=3){const B=A,I=A+1,G=A+2;a=_c(this,y,e,i,d,m,_,B,I,G),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const S=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let M=S,y=E;M<y;M+=3){const U=M,D=M+1,A=M+2;a=_c(this,c,e,i,d,m,_,U,D,A),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}}}function UA(s,e,t,i,a,l,c,f){let h;if(e.side===Yn?h=i.intersectTriangle(c,l,a,!0,f):h=i.intersectTriangle(a,l,c,e.side===Nr,f),h===null)return null;gc.copy(f),gc.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(gc);return d<t.near||d>t.far?null:{distance:d,point:gc.clone(),object:s}}function _c(s,e,t,i,a,l,c,f,h,d){s.getVertexPosition(f,hc),s.getVertexPosition(h,dc),s.getVertexPosition(d,pc);const m=UA(s,e,t,i,hc,dc,pc,D0);if(m){const _=new F;zi.getBarycoord(D0,hc,dc,pc,_),a&&(m.uv=zi.getInterpolatedAttribute(a,f,h,d,_,new gt)),l&&(m.uv1=zi.getInterpolatedAttribute(l,f,h,d,_,new gt)),c&&(m.normal=zi.getInterpolatedAttribute(c,f,h,d,_,new F),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:h,c:d,normal:new F,materialIndex:0};zi.getNormal(hc,dc,pc,v.normal),m.face=v,m.barycoord=_}return m}class Yl extends pn{constructor(e=1,t=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],d=[],m=[],_=[];let v=0,x=0;S("z","y","x",-1,-1,i,t,e,c,l,0),S("z","y","x",1,-1,i,t,-e,c,l,1),S("x","z","y",1,1,e,i,t,a,c,2),S("x","z","y",1,-1,e,i,-t,a,c,3),S("x","y","z",1,-1,e,t,i,a,l,4),S("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(h),this.setAttribute("position",new ki(d,3)),this.setAttribute("normal",new ki(m,3)),this.setAttribute("uv",new ki(_,2));function S(E,M,y,U,D,A,P,B,I,G,L){const w=A/I,V=P/G,te=A/2,re=P/2,de=B/2,ue=I+1,z=G+1;let j=0,Y=0;const xe=new F;for(let N=0;N<z;N++){const ee=N*V-re;for(let ve=0;ve<ue;ve++){const Me=ve*w-te;xe[E]=Me*U,xe[M]=ee*D,xe[y]=de,d.push(xe.x,xe.y,xe.z),xe[E]=0,xe[M]=0,xe[y]=B>0?1:-1,m.push(xe.x,xe.y,xe.z),_.push(ve/I),_.push(1-N/G),j+=1}}for(let N=0;N<G;N++)for(let ee=0;ee<I;ee++){const ve=v+ee+ue*N,Me=v+ee+ue*(N+1),Q=v+(ee+1)+ue*(N+1),he=v+(ee+1)+ue*N;h.push(ve,Me,he),h.push(Me,Q,he),Y+=6}f.addGroup(x,Y,L),x+=Y,v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Wn(s){const e={};for(let t=0;t<s.length;t++){const i=vo(s[t]);for(const a in i)e[a]=i[a]}return e}function NA(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Py(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Oy={clone:vo,merge:Wn};var PA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PA,this.fragmentShader=OA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=NA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Iy extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Lr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new F,U0=new gt,N0=new gt;class Xn extends Iy{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,U0,N0),t.subVectors(N0,U0)}setViewOffset(e,t,i,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zl*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*i/d,a*=c.width/h,i*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ya=-90,ja=1;class IA extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(Ya,ja,e,t);a.layers=this.layers,this.add(a);const l=new Xn(Ya,ja,e,t);l.layers=this.layers,this.add(l);const c=new Xn(Ya,ja,e,t);c.layers=this.layers,this.add(c);const f=new Xn(Ya,ja,e,t);f.layers=this.layers,this.add(f);const h=new Xn(Ya,ja,e,t);h.layers=this.layers,this.add(h);const d=new Xn(Ya,ja,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,l,c,f,h]=t;for(const d of t)this.remove(d);if(e===Lr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===qc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,d,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,l),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,f),e.setRenderTarget(i,3,a),e.render(t,h),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),e.render(t,m),e.setRenderTarget(_,v,x),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class By extends bn{constructor(e,t,i,a,l,c,f,h,d,m){e=e!==void 0?e:[],t=t!==void 0?t:fo,super(e,t,i,a,l,c,f,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BA extends Js{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new By(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Yl(5,5,5),l=new Or({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:gs});l.uniforms.tEquirect.value=t;const c=new qn(a,l),f=t.minFilter;return t.minFilter===Cr&&(t.minFilter=hi),new IA(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(l)}}class FA extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xp,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new F;class gm{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),a=zt(a,this.array),l=zt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const P0=new F,O0=new Ot,I0=new Ot,HA=new F,B0=new $e,vc=new F,Nd=new tr,F0=new $e,Pd=new $c;class Fy extends qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=d0,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ir),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,vc),this.boundingBox.expandByPoint(vc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,vc),this.boundingSphere.expandByPoint(vc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nd.copy(this.boundingSphere),Nd.applyMatrix4(a),e.ray.intersectsSphere(Nd)!==!1&&(F0.copy(a).invert(),Pd.copy(e.ray).applyMatrix4(F0),!(this.boundingBox!==null&&Pd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===d0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===PT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;O0.fromBufferAttribute(a.attributes.skinIndex,e),I0.fromBufferAttribute(a.attributes.skinWeight,e),P0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const c=I0.getComponent(l);if(c!==0){const f=O0.getComponent(l);B0.multiplyMatrices(i.bones[f].matrixWorld,i.boneInverses[f]),t.addScaledVector(HA.copy(P0).applyMatrix4(B0),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zy extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hy extends bn{constructor(e=null,t=1,i=1,a,l,c,f,h,d=jn,m=jn,_,v){super(null,c,f,h,d,m,a,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const z0=new $e,VA=new $e;class So{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new $e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let l=0,c=e.length;l<c;l++){const f=e[l]?e[l].matrixWorld:VA;z0.multiplyMatrices(f,t[l]),z0.toArray(i,l*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new So(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Hy(t,e,e,bi,Hi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const l=e.bones[i];let c=t[l];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),c=new zy),this.bones.push(c),this.boneInverses.push(new $e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,l=t.length;a<l;a++){const c=t[a];e.bones.push(c.uuid);const f=i[a];e.boneInverses.push(f.toArray())}return e}}class qp extends Lt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Za=new $e,H0=new $e,xc=[],V0=new Ir,GA=new $e,bl=new qn,Rl=new tr;class kA extends qn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qp(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,GA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Za),V0.copy(e.boundingBox).applyMatrix4(Za),this.boundingBox.union(V0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Za),Rl.copy(e.boundingSphere).applyMatrix4(Za),this.boundingSphere.union(Rl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=i.length+1,c=e*l+1;for(let f=0;f<i.length;f++)i[f]=a[c+f]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(bl.geometry=this.geometry,bl.material=this.material,bl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(i),e.ray.intersectsSphere(Rl)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,Za),H0.multiplyMatrices(i,Za),bl.matrixWorld=H0,bl.raycast(e,xc);for(let c=0,f=xc.length;c<f;c++){const h=xc[c];h.instanceId=l,h.object=this,t.push(h)}xc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hy(new Float32Array(a*this.count),a,this.count,um,Hi));const l=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const f=this.geometry.morphTargetsRelative?1:1-c,h=a*e;l[h]=f,l.set(i,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Od=new F,WA=new F,XA=new Qe;class Xs{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Od.subVectors(i,t).cross(WA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Od),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||XA.getNormalMatrix(e),a=this.coplanarPoint(Od).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new tr,yc=new F;class _m{constructor(e=new Xs,t=new Xs,i=new Xs,a=new Xs,l=new Xs,c=new Xs){this.planes=[e,t,i,a,l,c]}set(e,t,i,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Lr){const i=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],d=a[4],m=a[5],_=a[6],v=a[7],x=a[8],S=a[9],E=a[10],M=a[11],y=a[12],U=a[13],D=a[14],A=a[15];if(i[0].setComponents(h-l,v-d,M-x,A-y).normalize(),i[1].setComponents(h+l,v+d,M+x,A+y).normalize(),i[2].setComponents(h+c,v+m,M+S,A+U).normalize(),i[3].setComponents(h-c,v-m,M-S,A-U).normalize(),i[4].setComponents(h-f,v-_,M-E,A-D).normalize(),t===Lr)i[5].setComponents(h+f,v+_,M+E,A+D).normalize();else if(t===qc)i[5].setComponents(f,_,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(yc.x=a.normal.x>0?e.max.x:e.min.x,yc.y=a.normal.y>0?e.max.y:e.min.y,yc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ea extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new F,jc=new F,G0=new $e,wl=new $c,Mc=new tr,Id=new F,k0=new F;class ef extends jt{constructor(e=new pn,t=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,l=t.count;a<l;a++)Yc.fromBufferAttribute(t,a-1),jc.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Yc.distanceTo(jc);e.setAttribute("lineDistance",new ki(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(a),Mc.radius+=l,e.ray.intersectsSphere(Mc)===!1)return;G0.copy(a).invert(),wl.copy(e.ray).applyMatrix4(G0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){const x=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let E=x,M=S-1;E<M;E+=d){const y=m.getX(E),U=m.getX(E+1),D=Sc(this,e,wl,h,y,U);D&&t.push(D)}if(this.isLineLoop){const E=m.getX(S-1),M=m.getX(x),y=Sc(this,e,wl,h,E,M);y&&t.push(y)}}else{const x=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let E=x,M=S-1;E<M;E+=d){const y=Sc(this,e,wl,h,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=Sc(this,e,wl,h,S-1,x);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Sc(s,e,t,i,a,l){const c=s.geometry.attributes.position;if(Yc.fromBufferAttribute(c,a),jc.fromBufferAttribute(c,l),t.distanceSqToSegment(Yc,jc,Id,k0)>i)return;Id.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Id);if(!(h<e.near||h>e.far))return{distance:h,point:k0.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const W0=new F,X0=new F;class jl extends ef{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,l=t.count;a<l;a+=2)W0.fromBufferAttribute(t,a),X0.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+W0.distanceTo(X0);e.setAttribute("lineDistance",new ki(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qA extends ef{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vy extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const q0=new $e,Yp=new $c,Ec=new tr,Tc=new F;class YA extends jt{constructor(e=new pn,t=new Vy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(a),Ec.radius+=l,e.ray.intersectsSphere(Ec)===!1)return;q0.copy(a).invert(),Yp.copy(e.ray).applyMatrix4(q0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=i.index,_=i.attributes.position;if(d!==null){const v=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let S=v,E=x;S<E;S++){const M=d.getX(S);Tc.fromBufferAttribute(_,M),Y0(Tc,M,h,a,e,t,this)}}else{const v=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let S=v,E=x;S<E;S++)Tc.fromBufferAttribute(_,S),Y0(Tc,S,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Y0(s,e,t,i,a,l,c){const f=Yp.distanceSqToPoint(s);if(f<t){const h=new F;Yp.closestPointToPoint(s,h),h.applyMatrix4(i);const d=a.ray.origin.distanceTo(h);if(d<a.near||d>a.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class di extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Gy extends bn{constructor(e,t,i,a,l,c,f,h,d,m=oo){if(m!==oo&&m!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===oo&&(i=Qs),i===void 0&&m===go&&(i=mo),super(null,a,l,c,f,h,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:jn,this.minFilter=h!==void 0?h:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tf extends pn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(i),h=Math.floor(a),d=f+1,m=h+1,_=e/f,v=t/h,x=[],S=[],E=[],M=[];for(let y=0;y<m;y++){const U=y*v-c;for(let D=0;D<d;D++){const A=D*_-l;S.push(A,-U,0),E.push(0,0,1),M.push(D/f),M.push(1-y/h)}}for(let y=0;y<h;y++)for(let U=0;U<f;U++){const D=U+d*y,A=U+d*(y+1),P=U+1+d*(y+1),B=U+1+d*y;x.push(D,A,B),x.push(A,P,B)}this.setIndex(x),this.setAttribute("position",new ki(S,3)),this.setAttribute("normal",new ki(E,3)),this.setAttribute("uv",new ki(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.width,e.height,e.widthSegments,e.heightSegments)}}class vm extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pm,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nr extends vm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jA extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZA extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ac(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function KA(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function QA(s){function e(a,l){return s[a]-s[l]}const t=s.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function j0(s,e,t){const i=s.length,a=new s.constructor(i);for(let l=0,c=0;c!==i;++l){const f=t[l]*e;for(let h=0;h!==e;++h)a[c++]=s[f+h]}return a}function ky(s,e,t,i){let a=1,l=s[0];for(;l!==void 0&&l[i]===void 0;)l=s[a++];if(l===void 0)return;let c=l[i];if(c!==void 0)if(Array.isArray(c))do c=l[i],c!==void 0&&(e.push(l.time),t.push.apply(t,c)),l=s[a++];while(l!==void 0);else if(c.toArray!==void 0)do c=l[i],c!==void 0&&(e.push(l.time),c.toArray(t,t.length)),l=s[a++];while(l!==void 0);else do c=l[i],c!==void 0&&(e.push(l.time),t.push(c)),l=s[a++];while(l!==void 0)}class Zl{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],l=t[i-1];e:{t:{let c;n:{i:if(!(e<a)){for(let f=i+2;;){if(a===void 0){if(e<l)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===f)break;if(l=a,a=t[++i],e<a)break t}c=t.length;break n}if(!(e>=l)){const f=t[1];e<f&&(i=2,l=f);for(let h=i-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(a=l,l=t[--i-1],e>=l)break t}c=i,i=0;break n}break e}for(;i<c;){const f=i+c>>>1;e<t[f]?c=f:i=f+1}if(a=t[i],l=t[i-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,l,a)}return this.interpolate_(i,l,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,l=e*a;for(let c=0;c!==a;++c)t[c]=i[l+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class JA extends Zl{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:io,endingEnd:io}}intervalChanged_(e,t,i){const a=this.parameterPositions;let l=e-2,c=e+1,f=a[l],h=a[c];if(f===void 0)switch(this.getSettings_().endingStart){case ro:l=e,f=2*t-i;break;case Wc:l=a.length-2,f=t+a[l]-a[l+1];break;default:l=e,f=i}if(h===void 0)switch(this.getSettings_().endingEnd){case ro:c=e,h=2*i-t;break;case Wc:c=1,h=i+a[1]-a[0];break;default:c=e-1,h=t}const d=(i-t)*.5,m=this.valueSize;this._weightPrev=d/(t-f),this._weightNext=d/(h-i),this._offsetPrev=l*m,this._offsetNext=c*m}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,m=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,S=(i-t)/(a-t),E=S*S,M=E*S,y=-v*M+2*v*E-v*S,U=(1+v)*M+(-1.5-2*v)*E+(-.5+v)*S+1,D=(-1-x)*M+(1.5+x)*E+.5*S,A=x*M-x*E;for(let P=0;P!==f;++P)l[P]=y*c[m+P]+U*c[d+P]+D*c[h+P]+A*c[_+P];return l}}class Wy extends Zl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,m=(i-t)/(a-t),_=1-m;for(let v=0;v!==f;++v)l[v]=c[d+v]*_+c[h+v]*m;return l}}class $A extends Zl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class ir{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ac(t,this.TimeBufferType),this.values=Ac(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ac(e.times,Array),values:Ac(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $A(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new JA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kl:t=this.InterpolantFactoryMethodDiscrete;break;case Wl:t=this.InterpolantFactoryMethodLinear;break;case dd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kl;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return dd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let l=0,c=a-1;for(;l!==a&&i[l]<e;)++l;for(;c!==-1&&i[c]>t;)--c;if(++c,l!==0||c!==a){l>=c&&(c=Math.max(c,1),l=c-1);const f=this.getValueSize();this.times=i.slice(l,c),this.values=this.values.slice(l*f,c*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,l=i.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let f=0;f!==l;f++){const h=i[f];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,h,c),e=!1;break}c=h}if(a!==void 0&&KA(a))for(let f=0,h=a.length;f!==h;++f){const d=a[f];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===dd,l=e.length-1;let c=1;for(let f=1;f<l;++f){let h=!1;const d=e[f],m=e[f+1];if(d!==m&&(f!==1||d!==e[0]))if(a)h=!0;else{const _=f*i,v=_-i,x=_+i;for(let S=0;S!==i;++S){const E=t[_+S];if(E!==t[v+S]||E!==t[x+S]){h=!0;break}}}if(h){if(f!==c){e[c]=e[f];const _=f*i,v=c*i;for(let x=0;x!==i;++x)t[v+x]=t[_+x]}++c}}if(l>0){e[c]=e[l];for(let f=l*i,h=c*i,d=0;d!==i;++d)t[h+d]=t[f+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}ir.prototype.TimeBufferType=Float32Array;ir.prototype.ValueBufferType=Float32Array;ir.prototype.DefaultInterpolation=Wl;class Eo extends ir{constructor(e,t,i){super(e,t,i)}}Eo.prototype.ValueTypeName="bool";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=kl;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Xy extends ir{}Xy.prototype.ValueTypeName="color";class xo extends ir{}xo.prototype.ValueTypeName="number";class eb extends Zl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=(i-t)/(a-t);let d=e*f;for(let m=d+f;d!==m;d+=4)lt.slerpFlat(l,0,c,d-f,c,d,h);return l}}class yo extends ir{InterpolantFactoryMethodLinear(e){return new eb(this.times,this.values,this.getValueSize(),e)}}yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends ir{constructor(e,t,i){super(e,t,i)}}To.prototype.ValueTypeName="string";To.prototype.ValueBufferType=Array;To.prototype.DefaultInterpolation=kl;To.prototype.InterpolantFactoryMethodLinear=void 0;To.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends ir{}Mo.prototype.ValueTypeName="vector";class jp{constructor(e="",t=-1,i=[],a=dm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=Vi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let c=0,f=i.length;c!==f;++c)t.push(nb(i[c]).scale(a));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let l=0,c=i.length;l!==c;++l)t.push(ir.toJSON(i[l]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const l=t.length,c=[];for(let f=0;f<l;f++){let h=[],d=[];h.push((f+l-1)%l,f,(f+1)%l),d.push(0,1,0);const m=QA(h);h=j0(h,1,m),d=j0(d,1,m),!a&&h[0]===0&&(h.push(l),d.push(d[0])),c.push(new xo(".morphTargetInfluences["+t[f].name+"]",h,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,h=e.length;f<h;f++){const d=e[f],m=d.name.match(l);if(m&&m.length>1){const _=m[1];let v=a[_];v||(a[_]=v=[]),v.push(d)}}const c=[];for(const f in a)c.push(this.CreateFromMorphTargetSequence(f,a[f],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(_,v,x,S,E){if(x.length!==0){const M=[],y=[];ky(x,M,y,S),M.length!==0&&E.push(new _(v,M,y))}},a=[],l=e.name||"default",c=e.fps||30,f=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let S;for(S=0;S<v.length;S++)if(v[S].morphTargets)for(let E=0;E<v[S].morphTargets.length;E++)x[v[S].morphTargets[E]]=-1;for(const E in x){const M=[],y=[];for(let U=0;U!==v[S].morphTargets.length;++U){const D=v[S];M.push(D.time),y.push(D.morphTarget===E?1:0)}a.push(new xo(".morphTargetInfluence["+E+"]",M,y))}h=x.length*c}else{const x=".bones["+t[_].name+"]";i(Mo,x+".position",v,"pos",a),i(yo,x+".quaternion",v,"rot",a),i(Mo,x+".scale",v,"scl",a)}}return a.length===0?null:new this(l,h,a,f)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const l=this.tracks[i];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return Xy;case"quaternion":return yo;case"bool":case"boolean":return Eo;case"string":return To}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function nb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tb(s.type);if(s.times===void 0){const t=[],i=[];ky(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ms={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ib{constructor(e,t,i){const a=this;let l=!1,c=0,f=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return d.push(m,_),this},this.removeHandler=function(m){const _=d.indexOf(m);return _!==-1&&d.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=d.length;_<v;_+=2){const x=d[_],S=d[_+1];if(x.global&&(x.lastIndex=0),x.test(m))return S}return null}}}const rb=new ib;class Ao{constructor(e){this.manager=e!==void 0?e:rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,l){i.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class sb extends Error{constructor(e,t){super(e),this.response=t}}class qy extends Ao{constructor(e){super(e)}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=ms.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:i,onError:a});return}br[e]=[],br[e].push({onLoad:t,onProgress:i,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const m=br[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,S=x!==0;let E=0;const M=new ReadableStream({start(y){U();function U(){_.read().then(({done:D,value:A})=>{if(D)y.close();else{E+=A.byteLength;const P=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:x});for(let B=0,I=m.length;B<I;B++){const G=m[B];G.onProgress&&G.onProgress(P)}y.enqueue(A),U()}},D=>{y.error(D)})}}});return new Response(M)}else throw new sb(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return d.json();default:if(f===void 0)return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(S=>x.decode(S))}}}).then(d=>{ms.add(e,d);const m=br[e];delete br[e];for(let _=0,v=m.length;_<v;_++){const x=m[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const m=br[e];if(m===void 0)throw this.manager.itemError(e),d;delete br[e];for(let _=0,v=m.length;_<v;_++){const x=m[_];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yy extends Ao{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=ms.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=Xl("img");function h(){m(),ms.add(e,this),t&&t(this),l.manager.itemEnd(e)}function d(_){m(),a&&a(_),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",h,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class ab extends Ao{constructor(e){super(e)}load(e,t,i,a){const l=new bn,c=new Yy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},i,a),l}}class nf extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bd=new $e,Z0=new F,K0=new F;class xm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _m,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Z0.setFromMatrixPosition(e.matrixWorld),t.position.copy(Z0),K0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(K0),t.updateMatrixWorld(),Bd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ob extends xm{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=_o*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(i!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=i,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lb extends nf{constructor(e,t,i=0,a=Math.PI/3,l=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=a,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new ob}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Q0=new $e,Cl=new F,Fd=new F;class ub extends xm{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),Cl.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cl),Fd.copy(i.position),Fd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fd),i.updateMatrixWorld(),a.makeTranslation(-Cl.x,-Cl.y,-Cl.z),Q0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q0)}}class cb extends nf{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new ub}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ym extends Iy{constructor(e=-1,t=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fb extends xm{constructor(){super(new ym(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jy extends nf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new fb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hb extends nf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vl{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,a=e.length;i<a;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class db extends Ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=ms.get(e);if(c!==void 0){if(l.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),l.manager.itemEnd(e)}).catch(d=>{a&&a(d)});return}return setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader;const h=fetch(e,f).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(d){return ms.add(e,d),t&&t(d),l.manager.itemEnd(e),d}).catch(function(d){a&&a(d),ms.remove(e),l.manager.itemError(e),l.manager.itemEnd(e)});ms.add(e,h),l.manager.itemStart(e)}}class pb extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=J0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=J0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function J0(){return performance.now()}class gb{constructor(e,t,i){this.binding=e,this.valueSize=i;let a,l,c;switch(t){case"quaternion":a=this._slerp,l=this._slerpAdditive,c=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":a=this._select,l=this._select,c=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:a=this._lerp,l=this._lerpAdditive,c=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=a,this._mixBufferRegionAdditive=l,this._setIdentity=c,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,a=this.valueSize,l=e*a+a;let c=this.cumulativeWeight;if(c===0){for(let f=0;f!==a;++f)i[l+f]=i[f];c=t}else{c+=t;const f=t/c;this._mixBufferRegion(i,l,0,f,a)}this.cumulativeWeight=c}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,a=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,a,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,a=e*t+t,l=this.cumulativeWeight,c=this.cumulativeWeightAdditive,f=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,l<1){const h=t*this._origIndex;this._mixBufferRegion(i,a,h,1-l,t)}c>0&&this._mixBufferRegionAdditive(i,a,this._addIndex*t,1,t);for(let h=t,d=t+t;h!==d;++h)if(i[h]!==i[h+t]){f.setValue(i,a);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,a=i*this._origIndex;e.getValue(t,a);for(let l=i,c=a;l!==c;++l)t[l]=t[a+l%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,a,l){if(a>=.5)for(let c=0;c!==l;++c)e[t+c]=e[i+c]}_slerp(e,t,i,a){lt.slerpFlat(e,t,e,t,e,i,a)}_slerpAdditive(e,t,i,a,l){const c=this._workIndex*l;lt.multiplyQuaternionsFlat(e,c,e,t,e,i),lt.slerpFlat(e,t,e,t,e,c,a)}_lerp(e,t,i,a,l){const c=1-a;for(let f=0;f!==l;++f){const h=t+f;e[h]=e[h]*c+e[i+f]*a}}_lerpAdditive(e,t,i,a,l){for(let c=0;c!==l;++c){const f=t+c;e[f]=e[f]+e[i+c]*a}}}const Mm="\\[\\]\\.:\\/",_b=new RegExp("["+Mm+"]","g"),Sm="[^"+Mm+"]",vb="[^"+Mm.replace("\\.","")+"]",xb=/((?:WC+[\/:])*)/.source.replace("WC",Sm),yb=/(WCOD+)?/.source.replace("WCOD",vb),Mb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sm),Sb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sm),Eb=new RegExp("^"+xb+yb+Mb+Sb+"$"),Tb=["material","materials","bones","map"];class Ab{constructor(e,t,i){const a=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,l=i.length;a!==l;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class It{constructor(e,t,i){this.path=t,this.parsedPath=i||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,i):new It(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_b,"")}static parseTrackName(e){const t=Eb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const l=i.nodeName.substring(a+1);Tb.indexOf(l)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=l)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(l){for(let c=0;c<l.length;c++){const f=l[c];if(f.name===t||f.uuid===t)return f;const h=i(f.children);if(h)return h}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let l=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===d){d=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[a];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+a+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?f=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(l!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=a;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=Ab;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bb{constructor(e,t,i=null,a=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=a;const l=t.tracks,c=l.length,f=new Array(c),h={endingStart:io,endingEnd:io};for(let d=0;d!==c;++d){const m=l[d].createInterpolant(null);f[d]=m,m.settings=h}this._interpolantSettings=h,this._interpolants=f,this._propertyBindings=new Array(c),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=IT,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const a=this._clip.duration,l=e._clip.duration,c=l/a,f=a/l;e.warp(1,c,t),this.warp(f,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const a=this._mixer,l=a.time,c=this.timeScale;let f=this._timeScaleInterpolant;f===null&&(f=a._lendControlInterpolant(),this._timeScaleInterpolant=f);const h=f.parameterPositions,d=f.sampleValues;return h[0]=l,h[1]=l+i,d[0]=e/c,d[1]=t/c,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,a){if(!this.enabled){this._updateWeight(e);return}const l=this._startTime;if(l!==null){const h=(e-l)*i;h<0||i===0?t=0:(this._startTime=null,t=i*h)}t*=this._updateTimeScale(e);const c=this._updateTime(t),f=this._updateWeight(e);if(f>0){const h=this._interpolants,d=this._propertyBindings;switch(this.blendMode){case FT:for(let m=0,_=h.length;m!==_;++m)h[m].evaluate(c),d[m].accumulateAdditive(f);break;case dm:default:for(let m=0,_=h.length;m!==_;++m)h[m].evaluate(c),d[m].accumulate(a,f)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const a=i.evaluate(e)[0];t*=a,e>i.parameterPositions[1]&&(this.stopFading(),a===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const a=i.evaluate(e)[0];t*=a,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let a=this.time+e,l=this._loopCount;const c=i===BT;if(e===0)return l===-1?a:c&&(l&1)===1?t-a:a;if(i===OT){l===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(a>=t)a=t;else if(a<0)a=0;else{this.time=a;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(l===-1&&(e>=0?(l=0,this._setEndings(!0,this.repetitions===0,c)):this._setEndings(this.repetitions===0,!0,c)),a>=t||a<0){const f=Math.floor(a/t);a-=t*f,l+=Math.abs(f);const h=this.repetitions-l;if(h<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,a=e>0?t:0,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(h===1){const d=e<0;this._setEndings(d,!d,c)}else this._setEndings(!1,!1,c);this._loopCount=l,this.time=a,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f})}}else this.time=a;if(c&&(l&1)===1)return t-a}return a}_setEndings(e,t,i){const a=this._interpolantSettings;i?(a.endingStart=ro,a.endingEnd=ro):(e?a.endingStart=this.zeroSlopeAtStart?ro:io:a.endingStart=Wc,t?a.endingEnd=this.zeroSlopeAtEnd?ro:io:a.endingEnd=Wc)}_scheduleFading(e,t,i){const a=this._mixer,l=a.time;let c=this._weightInterpolant;c===null&&(c=a._lendControlInterpolant(),this._weightInterpolant=c);const f=c.parameterPositions,h=c.sampleValues;return f[0]=l,h[0]=t,f[1]=l+e,h[1]=i,this}}const Rb=new Float32Array(1);class wb extends $s{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,a=e._clip.tracks,l=a.length,c=e._propertyBindings,f=e._interpolants,h=i.uuid,d=this._bindingsByRootAndName;let m=d[h];m===void 0&&(m={},d[h]=m);for(let _=0;_!==l;++_){const v=a[_],x=v.name;let S=m[x];if(S!==void 0)++S.referenceCount,c[_]=S;else{if(S=c[_],S!==void 0){S._cacheIndex===null&&(++S.referenceCount,this._addInactiveBinding(S,h,x));continue}const E=t&&t._propertyBindings[_].binding.parsedPath;S=new gb(It.create(i,x,E),v.ValueTypeName,v.getValueSize()),++S.referenceCount,this._addInactiveBinding(S,h,x),c[_]=S}f[_].resultBuffer=S.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,a=e._clip.uuid,l=this._actionsByClip[a];this._bindAction(e,l&&l.knownActions[0]),this._addInactiveAction(e,a,i)}const t=e._propertyBindings;for(let i=0,a=t.length;i!==a;++i){const l=t[i];l.useCount++===0&&(this._lendBinding(l),l.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,a=t.length;i!==a;++i){const l=t[i];--l.useCount===0&&(l.restoreOriginalState(),this._takeBackBinding(l))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const a=this._actions,l=this._actionsByClip;let c=l[t];if(c===void 0)c={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,l[t]=c;else{const f=c.knownActions;e._byClipCacheIndex=f.length,f.push(e)}e._cacheIndex=a.length,a.push(e),c.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],a=e._cacheIndex;i._cacheIndex=a,t[a]=i,t.pop(),e._cacheIndex=null;const l=e._clip.uuid,c=this._actionsByClip,f=c[l],h=f.knownActions,d=h[h.length-1],m=e._byClipCacheIndex;d._byClipCacheIndex=m,h[m]=d,h.pop(),e._byClipCacheIndex=null;const _=f.actionByRoot,v=(e._localRoot||this._root).uuid;delete _[v],h.length===0&&delete c[l],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,a=t.length;i!==a;++i){const l=t[i];--l.referenceCount===0&&this._removeInactiveBinding(l)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,a=this._nActiveActions++,l=t[a];e._cacheIndex=a,t[a]=e,l._cacheIndex=i,t[i]=l}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,a=--this._nActiveActions,l=t[a];e._cacheIndex=a,t[a]=e,l._cacheIndex=i,t[i]=l}_addInactiveBinding(e,t,i){const a=this._bindingsByRootAndName,l=this._bindings;let c=a[t];c===void 0&&(c={},a[t]=c),c[i]=e,e._cacheIndex=l.length,l.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,a=i.rootNode.uuid,l=i.path,c=this._bindingsByRootAndName,f=c[a],h=t[t.length-1],d=e._cacheIndex;h._cacheIndex=d,t[d]=h,t.pop(),delete f[l],Object.keys(f).length===0&&delete c[a]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,a=this._nActiveBindings++,l=t[a];e._cacheIndex=a,t[a]=e,l._cacheIndex=i,t[i]=l}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,a=--this._nActiveBindings,l=t[a];e._cacheIndex=a,t[a]=e,l._cacheIndex=i,t[i]=l}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Wy(new Float32Array(2),new Float32Array(2),1,Rb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,a=--this._nActiveControlInterpolants,l=t[a];e.__cacheIndex=a,t[a]=e,l.__cacheIndex=i,t[i]=l}clipAction(e,t,i){const a=t||this._root,l=a.uuid;let c=typeof e=="string"?jp.findByName(a,e):e;const f=c!==null?c.uuid:e,h=this._actionsByClip[f];let d=null;if(i===void 0&&(c!==null?i=c.blendMode:i=dm),h!==void 0){const _=h.actionByRoot[l];if(_!==void 0&&_.blendMode===i)return _;d=h.knownActions[0],c===null&&(c=d._clip)}if(c===null)return null;const m=new bb(this,c,t,i);return this._bindAction(m,d),this._addInactiveAction(m,f,l),m}existingAction(e,t){const i=t||this._root,a=i.uuid,l=typeof e=="string"?jp.findByName(i,e):e,c=l?l.uuid:e,f=this._actionsByClip[c];return f!==void 0&&f.actionByRoot[a]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,a=this.time+=e,l=Math.sign(e),c=this._accuIndex^=1;for(let d=0;d!==i;++d)t[d]._update(a,e,l,c);const f=this._bindings,h=this._nActiveBindings;for(let d=0;d!==h;++d)f[d].apply(c);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,a=this._actionsByClip,l=a[i];if(l!==void 0){const c=l.knownActions;for(let f=0,h=c.length;f!==h;++f){const d=c[f];this._deactivateAction(d);const m=d._cacheIndex,_=t[t.length-1];d._cacheIndex=null,d._byClipCacheIndex=null,_._cacheIndex=m,t[m]=_,t.pop(),this._removeInactiveBindingsForAction(d)}delete a[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const c in i){const f=i[c].actionByRoot,h=f[t];h!==void 0&&(this._deactivateAction(h),this._removeInactiveAction(h))}const a=this._bindingsByRootAndName,l=a[t];if(l!==void 0)for(const c in l){const f=l[c];f.restoreOriginalState(),this._removeInactiveBinding(f)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class $0{constructor(e,t,i,a,l){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=a,this.count=l,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Cb extends jl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new pn;a.setAttribute("position",new ki(t,3)),a.setAttribute("color",new ki(i,3));const l=new ea({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,i){const a=new qe,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(i),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function ex(s,e,t,i){const a=Lb(i);switch(t){case xy:return s*e;case My:return s*e;case Sy:return s*e*2;case um:return s*e/a.components*a.byteLength;case cm:return s*e/a.components*a.byteLength;case Ey:return s*e*2/a.components*a.byteLength;case fm:return s*e*2/a.components*a.byteLength;case yy:return s*e*3/a.components*a.byteLength;case bi:return s*e*4/a.components*a.byteLength;case hm:return s*e*4/a.components*a.byteLength;case Pc:case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xp:case Mp:return Math.max(s,16)*Math.max(e,8)/4;case vp:case yp:return Math.max(s,8)*Math.max(e,8)/2;case Sp:case Ep:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Up:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Op:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fc:case zp:case Hp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ty:case Vp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gp:case kp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lb(s){switch(s){case Pr:case gy:return{byteLength:1,components:1};case Gl:case _y:case ql:return{byteLength:2,components:1};case om:case lm:return{byteLength:2,components:4};case Qs:case am:case Hi:return{byteLength:4,components:1};case vy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ks}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ks);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zy(){let s=null,e=!1,t=null,i=null;function a(l,c){t(l,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Db(s){const e=new WeakMap;function t(f,h){const d=f.array,m=f.usage,_=d.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,d,m),f.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,h,d){const m=h.array,_=h.updateRanges;if(s.bindBuffer(d,f),_.length===0)s.bufferSubData(d,0,m);else{_.sort((x,S)=>x.start-S.start);let v=0;for(let x=1;x<_.length;x++){const S=_[v],E=_[x];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++v,_[v]=E)}_.length=v+1;for(let x=0,S=_.length;x<S;x++){const E=_[x];s.bufferSubData(d,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,f,h),d.version=f.version}}return{get:a,remove:l,update:c}}var Ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lR="gl_FragColor = linearToOutputTexel( gl_FragColor );",uR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ER=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$R=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ew=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Aw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Ub,alphahash_pars_fragment:Nb,alphamap_fragment:Pb,alphamap_pars_fragment:Ob,alphatest_fragment:Ib,alphatest_pars_fragment:Bb,aomap_fragment:Fb,aomap_pars_fragment:zb,batching_pars_vertex:Hb,batching_vertex:Vb,begin_vertex:Gb,beginnormal_vertex:kb,bsdfs:Wb,iridescence_fragment:Xb,bumpmap_pars_fragment:qb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Kb,color_fragment:Qb,color_pars_fragment:Jb,color_pars_vertex:$b,color_vertex:eR,common:tR,cube_uv_reflection_fragment:nR,defaultnormal_vertex:iR,displacementmap_pars_vertex:rR,displacementmap_vertex:sR,emissivemap_fragment:aR,emissivemap_pars_fragment:oR,colorspace_fragment:lR,colorspace_pars_fragment:uR,envmap_fragment:cR,envmap_common_pars_fragment:fR,envmap_pars_fragment:hR,envmap_pars_vertex:dR,envmap_physical_pars_fragment:TR,envmap_vertex:pR,fog_vertex:mR,fog_pars_vertex:gR,fog_fragment:_R,fog_pars_fragment:vR,gradientmap_pars_fragment:xR,lightmap_pars_fragment:yR,lights_lambert_fragment:MR,lights_lambert_pars_fragment:SR,lights_pars_begin:ER,lights_toon_fragment:AR,lights_toon_pars_fragment:bR,lights_phong_fragment:RR,lights_phong_pars_fragment:wR,lights_physical_fragment:CR,lights_physical_pars_fragment:LR,lights_fragment_begin:DR,lights_fragment_maps:UR,lights_fragment_end:NR,logdepthbuf_fragment:PR,logdepthbuf_pars_fragment:OR,logdepthbuf_pars_vertex:IR,logdepthbuf_vertex:BR,map_fragment:FR,map_pars_fragment:zR,map_particle_fragment:HR,map_particle_pars_fragment:VR,metalnessmap_fragment:GR,metalnessmap_pars_fragment:kR,morphinstance_vertex:WR,morphcolor_vertex:XR,morphnormal_vertex:qR,morphtarget_pars_vertex:YR,morphtarget_vertex:jR,normal_fragment_begin:ZR,normal_fragment_maps:KR,normal_pars_fragment:QR,normal_pars_vertex:JR,normal_vertex:$R,normalmap_pars_fragment:ew,clearcoat_normal_fragment_begin:tw,clearcoat_normal_fragment_maps:nw,clearcoat_pars_fragment:iw,iridescence_pars_fragment:rw,opaque_fragment:sw,packing:aw,premultiplied_alpha_fragment:ow,project_vertex:lw,dithering_fragment:uw,dithering_pars_fragment:cw,roughnessmap_fragment:fw,roughnessmap_pars_fragment:hw,shadowmap_pars_fragment:dw,shadowmap_pars_vertex:pw,shadowmap_vertex:mw,shadowmask_pars_fragment:gw,skinbase_vertex:_w,skinning_pars_vertex:vw,skinning_vertex:xw,skinnormal_vertex:yw,specularmap_fragment:Mw,specularmap_pars_fragment:Sw,tonemapping_fragment:Ew,tonemapping_pars_fragment:Tw,transmission_fragment:Aw,transmission_pars_fragment:bw,uv_pars_fragment:Rw,uv_pars_vertex:ww,uv_vertex:Cw,worldpos_vertex:Lw,background_vert:Dw,background_frag:Uw,backgroundCube_vert:Nw,backgroundCube_frag:Pw,cube_vert:Ow,cube_frag:Iw,depth_vert:Bw,depth_frag:Fw,distanceRGBA_vert:zw,distanceRGBA_frag:Hw,equirect_vert:Vw,equirect_frag:Gw,linedashed_vert:kw,linedashed_frag:Ww,meshbasic_vert:Xw,meshbasic_frag:qw,meshlambert_vert:Yw,meshlambert_frag:jw,meshmatcap_vert:Zw,meshmatcap_frag:Kw,meshnormal_vert:Qw,meshnormal_frag:Jw,meshphong_vert:$w,meshphong_frag:e1,meshphysical_vert:t1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:r1,points_vert:s1,points_frag:a1,shadow_vert:o1,shadow_frag:l1,sprite_vert:u1,sprite_frag:c1},we={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},er={basic:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Wn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Wn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new qe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Wn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Wn([we.points,we.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Wn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Wn([we.common,we.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Wn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Wn([we.sprite,we.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Wn([we.common,we.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Wn([we.lights,we.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};er.physical={uniforms:Wn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const bc={r:0,b:0,g:0},zs=new pi,f1=new $e;function h1(s,e,t,i,a,l,c){const f=new qe(0);let h=l===!0?0:1,d,m,_=null,v=0,x=null;function S(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?t:e).get(A)),A}function E(D){let A=!1;const P=S(D);P===null?y(f,h):P&&P.isColor&&(y(P,1),A=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,A){const P=S(A);P&&(P.isCubeTexture||P.mapping===Jc)?(m===void 0&&(m=new qn(new Yl(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:vo(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),zs.copy(A.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(f1.makeRotationFromEuler(zs)),m.material.toneMapped=Rt.getTransfer(P.colorSpace)!==qt,(_!==P||v!==P.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,_=P,v=P.version,x=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new qn(new tf(2,2),new Or({name:"BackgroundMaterial",uniforms:vo(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(P.colorSpace)!==qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||x!==s.toneMapping)&&(d.material.needsUpdate=!0,_=P,v=P.version,x=s.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function y(D,A){D.getRGB(bc,Py(s)),i.buffers.color.setClear(bc.r,bc.g,bc.b,A,c)}function U(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(D,A=1){f.set(D),h=A,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,y(f,h)},render:E,addToRenderList:M,dispose:U}}function d1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=v(null);let l=a,c=!1;function f(w,V,te,re,de){let ue=!1;const z=_(re,te,V);l!==z&&(l=z,d(l.object)),ue=x(w,re,te,de),ue&&S(w,re,te,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,A(w,V,te,re),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function d(w){return s.bindVertexArray(w)}function m(w){return s.deleteVertexArray(w)}function _(w,V,te){const re=te.wireframe===!0;let de=i[w.id];de===void 0&&(de={},i[w.id]=de);let ue=de[V.id];ue===void 0&&(ue={},de[V.id]=ue);let z=ue[re];return z===void 0&&(z=v(h()),ue[re]=z),z}function v(w){const V=[],te=[],re=[];for(let de=0;de<t;de++)V[de]=0,te[de]=0,re[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:re,object:w,attributes:{},index:null}}function x(w,V,te,re){const de=l.attributes,ue=V.attributes;let z=0;const j=te.getAttributes();for(const Y in j)if(j[Y].location>=0){const N=de[Y];let ee=ue[Y];if(ee===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;z++}return l.attributesNum!==z||l.index!==re}function S(w,V,te,re){const de={},ue=V.attributes;let z=0;const j=te.getAttributes();for(const Y in j)if(j[Y].location>=0){let N=ue[Y];N===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),de[Y]=ee,z++}l.attributes=de,l.attributesNum=z,l.index=re}function E(){const w=l.newAttributes;for(let V=0,te=w.length;V<te;V++)w[V]=0}function M(w){y(w,0)}function y(w,V){const te=l.newAttributes,re=l.enabledAttributes,de=l.attributeDivisors;te[w]=1,re[w]===0&&(s.enableVertexAttribArray(w),re[w]=1),de[w]!==V&&(s.vertexAttribDivisor(w,V),de[w]=V)}function U(){const w=l.newAttributes,V=l.enabledAttributes;for(let te=0,re=V.length;te<re;te++)V[te]!==w[te]&&(s.disableVertexAttribArray(te),V[te]=0)}function D(w,V,te,re,de,ue,z){z===!0?s.vertexAttribIPointer(w,V,te,de,ue):s.vertexAttribPointer(w,V,te,re,de,ue)}function A(w,V,te,re){E();const de=re.attributes,ue=te.getAttributes(),z=V.defaultAttributeValues;for(const j in ue){const Y=ue[j];if(Y.location>=0){let xe=de[j];if(xe===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),xe!==void 0){const N=xe.normalized,ee=xe.itemSize,ve=e.get(xe);if(ve===void 0)continue;const Me=ve.buffer,Q=ve.type,he=ve.bytesPerElement,ye=Q===s.INT||Q===s.UNSIGNED_INT||xe.gpuType===am;if(xe.isInterleavedBufferAttribute){const Ae=xe.data,Ne=Ae.stride,Ye=xe.offset;if(Ae.isInstancedInterleavedBuffer){for(let ot=0;ot<Y.locationSize;ot++)y(Y.location+ot,Ae.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ot=0;ot<Y.locationSize;ot++)M(Y.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let ot=0;ot<Y.locationSize;ot++)D(Y.location+ot,ee/Y.locationSize,Q,N,Ne*he,(Ye+ee/Y.locationSize*ot)*he,ye)}else{if(xe.isInstancedBufferAttribute){for(let Ae=0;Ae<Y.locationSize;Ae++)y(Y.location+Ae,xe.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)M(Y.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Ae=0;Ae<Y.locationSize;Ae++)D(Y.location+Ae,ee/Y.locationSize,Q,N,ee*he,ee/Y.locationSize*Ae*he,ye)}}else if(z!==void 0){const N=z[j];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}U()}function P(){G();for(const w in i){const V=i[w];for(const te in V){const re=V[te];for(const de in re)m(re[de].object),delete re[de];delete V[te]}delete i[w]}}function B(w){if(i[w.id]===void 0)return;const V=i[w.id];for(const te in V){const re=V[te];for(const de in re)m(re[de].object),delete re[de];delete V[te]}delete i[w.id]}function I(w){for(const V in i){const te=i[V];if(te[w.id]===void 0)continue;const re=te[w.id];for(const de in re)m(re[de].object),delete re[de];delete te[w.id]}}function G(){L(),c=!0,l!==a&&(l=a,d(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:L,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:M,disableUnusedAttributes:U}}function p1(s,e,t){let i;function a(d){i=d}function l(d,m){s.drawArrays(i,d,m),t.update(m,i,1)}function c(d,m,_){_!==0&&(s.drawArraysInstanced(i,d,m,_),t.update(m,i,_))}function f(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,_);let x=0;for(let S=0;S<_;S++)x+=m[S];t.update(x,i,1)}function h(d,m,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<d.length;S++)c(d[S],m[S],v[S]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,m,0,v,0,_);let S=0;for(let E=0;E<_;E++)S+=m[E]*v[E];t.update(S,i,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function m1(s,e,t,i){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==bi&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const G=I===ql&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Pr&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Hi&&!G)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:P,maxSamples:B}}function g1(s){const e=this;let t=null,i=0,a=!1,l=!1;const c=new Xs,f=new Qe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||a;return a=v,i=_.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,x){const S=_.clippingPlanes,E=_.clipIntersection,M=_.clipShadows,y=s.get(_);if(!a||S===null||S.length===0||l&&!M)l?m(null):d();else{const U=l?0:i,D=U*4;let A=y.clippingState||null;h.value=A,A=m(S,v,D,x);for(let P=0;P!==D;++P)A[P]=t[P];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=U}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,x,S){const E=_!==null?_.length:0;let M=null;if(E!==0){if(M=h.value,S!==!0||M===null){const y=x+E*4,U=v.matrixWorldInverse;f.getNormalMatrix(U),(M===null||M.length<y)&&(M=new Float32Array(y));for(let D=0,A=x;D!==E;++D,A+=4)c.copy(_[D]).applyMatrix4(U,f),c.normal.toArray(M,A),M[A+3]=c.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,M}}function _1(s){let e=new WeakMap;function t(c,f){return f===gp?c.mapping=fo:f===_p&&(c.mapping=ho),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===gp||f===_p)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new BA(h.height);return d.fromEquirectangularTexture(s,c),e.set(c,d),c.addEventListener("dispose",a),t(d.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const so=4,tx=[.125,.215,.35,.446,.526,.582],js=20,zd=new ym,nx=new qe;let Hd=null,Vd=0,Gd=0,kd=!1;const qs=(1+Math.sqrt(5))/2,Ka=1/qs,ix=[new F(-qs,Ka,0),new F(qs,Ka,0),new F(-Ka,0,qs),new F(Ka,0,qs),new F(0,qs,-Ka),new F(0,qs,Ka),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class rx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ax(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Vd,Gd),this._renderer.xr.enabled=kd,e.scissorTest=!1,Rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:ql,format:bi,colorSpace:Zn,depthBuffer:!1},a=sx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v1(l)),this._blurMaterial=x1(l,e,t)}return a}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,zd)}_sceneToCubeUV(e,t,i,a){const f=new Xn(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(nx),m.toneMapping=_s,m.autoClear=!1;const x=new Dr({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),S=new qn(new Yl,x);let E=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,E=!0):(x.color.copy(nx),E=!0);for(let y=0;y<6;y++){const U=y%3;U===0?(f.up.set(0,h[y],0),f.lookAt(d[y],0,0)):U===1?(f.up.set(0,0,h[y]),f.lookAt(0,d[y],0)):(f.up.set(0,h[y],0),f.lookAt(0,0,d[y]));const D=this._cubeSize;Rc(a,U*D,y>2?D:0,D,D),m.setRenderTarget(a),E&&m.render(S,f),m.render(e,f)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===fo||e.mapping===ho;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ax());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new qn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Rc(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,zd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ix[(a-l-1)%ix.length];this._blur(e,l-1,l,c,f)}t.autoClear=i}_blur(e,t,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",l),this._halfBlur(c,e,i,i,a,"longitudinal",l)}_halfBlur(e,t,i,a,l,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new qn(this._lodPlanes[a],d),v=d.uniforms,x=this._sizeLods[i]-1,S=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*js-1),E=l/S,M=isFinite(l)?1+Math.floor(m*E):js;M>js&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${js}`);const y=[];let U=0;for(let I=0;I<js;++I){const G=I/E,L=Math.exp(-G*G/2);y.push(L),I===0?U+=L:I<M&&(U+=2*L)}for(let I=0;I<y.length;I++)y[I]=y[I]/U;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=S,v.mipInt.value=D-i;const A=this._sizeLods[a],P=3*A*(a>D-so?a-D+so:0),B=4*(this._cubeSize-A);Rc(t,P,B,3*A,2*A),h.setRenderTarget(t),h.render(_,zd)}}function v1(s){const e=[],t=[],i=[];let a=s;const l=s-so+1+tx.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-so?h=tx[c-s+so-1]:c===0&&(h=0),i.push(h);const d=1/(f-2),m=-d,_=1+d,v=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,S=6,E=3,M=2,y=1,U=new Float32Array(E*S*x),D=new Float32Array(M*S*x),A=new Float32Array(y*S*x);for(let B=0;B<x;B++){const I=B%3*2/3-1,G=B>2?0:-1,L=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];U.set(L,E*S*B),D.set(v,M*S*B);const w=[B,B,B,B,B,B];A.set(w,y*S*B)}const P=new pn;P.setAttribute("position",new Lt(U,E)),P.setAttribute("uv",new Lt(D,M)),P.setAttribute("faceIndex",new Lt(A,y)),e.push(P),a>so&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sx(s,e,t){const i=new Js(s,e,t);return i.texture.mapping=Jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rc(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function x1(s,e,t){const i=new Float32Array(js),a=new F(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function ax(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function ox(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Em(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y1(s){let e=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const h=f.mapping,d=h===gp||h===_p,m=h===fo||h===ho;if(d||m){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new rx(s)),_=d?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const x=f.image;return d&&x&&x.height>0||m&&x&&a(x)?(t===null&&(t=new rx(s)),_=d?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const d=6;for(let m=0;m<d;m++)f[m]!==void 0&&h++;return h===d}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function M1(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&eo("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function S1(s,e,t,i){const a={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const S in v.attributes)e.remove(v.attributes[S]);v.removeEventListener("dispose",c),delete a[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const x in v)e.update(v[x],s.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,S=_.attributes.position;let E=0;if(x!==null){const U=x.array;E=x.version;for(let D=0,A=U.length;D<A;D+=3){const P=U[D+0],B=U[D+1],I=U[D+2];v.push(P,B,B,I,I,P)}}else if(S!==void 0){const U=S.array;E=S.version;for(let D=0,A=U.length/3-1;D<A;D+=3){const P=D+0,B=D+1,I=D+2;v.push(P,B,B,I,I,P)}}else return;const M=new(Ry(v)?Ny:Uy)(v,1);M.version=E;const y=l.get(_);y&&e.remove(y),l.set(_,M)}function m(_){const v=l.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:m}}function E1(s,e,t){let i;function a(v){i=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,x){s.drawElements(i,x,l,v*c),t.update(x,i,1)}function d(v,x,S){S!==0&&(s.drawElementsInstanced(i,x,l,v*c,S),t.update(x,i,S))}function m(v,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,v,0,S);let M=0;for(let y=0;y<S;y++)M+=x[y];t.update(M,i,1)}function _(v,x,S,E){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)d(v[y]/c,x[y],E[y]);else{M.multiDrawElementsInstancedWEBGL(i,x,0,l,v,0,E,0,S);let y=0;for(let U=0;U<S;U++)y+=x[U]*E[U];t.update(y,i,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function T1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function A1(s,e,t){const i=new WeakMap,a=new Ot;function l(c,f,h){const d=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==_){let w=function(){G.dispose(),i.delete(f),f.removeEventListener("dispose",w)};var x=w;v!==void 0&&v.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let A=0;S===!0&&(A=1),E===!0&&(A=2),M===!0&&(A=3);let P=f.attributes.position.count*A,B=1;P>e.maxTextureSize&&(B=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*B*4*_),G=new Cy(I,P,B,_);G.type=Hi,G.needsUpdate=!0;const L=A*4;for(let V=0;V<_;V++){const te=y[V],re=U[V],de=D[V],ue=P*B*4*V;for(let z=0;z<te.count;z++){const j=z*L;S===!0&&(a.fromBufferAttribute(te,z),I[ue+j+0]=a.x,I[ue+j+1]=a.y,I[ue+j+2]=a.z,I[ue+j+3]=0),E===!0&&(a.fromBufferAttribute(re,z),I[ue+j+4]=a.x,I[ue+j+5]=a.y,I[ue+j+6]=a.z,I[ue+j+7]=0),M===!0&&(a.fromBufferAttribute(de,z),I[ue+j+8]=a.x,I[ue+j+9]=a.y,I[ue+j+10]=a.z,I[ue+j+11]=de.itemSize===4?a.w:1)}}v={count:_,texture:G,size:new gt(P,B)},i.set(f,v),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<d.length;M++)S+=d[M];const E=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",d)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function b1(s,e,t,i){let a=new WeakMap;function l(h){const d=i.render.frame,m=h.geometry,_=e.get(h,m);if(a.get(_)!==d&&(e.update(_),a.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==d&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==d&&(v.update(),a.set(v,d))}return _}function c(){a=new WeakMap}function f(h){const d=h.target;d.removeEventListener("dispose",f),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:c}}const Ky=new bn,lx=new Gy(1,1),Qy=new Cy,Jy=new SA,$y=new By,ux=[],cx=[],fx=new Float32Array(16),hx=new Float32Array(9),dx=new Float32Array(4);function bo(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let l=ux[a];if(l===void 0&&(l=new Float32Array(a),ux[a]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function yn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function rf(s,e){let t=cx[e];t===void 0&&(t=new Int32Array(e),cx[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function R1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function w1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),yn(t,e)}}function C1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),yn(t,e)}}function L1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),yn(t,e)}}function D1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;dx.set(i),s.uniformMatrix2fv(this.addr,!1,dx),yn(t,i)}}function U1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;hx.set(i),s.uniformMatrix3fv(this.addr,!1,hx),yn(t,i)}}function N1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;fx.set(i),s.uniformMatrix4fv(this.addr,!1,fx),yn(t,i)}}function P1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function O1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),yn(t,e)}}function I1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),yn(t,e)}}function B1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),yn(t,e)}}function F1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),yn(t,e)}}function H1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),yn(t,e)}}function V1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),yn(t,e)}}function G1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(lx.compareFunction=by,l=lx):l=Ky,t.setTexture2D(e||l,a)}function k1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Jy,a)}function W1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||$y,a)}function X1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Qy,a)}function q1(s){switch(s){case 5126:return R1;case 35664:return w1;case 35665:return C1;case 35666:return L1;case 35674:return D1;case 35675:return U1;case 35676:return N1;case 5124:case 35670:return P1;case 35667:case 35671:return O1;case 35668:case 35672:return I1;case 35669:case 35673:return B1;case 5125:return F1;case 36294:return z1;case 36295:return H1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}function Y1(s,e){s.uniform1fv(this.addr,e)}function j1(s,e){const t=bo(e,this.size,2);s.uniform2fv(this.addr,t)}function Z1(s,e){const t=bo(e,this.size,3);s.uniform3fv(this.addr,t)}function K1(s,e){const t=bo(e,this.size,4);s.uniform4fv(this.addr,t)}function Q1(s,e){const t=bo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function J1(s,e){const t=bo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $1(s,e){const t=bo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eC(s,e){s.uniform1iv(this.addr,e)}function tC(s,e){s.uniform2iv(this.addr,e)}function nC(s,e){s.uniform3iv(this.addr,e)}function iC(s,e){s.uniform4iv(this.addr,e)}function rC(s,e){s.uniform1uiv(this.addr,e)}function sC(s,e){s.uniform2uiv(this.addr,e)}function aC(s,e){s.uniform3uiv(this.addr,e)}function oC(s,e){s.uniform4uiv(this.addr,e)}function lC(s,e,t){const i=this.cache,a=e.length,l=rf(t,a);xn(i,l)||(s.uniform1iv(this.addr,l),yn(i,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Ky,l[c])}function uC(s,e,t){const i=this.cache,a=e.length,l=rf(t,a);xn(i,l)||(s.uniform1iv(this.addr,l),yn(i,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Jy,l[c])}function cC(s,e,t){const i=this.cache,a=e.length,l=rf(t,a);xn(i,l)||(s.uniform1iv(this.addr,l),yn(i,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||$y,l[c])}function fC(s,e,t){const i=this.cache,a=e.length,l=rf(t,a);xn(i,l)||(s.uniform1iv(this.addr,l),yn(i,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Qy,l[c])}function hC(s){switch(s){case 5126:return Y1;case 35664:return j1;case 35665:return Z1;case 35666:return K1;case 35674:return Q1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return eC;case 35667:case 35671:return tC;case 35668:case 35672:return nC;case 35669:case 35673:return iC;case 5125:return rC;case 36294:return sC;case 36295:return aC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return lC;case 35679:case 36299:case 36307:return uC;case 35680:case 36300:case 36308:case 36293:return cC;case 36289:case 36303:case 36311:case 36292:return fC}}class dC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=q1(t.type)}}class pC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hC(t.type)}}class mC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],i)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function px(s,e){s.seq.push(e),s.map[e.id]=e}function gC(s,e,t){const i=s.name,a=i.length;for(Wd.lastIndex=0;;){const l=Wd.exec(i),c=Wd.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===a){px(t,d===void 0?new dC(f,s,e):new pC(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new mC(f),px(t,_)),t=_}}}class zc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);gC(l,c,this)}}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=i[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function mx(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const _C=37297;let vC=0;function xC(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const gx=new Qe;function yC(s){Rt._getMatrix(gx,Rt.workingColorSpace,s);const e=`mat3( ${gx.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Xc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _x(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+xC(s.getShaderSource(e),c)}else return a}function MC(s,e){const t=yC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function SC(s,e){let t;switch(e){case RT:t="Linear";break;case wT:t="Reinhard";break;case CT:t="Cineon";break;case LT:t="ACESFilmic";break;case UT:t="AgX";break;case NT:t="Neutral";break;case DT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wc=new F;function EC(){Rt.getLuminanceCoefficients(wc);const s=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function AC(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bC(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Bl(s){return s!==""}function vx(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(s){return s.replace(RC,CC)}const wC=new Map;function CC(s,e){let t=dt[e];if(t===void 0){const i=wC.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zp(t)}const LC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yx(s){return s.replace(LC,DC)}function DC(s,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Mx(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UC(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hy?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===aT?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function NC(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fo:case ho:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PC(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function OC(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dy:e="ENVMAP_BLENDING_MULTIPLY";break;case AT:e="ENVMAP_BLENDING_MIX";break;case bT:e="ENVMAP_BLENDING_ADD";break}return e}function IC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function BC(s,e,t,i){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=UC(t),d=NC(t),m=PC(t),_=OC(t),v=IC(t),x=TC(t),S=AC(l),E=a.createProgram();let M,y,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Bl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Bl).join(`
`),y.length>0&&(y+=`
`)):(M=[Mx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),y=[Mx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?dt.tonemapping_pars_fragment:"",t.toneMapping!==_s?SC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,MC("linearToOutputTexel",t.outputColorSpace),EC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bl).join(`
`)),c=Zp(c),c=vx(c,t),c=xx(c,t),f=Zp(f),f=vx(f,t),f=xx(f,t),c=yx(c),f=yx(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=U+M+c,A=U+y+f,P=mx(a,a.VERTEX_SHADER,D),B=mx(a,a.FRAGMENT_SHADER,A);a.attachShader(E,P),a.attachShader(E,B),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function I(V){if(s.debug.checkShaderErrors){const te=a.getProgramInfoLog(E).trim(),re=a.getShaderInfoLog(P).trim(),de=a.getShaderInfoLog(B).trim();let ue=!0,z=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,P,B);else{const j=_x(a,P,"vertex"),Y=_x(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+te+`
`+j+`
`+Y)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(re===""||de==="")&&(z=!1);z&&(V.diagnostics={runnable:ue,programLog:te,vertexShader:{log:re,prefix:M},fragmentShader:{log:de,prefix:y}})}a.deleteShader(P),a.deleteShader(B),G=new zc(a,E),L=bC(a,E)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(E,_C)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=B,this}let FC=0;class zC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HC(e),t.set(e,i)),i}}class HC{constructor(e){this.id=FC++,this.code=e,this.usedTimes=0}}function VC(s,e,t,i,a,l,c){const f=new Ly,h=new zC,d=new Set,m=[],_=a.logarithmicDepthBuffer,v=a.vertexTextures;let x=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return d.add(L),L===0?"uv":`uv${L}`}function M(L,w,V,te,re){const de=te.fog,ue=re.geometry,z=L.isMeshStandardMaterial?te.environment:null,j=(L.isMeshStandardMaterial?t:e).get(L.envMap||z),Y=j&&j.mapping===Jc?j.image.height:null,xe=S[L.type];L.precision!==null&&(x=a.getMaxPrecision(L.precision),x!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",x,"instead."));const N=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ee=N!==void 0?N.length:0;let ve=0;ue.morphAttributes.position!==void 0&&(ve=1),ue.morphAttributes.normal!==void 0&&(ve=2),ue.morphAttributes.color!==void 0&&(ve=3);let Me,Q,he,ye;if(xe){const Tt=er[xe];Me=Tt.vertexShader,Q=Tt.fragmentShader}else Me=L.vertexShader,Q=L.fragmentShader,h.update(L),he=h.getVertexShaderID(L),ye=h.getFragmentShaderID(L);const Ae=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Ye=re.isInstancedMesh===!0,ot=re.isBatchedMesh===!0,Dt=!!L.map,ht=!!L.matcap,Ht=!!j,k=!!L.aoMap,Rn=!!L.lightMap,pt=!!L.bumpMap,tt=!!L.normalMap,Ge=!!L.displacementMap,Ut=!!L.emissiveMap,He=!!L.metalnessMap,O=!!L.roughnessMap,R=L.anisotropy>0,ne=L.clearcoat>0,_e=L.dispersion>0,Se=L.iridescence>0,fe=L.sheen>0,Oe=L.transmission>0,be=R&&!!L.anisotropyMap,Re=ne&&!!L.clearcoatMap,ut=ne&&!!L.clearcoatNormalMap,Te=ne&&!!L.clearcoatRoughnessMap,Fe=Se&&!!L.iridescenceMap,We=Se&&!!L.iridescenceThicknessMap,Ze=fe&&!!L.sheenColorMap,Pe=fe&&!!L.sheenRoughnessMap,ct=!!L.specularMap,nt=!!L.specularColorMap,Nt=!!L.specularIntensityMap,X=Oe&&!!L.transmissionMap,Le=Oe&&!!L.thicknessMap,le=!!L.gradientMap,me=!!L.alphaMap,Ue=L.alphaTest>0,Ce=!!L.alphaHash,rt=!!L.extensions;let Vt=_s;L.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const Qt={shaderID:xe,shaderType:L.type,shaderName:L.name,vertexShader:Me,fragmentShader:Q,defines:L.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:x,batching:ot,batchingColor:ot&&re._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&re.instanceColor!==null,instancingMorph:Ye&&re.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Zn,alphaToCoverage:!!L.alphaToCoverage,map:Dt,matcap:ht,envMap:Ht,envMapMode:Ht&&j.mapping,envMapCubeUVHeight:Y,aoMap:k,lightMap:Rn,bumpMap:pt,normalMap:tt,displacementMap:v&&Ge,emissiveMap:Ut,normalMapObjectSpace:tt&&L.normalMapType===GT,normalMapTangentSpace:tt&&L.normalMapType===pm,metalnessMap:He,roughnessMap:O,anisotropy:R,anisotropyMap:be,clearcoat:ne,clearcoatMap:Re,clearcoatNormalMap:ut,clearcoatRoughnessMap:Te,dispersion:_e,iridescence:Se,iridescenceMap:Fe,iridescenceThicknessMap:We,sheen:fe,sheenColorMap:Ze,sheenRoughnessMap:Pe,specularMap:ct,specularColorMap:nt,specularIntensityMap:Nt,transmission:Oe,transmissionMap:X,thicknessMap:Le,gradientMap:le,opaque:L.transparent===!1&&L.blending===ao&&L.alphaToCoverage===!1,alphaMap:me,alphaTest:Ue,alphaHash:Ce,combine:L.combine,mapUv:Dt&&E(L.map.channel),aoMapUv:k&&E(L.aoMap.channel),lightMapUv:Rn&&E(L.lightMap.channel),bumpMapUv:pt&&E(L.bumpMap.channel),normalMapUv:tt&&E(L.normalMap.channel),displacementMapUv:Ge&&E(L.displacementMap.channel),emissiveMapUv:Ut&&E(L.emissiveMap.channel),metalnessMapUv:He&&E(L.metalnessMap.channel),roughnessMapUv:O&&E(L.roughnessMap.channel),anisotropyMapUv:be&&E(L.anisotropyMap.channel),clearcoatMapUv:Re&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:ut&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:We&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&E(L.sheenRoughnessMap.channel),specularMapUv:ct&&E(L.specularMap.channel),specularColorMapUv:nt&&E(L.specularColorMap.channel),specularIntensityMapUv:Nt&&E(L.specularIntensityMap.channel),transmissionMapUv:X&&E(L.transmissionMap.channel),thicknessMapUv:Le&&E(L.thicknessMap.channel),alphaMapUv:me&&E(L.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(tt||R),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!ue.attributes.uv&&(Dt||me),fog:!!de,useFog:L.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ne,skinning:re.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Dt&&L.map.isVideoTexture===!0&&Rt.getTransfer(L.map.colorSpace)===qt,decodeVideoTextureEmissive:Ut&&L.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(L.emissiveMap.colorSpace)===qt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ai,flipSided:L.side===Yn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:rt&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&L.extensions.multiDraw===!0||ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Qt.vertexUv1s=d.has(1),Qt.vertexUv2s=d.has(2),Qt.vertexUv3s=d.has(3),d.clear(),Qt}function y(L){const w=[];if(L.shaderID?w.push(L.shaderID):(w.push(L.customVertexShaderID),w.push(L.customFragmentShaderID)),L.defines!==void 0)for(const V in L.defines)w.push(V),w.push(L.defines[V]);return L.isRawShaderMaterial===!1&&(U(w,L),D(w,L),w.push(s.outputColorSpace)),w.push(L.customProgramCacheKey),w.join()}function U(L,w){L.push(w.precision),L.push(w.outputColorSpace),L.push(w.envMapMode),L.push(w.envMapCubeUVHeight),L.push(w.mapUv),L.push(w.alphaMapUv),L.push(w.lightMapUv),L.push(w.aoMapUv),L.push(w.bumpMapUv),L.push(w.normalMapUv),L.push(w.displacementMapUv),L.push(w.emissiveMapUv),L.push(w.metalnessMapUv),L.push(w.roughnessMapUv),L.push(w.anisotropyMapUv),L.push(w.clearcoatMapUv),L.push(w.clearcoatNormalMapUv),L.push(w.clearcoatRoughnessMapUv),L.push(w.iridescenceMapUv),L.push(w.iridescenceThicknessMapUv),L.push(w.sheenColorMapUv),L.push(w.sheenRoughnessMapUv),L.push(w.specularMapUv),L.push(w.specularColorMapUv),L.push(w.specularIntensityMapUv),L.push(w.transmissionMapUv),L.push(w.thicknessMapUv),L.push(w.combine),L.push(w.fogExp2),L.push(w.sizeAttenuation),L.push(w.morphTargetsCount),L.push(w.morphAttributeCount),L.push(w.numDirLights),L.push(w.numPointLights),L.push(w.numSpotLights),L.push(w.numSpotLightMaps),L.push(w.numHemiLights),L.push(w.numRectAreaLights),L.push(w.numDirLightShadows),L.push(w.numPointLightShadows),L.push(w.numSpotLightShadows),L.push(w.numSpotLightShadowsWithMaps),L.push(w.numLightProbes),L.push(w.shadowMapType),L.push(w.toneMapping),L.push(w.numClippingPlanes),L.push(w.numClipIntersection),L.push(w.depthPacking)}function D(L,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),L.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),L.push(f.mask)}function A(L){const w=S[L.type];let V;if(w){const te=er[w];V=Oy.clone(te.uniforms)}else V=L.uniforms;return V}function P(L,w){let V;for(let te=0,re=m.length;te<re;te++){const de=m[te];if(de.cacheKey===w){V=de,++V.usedTimes;break}}return V===void 0&&(V=new BC(s,w,L,l),m.push(V)),V}function B(L){if(--L.usedTimes===0){const w=m.indexOf(L);m[w]=m[m.length-1],m.pop(),L.destroy()}}function I(L){h.remove(L)}function G(){h.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:A,acquireProgram:P,releaseProgram:B,releaseShaderCache:I,programs:m,dispose:G}}function GC(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function i(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:l}}function kC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ex(){const s=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function c(_,v,x,S,E,M){let y=s[e];return y===void 0?(y={id:_.id,object:_,geometry:v,material:x,groupOrder:S,renderOrder:_.renderOrder,z:E,group:M},s[e]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=x,y.groupOrder=S,y.renderOrder=_.renderOrder,y.z=E,y.group=M),e++,y}function f(_,v,x,S,E,M){const y=c(_,v,x,S,E,M);x.transmission>0?i.push(y):x.transparent===!0?a.push(y):t.push(y)}function h(_,v,x,S,E,M){const y=c(_,v,x,S,E,M);x.transmission>0?i.unshift(y):x.transparent===!0?a.unshift(y):t.unshift(y)}function d(_,v){t.length>1&&t.sort(_||kC),i.length>1&&i.sort(v||Sx),a.length>1&&a.sort(v||Sx)}function m(){for(let _=e,v=s.length;_<v;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:f,unshift:h,finish:m,sort:d}}function WC(){let s=new WeakMap;function e(i,a){const l=s.get(i);let c;return l===void 0?(c=new Ex,s.set(i,[c])):a>=l.length?(c=new Ex,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function XC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new qe};break;case"SpotLight":t={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function qC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let YC=0;function jC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ZC(s){const e=new XC,t=qC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new F);const a=new F,l=new $e,c=new $e;function f(d){let m=0,_=0,v=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let x=0,S=0,E=0,M=0,y=0,U=0,D=0,A=0,P=0,B=0,I=0;d.sort(jC);for(let L=0,w=d.length;L<w;L++){const V=d[L],te=V.color,re=V.intensity,de=V.distance,ue=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=te.r*re,_+=te.g*re,v+=te.b*re;else if(V.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(V.sh.coefficients[z],re);I++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,Y=t.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[x]=Y,i.directionalShadowMap[x]=ue,i.directionalShadowMatrix[x]=V.shadow.matrix,U++}i.directional[x]=z,x++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(te).multiplyScalar(re),z.distance=de,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,i.spot[E]=z;const j=V.shadow;if(V.map&&(i.spotLightMap[P]=V.map,P++,j.updateMatrices(V),V.castShadow&&B++),i.spotLightMatrix[E]=j.matrix,V.castShadow){const Y=t.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=ue,A++}E++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(te).multiplyScalar(re),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),i.rectArea[M]=z,M++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const j=V.shadow,Y=t.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[S]=Y,i.pointShadowMap[S]=ue,i.pointShadowMatrix[S]=V.shadow.matrix,D++}i.point[S]=z,S++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(re),z.groundColor.copy(V.groundColor).multiplyScalar(re),i.hemi[y]=z,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=v;const G=i.hash;(G.directionalLength!==x||G.pointLength!==S||G.spotLength!==E||G.rectAreaLength!==M||G.hemiLength!==y||G.numDirectionalShadows!==U||G.numPointShadows!==D||G.numSpotShadows!==A||G.numSpotMaps!==P||G.numLightProbes!==I)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=M,i.point.length=S,i.hemi.length=y,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=A+P-B,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=I,G.directionalLength=x,G.pointLength=S,G.spotLength=E,G.rectAreaLength=M,G.hemiLength=y,G.numDirectionalShadows=U,G.numPointShadows=D,G.numSpotShadows=A,G.numSpotMaps=P,G.numLightProbes=I,i.version=YC++)}function h(d,m){let _=0,v=0,x=0,S=0,E=0;const M=m.matrixWorldInverse;for(let y=0,U=d.length;y<U;y++){const D=d[y];if(D.isDirectionalLight){const A=i.directional[_];A.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(M),_++}else if(D.isSpotLight){const A=i.spot[x];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(M),x++}else if(D.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(M),c.identity(),l.copy(D.matrixWorld),l.premultiply(M),c.extractRotation(l),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),S++}else if(D.isPointLight){const A=i.point[v];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const A=i.hemi[E];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(M),E++}}}return{setup:f,setupView:h,state:i}}function Tx(s){const e=new ZC(s),t=[],i=[];function a(m){d.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function c(m){i.push(m)}function f(){e.setup(t)}function h(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function KC(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Tx(s),e.set(a,[f])):l>=c.length?(f=new Tx(s),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const QC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $C(s,e,t){let i=new _m;const a=new gt,l=new gt,c=new Ot,f=new jA({depthPacking:VT}),h=new ZA,d={},m=t.maxTextureSize,_={[Nr]:Yn,[Yn]:Nr,[Ai]:Ai},v=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:QC,fragmentShader:JC}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const S=new pn;S.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new qn(S,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hy;let y=this.type;this.render=function(B,I,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const L=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),te=s.state;te.setBlending(gs),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const re=y!==Rr&&this.type===Rr,de=y===Rr&&this.type!==Rr;for(let ue=0,z=B.length;ue<z;ue++){const j=B[ue],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const xe=Y.getFrameExtents();if(a.multiply(xe),l.copy(Y.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/xe.x),a.x=l.x*xe.x,Y.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/xe.y),a.y=l.y*xe.y,Y.mapSize.y=l.y)),Y.map===null||re===!0||de===!0){const ee=this.type!==Rr?{minFilter:jn,magFilter:jn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Js(a.x,a.y,ee),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let ee=0;ee<N;ee++){const ve=Y.getViewport(ee);c.set(l.x*ve.x,l.y*ve.y,l.x*ve.z,l.y*ve.w),te.viewport(c),Y.updateMatrices(j,ee),i=Y.getFrustum(),A(I,G,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===Rr&&U(Y,G),Y.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(L,w,V)};function U(B,I){const G=e.update(E);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Js(a.x,a.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(I,null,G,v,E,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(I,null,G,x,E,null)}function D(B,I,G,L){let w=null;const V=G.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)w=V;else if(w=G.isPointLight===!0?h:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const te=w.uuid,re=I.uuid;let de=d[te];de===void 0&&(de={},d[te]=de);let ue=de[re];ue===void 0&&(ue=w.clone(),de[re]=ue,I.addEventListener("dispose",P)),w=ue}if(w.visible=I.visible,w.wireframe=I.wireframe,L===Rr?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:_[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=s.properties.get(w);te.light=G}return w}function A(B,I,G,L,w){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Rr)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,B.matrixWorld);const re=e.update(B),de=B.material;if(Array.isArray(de)){const ue=re.groups;for(let z=0,j=ue.length;z<j;z++){const Y=ue[z],xe=de[Y.materialIndex];if(xe&&xe.visible){const N=D(B,xe,L,w);B.onBeforeShadow(s,B,I,G,re,N,Y),s.renderBufferDirect(G,null,re,N,B,Y),B.onAfterShadow(s,B,I,G,re,N,Y)}}}else if(de.visible){const ue=D(B,de,L,w);B.onBeforeShadow(s,B,I,G,re,ue,null),s.renderBufferDirect(G,null,re,ue,B,null),B.onAfterShadow(s,B,I,G,re,ue,null)}}const te=B.children;for(let re=0,de=te.length;re<de;re++)A(te[re],I,G,L,w)}function P(B){B.target.removeEventListener("dispose",P);for(const G in d){const L=d[G],w=B.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}const eL={[up]:cp,[fp]:pp,[hp]:mp,[co]:dp,[cp]:up,[pp]:fp,[mp]:hp,[dp]:co};function tL(s,e){function t(){let X=!1;const Le=new Ot;let le=null;const me=new Ot(0,0,0,0);return{setMask:function(Ue){le!==Ue&&!X&&(s.colorMask(Ue,Ue,Ue,Ue),le=Ue)},setLocked:function(Ue){X=Ue},setClear:function(Ue,Ce,rt,Vt,Qt){Qt===!0&&(Ue*=Vt,Ce*=Vt,rt*=Vt),Le.set(Ue,Ce,rt,Vt),me.equals(Le)===!1&&(s.clearColor(Ue,Ce,rt,Vt),me.copy(Le))},reset:function(){X=!1,le=null,me.set(-1,0,0,0)}}}function i(){let X=!1,Le=!1,le=null,me=null,Ue=null;return{setReversed:function(Ce){if(Le!==Ce){const rt=e.get("EXT_clip_control");Le?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Vt=Ue;Ue=null,this.setClear(Vt)}Le=Ce},getReversed:function(){return Le},setTest:function(Ce){Ce?Ae(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(Ce){le!==Ce&&!X&&(s.depthMask(Ce),le=Ce)},setFunc:function(Ce){if(Le&&(Ce=eL[Ce]),me!==Ce){switch(Ce){case up:s.depthFunc(s.NEVER);break;case cp:s.depthFunc(s.ALWAYS);break;case fp:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case hp:s.depthFunc(s.EQUAL);break;case dp:s.depthFunc(s.GEQUAL);break;case pp:s.depthFunc(s.GREATER);break;case mp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Ce}},setLocked:function(Ce){X=Ce},setClear:function(Ce){Ue!==Ce&&(Le&&(Ce=1-Ce),s.clearDepth(Ce),Ue=Ce)},reset:function(){X=!1,le=null,me=null,Ue=null,Le=!1}}}function a(){let X=!1,Le=null,le=null,me=null,Ue=null,Ce=null,rt=null,Vt=null,Qt=null;return{setTest:function(Tt){X||(Tt?Ae(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Tt){Le!==Tt&&!X&&(s.stencilMask(Tt),Le=Tt)},setFunc:function(Tt,zn,cn){(le!==Tt||me!==zn||Ue!==cn)&&(s.stencilFunc(Tt,zn,cn),le=Tt,me=zn,Ue=cn)},setOp:function(Tt,zn,cn){(Ce!==Tt||rt!==zn||Vt!==cn)&&(s.stencilOp(Tt,zn,cn),Ce=Tt,rt=zn,Vt=cn)},setLocked:function(Tt){X=Tt},setClear:function(Tt){Qt!==Tt&&(s.clearStencil(Tt),Qt=Tt)},reset:function(){X=!1,Le=null,le=null,me=null,Ue=null,Ce=null,rt=null,Vt=null,Qt=null}}}const l=new t,c=new i,f=new a,h=new WeakMap,d=new WeakMap;let m={},_={},v=new WeakMap,x=[],S=null,E=!1,M=null,y=null,U=null,D=null,A=null,P=null,B=null,I=new qe(0,0,0),G=0,L=!1,w=null,V=null,te=null,re=null,de=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=j>=2);let xe=null,N={};const ee=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Me=new Ot().fromArray(ee),Q=new Ot().fromArray(ve);function he(X,Le,le,me){const Ue=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(X,Ce),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<le;rt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Le+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return Ce}const ye={};ye[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Ae(s.DEPTH_TEST),c.setFunc(co),pt(!1),tt(u0),Ae(s.CULL_FACE),k(gs);function Ae(X){m[X]!==!0&&(s.enable(X),m[X]=!0)}function Ne(X){m[X]!==!1&&(s.disable(X),m[X]=!1)}function Ye(X,Le){return _[X]!==Le?(s.bindFramebuffer(X,Le),_[X]=Le,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function ot(X,Le){let le=x,me=!1;if(X){le=v.get(Le),le===void 0&&(le=[],v.set(Le,le));const Ue=X.textures;if(le.length!==Ue.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,rt=Ue.length;Ce<rt;Ce++)le[Ce]=s.COLOR_ATTACHMENT0+Ce;le.length=Ue.length,me=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,me=!0);me&&s.drawBuffers(le)}function Dt(X){return S!==X?(s.useProgram(X),S=X,!0):!1}const ht={[Ys]:s.FUNC_ADD,[lT]:s.FUNC_SUBTRACT,[uT]:s.FUNC_REVERSE_SUBTRACT};ht[cT]=s.MIN,ht[fT]=s.MAX;const Ht={[hT]:s.ZERO,[dT]:s.ONE,[pT]:s.SRC_COLOR,[op]:s.SRC_ALPHA,[yT]:s.SRC_ALPHA_SATURATE,[vT]:s.DST_COLOR,[gT]:s.DST_ALPHA,[mT]:s.ONE_MINUS_SRC_COLOR,[lp]:s.ONE_MINUS_SRC_ALPHA,[xT]:s.ONE_MINUS_DST_COLOR,[_T]:s.ONE_MINUS_DST_ALPHA,[MT]:s.CONSTANT_COLOR,[ST]:s.ONE_MINUS_CONSTANT_COLOR,[ET]:s.CONSTANT_ALPHA,[TT]:s.ONE_MINUS_CONSTANT_ALPHA};function k(X,Le,le,me,Ue,Ce,rt,Vt,Qt,Tt){if(X===gs){E===!0&&(Ne(s.BLEND),E=!1);return}if(E===!1&&(Ae(s.BLEND),E=!0),X!==oT){if(X!==M||Tt!==L){if((y!==Ys||A!==Ys)&&(s.blendEquation(s.FUNC_ADD),y=Ys,A=Ys),Tt)switch(X){case ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case c0:s.blendFunc(s.ONE,s.ONE);break;case f0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case h0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case c0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case f0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case h0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}U=null,D=null,P=null,B=null,I.set(0,0,0),G=0,M=X,L=Tt}return}Ue=Ue||Le,Ce=Ce||le,rt=rt||me,(Le!==y||Ue!==A)&&(s.blendEquationSeparate(ht[Le],ht[Ue]),y=Le,A=Ue),(le!==U||me!==D||Ce!==P||rt!==B)&&(s.blendFuncSeparate(Ht[le],Ht[me],Ht[Ce],Ht[rt]),U=le,D=me,P=Ce,B=rt),(Vt.equals(I)===!1||Qt!==G)&&(s.blendColor(Vt.r,Vt.g,Vt.b,Qt),I.copy(Vt),G=Qt),M=X,L=!1}function Rn(X,Le){X.side===Ai?Ne(s.CULL_FACE):Ae(s.CULL_FACE);let le=X.side===Yn;Le&&(le=!le),pt(le),X.blending===ao&&X.transparent===!1?k(gs):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const me=X.stencilWrite;f.setTest(me),me&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ut(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function tt(X){X!==rT?(Ae(s.CULL_FACE),X!==V&&(X===u0?s.cullFace(s.BACK):X===sT?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),V=X}function Ge(X){X!==te&&(z&&s.lineWidth(X),te=X)}function Ut(X,Le,le){X?(Ae(s.POLYGON_OFFSET_FILL),(re!==Le||de!==le)&&(s.polygonOffset(Le,le),re=Le,de=le)):Ne(s.POLYGON_OFFSET_FILL)}function He(X){X?Ae(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function O(X){X===void 0&&(X=s.TEXTURE0+ue-1),xe!==X&&(s.activeTexture(X),xe=X)}function R(X,Le,le){le===void 0&&(xe===null?le=s.TEXTURE0+ue-1:le=xe);let me=N[le];me===void 0&&(me={type:void 0,texture:void 0},N[le]=me),(me.type!==X||me.texture!==Le)&&(xe!==le&&(s.activeTexture(le),xe=le),s.bindTexture(X,Le||ye[X]),me.type=X,me.texture=Le)}function ne(){const X=N[xe];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(X){Me.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Me.copy(X))}function Pe(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function ct(X,Le){let le=d.get(Le);le===void 0&&(le=new WeakMap,d.set(Le,le));let me=le.get(X);me===void 0&&(me=s.getUniformBlockIndex(Le,X.name),le.set(X,me))}function nt(X,Le){const me=d.get(Le).get(X);h.get(Le)!==me&&(s.uniformBlockBinding(Le,me,X.__bindingPointIndex),h.set(Le,me))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},xe=null,N={},_={},v=new WeakMap,x=[],S=null,E=!1,M=null,y=null,U=null,D=null,A=null,P=null,B=null,I=new qe(0,0,0),G=0,L=!1,w=null,V=null,te=null,re=null,de=null,Me.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Ae,disable:Ne,bindFramebuffer:Ye,drawBuffers:ot,useProgram:Dt,setBlending:k,setMaterial:Rn,setFlipSided:pt,setCullFace:tt,setLineWidth:Ge,setPolygonOffset:Ut,setScissorTest:He,activeTexture:O,bindTexture:R,unbindTexture:ne,compressedTexImage2D:_e,compressedTexImage3D:Se,texImage2D:Fe,texImage3D:We,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:ut,texStorage3D:Te,texSubImage2D:fe,texSubImage3D:Oe,compressedTexSubImage2D:be,compressedTexSubImage3D:Re,scissor:Ze,viewport:Pe,reset:Nt}}function nL(s,e,t,i,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new gt,m=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(O,R){return x?new OffscreenCanvas(O,R):Xl("canvas")}function E(O,R,ne){let _e=1;const Se=He(O);if((Se.width>ne||Se.height>ne)&&(_e=ne/Math.max(Se.width,Se.height)),_e<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(_e*Se.width),Oe=Math.floor(_e*Se.height);_===void 0&&(_=S(fe,Oe));const be=R?S(fe,Oe):_;return be.width=fe,be.height=Oe,be.getContext("2d").drawImage(O,0,0,fe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+fe+"x"+Oe+")."),be}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),O;return O}function M(O){return O.generateMipmaps}function y(O){s.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(O,R,ne,_e,Se=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=R;if(R===s.RED&&(ne===s.FLOAT&&(fe=s.R32F),ne===s.HALF_FLOAT&&(fe=s.R16F),ne===s.UNSIGNED_BYTE&&(fe=s.R8)),R===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(fe=s.R8UI),ne===s.UNSIGNED_SHORT&&(fe=s.R16UI),ne===s.UNSIGNED_INT&&(fe=s.R32UI),ne===s.BYTE&&(fe=s.R8I),ne===s.SHORT&&(fe=s.R16I),ne===s.INT&&(fe=s.R32I)),R===s.RG&&(ne===s.FLOAT&&(fe=s.RG32F),ne===s.HALF_FLOAT&&(fe=s.RG16F),ne===s.UNSIGNED_BYTE&&(fe=s.RG8)),R===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ne===s.UNSIGNED_INT&&(fe=s.RG32UI),ne===s.BYTE&&(fe=s.RG8I),ne===s.SHORT&&(fe=s.RG16I),ne===s.INT&&(fe=s.RG32I)),R===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ne===s.UNSIGNED_INT&&(fe=s.RGB32UI),ne===s.BYTE&&(fe=s.RGB8I),ne===s.SHORT&&(fe=s.RGB16I),ne===s.INT&&(fe=s.RGB32I)),R===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ne===s.BYTE&&(fe=s.RGBA8I),ne===s.SHORT&&(fe=s.RGBA16I),ne===s.INT&&(fe=s.RGBA32I)),R===s.RGB&&ne===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),R===s.RGBA){const Oe=Se?Xc:Rt.getTransfer(_e);ne===s.FLOAT&&(fe=s.RGBA32F),ne===s.HALF_FLOAT&&(fe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(fe=Oe===qt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(O,R){let ne;return O?R===null||R===Qs||R===mo?ne=s.DEPTH24_STENCIL8:R===Hi?ne=s.DEPTH32F_STENCIL8:R===Gl&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Qs||R===mo?ne=s.DEPTH_COMPONENT24:R===Hi?ne=s.DEPTH_COMPONENT32F:R===Gl&&(ne=s.DEPTH_COMPONENT16),ne}function P(O,R){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==jn&&O.minFilter!==hi?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function B(O){const R=O.target;R.removeEventListener("dispose",B),G(R),R.isVideoTexture&&m.delete(R)}function I(O){const R=O.target;R.removeEventListener("dispose",I),w(R)}function G(O){const R=i.get(O);if(R.__webglInit===void 0)return;const ne=O.source,_e=v.get(ne);if(_e){const Se=_e[R.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&L(O),Object.keys(_e).length===0&&v.delete(ne)}i.remove(O)}function L(O){const R=i.get(O);s.deleteTexture(R.__webglTexture);const ne=O.source,_e=v.get(ne);delete _e[R.__cacheKey],c.memory.textures--}function w(O){const R=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(R.__webglFramebuffer[_e]))for(let Se=0;Se<R.__webglFramebuffer[_e].length;Se++)s.deleteFramebuffer(R.__webglFramebuffer[_e][Se]);else s.deleteFramebuffer(R.__webglFramebuffer[_e]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[_e])}else{if(Array.isArray(R.__webglFramebuffer))for(let _e=0;_e<R.__webglFramebuffer.length;_e++)s.deleteFramebuffer(R.__webglFramebuffer[_e]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _e=0;_e<R.__webglColorRenderbuffer.length;_e++)R.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[_e]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ne=O.textures;for(let _e=0,Se=ne.length;_e<Se;_e++){const fe=i.get(ne[_e]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),c.memory.textures--),i.remove(ne[_e])}i.remove(O)}let V=0;function te(){V=0}function re(){const O=V;return O>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+a.maxTextures),V+=1,O}function de(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function ue(O,R){const ne=i.get(O);if(O.isVideoTexture&&Ge(O),O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){const _e=O.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ne,O,R);return}}t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+R)}function z(O,R){const ne=i.get(O);if(O.version>0&&ne.__version!==O.version){Q(ne,O,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+R)}function j(O,R){const ne=i.get(O);if(O.version>0&&ne.__version!==O.version){Q(ne,O,R);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+R)}function Y(O,R){const ne=i.get(O);if(O.version>0&&ne.__version!==O.version){he(ne,O,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+R)}const xe={[po]:s.REPEAT,[ps]:s.CLAMP_TO_EDGE,[kc]:s.MIRRORED_REPEAT},N={[jn]:s.NEAREST,[my]:s.NEAREST_MIPMAP_NEAREST,[Il]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},ee={[kT]:s.NEVER,[ZT]:s.ALWAYS,[WT]:s.LESS,[by]:s.LEQUAL,[XT]:s.EQUAL,[jT]:s.GEQUAL,[qT]:s.GREATER,[YT]:s.NOTEQUAL};function ve(O,R){if(R.type===Hi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===hi||R.magFilter===Nc||R.magFilter===Il||R.magFilter===Cr||R.minFilter===hi||R.minFilter===Nc||R.minFilter===Il||R.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,xe[R.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,xe[R.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,xe[R.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,N[R.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,N[R.minFilter]),R.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,ee[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===jn||R.minFilter!==Il&&R.minFilter!==Cr||R.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,a.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Me(O,R){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",B));const _e=R.source;let Se=v.get(_e);Se===void 0&&(Se={},v.set(_e,Se));const fe=de(R);if(fe!==O.__cacheKey){Se[fe]===void 0&&(Se[fe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),Se[fe].usedTimes++;const Oe=Se[O.__cacheKey];Oe!==void 0&&(Se[O.__cacheKey].usedTimes--,Oe.usedTimes===0&&L(R)),O.__cacheKey=fe,O.__webglTexture=Se[fe].texture}return ne}function Q(O,R,ne){let _e=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_e=s.TEXTURE_3D);const Se=Me(O,R),fe=R.source;t.bindTexture(_e,O.__webglTexture,s.TEXTURE0+ne);const Oe=i.get(fe);if(fe.version!==Oe.__version||Se===!0){t.activeTexture(s.TEXTURE0+ne);const be=Rt.getPrimaries(Rt.workingColorSpace),Re=R.colorSpace===ds?null:Rt.getPrimaries(R.colorSpace),ut=R.colorSpace===ds||be===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Te=E(R.image,!1,a.maxTextureSize);Te=Ut(R,Te);const Fe=l.convert(R.format,R.colorSpace),We=l.convert(R.type);let Ze=D(R.internalFormat,Fe,We,R.colorSpace,R.isVideoTexture);ve(_e,R);let Pe;const ct=R.mipmaps,nt=R.isVideoTexture!==!0,Nt=Oe.__version===void 0||Se===!0,X=fe.dataReady,Le=P(R,Te);if(R.isDepthTexture)Ze=A(R.format===go,R.type),Nt&&(nt?t.texStorage2D(s.TEXTURE_2D,1,Ze,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,Ze,Te.width,Te.height,0,Fe,We,null));else if(R.isDataTexture)if(ct.length>0){nt&&Nt&&t.texStorage2D(s.TEXTURE_2D,Le,Ze,ct[0].width,ct[0].height);for(let le=0,me=ct.length;le<me;le++)Pe=ct[le],nt?X&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,Fe,We,Pe.data):t.texImage2D(s.TEXTURE_2D,le,Ze,Pe.width,Pe.height,0,Fe,We,Pe.data);R.generateMipmaps=!1}else nt?(Nt&&t.texStorage2D(s.TEXTURE_2D,Le,Ze,Te.width,Te.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te.width,Te.height,Fe,We,Te.data)):t.texImage2D(s.TEXTURE_2D,0,Ze,Te.width,Te.height,0,Fe,We,Te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){nt&&Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ze,ct[0].width,ct[0].height,Te.depth);for(let le=0,me=ct.length;le<me;le++)if(Pe=ct[le],R.format!==bi)if(Fe!==null)if(nt){if(X)if(R.layerUpdates.size>0){const Ue=ex(Pe.width,Pe.height,R.format,R.type);for(const Ce of R.layerUpdates){const rt=Pe.data.subarray(Ce*Ue/Pe.data.BYTES_PER_ELEMENT,(Ce+1)*Ue/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Ce,Pe.width,Pe.height,1,Fe,rt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Pe.width,Pe.height,Te.depth,Fe,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Ze,Pe.width,Pe.height,Te.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Pe.width,Pe.height,Te.depth,Fe,We,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,Ze,Pe.width,Pe.height,Te.depth,0,Fe,We,Pe.data)}else{nt&&Nt&&t.texStorage2D(s.TEXTURE_2D,Le,Ze,ct[0].width,ct[0].height);for(let le=0,me=ct.length;le<me;le++)Pe=ct[le],R.format!==bi?Fe!==null?nt?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,Fe,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,le,Ze,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,Fe,We,Pe.data):t.texImage2D(s.TEXTURE_2D,le,Ze,Pe.width,Pe.height,0,Fe,We,Pe.data)}else if(R.isDataArrayTexture)if(nt){if(Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ze,Te.width,Te.height,Te.depth),X)if(R.layerUpdates.size>0){const le=ex(Te.width,Te.height,R.format,R.type);for(const me of R.layerUpdates){const Ue=Te.data.subarray(me*le/Te.data.BYTES_PER_ELEMENT,(me+1)*le/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,Fe,We,Ue)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Fe,We,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ze,Te.width,Te.height,Te.depth,0,Fe,We,Te.data);else if(R.isData3DTexture)nt?(Nt&&t.texStorage3D(s.TEXTURE_3D,Le,Ze,Te.width,Te.height,Te.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Fe,We,Te.data)):t.texImage3D(s.TEXTURE_3D,0,Ze,Te.width,Te.height,Te.depth,0,Fe,We,Te.data);else if(R.isFramebufferTexture){if(Nt)if(nt)t.texStorage2D(s.TEXTURE_2D,Le,Ze,Te.width,Te.height);else{let le=Te.width,me=Te.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,Ze,le,me,0,Fe,We,null),le>>=1,me>>=1}}else if(ct.length>0){if(nt&&Nt){const le=He(ct[0]);t.texStorage2D(s.TEXTURE_2D,Le,Ze,le.width,le.height)}for(let le=0,me=ct.length;le<me;le++)Pe=ct[le],nt?X&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Fe,We,Pe):t.texImage2D(s.TEXTURE_2D,le,Ze,Fe,We,Pe);R.generateMipmaps=!1}else if(nt){if(Nt){const le=He(Te);t.texStorage2D(s.TEXTURE_2D,Le,Ze,le.width,le.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,We,Te)}else t.texImage2D(s.TEXTURE_2D,0,Ze,Fe,We,Te);M(R)&&y(_e),Oe.__version=fe.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function he(O,R,ne){if(R.image.length!==6)return;const _e=Me(O,R),Se=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+ne);const fe=i.get(Se);if(Se.version!==fe.__version||_e===!0){t.activeTexture(s.TEXTURE0+ne);const Oe=Rt.getPrimaries(Rt.workingColorSpace),be=R.colorSpace===ds?null:Rt.getPrimaries(R.colorSpace),Re=R.colorSpace===ds||Oe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ut=R.isCompressedTexture||R.image[0].isCompressedTexture,Te=R.image[0]&&R.image[0].isDataTexture,Fe=[];for(let me=0;me<6;me++)!ut&&!Te?Fe[me]=E(R.image[me],!0,a.maxCubemapSize):Fe[me]=Te?R.image[me].image:R.image[me],Fe[me]=Ut(R,Fe[me]);const We=Fe[0],Ze=l.convert(R.format,R.colorSpace),Pe=l.convert(R.type),ct=D(R.internalFormat,Ze,Pe,R.colorSpace),nt=R.isVideoTexture!==!0,Nt=fe.__version===void 0||_e===!0,X=Se.dataReady;let Le=P(R,We);ve(s.TEXTURE_CUBE_MAP,R);let le;if(ut){nt&&Nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ct,We.width,We.height);for(let me=0;me<6;me++){le=Fe[me].mipmaps;for(let Ue=0;Ue<le.length;Ue++){const Ce=le[Ue];R.format!==bi?Ze!==null?nt?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,Ce.width,Ce.height,Ze,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ct,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,Ce.width,Ce.height,Ze,Pe,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ct,Ce.width,Ce.height,0,Ze,Pe,Ce.data)}}}else{if(le=R.mipmaps,nt&&Nt){le.length>0&&Le++;const me=He(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ct,me.width,me.height)}for(let me=0;me<6;me++)if(Te){nt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Fe[me].width,Fe[me].height,Ze,Pe,Fe[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Fe[me].width,Fe[me].height,0,Ze,Pe,Fe[me].data);for(let Ue=0;Ue<le.length;Ue++){const rt=le[Ue].image[me].image;nt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,rt.width,rt.height,Ze,Pe,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ct,rt.width,rt.height,0,Ze,Pe,rt.data)}}else{nt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ze,Pe,Fe[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Ze,Pe,Fe[me]);for(let Ue=0;Ue<le.length;Ue++){const Ce=le[Ue];nt?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,Ze,Pe,Ce.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ct,Ze,Pe,Ce.image[me])}}}M(R)&&y(s.TEXTURE_CUBE_MAP),fe.__version=Se.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function ye(O,R,ne,_e,Se,fe){const Oe=l.convert(ne.format,ne.colorSpace),be=l.convert(ne.type),Re=D(ne.internalFormat,Oe,be,ne.colorSpace),ut=i.get(R),Te=i.get(ne);if(Te.__renderTarget=R,!ut.__hasExternalTextures){const Fe=Math.max(1,R.width>>fe),We=Math.max(1,R.height>>fe);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,fe,Re,Fe,We,R.depth,0,Oe,be,null):t.texImage2D(Se,fe,Re,Fe,We,0,Oe,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),tt(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Se,Te.__webglTexture,0,pt(R)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Se,Te.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(O,R,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,O),R.depthBuffer){const _e=R.depthTexture,Se=_e&&_e.isDepthTexture?_e.type:null,fe=A(R.stencilBuffer,Se),Oe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=pt(R);tt(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,fe,R.width,R.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,fe,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,fe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,O)}else{const _e=R.textures;for(let Se=0;Se<_e.length;Se++){const fe=_e[Se],Oe=l.convert(fe.format,fe.colorSpace),be=l.convert(fe.type),Re=D(fe.internalFormat,Oe,be,fe.colorSpace),ut=pt(R);ne&&tt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Re,R.width,R.height):tt(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Re,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Re,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=i.get(R.depthTexture);_e.__renderTarget=R,(!_e.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ue(R.depthTexture,0);const Se=_e.__webglTexture,fe=pt(R);if(R.depthTexture.format===oo)tt(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(R.depthTexture.format===go)tt(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Ye(O){const R=i.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){const _e=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_e){const Se=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_e.removeEventListener("dispose",Se)};_e.addEventListener("dispose",Se),R.__depthDisposeCallback=Se}R.__boundDepthTexture=_e}if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Ne(R.__webglFramebuffer,O)}else if(ne){R.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[_e]),R.__webglDepthbuffer[_e]===void 0)R.__webglDepthbuffer[_e]=s.createRenderbuffer(),Ae(R.__webglDepthbuffer[_e],O,!1);else{const Se=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),Ae(R.__webglDepthbuffer,O,!1);else{const _e=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(O,R,ne){const _e=i.get(O);R!==void 0&&ye(_e.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Ye(O)}function Dt(O){const R=O.texture,ne=i.get(O),_e=i.get(R);O.addEventListener("dispose",I);const Se=O.textures,fe=O.isWebGLCubeRenderTarget===!0,Oe=Se.length>1;if(Oe||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=R.version,c.memory.textures++),fe){ne.__webglFramebuffer=[];for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer[be]=[];for(let Re=0;Re<R.mipmaps.length;Re++)ne.__webglFramebuffer[be][Re]=s.createFramebuffer()}else ne.__webglFramebuffer[be]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer=[];for(let be=0;be<R.mipmaps.length;be++)ne.__webglFramebuffer[be]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let be=0,Re=Se.length;be<Re;be++){const ut=i.get(Se[be]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),c.memory.textures++)}if(O.samples>0&&tt(O)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let be=0;be<Se.length;be++){const Re=Se[be];ne.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[be]);const ut=l.convert(Re.format,Re.colorSpace),Te=l.convert(Re.type),Fe=D(Re.internalFormat,ut,Te,Re.colorSpace,O.isXRRenderTarget===!0),We=pt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Fe,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ne.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(ne.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),ve(s.TEXTURE_CUBE_MAP,R);for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0)for(let Re=0;Re<R.mipmaps.length;Re++)ye(ne.__webglFramebuffer[be][Re],O,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re);else ye(ne.__webglFramebuffer[be],O,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);M(R)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,Re=Se.length;be<Re;be++){const ut=Se[be],Te=i.get(ut);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),ve(s.TEXTURE_2D,ut),ye(ne.__webglFramebuffer,O,ut,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),M(ut)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(be=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,_e.__webglTexture),ve(be,R),R.mipmaps&&R.mipmaps.length>0)for(let Re=0;Re<R.mipmaps.length;Re++)ye(ne.__webglFramebuffer[Re],O,R,s.COLOR_ATTACHMENT0,be,Re);else ye(ne.__webglFramebuffer,O,R,s.COLOR_ATTACHMENT0,be,0);M(R)&&y(be),t.unbindTexture()}O.depthBuffer&&Ye(O)}function ht(O){const R=O.textures;for(let ne=0,_e=R.length;ne<_e;ne++){const Se=R[ne];if(M(Se)){const fe=U(O),Oe=i.get(Se).__webglTexture;t.bindTexture(fe,Oe),y(fe),t.unbindTexture()}}}const Ht=[],k=[];function Rn(O){if(O.samples>0){if(tt(O)===!1){const R=O.textures,ne=O.width,_e=O.height;let Se=s.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=i.get(O),be=R.length>1;if(be)for(let Re=0;Re<R.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Re=0;Re<R.length;Re++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Re]);const ut=i.get(R[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,ne,_e,0,0,ne,_e,Se,s.NEAREST),h===!0&&(Ht.length=0,k.length=0,Ht.push(s.COLOR_ATTACHMENT0+Re),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ht.push(fe),k.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Re=0;Re<R.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Re]);const ut=i.get(R[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&h){const R=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function pt(O){return Math.min(a.maxSamples,O.samples)}function tt(O){const R=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ge(O){const R=c.render.frame;m.get(O)!==R&&(m.set(O,R),O.update())}function Ut(O,R){const ne=O.colorSpace,_e=O.format,Se=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==Zn&&ne!==ds&&(Rt.getTransfer(ne)===qt?(_e!==bi||Se!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),R}function He(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=re,this.resetTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=ot,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=tt}function iL(s,e){function t(i,a=ds){let l;const c=Rt.getTransfer(a);if(i===Pr)return s.UNSIGNED_BYTE;if(i===om)return s.UNSIGNED_SHORT_4_4_4_4;if(i===lm)return s.UNSIGNED_SHORT_5_5_5_1;if(i===vy)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===gy)return s.BYTE;if(i===_y)return s.SHORT;if(i===Gl)return s.UNSIGNED_SHORT;if(i===am)return s.INT;if(i===Qs)return s.UNSIGNED_INT;if(i===Hi)return s.FLOAT;if(i===ql)return s.HALF_FLOAT;if(i===xy)return s.ALPHA;if(i===yy)return s.RGB;if(i===bi)return s.RGBA;if(i===My)return s.LUMINANCE;if(i===Sy)return s.LUMINANCE_ALPHA;if(i===oo)return s.DEPTH_COMPONENT;if(i===go)return s.DEPTH_STENCIL;if(i===um)return s.RED;if(i===cm)return s.RED_INTEGER;if(i===Ey)return s.RG;if(i===fm)return s.RG_INTEGER;if(i===hm)return s.RGBA_INTEGER;if(i===Pc||i===Oc||i===Ic||i===Bc)if(c===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Pc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Pc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ic)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vp||i===xp||i===yp||i===Mp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===vp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sp||i===Ep||i===Tp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Sp||i===Ep)return c===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Tp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ap||i===bp||i===Rp||i===wp||i===Cp||i===Lp||i===Dp||i===Up||i===Np||i===Pp||i===Op||i===Ip||i===Bp||i===Fp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Ap)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Up)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Np)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Op)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ip)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fp)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fc||i===zp||i===Hp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Fc)return c===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ty||i===Vp||i===Gp||i===kp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Fc)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Vp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const rL={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const M=t.getJointPose(E,i),y=this._getHandJoint(d,E);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=m.position.distanceTo(_.position),x=.02,S=.005;d.inputState.pinching&&v>x+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(rL)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new bn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Or({vertexShader:sL,fragmentShader:aL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new tf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lL extends $s{constructor(e,t){super();const i=this;let a=null,l=1,c=null,f="local-floor",h=1,d=null,m=null,_=null,v=null,x=null,S=null;const E=new oL,M=t.getContextAttributes();let y=null,U=null;const D=[],A=[],P=new gt;let B=null;const I=new Xn;I.viewport=new Ot;const G=new Xn;G.viewport=new Ot;const L=[I,G],w=new pb;let V=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=D[Q];return he===void 0&&(he=new Xd,D[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=D[Q];return he===void 0&&(he=new Xd,D[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=D[Q];return he===void 0&&(he=new Xd,D[Q]=he),he.getHandSpace()};function re(Q){const he=A.indexOf(Q.inputSource);if(he===-1)return;const ye=D[he];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,d||c),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function de(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",ue);for(let Q=0;Q<D.length;Q++){const he=A[Q];he!==null&&(A[Q]=null,D[Q].disconnect(he))}V=null,te=null,E.reset(),e.setRenderTarget(y),x=null,v=null,_=null,a=null,U=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",de),a.addEventListener("inputsourceschange",ue),M.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(P),a.renderState.layers===void 0){const he={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new Js(x.framebufferWidth,x.framebufferHeight,{format:bi,type:Pr,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let he=null,ye=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=M.stencil?go:oo,ye=M.stencil?mo:Qs);const Ne={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};_=new XRWebGLBinding(a,t),v=_.createProjectionLayer(Ne),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Js(v.textureWidth,v.textureHeight,{format:bi,type:Pr,depthTexture:new Gy(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await a.requestReferenceSpace(f),Me.setContext(a),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ue(Q){for(let he=0;he<Q.removed.length;he++){const ye=Q.removed[he],Ae=A.indexOf(ye);Ae>=0&&(A[Ae]=null,D[Ae].disconnect(ye))}for(let he=0;he<Q.added.length;he++){const ye=Q.added[he];let Ae=A.indexOf(ye);if(Ae===-1){for(let Ye=0;Ye<D.length;Ye++)if(Ye>=A.length){A.push(ye),Ae=Ye;break}else if(A[Ye]===null){A[Ye]=ye,Ae=Ye;break}if(Ae===-1)break}const Ne=D[Ae];Ne&&Ne.connect(ye)}}const z=new F,j=new F;function Y(Q,he,ye){z.setFromMatrixPosition(he.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const Ae=z.distanceTo(j),Ne=he.projectionMatrix.elements,Ye=ye.projectionMatrix.elements,ot=Ne[14]/(Ne[10]-1),Dt=Ne[14]/(Ne[10]+1),ht=(Ne[9]+1)/Ne[5],Ht=(Ne[9]-1)/Ne[5],k=(Ne[8]-1)/Ne[0],Rn=(Ye[8]+1)/Ye[0],pt=ot*k,tt=ot*Rn,Ge=Ae/(-k+Rn),Ut=Ge*-k;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ut),Q.translateZ(Ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const He=ot+Ge,O=Dt+Ge,R=pt-Ut,ne=tt+(Ae-Ut),_e=ht*Dt/O*He,Se=Ht*Dt/O*He;Q.projectionMatrix.makePerspective(R,ne,_e,Se,He,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function xe(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let he=Q.near,ye=Q.far;E.texture!==null&&(E.depthNear>0&&(he=E.depthNear),E.depthFar>0&&(ye=E.depthFar)),w.near=G.near=I.near=he,w.far=G.far=I.far=ye,(V!==w.near||te!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,te=w.far),I.layers.mask=Q.layers.mask|2,G.layers.mask=Q.layers.mask|4,w.layers.mask=I.layers.mask|G.layers.mask;const Ae=Q.parent,Ne=w.cameras;xe(w,Ae);for(let Ye=0;Ye<Ne.length;Ye++)xe(Ne[Ye],Ae);Ne.length===2?Y(w,I,G):w.projectionMatrix.copy(I.projectionMatrix),N(Q,w,Ae)};function N(Q,he,ye){ye===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_o*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(Q){h=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(w)};let ee=null;function ve(Q,he){if(m=he.getViewerPose(d||c),S=he,m!==null){const ye=m.views;x!==null&&(e.setRenderTargetFramebuffer(U,x.framebuffer),e.setRenderTarget(U));let Ae=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,Ae=!0);for(let Ye=0;Ye<ye.length;Ye++){const ot=ye[Ye];let Dt=null;if(x!==null)Dt=x.getViewport(ot);else{const Ht=_.getViewSubImage(v,ot);Dt=Ht.viewport,Ye===0&&(e.setRenderTargetTextures(U,Ht.colorTexture,v.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(U))}let ht=L[Ye];ht===void 0&&(ht=new Xn,ht.layers.enable(Ye),ht.viewport=new Ot,L[Ye]=ht),ht.matrix.fromArray(ot.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ot.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ye===0&&(w.matrix.copy(ht.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ae===!0&&w.cameras.push(ht)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ye=_.getDepthInformation(ye[0]);Ye&&Ye.isValid&&Ye.texture&&E.init(e,Ye,a.renderState)}}for(let ye=0;ye<D.length;ye++){const Ae=A[ye],Ne=D[ye];Ae!==null&&Ne!==void 0&&Ne.update(Ae,he,d||c)}ee&&ee(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),S=null}const Me=new Zy;Me.setAnimationLoop(ve),this.setAnimationLoop=function(Q){ee=Q},this.dispose=function(){}}}const Hs=new pi,uL=new $e;function cL(s,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function i(M,y){y.color.getRGB(M.fogColor.value,Py(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function a(M,y,U,D,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(M,y):y.isMeshToonMaterial?(l(M,y),_(M,y)):y.isMeshPhongMaterial?(l(M,y),m(M,y)):y.isMeshStandardMaterial?(l(M,y),v(M,y),y.isMeshPhysicalMaterial&&x(M,y,A)):y.isMeshMatcapMaterial?(l(M,y),S(M,y)):y.isMeshDepthMaterial?l(M,y):y.isMeshDistanceMaterial?(l(M,y),E(M,y)):y.isMeshNormalMaterial?l(M,y):y.isLineBasicMaterial?(c(M,y),y.isLineDashedMaterial&&f(M,y)):y.isPointsMaterial?h(M,y,U,D):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Yn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Yn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const U=e.get(y),D=U.envMap,A=U.envMapRotation;D&&(M.envMap.value=D,Hs.copy(A),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),M.envMapRotation.value.setFromMatrix4(uL.makeRotationFromEuler(Hs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function f(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function h(M,y,U,D){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*U,M.scale.value=D*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,U){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,y){y.matcap&&(M.matcap.value=y.matcap)}function E(M,y){const U=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function fL(s,e,t,i){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,D){const A=D.program;i.uniformBlockBinding(U,A)}function d(U,D){let A=a[U.id];A===void 0&&(S(U),A=m(U),a[U.id]=A,U.addEventListener("dispose",M));const P=D.program;i.updateUBOMapping(U,P);const B=e.render.frame;l[U.id]!==B&&(v(U),l[U.id]=B)}function m(U){const D=_();U.__bindingPointIndex=D;const A=s.createBuffer(),P=U.__size,B=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,P,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,A),A}function _(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const D=a[U.id],A=U.uniforms,P=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let B=0,I=A.length;B<I;B++){const G=Array.isArray(A[B])?A[B]:[A[B]];for(let L=0,w=G.length;L<w;L++){const V=G[L];if(x(V,B,L,P)===!0){const te=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let de=0;for(let ue=0;ue<re.length;ue++){const z=re[ue],j=E(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,te+de,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,de),de+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(U,D,A,P){const B=U.value,I=D+"_"+A;if(P[I]===void 0)return typeof B=="number"||typeof B=="boolean"?P[I]=B:P[I]=B.clone(),!0;{const G=P[I];if(typeof B=="number"||typeof B=="boolean"){if(G!==B)return P[I]=B,!0}else if(G.equals(B)===!1)return G.copy(B),!0}return!1}function S(U){const D=U.uniforms;let A=0;const P=16;for(let I=0,G=D.length;I<G;I++){const L=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,V=L.length;w<V;w++){const te=L[w],re=Array.isArray(te.value)?te.value:[te.value];for(let de=0,ue=re.length;de<ue;de++){const z=re[de],j=E(z),Y=A%P,xe=Y%j.boundary,N=Y+xe;A+=xe,N!==0&&P-N<j.storage&&(A+=P-N),te.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=A,A+=j.storage}}}const B=A%P;return B>0&&(A+=P-B),U.__size=A,U.__cache={},this}function E(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function M(U){const D=U.target;D.removeEventListener("dispose",M);const A=c.indexOf(D.__bindingPointIndex);c.splice(A,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function y(){for(const U in a)s.deleteBuffer(a[U]);c=[],a={},l={}}return{bind:h,update:d,dispose:y}}class hL{constructor(e={}){const{canvas:t=dA(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const S=new Uint32Array(4),E=new Int32Array(4);let M=null,y=null;const U=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=_s,this.toneMappingExposure=1;const A=this;let P=!1,B=0,I=0,G=null,L=-1,w=null;const V=new Ot,te=new Ot;let re=null;const de=new qe(0);let ue=0,z=t.width,j=t.height,Y=1,xe=null,N=null;const ee=new Ot(0,0,z,j),ve=new Ot(0,0,z,j);let Me=!1;const Q=new _m;let he=!1,ye=!1;const Ae=new $e,Ne=new $e,Ye=new F,ot=new Ot,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Ht(){return G===null?Y:1}let k=i;function Rn(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ks}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),k===null){const q="webgl2";if(k=Rn(q,C),k===null)throw Rn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,tt,Ge,Ut,He,O,R,ne,_e,Se,fe,Oe,be,Re,ut,Te,Fe,We,Ze,Pe,ct,nt,Nt,X;function Le(){pt=new M1(k),pt.init(),nt=new iL(k,pt),tt=new m1(k,pt,e,nt),Ge=new tL(k,pt),tt.reverseDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),Ut=new T1(k),He=new GC,O=new nL(k,pt,Ge,He,tt,nt,Ut),R=new _1(A),ne=new y1(A),_e=new Db(k),Nt=new d1(k,_e),Se=new S1(k,_e,Ut,Nt),fe=new b1(k,Se,_e,Ut),Ze=new A1(k,tt,O),Te=new g1(He),Oe=new VC(A,R,ne,pt,tt,Nt,Te),be=new cL(A,He),Re=new WC,ut=new KC(pt),We=new h1(A,R,ne,Ge,fe,x,h),Fe=new $C(A,fe,tt),X=new fL(k,Ut,tt,Ge),Pe=new p1(k,pt,Ut),ct=new E1(k,pt,Ut),Ut.programs=Oe.programs,A.capabilities=tt,A.extensions=pt,A.properties=He,A.renderLists=Re,A.shadowMap=Fe,A.state=Ge,A.info=Ut}Le();const le=new lL(A,k);this.xr=le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(z,j,!1))},this.getSize=function(C){return C.set(z,j)},this.setSize=function(C,q,ae=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,j=q,t.width=Math.floor(C*Y),t.height=Math.floor(q*Y),ae===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(z*Y,j*Y).floor()},this.setDrawingBufferSize=function(C,q,ae){z=C,j=q,Y=ae,t.width=Math.floor(C*ae),t.height=Math.floor(q*ae),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,q,ae,oe){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,q,ae,oe),Ge.viewport(V.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(ve)},this.setScissor=function(C,q,ae,oe){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,q,ae,oe),Ge.scissor(te.copy(ve).multiplyScalar(Y).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){Ge.setScissorTest(Me=C)},this.setOpaqueSort=function(C){xe=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(C=!0,q=!0,ae=!0){let oe=0;if(C){let K=!1;if(G!==null){const Ee=G.texture.format;K=Ee===hm||Ee===fm||Ee===cm}if(K){const Ee=G.texture.type,De=Ee===Pr||Ee===Qs||Ee===Gl||Ee===mo||Ee===om||Ee===lm,Be=We.getClearColor(),Ie=We.getClearAlpha(),et=Be.r,st=Be.g,Ve=Be.b;De?(S[0]=et,S[1]=st,S[2]=Ve,S[3]=Ie,k.clearBufferuiv(k.COLOR,0,S)):(E[0]=et,E[1]=st,E[2]=Ve,E[3]=Ie,k.clearBufferiv(k.COLOR,0,E))}else oe|=k.COLOR_BUFFER_BIT}q&&(oe|=k.DEPTH_BUFFER_BIT),ae&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),We.dispose(),Re.dispose(),ut.dispose(),He.dispose(),R.dispose(),ne.dispose(),fe.dispose(),Nt.dispose(),X.dispose(),Oe.dispose(),le.dispose(),le.removeEventListener("sessionstart",en),le.removeEventListener("sessionend",mn),Nn.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=Ut.autoReset,q=Fe.enabled,ae=Fe.autoUpdate,oe=Fe.needsUpdate,K=Fe.type;Le(),Ut.autoReset=C,Fe.enabled=q,Fe.autoUpdate=ae,Fe.needsUpdate=oe,Fe.type=K}function Ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function rt(C){const q=C.target;q.removeEventListener("dispose",rt),Vt(q)}function Vt(C){Qt(C),He.remove(C)}function Qt(C){const q=He.get(C).programs;q!==void 0&&(q.forEach(function(ae){Oe.releaseProgram(ae)}),C.isShaderMaterial&&Oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ae,oe,K,Ee){q===null&&(q=Dt);const De=K.isMesh&&K.matrixWorld.determinant()<0,Be=sr(C,q,ae,oe,K);Ge.setMaterial(oe,De);let Ie=ae.index,et=1;if(oe.wireframe===!0){if(Ie=Se.getWireframeAttribute(ae),Ie===void 0)return;et=2}const st=ae.drawRange,Ve=ae.attributes.position;let vt=st.start*et,At=(st.start+st.count)*et;Ee!==null&&(vt=Math.max(vt,Ee.start*et),At=Math.min(At,(Ee.start+Ee.count)*et)),Ie!==null?(vt=Math.max(vt,0),At=Math.min(At,Ie.count)):Ve!=null&&(vt=Math.max(vt,0),At=Math.min(At,Ve.count));const nn=At-vt;if(nn<0||nn===1/0)return;Nt.setup(K,oe,Be,ae,Ie);let Kt,at=Pe;if(Ie!==null&&(Kt=_e.get(Ie),at=ct,at.setIndex(Kt)),K.isMesh)oe.wireframe===!0?(Ge.setLineWidth(oe.wireframeLinewidth*Ht()),at.setMode(k.LINES)):at.setMode(k.TRIANGLES);else if(K.isLine){let je=oe.linewidth;je===void 0&&(je=1),Ge.setLineWidth(je*Ht()),K.isLineSegments?at.setMode(k.LINES):K.isLineLoop?at.setMode(k.LINE_LOOP):at.setMode(k.LINE_STRIP)}else K.isPoints?at.setMode(k.POINTS):K.isSprite&&at.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)at.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))at.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const je=K._multiDrawStarts,gn=K._multiDrawCounts,Et=K._multiDrawCount,Kn=Ie?_e.get(Ie).bytesPerElement:1,Di=He.get(oe).currentProgram.getUniforms();for(let Hn=0;Hn<Et;Hn++)Di.setValue(k,"_gl_DrawID",Hn),at.render(je[Hn]/Kn,gn[Hn])}else if(K.isInstancedMesh)at.renderInstances(vt,nn,K.count);else if(ae.isInstancedBufferGeometry){const je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,gn=Math.min(ae.instanceCount,je);at.renderInstances(vt,nn,gn)}else at.render(vt,nn)};function Tt(C,q,ae){C.transparent===!0&&C.side===Ai&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,Wi(C,q,ae),C.side=Nr,C.needsUpdate=!0,Wi(C,q,ae),C.side=Ai):Wi(C,q,ae)}this.compile=function(C,q,ae=null){ae===null&&(ae=C),y=ut.get(ae),y.init(q),D.push(y),ae.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),C!==ae&&C.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const oe=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Be=Ee[De];Tt(Be,ae,K),oe.add(Be)}else Tt(Ee,ae,K),oe.add(Ee)}),D.pop(),y=null,oe},this.compileAsync=function(C,q,ae=null){const oe=this.compile(C,q,ae);return new Promise(K=>{function Ee(){if(oe.forEach(function(De){He.get(De).currentProgram.isReady()&&oe.delete(De)}),oe.size===0){K(C);return}setTimeout(Ee,10)}pt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let zn=null;function cn(C){zn&&zn(C)}function en(){Nn.stop()}function mn(){Nn.start()}const Nn=new Zy;Nn.setAnimationLoop(cn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(C){zn=C,le.setAnimationLoop(C),C===null?Nn.stop():Nn.start()},le.addEventListener("sessionstart",en),le.addEventListener("sessionend",mn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(q),q=le.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,q,G),y=ut.get(C,D.length),y.init(q),D.push(y),Ne.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Ne),ye=this.localClippingEnabled,he=Te.init(this.clippingPlanes,ye),M=Re.get(C,U.length),M.init(),U.push(M),le.enabled===!0&&le.isPresenting===!0){const Ee=A.xr.getDepthSensingMesh();Ee!==null&&rr(Ee,q,-1/0,A.sortObjects)}rr(C,q,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(xe,N),ht=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ht&&We.addToRenderList(M,C),this.info.render.frame++,he===!0&&Te.beginShadows();const ae=y.state.shadowsArray;Fe.render(ae,C,q),he===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=M.opaque,K=M.transmissive;if(y.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(K.length>0)for(let De=0,Be=Ee.length;De<Be;De++){const Ie=Ee[De];na(oe,K,C,Ie)}ht&&We.render(C);for(let De=0,Be=Ee.length;De<Be;De++){const Ie=Ee[De];ta(M,C,Ie,Ie.viewport)}}else K.length>0&&na(oe,K,C,q),ht&&We.render(C),ta(M,C,q);G!==null&&(O.updateMultisampleRenderTarget(G),O.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(A,C,q),Nt.resetDefaultState(),L=-1,w=null,D.pop(),D.length>0?(y=D[D.length-1],he===!0&&Te.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?M=U[U.length-1]:M=null};function rr(C,q,ae,oe){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){oe&&ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ne);const De=fe.update(C),Be=C.material;Be.visible&&M.push(C,De,Be,ae,ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const De=fe.update(C),Be=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ot.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ot.copy(De.boundingSphere.center)),ot.applyMatrix4(C.matrixWorld).applyMatrix4(Ne)),Array.isArray(Be)){const Ie=De.groups;for(let et=0,st=Ie.length;et<st;et++){const Ve=Ie[et],vt=Be[Ve.materialIndex];vt&&vt.visible&&M.push(C,De,vt,ae,ot.z,Ve)}}else Be.visible&&M.push(C,De,Be,ae,ot.z,null)}}const Ee=C.children;for(let De=0,Be=Ee.length;De<Be;De++)rr(Ee[De],q,ae,oe)}function ta(C,q,ae,oe){const K=C.opaque,Ee=C.transmissive,De=C.transparent;y.setupLightsView(ae),he===!0&&Te.setGlobalState(A.clippingPlanes,ae),oe&&Ge.viewport(V.copy(oe)),K.length>0&&Ri(K,q,ae),Ee.length>0&&Ri(Ee,q,ae),De.length>0&&Ri(De,q,ae),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function na(C,q,ae,oe){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[oe.id]===void 0&&(y.state.transmissionRenderTarget[oe.id]=new Js(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ql:Pr,minFilter:Cr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Ee=y.state.transmissionRenderTarget[oe.id],De=oe.viewport||V;Ee.setSize(De.z,De.w);const Be=A.getRenderTarget();A.setRenderTarget(Ee),A.getClearColor(de),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),ht&&We.render(ae);const Ie=A.toneMapping;A.toneMapping=_s;const et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),y.setupLightsView(oe),he===!0&&Te.setGlobalState(A.clippingPlanes,oe),Ri(C,ae,oe),O.updateMultisampleRenderTarget(Ee),O.updateRenderTargetMipmap(Ee),pt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ve=0,vt=q.length;Ve<vt;Ve++){const At=q[Ve],nn=At.object,Kt=At.geometry,at=At.material,je=At.group;if(at.side===Ai&&nn.layers.test(oe.layers)){const gn=at.side;at.side=Yn,at.needsUpdate=!0,wi(nn,ae,oe,Kt,at,je),at.side=gn,at.needsUpdate=!0,st=!0}}st===!0&&(O.updateMultisampleRenderTarget(Ee),O.updateRenderTargetMipmap(Ee))}A.setRenderTarget(Be),A.setClearColor(de,ue),et!==void 0&&(oe.viewport=et),A.toneMapping=Ie}function Ri(C,q,ae){const oe=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Ee=C.length;K<Ee;K++){const De=C[K],Be=De.object,Ie=De.geometry,et=oe===null?De.material:oe,st=De.group;Be.layers.test(ae.layers)&&wi(Be,q,ae,Ie,et,st)}}function wi(C,q,ae,oe,K,Ee){C.onBeforeRender(A,q,ae,oe,K,Ee),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(A,q,ae,oe,C,Ee),K.transparent===!0&&K.side===Ai&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,A.renderBufferDirect(ae,q,oe,K,C,Ee),K.side=Nr,K.needsUpdate=!0,A.renderBufferDirect(ae,q,oe,K,C,Ee),K.side=Ai):A.renderBufferDirect(ae,q,oe,K,C,Ee),C.onAfterRender(A,q,ae,oe,K,Ee)}function Wi(C,q,ae){q.isScene!==!0&&(q=Dt);const oe=He.get(C),K=y.state.lights,Ee=y.state.shadowsArray,De=K.state.version,Be=Oe.getParameters(C,K.state,Ee,q,ae),Ie=Oe.getProgramCacheKey(Be);let et=oe.programs;oe.environment=C.isMeshStandardMaterial?q.environment:null,oe.fog=q.fog,oe.envMap=(C.isMeshStandardMaterial?ne:R).get(C.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",rt),et=new Map,oe.programs=et);let st=et.get(Ie);if(st!==void 0){if(oe.currentProgram===st&&oe.lightsStateVersion===De)return Xi(C,Be),st}else Be.uniforms=Oe.getUniforms(C),C.onBeforeCompile(Be,A),st=Oe.acquireProgram(Be,Ie),et.set(Ie,st),oe.uniforms=Be.uniforms;const Ve=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Te.uniform),Xi(C,Be),oe.needsLights=tn(C),oe.lightsStateVersion=De,oe.needsLights&&(Ve.ambientLightColor.value=K.state.ambient,Ve.lightProbe.value=K.state.probe,Ve.directionalLights.value=K.state.directional,Ve.directionalLightShadows.value=K.state.directionalShadow,Ve.spotLights.value=K.state.spot,Ve.spotLightShadows.value=K.state.spotShadow,Ve.rectAreaLights.value=K.state.rectArea,Ve.ltc_1.value=K.state.rectAreaLTC1,Ve.ltc_2.value=K.state.rectAreaLTC2,Ve.pointLights.value=K.state.point,Ve.pointLightShadows.value=K.state.pointShadow,Ve.hemisphereLights.value=K.state.hemi,Ve.directionalShadowMap.value=K.state.directionalShadowMap,Ve.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ve.spotShadowMap.value=K.state.spotShadowMap,Ve.spotLightMatrix.value=K.state.spotLightMatrix,Ve.spotLightMap.value=K.state.spotLightMap,Ve.pointShadowMap.value=K.state.pointShadowMap,Ve.pointShadowMatrix.value=K.state.pointShadowMatrix),oe.currentProgram=st,oe.uniformsList=null,st}function Ci(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=zc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Xi(C,q){const ae=He.get(C);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function sr(C,q,ae,oe,K){q.isScene!==!0&&(q=Dt),O.resetTextureUnits();const Ee=q.fog,De=oe.isMeshStandardMaterial?q.environment:null,Be=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Zn,Ie=(oe.isMeshStandardMaterial?ne:R).get(oe.envMap||De),et=oe.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ve=!!ae.morphAttributes.position,vt=!!ae.morphAttributes.normal,At=!!ae.morphAttributes.color;let nn=_s;oe.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(nn=A.toneMapping);const Kt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,at=Kt!==void 0?Kt.length:0,je=He.get(oe),gn=y.state.lights;if(he===!0&&(ye===!0||C!==w)){const rn=C===w&&oe.id===L;Te.setState(oe,C,rn)}let Et=!1;oe.version===je.__version?(je.needsLights&&je.lightsStateVersion!==gn.state.version||je.outputColorSpace!==Be||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isBatchedMesh&&je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==Ie||oe.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Te.numPlanes||je.numIntersection!==Te.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==st||je.morphTargets!==Ve||je.morphNormals!==vt||je.morphColors!==At||je.toneMapping!==nn||je.morphTargetsCount!==at)&&(Et=!0):(Et=!0,je.__version=oe.version);let Kn=je.currentProgram;Et===!0&&(Kn=Wi(oe,q,K));let Di=!1,Hn=!1,Mn=!1;const Gt=Kn.getUniforms(),Vn=je.uniforms;if(Ge.useProgram(Kn.program)&&(Di=!0,Hn=!0,Mn=!0),oe.id!==L&&(L=oe.id,Hn=!0),Di||w!==C){Ge.buffers.depth.getReversed()?(Ae.copy(C.projectionMatrix),mA(Ae),gA(Ae),Gt.setValue(k,"projectionMatrix",Ae)):Gt.setValue(k,"projectionMatrix",C.projectionMatrix),Gt.setValue(k,"viewMatrix",C.matrixWorldInverse);const wn=Gt.map.cameraPosition;wn!==void 0&&wn.setValue(k,Ye.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&Gt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Gt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Hn=!0,Mn=!0)}if(K.isSkinnedMesh){Gt.setOptional(k,K,"bindMatrix"),Gt.setOptional(k,K,"bindMatrixInverse");const rn=K.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Gt.setValue(k,"boneTexture",rn.boneTexture,O))}K.isBatchedMesh&&(Gt.setOptional(k,K,"batchingTexture"),Gt.setValue(k,"batchingTexture",K._matricesTexture,O),Gt.setOptional(k,K,"batchingIdTexture"),Gt.setValue(k,"batchingIdTexture",K._indirectTexture,O),Gt.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Gt.setValue(k,"batchingColorTexture",K._colorsTexture,O));const Pn=ae.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ze.update(K,ae,Kn),(Hn||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Gt.setValue(k,"receiveShadow",K.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Vn.envMap.value=Ie,Vn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&q.environment!==null&&(Vn.envMapIntensity.value=q.environmentIntensity),Hn&&(Gt.setValue(k,"toneMappingExposure",A.toneMappingExposure),je.needsLights&&Li(Vn,Mn),Ee&&oe.fog===!0&&be.refreshFogUniforms(Vn,Ee),be.refreshMaterialUniforms(Vn,oe,Y,j,y.state.transmissionRenderTarget[C.id]),zc.upload(k,Ci(je),Vn,O)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(zc.upload(k,Ci(je),Vn,O),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Gt.setValue(k,"center",K.center),Gt.setValue(k,"modelViewMatrix",K.modelViewMatrix),Gt.setValue(k,"normalMatrix",K.normalMatrix),Gt.setValue(k,"modelMatrix",K.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const rn=oe.uniformsGroups;for(let wn=0,ra=rn.length;wn<ra;wn++){const Qn=rn[wn];X.update(Qn,Kn),X.bind(Qn,Kn)}}return Kn}function Li(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function tn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,q,ae){He.get(C.texture).__webglTexture=q,He.get(C.depthTexture).__webglTexture=ae;const oe=He.get(C);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ae===void 0,oe.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const ae=He.get(C);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ae=0){G=C,B=q,I=ae;let oe=!0,K=null,Ee=!1,De=!1;if(C){const Ie=He.get(C);if(Ie.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(k.FRAMEBUFFER,null),oe=!1;else if(Ie.__webglFramebuffer===void 0)O.setupRenderTarget(C);else if(Ie.__hasExternalTextures)O.rebindTextures(C,He.get(C.texture).__webglTexture,He.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ve=C.depthTexture;if(Ie.__boundDepthTexture!==Ve){if(Ve!==null&&He.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(De=!0);const st=He.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[q])?K=st[q][ae]:K=st[q],Ee=!0):C.samples>0&&O.useMultisampledRTT(C)===!1?K=He.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?K=st[ae]:K=st,V.copy(C.viewport),te.copy(C.scissor),re=C.scissorTest}else V.copy(ee).multiplyScalar(Y).floor(),te.copy(ve).multiplyScalar(Y).floor(),re=Me;if(Ge.bindFramebuffer(k.FRAMEBUFFER,K)&&oe&&Ge.drawBuffers(C,K),Ge.viewport(V),Ge.scissor(te),Ge.setScissorTest(re),Ee){const Ie=He.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ae)}else if(De){const Ie=He.get(C.texture),et=q||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,ae||0,et)}L=-1},this.readRenderTargetPixels=function(C,q,ae,oe,K,Ee,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Ge.bindFramebuffer(k.FRAMEBUFFER,Be);try{const Ie=C.texture,et=Ie.format,st=Ie.type;if(!tt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-oe&&ae>=0&&ae<=C.height-K&&k.readPixels(q,ae,oe,K,nt.convert(et),nt.convert(st),Ee)}finally{const Ie=G!==null?He.get(G).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(C,q,ae,oe,K,Ee,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){const Ie=C.texture,et=Ie.format,st=Ie.type;if(!tt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-oe&&ae>=0&&ae<=C.height-K){Ge.bindFramebuffer(k.FRAMEBUFFER,Be);const Ve=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),k.readPixels(q,ae,oe,K,nt.convert(et),nt.convert(st),0);const vt=G!==null?He.get(G).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,vt);const At=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await pA(k,At,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.deleteBuffer(Ve),k.deleteSync(At),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,ae=0){C.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const oe=Math.pow(2,-ae),K=Math.floor(C.image.width*oe),Ee=Math.floor(C.image.height*oe),De=q!==null?q.x:0,Be=q!==null?q.y:0;O.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ae,0,0,De,Be,K,Ee),Ge.unbindTexture()};const ia=k.createFramebuffer(),ar=k.createFramebuffer();this.copyTextureToTexture=function(C,q,ae=null,oe=null,K=0,Ee=null){C.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,C=arguments[1],q=arguments[2],Ee=arguments[3]||0,ae=null),Ee===null&&(K!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=K,K=0):Ee=0);let De,Be,Ie,et,st,Ve,vt,At,nn;const Kt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(ae!==null)De=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,Ie=ae.isBox3?ae.max.z-ae.min.z:1,et=ae.min.x,st=ae.min.y,Ve=ae.isBox3?ae.min.z:0;else{const Pn=Math.pow(2,-K);De=Math.floor(Kt.width*Pn),Be=Math.floor(Kt.height*Pn),C.isDataArrayTexture?Ie=Kt.depth:C.isData3DTexture?Ie=Math.floor(Kt.depth*Pn):Ie=1,et=0,st=0,Ve=0}oe!==null?(vt=oe.x,At=oe.y,nn=oe.z):(vt=0,At=0,nn=0);const at=nt.convert(q.format),je=nt.convert(q.type);let gn;q.isData3DTexture?(O.setTexture3D(q,0),gn=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(O.setTexture2DArray(q,0),gn=k.TEXTURE_2D_ARRAY):(O.setTexture2D(q,0),gn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const Et=k.getParameter(k.UNPACK_ROW_LENGTH),Kn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Di=k.getParameter(k.UNPACK_SKIP_PIXELS),Hn=k.getParameter(k.UNPACK_SKIP_ROWS),Mn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Kt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Kt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ve);const Gt=C.isDataArrayTexture||C.isData3DTexture,Vn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Pn=He.get(C),rn=He.get(q),wn=He.get(Pn.__renderTarget),ra=He.get(rn.__renderTarget);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,ra.__webglFramebuffer);for(let Qn=0;Qn<Ie;Qn++)Gt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.get(C).__webglTexture,K,Ve+Qn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.get(q).__webglTexture,Ee,nn+Qn)),k.blitFramebuffer(et,st,De,Be,vt,At,De,Be,k.DEPTH_BUFFER_BIT,k.NEAREST);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||He.has(C)){const Pn=He.get(C),rn=He.get(q);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,ia),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,ar);for(let wn=0;wn<Ie;wn++)Gt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pn.__webglTexture,K,Ve+wn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pn.__webglTexture,K),Vn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rn.__webglTexture,Ee,nn+wn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rn.__webglTexture,Ee),K!==0?k.blitFramebuffer(et,st,De,Be,vt,At,De,Be,k.COLOR_BUFFER_BIT,k.NEAREST):Vn?k.copyTexSubImage3D(gn,Ee,vt,At,nn+wn,et,st,De,Be):k.copyTexSubImage2D(gn,Ee,vt,At,et,st,De,Be);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Vn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(gn,Ee,vt,At,nn,De,Be,Ie,at,je,Kt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(gn,Ee,vt,At,nn,De,Be,Ie,at,Kt.data):k.texSubImage3D(gn,Ee,vt,At,nn,De,Be,Ie,at,je,Kt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ee,vt,At,De,Be,at,je,Kt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ee,vt,At,Kt.width,Kt.height,at,Kt.data):k.texSubImage2D(k.TEXTURE_2D,Ee,vt,At,De,Be,at,je,Kt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Et),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Kn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Di),k.pixelStorei(k.UNPACK_SKIP_ROWS,Hn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Mn),Ee===0&&q.generateMipmaps&&k.generateMipmap(gn),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ae=null,oe=null,K=0){return C.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,oe=arguments[1]||null,C=arguments[2],q=arguments[3],K=arguments[4]||0),eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,ae,oe,K)},this.initRenderTarget=function(C){He.get(C).__webglFramebuffer===void 0&&O.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){B=0,I=0,G=null,Ge.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}class dL{constructor(e){xl(this,"activeExpression",null);this.model=e}setEmotion(e){this.activeExpression=e}update(){}reset(){this.activeExpression=null}}class pL{constructor(e){this.model=e}updateFromAudioLevel(e){}}function Ax(s,e){if(e===zT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wp||e===Ay){let t=s.getIndex();if(t===null){const c=[],f=s.getAttribute("position");if(f!==void 0){for(let h=0;h<f.count;h++)c.push(h);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,a=[];if(e===Wp)for(let c=1;c<=i;c++)a.push(t.getX(0)),a.push(t.getX(c)),a.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(a.push(t.getX(c)),a.push(t.getX(c+1)),a.push(t.getX(c+2))):(a.push(t.getX(c+2)),a.push(t.getX(c+1)),a.push(t.getX(c)));a.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=s.clone();return l.setIndex(a),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class mL extends Ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yL(t)}),this.register(function(t){return new ML(t)}),this.register(function(t){return new LL(t)}),this.register(function(t){return new DL(t)}),this.register(function(t){return new UL(t)}),this.register(function(t){return new EL(t)}),this.register(function(t){return new TL(t)}),this.register(function(t){return new AL(t)}),this.register(function(t){return new bL(t)}),this.register(function(t){return new xL(t)}),this.register(function(t){return new RL(t)}),this.register(function(t){return new SL(t)}),this.register(function(t){return new CL(t)}),this.register(function(t){return new wL(t)}),this.register(function(t){return new _L(t)}),this.register(function(t){return new NL(t)}),this.register(function(t){return new PL(t)})}load(e,t,i,a){const l=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=Vl.extractUrlBase(e);c=Vl.resolveURL(d,this.path)}else c=Vl.extractUrlBase(e);this.manager.itemStart(e);const f=function(d){a?a(d):console.error(d),l.manager.itemError(e),l.manager.itemEnd(e)},h=new qy(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{l.parse(d,c,function(m){t(m),l.manager.itemEnd(e)},f)}catch(m){f(m)}},i,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,a){let l;const c={},f={},h=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===eM){try{c[St.KHR_BINARY_GLTF]=new OL(e)}catch(_){a&&a(_);return}l=JSON.parse(c[St.KHR_BINARY_GLTF].content)}else l=JSON.parse(h.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new jL(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const _=this.pluginCallbacks[m](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[_.name]=_,c[_.name]=!0}if(l.extensionsUsed)for(let m=0;m<l.extensionsUsed.length;++m){const _=l.extensionsUsed[m],v=l.extensionsRequired||[];switch(_){case St.KHR_MATERIALS_UNLIT:c[_]=new vL;break;case St.KHR_DRACO_MESH_COMPRESSION:c[_]=new IL(l,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:c[_]=new BL;break;case St.KHR_MESH_QUANTIZATION:c[_]=new FL;break;default:v.indexOf(_)>=0&&f[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(c),d.setPlugins(f),d.parse(i,a)}parseAsync(e,t){const i=this;return new Promise(function(a,l){i.parse(e,t,a,l)})}}function gL(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _L{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,a=t.length;i<a;i++){const l=t[i];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let a=t.cache.get(i);if(a)return a;const l=t.json,h=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let d;const m=new qe(16777215);h.color!==void 0&&m.setRGB(h.color[0],h.color[1],h.color[2],Zn);const _=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new jy(m),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new cb(m),d.distance=_;break;case"spot":d=new lb(m),d.distance=_,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),d.decay=2,wr(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),a=Promise.resolve(d),t.cache.add(i,a),a}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,l=i.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(h){return i._getNodeRef(t.cache,f,h)})}}class vL{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Dr}extendParams(e,t,i){const a=[];e.color=new qe(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const c=l.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Zn),e.opacity=c[3]}l.baseColorTexture!==void 0&&a.push(i.assignTexture(e,"map",l.baseColorTexture,Un))}return Promise.all(a)}}class xL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const a=this.parser.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=a.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class yL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&l.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&l.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(l.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const f=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new gt(f,f)}return Promise.all(l)}}class ML{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const a=this.parser.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=a.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class SL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&l.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&l.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(l)}}class EL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=a.extensions[this.name];if(c.sheenColorFactor!==void 0){const f=c.sheenColorFactor;t.sheenColor.setRGB(f[0],f[1],f[2],Zn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&l.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,Un)),c.sheenRoughnessTexture!==void 0&&l.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(l)}}class TL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&l.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(l)}}class AL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&l.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const f=c.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(f[0],f[1],f[2],Zn),Promise.all(l)}}class bL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const a=this.parser.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=a.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class RL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&l.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const f=c.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(f[0],f[1],f[2],Zn),c.specularColorTexture!==void 0&&l.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,Un)),Promise.all(l)}}class wL{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&l.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(l)}}class CL{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&l.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(l)}}class LL{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,a=i.textures[e];if(!a.extensions||!a.extensions[this.name])return null;const l=a.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,c)}}class DL{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,a=i.json,l=a.textures[e];if(!l.extensions||!l.extensions[t])return null;const c=l.extensions[t],f=a.images[c.source];let h=i.textureLoader;if(f.uri){const d=i.options.manager.getHandler(f.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,h);if(a.extensionsRequired&&a.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UL{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,a=i.json,l=a.textures[e];if(!l.extensions||!l.extensions[t])return null;const c=l.extensions[t],f=a.images[c.source];let h=i.textureLoader;if(f.uri){const d=i.options.manager.getHandler(f.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,h);if(a.extensionsRequired&&a.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NL{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const a=i.extensions[this.name],l=this.parser.getDependency("buffer",a.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const h=a.byteOffset||0,d=a.byteLength||0,m=a.count,_=a.byteStride,v=new Uint8Array(f,h,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,_,v,a.mode,a.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(m*_);return c.decodeGltfBuffer(new Uint8Array(x),m,_,v,a.mode,a.filter),x})})}else return null}}class PL{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const a=t.meshes[i.mesh];for(const d of a.primitives)if(d.mode!==Ti.TRIANGLES&&d.mode!==Ti.TRIANGLE_STRIP&&d.mode!==Ti.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,f=[],h={};for(const d in c)f.push(this.parser.getDependency("accessor",c[d]).then(m=>(h[d]=m,h[d])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(d=>{const m=d.pop(),_=m.isGroup?m.children:[m],v=d[0].count,x=[];for(const S of _){const E=new $e,M=new F,y=new lt,U=new F(1,1,1),D=new kA(S.geometry,S.material,v);for(let A=0;A<v;A++)h.TRANSLATION&&M.fromBufferAttribute(h.TRANSLATION,A),h.ROTATION&&y.fromBufferAttribute(h.ROTATION,A),h.SCALE&&U.fromBufferAttribute(h.SCALE,A),D.setMatrixAt(A,E.compose(M,y,U));for(const A in h)if(A==="_COLOR_0"){const P=h[A];D.instanceColor=new qp(P.array,P.itemSize,P.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&S.geometry.setAttribute(A,h[A]);jt.prototype.copy.call(D,S),this.parser.assignFinalMaterial(D),x.push(D)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const eM="glTF",Ll=12,bx={JSON:1313821514,BIN:5130562};class OL{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ll),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==eM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const a=this.header.length-Ll,l=new DataView(e,Ll);let c=0;for(;c<a;){const f=l.getUint32(c,!0);c+=4;const h=l.getUint32(c,!0);if(c+=4,h===bx.JSON){const d=new Uint8Array(e,Ll+c,f);this.content=i.decode(d)}else if(h===bx.BIN){const d=Ll+c;this.body=e.slice(d,d+f)}c+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,a=this.dracoLoader,l=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,f={},h={},d={};for(const m in c){const _=Kp[m]||m.toLowerCase();f[_]=c[m]}for(const m in e.attributes){const _=Kp[m]||m.toLowerCase();if(c[m]!==void 0){const v=i.accessors[e.attributes[m]],x=uo[v.componentType];d[_]=x.name,h[_]=v.normalized===!0}}return t.getDependency("bufferView",l).then(function(m){return new Promise(function(_,v){a.decodeDracoFile(m,function(x){for(const S in x.attributes){const E=x.attributes[S],M=h[S];M!==void 0&&(E.normalized=M)}_(x)},f,d,Zn,v)})})}}class BL{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class FL{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class tM extends Zl{constructor(e,t,i,a){super(e,t,i,a)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,l=e*a*3+a;for(let c=0;c!==a;c++)t[c]=i[l+c];return t}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=f*2,d=f*3,m=a-t,_=(i-t)/m,v=_*_,x=v*_,S=e*d,E=S-d,M=-2*x+3*v,y=x-v,U=1-M,D=y-v+_;for(let A=0;A!==f;A++){const P=c[E+A+f],B=c[E+A+h]*m,I=c[S+A+f],G=c[S+A]*m;l[A]=U*P+D*B+M*I+y*G}return l}}const zL=new lt;class HL extends tM{interpolate_(e,t,i,a){const l=super.interpolate_(e,t,i,a);return zL.fromArray(l).normalize().toArray(l),l}}const Ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rx={9728:jn,9729:hi,9984:my,9985:Nc,9986:Il,9987:Cr},wx={33071:ps,33648:kc,10497:po},qd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VL={CUBICSPLINE:void 0,LINEAR:Wl,STEP:kl},Yd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GL(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new vm({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nr})),s.DefaultMaterial}function Vs(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function wr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kL(s,e,t){let i=!1,a=!1,l=!1;for(let d=0,m=e.length;d<m;d++){const _=e[d];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(a=!0),_.COLOR_0!==void 0&&(l=!0),i&&a&&l)break}if(!i&&!a&&!l)return Promise.resolve(s);const c=[],f=[],h=[];for(let d=0,m=e.length;d<m;d++){const _=e[d];if(i){const v=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):s.attributes.position;c.push(v)}if(a){const v=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):s.attributes.normal;f.push(v)}if(l){const v=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):s.attributes.color;h.push(v)}}return Promise.all([Promise.all(c),Promise.all(f),Promise.all(h)]).then(function(d){const m=d[0],_=d[1],v=d[2];return i&&(s.morphAttributes.position=m),a&&(s.morphAttributes.normal=_),l&&(s.morphAttributes.color=v),s.morphTargetsRelative=!0,s})}function WL(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,a=t.length;i<a;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XL(s){let e;const t=s.extensions&&s.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jd(t.attributes):e=s.indices+":"+jd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,a=s.targets.length;i<a;i++)e+=":"+jd(s.targets[i]);return e}function jd(s){let e="";const t=Object.keys(s).sort();for(let i=0,a=t.length;i<a;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Qp(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qL(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const YL=new $e;class jL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,a=-1,l=!1,c=-1;if(typeof navigator<"u"){const f=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(f)===!0;const h=f.match(/Version\/(\d+)/);a=i&&h?parseInt(h[1],10):-1,l=f.indexOf("Firefox")>-1,c=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&a<17||l&&c<98?this.textureLoader=new ab(this.options.manager):this.textureLoader=new db(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qy(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,a=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const f={scene:c[0][a.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:a.asset,parser:i,userData:{}};return Vs(l,f,a),wr(f,a),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(f)})).then(function(){for(const h of f.scenes)h.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let a=0,l=t.length;a<l;a++){const c=t[a].joints;for(let f=0,h=c.length;f<h;f++)e[c[f]].isBone=!0}for(let a=0,l=e.length;a<l;a++){const c=e[a];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const a=i.clone(),l=(c,f)=>{const h=this.associations.get(c);h!=null&&this.associations.set(f,h);for(const[d,m]of c.children.entries())l(m,f.children[d])};return l(i,a),a.name+="_instance_"+e.uses[t]++,a}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const a=e(t[i]);if(a)return a}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let a=0;a<t.length;a++){const l=e(t[a]);l&&i.push(l)}return i}getDependency(e,t){const i=e+":"+t;let a=this.cache.get(i);if(!a){switch(e){case"scene":a=this.loadScene(t);break;case"node":a=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":a=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":a=this.loadAccessor(t);break;case"bufferView":a=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":a=this.loadBuffer(t);break;case"material":a=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":a=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":a=this.loadSkin(t);break;case"animation":a=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":a=this.loadCamera(t);break;default:if(a=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!a)throw new Error("Unknown type: "+e);break}this.cache.add(i,a)}return a}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,a=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(a.map(function(l,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const a=this.options;return new Promise(function(l,c){i.load(Vl.resolveURL(t.uri,a.path),l,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const a=t.byteLength||0,l=t.byteOffset||0;return i.slice(l,l+a)})}loadAccessor(e){const t=this,i=this.json,a=this.json.accessors[e];if(a.bufferView===void 0&&a.sparse===void 0){const c=qd[a.type],f=uo[a.componentType],h=a.normalized===!0,d=new f(a.count*c);return Promise.resolve(new Lt(d,c,h))}const l=[];return a.bufferView!==void 0?l.push(this.getDependency("bufferView",a.bufferView)):l.push(null),a.sparse!==void 0&&(l.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(l).then(function(c){const f=c[0],h=qd[a.type],d=uo[a.componentType],m=d.BYTES_PER_ELEMENT,_=m*h,v=a.byteOffset||0,x=a.bufferView!==void 0?i.bufferViews[a.bufferView].byteStride:void 0,S=a.normalized===!0;let E,M;if(x&&x!==_){const y=Math.floor(v/x),U="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+y+":"+a.count;let D=t.cache.get(U);D||(E=new d(f,y*x,a.count*x/m),D=new zA(E,x/m),t.cache.add(U,D)),M=new gm(D,h,v%x/m,S)}else f===null?E=new d(a.count*h):E=new d(f,v,a.count*h),M=new Lt(E,h,S);if(a.sparse!==void 0){const y=qd.SCALAR,U=uo[a.sparse.indices.componentType],D=a.sparse.indices.byteOffset||0,A=a.sparse.values.byteOffset||0,P=new U(c[1],D,a.sparse.count*y),B=new d(c[2],A,a.sparse.count*h);f!==null&&(M=new Lt(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let I=0,G=P.length;I<G;I++){const L=P[I];if(M.setX(L,B[I*h]),h>=2&&M.setY(L,B[I*h+1]),h>=3&&M.setZ(L,B[I*h+2]),h>=4&&M.setW(L,B[I*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=S}return M})}loadTexture(e){const t=this.json,i=this.options,l=t.textures[e].source,c=t.images[l];let f=this.textureLoader;if(c.uri){const h=i.manager.getHandler(c.uri);h!==null&&(f=h)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,t,i){const a=this,l=this.json,c=l.textures[e],f=l.images[t],h=(f.uri||f.bufferView)+":"+c.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||f.name||"",m.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(m.name=f.uri);const v=(l.samplers||{})[c.sampler]||{};return m.magFilter=Rx[v.magFilter]||hi,m.minFilter=Rx[v.minFilter]||Cr,m.wrapS=wx[v.wrapS]||po,m.wrapT=wx[v.wrapT]||po,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==jn&&m.minFilter!==hi,a.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){const i=this,a=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const c=a.images[e],f=self.URL||self.webkitURL;let h=c.uri||"",d=!1;if(c.bufferView!==void 0)h=i.getDependency("bufferView",c.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:c.mimeType});return h=f.createObjectURL(v),h});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(h).then(function(_){return new Promise(function(v,x){let S=v;t.isImageBitmapLoader===!0&&(S=function(E){const M=new bn(E);M.needsUpdate=!0,v(M)}),t.load(Vl.resolveURL(_,l.path),S,void 0,x)})}).then(function(_){return d===!0&&f.revokeObjectURL(h),wr(_,c),_.userData.mimeType=c.mimeType||qL(c.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),_});return this.sourceCache[e]=m,m}assignTexture(e,t,i,a){const l=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),l.extensions[St.KHR_TEXTURE_TRANSFORM]){const f=i.extensions!==void 0?i.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const h=l.associations.get(c);c=l.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(c,f),l.associations.set(c,h)}}return a!==void 0&&(c.colorSpace=a),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const a=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+i.uuid;let h=this.cache.get(f);h||(h=new Vy,Gi.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(f,h)),i=h}else if(e.isLine){const f="LineBasicMaterial:"+i.uuid;let h=this.cache.get(f);h||(h=new ea,Gi.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(f,h)),i=h}if(a||l||c){let f="ClonedMaterial:"+i.uuid+":";a&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),c&&(f+="flat-shading:");let h=this.cache.get(f);h||(h=i.clone(),l&&(h.vertexColors=!0),c&&(h.flatShading=!0),a&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(f,h),this.associations.set(h,this.associations.get(i))),i=h}e.material=i}getMaterialType(){return vm}loadMaterial(e){const t=this,i=this.json,a=this.extensions,l=i.materials[e];let c;const f={},h=l.extensions||{},d=[];if(h[St.KHR_MATERIALS_UNLIT]){const _=a[St.KHR_MATERIALS_UNLIT];c=_.getMaterialType(),d.push(_.extendParams(f,l,t))}else{const _=l.pbrMetallicRoughness||{};if(f.color=new qe(1,1,1),f.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;f.color.setRGB(v[0],v[1],v[2],Zn),f.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(t.assignTexture(f,"map",_.baseColorTexture,Un)),f.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,f.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(f,"metalnessMap",_.metallicRoughnessTexture)),d.push(t.assignTexture(f,"roughnessMap",_.metallicRoughnessTexture))),c=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=Ai);const m=l.alphaMode||Yd.OPAQUE;if(m===Yd.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,m===Yd.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&c!==Dr&&(d.push(t.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new gt(1,1),l.normalTexture.scale!==void 0)){const _=l.normalTexture.scale;f.normalScale.set(_,_)}if(l.occlusionTexture!==void 0&&c!==Dr&&(d.push(t.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&c!==Dr){const _=l.emissiveFactor;f.emissive=new qe().setRGB(_[0],_[1],_[2],Zn)}return l.emissiveTexture!==void 0&&c!==Dr&&d.push(t.assignTexture(f,"emissiveMap",l.emissiveTexture,Un)),Promise.all(d).then(function(){const _=new c(f);return l.name&&(_.name=l.name),wr(_,l),t.associations.set(_,{materials:e}),l.extensions&&Vs(a,_,l),_})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,a=this.primitiveCache;function l(f){return i[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(h){return Cx(h,f,t)})}const c=[];for(let f=0,h=e.length;f<h;f++){const d=e[f],m=XL(d),_=a[m];if(_)c.push(_.promise);else{let v;d.extensions&&d.extensions[St.KHR_DRACO_MESH_COMPRESSION]?v=l(d):v=Cx(new pn,d,t),a[m]={primitive:d,promise:v},c.push(v)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,a=this.extensions,l=i.meshes[e],c=l.primitives,f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h].material===void 0?GL(this.cache):this.getDependency("material",c[h].material);f.push(m)}return f.push(t.loadGeometries(c)),Promise.all(f).then(function(h){const d=h.slice(0,h.length-1),m=h[h.length-1],_=[];for(let x=0,S=m.length;x<S;x++){const E=m[x],M=c[x];let y;const U=d[x];if(M.mode===Ti.TRIANGLES||M.mode===Ti.TRIANGLE_STRIP||M.mode===Ti.TRIANGLE_FAN||M.mode===void 0)y=l.isSkinnedMesh===!0?new Fy(E,U):new qn(E,U),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),M.mode===Ti.TRIANGLE_STRIP?y.geometry=Ax(y.geometry,Ay):M.mode===Ti.TRIANGLE_FAN&&(y.geometry=Ax(y.geometry,Wp));else if(M.mode===Ti.LINES)y=new jl(E,U);else if(M.mode===Ti.LINE_STRIP)y=new ef(E,U);else if(M.mode===Ti.LINE_LOOP)y=new qA(E,U);else if(M.mode===Ti.POINTS)y=new YA(E,U);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(y.geometry.morphAttributes).length>0&&WL(y,l),y.name=t.createUniqueName(l.name||"mesh_"+e),wr(y,l),M.extensions&&Vs(a,y,M),t.assignFinalMaterial(y),_.push(y)}for(let x=0,S=_.length;x<S;x++)t.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return l.extensions&&Vs(a,_[0],l),_[0];const v=new di;l.extensions&&Vs(a,v,l),t.associations.set(v,{meshes:e});for(let x=0,S=_.length;x<S;x++)v.add(_[x]);return v})}loadCamera(e){let t;const i=this.json.cameras[e],a=i[i.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Xn(on.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):i.type==="orthographic"&&(t=new ym(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),wr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let a=0,l=t.joints.length;a<l;a++)i.push(this._loadNodeShallow(t.joints[a]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(a){const l=a.pop(),c=a,f=[],h=[];for(let d=0,m=c.length;d<m;d++){const _=c[d];if(_){f.push(_);const v=new $e;l!==null&&v.fromArray(l.array,d*16),h.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new So(f,h)})}loadAnimation(e){const t=this.json,i=this,a=t.animations[e],l=a.name?a.name:"animation_"+e,c=[],f=[],h=[],d=[],m=[];for(let _=0,v=a.channels.length;_<v;_++){const x=a.channels[_],S=a.samplers[x.sampler],E=x.target,M=E.node,y=a.parameters!==void 0?a.parameters[S.input]:S.input,U=a.parameters!==void 0?a.parameters[S.output]:S.output;E.node!==void 0&&(c.push(this.getDependency("node",M)),f.push(this.getDependency("accessor",y)),h.push(this.getDependency("accessor",U)),d.push(S),m.push(E))}return Promise.all([Promise.all(c),Promise.all(f),Promise.all(h),Promise.all(d),Promise.all(m)]).then(function(_){const v=_[0],x=_[1],S=_[2],E=_[3],M=_[4],y=[];for(let U=0,D=v.length;U<D;U++){const A=v[U],P=x[U],B=S[U],I=E[U],G=M[U];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const L=i._createAnimationTracks(A,P,B,I,G);if(L)for(let w=0;w<L.length;w++)y.push(L[w])}return new jp(l,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,a=t.nodes[e];return a.mesh===void 0?null:i.getDependency("mesh",a.mesh).then(function(l){const c=i._getNodeRef(i.meshCache,a.mesh,l);return a.weights!==void 0&&c.traverse(function(f){if(f.isMesh)for(let h=0,d=a.weights.length;h<d;h++)f.morphTargetInfluences[h]=a.weights[h]}),c})}loadNode(e){const t=this.json,i=this,a=t.nodes[e],l=i._loadNodeShallow(e),c=[],f=a.children||[];for(let d=0,m=f.length;d<m;d++)c.push(i.getDependency("node",f[d]));const h=a.skin===void 0?Promise.resolve(null):i.getDependency("skin",a.skin);return Promise.all([l,Promise.all(c),h]).then(function(d){const m=d[0],_=d[1],v=d[2];v!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(v,YL)});for(let x=0,S=_.length;x<S;x++)m.add(_[x]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,a=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],c=l.name?a.createUniqueName(l.name):"",f=[],h=a._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&f.push(h),l.camera!==void 0&&f.push(a.getDependency("camera",l.camera).then(function(d){return a._getNodeRef(a.cameraCache,l.camera,d)})),a._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){f.push(d)}),this.nodeCache[e]=Promise.all(f).then(function(d){let m;if(l.isBone===!0?m=new zy:d.length>1?m=new di:d.length===1?m=d[0]:m=new jt,m!==d[0])for(let _=0,v=d.length;_<v;_++)m.add(d[_]);if(l.name&&(m.userData.name=l.name,m.name=c),wr(m,l),l.extensions&&Vs(i,m,l),l.matrix!==void 0){const _=new $e;_.fromArray(l.matrix),m.applyMatrix4(_)}else l.translation!==void 0&&m.position.fromArray(l.translation),l.rotation!==void 0&&m.quaternion.fromArray(l.rotation),l.scale!==void 0&&m.scale.fromArray(l.scale);return a.associations.has(m)||a.associations.set(m,{}),a.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],a=this,l=new di;i.name&&(l.name=a.createUniqueName(i.name)),wr(l,i),i.extensions&&Vs(t,l,i);const c=i.nodes||[],f=[];for(let h=0,d=c.length;h<d;h++)f.push(a.getDependency("node",c[h]));return Promise.all(f).then(function(h){for(let m=0,_=h.length;m<_;m++)l.add(h[m]);const d=m=>{const _=new Map;for(const[v,x]of a.associations)(v instanceof Gi||v instanceof bn)&&_.set(v,x);return m.traverse(v=>{const x=a.associations.get(v);x!=null&&_.set(v,x)}),_};return a.associations=d(l),l})}_createAnimationTracks(e,t,i,a,l){const c=[],f=e.name?e.name:e.uuid,h=[];fs[l.path]===fs.weights?e.traverse(function(v){v.morphTargetInfluences&&h.push(v.name?v.name:v.uuid)}):h.push(f);let d;switch(fs[l.path]){case fs.weights:d=xo;break;case fs.rotation:d=yo;break;case fs.position:case fs.scale:d=Mo;break;default:switch(i.itemSize){case 1:d=xo;break;case 2:case 3:default:d=Mo;break}break}const m=a.interpolation!==void 0?VL[a.interpolation]:Wl,_=this._getArrayFromAccessor(i);for(let v=0,x=h.length;v<x;v++){const S=new d(h[v]+"."+fs[l.path],t.array,_,m);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),c.push(S)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Qp(t.constructor),a=new Float32Array(t.length);for(let l=0,c=t.length;l<c;l++)a[l]=t[l]*i;t=a}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const a=this instanceof yo?HL:tM;return new a(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ZL(s,e,t){const i=e.attributes,a=new Ir;if(i.POSITION!==void 0){const f=t.json.accessors[i.POSITION],h=f.min,d=f.max;if(h!==void 0&&d!==void 0){if(a.set(new F(h[0],h[1],h[2]),new F(d[0],d[1],d[2])),f.normalized){const m=Qp(uo[f.componentType]);a.min.multiplyScalar(m),a.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new F,h=new F;for(let d=0,m=l.length;d<m;d++){const _=l[d];if(_.POSITION!==void 0){const v=t.json.accessors[_.POSITION],x=v.min,S=v.max;if(x!==void 0&&S!==void 0){if(h.setX(Math.max(Math.abs(x[0]),Math.abs(S[0]))),h.setY(Math.max(Math.abs(x[1]),Math.abs(S[1]))),h.setZ(Math.max(Math.abs(x[2]),Math.abs(S[2]))),v.normalized){const E=Qp(uo[v.componentType]);h.multiplyScalar(E)}f.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(f)}s.boundingBox=a;const c=new tr;a.getCenter(c.center),c.radius=a.min.distanceTo(a.max)/2,s.boundingSphere=c}function Cx(s,e,t){const i=e.attributes,a=[];function l(c,f){return t.getDependency("accessor",c).then(function(h){s.setAttribute(f,h)})}for(const c in i){const f=Kp[c]||c.toLowerCase();f in s.attributes||a.push(l(i[c],f))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(f){s.setIndex(f)});a.push(c)}return Rt.workingColorSpace!==Zn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),wr(s,e),ZL(s,e,t),Promise.all(a).then(function(){return e.targets!==void 0?kL(s,e.targets,t):s})}/*!
 * @pixiv/three-vrm v3.4.2
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Cc=(s,e,t)=>new Promise((i,a)=>{var l=h=>{try{f(t.next(h))}catch(d){a(d)}},c=h=>{try{f(t.throw(h))}catch(d){a(d)}},f=h=>h.done?i(h.value):Promise.resolve(h.value).then(l,c);f((t=t.apply(s,e)).next())}),Ct=(s,e,t)=>new Promise((i,a)=>{var l=h=>{try{f(t.next(h))}catch(d){a(d)}},c=h=>{try{f(t.throw(h))}catch(d){a(d)}},f=h=>h.done?i(h.value):Promise.resolve(h.value).then(l,c);f((t=t.apply(s,e)).next())}),Lx=class extends jt{constructor(s){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${s}`,this.expressionName=s,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(s){this._binds.push(s)}deleteBind(s){const e=this._binds.indexOf(s);e>=0&&this._binds.splice(e,1)}applyWeight(s){var e;let t=this.outputWeight;t*=(e=s==null?void 0:s.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(i=>i.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(s=>s.clearAppliedWeight())}};function nM(s,e,t){var i,a;const l=s.parser.json,c=(i=l.nodes)==null?void 0:i[e];if(c==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const f=c.mesh;if(f==null)return null;const h=(a=l.meshes)==null?void 0:a[f];if(h==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${f}] of glTF but the mesh doesn't exist`),null;const d=h.primitives.length,m=[];return t.traverse(_=>{m.length<d&&_.isMesh&&m.push(_)}),m}function Dx(s,e){return Ct(this,null,function*(){const t=yield s.parser.getDependency("node",e);return nM(s,e,t)})}function Ux(s){return Ct(this,null,function*(){const e=yield s.parser.getDependencies("node"),t=new Map;return e.forEach((i,a)=>{const l=nM(s,a,i);l!=null&&t.set(a,l)}),t})}var Jp={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function iM(s){return Math.max(Math.min(s,1),0)}var Nx=class rM{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(Jp));return Object.entries(this._expressionMap).forEach(([i,a])=>{t.has(i)&&(e[i]=a)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(Jp));return Object.entries(this._expressionMap).forEach(([i,a])=>{t.has(i)||(e[i]=a)}),e}copy(e){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),e._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new rM().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const i=this.getExpression(e);return(t=i==null?void 0:i.weight)!=null?t:null}setValue(e,t){const i=this.getExpression(e);i&&(i.weight=iM(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let i=1;const a=t.expressionName;this.blinkExpressionNames.indexOf(a)!==-1&&(i*=e.blink),this.lookAtExpressionNames.indexOf(a)!==-1&&(i*=e.lookAt),this.mouthExpressionNames.indexOf(a)!==-1&&(i*=e.mouth),t.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let e=1,t=1,i=1;return this._expressions.forEach(a=>{e-=a.overrideBlinkAmount,t-=a.overrideLookAtAmount,i-=a.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),i=Math.max(0,i),{blink:e,lookAt:t,mouth:i}}},Dl={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},KL={_Color:Dl.Color,_EmissionColor:Dl.EmissionColor,_ShadeColor:Dl.ShadeColor,_RimColor:Dl.RimColor,_OutlineColor:Dl.OutlineColor},QL=new qe,sM=class aM{constructor({material:e,type:t,targetValue:i,targetAlpha:a}){this.material=e,this.type=t,this.targetValue=i,this.targetAlpha=a??1;const l=this._initColorBindState(),c=this._initAlphaBindState();this._state={color:l,alpha:c}}applyWeight(e){const{color:t,alpha:i}=this._state;if(t!=null){const{propertyName:a,deltaValue:l}=t,c=this.material[a];c!=null&&c.add(QL.copy(l).multiplyScalar(e))}if(i!=null){const{propertyName:a,deltaValue:l}=i;this.material[a]!=null&&(this.material[a]+=l*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:i,initialValue:a}=e,l=this.material[i];l!=null&&l.copy(a)}if(t!=null){const{propertyName:i,initialValue:a}=t;this.material[i]!=null&&(this.material[i]=a)}}_initColorBindState(){var e,t,i;const{material:a,type:l,targetValue:c}=this,f=this._getPropertyNameMap(),h=(t=(e=f==null?void 0:f[l])==null?void 0:e[0])!=null?t:null;if(h==null)return console.warn(`Tried to add a material color bind to the material ${(i=a.name)!=null?i:"(no name)"}, the type ${l} but the material or the type is not supported.`),null;const m=a[h].clone(),_=new qe(c.r-m.r,c.g-m.g,c.b-m.b);return{propertyName:h,initialValue:m,deltaValue:_}}_initAlphaBindState(){var e,t,i;const{material:a,type:l,targetAlpha:c}=this,f=this._getPropertyNameMap(),h=(t=(e=f==null?void 0:f[l])==null?void 0:e[1])!=null?t:null;if(h==null&&c!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=a.name)!=null?i:"(no name)"}, the type ${l} but the material or the type does not support alpha.`),null;if(h==null)return null;const d=a[h],m=c-d;return{propertyName:h,initialValue:d,deltaValue:m}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(aM._propertyNameMapMap).find(([i])=>this.material[i]===!0))==null?void 0:e[1])!=null?t:null}};sM._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Px=sM,Zc=class{constructor({primitives:s,index:e,weight:t}){this.primitives=s,this.index=e,this.weight=t}applyWeight(s){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*s)})}clearAppliedWeight(){this.primitives.forEach(s=>{var e;((e=s.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(s.morphTargetInfluences[this.index]=0)})}},Ox=new gt,oM=class lM{constructor({material:e,scale:t,offset:i}){var a,l;this.material=e,this.scale=t,this.offset=i;const c=(a=Object.entries(lM._propertyNamesMap).find(([f])=>e[f]===!0))==null?void 0:a[1];c==null?(console.warn(`Tried to add a texture transform bind to the material ${(l=e.name)!=null?l:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],c.forEach(f=>{var h;const d=(h=e[f])==null?void 0:h.clone();if(!d)return null;e[f]=d;const m=d.offset.clone(),_=d.repeat.clone(),v=i.clone().sub(m),x=t.clone().sub(_);this._properties.push({name:f,initialOffset:m,deltaOffset:v,initialScale:_,deltaScale:x})}))}applyWeight(e){this._properties.forEach(t=>{const i=this.material[t.name];i!==void 0&&(i.offset.add(Ox.copy(t.deltaOffset).multiplyScalar(e)),i.repeat.add(Ox.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};oM._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Ix=oM,JL=new Set(["1.0","1.0-beta"]),uM=class cM{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Ct(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return Ct(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const i=yield this._v0Import(e);return i||null})}_v1Import(e){return Ct(this,null,function*(){var t,i;const a=this.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const c=(i=a.extensions)==null?void 0:i.VRMC_vrm;if(!c)return null;const f=c.specVersion;if(!JL.has(f))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${f}"`),null;const h=c.expressions;if(!h)return null;const d=new Set(Object.values(Jp)),m=new Map;h.preset!=null&&Object.entries(h.preset).forEach(([v,x])=>{if(x!=null){if(!d.has(v)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${v}" detected. Ignoring the expression`);return}m.set(v,x)}}),h.custom!=null&&Object.entries(h.custom).forEach(([v,x])=>{if(d.has(v)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${v}". Ignoring the expression`);return}m.set(v,x)});const _=new Nx;return yield Promise.all(Array.from(m.entries()).map(v=>Ct(this,[v],function*([x,S]){var E,M,y,U,D,A,P;const B=new Lx(x);if(e.scene.add(B),B.isBinary=(E=S.isBinary)!=null?E:!1,B.overrideBlink=(M=S.overrideBlink)!=null?M:"none",B.overrideLookAt=(y=S.overrideLookAt)!=null?y:"none",B.overrideMouth=(U=S.overrideMouth)!=null?U:"none",(D=S.morphTargetBinds)==null||D.forEach(I=>Ct(this,null,function*(){var G;if(I.node===void 0||I.index===void 0)return;const L=yield Dx(e,I.node),w=I.index;if(!L.every(V=>Array.isArray(V.morphTargetInfluences)&&w<V.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${S.name} attempts to index morph #${w} but not found.`);return}B.addBind(new Zc({primitives:L,index:w,weight:(G=I.weight)!=null?G:1}))})),S.materialColorBinds||S.textureTransformBinds){const I=[];e.scene.traverse(G=>{const L=G.material;L&&(Array.isArray(L)?I.push(...L):I.push(L))}),(A=S.materialColorBinds)==null||A.forEach(G=>Ct(this,null,function*(){I.filter(w=>{var V;const te=(V=this.parser.associations.get(w))==null?void 0:V.materials;return G.material===te}).forEach(w=>{B.addBind(new Px({material:w,type:G.type,targetValue:new qe().fromArray(G.targetValue),targetAlpha:G.targetValue[3]}))})})),(P=S.textureTransformBinds)==null||P.forEach(G=>Ct(this,null,function*(){I.filter(w=>{var V;const te=(V=this.parser.associations.get(w))==null?void 0:V.materials;return G.material===te}).forEach(w=>{var V,te;B.addBind(new Ix({material:w,offset:new gt().fromArray((V=G.offset)!=null?V:[0,0]),scale:new gt().fromArray((te=G.scale)!=null?te:[1,1])}))})}))}_.registerExpression(B)}))),_})}_v0Import(e){return Ct(this,null,function*(){var t;const i=this.parser.json,a=(t=i.extensions)==null?void 0:t.VRM;if(!a)return null;const l=a.blendShapeMaster;if(!l)return null;const c=new Nx,f=l.blendShapeGroups;if(!f)return c;const h=new Set;return yield Promise.all(f.map(d=>Ct(this,null,function*(){var m;const _=d.presetName,v=_!=null&&cM.v0v1PresetNameMap[_]||null,x=v??d.name;if(x==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(h.has(x)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${_} has duplicated entries. Ignoring the expression`);return}h.add(x);const S=new Lx(x);e.scene.add(S),S.isBinary=(m=d.isBinary)!=null?m:!1,d.binds&&d.binds.forEach(M=>Ct(this,null,function*(){var y;if(M.mesh===void 0||M.index===void 0)return;const U=[];(y=i.nodes)==null||y.forEach((A,P)=>{A.mesh===M.mesh&&U.push(P)});const D=M.index;yield Promise.all(U.map(A=>Ct(this,null,function*(){var P;const B=yield Dx(e,A);if(!B.every(I=>Array.isArray(I.morphTargetInfluences)&&D<I.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${d.name} attempts to index ${D}th morph but not found.`);return}S.addBind(new Zc({primitives:B,index:D,weight:.01*((P=M.weight)!=null?P:100)}))})))}));const E=d.materialValues;E&&E.length!==0&&E.forEach(M=>{if(M.materialName===void 0||M.propertyName===void 0||M.targetValue===void 0)return;const y=[];e.scene.traverse(D=>{if(D.material){const A=D.material;Array.isArray(A)?y.push(...A.filter(P=>(P.name===M.materialName||P.name===M.materialName+" (Outline)")&&y.indexOf(P)===-1)):A.name===M.materialName&&y.indexOf(A)===-1&&y.push(A)}});const U=M.propertyName;y.forEach(D=>{if(U==="_MainTex_ST"){const P=new gt(M.targetValue[0],M.targetValue[1]),B=new gt(M.targetValue[2],M.targetValue[3]);B.y=1-B.y-P.y,S.addBind(new Ix({material:D,scale:P,offset:B}));return}const A=KL[U];if(A){S.addBind(new Px({material:D,type:A,targetValue:new qe().fromArray(M.targetValue),targetAlpha:M.targetValue[3]}));return}console.warn(U+" is not supported")})}),c.registerExpression(S)}))),c})}};uM.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var $L=uM,Tm=class to{constructor(e,t){this._firstPersonOnlyLayer=to.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=to.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new to(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=to.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=to.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(i=>{i.meshes.forEach(a=>{i.type==="firstPersonOnly"?(a.layers.set(this._firstPersonOnlyLayer),a.traverse(l=>l.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(a.layers.set(this._thirdPersonOnlyLayer),a.traverse(l=>l.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(a)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,i,a){let l=0;if(t!=null&&t.length>0)for(let c=0;c<e.length;c+=3){const f=e[c],h=e[c+1],d=e[c+2],m=t[f],_=i[f];if(m[0]>0&&a.includes(_[0])||m[1]>0&&a.includes(_[1])||m[2]>0&&a.includes(_[2])||m[3]>0&&a.includes(_[3]))continue;const v=t[h],x=i[h];if(v[0]>0&&a.includes(x[0])||v[1]>0&&a.includes(x[1])||v[2]>0&&a.includes(x[2])||v[3]>0&&a.includes(x[3]))continue;const S=t[d],E=i[d];S[0]>0&&a.includes(E[0])||S[1]>0&&a.includes(E[1])||S[2]>0&&a.includes(E[2])||S[3]>0&&a.includes(E[3])||(e[l++]=f,e[l++]=h,e[l++]=d)}return l}_createErasedMesh(e,t){const i=new Fy(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const a=i.geometry,l=a.getAttribute("skinIndex"),c=l instanceof $0?[]:l.array,f=[];for(let E=0;E<c.length;E+=4)f.push([c[E],c[E+1],c[E+2],c[E+3]]);const h=a.getAttribute("skinWeight"),d=h instanceof $0?[]:h.array,m=[];for(let E=0;E<d.length;E+=4)m.push([d[E],d[E+1],d[E+2],d[E+3]]);const _=a.getIndex();if(!_)throw new Error("The geometry doesn't have an index buffer");const v=Array.from(_.array),x=this._excludeTriangles(v,m,f,t),S=[];for(let E=0;E<x;E++)S[E]=v[E];return a.setIndex(S),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new So(e.skeleton.bones,e.skeleton.boneInverses),new $e),i}_createHeadlessModelForSkinnedMesh(e,t){const i=[];if(t.skeleton.bones.forEach((l,c)=>{this._isEraseTarget(l)&&i.push(c)}),!i.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const a=this._createErasedMesh(t,i);e.add(a)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new di;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{const a=i;this._createHeadlessModelForSkinnedMesh(t,a)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Tm.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Tm.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Bx=Tm,e2=new Set(["1.0","1.0-beta"]),t2=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(s){this.parser=s}afterRoot(s){return Ct(this,null,function*(){const e=s.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");s.userData.vrmFirstPerson=yield this._import(s,e)}})}_import(s,e){return Ct(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(s,e);if(t)return t;const i=yield this._v0Import(s,e);return i||null})}_v1Import(s,e){return Ct(this,null,function*(){var t,i;const a=this.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const c=(i=a.extensions)==null?void 0:i.VRMC_vrm;if(!c)return null;const f=c.specVersion;if(!e2.has(f))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${f}"`),null;const h=c.firstPerson,d=[],m=yield Ux(s);return Array.from(m.entries()).forEach(([_,v])=>{var x,S;const E=(x=h==null?void 0:h.meshAnnotations)==null?void 0:x.find(M=>M.node===_);d.push({meshes:v,type:(S=E==null?void 0:E.type)!=null?S:"auto"})}),new Bx(e,d)})}_v0Import(s,e){return Ct(this,null,function*(){var t;const i=this.parser.json,a=(t=i.extensions)==null?void 0:t.VRM;if(!a)return null;const l=a.firstPerson;if(!l)return null;const c=[],f=yield Ux(s);return Array.from(f.entries()).forEach(([h,d])=>{const m=i.nodes[h],_=l.meshAnnotations?l.meshAnnotations.find(v=>v.mesh===m.mesh):void 0;c.push({meshes:d,type:this._convertV0FlagToV1Type(_==null?void 0:_.firstPersonFlag)})}),new Bx(e,c)})}_convertV0FlagToV1Type(s){return s==="FirstPersonOnly"?"firstPersonOnly":s==="ThirdPersonOnly"?"thirdPersonOnly":s==="Both"?"both":"auto"}},Fx=new F,zx=new F,n2=new lt,Hx=class extends di{constructor(s){super(),this.vrmHumanoid=s,this._boneAxesMap=new Map,Object.values(s.humanBones).forEach(e=>{const t=new Cb(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(s=>{s.geometry.dispose(),s.material.dispose()})}updateMatrixWorld(s){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Fx,n2,zx);const i=Fx.set(.1,.1,.1).divide(zx);t.matrix.copy(e.node.matrixWorld).scale(i)}),super.updateMatrixWorld(s)}},Zd=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],i2={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function fM(s){return s.invert?s.invert():s.inverse(),s}var Gs=new F,ks=new lt,$p=class{constructor(s){this.humanBones=s,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const s={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);i&&(Gs.copy(i.position),ks.copy(i.quaternion),s[t]={position:Gs.toArray(),rotation:ks.toArray()})}),s}getPose(){const s={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);if(!i)return;Gs.set(0,0,0),ks.identity();const a=this.restPose[t];a!=null&&a.position&&Gs.fromArray(a.position).negate(),a!=null&&a.rotation&&fM(ks.fromArray(a.rotation)),Gs.add(i.position),ks.premultiply(i.quaternion),s[t]={position:Gs.toArray(),rotation:ks.toArray()}}),s}setPose(s){Object.entries(s).forEach(([e,t])=>{const i=e,a=this.getBoneNode(i);if(!a)return;const l=this.restPose[i];l&&(t!=null&&t.position&&(a.position.fromArray(t.position),l.position&&a.position.add(Gs.fromArray(l.position))),t!=null&&t.rotation&&(a.quaternion.fromArray(t.rotation),l.rotation&&a.quaternion.multiply(ks.fromArray(l.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([s,e])=>{const t=this.getBoneNode(s);t&&(e!=null&&e.position&&t.position.fromArray(e.position),e!=null&&e.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(s){var e;return(e=this.humanBones[s])!=null?e:void 0}getBoneNode(s){var e,t;return(t=(e=this.humanBones[s])==null?void 0:e.node)!=null?t:null}},Kd=new F,r2=new lt,s2=new F,Vx=class hM extends $p{static _setupTransforms(e){const t=new jt;t.name="VRMHumanoidRig";const i={},a={},l={};Zd.forEach(f=>{var h;const d=e.getBoneNode(f);if(d){const m=new F,_=new lt;d.updateWorldMatrix(!0,!1),d.matrixWorld.decompose(m,_,Kd),i[f]=m,a[f]=d.quaternion.clone();const v=new lt;(h=d.parent)==null||h.matrixWorld.decompose(Kd,v,Kd),l[f]=v}});const c={};return Zd.forEach(f=>{var h;const d=e.getBoneNode(f);if(d){const m=i[f];let _=f,v;for(;v==null&&(_=i2[_],_!=null);)v=i[_];const x=new jt;x.name="Normalized_"+d.name,(_?(h=c[_])==null?void 0:h.node:t).add(x),x.position.copy(m),v&&x.position.sub(v),c[f]={node:x}}}),{rigBones:c,root:t,parentWorldRotations:l,boneRotations:a}}constructor(e){const{rigBones:t,root:i,parentWorldRotations:a,boneRotations:l}=hM._setupTransforms(e);super(t),this.original=e,this.root=i,this._parentWorldRotations=a,this._boneRotations=l}update(){Zd.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const i=this.getBoneNode(e),a=this._parentWorldRotations[e],l=r2.copy(a).invert(),c=this._boneRotations[e];if(t.quaternion.copy(i.quaternion).multiply(a).premultiply(l).multiply(c),e==="hips"){const f=i.getWorldPosition(s2);t.parent.updateWorldMatrix(!0,!1);const h=t.parent.matrixWorld,d=f.applyMatrix4(h.invert());t.position.copy(d)}}})}},Gx=class dM{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var i;this.autoUpdateHumanBones=(i=t==null?void 0:t.autoUpdateHumanBones)!=null?i:!0,this._rawHumanBones=new $p(e),this._normalizedHumanBones=new Vx(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new $p(e.humanBones),this._normalizedHumanBones=new Vx(this._rawHumanBones),this}clone(){return new dM(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},a2={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},o2=new Set(["1.0","1.0-beta"]),kx={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},l2=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(s,e){this.parser=s,this.helperRoot=e==null?void 0:e.helperRoot,this.autoUpdateHumanBones=e==null?void 0:e.autoUpdateHumanBones}afterRoot(s){return Ct(this,null,function*(){s.userData.vrmHumanoid=yield this._import(s)})}_import(s){return Ct(this,null,function*(){const e=yield this._v1Import(s);if(e)return e;const t=yield this._v0Import(s);return t||null})}_v1Import(s){return Ct(this,null,function*(){var e,t;const i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const l=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!o2.has(c))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const f=l.humanoid;if(!f)return null;const h=f.humanBones.leftThumbIntermediate!=null||f.humanBones.rightThumbIntermediate!=null,d={};f.humanBones!=null&&(yield Promise.all(Object.entries(f.humanBones).map(_=>Ct(this,[_],function*([v,x]){let S=v;const E=x.node;if(h){const y=kx[S];y!=null&&(S=y)}const M=yield this.parser.getDependency("node",E);if(M==null){console.warn(`A glTF node bound to the humanoid bone ${S} (index = ${E}) does not exist`);return}d[S]={node:M}}))));const m=new Gx(this._ensureRequiredBonesExist(d),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(s.scene.add(m.normalizedHumanBonesRoot),this.helperRoot){const _=new Hx(m);this.helperRoot.add(_),_.renderOrder=this.helperRoot.renderOrder}return m})}_v0Import(s){return Ct(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const a=i.humanoid;if(!a)return null;const l={};a.humanBones!=null&&(yield Promise.all(a.humanBones.map(f=>Ct(this,null,function*(){const h=f.bone,d=f.node;if(h==null||d==null)return;const m=yield this.parser.getDependency("node",d);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${h} (index = ${d}) does not exist`);return}const _=kx[h],v=_??h;if(l[v]!=null){console.warn(`Multiple bone entries for ${v} detected (index = ${d}), ignoring duplicated entries.`);return}l[v]={node:m}}))));const c=new Gx(this._ensureRequiredBonesExist(l),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(s.scene.add(c.normalizedHumanBonesRoot),this.helperRoot){const f=new Hx(c);this.helperRoot.add(f),f.renderOrder=this.helperRoot.renderOrder}return c})}_ensureRequiredBonesExist(s){const e=Object.values(a2).filter(t=>s[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return s}},Wx=class extends pn{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new Lt(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Lt(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,s=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,s=!0),s&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let s=0;s<64;s++){const e=s/63*this._currentTheta;this._attrPos.setXYZ(s+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<63;s++)this._attrIndex.setXYZ(s*3,0,s+1,s+2);this._attrIndex.needsUpdate=!0}},u2=class extends pn{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new F,this._currentTail=new F,this._attrPos=new Lt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Lt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,s=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){const e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){const e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Lc=new lt,Xx=new lt,Ul=new F,qx=new F,Yx=Math.sqrt(2)/2,c2=new lt(0,0,-Yx,Yx),f2=new F(0,1,0),h2=class extends di{constructor(s){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=s;{const e=new Wx;e.radius=.5;const t=new Dr({color:65280,transparent:!0,opacity:.5,side:Ai,depthTest:!1,depthWrite:!1});this._meshPitch=new qn(e,t),this.add(this._meshPitch)}{const e=new Wx;e.radius=.5;const t=new Dr({color:16711680,transparent:!0,opacity:.5,side:Ai,depthTest:!1,depthWrite:!1});this._meshYaw=new qn(e,t),this.add(this._meshYaw)}{const e=new u2;e.radius=.1;const t=new ea({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new jl(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(s){const e=on.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=on.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Ul),this.vrmLookAt.getLookAtWorldQuaternion(Lc),Lc.multiply(this.vrmLookAt.getFaceFrontQuaternion(Xx)),this._meshYaw.position.copy(Ul),this._meshYaw.quaternion.copy(Lc),this._meshPitch.position.copy(Ul),this._meshPitch.quaternion.copy(Lc),this._meshPitch.quaternion.multiply(Xx.setFromAxisAngle(f2,e)),this._meshPitch.quaternion.multiply(c2);const{target:i,autoUpdate:a}=this.vrmLookAt;i!=null&&a&&(i.getWorldPosition(qx).sub(Ul),this._lineTarget.geometry.tail.copy(qx),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Ul)),super.updateMatrixWorld(s)}},d2=new F,p2=new F;function em(s,e){return s.matrixWorld.decompose(d2,e,p2),e}function Hc(s){return[Math.atan2(-s.z,s.x),Math.atan2(s.y,Math.sqrt(s.x*s.x+s.z*s.z))]}function jx(s){const e=Math.round(s/2/Math.PI);return s-2*Math.PI*e}var Zx=new F(0,0,1),m2=new F,g2=new F,_2=new F,v2=new lt,Qd=new lt,Kx=new lt,x2=new lt,Jd=new pi,pM=class mM{constructor(e,t){this.offsetFromHeadBone=new F,this.autoUpdate=!0,this.faceFront=new F(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new lt)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new pi)}getEuler(e){return e.set(on.DEG2RAD*this._pitch,on.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new mM(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return em(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(Zx)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,i]=Hc(this.faceFront);return Jd.set(0,.5*Math.PI+t,i,"YZX"),e.setFromEuler(Jd).premultiply(x2.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Qd),this.getFaceFrontQuaternion(Kx),e.copy(Zx).applyQuaternion(Qd).applyQuaternion(Kx).applyEuler(this.getEuler(Jd))}lookAt(e){const t=v2.copy(this._restHeadWorldQuaternion).multiply(fM(this.getLookAtWorldQuaternion(Qd))),i=this.getLookAtWorldPosition(g2),a=_2.copy(e).sub(i).applyQuaternion(t).normalize(),[l,c]=Hc(this.faceFront),[f,h]=Hc(a),d=jx(f-l),m=jx(c-h);this._yaw=on.RAD2DEG*d,this._pitch=on.RAD2DEG*m,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(m2)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};pM.EULER_ORDER="YXZ";var y2=pM,M2=new F(0,0,1),Qi=new lt,Qa=new lt,Ei=new pi(0,0,0,"YXZ"),Vc=class{constructor(s,e,t,i,a){this.humanoid=s,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=a,this.faceFront=new F(0,0,1),this._restQuatLeftEye=new lt,this._restQuatRightEye=new lt,this._restLeftEyeParentWorldQuat=new lt,this._restRightEyeParentWorldQuat=new lt;const l=this.humanoid.getRawBoneNode("leftEye"),c=this.humanoid.getRawBoneNode("rightEye");l&&(this._restQuatLeftEye.copy(l.quaternion),em(l.parent,this._restLeftEyeParentWorldQuat)),c&&(this._restQuatRightEye.copy(c.quaternion),em(c.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(s,e){const t=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),a=this.humanoid.getNormalizedBoneNode("leftEye"),l=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Ei.x=-on.DEG2RAD*this.rangeMapVerticalDown.map(-e):Ei.x=on.DEG2RAD*this.rangeMapVerticalUp.map(e),s<0?Ei.y=-on.DEG2RAD*this.rangeMapHorizontalInner.map(-s):Ei.y=on.DEG2RAD*this.rangeMapHorizontalOuter.map(s),Qi.setFromEuler(Ei),this._getWorldFaceFrontQuat(Qa),a.quaternion.copy(Qa).multiply(Qi).multiply(Qa.invert()),Qi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(a.quaternion).multiply(Qi).premultiply(Qi.invert()).multiply(this._restQuatLeftEye)),i&&(e<0?Ei.x=-on.DEG2RAD*this.rangeMapVerticalDown.map(-e):Ei.x=on.DEG2RAD*this.rangeMapVerticalUp.map(e),s<0?Ei.y=-on.DEG2RAD*this.rangeMapHorizontalOuter.map(-s):Ei.y=on.DEG2RAD*this.rangeMapHorizontalInner.map(s),Qi.setFromEuler(Ei),this._getWorldFaceFrontQuat(Qa),l.quaternion.copy(Qa).multiply(Qi).multiply(Qa.invert()),Qi.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(l.quaternion).multiply(Qi).premultiply(Qi.invert()).multiply(this._restQuatRightEye))}lookAt(s){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=on.RAD2DEG*s.y,t=on.RAD2DEG*s.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(s){if(this.faceFront.distanceToSquared(M2)<.01)return s.identity();const[e,t]=Hc(this.faceFront);return Ei.set(0,.5*Math.PI+e,t,"YZX"),s.setFromEuler(Ei)}};Vc.type="bone";var tm=class{constructor(s,e,t,i,a){this.expressions=s,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=a}applyYawPitch(s,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),s<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-s))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(s)))}lookAt(s){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=on.RAD2DEG*s.y,t=on.RAD2DEG*s.x;this.applyYawPitch(e,t)}};tm.type="expression";var Qx=class{constructor(s,e){this.inputMaxValue=s,this.outputScale=e}map(s){return this.outputScale*iM(s/this.inputMaxValue)}},S2=new Set(["1.0","1.0-beta"]),Dc=.01,E2=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(s,e){this.parser=s,this.helperRoot=e==null?void 0:e.helperRoot}afterRoot(s){return Ct(this,null,function*(){const e=s.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=s.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");s.userData.vrmLookAt=yield this._import(s,e,t)}})}_import(s,e,t){return Ct(this,null,function*(){if(e==null||t==null)return null;const i=yield this._v1Import(s,e,t);if(i)return i;const a=yield this._v0Import(s,e,t);return a||null})}_v1Import(s,e,t){return Ct(this,null,function*(){var i,a,l;const c=this.parser.json;if(!(((i=c.extensionsUsed)==null?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;const h=(a=c.extensions)==null?void 0:a.VRMC_vrm;if(!h)return null;const d=h.specVersion;if(!S2.has(d))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${d}"`),null;const m=h.lookAt;if(!m)return null;const _=m.type==="expression"?1:10,v=this._v1ImportRangeMap(m.rangeMapHorizontalInner,_),x=this._v1ImportRangeMap(m.rangeMapHorizontalOuter,_),S=this._v1ImportRangeMap(m.rangeMapVerticalDown,_),E=this._v1ImportRangeMap(m.rangeMapVerticalUp,_);let M;m.type==="expression"?M=new tm(t,v,x,S,E):M=new Vc(e,v,x,S,E);const y=this._importLookAt(e,M);return y.offsetFromHeadBone.fromArray((l=m.offsetFromHeadBone)!=null?l:[0,.06,0]),y})}_v1ImportRangeMap(s,e){var t,i;let a=(t=s==null?void 0:s.inputMaxValue)!=null?t:90;const l=(i=s==null?void 0:s.outputScale)!=null?i:e;return a<Dc&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),a=Dc),new Qx(a,l)}_v0Import(s,e,t){return Ct(this,null,function*(){var i,a,l,c;const h=(i=this.parser.json.extensions)==null?void 0:i.VRM;if(!h)return null;const d=h.firstPerson;if(!d)return null;const m=d.lookAtTypeName==="BlendShape"?1:10,_=this._v0ImportDegreeMap(d.lookAtHorizontalInner,m),v=this._v0ImportDegreeMap(d.lookAtHorizontalOuter,m),x=this._v0ImportDegreeMap(d.lookAtVerticalDown,m),S=this._v0ImportDegreeMap(d.lookAtVerticalUp,m);let E;d.lookAtTypeName==="BlendShape"?E=new tm(t,_,v,x,S):E=new Vc(e,_,v,x,S);const M=this._importLookAt(e,E);return d.firstPersonBoneOffset?M.offsetFromHeadBone.set((a=d.firstPersonBoneOffset.x)!=null?a:0,(l=d.firstPersonBoneOffset.y)!=null?l:.06,-((c=d.firstPersonBoneOffset.z)!=null?c:0)):M.offsetFromHeadBone.set(0,.06,0),M.faceFront.set(0,0,-1),E instanceof Vc&&E.faceFront.set(0,0,-1),M})}_v0ImportDegreeMap(s,e){var t,i;const a=s==null?void 0:s.curve;JSON.stringify(a)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let l=(t=s==null?void 0:s.xRange)!=null?t:90;const c=(i=s==null?void 0:s.yRange)!=null?i:e;return l<Dc&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),l=Dc),new Qx(l,c)}_importLookAt(s,e){const t=new y2(s,e);if(this.helperRoot){const i=new h2(t);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return t}};function T2(s,e){return typeof s!="string"||s===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(s)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(s)||/^data:.*,.*$/i.test(s)||/^blob:.*$/i.test(s)?s:e+s)}var A2=new Set(["1.0","1.0-beta"]),b2=class{get name(){return"VRMMetaLoaderPlugin"}constructor(s,e){var t,i,a;this.parser=s,this.needThumbnailImage=(t=e==null?void 0:e.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(i=e==null?void 0:e.acceptLicenseUrls)!=null?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(a=e==null?void 0:e.acceptV0Meta)!=null?a:!0}afterRoot(s){return Ct(this,null,function*(){s.userData.vrmMeta=yield this._import(s)})}_import(s){return Ct(this,null,function*(){const e=yield this._v1Import(s);if(e!=null)return e;const t=yield this._v0Import(s);return t??null})}_v1Import(s){return Ct(this,null,function*(){var e,t,i;const a=this.parser.json;if(!(((e=a.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const c=(t=a.extensions)==null?void 0:t.VRMC_vrm;if(c==null)return null;const f=c.specVersion;if(!A2.has(f))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${f}"`),null;const h=c.meta;if(!h)return null;const d=h.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(d))throw new Error(`VRMMetaLoaderPlugin: The license url "${d}" is not accepted`);let _;return this.needThumbnailImage&&h.thumbnailImage!=null&&(_=(i=yield this._extractGLTFImage(h.thumbnailImage))!=null?i:void 0),{metaVersion:"1",name:h.name,version:h.version,authors:h.authors,copyrightInformation:h.copyrightInformation,contactInformation:h.contactInformation,references:h.references,thirdPartyLicenses:h.thirdPartyLicenses,thumbnailImage:_,licenseUrl:h.licenseUrl,avatarPermission:h.avatarPermission,allowExcessivelyViolentUsage:h.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:h.allowExcessivelySexualUsage,commercialUsage:h.commercialUsage,allowPoliticalOrReligiousUsage:h.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:h.allowAntisocialOrHateUsage,creditNotation:h.creditNotation,allowRedistribution:h.allowRedistribution,modification:h.modification,otherLicenseUrl:h.otherLicenseUrl}})}_v0Import(s){return Ct(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const a=i.meta;if(!a)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let l;return this.needThumbnailImage&&a.texture!=null&&a.texture!==-1&&(l=yield this.parser.getDependency("texture",a.texture)),{metaVersion:"0",allowedUserName:a.allowedUserName,author:a.author,commercialUssageName:a.commercialUssageName,contactInformation:a.contactInformation,licenseName:a.licenseName,otherLicenseUrl:a.otherLicenseUrl,otherPermissionUrl:a.otherPermissionUrl,reference:a.reference,sexualUssageName:a.sexualUssageName,texture:l??void 0,title:a.title,version:a.version,violentUssageName:a.violentUssageName}})}_extractGLTFImage(s){return Ct(this,null,function*(){var e;const i=(e=this.parser.json.images)==null?void 0:e[s];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${s}] of glTF as a thumbnail but the image doesn't exist`),null;let a=i.uri;if(i.bufferView!=null){const c=yield this.parser.getDependency("bufferView",i.bufferView),f=new Blob([c],{type:i.mimeType});a=URL.createObjectURL(f)}return a==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${s}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new Yy().loadAsync(T2(a,this.parser.options.path)).catch(c=>(console.error(c),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},R2=class{constructor(s){this.scene=s.scene,this.meta=s.meta,this.humanoid=s.humanoid,this.expressionManager=s.expressionManager,this.firstPerson=s.firstPerson,this.lookAt=s.lookAt}update(s){this.humanoid.update(),this.lookAt&&this.lookAt.update(s),this.expressionManager&&this.expressionManager.update()}},w2=class extends R2{constructor(s){super(s),this.materials=s.materials,this.springBoneManager=s.springBoneManager,this.nodeConstraintManager=s.nodeConstraintManager}update(s){super.update(s),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(s),this.materials&&this.materials.forEach(e=>{e.update&&e.update(s)})}},C2=Object.defineProperty,Jx=Object.getOwnPropertySymbols,L2=Object.prototype.hasOwnProperty,D2=Object.prototype.propertyIsEnumerable,$x=(s,e,t)=>e in s?C2(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ey=(s,e)=>{for(var t in e||(e={}))L2.call(e,t)&&$x(s,t,e[t]);if(Jx)for(var t of Jx(e))D2.call(e,t)&&$x(s,t,e[t]);return s},Zs=(s,e,t)=>new Promise((i,a)=>{var l=h=>{try{f(t.next(h))}catch(d){a(d)}},c=h=>{try{f(t.throw(h))}catch(d){a(d)}},f=h=>h.done?i(h.value):Promise.resolve(h.value).then(l,c);f((t=t.apply(s,e)).next())}),U2={"":3e3,srgb:3001};function N2(s,e){parseInt(Ks,10)>=152?s.colorSpace=e:s.encoding=U2[e]}var P2=class{get pending(){return Promise.all(this._pendings)}constructor(s,e){this._parser=s,this._materialParams=e,this._pendings=[]}assignPrimitive(s,e){e!=null&&(this._materialParams[s]=e)}assignColor(s,e,t){e!=null&&(this._materialParams[s]=new qe().fromArray(e),t&&this._materialParams[s].convertSRGBToLinear())}assignTexture(s,e,t){return Zs(this,null,function*(){const i=Zs(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,s,e),t&&N2(this._materialParams[s],"srgb"))});return this._pendings.push(i),i})}assignTextureByIndex(s,e,t){return Zs(this,null,function*(){return this.assignTexture(s,e!=null?{index:e}:void 0,t)})}},O2=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,I2=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,B2={None:"none"},ty={None:"none",ScreenCoordinates:"screenCoordinates"},F2={3e3:"",3001:"srgb"};function $d(s){return parseInt(Ks,10)>=152?s.colorSpace:F2[s.encoding]}var z2=class extends Or{constructor(s={}){var e;super({vertexShader:O2,fragmentShader:I2}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=pm,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=B2.None,this._outlineWidthMode=ty.None,this._isOutline=!1,s.transparentWithZWrite&&(s.depthWrite=!0),delete s.transparentWithZWrite,s.fog=!0,s.lights=!0,s.clipping=!0,this.uniforms=Oy.merge([we.common,we.normalmap,we.emissivemap,we.fog,we.lights,{litFactor:{value:new qe(1,1,1)},mapUvTransform:{value:new Qe},colorAlpha:{value:1},normalMapUvTransform:{value:new Qe},shadeColorFactor:{value:new qe(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Qe},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Qe},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new qe(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Qe},parametricRimColorFactor:{value:new qe(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Qe},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new qe(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Qe},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Qe},outlineWidthFactor:{value:0},outlineColorFactor:{value:new qe(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Qe},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=s.uniforms)!=null?e:{}]),this.setValues(s),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,i])=>`${t}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${$d(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${$d(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${$d(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const i=parseInt(Ks,10),a=Object.entries(ey(ey({},this._generateDefines()),this.defines)).filter(([l,c])=>!!c).map(([l,c])=>`#define ${l} ${c}`).join(`
`)+`
`;t.vertexShader=a+t.vertexShader,t.fragmentShader=a+t.fragmentShader,i<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(s){this.uniforms.litFactor.value=s}get map(){return this.uniforms.map.value}set map(s){this.uniforms.map.value=s}get normalMap(){return this.uniforms.normalMap.value}set normalMap(s){this.uniforms.normalMap.value=s}get normalScale(){return this.uniforms.normalScale.value}set normalScale(s){this.uniforms.normalScale.value=s}get emissive(){return this.uniforms.emissive.value}set emissive(s){this.uniforms.emissive.value=s}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(s){this.uniforms.emissiveIntensity.value=s}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(s){this.uniforms.emissiveMap.value=s}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(s){this.uniforms.shadeColorFactor.value=s}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(s){this.uniforms.shadeMultiplyTexture.value=s}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(s){this.uniforms.shadingShiftFactor.value=s}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(s){this.uniforms.shadingShiftTexture.value=s}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(s){this.uniforms.shadingShiftTextureScale.value=s}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(s){this.uniforms.shadingToonyFactor.value=s}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(s){this.uniforms.giEqualizationFactor.value=s}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(s){this.uniforms.matcapFactor.value=s}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(s){this.uniforms.matcapTexture.value=s}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(s){this.uniforms.parametricRimColorFactor.value=s}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(s){this.uniforms.rimMultiplyTexture.value=s}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(s){this.uniforms.rimLightingMixFactor.value=s}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(s){this.uniforms.parametricRimFresnelPowerFactor.value=s}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(s){this.uniforms.parametricRimLiftFactor.value=s}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(s){this.uniforms.outlineWidthMultiplyTexture.value=s}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(s){this.uniforms.outlineWidthFactor.value=s}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(s){this.uniforms.outlineColorFactor.value=s}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(s){this.uniforms.outlineLightingMixFactor.value=s}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(s){this.uniforms.uvAnimationMaskTexture.value=s}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(s){this.uniforms.uvAnimationScrollXOffset.value=s}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(s){this.uniforms.uvAnimationScrollYOffset.value=s}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(s){this.uniforms.uvAnimationRotationPhase.value=s}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(s){this._ignoreVertexColor=s,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(s){this._v0CompatShade=s,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(s){this._debugMode=s,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(s){this._outlineWidthMode=s,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(s){this._isOutline=s,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(s){this._uploadUniformsWorkaround(),this._updateUVAnimation(s)}copy(s){return super.copy(s),this.map=s.map,this.normalMap=s.normalMap,this.emissiveMap=s.emissiveMap,this.shadeMultiplyTexture=s.shadeMultiplyTexture,this.shadingShiftTexture=s.shadingShiftTexture,this.matcapTexture=s.matcapTexture,this.rimMultiplyTexture=s.rimMultiplyTexture,this.outlineWidthMultiplyTexture=s.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=s.uvAnimationMaskTexture,this.normalMapType=s.normalMapType,this.uvAnimationScrollXSpeedFactor=s.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=s.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=s.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=s.ignoreVertexColor,this.v0CompatShade=s.v0CompatShade,this.debugMode=s.debugMode,this.outlineWidthMode=s.outlineWidthMode,this.isOutline=s.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(s){this.uniforms.uvAnimationScrollXOffset.value+=s*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=s*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=s*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const s=parseInt(Ks,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:s,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===ty.ScreenCoordinates}}_updateTextureMatrix(s,e){s.value&&(s.value.matrixAutoUpdate&&s.value.updateMatrix(),e.value.copy(s.value.matrix))}},H2=new Set(["1.0","1.0-beta"]),gM=class Gc{get name(){return Gc.EXTENSION_NAME}constructor(e,t={}){var i,a,l,c;this.parser=e,this.materialType=(i=t.materialType)!=null?i:z2,this.renderOrderOffset=(a=t.renderOrderOffset)!=null?a:0,this.v0CompatShade=(l=t.v0CompatShade)!=null?l:!1,this.debugMode=(c=t.debugMode)!=null?c:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Zs(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Zs(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const i=this._getMToonExtension(e);return i?this._extendMaterialParams(i,t):null}loadMesh(e){return Zs(this,null,function*(){var t;const i=this.parser,l=(t=i.json.meshes)==null?void 0:t[e];if(l==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const c=l.primitives,f=yield i.loadMesh(e);if(c.length===1){const h=f,d=c[0].material;d!=null&&this._setupPrimitive(h,d)}else{const h=f;for(let d=0;d<c.length;d++){const m=h.children[d],_=c[d].material;_!=null&&this._setupPrimitive(m,_)}}return f})}_removeUnlitExtensionIfMToonExists(){const i=this.parser.json.materials;i==null||i.map((a,l)=>{var c;this._getMToonExtension(l)&&((c=a.extensions)!=null&&c.KHR_materials_unlit)&&delete a.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,i;const c=(t=this.parser.json.materials)==null?void 0:t[e];if(c==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const f=(i=c.extensions)==null?void 0:i[Gc.EXTENSION_NAME];if(f==null)return;const h=f.specVersion;if(!H2.has(h)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Gc.EXTENSION_NAME} specVersion "${h}"`);return}return f}_extendMaterialParams(e,t){return Zs(this,null,function*(){var i;delete t.metalness,delete t.roughness;const a=new P2(this.parser,t);a.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),a.assignColor("shadeColorFactor",e.shadeColorFactor),a.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),a.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),a.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),a.assignPrimitive("shadingShiftTextureScale",(i=e.shadingShiftTexture)==null?void 0:i.scale),a.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),a.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),a.assignColor("matcapFactor",e.matcapFactor),a.assignTexture("matcapTexture",e.matcapTexture,!0),a.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),a.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),a.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),a.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),a.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),a.assignPrimitive("outlineWidthMode",e.outlineWidthMode),a.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),a.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),a.assignColor("outlineColorFactor",e.outlineColorFactor),a.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),a.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),a.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),a.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),a.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),a.assignPrimitive("v0CompatShade",this.v0CompatShade),a.assignPrimitive("debugMode",this.debugMode),yield a.pending})}_setupPrimitive(e,t){const i=this._getMToonExtension(t);if(i){const a=this._parseRenderOrder(i);e.renderOrder=a+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof Gi)||!this._shouldGenerateOutline(t))return;e.material=[t];const i=t.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=Yn,e.material.push(i);const a=e.geometry,l=a.index?a.index.count:a.attributes.position.count/3;a.addGroup(0,l,0),a.addGroup(0,l,1)}_addToMaterialSet(e){const t=e.material,i=new Set;Array.isArray(t)?t.forEach(a=>i.add(a)):i.add(t);for(const a of i)this._mToonMaterialSet.add(a)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};gM.EXTENSION_NAME="VRMC_materials_mtoon";var V2=gM,G2=(s,e,t)=>new Promise((i,a)=>{var l=h=>{try{f(t.next(h))}catch(d){a(d)}},c=h=>{try{f(t.throw(h))}catch(d){a(d)}},f=h=>h.done?i(h.value):Promise.resolve(h.value).then(l,c);f((t=t.apply(s,e)).next())}),_M=class nm{get name(){return nm.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return G2(this,null,function*(){const i=this._getHDREmissiveMultiplierExtension(e);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const a=i.emissiveMultiplier;t.emissiveIntensity=a})}_getHDREmissiveMultiplierExtension(e){var t,i;const c=(t=this.parser.json.materials)==null?void 0:t[e];if(c==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const f=(i=c.extensions)==null?void 0:i[nm.EXTENSION_NAME];if(f!=null)return f}};_M.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var k2=_M,W2=Object.defineProperty,X2=Object.defineProperties,q2=Object.getOwnPropertyDescriptors,ny=Object.getOwnPropertySymbols,Y2=Object.prototype.hasOwnProperty,j2=Object.prototype.propertyIsEnumerable,iy=(s,e,t)=>e in s?W2(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ji=(s,e)=>{for(var t in e||(e={}))Y2.call(e,t)&&iy(s,t,e[t]);if(ny)for(var t of ny(e))j2.call(e,t)&&iy(s,t,e[t]);return s},ry=(s,e)=>X2(s,q2(e)),Z2=(s,e,t)=>new Promise((i,a)=>{var l=h=>{try{f(t.next(h))}catch(d){a(d)}},c=h=>{try{f(t.throw(h))}catch(d){a(d)}},f=h=>h.done?i(h.value):Promise.resolve(h.value).then(l,c);f((t=t.apply(s,e)).next())});function Ja(s){return Math.pow(s,2.2)}var K2=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(s){var e;this.parser=s,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return Z2(this,null,function*(){var s;const e=this.parser.json,t=(s=e.extensions)==null?void 0:s.VRM,i=t==null?void 0:t.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((a,l)=>{var c,f;const h=(c=e.materials)==null?void 0:c[l];if(h==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${l}] of glTF but the material doesn't exist`);return}if(a.shader==="VRM/MToon"){const d=this._parseV0MToonProperties(a,h);e.materials[l]=d}else if((f=a.shader)!=null&&f.startsWith("VRM/Unlit")){const d=this._parseV0UnlitProperties(a,h);e.materials[l]=d}else a.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${a.shader}`)}))})}_parseV0MToonProperties(s,e){var t,i,a,l,c,f,h,d,m,_,v,x,S,E,M,y,U,D,A,P,B,I,G,L,w,V,te,re,de,ue,z,j,Y,xe,N,ee,ve,Me,Q,he,ye,Ae,Ne,Ye,ot,Dt,ht,Ht,k,Rn,pt,tt,Ge,Ut,He;const O=(i=(t=s.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?i:!1,ne=((a=s.floatProperties)==null?void 0:a._ZWrite)===1&&O,_e=this._v0ParseRenderQueue(s),Se=(c=(l=s.keywordMap)==null?void 0:l._ALPHATEST_ON)!=null?c:!1,fe=O?"BLEND":Se?"MASK":"OPAQUE",Oe=Se?(h=(f=s.floatProperties)==null?void 0:f._Cutoff)!=null?h:.5:void 0,Re=((m=(d=s.floatProperties)==null?void 0:d._CullMode)!=null?m:2)===0,ut=this._portTextureTransform(s),Te=((v=(_=s.vectorProperties)==null?void 0:_._Color)!=null?v:[1,1,1,1]).map((ae,oe)=>oe===3?ae:Ja(ae)),Fe=(x=s.textureProperties)==null?void 0:x._MainTex,We=Fe!=null?{index:Fe,extensions:Ji({},ut)}:void 0,Ze=(E=(S=s.floatProperties)==null?void 0:S._BumpScale)!=null?E:1,Pe=(M=s.textureProperties)==null?void 0:M._BumpMap,ct=Pe!=null?{index:Pe,scale:Ze,extensions:Ji({},ut)}:void 0,nt=((U=(y=s.vectorProperties)==null?void 0:y._EmissionColor)!=null?U:[0,0,0,1]).map(Ja),Nt=(D=s.textureProperties)==null?void 0:D._EmissionMap,X=Nt!=null?{index:Nt,extensions:Ji({},ut)}:void 0,Le=((P=(A=s.vectorProperties)==null?void 0:A._ShadeColor)!=null?P:[.97,.81,.86,1]).map(Ja),le=(B=s.textureProperties)==null?void 0:B._ShadeTexture,me=le!=null?{index:le,extensions:Ji({},ut)}:void 0;let Ue=(G=(I=s.floatProperties)==null?void 0:I._ShadeShift)!=null?G:0,Ce=(w=(L=s.floatProperties)==null?void 0:L._ShadeToony)!=null?w:.9;Ce=on.lerp(Ce,1,.5+.5*Ue),Ue=-Ue-(1-Ce);const rt=(te=(V=s.floatProperties)==null?void 0:V._IndirectLightIntensity)!=null?te:.1,Vt=rt?1-rt:void 0,Qt=(re=s.textureProperties)==null?void 0:re._SphereAdd,Tt=Qt!=null?[1,1,1]:void 0,zn=Qt!=null?{index:Qt}:void 0,cn=(ue=(de=s.floatProperties)==null?void 0:de._RimLightingMix)!=null?ue:0,en=(z=s.textureProperties)==null?void 0:z._RimTexture,mn=en!=null?{index:en,extensions:Ji({},ut)}:void 0,Nn=((Y=(j=s.vectorProperties)==null?void 0:j._RimColor)!=null?Y:[0,0,0,1]).map(Ja),rr=(N=(xe=s.floatProperties)==null?void 0:xe._RimFresnelPower)!=null?N:1,ta=(ve=(ee=s.floatProperties)==null?void 0:ee._RimLift)!=null?ve:0,na=["none","worldCoordinates","screenCoordinates"][(Q=(Me=s.floatProperties)==null?void 0:Me._OutlineWidthMode)!=null?Q:0];let Ri=(ye=(he=s.floatProperties)==null?void 0:he._OutlineWidth)!=null?ye:0;Ri=.01*Ri;const wi=(Ae=s.textureProperties)==null?void 0:Ae._OutlineWidthTexture,Wi=wi!=null?{index:wi,extensions:Ji({},ut)}:void 0,Ci=((Ye=(Ne=s.vectorProperties)==null?void 0:Ne._OutlineColor)!=null?Ye:[0,0,0]).map(Ja),sr=((Dt=(ot=s.floatProperties)==null?void 0:ot._OutlineColorMode)!=null?Dt:0)===1?(Ht=(ht=s.floatProperties)==null?void 0:ht._OutlineLightingMix)!=null?Ht:1:0,Li=(k=s.textureProperties)==null?void 0:k._UvAnimMaskTexture,tn=Li!=null?{index:Li,extensions:Ji({},ut)}:void 0,ia=(pt=(Rn=s.floatProperties)==null?void 0:Rn._UvAnimScrollX)!=null?pt:0;let ar=(Ge=(tt=s.floatProperties)==null?void 0:tt._UvAnimScrollY)!=null?Ge:0;ar!=null&&(ar=-ar);const C=(He=(Ut=s.floatProperties)==null?void 0:Ut._UvAnimRotation)!=null?He:0,q={specVersion:"1.0",transparentWithZWrite:ne,renderQueueOffsetNumber:_e,shadeColorFactor:Le,shadeMultiplyTexture:me,shadingShiftFactor:Ue,shadingToonyFactor:Ce,giEqualizationFactor:Vt,matcapFactor:Tt,matcapTexture:zn,rimLightingMixFactor:cn,rimMultiplyTexture:mn,parametricRimColorFactor:Nn,parametricRimFresnelPowerFactor:rr,parametricRimLiftFactor:ta,outlineWidthMode:na,outlineWidthFactor:Ri,outlineWidthMultiplyTexture:Wi,outlineColorFactor:Ci,outlineLightingMixFactor:sr,uvAnimationMaskTexture:tn,uvAnimationScrollXSpeedFactor:ia,uvAnimationScrollYSpeedFactor:ar,uvAnimationRotationSpeedFactor:C};return ry(Ji({},e),{pbrMetallicRoughness:{baseColorFactor:Te,baseColorTexture:We},normalTexture:ct,emissiveTexture:X,emissiveFactor:nt,alphaMode:fe,alphaCutoff:Oe,doubleSided:Re,extensions:{VRMC_materials_mtoon:q}})}_parseV0UnlitProperties(s,e){var t,i,a,l,c;const f=s.shader==="VRM/UnlitTransparentZWrite",h=s.shader==="VRM/UnlitTransparent"||f,d=this._v0ParseRenderQueue(s),m=s.shader==="VRM/UnlitCutout",_=h?"BLEND":m?"MASK":"OPAQUE",v=m?(i=(t=s.floatProperties)==null?void 0:t._Cutoff)!=null?i:.5:void 0,x=this._portTextureTransform(s),S=((l=(a=s.vectorProperties)==null?void 0:a._Color)!=null?l:[1,1,1,1]).map(Ja),E=(c=s.textureProperties)==null?void 0:c._MainTex,M=E!=null?{index:E,extensions:Ji({},x)}:void 0,y={specVersion:"1.0",transparentWithZWrite:f,renderQueueOffsetNumber:d,shadeColorFactor:S,shadeMultiplyTexture:M};return ry(Ji({},e),{pbrMetallicRoughness:{baseColorFactor:S,baseColorTexture:M},alphaMode:_,alphaCutoff:v,extensions:{VRMC_materials_mtoon:y}})}_portTextureTransform(s){var e,t,i,a,l;const c=(e=s.vectorProperties)==null?void 0:e._MainTex;if(c==null)return{};const f=[(t=c==null?void 0:c[0])!=null?t:0,(i=c==null?void 0:c[1])!=null?i:0],h=[(a=c==null?void 0:c[2])!=null?a:1,(l=c==null?void 0:c[3])!=null?l:1];return f[1]=1-h[1]-f[1],{KHR_texture_transform:{offset:f,scale:h}}}_v0ParseRenderQueue(s){var e,t;const i=s.shader==="VRM/UnlitTransparentZWrite",a=((e=s.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||s.shader==="VRM/UnlitTransparent"||i,l=((t=s.floatProperties)==null?void 0:t._ZWrite)===1||i;let c=0;if(a){const f=s.renderQueue;f!=null&&(l?c=this._renderQueueMapTransparentZWrite.get(f):c=this._renderQueueMapTransparent.get(f))}return c}_populateRenderQueueMap(s){const e=new Set,t=new Set;s.forEach(i=>{var a,l;const c=i.shader==="VRM/UnlitTransparentZWrite",f=((a=i.keywordMap)==null?void 0:a._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||c,h=((l=i.floatProperties)==null?void 0:l._ZWrite)===1||c;if(f){const d=i.renderQueue;d!=null&&(h?t.add(d):e.add(d))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((i,a)=>{const l=Math.min(Math.max(a-e.size+1,-9),0);this._renderQueueMapTransparent.set(i,l)}),Array.from(t).sort().forEach((i,a)=>{const l=Math.min(Math.max(a,0),9);this._renderQueueMapTransparentZWrite.set(i,l)})}},sy=(s,e,t)=>new Promise((i,a)=>{var l=h=>{try{f(t.next(h))}catch(d){a(d)}},c=h=>{try{f(t.throw(h))}catch(d){a(d)}},f=h=>h.done?i(h.value):Promise.resolve(h.value).then(l,c);f((t=t.apply(s,e)).next())}),hs=new F,ep=class extends di{constructor(s){super(),this._attrPosition=new Lt(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(KT);const e=new pn;e.setAttribute("position",this._attrPosition);const t=new ea({color:16711935,depthTest:!1,depthWrite:!1});this._line=new ef(e,t),this.add(this._line),this.constraint=s}updateMatrixWorld(s){hs.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,hs.x,hs.y,hs.z),this.constraint.source&&hs.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,hs.x,hs.y,hs.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(s)}};function ay(s,e){return e.set(s.elements[12],s.elements[13],s.elements[14])}var Q2=new F,J2=new F;function $2(s,e){return s.decompose(Q2,e,J2),e}function Kc(s){return s.invert?s.invert():s.inverse(),s}var Am=class{constructor(s,e){this.destination=s,this.source=e,this.weight=1}},eD=new F,tD=new F,nD=new F,iD=new lt,rD=new lt,sD=new lt,aD=class extends Am{get aimAxis(){return this._aimAxis}set aimAxis(s){this._aimAxis=s,this._v3AimAxis.set(s==="PositiveX"?1:s==="NegativeX"?-1:0,s==="PositiveY"?1:s==="NegativeY"?-1:0,s==="PositiveZ"?1:s==="NegativeZ"?-1:0)}get dependencies(){const s=new Set([this.source]);return this.destination.parent&&s.add(this.destination.parent),s}constructor(s,e){super(s,e),this._aimAxis="PositiveX",this._v3AimAxis=new F(1,0,0),this._dstRestQuat=new lt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const s=iD.identity(),e=rD.identity();this.destination.parent&&($2(this.destination.parent.matrixWorld,s),Kc(e.copy(s)));const t=eD.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(s),i=ay(this.source.matrixWorld,tD).sub(ay(this.destination.matrixWorld,nD)).normalize(),a=sD.setFromUnitVectors(t,i).premultiply(e).multiply(s).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(a,this.weight)}};function oD(s,e){const t=[s];let i=s.parent;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(a=>{e(a)})}var lD=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(s){this._constraints.add(s);let e=this._objectConstraintsMap.get(s.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(s.destination,e)),e.add(s)}deleteConstraint(s){this._constraints.delete(s),this._objectConstraintsMap.get(s.destination).delete(s)}setInitState(){const s=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,s,e,i=>i.setInitState())}update(){const s=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,s,e,i=>i.update())}_processConstraint(s,e,t,i){if(t.has(s))return;if(e.has(s))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(s);const a=s.dependencies;for(const l of a)oD(l,c=>{const f=this._objectConstraintsMap.get(c);if(f)for(const h of f)this._processConstraint(h,e,t,i)});i(s),t.add(s)}},uD=new lt,cD=new lt,fD=class extends Am{get dependencies(){return new Set([this.source])}constructor(s,e){super(s,e),this._dstRestQuat=new lt,this._invSrcRestQuat=new lt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Kc(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const s=uD.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=cD.copy(this._dstRestQuat).multiply(s);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},hD=new F,dD=new lt,pD=new lt,mD=class extends Am{get rollAxis(){return this._rollAxis}set rollAxis(s){this._rollAxis=s,this._v3RollAxis.set(s==="X"?1:0,s==="Y"?1:0,s==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(s,e){super(s,e),this._rollAxis="X",this._v3RollAxis=new F(1,0,0),this._dstRestQuat=new lt,this._invDstRestQuat=new lt,this._invSrcRestQuatMulDstRestQuat=new lt}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Kc(this._invDstRestQuat.copy(this._dstRestQuat)),Kc(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const s=dD.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=hD.copy(this._v3RollAxis).applyQuaternion(s),i=pD.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(s);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},gD=new Set(["1.0","1.0-beta"]),vM=class Fl{get name(){return Fl.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return sy(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return sy(this,null,function*(){var t;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf(Fl.EXTENSION_NAME))!==-1))return null;const l=new lD,c=yield this.parser.getDependencies("node");return c.forEach((f,h)=>{var d;const m=i.nodes[h],_=(d=m==null?void 0:m.extensions)==null?void 0:d[Fl.EXTENSION_NAME];if(_==null)return;const v=_.specVersion;if(!gD.has(v)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Fl.EXTENSION_NAME} specVersion "${v}"`);return}const x=_.constraint;if(x.roll!=null){const S=this._importRollConstraint(f,c,x.roll);l.addConstraint(S)}else if(x.aim!=null){const S=this._importAimConstraint(f,c,x.aim);l.addConstraint(S)}else if(x.rotation!=null){const S=this._importRotationConstraint(f,c,x.rotation);l.addConstraint(S)}}),e.scene.updateMatrixWorld(),l.setInitState(),l})}_importRollConstraint(e,t,i){const{source:a,rollAxis:l,weight:c}=i,f=t[a],h=new mD(e,f);if(l!=null&&(h.rollAxis=l),c!=null&&(h.weight=c),this.helperRoot){const d=new ep(h);this.helperRoot.add(d)}return h}_importAimConstraint(e,t,i){const{source:a,aimAxis:l,weight:c}=i,f=t[a],h=new aD(e,f);if(l!=null&&(h.aimAxis=l),c!=null&&(h.weight=c),this.helperRoot){const d=new ep(h);this.helperRoot.add(d)}return h}_importRotationConstraint(e,t,i){const{source:a,weight:l}=i,c=t[a],f=new fD(e,c);if(l!=null&&(f.weight=l),this.helperRoot){const h=new ep(f);this.helperRoot.add(h)}return f}};vM.EXTENSION_NAME="VRMC_node_constraint";var _D=vM,Uc=(s,e,t)=>new Promise((i,a)=>{var l=h=>{try{f(t.next(h))}catch(d){a(d)}},c=h=>{try{f(t.throw(h))}catch(d){a(d)}},f=h=>h.done?i(h.value):Promise.resolve(h.value).then(l,c);f((t=t.apply(s,e)).next())}),bm=class{},tp=new F,Ws=new F,xM=class extends bm{get type(){return"capsule"}constructor(s){var e,t,i,a;super(),this.offset=(e=s==null?void 0:s.offset)!=null?e:new F(0,0,0),this.tail=(t=s==null?void 0:s.tail)!=null?t:new F(0,0,0),this.radius=(i=s==null?void 0:s.radius)!=null?i:0,this.inside=(a=s==null?void 0:s.inside)!=null?a:!1}calculateCollision(s,e,t,i){tp.setFromMatrixPosition(s),Ws.subVectors(this.tail,this.offset).applyMatrix4(s),Ws.sub(tp);const a=Ws.lengthSq();i.copy(e).sub(tp);const l=Ws.dot(i);l<=0||(a<=l||Ws.multiplyScalar(l/a),i.sub(Ws));const c=i.length(),f=this.inside?this.radius-t-c:c-t-this.radius;return f<0&&(i.multiplyScalar(1/c),this.inside&&i.negate()),f}},np=new F,oy=new Qe,yM=class extends bm{get type(){return"plane"}constructor(s){var e,t;super(),this.offset=(e=s==null?void 0:s.offset)!=null?e:new F(0,0,0),this.normal=(t=s==null?void 0:s.normal)!=null?t:new F(0,0,1)}calculateCollision(s,e,t,i){i.setFromMatrixPosition(s),i.negate().add(e),oy.getNormalMatrix(s),np.copy(this.normal).applyNormalMatrix(oy).normalize();const a=i.dot(np)-t;return i.copy(np),a}},vD=new F,MM=class extends bm{get type(){return"sphere"}constructor(s){var e,t,i;super(),this.offset=(e=s==null?void 0:s.offset)!=null?e:new F(0,0,0),this.radius=(t=s==null?void 0:s.radius)!=null?t:0,this.inside=(i=s==null?void 0:s.inside)!=null?i:!1}calculateCollision(s,e,t,i){i.subVectors(e,vD.setFromMatrixPosition(s));const a=i.length(),l=this.inside?this.radius-t-a:a-t-this.radius;return l<0&&(i.multiplyScalar(1/a),this.inside&&i.negate()),l}},$i=new F,xD=class extends pn{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new F,this._currentTail=new F,this._shape=s,this._attrPos=new Lt(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Lt(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0);const t=$i.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),s=!0),s&&this._buildPosition()}_buildPosition(){$i.copy(this._currentTail).sub(this._currentOffset);const s=$i.length()/this._currentRadius;for(let i=0;i<=16;i++){const a=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(a),-Math.cos(a),0),this._attrPos.setXYZ(17+i,s+Math.sin(a),Math.cos(a),0),this._attrPos.setXYZ(34+i,-Math.sin(a),0,-Math.cos(a)),this._attrPos.setXYZ(51+i,s+Math.sin(a),0,Math.cos(a))}for(let i=0;i<32;i++){const a=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(a),Math.cos(a)),this._attrPos.setXYZ(100+i,s,Math.sin(a),Math.cos(a))}const e=Math.atan2($i.y,Math.sqrt($i.x*$i.x+$i.z*$i.z)),t=-Math.atan2($i.z,$i.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<34;s++){const e=(s+1)%34;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(68+s*2,34+s,34+e)}for(let s=0;s<32;s++){const e=(s+1)%32;this._attrIndex.setXY(136+s*2,68+s,68+e),this._attrIndex.setXY(200+s*2,100+s,100+e)}this._attrIndex.needsUpdate=!0}},yD=class extends pn{constructor(s){super(),this.worldScale=1,this._currentOffset=new F,this._currentNormal=new F,this._shape=s,this._attrPos=new Lt(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Lt(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),s=!0),s&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},MD=class extends pn{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new F,this._shape=s,this._attrPos=new Lt(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Lt(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){const e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){const e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.needsUpdate=!0}},SD=new F,ip=class extends di{constructor(s){if(super(),this.matrixAutoUpdate=!1,this.collider=s,this.collider.shape instanceof MM)this._geometry=new MD(this.collider.shape);else if(this.collider.shape instanceof xM)this._geometry=new xD(this.collider.shape);else if(this.collider.shape instanceof yM)this._geometry=new yD(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new ea({color:16711935,depthTest:!1,depthWrite:!1});this._line=new jl(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(s){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=SD.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(s)}},ED=class extends pn{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new F,this._springBone=s,this._attrPos=new Lt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Lt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){const e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){const e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},TD=new F,AD=class extends di{constructor(s){super(),this.matrixAutoUpdate=!1,this.springBone=s,this._geometry=new ED(this.springBone);const e=new ea({color:16776960,depthTest:!1,depthWrite:!1});this._line=new jl(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(s){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=TD.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(s)}},rp=class extends jt{constructor(s){super(),this.colliderMatrix=new $e,this.shape=s}updateWorldMatrix(s,e){super.updateWorldMatrix(s,e),bD(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function bD(s,e,t){const i=e.elements;s.copy(e),t&&(s.elements[12]=i[0]*t.x+i[4]*t.y+i[8]*t.z+i[12],s.elements[13]=i[1]*t.x+i[5]*t.y+i[9]*t.z+i[13],s.elements[14]=i[2]*t.x+i[6]*t.y+i[10]*t.z+i[14])}var RD=new $e;function wD(s){return s.invert?s.invert():s.getInverse(RD.copy(s)),s}var CD=class{constructor(s){this._inverseCache=new $e,this._shouldUpdateInverse=!0,this.matrix=s;const e={set:(t,i,a)=>(this._shouldUpdateInverse=!0,t[i]=a,!0)};this._originalElements=s.elements,s.elements=new Proxy(s.elements,e)}get inverse(){return this._shouldUpdateInverse&&(wD(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},sp=new $e,$a=new F,Nl=new F,Pl=new F,Ol=new F,LD=new $e,DD=class{constructor(s,e,t={},i=[]){this._currentTail=new F,this._prevTail=new F,this._boneAxis=new F,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new $e,this._initialLocalRotation=new lt,this._initialLocalChildPosition=new F;var a,l,c,f,h,d;this.bone=s,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(a=t.hitRadius)!=null?a:0,stiffness:(l=t.stiffness)!=null?l:1,gravityPower:(c=t.gravityPower)!=null?c:0,gravityDir:(h=(f=t.gravityDir)==null?void 0:f.clone())!=null?h:new F(0,-1,0),dragForce:(d=t.dragForce)!=null?d:.4},this.colliderGroups=i}get dependencies(){const s=new Set,e=this.bone.parent;e&&s.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let i=0;i<this.colliderGroups[t].colliders.length;i++)s.add(this.colliderGroups[t].colliders[i]);return s}get center(){return this._center}set center(s){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=s,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new CD(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:sp}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const s=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(s),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const s=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(s),this._prevTail.copy(this._currentTail)}update(s){if(s<=0)return;this._calcWorldSpaceBoneLength();const e=Nl.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Ol.copy(this._currentTail).add($a.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*s).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*s),Pl.setFromMatrixPosition(this.bone.matrixWorld),Ol.sub(Pl).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Pl),this._collision(Ol),this._prevTail.copy(this._currentTail),this._currentTail.copy(Ol).applyMatrix4(this._getMatrixWorldToCenter());const t=LD.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,$a.copy(Ol).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(s){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const i=this.colliderGroups[e].colliders[t],a=i.shape.calculateCollision(i.colliderMatrix,s,this.settings.hitRadius,$a);if(a<0){s.addScaledVector($a,-a),s.sub(Pl);const l=s.length();s.multiplyScalar(this._worldSpaceBoneLength/l).add(Pl)}}}_calcWorldSpaceBoneLength(){$a.setFromMatrixPosition(this.bone.matrixWorld),this.child?Nl.setFromMatrixPosition(this.child.matrixWorld):(Nl.copy(this._initialLocalChildPosition),Nl.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=$a.sub(Nl).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:sp}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:sp}};function UD(s,e){const t=[];let i=s;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(a=>{e(a)})}function im(s,e){s.children.forEach(t=>{e(t)||im(t,e)})}function ND(s){var e;const t=new Map;for(const i of s){let a=i;do{const l=((e=t.get(a))!=null?e:0)+1;if(l===s.size)return a;t.set(a,l),a=a.parent}while(a!==null)}return null}var ly=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const s=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{s.add(t)})}),Array.from(s)}get colliders(){const s=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{s.add(t)})}),Array.from(s)}addJoint(s){this._joints.add(s);let e=this._objectSpringBonesMap.get(s.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(s.bone,e)),e.add(s),this._isSortedJointsDirty=!0}addSpringBone(s){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(s)}deleteJoint(s){this._joints.delete(s),this._objectSpringBonesMap.get(s.bone).delete(s),this._isSortedJointsDirty=!0}deleteSpringBone(s){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(s)}setInitState(){this._sortJoints();for(let s=0;s<this._sortedJoints.length;s++){const e=this._sortedJoints[s];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let s=0;s<this._sortedJoints.length;s++){const e=this._sortedJoints[s];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(s){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(s),im(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const s=[],e=new Set,t=new Set,i=new Set;for(const l of this._joints)this._insertJointSort(l,e,t,s,i);this._sortedJoints=s;const a=ND(i);this._ancestors=[],a&&(this._ancestors.push(a),im(a,l=>{var c,f;return((f=(c=this._objectSpringBonesMap.get(l))==null?void 0:c.size)!=null?f:0)>0?!0:(this._ancestors.push(l),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(s,e,t,i,a){if(t.has(s))return;if(e.has(s)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(s);const l=s.dependencies;for(const c of l){let f=!1,h=null;UD(c,d=>{const m=this._objectSpringBonesMap.get(d);if(m)for(const _ of m)f=!0,this._insertJointSort(_,e,t,i,a);else f||(h=d)}),h&&a.add(h)}i.push(s),t.add(s)}_relevantChildrenUpdated(s){var e,t;return((t=(e=this._objectSpringBonesMap.get(s))==null?void 0:e.size)!=null?t:0)>0?!0:(s.updateWorldMatrix(!1,!1),!1)}},uy="VRMC_springBone_extended_collider",PD=new Set(["1.0","1.0-beta"]),OD=new Set(["1.0"]),SM=class no{get name(){return no.EXTENSION_NAME}constructor(e,t){var i;this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot,this.useExtendedColliders=(i=t==null?void 0:t.useExtendedColliders)!=null?i:!0}afterRoot(e){return Uc(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Uc(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const i=yield this._v0Import(e);return i??null})}_v1Import(e){return Uc(this,null,function*(){var t,i,a,l,c;const f=e.parser.json;if(!(((t=f.extensionsUsed)==null?void 0:t.indexOf(no.EXTENSION_NAME))!==-1))return null;const d=new ly,m=yield e.parser.getDependencies("node"),_=(i=f.extensions)==null?void 0:i[no.EXTENSION_NAME];if(!_)return null;const v=_.specVersion;if(!PD.has(v))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${no.EXTENSION_NAME} specVersion "${v}"`),null;const x=(a=_.colliders)==null?void 0:a.map((E,M)=>{var y,U,D,A,P,B,I,G,L,w,V,te,re,de,ue;const z=m[E.node];if(z==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${M} attempted to use the node #${E.node} but not found`),null;const j=E.shape,Y=(y=E.extensions)==null?void 0:y[uy];if(this.useExtendedColliders&&Y!=null){const xe=Y.specVersion;if(!OD.has(xe))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${uy} specVersion "${xe}". Fallbacking to the ${no.EXTENSION_NAME} definition`);else{const N=Y.shape;if(N.sphere)return this._importSphereCollider(z,{offset:new F().fromArray((U=N.sphere.offset)!=null?U:[0,0,0]),radius:(D=N.sphere.radius)!=null?D:0,inside:(A=N.sphere.inside)!=null?A:!1});if(N.capsule)return this._importCapsuleCollider(z,{offset:new F().fromArray((P=N.capsule.offset)!=null?P:[0,0,0]),radius:(B=N.capsule.radius)!=null?B:0,tail:new F().fromArray((I=N.capsule.tail)!=null?I:[0,0,0]),inside:(G=N.capsule.inside)!=null?G:!1});if(N.plane)return this._importPlaneCollider(z,{offset:new F().fromArray((L=N.plane.offset)!=null?L:[0,0,0]),normal:new F().fromArray((w=N.plane.normal)!=null?w:[0,0,1])})}}if(j.sphere)return this._importSphereCollider(z,{offset:new F().fromArray((V=j.sphere.offset)!=null?V:[0,0,0]),radius:(te=j.sphere.radius)!=null?te:0,inside:!1});if(j.capsule)return this._importCapsuleCollider(z,{offset:new F().fromArray((re=j.capsule.offset)!=null?re:[0,0,0]),radius:(de=j.capsule.radius)!=null?de:0,tail:new F().fromArray((ue=j.capsule.tail)!=null?ue:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${M} has no valid shape`)}),S=(l=_.colliderGroups)==null?void 0:l.map((E,M)=>{var y;return{colliders:((y=E.colliders)!=null?y:[]).flatMap(D=>{const A=x==null?void 0:x[D];return A??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${M} attempted to use a collider #${D} but not found`),[])}),name:E.name}});return(c=_.springs)==null||c.forEach((E,M)=>{var y;const U=E.joints,D=(y=E.colliderGroups)==null?void 0:y.map(B=>{const I=S==null?void 0:S[B];if(I==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${M} attempted to use a colliderGroup ${B} but not found`);return I}),A=E.center!=null?m[E.center]:void 0;let P;U.forEach(B=>{if(P){const I=P.node,G=m[I],L=B.node,w=m[L],V={hitRadius:P.hitRadius,dragForce:P.dragForce,gravityPower:P.gravityPower,stiffness:P.stiffness,gravityDir:P.gravityDir!=null?new F().fromArray(P.gravityDir):void 0},te=this._importJoint(G,w,V,D);A&&(te.center=A),d.addJoint(te)}P=B})}),d.setInitState(),d})}_v0Import(e){return Uc(this,null,function*(){var t,i,a;const l=e.parser.json;if(!(((t=l.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const f=(i=l.extensions)==null?void 0:i.VRM,h=f==null?void 0:f.secondaryAnimation;if(!h)return null;const d=h==null?void 0:h.boneGroups;if(!d)return null;const m=new ly,_=yield e.parser.getDependencies("node"),v=(a=h.colliderGroups)==null?void 0:a.map(x=>{var S;const E=_[x.node];return{colliders:((S=x.colliders)!=null?S:[]).map((y,U)=>{var D,A,P;const B=new F(0,0,0);return y.offset&&B.set((D=y.offset.x)!=null?D:0,(A=y.offset.y)!=null?A:0,y.offset.z?-y.offset.z:0),this._importSphereCollider(E,{offset:B,radius:(P=y.radius)!=null?P:0,inside:!1})})}});return d==null||d.forEach((x,S)=>{const E=x.bones;E&&E.forEach(M=>{var y,U,D,A;const P=_[M],B=new F;x.gravityDir?B.set((y=x.gravityDir.x)!=null?y:0,(U=x.gravityDir.y)!=null?U:0,(D=x.gravityDir.z)!=null?D:0):B.set(0,-1,0);const I=x.center!=null?_[x.center]:void 0,G={hitRadius:x.hitRadius,dragForce:x.dragForce,gravityPower:x.gravityPower,stiffness:x.stiffiness,gravityDir:B},L=(A=x.colliderGroups)==null?void 0:A.map(w=>{const V=v==null?void 0:v[w];if(V==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${S} attempted to use a colliderGroup ${w} but not found`);return V});P.traverse(w=>{var V;const te=(V=w.children[0])!=null?V:null,re=this._importJoint(w,te,G,L);I&&(re.center=I),m.addJoint(re)})})}),e.scene.updateMatrixWorld(),m.setInitState(),m})}_importJoint(e,t,i,a){const l=new DD(e,t,i,a);if(this.jointHelperRoot){const c=new AD(l);this.jointHelperRoot.add(c),c.renderOrder=this.jointHelperRoot.renderOrder}return l}_importSphereCollider(e,t){const i=new MM(t),a=new rp(i);if(e.add(a),this.colliderHelperRoot){const l=new ip(a);this.colliderHelperRoot.add(l),l.renderOrder=this.colliderHelperRoot.renderOrder}return a}_importCapsuleCollider(e,t){const i=new xM(t),a=new rp(i);if(e.add(a),this.colliderHelperRoot){const l=new ip(a);this.colliderHelperRoot.add(l),l.renderOrder=this.colliderHelperRoot.renderOrder}return a}_importPlaneCollider(e,t){const i=new yM(t),a=new rp(i);if(e.add(a),this.colliderHelperRoot){const l=new ip(a);this.colliderHelperRoot.add(l),l.renderOrder=this.colliderHelperRoot.renderOrder}return a}};SM.EXTENSION_NAME="VRMC_springBone";var ID=SM,BD=class{get name(){return"VRMLoaderPlugin"}constructor(s,e){var t,i,a,l,c,f,h,d,m,_;this.parser=s;const v=e==null?void 0:e.helperRoot,x=e==null?void 0:e.autoUpdateHumanBones;this.expressionPlugin=(t=e==null?void 0:e.expressionPlugin)!=null?t:new $L(s),this.firstPersonPlugin=(i=e==null?void 0:e.firstPersonPlugin)!=null?i:new t2(s),this.humanoidPlugin=(a=e==null?void 0:e.humanoidPlugin)!=null?a:new l2(s,{helperRoot:v,autoUpdateHumanBones:x}),this.lookAtPlugin=(l=e==null?void 0:e.lookAtPlugin)!=null?l:new E2(s,{helperRoot:v}),this.metaPlugin=(c=e==null?void 0:e.metaPlugin)!=null?c:new b2(s),this.mtoonMaterialPlugin=(f=e==null?void 0:e.mtoonMaterialPlugin)!=null?f:new V2(s),this.materialsHDREmissiveMultiplierPlugin=(h=e==null?void 0:e.materialsHDREmissiveMultiplierPlugin)!=null?h:new k2(s),this.materialsV0CompatPlugin=(d=e==null?void 0:e.materialsV0CompatPlugin)!=null?d:new K2(s),this.springBonePlugin=(m=e==null?void 0:e.springBonePlugin)!=null?m:new ID(s,{colliderHelperRoot:v,jointHelperRoot:v}),this.nodeConstraintPlugin=(_=e==null?void 0:e.nodeConstraintPlugin)!=null?_:new _D(s,{helperRoot:v})}beforeRoot(){return Cc(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(s){return Cc(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(s)})}getMaterialType(s){const e=this.mtoonMaterialPlugin.getMaterialType(s);return e??null}extendMaterialParams(s,e){return Cc(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(s,e),yield this.mtoonMaterialPlugin.extendMaterialParams(s,e)})}afterRoot(s){return Cc(this,null,function*(){yield this.metaPlugin.afterRoot(s),yield this.humanoidPlugin.afterRoot(s),yield this.expressionPlugin.afterRoot(s),yield this.lookAtPlugin.afterRoot(s),yield this.firstPersonPlugin.afterRoot(s),yield this.springBonePlugin.afterRoot(s),yield this.nodeConstraintPlugin.afterRoot(s),yield this.mtoonMaterialPlugin.afterRoot(s);const e=s.userData.vrmMeta,t=s.userData.vrmHumanoid;if(e&&t){const i=new w2({scene:s.scene,expressionManager:s.userData.vrmExpressionManager,firstPerson:s.userData.vrmFirstPerson,humanoid:t,lookAt:s.userData.vrmLookAt,meta:e,materials:s.userData.vrmMToonMaterials,springBoneManager:s.userData.vrmSpringBoneManager,nodeConstraintManager:s.userData.vrmNodeConstraintManager});s.userData.vrm=i}})}};function FD(s){const e=new Set;return s.traverse(t=>{if(!t.isMesh)return;const i=t;e.add(i)}),e}function cy(s,e,t){if(e.size===1){const c=e.values().next().value;if(c.weight===1)return s[c.index]}const i=new Float32Array(s[0].count*3);let a=0;if(t)a=1;else for(const c of e)a+=c.weight;for(const c of e){const f=s[c.index],h=c.weight/a;for(let d=0;d<f.count;d++)i[d*3+0]+=f.getX(d)*h,i[d*3+1]+=f.getY(d)*h,i[d*3+2]+=f.getZ(d)*h}return new Lt(i,3)}function zD(s){var e;const t=FD(s.scene),i=new Map,a=(e=s.expressionManager)==null?void 0:e.expressionMap;if(a!=null)for(const[l,c]of Object.entries(a)){const f=new Set;for(const h of c.binds)if(h instanceof Zc){if(h.weight!==0)for(const d of h.primitives){let m=i.get(d);m==null&&(m=new Map,i.set(d,m));let _=m.get(l);_==null&&(_=new Set,m.set(l,_)),_.add(h)}f.add(h)}for(const h of f)c.deleteBind(h)}for(const l of t){const c=i.get(l);if(c==null)continue;const f=l.geometry.morphAttributes;l.geometry.morphAttributes={};const h=l.geometry.clone();l.geometry=h;const d=h.morphTargetsRelative,m=f.position!=null,_=f.normal!=null,v={},x={},S=[];if(m||_){m&&(v.position=[]),_&&(v.normal=[]);let E=0;for(const[M,y]of c)m&&(v.position[E]=cy(f.position,y,d)),_&&(v.normal[E]=cy(f.normal,y,d)),a==null||a[M].addBind(new Zc({index:E,weight:1,primitives:[l]})),x[M]=E,S.push(0),E++}h.morphAttributes=v,l.morphTargetDictionary=x,l.morphTargetInfluences=S}}function Qc(s,e,t){if(s.getComponent)return s.getComponent(e,t);{let i=s.array[e*s.itemSize+t];return s.normalized&&(i=on.denormalize(i,s.array)),i}}function EM(s,e,t,i){s.setComponent?s.setComponent(e,t,i):(s.normalized&&(i=on.normalize(i,s.array)),s.array[e*s.itemSize+t]=i)}function HD(s){var e;const t=VD(s),i=new Set;for(const _ of t)i.has(_.geometry)&&(_.geometry=YD(_.geometry)),i.add(_.geometry);const a=new Map;for(const _ of i){const v=_.getAttribute("skinIndex"),x=(e=a.get(v))!=null?e:new Map;a.set(v,x);const S=_.getAttribute("skinWeight"),E=GD(v,S);x.set(S,E)}const l=new Map;for(const _ of t){const v=kD(_,a);l.set(_,v)}const c=[];for(const[_,v]of l){let x=!1;for(const S of c)if(WD(v,S.boneInverseMap)){x=!0,S.meshes.add(_);for(const[M,y]of v)S.boneInverseMap.set(M,y);break}x||c.push({boneInverseMap:v,meshes:new Set([_])})}const f=new Map,h=new ap,d=new ap,m=new ap;for(const _ of c){const{boneInverseMap:v,meshes:x}=_,S=Array.from(v.keys()),E=Array.from(v.values()),M=new So(S,E),y=d.getOrCreate(M);for(const U of x){const D=U.geometry.getAttribute("skinIndex"),A=h.getOrCreate(D),P=U.skeleton.bones,B=P.map(L=>m.getOrCreate(L)).join(","),I=`${A};${y};${B}`;let G=f.get(I);G==null&&(G=D.clone(),XD(G,P,S),f.set(I,G)),U.geometry.setAttribute("skinIndex",G)}for(const U of x)U.bind(M,new $e)}}function VD(s){const e=new Set;return s.traverse(t=>{if(!t.isSkinnedMesh)return;const i=t;e.add(i)}),e}function GD(s,e){const t=new Set;for(let i=0;i<s.count;i++)for(let a=0;a<s.itemSize;a++){const l=Qc(s,i,a);Qc(e,i,a)!==0&&t.add(l)}return t}function kD(s,e){const t=new Map,i=s.skeleton,a=s.geometry,l=a.getAttribute("skinIndex"),c=a.getAttribute("skinWeight"),f=e.get(l),h=f==null?void 0:f.get(c);if(!h)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const d of h)t.set(i.bones[d],i.boneInverses[d]);return t}function WD(s,e){for(const[t,i]of s.entries()){const a=e.get(t);if(a!=null&&!qD(i,a))return!1}return!0}function XD(s,e,t){const i=new Map;for(const l of e)i.set(l,i.size);const a=new Map;for(const[l,c]of t.entries()){const f=i.get(c);a.set(f,l)}for(let l=0;l<s.count;l++)for(let c=0;c<s.itemSize;c++){const f=Qc(s,l,c),h=a.get(f);EM(s,l,c,h)}s.needsUpdate=!0}function qD(s,e,t){if(t=t||1e-4,s.elements.length!=e.elements.length)return!1;for(let i=0,a=s.elements.length;i<a;i++)if(Math.abs(s.elements[i]-e.elements[i])>t)return!1;return!0}var ap=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(s){return this._objectIndexMap.get(s)}getOrCreate(s){let e=this._objectIndexMap.get(s);return e==null&&(e=this._index,this._objectIndexMap.set(s,e),this._index++),e}};function YD(s){var e,t,i,a;const l=new pn;l.name=s.name,l.setIndex(s.index);for(const[c,f]of Object.entries(s.attributes))l.setAttribute(c,f);for(const[c,f]of Object.entries(s.morphAttributes)){const h=c;l.morphAttributes[h]=f.concat()}l.morphTargetsRelative=s.morphTargetsRelative,l.groups=[];for(const c of s.groups)l.addGroup(c.start,c.count,c.materialIndex);return l.boundingSphere=(t=(e=s.boundingSphere)==null?void 0:e.clone())!=null?t:null,l.boundingBox=(a=(i=s.boundingBox)==null?void 0:i.clone())!=null?a:null,l.drawRange.start=s.drawRange.start,l.drawRange.count=s.drawRange.count,l.userData=s.userData,l}function fy(s){if(Object.values(s).forEach(e=>{e!=null&&e.isTexture&&e.dispose()}),s.isShaderMaterial){const e=s.uniforms;e&&Object.values(e).forEach(t=>{const i=t.value;i!=null&&i.isTexture&&i.dispose()})}s.dispose()}function jD(s){const e=s.geometry;e&&e.dispose();const t=s.skeleton;t&&t.dispose();const i=s.material;i&&(Array.isArray(i)?i.forEach(a=>fy(a)):i&&fy(i))}function ZD(s){s.traverse(jD)}function KD(s,e){var t,i;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const a=(t=e==null?void 0:e.experimentalSameBoneCounts)!=null?t:!1,l=[];s.traverse(h=>{h.type==="SkinnedMesh"&&l.push(h)});const c=new Map;let f=0;for(const h of l){const m=h.geometry.getAttribute("skinIndex");if(c.has(m))continue;const _=new Map,v=new Map;for(let x=0;x<m.count;x++)for(let S=0;S<m.itemSize;S++){const E=Qc(m,x,S);let M=_.get(E);M==null&&(M=_.size,_.set(E,M),v.set(M,E)),EM(m,x,S,M)}m.needsUpdate=!0,c.set(m,v),f=Math.max(f,_.size)}for(const h of l){const m=h.geometry.getAttribute("skinIndex"),_=c.get(m),v=[],x=[],S=a?f:_.size;for(let M=0;M<S;M++){const y=(i=_.get(M))!=null?i:0;v.push(h.skeleton.bones[y]),x.push(h.skeleton.boneInverses[y])}const E=new So(v,x);h.bind(E,new $e)}}function QD(s){const e=new Map;s.traverse(t=>{var i,a,l,c;if(!t.isMesh)return;const f=t,h=f.geometry,d=h.index;if(d==null)return;const m=e.get(h);if(m!=null){f.geometry=m;return}const _=Object.values(h.attributes)[0].count,v=new Array(_);let x=0;const S=d.array;for(let A=0;A<S.length;A++){const P=S[A];v[P]||(v[P]=!0,x++)}if(x===_)return;const E=[],M=[];let y=0;for(let A=0;A<v.length;A++)if(v[A]){const P=y++;E[A]=P,M[P]=A}const U=new pn;U.name=h.name,U.morphTargetsRelative=h.morphTargetsRelative,h.groups.forEach(A=>{U.addGroup(A.start,A.count,A.materialIndex)}),U.boundingBox=(a=(i=h.boundingBox)==null?void 0:i.clone())!=null?a:null,U.boundingSphere=(c=(l=h.boundingSphere)==null?void 0:l.clone())!=null?c:null,U.setDrawRange(h.drawRange.start,h.drawRange.count),U.userData=h.userData,e.set(h,U);{const A=d.array,P=new A.constructor(A.length);for(let B=0;B<A.length;B++){const I=A[B],G=E[I];P[B]=G}U.setIndex(new Lt(P,1,!1))}Object.keys(h.attributes).forEach(A=>{const P=h.attributes[A];if(P.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const B=P.array,{itemSize:I,normalized:G}=P,L=new B.constructor(M.length*I);M.forEach((w,V)=>{for(let te=0;te<I;te++)L[V*I+te]=B[w*I+te]}),U.setAttribute(A,new Lt(L,I,G))});let D=!0;for(const[A,P]of Object.entries(h.morphAttributes)){const B=A;U.morphAttributes[B]=[];for(let I=0;I<P.length;I++){const G=P[I];if(G.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const L=G.array,{itemSize:w,normalized:V}=G,te=new L.constructor(M.length*w);M.forEach((re,de)=>{for(let ue=0;ue<w;ue++)te[de*w+ue]=L[re*w+ue]}),D=D&&te.every(re=>re===0),U.morphAttributes[B][I]=new Lt(te,w,V)}}D&&(U.morphAttributes={}),f.geometry=U}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function JD(s){var e;((e=s.meta)==null?void 0:e.metaVersion)==="0"&&(s.scene.rotation.y=Math.PI)}var vs=class{constructor(){}};vs.combineMorphs=zD;vs.combineSkeletons=HD;vs.deepDispose=ZD;vs.removeUnnecessaryJoints=KD;vs.removeUnnecessaryVertices=QD;vs.rotateVRM0=JD;/*!
 * @pixiv/three-vrm-core v3.4.2
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.4.2
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.4.2
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.4.2
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.4.2
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.4.2
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */class $D{constructor(){xl(this,"vrm",null);xl(this,"mixer",null);xl(this,"clock",new mb)}async load({scene:e,modelUrl:t}){const i=new mL;i.register(c=>new BD(c));const l=(await i.loadAsync(t)).userData.vrm;if(!l)throw new Error("VRM payload missing in glTF userData");vs.removeUnnecessaryJoints(l.scene),vs.rotateVRM0(l),e.add(l.scene),l.scene.position.set(0,-1.3,0),l.scene.rotation.y=Math.PI,this.vrm=l,this.setupMixer(l.scene)}setupMixer(e){this.mixer=new wb(e)}update(){var t,i;const e=this.clock.getDelta();(t=this.vrm)==null||t.update(e),(i=this.mixer)==null||i.update(e)}lookAt(e){var t,i;(i=(t=this.vrm)==null?void 0:t.lookAt)==null||i.target.copy(e)}dispose(e){this.vrm&&(e.remove(this.vrm.scene),this.vrm=null),this.mixer=null}}function eU({modelUrl:s="/AvatarSample_B.vrm",className:e}){const t=fi.useRef(null),[i,a]=fi.useState("idle"),[l,c]=fi.useState(null);fi.useEffect(()=>{const h=t.current;if(!h)return;const d=new FA;d.background=new qe("#04080f");const m=new Xn(30,1,.1,100);m.position.set(0,1.3,2.8);const _=new hL({antialias:!0,alpha:!0});_.setPixelRatio(window.devicePixelRatio),_.setSize(h.clientWidth,h.clientHeight),h.appendChild(_.domElement);const v=new hb("#ffffff",.8),x=new jy("#ffe0b2",1.1);x.position.set(2,4,3),d.add(v,x);const S=new $D,E=new dL(S),M=new pL(S);let y=!0;a("loading"),S.load({scene:d,modelUrl:s}).then(()=>{y&&a("ready")}).catch(B=>{console.warn("Failed to load VRM",B),y&&(a("error"),c(B instanceof Error?B.message:"Replace public/AvatarSample_B.vrm with a valid model."))});const U=new F(0,1.4,0);function D(){if(!h)return;const{clientWidth:B,clientHeight:I}=h;_.setSize(B,I),m.aspect=B/Math.max(I,1),m.updateProjectionMatrix()}const A=new ResizeObserver(()=>D());A.observe(h),D();const P=()=>{y&&(requestAnimationFrame(P),S.lookAt(U),S.update(),E.update(),M.updateFromAudioLevel(0),_.render(d,m))};return P(),()=>{y=!1,A.disconnect(),_.dispose(),S.dispose(d),_.domElement.parentNode===h&&h.removeChild(_.domElement)}},[s]);const f=["relative","overflow-hidden","rounded-3xl","border","border-white/5","bg-slate-950","shadow-2xl",e].filter(Boolean).join(" ");return Xe.jsxs("div",{className:f,ref:t,children:[i==="loading"?Xe.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 text-xs uppercase tracking-[0.3em] text-white/60",children:"Loading VRM..."}):null,i==="error"?Xe.jsxs("div",{className:"pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 p-6 text-center text-xs text-red-200",children:[Xe.jsx("p",{children:"VRM was not loaded."}),Xe.jsxs("p",{children:["Put a valid avatar at ",Xe.jsx("code",{className:"font-mono",children:"public/AvatarSample_B.vrm"}),"."]}),l?Xe.jsx("p",{className:"text-[10px] text-red-300/80",children:l}):null]}):null]})}function tU(){const[s,e]=fi.useState([]),[t,i]=fi.useState(""),[a,l]=fi.useState(""),[c,f]=fi.useState(!1),[h,d]=fi.useState(!1),m=fi.useMemo(()=>s.filter(v=>v.role!=="system").map(KE),[s]),_=fi.useCallback(async v=>{if(c)return;const x=hd("user",v),S=[...s,x];e(S),i(""),l(""),f(!0);try{const E=await iT(S,{onThought:i,onContent:l}),M=hd("assistant",E.text||"…");e([...S,M]),i(E.thought),l(E.text)}catch(E){console.error("Failed to stream chat",E);const M=hd("assistant","⚠️ Не удалось получить ответ от Ollama.");e([...S,M])}finally{f(!1)}},[s,c]);return Xe.jsxs("div",{className:"app-shell flex-col",children:[Xe.jsx(XE,{onToggleSettings:()=>d(v=>!v),isSettingsOpen:h}),Xe.jsxs("main",{className:"relative flex flex-1 flex-col lg:flex-row",children:[Xe.jsx("section",{className:"relative flex-1",children:Xe.jsx(eU,{className:"relative h-[60vh] w-full lg:h-full"})}),Xe.jsxs("aside",{className:"app-panel h-full w-full max-w-xl",children:[Xe.jsxs("div",{className:"flex items-center justify-between",children:[Xe.jsx("span",{className:"text-xs uppercase tracking-[0.3em] text-white/40",children:"Диалог"}),Xe.jsx(WE,{})]}),Xe.jsx(GE,{messages:m}),Xe.jsx(HE,{text:a,isStreaming:c}),Xe.jsx(VE,{thought:t}),Xe.jsx(qE,{disabled:c,onSend:_})]})]}),Xe.jsx(YE,{open:h,onClose:()=>d(!1)})]})}const TM=document.getElementById("root");if(!TM)throw new Error("Root element #root not found");zE.createRoot(TM).render(Xe.jsx(fi.StrictMode,{children:Xe.jsx(tU,{})}));
