!function(t){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i={exports:{}};(function(t,e){var i={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function r(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function n(t){try{delete window[t]}catch(e){window[t]=void 0}}function o(t){var e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)}function a(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=t,h=e.timeout||i.timeout,l=e.jsonpCallback||i.jsonpCallback,s=void 0;return new Promise((function(i,d){var c=e.jsonpCallbackFunction||r(),f=l+"_"+c;window[c]=function(t){i({ok:!0,json:function(){return Promise.resolve(t)}}),s&&clearTimeout(s),o(f),n(c)},a+=-1===a.indexOf("?")?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+a+l+"="+c),e.charset&&p.setAttribute("charset",e.charset),e.nonce&&p.setAttribute("nonce",e.nonce),e.referrerPolicy&&p.setAttribute("referrerPolicy",e.referrerPolicy),e.crossorigin&&p.setAttribute("crossorigin","true"),p.id=f,document.getElementsByTagName("head")[0].appendChild(p),s=setTimeout((function(){d(new Error("JSONP request to "+t+" timed out")),n(c),o(f),window[c]=function(){n(c)}}),h),p.onerror=function(){d(new Error("JSONP request to "+t+" failed")),n(c),o(f),s&&clearTimeout(s)}}))}e.exports=a})(0,i);var r=e(i.exports);const n=document.querySelector("body"),o=document.querySelectorAll(".js-studio-login"),a={CAMPAIGN:"vs_campaign"},h={PROD:"www.vsco.co"};async function l(){let t;const e=window.location.hostname===h.PROD?"vsco.co":"";if(e)try{return t=await r(`//${e}/content/Static/userinfo?include_sub_status=true`,{jsonpCallbackFunction:"define"}),await t.json()}catch(t){throw console.error("[fetchUserInfo] error: ",t),t}return Promise.resolve(function(){const t={...s},e=new URLSearchParams(window.location.search).get("member");"pro"===e?(t.subscriptionCode="VSCOPRO",t.subscriptionSource=6,t.loggedIn=!0):"plus"===e?(t.subscriptionCode="VSCOANNUAL",t.subscriptionSource=6,t.loggedIn=!0):"none"===e&&(t.loggedIn=!0);return t}())}const s={userId:1,domain:"vsco.co",email:"vsco@vsco.co",emailValidated:!0,accountValidated:!0,fullName:"vsco",firstName:"",lastName:"",gravatar:"rassets.vsco.co/avatars/avatar-other.png",responsive_url:"rassets.vsco.co/avatars/avatar-other.png",loggedIn:!1,tkn:"",oauth_tkn:"",PP:"",gridURL:"https://vsco.co/vsco",gridDescription:"",gridId:2000002261,username:"vsco",feedUrl:"https://vsco.co/vsco/feed",showCheckout:!0,birthMonth:"1979-06",ageYears:43,isMember:!1};let d;const c={get(){if(!d)throw new Error("[userInfoStore] userInfo has not been set");return d},set(t){d||(d=t)}};Object.freeze(c);const f="https://feed-embed.vsco.co";
/*! js-cookie v3.0.5 | MIT */
function p(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)t[r]=i[r]}return t}var g=function t(e,i){function r(t,r,n){if("undefined"!=typeof document){"number"==typeof(n=p({},i,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var a in n)n[a]&&(o+="; "+a,!0!==n[a]&&(o+="="+n[a].split(";")[0]));return document.cookie=t+"="+e.write(r,t)+o}}return Object.create({set:r,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var i=document.cookie?document.cookie.split("; "):[],r={},n=0;n<i.length;n++){var o=i[n].split("="),a=o.slice(1).join("=");try{var h=decodeURIComponent(o[0]);if(r[h]=e.read(a,h),t===h)break}catch(t){}}return t?r[t]:r}},remove:function(t,e){r(t,"",p({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,p({},this.attributes,e))},withConverter:function(e){return t(p({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const w={VSCOPRO:"pro",VSCOANNUAL:"plus"};function u(t){if(t){const e="string"==typeof t?document.querySelector(t):t;e instanceof HTMLElement&&(e.style.display="none")}}const H=".js-download-bar";
/**
	 * @license
	 * Copyright 2021 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
class V extends Event{constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i??!1}}
/**
	 * @license
	 * Copyright 2021 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
/**
	 * @license
	 * Copyright 2021 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
class m{constructor(t,e,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new V(this.context,this.t,this.subscribe))}}
/**
	 * @license
	 * Copyright 2021 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */class y{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}
/**
	 * @license
	 * Copyright 2021 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */class v extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class x extends y{constructor(t,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const i=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)i.has(t)||(i.add(t),e.dispatchEvent(new V(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new v(this.context))}}
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
/**
	 * @license
	 * Copyright 2022 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
function b({context:t,subscribe:e}){return(i,r)=>{"object"==typeof r?r.addInitializer((function(){new m(this,{context:t,callback:t=>{this[r.name]=t},subscribe:e})})):i.constructor.addInitializer((i=>{new m(i,{context:t,callback:t=>{i[r]=t},subscribe:e})}))}}
/**
	 * @license
	 * Copyright 2019 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */const M=window,Z=M.ShadowRoot&&(void 0===M.ShadyCSS||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,C=Symbol(),k=new WeakMap;class ${constructor(t,e,i){if(this._$cssResult$=!0,i!==C)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=k.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&k.set(e,t))}return t}toString(){return this.cssText}}const S=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new $(i,t,C)},_=Z?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new $("string"==typeof t?t:t+"",void 0,C))(e)})(t):t
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */;var L;const A=window,O=A.trustedTypes,E=O?O.emptyScript:"",P=A.reactiveElementPolyfillSupport,R={toAttribute(t,e){switch(e){case Boolean:t=t?E:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},j=(t,e)=>e!==t&&(e==e||t==t),T={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:j},D="finalized";class N extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=T){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||T}static finalize(){if(this.hasOwnProperty(D))return!1;this[D]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(_(t))}else void 0!==t&&e.push(_(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Z?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),r=M.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=T){var r;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:R).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=r.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:R;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||j)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
var z;N[D]=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},null==P||P({ReactiveElement:N}),(null!==(L=A.reactiveElementVersions)&&void 0!==L?L:A.reactiveElementVersions=[]).push("1.6.3");const U=window,B=U.trustedTypes,F=B?B.createPolicy("lit-html",{createHTML:t=>t}):void 0,I="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,W="?"+q,G=`<${W}>`,J=document,K=()=>J.createComment(""),Y=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Q=Array.isArray,X="[ \t\n\f\r]",tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,it=/>/g,rt=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,ot=/"/g,at=/^(?:script|style|textarea|title)$/i,ht=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),lt=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),dt=new WeakMap,ct=J.createTreeWalker(J,129,null,!1);function ft(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==F?F.createHTML(e):e}const pt=(t,e)=>{const i=t.length-1,r=[];let n,o=2===e?"<svg>":"",a=tt;for(let e=0;e<i;e++){const i=t[e];let h,l,s=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===tt?"!--"===l[1]?a=et:void 0!==l[1]?a=it:void 0!==l[2]?(at.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=rt):void 0!==l[3]&&(a=rt):a===rt?">"===l[0]?(a=null!=n?n:tt,s=-1):void 0===l[1]?s=-2:(s=a.lastIndex-l[2].length,h=l[1],a=void 0===l[3]?rt:'"'===l[3]?ot:nt):a===ot||a===nt?a=rt:a===et||a===it?a=tt:(a=rt,n=void 0);const c=a===rt&&t[e+1].startsWith("/>")?" ":"";o+=a===tt?i+G:s>=0?(r.push(h),i.slice(0,s)+I+i.slice(s)+q+c):i+q+(-2===s?(r.push(void 0),e):c)}return[ft(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class gt{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const a=t.length-1,h=this.parts,[l,s]=pt(t,e);if(this.el=gt.createElement(l,i),ct.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=ct.nextNode())&&h.length<a;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(I)||e.startsWith(q)){const i=s[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+I).split(q),e=/([.?@])?(.*)/.exec(i);h.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?mt:"?"===e[1]?vt:"@"===e[1]?xt:Vt})}else h.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(at.test(r.tagName)){const t=r.textContent.split(q),e=t.length-1;if(e>0){r.textContent=B?B.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],K()),ct.nextNode(),h.push({type:2,index:++n});r.append(t[e],K())}}}else if(8===r.nodeType)if(r.data===W)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(q,t+1));)h.push({type:7,index:n}),t+=q.length-1}n++}}static createElement(t,e){const i=J.createElement("template");return i.innerHTML=t,i}}function wt(t,e,i=t,r){var n,o,a,h;if(e===lt)return e;let l=void 0!==r?null===(n=i._$Co)||void 0===n?void 0:n[r]:i._$Cl;const s=Y(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==s&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===s?l=void 0:(l=new s(t),l._$AT(t,i,r)),void 0!==r?(null!==(a=(h=i)._$Co)&&void 0!==a?a:h._$Co=[])[r]=l:i._$Cl=l),void 0!==l&&(e=wt(t,l._$AS(t,e.values),l,r)),e}class ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:J).importNode(i,!0);ct.currentNode=n;let o=ct.nextNode(),a=0,h=0,l=r[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new Ht(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new bt(o,this,t)),this._$AV.push(e),l=r[++h]}a!==(null==l?void 0:l.index)&&(o=ct.nextNode(),a++)}return ct.currentNode=J,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Ht{constructor(t,e,i,r){var n;this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=wt(this,t,e),Y(t)?t===st||null==t||""===t?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==lt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>Q(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==st&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.$(J.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=gt.createElement(ft(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new ut(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=dt.get(t.strings);return void 0===e&&dt.set(t.strings,e=new gt(t)),e}T(t){Q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new Ht(this.k(K()),this.k(K()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Vt{constructor(t,e,i,r,n){this.type=1,this._$AH=st,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=st}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(void 0===n)t=wt(this,t,e,0),o=!Y(t)||t!==this._$AH&&t!==lt,o&&(this._$AH=t);else{const r=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=wt(this,r[i+a],e,a),h===lt&&(h=this._$AH[a]),o||(o=!Y(h)||h!==this._$AH[a]),h===st?t=st:t!==st&&(t+=(null!=h?h:"")+n[a+1]),this._$AH[a]=h}o&&!r&&this.j(t)}j(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class mt extends Vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===st?void 0:t}}const yt=B?B.emptyScript:"";class vt extends Vt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==st?this.element.setAttribute(this.name,yt):this.element.removeAttribute(this.name)}}class xt extends Vt{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=wt(this,t,e,0))&&void 0!==i?i:st)===lt)return;const r=this._$AH,n=t===st&&r!==st||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==st&&(r===st||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class bt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){wt(this,t)}}const Mt=U.litHtmlPolyfillSupport;null==Mt||Mt(gt,Ht),(null!==(z=U.litHtmlVersions)&&void 0!==z?z:U.litHtmlVersions=[]).push("2.8.0");
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
var Zt,Ct;class kt extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var r,n;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let a=o._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=a=new Ht(e.insertBefore(K(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return lt}}kt.finalized=!0,kt._$litElement$=!0,null===(Zt=globalThis.litElementHydrateSupport)||void 0===Zt||Zt.call(globalThis,{LitElement:kt});const $t=globalThis.litElementPolyfillSupport;null==$t||$t({LitElement:kt}),(null!==(Ct=globalThis.litElementVersions)&&void 0!==Ct?Ct:globalThis.litElementVersions=[]).push("3.3.3");
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
const St=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},_t=(t,e,i)=>{e.constructor.createProperty(i,t)};function Lt(t){return(e,i)=>void 0!==i?_t(t,e,i):St(t,e)
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */}function At(t){return Lt({...t,state:!0})}
/**
	 * @license
	 * Copyright 2021 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var Ot;function Et(t,e){return function(){return t.apply(e,arguments)}}null===(Ot=window.HTMLSlotElement)||void 0===Ot||Ot.prototype.assignedElements;const{toString:Pt}=Object.prototype,{getPrototypeOf:Rt}=Object,jt=(Tt=Object.create(null),t=>{const e=Pt.call(t);return Tt[e]||(Tt[e]=e.slice(8,-1).toLowerCase())});var Tt;const Dt=t=>(t=t.toLowerCase(),e=>jt(e)===t),Nt=t=>e=>typeof e===t,{isArray:zt}=Array,Ut=Nt("undefined");const Bt=Dt("ArrayBuffer");const Ft=Nt("string"),It=Nt("function"),qt=Nt("number"),Wt=t=>null!==t&&"object"==typeof t,Gt=t=>{if("object"!==jt(t))return!1;const e=Rt(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},Jt=Dt("Date"),Kt=Dt("File"),Yt=Dt("Blob"),Qt=Dt("FileList"),Xt=Dt("URLSearchParams");function te(t,e,{allOwnKeys:i=!1}={}){if(null==t)return;let r,n;if("object"!=typeof t&&(t=[t]),zt(t))for(r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else{const n=i?Object.getOwnPropertyNames(t):Object.keys(t),o=n.length;let a;for(r=0;r<o;r++)a=n[r],e.call(null,t[a],a,t)}}function ee(t,e){e=e.toLowerCase();const i=Object.keys(t);let r,n=i.length;for(;n-- >0;)if(r=i[n],e===r.toLowerCase())return r;return null}const ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,re=t=>!Ut(t)&&t!==ie;const ne=(oe="undefined"!=typeof Uint8Array&&Rt(Uint8Array),t=>oe&&t instanceof oe);var oe;const ae=Dt("HTMLFormElement"),he=(({hasOwnProperty:t})=>(e,i)=>t.call(e,i))(Object.prototype),le=Dt("RegExp"),se=(t,e)=>{const i=Object.getOwnPropertyDescriptors(t),r={};te(i,((i,n)=>{let o;!1!==(o=e(i,n,t))&&(r[n]=o||i)})),Object.defineProperties(t,r)},de="abcdefghijklmnopqrstuvwxyz",ce="0123456789",fe={DIGIT:ce,ALPHA:de,ALPHA_DIGIT:de+de.toUpperCase()+ce};const pe=Dt("AsyncFunction");var ge={isArray:zt,isArrayBuffer:Bt,isBuffer:function(t){return null!==t&&!Ut(t)&&null!==t.constructor&&!Ut(t.constructor)&&It(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||It(t.append)&&("formdata"===(e=jt(t))||"object"===e&&It(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&Bt(t.buffer),e},isString:Ft,isNumber:qt,isBoolean:t=>!0===t||!1===t,isObject:Wt,isPlainObject:Gt,isUndefined:Ut,isDate:Jt,isFile:Kt,isBlob:Yt,isRegExp:le,isFunction:It,isStream:t=>Wt(t)&&It(t.pipe),isURLSearchParams:Xt,isTypedArray:ne,isFileList:Qt,forEach:te,merge:function t(){const{caseless:e}=re(this)&&this||{},i={},r=(r,n)=>{const o=e&&ee(i,n)||n;Gt(i[o])&&Gt(r)?i[o]=t(i[o],r):Gt(r)?i[o]=t({},r):zt(r)?i[o]=r.slice():i[o]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&te(arguments[t],r);return i},extend:(t,e,i,{allOwnKeys:r}={})=>(te(e,((e,r)=>{i&&It(e)?t[r]=Et(e,i):t[r]=e}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,i,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),i&&Object.assign(t.prototype,i)},toFlatObject:(t,e,i,r)=>{let n,o,a;const h={};if(e=e||{},null==t)return e;do{for(n=Object.getOwnPropertyNames(t),o=n.length;o-- >0;)a=n[o],r&&!r(a,t,e)||h[a]||(e[a]=t[a],h[a]=!0);t=!1!==i&&Rt(t)}while(t&&(!i||i(t,e))&&t!==Object.prototype);return e},kindOf:jt,kindOfTest:Dt,endsWith:(t,e,i)=>{t=String(t),(void 0===i||i>t.length)&&(i=t.length),i-=e.length;const r=t.indexOf(e,i);return-1!==r&&r===i},toArray:t=>{if(!t)return null;if(zt(t))return t;let e=t.length;if(!qt(e))return null;const i=new Array(e);for(;e-- >0;)i[e]=t[e];return i},forEachEntry:(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},matchAll:(t,e)=>{let i;const r=[];for(;null!==(i=t.exec(e));)r.push(i);return r},isHTMLForm:ae,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:se,freezeMethods:t=>{se(t,((e,i)=>{if(It(t)&&-1!==["arguments","caller","callee"].indexOf(i))return!1;const r=t[i];It(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")}))}))},toObjectSet:(t,e)=>{const i={},r=t=>{t.forEach((t=>{i[t]=!0}))};return zt(t)?r(t):r(String(t).split(e)),i},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,i){return e.toUpperCase()+i})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:ee,global:ie,isContextDefined:re,ALPHABET:fe,generateString:(t=16,e=fe.ALPHA_DIGIT)=>{let i="";const{length:r}=e;for(;t--;)i+=e[Math.random()*r|0];return i},isSpecCompliantForm:function(t){return!!(t&&It(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),i=(t,r)=>{if(Wt(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const n=zt(t)?[]:{};return te(t,((t,e)=>{const o=i(t,r+1);!Ut(o)&&(n[e]=o)})),e[r]=void 0,n}}return t};return i(t,0)},isAsyncFn:pe,isThenable:t=>t&&(Wt(t)||It(t))&&It(t.then)&&It(t.catch)};function we(t,e,i,r,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),i&&(this.config=i),r&&(this.request=r),n&&(this.response=n)}ge.inherits(we,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ge.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ue=we.prototype,He={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{He[t]={value:t}})),Object.defineProperties(we,He),Object.defineProperty(ue,"isAxiosError",{value:!0}),we.from=(t,e,i,r,n,o)=>{const a=Object.create(ue);return ge.toFlatObject(t,a,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),we.call(a,t.message,e,i,r,n),a.cause=t,a.name=t.name,o&&Object.assign(a,o),a};function Ve(t){return ge.isPlainObject(t)||ge.isArray(t)}function me(t){return ge.endsWith(t,"[]")?t.slice(0,-2):t}function ye(t,e,i){return t?t.concat(e).map((function(t,e){return t=me(t),!i&&e?"["+t+"]":t})).join(i?".":""):e}const ve=ge.toFlatObject(ge,{},null,(function(t){return/^is[A-Z]/.test(t)}));function xe(t,e,i){if(!ge.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(i=ge.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!ge.isUndefined(e[t])}))).metaTokens,n=i.visitor||s,o=i.dots,a=i.indexes,h=(i.Blob||"undefined"!=typeof Blob&&Blob)&&ge.isSpecCompliantForm(e);if(!ge.isFunction(n))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(ge.isDate(t))return t.toISOString();if(!h&&ge.isBlob(t))throw new we("Blob is not supported. Use a Buffer instead.");return ge.isArrayBuffer(t)||ge.isTypedArray(t)?h&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function s(t,i,n){let h=t;if(t&&!n&&"object"==typeof t)if(ge.endsWith(i,"{}"))i=r?i:i.slice(0,-2),t=JSON.stringify(t);else if(ge.isArray(t)&&function(t){return ge.isArray(t)&&!t.some(Ve)}(t)||(ge.isFileList(t)||ge.endsWith(i,"[]"))&&(h=ge.toArray(t)))return i=me(i),h.forEach((function(t,r){!ge.isUndefined(t)&&null!==t&&e.append(!0===a?ye([i],r,o):null===a?i:i+"[]",l(t))})),!1;return!!Ve(t)||(e.append(ye(n,i,o),l(t)),!1)}const d=[],c=Object.assign(ve,{defaultVisitor:s,convertValue:l,isVisitable:Ve});if(!ge.isObject(t))throw new TypeError("data must be an object");return function t(i,r){if(!ge.isUndefined(i)){if(-1!==d.indexOf(i))throw Error("Circular reference detected in "+r.join("."));d.push(i),ge.forEach(i,(function(i,o){!0===(!(ge.isUndefined(i)||null===i)&&n.call(e,i,ge.isString(o)?o.trim():o,r,c))&&t(i,r?r.concat(o):[o])})),d.pop()}}(t),e}function be(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Me(t,e){this._pairs=[],t&&xe(t,this,e)}const Ze=Me.prototype;function Ce(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ke(t,e,i){if(!e)return t;const r=i&&i.encode||Ce,n=i&&i.serialize;let o;if(o=n?n(e,i):ge.isURLSearchParams(e)?e.toString():new Me(e,i).toString(r),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}Ze.append=function(t,e){this._pairs.push([t,e])},Ze.toString=function(t){const e=t?function(e){return t.call(this,e,be)}:be;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var $e=class{constructor(){this.handlers=[]}use(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!i&&i.synchronous,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ge.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},Se={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var _e={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Me,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function Le(t){function e(t,i,r,n){let o=t[n++];const a=Number.isFinite(+o),h=n>=t.length;if(o=!o&&ge.isArray(r)?r.length:o,h)return ge.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a;r[o]&&ge.isObject(r[o])||(r[o]=[]);return e(t,i,r[o],n)&&ge.isArray(r[o])&&(r[o]=function(t){const e={},i=Object.keys(t);let r;const n=i.length;let o;for(r=0;r<n;r++)o=i[r],e[o]=t[o];return e}(r[o])),!a}if(ge.isFormData(t)&&ge.isFunction(t.entries)){const i={};return ge.forEachEntry(t,((t,r)=>{e(function(t){return ge.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),r,i,0)})),i}return null}const Ae={transitional:Se,adapter:["xhr","http"],transformRequest:[function(t,e){const i=e.getContentType()||"",r=i.indexOf("application/json")>-1,n=ge.isObject(t);n&&ge.isHTMLForm(t)&&(t=new FormData(t));if(ge.isFormData(t))return r&&r?JSON.stringify(Le(t)):t;if(ge.isArrayBuffer(t)||ge.isBuffer(t)||ge.isStream(t)||ge.isFile(t)||ge.isBlob(t))return t;if(ge.isArrayBufferView(t))return t.buffer;if(ge.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(n){if(i.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return xe(t,new _e.classes.URLSearchParams,Object.assign({visitor:function(t,e,i,r){return _e.isNode&&ge.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((o=ge.isFileList(t))||i.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return xe(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return n||r?(e.setContentType("application/json",!1),function(t,e,i){if(ge.isString(t))try{return(e||JSON.parse)(t),ge.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(i||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||Ae.transitional,i=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&ge.isString(t)&&(i&&!this.responseType||r)){const i=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(i){if("SyntaxError"===t.name)throw we.from(t,we.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_e.classes.FormData,Blob:_e.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ge.forEach(["delete","get","head","post","put","patch"],(t=>{Ae.headers[t]={}}));var Oe=Ae;const Ee=ge.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const Pe=Symbol("internals");function Re(t){return t&&String(t).trim().toLowerCase()}function je(t){return!1===t||null==t?t:ge.isArray(t)?t.map(je):String(t)}function Te(t,e,i,r,n){return ge.isFunction(r)?r.call(this,e,i):(n&&(e=i),ge.isString(e)?ge.isString(r)?-1!==e.indexOf(r):ge.isRegExp(r)?r.test(e):void 0:void 0)}class De{constructor(t){t&&this.set(t)}set(t,e,i){const r=this;function n(t,e,i){const n=Re(e);if(!n)throw new Error("header name must be a non-empty string");const o=ge.findKey(r,n);(!o||void 0===r[o]||!0===i||void 0===i&&!1!==r[o])&&(r[o||e]=je(t))}const o=(t,e)=>ge.forEach(t,((t,i)=>n(t,i,e)));return ge.isPlainObject(t)||t instanceof this.constructor?o(t,e):ge.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?o((t=>{const e={};let i,r,n;return t&&t.split("\n").forEach((function(t){n=t.indexOf(":"),i=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!i||e[i]&&Ee[i]||("set-cookie"===i?e[i]?e[i].push(r):e[i]=[r]:e[i]=e[i]?e[i]+", "+r:r)})),e})(t),e):null!=t&&n(e,t,i),this}get(t,e){if(t=Re(t)){const i=ge.findKey(this,t);if(i){const t=this[i];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=i.exec(t);)e[r[1]]=r[2];return e}(t);if(ge.isFunction(e))return e.call(this,t,i);if(ge.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Re(t)){const i=ge.findKey(this,t);return!(!i||void 0===this[i]||e&&!Te(0,this[i],i,e))}return!1}delete(t,e){const i=this;let r=!1;function n(t){if(t=Re(t)){const n=ge.findKey(i,t);!n||e&&!Te(0,i[n],n,e)||(delete i[n],r=!0)}}return ge.isArray(t)?t.forEach(n):n(t),r}clear(t){const e=Object.keys(this);let i=e.length,r=!1;for(;i--;){const n=e[i];t&&!Te(0,this[n],n,t,!0)||(delete this[n],r=!0)}return r}normalize(t){const e=this,i={};return ge.forEach(this,((r,n)=>{const o=ge.findKey(i,n);if(o)return e[o]=je(r),void delete e[n];const a=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,i)=>e.toUpperCase()+i))}(n):String(n).trim();a!==n&&delete e[n],e[a]=je(r),i[a]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return ge.forEach(this,((i,r)=>{null!=i&&!1!==i&&(e[r]=t&&ge.isArray(i)?i.join(", "):i)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const i=new this(t);return e.forEach((t=>i.set(t))),i}static accessor(t){const e=(this[Pe]=this[Pe]={accessors:{}}).accessors,i=this.prototype;function r(t){const r=Re(t);e[r]||(!function(t,e){const i=ge.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+i,{value:function(t,i,n){return this[r].call(this,e,t,i,n)},configurable:!0})}))}(i,t),e[r]=!0)}return ge.isArray(t)?t.forEach(r):r(t),this}}De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ge.reduceDescriptors(De.prototype,(({value:t},e)=>{let i=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[i]=t}}})),ge.freezeMethods(De);var Ne=De;function ze(t,e){const i=this||Oe,r=e||i,n=Ne.from(r.headers);let o=r.data;return ge.forEach(t,(function(t){o=t.call(i,o,n.normalize(),e?e.status:void 0)})),n.normalize(),o}function Ue(t){return!(!t||!t.__CANCEL__)}function Be(t,e,i){we.call(this,null==t?"canceled":t,we.ERR_CANCELED,e,i),this.name="CanceledError"}ge.inherits(Be,we,{__CANCEL__:!0});var Fe=_e.isStandardBrowserEnv?{write:function(t,e,i,r,n,o){const a=[];a.push(t+"="+encodeURIComponent(e)),ge.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),ge.isString(r)&&a.push("path="+r),ge.isString(n)&&a.push("domain="+n),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ie(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}var qe=_e.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let i;function r(i){let r=i;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return i=r(window.location.href),function(t){const e=ge.isString(t)?r(t):t;return e.protocol===i.protocol&&e.host===i.host}}():function(){return!0};function We(t,e){let i=0;const r=function(t,e){t=t||10;const i=new Array(t),r=new Array(t);let n,o=0,a=0;return e=void 0!==e?e:1e3,function(h){const l=Date.now(),s=r[a];n||(n=l),i[o]=h,r[o]=l;let d=a,c=0;for(;d!==o;)c+=i[d++],d%=t;if(o=(o+1)%t,o===a&&(a=(a+1)%t),l-n<e)return;const f=s&&l-s;return f?Math.round(1e3*c/f):void 0}}(50,250);return n=>{const o=n.loaded,a=n.lengthComputable?n.total:void 0,h=o-i,l=r(h);i=o;const s={loaded:o,total:a,progress:a?o/a:void 0,bytes:h,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:n};s[e?"download":"upload"]=!0,t(s)}}var Ge="undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,i){let r=t.data;const n=Ne.from(t.headers).normalize(),o=t.responseType;let a,h;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}ge.isFormData(r)&&(_e.isStandardBrowserEnv||_e.isStandardBrowserWebWorkerEnv?n.setContentType(!1):n.getContentType(/^\s*multipart\/form-data/)?ge.isString(h=n.getContentType())&&n.setContentType(h.replace(/^\s*(multipart\/form-data);+/,"$1")):n.setContentType("multipart/form-data"));let s=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",i=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";n.set("Authorization","Basic "+btoa(e+":"+i))}const d=Ie(t.baseURL,t.url);function c(){if(!s)return;const r=Ne.from("getAllResponseHeaders"in s&&s.getAllResponseHeaders());!function(t,e,i){const r=i.config.validateStatus;i.status&&r&&!r(i.status)?e(new we("Request failed with status code "+i.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i)):t(i)}((function(t){e(t),l()}),(function(t){i(t),l()}),{data:o&&"text"!==o&&"json"!==o?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:r,config:t,request:s}),s=null}if(s.open(t.method.toUpperCase(),ke(d,t.params,t.paramsSerializer),!0),s.timeout=t.timeout,"onloadend"in s?s.onloadend=c:s.onreadystatechange=function(){s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))&&setTimeout(c)},s.onabort=function(){s&&(i(new we("Request aborted",we.ECONNABORTED,t,s)),s=null)},s.onerror=function(){i(new we("Network Error",we.ERR_NETWORK,t,s)),s=null},s.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||Se;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),i(new we(e,r.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,t,s)),s=null},_e.isStandardBrowserEnv){const e=qe(d)&&t.xsrfCookieName&&Fe.read(t.xsrfCookieName);e&&n.set(t.xsrfHeaderName,e)}void 0===r&&n.setContentType(null),"setRequestHeader"in s&&ge.forEach(n.toJSON(),(function(t,e){s.setRequestHeader(e,t)})),ge.isUndefined(t.withCredentials)||(s.withCredentials=!!t.withCredentials),o&&"json"!==o&&(s.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&s.addEventListener("progress",We(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",We(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=e=>{s&&(i(!e||e.type?new Be(null,t,s):e),s.abort(),s=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const f=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(d);f&&-1===_e.protocols.indexOf(f)?i(new we("Unsupported protocol "+f+":",we.ERR_BAD_REQUEST,t)):s.send(r||null)}))};const Je={http:null,xhr:Ge};ge.forEach(Je,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));const Ke=t=>`- ${t}`,Ye=t=>ge.isFunction(t)||null===t||!1===t;var Qe=t=>{t=ge.isArray(t)?t:[t];const{length:e}=t;let i,r;const n={};for(let o=0;o<e;o++){let e;if(i=t[o],r=i,!Ye(i)&&(r=Je[(e=String(i)).toLowerCase()],void 0===r))throw new we(`Unknown adapter '${e}'`);if(r)break;n[e||"#"+o]=r}if(!r){const t=Object.entries(n).map((([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")));throw new we("There is no suitable adapter to dispatch the request "+(e?t.length>1?"since :\n"+t.map(Ke).join("\n"):" "+Ke(t[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Xe(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Be(null,t)}function ti(t){Xe(t),t.headers=Ne.from(t.headers),t.data=ze.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Qe(t.adapter||Oe.adapter)(t).then((function(e){return Xe(t),e.data=ze.call(t,t.transformResponse,e),e.headers=Ne.from(e.headers),e}),(function(e){return Ue(e)||(Xe(t),e&&e.response&&(e.response.data=ze.call(t,t.transformResponse,e.response),e.response.headers=Ne.from(e.response.headers))),Promise.reject(e)}))}const ei=t=>t instanceof Ne?t.toJSON():t;function ii(t,e){e=e||{};const i={};function r(t,e,i){return ge.isPlainObject(t)&&ge.isPlainObject(e)?ge.merge.call({caseless:i},t,e):ge.isPlainObject(e)?ge.merge({},e):ge.isArray(e)?e.slice():e}function n(t,e,i){return ge.isUndefined(e)?ge.isUndefined(t)?void 0:r(void 0,t,i):r(t,e,i)}function o(t,e){if(!ge.isUndefined(e))return r(void 0,e)}function a(t,e){return ge.isUndefined(e)?ge.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function h(i,n,o){return o in e?r(i,n):o in t?r(void 0,i):void 0}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:h,headers:(t,e)=>n(ei(t),ei(e),!0)};return ge.forEach(Object.keys(Object.assign({},t,e)),(function(r){const o=l[r]||n,a=o(t[r],e[r],r);ge.isUndefined(a)&&o!==h||(i[r]=a)})),i}const ri="1.6.0",ni={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{ni[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}}));const oi={};ni.transitional=function(t,e,i){function r(t,e){return"[Axios v1.6.0] Transitional option '"+t+"'"+e+(i?". "+i:"")}return(i,n,o)=>{if(!1===t)throw new we(r(n," has been removed"+(e?" in "+e:"")),we.ERR_DEPRECATED);return e&&!oi[n]&&(oi[n]=!0,console.warn(r(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(i,n,o)}};var ai={assertOptions:function(t,e,i){if("object"!=typeof t)throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let n=r.length;for(;n-- >0;){const o=r[n],a=e[o];if(a){const e=t[o],i=void 0===e||a(e,o,t);if(!0!==i)throw new we("option "+o+" must be "+i,we.ERR_BAD_OPTION_VALUE)}else if(!0!==i)throw new we("Unknown option "+o,we.ERR_BAD_OPTION)}},validators:ni};const hi=ai.validators;class li{constructor(t){this.defaults=t,this.interceptors={request:new $e,response:new $e}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=ii(this.defaults,e);const{transitional:i,paramsSerializer:r,headers:n}=e;void 0!==i&&ai.assertOptions(i,{silentJSONParsing:hi.transitional(hi.boolean),forcedJSONParsing:hi.transitional(hi.boolean),clarifyTimeoutError:hi.transitional(hi.boolean)},!1),null!=r&&(ge.isFunction(r)?e.paramsSerializer={serialize:r}:ai.assertOptions(r,{encode:hi.function,serialize:hi.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let o=n&&ge.merge(n.common,n[e.method]);n&&ge.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete n[t]})),e.headers=Ne.concat(o,n);const a=[];let h=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(h=h&&t.synchronous,a.unshift(t.fulfilled,t.rejected))}));const l=[];let s;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let d,c=0;if(!h){const t=[ti.bind(this),void 0];for(t.unshift.apply(t,a),t.push.apply(t,l),d=t.length,s=Promise.resolve(e);c<d;)s=s.then(t[c++],t[c++]);return s}d=a.length;let f=e;for(c=0;c<d;){const t=a[c++],e=a[c++];try{f=t(f)}catch(t){e.call(this,t);break}}try{s=ti.call(this,f)}catch(t){return Promise.reject(t)}for(c=0,d=l.length;c<d;)s=s.then(l[c++],l[c++]);return s}getUri(t){return ke(Ie((t=ii(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}ge.forEach(["delete","get","head","options"],(function(t){li.prototype[t]=function(e,i){return this.request(ii(i||{},{method:t,url:e,data:(i||{}).data}))}})),ge.forEach(["post","put","patch"],(function(t){function e(e){return function(i,r,n){return this.request(ii(n||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:i,data:r}))}}li.prototype[t]=e(),li.prototype[t+"Form"]=e(!0)}));var si=li;class di{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const i=this;this.promise.then((t=>{if(!i._listeners)return;let e=i._listeners.length;for(;e-- >0;)i._listeners[e](t);i._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{i.subscribe(t),e=t})).then(t);return r.cancel=function(){i.unsubscribe(e)},r},t((function(t,r,n){i.reason||(i.reason=new Be(t,r,n),e(i.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new di((function(e){t=e}));return{token:e,cancel:t}}}var ci=di;const fi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fi).forEach((([t,e])=>{fi[e]=t}));var pi=fi;const gi=function t(e){const i=new si(e),r=Et(si.prototype.request,i);return ge.extend(r,si.prototype,i,{allOwnKeys:!0}),ge.extend(r,i,null,{allOwnKeys:!0}),r.create=function(i){return t(ii(e,i))},r}(Oe);gi.Axios=si,gi.CanceledError=Be,gi.CancelToken=ci,gi.isCancel=Ue,gi.VERSION=ri,gi.toFormData=xe,gi.AxiosError=we,gi.Cancel=gi.CanceledError,gi.all=function(t){return Promise.all(t)},gi.spread=function(t){return function(e){return t.apply(null,e)}},gi.isAxiosError=function(t){return ge.isObject(t)&&!0===t.isAxiosError},gi.mergeConfig=ii,gi.AxiosHeaders=Ne,gi.formToJSON=t=>Le(ge.isHTMLForm(t)?new FormData(t):t),gi.getAdapter=Qe,gi.HttpStatusCode=pi,gi.default=gi;var wi=gi,ui=function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function h(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,h)}l((r=r.apply(t,e||[])).next())}))};const Hi=t=>({Authorization:t?`Bearer ${t}`:void 0,"Content-Type":"application/json","X-Client-Platform":"web","X-Client-Build":"1"});function Vi(t){return ui(this,void 0,void 0,(function*(){try{return(yield t()).data}catch(t){const e=t,i=e.message||e.toString();throw new Error(i)}}))}function mi(t,e,i,r={},n){return ui(this,void 0,void 0,(function*(){const o=Object.keys(r).length>0?`?${new URLSearchParams(r).toString()}`:"",a=`${t}/${i}${o}`,h=Hi(e);return Vi((()=>wi.get(a,Object.assign(Object.assign({},n),{headers:Object.assign(Object.assign({},h),null==n?void 0:n.headers)}))))}))}const yi=t=>e=>"function"==typeof e?((t,e)=>(customElements.get(t)||customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.get(t)||customElements.define(t,e)}}})(t,e),vi="authentication";var xi=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},bi=function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function h(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,h)}l((r=r.apply(t,e||[])).next())}))};let Mi=class extends kt{constructor(){super(...arguments),this.authToken="",this.host="",this.authentication={host:"",authToken:"",reqStatus:"idle",user:{},subscription:{},products:[]}}updated(t){return bi(this,void 0,void 0,(function*(){if(this.authToken&&this.host){let t,e,i;this.authentication=Object.assign(Object.assign({},this.authentication),{host:this.host,authToken:this.authToken,reqStatus:"loading"});try{t=yield mi(this.host,this.authToken,"api/2.0/users")}catch(t){return console.error(t),void(this.authentication=Object.assign(Object.assign({},this.authentication),{reqStatus:"failed"}))}try{e=yield mi(this.host,this.authToken,`api/subscriptions/2.1/user-subscriptions/${t.user_id}`)}catch(t){return console.error(t),void(this.authentication=Object.assign(Object.assign({},this.authentication),{reqStatus:"failed"}))}try{i=yield mi(this.host,this.authToken,"api/subscriptions/2.0/checkout/products")}catch(t){return console.error(t),void(this.authentication=Object.assign(Object.assign({},this.authentication),{reqStatus:"failed"}))}this.authentication=Object.assign(Object.assign({},this.authentication),{reqStatus:"succeeded",user:t,subscription:e.user_subscription,products:i})}}))}render(){return ht`<slot></slot>`}};xi([Lt({type:String})],Mi.prototype,"authToken",void 0),xi([Lt({type:String})],Mi.prototype,"host",void 0),xi([function({context:t}){return(e,i)=>{const r=new WeakMap;if("object"==typeof i)return i.addInitializer((function(){r.set(this,new x(this,{context:t}))})),{get(){return e.get.call(this)},set(t){return r.get(this)?.setValue(t),e.set.call(this,t)},init(t){return r.get(this)?.setValue(t),t}};{e.constructor.addInitializer((e=>{r.set(e,new x(e,{context:t}))}));const n=Object.getOwnPropertyDescriptor(e,i);let o;if(void 0===n){const t=new WeakMap;o={get:function(){return t.get(this)},set:function(e){r.get(this).setValue(e),t.set(this,e)}}}else{const t=n?.set;o={...n,set:function(e){r.get(this)?.setValue(e),t?.call(this,e)}}}return void Object.defineProperty(e,i,o)}}}({context:vi})],Mi.prototype,"authentication",void 0),Mi=xi([yi("grain-authentication")],Mi);
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
const Zi=1,Ci=2,ki=t=>(...e)=>({_$litDirective$:t,values:e});class $i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
	 * @license
	 * Copyright 2018 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */const Si=ki(class extends $i{constructor(t){var e;if(super(t),t.type!==Zi||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const n=t.element.classList;this.it.forEach((t=>{t in e||(n.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(r=this.nt)||void 0===r?void 0:r.has(t))||(i?(n.add(t),this.it.add(t)):(n.remove(t),this.it.delete(t)))}return lt}}),_i=t=>null!=t?t:st,Li={primary:{backgroundColor:"var(--grain-color-button-primary-fill)",color:"var(--grain-color-button-primary-text)",backgroundColorDisabled:"var(--grain-color-button-primary-disabled-bg)",colorDisabled:"var(--grain-color-button-primary-disabled)",backgroundColorHover:"var(--grain-global-color-button-link-primary-hover)",borderColor:"var(--grain-color-button-primary-border)",activeColor:"var(--grain-color-button-primary-active)",hoverColor:"var(--grain-color-button-primary-hover)"},secondary:{backgroundColor:"var(--grain-color-button-primary-fill)",color:"var(--grain-color-button-primary-text)",backgroundColorDisabled:"var(--grain-color-button-primary-disabled-bg)",colorDisabled:"var(--grain-color-button-primary-disabled)",backgroundColorHover:"var(--grain-color-button-primary-hover)",borderColor:"var(--grain-color-button-primary-border)",activeColor:"var(--grain-color-button-primary-active)",hoverColor:"var(--grain-color-button-primary-hover)"}},Ai=S`
  /* shared */
  button,a {
    display: block;
    width: max-content;
    border: none;
    border-radius: 100px;
    text-transform: uppercase;
    text-align: left;
    box-shadow: none;
    /* 
      @TODO:
      Styling specificity of the 'button' element was being overwritten
      by the user agent. As a short-term fix, the font-family was declared below,
      but it should be declared in the 'base-styles'
    */
    font-family: 'VSCO Gothic', var(--grain-global-fontFamily-systemFont);

    &:hover {
      cursor: pointer;
    }
  }

  /* as anchor tag */
  a {
    text-decoration: none;
  }

  /* full width */
  button
   {
    &.is-full-width {
      width: 100%;
    }
  }

  a
   {
    &.is-full-width {
      width: auto;
    }
  }

  /* small */
  .button--sm {
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
  }

  /* large */
  .button--lg {
    padding: 11px 16px;
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
  }

  /* primary */
  .button--primary {
    background-color: var(--grain-global-color-button-primary-fill);
    color: var(--grain-global-color-button-primary-text);
    box-shadow: 0 0 0 1px var(--grain-global-color-border-black) inset;

    &:hover {
      background-color: var(--grain-global-color-button-link-primary-active);
    }

    &:disabled {
      background-color: var(--grain-color-background-2);
    }
  }

  /* secondary */
  .button--secondary {
    background-color: var(--grain-global-color-black-100);
    color: var(--grain-global-color-white-100);
    box-shadow: 0 0 0 1px var(--grain-global-color-gray-700) inset;

    &:hover {
      background-color: var(--grain-global-color-gray-900);
    }

    &:disabled {
      color: var(--grain-color-background-2);
    }
  }
`,Oi=(t,e)=>{var i,r;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(r=(i=t)._$AO)||void 0===r||r.call(i,e,!1),Oi(t,e);return!0},Ei=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},Pi=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Ti(e)}};
/**
	 * @license
	 * Copyright 2018 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */function Ri(t){void 0!==this._$AN?(Ei(this),this._$AM=t,Pi(this)):this._$AM=t}function ji(t,e=!1,i=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(r))for(let t=i;t<r.length;t++)Oi(r[t],!1),Ei(r[t]);else null!=r&&(Oi(r,!1),Ei(r));else Oi(this,t)}const Ti=t=>{var e,i,r,n;t.type==Ci&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=ji),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=Ri))};class Di extends $i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Pi(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),e&&(Oi(this,t),Ei(this))}setValue(t){if((t=>void 0===t.strings)
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const Ni=ki(class extends Di{constructor(){super(...arguments),this.prevData={}}render(t){return st}update(t,[e]){var i;this.element!==t.element&&(this.element=t.element),this.host=(null===(i=t.options)||void 0===i?void 0:i.host)||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:i}=this;for(const r in t){const n=t[r];n!==e[r]&&(i[r]=n)}}groom(t){const{prevData:e,element:i}=this;if(e)for(const r in e)t&&(r in t||i[r]!==e[r])||(i[r]=void 0)}});var zi=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Ui=class extends kt{constructor(){var t;
/**
	 * @license
	 * Copyright 2020 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */super(...arguments),this.variant="primary",this.size="sm",this.as="button",this.hover=!0,this.disabled=!1,this.fullWidth=!1,this.autoFocus=!1,this.href="",this.rel="",this.id="",this.tabIndex=-1,this.styles=(t=this.variant,Li[t])}get handleRel(){if("_blank"===this.target)return"noreferrer noopener"}updated(t){var e,i;this.autoFocus&&(null===(i=null===(e=null==this?void 0:this.renderRoot)||void 0===e?void 0:e.querySelector("button"))||void 0===i||i.focus())}getPropsToSpread(){return{href:this.href,target:this.target,rel:this.handleRel}}render(){const t={"is-full-width":this.fullWidth},e={"button--primary":"primary"===this.variant,"button--secondary":"secondary"===this.variant},i={"button--sm":"sm"===this.size,"button--md":"md"===this.size,"button--lg":"lg"===this.size};return"button"===this.as?ht`
        <button
          part="button"
          tabindex=${this.tabIndex>=0?this.tabIndex:st}
          ?autofocus=${this.autoFocus}
          type=${_i(this.type)}
          class=${Si(Object.assign(Object.assign(Object.assign({},t),e),i))}
          ?disabled=${this.disabled}
          id=${_i(this.id)}
        >
          <slot></slot>
        </button>
      `:"a"===this.as?ht`
        <a
          part="a"
          tabindex=${this.tabIndex>=0?this.tabIndex:st}
          ?autofocus=${this.autoFocus}
          type=${_i(this.type)}
          class=${Si(Object.assign(Object.assign(Object.assign({},t),e),i))}
          id=${_i(this.id)}
          ?disabled=${this.disabled}
          ${Ni(this.getPropsToSpread())}
        >
          <slot></slot>
        </a>
      `:void 0}};Ui.styles=Ai,zi([Lt({type:String})],Ui.prototype,"variant",void 0),zi([Lt({type:String})],Ui.prototype,"size",void 0),zi([Lt({type:String})],Ui.prototype,"as",void 0),zi([Lt({type:String})],Ui.prototype,"type",void 0),zi([Lt({type:Boolean})],Ui.prototype,"hover",void 0),zi([Lt({type:Boolean})],Ui.prototype,"disabled",void 0),zi([Lt({type:Boolean})],Ui.prototype,"fullWidth",void 0),zi([Lt({type:Boolean})],Ui.prototype,"autoFocus",void 0),zi([Lt({type:String})],Ui.prototype,"href",void 0),zi([Lt({type:String})],Ui.prototype,"target",void 0),zi([Lt({type:String})],Ui.prototype,"rel",void 0),zi([Lt({type:String})],Ui.prototype,"id",void 0),zi([Lt({type:Number})],Ui.prototype,"tabIndex",void 0),zi([Lt()],Ui.prototype,"styles",void 0),Ui=zi([yi("grain-button")],Ui);const Bi=S`
  .label {
    display: block;
    cursor: pointer;
    position: relative;
    padding-left: 4px;
    font-size: 13px;
  }

  .checkbox-container {
    color: var(--grain-global-color-typography-text-secondary);
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 16px;

    svg {
      pointer-events: none;
    }
  }

  .checked {
    color: var(--grain-global-color-typography-text-primary);
  }
  .checkbox {
    opacity: 0;
    position: absolute;
    top: 1px;
    left: 0px;
    cursor: pointer;
    width: 16px;
    height: 18px;
  }
`;var Fi=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Ii=class extends kt{constructor(){super(...arguments),this.label="",this.id="",this.checked=!1,this.onChange=()=>{}}render(){const t={"checkbox-container":!0,checked:this.checked};return ht`
      <div class=${Si(t)}>
        <grain-icon
          name=${this.checked?"selectedCheckbox":"unselectedCheckbox"}
          width="16px"
          height="17px"
        ></grain-icon>
        <input
          type="checkbox"
          id=${this.id}
          class="checkbox"
          checked=${this.checked}
          @change=${this.onChange}
        />
        <label class="label" for=${this.id}>${this.label}</label>
      </div>
    `}};Ii.styles=Bi,Fi([Lt({type:String})],Ii.prototype,"label",void 0),Fi([Lt({type:String})],Ii.prototype,"id",void 0),Fi([Lt({type:Boolean})],Ii.prototype,"checked",void 0),Fi([Lt({type:Function})],Ii.prototype,"onChange",void 0),Ii=Fi([yi("grain-checkbox")],Ii);var qi=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Wi=class extends kt{constructor(){super(...arguments),this.isLoggedIn=!1,this.isPro=!1,this.isPlus=!1,this.isStarter=!1,this.username="",this.host="vsco.co"}render(){return ht`<slot></slot>`}};qi([Lt({type:Boolean})],Wi.prototype,"isLoggedIn",void 0),qi([Lt({type:Boolean})],Wi.prototype,"isPro",void 0),qi([Lt({type:Boolean})],Wi.prototype,"isPlus",void 0),qi([Lt({type:Boolean})],Wi.prototype,"isStarter",void 0),qi([Lt({type:String})],Wi.prototype,"username",void 0),qi([Lt({type:String})],Wi.prototype,"host",void 0),Wi=qi([yi("grain-entitlement")],Wi);const Gi=(t,e)=>{let i=t;const r=t.match(/{{([a-zA-Z]+)}}/gim);if(!r)return i;for(const t of r){const r=t.replace("{{","").replace("}}","");r in e&&(i=i.replace(t,e[r]))}return i},Ji=S`
  :host {
    /*
      @TODO:
      Add these tokens to component-based tokens
      in Figma plug-in
    */
    --footer-surface: var(--grain-global-color-black-100);
    --footer-logo-fill: var(--grain-global-color-white-100);
    --footer-headline-color: var(--grain-global-color-white-100);
    --footer-index-link-color: var(--grain-global-color-white-100);
    --footer-copyright-color: var(--grain-global-color-gray-550);
    --footer-terms-link-color: var(--grain-global-color-gray-550);
    --footer-divider-color: var(--grain-global-color-gray-850);
  }

  .grain-footer {
    container-type: inline-size;
  }

  .footer-wrapper {
    background-color: var(--footer-surface);
    padding: 80px 20px 40px 20px;
  }

  ul {
    /* browser reset */
    padding-inline: 0;
    margin-block: 0;
    list-style: none;
  }

  .footer-logo {
    display: inline-block;
    margin-block-end: 40px;
  }

  .footer-headline {
    margin-block-end: 60px;
  }

  .footer-headline-text {
    margin-block-start: 0;
    margin-block-end: 0;
    color: var(--footer-headline-color);
    font-weight: 500;
    font-size: 30px;
    text-align: justify;
    text-transform: uppercase;
    line-height: 28px;
  }

  .footer-engagement-item {
    &:not(:last-child) {
      margin-block-end: 24px;
    }
  }

  .footer-identity {
    margin-block-end: 60px;
  }

  .footer-index {
    margin-block-end: 20px;
  }

  .footer-index-headline {
    margin-block-start: 0;
    margin-block-end: 24px;
    color: var(--footer-headline-color);
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    /* @TODO: Setup letter-spacing values in tokens */
    letter-spacing: .1em; /* 10% */
  }

  .footer-index-headline {
    & a {
      color: var(--footer-headline-color);
      text-decoration: none;
    }
  }

  .footer-index-list-item {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  .footer-index-list-item {
    & a {
      color: var(--footer-index-link-color);
      text-decoration: none;
    }

    & a:hover {
      text-decoration: underline;
    }
  }

  .footer-index-list-item {
    &:not(:last-child) {
      margin-block-end: 16px;
    }
  }

  .footer-terms {
    margin-block-end: 40px;
  }

  .footer-terms-list-item {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }

  .footer-terms-list-item {
    & a {
      color: var(--footer-terms-link-color);
      text-decoration: none;
    }

    & a:hover {
      text-decoration: underline;
    }
  }

  .footer-terms-list-item {
    &:not(:last-child) {
      margin-block-end: 24px;
    }
  }

  .footer-index-section {
    &:not(:last-child) {
      margin-block-end: 40px;
    }
  }

  .footer-divider {
    display: block;
    margin-block-start: 60px;
    margin-block-end: 60px;
    height: 1px;
    background-color: var(--footer-divider-color);
  }

  .footer-copyright-text {
    margin-block: 0;
    color: var(--footer-copyright-color);
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }

  .one-trust-icon {
    display: inline-block;
    margin-inline-end: 8px;
  }

  .one-trust-anchor {
    &.is-hidden {
      visibility: hidden;
    }
  }

  @container (width >= 580px) {
    .footer-masthead {
      display: grid;
      /* a little less than 2fr to avoid button widow*/
      grid-template-columns: 1.7fr 1fr;
      gap: 60px;
    }

    .footer-headline {
      margin-block-end: 0;
    }

    .footer-headline-text {
      font-size: 50px;
      line-height: 46px;
    }

    .footer-engagement-item {
      max-width: 226px;
      margin-inline-start: auto;
    }

    .footer-index {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 115px));
      grid-gap: 40px;
    }

    .footer-index-section {
      &:not(:last-child) {
        margin-block-end: 0;
      }
    }

    .footer-terms-list {
      display: flex;
    }

    .footer-terms-list-item {
      &:not(:last-child) {
        margin-inline-end: 24px;
        margin-block-end: 0;
      }
    }
  }

  @container (width >= 921px) {
    .footer-masthead {
      display: initial;
    }

    .footer-primary {
      /* use padding to avoid margin collapse */
      padding-block-end: 20px;
    }

    .footer-primary-wrapper {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 80px;
    }

    .footer-identity {
      margin-block-end: 0;
    }

    .footer-engagement-item {
      margin-inline-start: initial;
    }

    .footer-index {
      margin-block-end: 0;
      margin-inline-start: auto;
      gap: 80px;
    }

    .footer-headline-text {
      margin-block-end: 36px;
    }

    .footer-terms {
      margin-block-end: 0;
    }

    .footer-legal {
      display: flex;
    }

    .footer-copyright {
      margin-inline-start: auto;
    }
  }

  @container (width >= 1100px) {
    .footer-wrapper {
      padding: 80px 40px 32px 40px;
    }

    .footer-primary-wrapper {
      grid-template-columns: minmax(0, 520px) 1fr;
    }
  }
`;const Ki={logo:[{link:"https://www.vsco.co",icon:"vscoLogo"}],headline:[{text:"Here for your creative journey"}],cta:[{text:"See plans",link:"https://vsco.co/subscribe/start",variant:"secondary",id:"footer-see-plans"},{text:"Download the app",link:"https://vs.co/download",variant:"secondary",id:"footer-download-app"}],index:[{headline:"Features",link:"https://www.vsco.co/features",items:[{text:"Photo Editor",link:"https://www.vsco.co/studio"},{text:"Photo Filters",link:"https://www.vsco.co/features/photo-filters"},{text:"Video Editor",link:"https://www.vsco.co/features/video-editor-app"},{text:"Collage Maker",link:"https://www.vsco.co/features/photo-collage-app"},{text:"Camera",link:"https://www.vsco.co/features/camera-app"},{text:"What's New",link:"https://www.vsco.co/stories"}]},{headline:"Community",items:[{text:"Guidelines",link:"https://www.vsco.co/about/community-guidelines"},{text:"Safety",link:"https://www.vsco.co/safety"},{text:"Support",link:"https://support.vsco.co/hc/en-us"},{text:"Forum",link:"https://support.vsco.co/hc/en-us/community/topics"}]},{headline:"Company",items:[{text:"About Us",link:"https://www.vsco.co/about"},{text:"Careers",link:"https://www.vsco.co/about/careers"},{text:"Media Inquiries",link:"mailto:press@vsco.co"}]}],legal:[{text:"Terms of Use",link:"https://www.vsco.co/about/terms-of-use"},{text:"Privacy Policy",link:"https://www.vsco.co/about/privacy-policy"},{text:"Cookie Notice",link:"https://www.vsco.co/about/cookie-notice"}],cookies:[{text:"Cookie Settings",link:"#",USResidentText:"Your Privacy Choices"}],copyright:[{text:`Copyright ${(new Date).getFullYear().toString()} VSCO. All rights reserved`}]};
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
class Yi extends $i{constructor(t){if(super(t),this.et=st,t.type!==Ci)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===st||null==t)return this.ft=void 0,this.et=t;if(t===lt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Yi.directiveName="unsafeHTML",Yi.resultType=1;
/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
class Qi extends Yi{}Qi.directiveName="unsafeSVG",Qi.resultType=2;const Xi=ki(Qi),tr="important",er=" !"+tr,ir=ki(class extends $i{constructor(t){var e;if(super(t),t.type!==Zi||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const r=e[t];if(null!=r){this.ht.add(t);const e="string"==typeof r&&r.endsWith(er);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?tr:""):i[t]=r}}return lt}}),rr={addPlusCircle:()=>'<svg\n  viewBox="0 0 24 24"\n  width="24"\n  height="24"\n  xmlns="http://www.w3.org/2000/svg"\n  fill="currentColor">\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="m13,6h-2v5h-5v2h5v5h2v-5h5v-2h-5v-5Z"\n  />\n  <path d="m12,24C5.38,24,0,18.62,0,12S5.38,0,12,0s12,5.38,12,12-5.38,12-12,12Zm0-22C6.49,2,2,6.49,2,12s4.49,10,10,10,10-4.49,10-10S17.51,2,12,2Z" />\n</svg>',addPlusCircleInvert:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <mask id="path-1-inside-1_2244_419">\n    <path\n      fill-rule="evenodd"\n      clip-rule="evenodd"\n      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM13 11H18V13H13V18H11V13H6V11H11V6H13V11Z"\n    />\n  </mask>\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM13 11H18V13H13V18H11V13H6V11H11V6H13V11Z"\n    fill="currentColor"\n  />\n  <path\n    d="M18 11H20V9H18V11ZM13 11H11V13H13V11ZM18 13V15H20V13H18ZM13 13V11H11V13H13ZM13 18V20H15V18H13ZM11 18H9V20H11V18ZM11 13H13V11H11V13ZM6 13H4V15H6V13ZM6 11V9H4V11H6ZM11 11V13H13V11H11ZM11 6V4H9V6H11ZM13 6H15V4H13V6ZM12 26C19.732 26 26 19.732 26 12H22C22 17.5228 17.5228 22 12 22V26ZM-2 12C-2 19.732 4.26801 26 12 26V22C6.47715 22 2 17.5228 2 12H-2ZM12 -2C4.26801 -2 -2 4.26801 -2 12H2C2 6.47715 6.47715 2 12 2V-2ZM26 12C26 4.26801 19.732 -2 12 -2V2C17.5228 2 22 6.47715 22 12H26ZM18 9H13V13H18V9ZM20 13V11H16V13H20ZM13 15H18V11H13V15ZM11 13V18H15V13H11ZM13 16H11V20H13V16ZM13 18V13H9V18H13ZM6 15H11V11H6V15ZM4 11V13H8V11H4ZM11 9H6V13H11V9ZM13 11V6H9V11H13ZM11 8H13V4H11V8ZM11 6V11H15V6H11Z"\n    fill="currentColor"\n    mask="url(#path-1-inside-1_2244_419)"\n  />\n</svg>',adjust:()=>'<svg\nxmlns="http://www.w3.org/2000/svg"\nviewBox="0 0 24 24"\nwidth="24"\nheight="24"\nfill="currentColor">\n<polygon points="7,1 5,1 5,15 7,13 " />\n<polygon points="9,4 16,4 14,6 9,6 " />\n<rect x="1" y="4" width="2" height="2" />\n<polygon points="19,9 19,15 17,15 17,11 " />\n<rect x="17" y="21" width="2" height="2" />\n<polygon points="23,19 23,17 11,17 9,19 " />\n<rect\n  x="14"\n  y="7.5"\n  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -1.5084 13.4293)"\n  width="2.9"\n  height="2"\n/>\n<rect\n  x="10.5"\n  y="11.1"\n  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.0439 11.965)"\n  width="2.9"\n  height="2"\n/>\n<rect\n  x="17.5"\n  y="4"\n  transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.0271 14.894)"\n  width="2.9"\n  height="2"\n/>\n<rect\n  x="6.9"\n  y="14.6"\n  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.5795 10.5007)"\n  width="2.9"\n  height="2"\n/>\n<rect\n  x="3.4"\n  y="18.1"\n  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.115 9.036)"\n  width="2.9"\n  height="2"\n/>\n</svg>',appleUpgradeQR:()=>'<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g clip-path="url(#clip0_1_2)">\n  <path d="M300 0H0V300H300V0Z" fill="black"/>\n  <mask id="mask0_1_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="15" width="270" height="270">\n  <path d="M21 69H15V75H21V69Z" fill="white"/>\n  <path d="M21 75H15V81H21V75Z" fill="white"/>\n  <path d="M21 81H15V87H21V81Z" fill="white"/>\n  <path d="M21 87H15V93H21V87Z" fill="white"/>\n  <path d="M21 117H15V123H21V117Z" fill="white"/>\n  <path d="M21 147H15V153H21V147Z" fill="white"/>\n  <path d="M21 159H15V165H21V159Z" fill="white"/>\n  <path d="M21 171H15V177H21V171Z" fill="white"/>\n  <path d="M21 177H15V183H21V177Z" fill="white"/>\n  <path d="M21 195H15V201H21V195Z" fill="white"/>\n  <path d="M21 207H15V213H21V207Z" fill="white"/>\n  <path d="M21 213H15V219H21V213Z" fill="white"/>\n  <path d="M21 231H15V237H21V231Z" fill="white"/>\n  <path d="M27 63H21V69H27V63Z" fill="white"/>\n  <path d="M27 75H21V81H27V75Z" fill="white"/>\n  <path d="M27 81H21V87H27V81Z" fill="white"/>\n  <path d="M27 87H21V93H27V87Z" fill="white"/>\n  <path d="M27 93H21V99H27V93Z" fill="white"/>\n  <path d="M27 99H21V105H27V99Z" fill="white"/>\n  <path d="M27 117H21V123H27V117Z" fill="white"/>\n  <path d="M27 129H21V135H27V129Z" fill="white"/>\n  <path d="M27 135H21V141H27V135Z" fill="white"/>\n  <path d="M27 141H21V147H27V141Z" fill="white"/>\n  <path d="M27 147H21V153H27V147Z" fill="white"/>\n  <path d="M27 159H21V165H27V159Z" fill="white"/>\n  <path d="M27 177H21V183H27V177Z" fill="white"/>\n  <path d="M27 183H21V189H27V183Z" fill="white"/>\n  <path d="M27 189H21V195H27V189Z" fill="white"/>\n  <path d="M27 201H21V207H27V201Z" fill="white"/>\n  <path d="M27 207H21V213H27V207Z" fill="white"/>\n  <path d="M27 213H21V219H27V213Z" fill="white"/>\n  <path d="M27 225H21V231H27V225Z" fill="white"/>\n  <path d="M33 117H27V123H33V117Z" fill="white"/>\n  <path d="M33 129H27V135H33V129Z" fill="white"/>\n  <path d="M33 135H27V141H33V135Z" fill="white"/>\n  <path d="M33 147H27V153H33V147Z" fill="white"/>\n  <path d="M33 171H27V177H33V171Z" fill="white"/>\n  <path d="M33 177H27V183H33V177Z" fill="white"/>\n  <path d="M33 189H27V195H33V189Z" fill="white"/>\n  <path d="M33 207H27V213H33V207Z" fill="white"/>\n  <path d="M33 213H27V219H33V213Z" fill="white"/>\n  <path d="M33 225H27V231H33V225Z" fill="white"/>\n  <path d="M39 63H33V69H39V63Z" fill="white"/>\n  <path d="M39 69H33V75H39V69Z" fill="white"/>\n  <path d="M39 81H33V87H39V81Z" fill="white"/>\n  <path d="M39 87H33V93H39V87Z" fill="white"/>\n  <path d="M39 99H33V105H39V99Z" fill="white"/>\n  <path d="M39 117H33V123H39V117Z" fill="white"/>\n  <path d="M39 123H33V129H39V123Z" fill="white"/>\n  <path d="M39 129H33V135H39V129Z" fill="white"/>\n  <path d="M39 135H33V141H39V135Z" fill="white"/>\n  <path d="M39 147H33V153H39V147Z" fill="white"/>\n  <path d="M39 177H33V183H39V177Z" fill="white"/>\n  <path d="M39 183H33V189H39V183Z" fill="white"/>\n  <path d="M39 189H33V195H39V189Z" fill="white"/>\n  <path d="M39 207H33V213H39V207Z" fill="white"/>\n  <path d="M39 213H33V219H39V213Z" fill="white"/>\n  <path d="M39 225H33V231H39V225Z" fill="white"/>\n  <path d="M39 231H33V237H39V231Z" fill="white"/>\n  <path d="M45 63H39V69H45V63Z" fill="white"/>\n  <path d="M45 69H39V75H45V69Z" fill="white"/>\n  <path d="M45 75H39V81H45V75Z" fill="white"/>\n  <path d="M45 93H39V99H45V93Z" fill="white"/>\n  <path d="M45 99H39V105H45V99Z" fill="white"/>\n  <path d="M45 111H39V117H45V111Z" fill="white"/>\n  <path d="M45 117H39V123H45V117Z" fill="white"/>\n  <path d="M45 123H39V129H45V123Z" fill="white"/>\n  <path d="M45 129H39V135H45V129Z" fill="white"/>\n  <path d="M45 135H39V141H45V135Z" fill="white"/>\n  <path d="M45 141H39V147H45V141Z" fill="white"/>\n  <path d="M45 147H39V153H45V147Z" fill="white"/>\n  <path d="M45 153H39V159H45V153Z" fill="white"/>\n  <path d="M45 159H39V165H45V159Z" fill="white"/>\n  <path d="M45 165H39V171H45V165Z" fill="white"/>\n  <path d="M45 195H39V201H45V195Z" fill="white"/>\n  <path d="M45 201H39V207H45V201Z" fill="white"/>\n  <path d="M45 219H39V225H45V219Z" fill="white"/>\n  <path d="M45 225H39V231H45V225Z" fill="white"/>\n  <path d="M45 231H39V237H45V231Z" fill="white"/>\n  <path d="M51 87H45V93H51V87Z" fill="white"/>\n  <path d="M51 111H45V117H51V111Z" fill="white"/>\n  <path d="M51 123H45V129H51V123Z" fill="white"/>\n  <path d="M51 135H45V141H51V135Z" fill="white"/>\n  <path d="M51 159H45V165H51V159Z" fill="white"/>\n  <path d="M51 201H45V207H51V201Z" fill="white"/>\n  <path d="M57 63H51V69H57V63Z" fill="white"/>\n  <path d="M57 75H51V81H57V75Z" fill="white"/>\n  <path d="M57 87H51V93H57V87Z" fill="white"/>\n  <path d="M57 99H51V105H57V99Z" fill="white"/>\n  <path d="M57 111H51V117H57V111Z" fill="white"/>\n  <path d="M57 123H51V129H57V123Z" fill="white"/>\n  <path d="M57 135H51V141H57V135Z" fill="white"/>\n  <path d="M57 147H51V153H57V147Z" fill="white"/>\n  <path d="M57 159H51V165H57V159Z" fill="white"/>\n  <path d="M57 171H51V177H57V171Z" fill="white"/>\n  <path d="M57 183H51V189H57V183Z" fill="white"/>\n  <path d="M57 195H51V201H57V195Z" fill="white"/>\n  <path d="M57 207H51V213H57V207Z" fill="white"/>\n  <path d="M57 219H51V225H57V219Z" fill="white"/>\n  <path d="M57 231H51V237H57V231Z" fill="white"/>\n  <path d="M63 63H57V69H63V63Z" fill="white"/>\n  <path d="M63 75H57V81H63V75Z" fill="white"/>\n  <path d="M63 81H57V87H63V81Z" fill="white"/>\n  <path d="M63 87H57V93H63V87Z" fill="white"/>\n  <path d="M63 93H57V99H63V93Z" fill="white"/>\n  <path d="M63 99H57V105H63V99Z" fill="white"/>\n  <path d="M63 105H57V111H63V105Z" fill="white"/>\n  <path d="M63 135H57V141H63V135Z" fill="white"/>\n  <path d="M63 159H57V165H63V159Z" fill="white"/>\n  <path d="M63 183H57V189H63V183Z" fill="white"/>\n  <path d="M63 201H57V207H63V201Z" fill="white"/>\n  <path d="M63 219H57V225H63V219Z" fill="white"/>\n  <path d="M63 225H57V231H63V225Z" fill="white"/>\n  <path d="M63 231H57V237H63V231Z" fill="white"/>\n  <path d="M69 21H63V27H69V21Z" fill="white"/>\n  <path d="M69 33H63V39H69V33Z" fill="white"/>\n  <path d="M69 39H63V45H69V39Z" fill="white"/>\n  <path d="M69 45H63V51H69V45Z" fill="white"/>\n  <path d="M69 51H63V57H69V51Z" fill="white"/>\n  <path d="M69 63H63V69H69V63Z" fill="white"/>\n  <path d="M69 69H63V75H69V69Z" fill="white"/>\n  <path d="M69 81H63V87H69V81Z" fill="white"/>\n  <path d="M69 87H63V93H69V87Z" fill="white"/>\n  <path d="M69 105H63V111H69V105Z" fill="white"/>\n  <path d="M69 111H63V117H69V111Z" fill="white"/>\n  <path d="M69 129H63V135H69V129Z" fill="white"/>\n  <path d="M69 135H63V141H69V135Z" fill="white"/>\n  <path d="M69 141H63V147H69V141Z" fill="white"/>\n  <path d="M69 147H63V153H69V147Z" fill="white"/>\n  <path d="M69 153H63V159H69V153Z" fill="white"/>\n  <path d="M69 159H63V165H69V159Z" fill="white"/>\n  <path d="M69 177H63V183H69V177Z" fill="white"/>\n  <path d="M69 183H63V189H69V183Z" fill="white"/>\n  <path d="M69 195H63V201H69V195Z" fill="white"/>\n  <path d="M69 213H63V219H69V213Z" fill="white"/>\n  <path d="M69 219H63V225H69V219Z" fill="white"/>\n  <path d="M69 237H63V243H69V237Z" fill="white"/>\n  <path d="M69 243H63V249H69V243Z" fill="white"/>\n  <path d="M69 255H63V261H69V255Z" fill="white"/>\n  <path d="M69 261H63V267H69V261Z" fill="white"/>\n  <path d="M69 273H63V279H69V273Z" fill="white"/>\n  <path d="M75 15H69V21H75V15Z" fill="white"/>\n  <path d="M75 27H69V33H75V27Z" fill="white"/>\n  <path d="M75 57H69V63H75V57Z" fill="white"/>\n  <path d="M75 63H69V69H75V63Z" fill="white"/>\n  <path d="M75 87H69V93H75V87Z" fill="white"/>\n  <path d="M75 99H69V105H75V99Z" fill="white"/>\n  <path d="M75 111H69V117H75V111Z" fill="white"/>\n  <path d="M75 153H69V159H75V153Z" fill="white"/>\n  <path d="M75 159H69V165H75V159Z" fill="white"/>\n  <path d="M75 165H69V171H75V165Z" fill="white"/>\n  <path d="M75 171H69V177H75V171Z" fill="white"/>\n  <path d="M75 177H69V183H75V177Z" fill="white"/>\n  <path d="M75 189H69V195H75V189Z" fill="white"/>\n  <path d="M75 195H69V201H75V195Z" fill="white"/>\n  <path d="M75 201H69V207H75V201Z" fill="white"/>\n  <path d="M75 219H69V225H75V219Z" fill="white"/>\n  <path d="M75 225H69V231H75V225Z" fill="white"/>\n  <path d="M75 231H69V237H75V231Z" fill="white"/>\n  <path d="M75 237H69V243H75V237Z" fill="white"/>\n  <path d="M75 243H69V249H75V243Z" fill="white"/>\n  <path d="M75 255H69V261H75V255Z" fill="white"/>\n  <path d="M75 273H69V279H75V273Z" fill="white"/>\n  <path d="M81 21H75V27H81V21Z" fill="white"/>\n  <path d="M81 27H75V33H81V27Z" fill="white"/>\n  <path d="M81 33H75V39H81V33Z" fill="white"/>\n  <path d="M81 45H75V51H81V45Z" fill="white"/>\n  <path d="M81 51H75V57H81V51Z" fill="white"/>\n  <path d="M81 57H75V63H81V57Z" fill="white"/>\n  <path d="M81 63H75V69H81V63Z" fill="white"/>\n  <path d="M81 69H75V75H81V69Z" fill="white"/>\n  <path d="M81 81H75V87H81V81Z" fill="white"/>\n  <path d="M81 105H75V111H81V105Z" fill="white"/>\n  <path d="M81 111H75V117H81V111Z" fill="white"/>\n  <path d="M81 117H75V123H81V117Z" fill="white"/>\n  <path d="M81 123H75V129H81V123Z" fill="white"/>\n  <path d="M81 129H75V135H81V129Z" fill="white"/>\n  <path d="M81 135H75V141H81V135Z" fill="white"/>\n  <path d="M81 159H75V165H81V159Z" fill="white"/>\n  <path d="M81 165H75V171H81V165Z" fill="white"/>\n  <path d="M81 183H75V189H81V183Z" fill="white"/>\n  <path d="M81 189H75V195H81V189Z" fill="white"/>\n  <path d="M81 201H75V207H81V201Z" fill="white"/>\n  <path d="M81 219H75V225H81V219Z" fill="white"/>\n  <path d="M81 237H75V243H81V237Z" fill="white"/>\n  <path d="M81 267H75V273H81V267Z" fill="white"/>\n  <path d="M81 273H75V279H81V273Z" fill="white"/>\n  <path d="M81 279H75V285H81V279Z" fill="white"/>\n  <path d="M87 21H81V27H87V21Z" fill="white"/>\n  <path d="M87 33H81V39H87V33Z" fill="white"/>\n  <path d="M87 57H81V63H87V57Z" fill="white"/>\n  <path d="M87 63H81V69H87V63Z" fill="white"/>\n  <path d="M87 69H81V75H87V69Z" fill="white"/>\n  <path d="M87 87H81V93H87V87Z" fill="white"/>\n  <path d="M87 123H81V129H87V123Z" fill="white"/>\n  <path d="M87 129H81V135H87V129Z" fill="white"/>\n  <path d="M87 135H81V141H87V135Z" fill="white"/>\n  <path d="M87 147H81V153H87V147Z" fill="white"/>\n  <path d="M87 153H81V159H87V153Z" fill="white"/>\n  <path d="M87 159H81V165H87V159Z" fill="white"/>\n  <path d="M87 165H81V171H87V165Z" fill="white"/>\n  <path d="M87 207H81V213H87V207Z" fill="white"/>\n  <path d="M87 213H81V219H87V213Z" fill="white"/>\n  <path d="M87 219H81V225H87V219Z" fill="white"/>\n  <path d="M87 225H81V231H87V225Z" fill="white"/>\n  <path d="M87 231H81V237H87V231Z" fill="white"/>\n  <path d="M87 237H81V243H87V237Z" fill="white"/>\n  <path d="M87 243H81V249H87V243Z" fill="white"/>\n  <path d="M87 249H81V255H87V249Z" fill="white"/>\n  <path d="M87 267H81V273H87V267Z" fill="white"/>\n  <path d="M93 15H87V21H93V15Z" fill="white"/>\n  <path d="M93 27H87V33H93V27Z" fill="white"/>\n  <path d="M93 33H87V39H93V33Z" fill="white"/>\n  <path d="M93 45H87V51H93V45Z" fill="white"/>\n  <path d="M93 51H87V57H93V51Z" fill="white"/>\n  <path d="M93 81H87V87H93V81Z" fill="white"/>\n  <path d="M93 87H87V93H93V87Z" fill="white"/>\n  <path d="M93 105H87V111H93V105Z" fill="white"/>\n  <path d="M93 123H87V129H93V123Z" fill="white"/>\n  <path d="M93 129H87V135H93V129Z" fill="white"/>\n  <path d="M93 135H87V141H93V135Z" fill="white"/>\n  <path d="M93 141H87V147H93V141Z" fill="white"/>\n  <path d="M93 153H87V159H93V153Z" fill="white"/>\n  <path d="M93 165H87V171H93V165Z" fill="white"/>\n  <path d="M93 171H87V177H93V171Z" fill="white"/>\n  <path d="M93 183H87V189H93V183Z" fill="white"/>\n  <path d="M93 207H87V213H93V207Z" fill="white"/>\n  <path d="M93 225H87V231H93V225Z" fill="white"/>\n  <path d="M93 237H87V243H93V237Z" fill="white"/>\n  <path d="M93 243H87V249H93V243Z" fill="white"/>\n  <path d="M93 249H87V255H93V249Z" fill="white"/>\n  <path d="M93 255H87V261H93V255Z" fill="white"/>\n  <path d="M93 261H87V267H93V261Z" fill="white"/>\n  <path d="M93 273H87V279H93V273Z" fill="white"/>\n  <path d="M93 279H87V285H93V279Z" fill="white"/>\n  <path d="M99 21H93V27H99V21Z" fill="white"/>\n  <path d="M99 45H93V51H99V45Z" fill="white"/>\n  <path d="M99 57H93V63H99V57Z" fill="white"/>\n  <path d="M99 75H93V81H99V75Z" fill="white"/>\n  <path d="M99 87H93V93H99V87Z" fill="white"/>\n  <path d="M99 99H93V105H99V99Z" fill="white"/>\n  <path d="M99 105H93V111H99V105Z" fill="white"/>\n  <path d="M99 117H93V123H99V117Z" fill="white"/>\n  <path d="M99 129H93V135H99V129Z" fill="white"/>\n  <path d="M99 147H93V153H99V147Z" fill="white"/>\n  <path d="M99 159H93V165H99V159Z" fill="white"/>\n  <path d="M99 165H93V171H99V165Z" fill="white"/>\n  <path d="M99 171H93V177H99V171Z" fill="white"/>\n  <path d="M99 177H93V183H99V177Z" fill="white"/>\n  <path d="M99 183H93V189H99V183Z" fill="white"/>\n  <path d="M99 189H93V195H99V189Z" fill="white"/>\n  <path d="M99 195H93V201H99V195Z" fill="white"/>\n  <path d="M99 201H93V207H99V201Z" fill="white"/>\n  <path d="M99 207H93V213H99V207Z" fill="white"/>\n  <path d="M99 225H93V231H99V225Z" fill="white"/>\n  <path d="M99 231H93V237H99V231Z" fill="white"/>\n  <path d="M99 243H93V249H99V243Z" fill="white"/>\n  <path d="M99 255H93V261H99V255Z" fill="white"/>\n  <path d="M105 21H99V27H105V21Z" fill="white"/>\n  <path d="M105 27H99V33H105V27Z" fill="white"/>\n  <path d="M105 33H99V39H105V33Z" fill="white"/>\n  <path d="M105 51H99V57H105V51Z" fill="white"/>\n  <path d="M105 69H99V75H105V69Z" fill="white"/>\n  <path d="M105 81H99V87H105V81Z" fill="white"/>\n  <path d="M105 87H99V93H105V87Z" fill="white"/>\n  <path d="M105 99H99V105H105V99Z" fill="white"/>\n  <path d="M105 111H99V117H105V111Z" fill="white"/>\n  <path d="M105 135H99V141H105V135Z" fill="white"/>\n  <path d="M105 141H99V147H105V141Z" fill="white"/>\n  <path d="M105 147H99V153H105V147Z" fill="white"/>\n  <path d="M105 171H99V177H105V171Z" fill="white"/>\n  <path d="M105 189H99V195H105V189Z" fill="white"/>\n  <path d="M105 237H99V243H105V237Z" fill="white"/>\n  <path d="M105 243H99V249H105V243Z" fill="white"/>\n  <path d="M105 255H99V261H105V255Z" fill="white"/>\n  <path d="M105 267H99V273H105V267Z" fill="white"/>\n  <path d="M111 15H105V21H111V15Z" fill="white"/>\n  <path d="M111 39H105V45H111V39Z" fill="white"/>\n  <path d="M111 57H105V63H111V57Z" fill="white"/>\n  <path d="M111 63H105V69H111V63Z" fill="white"/>\n  <path d="M111 69H105V75H111V69Z" fill="white"/>\n  <path d="M111 87H105V93H111V87Z" fill="white"/>\n  <path d="M111 93H105V99H111V93Z" fill="white"/>\n  <path d="M111 105H105V111H111V105Z" fill="white"/>\n  <path d="M111 117H105V123H111V117Z" fill="white"/>\n  <path d="M111 129H105V135H111V129Z" fill="white"/>\n  <path d="M111 135H105V141H111V135Z" fill="white"/>\n  <path d="M111 141H105V147H111V141Z" fill="white"/>\n  <path d="M111 165H105V171H111V165Z" fill="white"/>\n  <path d="M111 171H105V177H111V171Z" fill="white"/>\n  <path d="M111 189H105V195H111V189Z" fill="white"/>\n  <path d="M111 195H105V201H111V195Z" fill="white"/>\n  <path d="M111 225H105V231H111V225Z" fill="white"/>\n  <path d="M111 237H105V243H111V237Z" fill="white"/>\n  <path d="M111 243H105V249H111V243Z" fill="white"/>\n  <path d="M111 249H105V255H111V249Z" fill="white"/>\n  <path d="M111 267H105V273H111V267Z" fill="white"/>\n  <path d="M111 273H105V279H111V273Z" fill="white"/>\n  <path d="M111 279H105V285H111V279Z" fill="white"/>\n  <path d="M117 27H111V33H117V27Z" fill="white"/>\n  <path d="M117 39H111V45H117V39Z" fill="white"/>\n  <path d="M117 45H111V51H117V45Z" fill="white"/>\n  <path d="M117 51H111V57H117V51Z" fill="white"/>\n  <path d="M117 57H111V63H117V57Z" fill="white"/>\n  <path d="M117 63H111V69H117V63Z" fill="white"/>\n  <path d="M117 81H111V87H117V81Z" fill="white"/>\n  <path d="M117 93H111V99H117V93Z" fill="white"/>\n  <path d="M117 99H111V105H117V99Z" fill="white"/>\n  <path d="M117 195H111V201H117V195Z" fill="white"/>\n  <path d="M117 201H111V207H117V201Z" fill="white"/>\n  <path d="M117 207H111V213H117V207Z" fill="white"/>\n  <path d="M117 213H111V219H117V213Z" fill="white"/>\n  <path d="M117 219H111V225H117V219Z" fill="white"/>\n  <path d="M117 249H111V255H117V249Z" fill="white"/>\n  <path d="M117 279H111V285H117V279Z" fill="white"/>\n  <path d="M123 21H117V27H123V21Z" fill="white"/>\n  <path d="M123 57H117V63H123V57Z" fill="white"/>\n  <path d="M123 63H117V69H123V63Z" fill="white"/>\n  <path d="M123 81H117V87H123V81Z" fill="white"/>\n  <path d="M123 87H117V93H123V87Z" fill="white"/>\n  <path d="M123 93H117V99H123V93Z" fill="white"/>\n  <path d="M123 195H117V201H123V195Z" fill="white"/>\n  <path d="M123 219H117V225H123V219Z" fill="white"/>\n  <path d="M123 225H117V231H123V225Z" fill="white"/>\n  <path d="M123 231H117V237H123V231Z" fill="white"/>\n  <path d="M123 237H117V243H123V237Z" fill="white"/>\n  <path d="M123 255H117V261H123V255Z" fill="white"/>\n  <path d="M123 267H117V273H123V267Z" fill="white"/>\n  <path d="M123 279H117V285H123V279Z" fill="white"/>\n  <path d="M129 21H123V27H129V21Z" fill="white"/>\n  <path d="M129 27H123V33H129V27Z" fill="white"/>\n  <path d="M129 33H123V39H129V33Z" fill="white"/>\n  <path d="M129 45H123V51H129V45Z" fill="white"/>\n  <path d="M129 51H123V57H129V51Z" fill="white"/>\n  <path d="M129 87H123V93H129V87Z" fill="white"/>\n  <path d="M129 99H123V105H129V99Z" fill="white"/>\n  <path d="M129 201H123V207H129V201Z" fill="white"/>\n  <path d="M129 207H123V213H129V207Z" fill="white"/>\n  <path d="M129 213H123V219H129V213Z" fill="white"/>\n  <path d="M129 249H123V255H129V249Z" fill="white"/>\n  <path d="M129 255H123V261H129V255Z" fill="white"/>\n  <path d="M129 261H123V267H129V261Z" fill="white"/>\n  <path d="M129 267H123V273H129V267Z" fill="white"/>\n  <path d="M129 279H123V285H129V279Z" fill="white"/>\n  <path d="M135 21H129V27H135V21Z" fill="white"/>\n  <path d="M135 39H129V45H135V39Z" fill="white"/>\n  <path d="M135 81H129V87H135V81Z" fill="white"/>\n  <path d="M135 99H129V105H135V99Z" fill="white"/>\n  <path d="M135 195H129V201H135V195Z" fill="white"/>\n  <path d="M135 201H129V207H135V201Z" fill="white"/>\n  <path d="M135 231H129V237H135V231Z" fill="white"/>\n  <path d="M135 255H129V261H135V255Z" fill="white"/>\n  <path d="M135 267H129V273H135V267Z" fill="white"/>\n  <path d="M135 273H129V279H135V273Z" fill="white"/>\n  <path d="M135 279H129V285H135V279Z" fill="white"/>\n  <path d="M141 15H135V21H141V15Z" fill="white"/>\n  <path d="M141 21H135V27H141V21Z" fill="white"/>\n  <path d="M141 33H135V39H141V33Z" fill="white"/>\n  <path d="M141 39H135V45H141V39Z" fill="white"/>\n  <path d="M141 45H135V51H141V45Z" fill="white"/>\n  <path d="M141 51H135V57H141V51Z" fill="white"/>\n  <path d="M141 57H135V63H141V57Z" fill="white"/>\n  <path d="M141 63H135V69H141V63Z" fill="white"/>\n  <path d="M141 69H135V75H141V69Z" fill="white"/>\n  <path d="M141 75H135V81H141V75Z" fill="white"/>\n  <path d="M141 81H135V87H141V81Z" fill="white"/>\n  <path d="M141 93H135V99H141V93Z" fill="white"/>\n  <path d="M141 201H135V207H141V201Z" fill="white"/>\n  <path d="M141 225H135V231H141V225Z" fill="white"/>\n  <path d="M141 231H135V237H141V231Z" fill="white"/>\n  <path d="M141 237H135V243H141V237Z" fill="white"/>\n  <path d="M141 243H135V249H141V243Z" fill="white"/>\n  <path d="M141 249H135V255H141V249Z" fill="white"/>\n  <path d="M141 255H135V261H141V255Z" fill="white"/>\n  <path d="M141 261H135V267H141V261Z" fill="white"/>\n  <path d="M147 21H141V27H147V21Z" fill="white"/>\n  <path d="M147 27H141V33H147V27Z" fill="white"/>\n  <path d="M147 33H141V39H147V33Z" fill="white"/>\n  <path d="M147 39H141V45H147V39Z" fill="white"/>\n  <path d="M147 63H141V69H147V63Z" fill="white"/>\n  <path d="M147 69H141V75H147V69Z" fill="white"/>\n  <path d="M147 81H141V87H147V81Z" fill="white"/>\n  <path d="M147 87H141V93H147V87Z" fill="white"/>\n  <path d="M147 93H141V99H147V93Z" fill="white"/>\n  <path d="M147 195H141V201H147V195Z" fill="white"/>\n  <path d="M147 201H141V207H147V201Z" fill="white"/>\n  <path d="M147 207H141V213H147V207Z" fill="white"/>\n  <path d="M147 213H141V219H147V213Z" fill="white"/>\n  <path d="M147 219H141V225H147V219Z" fill="white"/>\n  <path d="M147 225H141V231H147V225Z" fill="white"/>\n  <path d="M147 231H141V237H147V231Z" fill="white"/>\n  <path d="M147 255H141V261H147V255Z" fill="white"/>\n  <path d="M153 33H147V39H153V33Z" fill="white"/>\n  <path d="M153 39H147V45H153V39Z" fill="white"/>\n  <path d="M153 51H147V57H153V51Z" fill="white"/>\n  <path d="M153 63H147V69H153V63Z" fill="white"/>\n  <path d="M153 81H147V87H153V81Z" fill="white"/>\n  <path d="M153 87H147V93H153V87Z" fill="white"/>\n  <path d="M153 201H147V207H153V201Z" fill="white"/>\n  <path d="M153 213H147V219H153V213Z" fill="white"/>\n  <path d="M153 219H147V225H153V219Z" fill="white"/>\n  <path d="M153 225H147V231H153V225Z" fill="white"/>\n  <path d="M153 231H147V237H153V231Z" fill="white"/>\n  <path d="M153 243H147V249H153V243Z" fill="white"/>\n  <path d="M153 255H147V261H153V255Z" fill="white"/>\n  <path d="M153 261H147V267H153V261Z" fill="white"/>\n  <path d="M153 267H147V273H153V267Z" fill="white"/>\n  <path d="M153 273H147V279H153V273Z" fill="white"/>\n  <path d="M153 279H147V285H153V279Z" fill="white"/>\n  <path d="M159 33H153V39H159V33Z" fill="white"/>\n  <path d="M159 39H153V45H159V39Z" fill="white"/>\n  <path d="M159 63H153V69H159V63Z" fill="white"/>\n  <path d="M159 69H153V75H159V69Z" fill="white"/>\n  <path d="M159 75H153V81H159V75Z" fill="white"/>\n  <path d="M159 87H153V93H159V87Z" fill="white"/>\n  <path d="M159 93H153V99H159V93Z" fill="white"/>\n  <path d="M159 195H153V201H159V195Z" fill="white"/>\n  <path d="M159 207H153V213H159V207Z" fill="white"/>\n  <path d="M159 213H153V219H159V213Z" fill="white"/>\n  <path d="M159 225H153V231H159V225Z" fill="white"/>\n  <path d="M159 231H153V237H159V231Z" fill="white"/>\n  <path d="M159 255H153V261H159V255Z" fill="white"/>\n  <path d="M159 267H153V273H159V267Z" fill="white"/>\n  <path d="M159 273H153V279H159V273Z" fill="white"/>\n  <path d="M165 39H159V45H165V39Z" fill="white"/>\n  <path d="M165 45H159V51H165V45Z" fill="white"/>\n  <path d="M165 51H159V57H165V51Z" fill="white"/>\n  <path d="M165 57H159V63H165V57Z" fill="white"/>\n  <path d="M165 63H159V69H165V63Z" fill="white"/>\n  <path d="M165 75H159V81H165V75Z" fill="white"/>\n  <path d="M165 93H159V99H165V93Z" fill="white"/>\n  <path d="M165 195H159V201H165V195Z" fill="white"/>\n  <path d="M165 207H159V213H165V207Z" fill="white"/>\n  <path d="M165 225H159V231H165V225Z" fill="white"/>\n  <path d="M165 231H159V237H165V231Z" fill="white"/>\n  <path d="M165 237H159V243H165V237Z" fill="white"/>\n  <path d="M165 243H159V249H165V243Z" fill="white"/>\n  <path d="M165 249H159V255H165V249Z" fill="white"/>\n  <path d="M165 255H159V261H165V255Z" fill="white"/>\n  <path d="M165 273H159V279H165V273Z" fill="white"/>\n  <path d="M171 15H165V21H171V15Z" fill="white"/>\n  <path d="M171 21H165V27H171V21Z" fill="white"/>\n  <path d="M171 27H165V33H171V27Z" fill="white"/>\n  <path d="M171 33H165V39H171V33Z" fill="white"/>\n  <path d="M171 39H165V45H171V39Z" fill="white"/>\n  <path d="M171 45H165V51H171V45Z" fill="white"/>\n  <path d="M171 57H165V63H171V57Z" fill="white"/>\n  <path d="M171 63H165V69H171V63Z" fill="white"/>\n  <path d="M171 69H165V75H171V69Z" fill="white"/>\n  <path d="M171 75H165V81H171V75Z" fill="white"/>\n  <path d="M171 195H165V201H171V195Z" fill="white"/>\n  <path d="M171 225H165V231H171V225Z" fill="white"/>\n  <path d="M171 249H165V255H171V249Z" fill="white"/>\n  <path d="M171 267H165V273H171V267Z" fill="white"/>\n  <path d="M177 39H171V45H177V39Z" fill="white"/>\n  <path d="M177 45H171V51H177V45Z" fill="white"/>\n  <path d="M177 51H171V57H177V51Z" fill="white"/>\n  <path d="M177 69H171V75H177V69Z" fill="white"/>\n  <path d="M177 75H171V81H177V75Z" fill="white"/>\n  <path d="M177 81H171V87H177V81Z" fill="white"/>\n  <path d="M177 87H171V93H177V87Z" fill="white"/>\n  <path d="M177 99H171V105H177V99Z" fill="white"/>\n  <path d="M177 207H171V213H177V207Z" fill="white"/>\n  <path d="M177 213H171V219H177V213Z" fill="white"/>\n  <path d="M177 237H171V243H177V237Z" fill="white"/>\n  <path d="M177 255H171V261H177V255Z" fill="white"/>\n  <path d="M177 267H171V273H177V267Z" fill="white"/>\n  <path d="M177 273H171V279H177V273Z" fill="white"/>\n  <path d="M183 15H177V21H183V15Z" fill="white"/>\n  <path d="M183 21H177V27H183V21Z" fill="white"/>\n  <path d="M183 33H177V39H183V33Z" fill="white"/>\n  <path d="M183 57H177V63H183V57Z" fill="white"/>\n  <path d="M183 87H177V93H183V87Z" fill="white"/>\n  <path d="M183 195H177V201H183V195Z" fill="white"/>\n  <path d="M183 201H177V207H183V201Z" fill="white"/>\n  <path d="M183 213H177V219H183V213Z" fill="white"/>\n  <path d="M183 219H177V225H183V219Z" fill="white"/>\n  <path d="M183 225H177V231H183V225Z" fill="white"/>\n  <path d="M183 231H177V237H183V231Z" fill="white"/>\n  <path d="M183 249H177V255H183V249Z" fill="white"/>\n  <path d="M183 255H177V261H183V255Z" fill="white"/>\n  <path d="M183 261H177V267H183V261Z" fill="white"/>\n  <path d="M183 267H177V273H183V267Z" fill="white"/>\n  <path d="M183 273H177V279H183V273Z" fill="white"/>\n  <path d="M183 279H177V285H183V279Z" fill="white"/>\n  <path d="M189 15H183V21H189V15Z" fill="white"/>\n  <path d="M189 21H183V27H189V21Z" fill="white"/>\n  <path d="M189 33H183V39H189V33Z" fill="white"/>\n  <path d="M189 39H183V45H189V39Z" fill="white"/>\n  <path d="M189 51H183V57H189V51Z" fill="white"/>\n  <path d="M189 75H183V81H189V75Z" fill="white"/>\n  <path d="M189 81H183V87H189V81Z" fill="white"/>\n  <path d="M189 87H183V93H189V87Z" fill="white"/>\n  <path d="M189 93H183V99H189V93Z" fill="white"/>\n  <path d="M189 99H183V105H189V99Z" fill="white"/>\n  <path d="M189 195H183V201H189V195Z" fill="white"/>\n  <path d="M189 207H183V213H189V207Z" fill="white"/>\n  <path d="M189 213H183V219H189V213Z" fill="white"/>\n  <path d="M189 225H183V231H189V225Z" fill="white"/>\n  <path d="M189 243H183V249H189V243Z" fill="white"/>\n  <path d="M189 255H183V261H189V255Z" fill="white"/>\n  <path d="M189 273H183V279H189V273Z" fill="white"/>\n  <path d="M189 279H183V285H189V279Z" fill="white"/>\n  <path d="M195 15H189V21H195V15Z" fill="white"/>\n  <path d="M195 33H189V39H195V33Z" fill="white"/>\n  <path d="M195 63H189V69H195V63Z" fill="white"/>\n  <path d="M195 69H189V75H195V69Z" fill="white"/>\n  <path d="M195 75H189V81H195V75Z" fill="white"/>\n  <path d="M195 81H189V87H195V81Z" fill="white"/>\n  <path d="M195 93H189V99H195V93Z" fill="white"/>\n  <path d="M195 141H189V147H195V141Z" fill="white"/>\n  <path d="M195 147H189V153H195V147Z" fill="white"/>\n  <path d="M195 153H189V159H195V153Z" fill="white"/>\n  <path d="M195 177H189V183H195V177Z" fill="white"/>\n  <path d="M195 195H189V201H195V195Z" fill="white"/>\n  <path d="M195 207H189V213H195V207Z" fill="white"/>\n  <path d="M195 213H189V219H195V213Z" fill="white"/>\n  <path d="M195 219H189V225H195V219Z" fill="white"/>\n  <path d="M195 231H189V237H195V231Z" fill="white"/>\n  <path d="M195 237H189V243H195V237Z" fill="white"/>\n  <path d="M195 249H189V255H195V249Z" fill="white"/>\n  <path d="M195 255H189V261H195V255Z" fill="white"/>\n  <path d="M195 261H189V267H195V261Z" fill="white"/>\n  <path d="M195 267H189V273H195V267Z" fill="white"/>\n  <path d="M195 279H189V285H195V279Z" fill="white"/>\n  <path d="M201 27H195V33H201V27Z" fill="white"/>\n  <path d="M201 39H195V45H201V39Z" fill="white"/>\n  <path d="M201 51H195V57H201V51Z" fill="white"/>\n  <path d="M201 57H195V63H201V57Z" fill="white"/>\n  <path d="M201 69H195V75H201V69Z" fill="white"/>\n  <path d="M201 75H195V81H201V75Z" fill="white"/>\n  <path d="M201 87H195V93H201V87Z" fill="white"/>\n  <path d="M201 93H195V99H201V93Z" fill="white"/>\n  <path d="M201 99H195V105H201V99Z" fill="white"/>\n  <path d="M201 111H195V117H201V111Z" fill="white"/>\n  <path d="M201 117H195V123H201V117Z" fill="white"/>\n  <path d="M201 135H195V141H201V135Z" fill="white"/>\n  <path d="M201 141H195V147H201V141Z" fill="white"/>\n  <path d="M201 165H195V171H201V165Z" fill="white"/>\n  <path d="M201 201H195V207H201V201Z" fill="white"/>\n  <path d="M201 207H195V213H201V207Z" fill="white"/>\n  <path d="M201 213H195V219H201V213Z" fill="white"/>\n  <path d="M201 225H195V231H201V225Z" fill="white"/>\n  <path d="M201 231H195V237H201V231Z" fill="white"/>\n  <path d="M201 237H195V243H201V237Z" fill="white"/>\n  <path d="M201 243H195V249H201V243Z" fill="white"/>\n  <path d="M201 261H195V267H201V261Z" fill="white"/>\n  <path d="M201 267H195V273H201V267Z" fill="white"/>\n  <path d="M201 279H195V285H201V279Z" fill="white"/>\n  <path d="M207 27H201V33H207V27Z" fill="white"/>\n  <path d="M207 39H201V45H207V39Z" fill="white"/>\n  <path d="M207 45H201V51H207V45Z" fill="white"/>\n  <path d="M207 63H201V69H207V63Z" fill="white"/>\n  <path d="M207 69H201V75H207V69Z" fill="white"/>\n  <path d="M207 81H201V87H207V81Z" fill="white"/>\n  <path d="M207 93H201V99H207V93Z" fill="white"/>\n  <path d="M207 99H201V105H207V99Z" fill="white"/>\n  <path d="M207 105H201V111H207V105Z" fill="white"/>\n  <path d="M207 117H201V123H207V117Z" fill="white"/>\n  <path d="M207 129H201V135H207V129Z" fill="white"/>\n  <path d="M207 135H201V141H207V135Z" fill="white"/>\n  <path d="M207 153H201V159H207V153Z" fill="white"/>\n  <path d="M207 165H201V171H207V165Z" fill="white"/>\n  <path d="M207 183H201V189H207V183Z" fill="white"/>\n  <path d="M207 189H201V195H207V189Z" fill="white"/>\n  <path d="M207 225H201V231H207V225Z" fill="white"/>\n  <path d="M207 249H201V255H207V249Z" fill="white"/>\n  <path d="M207 255H201V261H207V255Z" fill="white"/>\n  <path d="M207 267H201V273H207V267Z" fill="white"/>\n  <path d="M207 273H201V279H207V273Z" fill="white"/>\n  <path d="M213 15H207V21H213V15Z" fill="white"/>\n  <path d="M213 27H207V33H213V27Z" fill="white"/>\n  <path d="M213 33H207V39H213V33Z" fill="white"/>\n  <path d="M213 51H207V57H213V51Z" fill="white"/>\n  <path d="M213 57H207V63H213V57Z" fill="white"/>\n  <path d="M213 69H207V75H213V69Z" fill="white"/>\n  <path d="M213 75H207V81H213V75Z" fill="white"/>\n  <path d="M213 93H207V99H213V93Z" fill="white"/>\n  <path d="M213 99H207V105H213V99Z" fill="white"/>\n  <path d="M213 117H207V123H213V117Z" fill="white"/>\n  <path d="M213 123H207V129H213V123Z" fill="white"/>\n  <path d="M213 135H207V141H213V135Z" fill="white"/>\n  <path d="M213 141H207V147H213V141Z" fill="white"/>\n  <path d="M213 147H207V153H213V147Z" fill="white"/>\n  <path d="M213 153H207V159H213V153Z" fill="white"/>\n  <path d="M213 159H207V165H213V159Z" fill="white"/>\n  <path d="M213 183H207V189H213V183Z" fill="white"/>\n  <path d="M213 189H207V195H213V189Z" fill="white"/>\n  <path d="M213 201H207V207H213V201Z" fill="white"/>\n  <path d="M213 249H207V255H213V249Z" fill="white"/>\n  <path d="M219 15H213V21H219V15Z" fill="white"/>\n  <path d="M219 33H213V39H219V33Z" fill="white"/>\n  <path d="M219 63H213V69H219V63Z" fill="white"/>\n  <path d="M219 69H213V75H219V69Z" fill="white"/>\n  <path d="M219 75H213V81H219V75Z" fill="white"/>\n  <path d="M219 81H213V87H219V81Z" fill="white"/>\n  <path d="M219 123H213V129H219V123Z" fill="white"/>\n  <path d="M219 129H213V135H219V129Z" fill="white"/>\n  <path d="M219 141H213V147H219V141Z" fill="white"/>\n  <path d="M219 183H213V189H219V183Z" fill="white"/>\n  <path d="M219 189H213V195H219V189Z" fill="white"/>\n  <path d="M219 195H213V201H219V195Z" fill="white"/>\n  <path d="M219 207H213V213H219V207Z" fill="white"/>\n  <path d="M219 219H213V225H219V219Z" fill="white"/>\n  <path d="M219 243H213V249H219V243Z" fill="white"/>\n  <path d="M219 249H213V255H219V249Z" fill="white"/>\n  <path d="M219 255H213V261H219V255Z" fill="white"/>\n  <path d="M219 261H213V267H219V261Z" fill="white"/>\n  <path d="M219 267H213V273H219V267Z" fill="white"/>\n  <path d="M219 273H213V279H219V273Z" fill="white"/>\n  <path d="M225 39H219V45H225V39Z" fill="white"/>\n  <path d="M225 51H219V57H225V51Z" fill="white"/>\n  <path d="M225 57H219V63H225V57Z" fill="white"/>\n  <path d="M225 69H219V75H225V69Z" fill="white"/>\n  <path d="M225 75H219V81H225V75Z" fill="white"/>\n  <path d="M225 87H219V93H225V87Z" fill="white"/>\n  <path d="M225 111H219V117H225V111Z" fill="white"/>\n  <path d="M225 117H219V123H225V117Z" fill="white"/>\n  <path d="M225 123H219V129H225V123Z" fill="white"/>\n  <path d="M225 141H219V147H225V141Z" fill="white"/>\n  <path d="M225 153H219V159H225V153Z" fill="white"/>\n  <path d="M225 159H219V165H225V159Z" fill="white"/>\n  <path d="M225 165H219V171H225V165Z" fill="white"/>\n  <path d="M225 171H219V177H225V171Z" fill="white"/>\n  <path d="M225 219H219V225H225V219Z" fill="white"/>\n  <path d="M225 231H219V237H225V231Z" fill="white"/>\n  <path d="M225 243H219V249H225V243Z" fill="white"/>\n  <path d="M225 249H219V255H225V249Z" fill="white"/>\n  <path d="M225 261H219V267H225V261Z" fill="white"/>\n  <path d="M225 267H219V273H225V267Z" fill="white"/>\n  <path d="M225 273H219V279H225V273Z" fill="white"/>\n  <path d="M225 279H219V285H225V279Z" fill="white"/>\n  <path d="M231 21H225V27H231V21Z" fill="white"/>\n  <path d="M231 27H225V33H231V27Z" fill="white"/>\n  <path d="M231 33H225V39H231V33Z" fill="white"/>\n  <path d="M231 39H225V45H231V39Z" fill="white"/>\n  <path d="M231 57H225V63H231V57Z" fill="white"/>\n  <path d="M231 63H225V69H231V63Z" fill="white"/>\n  <path d="M231 69H225V75H231V69Z" fill="white"/>\n  <path d="M231 81H225V87H231V81Z" fill="white"/>\n  <path d="M231 111H225V117H231V111Z" fill="white"/>\n  <path d="M231 117H225V123H231V117Z" fill="white"/>\n  <path d="M231 123H225V129H231V123Z" fill="white"/>\n  <path d="M231 135H225V141H231V135Z" fill="white"/>\n  <path d="M231 147H225V153H231V147Z" fill="white"/>\n  <path d="M231 165H225V171H231V165Z" fill="white"/>\n  <path d="M231 189H225V195H231V189Z" fill="white"/>\n  <path d="M231 195H225V201H231V195Z" fill="white"/>\n  <path d="M231 201H225V207H231V201Z" fill="white"/>\n  <path d="M231 207H225V213H231V207Z" fill="white"/>\n  <path d="M231 219H225V225H231V219Z" fill="white"/>\n  <path d="M231 237H225V243H231V237Z" fill="white"/>\n  <path d="M231 243H225V249H231V243Z" fill="white"/>\n  <path d="M231 255H225V261H231V255Z" fill="white"/>\n  <path d="M231 267H225V273H231V267Z" fill="white"/>\n  <path d="M231 273H225V279H231V273Z" fill="white"/>\n  <path d="M237 15H231V21H237V15Z" fill="white"/>\n  <path d="M237 33H231V39H237V33Z" fill="white"/>\n  <path d="M237 39H231V45H237V39Z" fill="white"/>\n  <path d="M237 51H231V57H237V51Z" fill="white"/>\n  <path d="M237 63H231V69H237V63Z" fill="white"/>\n  <path d="M237 69H231V75H237V69Z" fill="white"/>\n  <path d="M237 87H231V93H237V87Z" fill="white"/>\n  <path d="M237 99H231V105H237V99Z" fill="white"/>\n  <path d="M237 105H231V111H237V105Z" fill="white"/>\n  <path d="M237 111H231V117H237V111Z" fill="white"/>\n  <path d="M237 117H231V123H237V117Z" fill="white"/>\n  <path d="M237 135H231V141H237V135Z" fill="white"/>\n  <path d="M237 141H231V147H237V141Z" fill="white"/>\n  <path d="M237 147H231V153H237V147Z" fill="white"/>\n  <path d="M237 153H231V159H237V153Z" fill="white"/>\n  <path d="M237 159H231V165H237V159Z" fill="white"/>\n  <path d="M237 165H231V171H237V165Z" fill="white"/>\n  <path d="M237 177H231V183H237V177Z" fill="white"/>\n  <path d="M237 183H231V189H237V183Z" fill="white"/>\n  <path d="M237 189H231V195H237V189Z" fill="white"/>\n  <path d="M237 207H231V213H237V207Z" fill="white"/>\n  <path d="M237 219H231V225H237V219Z" fill="white"/>\n  <path d="M237 225H231V231H237V225Z" fill="white"/>\n  <path d="M237 231H231V237H237V231Z" fill="white"/>\n  <path d="M237 237H231V243H237V237Z" fill="white"/>\n  <path d="M237 243H231V249H237V243Z" fill="white"/>\n  <path d="M237 249H231V255H237V249Z" fill="white"/>\n  <path d="M237 255H231V261H237V255Z" fill="white"/>\n  <path d="M237 261H231V267H237V261Z" fill="white"/>\n  <path d="M237 273H231V279H237V273Z" fill="white"/>\n  <path d="M237 279H231V285H237V279Z" fill="white"/>\n  <path d="M243 63H237V69H243V63Z" fill="white"/>\n  <path d="M243 75H237V81H243V75Z" fill="white"/>\n  <path d="M243 81H237V87H243V81Z" fill="white"/>\n  <path d="M243 93H237V99H243V93Z" fill="white"/>\n  <path d="M243 111H237V117H243V111Z" fill="white"/>\n  <path d="M243 117H237V123H243V117Z" fill="white"/>\n  <path d="M243 123H237V129H243V123Z" fill="white"/>\n  <path d="M243 129H237V135H243V129Z" fill="white"/>\n  <path d="M243 135H237V141H243V135Z" fill="white"/>\n  <path d="M243 159H237V165H243V159Z" fill="white"/>\n  <path d="M243 177H237V183H243V177Z" fill="white"/>\n  <path d="M243 183H237V189H243V183Z" fill="white"/>\n  <path d="M243 195H237V201H243V195Z" fill="white"/>\n  <path d="M243 207H237V213H243V207Z" fill="white"/>\n  <path d="M243 225H237V231H243V225Z" fill="white"/>\n  <path d="M243 231H237V237H243V231Z" fill="white"/>\n  <path d="M243 255H237V261H243V255Z" fill="white"/>\n  <path d="M243 273H237V279H243V273Z" fill="white"/>\n  <path d="M249 87H243V93H249V87Z" fill="white"/>\n  <path d="M249 93H243V99H249V93Z" fill="white"/>\n  <path d="M249 99H243V105H249V99Z" fill="white"/>\n  <path d="M249 105H243V111H249V105Z" fill="white"/>\n  <path d="M249 123H243V129H249V123Z" fill="white"/>\n  <path d="M249 135H243V141H249V135Z" fill="white"/>\n  <path d="M249 147H243V153H249V147Z" fill="white"/>\n  <path d="M249 159H243V165H249V159Z" fill="white"/>\n  <path d="M249 165H243V171H249V165Z" fill="white"/>\n  <path d="M249 177H243V183H249V177Z" fill="white"/>\n  <path d="M249 183H243V189H249V183Z" fill="white"/>\n  <path d="M249 201H243V207H249V201Z" fill="white"/>\n  <path d="M249 207H243V213H249V207Z" fill="white"/>\n  <path d="M249 225H243V231H249V225Z" fill="white"/>\n  <path d="M249 231H243V237H249V231Z" fill="white"/>\n  <path d="M249 243H243V249H249V243Z" fill="white"/>\n  <path d="M249 255H243V261H249V255Z" fill="white"/>\n  <path d="M249 267H243V273H249V267Z" fill="white"/>\n  <path d="M255 63H249V69H255V63Z" fill="white"/>\n  <path d="M255 69H249V75H255V69Z" fill="white"/>\n  <path d="M255 105H249V111H255V105Z" fill="white"/>\n  <path d="M255 117H249V123H255V117Z" fill="white"/>\n  <path d="M255 123H249V129H255V123Z" fill="white"/>\n  <path d="M255 129H249V135H255V129Z" fill="white"/>\n  <path d="M255 135H249V141H255V135Z" fill="white"/>\n  <path d="M255 159H249V165H255V159Z" fill="white"/>\n  <path d="M255 171H249V177H255V171Z" fill="white"/>\n  <path d="M255 177H249V183H255V177Z" fill="white"/>\n  <path d="M255 189H249V195H255V189Z" fill="white"/>\n  <path d="M255 195H249V201H255V195Z" fill="white"/>\n  <path d="M255 201H249V207H255V201Z" fill="white"/>\n  <path d="M255 213H249V219H255V213Z" fill="white"/>\n  <path d="M255 231H249V237H255V231Z" fill="white"/>\n  <path d="M255 255H249V261H255V255Z" fill="white"/>\n  <path d="M255 267H249V273H255V267Z" fill="white"/>\n  <path d="M261 63H255V69H261V63Z" fill="white"/>\n  <path d="M261 69H255V75H261V69Z" fill="white"/>\n  <path d="M261 81H255V87H261V81Z" fill="white"/>\n  <path d="M261 99H255V105H261V99Z" fill="white"/>\n  <path d="M261 117H255V123H261V117Z" fill="white"/>\n  <path d="M261 123H255V129H261V123Z" fill="white"/>\n  <path d="M261 135H255V141H261V135Z" fill="white"/>\n  <path d="M261 141H255V147H261V141Z" fill="white"/>\n  <path d="M261 147H255V153H261V147Z" fill="white"/>\n  <path d="M261 153H255V159H261V153Z" fill="white"/>\n  <path d="M261 159H255V165H261V159Z" fill="white"/>\n  <path d="M261 189H255V195H261V189Z" fill="white"/>\n  <path d="M261 201H255V207H261V201Z" fill="white"/>\n  <path d="M261 207H255V213H261V207Z" fill="white"/>\n  <path d="M261 219H255V225H261V219Z" fill="white"/>\n  <path d="M261 225H255V231H261V225Z" fill="white"/>\n  <path d="M261 231H255V237H261V231Z" fill="white"/>\n  <path d="M261 237H255V243H261V237Z" fill="white"/>\n  <path d="M261 243H255V249H261V243Z" fill="white"/>\n  <path d="M261 249H255V255H261V249Z" fill="white"/>\n  <path d="M261 255H255V261H261V255Z" fill="white"/>\n  <path d="M261 273H255V279H261V273Z" fill="white"/>\n  <path d="M267 63H261V69H267V63Z" fill="white"/>\n  <path d="M267 69H261V75H267V69Z" fill="white"/>\n  <path d="M267 81H261V87H267V81Z" fill="white"/>\n  <path d="M267 87H261V93H267V87Z" fill="white"/>\n  <path d="M267 93H261V99H267V93Z" fill="white"/>\n  <path d="M267 105H261V111H267V105Z" fill="white"/>\n  <path d="M267 123H261V129H267V123Z" fill="white"/>\n  <path d="M267 129H261V135H267V129Z" fill="white"/>\n  <path d="M267 135H261V141H267V135Z" fill="white"/>\n  <path d="M267 147H261V153H267V147Z" fill="white"/>\n  <path d="M267 153H261V159H267V153Z" fill="white"/>\n  <path d="M267 165H261V171H267V165Z" fill="white"/>\n  <path d="M267 171H261V177H267V171Z" fill="white"/>\n  <path d="M267 183H261V189H267V183Z" fill="white"/>\n  <path d="M267 195H261V201H267V195Z" fill="white"/>\n  <path d="M267 201H261V207H267V201Z" fill="white"/>\n  <path d="M267 219H261V225H267V219Z" fill="white"/>\n  <path d="M267 225H261V231H267V225Z" fill="white"/>\n  <path d="M267 249H261V255H267V249Z" fill="white"/>\n  <path d="M267 273H261V279H267V273Z" fill="white"/>\n  <path d="M273 69H267V75H273V69Z" fill="white"/>\n  <path d="M273 81H267V87H273V81Z" fill="white"/>\n  <path d="M273 87H267V93H273V87Z" fill="white"/>\n  <path d="M273 99H267V105H273V99Z" fill="white"/>\n  <path d="M273 117H267V123H273V117Z" fill="white"/>\n  <path d="M273 123H267V129H273V123Z" fill="white"/>\n  <path d="M273 153H267V159H273V153Z" fill="white"/>\n  <path d="M273 165H267V171H273V165Z" fill="white"/>\n  <path d="M273 177H267V183H273V177Z" fill="white"/>\n  <path d="M273 183H267V189H273V183Z" fill="white"/>\n  <path d="M273 189H267V195H273V189Z" fill="white"/>\n  <path d="M273 213H267V219H273V213Z" fill="white"/>\n  <path d="M273 225H267V231H273V225Z" fill="white"/>\n  <path d="M273 231H267V237H273V231Z" fill="white"/>\n  <path d="M273 237H267V243H273V237Z" fill="white"/>\n  <path d="M273 243H267V249H273V243Z" fill="white"/>\n  <path d="M273 255H267V261H273V255Z" fill="white"/>\n  <path d="M273 267H267V273H273V267Z" fill="white"/>\n  <path d="M273 279H267V285H273V279Z" fill="white"/>\n  <path d="M279 63H273V69H279V63Z" fill="white"/>\n  <path d="M279 69H273V75H279V69Z" fill="white"/>\n  <path d="M279 75H273V81H279V75Z" fill="white"/>\n  <path d="M279 117H273V123H279V117Z" fill="white"/>\n  <path d="M279 129H273V135H279V129Z" fill="white"/>\n  <path d="M279 135H273V141H279V135Z" fill="white"/>\n  <path d="M279 147H273V153H279V147Z" fill="white"/>\n  <path d="M279 153H273V159H279V153Z" fill="white"/>\n  <path d="M279 177H273V183H279V177Z" fill="white"/>\n  <path d="M279 183H273V189H279V183Z" fill="white"/>\n  <path d="M279 195H273V201H279V195Z" fill="white"/>\n  <path d="M279 201H273V207H279V201Z" fill="white"/>\n  <path d="M279 213H273V219H279V213Z" fill="white"/>\n  <path d="M279 219H273V225H279V219Z" fill="white"/>\n  <path d="M279 225H273V231H279V225Z" fill="white"/>\n  <path d="M279 231H273V237H279V231Z" fill="white"/>\n  <path d="M279 243H273V249H279V243Z" fill="white"/>\n  <path d="M279 267H273V273H279V267Z" fill="white"/>\n  <path d="M279 273H273V279H279V273Z" fill="white"/>\n  <path d="M279 279H273V285H279V279Z" fill="white"/>\n  <path d="M285 81H279V87H285V81Z" fill="white"/>\n  <path d="M285 123H279V129H285V123Z" fill="white"/>\n  <path d="M285 135H279V141H285V135Z" fill="white"/>\n  <path d="M285 153H279V159H285V153Z" fill="white"/>\n  <path d="M285 177H279V183H285V177Z" fill="white"/>\n  <path d="M285 183H279V189H285V183Z" fill="white"/>\n  <path d="M285 225H279V231H285V225Z" fill="white"/>\n  <path d="M285 231H279V237H285V231Z" fill="white"/>\n  <path d="M285 243H279V249H285V243Z" fill="white"/>\n  <path d="M285 255H279V261H285V255Z" fill="white"/>\n  <path d="M285 261H279V267H285V261Z" fill="white"/>\n  <path d="M21 15H15V21H21V15Z" fill="white"/>\n  <path d="M21 21H15V27H21V21Z" fill="white"/>\n  <path d="M21 27H15V33H21V27Z" fill="white"/>\n  <path d="M21 33H15V39H21V33Z" fill="white"/>\n  <path d="M21 39H15V45H21V39Z" fill="white"/>\n  <path d="M21 45H15V51H21V45Z" fill="white"/>\n  <path d="M21 51H15V57H21V51Z" fill="white"/>\n  <path d="M27 15H21V21H27V15Z" fill="white"/>\n  <path d="M27 51H21V57H27V51Z" fill="white"/>\n  <path d="M33 15H27V21H33V15Z" fill="white"/>\n  <path d="M33 51H27V57H33V51Z" fill="white"/>\n  <path d="M39 15H33V21H39V15Z" fill="white"/>\n  <path d="M39 51H33V57H39V51Z" fill="white"/>\n  <path d="M45 15H39V21H45V15Z" fill="white"/>\n  <path d="M45 51H39V57H45V51Z" fill="white"/>\n  <path d="M51 15H45V21H51V15Z" fill="white"/>\n  <path d="M51 51H45V57H51V51Z" fill="white"/>\n  <path d="M57 15H51V21H57V15Z" fill="white"/>\n  <path d="M57 21H51V27H57V21Z" fill="white"/>\n  <path d="M57 27H51V33H57V27Z" fill="white"/>\n  <path d="M57 33H51V39H57V33Z" fill="white"/>\n  <path d="M57 39H51V45H57V39Z" fill="white"/>\n  <path d="M57 45H51V51H57V45Z" fill="white"/>\n  <path d="M57 51H51V57H57V51Z" fill="white"/>\n  <path d="M33 27H27V33H33V27Z" fill="white"/>\n  <path d="M33 33H27V39H33V33Z" fill="white"/>\n  <path d="M33 39H27V45H33V39Z" fill="white"/>\n  <path d="M39 27H33V33H39V27Z" fill="white"/>\n  <path d="M39 33H33V39H39V33Z" fill="white"/>\n  <path d="M39 39H33V45H39V39Z" fill="white"/>\n  <path d="M45 27H39V33H45V27Z" fill="white"/>\n  <path d="M45 33H39V39H45V33Z" fill="white"/>\n  <path d="M45 39H39V45H45V39Z" fill="white"/>\n  <path d="M249 15H243V21H249V15Z" fill="white"/>\n  <path d="M249 21H243V27H249V21Z" fill="white"/>\n  <path d="M249 27H243V33H249V27Z" fill="white"/>\n  <path d="M249 33H243V39H249V33Z" fill="white"/>\n  <path d="M249 39H243V45H249V39Z" fill="white"/>\n  <path d="M249 45H243V51H249V45Z" fill="white"/>\n  <path d="M249 51H243V57H249V51Z" fill="white"/>\n  <path d="M255 15H249V21H255V15Z" fill="white"/>\n  <path d="M255 51H249V57H255V51Z" fill="white"/>\n  <path d="M261 15H255V21H261V15Z" fill="white"/>\n  <path d="M261 51H255V57H261V51Z" fill="white"/>\n  <path d="M267 15H261V21H267V15Z" fill="white"/>\n  <path d="M267 51H261V57H267V51Z" fill="white"/>\n  <path d="M273 15H267V21H273V15Z" fill="white"/>\n  <path d="M273 51H267V57H273V51Z" fill="white"/>\n  <path d="M279 15H273V21H279V15Z" fill="white"/>\n  <path d="M279 51H273V57H279V51Z" fill="white"/>\n  <path d="M285 15H279V21H285V15Z" fill="white"/>\n  <path d="M285 21H279V27H285V21Z" fill="white"/>\n  <path d="M285 27H279V33H285V27Z" fill="white"/>\n  <path d="M285 33H279V39H285V33Z" fill="white"/>\n  <path d="M285 39H279V45H285V39Z" fill="white"/>\n  <path d="M285 45H279V51H285V45Z" fill="white"/>\n  <path d="M285 51H279V57H285V51Z" fill="white"/>\n  <path d="M261 27H255V33H261V27Z" fill="white"/>\n  <path d="M261 33H255V39H261V33Z" fill="white"/>\n  <path d="M261 39H255V45H261V39Z" fill="white"/>\n  <path d="M267 27H261V33H267V27Z" fill="white"/>\n  <path d="M267 33H261V39H267V33Z" fill="white"/>\n  <path d="M267 39H261V45H267V39Z" fill="white"/>\n  <path d="M273 27H267V33H273V27Z" fill="white"/>\n  <path d="M273 33H267V39H273V33Z" fill="white"/>\n  <path d="M273 39H267V45H273V39Z" fill="white"/>\n  <path d="M21 243H15V249H21V243Z" fill="white"/>\n  <path d="M21 249H15V255H21V249Z" fill="white"/>\n  <path d="M21 255H15V261H21V255Z" fill="white"/>\n  <path d="M21 261H15V267H21V261Z" fill="white"/>\n  <path d="M21 267H15V273H21V267Z" fill="white"/>\n  <path d="M21 273H15V279H21V273Z" fill="white"/>\n  <path d="M21 279H15V285H21V279Z" fill="white"/>\n  <path d="M27 243H21V249H27V243Z" fill="white"/>\n  <path d="M27 279H21V285H27V279Z" fill="white"/>\n  <path d="M33 243H27V249H33V243Z" fill="white"/>\n  <path d="M33 279H27V285H33V279Z" fill="white"/>\n  <path d="M39 243H33V249H39V243Z" fill="white"/>\n  <path d="M39 279H33V285H39V279Z" fill="white"/>\n  <path d="M45 243H39V249H45V243Z" fill="white"/>\n  <path d="M45 279H39V285H45V279Z" fill="white"/>\n  <path d="M51 243H45V249H51V243Z" fill="white"/>\n  <path d="M51 279H45V285H51V279Z" fill="white"/>\n  <path d="M57 243H51V249H57V243Z" fill="white"/>\n  <path d="M57 249H51V255H57V249Z" fill="white"/>\n  <path d="M57 255H51V261H57V255Z" fill="white"/>\n  <path d="M57 261H51V267H57V261Z" fill="white"/>\n  <path d="M57 267H51V273H57V267Z" fill="white"/>\n  <path d="M57 273H51V279H57V273Z" fill="white"/>\n  <path d="M57 279H51V285H57V279Z" fill="white"/>\n  <path d="M33 255H27V261H33V255Z" fill="white"/>\n  <path d="M33 261H27V267H33V261Z" fill="white"/>\n  <path d="M33 267H27V273H33V267Z" fill="white"/>\n  <path d="M39 255H33V261H39V255Z" fill="white"/>\n  <path d="M39 261H33V267H39V261Z" fill="white"/>\n  <path d="M39 267H33V273H39V267Z" fill="white"/>\n  <path d="M45 255H39V261H45V255Z" fill="white"/>\n  <path d="M45 261H39V267H45V261Z" fill="white"/>\n  <path d="M45 267H39V273H45V267Z" fill="white"/>\n  </mask>\n  <g mask="url(#mask0_1_2)">\n  <path d="M300 0H0V300H300V0Z" fill="white"/>\n  </g>\n  <path d="M183.981 148.919C183.421 131.001 169 116.578 151.086 116.018V116H150.005H148.924V116.018C131.009 116.578 116.589 131.001 116.029 148.919H116V151.082H116.029C116.146 154.828 116.868 158.421 118.102 161.768L118.073 161.78L118.899 163.778L118.917 163.77C124.063 175.376 135.514 183.562 148.925 183.982V184H151.087V183.982C169.002 183.422 183.422 169 183.982 151.081H184V148.918H183.982L183.981 148.919ZM174.237 148.919C174.098 146.407 173.576 143.996 172.73 141.744L179.745 138.626C181.005 141.917 181.7 145.37 181.818 148.919H174.237V148.919ZM160.285 172.282C162.586 171.204 164.69 169.776 166.528 168.067L171.73 173.269C169.066 175.76 166.033 177.753 162.696 179.206L160.285 172.282ZM136.267 178.73C133.338 177.327 130.658 175.494 128.275 173.264L133.476 168.061C135.139 169.61 137.02 170.927 139.068 171.963L136.267 178.73V178.73ZM139.265 128.513C137.263 129.502 135.417 130.759 133.774 132.238L128.275 126.737C130.658 124.507 133.338 122.674 136.267 121.271L139.265 128.513V128.513ZM162.61 120.758C165.982 122.213 169.044 124.22 171.729 126.732L166.228 132.234C164.282 130.483 162.054 129.045 159.617 127.993L162.609 120.759L162.61 120.758ZM167.77 133.749L173.258 128.261C175.585 130.747 177.479 133.556 178.903 136.635L171.879 139.756C170.814 137.547 169.423 135.525 167.77 133.749ZM158.61 129.91C160.846 130.856 162.889 132.152 164.699 133.765L160.259 138.205C157.769 136.038 154.586 134.647 151.086 134.408V128.199C153.69 128.323 156.216 128.898 158.61 129.91ZM159.529 159.532C156.984 162.076 153.602 163.478 150.004 163.478C146.405 163.478 143.023 162.076 140.479 159.532C137.935 156.987 136.534 153.604 136.534 150.005C136.534 146.406 137.935 143.023 140.479 140.478C143.023 137.933 146.405 136.532 150.004 136.532C153.602 136.532 156.984 137.933 159.529 140.478C162.073 143.023 163.474 146.406 163.474 150.005C163.474 153.604 162.073 156.987 159.529 159.532ZM148.923 134.408C145.421 134.647 142.235 136.039 139.744 138.209L135.305 133.769C137.115 132.153 139.16 130.856 141.399 129.909C143.793 128.896 146.32 128.322 148.923 128.198V134.407V134.408ZM132.233 133.755C130.525 135.591 129.097 137.692 128.02 139.99L120.96 136.948C122.399 133.748 124.341 130.836 126.745 128.266L132.233 133.755V133.755ZM129.631 141.68C130.631 139.316 132.019 137.169 133.762 135.285L138.216 139.739C136.045 142.231 134.651 145.417 134.411 148.921H127.937C128.089 146.418 128.655 143.987 129.631 141.681V141.68ZM134.41 151.082C134.649 154.587 136.041 157.774 138.211 160.267L133.49 164.989C131.874 163.178 130.578 161.133 129.631 158.894C128.582 156.411 128.004 153.787 127.91 151.082H134.411H134.41ZM135.004 166.532L139.74 161.795C142.232 163.967 145.419 165.361 148.923 165.601V172.374C146.319 172.25 143.793 171.675 141.399 170.662C139.035 169.662 136.888 168.274 135.004 166.531V166.532ZM151.085 165.601C154.587 165.362 157.771 163.969 160.263 161.801L164.998 166.537C163.115 168.278 160.971 169.665 158.609 170.664C156.215 171.677 153.689 172.251 151.085 172.375V165.602V165.601ZM168.044 166.525C169.649 164.742 170.994 162.721 172.017 160.52L178.883 163.405C177.461 166.468 175.574 169.264 173.257 171.739L168.044 166.525V166.525ZM170.376 158.893C169.428 161.134 168.13 163.18 166.513 164.993L161.792 160.271C163.966 157.777 165.36 154.588 165.598 151.081H172.098C172.003 153.785 171.427 156.41 170.378 158.893H170.376ZM165.597 148.918C165.357 145.412 163.961 142.224 161.788 139.731L166.24 135.278C167.986 137.164 169.376 139.313 170.376 141.679C171.352 143.986 171.919 146.416 172.07 148.918H165.597ZM160.598 119.969L157.597 127.224C155.535 126.545 153.351 126.135 151.086 126.036V118.183C154.355 118.291 157.543 118.89 160.598 119.97V119.969ZM148.924 126.036C146.226 126.154 143.643 126.713 141.244 127.641L138.248 120.404C141.654 119.049 145.237 118.304 148.924 118.182V126.036ZM120.143 138.951L127.19 141.986C126.397 144.169 125.907 146.497 125.772 148.921H118.193C118.307 145.488 118.961 142.144 120.143 138.952V138.951ZM118.193 151.082H125.747C125.826 153.525 126.264 155.876 127.013 158.085L120.102 160.941C118.944 157.781 118.306 154.475 118.193 151.081V151.082ZM127.8 160.1C128.845 162.462 130.255 164.627 131.959 166.521L126.746 171.735C124.315 169.137 122.358 166.187 120.915 162.946L127.8 160.1V160.1ZM138.248 179.597L141.04 172.853C143.496 173.83 146.149 174.416 148.924 174.538V181.819C145.237 181.697 141.654 180.952 138.248 179.597V179.597ZM151.086 174.538C153.604 174.428 156.023 173.934 158.286 173.113L160.684 180.002C157.604 181.1 154.387 181.71 151.086 181.819V174.538ZM179.728 161.416L172.843 158.522C173.685 156.188 174.178 153.687 174.262 151.083H181.818C181.7 154.646 180.999 158.113 179.729 161.416H179.728Z" fill="white"/>\n  </g>\n  <defs>\n  <clipPath id="clip0_1_2">\n  <rect width="300" height="300" fill="white"/>\n  </clipPath>\n  </defs>\n  </svg>',aspectRatio1_1:()=>' <svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path fill="currentColor" d="M24,24H0V0h24V24z M2,22h20V2H2V22z" />\n</svg>',aspectRatio16_9:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path fill="currentColor" d="M24,24H0V11h24V24z M2,22h20v-9H2V22z" />\n</svg>',aspectRatio2_3:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path\n    fill="currentColor"\n    d="M20.3,24H4.8V0h15.6V24z M6.8,22h11.6V2H6.8V22z"\n  />\n</svg>',aspectRatio3_2:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path fill="currentColor" d="M24,24H0V9h24V24z M2,22h20V11H2V22z" />\n</svg>',aspectRatio3_4:()=>' <svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path fill="currentColor" d="M21,24H3V0h18V24z M5,22h14V2H5V22z" />\n</svg>',aspectRatio4_3:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path fill="currentColor" d="M24,24H0V6h24V24z M2,22h20V8H2V22z" />\n</svg>',aspectRatio4_5:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path\n    fill="currentColor"\n    d="M23.5,24h-23V0h23V24z M2.5,22h19V2h-19V22z"\n  />\n</svg>',aspectRatio5_4:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="26"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path fill="currentColor" d="M24,25H0V2h24V25z M2,23h20V4H2V23z" />\n</svg>',aspectRatio9_16:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path fill="currentColor" d="M19,24H6V0h13V24z M8,22h9V2H8V22z" />\n</svg>',aspectRatioAll:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path\n    d="M23 1V23H8.01008H1V1L23 1Z"\n    stroke="currentColor"\n    stroke-width="2"\n  />\n  <path\n    d="M19 1V23H9.34006H5L5 1L19 1Z"\n    stroke="currentColor"\n    stroke-width="2"\n  />\n  <path\n    d="M23 6V18H8.01008H1V6L23 6Z"\n    stroke="currentColor"\n    stroke-width="2"\n  />\n</svg>',backArrow:()=>'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    fill="currentColor"\n    width="24" height="24"\n    viewBox="0 0 24 24">\n    <polygon points="21,11 5.4,11 11.7,4.7 10.3,3.3 1.6,12 10.3,20.7 11.7,19.3 5.4,13 21,13 " />\n  </svg>\n    ',checkmark:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <path\n    d="M2.5 11.5L9.5 18.5L21.5 6.5"\n    stroke="currentColor"\n    stroke-width="2"\n  />\n</svg>',close:()=>'<svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5321 4.6837L11.9989 11.1851L5.46671 4.6837L4 6.14452L10.5312 12.6469L4 19.1473L5.46671 20.6081L11.9989 14.1078L18.5321 20.6081L19.9999 19.1473L13.4677 12.6469L19.9999 6.14452L18.5321 4.6837Z" fill="currentColor"/>\n  </svg>\n  ',comments:()=>'<svg\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="currentColor"\n  xmlns="http://www.w3.org/2000/svg">\n  <path fillRule="evenodd" clip-rule="evenodd" d="M17 11H7V9H17V11Z" />\n  <path fillRule="evenodd" clip-rule="evenodd" d="M14 15H7V13H14V15Z" />\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H12ZM1 12C1 18.0751 5.92487 23 12 23H23V12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12Z"\n  />\n</svg>',copy:()=>' <svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="currentColor">\n  <path\n    d="M21,7h-4V3c0-1.1-0.9-2-2-2H3C1.9,1,1,1.9,1,3v12c0,1.1,0.9,2,2,2h4v4c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V9\nC23,7.9,22.1,7,21,7z M3,13.6l0-3.2L10.4,3h3.2L3,13.6z M3,3h4.6L3,7.6L3,3L3,3z M4.4,15L15,4.4v3.2L7.6,15H4.4z M15,10.4V15h-4.6\nL15,10.4z M21,21H9v-4h6c1.1,0,2-0.9,2-2V9h4V21z"\n  />\n</svg>\n    ',delete:()=>'  <svg\n  version="1.1"\n  xmlns="http://www.w3.org/2000/svg"\n  width="100%"\n  height="100%"\n  viewBox="0 0 16 16"\n  fill="currentColor">\n  <path\n    d="M9.3,2V1.3C9.3,1,9,0.7,8.7,0.7H7.3C7,0.7,6.7,1,6.7,1.3V2H1.3v1.3h1.4l0.6,9.5c0.1,1.1,0.9,1.9,2,1.9h5.5\n    c1.1,0,1.9-0.8,2-1.9l0.6-9.5h1.4V2H9.3z M11.4,12.7c0,0.4-0.3,0.6-0.7,0.6H5.3c-0.4,0-0.6-0.3-0.7-0.6L4,3.3H12L11.4,12.7z"\n  />\n</svg>',ellipses:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  width="24" height="24"\n  fill="currentColor">\n  <circle cx="5" cy="12" r="2" />\n  <circle cx="12" cy="12" r="2" />\n  <circle cx="19" cy="12" r="2" />\n</svg>',explore:()=>'<svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11C0 4.92525 4.92525 0 11 0C17.0747 0 22 4.92525 22 11C22 17.0747 17.0747 22 11 22C4.92525 22 0 17.0747 0 11ZM11.7218 19.9713C11.4837 19.9903 11.243 20 11 20C10.757 20 10.5163 19.9903 10.2782 19.9713C9.51921 19.2472 8.89448 17.4093 8.56135 15H13.4387C13.1055 17.4093 12.4808 19.2472 11.7218 19.9713ZM13.6375 13H8.36248C8.32156 12.3558 8.3 11.6866 8.3 11C8.3 10.3134 8.32156 9.64423 8.36248 9H13.6375C13.6784 9.64423 13.7 10.3134 13.7 11C13.7 11.6866 13.6784 12.3558 13.6375 13ZM15.2764 15C15.0641 16.7413 14.698 18.2548 14.1674 19.4247C16.3017 18.6196 18.0522 17.0256 19.0613 15H15.2764ZM19.776 13H15.4484C15.4829 12.3534 15.5 11.6852 15.5 11C15.5 10.3148 15.4829 9.64658 15.4484 9H19.776C19.9226 9.64342 20 10.3128 20 11C20 11.6872 19.9226 12.3566 19.776 13ZM6.55159 13C6.51705 12.3534 6.5 11.6852 6.5 11C6.5 10.3148 6.51705 9.64658 6.55159 9H2.22397C2.07741 9.64342 2 10.3128 2 11C2 11.6872 2.07741 12.3566 2.22397 13H6.55159ZM2.93868 15C3.94784 17.0256 5.69834 18.6196 7.83263 19.4247C7.30199 18.2548 6.9359 16.7413 6.72358 15H2.93868ZM10.2782 2.02866C9.51921 2.75278 8.89448 4.59072 8.56135 7H13.4387C13.1055 4.59072 12.4808 2.75278 11.7218 2.02866C11.4837 2.00968 11.243 2 11 2C10.757 2 10.5163 2.00968 10.2782 2.02866ZM15.2764 7H19.0613C18.0522 4.97444 16.3017 3.38036 14.1674 2.57531C14.698 3.74519 15.0641 5.25873 15.2764 7ZM2.93868 7H6.72358C6.9359 5.25873 7.30199 3.74519 7.83263 2.57531C5.69834 3.38036 3.94784 4.97444 2.93868 7Z" fill="currentColor"/>\n  </svg>\n  ',external:()=>'<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4.07056 12.5564L12.5558 4.07112M12.5558 4.07112L5.01337 4.07112M12.5558 4.07112L12.5558 11.6136" stroke="currentColor" stroke-width="2"/>\n  </svg>\n  ',failed:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none">\n  <rect\n    x="3"\n    y="3"\n    width="18"\n    height="18"\n    rx="1"\n    stroke="red"\n    stroke-width="2"\n  />\n  <path d="M21 3L3 21M3 3L21 21" stroke="red" stroke-width="2" />\n</svg>',fullGrid:()=>'<svg width="24" height="24" viewBox="0 0 24 24" fill="none">\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M16 8H8L8 16H16V8ZM8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H16C17.1046 18 18 17.1046 18 16V8C18 6.89543 17.1046 6 16 6H8Z"\n    fill="currentColor"\n  />\n</svg>',gear:()=>'<svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H12V2.05493C13.7359 2.24682 15.3229 2.93238 16.6177 3.9681L18.0711 2.51472L19.4853 3.92893L18.0319 5.38231C19.0676 6.67708 19.7532 8.26415 19.9451 10H22V12H19.9451C19.7532 13.7359 19.0676 15.3229 18.0319 16.6177L19.4853 18.0711L18.0711 19.4853L16.6177 18.0319C15.3229 19.0676 13.7359 19.7532 12 19.9451V22H10V19.9451C8.26415 19.7532 6.67708 19.0676 5.38231 18.0319L3.92893 19.4853L2.51472 18.0711L3.9681 16.6177C2.93238 15.3229 2.24682 13.7359 2.05493 12H0V10H2.05493C2.24682 8.26415 2.93238 6.67708 3.9681 5.38231L2.51472 3.92893L3.92893 2.51472L5.38231 3.9681C6.67708 2.93238 8.26415 2.24682 10 2.05493V0ZM18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11Z" fill="currentColor"/>\n  </svg>\n  ',googleUpgradeQR:()=>'<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">\n<defs>\n    <clipPath id="clip-path-dot-color">\n        <rect x="2" y="82" width="8" height="8" transform="rotate(0,6,86)" />\n        <rect x="2" y="90" width="8" height="8" transform="rotate(0,6,94)" />\n        <rect x="2" y="98" width="8" height="8" transform="rotate(0,6,102)" />\n        <rect x="2" y="106" width="8" height="8" transform="rotate(0,6,110)" />\n        <rect x="2" y="114" width="8" height="8" transform="rotate(0,6,118)" />\n        <rect x="2" y="130" width="8" height="8" transform="rotate(0,6,134)" />\n        <rect x="2" y="138" width="8" height="8" transform="rotate(0,6,142)" />\n        <rect x="2" y="146" width="8" height="8" transform="rotate(0,6,150)" />\n        <rect x="2" y="154" width="8" height="8" transform="rotate(0,6,158)" />\n        <rect x="2" y="170" width="8" height="8" transform="rotate(0,6,174)" />\n        <rect x="2" y="178" width="8" height="8" transform="rotate(0,6,182)" />\n        <rect x="2" y="194" width="8" height="8" transform="rotate(0,6,198)" />\n        <rect x="2" y="202" width="8" height="8" transform="rotate(0,6,206)" />\n        <rect x="2" y="210" width="8" height="8" transform="rotate(0,6,214)" />\n        <rect x="2" y="218" width="8" height="8" transform="rotate(0,6,222)" />\n        <rect x="2" y="226" width="8" height="8" transform="rotate(0,6,230)" />\n        <rect x="10" y="74" width="8" height="8" transform="rotate(0,14,78)" />\n        <rect x="10" y="82" width="8" height="8" transform="rotate(0,14,86)" />\n        <rect x="10" y="90" width="8" height="8" transform="rotate(0,14,94)" />\n        <rect x="10" y="98" width="8" height="8" transform="rotate(0,14,102)" />\n        <rect x="10" y="138" width="8" height="8" transform="rotate(0,14,142)" />\n        <rect x="10" y="146" width="8" height="8" transform="rotate(0,14,150)" />\n        <rect x="10" y="154" width="8" height="8" transform="rotate(0,14,158)" />\n        <rect x="10" y="162" width="8" height="8" transform="rotate(0,14,166)" />\n        <rect x="10" y="202" width="8" height="8" transform="rotate(0,14,206)" />\n        <rect x="10" y="226" width="8" height="8" transform="rotate(0,14,230)" />\n        <rect x="18" y="66" width="8" height="8" transform="rotate(0,22,70)" />\n        <rect x="18" y="74" width="8" height="8" transform="rotate(0,22,78)" />\n        <rect x="18" y="82" width="8" height="8" transform="rotate(0,22,86)" />\n        <rect x="18" y="90" width="8" height="8" transform="rotate(0,22,94)" />\n        <rect x="18" y="98" width="8" height="8" transform="rotate(0,22,102)" />\n        <rect x="18" y="106" width="8" height="8" transform="rotate(0,22,110)" />\n        <rect x="18" y="114" width="8" height="8" transform="rotate(0,22,118)" />\n        <rect x="18" y="122" width="8" height="8" transform="rotate(0,22,126)" />\n        <rect x="18" y="130" width="8" height="8" transform="rotate(0,22,134)" />\n        <rect x="18" y="138" width="8" height="8" transform="rotate(0,22,142)" />\n        <rect x="18" y="154" width="8" height="8" transform="rotate(0,22,158)" />\n        <rect x="18" y="170" width="8" height="8" transform="rotate(0,22,174)" />\n        <rect x="18" y="186" width="8" height="8" transform="rotate(0,22,190)" />\n        <rect x="26" y="82" width="8" height="8" transform="rotate(0,30,86)" />\n        <rect x="26" y="90" width="8" height="8" transform="rotate(0,30,94)" />\n        <rect x="26" y="106" width="8" height="8" transform="rotate(0,30,110)" />\n        <rect x="26" y="122" width="8" height="8" transform="rotate(0,30,126)" />\n        <rect x="26" y="130" width="8" height="8" transform="rotate(0,30,134)" />\n        <rect x="26" y="138" width="8" height="8" transform="rotate(0,30,142)" />\n        <rect x="26" y="162" width="8" height="8" transform="rotate(0,30,166)" />\n        <rect x="26" y="178" width="8" height="8" transform="rotate(0,30,182)" />\n        <rect x="26" y="186" width="8" height="8" transform="rotate(0,30,190)" />\n        <rect x="26" y="194" width="8" height="8" transform="rotate(0,30,198)" />\n        <rect x="26" y="202" width="8" height="8" transform="rotate(0,30,206)" />\n        <rect x="26" y="226" width="8" height="8" transform="rotate(0,30,230)" />\n        <rect x="34" y="66" width="8" height="8" transform="rotate(0,38,70)" />\n        <rect x="34" y="74" width="8" height="8" transform="rotate(0,38,78)" />\n        <rect x="34" y="90" width="8" height="8" transform="rotate(0,38,94)" />\n        <rect x="34" y="106" width="8" height="8" transform="rotate(0,38,110)" />\n        <rect x="34" y="170" width="8" height="8" transform="rotate(0,38,174)" />\n        <rect x="34" y="186" width="8" height="8" transform="rotate(0,38,190)" />\n        <rect x="34" y="202" width="8" height="8" transform="rotate(0,38,206)" />\n        <rect x="34" y="210" width="8" height="8" transform="rotate(0,38,214)" />\n        <rect x="34" y="218" width="8" height="8" transform="rotate(0,38,222)" />\n        <rect x="42" y="66" width="8" height="8" transform="rotate(0,46,70)" />\n        <rect x="42" y="74" width="8" height="8" transform="rotate(0,46,78)" />\n        <rect x="42" y="90" width="8" height="8" transform="rotate(0,46,94)" />\n        <rect x="42" y="106" width="8" height="8" transform="rotate(0,46,110)" />\n        <rect x="42" y="114" width="8" height="8" transform="rotate(0,46,118)" />\n        <rect x="42" y="130" width="8" height="8" transform="rotate(0,46,134)" />\n        <rect x="42" y="138" width="8" height="8" transform="rotate(0,46,142)" />\n        <rect x="42" y="146" width="8" height="8" transform="rotate(0,46,150)" />\n        <rect x="42" y="154" width="8" height="8" transform="rotate(0,46,158)" />\n        <rect x="42" y="170" width="8" height="8" transform="rotate(0,46,174)" />\n        <rect x="42" y="178" width="8" height="8" transform="rotate(0,46,182)" />\n        <rect x="42" y="194" width="8" height="8" transform="rotate(0,46,198)" />\n        <rect x="42" y="202" width="8" height="8" transform="rotate(0,46,206)" />\n        <rect x="42" y="210" width="8" height="8" transform="rotate(0,46,214)" />\n        <rect x="42" y="226" width="8" height="8" transform="rotate(0,46,230)" />\n        <rect x="50" y="66" width="8" height="8" transform="rotate(0,54,70)" />\n        <rect x="50" y="82" width="8" height="8" transform="rotate(0,54,86)" />\n        <rect x="50" y="98" width="8" height="8" transform="rotate(0,54,102)" />\n        <rect x="50" y="114" width="8" height="8" transform="rotate(0,54,118)" />\n        <rect x="50" y="130" width="8" height="8" transform="rotate(0,54,134)" />\n        <rect x="50" y="146" width="8" height="8" transform="rotate(0,54,150)" />\n        <rect x="50" y="162" width="8" height="8" transform="rotate(0,54,166)" />\n        <rect x="50" y="178" width="8" height="8" transform="rotate(0,54,182)" />\n        <rect x="50" y="194" width="8" height="8" transform="rotate(0,54,198)" />\n        <rect x="50" y="210" width="8" height="8" transform="rotate(0,54,214)" />\n        <rect x="50" y="226" width="8" height="8" transform="rotate(0,54,230)" />\n        <rect x="58" y="82" width="8" height="8" transform="rotate(0,62,86)" />\n        <rect x="58" y="90" width="8" height="8" transform="rotate(0,62,94)" />\n        <rect x="58" y="98" width="8" height="8" transform="rotate(0,62,102)" />\n        <rect x="58" y="138" width="8" height="8" transform="rotate(0,62,142)" />\n        <rect x="58" y="146" width="8" height="8" transform="rotate(0,62,150)" />\n        <rect x="58" y="154" width="8" height="8" transform="rotate(0,62,158)" />\n        <rect x="58" y="170" width="8" height="8" transform="rotate(0,62,174)" />\n        <rect x="58" y="210" width="8" height="8" transform="rotate(0,62,214)" />\n        <rect x="66" y="10" width="8" height="8" transform="rotate(0,70,14)" />\n        <rect x="66" y="34" width="8" height="8" transform="rotate(0,70,38)" />\n        <rect x="66" y="50" width="8" height="8" transform="rotate(0,70,54)" />\n        <rect x="66" y="66" width="8" height="8" transform="rotate(0,70,70)" />\n        <rect x="66" y="74" width="8" height="8" transform="rotate(0,70,78)" />\n        <rect x="66" y="82" width="8" height="8" transform="rotate(0,70,86)" />\n        <rect x="66" y="90" width="8" height="8" transform="rotate(0,70,94)" />\n        <rect x="66" y="98" width="8" height="8" transform="rotate(0,70,102)" />\n        <rect x="66" y="106" width="8" height="8" transform="rotate(0,70,110)" />\n        <rect x="66" y="122" width="8" height="8" transform="rotate(0,70,126)" />\n        <rect x="66" y="130" width="8" height="8" transform="rotate(0,70,134)" />\n        <rect x="66" y="146" width="8" height="8" transform="rotate(0,70,150)" />\n        <rect x="66" y="162" width="8" height="8" transform="rotate(0,70,166)" />\n        <rect x="66" y="170" width="8" height="8" transform="rotate(0,70,174)" />\n        <rect x="66" y="178" width="8" height="8" transform="rotate(0,70,182)" />\n        <rect x="66" y="194" width="8" height="8" transform="rotate(0,70,198)" />\n        <rect x="66" y="202" width="8" height="8" transform="rotate(0,70,206)" />\n        <rect x="66" y="210" width="8" height="8" transform="rotate(0,70,214)" />\n        <rect x="66" y="218" width="8" height="8" transform="rotate(0,70,222)" />\n        <rect x="66" y="234" width="8" height="8" transform="rotate(0,70,238)" />\n        <rect x="66" y="250" width="8" height="8" transform="rotate(0,70,254)" />\n        <rect x="66" y="258" width="8" height="8" transform="rotate(0,70,262)" />\n        <rect x="66" y="274" width="8" height="8" transform="rotate(0,70,278)" />\n        <rect x="74" y="18" width="8" height="8" transform="rotate(0,78,22)" />\n        <rect x="74" y="26" width="8" height="8" transform="rotate(0,78,30)" />\n        <rect x="74" y="34" width="8" height="8" transform="rotate(0,78,38)" />\n        <rect x="74" y="42" width="8" height="8" transform="rotate(0,78,46)" />\n        <rect x="74" y="66" width="8" height="8" transform="rotate(0,78,70)" />\n        <rect x="74" y="82" width="8" height="8" transform="rotate(0,78,86)" />\n        <rect x="74" y="106" width="8" height="8" transform="rotate(0,78,110)" />\n        <rect x="74" y="114" width="8" height="8" transform="rotate(0,78,118)" />\n        <rect x="74" y="122" width="8" height="8" transform="rotate(0,78,126)" />\n        <rect x="74" y="162" width="8" height="8" transform="rotate(0,78,166)" />\n        <rect x="74" y="178" width="8" height="8" transform="rotate(0,78,182)" />\n        <rect x="74" y="186" width="8" height="8" transform="rotate(0,78,190)" />\n        <rect x="74" y="226" width="8" height="8" transform="rotate(0,78,230)" />\n        <rect x="74" y="258" width="8" height="8" transform="rotate(0,78,262)" />\n        <rect x="82" y="10" width="8" height="8" transform="rotate(0,86,14)" />\n        <rect x="82" y="26" width="8" height="8" transform="rotate(0,86,30)" />\n        <rect x="82" y="34" width="8" height="8" transform="rotate(0,86,38)" />\n        <rect x="82" y="50" width="8" height="8" transform="rotate(0,86,54)" />\n        <rect x="82" y="74" width="8" height="8" transform="rotate(0,86,78)" />\n        <rect x="82" y="82" width="8" height="8" transform="rotate(0,86,86)" />\n        <rect x="82" y="98" width="8" height="8" transform="rotate(0,86,102)" />\n        <rect x="82" y="106" width="8" height="8" transform="rotate(0,86,110)" />\n        <rect x="82" y="122" width="8" height="8" transform="rotate(0,86,126)" />\n        <rect x="82" y="138" width="8" height="8" transform="rotate(0,86,142)" />\n        <rect x="82" y="146" width="8" height="8" transform="rotate(0,86,150)" />\n        <rect x="82" y="154" width="8" height="8" transform="rotate(0,86,158)" />\n        <rect x="82" y="178" width="8" height="8" transform="rotate(0,86,182)" />\n        <rect x="82" y="186" width="8" height="8" transform="rotate(0,86,190)" />\n        <rect x="82" y="202" width="8" height="8" transform="rotate(0,86,206)" />\n        <rect x="82" y="210" width="8" height="8" transform="rotate(0,86,214)" />\n        <rect x="82" y="226" width="8" height="8" transform="rotate(0,86,230)" />\n        <rect x="82" y="234" width="8" height="8" transform="rotate(0,86,238)" />\n        <rect x="82" y="250" width="8" height="8" transform="rotate(0,86,254)" />\n        <rect x="82" y="258" width="8" height="8" transform="rotate(0,86,262)" />\n        <rect x="82" y="266" width="8" height="8" transform="rotate(0,86,270)" />\n        <rect x="82" y="274" width="8" height="8" transform="rotate(0,86,278)" />\n        <rect x="90" y="26" width="8" height="8" transform="rotate(0,94,30)" />\n        <rect x="90" y="66" width="8" height="8" transform="rotate(0,94,70)" />\n        <rect x="90" y="106" width="8" height="8" transform="rotate(0,94,110)" />\n        <rect x="90" y="114" width="8" height="8" transform="rotate(0,94,118)" />\n        <rect x="90" y="162" width="8" height="8" transform="rotate(0,94,166)" />\n        <rect x="90" y="170" width="8" height="8" transform="rotate(0,94,174)" />\n        <rect x="90" y="186" width="8" height="8" transform="rotate(0,94,190)" />\n        <rect x="90" y="194" width="8" height="8" transform="rotate(0,94,198)" />\n        <rect x="90" y="210" width="8" height="8" transform="rotate(0,94,214)" />\n        <rect x="90" y="234" width="8" height="8" transform="rotate(0,94,238)" />\n        <rect x="90" y="250" width="8" height="8" transform="rotate(0,94,254)" />\n        <rect x="90" y="258" width="8" height="8" transform="rotate(0,94,262)" />\n        <rect x="90" y="274" width="8" height="8" transform="rotate(0,94,278)" />\n        <rect x="90" y="290" width="8" height="8" transform="rotate(0,94,294)" />\n        <rect x="98" y="10" width="8" height="8" transform="rotate(0,102,14)" />\n        <rect x="98" y="18" width="8" height="8" transform="rotate(0,102,22)" />\n        <rect x="98" y="26" width="8" height="8" transform="rotate(0,102,30)" />\n        <rect x="98" y="50" width="8" height="8" transform="rotate(0,102,54)" />\n        <rect x="98" y="74" width="8" height="8" transform="rotate(0,102,78)" />\n        <rect x="98" y="82" width="8" height="8" transform="rotate(0,102,86)" />\n        <rect x="98" y="90" width="8" height="8" transform="rotate(0,102,94)" />\n        <rect x="98" y="98" width="8" height="8" transform="rotate(0,102,102)" />\n        <rect x="98" y="106" width="8" height="8" transform="rotate(0,102,110)" />\n        <rect x="98" y="122" width="8" height="8" transform="rotate(0,102,126)" />\n        <rect x="98" y="130" width="8" height="8" transform="rotate(0,102,134)" />\n        <rect x="98" y="146" width="8" height="8" transform="rotate(0,102,150)" />\n        <rect x="98" y="170" width="8" height="8" transform="rotate(0,102,174)" />\n        <rect x="98" y="178" width="8" height="8" transform="rotate(0,102,182)" />\n        <rect x="98" y="218" width="8" height="8" transform="rotate(0,102,222)" />\n        <rect x="98" y="226" width="8" height="8" transform="rotate(0,102,230)" />\n        <rect x="98" y="234" width="8" height="8" transform="rotate(0,102,238)" />\n        <rect x="98" y="242" width="8" height="8" transform="rotate(0,102,246)" />\n        <rect x="98" y="250" width="8" height="8" transform="rotate(0,102,254)" />\n        <rect x="98" y="266" width="8" height="8" transform="rotate(0,102,270)" />\n        <rect x="98" y="274" width="8" height="8" transform="rotate(0,102,278)" />\n        <rect x="98" y="282" width="8" height="8" transform="rotate(0,102,286)" />\n        <rect x="106" y="2" width="8" height="8" transform="rotate(0,110,6)" />\n        <rect x="106" y="18" width="8" height="8" transform="rotate(0,110,22)" />\n        <rect x="106" y="42" width="8" height="8" transform="rotate(0,110,46)" />\n        <rect x="106" y="58" width="8" height="8" transform="rotate(0,110,62)" />\n        <rect x="106" y="82" width="8" height="8" transform="rotate(0,110,86)" />\n        <rect x="106" y="98" width="8" height="8" transform="rotate(0,110,102)" />\n        <rect x="106" y="218" width="8" height="8" transform="rotate(0,110,222)" />\n        <rect x="106" y="226" width="8" height="8" transform="rotate(0,110,230)" />\n        <rect x="106" y="234" width="8" height="8" transform="rotate(0,110,238)" />\n        <rect x="106" y="258" width="8" height="8" transform="rotate(0,110,262)" />\n        <rect x="106" y="274" width="8" height="8" transform="rotate(0,110,278)" />\n        <rect x="114" y="10" width="8" height="8" transform="rotate(0,118,14)" />\n        <rect x="114" y="18" width="8" height="8" transform="rotate(0,118,22)" />\n        <rect x="114" y="50" width="8" height="8" transform="rotate(0,118,54)" />\n        <rect x="114" y="58" width="8" height="8" transform="rotate(0,118,62)" />\n        <rect x="114" y="66" width="8" height="8" transform="rotate(0,118,70)" />\n        <rect x="114" y="74" width="8" height="8" transform="rotate(0,118,78)" />\n        <rect x="114" y="82" width="8" height="8" transform="rotate(0,118,86)" />\n        <rect x="114" y="98" width="8" height="8" transform="rotate(0,118,102)" />\n        <rect x="114" y="194" width="8" height="8" transform="rotate(0,118,198)" />\n        <rect x="114" y="210" width="8" height="8" transform="rotate(0,118,214)" />\n        <rect x="114" y="218" width="8" height="8" transform="rotate(0,118,222)" />\n        <rect x="114" y="226" width="8" height="8" transform="rotate(0,118,230)" />\n        <rect x="114" y="250" width="8" height="8" transform="rotate(0,118,254)" />\n        <rect x="114" y="258" width="8" height="8" transform="rotate(0,118,262)" />\n        <rect x="114" y="266" width="8" height="8" transform="rotate(0,118,270)" />\n        <rect x="114" y="274" width="8" height="8" transform="rotate(0,118,278)" />\n        <rect x="122" y="10" width="8" height="8" transform="rotate(0,126,14)" />\n        <rect x="122" y="26" width="8" height="8" transform="rotate(0,126,30)" />\n        <rect x="122" y="42" width="8" height="8" transform="rotate(0,126,46)" />\n        <rect x="122" y="58" width="8" height="8" transform="rotate(0,126,62)" />\n        <rect x="122" y="66" width="8" height="8" transform="rotate(0,126,70)" />\n        <rect x="122" y="82" width="8" height="8" transform="rotate(0,126,86)" />\n        <rect x="122" y="90" width="8" height="8" transform="rotate(0,126,94)" />\n        <rect x="122" y="98" width="8" height="8" transform="rotate(0,126,102)" />\n        <rect x="122" y="210" width="8" height="8" transform="rotate(0,126,214)" />\n        <rect x="122" y="274" width="8" height="8" transform="rotate(0,126,278)" />\n        <rect x="122" y="290" width="8" height="8" transform="rotate(0,126,294)" />\n        <rect x="130" y="10" width="8" height="8" transform="rotate(0,134,14)" />\n        <rect x="130" y="18" width="8" height="8" transform="rotate(0,134,22)" />\n        <rect x="130" y="50" width="8" height="8" transform="rotate(0,134,54)" />\n        <rect x="130" y="66" width="8" height="8" transform="rotate(0,134,70)" />\n        <rect x="130" y="74" width="8" height="8" transform="rotate(0,134,78)" />\n        <rect x="130" y="90" width="8" height="8" transform="rotate(0,134,94)" />\n        <rect x="130" y="194" width="8" height="8" transform="rotate(0,134,198)" />\n        <rect x="130" y="210" width="8" height="8" transform="rotate(0,134,214)" />\n        <rect x="130" y="218" width="8" height="8" transform="rotate(0,134,222)" />\n        <rect x="130" y="242" width="8" height="8" transform="rotate(0,134,246)" />\n        <rect x="130" y="250" width="8" height="8" transform="rotate(0,134,254)" />\n        <rect x="130" y="266" width="8" height="8" transform="rotate(0,134,270)" />\n        <rect x="130" y="274" width="8" height="8" transform="rotate(0,134,278)" />\n        <rect x="130" y="282" width="8" height="8" transform="rotate(0,134,286)" />\n        <rect x="138" y="2" width="8" height="8" transform="rotate(0,142,6)" />\n        <rect x="138" y="10" width="8" height="8" transform="rotate(0,142,14)" />\n        <rect x="138" y="26" width="8" height="8" transform="rotate(0,142,30)" />\n        <rect x="138" y="34" width="8" height="8" transform="rotate(0,142,38)" />\n        <rect x="138" y="58" width="8" height="8" transform="rotate(0,142,62)" />\n        <rect x="138" y="210" width="8" height="8" transform="rotate(0,142,214)" />\n        <rect x="138" y="218" width="8" height="8" transform="rotate(0,142,222)" />\n        <rect x="138" y="226" width="8" height="8" transform="rotate(0,142,230)" />\n        <rect x="138" y="258" width="8" height="8" transform="rotate(0,142,262)" />\n        <rect x="138" y="266" width="8" height="8" transform="rotate(0,142,270)" />\n        <rect x="138" y="274" width="8" height="8" transform="rotate(0,142,278)" />\n        <rect x="146" y="26" width="8" height="8" transform="rotate(0,150,30)" />\n        <rect x="146" y="34" width="8" height="8" transform="rotate(0,150,38)" />\n        <rect x="146" y="42" width="8" height="8" transform="rotate(0,150,46)" />\n        <rect x="146" y="50" width="8" height="8" transform="rotate(0,150,54)" />\n        <rect x="146" y="90" width="8" height="8" transform="rotate(0,150,94)" />\n        <rect x="146" y="202" width="8" height="8" transform="rotate(0,150,206)" />\n        <rect x="146" y="210" width="8" height="8" transform="rotate(0,150,214)" />\n        <rect x="146" y="218" width="8" height="8" transform="rotate(0,150,222)" />\n        <rect x="146" y="242" width="8" height="8" transform="rotate(0,150,246)" />\n        <rect x="154" y="10" width="8" height="8" transform="rotate(0,158,14)" />\n        <rect x="154" y="34" width="8" height="8" transform="rotate(0,158,38)" />\n        <rect x="154" y="58" width="8" height="8" transform="rotate(0,158,62)" />\n        <rect x="154" y="66" width="8" height="8" transform="rotate(0,158,70)" />\n        <rect x="154" y="74" width="8" height="8" transform="rotate(0,158,78)" />\n        <rect x="154" y="90" width="8" height="8" transform="rotate(0,158,94)" />\n        <rect x="154" y="194" width="8" height="8" transform="rotate(0,158,198)" />\n        <rect x="154" y="210" width="8" height="8" transform="rotate(0,158,214)" />\n        <rect x="154" y="226" width="8" height="8" transform="rotate(0,158,230)" />\n        <rect x="154" y="242" width="8" height="8" transform="rotate(0,158,246)" />\n        <rect x="154" y="250" width="8" height="8" transform="rotate(0,158,254)" />\n        <rect x="154" y="258" width="8" height="8" transform="rotate(0,158,262)" />\n        <rect x="154" y="274" width="8" height="8" transform="rotate(0,158,278)" />\n        <rect x="154" y="290" width="8" height="8" transform="rotate(0,158,294)" />\n        <rect x="162" y="10" width="8" height="8" transform="rotate(0,166,14)" />\n        <rect x="162" y="18" width="8" height="8" transform="rotate(0,166,22)" />\n        <rect x="162" y="42" width="8" height="8" transform="rotate(0,166,46)" />\n        <rect x="162" y="50" width="8" height="8" transform="rotate(0,166,54)" />\n        <rect x="162" y="58" width="8" height="8" transform="rotate(0,166,62)" />\n        <rect x="162" y="66" width="8" height="8" transform="rotate(0,166,70)" />\n        <rect x="162" y="74" width="8" height="8" transform="rotate(0,166,78)" />\n        <rect x="162" y="82" width="8" height="8" transform="rotate(0,166,86)" />\n        <rect x="162" y="194" width="8" height="8" transform="rotate(0,166,198)" />\n        <rect x="162" y="234" width="8" height="8" transform="rotate(0,166,238)" />\n        <rect x="162" y="242" width="8" height="8" transform="rotate(0,166,246)" />\n        <rect x="162" y="274" width="8" height="8" transform="rotate(0,166,278)" />\n        <rect x="162" y="290" width="8" height="8" transform="rotate(0,166,294)" />\n        <rect x="170" y="42" width="8" height="8" transform="rotate(0,174,46)" />\n        <rect x="170" y="58" width="8" height="8" transform="rotate(0,174,62)" />\n        <rect x="170" y="66" width="8" height="8" transform="rotate(0,174,70)" />\n        <rect x="170" y="82" width="8" height="8" transform="rotate(0,174,86)" />\n        <rect x="170" y="98" width="8" height="8" transform="rotate(0,174,102)" />\n        <rect x="170" y="218" width="8" height="8" transform="rotate(0,174,222)" />\n        <rect x="170" y="234" width="8" height="8" transform="rotate(0,174,238)" />\n        <rect x="170" y="258" width="8" height="8" transform="rotate(0,174,262)" />\n        <rect x="170" y="282" width="8" height="8" transform="rotate(0,174,286)" />\n        <rect x="178" y="26" width="8" height="8" transform="rotate(0,182,30)" />\n        <rect x="178" y="42" width="8" height="8" transform="rotate(0,182,46)" />\n        <rect x="178" y="50" width="8" height="8" transform="rotate(0,182,54)" />\n        <rect x="178" y="98" width="8" height="8" transform="rotate(0,182,102)" />\n        <rect x="178" y="194" width="8" height="8" transform="rotate(0,182,198)" />\n        <rect x="178" y="202" width="8" height="8" transform="rotate(0,182,206)" />\n        <rect x="178" y="210" width="8" height="8" transform="rotate(0,182,214)" />\n        <rect x="178" y="218" width="8" height="8" transform="rotate(0,182,222)" />\n        <rect x="178" y="226" width="8" height="8" transform="rotate(0,182,230)" />\n        <rect x="178" y="242" width="8" height="8" transform="rotate(0,182,246)" />\n        <rect x="178" y="274" width="8" height="8" transform="rotate(0,182,278)" />\n        <rect x="186" y="2" width="8" height="8" transform="rotate(0,190,6)" />\n        <rect x="186" y="26" width="8" height="8" transform="rotate(0,190,30)" />\n        <rect x="186" y="42" width="8" height="8" transform="rotate(0,190,46)" />\n        <rect x="186" y="82" width="8" height="8" transform="rotate(0,190,86)" />\n        <rect x="186" y="90" width="8" height="8" transform="rotate(0,190,94)" />\n        <rect x="186" y="98" width="8" height="8" transform="rotate(0,190,102)" />\n        <rect x="186" y="194" width="8" height="8" transform="rotate(0,190,198)" />\n        <rect x="186" y="202" width="8" height="8" transform="rotate(0,190,206)" />\n        <rect x="186" y="226" width="8" height="8" transform="rotate(0,190,230)" />\n        <rect x="186" y="234" width="8" height="8" transform="rotate(0,190,238)" />\n        <rect x="186" y="242" width="8" height="8" transform="rotate(0,190,246)" />\n        <rect x="186" y="250" width="8" height="8" transform="rotate(0,190,254)" />\n        <rect x="186" y="274" width="8" height="8" transform="rotate(0,190,278)" />\n        <rect x="194" y="2" width="8" height="8" transform="rotate(0,198,6)" />\n        <rect x="194" y="10" width="8" height="8" transform="rotate(0,198,14)" />\n        <rect x="194" y="18" width="8" height="8" transform="rotate(0,198,22)" />\n        <rect x="194" y="50" width="8" height="8" transform="rotate(0,198,54)" />\n        <rect x="194" y="74" width="8" height="8" transform="rotate(0,198,78)" />\n        <rect x="194" y="82" width="8" height="8" transform="rotate(0,198,86)" />\n        <rect x="194" y="90" width="8" height="8" transform="rotate(0,198,94)" />\n        <rect x="194" y="122" width="8" height="8" transform="rotate(0,198,126)" />\n        <rect x="194" y="130" width="8" height="8" transform="rotate(0,198,134)" />\n        <rect x="194" y="162" width="8" height="8" transform="rotate(0,198,166)" />\n        <rect x="194" y="170" width="8" height="8" transform="rotate(0,198,174)" />\n        <rect x="194" y="178" width="8" height="8" transform="rotate(0,198,182)" />\n        <rect x="194" y="202" width="8" height="8" transform="rotate(0,198,206)" />\n        <rect x="194" y="218" width="8" height="8" transform="rotate(0,198,222)" />\n        <rect x="194" y="234" width="8" height="8" transform="rotate(0,198,238)" />\n        <rect x="194" y="242" width="8" height="8" transform="rotate(0,198,246)" />\n        <rect x="194" y="250" width="8" height="8" transform="rotate(0,198,254)" />\n        <rect x="194" y="274" width="8" height="8" transform="rotate(0,198,278)" />\n        <rect x="202" y="2" width="8" height="8" transform="rotate(0,206,6)" />\n        <rect x="202" y="18" width="8" height="8" transform="rotate(0,206,22)" />\n        <rect x="202" y="26" width="8" height="8" transform="rotate(0,206,30)" />\n        <rect x="202" y="58" width="8" height="8" transform="rotate(0,206,62)" />\n        <rect x="202" y="66" width="8" height="8" transform="rotate(0,206,70)" />\n        <rect x="202" y="74" width="8" height="8" transform="rotate(0,206,78)" />\n        <rect x="202" y="90" width="8" height="8" transform="rotate(0,206,94)" />\n        <rect x="202" y="98" width="8" height="8" transform="rotate(0,206,102)" />\n        <rect x="202" y="106" width="8" height="8" transform="rotate(0,206,110)" />\n        <rect x="202" y="114" width="8" height="8" transform="rotate(0,206,118)" />\n        <rect x="202" y="122" width="8" height="8" transform="rotate(0,206,126)" />\n        <rect x="202" y="130" width="8" height="8" transform="rotate(0,206,134)" />\n        <rect x="202" y="146" width="8" height="8" transform="rotate(0,206,150)" />\n        <rect x="202" y="162" width="8" height="8" transform="rotate(0,206,166)" />\n        <rect x="202" y="186" width="8" height="8" transform="rotate(0,206,190)" />\n        <rect x="202" y="202" width="8" height="8" transform="rotate(0,206,206)" />\n        <rect x="202" y="210" width="8" height="8" transform="rotate(0,206,214)" />\n        <rect x="202" y="234" width="8" height="8" transform="rotate(0,206,238)" />\n        <rect x="202" y="258" width="8" height="8" transform="rotate(0,206,262)" />\n        <rect x="202" y="266" width="8" height="8" transform="rotate(0,206,270)" />\n        <rect x="210" y="26" width="8" height="8" transform="rotate(0,214,30)" />\n        <rect x="210" y="34" width="8" height="8" transform="rotate(0,214,38)" />\n        <rect x="210" y="50" width="8" height="8" transform="rotate(0,214,54)" />\n        <rect x="210" y="74" width="8" height="8" transform="rotate(0,214,78)" />\n        <rect x="210" y="90" width="8" height="8" transform="rotate(0,214,94)" />\n        <rect x="210" y="122" width="8" height="8" transform="rotate(0,214,126)" />\n        <rect x="210" y="146" width="8" height="8" transform="rotate(0,214,150)" />\n        <rect x="210" y="178" width="8" height="8" transform="rotate(0,214,182)" />\n        <rect x="210" y="186" width="8" height="8" transform="rotate(0,214,190)" />\n        <rect x="210" y="194" width="8" height="8" transform="rotate(0,214,198)" />\n        <rect x="210" y="218" width="8" height="8" transform="rotate(0,214,222)" />\n        <rect x="210" y="234" width="8" height="8" transform="rotate(0,214,238)" />\n        <rect x="210" y="250" width="8" height="8" transform="rotate(0,214,254)" />\n        <rect x="210" y="266" width="8" height="8" transform="rotate(0,214,270)" />\n        <rect x="210" y="274" width="8" height="8" transform="rotate(0,214,278)" />\n        <rect x="210" y="282" width="8" height="8" transform="rotate(0,214,286)" />\n        <rect x="218" y="26" width="8" height="8" transform="rotate(0,222,30)" />\n        <rect x="218" y="42" width="8" height="8" transform="rotate(0,222,46)" />\n        <rect x="218" y="66" width="8" height="8" transform="rotate(0,222,70)" />\n        <rect x="218" y="74" width="8" height="8" transform="rotate(0,222,78)" />\n        <rect x="218" y="82" width="8" height="8" transform="rotate(0,222,86)" />\n        <rect x="218" y="90" width="8" height="8" transform="rotate(0,222,94)" />\n        <rect x="218" y="114" width="8" height="8" transform="rotate(0,222,118)" />\n        <rect x="218" y="138" width="8" height="8" transform="rotate(0,222,142)" />\n        <rect x="218" y="146" width="8" height="8" transform="rotate(0,222,150)" />\n        <rect x="218" y="170" width="8" height="8" transform="rotate(0,222,174)" />\n        <rect x="218" y="226" width="8" height="8" transform="rotate(0,222,230)" />\n        <rect x="218" y="242" width="8" height="8" transform="rotate(0,222,246)" />\n        <rect x="218" y="258" width="8" height="8" transform="rotate(0,222,262)" />\n        <rect x="218" y="274" width="8" height="8" transform="rotate(0,222,278)" />\n        <rect x="226" y="2" width="8" height="8" transform="rotate(0,230,6)" />\n        <rect x="226" y="10" width="8" height="8" transform="rotate(0,230,14)" />\n        <rect x="226" y="18" width="8" height="8" transform="rotate(0,230,22)" />\n        <rect x="226" y="26" width="8" height="8" transform="rotate(0,230,30)" />\n        <rect x="226" y="42" width="8" height="8" transform="rotate(0,230,46)" />\n        <rect x="226" y="50" width="8" height="8" transform="rotate(0,230,54)" />\n        <rect x="226" y="66" width="8" height="8" transform="rotate(0,230,70)" />\n        <rect x="226" y="90" width="8" height="8" transform="rotate(0,230,94)" />\n        <rect x="226" y="122" width="8" height="8" transform="rotate(0,230,126)" />\n        <rect x="226" y="138" width="8" height="8" transform="rotate(0,230,142)" />\n        <rect x="226" y="170" width="8" height="8" transform="rotate(0,230,174)" />\n        <rect x="226" y="178" width="8" height="8" transform="rotate(0,230,182)" />\n        <rect x="226" y="194" width="8" height="8" transform="rotate(0,230,198)" />\n        <rect x="226" y="226" width="8" height="8" transform="rotate(0,230,230)" />\n        <rect x="226" y="234" width="8" height="8" transform="rotate(0,230,238)" />\n        <rect x="226" y="242" width="8" height="8" transform="rotate(0,230,246)" />\n        <rect x="226" y="250" width="8" height="8" transform="rotate(0,230,254)" />\n        <rect x="226" y="258" width="8" height="8" transform="rotate(0,230,262)" />\n        <rect x="226" y="274" width="8" height="8" transform="rotate(0,230,278)" />\n        <rect x="226" y="282" width="8" height="8" transform="rotate(0,230,286)" />\n        <rect x="226" y="290" width="8" height="8" transform="rotate(0,230,294)" />\n        <rect x="234" y="66" width="8" height="8" transform="rotate(0,238,70)" />\n        <rect x="234" y="74" width="8" height="8" transform="rotate(0,238,78)" />\n        <rect x="234" y="82" width="8" height="8" transform="rotate(0,238,86)" />\n        <rect x="234" y="106" width="8" height="8" transform="rotate(0,238,110)" />\n        <rect x="234" y="114" width="8" height="8" transform="rotate(0,238,118)" />\n        <rect x="234" y="146" width="8" height="8" transform="rotate(0,238,150)" />\n        <rect x="234" y="178" width="8" height="8" transform="rotate(0,238,182)" />\n        <rect x="234" y="186" width="8" height="8" transform="rotate(0,238,190)" />\n        <rect x="234" y="210" width="8" height="8" transform="rotate(0,238,214)" />\n        <rect x="234" y="226" width="8" height="8" transform="rotate(0,238,230)" />\n        <rect x="234" y="258" width="8" height="8" transform="rotate(0,238,262)" />\n        <rect x="234" y="266" width="8" height="8" transform="rotate(0,238,270)" />\n        <rect x="242" y="106" width="8" height="8" transform="rotate(0,246,110)" />\n        <rect x="242" y="114" width="8" height="8" transform="rotate(0,246,118)" />\n        <rect x="242" y="122" width="8" height="8" transform="rotate(0,246,126)" />\n        <rect x="242" y="146" width="8" height="8" transform="rotate(0,246,150)" />\n        <rect x="242" y="162" width="8" height="8" transform="rotate(0,246,166)" />\n        <rect x="242" y="170" width="8" height="8" transform="rotate(0,246,174)" />\n        <rect x="242" y="178" width="8" height="8" transform="rotate(0,246,182)" />\n        <rect x="242" y="186" width="8" height="8" transform="rotate(0,246,190)" />\n        <rect x="242" y="202" width="8" height="8" transform="rotate(0,246,206)" />\n        <rect x="242" y="210" width="8" height="8" transform="rotate(0,246,214)" />\n        <rect x="242" y="226" width="8" height="8" transform="rotate(0,246,230)" />\n        <rect x="242" y="242" width="8" height="8" transform="rotate(0,246,246)" />\n        <rect x="242" y="258" width="8" height="8" transform="rotate(0,246,262)" />\n        <rect x="242" y="266" width="8" height="8" transform="rotate(0,246,270)" />\n        <rect x="242" y="274" width="8" height="8" transform="rotate(0,246,278)" />\n        <rect x="250" y="82" width="8" height="8" transform="rotate(0,254,86)" />\n        <rect x="250" y="90" width="8" height="8" transform="rotate(0,254,94)" />\n        <rect x="250" y="98" width="8" height="8" transform="rotate(0,254,102)" />\n        <rect x="250" y="130" width="8" height="8" transform="rotate(0,254,134)" />\n        <rect x="250" y="146" width="8" height="8" transform="rotate(0,254,150)" />\n        <rect x="250" y="170" width="8" height="8" transform="rotate(0,254,174)" />\n        <rect x="250" y="186" width="8" height="8" transform="rotate(0,254,190)" />\n        <rect x="250" y="194" width="8" height="8" transform="rotate(0,254,198)" />\n        <rect x="250" y="210" width="8" height="8" transform="rotate(0,254,214)" />\n        <rect x="250" y="226" width="8" height="8" transform="rotate(0,254,230)" />\n        <rect x="250" y="258" width="8" height="8" transform="rotate(0,254,262)" />\n        <rect x="250" y="274" width="8" height="8" transform="rotate(0,254,278)" />\n        <rect x="250" y="290" width="8" height="8" transform="rotate(0,254,294)" />\n        <rect x="258" y="66" width="8" height="8" transform="rotate(0,262,70)" />\n        <rect x="258" y="74" width="8" height="8" transform="rotate(0,262,78)" />\n        <rect x="258" y="90" width="8" height="8" transform="rotate(0,262,94)" />\n        <rect x="258" y="138" width="8" height="8" transform="rotate(0,262,142)" />\n        <rect x="258" y="146" width="8" height="8" transform="rotate(0,262,150)" />\n        <rect x="258" y="154" width="8" height="8" transform="rotate(0,262,158)" />\n        <rect x="258" y="162" width="8" height="8" transform="rotate(0,262,166)" />\n        <rect x="258" y="186" width="8" height="8" transform="rotate(0,262,190)" />\n        <rect x="258" y="226" width="8" height="8" transform="rotate(0,262,230)" />\n        <rect x="258" y="234" width="8" height="8" transform="rotate(0,262,238)" />\n        <rect x="258" y="242" width="8" height="8" transform="rotate(0,262,246)" />\n        <rect x="258" y="250" width="8" height="8" transform="rotate(0,262,254)" />\n        <rect x="258" y="258" width="8" height="8" transform="rotate(0,262,262)" />\n        <rect x="258" y="266" width="8" height="8" transform="rotate(0,262,270)" />\n        <rect x="258" y="274" width="8" height="8" transform="rotate(0,262,278)" />\n        <rect x="258" y="282" width="8" height="8" transform="rotate(0,262,286)" />\n        <rect x="258" y="290" width="8" height="8" transform="rotate(0,262,294)" />\n        <rect x="266" y="90" width="8" height="8" transform="rotate(0,270,94)" />\n        <rect x="266" y="114" width="8" height="8" transform="rotate(0,270,118)" />\n        <rect x="266" y="122" width="8" height="8" transform="rotate(0,270,126)" />\n        <rect x="266" y="138" width="8" height="8" transform="rotate(0,270,142)" />\n        <rect x="266" y="154" width="8" height="8" transform="rotate(0,270,158)" />\n        <rect x="266" y="178" width="8" height="8" transform="rotate(0,270,182)" />\n        <rect x="266" y="194" width="8" height="8" transform="rotate(0,270,198)" />\n        <rect x="266" y="202" width="8" height="8" transform="rotate(0,270,206)" />\n        <rect x="266" y="218" width="8" height="8" transform="rotate(0,270,222)" />\n        <rect x="266" y="242" width="8" height="8" transform="rotate(0,270,246)" />\n        <rect x="266" y="250" width="8" height="8" transform="rotate(0,270,254)" />\n        <rect x="266" y="266" width="8" height="8" transform="rotate(0,270,270)" />\n        <rect x="266" y="282" width="8" height="8" transform="rotate(0,270,286)" />\n        <rect x="274" y="82" width="8" height="8" transform="rotate(0,278,86)" />\n        <rect x="274" y="90" width="8" height="8" transform="rotate(0,278,94)" />\n        <rect x="274" y="98" width="8" height="8" transform="rotate(0,278,102)" />\n        <rect x="274" y="114" width="8" height="8" transform="rotate(0,278,118)" />\n        <rect x="274" y="138" width="8" height="8" transform="rotate(0,278,142)" />\n        <rect x="274" y="154" width="8" height="8" transform="rotate(0,278,158)" />\n        <rect x="274" y="178" width="8" height="8" transform="rotate(0,278,182)" />\n        <rect x="274" y="186" width="8" height="8" transform="rotate(0,278,190)" />\n        <rect x="274" y="194" width="8" height="8" transform="rotate(0,278,198)" />\n        <rect x="274" y="202" width="8" height="8" transform="rotate(0,278,206)" />\n        <rect x="274" y="226" width="8" height="8" transform="rotate(0,278,230)" />\n        <rect x="274" y="242" width="8" height="8" transform="rotate(0,278,246)" />\n        <rect x="274" y="250" width="8" height="8" transform="rotate(0,278,254)" />\n        <rect x="274" y="282" width="8" height="8" transform="rotate(0,278,286)" />\n        <rect x="282" y="66" width="8" height="8" transform="rotate(0,286,70)" />\n        <rect x="282" y="90" width="8" height="8" transform="rotate(0,286,94)" />\n        <rect x="282" y="98" width="8" height="8" transform="rotate(0,286,102)" />\n        <rect x="282" y="106" width="8" height="8" transform="rotate(0,286,110)" />\n        <rect x="282" y="122" width="8" height="8" transform="rotate(0,286,126)" />\n        <rect x="282" y="146" width="8" height="8" transform="rotate(0,286,150)" />\n        <rect x="282" y="154" width="8" height="8" transform="rotate(0,286,158)" />\n        <rect x="282" y="162" width="8" height="8" transform="rotate(0,286,166)" />\n        <rect x="282" y="170" width="8" height="8" transform="rotate(0,286,174)" />\n        <rect x="282" y="178" width="8" height="8" transform="rotate(0,286,182)" />\n        <rect x="282" y="186" width="8" height="8" transform="rotate(0,286,190)" />\n        <rect x="282" y="210" width="8" height="8" transform="rotate(0,286,214)" />\n        <rect x="282" y="218" width="8" height="8" transform="rotate(0,286,222)" />\n        <rect x="282" y="242" width="8" height="8" transform="rotate(0,286,246)" />\n        <rect x="282" y="250" width="8" height="8" transform="rotate(0,286,254)" />\n        <rect x="282" y="258" width="8" height="8" transform="rotate(0,286,262)" />\n        <rect x="282" y="274" width="8" height="8" transform="rotate(0,286,278)" />\n        <rect x="282" y="282" width="8" height="8" transform="rotate(0,286,286)" />\n        <rect x="290" y="90" width="8" height="8" transform="rotate(0,294,94)" />\n        <rect x="290" y="106" width="8" height="8" transform="rotate(0,294,110)" />\n        <rect x="290" y="130" width="8" height="8" transform="rotate(0,294,134)" />\n        <rect x="290" y="146" width="8" height="8" transform="rotate(0,294,150)" />\n        <rect x="290" y="162" width="8" height="8" transform="rotate(0,294,166)" />\n        <rect x="290" y="170" width="8" height="8" transform="rotate(0,294,174)" />\n        <rect x="290" y="178" width="8" height="8" transform="rotate(0,294,182)" />\n        <rect x="290" y="218" width="8" height="8" transform="rotate(0,294,222)" />\n        <rect x="290" y="250" width="8" height="8" transform="rotate(0,294,254)" />\n        <rect x="290" y="258" width="8" height="8" transform="rotate(0,294,262)" />\n        <rect x="290" y="274" width="8" height="8" transform="rotate(0,294,278)" />\n        <rect x="290" y="282" width="8" height="8" transform="rotate(0,294,286)" />\n        <rect x="290" y="290" width="8" height="8" transform="rotate(0,294,294)" />\n        <rect x="2" y="2" width="8" height="8" transform="rotate(0,6,6)" />\n        <rect x="2" y="10" width="8" height="8" transform="rotate(0,6,14)" />\n        <rect x="2" y="18" width="8" height="8" transform="rotate(0,6,22)" />\n        <rect x="2" y="26" width="8" height="8" transform="rotate(0,6,30)" />\n        <rect x="2" y="34" width="8" height="8" transform="rotate(0,6,38)" />\n        <rect x="2" y="42" width="8" height="8" transform="rotate(0,6,46)" />\n        <rect x="2" y="50" width="8" height="8" transform="rotate(0,6,54)" />\n        <rect x="10" y="2" width="8" height="8" transform="rotate(0,14,6)" />\n        <rect x="10" y="50" width="8" height="8" transform="rotate(0,14,54)" />\n        <rect x="18" y="2" width="8" height="8" transform="rotate(0,22,6)" />\n        <rect x="18" y="50" width="8" height="8" transform="rotate(0,22,54)" />\n        <rect x="26" y="2" width="8" height="8" transform="rotate(0,30,6)" />\n        <rect x="26" y="50" width="8" height="8" transform="rotate(0,30,54)" />\n        <rect x="34" y="2" width="8" height="8" transform="rotate(0,38,6)" />\n        <rect x="34" y="50" width="8" height="8" transform="rotate(0,38,54)" />\n        <rect x="42" y="2" width="8" height="8" transform="rotate(0,46,6)" />\n        <rect x="42" y="50" width="8" height="8" transform="rotate(0,46,54)" />\n        <rect x="50" y="2" width="8" height="8" transform="rotate(0,54,6)" />\n        <rect x="50" y="10" width="8" height="8" transform="rotate(0,54,14)" />\n        <rect x="50" y="18" width="8" height="8" transform="rotate(0,54,22)" />\n        <rect x="50" y="26" width="8" height="8" transform="rotate(0,54,30)" />\n        <rect x="50" y="34" width="8" height="8" transform="rotate(0,54,38)" />\n        <rect x="50" y="42" width="8" height="8" transform="rotate(0,54,46)" />\n        <rect x="50" y="50" width="8" height="8" transform="rotate(0,54,54)" />\n        <rect x="18" y="18" width="8" height="8" transform="rotate(0,22,22)" />\n        <rect x="18" y="26" width="8" height="8" transform="rotate(0,22,30)" />\n        <rect x="18" y="34" width="8" height="8" transform="rotate(0,22,38)" />\n        <rect x="26" y="18" width="8" height="8" transform="rotate(0,30,22)" />\n        <rect x="26" y="26" width="8" height="8" transform="rotate(0,30,30)" />\n        <rect x="26" y="34" width="8" height="8" transform="rotate(0,30,38)" />\n        <rect x="34" y="18" width="8" height="8" transform="rotate(0,38,22)" />\n        <rect x="34" y="26" width="8" height="8" transform="rotate(0,38,30)" />\n        <rect x="34" y="34" width="8" height="8" transform="rotate(0,38,38)" />\n        <rect x="242" y="2" width="8" height="8" transform="rotate(0,246,6)" />\n        <rect x="242" y="10" width="8" height="8" transform="rotate(0,246,14)" />\n        <rect x="242" y="18" width="8" height="8" transform="rotate(0,246,22)" />\n        <rect x="242" y="26" width="8" height="8" transform="rotate(0,246,30)" />\n        <rect x="242" y="34" width="8" height="8" transform="rotate(0,246,38)" />\n        <rect x="242" y="42" width="8" height="8" transform="rotate(0,246,46)" />\n        <rect x="242" y="50" width="8" height="8" transform="rotate(0,246,54)" />\n        <rect x="250" y="2" width="8" height="8" transform="rotate(0,254,6)" />\n        <rect x="250" y="50" width="8" height="8" transform="rotate(0,254,54)" />\n        <rect x="258" y="2" width="8" height="8" transform="rotate(0,262,6)" />\n        <rect x="258" y="50" width="8" height="8" transform="rotate(0,262,54)" />\n        <rect x="266" y="2" width="8" height="8" transform="rotate(0,270,6)" />\n        <rect x="266" y="50" width="8" height="8" transform="rotate(0,270,54)" />\n        <rect x="274" y="2" width="8" height="8" transform="rotate(0,278,6)" />\n        <rect x="274" y="50" width="8" height="8" transform="rotate(0,278,54)" />\n        <rect x="282" y="2" width="8" height="8" transform="rotate(0,286,6)" />\n        <rect x="282" y="50" width="8" height="8" transform="rotate(0,286,54)" />\n        <rect x="290" y="2" width="8" height="8" transform="rotate(0,294,6)" />\n        <rect x="290" y="10" width="8" height="8" transform="rotate(0,294,14)" />\n        <rect x="290" y="18" width="8" height="8" transform="rotate(0,294,22)" />\n        <rect x="290" y="26" width="8" height="8" transform="rotate(0,294,30)" />\n        <rect x="290" y="34" width="8" height="8" transform="rotate(0,294,38)" />\n        <rect x="290" y="42" width="8" height="8" transform="rotate(0,294,46)" />\n        <rect x="290" y="50" width="8" height="8" transform="rotate(0,294,54)" />\n        <rect x="258" y="18" width="8" height="8" transform="rotate(0,262,22)" />\n        <rect x="258" y="26" width="8" height="8" transform="rotate(0,262,30)" />\n        <rect x="258" y="34" width="8" height="8" transform="rotate(0,262,38)" />\n        <rect x="266" y="18" width="8" height="8" transform="rotate(0,270,22)" />\n        <rect x="266" y="26" width="8" height="8" transform="rotate(0,270,30)" />\n        <rect x="266" y="34" width="8" height="8" transform="rotate(0,270,38)" />\n        <rect x="274" y="18" width="8" height="8" transform="rotate(0,278,22)" />\n        <rect x="274" y="26" width="8" height="8" transform="rotate(0,278,30)" />\n        <rect x="274" y="34" width="8" height="8" transform="rotate(0,278,38)" />\n        <rect x="2" y="242" width="8" height="8" transform="rotate(0,6,246)" />\n        <rect x="2" y="250" width="8" height="8" transform="rotate(0,6,254)" />\n        <rect x="2" y="258" width="8" height="8" transform="rotate(0,6,262)" />\n        <rect x="2" y="266" width="8" height="8" transform="rotate(0,6,270)" />\n        <rect x="2" y="274" width="8" height="8" transform="rotate(0,6,278)" />\n        <rect x="2" y="282" width="8" height="8" transform="rotate(0,6,286)" />\n        <rect x="2" y="290" width="8" height="8" transform="rotate(0,6,294)" />\n        <rect x="10" y="242" width="8" height="8" transform="rotate(0,14,246)" />\n        <rect x="10" y="290" width="8" height="8" transform="rotate(0,14,294)" />\n        <rect x="18" y="242" width="8" height="8" transform="rotate(0,22,246)" />\n        <rect x="18" y="290" width="8" height="8" transform="rotate(0,22,294)" />\n        <rect x="26" y="242" width="8" height="8" transform="rotate(0,30,246)" />\n        <rect x="26" y="290" width="8" height="8" transform="rotate(0,30,294)" />\n        <rect x="34" y="242" width="8" height="8" transform="rotate(0,38,246)" />\n        <rect x="34" y="290" width="8" height="8" transform="rotate(0,38,294)" />\n        <rect x="42" y="242" width="8" height="8" transform="rotate(0,46,246)" />\n        <rect x="42" y="290" width="8" height="8" transform="rotate(0,46,294)" />\n        <rect x="50" y="242" width="8" height="8" transform="rotate(0,54,246)" />\n        <rect x="50" y="250" width="8" height="8" transform="rotate(0,54,254)" />\n        <rect x="50" y="258" width="8" height="8" transform="rotate(0,54,262)" />\n        <rect x="50" y="266" width="8" height="8" transform="rotate(0,54,270)" />\n        <rect x="50" y="274" width="8" height="8" transform="rotate(0,54,278)" />\n        <rect x="50" y="282" width="8" height="8" transform="rotate(0,54,286)" />\n        <rect x="50" y="290" width="8" height="8" transform="rotate(0,54,294)" />\n        <rect x="18" y="258" width="8" height="8" transform="rotate(0,22,262)" />\n        <rect x="18" y="266" width="8" height="8" transform="rotate(0,22,270)" />\n        <rect x="18" y="274" width="8" height="8" transform="rotate(0,22,278)" />\n        <rect x="26" y="258" width="8" height="8" transform="rotate(0,30,262)" />\n        <rect x="26" y="266" width="8" height="8" transform="rotate(0,30,270)" />\n        <rect x="26" y="274" width="8" height="8" transform="rotate(0,30,278)" />\n        <rect x="34" y="258" width="8" height="8" transform="rotate(0,38,262)" />\n        <rect x="34" y="266" width="8" height="8" transform="rotate(0,38,270)" />\n        <rect x="34" y="274" width="8" height="8" transform="rotate(0,38,278)" />\n    </clipPath>\n</defs>\n<rect x="0" y="0" height="300" width="300" clip-path="url(\'#clip-path-background-color\')" fill="#000" />\n<rect x="0" y="0" height="300" width="300" clip-path="url(\'#clip-path-dot-color\')" fill="#FFF" />\n<path d="M183.981 148.919C183.421 131.001 169 116.578 151.086 116.018V116H150.005H148.924V116.018C131.009 116.578 116.589 131.001 116.029 148.919H116V151.082H116.029C116.146 154.828 116.868 158.421 118.102 161.768L118.073 161.78L118.899 163.778L118.917 163.77C124.063 175.376 135.514 183.562 148.925 183.982V184H151.087V183.982C169.002 183.422 183.422 169 183.982 151.081H184V148.918H183.982L183.981 148.919ZM174.237 148.919C174.098 146.407 173.576 143.996 172.73 141.744L179.745 138.626C181.005 141.917 181.7 145.37 181.818 148.919H174.237V148.919ZM160.285 172.282C162.586 171.204 164.69 169.776 166.528 168.067L171.73 173.269C169.066 175.76 166.033 177.753 162.696 179.206L160.285 172.282ZM136.267 178.73C133.338 177.327 130.658 175.494 128.275 173.264L133.476 168.061C135.139 169.61 137.02 170.927 139.068 171.963L136.267 178.73V178.73ZM139.265 128.513C137.263 129.502 135.417 130.759 133.774 132.238L128.275 126.737C130.658 124.507 133.338 122.674 136.267 121.271L139.265 128.513V128.513ZM162.61 120.758C165.982 122.213 169.044 124.22 171.729 126.732L166.228 132.234C164.282 130.483 162.054 129.045 159.617 127.993L162.609 120.759L162.61 120.758ZM167.77 133.749L173.258 128.261C175.585 130.747 177.479 133.556 178.903 136.635L171.879 139.756C170.814 137.547 169.423 135.525 167.77 133.749ZM158.61 129.91C160.846 130.856 162.889 132.152 164.699 133.765L160.259 138.205C157.769 136.038 154.586 134.647 151.086 134.408V128.199C153.69 128.323 156.216 128.898 158.61 129.91ZM159.529 159.532C156.984 162.076 153.602 163.478 150.004 163.478C146.405 163.478 143.023 162.076 140.479 159.532C137.935 156.987 136.534 153.604 136.534 150.005C136.534 146.406 137.935 143.023 140.479 140.478C143.023 137.933 146.405 136.532 150.004 136.532C153.602 136.532 156.984 137.933 159.529 140.478C162.073 143.023 163.474 146.406 163.474 150.005C163.474 153.604 162.073 156.987 159.529 159.532ZM148.923 134.408C145.421 134.647 142.235 136.039 139.744 138.209L135.305 133.769C137.115 132.153 139.16 130.856 141.399 129.909C143.793 128.896 146.32 128.322 148.923 128.198V134.407V134.408ZM132.233 133.755C130.525 135.591 129.097 137.692 128.02 139.99L120.96 136.948C122.399 133.748 124.341 130.836 126.745 128.266L132.233 133.755V133.755ZM129.631 141.68C130.631 139.316 132.019 137.169 133.762 135.285L138.216 139.739C136.045 142.231 134.651 145.417 134.411 148.921H127.937C128.089 146.418 128.655 143.987 129.631 141.681V141.68ZM134.41 151.082C134.649 154.587 136.041 157.774 138.211 160.267L133.49 164.989C131.874 163.178 130.578 161.133 129.631 158.894C128.582 156.411 128.004 153.787 127.91 151.082H134.411H134.41ZM135.004 166.532L139.74 161.795C142.232 163.967 145.419 165.361 148.923 165.601V172.374C146.319 172.25 143.793 171.675 141.399 170.662C139.035 169.662 136.888 168.274 135.004 166.531V166.532ZM151.085 165.601C154.587 165.362 157.771 163.969 160.263 161.801L164.998 166.537C163.115 168.278 160.971 169.665 158.609 170.664C156.215 171.677 153.689 172.251 151.085 172.375V165.602V165.601ZM168.044 166.525C169.649 164.742 170.994 162.721 172.017 160.52L178.883 163.405C177.461 166.468 175.574 169.264 173.257 171.739L168.044 166.525V166.525ZM170.376 158.893C169.428 161.134 168.13 163.18 166.513 164.993L161.792 160.271C163.966 157.777 165.36 154.588 165.598 151.081H172.098C172.003 153.785 171.427 156.41 170.378 158.893H170.376ZM165.597 148.918C165.357 145.412 163.961 142.224 161.788 139.731L166.24 135.278C167.986 137.164 169.376 139.313 170.376 141.679C171.352 143.986 171.919 146.416 172.07 148.918H165.597ZM160.598 119.969L157.597 127.224C155.535 126.545 153.351 126.135 151.086 126.036V118.183C154.355 118.291 157.543 118.89 160.598 119.97V119.969ZM148.924 126.036C146.226 126.154 143.643 126.713 141.244 127.641L138.248 120.404C141.654 119.049 145.237 118.304 148.924 118.182V126.036ZM120.143 138.951L127.19 141.986C126.397 144.169 125.907 146.497 125.772 148.921H118.193C118.307 145.488 118.961 142.144 120.143 138.952V138.951ZM118.193 151.082H125.747C125.826 153.525 126.264 155.876 127.013 158.085L120.102 160.941C118.944 157.781 118.306 154.475 118.193 151.081V151.082ZM127.8 160.1C128.845 162.462 130.255 164.627 131.959 166.521L126.746 171.735C124.315 169.137 122.358 166.187 120.915 162.946L127.8 160.1V160.1ZM138.248 179.597L141.04 172.853C143.496 173.83 146.149 174.416 148.924 174.538V181.819C145.237 181.697 141.654 180.952 138.248 179.597V179.597ZM151.086 174.538C153.604 174.428 156.023 173.934 158.286 173.113L160.684 180.002C157.604 181.1 154.387 181.71 151.086 181.819V174.538ZM179.728 161.416L172.843 158.522C173.685 156.188 174.178 153.687 174.262 151.083H181.818C181.7 154.646 180.999 158.113 179.729 161.416H179.728Z" fill="white"/>\n</svg>',grid:()=>'<svg\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg">\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M16.0002 8H13V11L16.0002 11V8ZM16.0002 13L13 13V16H16.0002V13ZM11 11V8H8.0002V11L11 11ZM8.0002 13L11 13V16H8.0002V13ZM6.0002 12.02V16C6.0002 17.1046 6.89563 18 8.0002 18H12H16.0002C17.1048 18 18.0002 17.1046 18.0002 16V8C18.0002 6.89543 17.1048 6 16.0002 6H12H8.0002C6.89563 6 6.0002 6.89543 6.0002 8V11.98C6.00007 11.9867 6 11.9933 6 12C6 12.0067 6.00007 12.0133 6.0002 12.02Z"\n    fill="currentColor"\n  />\n</svg>',hamburger:()=>'<svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n  <line x1="21" y1="8.66943" x2="3" y2="8.66943" stroke="currentColor" stroke-width="2"/>\n  <line x1="21" y1="17.627" x2="3" y2="17.627" stroke="currentColor" stroke-width="2"/>\n  </svg>\n  ',lock:()=>'\n<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="12"\n  height="12"\n  viewBox="0 0 12 12"\n  fill="none">\n  <path\n    fill="currentColor"\n    fill-rule="evenodd"\n    d="M6 1a3 3 0 0 1 3 3v1h1v6H2V5h1V4a3 3 0 0 1 3-3Zm2 4H4V4a2 2 0 1 1 4 0v1Z"\n    clip-rule="evenodd"\n    />\n</svg>',oneTrust:()=>'<svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99922 14.1624H13.7992L16.8992 1.8374H6.99922C3.79922 1.8374 1.19922 4.5999 1.19922 7.9999C1.19922 11.3999 3.79922 14.1624 6.99922 14.1624Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2 0.5625H7C3.1 0.5625 0 3.85625 0 8C0 12.1438 3.1 15.4375 7 15.4375H22.2C26.1 15.4375 29.2 12.1438 29.2 8C29.2 3.85625 26 0.5625 22.2 0.5625ZM1.2 8C1.2 4.6 3.8 1.8375 7 1.8375H16.9L13.8 14.1625H7C3.8 14.1625 1.2 11.4 1.2 8Z" fill="#737373"/>\n  <path d="M24.2008 4.8127C24.4008 5.0252 24.4008 5.4502 24.2008 5.6627L22.1008 8.0002L24.3008 10.3377C24.5008 10.5502 24.5008 10.9752 24.3008 11.1877C24.1008 11.4002 23.7008 11.4002 23.5008 11.1877L21.3008 8.8502L19.1008 11.1877C18.9008 11.4002 18.5008 11.4002 18.3008 11.1877C18.1008 10.9752 18.1008 10.5502 18.3008 10.3377L20.4008 8.0002L18.2008 5.6627C18.0008 5.4502 18.0008 5.0252 18.2008 4.8127C18.4008 4.6002 18.8008 4.6002 19.0008 4.8127L21.2008 7.1502L23.4008 4.8127C23.6008 4.6002 24.0008 4.6002 24.2008 4.8127Z" fill="white"/>\n  <path d="M12.2996 4.91865C12.4996 5.13115 12.5996 5.55615 12.3996 5.76865L8.19961 10.9749C8.09961 11.0812 7.99961 11.1874 7.89961 11.1874C7.69961 11.2937 7.39961 11.2937 7.19961 11.0812L4.99961 8.74365C4.79961 8.53115 4.79961 8.10615 4.99961 7.89365C5.19961 7.68115 5.59961 7.68115 5.79961 7.89365L7.59961 9.6999L11.3996 4.91865C11.5996 4.70615 11.9996 4.70615 12.2996 4.91865Z" fill="#737373"/>\n  </svg>  \n  ',paste:()=>' <svg\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 24 24"\n  width="24"\n  height="24"\n  fill="currentColor">\n  <path\n    d="M21,7h-4V3c0-1.1-0.9-2-2-2H3C1.9,1,1,1.9,1,3v12c0,1.1,0.9,2,2,2h4v4c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V9\nC23,7.9,22.1,7,21,7z M3,15L3,3h0h12v4H9C7.9,7,7,7.9,7,9v6H3z"\n  />\n</svg>\n    ',plus:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="16"\n  height="17"\n  viewBox="0 0 16 17"\n  fill="none">\n  <rect\n    x="7.33333"\n    y="1.33624"\n    width="1.33333"\n    height="13.3333"\n    fill="currentColor"\n  />\n  <rect\n    x="1.33333"\n    y="8.66962"\n    width="1.33333"\n    height="13.3333"\n    transform="rotate(-90 1.33333 8.66962)"\n    fill="currentColor"\n  />\n</svg>',preset:()=>' <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\n  <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,17H4L4,4h0h16V17z" />\n</svg>',profile:()=>'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <rect opacity="0.01" width="24" height="24" fill="currentColor" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12ZM21.8182 12C21.8182 6.58626 17.4137 2.18182 12 2.18182C6.58626 2.18182 2.18182 6.58626 2.18182 12C2.18182 17.4137 6.58626 21.8182 12 21.8182C17.4137 21.8182 21.8182 17.4137 21.8182 12ZM10.9091 11.9985C10.9091 10.0384 9.31396 8.44429 7.35491 8.44429C5.39586 8.44429 3.80073 10.0384 3.80073 11.9985H5.82245C5.82245 11.1534 6.50983 10.466 7.35491 10.466C8.19999 10.466 8.88737 11.1534 8.88737 11.9985H10.9091ZM8.17887 14.7194C8.17887 16.8249 9.8916 18.5376 11.9971 18.5376C14.1025 18.5376 15.8152 16.8249 15.8152 14.7194H8.17887ZM16.6451 8.44429C18.6041 8.44429 20.1993 10.0384 20.1993 11.9985H18.1776C18.1776 11.1534 17.4902 10.466 16.6451 10.466C15.8 10.466 15.1126 11.1534 15.1126 11.9985H13.0909C13.0909 10.0384 14.686 8.44429 16.6451 8.44429Z" fill="currentColor"/>\n  </svg>  \n  ',report:()=>'<svg\n  version="1.1"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 16 16"\n  width="100%"\n  height="100%"\n  fill="currentColor">\n  <g>\n    <path d="M16,15.3H0l8-14L16,15.3z M2.3,14h11.4L8,4L2.3,14z" />\n  </g>\n  <g>\n    <rect x="7.3" y="6.7" width="1.3" height="4" />\n  </g>\n  <g>\n    <circle cx="8" cy="12.3" r="1" />\n  </g>\n</svg>',search:()=>'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4 1C5.20852 1 1 5.20852 1 10.4C1 15.5915 5.20852 19.8 10.4 19.8C12.6355 19.8 14.6888 19.0196 16.3022 17.7164L21.2929 22.7071L22.7071 21.2929L17.7164 16.3022C19.0196 14.6888 19.8 12.6355 19.8 10.4C19.8 5.20852 15.5915 1 10.4 1ZM10.4 3C14.4869 3 17.8 6.31309 17.8 10.4C17.8 14.4869 14.4869 17.8 10.4 17.8C6.31309 17.8 3 14.4869 3 10.4C3 6.31309 6.31309 3 10.4 3Z" fill="currentColor"/>\n  </svg>\n  ',selectedCheckbox:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="16"\n  height="17px"\n  viewBox="0 0 16 17"\n  fill="currentColor">\n  <g>\n    <path\n      d="M0.7,2.5c0-0.7,0.6-1.3,1.3-1.3h12c0.7,0,1.3,0.6,1.3,1.3v12c0,0.7-0.6,1.3-1.3,1.3H2c-0.7,0-1.3-0.6-1.3-1.3\n    V2.5z M14,2.5H2v12h12V2.5z"\n    />\n  </g>\n  <g>\n    <polygon\n      class="checkmark"\n      points="7.5,11.4 4.4,8.3 5.3,7.4 7.5,9.6 11.7,5.4 12.6,6.3 \t"\n    />\n  </g>\n</svg>',share:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="currentColor">\n  <path d="M19,22H5c-1.1,0-2-0.9-2-2v-4h2v4h14v-4h2v4C21,21.1,20.1,22,19,22z" />\n  <polygon points="13,16 11,16 11,5.4 7.2,9.2 5.8,7.8 12,1.6 18.2,7.8 16.8,9.2 13,5.4 " />\n</svg>',studio:()=>'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n  <rect x="4" y="1" width="2" height="22" fill="currentColor"/>\n  <rect x="18" y="1" width="2" height="22" fill="currentColor"/>\n  <rect x="1" y="20" width="2" height="22" transform="rotate(-90 1 20)" fill="currentColor"/>\n  <rect x="1" y="6" width="2" height="22" transform="rotate(-90 1 6)" fill="currentColor"/>\n  </svg>',tools:()=>'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M15 9C16.1046 9 17 8.10457 17 7C17 5.89543 16.1046 5 15 5C13.8954 5 13 5.89543 13 7C13 8.10457 13.8954 9 15 9ZM15 11C13.1362 11 11.5701 9.72523 11.126 8H1V6H11.126C11.5701 4.27477 13.1362 3 15 3C16.8638 3 18.4299 4.27477 18.874 6H23V8H18.874C18.4299 9.72523 16.8638 11 15 11ZM12.874 16H23V18H12.874C12.4299 19.7252 10.8638 21 9 21C7.13616 21 5.57006 19.7252 5.12602 18H1V16H5.12602C5.57006 14.2748 7.13616 13 9 13C10.8638 13 12.4299 14.2748 12.874 16ZM11 17C11 18.1046 10.1046 19 9 19C7.89543 19 7 18.1046 7 17C7 15.8954 7.89543 15 9 15C10.1046 15 11 15.8954 11 17Z"\n  />\n</svg>',unselectedCheckbox:()=>'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="16"\n  height="17px"\n  viewBox="0 0 16 17"\n  fill="currentColor">\n  <g>\n    <path\n      d="M0.7,2.5c0-0.7,0.6-1.3,1.3-1.3h12c0.7,0,1.3,0.6,1.3,1.3v12c0,0.7-0.6,1.3-1.3,1.3H2c-0.7,0-1.3-0.6-1.3-1.3\n    V2.5z M14,2.5H2v12h12V2.5z"\n    />\n  </g>\n</svg>',visibility:()=>'<svg\n    xmlns="http://www.w3.org/2000/svg"\n    width="24"\n    height="24"\n    part="visibility-icon"\n    viewBox="0 0 24 24"\n    fill="currentColor">\n    <path d="M16.9,8.8l3.2,3.2l-2.5,2.5l1.5,1.4L23,12l-4.6-4.6C15.6,4.6,11.5,4,8.2,5.6l1.6,1.5C12.2,6.3,15,6.8,16.9,8.8z" />\n    <path\n      d="M2.4,5.3l2.7,2.5L1,12l4.6,4.6c2.9,2.9,7.2,3.4,10.6,1.6l2.6,2.5l1.4-1.5L3.8,3.8L2.4,5.3z M14.7,16.7\nc-2.5,1.1-5.6,0.6-7.6-1.5L3.8,12l2.8-2.8L14.7,16.7z"\n    />\n  </svg>',vscoLogo:()=>'<svg width="100%" height="100%" viewBox="0 0 28 28" fill="none">\n  <path\n    d="M27.899 13.51C27.6692 6.15649 21.7512 0.237368 14.3991 0.00754255V0H13.9555H13.5119V0.00754255C6.15975 0.237368 0.241759 6.15649 0.0119771 13.51H0V14.3974H0.0119771C0.0598853 15.9347 0.356206 17.4095 0.862791 18.7832L0.850814 18.788L1.18972 19.608L1.19726 19.6049C3.30922 24.3677 8.00865 27.7273 13.5123 27.8994V27.907H14.3995V27.8994C21.7517 27.6696 27.6697 21.7509 27.8994 14.3969H27.907V13.5096H27.8994L27.899 13.51ZM23.9004 13.51C23.8432 12.4789 23.629 11.4895 23.2816 10.5653L26.1605 9.28576C26.6778 10.6363 26.963 12.0534 27.0114 13.51H23.9004ZM18.1745 23.0979C19.1189 22.6556 19.9822 22.0695 20.7367 21.368L22.8713 23.503C21.7783 24.5253 20.5335 25.3434 19.1637 25.9397L18.1745 23.0979ZM8.3174 25.744C7.11526 25.1686 6.01559 24.4161 5.03746 23.5008L7.17204 21.3658C7.85473 22.0012 8.62658 22.542 9.46719 22.9671L8.3174 25.744ZM9.54793 5.13514C8.72639 5.54111 7.96873 6.05711 7.29447 6.66406L5.03746 4.40662C6.01559 3.49131 7.11526 2.73883 8.3174 2.16338L9.54793 5.13514ZM19.1287 1.95263C20.5123 2.54982 21.769 3.37329 22.8708 4.4044L20.6134 6.66229C19.8149 5.94397 18.9002 5.35343 17.9004 4.92173L19.1282 1.95308L19.1287 1.95263ZM21.2464 7.28432L23.4985 5.03177C24.4536 6.05223 25.2308 7.20491 25.815 8.4685L22.9325 9.74941C22.4956 8.84297 21.9247 8.01285 21.2464 7.28432ZM17.4869 5.70882C18.4047 6.09704 19.2431 6.62857 19.9857 7.29054L18.1639 9.11273C17.1418 8.22359 15.8354 7.65258 14.3991 7.55453V5.00648C15.4677 5.0575 16.5044 5.29309 17.4869 5.70882ZM17.864 17.8652C16.8198 18.9096 15.4318 19.4846 13.955 19.4846C12.4783 19.4846 11.0903 18.9096 10.0461 17.8652C9.00186 16.8208 8.42697 15.4325 8.42697 13.9555C8.42697 12.4785 9.00186 11.0902 10.0461 10.0458C11.0903 9.00136 12.4783 8.42635 13.955 8.42635C15.4318 8.42635 16.8198 9.00136 17.864 10.0458C18.9082 11.0902 19.4831 12.4785 19.4831 13.9555C19.4831 15.4325 18.9082 16.8208 17.864 17.8652ZM13.5114 7.55453C12.0742 7.65258 10.7669 8.22404 9.74444 9.1145L7.9226 7.29231C8.66562 6.62901 9.5049 6.09704 10.4236 5.70838C11.4061 5.29265 12.4433 5.05706 13.5114 5.00603V7.55408V7.55453ZM6.6619 7.28654C5.96102 8.03991 5.37503 8.90242 4.93277 9.84524L2.03566 8.59717C2.62608 7.28388 3.42322 6.08861 4.40977 5.03398L6.6619 7.28654ZM5.59417 10.5392C6.0045 9.56883 6.57407 8.68768 7.28959 7.91435L9.1172 9.74231C8.22646 10.765 7.65422 12.0725 7.55575 13.5105H4.89906C4.96116 12.4834 5.1936 11.486 5.59417 10.5396V10.5392ZM7.5553 14.3974C7.65334 15.8358 8.22469 17.1438 9.11542 18.1669L7.1778 20.1049C6.51463 19.3617 5.98276 18.5223 5.59417 17.6034C5.16344 16.5847 4.92656 15.5075 4.88797 14.3974H7.55575H7.5553ZM7.79928 20.738L9.74267 18.7943C10.7656 19.6856 12.0733 20.2575 13.5114 20.356V23.1357C12.4428 23.0846 11.4061 22.849 10.4236 22.4333C9.45344 22.0229 8.57246 21.4532 7.79928 20.7376V20.738ZM14.3986 20.356C15.8359 20.2579 17.1427 19.6865 18.1652 18.7965L20.1086 20.7402C19.3358 21.4545 18.4558 22.0238 17.4865 22.4338C16.5039 22.8495 15.4673 23.0851 14.3986 23.1361V20.3564V20.356ZM21.3586 20.7353C22.0174 20.0037 22.5692 19.174 22.9893 18.2707L25.807 19.4549C25.2232 20.7118 24.4492 21.8592 23.4981 22.8752L21.3586 20.7353ZM22.3159 17.603C21.9269 18.5227 21.3941 19.3626 20.7305 20.1067L18.7929 18.1687C19.6849 17.1451 20.2572 15.8362 20.3548 14.3969H23.0226C22.9835 15.507 22.7471 16.5843 22.3164 17.603H22.3159ZM20.3543 13.5096C20.2559 12.0707 19.6832 10.7623 18.7911 9.7392L20.6183 7.91169C21.3347 8.68546 21.9051 9.5675 22.3159 10.5387C22.7165 11.4855 22.9489 12.4825 23.011 13.5096H20.3543ZM18.3027 1.62875L17.0713 4.60628C16.2249 4.32765 15.3289 4.15949 14.3991 4.11867V0.895788C15.741 0.940156 17.0491 1.18595 18.3027 1.62919V1.62875ZM13.5119 4.11867C12.4047 4.16703 11.3445 4.39642 10.3602 4.77754L9.13051 1.80755C10.5283 1.25118 11.9988 0.94548 13.5119 0.895345V4.11867ZM1.7003 9.41887L4.59253 10.6647C4.26694 11.5605 4.06599 12.5157 4.01054 13.5105H0.900053C0.946631 12.1018 1.21501 10.7295 1.7003 9.41931V9.41887ZM0.900053 14.3974H4.00034C4.03272 15.4001 4.21237 16.3651 4.51978 17.2715L1.68344 18.4437C1.20835 17.1469 0.946187 15.7901 0.900053 14.3969V14.3974ZM4.84272 18.0986C5.27168 19.068 5.85012 19.9562 6.54967 20.7336L4.41022 22.8734C3.41257 21.8073 2.60922 20.5965 2.01702 19.2663L4.84272 18.0986ZM9.13051 26.0999L10.2763 23.3322C11.2842 23.7333 12.3732 23.9738 13.5119 24.0239V27.0121C11.9988 26.9619 10.5283 26.6562 9.13051 26.0999ZM14.3991 24.0239C15.4327 23.9786 16.4254 23.7759 17.3539 23.4391L18.3382 26.2663C17.074 26.717 15.7538 26.9673 14.3991 27.0121V24.0239ZM26.1539 18.6385L23.3282 17.4508C23.6738 16.4929 23.876 15.4667 23.9106 14.3978H27.0114C26.963 15.8602 26.6756 17.2831 26.1543 18.6385H26.1539Z"\n    fill="currentColor"\n  />\n</svg>',vscoWordmark:()=>'<svg width="60" height="28" viewBox="0 0 60 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n  <g clip-path="url(#clip0_245_1638)">\n  <path d="M39.1587 17.1949H37.7269L35.5254 10.8906H36.8728L37.5468 12.924C37.8596 13.8384 38.1963 14.909 38.4732 15.8235C38.7381 14.909 39.0868 13.8504 39.3876 12.936L40.0855 10.8906H41.3731L39.1591 17.1949H39.1587Z" fill="currentColor"/>\n  <path d="M41.6582 15.9797L42.5003 15.3058C43.1618 16.0277 43.8478 16.3285 44.5576 16.3285C45.2675 16.3285 45.7729 15.9553 45.7729 15.426C45.7729 14.9566 45.4242 14.7161 44.7502 14.5839L43.8961 14.4033C42.5127 14.1145 41.971 13.5732 41.971 12.7191C41.971 11.5523 43.0296 10.7461 44.3895 10.7461C45.4361 10.7461 46.2183 11.0948 46.8559 11.8411L46.0258 12.4667C45.4965 11.901 44.9791 11.7568 44.3775 11.7568C43.7036 11.7568 43.2346 12.0935 43.2346 12.563C43.2346 12.9117 43.4995 13.1162 44.2213 13.2728L45.1118 13.4654C46.5076 13.7542 47.0249 14.3315 47.0249 15.2703C47.0249 16.5334 45.9543 17.3396 44.5705 17.3396C43.4276 17.3396 42.4892 16.9066 41.6591 15.9802L41.6582 15.9797Z" fill="currentColor"/>\n  <path d="M50.6783 17.3392C48.9577 17.3392 47.7549 15.9553 47.7549 14.0426C47.7549 12.1299 48.9581 10.7461 50.6783 10.7461C51.9175 10.7461 52.8922 11.3717 53.2889 12.6952L51.9894 12.9117C51.7848 12.1898 51.3398 11.7448 50.6778 11.7448C49.6671 11.7448 49.1498 12.7435 49.1498 14.0426C49.1498 15.3417 49.6671 16.3285 50.6778 16.3285C51.472 16.3285 51.941 15.7752 52.1819 14.7525L53.3488 14.9331C53.012 16.4611 52.1096 17.3392 50.6778 17.3392H50.6783Z" fill="currentColor"/>\n  <path d="M57.0894 17.3392C55.3688 17.3392 54.166 15.9553 54.166 14.0426C54.166 12.1299 55.3693 10.7461 57.0894 10.7461C58.8096 10.7461 60.0008 12.1175 60.0008 14.0426C60.0008 15.9678 58.8096 17.3392 57.0894 17.3392ZM57.0894 16.3285C58.0881 16.3285 58.6055 15.3297 58.6055 14.0426C58.6055 12.7555 58.0881 11.7448 57.0894 11.7448C56.0907 11.7448 55.5614 12.7435 55.5614 14.0426C55.5614 15.3417 56.0787 16.3285 57.0894 16.3285Z" fill="currentColor"/>\n  <path d="M27.9043 13.51C27.6745 6.15649 21.7554 0.237368 14.4018 0.00754255V0H13.9581H13.5145V0.00754255C6.16093 0.237368 0.241805 6.15649 0.0119793 13.51H0V14.3974H0.0119793C0.0598967 15.9347 0.356274 17.4095 0.862956 18.7832L0.850977 18.788L1.18995 19.608L1.19705 19.6049C3.3094 24.3677 8.00974 27.7273 13.5145 27.8994V27.907H13.9568C13.9568 27.907 13.9577 27.907 13.9581 27.907C13.9586 27.907 13.959 27.907 13.9595 27.907H14.4018V27.8994C21.7554 27.6696 27.6745 21.7509 27.9043 14.3969H27.9119V13.5096H27.9043V13.51ZM23.905 13.51C23.8478 12.4789 23.6335 11.4895 23.2861 10.5653L26.1655 9.28576C26.6829 10.6363 26.9682 12.0534 27.0165 13.51H23.905ZM18.178 23.0979C19.1226 22.6556 19.986 22.0695 20.7407 21.368L22.8757 23.503C21.7824 24.5253 20.5375 25.3434 19.1674 25.9397L18.178 23.0979ZM8.31898 25.744C7.11661 25.1686 6.01673 24.4161 5.03842 23.5008L7.17341 21.3658C7.85623 22.0012 8.62823 22.542 9.469 22.9671L8.31898 25.744ZM9.54975 5.13514C8.72806 5.54111 7.97025 6.05711 7.29586 6.66406L5.03842 4.40662C6.01673 3.49131 7.11661 2.73883 8.31898 2.16338L9.54975 5.13514ZM19.1328 1.95263C20.5166 2.54982 21.7736 3.37329 22.8757 4.4044L20.6182 6.66184C19.8196 5.94353 18.9047 5.35299 17.9047 4.92129L19.1328 1.95263ZM21.2509 7.28432L23.5035 5.03177C24.4587 6.05223 25.236 7.20491 25.8204 8.4685L22.9373 9.74941C22.5003 8.84297 21.9293 8.01285 21.2509 7.28432ZM17.4907 5.70882C18.4087 6.09704 19.2468 6.62857 19.99 7.29054L18.1678 9.11273C17.1455 8.22359 15.8389 7.65258 14.4023 7.55453V5.00648C15.4711 5.0575 16.508 5.29309 17.4907 5.70838V5.70882ZM17.8678 17.8652C16.8234 18.9096 15.4352 19.4846 13.9581 19.4846C12.4811 19.4846 11.0929 18.9096 10.0484 17.8652C9.00403 16.8208 8.42902 15.4325 8.42902 13.9555C8.42902 12.4785 9.00403 11.0902 10.0484 10.0458C11.0929 9.00136 12.4811 8.42635 13.9581 8.42635C15.4352 8.42635 16.8234 9.00136 17.8678 10.0458C18.9123 11.0902 19.4873 12.4785 19.4873 13.9555C19.4873 15.4325 18.9123 16.8208 17.8678 17.8652ZM13.5145 7.55453C12.0769 7.65258 10.7694 8.22404 9.74674 9.1145L7.92455 7.29231C8.66772 6.62901 9.50716 6.09704 10.426 5.70838C11.4088 5.29265 12.4456 5.05705 13.5145 5.00648V7.55453ZM9.11894 9.74186C8.22803 10.7645 7.65568 12.0721 7.55719 13.51H4.89999C4.96211 12.4829 5.1946 11.4855 5.59524 10.5392C6.00564 9.56883 6.57533 8.68768 7.29098 7.91435L9.11894 9.74231V9.74186ZM7.55719 14.3974C7.65524 15.8358 8.2267 17.1438 9.11761 18.1669L7.17962 20.1049C6.51632 19.3617 5.98435 18.5223 5.59568 17.6034C5.16487 16.5847 4.92794 15.5075 4.88934 14.3974H7.55763H7.55719ZM7.80121 20.738L9.74497 18.7943C10.7681 19.6856 12.0761 20.2579 13.5145 20.356V23.1357C12.4456 23.0846 11.4088 22.849 10.426 22.4338C9.45569 22.0233 8.57454 21.4537 7.80121 20.738ZM14.4018 20.356C15.8393 20.2579 17.1464 19.6865 18.1691 18.7965L20.1129 20.7402C19.34 21.4545 18.4597 22.0238 17.4903 22.4338C16.5075 22.8495 15.4702 23.0851 14.4018 23.1357V20.356ZM18.7969 18.1691C19.6892 17.1455 20.2615 15.8367 20.3591 14.3974H23.0274C22.9884 15.5075 22.7519 16.5847 22.3211 17.6034C21.9319 18.5232 21.3991 19.363 20.7353 20.1071L18.7974 18.1691H18.7969ZM20.3591 13.51C20.2606 12.0712 19.6878 10.7628 18.7956 9.73965L20.6231 7.91213C21.3396 8.68591 21.9102 9.56794 22.3211 10.5392C22.7217 11.486 22.9542 12.4829 23.0163 13.51H20.3591ZM18.3062 1.62875L17.0746 4.60628C16.228 4.32765 15.3318 4.15949 14.4018 4.11867V0.895788C15.744 0.940156 17.0524 1.18595 18.3062 1.62919V1.62875ZM13.5145 4.11867C12.407 4.16703 11.3467 4.39642 10.3621 4.77754L9.13225 1.80755C10.5303 1.25118 12.0011 0.94548 13.5145 0.895345V4.11867ZM1.70462 9.40822L4.58321 10.6035L4.92351 9.78401L2.04137 8.58697C2.63146 7.27767 3.42698 6.0855 4.4115 5.03398L6.66406 7.28654C5.1276 8.93747 4.14529 11.1102 4.01175 13.51H0.900225C0.946811 12.0974 1.21657 10.722 1.70462 9.40822ZM0.900225 14.3974H4.00154C4.03393 15.4001 4.21362 16.3651 4.52109 17.2715L1.68421 18.4437C1.20903 17.1469 0.946811 15.7901 0.900669 14.3969L0.900225 14.3974ZM4.84365 18.0986C5.27268 19.068 5.85124 19.9562 6.55092 20.7336L4.41106 22.8734C3.41322 21.8073 2.60972 20.5965 2.01741 19.2663L4.84365 18.0986ZM9.13225 26.0999L10.2783 23.3322C11.2863 23.7333 12.3755 23.9738 13.5145 24.0239V27.0121C12.0011 26.9619 10.5303 26.6562 9.13225 26.0999ZM14.4018 24.0239C15.4356 23.9786 16.4286 23.7759 17.3572 23.4391L18.3417 26.2663C17.0772 26.717 15.7568 26.9673 14.4018 27.0121V24.0239ZM26.1576 18.6421L23.3522 17.4783L23.0123 18.2978L25.811 19.4584C25.2276 20.7141 24.4534 21.8601 23.5035 22.8752L21.3636 20.7353C22.8859 19.0454 23.8371 16.8314 23.9156 14.3969H27.017C26.9686 15.8606 26.6807 17.2849 26.1584 18.6416L26.1576 18.6421Z" fill="currentColor"/>\n  </g>\n  <defs>\n  <clipPath id="clip0_245_1638">\n  <rect width="60" height="27.907" fill="currentColor"/>\n  </clipPath>\n  </defs>\n  </svg>',pencil:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"\n  viewBox="0 0 16 16" fill="currentColor">\n<path d="M5,14.1H1.9V11l8.4-8.4l3.1,3.1L5,14.1z M3.4,12.6h0.9l6.9-6.9l-0.9-0.9l-6.9,6.9V12.6z"/>\n<rect x="12.3" y="0.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.6863 10.0711)" width="1.5" height="4.3"/>\n</svg>'},nr=S`
  .grain-icon {
    display: block;
  }

  .grain-icon-svg {
    /* works in tandem with wrapper css */
    display: block;
    height: 100%;
    width: 100%;
  }

  .grain-icon-svg {
    & svg {
      /* reset native inline height behavior */
      vertical-align: middle;
    }
  }
`;
/**
	 * @license
	 * Copyright 2018 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var or=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let ar=class extends kt{constructor(){super(...arguments),this.name="",this.fill="",this.width="",this.height="",this.class=""}render(){const t=rr[this.name];if(!t)return ht``;const e=t(),i=this.class?`grain-icon ${this.class}`:"grain-icon",r={width:this.width||null,height:this.height||null,color:this.fill||null};return ht`
      <span
        role="img"
        style=${ir(r)}
        class=${i}
        part="grain-icon"
      >
        <span class="grain-icon-svg" part="grain-icon-svg-wrapper">
          ${Xi(e)}
        </span>
      </span>
    `}};ar.styles=nr,or([Lt({type:String})],ar.prototype,"name",void 0),or([Lt({type:String})],ar.prototype,"fill",void 0),or([Lt({type:String})],ar.prototype,"width",void 0),or([Lt({type:String})],ar.prototype,"height",void 0),or([Lt({type:String})],ar.prototype,"class",void 0),ar=or([yi("grain-icon")],ar);var hr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let lr=!1;t.Footer=class extends kt{constructor(){super(...arguments),this._handleOneTrustGeo=()=>{var t,e;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("ot-sdk-btn");if(void 0!==window.OneTrust&&"function"==typeof window.OneTrust.getGeolocationData){"US"===(null===(e=window.OneTrust.getGeolocationData().country)||void 0===e?void 0:e.toUpperCase())?(lr=!0,null==i||i.classList.remove("is-hidden"),this.requestUpdate()):null==i||i.classList.remove("is-hidden")}else setTimeout(this._handleOneTrustGeo,100)}}handleOneTrust(t){void 0!==window.OneTrust&&"function"==typeof window.OneTrust.ToggleInfoDisplay&&(window.OneTrust.ToggleInfoDisplay(),t.preventDefault())}connectedCallback(){super.connectedCallback(),window.addEventListener("load",this._handleOneTrustGeo)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("load",this._handleOneTrustGeo)}render(){return ht`
      <footer class="grain-footer">
        <div class="footer-wrapper">
          <div class="footer-content">
            <div class="footer-logo">
              ${Ki.logo.map((t=>ht`
                <a href=${t.link}>
                  <grain-icon name=${t.icon} fill="var(--footer-logo-fill)" width="80px" height="80px"></grain-icon>
                </a>
              `))}
            </div>
            <nav class="footer-primary">
              <div class="footer-primary-wrapper">
                <div class="footer-identity">
                  <div class="footer-masthead">
                    <div class="footer-headline">
                      ${Ki.headline.map((t=>ht`
                        <h4 class="footer-headline-text">${t.text}</h4>
                      `))}
                    </div>

                    <div class="footer-engagement">
                      <ul class="footer-engagement-list">
                        ${Ki.cta.map((t=>ht`
                          <li class="footer-engagement-item">
                            <grain-button 
                              as="a" 
                              href=${t.link} 
                              variant=${t.variant}
                              id=${t.id}
                              fullWidth
                            >
                              ${t.text}
                            </grain-button>
                          </li>
                        `))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="footer-index">
                  ${Ki.index.map((t=>ht`
                    <section class="footer-index-section">
                    ${ht`
                      <h5 class="footer-index-headline">
                        ${t.link?ht`<a href="${t.link}">${t.headline}</a>`:t.headline}
                      </h5>
                    `}
                      <ul class="footer-index-list">
                        ${t.items.map((t=>ht`
                          <li class="footer-index-list-item">
                            <a href=${t.link}>${t.text}</a>
                          </li>
                        `))}
                      </ul>
                    </section>
                  `))}
                </div>
              </div>
            </nav>
            
            <span class="footer-divider"></span>

            <nav class="footer-secondary">
              <div class="footer-legal">
                <div class="footer-terms">
                  <ul class="footer-terms-list">
                    ${Ki.legal.map((t=>ht`
                      <li class="footer-terms-list-item  footer-terms-list-item--legal">
                        <a href=${t.link} id=${_i(t.id)}>${t.text}</a>
                      </li>
                    `))}
                    ${Ki.cookies.map((t=>ht`
                      <li class="footer-terms-list-item  footer-terms-list-item--cookies">
                        <a href=${t.link} id="ot-sdk-btn" class="one-trust-anchor  ot-sdk-show-settings  is-hidden" @click="${this.handleOneTrust}">
                          ${lr?ht`<grain-icon name="oneTrust" class="one-trust-icon  js-one-trust-icon"></grain-icon>${t.USResidentText}`:ht`${t.text}`}
                        </a>
                      </li>
                    `))}
                  </ul>
                </div>

                <div class="footer-copyright">
                  ${Ki.copyright.map((t=>ht`
                    <p class="footer-copyright-text">${t.text}</p>
                  `))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    `}},t.Footer.styles=Ji,t.Footer=hr([yi("grain-footer")],t.Footer);const sr=S`
  * {
    box-sizing: border-box;
  }

  .grain-modal {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 9999;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 32px;
    color: var(--grain-color-typography-text-primary);
    font-size: 13px;
    line-height: 17px;
  }

  .scrim {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: color-mix(
      in srgb,
      var(--grain-global-color-background-1),
      transparent 50%
    );
    z-index: 1;
  }

  .content {
    display: block;
    background-color: var(--grain-global-color-gray-950);
    width: 100%;
    max-width: 500px;
    position: relative;
    margin: auto;
    padding: 16px;
    z-index: 2;
  }
`;var dr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let cr=class extends kt{constructor(){super(...arguments),this._open=()=>{this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))},this._close=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._open()}render(){return ht`<div class="grain-modal">
      <div class="scrim" @click="${this._close}"></div>
      <div class="content">
        <slot></slot>
      </div>
    </div>`}};cr.styles=sr,cr=dr([yi("grain-modal")],cr);
/**
	 * @license
	 * Copyright 2021 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
const fr=(t,e,i)=>{for(const i of e)if(i[0]===t)return(0,i[1])();return null==i?void 0:i()};var pr;!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.IOS=1]="IOS",t[t.COMP=2]="COMP",t[t.ANDROID=3]="ANDROID",t[t.STRIPE=6]="STRIPE"}(pr||(pr={}));const gr=S``,wr=S`
  .title {
    margin: 0;
    font-size: 21px;
    font-weight: 500;
    line-height: 28px;
  }

  .split {
    margin-top: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 16px;
  }

  .qr {
    flex: 1;
    min-width: 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  .text {
    flex: 1;
    min-width: 0;

    p {
      font-size: 13px;
      font-weight: 500;
      margin: 0;
    }

    p + p {
      margin-top: 12px;
    }
  }

  .buttons {
    margin-top: 48px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 16px;

    & > * {
      flex: 1;
      min-width: 0;
      max-width: 50%;
    }
  }
`;var ur=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Hr=class extends kt{constructor(){super(...arguments),this._close=()=>{this.dispatchEvent(new CustomEvent("close"))}}render(){return ht`<div class="apple">
      <h2 class="title">Please upgrade through the App Store</h2>
      <div class="split">
        <div class="qr">
          <grain-icon name="appleUpgradeQR" width="100%" height="auto" />
        </div>
        <div class="text">
          <p>
            It looks like you purchased your membership through the App Store on
            iOS. That means you will need to upgrade to Pro through the App
            Store as well.
          </p>
          <p>Use the QR code on your iOS device to upgrade.</p>
        </div>
      </div>
      <div class="buttons">
        <grain-button @click=${()=>this._close()} size="lg" ?fullwidth=${!0}
          >Cancel</grain-button
        >
      </div>
    </div>`}};Hr.styles=wr,ur([b({context:vi,subscribe:!0})],Hr.prototype,"authentication",void 0),Hr=ur([yi("grain-modal-upgrade-apple")],Hr);const Vr=S`
  .title {
    margin: 0;
    font-size: 21px;
    font-weight: 500;
    line-height: 28px;
  }

  .description {
    margin-top: 16px;
  }

  .steps {
    counter-reset: steps 0;
    margin-top: 16px;
  }

  .step {
    counter-increment: steps;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    opacity: 0.5;

    &.on {
      opacity: 1;
    }
  }

  .separator {
    display: block;
    width: 1px;
    height: 26px;
    background-color: var(--grain-color-typography-text-primary);
    margin-left: 17px;
    opacity: 0.5;
  }

  .number {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px solid var(--grain-color-typography-text-primary);
  }

  .counter {
    line-height: 1;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;

    &::before {
      content: counter(steps);
    }
  }

  .text {
    margin-left: 8px;
    align-self: center;
  }

  .buttons {
    margin-top: 48px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 16px;

    & > * {
      flex: 1;
      min-width: 0;
      max-width: 50%;
    }
  }
`;var mr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let yr=class extends kt{constructor(){super(...arguments),this.step="unsubscribe",this.chosenProduct=!1,this._close=()=>{this.dispatchEvent(new CustomEvent("close"))},this._continueToGooglePlay=()=>{window.open("https://play.google.com/store/account/subscriptions","_blank"),this.step="resubscribe"},this._contactSupport=()=>{window.open("https://support.vsco.co","_blank")},this._continueToStripe=()=>{var t,e;const i=null===(e=null===(t=this.authentication)||void 0===t?void 0:t.products)||void 0===e?void 0:e.find((t=>t.active&&t.name.toLowerCase().includes("pro")&&"year"===t.default_price.recurring.interval));i&&(this.dispatchEvent(new CustomEvent("chooseProduct",{detail:{product:i}})),this.chosenProduct=!0)},this._getButtons=()=>"unsubscribe"===this.step?ht`
        <grain-button
          @click=${()=>this._contactSupport()}
          size="lg"
          variant="secondary"
          ?fullwidth=${!0}
          ?disabled=${this.chosenProduct}
          >Contact Support</grain-button
        >
        <grain-button
          @click=${()=>this._continueToGooglePlay()}
          size="lg"
          variant="primary"
          ?fullwidth=${!0}
          ?disabled=${this.chosenProduct}
          >Cancel Current Plan</grain-button
        >
      `:ht`
      <grain-button
        @click=${()=>this._continueToStripe()}
        size="lg"
        ?fullwidth=${!0}
        ?disabled=${this.chosenProduct}
        >Upgrade to Pro</grain-button
      >
    `}render(){return ht`<div class="google">
      <h2 class="title">Upgrade with Android membership</h2>
      <p class="description">
        It looks like your Plus membership was made through Google Play, which
        doesn&apos;t support a Pro membership. To upgrade to Pro, please do the
        following:
      </p>
      <div class="steps">
        <div class="step ${"unsubscribe"===this.step?"on":""}">
          <div class="number">
            ${"unsubscribe"===this.step?ht`<span class="counter"></span>`:st}
            ${"resubscribe"===this.step?ht`<span class="check">
                  <grain-icon name="checkmark" />
                </span>`:st}
          </div>
          <div class="text">Cancel your current membership on Google Play.</div>
        </div>
        <div class="separator"></div>
        <div class="step ${"resubscribe"===this.step?"on":""}">
          <div class="number">
            <span class="counter"></span>
          </div>
          <div class="text">Start a new membership through our site.</div>
        </div>
      </div>
      <div class="buttons">${this._getButtons()}</div>
    </div>`}};yr.styles=Vr,mr([b({context:vi,subscribe:!0})],yr.prototype,"authentication",void 0),mr([At()],yr.prototype,"step",void 0),mr([At()],yr.prototype,"chosenProduct",void 0),yr=mr([yi("grain-modal-upgrade-google")],yr);const vr=S`
  @keyframes loading {
    0% {
      opacity: 0.25;
      transform: rotate(0deg);
    }
    50% {
      opacity: 0.5;
      transform: rotate(90deg);
    }
    100% {
      opacity: 0.25;
      transform: rotate(180deg);
    }
  }

  .loading {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }

  grain-icon {
    opacity: 0.5;
    animation: loading 1s linear infinite;
  }
`;var xr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let br=class extends kt{render(){return ht`<div class="loading">
      <grain-icon name="vscoLogo" width="24px" height="24px" />
    </div>`}};br.styles=vr,br=xr([yi("grain-modal-upgrade-loading")],br);const Mr=t=>{const e=t.find((t=>t.active&&t.name.toLowerCase().includes("plus")&&"month"===t.default_price.recurring.interval)),i=t.find((t=>t.active&&t.name.toLowerCase().includes("plus")&&"year"===t.default_price.recurring.interval)),r=t.find((t=>t.active&&t.name.toLowerCase().includes("pro")&&"month"===t.default_price.recurring.interval)),n=t.find((t=>t.active&&t.name.toLowerCase().includes("pro")&&"year"===t.default_price.recurring.interval));return{plusMonthly:e,plusYearly:i,proMonthly:r,proYearly:n}},Zr=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),Cr=t=>Zr.format(t),kr=S`
  .title {
    margin: 0;
    font-size: 21px;
    font-weight: 500;
    line-height: 28px;
    color: var(--grain-color-membership-pro);
  }

  .description {
    margin-top: 32px;
    font-size: 13px;
    line-height: 17px;
  }

  .features {
    margin-top: 32px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 16px;
  }
  .features .feature {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 8px;
  }
  .features .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
  .features .text {
    flex: 1;
    min-width: 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
    align-self: center;
  }

  .buttons {
    margin-top: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 16px;
  }
  .buttons > * {
    flex: 1;
    min-width: 0;
  }
  .buttons .claim {
    font-size: 11px;
    font-weight: 500;
    line-height: 14px;
    color: var(--grain-color-typography-text-tertiary);
    margin-top: 8px;
  }

  .disclaimer {
    margin-top: 16px;
  }
  .disclaimer:empty {
    display: none;
  }
  .disclaimer p {
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
    color: var(--grain-color-typography-text-secondary);
  }
`,$r={default:"Upgrade to Pro for the full set of presets and tools",trial:"Start your Pro membership with a 7 day free trial"},Sr={yearly:"Per Year",monthly:"Per Month"},_r={plus:"Your payment for Plus will be credited towards this purchase",monthly:"billed monthly",yearly:"billed annually"};var Lr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Ar=class extends kt{constructor(){super(...arguments),this.promptDescription="",this.chosenProduct=!1,this._close=()=>{this.dispatchEvent(new CustomEvent("close"))},this._chooseProduct=t=>{this.chosenProduct=!0,this.dispatchEvent(new CustomEvent("chooseProduct",{detail:{product:t}}))},this._getPromptTitle=()=>{var t;const e=Mr((null===(t=this.authentication)||void 0===t?void 0:t.products)||[]);return Object.values(e).every((t=>"true"===(null==t?void 0:t.metadata.trial_eligible)))?$r.trial:$r.default},this._getFeatures=()=>{var t;const e=Mr((null===(t=this.authentication)||void 0===t?void 0:t.products)||[]),{proYearly:i}=e;if(!i)return"";const r=i.metadata.features.split("|||");return ht`
      ${r.map((t=>ht`<div class="feature">
          <div class="icon">
            <grain-icon
              name="checkmark"
              width="24px"
              height="24px"
            ></grain-icon>
          </div>
          <div class="text">${t}</div>
        </div>`))}
      <div class="feature">
        <div class="icon">
          <grain-icon name="plus" width="24px" height="24px"></grain-icon>
        </div>
        <div class="text">Everything in Plus and Starter</div>
      </div>
    `},this._getButtons=()=>{var t,e;const i=null===(t=this.authentication)||void 0===t?void 0:t.subscription;if(!i)return ht``;const r=Mr((null===(e=this.authentication)||void 0===e?void 0:e.products)||[]),{plusMonthly:n,plusYearly:o,proMonthly:a,proYearly:h}=r;if(!(n&&o&&a&&h))return"";const l=Cr(a.default_price.unit_amount/100),s=Cr(h.default_price.unit_amount/100),d=Cr((h.default_price.unit_amount/12-1)/100);return i.is_active&&i.sku===n.id?ht`
        <grain-button
          size="lg"
          ?fullWidth=${!0}
          variant="secondary"
          @click=${()=>this._close()}
          ?disabled=${this.chosenProduct}
          >No thanks</grain-button
        >
        <grain-button
          size="lg"
          ?fullWidth=${!0}
          @click=${()=>this._chooseProduct(a)}
          ?disabled=${this.chosenProduct}
          >${l} ${Sr.monthly}*</grain-button
        >
      `:i.is_active&&i.sku===o.id?ht`
        <grain-button
          size="lg"
          ?fullWidth=${!0}
          variant="secondary"
          @click=${()=>this._close()}
          ?disabled=${this.chosenProduct}
          >No thanks</grain-button
        >
        <grain-button
          size="lg"
          ?fullWidth=${!0}
          @click=${()=>this._chooseProduct(h)}
          ?disabled=${this.chosenProduct}
          >${s} ${Sr.yearly}*</grain-button
        >
      `:ht`
      <div>
        <grain-button
          size="lg"
          ?fullWidth=${!0}
          variant="secondary"
          @click=${()=>this._chooseProduct(a)}
          ?disabled=${this.chosenProduct}
          >${l} ${Sr.monthly}*</grain-button
        >
        <div class="claim">* ${_r.monthly}</div>
      </div>
      <div>
        <grain-button
          size="lg"
          ?fullWidth=${!0}
          @click=${()=>this._chooseProduct(h)}
          ?disabled=${this.chosenProduct}
          >${d} ${Sr.monthly}**</grain-button
        >
        <div class="claim">** ${_r.yearly}</div>
      </div>
    `},this._getDisclaimer=()=>{var t;const e=null===(t=this.authentication)||void 0===t?void 0:t.subscription;return e&&e.is_active?ht`<p>* ${_r.plus}</p>`:ht``}}render(){return ht`<div class="prompt">
      <!-- Title -->
      <h2 class="title">${this._getPromptTitle()}</h2>

      <!-- Description -->
      ${_i(this.promptDescription)?ht`<p class="description">${this.promptDescription}</p>`:null}

      <!-- Features -->
      <div class="features">${this._getFeatures()}</div>

      <!-- Buttons -->
      <div class="buttons">${this._getButtons()}</div>

      <!-- Disclaimer -->
      <div class="disclaimer">${this._getDisclaimer()}</div>
    </div>`}};Ar.styles=kr,Lr([b({context:vi,subscribe:!0})],Ar.prototype,"authentication",void 0),Lr([Lt({type:String})],Ar.prototype,"promptDescription",void 0),Lr([At()],Ar.prototype,"chosenProduct",void 0),Ar=Lr([yi("grain-modal-upgrade-prompt")],Ar);var Or=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},Er=function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function h(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,h)}l((r=r.apply(t,e||[])).next())}))};let Pr=class extends kt{constructor(){super(...arguments),this.flowState="loading",this.promptDescription="",this._setFlowState=()=>{const t=(()=>this.authentication?"idle"===this.authentication.reqStatus||"loading"===this.authentication.reqStatus?"loading":"failed"===this.authentication.reqStatus?"failed":"prompt":"loading")();this.flowState!==t&&(this.flowState=t,this.requestUpdate())},this._chooseProduct=(t,e=!1)=>Er(this,void 0,void 0,(function*(){if(!t)return;if(!this.authentication)return;if(!this.authentication.subscription)return;const i=this.authentication.subscription;if(i.is_active&&!e)if(i.source!==pr.STRIPE)i.source!==pr.IOS?i.source!==pr.ANDROID||(this.flowState="google"):this.flowState="apple";else{let t;try{t=yield mi(this.authentication.host,this.authentication.authToken,"api/subscriptions/2.0/checkout/provider-portal")}catch(t){return void console.error(t)}window.location.href=t.redirect_url}else{let e;try{e=yield function(t,e,i,r={},n){return ui(this,void 0,void 0,(function*(){const o=`${t}/${i}`,a=Hi(e);return Vi((()=>wi.post(o,r,Object.assign(Object.assign({},n),{headers:Object.assign(Object.assign({},a),null==n?void 0:n.headers)}))))}))}(this.authentication.host,this.authentication.authToken,"api/subscriptions/2.0/checkout",{price_id:t.default_price.id})}catch(t){return void console.error(t)}window.location.href=e.redirect_url}})),this._open=()=>{var t,e;null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("grain-modal"))||void 0===e||e._open()},this._close=()=>{var t,e;null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("grain-modal"))||void 0===e||e._close()}}connectedCallback(){super.connectedCallback(),this._setFlowState()}updated(t){t.has("flowState")||this._setFlowState()}render(){return ht`<grain-modal class="grain-modal-upgrade">
      ${fr(this.flowState,[["loading",()=>ht`<grain-modal-upgrade-loading
              @close=${()=>this._close()}
            />`],["prompt",()=>ht`<grain-modal-upgrade-prompt
              .promptDescription=${this.promptDescription}
              @chooseProduct=${t=>this._chooseProduct(t.detail.product)}
              @close=${()=>this._close()}
            />`],["apple",()=>ht`<grain-modal-upgrade-apple
              @close=${()=>this._close()}
            />`],["google",()=>ht`<grain-modal-upgrade-google
              @chooseProduct=${t=>this._chooseProduct(t.detail.product,!0)}
              @close=${()=>this._close()}
            />`]])}
    </grain-modal>`}};Pr.styles=gr,Or([b({context:vi,subscribe:!0})],Pr.prototype,"authentication",void 0),Or([At()],Pr.prototype,"flowState",void 0),Or([Lt({type:String})],Pr.prototype,"promptDescription",void 0),Pr=Or([yi("grain-modal-upgrade")],Pr);const Rr=S`
/*
  @TODO:

  Move space & font sizes to Tokens
 */
  :host {
    --navbar-space-1: 8px;
    --navbar-space-5: 12px;
    --navbar-space-2: 16px;
    --navbar-space-3: 20px;
    --navbar-space-4: calc(var(--navbar-space-2) * 2);

    --navbar-padding-top: var(--navbar-space-5);
    --navbar-padding-bottom: var(--navbar-space-5);

    --section-space: 40px;
  }

  /*
    browser default reset
  */
  ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .navbar {
    background-color: var(--grain-color-background-1);
    padding-top: var(--navbar-padding-top);
    padding-right: var(--navbar-space-3);
    padding-bottom: var(--navbar-padding-bottom);
    padding-left: var(--navbar-space-3);
  }

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    padding-top: var(--section-space);
    padding-bottom: var(--section-space);
  }

  .nav {
    /*
      avoid margin collapse
    */
    display: flex;
    flex-direction: column;
  }

  /*
    Shared nav-item
  */
  .nav-item {
    display: flex; flex-direction: column;
    padding-left: 0;
    margin-bottom: var(--section-space);
  }

  .nav-item {
    & li {
      list-style: none;
    }
  }

  .nav-item {
    & a {
      text-decoration: none;
    }
    
    & a:hover {
      text-decoration: underline;
    }
  }

  /*
    nav-items not index
  */
  .nav-item:not(.index) {
    & li {
      padding-top: var(--navbar-space-2);
      padding-bottom: var(--navbar-space-2);
    }
  }

  .nav-item:not(.index) {
    & a {
      /* for icon benefit */
      display: flex;
      align-items: center;
      max-width: fit-content;
      font-size: 30px;
      font-weight: 500;
        /* @TODO
          Figma needs values for "Navbar Link," etc
          This falls apart when Theme switching
        */
      color: var(--grain-global-color-white-100);
    }
  }

  .divider {
    display: block;
    height: 1px;
    background-color: var(--grain-global-color-gray-600);
    /*
      Use negative margin to match design comp
      when user logged in
    */
    margin-top: calc(var(--section-space) * -1 + var(--navbar-space-3));
    margin-bottom: var(--navbar-space-3);
  }

  /*
    Index nav-item
  */
  .nav-item {
    &.index {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(3,1fr);
      margin-bottom: 0;
    }
  }

  .nav-item {
    &.index {
      & li {
        padding-top: var(--navbar-space-1);
        padding-bottom: var(--navbar-space-1);
        font-size: 17px;
      }
    }
  }

  .nav-item {
    &.index {
      & a {
        color: var(--grain-global-color-gray-600);
      }
    }
  }

  .nav-icon {
    margin-right: 10px;
  }

  .nav-icon::part(grain-icon) {
    display: flex;
  }

  .is-hidden {
    display: none;
  }

  .menu-button {
    display: flex;
    /*
      Reset default
      @TODO: Integrate Icon component
      into Button component
    */
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  .menu-button {
    & :hover {
      cursor: pointer;
    }
  }

  .menu-content {
    margin-top: var(--section-space);
  }

  .menu-content-item {
    &:not(:last-child) {
      margin-bottom: var(--navbar-space-2);
    }
  }

  /* account variant */
  .menu-content-item--account {
    display: flex;

    & > * {
      flex: 1;
    }

    & :not(:last-child) {
      margin-right: 10px;
    }
  }
`,jr={logo:{altText:"A circular black and white logo made of lines, reminiscent of a focusing ring within a camera viewfinder, etc.",link:"https://www.vsco.co",icon:"vscoWordmark"},navPrimary:[{text:"Explore",link:"https://www.vsco.co",id:"navbar-explore",icon:"explore"},{text:"Profile",link:"//{{host}}/user/signup",loggedInLink:"//{{host}}/{{username}}",id:"navbar-profile",icon:"profile"},{text:"Studio",link:"https://vs.co/Jg7o/gzzobx82",id:"navbar-studio",icon:"studio",external:!0}],navSecondary:[{text:"Search",link:"//{{host}}/search",id:"navbar-search",icon:"search"},{text:"Account",link:"//{{host}}/user/account",id:"navbar-account",icon:"gear"}],navIndex:[{text:"Features",link:"https://vsco.co/features",id:"navbar-index-features"},{text:"Plans",link:"https://www.vsco.co/subscribe/plans",id:"navbar-index-plans"},{text:"What's New",link:"https://www.vsco.co/stories",id:"navbar-index-whats-new"},{text:"Forum",link:"https://support.vsco.co/hc/en-us/community/topics",id:"navbar-index-forum"},{text:"Support",link:"https://support.vsco.co/hc/en-us",id:"navbar-index-support"},{text:"Safety",link:"https://www.vsco.co/safety",id:"navbar-index-safety"}],download:[{text:"Get the app",link:"https://vs.co/download",id:"navbar-get-the-app",variant:"primary",size:"lg"}],account:[{text:"Sign up",link:"//{{host}}/user/signup",id:"navbar-sign-up",variant:"secondary",size:"lg"},{text:"Log in",link:"//{{host}}/user/login",id:"navbar-log-in",variant:"secondary",size:"lg"}]},Tr=S`
  a {
    display: flex;
    align-items: center;
    padding-top: var(--sidebar-space-1);
    padding-bottom: var(--sidebar-space-1);
    padding-left: var(--sidebar-space-2);
    padding-right: var(--sidebar-space-2);
    color: var(--grain-global-color-gray-550);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
  }
  a:hover {
    background-color: var(--grain-color-background-2);
  }
  .is-active {
    color: var(--grain-global-color-white-100);
  }

  .icon-container {
    width: 24px;
    height: 24px;
    margin-right: var(--icon-margin-right);
  }
`;var Dr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let Nr=class extends kt{constructor(){super(...arguments),this.href="",this.exactMatch=!1,this.icon="",this.id="",this.isActive=!1}connectedCallback(){super.connectedCallback();const t=(e=null===window||void 0===window?void 0:window.location.href).endsWith("/")?e.slice(0,-1):e;var e;(this.exactMatch&&t===this.href||!this.exactMatch&&(null===window||void 0===window?void 0:window.location.href.includes(this.href)))&&(this.isActive=!0)}render(){const t={"is-active":this.isActive};return ht`
      <a 
        href=${this.href} 
        class=${Si(t)}
        id=${this.id}
      >
        <div class="icon-container">
          <grain-icon name=${this.icon}></grain-icon>
        </div>
        <slot></slot>
      </a>
    `}};Nr.styles=Tr,Dr([Lt({type:String})],Nr.prototype,"href",void 0),Dr([Lt({type:String})],Nr.prototype,"exactMatch",void 0),Dr([Lt({type:String})],Nr.prototype,"icon",void 0),Dr([Lt({type:String})],Nr.prototype,"id",void 0),Dr([At()],Nr.prototype,"isActive",void 0),Nr=Dr([yi("grain-nav-link")],Nr);var zr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};t.Navbar=class extends Wi{menuToggle(){var t,e;null===(t=this.renderRoot.querySelector(".js-menu"))||void 0===t||t.classList.toggle("is-hidden"),null===(e=this.renderRoot.querySelector(".js-menu-toggle"))||void 0===e||e.classList.toggle("is-hidden")}closeToggle(){var t;null===(t=this.renderRoot.querySelector(".js-close"))||void 0===t||t.classList.toggle("is-hidden")}handleMenuToggle(){this.menuToggle(),this.closeToggle()}render(){const t={"nav-item":!0,index:!0,"is-logged-in":this.isLoggedIn};return ht`
      <div class="navbar">
        <section class="banner">
          <div class="logo">
            <a href=${Gi(jr.logo.link,this)}>
              <grain-icon name=${jr.logo.icon} fill="white"></grain-icon>
            </a>
          </div>

          <div class="menu-toggle  js-menu-toggle">
            <!-- 
              @TODO:
              Update Button to accept Icon component
            -->
            <button @click="${this.handleMenuToggle}" class="menu-button">
              <grain-icon name="hamburger" fill="white"></grain-icon>
            </button>
          </div>

          <div class="menu-close  js-close  is-hidden">
             <!-- 
              @TODO:
              Update Button to accept Icon component
            -->
            <button @click="${this.handleMenuToggle}" class="menu-button">
              <grain-icon name="close" fill="white"></grain-icon>
            </button>
          </div>
        </section>

        <section class="menu js-menu is-hidden">
          <nav class="nav">
            <ul class="nav-item  primary">
              ${jr.navPrimary.map((t=>{var e,i;return ht`
                <li>
                  <a href="${this.isLoggedIn?Gi(null!==(e=t.loggedInLink)&&void 0!==e?e:t.link,this):Gi(t.link,this)}" target="${t.external?"_blank":st}" rel="${t.external?"noopener noreferrer":st}" id=${_i(t.id)} class=${_i(null===(i=t.classNames)||void 0===i?void 0:i.join(" "))}>
                    <grain-icon name=${t.icon} class="nav-icon"></grain-icon>
                    ${t.text}
                    ${t.external?ht`<grain-icon name="external"></grain-icon>`:st}
                  </a>
                </li>
              `}))}
            </ul>

            ${this.isLoggedIn?ht`
              <span class="divider"></span>
            `:null}

            ${this.isLoggedIn?ht`
              <ul class="nav-item secondary">
                ${jr.navSecondary.map((t=>ht`
                  <li>
                    <a href=${Gi(t.link,this)} id=${_i(t.id)}>
                      <grain-icon name=${t.icon} class="nav-icon"></grain-icon>
                      ${t.text}
                    </a>
                  </li>
                `))}
              </ul>
            `:null}

            <ul class="${Si(t)}">
              ${jr.navIndex.map((t=>{var e;return ht`
                <li>
                  <a href=${Gi(t.link,this)} id=${_i(t.id)} class=${_i(null===(e=t.classNames)||void 0===e?void 0:e.join(" "))}> ${t.text} </a>
                </li>
              `}))}
            </ul>
          </nav>
          
          ${this.isLoggedIn?null:ht`
            <div class="menu-content">
            ${jr.download.map((t=>ht`
              <div class="menu-content-item">
                <grain-button as="a" size=${t.size} variant=${t.variant} href=${Gi(t.link,this)} fullWidth id=${_i(t.id)}>${t.text}</grain-button>
              </div>
              `))}
              <div class="menu-content-item  menu-content-item--account">
                ${jr.account.map((t=>ht`
                <grain-button as="a" size=${t.size} variant=${t.variant} href=${Gi(t.link,this)} fullWidth id=${_i(t.id)}>${t.text}</grain-button>
              `))}
              </div>
            </div>
          `}
        </section>
      </div>
    `}},t.Navbar.styles=Rr,t.Navbar=zr([yi("grain-navbar")],t.Navbar);const Ur=S`
  :host {
    /* @TODO
      Update space & font values from Tokens
    */
    --space-8: 8px;
    --space-10: 10px;
    --space-16: 16px;
    --space-90: 90px;

    --sidebar-width-wide: 148px;
    --sidebar-width-narrow: 60px;

    --sidebar-space-1: var(--space-8);
    --sidebar-space-2: var(--space-16);

    --icon-margin-right: var(--space-10);
    --section-spacer: var(--space-90);
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: var(--grain-color-background-1);
    height: 100dvh;
  }

  .sidebar {
    &.is-wide {
      width: var(--sidebar-width-wide);
    }
  }

  /*
    @TODO:

    Design TBD
  */
  .sidebar {
    &.is-narrow {
      width: var(--sidebar-width-narrow);

      .nav-text {
        display: none;
      }
    }
  }

  .logo {
    padding: var(--sidebar-space-2);
    margin-bottom: var(--section-spacer);
  }

  .vsco-logo {
    color: var(--grain-global-color-white-100);
  }

  .menu {
    margin-bottom: var(--section-spacer);
  }

  .nav {
    padding:0;
    margin: 0;
    list-style: none;
  }

  .nav--menu {
    & li {
      margin-top: var(--sidebar-space-1);
      margin-bottom: var(--sidebar-space-1);
    }
  }

  .content {
    margin-top: auto;
    /*
      Clear space for browser chrome URL dialog
      when hovering on links
    */
    padding-bottom: calc(var(--sidebar-space-2) * 3);
  }

  .nav--content {
    & li:first-child {
      margin-bottom: var(--sidebar-space-1);
    }
  }

  .content {
    .is-logged-out {
      padding-left: var(--sidebar-space-2);
      padding-right: var(--sidebar-space-2);
    }
  }
  
  .content-logged-out-item:not(:last-child) {
    display: block;
    margin-bottom: 16px;
  }
`,Br={logo:[{link:"https://www.vsco.co",iconWide:"vscoWordmark",iconNarrow:"vscoLogo",classNames:["vsco-logo"]}],nav:[{text:"Explore",link:"https://www.vsco.co",exactMatch:!0,id:"sidebar-explore",icon:"explore"},{text:"Profile",link:"//{{host}}/user/signup",loggedInLink:"//{{host}}/{{username}}",id:"sidebar-profile",icon:"profile"},{text:"Studio",link:"//studio.{{host}}",id:"sidebar-studio",icon:"studio"}],account:{loggedIn:[{text:"Search",link:"//{{host}}/search",id:"sidebar-loggedIn-search",icon:"search"},{text:"Account",link:"https://{{host}}/user/account",id:"sidebar-loggedIn-account",icon:"gear"}],loggedOut:[{text:"Sign Up",link:"//{{host}}/user/signup",id:"sidebar-loggedOut-sign-up",variant:"primary"},{text:"Log In",link:"//{{host}}/user/login",id:"sidebar-loggedOut-log-in",variant:"secondary"}]}};var Fr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};t.Sidebar=class extends Wi{constructor(){super(...arguments),this.variant="wide",this.isInlineStart=!0,this.isInlineEnd=!1,this.loginReqStatus="idle"}render(){let t=function(t,e){let i="idle";"succeeded"===t&&e?i="loggedIn":"succeeded"!==t||e?"loading"===t&&(i="loading"):i="loggedOut";return i}(this.loginReqStatus,this.isLoggedIn);return ht`
      <div class="sidebar ${"wide"==this.variant?"is-wide":"is-narrow"}">
        <div class="logo">
          ${Br.logo.map((t=>{var e;return ht`
            <a href=${Gi(t.link,this)}>
              <grain-icon name=${"wide"===this.variant?t.iconWide:t.iconNarrow} class=${_i(null===(e=t.classNames)||void 0===e?void 0:e.join(" "))}></grain-icon>
            </a>
          `}))}
        </div>

        <nav class="menu">
          <ul class="nav  nav--menu">
            ${Br.nav.map((t=>{var e,i;return ht`
              <li>
                <grain-nav-link
                  href=${this.isLoggedIn?Gi(null!==(e=t.loggedInLink)&&void 0!==e?e:t.link,this):Gi(t.link,this)}
                  exactMatch=${t.exactMatch}
                  icon=${t.icon}
                  class=${_i(null===(i=t.classNames)||void 0===i?void 0:i.join(" "))}
                  id=${t.id}
                >
                  <span class="nav-text">${t.text}</span>
                </grain-nav-link>
              </li>
            `}))}
          </ul>
        </nav>

        <div class="content">
          ${fr(t,[["loading",()=>null],["loggedOut",()=>ht`
              <div class="is-logged-out">
                ${Br.account.loggedOut.map((t=>ht`
                  <span class="content-logged-out-item">
                    <grain-button 
                      as="a" 
                      href=${Gi(t.link,this)} 
                      variant=${t.variant}
                      id=${t.id}
                      fullWidth
                    >
                      ${t.text}
                    </grain-button>
                  </span>
                `))}
              </div>`],["loggedIn",()=>ht`
              <div class="is-logged-in">
                <ul class="nav nav--content">
                  ${Br.account.loggedIn.map((t=>ht`
                    <li>
                      <grain-nav-link
                        href=${Gi(t.link,this)}
                        icon=${t.icon}
                        id=${t.id}
                      >
                        <span class="nav-text">${t.text}</span>
                      </grain-nav-link>
                    </li>
                  `))}
                </ul>
              </div>`]])}
        </div>
      </div>
    `}},t.Sidebar.styles=Ur,Fr([Lt({type:String})],t.Sidebar.prototype,"variant",void 0),Fr([Lt({type:Boolean})],t.Sidebar.prototype,"isInlineStart",void 0),Fr([Lt({type:Boolean})],t.Sidebar.prototype,"isInlineEnd",void 0),Fr([Lt({type:String,attribute:"login-req-status"})],t.Sidebar.prototype,"loginReqStatus",void 0),t.Sidebar=Fr([yi("grain-sidebar")],t.Sidebar);const Ir=[[S`
  @charset "utf-8";
  /***
    The new CSS reset - version 1.8.5 (last updated 14.6.2023)
    GitHub page: https://github.com/elad2412/the-new-css-reset
  ***/

  /*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
    - The "html" attribute is exclud, because otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
  */
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reapply the pointer cursor for anchor tags */
  a, button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol, ul, menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input, textarea {
    -webkit-user-select: auto;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* preformatted text - use only for this feature */
  :where(pre) {
    all: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* remove default dot (•) sign */
  ::marker {
    content: initial;
  }

  /* fix the feature of 'hidden' attribute.
      display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
    - fix for the content editable attribute will work properly.
    - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */
  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  /* Revert Modal native behavior */
  :where(dialog:modal) {
    all: revert;
  }
`],S`
.grain-theme--dark {
--grain-global-breakpoint-sm: 320px;
--grain-global-breakpoint-md: 720px;
--grain-global-breakpoint-lg: 992px;
--grain-global-breakpoint-xl: 1200px;
--grain-global-breakpoint-xxl: 1920px;
--grain-global-color-black-100: #000000;
--grain-global-color-black-lighten-20: #333333;
--grain-global-color-black-lighten-80: #cccccc;
--grain-global-color-white-100: #ffffff;
--grain-global-color-white-darken-20: #cccccc;
--grain-global-color-white-darken-80: #333333;
--grain-global-color-gray-100: #f6f6f6;
--grain-global-color-gray-150: #DDDDDD;
--grain-global-color-gray-200: #DDDDDD;
--grain-global-color-gray-250: #C0C0C0;
--grain-global-color-gray-300: #c0c0c0;
--grain-global-color-gray-350: #AAAAAA;
--grain-global-color-gray-400: #aaaaaa;
--grain-global-color-gray-500: #dddddd;
--grain-global-color-gray-550: #737373;
--grain-global-color-gray-600: #737373;
--grain-global-color-gray-700: #444444;
--grain-global-color-gray-750: #444444;
--grain-global-color-gray-800: #222222;
--grain-global-color-gray-850: #222222;
--grain-global-color-gray-900: #111111;
--grain-global-color-gray-950: #111111;
--grain-global-color-gray-050: #F6F6F6;
--grain-global-color-blue-100: #789db8;
--grain-global-color-blue-200: #1347ff;
--grain-global-color-blue-300: #0000ff;
--grain-global-color-blue-400: #3F5B6F;
--grain-global-color-preset-standard-0: #444444;
--grain-global-color-preset-standard-a: #aa3326;
--grain-global-color-preset-standard-acg: #000000;
--grain-global-color-preset-standard-aga: #219166;
--grain-global-color-preset-standard-al: #612010;
--grain-global-color-preset-standard-b: #de5539;
--grain-global-color-preset-standard-bbma: #2ff4da;
--grain-global-color-preset-standard-c: #e26b3c;
--grain-global-color-preset-standard-cg: #dc3300;
--grain-global-color-preset-standard-ch: #0000ff;
--grain-global-color-preset-standard-d: #50e3e1;
--grain-global-color-preset-standard-dog: #8a7661;
--grain-global-color-preset-standard-e: #eea237;
--grain-global-color-preset-standard-f: #fae547;
--grain-global-color-preset-standard-filmx: #ffffff;
--grain-global-color-preset-standard-g: #c8ca34;
--grain-global-color-preset-standard-grey: #373737;
--grain-global-color-preset-standard-h: #7fad3b;
--grain-global-color-preset-standard-hb: #a5acb2;
--grain-global-color-preset-standard-ind: #040e69;
--grain-global-color-preset-standard-j: #568f34;
--grain-global-color-preset-standard-lv: #00a297;
--grain-global-color-preset-standard-k: #397e3e;
--grain-global-color-preset-standard-m: #215652;
--grain-global-color-preset-standard-n: #124863;
--grain-global-color-preset-standard-null: #222222;
--grain-global-color-preset-standard-oak: #0000ff;
--grain-global-color-preset-standard-p: #1e69a2;
--grain-global-color-preset-standard-q: #257cbf;
--grain-global-color-preset-standard-s: #76afdc;
--grain-global-color-preset-standard-se: #0e1c33;
--grain-global-color-preset-standard-sum: #710905;
--grain-global-color-preset-standard-t: #b3cbe8;
--grain-global-color-preset-standard-tech: #d22329;
--grain-global-color-preset-standard-u: #5e6874;
--grain-global-color-preset-standard-v: #9012fe;
--grain-global-color-preset-standard-we: #000000;
--grain-global-color-preset-standard-x: #b288a9;
--grain-global-color-preset-standard-inf: #8c8278;
--grain-global-color-preset-standard-ir: #ba063c;
--grain-global-color-preset-standard-jm: #18b4d3;
--grain-global-color-preset-standard-kk: #ff2133;
--grain-global-color-preset-standard-l: #1ea544;
--grain-global-color-preset-standard-mtv: #0000ff;
--grain-global-color-preset-standard-nc: #000000;
--grain-global-color-preset-standard-oc: #000000;
--grain-global-color-preset-standard-pb: #d2142a;
--grain-global-color-preset-standard-ss: #00ff80;
--grain-global-color-preset-standard-tk: #000000;
--grain-global-color-preset-standard-wwf: #197daf;
--grain-global-color-preset-filmx-au: #601cbf;
--grain-global-color-preset-filmx-av: #e11f29;
--grain-global-color-preset-filmx-fa: #2b4297;
--grain-global-color-preset-filmx-ff: #3c2377;
--grain-global-color-preset-filmx-fn: #54a547;
--grain-global-color-preset-filmx-fp: #149627;
--grain-global-color-preset-filmx-fr: #24349d;
--grain-global-color-preset-filmx-fs: #268e36;
--grain-global-color-preset-filmx-ft: #ed101f;
--grain-global-color-preset-filmx-fv: #0056c7;
--grain-global-color-preset-filmx-ih: #000000;
--grain-global-color-preset-filmx-ka: #4161ac;
--grain-global-color-preset-filmx-kc: #f9b700;
--grain-global-color-preset-filmx-kcp: #e9a108;
--grain-global-color-preset-filmx-ke: #983503;
--grain-global-color-preset-filmx-kg: #0092e1;
--grain-global-color-preset-filmx-kp: #b256b1;
--grain-global-color-preset-filmx-kt: #5b9171;
--grain-global-color-preset-filmx-ku: #de1c73;
--grain-global-color-preset-filmx-kx: #5b9171;
--grain-global-color-hsl-blue-100: linear-gradient(270deg, #03fff3 0%, #5400f3 100%);
--grain-global-color-hsl-blue-200: linear-gradient(90deg, #002a36 0%, #00c8f8 70.27%);
--grain-global-color-hsl-blue-300: linear-gradient(270deg, #555f66 0%, #03aad4 100%);
--grain-global-color-hsl-green-100: linear-gradient(270deg, #fee538 0%, #00ffec 100%);
--grain-global-color-hsl-green-200: linear-gradient(90deg, #022e00 0%, #0bd600 70.27%);
--grain-global-color-hsl-green-300: linear-gradient(270deg, #536353 0%, #14ff00 100%);
--grain-global-color-hsl-purple-100: linear-gradient(270deg, #5d00ff 0%, #ff0c99 100%);
--grain-global-color-hsl-purple-200: linear-gradient(90deg, #4c0049 0%, #f18aed 70.27%);
--grain-global-color-hsl-purple-300: linear-gradient(270deg, #7a5f78 0%, #ff06ff 100%);
--grain-global-color-hsl-red-100: linear-gradient(270deg, #fe0f91 0%, #fa3400 100%);
--grain-global-color-hsl-red-200: linear-gradient(90deg, #52001a 0%, #ff9cac 70.27%);
--grain-global-color-hsl-red-300: linear-gradient(270deg, #79535a 0%, #fe0263 100%);
--grain-global-color-hsl-yellow-100: linear-gradient(270deg, #f5a100 0%, #e2e423 100%);
--grain-global-color-hsl-yellow-200: linear-gradient(270deg, #342700 29.73%, #f4c500 100%);
--grain-global-color-hsl-yellow-300: linear-gradient(270deg, #6c675b 0%, #f3da03 100%);
--grain-global-color-hsl-shadow-100: linear-gradient(90deg, #dedede 0%, #9ceeff 100%);
--grain-global-color-hsl-shadow-200: linear-gradient(90deg, #dedede 0%, #c58fce 100%);
--grain-global-color-hsl-shadow-300: #444444;
--grain-global-color-hsl-shadow-400: linear-gradient(90deg, #dedede 0%, #fc7474 100%);
--grain-global-color-hsl-shadow-500: linear-gradient(90deg, #dedede 0%, #96dc9f 100%);
--grain-global-color-hsl-shadow-600: linear-gradient(90deg, #dedede 0%, #fff489 100%);
--grain-global-color-hsl-shadow-700: linear-gradient(90deg, #dedede 0%, #f69e56 100%);
--grain-global-color-hsl-temperature-100: linear-gradient(270deg, #ffcb00 0%, #ffffff 47.76%, #2e99ff 100%);
--grain-global-color-hsl-tint-100: linear-gradient(90deg, #1f8b4c 0%, #ffffff 50.11%, #ff4abe 100%);
--grain-global-color-border-black: #000000;
--grain-global-color-border-white: #ffffff;
--grain-global-color-border-blue-100: #71c5d6;
--grain-global-color-border-blue-200: #1d71d8;
--grain-global-color-border-blue-300: #1d71d8;
--grain-global-color-border-gold-100: #ae995a;
--grain-global-color-border-grey-100: #c6c7bf;
--grain-global-color-border-grey-200: #8c8d87;
--grain-global-color-border-green-100: #81d281;
--grain-global-color-border-green-200: #44b344;
--grain-global-color-border-green-300: #007000;
--grain-global-color-border-orange-100: #f48022;
--grain-global-color-border-orange-200: #ff5f06;
--grain-global-color-border-pink-100: #ffaebb;
--grain-global-color-border-red-100: #ff4d4d;
--grain-global-color-border-red-200: #ff3400;
--grain-global-color-border-purple-100: #96398e;
--grain-global-color-border-yellow-100: #ffcd00;
--grain-global-color-red-100: #FF4928;
--grain-global-color-red-200: #F73100;
--grain-global-color-saffron-100: #FFC53C;
--grain-global-color-saffron-200: #F1A900;
--grain-global-color-gold-100: #EDBA58;
--grain-global-color-gold-200: #AE995A;
--grain-global-color-typography-text-primary: #ffffff;
--grain-global-color-typography-text-secondary: #c0c0c0;
--grain-global-color-typography-text-tertiary: #737373;
--grain-global-color-typography-text-error: #ff4d4d;
--grain-global-color-typography-preset-default: #c0c0c0;
--grain-global-color-typography-preset-hover: #dddddd;
--grain-global-color-typography-preset-active: #ffffff;
--grain-global-color-icon-primary: #ffffff;
--grain-global-color-icon-secondary: #737373;
--grain-global-color-icon-tertiary: #000000;
--grain-global-color-icon-hover: #aaaaaa;
--grain-global-color-icon-pressed: #dddddd;
--grain-global-color-icon-background: #111111;
--grain-global-color-icon-error: #ff3400;
--grain-global-color-background-1: #000000;
--grain-global-color-background-2: #111111;
--grain-global-color-button-primary-text: #000000;
--grain-global-color-button-primary-fill: #ffffff;
--grain-global-color-button-primary-hover: #c0c0c0;
--grain-global-color-button-link-primary-active: #cccccc;
--grain-global-color-button-link-primary-text: #000000;
--grain-global-color-button-link-primary-hover: #999999;
--grain-global-space-1: 4;
--grain-global-space-2: 8;
--grain-global-space-3: 12;
--grain-global-space-4: 16;
--grain-global-space-5: 24;
--grain-global-space-6: 32;
--grain-global-space-7: 40;
--grain-global-space-8: 48;
--grain-global-space-9: 54;
--grain-global-space-10: 60;
--grain-global-space-11: 64;
--grain-global-space-12: 72;
--grain-global-space-13: 80;
--grain-global-borderRadius-0: 0;
--grain-global-borderRadius-2: 2;
--grain-global-borderRadius-4: 4;
--grain-global-borderRadius-8: 8;
--grain-global-borderRadius-16: 16;
--grain-global-borderRadius-24: 24;
--grain-global-borderRadius-100: 100;
--grain-global-borderRadius-full: 100;
--grain-global-fontFamily-vscoGothic: 'VSCO Gothic', var(--grain-global-fontFamily-systemFont);
--grain-global-fontFamily-systemFont: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif';
--grain-global-textCase-capitalize: capitalize;
--grain-global-textCase-none: none;
--grain-global-textCase-underline: underline;
--grain-global-textCase-uppercase: uppercase;
--grain-global-lineHeight-100: 17;
--grain-global-lineHeight-200: 21;
--grain-global-lineHeight-300: 28;
--grain-global-fontSize-0: 10;
--grain-global-fontSize-1: 13;
--grain-global-fontSize-2: 15;
--grain-global-fontSize-3: 21;
--grain-global-fontSize-100: 10;
--grain-global-fontSize-200: 13;
--grain-global-fontSize-300: 15;
--grain-global-fontSize-400: 21;
--grain-global-letterSpacing-0: 0;
--grain-global-letterSpacing-1: 10%;
--grain-global-letterSpacing-10: 10%;
--grain-global-paragraphSpacing-0: 0;
--grain-global-paragraphSpacing-1: 8;
--grain-global-paragraphSpacing-100: 8;
--grain-global-indent-0: 0px;
--grain-global-textDecoration-none: none;
--grain-global-textDecoration-underline: underline;
--grain-global-fontWeight-100: 100;
--grain-global-fontWeight-400: 400;
--grain-global-fontWeight-700: 700;
--grain-global-fontWeight-vscoGothicMedium: 400;
--grain-global-fontWeight-vscoGothicLight: 100;
--grain-global-opacity-10: 10%;
--grain-global-opacity-20: 20%;
--grain-global-opacity-30: 30%;
--grain-global-opacity-40: 40%;
--grain-global-opacity-50: 50%;
--grain-global-opacity-60: 60%;
--grain-global-opacity-70: 70%;
--grain-global-opacity-80: 80%;
--grain-global-opacity-90: 90%;
--grain-global-opacity-100: 100%;
--grain-global-opacity-full: 100%;
--grain-global-opacity-none: 0;
--grain-global-fontFamilies-vsco-gothic: 'VSCO Gothic', var(--grain-global-fontFamily-systemFont);
--grain-global-lineHeights-0: AUTO;
--grain-global-lineHeights-1: 17;
--grain-global-fontWeights-vsco-gothic-0: Medium;
--grain-global-fontWeights-vsco-gothic-1: Light;
--grain-global-paragraphIndent-0: 0px;
--grain-color-typography-text-primary: #ffffff;
--grain-color-typography-text-secondary: #C0C0C0;
--grain-color-typography-text-tertiary: #737373;
--grain-color-typography-text-error: #ff4d4d;
--grain-color-typography-text-warning: #FFC53C;
--grain-color-typography-preset-default: #C0C0C0;
--grain-color-typography-preset-hover: #DDDDDD;
--grain-color-typography-preset-active: #ffffff;
--grain-color-fill-primary: #ffffff;
--grain-color-icon-primary: #ffffff;
--grain-color-icon-secondary: #737373;
--grain-color-icon-tertiary: #000000;
--grain-color-icon-svgFill: #737373;
--grain-color-icon-hover: #AAAAAA;
--grain-color-icon-pressed: #DDDDDD;
--grain-color-icon-background: #111111;
--grain-color-icon-error: #ff3400;
--grain-color-icon-warning: #FFC53C;
--grain-color-background-1: #000000;
--grain-color-background-2: #222222;
--grain-color-button-primary-text: #000000;
--grain-color-button-primary-fill: #ffffff;
--grain-color-button-primary-hover: #C0C0C0;
--grain-color-buttonLink-primary-text: #000000;
--grain-color-buttonLink-primary-active: #DDDDDD;
--grain-color-buttonLink-primary-hover: #AAAAAA;
--grain-color-membership-pro: #EDBA58;
--grain-color-membership-plus: #789db8;
}
`,S`
  /*
    Much specfificty
    Proceed with caution
  */
  :host * {
    font-family: 'VSCO Gothic', var(--grain-global-fontFamily-systemFont);
    /*
      @TODO:
      Included to maintain consistency with
      legacy VSCO web platforms. However,
      should ultimately be removed as nonstandrd.
    */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`];var qr=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};t.Theme=class extends kt{constructor(){super(...arguments),this.themeMode="dark"}updated(t){t.has("themeMode")&&this.requestUpdate()}render(){return ht`
      <div class="grain-theme grain-theme--${this.themeMode}">
        <slot></slot>
      </div>
    `}},t.Theme.styles=Ir,qr([Lt({type:String})],t.Theme.prototype,"themeMode",void 0),t.Theme=qr([yi("grain-theme")],t.Theme),async function(){let t;n&&n.classList.add("js-logged-out");try{t=await l(),c.set(t)}catch(t){return void console.error("[handleEnv] error: ",t)}if(t.loggedIn){t.ageYears>-1&&t.ageYears<18&&(window.disableTracking=!0),null==n||n.classList.remove("js-logged-out"),null==n||n.classList.add("js-logged-in");const i=t.subscriptionCode?w[t.subscriptionCode]:"none";null==n||n.classList.add("js-member-"+i),(e=t.username)&&o.forEach((t=>{t.addEventListener("click",(()=>{window.location.href=`https://studio.vsco.co/${e}`}))}))}var e;!function(t){const e=document.querySelector("grain-navbar"),i=document.querySelector("grain-sidebar");i&&(i.loginReqStatus="succeeded"),t.loggedIn&&(e&&(e.username=t.username,e.isLoggedIn=!0),i&&(i.username=t.username,i.isLoggedIn=!0),"VSCOPRO"===t.subscriptionCode?(e&&(e.isPro=!0),i&&(i.isPro=!0)):"VSCOANNUAL"===t.subscriptionCode?(e&&(e.isPlus=!0),i&&(i.isPlus=!0)):(e&&(e.isStarter=!0),i&&(i.isStarter=!0))),e&&e.requestUpdate(),i&&i.requestUpdate()}(t),function(t=!1){const e=document.querySelector(".js-content-feed"),i=document.querySelector("#feed-embed-coll"),r=document.querySelector("#feed-embed-feed");null==i||i.setAttribute("src",`${f}?source=collection`),t&&(null==r||r.setAttribute("src",`${f}?source=feed`),null==e||e.classList.remove("hide")),window.addEventListener("message",(function(t){const e=t.data;"feed"===e.source?null==r||r.style.setProperty("height",`${e.height}px`):"collection"===e.source&&(null==i||i.style.setProperty("height",`${e.height}px`))}),!1)}(t.loggedIn),function(){if(!new URLSearchParams(window.location.search).get("utm_medium"))return;let t="";try{t=encodeURIComponent(window.location.search)}catch(t){return void console.error("[setCampaignCookie] error: ",t)}g.set(a.CAMPAIGN,t,{domain:"vsco.co",expires:7,sameSite:"lax",secure:!0})}()}().then((()=>{!function(){const t=new URLSearchParams(window.location.search);"false"===t.get("download")?u(H):"true"===t.get("webview")&&(u(H),u(".js-navbar"),u(".js-footer"))}()})).catch((t=>{console.error("[init] error: ",t)})),Object.defineProperty(t,"__esModule",{value:!0})}({});
//# sourceMappingURL=index.7696bcdd.js.map
