(()=>{var lo=Object.create;var Ct=Object.defineProperty;var ho=Object.getOwnPropertyDescriptor;var co=Object.getOwnPropertyNames,Fi=Object.getOwnPropertySymbols,uo=Object.getPrototypeOf,Gi=Object.prototype.hasOwnProperty,po=Object.prototype.propertyIsEnumerable;var Pe=(e,t,i)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Ki=(e,t)=>{for(var i in t||(t={}))Gi.call(t,i)&&Pe(e,i,t[i]);if(Fi)for(var i of Fi(t))po.call(t,i)&&Pe(e,i,t[i]);return e};var mo=e=>Ct(e,"__esModule",{value:!0}),h=(e,t)=>Ct(e,"name",{value:t,configurable:!0}),Ue=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,i)=>(typeof require!="undefined"?require:t)[i]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var f=(e,t)=>()=>(e&&(t=e(e=0)),t);var go=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var vo=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of co(t))!Gi.call(e,s)&&s!=="default"&&Ct(e,s,{get:()=>t[s],enumerable:!(i=ho(t,s))||i.enumerable});return e},fo=e=>vo(mo(Ct(e!=null?lo(uo(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var x=(e,t,i)=>(Pe(e,typeof t!="symbol"?t+"":t,i),i);var at=(e,t,i)=>new Promise((s,r)=>{var o=a=>{try{l(i.next(a))}catch(d){r(d)}},n=a=>{try{l(i.throw(a))}catch(d){r(d)}},l=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,n);l((i=i.apply(e,t)).next())});var Kt,Qe,Ls,It,Ns,A,Je,Yt,Xe=f(()=>{Kt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),Ls=new Map,It=class{constructor(t,i){if(this._$cssResult$=!0,i!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Ls.get(this.cssText);return Kt&&t===void 0&&(Ls.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}};h(It,"s");Ns=h(e=>new It(typeof e=="string"?e:e+"",Qe),"o"),A=h((e,...t)=>{let i=e.length===1?e[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new It(i,Qe)},"r"),Je=h((e,t)=>{Kt?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{let s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)})},"i"),Yt=Kt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let s of t.cssRules)i+=s.cssText;return Ns(i)})(e):e});var ti,Ds,tn,js,ei,zs,ii,H,Zt=f(()=>{Xe();Xe();Ds=window.trustedTypes,tn=Ds?Ds.emptyScript:"",js=window.reactiveElementPolyfillSupport,ei={toAttribute(e,t){switch(t){case Boolean:e=e?tn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},zs=h((e,t)=>t!==e&&(t==t||e==e),"n"),ii={attribute:!0,type:String,converter:ei,reflect:!1,hasChanged:zs},H=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;(i=this.l)!==null&&i!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((i,s)=>{let r=this._$Eh(s,i);r!==void 0&&(this._$Eu.set(r,s),t.push(r))}),t}static createProperty(t,i=ii){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(r){let o=this[t];this[i]=r,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ii}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let i=this.properties,s=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(let r of s)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let i=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)i.unshift(Yt(r))}else t!==void 0&&i.push(Yt(t));return i}static _$Eh(t,i){let s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,s;((i=this._$Eg)!==null&&i!==void 0?i:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var i;(i=this._$Eg)===null||i===void 0||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;let i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Je(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostConnected)===null||s===void 0?void 0:s.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostDisconnected)===null||s===void 0?void 0:s.call(i)})}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=ii){var r,o;let n=this.constructor._$Eh(t,s);if(n!==void 0&&s.reflect===!0){let l=((o=(r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&o!==void 0?o:ei.toAttribute)(i,s.type);this._$Ei=t,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Ei=null}}_$AK(t,i){var s,r,o;let n=this.constructor,l=n._$Eu.get(t);if(l!==void 0&&this._$Ei!==l){let a=n.getPropertyOptions(l),d=a.converter,p=(o=(r=(s=d)===null||s===void 0?void 0:s.fromAttribute)!==null&&r!==void 0?r:typeof d=="function"?d:null)!==null&&o!==void 0?o:ei.fromAttribute;this._$Ei=l,this[l]=p(i,a.type),this._$Ei=null}}requestUpdate(t,i,s){let r=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||zs)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(i){Promise.reject(i)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,o)=>this[o]=r),this._$Et=void 0);let i=!1,s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(s)):this._$EU()}catch(r){throw i=!1,this._$EU(),r}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;(i=this._$Eg)===null||i===void 0||i.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,s)=>this._$ES(s,this[s],i)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};h(H,"a");H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},js==null||js({ReactiveElement:H}),((ti=globalThis.reactiveElementVersions)!==null&&ti!==void 0?ti:globalThis.reactiveElementVersions=[]).push("1.3.1")});function X(e,t,i=e,s){var r,o,n,l;if(t===T)return t;let a=s!==void 0?(r=i._$Cl)===null||r===void 0?void 0:r[s]:i._$Cu,d=Rt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),d===void 0?a=void 0:(a=new d(e),a._$AT(e,i,s)),s!==void 0?((n=(l=i)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[s]=a:i._$Cu=a),a!==void 0&&(t=X(e,a._$AS(e,t.values),a,s)),t}var si,pt,Vs,I,ri,en,mt,Mt,Rt,Bs,qs,Lt,Ws,Fs,Q,Gs,Ks,Ys,Zs,y,Mn,T,w,Qs,Js,gt,Xs,J,Qt,j,tt,Jt,sn,Xt,te,ee,tr,er,z=f(()=>{pt=globalThis.trustedTypes,Vs=pt?pt.createPolicy("lit-html",{createHTML:e=>e}):void 0,I=`lit$${(Math.random()+"").slice(9)}$`,ri="?"+I,en=`<${ri}>`,mt=document,Mt=h((e="")=>mt.createComment(e),"h"),Rt=h(e=>e===null||typeof e!="object"&&typeof e!="function","r"),Bs=Array.isArray,qs=h(e=>{var t;return Bs(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},"u"),Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ws=/-->/g,Fs=/>/g,Q=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Gs=/'/g,Ks=/"/g,Ys=/^(?:script|style|textarea|title)$/i,Zs=h(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),"p"),y=Zs(1),Mn=Zs(2),T=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Qs=new WeakMap,Js=h((e,t,i)=>{var s,r;let o=(s=i==null?void 0:i.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let l=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new j(t.insertBefore(Mt(),l),l,void 0,i??{})}return n._$AI(e),n},"x"),gt=mt.createTreeWalker(mt,129,null,!1),Xs=h((e,t)=>{let i=e.length-1,s=[],r,o=t===2?"<svg>":"",n=Lt;for(let a=0;a<i;a++){let d=e[a],p,c,u=-1,g=0;for(;g<d.length&&(n.lastIndex=g,c=n.exec(d),c!==null);)g=n.lastIndex,n===Lt?c[1]==="!--"?n=Ws:c[1]!==void 0?n=Fs:c[2]!==void 0?(Ys.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=Q):c[3]!==void 0&&(n=Q):n===Q?c[0]===">"?(n=r??Lt,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,p=c[1],n=c[3]===void 0?Q:c[3]==='"'?Ks:Gs):n===Ks||n===Gs?n=Q:n===Ws||n===Fs?n=Lt:(n=Q,r=void 0);let v=n===Q&&e[a+1].startsWith("/>")?" ":"";o+=n===Lt?d+en:u>=0?(s.push(p),d.slice(0,u)+"$lit$"+d.slice(u)+I+v):d+I+(u===-2?(s.push(void 0),a):v)}let l=o+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Vs!==void 0?Vs.createHTML(l):l,s]},"C"),J=class{constructor({strings:t,_$litType$:i},s){let r;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[d,p]=Xs(t,i);if(this.el=J.createElement(d,s),gt.currentNode=this.el.content,i===2){let c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=gt.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){let c=[];for(let u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(I)){let g=p[n++];if(c.push(u),g!==void 0){let v=r.getAttribute(g.toLowerCase()+"$lit$").split(I),_=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:_[2],strings:v,ctor:_[1]==="."?Jt:_[1]==="?"?Xt:_[1]==="@"?te:tt})}else a.push({type:6,index:o})}for(let u of c)r.removeAttribute(u)}if(Ys.test(r.tagName)){let c=r.textContent.split(I),u=c.length-1;if(u>0){r.textContent=pt?pt.emptyScript:"";for(let g=0;g<u;g++)r.append(c[g],Mt()),gt.nextNode(),a.push({type:2,index:++o});r.append(c[u],Mt())}}}else if(r.nodeType===8)if(r.data===ri)a.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(I,c+1))!==-1;)a.push({type:7,index:o}),c+=I.length-1}o++}}static createElement(t,i){let s=mt.createElement("template");return s.innerHTML=t,s}};h(J,"E");h(X,"P");Qt=class{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;let{el:{content:s},parts:r}=this._$AD,o=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:mt).importNode(s,!0);gt.currentNode=o;let n=gt.nextNode(),l=0,a=0,d=r[0];for(;d!==void 0;){if(l===d.index){let p;d.type===2?p=new j(n,n.nextSibling,this,t):d.type===1?p=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(p=new ee(n,this,t)),this.v.push(p),d=r[++a]}l!==(d==null?void 0:d.index)&&(n=gt.nextNode(),l++)}return o}m(t){let i=0;for(let s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}};h(Qt,"V");j=class{constructor(t,i,s,r){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=r,this._$Cg=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=X(this,t,i),Rt(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==T&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):qs(t)?this.S(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==w&&Rt(this._$AH)?this._$AA.nextSibling.data=t:this.k(mt.createTextNode(t)),this._$AH=t}T(t){var i;let{values:s,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=J.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===o)this._$AH.m(s);else{let n=new Qt(o,this),l=n.p(this.options);n.m(s),this.k(l),this._$AH=n}}_$AC(t){let i=Qs.get(t.strings);return i===void 0&&Qs.set(t.strings,i=new J(t)),i}S(t){Bs(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,s,r=0;for(let o of t)r===i.length?i.push(s=new j(this.A(Mt()),this.A(Mt()),this,this.options)):s=i[r],s._$AI(o),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,i);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cg=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}};h(j,"N");tt=class{constructor(t,i,s,r,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,r){let o=this.strings,n=!1;if(o===void 0)t=X(this,t,i,0),n=!Rt(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{let l=t,a,d;for(t=o[0],a=0;a<o.length-1;a++)d=X(this,l[s+a],i,a),d===T&&(d=this._$AH[a]),n||(n=!Rt(d)||d!==this._$AH[a]),d===w?t=w:t!==w&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!r&&this.C(t)}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};h(tt,"S");Jt=class extends tt{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===w?void 0:t}};h(Jt,"M");sn=pt?pt.emptyScript:"",Xt=class extends tt{constructor(){super(...arguments),this.type=4}C(t){t&&t!==w?this.element.setAttribute(this.name,sn):this.element.removeAttribute(this.name)}};h(Xt,"H");te=class extends tt{constructor(t,i,s,r,o){super(t,i,s,r,o),this.type=5}_$AI(t,i=this){var s;if((t=(s=X(this,t,i,0))!==null&&s!==void 0?s:w)===T)return;let r=this._$AH,o=t===w&&r!==w||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==w&&(r===w||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;typeof this._$AH=="function"?this._$AH.call((s=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}};h(te,"I");ee=class{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}};h(ee,"L");tr={P:"$lit$",L:I,V:ri,I:1,N:Xs,R:Qt,D:qs,j:X,H:j,O:tt,F:Xt,B:te,W:Jt,Z:ee},er=window.litHtmlPolyfillSupport;er==null||er(J,j),((si=globalThis.litHtmlVersions)!==null&&si!==void 0?si:globalThis.litHtmlVersions=[]).push("2.2.1")});var oi,ni,$,ir,sr=f(()=>{Zt();Zt();z();z();$=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;let s=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=s.firstChild),s}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Js(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return T}};h($,"s");$.finalized=!0,$._$litElement$=!0,(oi=globalThis.litElementHydrateSupport)===null||oi===void 0||oi.call(globalThis,{LitElement:$});ir=globalThis.litElementPolyfillSupport;ir==null||ir({LitElement:$});((ni=globalThis.litElementVersions)!==null&&ni!==void 0?ni:globalThis.litElementVersions=[]).push("3.2.0")});var k=f(()=>{Zt();z();sr()});var Nt,rr=f(()=>{z();Nt=h(e=>e??w,"l")});var ai=f(()=>{rr()});var ie,Dt,vt,jt=f(()=>{ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=h(e=>(...t)=>({_$litDirective$:e,values:t}),"e"),vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};h(vt,"i")});var rn,or,nr,ar,ft,V,on,lr,hr,se,re=f(()=>{z();({H:rn}=tr),or=h(e=>e===null||typeof e!="object"&&typeof e!="function","t"),nr=h(e=>e.strings===void 0,"r"),ar=h(()=>document.createComment(""),"e"),ft=h((e,t,i)=>{var s;let r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(i===void 0){let n=r.insertBefore(ar(),o),l=r.insertBefore(ar(),o);i=new rn(n,l,e,e.options)}else{let n=i._$AB.nextSibling,l=i._$AM,a=l!==e;if(a){let d;(s=i._$AQ)===null||s===void 0||s.call(i,e),i._$AM=e,i._$AP!==void 0&&(d=e._$AU)!==l._$AU&&i._$AP(d)}if(n!==o||a){let d=i._$AA;for(;d!==n;){let p=d.nextSibling;r.insertBefore(d,o),d=p}}}return i},"u"),V=h((e,t,i=e)=>(e._$AI(t,i),e),"c"),on={},lr=h((e,t=on)=>e._$AH=t,"s"),hr=h(e=>e._$AH,"a"),se=h(e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let i=e._$AA,s=e._$AB.nextSibling;for(;i!==s;){let r=i.nextSibling;i.remove(),i=r}},"m")});var dr,B,cr=f(()=>{z();jt();re();dr=h((e,t,i)=>{let s=new Map;for(let r=t;r<=i;r++)s.set(e[r],r);return s},"u"),B=Dt(class extends vt{constructor(e){if(super(e),e.type!==ie.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;i===void 0?i=t:t!==void 0&&(s=t);let r=[],o=[],n=0;for(let l of e)r[n]=s?s(l,n):n,o[n]=i(l,n),n++;return{values:o,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){var r;let o=hr(e),{values:n,keys:l}=this.dt(t,i,s);if(!Array.isArray(o))return this.ut=l,n;let a=(r=this.ut)!==null&&r!==void 0?r:this.ut=[],d=[],p,c,u=0,g=o.length-1,v=0,_=n.length-1;for(;u<=g&&v<=_;)if(o[u]===null)u++;else if(o[g]===null)g--;else if(a[u]===l[v])d[v]=V(o[u],n[v]),u++,v++;else if(a[g]===l[_])d[_]=V(o[g],n[_]),g--,_--;else if(a[u]===l[_])d[_]=V(o[u],n[_]),ft(e,d[_+1],o[u]),u++,_--;else if(a[g]===l[v])d[v]=V(o[g],n[v]),ft(e,o[u],o[g]),g--,v++;else if(p===void 0&&(p=dr(l,v,_),c=dr(a,u,g)),p.has(a[u]))if(p.has(a[g])){let U=c.get(l[v]),Te=U!==void 0?o[U]:null;if(Te===null){let Wi=ft(e,o[u]);V(Wi,n[v]),d[v]=Wi}else d[v]=V(Te,n[v]),ft(e,o[u],Te),o[U]=null;v++}else se(o[g]),g--;else se(o[u]),u++;for(;v<=_;){let U=ft(e,d[_+1]);V(U,n[v]),d[v++]=U}for(;u<=g;){let U=o[u++];U!==null&&se(U)}return this.ut=l,lr(e,d),T}})});var zt=f(()=>{cr()});var li,q,hi=f(()=>{k();ai();zt();li=class extends ${constructor(){super();x(this,"_value",[]);x(this,"_layout","default");this.items=[]}static get styles(){return[A`
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

        
      `]}static get properties(){return{items:{type:Array},value:{type:Object},layout:{type:String},cardWidth:{type:String},cardHeight:{type:String}}}set layout(t){this._layout=t}get layout(){return this._layout}render(){var t;return y`<div class="${(t=this.layout)!=null?t:"default"}" style=${this.getStyle()}>
      ${B(this.items,i=>i.id,(i,s)=>(i=this.makeItem(i),i.checked=this.isSelected(i),i.style=this.getItemStyle(i),i.class=this.getItemClass(i),this.renderItem(i)))}
    </div>`}renderItem(t){return y`<label
      title=${t.label}
      class=${Nt(t.class?t.class:void 0)}
      style=${Nt(t.style?t.style:void 0)}
      ><input
        @change=${this.change}
        @click=${this.toggleCheck}
        .checked=${t.checked}
        type=${this.inputType}
        name="${this.name}"
        value="${t.value}"
      /><span class="xo-sl"> ${t.label}</span></label
    >`}getItemClass(t){return`${t.checked?"selected":""} ${t.image?"has-image":""}`.trim()}getItemStyle(t){return t.image?`--image: url(${t.image})`:void 0}getStyle(){switch(this.layout){case"cards":return`--card-width: ${this.cardWidth}; --card-height: ${this.cardHeight}`}}get inputType(){throw Error("Not implemented")}change(t){t.preventDefault(),t.stopPropagation()}onInput(t){t.stopPropagation()}reportValidity(){}toggleCheck(t){throw Error("Not implemented")}checkValidity(){return!(this.required&&!this.value)}isSelected(t){throw Error("Not implemented")}makeItem(t){return typeof t=="string"?{value:t,label:t}:t}};h(li,"InputGroup");q=li});var oe,ne,di=f(()=>{hi();k();oe=class extends q{constructor(){super(...arguments);x(this,"_value",[])}static get styles(){return[q.styles,A`
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
      `]}static get properties(){return q.properties}get inputType(){return"checkbox"}toggleCheck(t){if(t.stopPropagation(),t.target.checked)this._value.push(t.target.value);else{let i=this._value.indexOf(t.target.value);i!==-1&&this._value.splice(i,1)}this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1})),this.requestUpdate()}checkValidity(){return this.required?this.value.length>0:!0}reportValidity(){}isSelected(t){return this._value.includes(t.value)}get value(){return this._value}set value(t){!Array.isArray(t)||(this._value=t)}};h(oe,"CheckGroup");ne=oe;window.customElements.define("xw-checkgroup",oe)});var ae,ur,pr=f(()=>{di();ae=class extends ne{constructor(){super(...arguments);x(this,"_value",!1);this.items=[{value:!0,label:"On"}]}static get properties(){return{value:{type:Boolean},text:{type:String}}}get value(){return this._value}set value(t){this._value=t}set text(t){this.items[0].label=t}get text(){return this.items?this.items[0].label:"On"}toggleCheck(t){t.stopPropagation(),t.target.checked?this._value=!0:this._value=!1,this.requestUpdate()}isSelected(){return this.value}};h(ae,"Checkbox");ur=ae;window.customElements.define("xw-checkbox",ae)});var bt,mr,gr=f(()=>{k();bt=class extends ${render(){return console.log("render dialog"),y`<dialog>
      <a class="close" @click=${this.close}>⨉</a>
      <h1>Hello</h1>
      <p>Welcome to the HTML 5.2 <code>dialog</code> element.</p>
    </dialog>`}close(t){this.value=!1}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}set value(t){let i=this;if(!this.shadowRoot)return;let s=this.shadowRoot.querySelector("dialog");s.addEventListener("close",r=>{i.fireChange()}),s.classList.add("opening"),setTimeout(()=>{s.classList.remove("opening")},100),t?s[this.modal?"showModal":"show"]():s.close()}checkValidity(){return!0}get value(){return this.shadowRoot.querySelector("dialog").open}};h(bt,"Dialog"),x(bt,"styles",A`
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
  `),x(bt,"properties",{modal:{type:Boolean},display:{type:Boolean}});customElements.define("xw-dialog",bt);mr=bt});var nn,le,vr,fr=f(()=>{k();zt();ai();nn="70px",le=class extends ${constructor(){super(...arguments);x(this,"_value",[]);x(this,"_max",-1);x(this,"_thumbSize",nn);x(this,"_types",["image/"])}static get styles(){return[A`
        .drop {
          position: relative;
          border-radius: 1rem;
          height: 100%;
          min-width: 200px;
          cursor: pointer;
          border: 2px transparent;
          min-height: 60px;
          transition: all .2s ease;
        }

        .drop:not(.has-files) [part="files"]:after {
          top: 5px;
          left: 5px;
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
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        progress {
          width: 100%;
          visibility: hidden;
        }

        .dropping {
          border: 2px dotted rgba(127, 127, 127, 0.5);
          
          min-height: 200px;
          transition: all .2s ease;
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
          background-color: var(--filedrop-thumb-bgcolor, rgba(227, 227, 227, 0.1));
          display: inline-block;
          width: var(--filedrop-thumb-size, 70px);
          height: var(--filedrop-thumb-size, 70px);
          background-size: contain;
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: center;
          margin-right: 0.5rem;
          border: 15px solid transparent;
          border-radius: 10px;
        }

        .thumb > a {
          position: absolute;
          display: inline-block;
          top: -14px;
          right: -14px;
          padding: 0px 2px;
          color: var(--accent);
          filter: grayscale(100%);
          background-color: rgba(40, 40, 40, 0.3);
          border-radius: 1rem;
          cursor: pointer;
        }

        .thumb > a:hover {
          filter: grayscale(0%);
          background-color: rgba(127, 127, 127, 0.4);
          transition: all 0.2s ease;
        }
      `]}static get properties(){return{value:{type:Object},height:{type:String},thumbSize:{type:String},max:{type:Number},types:{type:Array},infotext:{type:String}}}get thumbSize(){return this._thumbSize}set thumbSize(t){this._thumbSize=t}set max(t){this._max=t}get max(){return this._max}set value(t){typeof t!="undefined"&&(!Array.isArray(t)||(this._value=t))}get value(){return this._value}set types(t){if(!Array.isArray(t))throw Error("Types must be array");this._types=t}get types(){return this._types}render(){let t=this.infotext?`--filedrop-info-text: ${this.infotext}`:"",i=`--filedrop-thumb-size: ${this.thumbSize};`+t;return y`<div
      style="${i}"
      class="drop ${this.value.length?"has-files":""}"
      @dragover=${this.dragOver}
      @dragend=${this.dragEnd}
      @dragleave=${this.dragEnd}
      @drop=${this.drop}
    >
      <input @change=${this.change} type="file" .multiple=${this.max!==1} />
      <div class="files" part="files">
        ${B(this.value,s=>s.id,(s,r)=>this.renderFile(s,r))}
      </div>

      <progress id="progress" value="0" max="100"></progress>
    </div>`}renderFile(t,i){var r;let s=(r=t.dataUrl)!=null?r:t.url;return y`<div
      class="thumb"
      style=${Nt(s?`background-image: url(${s});`:void 0)}
    >
      <a data-index="${i}" @click=${this.removeThumb.bind(this)}>⨉</a>
    </div>`}removeThumb(t){let i=parseInt(t.target.getAttribute("data-index"));this.value.splice(i,1),this.fireChange(),this.requestUpdate()}dragOver(t){return t.dataTransfer.dropEffect="copy",this.shadowRoot.querySelector(".drop").classList.add("dropping"),!1}reportValidity(){this.invalidMessage="";try{this.checkConstraints()}catch(t){return this.validationMessage=t.message,t.message}finally{this.requestUpdate()}}checkValidity(){try{return this.checkConstraints(),!0}catch(t){return!1}}dragEnd(t){return this.shadowRoot.querySelector(".drop").classList.remove("dropping"),t.dataTransfer.dropEffect="none",!1}get valid(){return this.checkValidity()}drop(t){return t.preventDefault(),t.dataTransfer.dropEffect="none",this.readFiles(t.dataTransfer.files),this.dragEnd(t),!1}change(t){this.readFiles(t.target.files)}readFiles(t){this._readCount=t.length,this._readIndex=0,[...t].forEach(i=>{this.readFile(i)})}readFile(t){try{this.checkConstraints(t)}catch(o){return}let i=this,s=new FileReader,r=this.shadowRoot.querySelector("progress");r.style.visibility="visible",s.readAsDataURL(t),s.onload=function(){i.value.push({name:t.name,type:t.type,size:t.size,date:new Date(t.lastModified).toISOString(),dataUrl:s.result}),i._readIndex++,i._readIndex===i._readCount&&(console.log("FileDrop ready reading all files"),i._readCount=0,i._readIndex=0,i.fireChange(),i.requestUpdate())},s.addEventListener("progress",o=>{if(o.loaded&&o.total){let n=o.loaded/o.total*100;r.value=n,n===100&&(r.style.visibility="hidden")}})}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}checkConstraints(t){this.checkMax(),t&&(this.checkFileType(t.type),this.checkSizeLimit(t))}checkMax(){if(this.max!==-1&&this.value.length>=this.max)throw Error("Maximum number of files reached")}checkFileType(t){let i=!1;if(this.types.forEach(s=>{t.indexOf(s)===0&&(i=!0)}),!i)throw Error("Invalid file type")}checkSizeLimit(t){let i=0;if(this.value.forEach(s=>{i+=s.size}),i+t.size>this.limit)throw Error("File size limit exceeded")}onInput(t){t.preventDefault()}};h(le,"FileDrop");customElements.define("xw-filedrop",le);vr=le});var he,br,xr=f(()=>{k();he=class extends ${static get properties(){return{title:{type:String},body:{type:String}}}render(){return y`
            <div class="info">
                <h3>${this.title}</h3>
                <div class="info-body">
                    ${this.body}
                </div>
            </div>
        `}};h(he,"Info");customElements.define("xw-info",he);br=he});var de,yr,$r=f(()=>{hi();k();de=class extends q{static get styles(){return[q.styles,A`
       
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
      `]}static get properties(){return q.properties}onInput(t){t.stopPropagation()}reportValidity(){}toggleCheck(t){t.stopPropagation(),t.target.checked&&(this._value=t.target.value),this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1})),this.requestUpdate()}checkValidity(){return!(this.required&&!this.value)}isSelected(t){return this._value===t.value}get inputType(){return"radio"}get value(){return this._value}set value(t){this._value=t}};h(de,"RadioGroup");yr=de;window.customElements.define("xw-radiogroup",de)});var ce,_r,Ar=f(()=>{k();zt();ce=class extends ${constructor(){super();x(this,"_value",[]);this.items=[]}static get properties(){return{items:{type:Array},value:{type:Object}}}render(){return y`<select @change=${this.fireChange.bind(this)} size="1">
      ${B(this.items,t=>t.id,(t,i)=>(t=this.makeItem(t),y`<option
            .selected=${this.isSelected(t)}
            value="${t.value}"
          >
            ${t.label}
          </option>`))}
    </select>`}change(t){t.preventDefault(),t.stopPropagation()}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}isSelected(t){return this._value==t.value}makeItem(t){return typeof t=="string"?{value:t,label:t}:t}get value(){return this._value}set value(t){this._value=t}};h(ce,"Select");_r=ce;window.customElements.define("xw-select",ce)});var ue,wr,Er=f(()=>{k();ue=class extends ${constructor(){super(...arguments);x(this,"_value",!1)}static get styles(){return[A`
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
      `]}static get properties(){return{text:{type:String}}}render(){return y`<label class="switch">
      <input @change=${this.toggle} .checked=${this.value} type="checkbox" />
      <div class="knob round"></div>
      <div class="knob-lbl">${this.text}</div>
    </label>`}checkValidity(){return!0}onInput(t){t.preventDefault(),t.stopPropagation()}toggle(t){t.preventDefault(),t.stopPropagation(),this.value=t.target.checked===!0,this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}reportValidity(){}get value(){var t;return(t=this._value)!=null?t:!1}set value(t){this._value=t}};h(ue,"Switch");wr=ue;window.customElements.define("xw-switch",ue)});function it(e,t,i=e,s){var r,o,n,l;if(t===ot)return t;let a=s!==void 0?(r=i._$Cl)===null||r===void 0?void 0:r[s]:i._$Cu,d=yt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),d===void 0?a=void 0:(a=new d(e),a._$AT(e,i,s)),s!==void 0?((n=(l=i)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[s]=a:i._$Cu=a),a!==void 0&&(t=it(e,a._$AS(e,t.values),a,s)),t}var Cr,an,ln,Sr,hn,dn,ci,kr,cn,b,W,un,pn,mn,et,ui,gn,pe,me,pi,ge,Tr,Pr,Ur,mi,Or,gi,vi,Hr,fi,ve,bi,fe,F,xi,yi,st,$i,M,_i,Ir,rt,xt,yt,Ai,Mr,$t,wi,Ei,G,Ci,Si,ki,Ti,vn,fn,ot,E,Pi,Rr,nt,Lr,_t,Ui,At,wt,Oi,Nr,Hi,Ii,Mi,Ri,Li,Ni,Di,Et,ji,bn,xn,Dr,jr,yn,zi,zr,$n,_n,be,Vi=f(()=>{Cr=Object.defineProperty,an=Object.defineProperties,ln=Object.getOwnPropertyDescriptors,Sr=Object.getOwnPropertySymbols,hn=Object.prototype.hasOwnProperty,dn=Object.prototype.propertyIsEnumerable,ci=h((e,t,i)=>t in e?Cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,"q"),kr=h((e,t)=>{for(var i in t||(t={}))hn.call(t,i)&&ci(e,i,t[i]);if(Sr)for(var i of Sr(t))dn.call(t,i)&&ci(e,i,t[i]);return e},"L"),cn=h((e,t)=>an(e,ln(t)),"lt"),b=h((e,t)=>Cr(e,"name",{value:t,configurable:!0}),"c"),W=h((e,t)=>()=>(e&&(t=e(e=0)),t),"g"),un=h((e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),"zt"),pn=h((e,t,i)=>(ci(e,typeof t!="symbol"?t+"":t,i),i),"at"),mn=h((e,t,i)=>new Promise((s,r)=>{var o=h(a=>{try{l(i.next(a))}catch(d){r(d)}},"n"),n=h(a=>{try{l(i.throw(a))}catch(d){r(d)}},"o"),l=h(a=>a.done?s(a.value):Promise.resolve(a.value).then(o,n),"h");l((i=i.apply(e,t)).next())}),"ht"),gn=W(()=>{et=h(class{static isUrl(e){try{return typeof e!="string"||e.indexOf(`
`)!==-1||e.indexOf(" ")!==-1||e.startsWith("#/")?!1:(new URL(e,window.location.origin),!0)}catch{}return!1}static clone(e){if(e===null||typeof e!="object"||"isActiveClone"in e)return e;if(e instanceof Date)var t=new e.constructor;else var t=e.constructor();for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e.isActiveClone=null,t[i]=et.clone(e[i]),delete e.isActiveClone);return t}static parseHTML(e){return new DOMParser().parseFromString(e,"text/html").body.firstChild}static throttle(e,t=500){var i,s=b(function(r){i&&clearTimeout(i),i=setTimeout(e,t,r)},"throttledListener");return s}static objectEquals(e,t){if(e==null||t===null||t===void 0)return e===t;if(e.constructor!==t.constructor)return!1;if(e instanceof Function||e instanceof RegExp)return e===t;if(e===t||e.valueOf()===t.valueOf())return!0;if(Array.isArray(e)&&e.length!==t.length||e instanceof Date||!(e instanceof Object)||!(t instanceof Object))return!1;var i=Object.keys(e);return Object.keys(t).every(function(s){return i.indexOf(s)!==-1})&&i.every(function(s){return et.objectEquals(e[s],t[s])})}static equals(e,t){return Array.isArray(e)?et.arrayEquals(e,t):typeof e=="object"?et.objectEquals(e,t):e===t}static arrayEquals(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((i,s)=>i===t[s])}static scopeEval(e,t){return Function('"use strict";'+t).bind(e)()}static guid(e){e=kr({},e||{});let t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){var s=Math.random()*16|0,r=i=="x"?s:s&3|8;return r.toString(16)});return`${e.prefix||""}${e.compact?t.split("-").pop():t}`}},"$"),b(et,"Util"),ui=et}),Or=W(()=>{pe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),pi=new Map,ge=h(class{constructor(e,t){if(this._$cssResult$=!0,t!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=pi.get(this.cssText);return pe&&e===void 0&&(pi.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},"T"),b(ge,"s"),Tr=b(e=>new ge(typeof e=="string"?e:e+"",me),"o"),Pr=b((e,...t)=>{let i=e.length===1?e[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new ge(i,me)},"r"),Ur=b((e,t)=>{pe?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{let s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)})},"i"),mi=pe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let s of t.cssRules)i+=s.cssText;return Tr(i)})(e):e}),xi=W(()=>{Or(),Or(),vi=window.trustedTypes,Hr=vi?vi.emptyScript:"",fi=window.reactiveElementPolyfillSupport,ve={toAttribute(e,t){switch(t){case Boolean:e=e?Hr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},bi=b((e,t)=>t!==e&&(t==t||e==e),"n"),fe={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:bi},F=h(class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let s=this._$Eh(i,t);s!==void 0&&(this._$Eu.set(s,i),e.push(s))}),e}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){let r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||fe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(mi(s))}else e!==void 0&&t.push(mi(e));return t}static _$Eh(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ur(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=fe){var s,r;let o=this.constructor._$Eh(e,i);if(o!==void 0&&i.reflect===!0){let n=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:ve.toAttribute)(t,i.type);this._$Ei=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(e,t){var i,s,r;let o=this.constructor,n=o._$Eu.get(e);if(n!==void 0&&this._$Ei!==n){let l=o.getPropertyOptions(n),a=l.converter,d=(r=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&r!==void 0?r:ve.fromAttribute;this._$Ei=n,this[n]=d(t,l.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||bi)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,r)=>this[r]=s),this._$Et=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}},"v"),b(F,"a"),F.finalized=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},fi==null||fi({ReactiveElement:F}),((gi=globalThis.reactiveElementVersions)!==null&&gi!==void 0?gi:globalThis.reactiveElementVersions=[]).push("1.3.0")});h(it,"C");Li=W(()=>{st=globalThis.trustedTypes,$i=st?st.createPolicy("lit-html",{createHTML:e=>e}):void 0,M=`lit$${(Math.random()+"").slice(9)}$`,_i="?"+M,Ir=`<${_i}>`,rt=document,xt=b((e="")=>rt.createComment(e),"h"),yt=b(e=>e===null||typeof e!="object"&&typeof e!="function","r"),Ai=Array.isArray,Mr=b(e=>{var t;return Ai(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},"u"),$t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wi=/-->/g,Ei=/>/g,G=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ci=/'/g,Si=/"/g,ki=/^(?:script|style|textarea|title)$/i,Ti=b(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),"p"),vn=Ti(1),fn=Ti(2),ot=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Pi=new WeakMap,Rr=b((e,t,i)=>{var s,r;let o=(s=i==null?void 0:i.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let l=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new At(t.insertBefore(xt(),l),l,void 0,i??{})}return n._$AI(e),n},"x"),nt=rt.createTreeWalker(rt,129,null,!1),Lr=b((e,t)=>{let i=e.length-1,s=[],r,o=t===2?"<svg>":"",n=$t;for(let a=0;a<i;a++){let d=e[a],p,c,u=-1,g=0;for(;g<d.length&&(n.lastIndex=g,c=n.exec(d),c!==null);)g=n.lastIndex,n===$t?c[1]==="!--"?n=wi:c[1]!==void 0?n=Ei:c[2]!==void 0?(ki.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=G):c[3]!==void 0&&(n=G):n===G?c[0]===">"?(n=r??$t,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,p=c[1],n=c[3]===void 0?G:c[3]==='"'?Si:Ci):n===Si||n===Ci?n=G:n===wi||n===Ei?n=$t:(n=G,r=void 0);let v=n===G&&e[a+1].startsWith("/>")?" ":"";o+=n===$t?d+Ir:u>=0?(s.push(p),d.slice(0,u)+"$lit$"+d.slice(u)+M+v):d+M+(u===-2?(s.push(void 0),a):v)}let l=o+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[$i!==void 0?$i.createHTML(l):l,s]},"C"),_t=h(class{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0,n=e.length-1,l=this.parts,[a,d]=Lr(e,t);if(this.el=_t.createElement(a,i),nt.currentNode=this.el.content,t===2){let p=this.el.content,c=p.firstChild;c.remove(),p.append(...c.childNodes)}for(;(s=nt.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes()){let p=[];for(let c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(M)){let u=d[o++];if(p.push(c),u!==void 0){let g=s.getAttribute(u.toLowerCase()+"$lit$").split(M),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?Oi:v[1]==="?"?Hi:v[1]==="@"?Ii:wt})}else l.push({type:6,index:r})}for(let c of p)s.removeAttribute(c)}if(ki.test(s.tagName)){let p=s.textContent.split(M),c=p.length-1;if(c>0){s.textContent=st?st.emptyScript:"";for(let u=0;u<c;u++)s.append(p[u],xt()),nt.nextNode(),l.push({type:2,index:++r});s.append(p[c],xt())}}}else if(s.nodeType===8)if(s.data===_i)l.push({type:2,index:r});else{let p=-1;for(;(p=s.data.indexOf(M,p+1))!==-1;)l.push({type:7,index:r}),p+=M.length-1}r++}}static createElement(e,t){let i=rt.createElement("template");return i.innerHTML=e,i}},"A"),b(_t,"E"),b(it,"P"),Ui=h(class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;let{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:rt).importNode(i,!0);nt.currentNode=r;let o=nt.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new At(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new Mi(o,this,e)),this.v.push(d),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=nt.nextNode(),n++)}return r}m(e){let t=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},"Q"),b(Ui,"V"),At=h(class{constructor(e,t,i,s){var r;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=it(this,e,t),yt(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==ot&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Mr(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==E&&yt(this._$AH)?this._$AA.nextSibling.data=e:this.k(rt.createTextNode(e)),this._$AH=e}T(e){var t;let{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=_t.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(i);else{let o=new Ui(r,this),n=o.p(this.options);o.m(i),this.k(n),this._$AH=o}}_$AC(e){let t=Pi.get(e.strings);return t===void 0&&Pi.set(e.strings,t=new _t(e)),t}S(e){Ai(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let r of e)s===t.length?t.push(i=new At(this.A(xt()),this.A(xt()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},"b"),b(At,"N"),wt=h(class{constructor(e,t,i,s,r){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){let r=this.strings,o=!1;if(r===void 0)e=it(this,e,t,0),o=!yt(e)||e!==this._$AH&&e!==ot,o&&(this._$AH=e);else{let n=e,l,a;for(e=r[0],l=0;l<r.length-1;l++)a=it(this,n[i+l],t,l),a===ot&&(a=this._$AH[l]),o||(o=!yt(a)||a!==this._$AH[l]),a===E?e=E:e!==E&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.C(e)}C(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},"k"),b(wt,"S"),Oi=h(class extends wt{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===E?void 0:e}},"G"),b(Oi,"M"),Nr=st?st.emptyScript:"",Hi=h(class extends wt{constructor(){super(...arguments),this.type=4}C(e){e&&e!==E?this.element.setAttribute(this.name,Nr):this.element.removeAttribute(this.name)}},"Y"),b(Hi,"H"),Ii=h(class extends wt{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=it(this,e,t,0))!==null&&i!==void 0?i:E)===ot)return;let s=this._$AH,r=e===E&&s!==E||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==E&&(s===E||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},"tt"),b(Ii,"I"),Mi=h(class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){it(this,e)}},"et"),b(Mi,"L"),Ri=window.litHtmlPolyfillSupport,Ri==null||Ri(_t,At),((yi=globalThis.litHtmlVersions)!==null&&yi!==void 0?yi:globalThis.litHtmlVersions=[]).push("2.2.0")}),bn=W(()=>{xi(),xi(),Li(),Li(),Et=h(class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Rr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return ot}},"H"),b(Et,"s"),Et.finalized=!0,Et._$litElement$=!0,(Ni=globalThis.litElementHydrateSupport)===null||Ni===void 0||Ni.call(globalThis,{LitElement:Et}),ji=globalThis.litElementPolyfillSupport,ji==null||ji({LitElement:Et}),((Di=globalThis.litElementVersions)!==null&&Di!==void 0?Di:globalThis.litElementVersions=[]).push("3.2.0")}),xn=W(()=>{xi(),Li(),bn()}),yn=W(()=>{xn(),Dr=Pr`[data-autocomplete] {
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
/*# sourceMappingURL=autocomplete.css.map */`,jr=Dr}),$n=W(()=>{gn(),yn(),zi=h(class{constructor(e,t,i){if(pn(this,"cssClasses",{result:"xo-ac-rs",item:"xo-ac-itm"}),this.settings=i,this.control=e,this.htmlElement=t,this.htmlElement.setAttribute("autocomplete","off"),this.categories=i.categories||{},!i.items)throw TypeError("Must pass items array, function or promise in autocomplete settings");this.items=i.items}static get sharedStyles(){return this._sheet||(this._sheet=new CSSStyleSheet,this._sheet.replaceSync(jr)),this._sheet}attach(){let e=this.isXoControl(this.control),t=b((s,r)=>{this.htmlElement.addEventListener(s,r)},"on");t("input",this.inputHandler.bind(this)),t("click",this.clickHandler.bind(this)),t("focusout",this.blurHandler.bind(this)),t("keyup",this.keyUpHandler.bind(this)),t("keydown",this.keyDownHandler.bind(this)),this.resultsDiv=document.createElement("div"),this.resultsDiv.title="",this.resultsDiv.classList.add(this.cssClasses.result),this.resultsDiv.addEventListener("mousedown",this.resultClick.bind(this));let i=e?this.control.shadowRoot.querySelector(".xo-cn"):this.control.shadowRoot.querySelector("*");i.appendChild(this.resultsDiv),this.clear(),i.setAttribute("data-autocomplete","on")}isXoControl(e){var t;return(t=e.shadowRoot)==null?void 0:t.querySelector(".xo-cn")}moveResult(e){this.show();let t=this.resultsDiv.querySelectorAll("div"),i=t.length;this.rowIndex=this.rowIndex+e,this.rowIndex<=0?this.rowIndex=0:this.rowIndex>i-1&&(this.rowIndex=0),t.forEach(r=>{r.classList.remove("selected")});let s=this.getSelectedDiv();s?(s.classList.add("selected"),s.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})):this.clickHandler({target:this.htmlElement})}getSelectedDiv(){return this.resultsDiv.querySelector(`div:nth-child(${this.rowIndex+1})`)}selectResult(e){var t,i;if(e=e||this.getSelectedDiv(),e){let s=parseInt(e.getAttribute("data-index"));this.resultClicked=!0;let r=this.results[s],o=(t=this.categories[r.category])!=null?t:{};o.action=(i=o.action)!=null?i:this.setText.bind(this),o.newTab&&(this.tabWindow=window.open("about:blank","_blank"));let n=cn(kr({},r),{search:this.htmlElement.value});e.classList.add("active"),setTimeout(()=>{o.action(n),o.newTab&&(n.url?this.tabWindow.location.href=n.url:this.tabWindow.close());var l=new Event("change",{bubbles:!0});this.htmlElement.dispatchEvent(l),this.clear();let a=new Event("result-selected",{bubbles:!1});a.detail={text:n.text},this.htmlElement.dispatchEvent(a)},0)}}setText(e){this.control.autoCompleteInput||(this.control.value=e.text),this.hide()}resultClick(e){this.selectResult(e.target.closest(`.${this.cssClasses.item}`))}set categories(e){this._categories=e}get categories(){return this._categories||{}}blurHandler(e){setTimeout(()=>{this.resultClicked||this.clear(),this.resultClicked=!1},100)}clear(){this.resultsDiv.innerHTML="",this.resultsDiv.style.display="none"}show(){this.resultsDiv.style.display!=="block"&&(this.resultsDiv.style.display="block",this.rowIndex=-1)}hide(){this.resultsDiv.style.display="none"}inputHandler(e){this.clear();let t={search:e.target.value,categories:this.categories};this.getItems(t,e).then(i=>{this.clear(),this.resultsHandler(i,t)})}keyDownHandler(e){switch(e.keyCode){case 13:e.stopPropagation(),e.preventDefault();break;case 40:case 38:e.preventDefault()}}keyUpHandler(e){switch(e.keyCode){case 40:this.moveResult(1);break;case 38:this.moveResult(-1);break;case 27:this.hide();break;case 13:this.getSelectedDiv()&&(this.control.preventEnter=!0,e.stopPropagation(),e.preventDefault(),this.selectResult(),setTimeout(()=>{this.control.preventEnter=!1},10));break;default:break}}clickHandler(e){this.clear();let t=e.target.value;this.suggest(t,e)}suggest(e,t){this.htmlElement.focus();let i={suggest:!0,search:e||"",categories:this.categories};this.getItems(i,t).then(s=>{this.htmlElement.dispatchEvent(new CustomEvent("show-results",{detail:{results:s}})),this.resultsHandler(s,i)})}resultsHandler(e,t){this.results=e,this.rowIndex=-1;let i=0;e.forEach(s=>{let r=null,o=t.categories[s.category]||{};s.image&&(s.icon="xo-ac-img",r=`style="background-image: url('${s.image}')"`),s.element?this.resultsDiv.appendChild(s.element):(s=typeof s=="string"?{text:s}:s,this.resultsDiv.appendChild(ui.parseHTML(`<div title="${s.tooltip||""}" data-index="${i}" class="${this.cssClasses.item}">
                            <span ${r} class="${s.icon||o.icon}"></span>
                            <span class="text">${this.formatResultItem(s,t,o)}</span>
                            <span class="category">${s.category||""}</span></div>`))),i++}),e.length&&this.show()}formatResultItem(e,t,i){var s;e=typeof e=="string"?{text:e}:e;let r=e.text;return t.search&&(r=r.replace("%search%",t.search),e.description=(s=e.description)==null?void 0:s.replace("%search%",t.search)),r=this.highlight(r,t.search),e.description&&(r=`<div>${r}</div><small>${e.description}</small>`),i.format&&(r=i.format({item:e,result:r,options:t})),r}highlight(e,t){var i=new RegExp("("+t+")","gi");return e.replace(i,'<span class="txt-hl">$1</span>')}getItems(e,t){return mn(this,null,function*(){let i=this.settings.map,s=b(n=>(typeof n=="string"&&(n={text:n}),n),"normalizeItem"),r=b(n=>i?n.map(l=>({text:l[i]})):n,"map"),o=b(n=>(this.settings.max&&this.settings.max>0&&(n.length=this.settings.max),n),"max");return new Promise(n=>{if(ui.isUrl(this.items)){if(this.settings.minlength>0&&(!e.search||e.search.length<this.settings.minlength)){n([]);return}let l=this.formatSearch(this.items,e);fetch(l).then(a=>{if(a.status===200){a.json().then(d=>{d=r(d),n(o(d.filter(p=>this.isMatch(e,p))))});return}throw Error(`HTTP error ${a.status} - ${l}`)})}else if(Array.isArray(this.items)){let l=!0;this.items=this.items.map(a=>typeof a=="string"?{text:a}:(l=!1,a)),l&&this.control.classList.add("simple"),n(o(r(this.items.filter(a=>this.isMatch(e,a)))))}else if(typeof this.items=="function"){e.control=this.control;let l=this.items(e,t).then(a=>{a=a.map(d=>s(d)),a=r(a.filter(d=>this.isMatch(e,d))),n(a)})}else return n(Promise.resolve(this.items.apply(this,e)))})})}formatSearch(e,t){return e.indexOf("%search%")?e.replace("%search%",t.search||""):e+"?"+this.createQueryParam(t)}createQueryParam(e){let t=e.suggest?"&suggest=true":"";return`q=${e.text}${t}`}isMatch(e,t){var i,s;return((i=t.text)==null?void 0:i.indexOf("%search%"))>=0?!0:e.search?((s=t.text)==null?void 0:s.toLowerCase().indexOf(e.search.toLowerCase()))>=0:e.suggest}},"rt"),b(zi,"AutoComplete"),zr=zi}),_n=un((e,t)=>{$n(),t.exports={AutoComplete:zr}}),be=_n();});var An,xe,ye,Vr,Br=f(()=>{k();zt();Vi();An="100%",xe=be.AutoComplete,ye=class extends ${constructor(){super(...arguments);x(this,"_value",[]);this.textInput=document.createElement("input"),this.textInput.type="text",this.textInput.addEventListener("keydown",this.input.bind(this)),this.listenToAutoCompleteEvents()}listenToAutoCompleteEvents(){this.textInput.addEventListener("result-selected",t=>{this.textInput.value=t.detail.text,this.tryAdd()}),this.textInput.addEventListener("show-results",t=>{let i=t.detail.results;this.value.forEach(s=>{let r=i.findIndex(o=>o.text===s);r!==-1&&i.splice(r,1)})})}set placeholder(t){this.textInput.placeholder=t}get placeholder(){return this.textInput.placeholder}firstUpdated(){super.firstUpdated(),this.autocomplete&&this.autocomplete.items&&typeof xe!="undefined"&&(this._autoCompleter=new xe(this,this.textInput,this.autocomplete),this._autoCompleter.attach())}static get styles(){return[typeof xe!="undefined"?xe.sharedStyles:A``,A`
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
      `]}static get properties(){return{value:{type:Array},maxWidth:{type:String},autocomplete:{type:Object}}}onInput(t){t.preventDefault(),t.stopPropagation()}get value(){return this._value}set value(t){!Array.isArray(t)||(this._value=t)}render(){var t;return y`<div
      class="tags"
      style="--max-tags-width: ${(t=this.maxWidth)!=null?t:An}"
    >
      ${B(this.value,i=>i.id,(i,s)=>this.renderTag(i,s))}
      ${this.textInput}
    </div>`}reportValidity(){return!0}checkValidity(){return!0}input(t){switch(t.key){case"Enter":t.target.value!==""&&this.tryAdd(t.target.value);break;case"Backspace":t.target.value===""&&(this.value.pop(),this.fireChange(),this.requestUpdate());break}}tryAdd(){this.value.indexOf(this.textInput.value)===-1&&(this.value.push(this.textInput.value),this.fireChange(),this.requestUpdate(),this.textInput.value="")}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}renderTag(t,i){return y`<div data-index="${i}" class="tag">
      <span class="eye">○</span><span>${t}</span>
      <a @click=${this.deleteTag}>x</a>
    </div>`}deleteTag(t){t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();let i=parseInt(t.target.closest("[data-index]").getAttribute("data-index"));this.value.splice(i,1),this.requestUpdate()}};h(ye,"Tags");customElements.define("xw-tags",ye);Vr=ye});var Bi,$e,qr=f(()=>{Bi=class{static require(t,i){var s=document;let r=s.head.querySelector(`script[src="${t}"]`);if(r){let o=r.getAttribute("data-exf-rl");if(o){o==="1"?r.addEventListener("load",n=>{n.target.setAttribute("data-exf-rl","2"),typeof i=="function"&&i()}):o==="2"&&typeof i=="function"&&i();return}}return new Promise((o,n)=>{let l=h(()=>{typeof i=="function"&&i(),o()},"check"),a=s.createElement("script");a.setAttribute("data-exf-rl","1"),a.src=t,s.head.appendChild(a),a.onload=d=>{d.target.setAttribute("data-exf-rl","2"),l()}})}static throttleEvent(t,i,s,r=100){let o;s(),t.addEventListener(i,n=>{clearTimeout(o),o=setTimeout(s,r)})}static scopeEval(t,i){return Function('"use strict";'+i).bind(t)()}};h(Bi,"Util");$e=Bi});var wn,Wr,_e,Fr,Gr=f(()=>{k();qr();wn="0.33.0",Wr=h(()=>document.documentElement.classList.contains("theme-dark")?"vs-dark":"vs-light","getTheme"),_e=class extends ${constructor(){super(...arguments);x(this,"_version",wn);x(this,"language","javascript");x(this,"_theme",Wr())}get version(){return this._version}set version(t){this._version=t}static get properties(){return{version:{type:String},language:{type:String},theme:{type:String},value:{type:String}}}render(){return y`<div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/monaco-editor@${this.version}/min/vs/editor/editor.main.css"
      />
      <div id="monaco" style="height: 300px; width: 100%"></div>
    </div>`}get theme(){return this._theme}set theme(t){this._theme=t,monaco&&monaco.editor&&monaco.editor.setTheme(t)}firstUpdated(){var t=i=>super[i];return at(this,null,function*(){let s=this;yield t("firstUpdated").call(this);let r=yield this.requireMonaco(),o={editorOptions:Ki({readOnly:this.readonly,value:this.value||"",language:this.language,theme:this.theme},this.options||{})};this.dispatchEvent(new CustomEvent("create",{detail:o}));let n=this.shadowRoot.getElementById("monaco");this.editor=r.editor.create(n,o.editorOptions),this.dispatchEvent(new CustomEvent("ready")),this.editor.getModel().onDidChangeContent(l=>{this.dispatchEvent(new CustomEvent("editor-change"))}),$e.throttleEvent(this,"editor-change",()=>{s.value=this.editor.getModel().getValue(),s.fireChange()},100),$e.throttleEvent(window,"resize",()=>{s.editor.layout()}),this.listenThemeChange()})}checkValidity(){return!0}reportValidity(){}listenThemeChange(){let t=this;var i=new MutationObserver(function(s){s.forEach(function(r){r.type==="attributes"&&(t.theme=Wr())})});i.observe(document.documentElement,{attributes:!0})}requireMonaco(){return at(this,null,function*(){let t=this;return new Promise(i=>{$e.require(`https://unpkg.com/monaco-editor@${t.version}/min/vs/loader.js`,()=>{Ue.config({paths:{vs:`https://unpkg.com/monaco-editor@${t.version}/min/vs`}}),window.MonacoEnvironment={getWorkerUrl:()=>s};let s=URL.createObjectURL(new Blob([`self.MonacoEnvironment = {
                    baseUrl: 'https://unpkg.com/monaco-editor@${t.version}/min/'
                };
                importScripts('https://unpkg.com/monaco-editor@${t.version}/min/vs/base/worker/workerMain.js');`],{type:"text/javascript"}));Ue(["vs/editor/editor.main"],()=>{i(monaco)})})})})}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}set value(t){this._value!==t&&(this._value=t,this.editor&&this.editor.getModel().getValue()!==t&&this.editor.getModel().setValue(t))}get value(){var t;return((t=this.editor)==null?void 0:t.getModel().getValue())||this._value}};h(_e,"Monaco");customElements.define("xw-monaco",_e);Fr=_e});function En(e){this._$AN!==void 0?(Ae(this),this._$AM=e,Kr(this)):this._$AM=e}function Cn(e,t=!1,i=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=i;o<s.length;o++)Vt(s[o],!1),Ae(s[o]);else s!=null&&(Vt(s,!1),Ae(s));else Vt(this,e)}var Vt,Ae,Kr,Sn,we,Yr=f(()=>{re();jt();jt();Vt=h((e,t)=>{var i,s;let r=e._$AN;if(r===void 0)return!1;for(let o of r)(s=(i=o)._$AO)===null||s===void 0||s.call(i,t,!1),Vt(o,t);return!0},"e"),Ae=h(e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},"o"),Kr=h(e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Sn(t)}},"n");h(En,"r");h(Cn,"h");Sn=h(e=>{var t,i,s,r;e.type==ie.CHILD&&((t=(s=e)._$AP)!==null&&t!==void 0||(s._$AP=Cn),(i=(r=e)._$AQ)!==null&&i!==void 0||(r._$AQ=En))},"l"),we=class extends vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),Kr(this),this.isConnected=t._$AU}_$AO(t,i=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),i&&(Vt(this,t),Ae(this))}setValue(t){if(nr(this._$Ct))this._$Ct._$AI(t,this);else{let i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};h(we,"d")});var Ee,Ce,Zr=f(()=>{Ee=class{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}};h(Ee,"s");Ce=class{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;(t=this.Y)!==null&&t!==void 0||(this.Y=new Promise(i=>this.q=i))}resume(){var t;(t=this.q)===null||t===void 0||t.call(this),this.Y=this.q=void 0}};h(Ce,"i")});var Qr,qi,Jr,Xr=f(()=>{z();jt();re();Yr();Zr();Qr=h(e=>!or(e)&&typeof e.then=="function","n"),qi=class extends we{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Ee(this),this._$CK=new Ce}render(...t){var i;return(i=t.find(s=>!Qr(s)))!==null&&i!==void 0?i:T}update(t,i){let s=this._$Cyt,r=s.length;this._$Cyt=i;let o=this._$CG,n=this._$CK;this.isConnected||this.disconnected();for(let l=0;l<i.length&&!(l>this._$Cwt);l++){let a=i[l];if(!Qr(a))return this._$Cwt=l,a;l<r&&a===s[l]||(this._$Cwt=1073741823,r=0,Promise.resolve(a).then(async d=>{for(;n.get();)await n.get();let p=o.deref();if(p!==void 0){let c=p._$Cyt.indexOf(a);c>-1&&c<p._$Cwt&&(p._$Cwt=c,p.setValue(d))}}))}return T}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}};h(qi,"h");Jr=Dt(qi)});var to=f(()=>{Xr()});var eo,Se,io,so=f(()=>{k();to();Vi();eo=be.AutoComplete,Se=class extends ${constructor(){super();x(this,"_value",[]);x(this,"_categories",null);this.input=document.createElement("input"),this.input.type="search",this.input.addEventListener("input",this.onInput.bind(this))}static get properties(){return{categories:{type:Object},value:{type:Object},placeholder:{type:String,attribute:!0},src:{type:String}}}static get styles(){return[eo.sharedStyles,A`
        input {
          border: 0px;
          width: 100%;
          outline: none;
          background-color: transparent;
          line-height: 1.1rem;
          color: var(--text-color);
        }
      `]}set src(t){this._src=t}get src(){return this._src}readSchema(){return at(this,null,function*(){if(!this._categories&&this.src)try{let t=yield import(this.src),i=Object.keys(t)[0];this._categories=t[i]}catch(t){throw Error("Could not load omnibox settings from "+this.src+". "+t.message)}return this.categories?(!this._autoCompleter&&this.input!=null&&(this._ready=!0,this.requestUpdate()),!0):!1})}get categories(){return this._categories}set categories(t){this._categories=t}render(){return y`
      ${Jr(this.readSchema().then(t=>t?y`<div>${this.input}</div>`:y``),y`Loading...`)}
    `}set placeholder(t){this._placeholder=t,this.input&&this.input.setAttribute("placeholder",this._placeholder)}get placeholder(){return this._placeholder}update(){super.update(),this._ready&&setTimeout(()=>{this.input.addEventListener("result-selected",t=>{this.input.value=t.detail.text}),this._autoCompleter=new eo(this,this.input,{categories:this.categories,items:this.items}),this._autoCompleter.attach()},10)}onInput(t){this.value=this.input.value,this.fireChange()}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}get value(){let t=this.input;return t&&(this._value=t.value),this._value}set value(t){this._value=t;let i=this.input;i&&(i.value=t)}items(t){return at(this,null,function*(){var r;let i=[];t.results=[];for(var s in t.categories){let o=t.categories[s];if(o.trigger=(r=o.trigger)!=null?r:n=>!0,t.results=i,o.trigger(t)){let n=[];try{n=yield o.getItems(t)}catch(l){console.warn(`Error loading items for omniBox category '${s}'.`,l)}i=i.concat(n.map(l=>(l.category=s,l)))}}return i})}get value(){return this._value}set value(t){this._value=t}};h(Se,"OmniBox");io=Se;window.customElements.define("xw-omnibox",Se)});var ke,ro,oo=f(()=>{k();ke=class extends ${static get properties(){return{dark:{type:Boolean}}}static get styles(){return[A`
        button {
          outline: none;
          padding: 0.5rem;
          border-radius: 100%;
          background-color: var(--theme-bg);
          position: fixed;
          top: 5px;
          right: 5px;
        }
      `]}constructor(){super();this.cls=document.documentElement.classList,this.dark=window.matchMedia("(prefers-color-scheme: dark)").matches}get dark(){return this._dark}set dark(t){this._dark=t}render(){return y`<button
      @click=${this.click}
      style="--theme-bg: ${this.dark?"rgba(100,100,100,.8)":"rgba(50,50,50,.8)"}"
    >
      ${this.dark?"\u{1F506}":"\u{1F319}"}
    </button>`}click(t){this.dark=!this.dark}get dark(){return this.cls.contains("theme-dark")}set dark(t){this.cls[t?"add":"remove"]("theme-dark"),this.cls[t?"remove":"add"]("theme-light"),this.requestUpdate()}};h(ke,"Theme");customElements.define("xw-theme",ke);ro=ke});var ao=go((xl,no)=>{pr();di();gr();fr();xr();$r();Ar();Er();Br();Gr();so();oo();no.exports={Checkbox:ur,CheckGroup:ne,Dialog:mr,FileDrop:vr,Info:br,Monaco:Fr,OmniBox:io,RadioGroup:yr,Select:_r,Switch:wr,Tags:Vr,Theme:ro}});var Yi=Object.defineProperty,bo=Object.defineProperties,xo=Object.getOwnPropertyDescriptors,Zi=Object.getOwnPropertySymbols,yo=Object.prototype.hasOwnProperty,$o=Object.prototype.propertyIsEnumerable,Oe=h((e,t,i)=>t in e?Yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,"ht"),Bt=h((e,t)=>{for(var i in t||(t={}))yo.call(t,i)&&Oe(e,i,t[i]);if(Zi)for(var i of Zi(t))$o.call(t,i)&&Oe(e,i,t[i]);return e},"E"),Qi=h((e,t)=>bo(e,xo(t)),"K"),m=h((e,t)=>Yi(e,"name",{value:t,configurable:!0}),"d"),P=h((e,t,i)=>(Oe(e,typeof t!="symbol"?t+"":t,i),i),"v"),Ji=h((e,t,i)=>new Promise((s,r)=>{var o=h(a=>{try{l(i.next(a))}catch(d){r(d)}},"r"),n=h(a=>{try{l(i.throw(a))}catch(d){r(d)}},"o"),l=h(a=>a.done?s(a.value):Promise.resolve(a.value).then(o,n),"a");l((i=i.apply(e,t)).next())}),"Y"),He=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),Xi=new Map,Me=h(class{constructor(e,t){if(this._$cssResult$=!0,t!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Xi.get(this.cssText);return He&&e===void 0&&(Xi.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},"j");m(Me,"s");var _o=m(e=>new Me(typeof e=="string"?e:e+"",Ie),"o"),Re=m((e,...t)=>{let i=e.length===1?e[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new Me(i,Ie)},"r"),Ao=m((e,t)=>{He?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{let s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)})},"i"),ts=He?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let s of t.cssRules)i+=s.cssText;return _o(i)})(e):e,Le,es=window.trustedTypes,wo=es?es.emptyScript:"",is=window.reactiveElementPolyfillSupport,Ne={toAttribute(e,t){switch(t){case Boolean:e=e?wo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ss=m((e,t)=>t!==e&&(t==t||e==e),"n"),De={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:ss},K=h(class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let s=this._$Eh(i,t);s!==void 0&&(this._$Eu.set(s,i),e.push(s))}),e}static createProperty(e,t=De){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){let r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||De}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(ts(s))}else e!==void 0&&t.push(ts(e));return t}static _$Eh(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ao(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=De){var s,r;let o=this.constructor._$Eh(e,i);if(o!==void 0&&i.reflect===!0){let n=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:Ne.toAttribute)(t,i.type);this._$Ei=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(e,t){var i,s,r;let o=this.constructor,n=o._$Eu.get(e);if(n!==void 0&&this._$Ei!==n){let l=o.getPropertyOptions(n),a=l.converter,d=(r=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&r!==void 0?r:Ne.fromAttribute;this._$Ei=n,this[n]=d(t,l.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ss)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,r)=>this[r]=s),this._$Et=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}},"$");m(K,"a");K.finalized=!0,K.elementProperties=new Map,K.elementStyles=[],K.shadowRootOptions={mode:"open"},is==null||is({ReactiveElement:K}),((Le=globalThis.reactiveElementVersions)!==null&&Le!==void 0?Le:globalThis.reactiveElementVersions=[]).push("1.3.0");var je,lt=globalThis.trustedTypes,rs=lt?lt.createPolicy("lit-html",{createHTML:e=>e}):void 0,R=`lit$${(Math.random()+"").slice(9)}$`,os="?"+R,Eo=`<${os}>`,ht=document,St=m((e="")=>ht.createComment(e),"h"),kt=m(e=>e===null||typeof e!="object"&&typeof e!="function","r"),ns=Array.isArray,Co=m(e=>{var t;return ns(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},"u"),Tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,as=/-->/g,ls=/>/g,Y=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,hs=/'/g,ds=/"/g,cs=/^(?:script|style|textarea|title)$/i,us=m(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),"p"),S=us(1),Tn=us(2),L=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),ps=new WeakMap,So=m((e,t,i)=>{var s,r;let o=(s=i==null?void 0:i.renderBefore)!==null&&s!==void 0?s:t,n=o._$litPart$;if(n===void 0){let l=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new Ut(t.insertBefore(St(),l),l,void 0,i??{})}return n._$AI(e),n},"x"),dt=ht.createTreeWalker(ht,129,null,!1),ko=m((e,t)=>{let i=e.length-1,s=[],r,o=t===2?"<svg>":"",n=Tt;for(let a=0;a<i;a++){let d=e[a],p,c,u=-1,g=0;for(;g<d.length&&(n.lastIndex=g,c=n.exec(d),c!==null);)g=n.lastIndex,n===Tt?c[1]==="!--"?n=as:c[1]!==void 0?n=ls:c[2]!==void 0?(cs.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=Y):c[3]!==void 0&&(n=Y):n===Y?c[0]===">"?(n=r??Tt,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,p=c[1],n=c[3]===void 0?Y:c[3]==='"'?ds:hs):n===ds||n===hs?n=Y:n===as||n===ls?n=Tt:(n=Y,r=void 0);let v=n===Y&&e[a+1].startsWith("/>")?" ":"";o+=n===Tt?d+Eo:u>=0?(s.push(p),d.slice(0,u)+"$lit$"+d.slice(u)+R+v):d+R+(u===-2?(s.push(void 0),a):v)}let l=o+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[rs!==void 0?rs.createHTML(l):l,s]},"C"),Pt=h(class{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0,n=e.length-1,l=this.parts,[a,d]=ko(e,t);if(this.el=Pt.createElement(a,i),dt.currentNode=this.el.content,t===2){let p=this.el.content,c=p.firstChild;c.remove(),p.append(...c.childNodes)}for(;(s=dt.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes()){let p=[];for(let c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(R)){let u=d[o++];if(p.push(c),u!==void 0){let g=s.getAttribute(u.toLowerCase()+"$lit$").split(R),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?gs:v[1]==="?"?vs:v[1]==="@"?fs:Ot})}else l.push({type:6,index:r})}for(let c of p)s.removeAttribute(c)}if(cs.test(s.tagName)){let p=s.textContent.split(R),c=p.length-1;if(c>0){s.textContent=lt?lt.emptyScript:"";for(let u=0;u<c;u++)s.append(p[u],St()),dt.nextNode(),l.push({type:2,index:++r});s.append(p[c],St())}}}else if(s.nodeType===8)if(s.data===os)l.push({type:2,index:r});else{let p=-1;for(;(p=s.data.indexOf(R,p+1))!==-1;)l.push({type:7,index:r}),p+=R.length-1}r++}}static createElement(e,t){let i=ht.createElement("template");return i.innerHTML=e,i}},"U");m(Pt,"E");function Z(e,t,i=e,s){var r,o,n,l;if(t===L)return t;let a=s!==void 0?(r=i._$Cl)===null||r===void 0?void 0:r[s]:i._$Cu,d=kt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),d===void 0?a=void 0:(a=new d(e),a._$AT(e,i,s)),s!==void 0?((n=(l=i)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[s]=a:i._$Cu=a),a!==void 0&&(t=Z(e,a._$AS(e,t.values),a,s)),t}h(Z,"D");m(Z,"P");var ms=h(class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;let{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ht).importNode(i,!0);dt.currentNode=r;let o=dt.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new Ut(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new bs(o,this,e)),this.v.push(d),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=dt.nextNode(),n++)}return r}m(e){let t=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},"xt");m(ms,"V");var Ut=h(class{constructor(e,t,i,s){var r;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),kt(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==L&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Co(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==C&&kt(this._$AH)?this._$AA.nextSibling.data=e:this.k(ht.createTextNode(e)),this._$AH=e}T(e){var t;let{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Pt.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(i);else{let o=new ms(r,this),n=o.p(this.options);o.m(i),this.k(n),this._$AH=o}}_$AC(e){let t=ps.get(e.strings);return t===void 0&&ps.set(e.strings,t=new Pt(e)),t}S(e){ns(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let r of e)s===t.length?t.push(i=new Ut(this.A(St()),this.A(St()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},"R");m(Ut,"N");var Ot=h(class{constructor(e,t,i,s,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){let r=this.strings,o=!1;if(r===void 0)e=Z(this,e,t,0),o=!kt(e)||e!==this._$AH&&e!==L,o&&(this._$AH=e);else{let n=e,l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Z(this,n[i+l],t,l),a===L&&(a=this._$AH[l]),o||(o=!kt(a)||a!==this._$AH[l]),a===C?e=C:e!==C&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.C(e)}C(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},"V");m(Ot,"S");var gs=h(class extends Ot{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===C?void 0:e}},"bt");m(gs,"M");var To=lt?lt.emptyScript:"",vs=h(class extends Ot{constructor(){super(...arguments),this.type=4}C(e){e&&e!==C?this.element.setAttribute(this.name,To):this.element.removeAttribute(this.name)}},"yt");m(vs,"H");var fs=h(class extends Ot{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Z(this,e,t,0))!==null&&i!==void 0?i:C)===L)return;let s=this._$AH,r=e===C&&s!==C||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==C&&(s===C||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},"_t");m(fs,"I");var bs=h(class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}},"$t");m(bs,"L");var xs=window.litHtmlPolyfillSupport;xs==null||xs(Pt,Ut),((je=globalThis.litHtmlVersions)!==null&&je!==void 0?je:globalThis.litHtmlVersions=[]).push("2.2.0");var ze,Ve,ct=h(class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=So(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return L}},"C");m(ct,"s");ct.finalized=!0,ct._$litElement$=!0,(ze=globalThis.litElementHydrateSupport)===null||ze===void 0||ze.call(globalThis,{LitElement:ct});var ys=globalThis.litElementPolyfillSupport;ys==null||ys({LitElement:ct});((Ve=globalThis.litElementVersions)!==null&&Ve!==void 0?Ve:globalThis.litElementVersions=[]).push("3.2.0");var ut=h(class{static isUrl(e){try{return typeof e!="string"||e.indexOf(`
`)!==-1||e.indexOf(" ")!==-1||e.startsWith("#/")?!1:(new URL(e,window.location.origin),!0)}catch{}return!1}static clone(e){if(e===null||typeof e!="object"||"isActiveClone"in e)return e;if(e instanceof Date)var t=new e.constructor;else var t=e.constructor();for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e.isActiveClone=null,t[i]=ut.clone(e[i]),delete e.isActiveClone);return t}static parseHTML(e){return new DOMParser().parseFromString(e,"text/html").body.firstChild}static throttle(e,t=500){var i,s=m(function(r){i&&clearTimeout(i),i=setTimeout(e,t,r)},"throttledListener");return s}static objectEquals(e,t){if(e==null||t===null||t===void 0)return e===t;if(e.constructor!==t.constructor)return!1;if(e instanceof Function||e instanceof RegExp)return e===t;if(e===t||e.valueOf()===t.valueOf())return!0;if(Array.isArray(e)&&e.length!==t.length||e instanceof Date||!(e instanceof Object)||!(t instanceof Object))return!1;var i=Object.keys(e);return Object.keys(t).every(function(s){return i.indexOf(s)!==-1})&&i.every(function(s){return ut.objectEquals(e[s],t[s])})}static equals(e,t){return Array.isArray(e)?ut.arrayEquals(e,t):typeof e=="object"?ut.objectEquals(e,t):e===t}static arrayEquals(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((i,s)=>i===t[s])}static scopeEval(e,t){return Function('"use strict";'+t).bind(e)()}static guid(e){e=Bt({},e||{});let t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){var s=Math.random()*16|0,r=i=="x"?s:s&3|8;return r.toString(16)});return`${e.prefix||""}${e.compact?t.split("-").pop():t}`}},"S");m(ut,"Util");var N=ut,Po=Re`[data-autocomplete] {
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
/*# sourceMappingURL=autocomplete.css.map */`,Uo=Po,$s=h(class{constructor(e,t,i){if(P(this,"cssClasses",{result:"xo-ac-rs",item:"xo-ac-itm"}),this.settings=i,this.control=e,this.htmlElement=t,this.htmlElement.setAttribute("autocomplete","off"),this.categories=i.categories||{},!i.items)throw TypeError("Must pass items array, function or promise in autocomplete settings");this.items=i.items}static get sharedStyles(){return this._sheet||(this._sheet=new CSSStyleSheet,this._sheet.replaceSync(Uo)),this._sheet}attach(){let e=this.isXoControl(this.control),t=m((s,r)=>{this.htmlElement.addEventListener(s,r)},"on");t("input",this.inputHandler.bind(this)),t("click",this.clickHandler.bind(this)),t("focusout",this.blurHandler.bind(this)),t("keyup",this.keyUpHandler.bind(this)),t("keydown",this.keyDownHandler.bind(this)),this.resultsDiv=document.createElement("div"),this.resultsDiv.title="",this.resultsDiv.classList.add(this.cssClasses.result),this.resultsDiv.addEventListener("mousedown",this.resultClick.bind(this));let i=e?this.control.shadowRoot.querySelector(".xo-cn"):this.control.shadowRoot.querySelector("*");i.appendChild(this.resultsDiv),this.clear(),i.setAttribute("data-autocomplete","on")}isXoControl(e){var t;return(t=e.shadowRoot)==null?void 0:t.querySelector(".xo-cn")}moveResult(e){this.show();let t=this.resultsDiv.querySelectorAll("div"),i=t.length;this.rowIndex=this.rowIndex+e,this.rowIndex<=0?this.rowIndex=0:this.rowIndex>i-1&&(this.rowIndex=0),t.forEach(r=>{r.classList.remove("selected")});let s=this.getSelectedDiv();s?(s.classList.add("selected"),s.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})):this.clickHandler({target:this.htmlElement})}getSelectedDiv(){return this.resultsDiv.querySelector(`div:nth-child(${this.rowIndex+1})`)}selectResult(e){var t,i;if(e=e||this.getSelectedDiv(),e){let s=parseInt(e.getAttribute("data-index"));this.resultClicked=!0;let r=this.results[s],o=(t=this.categories[r.category])!=null?t:{};o.action=(i=o.action)!=null?i:this.setText.bind(this),o.newTab&&(this.tabWindow=window.open("about:blank","_blank"));let n=Qi(Bt({},r),{search:this.htmlElement.value});e.classList.add("active"),setTimeout(()=>{o.action(n),o.newTab&&(n.url?this.tabWindow.location.href=n.url:this.tabWindow.close());var l=new Event("change",{bubbles:!0});this.htmlElement.dispatchEvent(l),this.clear();let a=new Event("result-selected",{bubbles:!1});a.detail={text:n.text},this.htmlElement.dispatchEvent(a)},0)}}setText(e){this.control.autoCompleteInput||(this.control.value=e.text),this.hide()}resultClick(e){this.selectResult(e.target.closest(`.${this.cssClasses.item}`))}set categories(e){this._categories=e}get categories(){return this._categories||{}}blurHandler(e){setTimeout(()=>{this.resultClicked||this.clear(),this.resultClicked=!1},100)}clear(){this.resultsDiv.innerHTML="",this.resultsDiv.style.display="none"}show(){this.resultsDiv.style.display!=="block"&&(this.resultsDiv.style.display="block",this.rowIndex=-1)}hide(){this.resultsDiv.style.display="none"}inputHandler(e){this.clear();let t={search:e.target.value,categories:this.categories};this.getItems(t,e).then(i=>{this.clear(),this.resultsHandler(i,t)})}keyDownHandler(e){switch(e.keyCode){case 13:e.stopPropagation(),e.preventDefault();break;case 40:case 38:e.preventDefault()}}keyUpHandler(e){switch(e.keyCode){case 40:this.moveResult(1);break;case 38:this.moveResult(-1);break;case 27:this.hide();break;case 13:this.getSelectedDiv()&&(this.control.preventEnter=!0,e.stopPropagation(),e.preventDefault(),this.selectResult(),setTimeout(()=>{this.control.preventEnter=!1},10));break;default:break}}clickHandler(e){this.clear();let t=e.target.value;this.suggest(t,e)}suggest(e,t){this.htmlElement.focus();let i={suggest:!0,search:e||"",categories:this.categories};this.getItems(i,t).then(s=>{this.htmlElement.dispatchEvent(new CustomEvent("show-results",{detail:{results:s}})),this.resultsHandler(s,i)})}resultsHandler(e,t){this.results=e,this.rowIndex=-1;let i=0;e.forEach(s=>{let r=null,o=t.categories[s.category]||{};s.image&&(s.icon="xo-ac-img",r=`style="background-image: url('${s.image}')"`),s.element?this.resultsDiv.appendChild(s.element):(s=typeof s=="string"?{text:s}:s,this.resultsDiv.appendChild(N.parseHTML(`<div title="${s.tooltip||""}" data-index="${i}" class="${this.cssClasses.item}">
                            <span ${r} class="${s.icon||o.icon}"></span>
                            <span class="text">${this.formatResultItem(s,t,o)}</span>
                            <span class="category">${s.category||""}</span></div>`))),i++}),e.length&&this.show()}formatResultItem(e,t,i){var s;e=typeof e=="string"?{text:e}:e;let r=e.text;return t.search&&(r=r.replace("%search%",t.search),e.description=(s=e.description)==null?void 0:s.replace("%search%",t.search)),r=this.highlight(r,t.search),e.description&&(r=`<div>${r}</div><small>${e.description}</small>`),i.format&&(r=i.format({item:e,result:r,options:t})),r}highlight(e,t){var i=new RegExp("("+t+")","gi");return e.replace(i,'<span class="txt-hl">$1</span>')}getItems(e,t){return Ji(this,null,function*(){let i=this.settings.map,s=m(n=>(typeof n=="string"&&(n={text:n}),n),"normalizeItem"),r=m(n=>i?n.map(l=>({text:l[i]})):n,"map"),o=m(n=>(this.settings.max&&this.settings.max>0&&(n.length=this.settings.max),n),"max");return new Promise(n=>{if(N.isUrl(this.items)){if(this.settings.minlength>0&&(!e.search||e.search.length<this.settings.minlength)){n([]);return}let l=this.formatSearch(this.items,e);fetch(l).then(a=>{if(a.status===200){a.json().then(d=>{d=r(d),n(o(d.filter(p=>this.isMatch(e,p))))});return}throw Error(`HTTP error ${a.status} - ${l}`)})}else if(Array.isArray(this.items)){let l=!0;this.items=this.items.map(a=>typeof a=="string"?{text:a}:(l=!1,a)),l&&this.control.classList.add("simple"),n(o(r(this.items.filter(a=>this.isMatch(e,a)))))}else if(typeof this.items=="function"){e.control=this.control;let l=this.items(e,t).then(a=>{a=a.map(d=>s(d)),a=r(a.filter(d=>this.isMatch(e,d))),n(a)})}else return n(Promise.resolve(this.items.apply(this,e)))})})}formatSearch(e,t){return e.indexOf("%search%")?e.replace("%search%",t.search||""):e+"?"+this.createQueryParam(t)}createQueryParam(e){let t=e.suggest?"&suggest=true":"";return`q=${e.text}${t}`}isMatch(e,t){var i,s;return((i=t.text)==null?void 0:i.indexOf("%search%"))>=0?!0:e.search?((s=t.text)==null?void 0:s.toLowerCase().indexOf(e.search.toLowerCase()))>=0:e.suggest}},"wt");m($s,"AutoComplete");var _s=$s,Oo=["type","label","bind","classes"],Ho=1e3,Io=m(()=>`xo${(Ho++).toString(16)}`,"getUniqueName"),D={},O=h(class{constructor(e){this._context=e}get context(){return this._context}mapProperties(e,t,i){let s=e.nestedElement,r=!0;if(typeof t=="string"){let o=t;t={},t[o]=i,r=!1}else e.beforeMap&&e.beforeMap();t.id||(t.id=Io()),t.name||(t.name=t.id),r&&this.context.data.processBindings(e,t);for(let o in t){if(o==="type")continue;let n=this.getCurrentValue(e,t,o);["id"].includes(o)||(e[o]=n);let l=O.camelCaseToHyphen(o);if(s)if(O.elementSupportsProperty(s,o))s[o]=n??"";else{if(O.isReservedProperty(o))continue;O.elementSupportsAttribute(s,l)?s.setAttribute(l,n):s.setAttribute("data-"+l,n)}}if(s instanceof HTMLSelectElement)O.importItems(s,t.items);else if(s instanceof HTMLButtonElement||s instanceof HTMLAnchorElement){typeof t.label!="undefined"&&(s.innerText=t.label);let o=m((n,l)=>{let a=n;if(a.nodeType===11?a=a.host:a=a.parentNode,!!a)return l(a)?a:o(a,l)},"getParent");t.click&&s.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation();let l=n.path[0],a=o(l,c=>c.nodeName==="XO-REPEAT"),d=-1;a&&[...a.childNodes].forEach(c=>{d===-1&&o(l,u=>{let g=u.getAttribute?u.getAttribute("data-index"):null;g&&(d=parseInt(g)-1)})});let p={target:n.target,path:n.path,detail:{repeat:a,index:d}};t.click(p)})}}getCurrentValue(e,t,i){if(["type","bind"].includes(i))return t[i];let s,r=0;if(e.data&&e.data[i]){let o=O.match(e.data[i],n=>(r++,s=this.context.data.get(n),s));return r===1&&typeof s!="undefined"&&s.toString().length===o.length?s:o}return t[i]}static isReservedProperty(e){return Oo.includes(e)}static match(e,t){let i=e;return typeof e!="string"||e.length<5?e:e.replace(/(#\/[A-Za-z_]+[A-Za-z_0-9\/@]*[A-Za-z_]+[A-Za-z_0-9]*)(?=[\s+\/*,.?!;'")]|$)/gm,(s,r,o)=>t(r,i))}replaceVar(e,t,i){let s=this,r=!1,o,n=O.match(e.rawValue,(l,a)=>(a!==l&&(r=!0),o=s.context.data.get(l),o));return r?n:o}static importItems(e,t=[]){for(let i of t){let s=document.createElement("option");s.value=i.value||i,s.innerText=i.label||i,e.appendChild(s)}}static camelCaseToHyphen(e){return e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}static elementSupportsAttribute(e,t){var i=document.createElement(e.nodeName.toLowerCase());return t in i||["role","readonly","maxlength"].includes(t)||t.startsWith("aria-")}static elementSupportsProperty(e,t){let i=e.nodeName.toLowerCase();return D[i]||(D[i]=[],D[i]=Object.getOwnPropertyNames(Object.getPrototypeOf(e)),D[i]=[...D[i],...Object.getOwnPropertyNames(HTMLElement.prototype)],D[i]=[...new Set(D[i])]),D[i].includes(t)}},"y");m(O,"PropertyMapper");var Be=O,As=h(class{constructor(e){P(this,"_options",null),this._options=e}get value(){return this._options.value}get data(){return this._options.data}get form(){return this._options.form}get path(){return this._options.path}get binding(){return this._options.binding}},"St");m(As,"DataBindingContext");var Mo=As,Ro=m((e,t)=>{if(N.equals(e,t))return!(Array.isArray(e)&&t.length===0)},"isIrelevantChange"),ws=h(class{constructor(e){if(P(this,"instance",{}),P(this,"bound",{}),P(this,"rules",{}),!e)throw Error("Missing context");let t=this;this._context=e,this.context.form.on("interaction",i=>{var s,r;if(console.debug("interaction",i),(s=i.detail.control)==null?void 0:s.bind){let o=this.processBindingIndex(i.detail.control,(r=i.detail.control)==null?void 0:r.bind);t.set(o,i.detail.value,i.detail)}})}initialize(e={},t={}){let i=this;this.options=t;let s=m((r,o,n)=>(n=n||r,new Proxy(o,{get:function(l,a){return["[object Object]","[object Array]"].indexOf(Object.prototype.toString.call(l[a]))>-1?s(r,l[a],n+"/"+a):l[a]},set:function(l,a,d){if(Ro(l[a],d))return!0;let p="#/"+n+"/"+a,c=l[a];l[a]=d,d=i.applyRules(p,d);let u=i.matchArrays(p);i.bound[u]&&i.bound[u].forEach(g=>{let v=g.property==="bind"?"value":g.property,_=i.context.mapper.replaceVar(g,v,d);i.context.mapper.mapProperties(g.control,v,_),console.debug(`Set property '${v}' on ${g.control} to`,d)});try{i.context.form.emit("modelchange",{model:e,change:p,oldValue:c,newValue:d,context:i.originatingEventContext})}finally{i.originatingEventContext=null}return!0}})),"proxify");i.schemaModel=Bt({instance:{}},e),this.addBuiltinModelState(),Object.entries(i.schemaModel.instance).forEach(r=>{let o=r[0];this.instance[o]=s(o,r[1])}),Object.entries(i.schemaModel.rules||{}).forEach(r=>{let o=r[0];i.rules[o]=r[1];try{o=this.processBindingIndex(null,o);let n=i.get(o);typeof n!="undefined"&&i.applyRules(o,n)}catch{}}),setTimeout(()=>{this.context.form.emit("modelchange",{model:i.schemaModel,initial:!0,change:void 0})},1)}addBuiltinModelState(){this.schemaModel.instance._xo={disabled:{back:!0,next:!1,send:!0},nav:{page:1,total:this.options.pageCount,back:0,next:0,send:0}}}get context(){return this._context}processBindingIndex(e,t){if(typeof t=="string"&&t.indexOf("@index")!==-1){let i=this.getParentScope(e);if(!i)throw"No scope for @index";t=t.replace("@index",i.options.index)}return t}getParentScope(e){var t;let i=e==null?void 0:e.parent;for(;i&&i;){if((t=i.options)==null?void 0:t.scope)return i;i=i.parent}}processBindings(e,t){let i=this;for(let s in t){let r=t[s];if(s==="bind"){let o=r;r=this.processBindingIndex(e,r),t.value=i.get(r),this.addBinding({control:e,rawValue:o,property:s,binding:o})}else Be.match(r,o=>{this.addBinding({control:e,rawValue:r,property:s,binding:o}),o=this.processBindingIndex(e,o);let n=i.get(o);typeof n!="undefined"&&(t[s==="bind"?"value":s]=n)})}}addBinding(e){let t=this.matchArrays(e.binding);this.bound[t]=this.bound[t]||[],this.bound[t].findIndex(i=>i.control===e.control)===-1&&this.bound[t].push(e)}applyRules(e,t){let i=this,s=this.matchArrays(e);if(i.rules[s]){let r=i.rules[s];Array.isArray(r)&&r.forEach(o=>{var n;o.set=(n=o.set)!=null?n:e;let l=new Mo({data:i,form:i.form,value:t,path:s,binding:e});if(o.run)typeof o.run=="function"?o.run(l):N.scopeEval(l,"return "+o.run);else if(o.set){let a;typeof o.value=="function"?a=o.value(l):a=N.scopeEval(l,"return "+o.value),typeof a!="undefined"&&(i.set(o.set,a),o.set===e&&(t=a))}})}return t}matchArrays(e){let t=e.split("/");e="";let i=t.length,s=0;return t.forEach(r=>{s++,isNaN(parseInt(r))?e+=r:e+="*",s<i&&(e+="/")}),e}parseKey(e){let t=parseInt(e);return isNaN(t)?e:t}get(e){if(e.indexOf("*")!==-1||e.indexOf("@index")!==-1)throw Error("Invalid binding path: "+e);let t=e.substring(2).split("/"),i=t.shift();var s=this.instance[i];if(s)for(var r=0;r<t.length;r++){let o=this.parseKey(t[r]);if(r===t.length-1)return typeof o=="number"&&console.log("GET: ",e,s[o]),s[o];s=s[o]}}set(e,t,i){let s=e.substring(2).split("/"),r=s.shift();var o=this.instance[r];if(o)for(var n=0;n<s.length;n++){let l=this.parseKey(s[n]);if(n===s.length-1){this.originatingEventContext=this.createDataBindingOriginContext(i),o[l]=t;break}o=o[l]}}createDataBindingOriginContext(e){if(e)return{eventType:e.type,sourceControl:e.control,eventSourceElement:e.source,controlValue:e.value,guid:e.guid}}},"kt");m(ws,"DataBinding");var Es=ws,Lo=Re`:root{--accent: var(--color-accent, #3477f3);--text-color: rgb(41, 41, 41);--bg-color: rgb(231, 231, 231);--shadow-color: black;--frame-color: rgb(250, 250, 250);--xo-input-bg: rgba(250, 250, 250);--xo-input-border-color: rgba(220, 220, 220);--xo-input-border-color-hover: rgba(200, 200, 200);--xo-input-border-color-active: rgba(180, 180, 180);--xo-card-background: rgb(100, 100, 100);--xo-card-color: white;--color-validation-warning: rgb(150, 34, 34)}:root.theme-dark{--accent: var(--color-accent, #5287eb);--bg-color: rgb(41, 41, 41);--text-color: rgb(241, 241, 241);--frame-color: rgb(230, 230, 230);--xo-input-bg: rgb(30, 30, 30);--xo-input-border-color: rgba(50, 50, 50);--xo-input-border-color-hover: rgba(80, 80, 80);--xo-input-border-color-active: rgba(110, 110, 110);--xo-card-background: rgb(60, 60, 60);--color-validation-warning: rgb(220, 124, 124)}html,body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background-color:var(--bg-color);accent-color:var(--accent)}html img,body img{border:1rem solid var(--frame-color);border-radius:1rem;box-shadow:1rem 1rem 1rem var(--shadow-color);object-fit:scale-down;object-position:top;max-width:100%;max-height:40vh}.theme-dark html img,.theme-dark body img{filter:brightness(.8) contrast(1.2)}a:link,a:visited{color:var(--text-color);text-decoration:none}a:link:hover,a:visited:hover{text-decoration:underline}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--accent: var(--color-accent, #3477f3);--text-color: rgb(41, 41, 41);--bg-color: rgb(231, 231, 231);--shadow-color: black;--frame-color: rgb(250, 250, 250);--xo-input-bg: rgba(250, 250, 250);--xo-input-border-color: rgba(220, 220, 220);--xo-input-border-color-hover: rgba(200, 200, 200);--xo-input-border-color-active: rgba(180, 180, 180);--xo-card-background: rgb(100, 100, 100);--xo-card-color: white;--color-validation-warning: rgb(150, 34, 34)}:root.theme-dark{--accent: var(--color-accent, #5287eb);--bg-color: rgb(41, 41, 41);--text-color: rgb(241, 241, 241);--frame-color: rgb(230, 230, 230);--xo-input-bg: rgb(30, 30, 30);--xo-input-border-color: rgba(50, 50, 50);--xo-input-border-color-hover: rgba(80, 80, 80);--xo-input-border-color-active: rgba(110, 110, 110);--xo-card-background: rgb(60, 60, 60);--color-validation-warning: rgb(220, 124, 124)}html,body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background-color:var(--bg-color);accent-color:var(--accent)}html img,body img{border:1rem solid var(--frame-color);border-radius:1rem;box-shadow:1rem 1rem 1rem var(--shadow-color);object-fit:scale-down;object-position:top;max-width:100%;max-height:40vh}.theme-dark html img,.theme-dark body img{filter:brightness(.8) contrast(1.2)}a:link,a:visited{color:var(--text-color);text-decoration:none}a:link:hover,a:visited:hover{text-decoration:underline}*{box-sizing:border-box}.xo-cn:not(.xo-rep){margin-top:.4rem;margin-bottom:.4rem}.xo-cn:not(.xo-rep) .xo-in{padding:0}.xo-cn:not(.xo-rep):not(.xo-gc) .xo-in,.xo-cn:not(.xo-rep).type-panel .xo-in{padding:15px;border:1px solid var(--xo-input-border-color);border-radius:1rem;background-color:var(--xo-input-bg)}.xo-cn:not(.xo-rep):hover .xo-in{border-color:var(--xo-input-border-color-hover);transition:all .3s ease}.xo-cn:not(.xo-rep).xo-fc .xo-in{border-color:var(--xo-input-border-color-active);transition:all .3s ease}.xo-cn:not(.xo-rep):not(.xo-ri) .xo-in .xo-grp{padding:0}.xo-ri{margin:0;padding:0!important}.xo-ri .xo-ct{margin:0;padding:0}.xo-ri .xo-in{border:0;padding:0!important}.xo-ct{padding:.5rem 0px 0px .5rem}.xo-pp{display:inline}label{display:inline-block;margin-top:.3rem;margin-bottom:.3rem;margin-right:.7rem}input,select,textarea{background-color:transparent;color:var(--text-color)}input:not([type=checkbox],[type=radio]),select,textarea{min-width:8rem;padding:.5rem 1rem;line-height:1.25rem}.xo-hd{display:none}input:not([type=checkbox],[type=radio]),select,textarea{border:0;outline:0;padding:0;width:100%;resize:vertical}label{display:inline-block}.xo-lb:empty{display:none}button{margin-top:.5rem;text-transform:uppercase;background-color:var(--xo-btn-bg, rgba(127, 127, 127, .8));padding:.4rem .8rem;border-radius:1rem;border:1px solid var(--xo-input-border-color)}button:hover{border:1px solid var(--xo-input-border-color-hover)}button:active{transform:translateY(2px);transition:all .1s ease-out}button.cta{margin:1rem 2rem;font-size:1.3rem;margin:3rem auto}.xo-sl{display:inline-block;padding-left:.5rem}.xo-ds{opacity:.5;user-select:none;cursor:not-allowed}.xo-ds input,.xo-ds [name],.xo-ds label{pointer-events:none}.xo-nv{margin-top:2rem}fieldset{border:0}legend{font-size:1.3rem}.xo-hl{display:inline-block;width:80%;margin-left:1rem;margin-top:-1rem}.xo-vl{color:var(--color-validation-warning, #fa5e5e)}.xo-grp.hor{display:flex;gap:.6rem}.xo-grp.hor.center{align-items:center}option{background-color:var(--bg-color)}html.theme-dark [data-autocomplete] .xo-ac-rs{background-color:#282828;box-shadow:0 5px 10px 2px #00000080;border-color:#ffffff1a}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm:hover{background-color:#ffffff0d}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm span.text small,html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm span.category{color:#ffffff80}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm.selected{background-color:#ffffff80}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm.active{background-color:#ffffffa6}.pwa-omnibox .exf-ctl-cnt.autocomplete{width:auto;display:inline-block}.material.xo-cn{margin-top:0}.material.xo-tx .xo-ct{position:relative}.material.xo-tx .xo-ct .xo-in{padding:20px 20px 10px 16px}.material.xo-tx .xo-ct label{position:absolute;z-index:1;top:20px;left:25px;padding:0;border-radius:5px;transition:all .2s;pointer-events:none}.material.xo-tx:not(.xo-fc) *::placeholder{opacity:0}.material.xo-tx.xo-fc .xo-ct label,.material.xo-tx.xo-ne .xo-ct label{font-size:75%;transition:all .2s;transform:translateY(-12px);opacity:.8}
`,No=Lo,qe=h(class{constructor(e){this._form=e,this._db=new Es(this),this._mapper=new Be(this)}get form(){return this._form}get data(){return this._db}get mapper(){return this._mapper}static get sharedStyles(){return this._sheet||(this._sheet=new CSSStyleSheet,this._sheet.replaceSync(No)),this._sheet}},"X");m(qe,"Context"),P(qe,"_sheet");var qt=qe,Do="Invalid binding value",We=h(class extends ct{constructor(){super(...arguments);P(this,"_disabled",!1),P(this,"_clicked",0),P(this,"_context",null)}get context(){return this._context}static get properties(){return{name:{type:String,attribute:!0},bind:{type:String},type:{type:String,attribute:!0},hidden:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},focus:{type:Boolean},label:{type:String},tooltip:{type:String},placeholder:{type:String},valid:{type:Boolean},value:{type:Object},classes:{type:Array},autocomplete:{type:Object},prepend:{type:Object},append:{type:Object}}}get valid(){return this.checkValidity()}static get styles(){return[qt.sharedStyles,_s.sharedStyles]}closestElement(e,t=this,i=(s,r=s&&s.closest(e))=>!s||s===document||s===window?null:r||i(s.getRootNode().host)){return i(t)}connectedCallback(){var e,t,i;super.connectedCallback(),this.form=this.closest("xo-form"),(e=this.form)==null||e.registerElement(this),this.acceptMappedState(),(t=this.nestedElement)==null||t.addEventListener("focus",this.onfocus.bind(this)),(i=this.nestedElement)==null||i.addEventListener("blur",this.onblur.bind(this)),this.shadowRoot.addEventListener("input",this.onInput.bind(this)),this.shadowRoot.addEventListener("change",this.onInput.bind(this))}disconnectedCallback(){var e,t;(e=this.nestedElement)==null||e.removeEventListener("focus",this.onfocus),(t=this.nestedElement)==null||t.removeEventListener("blur",this.onblur),this.shadowRoot.removeEventListener("input",this.onInput),this.shadowRoot.removeEventListener("change",this.onInput)}firstUpdated(){this.autocomplete&&this.autocomplete.items&&this.nestedElement instanceof HTMLInputElement&&this.tryApplyAutoComplete()}set autocomplete(e){this._autocomplete=e}get autocomplete(){return this._autocomplete}tryApplyAutoComplete(){this._autoCompleter=new _s(this,this.nestedElement,this.autocomplete),this._autoCompleter.attach()}acceptMappedState(){}onfocus(e){e.stopPropagation(),this.focus=!0}onInput(e){if(e.type==="input"&&this.nestedElement&&this.nestedElement.nodeName.indexOf("-")!==-1)return;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();let t=e.composedPath()[0];e.type==="change"&&typeof this.__lastInputValue!="undefined"&&this.__lastInputValue===this.value||(this.form.emit("interaction",{type:"input",control:this,source:t,value:this.value,guid:N.guid()}),e.type==="input"&&(this.__lastInputValue=this.value))}click(e){e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation();let t=e.composedPath()[0];this._clicked++,this.form&&this.form.emit("interaction",{type:"click",control:this,source:t,value:t.defaultValue||this._clicked,guid:N.guid()})}checkValidity(){return this.nestedElement&&this.nestedElement.checkValidity?this.nestedElement.checkValidity():!0}reportValidity(){return this.nestedElement?this.nestedElement.reportValidity():!0}onblur(e){e.stopPropagation(),this.focus=!1}fireChange(){this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}get value(){var e;return(e=this.nestedElement)==null?void 0:e.value}set value(e){if(this.nestedElement)if(this.nestedElement instanceof HTMLSelectElement){let t=this.items.findIndex(i=>e===i.value||i);this.nestedElement.selectedIndex=t}else this.nestedElement.value=e??""}createControl(e,t,i,s={}){var r;if(!e||!e.data)throw Error("Invalid or missing context");t=this.transform(t,i)||"text",e.form.emit("create-control",{type:t,properties:i});let o;if(customElements.get("xo-"+t)&&(t="xo-"+t),t.startsWith("xo-"))o=document.createElement(t);else{try{o=document.createElement(t);let l=(r=o.__proto__)==null?void 0:r.constructor.name;if(["HTMLUnknownElement","HTMLTimeElement"].includes(l))throw new Error("Invalid Element type")}catch{if(t.indexOf("-")===-1){o=document.createElement("input");try{o.type=t}catch{}}}let n=document.createElement("xo-control");n.type=t,n.nestedElement=o,o=n}return o&&(o.parent=this,o.options=s,e.parent=this,o._context=e,e.mapper.mapProperties(o,i),e.form.emit("created-control",{control:o})),o}transform(e,t){switch(e){}return e}getContainerClasses(){var e,t;let i=[];this.hidden&&i.push("xo-hd"),this.focus&&i.push("xo-fc"),this.disabled&&i.push("xo-ds"),this.valid||i.push("xo-iv"),this.classes&&i.push(...this.classes),this.nestedElement&&(this.nestedElement.value&&i.push("xo-ne"),this.isTextual&&i.push("xo-tx"));let s=(t=(e=this.form)==null?void 0:e.theme)!=null?t:"standard";return i.push(s),i.join(" ")}get isTextual(){return this.nestedElement instanceof HTMLTextAreaElement||this.nestedElement instanceof HTMLInputElement&&["text","url","tel","password","email"].includes(this.nestedElement.getAttribute("type"))}render(){return this.type&&this.setAttribute("data-type",this.type),this.closest("xo-nav")?S`${this.renderInput()}`:this.nestedElement instanceof HTMLButtonElement?(typeof this.nestedElement.defaultValue=="undefined"&&(this.nestedElement.defaultValue=this.nestedElement.value),this.nestedElement.removeEventListener("click",this.click),this.nestedElement.addEventListener("click",this.click.bind(this)),S`${this.renderInput(!0)}`):S`<div
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
          ${this.renderPrepend()} ${this.renderInput()} ${this.renderAppend()}
        </div>
      </div>
      <div class="xo-io" part="xo-io">
        <div class="xo-hl" part="xo-hl">${this.getValidation()}</div>
      </div>
    </div>`}renderPrepend(){if(this.prepend){if(this.prepend.icon)return S`<span class="material-icons">${this.prepend.icon}</span>`;if(this.prepend.text)return S`<span class="xo-pp">${this.prepend.text}</span>`}}renderAppend(){}renderRequiredState(){return this.label&&this.required?S`<sup>*</sup>`:""}renderInput(e){return this.renderNestedElement(e)}renderNestedElement(e){return e&&this.nestedElement.setAttribute("class",this.nestedElement.getAttribute("class")+" "+this.getContainerClasses()),this.nestedElement}set bind(e){if(typeof e!="string"||!e.startsWith("#/"))throw Error(Do);this._bind=e}get bind(){return this._bind}getValidation(){if(!this.valid)return S`<small class="xo-vl"
        >${this.validationText||this.invalidMessage}</small
      >`}on(e,t){(Array.isArray(e)?e:[...e.split(" ")]).forEach(i=>{this.addEventListener(i,t)})}set disabled(e){this._disabled=e}get disabled(){return this._disabled}toString(){return this.nestedElement?this.nestedElement.nodeName==="INPUT"?`${this.nestedElement.nodeName}[type="${this.nestedElement.type}"]`:this.nestedElement.nodeName:this.nodeName}set invalidMessage(e){this._invalidMessage=e}get invalidMessage(){return this._invalidMessage}},"J");m(We,"Control");window.customElements.define("xo-control",We);var Wt=We,jo="inline",zo="inline",Cs=h(class{constructor(e){this.form=e,this.form.on("interaction",t=>{let i=t.detail.control;this.processValidation(i),this.checkValid()}),this.form.on("created-control",t=>{var i;((i=this.form.schema.validation)!=null?i:jo===zo)&&(t.detail.control.on("invalid",s=>{s.preventDefault()}),t.detail.control.nestedElement&&t.detail.control.nestedElement.addEventListener("invalid",s=>{s.preventDefault(),s.stopPropagation(),t.detail.control.validationMessage=s.target.validationMessage}))}),setTimeout(()=>{this.checkValid()},60)}checkValid(){let e=this.isPageValid(this.form.page),t=this.form.context.data.get("#/_xo/nav/total");this.form.context.data.set("#/_xo/disabled/next",!e||this.form.page>=t),this.form.context.data.set("#/_xo/disabled/back",this.form.page<=1)}processValidation(e){if(!e.checkValidity()){let t=e.closestElement("xo-control");try{t.invalidMessage=e.validationMessage}catch{}t&&t.reportValidity&&t.reportValidity()}}isPageValid(e){let t=this.form.childNodes[e-1];if(t){let i=t==null?void 0:t.childNodes,s=i.length,r=0;return i.forEach(o=>{o.checkValidity(),o.valid&&r++}),r===s}}},"Tt");m(Cs,"Validator");var Ss=Cs,Vo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bo=m(e=>(...t)=>({_$litDirective$:e,values:t}),"e"),ks=h(class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},"et");m(ks,"i");var qo=m(e=>e===null||typeof e!="object"&&typeof e!="function","t"),Wo=m(e=>e.strings===void 0,"r"),Ht=m((e,t)=>{var i,s;let r=e._$AN;if(r===void 0)return!1;for(let o of r)(s=(i=o)._$AO)===null||s===void 0||s.call(i,t,!1),Ht(o,t);return!0},"e"),Ft=m(e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},"o"),Ts=m(e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Fo(t)}},"n");function Ps(e){this._$AN!==void 0?(Ft(this),this._$AM=e,Ts(this)):this._$AM=e}h(Ps,"Me");m(Ps,"r");function Us(e,t=!1,i=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=i;o<s.length;o++)Ht(s[o],!1),Ft(s[o]);else s!=null&&(Ht(s,!1),Ft(s));else Ht(this,e)}h(Us,"Ue");m(Us,"h");var Fo=m(e=>{var t,i,s,r;e.type==Vo.CHILD&&((t=(s=e)._$AP)!==null&&t!==void 0||(s._$AP=Us),(i=(r=e)._$AQ)!==null&&i!==void 0||(r._$AQ=Ps))},"l"),Os=h(class extends ks{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Ts(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(Ht(this,e),Ft(this))}setValue(e){if(Wo(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},"st");m(Os,"d");var Hs=h(class{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}},"rt");m(Hs,"s");var Is=h(class{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.q=t))}resume(){var e;(e=this.q)===null||e===void 0||e.call(this),this.Y=this.q=void 0}},"ot");m(Is,"i");var Ms=m(e=>!qo(e)&&typeof e.then=="function","n"),Rs=h(class extends Os{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Hs(this),this._$CK=new Is}render(...e){var t;return(t=e.find(i=>!Ms(i)))!==null&&t!==void 0?t:L}update(e,t){let i=this._$Cyt,s=i.length;this._$Cyt=t;let r=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let n=0;n<t.length&&!(n>this._$Cwt);n++){let l=t[n];if(!Ms(l))return this._$Cwt=n,l;n<s&&l===i[n]||(this._$Cwt=1073741823,s=0,Promise.resolve(l).then(async a=>{for(;o.get();)await o.get();let d=r.deref();if(d!==void 0){let p=d._$Cyt.indexOf(l);p>-1&&p<d._$Cwt&&(d._$Cwt=p,d.setValue(a))}}))}return L}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}},"It");m(Rs,"h");var Go=Bo(Rs),Ko="1.0.17",Fe=h(class extends Wt{constructor(){super();P(this,"elements",{}),this._url=new URL(document.location.href),this._context=new qt(this),this._page=1}static get version(){return Ko}static get properties(){return Qi(Bt({},Wt.properties),{page:{type:Number,attribute:!0},schema:{type:Object},src:{type:String,attribute:!0},theme:{type:String,attribute:!0},validation:{type:String}})}get context(){return this._context}set page(e){e!==this._page&&(e<1||e>this.querySelectorAll("xo-page").length||(e>this._page&&this.validator.isPageValid(this._page),this._page=e))}get page(){return this._page}set schema(e){this._schema=e,this.innerHTML="",this.requestUpdate()}get schema(){return this._schema}registerElement(e){e.name&&(this.elements[e.name]=e)}set src(e){this._src=e}get src(){return this._src}readSchema(){return Ji(this,null,function*(){if(!this.schema&&this.src)try{let e=yield import(this.src),t=Object.keys(e)[0];this._schema=e[t]}catch(e){throw Error("Could not load schema from "+this.src+". "+e.message)}return this.schema?(this.interpretSchema(),!0):!1})}interpretSchema(){var e,t;if(typeof this.schema!="object")throw Error("Invalid schema");this.schema.page="#/_xo/nav/page",this.schema.pages=(e=this.schema.pages)!=null?e:[],this.context.data.initialize(this.schema.model,{pageCount:this.schema.pages.length});let i=1;for(let s of this.schema.pages){s.index=i++;let r=this.createControl(this.context,(t=s.type)!=null?t:"xo-page",s);r.setAttribute("slot","w"),this.appendChild(r)}this.nav=this.createControl(this.context,"xo-nav",this.schema),this.nav.controls=this.nav.controls,this.nav.setAttribute("slot","n"),this.appendChild(this.nav),this.emit("ready")}render(){return S`
      ${Go(this.readSchema().then(e=>e?S`<div class="xo-c" data-page="${this.page}" >
            <form>
                <div class="xo-w">
                    <slot name="w"></slot>
                </div>
                <div class="xo-n">
                    <slot name="n"></slot>
                <div>
            </form>
            <div>`:S``),S`Loading...`)}
    `}firstUpdated(){this.checkUrlState(),this.validator=new Ss(this),this.emit("first-updated")}emit(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t}))}get url(){return this._url}checkUrlState(){}getSlotted(e){var t;let i=(t=e.shadowRoot)==null?void 0:t.querySelector("slot");return[...(i==null?void 0:i.assignedElements({flatten:!0}))||[]]}},"nt");m(Fe,"Form");var Yo=Fe;window.customElements.define("xo-form",Fe);var Ge=h(class extends Wt{static get properties(){return{layout:{type:String,attribute:!0},align:{type:String,attribute:!0},ui:{type:String,attribute:!0},fields:{type:Array}}}renderInput(){return S`<div class="${this.getGroupClasses()}">
      <slot></slot>
    </div>`}set fields(e){this._fields=e;for(let t of this._fields){let i=this.createControl(this.context,t.type,t);this.appendChild(i)}}get fields(){return this._fields}getGroupClasses(){var e,t;return`xo-grp ${((e=this.layout)==null?void 0:e.startsWith("hor"))?"hor":"ver"} ${(t=this.align)!=null?t:""}`}getContainerClasses(){return`${super.getContainerClasses()} xo-gc ${this.ui?"type-"+this.ui:""}`}},"at");m(Ge,"Group");var Gt=Ge;window.customElements.define("xo-group",Ge);var Ke=h(class extends Gt{constructor(){super(...arguments);this.hidden=!0}connectedCallback(){super.connectedCallback(),this.closest("xo-form").on("page",e=>{this.hidden=e.target.page!==this.index}),this.hidden=this.index!==1}render(){return this.hidden?S``:S`<fieldset
      ${this.hidden?"hidden":""}
      data-page="${this.index}"
      class="xo-cn ${this.getContainerClasses()}"
    >
      <legend>${this.label}</legend>
      <slot></slot>
    </fieldset>`}static get properties(){return{index:{type:Number,attribute:!0}}}},"lt");m(Ke,"Page");window.customElements.define("xo-page",Ke);var Zo=Ke,Ye=h(class extends Gt{static get properties(){return{items:{type:Array},layout:{type:String},fields:{type:Array}}}set fields(e){if(!Array.isArray(e))throw Error("Invalid fields property value for repeat.");this._fields=e,this.refresh()}get fields(){return this._fields}set items(e){this._items=e,this.hasUpdated&&(this.refresh(),this.requestUpdate())}get items(){return this._items}refresh(){this.innerHTML="";let e=0;this.items.forEach(t=>{let i=this.createControl(this.context,"group",{fields:this.fields,classes:["xo-ri"],index:e},{scope:t,index:e++});i.setAttribute("data-index",e),this.appendChild(i)})}getContainerClasses(){return super.getContainerClasses()+" xo-rep"}},"ct");m(Ye,"Repeat");var Qo=Ye;window.customElements.define("xo-repeat",Ye);var Ze=h(class extends Gt{static get styles(){return[qt.sharedStyles,Re`
        :host {
          display: flex;
        }
        .xo-grp {
          display: inline-block;
          margin: auto;
        }
      `]}beforeMap(){this.layout="horizontal",this._controls=[],this.context.data.get("#/_xo/nav/total")>1&&this._controls.push({type:"button",name:"prev",label:"Back",bind:"#/_xo/nav/back",disabled:"#/_xo/disabled/back",click:this.prev.bind(this)},{type:"button",name:"nxt",label:"Next",bind:"#/_xo/nav/next",disabled:"#/_xo/disabled/next",click:this.next.bind(this)})}static get properties(){return{page:{type:Number},controls:{type:Array}}}set page(e){if(typeof e!="number")throw Error("Invalid value for page");let t=this.context.form.page;this.context.form.page=e,this.context.form.emit("page",{from:t,to:e}),this.updateUrl()}updateUrl(){}get page(){return this.context.form.page}set controls(e){if(!Array.isArray(e))throw Error("Invalid controls property value");this._controls=e;for(let t of this._controls){let i=this.createControl(this.context,"button",t);this.appendChild(i)}}get controls(){return this._controls}prev(){this.updateState(-1)}next(){this.updateState(1)}updateState(e){let t=this.context.data.get("#/_xo/nav/page"),i=this.context.data.get("#/_xo/nav/total");e>0?t=Math.min(i,t+1):t=Math.max(1,t-1),this.context.data.set("#/_xo/nav/page",t),this.context.data.set("#/_xo/disabled/next",t>=i),this.context.data.set("#/_xo/disabled/back",t<=1)}submit(){let e=this.closest("xo-form"),t={};Object.entries(e.elements).forEach(i=>{let s=i[0];if(s){let r=i[1].value;t[s]=r}}),console.log(JSON.stringify(t,null,2))}},"dt");m(Ze,"Navigation");window.customElements.define("xo-nav",Ze);var Jo=Ze,Xo=h(class{static get Context(){return qt}static get Control(){return Wt}static get DataBinding(){return Es}static get Form(){return Yo}static get Group(){return Gt}static get PropertyMapper(){return Be}static get Page(){return Zo}static get Repeat(){return Qo}static get Util(){return N}static get Navigation(){return Jo}static get Validation(){return Ss}},"Mt");m(Xo,"xo");var _l=fo(ao());})();
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
