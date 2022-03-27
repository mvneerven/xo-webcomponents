(()=>{var ps=Object.create;var rt=Object.defineProperty;var ms=Object.getOwnPropertyDescriptor;var gs=Object.getOwnPropertyNames;var vs=Object.getPrototypeOf,fs=Object.prototype.hasOwnProperty;var bs=(e,t,i)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var xs=e=>rt(e,"__esModule",{value:!0}),d=(e,t)=>rt(e,"name",{value:t,configurable:!0});var f=(e,t)=>()=>(e&&(t=e(e=0)),t);var ys=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var $s=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of gs(t))!fs.call(e,s)&&s!=="default"&&rt(e,s,{get:()=>t[s],enumerable:!(i=ms(t,s))||i.enumerable});return e},_s=e=>$s(xs(rt(e!=null?ps(vs(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var x=(e,t,i)=>(bs(e,typeof t!="symbol"?t+"":t,i),i);function V(e,t,i=e,s){var r,o,n,l;if(t===O)return t;let a=s!==void 0?(r=i._$Cl)===null||r===void 0?void 0:r[s]:i._$Cu,h=nt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),h===void 0?a=void 0:(a=new h(e),a._$AT(e,i,s)),s!==void 0?((n=(l=i)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[s]=a:i._$Cu=a),a!==void 0&&(t=V(e,a._$AS(e,t.values),a,s)),t}function ni(e){this._$AN!==void 0?($t(this),this._$AM=e,oi(this)):this._$AM=e}function ai(e,t=!1,i=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=i;o<s.length;o++)pt(s[o],!1),$t(s[o]);else s!=null&&(pt(s,!1),$t(s));else pt(this,e)}var ke,As,Es,Se,ws,Cs,qt,Wt,Te,p,S,Pe,Ft,Gt,Ue,Kt,ks,Zt,Ss,Ie,Yt,He,Ts,Oe,Jt,Me,Qt,j,Xt,K,Le,H,Re,Ps,Z,ot,nt,Ne,Us,at,De,je,z,ze,Ve,Be,qe,w,hr,O,A,We,Is,Y,Hs,lt,Fe,ht,dt,Ge,Os,Ke,Ze,Ye,Je,te,ee,J,Qe,Q,ct,Ms,Ls,Xe,ie,Rs,Ns,Ds,M,T,se,js,ti,ei,zs,Vs,re,yt,Bs,oe,ut,ii,si,qs,Ws,ri,Fs,Gs,pt,$t,oi,Ks,li,hi,di,ci,ui,Zs,Ys,ne,Js,ae,_t,le,Qs,he,Xs,de,tr,pi,mi,ce=f(()=>{ke=Object.defineProperty,As=Object.defineProperties,Es=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,ws=Object.prototype.hasOwnProperty,Cs=Object.prototype.propertyIsEnumerable,qt=d((e,t,i)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,"ut"),Wt=d((e,t)=>{for(var i in t||(t={}))ws.call(t,i)&&qt(e,i,t[i]);if(Se)for(var i of Se(t))Cs.call(t,i)&&qt(e,i,t[i]);return e},"N"),Te=d((e,t)=>As(e,Es(t)),"F"),p=d((e,t)=>ke(e,"name",{value:t,configurable:!0}),"d"),S=d((e,t,i)=>(qt(e,typeof t!="symbol"?t+"":t,i),i),"v"),Pe=d((e,t,i)=>new Promise((s,r)=>{var o=d(a=>{try{l(i.next(a))}catch(h){r(h)}},"r"),n=d(a=>{try{l(i.throw(a))}catch(h){r(h)}},"o"),l=d(a=>a.done?s(a.value):Promise.resolve(a.value).then(o,n),"a");l((i=i.apply(e,t)).next())}),"Y"),Ft=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gt=Symbol(),Ue=new Map,Kt=d(class{constructor(e,t){if(this._$cssResult$=!0,t!==Gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ue.get(this.cssText);return Ft&&e===void 0&&(Ue.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},"j");p(Kt,"s");ks=p(e=>new Kt(typeof e=="string"?e:e+"",Gt),"o"),Zt=p((e,...t)=>{let i=e.length===1?e[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new Kt(i,Gt)},"r"),Ss=p((e,t)=>{Ft?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{let s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)})},"i"),Ie=Ft?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let s of t.cssRules)i+=s.cssText;return ks(i)})(e):e,He=window.trustedTypes,Ts=He?He.emptyScript:"",Oe=window.reactiveElementPolyfillSupport,Jt={toAttribute(e,t){switch(t){case Boolean:e=e?Ts:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Me=p((e,t)=>t!==e&&(t==t||e==e),"n"),Qt={attribute:!0,type:String,converter:Jt,reflect:!1,hasChanged:Me},j=d(class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let s=this._$Eh(i,t);s!==void 0&&(this._$Eu.set(s,i),e.push(s))}),e}static createProperty(e,t=Qt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){let r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Qt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(Ie(s))}else e!==void 0&&t.push(Ie(e));return t}static _$Eh(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ss(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=Qt){var s,r;let o=this.constructor._$Eh(e,i);if(o!==void 0&&i.reflect===!0){let n=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:Jt.toAttribute)(t,i.type);this._$Ei=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(e,t){var i,s,r;let o=this.constructor,n=o._$Eu.get(e);if(n!==void 0&&this._$Ei!==n){let l=o.getPropertyOptions(n),a=l.converter,h=(r=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&r!==void 0?r:Jt.fromAttribute;this._$Ei=n,this[n]=h(t,l.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Me)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,r)=>this[r]=s),this._$Et=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}},"_");p(j,"a");j.finalized=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},Oe==null||Oe({ReactiveElement:j}),((Yt=globalThis.reactiveElementVersions)!==null&&Yt!==void 0?Yt:globalThis.reactiveElementVersions=[]).push("1.3.0");K=globalThis.trustedTypes,Le=K?K.createPolicy("lit-html",{createHTML:e=>e}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,Re="?"+H,Ps=`<${Re}>`,Z=document,ot=p((e="")=>Z.createComment(e),"h"),nt=p(e=>e===null||typeof e!="object"&&typeof e!="function","r"),Ne=Array.isArray,Us=p(e=>{var t;return Ne(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},"u"),at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,je=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ze=/'/g,Ve=/"/g,Be=/^(?:script|style|textarea|title)$/i,qe=p(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),"p"),w=qe(1),hr=qe(2),O=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),We=new WeakMap,Is=p((e,t,i)=>{var s,r;let o=(s=i==null?void 0:i.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let l=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new ht(t.insertBefore(ot(),l),l,void 0,i??{})}return n._$AI(e),n},"x"),Y=Z.createTreeWalker(Z,129,null,!1),Hs=p((e,t)=>{let i=e.length-1,s=[],r,o=t===2?"<svg>":"",n=at;for(let a=0;a<i;a++){let h=e[a],m,c,u=-1,g=0;for(;g<h.length&&(n.lastIndex=g,c=n.exec(h),c!==null);)g=n.lastIndex,n===at?c[1]==="!--"?n=De:c[1]!==void 0?n=je:c[2]!==void 0?(Be.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=z):c[3]!==void 0&&(n=z):n===z?c[0]===">"?(n=r??at,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,m=c[1],n=c[3]===void 0?z:c[3]==='"'?Ve:ze):n===Ve||n===ze?n=z:n===De||n===je?n=at:(n=z,r=void 0);let v=n===z&&e[a+1].startsWith("/>")?" ":"";o+=n===at?h+Ps:u>=0?(s.push(m),h.slice(0,u)+"$lit$"+h.slice(u)+H+v):h+H+(u===-2?(s.push(void 0),a):v)}let l=o+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Le!==void 0?Le.createHTML(l):l,s]},"C"),lt=d(class{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0,n=e.length-1,l=this.parts,[a,h]=Hs(e,t);if(this.el=lt.createElement(a,i),Y.currentNode=this.el.content,t===2){let m=this.el.content,c=m.firstChild;c.remove(),m.append(...c.childNodes)}for(;(s=Y.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes()){let m=[];for(let c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(H)){let u=h[o++];if(m.push(c),u!==void 0){let g=s.getAttribute(u.toLowerCase()+"$lit$").split(H),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?Ge:v[1]==="?"?Ke:v[1]==="@"?Ze:dt})}else l.push({type:6,index:r})}for(let c of m)s.removeAttribute(c)}if(Be.test(s.tagName)){let m=s.textContent.split(H),c=m.length-1;if(c>0){s.textContent=K?K.emptyScript:"";for(let u=0;u<c;u++)s.append(m[u],ot()),Y.nextNode(),l.push({type:2,index:++r});s.append(m[c],ot())}}}else if(s.nodeType===8)if(s.data===Re)l.push({type:2,index:r});else{let m=-1;for(;(m=s.data.indexOf(H,m+1))!==-1;)l.push({type:7,index:r}),m+=H.length-1}r++}}static createElement(e,t){let i=Z.createElement("template");return i.innerHTML=e,i}},"M");p(lt,"E");d(V,"D");p(V,"P");Fe=d(class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;let{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Z).importNode(i,!0);Y.currentNode=r;let o=Y.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new ht(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new Ye(o,this,e)),this.v.push(h),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=Y.nextNode(),n++)}return r}m(e){let t=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},"bt");p(Fe,"V");ht=d(class{constructor(e,t,i,s){var r;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),nt(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==O&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Us(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==A&&nt(this._$AH)?this._$AA.nextSibling.data=e:this.k(Z.createTextNode(e)),this._$AH=e}T(e){var t;let{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=lt.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(i);else{let o=new Fe(r,this),n=o.p(this.options);o.m(i),this.k(n),this._$AH=o}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new lt(e)),t}S(e){Ne(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let r of e)s===t.length?t.push(i=new ht(this.A(ot()),this.A(ot()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},"U");p(ht,"N");dt=d(class{constructor(e,t,i,s,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){let r=this.strings,o=!1;if(r===void 0)e=V(this,e,t,0),o=!nt(e)||e!==this._$AH&&e!==O,o&&(this._$AH=e);else{let n=e,l,a;for(e=r[0],l=0;l<r.length-1;l++)a=V(this,n[i+l],t,l),a===O&&(a=this._$AH[l]),o||(o=!nt(a)||a!==this._$AH[l]),a===A?e=A:e!==A&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.C(e)}C(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},"V");p(dt,"S");Ge=d(class extends dt{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===A?void 0:e}},"yt");p(Ge,"M");Os=K?K.emptyScript:"",Ke=d(class extends dt{constructor(){super(...arguments),this.type=4}C(e){e&&e!==A?this.element.setAttribute(this.name,Os):this.element.removeAttribute(this.name)}},"_t");p(Ke,"H");Ze=d(class extends dt{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=V(this,e,t,0))!==null&&i!==void 0?i:A)===O)return;let s=this._$AH,r=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==A&&(s===A||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},"$t");p(Ze,"I");Ye=d(class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}},"At");p(Ye,"L");Je=window.litHtmlPolyfillSupport;Je==null||Je(lt,ht),((Xt=globalThis.litHtmlVersions)!==null&&Xt!==void 0?Xt:globalThis.litHtmlVersions=[]).push("2.2.0");J=d(class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Is(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return O}},"w");p(J,"s");J.finalized=!0,J._$litElement$=!0,(te=globalThis.litElementHydrateSupport)===null||te===void 0||te.call(globalThis,{LitElement:J});Qe=globalThis.litElementPolyfillSupport;Qe==null||Qe({LitElement:J});((ee=globalThis.litElementVersions)!==null&&ee!==void 0?ee:globalThis.litElementVersions=[]).push("3.2.0");Q=d(class{static isUrl(e){try{return typeof e!="string"||e.indexOf(`
`)!==-1||e.indexOf(" ")!==-1||e.startsWith("#/")?!1:(new URL(e,window.location.origin),!0)}catch{}return!1}static clone(e){if(e===null||typeof e!="object"||"isActiveClone"in e)return e;if(e instanceof Date)var t=new e.constructor;else var t=e.constructor();for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e.isActiveClone=null,t[i]=Q.clone(e[i]),delete e.isActiveClone);return t}static parseHTML(e){return new DOMParser().parseFromString(e,"text/html").body.firstChild}static throttle(e,t=500){var i,s=p(function(r){i&&clearTimeout(i),i=setTimeout(e,t,r)},"throttledListener");return s}static objectEquals(e,t){if(e==null||t===null||t===void 0)return e===t;if(e.constructor!==t.constructor)return!1;if(e instanceof Function||e instanceof RegExp)return e===t;if(e===t||e.valueOf()===t.valueOf())return!0;if(Array.isArray(e)&&e.length!==t.length||e instanceof Date||!(e instanceof Object)||!(t instanceof Object))return!1;var i=Object.keys(e);return Object.keys(t).every(function(s){return i.indexOf(s)!==-1})&&i.every(function(s){return Q.objectEquals(e[s],t[s])})}static equals(e,t){return Array.isArray(e)?Q.arrayEquals(e,t):typeof e=="object"?Q.objectEquals(e,t):e===t}static arrayEquals(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((i,s)=>i===t[s])}static scopeEval(e,t){return Function('"use strict";'+t).bind(e)()}},"C");p(Q,"Util");ct=Q,Ms=Zt`[data-autocomplete] {
  margin: auto;
}

[data-autocomplete] .xo-in {
  position: relative;
}

[data-autocomplete] .xo-ac-rs {
  font-size: 0.9rem;
  text-align: left;
  background-color: var(--bg-color);
  position: absolute;
  -webkit-box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.1);
          box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.2rem;
  max-height: 300px;
  max-width: 500px;
  overflow-y: auto;
  z-index: 9999;
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: var(--xo-ac-itm-grid, 30px 1fr 7rem);
      grid-template-columns: var(--xo-ac-itm-grid, 30px 1fr 7rem);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.5rem;
  color: var(--text-color);
  height: var(--xo-ac-itm-height, auto);
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm .xo-ac-img {
  background-repeat: no-repeat;
  background-size: contain;
  width: var(--xo-ac-itm-width, 1.1rem);
  height: var(--xo-ac-itm-height, auto);
  display: inline-block;
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm span.text {
  display: inline-block;
  min-width: 100px;
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm span.text small {
  word-wrap: normal;
  display: inline-block;
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm span.text .txt-hl {
  text-decoration: underline;
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm span.category {
  float: right;
  text-align: right;
  font-size: smaller;
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm.selected {
  background-color: rgba(0, 0, 0, 0.1);
}

[data-autocomplete] .xo-ac-rs .xo-ac-itm.active {
  background-color: rgba(0, 0, 0, 0.05);
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
}

[data-autocomplete].simple .xo-ac-rs .xo-ac-itm {
  -ms-grid-columns: var(--exf-ac-itm-grid, 1px 1fr 7rem);
      grid-template-columns: var(--exf-ac-itm-grid, 1px 1fr 7rem);
}
/*# sourceMappingURL=autocomplete.css.map */`,Ls=Ms,Xe=d(class{constructor(e,t,i){if(S(this,"cssClasses",{result:"xo-ac-rs",item:"xo-ac-itm"}),this.settings=i,this.control=e,this.htmlElement=t,this.htmlElement.setAttribute("autocomplete","off"),this.categories=i.categories||{},!i.items)throw TypeError("Must pass items array, function or promise in autocomplete settings");this.items=i.items}static get sharedStyles(){return this._sheet||(this._sheet=new CSSStyleSheet,this._sheet.replaceSync(Ls)),this._sheet}attach(){let e=this.control instanceof ut,t=p((s,r)=>{this.htmlElement.addEventListener(s,r)},"on");t("input",this.inputHandler.bind(this)),t("click",this.clickHandler.bind(this)),t("focusout",this.blurHandler.bind(this)),t("keyup",this.keyUpHandler.bind(this)),t("keydown",this.keyDownHandler.bind(this)),this.resultsDiv=document.createElement("div"),this.resultsDiv.title="",this.resultsDiv.classList.add(this.cssClasses.result),this.resultsDiv.addEventListener("mousedown",this.resultClick.bind(this));let i=e?this.control.shadowRoot.querySelector(".xo-cn"):this.control.shadowRoot.querySelector("*");i.appendChild(this.resultsDiv),this.clear(),i.setAttribute("data-autocomplete","on")}moveResult(e){this.show();let t=this.resultsDiv.querySelectorAll("div"),i=t.length;this.rowIndex=this.rowIndex+e,this.rowIndex<=0?this.rowIndex=0:this.rowIndex>i-1&&(this.rowIndex=0),t.forEach(r=>{r.classList.remove("selected")});let s=this.getSelectedDiv();s?(s.classList.add("selected"),s.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})):this.clickHandler({target:this.htmlElement})}getSelectedDiv(){return this.resultsDiv.querySelector(`div:nth-child(${this.rowIndex+1})`)}selectResult(e){if(e=e||this.getSelectedDiv(),e){let t=parseInt(e.getAttribute("data-index"));this.resultClicked=!0;let i=this.results[t],s=this.categories[i.category]||{action:this.setText.bind(this)};s.newTab&&(this.tabWindow=window.open("about:blank","_blank"));let r=Te(Wt({},i),{search:this.htmlElement.value});e.classList.add("active"),setTimeout(()=>{s.action(r),s.newTab&&(r.url?this.tabWindow.location.href=r.url:this.tabWindow.close());var o=new Event("change",{bubbles:!0});this.htmlElement.dispatchEvent(o),this.clear();let n=new Event("result-selected",{bubbles:!1});n.detail={text:r.text},this.htmlElement.dispatchEvent(n)},0)}}setText(e){this.control.autoCompleteInput||(this.control.value=e.text),this.hide()}resultClick(e){this.selectResult(e.target.closest(`.${this.cssClasses.item}`))}set categories(e){this._categories=e}get categories(){return this._categories||{}}blurHandler(e){setTimeout(()=>{this.resultClicked||this.clear(),this.resultClicked=!1},100)}clear(){this.resultsDiv.innerHTML="",this.resultsDiv.style.display="none"}show(){this.resultsDiv.style.display!=="block"&&(this.resultsDiv.style.display="block",this.rowIndex=-1)}hide(){this.resultsDiv.style.display="none"}inputHandler(e){this.clear();let t={search:e.target.value,categories:this.categories};this.getItems(t,e).then(i=>{this.clear(),this.resultsHandler(i,t)})}keyDownHandler(e){switch(e.keyCode){case 13:e.stopPropagation(),e.preventDefault();break;case 40:case 38:e.preventDefault()}}keyUpHandler(e){switch(e.keyCode){case 40:this.moveResult(1);break;case 38:this.moveResult(-1);break;case 27:this.hide();break;case 13:this.getSelectedDiv()&&(this.control.preventEnter=!0,e.stopPropagation(),e.preventDefault(),this.selectResult(),setTimeout(()=>{this.control.preventEnter=!1},10));break;default:break}}clickHandler(e){this.clear();let t=e.target.value;this.suggest(t,e)}suggest(e,t){this.htmlElement.focus();let i={suggest:!0,search:e||"",categories:this.categories};this.getItems(i,t).then(s=>{this.htmlElement.dispatchEvent(new CustomEvent("show-results",{detail:{results:s}})),this.resultsHandler(s,i)})}resultsHandler(e,t){this.results=e,this.rowIndex=-1;let i=0;e.forEach(s=>{let r=null,o=t.categories[s.category]||{};s.image&&(s.icon="xo-ac-img",r=`style="background-image: url('${s.image}')"`),s.element?this.resultsDiv.appendChild(s.element):(s=typeof s=="string"?{text:s}:s,this.resultsDiv.appendChild(ct.parseHTML(`<div title="${s.tooltip||""}" data-index="${i}" class="${this.cssClasses.item}">
                            <span ${r} class="${s.icon||o.icon}"></span>
                            <span class="text">${this.formatResultItem(s,t,o)}</span>
                            <span class="category">${s.category||""}</span></div>`))),i++}),e.length&&this.show()}formatResultItem(e,t,i){var s;e=typeof e=="string"?{text:e}:e;let r=e.text;return t.search&&(r=r.replace("%search%",t.search),e.description=(s=e.description)==null?void 0:s.replace("%search%",t.search)),r=this.highlight(r,t.search),e.description&&(r=`<div>${r}</div><small>${e.description}</small>`),i.format&&(r=i.format({item:e,result:r,options:t})),r}highlight(e,t){var i=new RegExp("("+t+")","gi");return e.replace(i,'<span class="txt-hl">$1</span>')}getItems(e,t){return Pe(this,null,function*(){let i=this.settings.map,s=p(n=>{var l;return{text:(l=n.text)!=null?l:n}},"normalizeItem"),r=p(n=>i?n.map(l=>({text:l[i]})):n,"map"),o=p(n=>(this.settings.max&&this.settings.max>0&&(n.length=this.settings.max),n),"max");return new Promise(n=>{if(ct.isUrl(this.items)){if(this.settings.minlength>0&&(!e.search||e.search.length<this.settings.minlength)){n([]);return}let l=this.formatSearch(this.items,e);fetch(l).then(a=>{if(a.status===200){a.json().then(h=>{h=r(h),n(o(h.filter(m=>this.isMatch(e,m))))});return}throw Error(`HTTP error ${a.status} - ${l}`)})}else if(Array.isArray(this.items)){let l=!0;this.items=this.items.map(a=>typeof a=="string"?{text:a}:(l=!1,a)),l&&this.control.classList.add("simple"),n(o(r(this.items.filter(a=>this.isMatch(e,a)))))}else if(typeof this.items=="function"){e.control=this.control;let l=this.items(e,t).map(a=>s(a));l=r(l.filter(a=>this.isMatch(e,a))),n(l)}else return n(Promise.resolve(this.items.apply(this,e)))})})}formatSearch(e,t){return e.indexOf("%search%")?e.replace("%search%",t.search||""):e+"?"+this.createQueryParam(t)}createQueryParam(e){let t=e.suggest?"&suggest=true":"";return`q=${e.text}${t}`}isMatch(e,t){var i,s;return((i=t.text)==null?void 0:i.indexOf("%search%"))>=0?!0:e.search?((s=t.text)==null?void 0:s.toLowerCase().indexOf(e.search.toLowerCase()))>=0:e.suggest}},"Ct");p(Xe,"AutoComplete");ie=Xe,Rs=["type","label","bind","classes"],Ns=1e3,Ds=p(()=>`xo${(Ns++).toString(16)}`,"getUniqueName"),M={},T=d(class{constructor(e){this._context=e}get context(){return this._context}mapProperties(e,t,i){let s=e.nestedElement,r=!0;if(typeof t=="string"){let o=t;t={},t[o]=i,r=!1}else e.beforeMap&&e.beforeMap();t.id||(t.id=Ds()),t.name||(t.name=t.id),r&&this.context.data.processBindings(e,t);for(let o in t){if(o==="type")continue;let n=this.getCurrentValue(e,t,o);["id"].includes(o)||(e[o]=n);let l=T.camelCaseToHyphen(o);if(s)if(T.elementSupportsProperty(s,o))s[o]=n??"";else{if(T.isReservedProperty(o))continue;T.elementSupportsAttribute(s,l)?s.setAttribute(l,n):s.setAttribute("data-"+l,n)}}if(s instanceof HTMLSelectElement)T.importItems(s,t.items);else if(s instanceof HTMLButtonElement||s instanceof HTMLAnchorElement){typeof t.label!="undefined"&&(s.innerText=t.label);let o=p((n,l)=>{let a=n;if(a.nodeType===11?a=a.host:a=a.parentNode,!!a)return l(a)?a:o(a,l)},"getParent");t.click&&s.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation();let l=n.path[0],a=o(l,c=>c.nodeName==="XO-REPEAT"),h=-1;a&&[...a.childNodes].forEach(c=>{h===-1&&o(l,u=>{let g=u.getAttribute?u.getAttribute("data-index"):null;g&&(h=parseInt(g)-1)})});let m={target:n.target,path:n.path,detail:{repeat:a,index:h}};t.click(m)})}}getCurrentValue(e,t,i){if(["type","bind"].includes(i))return t[i];let s,r=0;if(e.data&&e.data[i]){let o=T.match(e.data[i],n=>(r++,s=this.context.data.get(n),s));return r===1&&typeof s!="undefined"&&s.toString().length===o.length?s:o}return t[i]}static isReservedProperty(e){return Rs.includes(e)}static match(e,t){let i=e;return typeof e!="string"||e.length<5?e:e.replace(/(#\/[A-Za-z_]+[A-Za-z_0-9\/@]*[A-Za-z_]+[A-Za-z_0-9]*)(?=[\s+\/*,.?!;'")]|$)/gm,(s,r,o)=>t(r,i))}replaceVar(e,t,i){let s=this,r=!1,o,n=T.match(e.rawValue,(l,a)=>(a!==l&&(r=!0),o=s.context.data.get(l),o));return r?n:o}static importItems(e,t=[]){for(let i of t){let s=document.createElement("option");s.value=i.value||i,s.innerText=i.label||i,e.appendChild(s)}}static camelCaseToHyphen(e){return e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}static elementSupportsAttribute(e,t){var i=document.createElement(e.nodeName.toLowerCase());return t in i||["role","readonly","maxlength"].includes(t)||t.startsWith("aria-")}static elementSupportsProperty(e,t){let i=e.nodeName.toLowerCase();return M[i]||(M[i]=[],M[i]=Object.getOwnPropertyNames(Object.getPrototypeOf(e)),M[i]=[...M[i],...Object.getOwnPropertyNames(HTMLElement.prototype)],M[i]=[...new Set(M[i])]),M[i].includes(t)}},"b");p(T,"PropertyMapper");se=T,js=p((e,t)=>{if(ct.equals(e,t))return!(Array.isArray(e)&&t.length===0)},"isIrelevantChange"),ti=d(class{constructor(e){if(S(this,"instance",{}),S(this,"bound",{}),S(this,"rules",{}),!e)throw Error("Missing context");let t=this;this._context=e,this.context.form.addEventListener("interaction",i=>{var s,r;if((s=i.detail.control)==null?void 0:s.bind){let o=this.processBindingIndex(i.detail.control,(r=i.detail.control)==null?void 0:r.bind);t.set(o,i.detail.value,i.detail)}})}initialize(e={},t={}){let i=this;this.options=t;let s=p((r,o,n)=>(n=n||r,new Proxy(o,{get:function(l,a){return["[object Object]","[object Array]"].indexOf(Object.prototype.toString.call(l[a]))>-1?s(r,l[a],n+"/"+a):l[a]},set:function(l,a,h){if(js(l[a],h))return!0;let m="#/"+n+"/"+a,c=l[a];l[a]=h,h=i.applyRules(m,h);let u=i.matchArrays(m);i.bound[u]&&i.bound[u].forEach(g=>{let v=g.property==="bind"?"value":g.property,y=i.context.mapper.replaceVar(g,v,h);i.context.mapper.mapProperties(g.control,v,y),console.debug(`Set property '${v}' on ${g.control} to`,h)});try{i.context.form.emit("modelchange",{model:e,change:m,oldValue:c,newValue:h,context:i.originatingEventContext})}finally{i.originatingEventContext=null}return!0}})),"proxify");i.schemaModel=Wt({instance:{}},e),this.addBuiltinModelState(),Object.entries(i.schemaModel.instance).forEach(r=>{let o=r[0];this.instance[o]=s(o,r[1])}),Object.entries(i.schemaModel.rules||{}).forEach(r=>{let o=r[0];i.rules[o]=r[1];try{o=this.processBindingIndex(null,o);let n=i.get(o);typeof n!="undefined"&&i.applyRules(o,n)}catch{}}),setTimeout(()=>{this.context.form.emit("modelchange",{model:i.schemaModel,initial:!0,change:void 0})},1)}addBuiltinModelState(){this.schemaModel.instance._xo={disabled:{back:!0,next:!1,send:!0},nav:{page:1,total:this.options.pageCount,back:0,next:0,send:0}}}get context(){return this._context}processBindingIndex(e,t){if(typeof t=="string"&&t.indexOf("@index")!==-1){let i=this.getParentScope(e);if(!i)throw"No scope for @index";t=t.replace("@index",i.options.index)}return t}getParentScope(e){var t;let i=e==null?void 0:e.parent;for(;i&&i;){if((t=i.options)==null?void 0:t.scope)return i;i=i.parent}}processBindings(e,t){let i=this;for(let s in t){let r=t[s];if(s==="bind"){let o=r;r=this.processBindingIndex(e,r),t.value=i.get(r),this.addBinding({control:e,rawValue:o,property:s,binding:o})}else se.match(r,o=>{this.addBinding({control:e,rawValue:r,property:s,binding:o}),o=this.processBindingIndex(e,o);let n=i.get(o);typeof n!="undefined"&&(t[s==="bind"?"value":s]=n)})}}addBinding(e){let t=this.matchArrays(e.binding);this.bound[t]=this.bound[t]||[],this.bound[t].findIndex(i=>i.control===e.control)===-1&&this.bound[t].push(e)}applyRules(e,t){let i=this,s=this.matchArrays(e);if(i.rules[s]){let r=i.rules[s];Array.isArray(r)&&r.forEach(o=>{var n;if(o.set=(n=o.set)!=null?n:e,o.set){let l={value:t,path:s,binding:e,get:h=>i.get(h),set:(h,m)=>{i.set(h,m),h===e&&(t=m)},model:this.schemaModel},a;typeof o.value=="function"?a=o.value(l):a=ct.scopeEval(l,"return "+o.value),i.set(o.set,a),o.set===e&&(t=a)}})}return t}matchArrays(e){let t=e.split("/");e="";let i=t.length,s=0;return t.forEach(r=>{s++,isNaN(parseInt(r))?e+=r:e+="*",s<i&&(e+="/")}),e}parseKey(e){let t=parseInt(e);return isNaN(t)?e:t}get(e){if(e.indexOf("*")!==-1||e.indexOf("@index")!==-1)throw Error("Invalid binding path: "+e);let t=e.substring(2).split("/"),i=t.shift();var s=this.instance[i];if(s)for(var r=0;r<t.length;r++){let o=this.parseKey(t[r]);if(r===t.length-1)return typeof o=="number"&&console.log("GET: ",e,s[o]),s[o];s=s[o]}}set(e,t,i){let s=e.substring(2).split("/"),r=s.shift();var o=this.instance[r];if(o)for(var n=0;n<s.length;n++){let l=this.parseKey(s[n]);if(n===s.length-1){this.originatingEventContext=this.createDataBindingOriginContext(i),o[l]=t;break}o=o[l]}}createDataBindingOriginContext(e){if(e)return{eventType:e.type,sourceControl:e.control,eventSourceElement:e.source,controlValue:e.value}}},"St");p(ti,"DataBinding");ei=ti,zs=Zt`:root{--accent: var(--color-accent, #3477f3);--text-color: rgb(41, 41, 41);--bg-color: rgb(231, 231, 231);--shadow-color: black;--frame-color: rgb(250, 250, 250);--xo-input-bg: rgba(250, 250, 250);--xo-input-border-color: rgba(220, 220, 220);--xo-input-border-color-hover: rgba(200, 200, 200);--xo-input-border-color-active: rgba(180, 180, 180);--xo-card-background: rgb(100, 100, 100);--xo-card-color: white}:root.theme-dark{--accent: var(--color-accent, #5287eb);--bg-color: rgb(41, 41, 41);--text-color: rgb(241, 241, 241);--frame-color: rgb(230, 230, 230);--xo-input-bg: rgb(30, 30, 30);--xo-input-border-color: rgba(50, 50, 50);--xo-input-border-color-hover: rgba(80, 80, 80);--xo-input-border-color-active: rgba(110, 110, 110);--xo-card-background: rgb(60, 60, 60)}html,body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background-color:var(--bg-color);accent-color:var(--accent)}html img,body img{border:1rem solid var(--frame-color);border-radius:1rem;box-shadow:1rem 1rem 1rem var(--shadow-color);object-fit:scale-down;object-position:top;max-width:100%;max-height:40vh}.theme-dark html img,.theme-dark body img{filter:brightness(.8) contrast(1.2)}a:link,a:visited{color:var(--text-color);text-decoration:none}a:link:hover,a:visited:hover{text-decoration:underline}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--accent: var(--color-accent, #3477f3);--text-color: rgb(41, 41, 41);--bg-color: rgb(231, 231, 231);--shadow-color: black;--frame-color: rgb(250, 250, 250);--xo-input-bg: rgba(250, 250, 250);--xo-input-border-color: rgba(220, 220, 220);--xo-input-border-color-hover: rgba(200, 200, 200);--xo-input-border-color-active: rgba(180, 180, 180);--xo-card-background: rgb(100, 100, 100);--xo-card-color: white}:root.theme-dark{--accent: var(--color-accent, #5287eb);--bg-color: rgb(41, 41, 41);--text-color: rgb(241, 241, 241);--frame-color: rgb(230, 230, 230);--xo-input-bg: rgb(30, 30, 30);--xo-input-border-color: rgba(50, 50, 50);--xo-input-border-color-hover: rgba(80, 80, 80);--xo-input-border-color-active: rgba(110, 110, 110);--xo-card-background: rgb(60, 60, 60)}html,body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background-color:var(--bg-color);accent-color:var(--accent)}html img,body img{border:1rem solid var(--frame-color);border-radius:1rem;box-shadow:1rem 1rem 1rem var(--shadow-color);object-fit:scale-down;object-position:top;max-width:100%;max-height:40vh}.theme-dark html img,.theme-dark body img{filter:brightness(.8) contrast(1.2)}a:link,a:visited{color:var(--text-color);text-decoration:none}a:link:hover,a:visited:hover{text-decoration:underline}*{box-sizing:border-box}.xo-cn:not(.xo-rep){margin-top:.4rem}.xo-cn:not(.xo-rep) .xo-in{padding:0}.xo-cn:not(.xo-rep):not(.xo-gc) .xo-in,.xo-cn:not(.xo-rep).type-panel .xo-in{padding:15px;border:1px solid var(--xo-input-border-color);border-radius:1rem;background-color:var(--xo-input-bg)}.xo-cn:not(.xo-rep):hover .xo-in{border-color:var(--xo-input-border-color-hover);transition:all .3s ease}.xo-cn:not(.xo-rep).xo-fc .xo-in{border-color:var(--xo-input-border-color-active);transition:all .3s ease}.xo-cn:not(.xo-rep):not(.xo-ri) .xo-in .xo-grp{padding:0}.xo-ri{margin:0;padding:0!important}.xo-ri .xo-ct{margin:0;padding:0}.xo-ri .xo-in{border:0;padding:0!important}.xo-ct{padding:.5rem}label{display:inline-block;margin-top:.3rem;margin-bottom:.3rem;margin-right:.7rem}input,select,textarea{background-color:transparent;color:var(--text-color)}input:not([type=checkbox],[type=radio]),select,textarea{min-width:8rem;padding:.5rem 1rem;line-height:1.25rem}.xo-hd{display:none}input:not([type=checkbox],[type=radio]),select,textarea{border:0;outline:0;padding:0;width:100%;resize:vertical}label{display:inline-block}.xo-lb:empty{display:none}button{text-transform:uppercase;background-color:var(--xo-btn-bg, rgba(127, 127, 127, .8));padding:.4rem .8rem;border-radius:1rem;border:1px solid var(--xo-input-border-color)}button:hover{border:1px solid var(--xo-input-border-color-hover)}button:active{transform:translateY(2px);transition:all .1s ease-out}button.cta{margin:1rem 2rem;font-size:1.3rem;margin:3rem auto}.xo-sl{display:inline-block;padding-left:.5rem}.xo-ds{opacity:.5;user-select:none;cursor:not-allowed}.xo-ds input,.xo-ds [name],.xo-ds label{pointer-events:none}.xo-nv{margin-top:2rem}fieldset{border:0}legend{font-size:1.3rem}.xo-vl{color:#fa5e5e}.xo-grp.hor{display:flex;gap:.6rem}.xo-grp.hor.center{align-items:center}option{background-color:var(--bg-color)}html.theme-dark [data-autocomplete] .xo-ac-rs{background-color:#282828;box-shadow:0 5px 10px 2px #00000080;border-color:#ffffff1a}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm:hover{background-color:#ffffff0d}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm span.text small,html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm span.category{color:#ffffff80}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm.selected{background-color:#ffffff80}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm.active{background-color:#ffffffa6}.pwa-omnibox .exf-ctl-cnt.autocomplete{width:auto;display:inline-block}.material.xo-cn{margin-top:0}.material.xo-tx .xo-ct{position:relative}.material.xo-tx .xo-ct .xo-in{padding:20px 20px 10px 16px}.material.xo-tx .xo-ct label{position:absolute;z-index:1;top:20px;left:25px;padding:0;border-radius:5px;transition:all .2s;pointer-events:none}.material.xo-tx:not(.xo-fc) *::placeholder{opacity:0}.material.xo-tx.xo-fc .xo-ct label,.material.xo-tx.xo-ne .xo-ct label{font-size:75%;transition:all .2s;transform:translateY(-12px);opacity:.8}
`,Vs=zs,re=d(class{constructor(e){this._form=e,this._db=new ei(this),this._mapper=new se(this)}get form(){return this._form}get data(){return this._db}get mapper(){return this._mapper}static get sharedStyles(){return this._sheet||(this._sheet=new CSSStyleSheet,this._sheet.replaceSync(Vs)),this._sheet}},"X");p(re,"Context"),S(re,"_sheet");yt=re,Bs="Invalid binding value",oe=d(class extends J{constructor(){super(...arguments);S(this,"_disabled",!1),S(this,"_clicked",0),S(this,"_context",null)}get context(){return this._context}static get properties(){return{name:{type:String,attribute:!0},bind:{type:String},type:{type:String,attribute:!0},hidden:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},focus:{type:Boolean},label:{type:String},tooltip:{type:String},placeholder:{type:String},valid:{type:Boolean},value:{type:Object},prefix:{type:Object},classes:{type:Array},autocomplete:{type:Object}}}get valid(){return this.checkValidity()}static get styles(){return[yt.sharedStyles,ie.sharedStyles]}closestElement(e,t=this,i=(s,r=s&&s.closest(e))=>!s||s===document||s===window?null:r||i(s.getRootNode().host)){return i(t)}connectedCallback(){var e,t,i;super.connectedCallback(),this.form=this.closest("xo-form"),(e=this.form)==null||e.registerElement(this),this.acceptMappedState(),(t=this.nestedElement)==null||t.addEventListener("focus",this.onfocus.bind(this)),(i=this.nestedElement)==null||i.addEventListener("blur",this.onblur.bind(this)),this.shadowRoot.addEventListener("input",this.onInput.bind(this)),this.shadowRoot.addEventListener("change",this.onInput.bind(this))}disconnectedCallback(){var e,t;(e=this.nestedElement)==null||e.removeEventListener("focus",this.onfocus),(t=this.nestedElement)==null||t.removeEventListener("blur",this.onblur),this.shadowRoot.removeEventListener("input",this.onInput),this.shadowRoot.removeEventListener("change",this.onInput)}firstUpdated(){this.autocomplete&&this.autocomplete.items&&this.nestedElement instanceof HTMLInputElement&&this.tryApplyAutoComplete()}set autocomplete(e){this._autocomplete=e}get autocomplete(){return this._autocomplete}tryApplyAutoComplete(){this._autoCompleter=new ie(this,this.nestedElement,this.autocomplete),this._autoCompleter.attach()}acceptMappedState(){}onfocus(e){e.stopPropagation(),this.focus=!0}onInput(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();let t=e.composedPath()[0];this.form.emit("interaction",{type:"input",control:this,source:t,value:this.value})}click(e){e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation();let t=e.composedPath()[0];this._clicked++,this.form&&this.form.emit("interaction",{type:"click",control:this,source:t,value:t.defaultValue||this._clicked})}checkValidity(){return this.nestedElement&&this.nestedElement.checkValidity?this.nestedElement.checkValidity():!0}reportValidity(){return this.nestedElement?this.nestedElement.reportValidity():!0}onblur(e){e.stopPropagation(),this.focus=!1}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}get value(){var e;return(e=this.nestedElement)==null?void 0:e.value}set value(e){if(this.nestedElement)if(this.nestedElement instanceof HTMLSelectElement){let t=this.items.findIndex(i=>e===i.value||i);this.nestedElement.selectedIndex=t}else this.nestedElement.value=e??""}createControl(e,t,i,s={}){var r;if(!e||!e.data)throw Error("Invalid or missing context");t=this.transform(t,i)||"text";let o;if(customElements.get("xo-"+t)&&(t="xo-"+t),t.startsWith("xo-"))o=document.createElement(t);else{try{o=document.createElement(t);let l=(r=o.__proto__)==null?void 0:r.constructor.name;if(["HTMLUnknownElement","HTMLTimeElement"].includes(l))throw new Error("Invalid Element type")}catch{if(t.indexOf("-")===-1){o=document.createElement("input");try{o.type=t}catch{}}}let n=document.createElement("xo-control");n.type=t,n.nestedElement=o,o=n}return o&&(o.parent=this,o.options=s,e.parent=this,o._context=e,e.mapper.mapProperties(o,i)),o}transform(e,t){switch(e){}return e}getContainerClasses(){var e,t;let i=[];this.hidden&&i.push("xo-hd"),this.focus&&i.push("xo-fc"),this.disabled&&i.push("xo-ds"),this.valid||i.push("xo-iv"),this.classes&&i.push(...this.classes),this.nestedElement&&(this.nestedElement.value&&i.push("xo-ne"),this.isTextual&&i.push("xo-tx"));let s=(t=(e=this.form)==null?void 0:e.theme)!=null?t:"standard";return i.push(s),i.join(" ")}get isTextual(){return this.nestedElement instanceof HTMLTextAreaElement||this.nestedElement instanceof HTMLInputElement&&["text","url","tel","password","email"].includes(this.nestedElement.getAttribute("type"))}render(){return this.type&&this.setAttribute("data-type",this.type),this.closest("xo-nav")?w`${this.renderInput()}`:this.nestedElement instanceof HTMLButtonElement?(typeof this.nestedElement.defaultValue=="undefined"&&(this.nestedElement.defaultValue=this.nestedElement.value),this.nestedElement.removeEventListener("click",this.click),this.nestedElement.addEventListener("click",this.click.bind(this)),w`${this.renderInput(!0)}`):w`<div
      part="xo-cn"
      ${this.hidden?" hidden":""}
      class="xo-cn ${this.getContainerClasses()}"
    >
      <div class="xo-ct" part="xo-ct">
        <label
          exportparts="xo-lb: label"
          part="xo-lb"
          for="${this.id}"
          aria-hidden="true"
          class="xo-lb"
          title="${this.label}"
          >${this.label}${this.renderRequiredState()}</label
        >
        <div class="xo-in" part="xo-in" exportparts="xo-in">
          ${this.renderInput()}
        </div>
      </div>
      <div class="xo-io" part="xo-io">
        <div class="xo-hl" part="xo-hl">${this.getValidation()}</div>
      </div>
    </div>`}renderRequiredState(){return this.label&&this.required?w`<sup>*</sup>`:""}renderInput(e){return this.renderNestedElement(e)}renderNestedElement(e){return e&&this.nestedElement.setAttribute("class",this.nestedElement.getAttribute("class")+" "+this.getContainerClasses()),this.nestedElement}set bind(e){if(typeof e!="string"||!e.startsWith("#/"))throw Error(Bs);this._bind=e}get bind(){return this._bind}getValidation(){if(!this.valid)return w`<small class="xo-vl"
        >${this.validationText||this.invalidMessage}</small
      >`}set disabled(e){this._disabled=e}get disabled(){return this._disabled}toString(){return this.nestedElement?this.nestedElement.nodeName==="INPUT"?`${this.nestedElement.nodeName}[type="${this.nestedElement.type}"]`:this.nestedElement.nodeName:this.nodeName}set invalidMessage(e){this._invalidMessage=e}get invalidMessage(){return this._invalidMessage}},"tt");p(oe,"Control");window.customElements.define("xo-control",oe);ut=oe,ii=d(class{constructor(e){this.form=e,this.form.addEventListener("interaction",t=>{let i=t.detail.control;this.processValidation(i),this.checkValid()}),setTimeout(()=>{this.checkValid()},60)}checkValid(){let e=this.isPageValid(this.form.page),t=this.form.context.data.get("#/_xo/nav/total");this.form.context.data.set("#/_xo/disabled/next",!e||this.form.page>=t),this.form.context.data.set("#/_xo/disabled/back",this.form.page<=1)}processValidation(e){let t=e.checkValidity(),i=e.closestElement("xo-control");try{i.invalidMessage=e.validationMessage}catch{}i&&i.reportValidity&&i.reportValidity()}isPageValid(e){let t=this.form.childNodes[e-1];if(t){let i=t==null?void 0:t.childNodes,s=i.length,r=0;return i.forEach(o=>{o.checkValidity(),o.valid&&r++}),r===s}}},"kt");p(ii,"Validation");si=ii,qs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ws=p(e=>(...t)=>({_$litDirective$:e,values:t}),"e"),ri=d(class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},"it");p(ri,"i");Fs=p(e=>e===null||typeof e!="object"&&typeof e!="function","t"),Gs=p(e=>e.strings===void 0,"r"),pt=p((e,t)=>{var i,s;let r=e._$AN;if(r===void 0)return!1;for(let o of r)(s=(i=o)._$AO)===null||s===void 0||s.call(i,t,!1),pt(o,t);return!0},"e"),$t=p(e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},"o"),oi=p(e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Ks(t)}},"n");d(ni,"ke");p(ni,"r");d(ai,"Te");p(ai,"h");Ks=p(e=>{var t,i,s,r;e.type==qs.CHILD&&((t=(s=e)._$AP)!==null&&t!==void 0||(s._$AP=ai),(i=(r=e)._$AQ)!==null&&i!==void 0||(r._$AQ=ni))},"l"),li=d(class extends ri{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),oi(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(pt(this,e),$t(this))}setValue(e){if(Gs(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},"rt");p(li,"d");hi=d(class{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}},"ot");p(hi,"s");di=d(class{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.q=t))}resume(){var e;(e=this.q)===null||e===void 0||e.call(this),this.Y=this.q=void 0}},"nt");p(di,"i");ci=p(e=>!Fs(e)&&typeof e.then=="function","n"),ui=d(class extends li{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new hi(this),this._$CK=new di}render(...e){var t;return(t=e.find(i=>!ci(i)))!==null&&t!==void 0?t:O}update(e,t){let i=this._$Cyt,s=i.length;this._$Cyt=t;let r=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let n=0;n<t.length&&!(n>this._$Cwt);n++){let l=t[n];if(!ci(l))return this._$Cwt=n,l;n<s&&l===i[n]||(this._$Cwt=1073741823,s=0,Promise.resolve(l).then(async a=>{for(;o.get();)await o.get();let h=r.deref();if(h!==void 0){let m=h._$Cyt.indexOf(l);m>-1&&m<h._$Cwt&&(h._$Cwt=m,h.setValue(a))}}))}return O}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}},"Pt");p(ui,"h");Zs=Ws(ui),Ys="1.0.9",ne=d(class extends ut{constructor(){super();S(this,"elements",{}),this._url=new URL(document.location.href),this._context=new yt(this),this._page=1}static get version(){return Ys}static get properties(){return Te(Wt({},ut.properties),{page:{type:Number,attribute:!0},schema:{type:Object},src:{type:String,attribute:!0},theme:{type:String,attribute:!0}})}get context(){return this._context}set page(e){e!==this._page&&(e<1||e>this.querySelectorAll("xo-page").length||(e>this._page&&this.validation.isPageValid(this._page),this._page=e))}get page(){return this._page}set schema(e){this._schema=e,this.requestUpdate()}get schema(){return this._schema}registerElement(e){e.name&&(this.elements[e.name]=e)}set src(e){this._src=e}get src(){return this._src}readSchema(){return Pe(this,null,function*(){if(!this.schema&&this.src)try{let e=yield import(this.src),t=Object.keys(e)[0];this._schema=e[t]}catch{throw Error("Could not load schema from "+this.src)}return this.schema?(this.interpretSchema(this.schema),!0):!1})}interpretSchema(e){if(typeof e!="object")throw Error("Invalid schema");e.page="#/_xo/nav/page",this.context.data.initialize(e.model,{pageCount:e.pages.length});let t=1;for(let i of e.pages){i.index=t++;let s=this.createControl(this.context,"xo-page",i);s.setAttribute("slot","w"),this.appendChild(s)}this.nav=this.createControl(this.context,"xo-nav",e),this.nav.controls=this.nav.controls,this.nav.setAttribute("slot","n"),this.appendChild(this.nav)}render(){return w`
      ${Zs(this.readSchema().then(e=>e?w`<div class="xo-c" data-page="${this.page}" >
            <form>
                <div class="xo-w">
                    <slot name="w"></slot>
                </div>
                <div class="xo-n">
                    <slot name="n"></slot>
                <div>
            </form>
            <div>`:w``),w`Loading...`)}
    `}firstUpdated(){this.validation=new si(this),this.checkUrlState(),this.emit("first-updated")}emit(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t}))}get url(){return this._url}checkUrlState(){}getSlotted(e){var t;let i=(t=e.shadowRoot)==null?void 0:t.querySelector("slot");return[...(i==null?void 0:i.assignedElements({flatten:!0}))||[]]}},"at");p(ne,"Form");Js=ne;window.customElements.define("xo-form",ne);ae=d(class extends ut{static get properties(){return{layout:{type:String,attribute:!0},align:{type:String,attribute:!0},ui:{type:String,attribute:!0},fields:{type:Array}}}renderInput(){return w`<div class="${this.getGroupClasses()}">
      <slot></slot>
    </div>`}set fields(e){this._fields=e;for(let t of this._fields){let i=this.createControl(this.context,t.type,t);this.appendChild(i)}}get fields(){return this._fields}getGroupClasses(){var e,t;return`xo-grp ${((e=this.layout)==null?void 0:e.startsWith("hor"))?"hor":"ver"} ${(t=this.align)!=null?t:""}`}getContainerClasses(){return`${super.getContainerClasses()} xo-gc ${this.ui?"type-"+this.ui:""}`}},"lt");p(ae,"Group");_t=ae;window.customElements.define("xo-group",ae);le=d(class extends _t{constructor(){super(...arguments);this.hidden=!0}connectedCallback(){super.connectedCallback(),this.closest("xo-form").addEventListener("page",e=>{this.hidden=e.target.page!==this.index}),this.hidden=this.index!==1}render(){return this.hidden?w``:w`<fieldset
      ${this.hidden?"hidden":""}
      data-page="${this.index}"
      class="xo-cn ${this.getContainerClasses()}"
    >
      <legend>${this.label}</legend>
      <slot></slot>
    </fieldset>`}static get properties(){return{index:{type:Number,attribute:!0}}}},"ct");p(le,"Page");window.customElements.define("xo-page",le);Qs=le,he=d(class extends _t{static get properties(){return{items:{type:Array},layout:{type:String},fields:{type:Array}}}set fields(e){if(!Array.isArray(e))throw Error("Invalid fields property value for repeat.");this._fields=e,this.refresh()}get fields(){return this._fields}set items(e){this._items=e,this.hasUpdated&&(this.refresh(),this.requestUpdate())}get items(){return this._items}refresh(){this.innerHTML="";let e=0;this.items.forEach(t=>{let i=this.createControl(this.context,"group",{fields:this.fields,classes:["xo-ri"],index:e},{scope:t,index:e++});i.setAttribute("data-index",e),this.appendChild(i)})}getContainerClasses(){return super.getContainerClasses()+" xo-rep"}},"dt");p(he,"Repeat");Xs=he;window.customElements.define("xo-repeat",he);de=d(class extends _t{static get styles(){return[yt.sharedStyles,Zt`
        :host {
          display: flex;
        }
        .xo-grp {
          display: inline-block;
          margin: auto;
        }
      `]}beforeMap(){this.layout="horizontal",this._controls=[],this.context.data.get("#/_xo/nav/total")>1&&this._controls.push({type:"button",name:"prev",label:"Back",bind:"#/_xo/nav/back",disabled:"#/_xo/disabled/back",click:this.prev.bind(this)},{type:"button",name:"nxt",label:"Next",bind:"#/_xo/nav/next",disabled:"#/_xo/disabled/next",click:this.next.bind(this)})}static get properties(){return{page:{type:Number},controls:{type:Array}}}set page(e){if(typeof e!="number")throw Error("Invalid value for page");let t=this.context.form.page;this.context.form.page=e,this.context.form.emit("page",{from:t,to:e}),this.updateUrl()}updateUrl(){}get page(){return this.context.form.page}set controls(e){if(!Array.isArray(e))throw Error("Invalid controls property value");this._controls=e;for(let t of this._controls){let i=this.createControl(this.context,"button",t);this.appendChild(i)}}get controls(){return this._controls}prev(){this.updateState(-1)}next(){this.updateState(1)}updateState(e){let t=this.context.data.get("#/_xo/nav/page"),i=this.context.data.get("#/_xo/nav/total");e>0?t=Math.min(i,t+1):t=Math.max(1,t-1),this.context.data.set("#/_xo/nav/page",t),this.context.data.set("#/_xo/disabled/next",t>=i),this.context.data.set("#/_xo/disabled/back",t<=1)}submit(){let e=this.closest("xo-form"),t={};Object.entries(e.elements).forEach(i=>{let s=i[0];if(s){let r=i[1].value;t[s]=r}}),console.log(JSON.stringify(t,null,2))}},"ht");p(de,"Navigation");window.customElements.define("xo-nav",de);tr=de,pi=d(class{static get Context(){return yt}static get Control(){return ut}static get DataBinding(){return ei}static get Form(){return Js}static get Group(){return _t}static get PropertyMapper(){return se}static get Page(){return Qs}static get Repeat(){return Xs}static get Util(){return ct}static get Navigation(){return tr}static get Validation(){return si}static get AutoComplete(){return ie}},"It");p(pi,"xo");mi=pi;});var At,ue,gi,mt,vi,E,pe,Et,me=f(()=>{At=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol(),gi=new Map,mt=class{constructor(t,i){if(this._$cssResult$=!0,i!==ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=gi.get(this.cssText);return At&&t===void 0&&(gi.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}};d(mt,"s");vi=d(e=>new mt(typeof e=="string"?e:e+"",ue),"o"),E=d((e,...t)=>{let i=e.length===1?e[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new mt(i,ue)},"r"),pe=d((e,t)=>{At?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{let s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)})},"i"),Et=At?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let s of t.cssRules)i+=s.cssText;return vi(i)})(e):e});var ge,fi,er,bi,ve,xi,fe,P,wt=f(()=>{me();me();fi=window.trustedTypes,er=fi?fi.emptyScript:"",bi=window.reactiveElementPolyfillSupport,ve={toAttribute(e,t){switch(t){case Boolean:e=e?er:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},xi=d((e,t)=>t!==e&&(t==t||e==e),"n"),fe={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:xi},P=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;(i=this.l)!==null&&i!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((i,s)=>{let r=this._$Eh(s,i);r!==void 0&&(this._$Eu.set(r,s),t.push(r))}),t}static createProperty(t,i=fe){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(r){let o=this[t];this[i]=r,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||fe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let i=this.properties,s=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(let r of s)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let i=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)i.unshift(Et(r))}else t!==void 0&&i.push(Et(t));return i}static _$Eh(t,i){let s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,s;((i=this._$Eg)!==null&&i!==void 0?i:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var i;(i=this._$Eg)===null||i===void 0||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;let i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return pe(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostConnected)===null||s===void 0?void 0:s.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostDisconnected)===null||s===void 0?void 0:s.call(i)})}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=fe){var r,o;let n=this.constructor._$Eh(t,s);if(n!==void 0&&s.reflect===!0){let l=((o=(r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&o!==void 0?o:ve.toAttribute)(i,s.type);this._$Ei=t,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Ei=null}}_$AK(t,i){var s,r,o;let n=this.constructor,l=n._$Eu.get(t);if(l!==void 0&&this._$Ei!==l){let a=n.getPropertyOptions(l),h=a.converter,m=(o=(r=(s=h)===null||s===void 0?void 0:s.fromAttribute)!==null&&r!==void 0?r:typeof h=="function"?h:null)!==null&&o!==void 0?o:ve.fromAttribute;this._$Ei=l,this[l]=m(i,a.type),this._$Ei=null}}requestUpdate(t,i,s){let r=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||xi)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(i){Promise.reject(i)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,o)=>this[o]=r),this._$Et=void 0);let i=!1,s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(s)):this._$EU()}catch(r){throw i=!1,this._$EU(),r}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;(i=this._$Eg)===null||i===void 0||i.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,s)=>this._$ES(s,this[s],i)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};d(P,"a");P.finalized=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},bi==null||bi({ReactiveElement:P}),((ge=globalThis.reactiveElementVersions)!==null&&ge!==void 0?ge:globalThis.reactiveElementVersions=[]).push("1.3.1")});function W(e,t,i=e,s){var r,o,n,l;if(t===I)return t;let a=s!==void 0?(r=i._$Cl)===null||r===void 0?void 0:r[s]:i._$Cu,h=vt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),h===void 0?a=void 0:(a=new h(e),a._$AT(e,i,s)),s!==void 0?((n=(l=i)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[s]=a:i._$Cu=a),a!==void 0&&(t=W(e,a._$AS(e,t.values),a,s)),t}var be,X,yi,U,xe,ir,tt,gt,vt,$i,_i,ft,Ai,Ei,B,wi,Ci,ki,Si,$,gr,I,_,Ti,Pi,et,Ui,q,Ct,L,F,kt,sr,St,Tt,Pt,Ii,Hi,G=f(()=>{X=globalThis.trustedTypes,yi=X?X.createPolicy("lit-html",{createHTML:e=>e}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,xe="?"+U,ir=`<${xe}>`,tt=document,gt=d((e="")=>tt.createComment(e),"h"),vt=d(e=>e===null||typeof e!="object"&&typeof e!="function","r"),$i=Array.isArray,_i=d(e=>{var t;return $i(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},"u"),ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ai=/-->/g,Ei=/>/g,B=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,wi=/'/g,Ci=/"/g,ki=/^(?:script|style|textarea|title)$/i,Si=d(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),"p"),$=Si(1),gr=Si(2),I=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ti=new WeakMap,Pi=d((e,t,i)=>{var s,r;let o=(s=i==null?void 0:i.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let l=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new L(t.insertBefore(gt(),l),l,void 0,i??{})}return n._$AI(e),n},"x"),et=tt.createTreeWalker(tt,129,null,!1),Ui=d((e,t)=>{let i=e.length-1,s=[],r,o=t===2?"<svg>":"",n=ft;for(let a=0;a<i;a++){let h=e[a],m,c,u=-1,g=0;for(;g<h.length&&(n.lastIndex=g,c=n.exec(h),c!==null);)g=n.lastIndex,n===ft?c[1]==="!--"?n=Ai:c[1]!==void 0?n=Ei:c[2]!==void 0?(ki.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=B):c[3]!==void 0&&(n=B):n===B?c[0]===">"?(n=r??ft,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,m=c[1],n=c[3]===void 0?B:c[3]==='"'?Ci:wi):n===Ci||n===wi?n=B:n===Ai||n===Ei?n=ft:(n=B,r=void 0);let v=n===B&&e[a+1].startsWith("/>")?" ":"";o+=n===ft?h+ir:u>=0?(s.push(m),h.slice(0,u)+"$lit$"+h.slice(u)+U+v):h+U+(u===-2?(s.push(void 0),a):v)}let l=o+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yi!==void 0?yi.createHTML(l):l,s]},"C"),q=class{constructor({strings:t,_$litType$:i},s){let r;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[h,m]=Ui(t,i);if(this.el=q.createElement(h,s),et.currentNode=this.el.content,i===2){let c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=et.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){let c=[];for(let u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(U)){let g=m[n++];if(c.push(u),g!==void 0){let v=r.getAttribute(g.toLowerCase()+"$lit$").split(U),y=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:y[2],strings:v,ctor:y[1]==="."?kt:y[1]==="?"?St:y[1]==="@"?Tt:F})}else a.push({type:6,index:o})}for(let u of c)r.removeAttribute(u)}if(ki.test(r.tagName)){let c=r.textContent.split(U),u=c.length-1;if(u>0){r.textContent=X?X.emptyScript:"";for(let g=0;g<u;g++)r.append(c[g],gt()),et.nextNode(),a.push({type:2,index:++o});r.append(c[u],gt())}}}else if(r.nodeType===8)if(r.data===xe)a.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(U,c+1))!==-1;)a.push({type:7,index:o}),c+=U.length-1}o++}}static createElement(t,i){let s=tt.createElement("template");return s.innerHTML=t,s}};d(q,"E");d(W,"P");Ct=class{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;let{el:{content:s},parts:r}=this._$AD,o=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:tt).importNode(s,!0);et.currentNode=o;let n=et.nextNode(),l=0,a=0,h=r[0];for(;h!==void 0;){if(l===h.index){let m;h.type===2?m=new L(n,n.nextSibling,this,t):h.type===1?m=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(m=new Pt(n,this,t)),this.v.push(m),h=r[++a]}l!==(h==null?void 0:h.index)&&(n=et.nextNode(),l++)}return o}m(t){let i=0;for(let s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}};d(Ct,"V");L=class{constructor(t,i,s,r){var o;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=r,this._$Cg=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=W(this,t,i),vt(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==I&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):_i(t)?this.S(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==_&&vt(this._$AH)?this._$AA.nextSibling.data=t:this.k(tt.createTextNode(t)),this._$AH=t}T(t){var i;let{values:s,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=q.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===o)this._$AH.m(s);else{let n=new Ct(o,this),l=n.p(this.options);n.m(s),this.k(l),this._$AH=n}}_$AC(t){let i=Ti.get(t.strings);return i===void 0&&Ti.set(t.strings,i=new q(t)),i}S(t){$i(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,s,r=0;for(let o of t)r===i.length?i.push(s=new L(this.A(gt()),this.A(gt()),this,this.options)):s=i[r],s._$AI(o),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,i);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cg=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}};d(L,"N");F=class{constructor(t,i,s,r,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,r){let o=this.strings,n=!1;if(o===void 0)t=W(this,t,i,0),n=!vt(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{let l=t,a,h;for(t=o[0],a=0;a<o.length-1;a++)h=W(this,l[s+a],i,a),h===I&&(h=this._$AH[a]),n||(n=!vt(h)||h!==this._$AH[a]),h===_?t=_:t!==_&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!r&&this.C(t)}C(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};d(F,"S");kt=class extends F{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===_?void 0:t}};d(kt,"M");sr=X?X.emptyScript:"",St=class extends F{constructor(){super(...arguments),this.type=4}C(t){t&&t!==_?this.element.setAttribute(this.name,sr):this.element.removeAttribute(this.name)}};d(St,"H");Tt=class extends F{constructor(t,i,s,r,o){super(t,i,s,r,o),this.type=5}_$AI(t,i=this){var s;if((t=(s=W(this,t,i,0))!==null&&s!==void 0?s:_)===I)return;let r=this._$AH,o=t===_&&r!==_||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==_&&(r===_||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;typeof this._$AH=="function"?this._$AH.call((s=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}};d(Tt,"I");Pt=class{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};d(Pt,"L");Ii={P:"$lit$",L:U,V:xe,I:1,N:Ui,R:Ct,D:_i,j:W,H:L,O:F,F:St,B:Tt,W:kt,Z:Pt},Hi=window.litHtmlPolyfillSupport;Hi==null||Hi(q,L),((be=globalThis.litHtmlVersions)!==null&&be!==void 0?be:globalThis.litHtmlVersions=[]).push("2.2.1")});var ye,$e,b,Oi,Mi=f(()=>{wt();wt();G();G();b=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;let s=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=s.firstChild),s}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Pi(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return I}};d(b,"s");b.finalized=!0,b._$litElement$=!0,(ye=globalThis.litElementHydrateSupport)===null||ye===void 0||ye.call(globalThis,{LitElement:b});Oi=globalThis.litElementPolyfillSupport;Oi==null||Oi({LitElement:b});(($e=globalThis.litElementVersions)!==null&&$e!==void 0?$e:globalThis.litElementVersions=[]).push("3.2.0")});var C=f(()=>{wt();G();Mi()});var bt,Li=f(()=>{G();bt=d(e=>e??_,"l")});var _e=f(()=>{Li()});var Ri,Ni,Ut,Di=f(()=>{Ri={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ni=d(e=>(...t)=>({_$litDirective$:e,values:t}),"e"),Ut=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};d(Ut,"i")});var rr,ji,it,R,or,zi,Vi,It,Bi=f(()=>{G();({H:rr}=Ii),ji=d(()=>document.createComment(""),"e"),it=d((e,t,i)=>{var s;let r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(i===void 0){let n=r.insertBefore(ji(),o),l=r.insertBefore(ji(),o);i=new rr(n,l,e,e.options)}else{let n=i._$AB.nextSibling,l=i._$AM,a=l!==e;if(a){let h;(s=i._$AQ)===null||s===void 0||s.call(i,e),i._$AM=e,i._$AP!==void 0&&(h=e._$AU)!==l._$AU&&i._$AP(h)}if(n!==o||a){let h=i._$AA;for(;h!==n;){let m=h.nextSibling;r.insertBefore(h,o),h=m}}}return i},"u"),R=d((e,t,i=e)=>(e._$AI(t,i),e),"c"),or={},zi=d((e,t=or)=>e._$AH=t,"s"),Vi=d(e=>e._$AH,"a"),It=d(e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let i=e._$AA,s=e._$AB.nextSibling;for(;i!==s;){let r=i.nextSibling;i.remove(),i=r}},"m")});var qi,N,Wi=f(()=>{G();Di();Bi();qi=d((e,t,i)=>{let s=new Map;for(let r=t;r<=i;r++)s.set(e[r],r);return s},"u"),N=Ni(class extends Ut{constructor(e){if(super(e),e.type!==Ri.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;i===void 0?i=t:t!==void 0&&(s=t);let r=[],o=[],n=0;for(let l of e)r[n]=s?s(l,n):n,o[n]=i(l,n),n++;return{values:o,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){var r;let o=Vi(e),{values:n,keys:l}=this.dt(t,i,s);if(!Array.isArray(o))return this.ut=l,n;let a=(r=this.ut)!==null&&r!==void 0?r:this.ut=[],h=[],m,c,u=0,g=o.length-1,v=0,y=n.length-1;for(;u<=g&&v<=y;)if(o[u]===null)u++;else if(o[g]===null)g--;else if(a[u]===l[v])h[v]=R(o[u],n[v]),u++,v++;else if(a[g]===l[y])h[y]=R(o[g],n[y]),g--,y--;else if(a[u]===l[y])h[y]=R(o[u],n[y]),it(e,h[y+1],o[u]),u++,y--;else if(a[g]===l[v])h[v]=R(o[g],n[v]),it(e,o[u],o[g]),g--,v++;else if(m===void 0&&(m=qi(l,v,y),c=qi(a,u,g)),m.has(a[u]))if(m.has(a[g])){let k=c.get(l[v]),Bt=k!==void 0?o[k]:null;if(Bt===null){let Ce=it(e,o[u]);R(Ce,n[v]),h[v]=Ce}else h[v]=R(Bt,n[v]),it(e,o[u],Bt),o[k]=null;v++}else It(o[g]),g--;else It(o[u]),u++;for(;v<=y;){let k=it(e,h[y+1]);R(k,n[v]),h[v++]=k}for(;u<=g;){let k=o[u++];k!==null&&It(k)}return this.ut=l,zi(e,h),I}})});var xt=f(()=>{Wi()});var Ae,D,Ee=f(()=>{C();_e();xt();Ae=class extends b{constructor(){super();x(this,"_value",[]);x(this,"_layout","default");this.items=[]}static get styles(){return[E`
        .cards {
          width: 100%;
          flex-wrap: wrap;
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(var(--card-width), 1fr)
          );
          grid-auto-rows: minmax(var(--card-height), auto);
          gap: 0.3rem;
        }

        .cards label {
          position: relative;
          min-width: var(--card-width, 120px);
          min-height: var(--card-height, 120px);
          background-color: var(--xo-card-background);
          background-repeat: no-repeat;
          background-size: contain;
          border-radius: 10px;
          border: 2px solid var(--xo-input-border-color);
          background-image: var(--image);
          transition: all 0.2s;
        }

        .cards label:hover {
          transition: all 0.2s;
          border-color: var(--xo-input-border-color-hover);
        }

        .cards input {
          visibility: hidden;
        }
        .cards .xo-sl {
          color: white;
          vertical-align: middle;
          text-align: center;
        }

        .cards label.has-image .xo-sl {
          position: absolute;
          display: block;
          width: 100%;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .cards label.has-image .xo-sl {
          opacity: 0;
        }

        .cards label.has-image:hover .xo-sl {
          opacity: 1;
          transition: all 0.2s ease;
        }

        label.selected {
          border-color: var(--accent) !important;
        }

        .cards label.selected,
        .list label.selected {
          position: relative;
          transition: all 0.2s;
        }
        .cards label.selected:after {
          font-size: 1.2rem;
          font-weight: 800;
          content: "✓";
          position: absolute;
          top: 5px;
          right: 5px;
          color: white;
        }

        .list label {
          min-width: 160px;
          display: block;
          padding: 1rem 0.5em 1rem 0.5rem;
          border: 2px solid #ccc;
          border-radius: 1rem;
          margin-bottom: 0.3rem;
          transition: all 0.2s;
        }

        .list label.selected {
        }

        .default [type],
        .list [type] {
          position: absolute;
          left: -9999px;
        }

        
      `]}static get properties(){return{items:{type:Array},value:{type:Object},layout:{type:String},cardWidth:{type:String},cardHeight:{type:String}}}set layout(t){this._layout=t}get layout(){return this._layout}render(){var t;return $`<div class="${(t=this.layout)!=null?t:"default"}" style=${this.getStyle()}>
      ${N(this.items,i=>i.id,(i,s)=>(i=this.makeItem(i),i.checked=this.isSelected(i),i.style=this.getItemStyle(i),i.class=this.getItemClass(i),this.renderItem(i)))}
    </div>`}renderItem(t){return $`<label
      title=${t.label}
      class=${bt(t.class?t.class:void 0)}
      style=${bt(t.style?t.style:void 0)}
      ><input
        @change=${this.change}
        @click=${this.toggleCheck}
        .checked=${t.checked}
        type=${this.inputType}
        name="${this.name}"
        value="${t.value}"
      /><span class="xo-sl"> ${t.label}</span></label
    >`}getItemClass(t){return`${t.checked?"selected":""} ${t.image?"has-image":""}`.trim()}getItemStyle(t){return t.image?`--image: url(${t.image})`:void 0}getStyle(){switch(this.layout){case"cards":return`--card-width: ${this.cardWidth}; --card-height: ${this.cardHeight}`}}get inputType(){throw Error("Not implemented")}change(t){t.preventDefault(),t.stopPropagation()}onInput(t){t.stopPropagation()}reportValidity(){}toggleCheck(t){throw Error("Not implemented")}checkValidity(){return!(this.required&&!this.value)}isSelected(t){throw Error("Not implemented")}makeItem(t){return typeof t=="string"?{value:t,label:t}:t}};d(Ae,"InputGroup");D=Ae});var Ht,Ot,we=f(()=>{Ee();C();Ht=class extends D{constructor(){super(...arguments);x(this,"_value",[])}static get styles(){return[D.styles,E`
      .default label {
        position: relative;
        padding-left: 24px;
        cursor: pointer;
        margin-right: 1rem;
        display: inline-block;
      }

      .default label:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 10%;
        background: #fff;
      }

      .default label:after {
        content: "";
        width: 12px;
        height: 12px;
        background: var(--accent);
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 10%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }

      .default label:not(.selected):after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
      }

      .default label.selected:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      `]}static get properties(){return D.properties}get inputType(){return"checkbox"}toggleCheck(t){if(t.stopPropagation(),t.target.checked)this._value.push(t.target.value);else{let i=this._value.indexOf(t.target.value);i!==-1&&this._value.splice(i,1)}this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1})),this.requestUpdate()}checkValidity(){return this.required?this.value.length>0:!0}reportValidity(){}isSelected(t){return this._value.includes(t.value)}get value(){return this._value}set value(t){!Array.isArray(t)||(this._value=t)}};d(Ht,"CheckGroup");Ot=Ht;window.customElements.define("xw-checkgroup",Ht)});var Mt,Fi,Gi=f(()=>{we();Mt=class extends Ot{constructor(){super(...arguments);x(this,"_value",!1);this.items=[{value:!0,label:"On"}]}static get properties(){return{value:{type:Boolean},text:{type:String}}}get value(){return this._value}set value(t){this._value=t}set text(t){this.items[0].label=t}get text(){return this.items?this.items[0].label:"On"}toggleCheck(t){t.stopPropagation(),t.target.checked?this._value=!0:this._value=!1,this.requestUpdate()}isSelected(){return this.value}};d(Mt,"Checkbox");Fi=Mt;window.customElements.define("xw-checkbox",Mt)});var st,Ki,Zi=f(()=>{C();st=class extends b{render(){return console.log("render dialog"),$`<dialog>
      <a class="close" @click=${this.close}>⨉</a>
      <h1>Hello</h1>
      <p>Welcome to the HTML 5.2 <code>dialog</code> element.</p>
    </dialog>`}close(t){this.value=!1}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}set value(t){let i=this;if(!this.shadowRoot)return;let s=this.shadowRoot.querySelector("dialog");s.addEventListener("close",r=>{i.fireChange()}),s.classList.add("opening"),setTimeout(()=>{s.classList.remove("opening")},100),t?s[this.modal?"showModal":"show"]():s.close()}checkValidity(){return!0}get value(){return this.shadowRoot.querySelector("dialog").open}};d(st,"Dialog"),x(st,"styles",E`
    dialog {
      padding: 50px;
      border-radius: 5px;
      opacity: 1;
      border: 0;
      box-shadow: 5px 5px 43px 5px rgba(0, 0, 0, 0.37);
      transition: opacity 0.4s;
    }

    dialog.opening {
      opacity: 0;
      transition: opacity 0.2s ease
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.4);
    }

    dialog a.close {
      position: absolute;
      display: inline-block;
      top: 3px;
      right: 3px;
      padding: 0.2rem 0.5rem;
      color: black;
      background-color: rgba(40, 40, 40, 0.3);
      border-radius: 1rem;
      cursor: pointer;
    }

    dialog a.close:hover {
      filter: brightness(200%);
    }
  `),x(st,"properties",{modal:{type:Boolean},display:{type:Boolean}});customElements.define("xw-dialog",st);Ki=st});var nr,Lt,Yi,Ji=f(()=>{C();xt();_e();nr="100px",Lt=class extends b{constructor(){super(...arguments);x(this,"_value",[]);x(this,"_max",-1);x(this,"_height",nr);x(this,"_types",["image/"])}static get styles(){return[E`
        .drop {
          position: relative;
          height: var(--image-height, DEF_HEIGHT);
          min-width: 200px;
          cursor: pointer;
        }

        .drop:not(.has-files) [part="files"]:after {
          top: 0;
          left: 0;
          width: 100%;
          height: fit-content;

          content: var(
            --filedrop-info-text,
            "Select files to upload, or drag & drop them here..."
          );
          position: absolute;
          opacity: 0.3;
          pointer-events: none;
        }

        input {
          position: absolute;
          width: 100%;
          height: var(--image-height, DEF_HEIGHT);
          opacity: 0;
          cursor: pointer;
        }
        progress {
          width: 100%;
          visibility: hidden;
        }

        .dropping {
          border: 2px dotted rgba(127, 127, 127, 0.5);
        }

        .files {
          height: 100%;
          display: flex;
          width: 100%;
          overflow-x: auto;
        }

        .thumb {
          position: relative;
          border: 6px solid white;
          background-color: rgba(127, 127, 127, 0.1);
          display: inline-block;
          width: 120px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position-y: center;
          margin-right: 0.5rem;
          border: 15px solid transparent;
          border-radius: 10px;
        }

        .thumb > a {
          position: absolute;
          display: inline-block;
          top: -8px;
          right: -8px;
          padding: 0.2rem 0.5rem;
          color: black;
          background-color: rgba(40, 40, 40, 0.3);
          border-radius: 1rem;
          cursor: pointer;
        }

        .thumb > a:hover {
          color: white;
          background-color: rgba(40, 40, 40, 0.8);
          transition: all 0.2s ease;
        }
      `]}static get properties(){return{value:{type:Object},height:{type:Number},max:{type:Number},types:{type:Array},infotext:{type:String}}}get height(){return this._height}set height(t){this._height=t}set max(t){this._max=t}get max(){return this._max}set value(t){typeof t!="undefined"&&(!Array.isArray(t)||(this._value=t))}get value(){return this._value}set types(t){if(!Array.isArray(t))throw Error("Types must be array");this._types=t}get types(){return this._types}render(){let t=this.infotext?`--filedrop-info-text: ${this.infotext}`:"",i=`--image-height: ${this.height};`+t;return $`<div
      style="${i}"
      class="drop ${this.value.length?"has-files":""}"
      @dragover=${this.dragOver}
      @dragend=${this.dragEnd}
      @dragleave=${this.dragEnd}
      @drop=${this.drop}
    >
      <input @change=${this.change} type="file" .multiple=${this.max!==1} />
      <div class="files" part="files">
        ${N(this.value,s=>s.id,(s,r)=>this.renderFile(s,r))}
      </div>

      <progress id="progress" value="0" max="100"></progress>
    </div>`}renderFile(t,i){var r;let s=(r=t.dataUrl)!=null?r:t.url;return $`<div
      class="thumb"
      style=${bt(s?`background-image: url(${s});`:void 0)}
    >
      <a data-index="${i}" @click=${this.removeThumb.bind(this)}>⨉</a>
    </div>`}removeThumb(t){let i=parseInt(t.target.getAttribute("data-index"));this.value.splice(i,1),this.fireChange(),this.requestUpdate()}dragOver(t){return t.dataTransfer.dropEffect="copy",this.shadowRoot.querySelector(".drop").classList.add("dropping"),!1}reportValidity(){}checkValidity(){try{this.checkConstraints()}catch(t){return!1}}dragEnd(t){return this.shadowRoot.querySelector(".drop").classList.remove("dropping"),t.dataTransfer.dropEffect="none",!1}drop(t){return t.preventDefault(),t.dataTransfer.dropEffect="none",this.readFiles(t.dataTransfer.files),this.dragEnd(t),!1}change(t){this.readFiles(t.target.files)}readFiles(t){this._readCount=t.length,this._readIndex=0,[...t].forEach(i=>{this.readFile(i)})}readFile(t){this.checkConstraints(t);let i=this,s=new FileReader,r=this.shadowRoot.querySelector("progress");r.style.visibility="visible",s.readAsDataURL(t),s.onload=function(){i.value.push({name:t.name,type:t.type,size:t.size,date:new Date(t.lastModified).toISOString(),dataUrl:s.result}),i._readIndex++,i._readIndex===i._readCount&&(console.log("FileDrop ready reading all files"),i._readCount=0,i._readIndex=0,i.fireChange(),i.requestUpdate())},s.addEventListener("progress",o=>{if(o.loaded&&o.total){let n=o.loaded/o.total*100;r.value=n,n===100&&(r.style.visibility="hidden")}})}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}checkConstraints(t){this.checkMax(),this.checkFileType(t.type),this.checkSizeLimit(t)}checkMax(){if(this.max!==-1&&this.value.length>=this.max)throw Error("Maximum number of files reached")}checkFileType(t){let i=!1;if(this.types.forEach(s=>{t.indexOf(s)===0&&(i=!0)}),!i)throw Error("Invalid file type")}checkSizeLimit(t){let i=0;if(this.value.forEach(s=>{i+=s.size}),i>this.limit)throw Error("File size limit exceeded")}onInput(t){t.preventDefault()}};d(Lt,"FileDrop");customElements.define("xw-filedrop",Lt);Yi=Lt});var Rt,Qi,Xi=f(()=>{C();Rt=class extends b{static get properties(){return{title:{type:String},body:{type:String}}}render(){return $`
            <div class="info">
                <h3>${this.title}</h3>
                <div class="info-body">
                    ${this.body}
                </div>
            </div>
        `}};d(Rt,"Info");customElements.define("xw-info",Rt);Qi=Rt});var Nt,ts,es=f(()=>{Ee();C();Nt=class extends D{static get styles(){return[D.styles,E`
       
      .default label {
        position: relative;
        padding-left: 24px;
        cursor: pointer;
        margin-right: 1rem;
        display: inline-block;
      }

      .default label:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
      }

      .default label:after {
        content: "";
        width: 12px;
        height: 12px;
        background: var(--accent);
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }

      .default label:not(.selected):after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
      }

      .default label.selected:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      `]}static get properties(){return D.properties}onInput(t){t.stopPropagation()}reportValidity(){}toggleCheck(t){t.stopPropagation(),t.target.checked&&(this._value=t.target.value),this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1})),this.requestUpdate()}checkValidity(){return!(this.required&&!this.value)}isSelected(t){return this._value===t.value}get inputType(){return"radio"}get value(){return this._value}set value(t){this._value=t}};d(Nt,"RadioGroup");ts=Nt;window.customElements.define("xw-radiogroup",Nt)});var Dt,is,ss=f(()=>{C();xt();Dt=class extends b{constructor(){super();x(this,"_value",[]);this.items=[]}static get properties(){return{items:{type:Array},value:{type:Object}}}render(){return $`<select @change=${this.fireChange.bind(this)} size="1">
      ${N(this.items,t=>t.id,(t,i)=>(t=this.makeItem(t),$`<option
            .selected=${this.isSelected(t)}
            value="${t.value}"
          >
            ${t.label}
          </option>`))}
    </select>`}change(t){t.preventDefault(),t.stopPropagation()}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}isSelected(t){return this._value==t.value}makeItem(t){return typeof t=="string"?{value:t,label:t}:t}get value(){return this._value}set value(t){this._value=t}};d(Dt,"Select");is=Dt;window.customElements.define("xw-select",Dt)});var jt,rs,os=f(()=>{C();jt=class extends b{constructor(){super(...arguments);x(this,"_value",!1)}static get styles(){return[E`
        label.switch {
          display: inline-block;
          height: 24px;
          position: relative;
        }

        .switch input {
          display: none;
        }

        .knob {
          width: 40px;

          background-color: #ccc;
          bottom: 0;
          cursor: pointer;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: 0.4s;
        }

        .knob:before {
          background-color: #fff;
          bottom: 4px;
          content: "";
          height: 16px;
          left: 4px;
          position: absolute;
          transition: 0.4s;
          width: 16px;
        }

        input:checked + .knob {
          background-color: #66bb6a;
        }

        input:checked + .knob:before {
          transform: translateX(16px);
        }

        .knob.round {
          border-radius: 24px;
        }

        .knob.round:before {
          border-radius: 50%;
        }

        .knob-lbl {
          margin-left: 50px;
          width: auto;
          cursor: pointer;
        }
      `]}static get properties(){return{text:{type:String}}}render(){return $`<label class="switch">
      <input @change=${this.toggle} .checked=${this.value} type="checkbox" />
      <div class="knob round"></div>
      <div class="knob-lbl">${this.text}</div>
    </label>`}checkValidity(){return!0}onInput(t){t.preventDefault(),t.stopPropagation()}toggle(t){t.preventDefault(),t.stopPropagation(),this.value=t.target.checked===!0,this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}reportValidity(){}get value(){var t;return(t=this._value)!=null?t:!1}set value(t){this._value=t}};d(jt,"Switch");rs=jt;window.customElements.define("xw-switch",jt)});var ar,ns,zt,as,ls=f(()=>{C();xt();ce();ar="100%",ns=mi.AutoComplete,zt=class extends b{constructor(){super(...arguments);x(this,"_value",[]);this.textInput=document.createElement("input"),this.textInput.type="text",this.textInput.addEventListener("keydown",this.input.bind(this)),this.listenToAutoCompleteEvents()}listenToAutoCompleteEvents(){this.textInput.addEventListener("result-selected",t=>{this.textInput.value=t.detail.text,this.tryAdd()}),this.textInput.addEventListener("show-results",t=>{let i=t.detail.results;this.value.forEach(s=>{let r=i.findIndex(o=>o.text===s);r!==-1&&i.splice(r,1)})})}set placeholder(t){this.textInput.placeholder=t}get placeholder(){return this.textInput.placeholder}firstUpdated(){super.firstUpdated(),this.autocomplete&&this.autocomplete.items&&(this._autoCompleter=new ns(this,this.textInput,this.autocomplete),this._autoCompleter.attach())}static get styles(){return[ns.sharedStyles,E`
        .xo-ac-rs {
          top: 2rem;
        }

        input {
          border: 0;
          outline: 0;
          background: transparent;
        }
        .tags {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          gap: 0.3rem;
          max-width: var(--max-tags-width, 400px);
          min-height: 1.85rem;
        }
        .tag {
          white-space: nowrap;
          display: inline-block;
          border-radius: 0.3rem 1rem 1rem 0.3rem;
          background-color: var(--xo-card-background);
          color: var(--xo-card-color);
          padding: 0.3rem 0.6rem;
          margin-right: 0.3rem;
        }
        .eye {
          display: inline-block;
          margin-right: 0.4rem;
          margin-left: -0.4rem;
          opacity: 0.5;
        }

        a {
          display: "inline-block";
          margin-left: 0.3rem;
          cursor: pointer;
          opacity: 0.5;
        }

        a:hover {
          opacity: 1;
        }
      `]}static get properties(){return{value:{type:Array},maxWidth:{type:String},autocomplete:{type:Object}}}onInput(t){t.preventDefault(),t.stopPropagation()}get value(){return this._value}set value(t){!Array.isArray(t)||(this._value=t)}render(){var t;return $`<div
      class="tags"
      style="--max-tags-width: ${(t=this.maxWidth)!=null?t:ar}"
    >
      ${N(this.value,i=>i.id,(i,s)=>this.renderTag(i,s))}
      ${this.textInput}
    </div>`}reportValidity(){return!0}checkValidity(){return!0}input(t){switch(t.key){case"Enter":t.target.value!==""&&this.tryAdd(t.target.value);break;case"Backspace":t.target.value===""&&(this.value.pop(),this.fireChange(),this.requestUpdate());break}}tryAdd(){this.value.indexOf(this.textInput.value)===-1&&(this.value.push(this.textInput.value),this.fireChange(),this.requestUpdate(),this.textInput.value="")}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}renderTag(t,i){return $`<div data-index="${i}" class="tag">
      <span class="eye">○</span><span>${t}</span>
      <a @click=${this.deleteTag}>x</a>
    </div>`}deleteTag(t){t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();let i=parseInt(t.target.closest("[data-index]").getAttribute("data-index"));this.value.splice(i,1),this.requestUpdate()}};d(zt,"Tags");customElements.define("xw-tags",zt);as=zt});var Vt,hs,ds=f(()=>{C();Vt=class extends b{static get properties(){return{dark:{type:Boolean}}}static get styles(){return[E`
        button {
          outline: none;
          padding: 0.5rem;
          border-radius: 100%;
          background-color: var(--theme-bg);
          position: fixed;
          top: 5px;
          right: 5px;
        }
      `]}constructor(){super();this.cls=document.documentElement.classList,this.dark=window.matchMedia("(prefers-color-scheme: dark)").matches}get dark(){return this._dark}set dark(t){this._dark=t}render(){return $`<button
      @click=${this.click}
      style="--theme-bg: ${this.dark?"rgba(100,100,100,.8)":"rgba(50,50,50,.8)"}"
    >
      ${this.dark?"\u{1F506}":"\u{1F319}"}
    </button>`}click(t){this.dark=!this.dark}get dark(){return this.cls.contains("theme-dark")}set dark(t){this.cls[t?"add":"remove"]("theme-dark"),this.cls[t?"remove":"add"]("theme-light"),this.requestUpdate()}};d(Vt,"Theme");customElements.define("xw-theme",Vt);hs=Vt});var us=ys((To,cs)=>{Gi();we();Zi();Ji();Xi();es();ss();os();ls();ds();cs.exports={Checkbox:Fi,CheckGroup:Ot,Dialog:Ki,FileDrop:Yi,Info:Qi,RadioGroup:ts,Select:is,Switch:rs,Tags:as,Theme:hs}});ce();var Io=_s(us());})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
