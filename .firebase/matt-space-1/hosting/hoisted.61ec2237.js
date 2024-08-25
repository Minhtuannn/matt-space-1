/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=window,q=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Z=new WeakMap;class ot{constructor(t,e,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(e,t))}return t}toString(){return this.cssText}}const vt=n=>new ot(typeof n=="string"?n:n+"",void 0,K),rt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new ot(e,n,K)},_t=(n,t)=>{q?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=k.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},J=q?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return vt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const H=window,F=H.trustedTypes,ft=F?F.emptyScript:"",G=H.reactiveElementPolyfillSupport,W={toAttribute(n,t){switch(t){case Boolean:n=n?ft:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},lt=(n,t)=>t!==n&&(t==t||n==n),D={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:lt};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=D){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||D}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=D){var s;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:W).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:W;this._$El=r,this[r]=c.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||lt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},G?.({ReactiveElement:f}),((L=H.reactiveElementVersions)!==null&&L!==void 0?L:H.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const M=window,A=M.trustedTypes,Q=A?A.createPolicy("lit-html",{createHTML:n=>n}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+v,gt=`<${ht}>`,b=document,C=(n="")=>b.createComment(n),x=n=>n===null||typeof n!="object"&&typeof n!="function",at=Array.isArray,mt=n=>at(n)||typeof n?.[Symbol.iterator]=="function",w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,ct=/^(?:script|style|textarea|title)$/i,yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),g=yt(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),it=new WeakMap,At=(n,t,e)=>{var i,s;const r=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const c=(s=e?.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new T(t.insertBefore(C(),c),c,void 0,e??{})}return o._$AI(n),o},m=b.createTreeWalker(b,129,null,!1),bt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=w;for(let l=0;l<e;l++){const h=n[l];let $,a,d=-1,p=0;for(;p<h.length&&(o.lastIndex=p,a=o.exec(h),a!==null);)p=o.lastIndex,o===w?a[1]==="!--"?o=X:a[1]!==void 0?o=Y:a[2]!==void 0?(ct.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=_):a[3]!==void 0&&(o=_):o===_?a[0]===">"?(o=s??w,d=-1):a[1]===void 0?d=-2:(d=o.lastIndex-a[2].length,$=a[1],o=a[3]===void 0?_:a[3]==='"'?et:tt):o===et||o===tt?o=_:o===X||o===Y?o=w:(o=_,s=void 0);const U=o===_&&n[l+1].startsWith("/>")?" ":"";r+=o===w?h+gt:d>=0?(i.push($),h.slice(0,d)+"$lit$"+h.slice(d)+v+U):h+v+(d===-2?(i.push(void 0),l):U)}const c=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Q!==void 0?Q.createHTML(c):c,i]};class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const c=t.length-1,l=this.parts,[h,$]=bt(t,e);if(this.el=P.createElement(h,i),m.currentNode=this.el.content,e===2){const a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(s=m.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(v)){const p=$[o++];if(a.push(d),p!==void 0){const U=s.getAttribute(p.toLowerCase()+"$lit$").split(v),O=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:O[2],strings:U,ctor:O[1]==="."?St:O[1]==="?"?Ct:O[1]==="@"?xt:z})}else l.push({type:6,index:r})}for(const d of a)s.removeAttribute(d)}if(ct.test(s.tagName)){const a=s.textContent.split(v),d=a.length-1;if(d>0){s.textContent=A?A.emptyScript:"";for(let p=0;p<d;p++)s.append(a[p],C()),m.nextNode(),l.push({type:2,index:++r});s.append(a[d],C())}}}else if(s.nodeType===8)if(s.data===ht)l.push({type:2,index:r});else{let a=-1;for(;(a=s.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:r}),a+=v.length-1}r++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function S(n,t,e=n,i){var s,r,o,c;if(t===E)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const h=x(t)?void 0:t._$litDirective$;return l?.constructor!==h&&((r=l?._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,i)),i!==void 0?((o=(c=e)._$Cl)!==null&&o!==void 0?o:c._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=S(n,l._$AS(n,t.values),l,i)),t}class Et{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t?.creationScope)!==null&&e!==void 0?e:b).importNode(i,!0);m.currentNode=r;let o=m.nextNode(),c=0,l=0,h=s[0];for(;h!==void 0;){if(c===h.index){let $;h.type===2?$=new T(o,o.nextSibling,this,t):h.type===1?$=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&($=new Pt(o,this,t)),this.v.push($),h=s[++l]}c!==h?.index&&(o=m.nextNode(),c++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=(r=s?.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):mt(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const o=new Et(r,this),c=o.p(this.options);o.m(i),this.k(c),this._$AH=o}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new P(t)),e}O(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new T(this.S(C()),this.S(C()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class z{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=S(this,t,e,0),o=!x(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const c=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=S(this,c[i+l],e,l),h===E&&(h=this._$AH[l]),o||(o=!x(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.P(t)}P(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends z{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===u?void 0:t}}const wt=A?A.emptyScript:"";class Ct extends z{constructor(){super(...arguments),this.type=4}P(t){t&&t!==u?this.element.setAttribute(this.name,wt):this.element.removeAttribute(this.name)}}class xt extends z{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:u)===E)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const st=M.litHtmlPolyfillSupport;st?.(P,T),((B=M.litHtmlVersions)!==null&&B!==void 0?B:M.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I,j;class y extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=At(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}}y.finalized=!0,y._$litElement$=!0,(I=globalThis.litElementHydrateSupport)===null||I===void 0||I.call(globalThis,{LitElement:y});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:y});((j=globalThis.litElementVersions)!==null&&j!==void 0?j:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(e,o)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function ut(n){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(n,t,e):Tt(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ut(n){return ut({...n,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;((V=window.HTMLSlotElement)===null||V===void 0?void 0:V.prototype.assignedElements)!=null;var Ot=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,pt=(n,t,e,i)=>{for(var s=i>1?void 0:i?kt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Ot(t,e,s),s};let N=class extends y{constructor(){super(...arguments),this._isCopied=!1}copyCode(){this._isCopied=!0;let t=this.parentElement.querySelector("code");const e=document.createRange();if(e.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),!navigator.clipboard)document.execCommand("copy");else try{navigator.clipboard.writeText(e.toString())}catch(i){console.error(i)}window.getSelection().removeAllRanges(),setTimeout(()=>{this._isCopied=!1},1e3)}render(){return g`
      <button @click=${this.copyCode}>${this._isCopied?"Copied \u2705":"Copy"}</button>
    `}};N.styles=[rt`
      :host {
        display: inline-flex;
      }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin: 0;
        padding: 0.5rem;
        background: #e2e8f022;
        border: none;
        border-radius: 0.25rem;
        color: #fff;
        cursor: pointer;
        font-weight: 600;
        /* font-size: var(--step--2); */
        /* line-height: 1; */
      }
    `];pt([Ut()],N.prototype,"_isCopied",2);N=pt([dt("copy-code-button")],N);const Ht=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  enable-background="new 0 0 24 24"
  height="24px"
  viewBox="0 0 24 24"
  width="24px"
  fill="currentColor"
>
  <rect fill="none" height="24" width="24" />
  <path
    d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
  />
</svg>`,Mt=g`<svg
  xmlns="http://www.w3.org/2000/svg"
  enable-background="new 0 0 24 24"
  height="24px"
  viewBox="0 0 24 24"
  width="24px"
  fill="currentColor"
>
  <rect fill="none" height="24" width="24" />
  <path
    d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
  />
</svg>`;var Nt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,$t=(n,t,e,i)=>{for(var s=i>1?void 0:i?Rt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Nt(t,e,s),s};let R=class extends y{constructor(){super(...arguments),this._doc=document.firstElementChild,this.theme=null}_getCurrentTheme(){const n=localStorage.getItem("theme");n!==null?this._setTheme(n):this._setTheme("light")}firstUpdated(){this._getCurrentTheme()}_setTheme(n){this.theme=n,this._doc.setAttribute("color-scheme",n),localStorage.setItem("theme",n)}_toggleTheme(){this.theme==="dark"?this._setTheme("light"):this._setTheme("dark")}render(){return g`
      <button
        @click=${this._toggleTheme}
        title=${`Enable ${this.theme==="dark"?"Light":"Dark"} Theme`}
      >
        ${this.theme==="dark"?g`
              ${Ht}
            `:g`
              ${Mt}
            `}
      </button>
    `}};R.styles=rt`
    :host {
      display: inline-block;
    }
    button {
      width: 28px;
      height: 28px;
      padding: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      border: none;
      outline: none;
      background-color: var(--theme-surface-1);
      fill: currentcolor;
      color: var(--theme-on-surface-1);
      text-decoration: none;
      cursor: pointer;
      vertical-align: middle;
      -webkit-tap-highlight-color: transparent;
      border-radius: 50%;
      border: 1px solid var(--theme-primary);
      transition: background-color 100ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
  `;$t([ut({type:String})],R.prototype,"theme",2);R=$t([dt("theme-toggle-button")],R);let zt=document.querySelectorAll("pre");zt.forEach(n=>{let t=document.createElement("copy-code-button");n.appendChild(t)});
