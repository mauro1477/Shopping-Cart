(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bi(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const oe={},ln=[],tt=()=>{},vu=()=>!1,Xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vi=t=>t.startsWith("onUpdate:"),be=Object.assign,wi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wu=Object.prototype.hasOwnProperty,X=(t,e)=>wu.call(t,e),j=Array.isArray,un=t=>Qr(t)==="[object Map]",Da=t=>Qr(t)==="[object Set]",W=t=>typeof t=="function",ue=t=>typeof t=="string",Dt=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",La=t=>(ae(t)||W(t))&&W(t.then)&&W(t.catch),Ma=Object.prototype.toString,Qr=t=>Ma.call(t),Eu=t=>Qr(t).slice(8,-1),Ua=t=>Qr(t)==="[object Object]",Ei=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fn=bi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Iu=/-(\w)/g,Ue=Zr(t=>t.replace(Iu,(e,n)=>n?n.toUpperCase():"")),Su=/\B([A-Z])/g,en=Zr(t=>t.replace(Su,"-$1").toLowerCase()),es=Zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ws=Zr(t=>t?`on${es(t)}`:""),Ot=(t,e)=>!Object.is(t,e),Es=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fa=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Tu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let eo;const ts=()=>eo||(eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ii(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?Pu(r):Ii(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ue(t)||ae(t))return t}const Ru=/;(?![^(]*\))/g,Au=/:([^]+)/,Cu=/\/\*[^]*?\*\//g;function Pu(t){const e={};return t.replace(Cu,"").split(Ru).forEach(n=>{if(n){const r=n.split(Au);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Si(t){let e="";if(ue(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Si(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ou="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ku=bi(Ou);function $a(t){return!!t||t===""}const Ba=t=>!!(t&&t.__v_isRef===!0),Gt=t=>ue(t)?t:t==null?"":j(t)||ae(t)&&(t.toString===Ma||!W(t.toString))?Ba(t)?Gt(t.value):JSON.stringify(t,Ha,2):String(t),Ha=(t,e)=>Ba(e)?Ha(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Is(r,i)+" =>"]=s,n),{})}:Da(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Is(n))}:Dt(e)?Is(e):ae(e)&&!j(e)&&!Ua(e)?String(e):e,Is=(t,e="")=>{var n;return Dt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class Nu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xu(){return Ne}let ie;const Ss=new WeakSet;class ja{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ss.has(this)&&(Ss.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,to(this),za(this);const e=ie,n=He;ie=this,He=!0;try{return this.fn()}finally{Ka(this),ie=e,He=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ai(e);this.deps=this.depsTail=void 0,to(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ss.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zs(this)&&this.run()}get dirty(){return zs(this)}}let Va=0,$n,Bn;function Wa(t,e=!1){if(t.flags|=8,e){t.next=Bn,Bn=t;return}t.next=$n,$n=t}function Ti(){Va++}function Ri(){if(--Va>0)return;if(Bn){let e=Bn;for(Bn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$n;){let e=$n;for($n=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function za(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ka(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ai(r),Du(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function zs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function qa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qn))return;t.globalVersion=qn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!zs(t)){t.flags&=-3;return}const n=ie,r=He;ie=t,He=!0;try{za(t);const s=t.fn(t._value);(e.version===0||Ot(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ie=n,He=r,Ka(t),t.flags&=-3}}function Ai(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ai(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Du(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let He=!0;const Ga=[];function Lt(){Ga.push(He),He=!1}function Mt(){const t=Ga.pop();He=t===void 0?!0:t}function to(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let qn=0;class Lu{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ci{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!He||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new Lu(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,Ja(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(e){this.version++,qn++,this.notify(e)}notify(e){Ti();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ri()}}}function Ja(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ja(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ks=new WeakMap,Kt=Symbol(""),qs=Symbol(""),Gn=Symbol("");function pe(t,e,n){if(He&&ie){let r=Ks.get(t);r||Ks.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ci),s.map=r,s.key=n),s.track()}}function lt(t,e,n,r,s,i){const o=Ks.get(t);if(!o){qn++;return}const a=c=>{c&&c.trigger()};if(Ti(),e==="clear")o.forEach(a);else{const c=j(t),l=c&&Ei(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===Gn||!Dt(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Gn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Kt)),un(t)&&a(o.get(qs)));break;case"delete":c||(a(o.get(Kt)),un(t)&&a(o.get(qs)));break;case"set":un(t)&&a(o.get(Kt));break}}Ri()}function sn(t){const e=Y(t);return e===t?e:(pe(e,"iterate",Gn),Me(t)?e:e.map(me))}function ns(t){return pe(t=Y(t),"iterate",Gn),t}const Mu={__proto__:null,[Symbol.iterator](){return Ts(this,Symbol.iterator,me)},concat(...t){return sn(this).concat(...t.map(e=>j(e)?sn(e):e))},entries(){return Ts(this,"entries",t=>(t[1]=me(t[1]),t))},every(t,e){return ot(this,"every",t,e,void 0,arguments)},filter(t,e){return ot(this,"filter",t,e,n=>n.map(me),arguments)},find(t,e){return ot(this,"find",t,e,me,arguments)},findIndex(t,e){return ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ot(this,"findLast",t,e,me,arguments)},findLastIndex(t,e){return ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return Rs(this,"includes",t)},indexOf(...t){return Rs(this,"indexOf",t)},join(t){return sn(this).join(t)},lastIndexOf(...t){return Rs(this,"lastIndexOf",t)},map(t,e){return ot(this,"map",t,e,void 0,arguments)},pop(){return kn(this,"pop")},push(...t){return kn(this,"push",t)},reduce(t,...e){return no(this,"reduce",t,e)},reduceRight(t,...e){return no(this,"reduceRight",t,e)},shift(){return kn(this,"shift")},some(t,e){return ot(this,"some",t,e,void 0,arguments)},splice(...t){return kn(this,"splice",t)},toReversed(){return sn(this).toReversed()},toSorted(t){return sn(this).toSorted(t)},toSpliced(...t){return sn(this).toSpliced(...t)},unshift(...t){return kn(this,"unshift",t)},values(){return Ts(this,"values",me)}};function Ts(t,e,n){const r=ns(t),s=r[e]();return r!==t&&!Me(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Uu=Array.prototype;function ot(t,e,n,r,s,i){const o=ns(t),a=o!==t&&!Me(t),c=o[e];if(c!==Uu[e]){const f=c.apply(t,i);return a?me(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,me(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function no(t,e,n,r){const s=ns(t);let i=n;return s!==t&&(Me(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,me(a),c,t)}),s[e](i,...r)}function Rs(t,e,n){const r=Y(t);pe(r,"iterate",Gn);const s=r[e](...n);return(s===-1||s===!1)&&ki(n[0])?(n[0]=Y(n[0]),r[e](...n)):s}function kn(t,e,n=[]){Lt(),Ti();const r=Y(t)[e].apply(t,n);return Ri(),Mt(),r}const Fu=bi("__proto__,__v_isRef,__isVue"),Ya=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dt));function $u(t){Dt(t)||(t=String(t));const e=Y(this);return pe(e,"has",t),e.hasOwnProperty(t)}class Xa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ju:tc:i?ec:Za).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=j(e);if(!s){let c;if(o&&(c=Mu[n]))return c;if(n==="hasOwnProperty")return $u}const a=Reflect.get(e,n,ye(e)?e:r);return(Dt(n)?Ya.has(n):Fu(n))||(s||pe(e,"get",n),i)?a:ye(a)?o&&Ei(n)?a:a.value:ae(a)?s?rc(a):rs(a):a}}class Qa extends Xa{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Jt(i);if(!Me(r)&&!Jt(r)&&(i=Y(i),r=Y(r)),!j(e)&&ye(i)&&!ye(r))return c?!1:(i.value=r,!0)}const o=j(e)&&Ei(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,r,ye(e)?e:s);return e===Y(s)&&(o?Ot(r,i)&&lt(e,"set",n,r):lt(e,"add",n,r)),a}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&lt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dt(n)||!Ya.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",j(e)?"length":Kt),Reflect.ownKeys(e)}}class Bu extends Xa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hu=new Qa,ju=new Bu,Vu=new Qa(!0);const Gs=t=>t,gr=t=>Reflect.getPrototypeOf(t);function Wu(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=un(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Gs:e?Js:me;return!e&&pe(i,"iterate",c?qs:Kt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function _r(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zu(t,e){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);t||(Ot(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:c}=gr(o),l=e?Gs:t?Js:me;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pe(Y(s),"iterate",Kt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return t||(Ot(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=e?Gs:t?Js:me;return!t&&pe(c,"iterate",Kt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return be(n,t?{add:_r("add"),set:_r("set"),delete:_r("delete"),clear:_r("clear")}:{add(s){!e&&!Me(s)&&!Jt(s)&&(s=Y(s));const i=Y(this);return gr(i).has.call(i,s)||(i.add(s),lt(i,"add",s,s)),this},set(s,i){!e&&!Me(i)&&!Jt(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=gr(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Ot(i,u)&&lt(o,"set",s,i):lt(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=gr(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&lt(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&lt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wu(s,t,e)}),n}function Pi(t,e){const n=zu(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const Ku={get:Pi(!1,!1)},qu={get:Pi(!1,!0)},Gu={get:Pi(!0,!1)};const Za=new WeakMap,ec=new WeakMap,tc=new WeakMap,Ju=new WeakMap;function Yu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xu(t){return t.__v_skip||!Object.isExtensible(t)?0:Yu(Eu(t))}function rs(t){return Jt(t)?t:Oi(t,!1,Hu,Ku,Za)}function nc(t){return Oi(t,!1,Vu,qu,ec)}function rc(t){return Oi(t,!0,ju,Gu,tc)}function Oi(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Xu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function fn(t){return Jt(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function Me(t){return!!(t&&t.__v_isShallow)}function ki(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Qu(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Fa(t,"__v_skip",!0),t}const me=t=>ae(t)?rs(t):t,Js=t=>ae(t)?rc(t):t;function ye(t){return t?t.__v_isRef===!0:!1}function Zu(t){return sc(t,!1)}function ef(t){return sc(t,!0)}function sc(t,e){return ye(t)?t:new tf(t,e)}class tf{constructor(e,n){this.dep=new Ci,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:me(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Me(e)||Jt(e);e=r?e:Y(e),Ot(e,n)&&(this._rawValue=e,this._value=r?e:me(e),this.dep.trigger())}}function dn(t){return ye(t)?t.value:t}const nf={get:(t,e,n)=>e==="__v_raw"?t:dn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ic(t){return fn(t)?t:new Proxy(t,nf)}class rf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ci(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return Wa(this,!0),!0}get value(){const e=this.dep.track();return qa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sf(t,e,n=!1){let r,s;return W(t)?r=t:(r=t.get,s=t.set),new rf(r,s,n)}const yr={},Nr=new WeakMap;let Vt;function of(t,e=!1,n=Vt){if(n){let r=Nr.get(n);r||Nr.set(n,r=[]),r.push(t)}}function af(t,e,n=oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=x=>s?x:Me(x)||s===!1||s===0?Tt(x,1):Tt(x);let u,f,p,m,y=!1,E=!1;if(ye(t)?(f=()=>t.value,y=Me(t)):fn(t)?(f=()=>l(t),y=!0):j(t)?(E=!0,y=t.some(x=>fn(x)||Me(x)),f=()=>t.map(x=>{if(ye(x))return x.value;if(fn(x))return l(x);if(W(x))return c?c(x,2):x()})):W(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Lt();try{p()}finally{Mt()}}const x=Vt;Vt=u;try{return c?c(t,3,[m]):t(m)}finally{Vt=x}}:f=tt,e&&s){const x=f,B=s===!0?1/0:s;f=()=>Tt(x(),B)}const S=xu(),P=()=>{u.stop(),S&&S.active&&wi(S.effects,u)};if(i&&e){const x=e;e=(...B)=>{x(...B),P()}}let A=E?new Array(t.length).fill(yr):yr;const O=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const B=u.run();if(s||y||(E?B.some((q,z)=>Ot(q,A[z])):Ot(B,A))){p&&p();const q=Vt;Vt=u;try{const z=[B,A===yr?void 0:E&&A[0]===yr?[]:A,m];c?c(e,3,z):e(...z),A=B}finally{Vt=q}}}else u.run()};return a&&a(O),u=new ja(f),u.scheduler=o?()=>o(O,!1):O,m=x=>of(x,!1,u),p=u.onStop=()=>{const x=Nr.get(u);if(x){if(c)c(x,4);else for(const B of x)B();Nr.delete(u)}},e?r?O(!0):A=u.run():o?o(O.bind(null,!0),!0):u.run(),P.pause=u.pause.bind(u),P.resume=u.resume.bind(u),P.stop=P,P}function Tt(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ye(t))Tt(t.value,e,n);else if(j(t))for(let r=0;r<t.length;r++)Tt(t[r],e,n);else if(Da(t)||un(t))t.forEach(r=>{Tt(r,e,n)});else if(Ua(t)){for(const r in t)Tt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ir(t,e,n,r){try{return r?t(...r):t()}catch(s){ss(s,e,n)}}function st(t,e,n,r){if(W(t)){const s=ir(t,e,n,r);return s&&La(s)&&s.catch(i=>{ss(i,e,n)}),s}if(j(t)){const s=[];for(let i=0;i<t.length;i++)s.push(st(t[i],e,n,r));return s}}function ss(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||oe;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Lt(),ir(i,null,10,[t,c,l]),Mt();return}}cf(t,n,s,r,o)}function cf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ee=[];let Qe=-1;const hn=[];let Et=null,on=0;const oc=Promise.resolve();let xr=null;function ac(t){const e=xr||oc;return t?e.then(this?t.bind(this):t):e}function lf(t){let e=Qe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1,s=Ee[r],i=Jn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ni(t){if(!(t.flags&1)){const e=Jn(t),n=Ee[Ee.length-1];!n||!(t.flags&2)&&e>=Jn(n)?Ee.push(t):Ee.splice(lf(e),0,t),t.flags|=1,cc()}}function cc(){xr||(xr=oc.then(uc))}function uf(t){j(t)?hn.push(...t):Et&&t.id===-1?Et.splice(on+1,0,t):t.flags&1||(hn.push(t),t.flags|=1),cc()}function ro(t,e,n=Qe+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lc(t){if(hn.length){const e=[...new Set(hn)].sort((n,r)=>Jn(n)-Jn(r));if(hn.length=0,Et){Et.push(...e);return}for(Et=e,on=0;on<Et.length;on++){const n=Et[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,on=0}}const Jn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function uc(t){try{for(Qe=0;Qe<Ee.length;Qe++){const e=Ee[Qe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ir(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qe<Ee.length;Qe++){const e=Ee[Qe];e&&(e.flags&=-2)}Qe=-1,Ee.length=0,lc(),xr=null,(Ee.length||hn.length)&&uc()}}let $e=null,fc=null;function Dr(t){const e=$e;return $e=t,fc=t&&t.type.__scopeId||null,e}function Lr(t,e=$e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&po(-1);const i=Dr(e);let o;try{o=t(...s)}finally{Dr(i),r._d&&po(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ht(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Lt(),st(c,n,8,[t.el,a,t,e]),Mt())}}const ff=Symbol("_vte"),df=t=>t.__isTeleport;function xi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function dc(t,e){return W(t)?be({name:t.name},e,{setup:t}):t}function hc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mr(t,e,n,r,s=!1){if(j(t)){t.forEach((y,E)=>Mr(y,e&&(j(e)?e[E]:e),n,r,s));return}if(Hn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Mi(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState,p=Y(f),m=f===oe?()=>!1:y=>X(p,y);if(l!=null&&l!==c&&(ue(l)?(u[l]=null,m(l)&&(f[l]=null)):ye(l)&&(l.value=null)),W(c))ir(c,a,12,[o,u]);else{const y=ue(c),E=ye(c);if(y||E){const S=()=>{if(t.f){const P=y?m(c)?f[c]:u[c]:c.value;s?j(P)&&wi(P,i):j(P)?P.includes(i)||P.push(i):y?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else y?(u[c]=o,m(c)&&(f[c]=o)):E&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,ke(S,n)):S()}}}ts().requestIdleCallback;ts().cancelIdleCallback;const Hn=t=>!!t.type.__asyncLoader,pc=t=>t.type.__isKeepAlive;function hf(t,e){mc(t,"a",e)}function pf(t,e){mc(t,"da",e)}function mc(t,e,n=ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(is(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pc(s.parent.vnode)&&mf(r,e,n,s),s=s.parent}}function mf(t,e,n,r){const s=is(e,t,r,!0);gc(()=>{wi(r[e],s)},n)}function is(t,e,n=ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lt();const a=or(n),c=st(e,n,t,o);return a(),Mt(),c});return r?s.unshift(i):s.push(i),i}}const mt=t=>(e,n=ge)=>{(!Xn||t==="sp")&&is(t,(...r)=>e(...r),n)},gf=mt("bm"),_f=mt("m"),yf=mt("bu"),bf=mt("u"),vf=mt("bum"),gc=mt("um"),wf=mt("sp"),Ef=mt("rtg"),If=mt("rtc");function Sf(t,e=ge){is("ec",t,e)}const Tf="components";function Yt(t,e){return Af(Tf,t,!0,e)||t}const Rf=Symbol.for("v-ndc");function Af(t,e,n=!0,r=!1){const s=$e||ge;if(s){const i=s.type;{const a=md(i,!1);if(a&&(a===e||a===Ue(e)||a===es(Ue(e))))return i}const o=so(s[t]||i[t],e)||so(s.appContext[t],e);return!o&&r?i:o}}function so(t,e){return t&&(t[e]||t[Ue(e)]||t[es(Ue(e))])}function _c(t,e,n,r){let s;const i=n,o=j(t);if(o||ue(t)){const a=o&&fn(t);let c=!1;a&&(c=!Me(t),t=ns(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?me(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const Ys=t=>t?Fc(t)?Mi(t):Ys(t.parent):null,jn=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ys(t.parent),$root:t=>Ys(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bc(t),$forceUpdate:t=>t.f||(t.f=()=>{Ni(t.update)}),$nextTick:t=>t.n||(t.n=ac.bind(t.proxy)),$watch:t=>Gf.bind(t)}),As=(t,e)=>t!==oe&&!t.__isScriptSetup&&X(t,e),Cf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(As(r,e))return o[e]=1,r[e];if(s!==oe&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==oe&&X(n,e))return o[e]=4,n[e];Xs&&(o[e]=0)}}const u=jn[e];let f,p;if(u)return e==="$attrs"&&pe(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==oe&&X(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return As(s,e)?(s[e]=n,!0):r!==oe&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==oe&&X(t,o)||As(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(jn,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function io(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xs=!0;function Pf(t){const e=bc(t),n=t.proxy,r=t.ctx;Xs=!1,e.beforeCreate&&oo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:y,activated:E,deactivated:S,beforeDestroy:P,beforeUnmount:A,destroyed:O,unmounted:x,render:B,renderTracked:q,renderTriggered:z,errorCaptured:he,serverPrefetch:ve,expose:De,inheritAttrs:yt,components:Bt,directives:ze,filters:Pn}=e;if(l&&Of(l,r,null),o)for(const Z in o){const G=o[Z];W(G)&&(r[Z]=G.bind(n))}if(s){const Z=s.call(n,n);ae(Z)&&(t.data=rs(Z))}if(Xs=!0,i)for(const Z in i){const G=i[Z],it=W(G)?G.bind(n,n):W(G.get)?G.get.bind(n,n):tt,bt=!W(G)&&W(G.set)?G.set.bind(n):tt,Ke=Fe({get:it,set:bt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Te=>Ke.value=Te})}if(a)for(const Z in a)yc(a[Z],r,n,Z);if(c){const Z=W(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(G=>{vr(G,Z[G])})}u&&oo(u,t,"c");function de(Z,G){j(G)?G.forEach(it=>Z(it.bind(n))):G&&Z(G.bind(n))}if(de(gf,f),de(_f,p),de(yf,m),de(bf,y),de(hf,E),de(pf,S),de(Sf,he),de(If,q),de(Ef,z),de(vf,A),de(gc,x),de(wf,ve),j(De))if(De.length){const Z=t.exposed||(t.exposed={});De.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:it=>n[G]=it})})}else t.exposed||(t.exposed={});B&&t.render===tt&&(t.render=B),yt!=null&&(t.inheritAttrs=yt),Bt&&(t.components=Bt),ze&&(t.directives=ze),ve&&hc(t)}function Of(t,e,n=tt){j(t)&&(t=Qs(t));for(const r in t){const s=t[r];let i;ae(s)?"default"in s?i=dt(s.from||r,s.default,!0):i=dt(s.from||r):i=dt(s),ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function oo(t,e,n){st(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yc(t,e,n,r){let s=r.includes(".")?xc(n,r):()=>n[r];if(ue(t)){const i=e[t];W(i)&&wr(s,i)}else if(W(t))wr(s,t.bind(n));else if(ae(t))if(j(t))t.forEach(i=>yc(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&wr(s,i,t)}}function bc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ur(c,l,o,!0)),Ur(c,e,o)),ae(e)&&i.set(e,c),c}function Ur(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ur(t,i,n,!0),s&&s.forEach(o=>Ur(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=kf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kf={data:ao,props:co,emits:co,methods:Ln,computed:Ln,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Ln,directives:Ln,watch:xf,provide:ao,inject:Nf};function ao(t,e){return e?t?function(){return be(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Nf(t,e){return Ln(Qs(t),Qs(e))}function Qs(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?be(Object.create(null),t,e):e}function co(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:be(Object.create(null),io(t),io(e??{})):e}function xf(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const r in e)n[r]=we(t[r],e[r]);return n}function vc(){return{app:null,config:{isNativeTag:vu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Df=0;function Lf(t,e){return function(r,s=null){W(r)||(r=be({},r)),s!=null&&!ae(s)&&(s=null);const i=vc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Df++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_d,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(l,...f)):W(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const m=l._ceVNode||ce(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,Mi(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(st(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=pn;pn=l;try{return u()}finally{pn=f}}};return l}}let pn=null;function vr(t,e){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[t]=e}}function dt(t,e,n=!1){const r=ge||$e;if(r||pn){const s=pn?pn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r&&r.proxy):e}}const wc={},Ec=()=>Object.create(wc),Ic=t=>Object.getPrototypeOf(t)===wc;function Mf(t,e,n,r=!1){const s={},i=Ec();t.propsDefaults=Object.create(null),Sc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:nc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Uf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(os(t.emitsOptions,p))continue;const m=e[p];if(c)if(X(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const y=Ue(p);s[y]=Zs(c,a,y,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Sc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!X(e,f)&&((u=en(f))===f||!X(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Zs(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!X(e,f))&&(delete i[f],l=!0)}l&&lt(t.attrs,"set","")}function Sc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fn(c))continue;const l=e[c];let u;s&&X(s,u=Ue(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:os(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||oe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Zs(s,c,f,l[f],t,!X(l,f))}}return o}function Zs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=or(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}const Ff=new WeakMap;function Tc(t,e,n=!1){const r=n?Ff:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=f=>{c=!0;const[p,m]=Tc(f,e,!0);be(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ae(t)&&r.set(t,ln),ln;if(j(i))for(let u=0;u<i.length;u++){const f=Ue(i[u]);lo(f)&&(o[f]=oe)}else if(i)for(const u in i){const f=Ue(u);if(lo(f)){const p=i[u],m=o[f]=j(p)||W(p)?{type:p}:be({},p),y=m.type;let E=!1,S=!0;if(j(y))for(let P=0;P<y.length;++P){const A=y[P],O=W(A)&&A.name;if(O==="Boolean"){E=!0;break}else O==="String"&&(S=!1)}else E=W(y)&&y.name==="Boolean";m[0]=E,m[1]=S,(E||X(m,"default"))&&a.push(f)}}const l=[o,a];return ae(t)&&r.set(t,l),l}function lo(t){return t[0]!=="$"&&!Fn(t)}const Rc=t=>t[0]==="_"||t==="$stable",Di=t=>j(t)?t.map(Ze):[Ze(t)],$f=(t,e,n)=>{if(e._n)return e;const r=Lr((...s)=>Di(e(...s)),n);return r._c=!1,r},Ac=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Rc(s))continue;const i=t[s];if(W(i))e[s]=$f(s,i,r);else if(i!=null){const o=Di(i);e[s]=()=>o}}},Cc=(t,e)=>{const n=Di(e);t.slots.default=()=>n},Pc=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Bf=(t,e,n)=>{const r=t.slots=Ec();if(t.vnode.shapeFlag&32){const s=e._;s?(Pc(r,e,n),n&&Fa(r,"_",s,!0)):Ac(e,r)}else e&&Cc(t,e)},Hf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Pc(s,e,n):(i=!e.$stable,Ac(e,s)),o=e}else e&&(Cc(t,e),o={default:1});if(i)for(const a in s)!Rc(a)&&o[a]==null&&delete s[a]},ke=td;function jf(t){return Vf(t)}function Vf(t,e){const n=ts();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=tt,insertStaticContent:y}=t,E=(d,h,g,b=null,I=null,w=null,k=void 0,C=null,R=!!h.dynamicChildren)=>{if(d===h)return;d&&!Nn(d,h)&&(b=v(d),Te(d,I,w,!0),d=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:T,ref:$,shapeFlag:D}=h;switch(T){case as:S(d,h,g,b);break;case Xt:P(d,h,g,b);break;case Ps:d==null&&A(h,g,b,k);break;case Ie:Bt(d,h,g,b,I,w,k,C,R);break;default:D&1?B(d,h,g,b,I,w,k,C,R):D&6?ze(d,h,g,b,I,w,k,C,R):(D&64||D&128)&&T.process(d,h,g,b,I,w,k,C,R,M)}$!=null&&I&&Mr($,d&&d.ref,w,h||d,!h)},S=(d,h,g,b)=>{if(d==null)r(h.el=a(h.children),g,b);else{const I=h.el=d.el;h.children!==d.children&&l(I,h.children)}},P=(d,h,g,b)=>{d==null?r(h.el=c(h.children||""),g,b):h.el=d.el},A=(d,h,g,b)=>{[d.el,d.anchor]=y(d.children,h,g,b,d.el,d.anchor)},O=({el:d,anchor:h},g,b)=>{let I;for(;d&&d!==h;)I=p(d),r(d,g,b),d=I;r(h,g,b)},x=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},B=(d,h,g,b,I,w,k,C,R)=>{h.type==="svg"?k="svg":h.type==="math"&&(k="mathml"),d==null?q(h,g,b,I,w,k,C,R):ve(d,h,I,w,k,C,R)},q=(d,h,g,b,I,w,k,C)=>{let R,T;const{props:$,shapeFlag:D,transition:F,dirs:H}=d;if(R=d.el=o(d.type,w,$&&$.is,$),D&8?u(R,d.children):D&16&&he(d.children,R,null,b,I,Cs(d,w),k,C),H&&Ht(d,null,b,"created"),z(R,d,d.scopeId,k,b),$){for(const se in $)se!=="value"&&!Fn(se)&&i(R,se,null,$[se],w,b);"value"in $&&i(R,"value",null,$.value,w),(T=$.onVnodeBeforeMount)&&Ye(T,b,d)}H&&Ht(d,null,b,"beforeMount");const K=Wf(I,F);K&&F.beforeEnter(R),r(R,h,g),((T=$&&$.onVnodeMounted)||K||H)&&ke(()=>{T&&Ye(T,b,d),K&&F.enter(R),H&&Ht(d,null,b,"mounted")},I)},z=(d,h,g,b,I)=>{if(g&&m(d,g),b)for(let w=0;w<b.length;w++)m(d,b[w]);if(I){let w=I.subTree;if(h===w||Lc(w.type)&&(w.ssContent===h||w.ssFallback===h)){const k=I.vnode;z(d,k,k.scopeId,k.slotScopeIds,I.parent)}}},he=(d,h,g,b,I,w,k,C,R=0)=>{for(let T=R;T<d.length;T++){const $=d[T]=C?It(d[T]):Ze(d[T]);E(null,$,h,g,b,I,w,k,C)}},ve=(d,h,g,b,I,w,k)=>{const C=h.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:$}=h;R|=d.patchFlag&16;const D=d.props||oe,F=h.props||oe;let H;if(g&&jt(g,!1),(H=F.onVnodeBeforeUpdate)&&Ye(H,g,h,d),$&&Ht(h,d,g,"beforeUpdate"),g&&jt(g,!0),(D.innerHTML&&F.innerHTML==null||D.textContent&&F.textContent==null)&&u(C,""),T?De(d.dynamicChildren,T,C,g,b,Cs(h,I),w):k||G(d,h,C,null,g,b,Cs(h,I),w,!1),R>0){if(R&16)yt(C,D,F,g,I);else if(R&2&&D.class!==F.class&&i(C,"class",null,F.class,I),R&4&&i(C,"style",D.style,F.style,I),R&8){const K=h.dynamicProps;for(let se=0;se<K.length;se++){const Q=K[se],Pe=D[Q],Re=F[Q];(Re!==Pe||Q==="value")&&i(C,Q,Pe,Re,I,g)}}R&1&&d.children!==h.children&&u(C,h.children)}else!k&&T==null&&yt(C,D,F,g,I);((H=F.onVnodeUpdated)||$)&&ke(()=>{H&&Ye(H,g,h,d),$&&Ht(h,d,g,"updated")},b)},De=(d,h,g,b,I,w,k)=>{for(let C=0;C<h.length;C++){const R=d[C],T=h[C],$=R.el&&(R.type===Ie||!Nn(R,T)||R.shapeFlag&70)?f(R.el):g;E(R,T,$,null,b,I,w,k,!0)}},yt=(d,h,g,b,I)=>{if(h!==g){if(h!==oe)for(const w in h)!Fn(w)&&!(w in g)&&i(d,w,h[w],null,I,b);for(const w in g){if(Fn(w))continue;const k=g[w],C=h[w];k!==C&&w!=="value"&&i(d,w,C,k,I,b)}"value"in g&&i(d,"value",h.value,g.value,I)}},Bt=(d,h,g,b,I,w,k,C,R)=>{const T=h.el=d?d.el:a(""),$=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:H}=h;H&&(C=C?C.concat(H):H),d==null?(r(T,g,b),r($,g,b),he(h.children||[],g,$,I,w,k,C,R)):D>0&&D&64&&F&&d.dynamicChildren?(De(d.dynamicChildren,F,g,I,w,k,C),(h.key!=null||I&&h===I.subTree)&&Oc(d,h,!0)):G(d,h,g,$,I,w,k,C,R)},ze=(d,h,g,b,I,w,k,C,R)=>{h.slotScopeIds=C,d==null?h.shapeFlag&512?I.ctx.activate(h,g,b,k,R):Pn(h,g,b,I,w,k,R):tn(d,h,R)},Pn=(d,h,g,b,I,w,k)=>{const C=d.component=ud(d,b,I);if(pc(d)&&(C.ctx.renderer=M),fd(C,!1,k),C.asyncDep){if(I&&I.registerDep(C,de,k),!d.el){const R=C.subTree=ce(Xt);P(null,R,h,g)}}else de(C,d,h,g,I,w,k)},tn=(d,h,g)=>{const b=h.component=d.component;if(Zf(d,h,g))if(b.asyncDep&&!b.asyncResolved){Z(b,h,g);return}else b.next=h,b.update();else h.el=d.el,b.vnode=h},de=(d,h,g,b,I,w,k)=>{const C=()=>{if(d.isMounted){let{next:D,bu:F,u:H,parent:K,vnode:se}=d;{const Ge=kc(d);if(Ge){D&&(D.el=se.el,Z(d,D,k)),Ge.asyncDep.then(()=>{d.isUnmounted||C()});return}}let Q=D,Pe;jt(d,!1),D?(D.el=se.el,Z(d,D,k)):D=se,F&&Es(F),(Pe=D.props&&D.props.onVnodeBeforeUpdate)&&Ye(Pe,K,D,se),jt(d,!0);const Re=fo(d),qe=d.subTree;d.subTree=Re,E(qe,Re,f(qe.el),v(qe),d,I,w),D.el=Re.el,Q===null&&ed(d,Re.el),H&&ke(H,I),(Pe=D.props&&D.props.onVnodeUpdated)&&ke(()=>Ye(Pe,K,D,se),I)}else{let D;const{el:F,props:H}=h,{bm:K,m:se,parent:Q,root:Pe,type:Re}=d,qe=Hn(h);jt(d,!1),K&&Es(K),!qe&&(D=H&&H.onVnodeBeforeMount)&&Ye(D,Q,h),jt(d,!0);{Pe.ce&&Pe.ce._injectChildStyle(Re);const Ge=d.subTree=fo(d);E(null,Ge,g,b,d,I,w),h.el=Ge.el}if(se&&ke(se,I),!qe&&(D=H&&H.onVnodeMounted)){const Ge=h;ke(()=>Ye(D,Q,Ge),I)}(h.shapeFlag&256||Q&&Hn(Q.vnode)&&Q.vnode.shapeFlag&256)&&d.a&&ke(d.a,I),d.isMounted=!0,h=g=b=null}};d.scope.on();const R=d.effect=new ja(C);d.scope.off();const T=d.update=R.run.bind(R),$=d.job=R.runIfDirty.bind(R);$.i=d,$.id=d.uid,R.scheduler=()=>Ni($),jt(d,!0),T()},Z=(d,h,g)=>{h.component=d;const b=d.vnode.props;d.vnode=h,d.next=null,Uf(d,h.props,b,g),Hf(d,h.children,g),Lt(),ro(d),Mt()},G=(d,h,g,b,I,w,k,C,R=!1)=>{const T=d&&d.children,$=d?d.shapeFlag:0,D=h.children,{patchFlag:F,shapeFlag:H}=h;if(F>0){if(F&128){bt(T,D,g,b,I,w,k,C,R);return}else if(F&256){it(T,D,g,b,I,w,k,C,R);return}}H&8?($&16&&Le(T,I,w),D!==T&&u(g,D)):$&16?H&16?bt(T,D,g,b,I,w,k,C,R):Le(T,I,w,!0):($&8&&u(g,""),H&16&&he(D,g,b,I,w,k,C,R))},it=(d,h,g,b,I,w,k,C,R)=>{d=d||ln,h=h||ln;const T=d.length,$=h.length,D=Math.min(T,$);let F;for(F=0;F<D;F++){const H=h[F]=R?It(h[F]):Ze(h[F]);E(d[F],H,g,null,I,w,k,C,R)}T>$?Le(d,I,w,!0,!1,D):he(h,g,b,I,w,k,C,R,D)},bt=(d,h,g,b,I,w,k,C,R)=>{let T=0;const $=h.length;let D=d.length-1,F=$-1;for(;T<=D&&T<=F;){const H=d[T],K=h[T]=R?It(h[T]):Ze(h[T]);if(Nn(H,K))E(H,K,g,null,I,w,k,C,R);else break;T++}for(;T<=D&&T<=F;){const H=d[D],K=h[F]=R?It(h[F]):Ze(h[F]);if(Nn(H,K))E(H,K,g,null,I,w,k,C,R);else break;D--,F--}if(T>D){if(T<=F){const H=F+1,K=H<$?h[H].el:b;for(;T<=F;)E(null,h[T]=R?It(h[T]):Ze(h[T]),g,K,I,w,k,C,R),T++}}else if(T>F)for(;T<=D;)Te(d[T],I,w,!0),T++;else{const H=T,K=T,se=new Map;for(T=K;T<=F;T++){const Oe=h[T]=R?It(h[T]):Ze(h[T]);Oe.key!=null&&se.set(Oe.key,T)}let Q,Pe=0;const Re=F-K+1;let qe=!1,Ge=0;const On=new Array(Re);for(T=0;T<Re;T++)On[T]=0;for(T=H;T<=D;T++){const Oe=d[T];if(Pe>=Re){Te(Oe,I,w,!0);continue}let Je;if(Oe.key!=null)Je=se.get(Oe.key);else for(Q=K;Q<=F;Q++)if(On[Q-K]===0&&Nn(Oe,h[Q])){Je=Q;break}Je===void 0?Te(Oe,I,w,!0):(On[Je-K]=T+1,Je>=Ge?Ge=Je:qe=!0,E(Oe,h[Je],g,null,I,w,k,C,R),Pe++)}const Qi=qe?zf(On):ln;for(Q=Qi.length-1,T=Re-1;T>=0;T--){const Oe=K+T,Je=h[Oe],Zi=Oe+1<$?h[Oe+1].el:b;On[T]===0?E(null,Je,g,Zi,I,w,k,C,R):qe&&(Q<0||T!==Qi[Q]?Ke(Je,g,Zi,2):Q--)}}},Ke=(d,h,g,b,I=null)=>{const{el:w,type:k,transition:C,children:R,shapeFlag:T}=d;if(T&6){Ke(d.component.subTree,h,g,b);return}if(T&128){d.suspense.move(h,g,b);return}if(T&64){k.move(d,h,g,M);return}if(k===Ie){r(w,h,g);for(let D=0;D<R.length;D++)Ke(R[D],h,g,b);r(d.anchor,h,g);return}if(k===Ps){O(d,h,g);return}if(b!==2&&T&1&&C)if(b===0)C.beforeEnter(w),r(w,h,g),ke(()=>C.enter(w),I);else{const{leave:D,delayLeave:F,afterLeave:H}=C,K=()=>r(w,h,g),se=()=>{D(w,()=>{K(),H&&H()})};F?F(w,K,se):se()}else r(w,h,g)},Te=(d,h,g,b=!1,I=!1)=>{const{type:w,props:k,ref:C,children:R,dynamicChildren:T,shapeFlag:$,patchFlag:D,dirs:F,cacheIndex:H}=d;if(D===-2&&(I=!1),C!=null&&Mr(C,null,g,d,!0),H!=null&&(h.renderCache[H]=void 0),$&256){h.ctx.deactivate(d);return}const K=$&1&&F,se=!Hn(d);let Q;if(se&&(Q=k&&k.onVnodeBeforeUnmount)&&Ye(Q,h,d),$&6)mr(d.component,g,b);else{if($&128){d.suspense.unmount(g,b);return}K&&Ht(d,null,h,"beforeUnmount"),$&64?d.type.remove(d,h,g,M,b):T&&!T.hasOnce&&(w!==Ie||D>0&&D&64)?Le(T,h,g,!1,!0):(w===Ie&&D&384||!I&&$&16)&&Le(R,h,g),b&&nn(d)}(se&&(Q=k&&k.onVnodeUnmounted)||K)&&ke(()=>{Q&&Ye(Q,h,d),K&&Ht(d,null,h,"unmounted")},g)},nn=d=>{const{type:h,el:g,anchor:b,transition:I}=d;if(h===Ie){rn(g,b);return}if(h===Ps){x(d);return}const w=()=>{s(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:k,delayLeave:C}=I,R=()=>k(g,w);C?C(d.el,w,R):R()}else w()},rn=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},mr=(d,h,g)=>{const{bum:b,scope:I,job:w,subTree:k,um:C,m:R,a:T}=d;uo(R),uo(T),b&&Es(b),I.stop(),w&&(w.flags|=8,Te(k,d,h,g)),C&&ke(C,h),ke(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Le=(d,h,g,b=!1,I=!1,w=0)=>{for(let k=w;k<d.length;k++)Te(d[k],h,g,b,I)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[ff];return g?p(g):h};let L=!1;const N=(d,h,g)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):E(h._vnode||null,d,h,null,null,null,g),h._vnode=d,L||(L=!0,ro(),lc(),L=!1)},M={p:E,um:Te,m:Ke,r:nn,mt:Pn,mc:he,pc:G,pbc:De,n:v,o:t};return{render:N,hydrate:void 0,createApp:Lf(N)}}function Cs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Wf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oc(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=It(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Oc(o,a)),a.type===as&&(a.el=o.el)}}function zf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function kc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kc(e)}function uo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Kf=Symbol.for("v-scx"),qf=()=>dt(Kf);function wr(t,e,n){return Nc(t,e,n)}function Nc(t,e,n=oe){const{immediate:r,deep:s,flush:i,once:o}=n,a=be({},n),c=e&&r||!e&&i!=="post";let l;if(Xn){if(i==="sync"){const m=qf();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=tt,m.resume=tt,m.pause=tt,m}}const u=ge;a.call=(m,y,E)=>st(m,u,y,E);let f=!1;i==="post"?a.scheduler=m=>{ke(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,y)=>{y?m():Ni(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=af(t,e,a);return Xn&&(l?l.push(p):c&&p()),p}function Gf(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?xc(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=or(this),a=Nc(s,i.bind(r),n);return o(),a}function xc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Jf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ue(e)}Modifiers`]||t[`${en(e)}Modifiers`];function Yf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let s=n;const i=e.startsWith("update:"),o=i&&Jf(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ue(u)?u.trim():u)),o.number&&(s=n.map(Tu)));let a,c=r[a=ws(e)]||r[a=ws(Ue(e))];!c&&i&&(c=r[a=ws(en(e))]),c&&st(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(l,t,6,s)}}function Dc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Dc(l,e,!0);u&&(a=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ae(t)&&r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):be(o,i),ae(t)&&r.set(t,o),o)}function os(t,e){return!t||!Xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,en(e))||X(t,e))}function fo(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:m,ctx:y,inheritAttrs:E}=t,S=Dr(t);let P,A;try{if(n.shapeFlag&4){const x=s||r,B=x;P=Ze(l.call(B,x,u,f,m,p,y)),A=a}else{const x=e;P=Ze(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),A=e.props?a:Xf(a)}}catch(x){Vn.length=0,ss(x,t,1),P=ce(Xt)}let O=P;if(A&&E!==!1){const x=Object.keys(A),{shapeFlag:B}=O;x.length&&B&7&&(i&&x.some(vi)&&(A=Qf(A,i)),O=bn(O,A,!1,!0))}return n.dirs&&(O=bn(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&xi(O,n.transition),P=O,Dr(S),P}const Xf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xr(n))&&((e||(e={}))[n]=t[n]);return e},Qf=(t,e)=>{const n={};for(const r in t)(!vi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ho(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!os(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ho(r,o,l):!0:!!o;return!1}function ho(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!os(n,i))return!0}return!1}function ed({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lc=t=>t.__isSuspense;function td(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):uf(t)}const Ie=Symbol.for("v-fgt"),as=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),Vn=[];let xe=null;function le(t=!1){Vn.push(xe=t?null:[])}function nd(){Vn.pop(),xe=Vn[Vn.length-1]||null}let Yn=1;function po(t,e=!1){Yn+=t,t<0&&xe&&e&&(xe.hasOnce=!0)}function Mc(t){return t.dynamicChildren=Yn>0?xe||ln:null,nd(),Yn>0&&xe&&xe.push(t),t}function fe(t,e,n,r,s,i){return Mc(re(t,e,n,r,s,i,!0))}function rd(t,e,n,r,s){return Mc(ce(t,e,n,r,s,!0))}function Fr(t){return t?t.__v_isVNode===!0:!1}function Nn(t,e){return t.type===e.type&&t.key===e.key}const Uc=({key:t})=>t??null,Er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||ye(t)||W(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function re(t,e=null,n=null,r=0,s=null,i=t===Ie?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uc(e),ref:e&&Er(e),scopeId:fc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(Li(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Yn>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const ce=sd;function sd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rf)&&(t=Xt),Fr(t)){const a=bn(t,e,!0);return n&&Li(a,n),Yn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag=-2,a}if(gd(t)&&(t=t.__vccOpts),e){e=id(e);let{class:a,style:c}=e;a&&!ue(a)&&(e.class=Si(a)),ae(c)&&(ki(c)&&!j(c)&&(c=be({},c)),e.style=Ii(c))}const o=ue(t)?1:Lc(t)?128:df(t)?64:ae(t)?4:W(t)?2:0;return re(t,e,n,r,s,o,i,!0)}function id(t){return t?ki(t)||Ic(t)?be({},t):t:null}function bn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?ad(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Uc(l),ref:e&&e.ref?n&&i?j(i)?i.concat(Er(e)):[i,Er(e)]:Er(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&xi(u,c.clone(u)),u}function od(t=" ",e=0){return ce(as,null,t,e)}function Ir(t="",e=!1){return e?(le(),rd(Xt,null,t)):ce(Xt,null,t)}function Ze(t){return t==null||typeof t=="boolean"?ce(Xt):j(t)?ce(Ie,null,t.slice()):Fr(t)?It(t):ce(as,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function Li(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Li(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ic(e)?e._ctx=$e:s===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),r&64?(n=16,e=[od(e)]):n=8);t.children=e,t.shapeFlag|=n}function ad(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Si([e.class,r.class]));else if(s==="style")e.style=Ii([e.style,r.style]);else if(Xr(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ye(t,e,n,r=null){st(t,e,7,[n,r])}const cd=vc();let ld=0;function ud(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cd,i={uid:ld++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tc(r,s),emitsOptions:Dc(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yf.bind(null,i),t.ce&&t.ce(i),i}let ge=null,$r,ei;{const t=ts(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$r=e("__VUE_INSTANCE_SETTERS__",n=>ge=n),ei=e("__VUE_SSR_SETTERS__",n=>Xn=n)}const or=t=>{const e=ge;return $r(t),t.scope.on(),()=>{t.scope.off(),$r(e)}},mo=()=>{ge&&ge.scope.off(),$r(null)};function Fc(t){return t.vnode.shapeFlag&4}let Xn=!1;function fd(t,e=!1,n=!1){e&&ei(e);const{props:r,children:s}=t.vnode,i=Fc(t);Mf(t,r,i,e),Bf(t,s,n);const o=i?dd(t,e):void 0;return e&&ei(!1),o}function dd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cf);const{setup:r}=n;if(r){Lt();const s=t.setupContext=r.length>1?pd(t):null,i=or(t),o=ir(r,t,0,[t.props,s]),a=La(o);if(Mt(),i(),(a||t.sp)&&!Hn(t)&&hc(t),a){if(o.then(mo,mo),e)return o.then(c=>{go(t,c)}).catch(c=>{ss(c,t,0)});t.asyncDep=o}else go(t,o)}else $c(t)}function go(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=ic(e)),$c(t)}function $c(t,e,n){const r=t.type;t.render||(t.render=r.render||tt);{const s=or(t);Lt();try{Pf(t)}finally{Mt(),s()}}}const hd={get(t,e){return pe(t,"get",""),t[e]}};function pd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hd),slots:t.slots,emit:t.emit,expose:e}}function Mi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ic(Qu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jn)return jn[n](t)},has(e,n){return n in e||n in jn}})):t.proxy}function md(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function gd(t){return W(t)&&"__vccOpts"in t}const Fe=(t,e)=>sf(t,e,Xn);function Bc(t,e,n){const r=arguments.length;return r===2?ae(e)&&!j(e)?Fr(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fr(n)&&(n=[n]),ce(t,e,n))}const _d="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ti;const _o=typeof window<"u"&&window.trustedTypes;if(_o)try{ti=_o.createPolicy("vue",{createHTML:t=>t})}catch{}const Hc=ti?t=>ti.createHTML(t):t=>t,yd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,yo=ct&&ct.createElement("template"),vd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ct.createElementNS(yd,t):e==="mathml"?ct.createElementNS(bd,t):n?ct.createElement(t,{is:n}):ct.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ct.createTextNode(t),createComment:t=>ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yo.innerHTML=Hc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=yo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wd=Symbol("_vtc");function Ed(t,e,n){const r=t[wd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bo=Symbol("_vod"),Id=Symbol("_vsh"),Sd=Symbol(""),Td=/(^|;)\s*display\s*:/;function Rd(t,e,n){const r=t.style,s=ue(n);let i=!1;if(n&&!s){if(e)if(ue(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Sr(r,a,"")}else for(const o in e)n[o]==null&&Sr(r,o,"");for(const o in n)o==="display"&&(i=!0),Sr(r,o,n[o])}else if(s){if(e!==n){const o=r[Sd];o&&(n+=";"+o),r.cssText=n,i=Td.test(n)}}else e&&t.removeAttribute("style");bo in t&&(t[bo]=i?r.display:"",t[Id]&&(r.display="none"))}const vo=/\s*!important$/;function Sr(t,e,n){if(j(n))n.forEach(r=>Sr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ad(t,e);vo.test(n)?t.setProperty(en(r),n.replace(vo,""),"important"):t[r]=n}}const wo=["Webkit","Moz","ms"],Os={};function Ad(t,e){const n=Os[e];if(n)return n;let r=Ue(e);if(r!=="filter"&&r in t)return Os[e]=r;r=es(r);for(let s=0;s<wo.length;s++){const i=wo[s]+r;if(i in t)return Os[e]=i}return e}const Eo="http://www.w3.org/1999/xlink";function Io(t,e,n,r,s,i=ku(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Eo,e.slice(6,e.length)):t.setAttributeNS(Eo,e,n):n==null||i&&!$a(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dt(n)?String(n):n)}function So(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=$a(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Cd(t,e,n,r){t.addEventListener(e,n,r)}function Pd(t,e,n,r){t.removeEventListener(e,n,r)}const To=Symbol("_vei");function Od(t,e,n,r,s=null){const i=t[To]||(t[To]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=kd(e);if(r){const l=i[e]=Dd(r,s);Cd(t,a,l,c)}else o&&(Pd(t,a,o,c),i[e]=void 0)}}const Ro=/(?:Once|Passive|Capture)$/;function kd(t){let e;if(Ro.test(t)){e={};let r;for(;r=t.match(Ro);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let ks=0;const Nd=Promise.resolve(),xd=()=>ks||(Nd.then(()=>ks=0),ks=Date.now());function Dd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st(Ld(r,n.value),e,5,[r])};return n.value=t,n.attached=xd(),n}function Ld(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ao=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Md=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Ed(t,r,o):e==="style"?Rd(t,n,r):Xr(e)?vi(e)||Od(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ud(t,e,r,o))?(So(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Io(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ue(r))?So(t,Ue(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Io(t,e,r,o))};function Ud(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ao(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ao(e)&&ue(n)?!1:e in t}const Fd=be({patchProp:Md},vd);let Co;function $d(){return Co||(Co=jf(Fd))}const Bd=(...t)=>{const e=$d().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jd(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Hd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Hd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jd(t){return ue(t)?document.querySelector(t):t}const Vd=()=>{};var Po={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new zd;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kd=function(t){const e=jc(t);return Vc.encodeByteArray(e,!0)},Wc=function(t){return Kd(t).replace(/\./g,"")},zc=function(t){try{return Vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=()=>qd().__FIREBASE_DEFAULTS__,Jd=()=>{if(typeof process>"u"||typeof Po>"u")return;const t=Po.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zc(t[1]);return e&&JSON.parse(e)},Ui=()=>{try{return Vd()||Gd()||Jd()||Yd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xd=t=>{var e,n;return(n=(e=Ui())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kc=()=>{var t;return(t=Ui())===null||t===void 0?void 0:t.config},qc=t=>{var e;return(e=Ui())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function eh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function th(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rh(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sh(){try{return typeof indexedDB=="object"}catch{return!1}}function ih(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oh,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ah(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,a,r)}}function ah(t,e){return t.replace(ch,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ch=/\{\$([^}]+)}/g;function lh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Oo(i)&&Oo(o)){if(!vn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Oo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Un(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uh(t,e){const n=new fh(t,e);return n.subscribe.bind(n)}class fh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ns),s.error===void 0&&(s.error=Ns),s.complete===void 0&&(s.complete=Ns);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ns(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t){return t.endsWith(".cloudworkstations.dev")}async function hh(t){return(await fetch(t,{credentials:"include"})).ok}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gh(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mh(t){return t===Wt?void 0:t}function gh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ph(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const yh={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},bh=ne.INFO,vh={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},wh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=bh,this._logHandler=wh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Eh=(t,e)=>e.some(n=>t instanceof n);let ko,No;function Ih(){return ko||(ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sh(){return No||(No=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yc=new WeakMap,ni=new WeakMap,Xc=new WeakMap,xs=new WeakMap,Fi=new WeakMap;function Th(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yc.set(n,t)}).catch(()=>{}),Fi.set(e,t),e}function Rh(t){if(ni.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ni.set(t,e)}let ri={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ah(t){ri=t(ri)}function Ch(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ds(this),e,...n);return Xc.set(r,e.sort?e.sort():[e]),kt(r)}:Sh().includes(t)?function(...e){return t.apply(Ds(this),e),kt(Yc.get(this))}:function(...e){return kt(t.apply(Ds(this),e))}}function Ph(t){return typeof t=="function"?Ch(t):(t instanceof IDBTransaction&&Rh(t),Eh(t,Ih())?new Proxy(t,ri):t)}function kt(t){if(t instanceof IDBRequest)return Th(t);if(xs.has(t))return xs.get(t);const e=Ph(t);return e!==t&&(xs.set(t,e),Fi.set(e,t)),e}const Ds=t=>Fi.get(t);function Oh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=kt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const kh=["get","getKey","getAll","getAllKeys","count"],Nh=["put","add","delete","clear"],Ls=new Map;function xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ls.get(e))return Ls.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ls.set(e,i),i}Ah(t=>({...t,get:(e,n,r)=>xo(e,n)||t.get(e,n,r),has:(e,n)=>!!xo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const si="@firebase/app",Do="0.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Jc("@firebase/app"),Lh="@firebase/app-compat",Mh="@firebase/analytics-compat",Uh="@firebase/analytics",Fh="@firebase/app-check-compat",$h="@firebase/app-check",Bh="@firebase/auth",Hh="@firebase/auth-compat",jh="@firebase/database",Vh="@firebase/data-connect",Wh="@firebase/database-compat",zh="@firebase/functions",Kh="@firebase/functions-compat",qh="@firebase/installations",Gh="@firebase/installations-compat",Jh="@firebase/messaging",Yh="@firebase/messaging-compat",Xh="@firebase/performance",Qh="@firebase/performance-compat",Zh="@firebase/remote-config",ep="@firebase/remote-config-compat",tp="@firebase/storage",np="@firebase/storage-compat",rp="@firebase/firestore",sp="@firebase/vertexai",ip="@firebase/firestore-compat",op="firebase",ap="11.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]",cp={[si]:"fire-core",[Lh]:"fire-core-compat",[Uh]:"fire-analytics",[Mh]:"fire-analytics-compat",[$h]:"fire-app-check",[Fh]:"fire-app-check-compat",[Bh]:"fire-auth",[Hh]:"fire-auth-compat",[jh]:"fire-rtdb",[Vh]:"fire-data-connect",[Wh]:"fire-rtdb-compat",[zh]:"fire-fn",[Kh]:"fire-fn-compat",[qh]:"fire-iid",[Gh]:"fire-iid-compat",[Jh]:"fire-fcm",[Yh]:"fire-fcm-compat",[Xh]:"fire-perf",[Qh]:"fire-perf-compat",[Zh]:"fire-rc",[ep]:"fire-rc-compat",[tp]:"fire-gcs",[np]:"fire-gcs-compat",[rp]:"fire-fst",[ip]:"fire-fst-compat",[sp]:"fire-vertex","fire-js":"fire-js",[op]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map,lp=new Map,oi=new Map;function Lo(t,e){try{t.container.addComponent(e)}catch(n){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(oi.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;oi.set(e,t);for(const n of Br.values())Lo(n,t);for(const n of lp.values())Lo(n,t);return!0}function Qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function et(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new ar("app","Firebase",up);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=ap;function Zc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ii,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(n||(n=Kc()),!n)throw Nt.create("no-options");const i=Br.get(s);if(i){if(vn(n,i.options)&&vn(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const o=new _h(s);for(const c of oi.values())o.addComponent(c);const a=new fp(n,r,o);return Br.set(s,a),a}function dp(t=ii){const e=Br.get(t);if(!e&&t===ii&&Kc())return Zc();if(!e)throw Nt.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let s=(r=cp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}Qn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="firebase-heartbeat-database",pp=1,Zn="firebase-heartbeat-store";let Ms=null;function el(){return Ms||(Ms=Oh(hp,pp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),Ms}async function mp(t){try{const n=(await el()).transaction(Zn),r=await n.objectStore(Zn).get(tl(t));return await n.done,r}catch(e){if(e instanceof Ut)ht.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(n.message)}}}async function Mo(t,e){try{const r=(await el()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(e,tl(t)),await r.done}catch(n){if(n instanceof Ut)ht.warn(n.message);else{const r=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(r.message)}}}function tl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=1024,_p=30;class yp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>_p){const o=wp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uo(),{heartbeatsToSend:r,unsentEntries:s}=bp(this._heartbeatsCache.heartbeats),i=Wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ht.warn(n),""}}}function Uo(){return new Date().toISOString().substring(0,10)}function bp(t,e=gp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sh()?ih().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fo(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}function wp(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){Qn(new wn("platform-logger",e=>new xh(e),"PRIVATE")),Qn(new wn("heartbeat",e=>new yp(e),"PRIVATE")),mn(si,Do,t),mn(si,Do,"esm2017"),mn("fire-js","")}Ep("");function $i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function nl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ip=nl,rl=new ar("auth","Firebase",nl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Jc("@firebase/auth");function Sp(t,...e){Hr.logLevel<=ne.WARN&&Hr.warn(`Auth (${lr}): ${t}`,...e)}function Tr(t,...e){Hr.logLevel<=ne.ERROR&&Hr.error(`Auth (${lr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,...e){throw Bi(t,...e)}function nt(t,...e){return Bi(t,...e)}function sl(t,e,n){const r=Object.assign(Object.assign({},Ip()),{[e]:n});return new ar("auth","Firebase",r).create(e,{appName:t.name})}function xt(t){return sl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rl.create(t,...e)}function U(t,e,...n){if(!t)throw Bi(e,...n)}function ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tr(e),new Error(e)}function pt(t,e){t||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Tp(){return $o()==="http:"||$o()==="https:"}function $o(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tp()||th()||"connection"in navigator)?navigator.onLine:!0}function Ap(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,pt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zd()||nh()}get(){return Rp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e){pt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Op=new ur(3e4,6e4);function Ft(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _t(t,e,n,r,s={}){return ol(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=cr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return eh()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&Gc(t.emulatorConfig.host)&&(l.credentials="include"),il.fetch()(await al(t,t.config.apiHost,n,a),l)})}async function ol(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Cp),e);try{const s=new Np(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw br(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw br(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw br(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw sl(t,u,l);je(t,u)}}catch(s){if(s instanceof Ut)throw s;je(t,"network-request-failed",{message:String(s)})}}async function cs(t,e,n,r,s={}){const i=await _t(t,e,n,r,s);return"mfaPendingCredential"in i&&je(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function al(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Hi(t.config,s):`${t.config.apiScheme}://${s}`;return Pp.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function kp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Np{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Op.get())})}}function br(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(t,e,r);return s.customData._tokenResponse=n,s}function Bo(t){return t!==void 0&&t.enterprise!==void 0}class xp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Dp(t,e){return _t(t,"GET","/v2/recaptchaConfig",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(t,e){return _t(t,"POST","/v1/accounts:delete",e)}async function Vr(t,e){return _t(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mp(t,e=!1){const n=gt(t),r=await n.getIdToken(e),s=ji(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wn(Us(s.auth_time)),issuedAtTime:Wn(Us(s.iat)),expirationTime:Wn(Us(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Us(t){return Number(t)*1e3}function ji(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=zc(n);return s?JSON.parse(s):(Tr("Failed to decode base64 JWT payload"),null)}catch(s){return Tr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ho(t){const e=ji(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&Up(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Up({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await er(t,Vr(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cl(i.providerUserInfo):[],a=Bp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ai(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function $p(t){const e=gt(t);await Wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cl(t){return t.map(e=>{var{providerId:n}=e,r=$i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t,e){const n=await ol(t,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await al(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",il.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jp(t,e){return _t(t,"POST","/v2/accounts:revokeToken",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ho(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Ho(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Hp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Be{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ai(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await er(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mp(this,e)}reload(){return $p(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Be(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await er(this,Lp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:x,isAnonymous:B,providerData:q,stsTokenManager:z}=n;U(O&&z,e,"internal-error");const he=gn.fromJSON(this.name,z);U(typeof O=="string",e,"internal-error"),vt(f,e.name),vt(p,e.name),U(typeof x=="boolean",e,"internal-error"),U(typeof B=="boolean",e,"internal-error"),vt(m,e.name),vt(y,e.name),vt(E,e.name),vt(S,e.name),vt(P,e.name),vt(A,e.name);const ve=new Be({uid:O,auth:e,email:p,emailVerified:x,displayName:f,isAnonymous:B,photoURL:y,phoneNumber:m,tenantId:E,stsTokenManager:he,createdAt:P,lastLoginAt:A});return q&&Array.isArray(q)&&(ve.providerData=q.map(De=>Object.assign({},De))),S&&(ve._redirectEventId=S),ve}static async _fromIdTokenResponse(e,n,r=!1){const s=new gn;s.updateFromServerResponse(n);const i=new Be({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new gn;a.updateFromIdToken(r);const c=new Be({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ai(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Map;function ft(t){pt(t instanceof Function,"Expected a class definition");let e=jo.get(t);return e?(pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ll.type="NONE";const Vo=ll;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Vr(this.auth,{idToken:e}).catch(()=>{});return n?Be._fromGetAccountInfoResponse(this.auth,n,e):null}return Be._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(ft(Vo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(Vo);const o=Rr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const p=await Vr(e,{idToken:u}).catch(()=>{});if(!p)break;f=await Be._fromGetAccountInfoResponse(e,p,u)}else f=Be._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ul(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ml(e))return"Blackberry";if(gl(e))return"Webos";if(fl(e))return"Safari";if((e.includes("chrome/")||dl(e))&&!e.includes("edge/"))return"Chrome";if(pl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ul(t=Se()){return/firefox\//i.test(t)}function fl(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dl(t=Se()){return/crios\//i.test(t)}function hl(t=Se()){return/iemobile/i.test(t)}function pl(t=Se()){return/android/i.test(t)}function ml(t=Se()){return/blackberry/i.test(t)}function gl(t=Se()){return/webos/i.test(t)}function Vi(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vp(t=Se()){var e;return Vi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wp(){return rh()&&document.documentMode===10}function _l(t=Se()){return Vi(t)||pl(t)||gl(t)||ml(t)||/windows phone/i.test(t)||hl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t,e=[]){let n;switch(t){case"Browser":n=Wo(Se());break;case"Worker":n=`${Wo(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(t,e={}){return _t(t,"GET","/v2/passwordPolicy",Ft(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=6;class Gp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zo(this),this.idTokenSubscription=new zo(this),this.beforeStateQueue=new zp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vr(this,{idToken:e}),r=await Be._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ap()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(xt(this));const n=e?gt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kp(this),n=new Gp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return gt(t)}class zo{constructor(e){this.auth=e,this.observer=null,this.addObserver=uh(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yp(t){ls=t}function bl(t){return ls.loadJS(t)}function Xp(){return ls.recaptchaEnterpriseScript}function Qp(){return ls.gapiScript}function Zp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class em{constructor(){this.enterprise=new tm}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tm{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nm="recaptcha-enterprise",vl="NO_RECAPTCHA";class rm{constructor(e){this.type=nm,this.auth=Tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Dp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new xp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Bo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(vl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new em().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Xp();c.length!==0&&(c+=a),bl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ko(t,e,n,r=!1,s=!1){const i=new rm(t);let o;if(s)o=vl;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ci(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ko(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ko(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e){const n=Qc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vn(i,e??{}))return s;je(s,"already-initialized")}return n.initialize({options:e})}function im(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function om(t,e,n){const r=Tn(t);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=wl(e),{host:o,port:a}=am(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(vn(l,r.config.emulator)&&vn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,cm(),Gc(o)&&hh(`${i}//${o}${c}`)}function wl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function am(t){const e=wl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qo(o)}}}function qo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,n){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function lm(t,e){return _t(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t,e){return cs(t,"POST","/v1/accounts:signInWithPassword",Ft(t,e))}async function fm(t,e){return _t(t,"POST","/v1/accounts:sendOobCode",Ft(t,e))}async function dm(t,e){return fm(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(t,e){return cs(t,"POST","/v1/accounts:signInWithEmailLink",Ft(t,e))}async function pm(t,e){return cs(t,"POST","/v1/accounts:signInWithEmailLink",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Wi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new tr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ci(e,n,"signInWithPassword",um);case"emailLink":return hm(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ci(e,r,"signUpPassword",lm);case"emailLink":return pm(e,{idToken:n,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(t,e){return cs(t,"POST","/v1/accounts:signInWithIdp",Ft(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="http://localhost";class Qt extends Wi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$i(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yn(e,n)}buildRequest(){const e={requestUri:mm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _m(t){const e=Mn(Un(t)).link,n=e?Mn(Un(e)).deep_link_id:null,r=Mn(Un(t)).deep_link_id;return(r?Mn(Un(r)).link:null)||r||n||e||t}class us{constructor(e){var n,r,s,i,o,a;const c=Mn(Un(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=gm((s=c.mode)!==null&&s!==void 0?s:null);U(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_m(e);try{return new us(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=us.parseLink(n);return U(r,"argument-error"),tr._fromEmailAndCode(e,r.code,r.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends El{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends fr{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends fr{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends fr{constructor(){super("twitter.com")}static credential(e,n){return Qt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Be._fromIdTokenResponse(e,r,s),o=Go(r);return new En({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Go(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Go(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends Ut{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zr(e,n,r,s)}}function Il(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zr._fromErrorAndOperation(t,i,e,r):i})}async function ym(t,e,n=!1){const r=await er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e,n=!1){const{auth:r}=t;if(et(r.app))return Promise.reject(xt(r));const s="reauthenticate";try{const i=await er(t,Il(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ji(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),En._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t,e,n=!1){if(et(t.app))return Promise.reject(xt(t));const r="signIn",s=await Il(t,r,e),i=await En._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vm(t,e){return Sl(Tn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t,e,n){var r;U(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),U(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),U(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(U(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(U(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(t,e,n){const r=Tn(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,a){U(a.handleCodeInApp,r,"argument-error"),a&&wm(r,o,a)}i(s,n),await ci(r,s,"getOobCode",dm)}function Im(t,e){const n=us.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Sm(t,e,n){if(et(t.app))return Promise.reject(xt(t));const r=gt(t),s=Rn.credentialWithLink(e,n||jr());return U(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),vm(r,s)}function Tm(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function Rm(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function Am(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function Cm(t){return gt(t).signOut()}const Kr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kr,"1"),this.storage.removeItem(Kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=1e3,Om=10;class Rl extends Tl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_l(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Om):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rl.type="LOCAL";const km=Rl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Tl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Al.type="SESSION";const Cl=Al;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Nm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=zi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Dm(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Lm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Um(){return Pl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="firebaseLocalStorageDb",Fm=1,qr="firebaseLocalStorage",kl="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ds(t,e){return t.transaction([qr],e?"readwrite":"readonly").objectStore(qr)}function $m(){const t=indexedDB.deleteDatabase(Ol);return new dr(t).toPromise()}function li(){const t=indexedDB.open(Ol,Fm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qr,{keyPath:kl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qr)?e(r):(r.close(),await $m(),e(await li()))})})}async function Jo(t,e,n){const r=ds(t,!0).put({[kl]:e,value:n});return new dr(r).toPromise()}async function Bm(t,e){const n=ds(t,!1).get(e),r=await new dr(n).toPromise();return r===void 0?null:r.value}function Yo(t,e){const n=ds(t,!0).delete(e);return new dr(n).toPromise()}const Hm=800,jm=3;class Nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await li(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(Um()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lm(),!this.activeServiceWorker)return;this.sender=new xm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await li();return await Jo(e,Kr,"1"),await Yo(e,Kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Bm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ds(s,!1).getAll();return new dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nl.type="LOCAL";const Vm=Nl;new ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e){return e?ft(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Wi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zm(t){return Sl(t.auth,new Ki(t),t.bypassAuthState)}function Km(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),bm(n,new Ki(t),t.bypassAuthState)}async function qm(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),ym(n,new Ki(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zm;case"linkViaPopup":case"linkViaRedirect":return qm;case"reauthViaPopup":case"reauthViaRedirect":return Km;default:je(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new ur(2e3,1e4);class cn extends xl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gm.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="pendingRedirect",Ar=new Map;class Ym extends xl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ar.get(this.auth._key());if(!e){try{const r=await Xm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ar.set(this.auth._key(),e)}return this.bypassAuthState||Ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xm(t,e){const n=eg(e),r=Zm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qm(t,e){Ar.set(t._key(),e)}function Zm(t){return ft(t._redirectPersistence)}function eg(t){return Rr(Jm,t.config.apiKey,t.name)}async function tg(t,e,n=!1){if(et(t.app))return Promise.reject(xt(t));const r=Tn(t),s=Wm(r,e),o=await new Ym(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=10*60*1e3;class rg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xo(e))}saveEventToCache(e){this.cachedEventUids.add(Xo(e)),this.lastProcessedEventTime=Date.now()}}function Xo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t,e={}){return _t(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ag=/^https?/;async function cg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ig(t);for(const n of e)try{if(lg(n))return}catch{}je(t,"unauthorized-domain")}function lg(t){const e=jr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ag.test(n))return!1;if(og.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new ur(3e4,6e4);function Qo(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fg(t){return new Promise((e,n)=>{var r,s,i;function o(){Qo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qo(),n(nt(t,"network-request-failed"))},timeout:ug.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const a=Zp("iframefcb");return rt()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},bl(`${Qp()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Cr=null,e})}let Cr=null;function dg(t){return Cr=Cr||fg(t),Cr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new ur(5e3,15e3),pg="__/auth/iframe",mg="emulator/auth/iframe",gg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_g=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hi(e,mg):`https://${t.config.authDomain}/${pg}`,r={apiKey:e.apiKey,appName:t.name,v:lr},s=_g.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cr(r).slice(1)}`}async function bg(t){const e=await dg(t),n=rt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:yg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},hg.get());function c(){rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wg=500,Eg=600,Ig="_blank",Sg="http://localhost";class Zo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tg(t,e,n,r=wg,s=Eg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Se().toLowerCase();n&&(a=dl(l)?Ig:n),ul(l)&&(e=e||Sg,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(Vp(l)&&a!=="_self")return Rg(e||"",a),new Zo(null);const f=window.open(e||"",a,u);U(f,t,"popup-blocked");try{f.focus()}catch{}return new Zo(f)}function Rg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="__/auth/handler",Cg="emulator/auth/handler",Pg=encodeURIComponent("fac");async function ea(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:lr,eventId:s};if(e instanceof El){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof fr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Pg}=${encodeURIComponent(c)}`:"";return`${Og(t)}?${cr(a).slice(1)}${l}`}function Og({config:t}){return t.emulator?Hi(t,Cg):`https://${t.authDomain}/${Ag}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="webStorageSupport";class kg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cl,this._completeRedirectFn=tg,this._overrideRedirectResult=Qm}async _openPopup(e,n,r,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ea(e,n,r,jr(),s);return Tg(e,o,zi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ea(e,n,r,jr(),s);return Dm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bg(e),r=new rg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fs,{type:Fs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Fs];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _l()||fl()||Vi()}}const Ng=kg;var ta="@firebase/auth",na="1.10.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lg(t){Qn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yl(t)},l=new Jp(r,s,i,c);return im(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new wn("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(r=>new xg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(ta,na,Dg(t)),mn(ta,na,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=5*60,Ug=qc("authIdTokenMaxAge")||Mg;let ra=null;const Fg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ug)return;const s=n==null?void 0:n.token;ra!==s&&(ra=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gr(t=dp()){const e=Qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sm(t,{popupRedirectResolver:Ng,persistence:[Vm,km,Cl]}),r=qc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Fg(i.toString());Rm(n,o,()=>o(n.currentUser)),Tm(n,a=>o(a))}}const s=Xd("auth");return s&&om(n,`http://${s}`),n}function $g(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Yp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$g().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lg("Browser");const Bg="/assets/logo-hexagon-CPXM5FB7.svg",$t=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Hg={name:"Navbar",props:["user"],data(){return{logo:Bg}},methods:{signOut(){const t=Gr();Cm(t)}}},jg={class:"nav-bar"},Vg={class:"logo-wrap"},Wg=["src"],zg={class:"nav-buttons-wrap"};function Kg(t,e,n,r,s,i){const o=Yt("router-link");return le(),fe("div",jg,[ce(o,{to:"/products",class:"products-link"},{default:Lr(()=>[re("div",Vg,[re("img",{src:s.logo,alt:""},null,8,Wg)])]),_:1}),re("div",zg,[n.user?(le(),fe("button",{key:0,onClick:e[0]||(e[0]=(...a)=>i.signOut&&i.signOut(...a))},"Sign Out")):Ir("",!0),ce(o,{to:"/cart"},{default:Lr(()=>e[1]||(e[1]=[re("button",null,"Shopping Cart",-1)])),_:1})])])}const qg=$t(Hg,[["render",Kg]]),Gg={name:"App",components:{NavBar:qg},data(){return{user:null}},created(){const t=Gr();Am(t,e=>{this.user=e})}},Jg={class:"page-wrap"};function Yg(t,e,n,r,s,i){const o=Yt("NavBar"),a=Yt("router-view");return le(),fe(Ie,null,[ce(o,{user:s.user},null,8,["user"]),e[0]||(e[0]=re("h1",null,"Two Olive Trees",-1)),re("div",Jg,[ce(a,{user:s.user},null,8,["user"])])],64)}const Xg=$t(Gg,[["render",Yg]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof document<"u";function Ll(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ll(t.default)}const J=Object.assign;function $s(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ve(s)?s.map(t):t(s)}return n}const zn=()=>{},Ve=Array.isArray,Ml=/#/g,Zg=/&/g,e_=/\//g,t_=/=/g,n_=/\?/g,Ul=/\+/g,r_=/%5B/g,s_=/%5D/g,Fl=/%5E/g,i_=/%60/g,$l=/%7B/g,o_=/%7C/g,Bl=/%7D/g,a_=/%20/g;function qi(t){return encodeURI(""+t).replace(o_,"|").replace(r_,"[").replace(s_,"]")}function c_(t){return qi(t).replace($l,"{").replace(Bl,"}").replace(Fl,"^")}function ui(t){return qi(t).replace(Ul,"%2B").replace(a_,"+").replace(Ml,"%23").replace(Zg,"%26").replace(i_,"`").replace($l,"{").replace(Bl,"}").replace(Fl,"^")}function l_(t){return ui(t).replace(t_,"%3D")}function u_(t){return qi(t).replace(Ml,"%23").replace(n_,"%3F")}function f_(t){return t==null?"":u_(t).replace(e_,"%2F")}function nr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const d_=/\/$/,h_=t=>t.replace(d_,"");function Bs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=__(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:nr(o)}}function p_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sa(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function m_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&In(e.matched[r],n.matched[s])&&Hl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!g_(t[n],e[n]))return!1;return!0}function g_(t,e){return Ve(t)?ia(t,e):Ve(e)?ia(e,t):t===e}function ia(t,e){return Ve(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function __(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var rr;(function(t){t.pop="pop",t.push="push"})(rr||(rr={}));var Kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kn||(Kn={}));function y_(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),h_(t)}const b_=/^[^#]+#/;function v_(t,e){return t.replace(b_,"#")+e}function w_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hs=()=>({left:window.scrollX,top:window.scrollY});function E_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=w_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function oa(t,e){return(history.state?history.state.position-e:-1)+t}const fi=new Map;function I_(t,e){fi.set(t,e)}function S_(t){const e=fi.get(t);return fi.delete(t),e}let T_=()=>location.protocol+"//"+location.host;function jl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),sa(c,"")}return sa(n,t)+r+s}function R_(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=jl(t,location),y=n.value,E=e.value;let S=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}S=E?p.position-E.position:0}else r(m);s.forEach(P=>{P(n.value,y,{delta:S,type:rr.pop,direction:S?S>0?Kn.forward:Kn.back:Kn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:hs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function aa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?hs():null}}function A_(t){const{history:e,location:n}=window,r={value:jl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:T_()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=J({},e.state,aa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=J({},s.value,e.state,{forward:c,scroll:hs()});i(u.current,u,!0);const f=J({},aa(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function C_(t){t=y_(t);const e=A_(t),n=R_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:v_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function P_(t){return typeof t=="string"||t&&typeof t=="object"}function Vl(t){return typeof t=="string"||typeof t=="symbol"}const Wl=Symbol("");var ca;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ca||(ca={}));function Sn(t,e){return J(new Error,{type:t,[Wl]:!0},e)}function at(t,e){return t instanceof Error&&Wl in t&&(e==null||!!(t.type&e))}const la="[^/]+?",O_={sensitive:!1,strict:!1,start:!0,end:!0},k_=/[.+*?^${}()[\]/\\]/g;function N_(t,e){const n=J({},O_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(k_,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:E,optional:S,regexp:P}=p;i.push({name:y,repeatable:E,optional:S});const A=P||la;if(A!==la){m+=10;try{new RegExp(`(${A})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${y}" (${A}): `+x.message)}}let O=E?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(O=S&&l.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),s+=O,m+=20,S&&(m+=-8),E&&(m+=-20),A===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",y=i[p-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:E,optional:S}=m,P=y in l?l[y]:"";if(Ve(P)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const A=Ve(P)?P.join("/"):P;if(!A)if(S)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function x_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function zl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=x_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ua(r))return 1;if(ua(s))return-1}return s.length-r.length}function ua(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const D_={type:0,value:""},L_=/[a-zA-Z0-9_]/;function M_(t){if(!t)return[[]];if(t==="/")return[[D_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:L_.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function U_(t,e,n){const r=N_(M_(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function F_(t,e){const n=[],r=new Map;e=pa({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const y=!m,E=da(f);E.aliasOf=m&&m.record;const S=pa(e,f),P=[E];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of x)P.push(da(J({},E,{components:m?m.record.components:E.components,path:B,aliasOf:m?m.record:E})))}let A,O;for(const x of P){const{path:B}=x;if(p&&B[0]!=="/"){const q=p.record.path,z=q[q.length-1]==="/"?"":"/";x.path=p.record.path+(B&&z+B)}if(A=U_(x,p,S),m?m.alias.push(A):(O=O||A,O!==A&&O.alias.push(A),y&&f.name&&!ha(A)&&o(f.name)),Kl(A)&&c(A),E.children){const q=E.children;for(let z=0;z<q.length;z++)i(q[z],A,m&&m.children[z])}m=m||A}return O?()=>{o(O)}:zn}function o(f){if(Vl(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=H_(f,n);n.splice(p,0,f),f.record.name&&!ha(f)&&r.set(f.record.name,f)}function l(f,p){let m,y={},E,S;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Sn(1,{location:f});S=m.record.name,y=J(fa(p.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&fa(f.params,m.keys.map(O=>O.name))),E=m.stringify(y)}else if(f.path!=null)E=f.path,m=n.find(O=>O.re.test(E)),m&&(y=m.parse(E),S=m.record.name);else{if(m=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!m)throw Sn(1,{location:f,currentLocation:p});S=m.record.name,y=J({},p.params,f.params),E=m.stringify(y)}const P=[];let A=m;for(;A;)P.unshift(A.record),A=A.parent;return{name:S,path:E,params:y,matched:P,meta:B_(P)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function fa(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function da(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:$_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ha(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B_(t){return t.reduce((e,n)=>J(e,n.meta),{})}function pa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function H_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;zl(t,e[i])<0?r=i:n=i+1}const s=j_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function j_(t){let e=t;for(;e=e.parent;)if(Kl(e)&&zl(t,e)===0)return e}function Kl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function V_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ul," "),o=i.indexOf("="),a=nr(o<0?i:i.slice(0,o)),c=o<0?null:nr(i.slice(o+1));if(a in e){let l=e[a];Ve(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ma(t){let e="";for(let n in t){const r=t[n];if(n=l_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ve(r)?r.map(i=>i&&ui(i)):[r&&ui(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function W_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const z_=Symbol(""),ga=Symbol(""),Gi=Symbol(""),ql=Symbol(""),di=Symbol("");function xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function St(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(Sn(4,{from:n,to:e})):p instanceof Error?c(p):P_(p)?c(Sn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function Hs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Ll(c)){const u=(c.__vccOpts||c)[e];u&&i.push(St(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Qg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&St(m,n,r,o,a,s)()}))}}return i}function _a(t){const e=dt(Gi),n=dt(ql),r=Fe(()=>{const c=dn(t.to);return e.resolve(c)}),s=Fe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(In.bind(null,u));if(p>-1)return p;const m=ya(c[l-2]);return l>1&&ya(u)===m&&f[f.length-1].path!==m?f.findIndex(In.bind(null,c[l-2])):p}),i=Fe(()=>s.value>-1&&Y_(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&Hl(n.params,r.value.params));function a(c={}){if(J_(c)){const l=e[dn(t.replace)?"replace":"push"](dn(t.to)).catch(zn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function K_(t){return t.length===1?t[0]:t}const q_=dc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_a,setup(t,{slots:e}){const n=rs(_a(t)),{options:r}=dt(Gi),s=Fe(()=>({[ba(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ba(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&K_(e.default(n));return t.custom?i:Bc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),G_=q_;function J_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Y_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ya(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ba=(t,e,n)=>t??e??n,X_=dc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dt(di),s=Fe(()=>t.route||r.value),i=dt(ga,0),o=Fe(()=>{let l=dn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Fe(()=>s.value.matched[o.value]);vr(ga,Fe(()=>o.value+1)),vr(z_,a),vr(di,s);const c=Zu();return wr(()=>[c.value,a.value,t.name],([l,u,f],[p,m,y])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!In(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return va(n.default,{Component:p,route:l});const m=f.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=Bc(p,J({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return va(n.default,{Component:S,route:l})||S}}});function va(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Q_=X_;function Z_(t){const e=F_(t.routes,t),n=t.parseQuery||V_,r=t.stringifyQuery||ma,s=t.history,i=xn(),o=xn(),a=xn(),c=ef(wt);let l=wt;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$s.bind(null,v=>""+v),f=$s.bind(null,f_),p=$s.bind(null,nr);function m(v,L){let N,M;return Vl(v)?(N=e.getRecordMatcher(v),M=L):M=v,e.addRoute(M,N)}function y(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function E(){return e.getRoutes().map(v=>v.record)}function S(v){return!!e.getRecordMatcher(v)}function P(v,L){if(L=J({},L||c.value),typeof v=="string"){const g=Bs(n,v,L.path),b=e.resolve({path:g.path},L),I=s.createHref(g.fullPath);return J(g,b,{params:p(b.params),hash:nr(g.hash),redirectedFrom:void 0,href:I})}let N;if(v.path!=null)N=J({},v,{path:Bs(n,v.path,L.path).path});else{const g=J({},v.params);for(const b in g)g[b]==null&&delete g[b];N=J({},v,{params:f(g)}),L.params=f(L.params)}const M=e.resolve(N,L),te=v.hash||"";M.params=u(p(M.params));const d=p_(r,J({},v,{hash:c_(te),path:M.path})),h=s.createHref(d);return J({fullPath:d,hash:te,query:r===ma?W_(v.query):v.query||{}},M,{redirectedFrom:void 0,href:h})}function A(v){return typeof v=="string"?Bs(n,v,c.value.path):J({},v)}function O(v,L){if(l!==v)return Sn(8,{from:L,to:v})}function x(v){return z(v)}function B(v){return x(J(A(v),{replace:!0}))}function q(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let M=typeof N=="function"?N(v):N;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=A(M):{path:M},M.params={}),J({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function z(v,L){const N=l=P(v),M=c.value,te=v.state,d=v.force,h=v.replace===!0,g=q(N);if(g)return z(J(A(g),{state:typeof g=="object"?J({},te,g.state):te,force:d,replace:h}),L||N);const b=N;b.redirectedFrom=L;let I;return!d&&m_(r,M,N)&&(I=Sn(16,{to:b,from:M}),Ke(M,M,!0,!1)),(I?Promise.resolve(I):De(b,M)).catch(w=>at(w)?at(w,2)?w:bt(w):G(w,b,M)).then(w=>{if(w){if(at(w,2))return z(J({replace:h},A(w.to),{state:typeof w.to=="object"?J({},te,w.to.state):te,force:d}),L||b)}else w=Bt(b,M,!0,h,te);return yt(b,M,w),w})}function he(v,L){const N=O(v,L);return N?Promise.reject(N):Promise.resolve()}function ve(v){const L=rn.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(v):v()}function De(v,L){let N;const[M,te,d]=ey(v,L);N=Hs(M.reverse(),"beforeRouteLeave",v,L);for(const g of M)g.leaveGuards.forEach(b=>{N.push(St(b,v,L))});const h=he.bind(null,v,L);return N.push(h),Le(N).then(()=>{N=[];for(const g of i.list())N.push(St(g,v,L));return N.push(h),Le(N)}).then(()=>{N=Hs(te,"beforeRouteUpdate",v,L);for(const g of te)g.updateGuards.forEach(b=>{N.push(St(b,v,L))});return N.push(h),Le(N)}).then(()=>{N=[];for(const g of d)if(g.beforeEnter)if(Ve(g.beforeEnter))for(const b of g.beforeEnter)N.push(St(b,v,L));else N.push(St(g.beforeEnter,v,L));return N.push(h),Le(N)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),N=Hs(d,"beforeRouteEnter",v,L,ve),N.push(h),Le(N))).then(()=>{N=[];for(const g of o.list())N.push(St(g,v,L));return N.push(h),Le(N)}).catch(g=>at(g,8)?g:Promise.reject(g))}function yt(v,L,N){a.list().forEach(M=>ve(()=>M(v,L,N)))}function Bt(v,L,N,M,te){const d=O(v,L);if(d)return d;const h=L===wt,g=an?history.state:{};N&&(M||h?s.replace(v.fullPath,J({scroll:h&&g&&g.scroll},te)):s.push(v.fullPath,te)),c.value=v,Ke(v,L,N,h),bt()}let ze;function Pn(){ze||(ze=s.listen((v,L,N)=>{if(!mr.listening)return;const M=P(v),te=q(M);if(te){z(J(te,{replace:!0,force:!0}),M).catch(zn);return}l=M;const d=c.value;an&&I_(oa(d.fullPath,N.delta),hs()),De(M,d).catch(h=>at(h,12)?h:at(h,2)?(z(J(A(h.to),{force:!0}),M).then(g=>{at(g,20)&&!N.delta&&N.type===rr.pop&&s.go(-1,!1)}).catch(zn),Promise.reject()):(N.delta&&s.go(-N.delta,!1),G(h,M,d))).then(h=>{h=h||Bt(M,d,!1),h&&(N.delta&&!at(h,8)?s.go(-N.delta,!1):N.type===rr.pop&&at(h,20)&&s.go(-1,!1)),yt(M,d,h)}).catch(zn)}))}let tn=xn(),de=xn(),Z;function G(v,L,N){bt(v);const M=de.list();return M.length?M.forEach(te=>te(v,L,N)):console.error(v),Promise.reject(v)}function it(){return Z&&c.value!==wt?Promise.resolve():new Promise((v,L)=>{tn.add([v,L])})}function bt(v){return Z||(Z=!v,Pn(),tn.list().forEach(([L,N])=>v?N(v):L()),tn.reset()),v}function Ke(v,L,N,M){const{scrollBehavior:te}=t;if(!an||!te)return Promise.resolve();const d=!N&&S_(oa(v.fullPath,0))||(M||!N)&&history.state&&history.state.scroll||null;return ac().then(()=>te(v,L,d)).then(h=>h&&E_(h)).catch(h=>G(h,v,L))}const Te=v=>s.go(v);let nn;const rn=new Set,mr={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:E,resolve:P,options:t,push:x,replace:B,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:it,install(v){const L=this;v.component("RouterLink",G_),v.component("RouterView",Q_),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>dn(c)}),an&&!nn&&c.value===wt&&(nn=!0,x(s.location).catch(te=>{}));const N={};for(const te in wt)Object.defineProperty(N,te,{get:()=>c.value[te],enumerable:!0});v.provide(Gi,L),v.provide(ql,nc(N)),v.provide(di,c);const M=v.unmount;rn.add(v),v.unmount=function(){rn.delete(v),rn.size<1&&(l=wt,ze&&ze(),ze=null,c.value=wt,nn=!1,Z=!1),M()}}};function Le(v){return v.reduce((L,N)=>L.then(()=>ve(N)),Promise.resolve())}return mr}function ey(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>In(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>In(l,c))||s.push(c))}return[n,r,s]}function Gl(t,e){return function(){return t.apply(e,arguments)}}const{toString:ty}=Object.prototype,{getPrototypeOf:Ji}=Object,{iterator:ps,toStringTag:Jl}=Symbol,ms=(t=>e=>{const n=ty.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),We=t=>(t=t.toLowerCase(),e=>ms(e)===t),gs=t=>e=>typeof e===t,{isArray:An}=Array,sr=gs("undefined");function ny(t){return t!==null&&!sr(t)&&t.constructor!==null&&!sr(t.constructor)&&Ae(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Yl=We("ArrayBuffer");function ry(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Yl(t.buffer),e}const sy=gs("string"),Ae=gs("function"),Xl=gs("number"),_s=t=>t!==null&&typeof t=="object",iy=t=>t===!0||t===!1,Pr=t=>{if(ms(t)!=="object")return!1;const e=Ji(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Jl in t)&&!(ps in t)},oy=We("Date"),ay=We("File"),cy=We("Blob"),ly=We("FileList"),uy=t=>_s(t)&&Ae(t.pipe),fy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ae(t.append)&&((e=ms(t))==="formdata"||e==="object"&&Ae(t.toString)&&t.toString()==="[object FormData]"))},dy=We("URLSearchParams"),[hy,py,my,gy]=["ReadableStream","Request","Response","Headers"].map(We),_y=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),An(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Ql(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const zt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Zl=t=>!sr(t)&&t!==zt;function hi(){const{caseless:t}=Zl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Ql(e,s)||s;Pr(e[i])&&Pr(r)?e[i]=hi(e[i],r):Pr(r)?e[i]=hi({},r):An(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&hr(arguments[r],n);return e}const yy=(t,e,n,{allOwnKeys:r}={})=>(hr(e,(s,i)=>{n&&Ae(s)?t[i]=Gl(s,n):t[i]=s},{allOwnKeys:r}),t),by=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),vy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},wy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ji(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Ey=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Iy=t=>{if(!t)return null;if(An(t))return t;let e=t.length;if(!Xl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Sy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ji(Uint8Array)),Ty=(t,e)=>{const r=(t&&t[ps]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Ry=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Ay=We("HTMLFormElement"),Cy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),wa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Py=We("RegExp"),eu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};hr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Oy=t=>{eu(t,(e,n)=>{if(Ae(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Ae(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ky=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return An(t)?r(t):r(String(t).split(e)),n},Ny=()=>{},xy=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Dy(t){return!!(t&&Ae(t.append)&&t[Jl]==="FormData"&&t[ps])}const Ly=t=>{const e=new Array(10),n=(r,s)=>{if(_s(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=An(r)?[]:{};return hr(r,(o,a)=>{const c=n(o,s+1);!sr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},My=We("AsyncFunction"),Uy=t=>t&&(_s(t)||Ae(t))&&Ae(t.then)&&Ae(t.catch),tu=((t,e)=>t?setImmediate:e?((n,r)=>(zt.addEventListener("message",({source:s,data:i})=>{s===zt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),zt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ae(zt.postMessage)),Fy=typeof queueMicrotask<"u"?queueMicrotask.bind(zt):typeof process<"u"&&process.nextTick||tu,$y=t=>t!=null&&Ae(t[ps]),_={isArray:An,isArrayBuffer:Yl,isBuffer:ny,isFormData:fy,isArrayBufferView:ry,isString:sy,isNumber:Xl,isBoolean:iy,isObject:_s,isPlainObject:Pr,isReadableStream:hy,isRequest:py,isResponse:my,isHeaders:gy,isUndefined:sr,isDate:oy,isFile:ay,isBlob:cy,isRegExp:Py,isFunction:Ae,isStream:uy,isURLSearchParams:dy,isTypedArray:Sy,isFileList:ly,forEach:hr,merge:hi,extend:yy,trim:_y,stripBOM:by,inherits:vy,toFlatObject:wy,kindOf:ms,kindOfTest:We,endsWith:Ey,toArray:Iy,forEachEntry:Ty,matchAll:Ry,isHTMLForm:Ay,hasOwnProperty:wa,hasOwnProp:wa,reduceDescriptors:eu,freezeMethods:Oy,toObjectSet:ky,toCamelCase:Cy,noop:Ny,toFiniteNumber:xy,findKey:Ql,global:zt,isContextDefined:Zl,isSpecCompliantForm:Dy,toJSONObject:Ly,isAsyncFn:My,isThenable:Uy,setImmediate:tu,asap:Fy,isIterable:$y};function V(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const nu=V.prototype,ru={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ru[t]={value:t}});Object.defineProperties(V,ru);Object.defineProperty(nu,"isAxiosError",{value:!0});V.from=(t,e,n,r,s,i)=>{const o=Object.create(nu);return _.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),V.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const By=null;function pi(t){return _.isPlainObject(t)||_.isArray(t)}function su(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function Ea(t,e,n){return t?t.concat(e).map(function(s,i){return s=su(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Hy(t){return _.isArray(t)&&!t.some(pi)}const jy=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function ys(t,e,n){if(!_.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,S){return!_.isUndefined(S[E])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(e);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(!c&&_.isBlob(y))throw new V("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,E,S){let P=y;if(y&&!S&&typeof y=="object"){if(_.endsWith(E,"{}"))E=r?E:E.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&Hy(y)||(_.isFileList(y)||_.endsWith(E,"[]"))&&(P=_.toArray(y)))return E=su(E),P.forEach(function(O,x){!(_.isUndefined(O)||O===null)&&e.append(o===!0?Ea([E],x,i):o===null?E:E+"[]",l(O))}),!1}return pi(y)?!0:(e.append(Ea(S,E,i),l(y)),!1)}const f=[],p=Object.assign(jy,{defaultVisitor:u,convertValue:l,isVisitable:pi});function m(y,E){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+E.join("."));f.push(y),_.forEach(y,function(P,A){(!(_.isUndefined(P)||P===null)&&s.call(e,P,_.isString(A)?A.trim():A,E,p))===!0&&m(P,E?E.concat(A):[A])}),f.pop()}}if(!_.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Ia(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Yi(t,e){this._pairs=[],t&&ys(t,this,e)}const iu=Yi.prototype;iu.append=function(e,n){this._pairs.push([e,n])};iu.toString=function(e){const n=e?function(r){return e.call(this,r,Ia)}:Ia;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Vy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ou(t,e,n){if(!e)return t;const r=n&&n.encode||Vy;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=_.isURLSearchParams(e)?e.toString():new Yi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Sa{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(r){r!==null&&e(r)})}}const au={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wy=typeof URLSearchParams<"u"?URLSearchParams:Yi,zy=typeof FormData<"u"?FormData:null,Ky=typeof Blob<"u"?Blob:null,qy={isBrowser:!0,classes:{URLSearchParams:Wy,FormData:zy,Blob:Ky},protocols:["http","https","file","blob","url","data"]},Xi=typeof window<"u"&&typeof document<"u",mi=typeof navigator=="object"&&navigator||void 0,Gy=Xi&&(!mi||["ReactNative","NativeScript","NS"].indexOf(mi.product)<0),Jy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yy=Xi&&window.location.href||"http://localhost",Xy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xi,hasStandardBrowserEnv:Gy,hasStandardBrowserWebWorkerEnv:Jy,navigator:mi,origin:Yy},Symbol.toStringTag,{value:"Module"})),_e={...Xy,...qy};function Qy(t,e){return ys(t,new _e.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return _e.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Zy(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function eb(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function cu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=eb(s[o])),!a)}if(_.isFormData(t)&&_.isFunction(t.entries)){const n={};return _.forEachEntry(t,(r,s)=>{e(Zy(r),s,n,0)}),n}return null}function tb(t,e,n){if(_.isString(t))try{return(e||JSON.parse)(t),_.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const pr={transitional:au,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(e);if(i&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return s?JSON.stringify(cu(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e)||_.isReadableStream(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qy(e,this.formSerializer).toString();if((a=_.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ys(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),tb(e)):e}],transformResponse:[function(e){const n=this.transitional||pr.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(e)||_.isReadableStream(e))return e;if(e&&_.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?V.from(a,V.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_e.classes.FormData,Blob:_e.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],t=>{pr.headers[t]={}});const nb=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rb=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&nb[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ta=Symbol("internals");function Dn(t){return t&&String(t).trim().toLowerCase()}function Or(t){return t===!1||t==null?t:_.isArray(t)?t.map(Or):String(t)}function sb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const ib=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function js(t,e,n,r,s){if(_.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!_.isString(e)){if(_.isString(r))return e.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(e)}}function ob(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ab(t,e){const n=_.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Ce=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Dn(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Or(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(_.isString(e)&&(e=e.trim())&&!ib(e))o(rb(e),n);else if(_.isObject(e)&&_.isIterable(e)){let a={},c,l;for(const u of e){if(!_.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?_.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=Dn(e),e){const r=_.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return sb(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Dn(e),e){const r=_.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||js(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Dn(o),o){const a=_.findKey(r,o);a&&(!n||js(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||js(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=Or(s),delete n[i];return}const a=e?ob(i):String(i).trim();a!==i&&delete n[i],n[a]=Or(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ta]=this[Ta]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Dn(o);r[a]||(ab(s,o),r[a]=!0)}return _.isArray(e)?e.forEach(i):i(e),this}};Ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Ce.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});_.freezeMethods(Ce);function Vs(t,e){const n=this||pr,r=e||n,s=Ce.from(r.headers);let i=r.data;return _.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function lu(t){return!!(t&&t.__CANCEL__)}function Cn(t,e,n){V.call(this,t??"canceled",V.ERR_CANCELED,e,n),this.name="CanceledError"}_.inherits(Cn,V,{__CANCEL__:!0});function uu(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function cb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function lb(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(p*1e3/m):void 0}}function ub(t,e){let n=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Jr=(t,e,n=3)=>{let r=0;const s=lb(50,250);return ub(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Ra=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Aa=t=>(...e)=>_.asap(()=>t(...e)),fb=_e.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,_e.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(_e.origin),_e.navigator&&/(msie|trident)/i.test(_e.navigator.userAgent)):()=>!0,db=_e.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function pb(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function fu(t,e,n){let r=!hb(e);return t&&(r||n==!1)?pb(t,e):e}const Ca=t=>t instanceof Ce?{...t}:t;function Zt(t,e){e=e||{};const n={};function r(l,u,f,p){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:p},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,p){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,p)}else return r(l,u,f,p)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(Ca(l),Ca(u),f,!0)};return _.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);_.isUndefined(p)&&f!==a||(n[u]=p)}),n}const du=t=>{const e=Zt({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Ce.from(o),e.url=ou(fu(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(_e.hasStandardBrowserEnv||_e.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(_e.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(e)),r||r!==!1&&fb(e.url))){const l=s&&i&&db.read(i);l&&o.set(s,l)}return e},mb=typeof XMLHttpRequest<"u",gb=mb&&function(t){return new Promise(function(n,r){const s=du(t);let i=s.data;const o=Ce.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,p,m,y;function E(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function P(){if(!S)return;const O=Ce.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),B={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:t,request:S};uu(function(z){n(z),E()},function(z){r(z),E()},B),S=null}"onloadend"in S?S.onloadend=P:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(P)},S.onabort=function(){S&&(r(new V("Request aborted",V.ECONNABORTED,t,S)),S=null)},S.onerror=function(){r(new V("Network Error",V.ERR_NETWORK,t,S)),S=null},S.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const B=s.transitional||au;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),r(new V(x,B.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,t,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&_.forEach(o.toJSON(),function(x,B){S.setRequestHeader(B,x)}),_.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),a&&a!=="json"&&(S.responseType=s.responseType),l&&([p,y]=Jr(l,!0),S.addEventListener("progress",p)),c&&S.upload&&([f,m]=Jr(c),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=O=>{S&&(r(!O||O.type?new Cn(null,t,S):O),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const A=cb(s.url);if(A&&_e.protocols.indexOf(A)===-1){r(new V("Unsupported protocol "+A+":",V.ERR_BAD_REQUEST,t));return}S.send(i||null)})},_b=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof V?u:new Cn(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new V(`timeout ${e} of ms exceeded`,V.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},yb=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},bb=async function*(t,e){for await(const n of vb(t))yield*yb(n,e)},vb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Pa=(t,e,n,r)=>{const s=bb(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let p=i+=f;n(p)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},bs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",hu=bs&&typeof ReadableStream=="function",wb=bs&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),pu=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Eb=hu&&pu(()=>{let t=!1;const e=new Request(_e.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Oa=64*1024,gi=hu&&pu(()=>_.isReadableStream(new Response("").body)),Yr={stream:gi&&(t=>t.body)};bs&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Yr[e]&&(Yr[e]=_.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new V(`Response type '${e}' is not supported`,V.ERR_NOT_SUPPORT,r)})})})(new Response);const Ib=async t=>{if(t==null)return 0;if(_.isBlob(t))return t.size;if(_.isSpecCompliantForm(t))return(await new Request(_e.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(_.isArrayBufferView(t)||_.isArrayBuffer(t))return t.byteLength;if(_.isURLSearchParams(t)&&(t=t+""),_.isString(t))return(await wb(t)).byteLength},Sb=async(t,e)=>{const n=_.toFiniteNumber(t.getContentLength());return n??Ib(e)},Tb=bs&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:p}=du(t);l=l?(l+"").toLowerCase():"text";let m=_b([s,i&&i.toAbortSignal()],o),y;const E=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let S;try{if(c&&Eb&&n!=="get"&&n!=="head"&&(S=await Sb(u,r))!==0){let B=new Request(e,{method:"POST",body:r,duplex:"half"}),q;if(_.isFormData(r)&&(q=B.headers.get("content-type"))&&u.setContentType(q),B.body){const[z,he]=Ra(S,Jr(Aa(c)));r=Pa(B.body,Oa,z,he)}}_.isString(f)||(f=f?"include":"omit");const P="credentials"in Request.prototype;y=new Request(e,{...p,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:P?f:void 0});let A=await fetch(y);const O=gi&&(l==="stream"||l==="response");if(gi&&(a||O&&E)){const B={};["status","statusText","headers"].forEach(ve=>{B[ve]=A[ve]});const q=_.toFiniteNumber(A.headers.get("content-length")),[z,he]=a&&Ra(q,Jr(Aa(a),!0))||[];A=new Response(Pa(A.body,Oa,z,()=>{he&&he(),E&&E()}),B)}l=l||"text";let x=await Yr[_.findKey(Yr,l)||"text"](A,t);return!O&&E&&E(),await new Promise((B,q)=>{uu(B,q,{data:x,headers:Ce.from(A.headers),status:A.status,statusText:A.statusText,config:t,request:y})})}catch(P){throw E&&E(),P&&P.name==="TypeError"&&/Load failed|fetch/i.test(P.message)?Object.assign(new V("Network Error",V.ERR_NETWORK,t,y),{cause:P.cause||P}):V.from(P,P&&P.code,t,y)}}),_i={http:By,xhr:gb,fetch:Tb};_.forEach(_i,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ka=t=>`- ${t}`,Rb=t=>_.isFunction(t)||t===null||t===!1,mu={getAdapter:t=>{t=_.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!Rb(n)&&(r=_i[(o=String(n)).toLowerCase()],r===void 0))throw new V(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ka).join(`
`):" "+ka(i[0]):"as no adapter specified";throw new V("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:_i};function Ws(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Cn(null,t)}function Na(t){return Ws(t),t.headers=Ce.from(t.headers),t.data=Vs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),mu.getAdapter(t.adapter||pr.adapter)(t).then(function(r){return Ws(t),r.data=Vs.call(t,t.transformResponse,r),r.headers=Ce.from(r.headers),r},function(r){return lu(r)||(Ws(t),r&&r.response&&(r.response.data=Vs.call(t,t.transformResponse,r.response),r.response.headers=Ce.from(r.response.headers))),Promise.reject(r)})}const gu="1.9.0",vs={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{vs[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const xa={};vs.transitional=function(e,n,r){function s(i,o){return"[Axios v"+gu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new V(s(o," has been removed"+(n?" in "+n:"")),V.ERR_DEPRECATED);return n&&!xa[o]&&(xa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};vs.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Ab(t,e,n){if(typeof t!="object")throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new V("option "+i+" must be "+c,V.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new V("Unknown option "+i,V.ERR_BAD_OPTION)}}const kr={assertOptions:Ab,validators:vs},Xe=kr.validators;let qt=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Sa,response:new Sa}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Zt(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&kr.assertOptions(r,{silentJSONParsing:Xe.transitional(Xe.boolean),forcedJSONParsing:Xe.transitional(Xe.boolean),clarifyTimeoutError:Xe.transitional(Xe.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:kr.assertOptions(s,{encode:Xe.function,serialize:Xe.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),kr.assertOptions(n,{baseUrl:Xe.spelling("baseURL"),withXsrfToken:Xe.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Ce.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(n)===!1||(c=c&&E.synchronous,a.unshift(E.fulfilled,E.rejected))});const l=[];this.interceptors.response.forEach(function(E){l.push(E.fulfilled,E.rejected)});let u,f=0,p;if(!c){const y=[Na.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,l),p=y.length,u=Promise.resolve(n);f<p;)u=u.then(y[f++],y[f++]);return u}p=a.length;let m=n;for(f=0;f<p;){const y=a[f++],E=a[f++];try{m=y(m)}catch(S){E.call(this,S);break}}try{u=Na.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=Zt(this.defaults,e);const n=fu(e.baseURL,e.url,e.allowAbsoluteUrls);return ou(n,e.params,e.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(e){qt.prototype[e]=function(n,r){return this.request(Zt(r||{},{method:e,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Zt(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}qt.prototype[e]=n(),qt.prototype[e+"Form"]=n(!0)});let Cb=class _u{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Cn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new _u(function(s){e=s}),cancel:e}}};function Pb(t){return function(n){return t.apply(null,n)}}function Ob(t){return _.isObject(t)&&t.isAxiosError===!0}const yi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yi).forEach(([t,e])=>{yi[e]=t});function yu(t){const e=new qt(t),n=Gl(qt.prototype.request,e);return _.extend(n,qt.prototype,e,{allOwnKeys:!0}),_.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return yu(Zt(t,s))},n}const ee=yu(pr);ee.Axios=qt;ee.CanceledError=Cn;ee.CancelToken=Cb;ee.isCancel=lu;ee.VERSION=gu;ee.toFormData=ys;ee.AxiosError=V;ee.Cancel=ee.CanceledError;ee.all=function(e){return Promise.all(e)};ee.spread=Pb;ee.isAxiosError=Ob;ee.mergeConfig=Zt;ee.AxiosHeaders=Ce;ee.formToJSON=t=>cu(_.isHTMLForm(t)?new FormData(t):t);ee.getAdapter=mu.getAdapter;ee.HttpStatusCode=yi;ee.default=ee;const{Axios:gv,AxiosError:_v,CanceledError:yv,isCancel:bv,CancelToken:vv,VERSION:wv,all:Ev,Cancel:Iv,isAxiosError:Sv,spread:Tv,toFormData:Rv,AxiosHeaders:Av,HttpStatusCode:Cv,formToJSON:Pv,getAdapter:Ov,mergeConfig:kv}=ee,kb={name:"ShoppingCartList.vue",props:["cartItems","message"],emits:["remove-item-from-cart"]},Nb=["src"],xb={class:"detail-wrap"},Db=["onClick"];function Lb(t,e,n,r,s,i){return le(),fe(Ie,null,[(le(!0),fe(Ie,null,_c(n.cartItems,o=>(le(),fe("div",{class:"product-container",key:o.id},[re("img",{class:"product-image",src:o.imageUrl,alt:""},null,8,Nb),re("div",xb,[re("h3",null,Gt(o.name),1),re("p",null,Gt(o.price),1)]),re("button",{onClick:a=>t.$emit("remove-item-from-cart",o.id),class:"remove-button"},"Remove from Cart",8,Db)]))),128)),e[0]||(e[0]=re("button",{class:"checkout-button"},"Proceed to Checkout",-1))],64)}const Mb=$t(kb,[["render",Lb]]),Ub={name:"ShoppingCartPage",props:["user"],components:{"cart-list":Mb},data(){return{cartItems:[]}},watch:{async user(t){if(console.log("Changed!"),console.log(t),t){const n=(await ee.get(`/api/users/${t.uid}/cart`)).data;this.cartItems=n}}},methods:{async removeItemFromCart(t){const e=await ee.delete(`/api/users/${this.user.uid}/cart/${t}`);this.cartItems=e.data}},async created(){if(this.user){const t=await ee.get(`/api/users/${this.user.uid}/cart`);this.cartItems=t.data}}},Fb={key:0},$b={key:1};function Bb(t,e,n,r,s,i){const o=Yt("cart-list");return le(),fe(Ie,null,[e[2]||(e[2]=re("h1",null,"Shopping Cart",-1)),s.cartItems.length>0?(le(),fe("div",Fb,[ce(o,{onRemoveItemFromCart:e[0]||(e[0]=a=>i.removeItemFromCart(a)),cartItems:s.cartItems},null,8,["cartItems"])])):(le(),fe("div",$b,e[1]||(e[1]=[re("h3",null,"There are no items in cart",-1)])))],64)}const Hb=$t(Ub,[["render",Bb]]),jb={name:"Products List",props:{products:Array}},Vb={class:"grid-wrap"},Wb={class:"product-item",key:"product.id"},zb=["src"],Kb={class:"product-name"},qb={class:"product-price"};function Gb(t,e,n,r,s,i){const o=Yt("router-link");return le(),fe("div",Vb,[(le(!0),fe(Ie,null,_c(n.products,a=>(le(),fe("div",Wb,[re("img",{src:a.imageUrl,alt:""},null,8,zb),re("h3",Kb,Gt(a.name),1),re("p",qb,Gt(a.price),1),ce(o,{to:"/products/"+a.id},{default:Lr(()=>e[0]||(e[0]=[re("button",null,"View Details",-1)])),_:2},1032,["to"])]))),128))])}const Jb=$t(jb,[["render",Gb]]),Yb={name:"Product Page",props:["user"],components:{"products-list":Jb},data(){return{products:[]}},async created(){const e=(await ee.get("/api/products")).data;this.products=e}};function Xb(t,e,n,r,s,i){const o=Yt("products-list");return le(),fe(Ie,null,[e[0]||(e[0]=re("div",null,[re("h1",null,"Products")],-1)),ce(o,{products:s.products},null,8,["products"])],64)}const Qb=$t(Yb,[["render",Xb]]),Zb={name:"PageNotFound",props:["user"],date(){return{}}};function ev(t,e,n,r,s,i){return le(),fe("h1",null,"Page not found")}const bu=$t(Zb,[["render",ev]]),tv={name:"Products Detail Page",components:{PageNotFound:bu},props:["user"],data(){return{product:{},cartItems:[]}},watch:{async user(t){if(console.log("Changed!"),console.log(t),t){const e=await ee.get(`/api/users/${t.uid}/cart`);this.cartItems=e.data}}},computed:{isItemInCart(){return this.cartItems.some(t=>t.id===this.$route.params.productId)}},methods:{async addToCart(){await ee.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Successfully added item to cart!")},async signIn(){const t=prompt("Please enter your email to sign in:"),e=Gr(),n={url:`https://shopping-cart-ufxf.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await Em(e,t,n),alert("A login link was sent to the email you provided"),window.localStorage.setItem("emailForSignIn",t)}},async created(){const t=Gr();if(Im(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await Sm(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const n=(await ee.get(`/api/products/${this.$route.params.productId}`)).data;if(this.product=n,this.user){const r=await ee.get(`/api/users/${this.user.uid}/cart`);this.cartItems=r.data}}},nv={key:0},rv={class:"img-wrap"},sv=["src"],iv={class:"product-details"},ov={class:"price"},av={key:1,class:"grey-button"},cv={key:1};function lv(t,e,n,r,s,i){const o=Yt("PageNotFound");return s.product?(le(),fe("div",nv,[re("div",rv,[re("img",{src:s.product.imageUrl,alt:""},null,8,sv)]),re("div",iv,[re("h1",null,Gt(s.product.name),1),re("h3",ov,Gt(s.product.price),1),n.user&&!i.isItemInCart?(le(),fe("button",{key:0,onClick:e[0]||(e[0]=(...a)=>i.addToCart&&i.addToCart(...a)),class:"add-to-cart"},"Add to Cart")):Ir("",!0),n.user&&i.isItemInCart?(le(),fe("button",av,"Item is already in cart")):Ir("",!0),n.user?Ir("",!0):(le(),fe("button",{key:2,onClick:e[1]||(e[1]=(...a)=>i.signIn&&i.signIn(...a)),class:"sign-in"},"Sign in to add to cart"))])])):(le(),fe("div",cv,[ce(o)]))}const uv=$t(tv,[["render",lv]]);var fv="firebase",dv="11.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(fv,dv,"app");const hv={apiKey:"AIzaSyCArTo7YahvT-zewRPK3l7SvyL9jznHJ-k",authDomain:"shopping-cart-44486.firebaseapp.com",projectId:"shopping-cart-44486",storageBucket:"shopping-cart-44486.firebasestorage.app",messagingSenderId:"814166916282",appId:"1:814166916282:web:c8df565bc630350d9a1683"};Zc(hv);Bd(Xg).use(Z_({history:C_(void 0),routes:[{path:"/cart",component:Hb},{path:"/products",component:Qb},{path:"/products/:productId",component:uv},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:bu}]})).mount("#app");
