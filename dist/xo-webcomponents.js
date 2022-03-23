(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/xo-form/dist/xo-form.js
  var Ht = Object.defineProperty;
  var he = Object.defineProperties;
  var ue = Object.getOwnPropertyDescriptors;
  var Nt = Object.getOwnPropertySymbols;
  var pe = Object.prototype.hasOwnProperty;
  var me = Object.prototype.propertyIsEnumerable;
  var ft = /* @__PURE__ */ __name((n5, t4, e6) => t4 in n5 ? Ht(n5, t4, { enumerable: true, configurable: true, writable: true, value: e6 }) : n5[t4] = e6, "ft");
  var N = /* @__PURE__ */ __name((n5, t4) => {
    for (var e6 in t4 || (t4 = {}))
      pe.call(t4, e6) && ft(n5, e6, t4[e6]);
    if (Nt)
      for (var e6 of Nt(t4))
        me.call(t4, e6) && ft(n5, e6, t4[e6]);
    return n5;
  }, "N");
  var Z = /* @__PURE__ */ __name((n5, t4) => he(n5, ue(t4)), "Z");
  var c = /* @__PURE__ */ __name((n5, t4) => Ht(n5, "name", { value: t4, configurable: true }), "c");
  var v = /* @__PURE__ */ __name((n5, t4, e6) => (ft(n5, typeof t4 != "symbol" ? t4 + "" : t4, e6), e6), "v");
  var Q = /* @__PURE__ */ __name((n5, t4, e6) => new Promise((i5, s6) => {
    var r4 = /* @__PURE__ */ __name((l4) => {
      try {
        a4(e6.next(l4));
      } catch (d2) {
        s6(d2);
      }
    }, "r"), o5 = /* @__PURE__ */ __name((l4) => {
      try {
        a4(e6.throw(l4));
      } catch (d2) {
        s6(d2);
      }
    }, "o"), a4 = /* @__PURE__ */ __name((l4) => l4.done ? i5(l4.value) : Promise.resolve(l4.value).then(r4, o5), "a");
    a4((e6 = e6.apply(n5, t4)).next());
  }), "Q");
  var J = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var gt = Symbol();
  var Ut = new Map();
  var z = /* @__PURE__ */ __name(class {
    constructor(t4, e6) {
      if (this._$cssResult$ = true, e6 !== gt)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4;
    }
    get styleSheet() {
      let t4 = Ut.get(this.cssText);
      return J && t4 === void 0 && (Ut.set(this.cssText, t4 = new CSSStyleSheet()), t4.replaceSync(this.cssText)), t4;
    }
    toString() {
      return this.cssText;
    }
  }, "z");
  c(z, "s");
  var Rt = c((n5) => new z(typeof n5 == "string" ? n5 : n5 + "", gt), "o");
  var B = c((n5, ...t4) => {
    let e6 = n5.length === 1 ? n5[0] : t4.reduce((i5, s6, r4) => i5 + ((o5) => {
      if (o5._$cssResult$ === true)
        return o5.cssText;
      if (typeof o5 == "number")
        return o5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s6) + n5[r4 + 1], n5[0]);
    return new z(e6, gt);
  }, "r");
  var vt = c((n5, t4) => {
    J ? n5.adoptedStyleSheets = t4.map((e6) => e6 instanceof CSSStyleSheet ? e6 : e6.styleSheet) : t4.forEach((e6) => {
      let i5 = document.createElement("style"), s6 = window.litNonce;
      s6 !== void 0 && i5.setAttribute("nonce", s6), i5.textContent = e6.cssText, n5.appendChild(i5);
    });
  }, "i");
  var X = J ? (n5) => n5 : (n5) => n5 instanceof CSSStyleSheet ? ((t4) => {
    let e6 = "";
    for (let i5 of t4.cssRules)
      e6 += i5.cssText;
    return Rt(e6);
  })(n5) : n5;
  var xt;
  var Lt = window.trustedTypes;
  var fe = Lt ? Lt.emptyScript : "";
  var Ot = window.reactiveElementPolyfillSupport;
  var bt = { toAttribute(n5, t4) {
    switch (t4) {
      case Boolean:
        n5 = n5 ? fe : null;
        break;
      case Object:
      case Array:
        n5 = n5 == null ? n5 : JSON.stringify(n5);
    }
    return n5;
  }, fromAttribute(n5, t4) {
    let e6 = n5;
    switch (t4) {
      case Boolean:
        e6 = n5 !== null;
        break;
      case Number:
        e6 = n5 === null ? null : Number(n5);
        break;
      case Object:
      case Array:
        try {
          e6 = JSON.parse(n5);
        } catch {
          e6 = null;
        }
    }
    return e6;
  } };
  var Dt = c((n5, t4) => t4 !== n5 && (t4 == t4 || n5 == n5), "n");
  var yt = { attribute: true, type: String, converter: bt, reflect: false, hasChanged: Dt };
  var $ = /* @__PURE__ */ __name(class extends HTMLElement {
    constructor() {
      super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t4) {
      var e6;
      (e6 = this.l) !== null && e6 !== void 0 || (this.l = []), this.l.push(t4);
    }
    static get observedAttributes() {
      this.finalize();
      let t4 = [];
      return this.elementProperties.forEach((e6, i5) => {
        let s6 = this._$Eh(i5, e6);
        s6 !== void 0 && (this._$Eu.set(s6, i5), t4.push(s6));
      }), t4;
    }
    static createProperty(t4, e6 = yt) {
      if (e6.state && (e6.attribute = false), this.finalize(), this.elementProperties.set(t4, e6), !e6.noAccessor && !this.prototype.hasOwnProperty(t4)) {
        let i5 = typeof t4 == "symbol" ? Symbol() : "__" + t4, s6 = this.getPropertyDescriptor(t4, i5, e6);
        s6 !== void 0 && Object.defineProperty(this.prototype, t4, s6);
      }
    }
    static getPropertyDescriptor(t4, e6, i5) {
      return { get() {
        return this[e6];
      }, set(s6) {
        let r4 = this[t4];
        this[e6] = s6, this.requestUpdate(t4, r4, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) || yt;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      let t4 = Object.getPrototypeOf(this);
      if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
        let e6 = this.properties, i5 = [...Object.getOwnPropertyNames(e6), ...Object.getOwnPropertySymbols(e6)];
        for (let s6 of i5)
          this.createProperty(s6, e6[s6]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(t4) {
      let e6 = [];
      if (Array.isArray(t4)) {
        let i5 = new Set(t4.flat(1 / 0).reverse());
        for (let s6 of i5)
          e6.unshift(X(s6));
      } else
        t4 !== void 0 && e6.push(X(t4));
      return e6;
    }
    static _$Eh(t4, e6) {
      let i5 = e6.attribute;
      return i5 === false ? void 0 : typeof i5 == "string" ? i5 : typeof t4 == "string" ? t4.toLowerCase() : void 0;
    }
    o() {
      var t4;
      this._$Ep = new Promise((e6) => this.enableUpdating = e6), this._$AL = new Map(), this._$Em(), this.requestUpdate(), (t4 = this.constructor.l) === null || t4 === void 0 || t4.forEach((e6) => e6(this));
    }
    addController(t4) {
      var e6, i5;
      ((e6 = this._$Eg) !== null && e6 !== void 0 ? e6 : this._$Eg = []).push(t4), this.renderRoot !== void 0 && this.isConnected && ((i5 = t4.hostConnected) === null || i5 === void 0 || i5.call(t4));
    }
    removeController(t4) {
      var e6;
      (e6 = this._$Eg) === null || e6 === void 0 || e6.splice(this._$Eg.indexOf(t4) >>> 0, 1);
    }
    _$Em() {
      this.constructor.elementProperties.forEach((t4, e6) => {
        this.hasOwnProperty(e6) && (this._$Et.set(e6, this[e6]), delete this[e6]);
      });
    }
    createRenderRoot() {
      var t4;
      let e6 = (t4 = this.shadowRoot) !== null && t4 !== void 0 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
      return vt(e6, this.constructor.elementStyles), e6;
    }
    connectedCallback() {
      var t4;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((e6) => {
        var i5;
        return (i5 = e6.hostConnected) === null || i5 === void 0 ? void 0 : i5.call(e6);
      });
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      var t4;
      (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((e6) => {
        var i5;
        return (i5 = e6.hostDisconnected) === null || i5 === void 0 ? void 0 : i5.call(e6);
      });
    }
    attributeChangedCallback(t4, e6, i5) {
      this._$AK(t4, i5);
    }
    _$ES(t4, e6, i5 = yt) {
      var s6, r4;
      let o5 = this.constructor._$Eh(t4, i5);
      if (o5 !== void 0 && i5.reflect === true) {
        let a4 = ((r4 = (s6 = i5.converter) === null || s6 === void 0 ? void 0 : s6.toAttribute) !== null && r4 !== void 0 ? r4 : bt.toAttribute)(e6, i5.type);
        this._$Ei = t4, a4 == null ? this.removeAttribute(o5) : this.setAttribute(o5, a4), this._$Ei = null;
      }
    }
    _$AK(t4, e6) {
      var i5, s6, r4;
      let o5 = this.constructor, a4 = o5._$Eu.get(t4);
      if (a4 !== void 0 && this._$Ei !== a4) {
        let l4 = o5.getPropertyOptions(a4), d2 = l4.converter, u4 = (r4 = (s6 = (i5 = d2) === null || i5 === void 0 ? void 0 : i5.fromAttribute) !== null && s6 !== void 0 ? s6 : typeof d2 == "function" ? d2 : null) !== null && r4 !== void 0 ? r4 : bt.fromAttribute;
        this._$Ei = a4, this[a4] = u4(e6, l4.type), this._$Ei = null;
      }
    }
    requestUpdate(t4, e6, i5) {
      let s6 = true;
      t4 !== void 0 && (((i5 = i5 || this.constructor.getPropertyOptions(t4)).hasChanged || Dt)(this[t4], e6) ? (this._$AL.has(t4) || this._$AL.set(t4, e6), i5.reflect === true && this._$Ei !== t4 && (this._$EC === void 0 && (this._$EC = new Map()), this._$EC.set(t4, i5))) : s6 = false), !this.isUpdatePending && s6 && (this._$Ep = this._$E_());
    }
    async _$E_() {
      this.isUpdatePending = true;
      try {
        await this._$Ep;
      } catch (e6) {
        Promise.reject(e6);
      }
      let t4 = this.scheduleUpdate();
      return t4 != null && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t4;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Et && (this._$Et.forEach((s6, r4) => this[r4] = s6), this._$Et = void 0);
      let e6 = false, i5 = this._$AL;
      try {
        e6 = this.shouldUpdate(i5), e6 ? (this.willUpdate(i5), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((s6) => {
          var r4;
          return (r4 = s6.hostUpdate) === null || r4 === void 0 ? void 0 : r4.call(s6);
        }), this.update(i5)) : this._$EU();
      } catch (s6) {
        throw e6 = false, this._$EU(), s6;
      }
      e6 && this._$AE(i5);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      var e6;
      (e6 = this._$Eg) === null || e6 === void 0 || e6.forEach((i5) => {
        var s6;
        return (s6 = i5.hostUpdated) === null || s6 === void 0 ? void 0 : s6.call(i5);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$EU() {
      this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Ep;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$EC !== void 0 && (this._$EC.forEach((e6, i5) => this._$ES(i5, this[i5], e6)), this._$EC = void 0), this._$EU();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  }, "$");
  c($, "a");
  $.finalized = true, $.elementProperties = new Map(), $.elementStyles = [], $.shadowRootOptions = { mode: "open" }, Ot == null || Ot({ ReactiveElement: $ }), ((xt = globalThis.reactiveElementVersions) !== null && xt !== void 0 ? xt : globalThis.reactiveElementVersions = []).push("1.3.0");
  var $t;
  var U = globalThis.trustedTypes;
  var jt = U ? U.createPolicy("lit-html", { createHTML: (n5) => n5 }) : void 0;
  var _ = `lit$${(Math.random() + "").slice(9)}$`;
  var Vt = "?" + _;
  var ge = `<${Vt}>`;
  var R = document;
  var q = c((n5 = "") => R.createComment(n5), "h");
  var G = c((n5) => n5 === null || typeof n5 != "object" && typeof n5 != "function", "r");
  var zt = Array.isArray;
  var ve = c((n5) => {
    var t4;
    return zt(n5) || typeof ((t4 = n5) === null || t4 === void 0 ? void 0 : t4[Symbol.iterator]) == "function";
  }, "u");
  var W = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var Bt = /-->/g;
  var qt = />/g;
  var k = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
  var Gt = /'/g;
  var Wt = /"/g;
  var Kt = /^(?:script|style|textarea|title)$/i;
  var Ft = c((n5) => (t4, ...e6) => ({ _$litType$: n5, strings: t4, values: e6 }), "p");
  var g = Ft(1);
  var Ue = Ft(2);
  var x = Symbol.for("lit-noChange");
  var m = Symbol.for("lit-nothing");
  var Yt = new WeakMap();
  var Zt = c((n5, t4, e6) => {
    var i5, s6;
    let r4 = (i5 = e6 == null ? void 0 : e6.renderBefore) !== null && i5 !== void 0 ? i5 : t4, o5 = r4._$litPart$;
    if (o5 === void 0) {
      let a4 = (s6 = e6 == null ? void 0 : e6.renderBefore) !== null && s6 !== void 0 ? s6 : null;
      r4._$litPart$ = o5 = new P(t4.insertBefore(q(), a4), a4, void 0, e6 ?? {});
    }
    return o5._$AI(n5), o5;
  }, "x");
  var L = R.createTreeWalker(R, 129, null, false);
  var xe = c((n5, t4) => {
    let e6 = n5.length - 1, i5 = [], s6, r4 = t4 === 2 ? "<svg>" : "", o5 = W;
    for (let l4 = 0; l4 < e6; l4++) {
      let d2 = n5[l4], u4, h3, p2 = -1, f3 = 0;
      for (; f3 < d2.length && (o5.lastIndex = f3, h3 = o5.exec(d2), h3 !== null); )
        f3 = o5.lastIndex, o5 === W ? h3[1] === "!--" ? o5 = Bt : h3[1] !== void 0 ? o5 = qt : h3[2] !== void 0 ? (Kt.test(h3[2]) && (s6 = RegExp("</" + h3[2], "g")), o5 = k) : h3[3] !== void 0 && (o5 = k) : o5 === k ? h3[0] === ">" ? (o5 = s6 ?? W, p2 = -1) : h3[1] === void 0 ? p2 = -2 : (p2 = o5.lastIndex - h3[2].length, u4 = h3[1], o5 = h3[3] === void 0 ? k : h3[3] === '"' ? Wt : Gt) : o5 === Wt || o5 === Gt ? o5 = k : o5 === Bt || o5 === qt ? o5 = W : (o5 = k, s6 = void 0);
      let b2 = o5 === k && n5[l4 + 1].startsWith("/>") ? " " : "";
      r4 += o5 === W ? d2 + ge : p2 >= 0 ? (i5.push(u4), d2.slice(0, p2) + "$lit$" + d2.slice(p2) + _ + b2) : d2 + _ + (p2 === -2 ? (i5.push(void 0), l4) : b2);
    }
    let a4 = r4 + (n5[e6] || "<?>") + (t4 === 2 ? "</svg>" : "");
    if (!Array.isArray(n5) || !n5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [jt !== void 0 ? jt.createHTML(a4) : a4, i5];
  }, "C");
  var T = /* @__PURE__ */ __name(class {
    constructor({ strings: t4, _$litType$: e6 }, i5) {
      let s6;
      this.parts = [];
      let r4 = 0, o5 = 0, a4 = t4.length - 1, l4 = this.parts, [d2, u4] = xe(t4, e6);
      if (this.el = T.createElement(d2, i5), L.currentNode = this.el.content, e6 === 2) {
        let h3 = this.el.content, p2 = h3.firstChild;
        p2.remove(), h3.append(...p2.childNodes);
      }
      for (; (s6 = L.nextNode()) !== null && l4.length < a4; ) {
        if (s6.nodeType === 1) {
          if (s6.hasAttributes()) {
            let h3 = [];
            for (let p2 of s6.getAttributeNames())
              if (p2.endsWith("$lit$") || p2.startsWith(_)) {
                let f3 = u4[o5++];
                if (h3.push(p2), f3 !== void 0) {
                  let b2 = s6.getAttribute(f3.toLowerCase() + "$lit$").split(_), H2 = /([.?@])?(.*)/.exec(f3);
                  l4.push({ type: 1, index: r4, name: H2[2], strings: b2, ctor: H2[1] === "." ? At : H2[1] === "?" ? Et : H2[1] === "@" ? wt : D });
                } else
                  l4.push({ type: 6, index: r4 });
              }
            for (let p2 of h3)
              s6.removeAttribute(p2);
          }
          if (Kt.test(s6.tagName)) {
            let h3 = s6.textContent.split(_), p2 = h3.length - 1;
            if (p2 > 0) {
              s6.textContent = U ? U.emptyScript : "";
              for (let f3 = 0; f3 < p2; f3++)
                s6.append(h3[f3], q()), L.nextNode(), l4.push({ type: 2, index: ++r4 });
              s6.append(h3[p2], q());
            }
          }
        } else if (s6.nodeType === 8)
          if (s6.data === Vt)
            l4.push({ type: 2, index: r4 });
          else {
            let h3 = -1;
            for (; (h3 = s6.data.indexOf(_, h3 + 1)) !== -1; )
              l4.push({ type: 7, index: r4 }), h3 += _.length - 1;
          }
        r4++;
      }
    }
    static createElement(t4, e6) {
      let i5 = R.createElement("template");
      return i5.innerHTML = t4, i5;
    }
  }, "T");
  c(T, "E");
  function O(n5, t4, e6 = n5, i5) {
    var s6, r4, o5, a4;
    if (t4 === x)
      return t4;
    let l4 = i5 !== void 0 ? (s6 = e6._$Cl) === null || s6 === void 0 ? void 0 : s6[i5] : e6._$Cu, d2 = G(t4) ? void 0 : t4._$litDirective$;
    return (l4 == null ? void 0 : l4.constructor) !== d2 && ((r4 = l4 == null ? void 0 : l4._$AO) === null || r4 === void 0 || r4.call(l4, false), d2 === void 0 ? l4 = void 0 : (l4 = new d2(n5), l4._$AT(n5, e6, i5)), i5 !== void 0 ? ((o5 = (a4 = e6)._$Cl) !== null && o5 !== void 0 ? o5 : a4._$Cl = [])[i5] = l4 : e6._$Cu = l4), l4 !== void 0 && (t4 = O(n5, l4._$AS(n5, t4.values), l4, i5)), t4;
  }
  __name(O, "O");
  c(O, "P");
  var _t = /* @__PURE__ */ __name(class {
    constructor(t4, e6) {
      this.v = [], this._$AN = void 0, this._$AD = t4, this._$AM = e6;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t4) {
      var e6;
      let { el: { content: i5 }, parts: s6 } = this._$AD, r4 = ((e6 = t4 == null ? void 0 : t4.creationScope) !== null && e6 !== void 0 ? e6 : R).importNode(i5, true);
      L.currentNode = r4;
      let o5 = L.nextNode(), a4 = 0, l4 = 0, d2 = s6[0];
      for (; d2 !== void 0; ) {
        if (a4 === d2.index) {
          let u4;
          d2.type === 2 ? u4 = new P(o5, o5.nextSibling, this, t4) : d2.type === 1 ? u4 = new d2.ctor(o5, d2.name, d2.strings, this, t4) : d2.type === 6 && (u4 = new Ct(o5, this, t4)), this.v.push(u4), d2 = s6[++l4];
        }
        a4 !== (d2 == null ? void 0 : d2.index) && (o5 = L.nextNode(), a4++);
      }
      return r4;
    }
    m(t4) {
      let e6 = 0;
      for (let i5 of this.v)
        i5 !== void 0 && (i5.strings !== void 0 ? (i5._$AI(t4, i5, e6), e6 += i5.strings.length - 2) : i5._$AI(t4[e6])), e6++;
    }
  }, "_t");
  c(_t, "V");
  var P = /* @__PURE__ */ __name(class {
    constructor(t4, e6, i5, s6) {
      var r4;
      this.type = 2, this._$AH = m, this._$AN = void 0, this._$AA = t4, this._$AB = e6, this._$AM = i5, this.options = s6, this._$Cg = (r4 = s6 == null ? void 0 : s6.isConnected) === null || r4 === void 0 || r4;
    }
    get _$AU() {
      var t4, e6;
      return (e6 = (t4 = this._$AM) === null || t4 === void 0 ? void 0 : t4._$AU) !== null && e6 !== void 0 ? e6 : this._$Cg;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode, e6 = this._$AM;
      return e6 !== void 0 && t4.nodeType === 11 && (t4 = e6.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, e6 = this) {
      t4 = O(this, t4, e6), G(t4) ? t4 === m || t4 == null || t4 === "" ? (this._$AH !== m && this._$AR(), this._$AH = m) : t4 !== this._$AH && t4 !== x && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.k(t4) : ve(t4) ? this.S(t4) : this.$(t4);
    }
    A(t4, e6 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t4, e6);
    }
    k(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.A(t4));
    }
    $(t4) {
      this._$AH !== m && G(this._$AH) ? this._$AA.nextSibling.data = t4 : this.k(R.createTextNode(t4)), this._$AH = t4;
    }
    T(t4) {
      var e6;
      let { values: i5, _$litType$: s6 } = t4, r4 = typeof s6 == "number" ? this._$AC(t4) : (s6.el === void 0 && (s6.el = T.createElement(s6.h, this.options)), s6);
      if (((e6 = this._$AH) === null || e6 === void 0 ? void 0 : e6._$AD) === r4)
        this._$AH.m(i5);
      else {
        let o5 = new _t(r4, this), a4 = o5.p(this.options);
        o5.m(i5), this.k(a4), this._$AH = o5;
      }
    }
    _$AC(t4) {
      let e6 = Yt.get(t4.strings);
      return e6 === void 0 && Yt.set(t4.strings, e6 = new T(t4)), e6;
    }
    S(t4) {
      zt(this._$AH) || (this._$AH = [], this._$AR());
      let e6 = this._$AH, i5, s6 = 0;
      for (let r4 of t4)
        s6 === e6.length ? e6.push(i5 = new P(this.A(q()), this.A(q()), this, this.options)) : i5 = e6[s6], i5._$AI(r4), s6++;
      s6 < e6.length && (this._$AR(i5 && i5._$AB.nextSibling, s6), e6.length = s6);
    }
    _$AR(t4 = this._$AA.nextSibling, e6) {
      var i5;
      for ((i5 = this._$AP) === null || i5 === void 0 || i5.call(this, false, true, e6); t4 && t4 !== this._$AB; ) {
        let s6 = t4.nextSibling;
        t4.remove(), t4 = s6;
      }
    }
    setConnected(t4) {
      var e6;
      this._$AM === void 0 && (this._$Cg = t4, (e6 = this._$AP) === null || e6 === void 0 || e6.call(this, t4));
    }
  }, "P");
  c(P, "N");
  var D = /* @__PURE__ */ __name(class {
    constructor(t4, e6, i5, s6, r4) {
      this.type = 1, this._$AH = m, this._$AN = void 0, this.element = t4, this.name = e6, this._$AM = s6, this.options = r4, i5.length > 2 || i5[0] !== "" || i5[1] !== "" ? (this._$AH = Array(i5.length - 1).fill(new String()), this.strings = i5) : this._$AH = m;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4, e6 = this, i5, s6) {
      let r4 = this.strings, o5 = false;
      if (r4 === void 0)
        t4 = O(this, t4, e6, 0), o5 = !G(t4) || t4 !== this._$AH && t4 !== x, o5 && (this._$AH = t4);
      else {
        let a4 = t4, l4, d2;
        for (t4 = r4[0], l4 = 0; l4 < r4.length - 1; l4++)
          d2 = O(this, a4[i5 + l4], e6, l4), d2 === x && (d2 = this._$AH[l4]), o5 || (o5 = !G(d2) || d2 !== this._$AH[l4]), d2 === m ? t4 = m : t4 !== m && (t4 += (d2 ?? "") + r4[l4 + 1]), this._$AH[l4] = d2;
      }
      o5 && !s6 && this.C(t4);
    }
    C(t4) {
      t4 === m ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  }, "D");
  c(D, "S");
  var At = /* @__PURE__ */ __name(class extends D {
    constructor() {
      super(...arguments), this.type = 3;
    }
    C(t4) {
      this.element[this.name] = t4 === m ? void 0 : t4;
    }
  }, "At");
  c(At, "M");
  var be = U ? U.emptyScript : "";
  var Et = /* @__PURE__ */ __name(class extends D {
    constructor() {
      super(...arguments), this.type = 4;
    }
    C(t4) {
      t4 && t4 !== m ? this.element.setAttribute(this.name, be) : this.element.removeAttribute(this.name);
    }
  }, "Et");
  c(Et, "H");
  var wt = /* @__PURE__ */ __name(class extends D {
    constructor(t4, e6, i5, s6, r4) {
      super(t4, e6, i5, s6, r4), this.type = 5;
    }
    _$AI(t4, e6 = this) {
      var i5;
      if ((t4 = (i5 = O(this, t4, e6, 0)) !== null && i5 !== void 0 ? i5 : m) === x)
        return;
      let s6 = this._$AH, r4 = t4 === m && s6 !== m || t4.capture !== s6.capture || t4.once !== s6.once || t4.passive !== s6.passive, o5 = t4 !== m && (s6 === m || r4);
      r4 && this.element.removeEventListener(this.name, this, s6), o5 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      var e6, i5;
      typeof this._$AH == "function" ? this._$AH.call((i5 = (e6 = this.options) === null || e6 === void 0 ? void 0 : e6.host) !== null && i5 !== void 0 ? i5 : this.element, t4) : this._$AH.handleEvent(t4);
    }
  }, "wt");
  c(wt, "I");
  var Ct = /* @__PURE__ */ __name(class {
    constructor(t4, e6, i5) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = e6, this.options = i5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      O(this, t4);
    }
  }, "Ct");
  c(Ct, "L");
  var Qt = window.litHtmlPolyfillSupport;
  Qt == null || Qt(T, P), (($t = globalThis.litHtmlVersions) !== null && $t !== void 0 ? $t : globalThis.litHtmlVersions = []).push("2.2.0");
  var St;
  var kt;
  var A = /* @__PURE__ */ __name(class extends $ {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
    }
    createRenderRoot() {
      var t4, e6;
      let i5 = super.createRenderRoot();
      return (t4 = (e6 = this.renderOptions).renderBefore) !== null && t4 !== void 0 || (e6.renderBefore = i5.firstChild), i5;
    }
    update(t4) {
      let e6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Dt = Zt(e6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t4;
      super.connectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(true);
    }
    disconnectedCallback() {
      var t4;
      super.disconnectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(false);
    }
    render() {
      return x;
    }
  }, "A");
  c(A, "s");
  A.finalized = true, A._$litElement$ = true, (St = globalThis.litElementHydrateSupport) === null || St === void 0 || St.call(globalThis, { LitElement: A });
  var Jt = globalThis.litElementPolyfillSupport;
  Jt == null || Jt({ LitElement: A });
  ((kt = globalThis.litElementVersions) !== null && kt !== void 0 ? kt : globalThis.litElementVersions = []).push("3.2.0");
  var tt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var K = c((n5) => (...t4) => ({ _$litDirective$: n5, values: t4 }), "e");
  var j = /* @__PURE__ */ __name(class {
    constructor(t4) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t4, e6, i5) {
      this._$Ct = t4, this._$AM = e6, this._$Ci = i5;
    }
    _$AS(t4, e6) {
      return this.update(t4, e6);
    }
    update(t4, e6) {
      return this.render(...e6);
    }
  }, "j");
  c(j, "i");
  var F = /* @__PURE__ */ __name(class extends j {
    constructor(t4) {
      if (super(t4), this.it = m, t4.type !== tt.CHILD)
        throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(t4) {
      if (t4 === m || t4 == null)
        return this.ft = void 0, this.it = t4;
      if (t4 === x)
        return t4;
      if (typeof t4 != "string")
        throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (t4 === this.it)
        return this.ft;
      this.it = t4;
      let e6 = [t4];
      return e6.raw = e6, this.ft = { _$litType$: this.constructor.resultType, strings: e6, values: [] };
    }
  }, "F");
  c(F, "e");
  F.directiveName = "unsafeHTML", F.resultType = 1;
  var Ye = K(F);
  var I = /* @__PURE__ */ __name(class {
    static isUrl(t4) {
      try {
        return typeof t4 != "string" || t4.indexOf(`
`) !== -1 || t4.indexOf(" ") !== -1 || t4.startsWith("#/") ? false : (new URL(t4, window.location.origin), true);
      } catch (e6) {
      }
      return false;
    }
    static parseHTML(t4) {
      return new DOMParser().parseFromString(t4, "text/html").body.firstChild;
    }
    static throttle(t4, e6 = 500) {
      var i5, s6 = c(function(r4) {
        i5 && clearTimeout(i5), i5 = setTimeout(t4, e6, r4);
      }, "throttledListener");
      return s6;
    }
    static objectEquals(t4, e6) {
      if (t4 == null || e6 === null || e6 === void 0)
        return t4 === e6;
      if (t4.constructor !== e6.constructor)
        return false;
      if (t4 instanceof Function || t4 instanceof RegExp)
        return t4 === e6;
      if (t4 === e6 || t4.valueOf() === e6.valueOf())
        return true;
      if (Array.isArray(t4) && t4.length !== e6.length || t4 instanceof Date || !(t4 instanceof Object) || !(e6 instanceof Object))
        return false;
      var i5 = Object.keys(t4);
      return Object.keys(e6).every(function(s6) {
        return i5.indexOf(s6) !== -1;
      }) && i5.every(function(s6) {
        return I.objectEquals(t4[s6], e6[s6]);
      });
    }
    static equals(t4, e6) {
      return Array.isArray(t4) ? I.arrayEquals(t4, e6) : typeof t4 == "object" ? I.objectEquals(t4, e6) : t4 === e6;
    }
    static arrayEquals(t4, e6) {
      return Array.isArray(t4) && Array.isArray(e6) && t4.length === e6.length && t4.every((i5, s6) => i5 === e6[s6]);
    }
    static scopeEval(t4, e6) {
      return Function('"use strict";' + e6).bind(t4)();
    }
  }, "I");
  c(I, "Util");
  var E = I;
  var Tt = /* @__PURE__ */ __name(class {
    constructor(t4, e6, i5) {
      v(this, "cssClasses", { result: "xo-ac-rs", item: "xo-ac-itm" });
      if (this.settings = i5, this.control = t4, this.htmlElement = e6, this.htmlElement.setAttribute("autocomplete", "off"), this.categories = i5.categories || {}, !i5.items)
        throw TypeError("Must pass items array, function or promise in autocomplete settings");
      this.items = i5.items;
    }
    attach() {
      var e6;
      let t4 = c((i5, s6) => {
        this.htmlElement.addEventListener(i5, s6);
      }, "on");
      t4("input", this.inputHandler.bind(this)), t4("click", this.clickHandler.bind(this)), t4("focusout", this.blurHandler.bind(this)), t4("keyup", this.keyUpHandler.bind(this)), t4("keydown", this.keyDownHandler.bind(this)), this.resultsDiv = document.createElement("div"), this.resultsDiv.title = "", this.resultsDiv.classList.add(this.cssClasses.result), this.resultsDiv.addEventListener("mousedown", this.resultClick.bind(this)), this.control.shadowRoot.querySelector(".xo-in").appendChild(this.resultsDiv), this.clear(), (e6 = this.control.shadowRoot.querySelector(".xo-cn")) == null || e6.setAttribute("data-autocomplete", "on");
    }
    moveResult(t4) {
      this.show();
      let e6 = this.resultsDiv.querySelectorAll("div"), i5 = e6.length;
      this.rowIndex = this.rowIndex + t4, this.rowIndex <= 0 ? this.rowIndex = 0 : this.rowIndex > i5 - 1 && (this.rowIndex = 0), e6.forEach((r4) => {
        r4.classList.remove("selected");
      });
      let s6 = this.getSelectedDiv();
      s6 ? (s6.classList.add("selected"), s6.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })) : this.clickHandler({ target: this.htmlElement });
    }
    getSelectedDiv() {
      return this.resultsDiv.querySelector(`div:nth-child(${this.rowIndex + 1})`);
    }
    selectResult(t4) {
      if (t4 = t4 || this.getSelectedDiv(), t4) {
        let e6 = parseInt(t4.getAttribute("data-index"));
        this.resultClicked = true;
        let i5 = this.results[e6], s6 = this.categories[i5.category] || { action: this.setText.bind(this) };
        s6.newTab && (this.tabWindow = window.open("about:blank", "_blank"));
        let r4 = Z(N({}, i5), { search: this.htmlElement.value });
        t4.classList.add("active"), setTimeout(() => {
          s6.action(r4), s6.newTab && (r4.url ? this.tabWindow.location.href = r4.url : this.tabWindow.close());
          var o5 = new Event("change", { bubbles: true });
          this.control.dispatchEvent(o5), this.clear();
          let a4 = new Event("result-selected", { bubbles: false });
          a4.detail = { text: r4.text }, this.htmlElement.dispatchEvent(a4);
        }, 0);
      }
    }
    setText(t4) {
      this.control.autoCompleteInput || (this.control.value = t4.text), this.hide();
    }
    resultClick(t4) {
      this.selectResult(t4.target.closest(`.${this.cssClasses.item}`));
    }
    set categories(t4) {
      this._categories = t4;
    }
    get categories() {
      return this._categories || {};
    }
    blurHandler(t4) {
      setTimeout(() => {
        this.resultClicked || this.clear(), this.resultClicked = false;
      }, 100);
    }
    clear() {
      this.resultsDiv.innerHTML = "", this.resultsDiv.style.display = "none";
    }
    show() {
      this.resultsDiv.style.display !== "block" && (this.resultsDiv.style.display = "block", this.rowIndex = -1);
    }
    hide() {
      this.resultsDiv.style.display = "none";
    }
    inputHandler(t4) {
      this.clear();
      let e6 = { search: t4.target.value, categories: this.categories };
      this.getItems(e6, t4).then((i5) => {
        this.clear(), this.resultsHandler(i5, e6);
      });
    }
    keyDownHandler(t4) {
      switch (t4.keyCode) {
        case 13:
          t4.stopPropagation(), t4.preventDefault();
          break;
        case 40:
        case 38:
          t4.preventDefault();
      }
    }
    keyUpHandler(t4) {
      switch (t4.keyCode) {
        case 40:
          this.moveResult(1);
          break;
        case 38:
          this.moveResult(-1);
          break;
        case 27:
          this.hide();
          break;
        case 13:
          this.getSelectedDiv() && (this.control.preventEnter = true, t4.stopPropagation(), t4.preventDefault(), this.selectResult(), setTimeout(() => {
            this.control.preventEnter = false;
          }, 10));
          break;
        default:
          break;
      }
    }
    clickHandler(t4) {
      this.clear();
      let e6 = t4.target.value;
      this.suggest(e6, t4);
    }
    suggest(t4, e6) {
      this.htmlElement.focus();
      let i5 = { suggest: true, search: t4 || "", categories: this.categories };
      this.getItems(i5, e6).then((s6) => {
        this.resultsHandler(s6, i5);
      });
    }
    resultsHandler(t4, e6) {
      this.results = t4, this.rowIndex = -1;
      let i5 = 0;
      t4.forEach((s6) => {
        let r4 = null, o5 = e6.categories[s6.category] || {};
        s6.image && (s6.icon = "xo-ac-img", r4 = `style="background-image: url('${s6.image}')"`), s6.element ? this.resultsDiv.appendChild(s6.element) : (s6 = typeof s6 == "string" ? { text: s6 } : s6, this.resultsDiv.appendChild(E.parseHTML(`<div title="${s6.tooltip || ""}" data-index="${i5}" class="${this.cssClasses.item}">
                            <span ${r4} class="${s6.icon || o5.icon}"></span>
                            <span class="text">${this.formatResultItem(s6, e6, o5)}</span>
                            <span class="category">${s6.category || ""}</span></div>`))), i5++;
      }), t4.length && this.show();
    }
    formatResultItem(t4, e6, i5) {
      var r4;
      t4 = typeof t4 == "string" ? { text: t4 } : t4;
      let s6 = t4.text;
      return e6.search && (s6 = s6.replace("%search%", e6.search), t4.description = (r4 = t4.description) == null ? void 0 : r4.replace("%search%", e6.search)), s6 = this.highlight(s6, e6.search), t4.description && (s6 = `<div>${s6}</div><small>${t4.description}</small>`), i5.format && (s6 = i5.format({ item: t4, result: s6, options: e6 })), s6;
    }
    highlight(t4, e6) {
      var i5 = new RegExp("(" + e6 + ")", "gi");
      return t4.replace(i5, '<span class="txt-hl">$1</span>');
    }
    getItems(t4, e6) {
      return Q(this, null, function* () {
        let i5 = this.settings.map, s6 = c((o5) => i5 ? o5.map((a4) => ({ text: a4[i5] })) : o5, "map"), r4 = c((o5) => (this.settings.max && this.settings.max > 0 && (o5.length = this.settings.max), o5), "max");
        return new Promise((o5) => {
          if (E.isUrl(this.items)) {
            if (this.settings.minlength > 0 && (!t4.search || t4.search.length < this.settings.minlength)) {
              o5([]);
              return;
            }
            let a4 = this.formatSearch(this.items, t4);
            fetch(a4).then((l4) => {
              if (l4.status === 200) {
                l4.json().then((d2) => {
                  d2 = s6(d2), o5(r4(d2.filter((u4) => this.isMatch(t4, u4))));
                });
                return;
              }
              throw Error(`HTTP error ${l4.status} - ${a4}`);
            });
          } else if (Array.isArray(this.items)) {
            let a4 = true;
            this.items = this.items.map((l4) => typeof l4 == "string" ? { text: l4 } : (a4 = false, l4)), a4 && this.control.classList.add("simple"), o5(r4(s6(this.items.filter((l4) => this.isMatch(t4, l4)))));
          } else if (typeof this.items == "function")
            o5(s6(this.items(t4, e6)));
          else {
            debugger;
            return o5(Promise.resolve(this.items.apply(this, t4)));
          }
        });
      });
    }
    formatSearch(t4, e6) {
      return t4.indexOf("%search%") ? t4.replace("%search%", e6.search || "") : t4 + "?" + this.createQueryParam(e6);
    }
    createQueryParam(t4) {
      let e6 = t4.suggest ? "&suggest=true" : "";
      return `q=${t4.text}${e6}`;
    }
    isMatch(t4, e6) {
      var i5, s6;
      return ((i5 = e6.text) == null ? void 0 : i5.indexOf("%search%")) >= 0 ? true : t4.search ? ((s6 = e6.text) == null ? void 0 : s6.toLowerCase().indexOf(t4.search.toLowerCase())) >= 0 : t4.suggest;
    }
  }, "Tt");
  c(Tt, "AutoComplete");
  var Xt = Tt;
  var ye = ["type", "label", "bind", "classes"];
  var $e = 1e3;
  var _e = c(() => `xo${($e++).toString(16)}`, "getUniqueName");
  var w = {};
  var y = /* @__PURE__ */ __name(class {
    constructor(t4) {
      this._context = t4;
    }
    get context() {
      return this._context;
    }
    mapProperties(t4, e6, i5) {
      let s6 = t4.nestedElement, r4 = true;
      if (typeof e6 == "string") {
        let o5 = e6;
        e6 = {}, e6[o5] = i5, r4 = false;
      } else
        t4.beforeMap && t4.beforeMap();
      e6.id || (e6.id = _e()), e6.name || (e6.name = e6.id), r4 && this.context.data.processBindings(t4, e6);
      for (let o5 in e6) {
        if (o5 === "type")
          continue;
        let a4 = this.getCurrentValue(t4, e6, o5);
        t4[o5] = a4;
        let l4 = y.camelCaseToHyphen(o5);
        if (s6)
          if (y.elementSupportsProperty(s6, o5))
            s6[o5] = a4 != null ? a4 : "";
          else {
            if (y.isReservedProperty(o5))
              continue;
            y.elementSupportsAttribute(s6, l4) ? s6.setAttribute(l4, a4) : s6.setAttribute("data-" + l4, a4);
          }
      }
      if (s6 instanceof HTMLSelectElement)
        y.importItems(s6, e6.items);
      else if (s6 instanceof HTMLButtonElement || s6 instanceof HTMLAnchorElement) {
        typeof e6.label != "undefined" && (s6.innerText = e6.label);
        let o5 = c((a4, l4) => {
          let d2 = a4;
          if (d2.nodeType === 11 ? d2 = d2.host : d2 = d2.parentNode, !!d2)
            return l4(d2) ? d2 : o5(d2, l4);
        }, "getParent");
        e6.click && s6.addEventListener("click", (a4) => {
          a4.preventDefault(), a4.stopPropagation();
          let l4 = a4.path[0], d2 = o5(l4, (p2) => p2.nodeName === "XO-REPEAT"), u4 = -1;
          d2 && [...d2.childNodes].forEach((p2) => {
            u4 === -1 && o5(l4, (f3) => {
              let b2 = f3.getAttribute ? f3.getAttribute("data-index") : null;
              b2 && (u4 = parseInt(b2) - 1);
            });
          });
          let h3 = { target: a4.target, path: a4.path, detail: { repeat: d2, index: u4 } };
          e6.click(h3);
        });
      }
    }
    getCurrentValue(t4, e6, i5) {
      if (["type", "bind"].includes(i5))
        return e6[i5];
      let s6, r4 = 0;
      if (t4.data && t4.data[i5]) {
        let o5 = y.match(t4.data[i5], (a4) => (r4++, s6 = this.context.data.get(a4), s6));
        return r4 === 1 && typeof s6 != "undefined" && s6.toString().length === o5.length ? s6 : o5;
      }
      return e6[i5];
    }
    static isReservedProperty(t4) {
      return ye.includes(t4);
    }
    static match(t4, e6) {
      let i5 = t4;
      return typeof t4 != "string" || t4.length < 5 ? t4 : t4.replace(/(#\/[A-Za-z_]+[A-Za-z_0-9\/@]*[A-Za-z_]+[A-Za-z_0-9]*)(?=[\s+\/*,.?!;'")]|$)/gm, (s6, r4, o5) => e6(r4, i5));
    }
    replaceVar(t4, e6, i5) {
      let s6 = this, r4 = false, o5, a4 = y.match(t4.rawValue, (l4, d2) => (d2 !== l4 && (r4 = true), o5 = s6.context.data.get(l4), o5));
      return r4 ? a4 : o5;
    }
    static importItems(t4, e6 = []) {
      for (let i5 of e6) {
        let s6 = document.createElement("option");
        s6.value = i5.value || i5, s6.innerText = i5.label || i5, t4.appendChild(s6);
      }
    }
    tryAutoComplete(t4, e6, i5) {
      i5 && i5.items && new Xt(t4, e6, i5).attach(t4);
    }
    static camelCaseToHyphen(t4) {
      return t4.replace(/[A-Z]/g, (e6) => "-" + e6.toLowerCase());
    }
    static elementSupportsAttribute(t4, e6) {
      var i5 = document.createElement(t4.nodeName.toLowerCase());
      return e6 in i5 || ["role", "readonly", "maxlength"].includes(e6) || e6.startsWith("aria-");
    }
    static elementSupportsProperty(t4, e6) {
      let i5 = t4.nodeName.toLowerCase();
      return w[i5] || (w[i5] = [], w[i5] = Object.getOwnPropertyNames(Object.getPrototypeOf(t4)), w[i5] = [...w[i5], ...Object.getOwnPropertyNames(HTMLElement.prototype)], w[i5] = [...new Set(w[i5])]), w[i5].includes(e6);
    }
  }, "y");
  c(y, "PropertyMapper");
  var V = y;
  var Ae = c((n5, t4) => {
    if (E.equals(n5, t4))
      return !(Array.isArray(n5) && t4.length === 0);
  }, "isIrelevantChange");
  var Pt = /* @__PURE__ */ __name(class {
    constructor(t4) {
      v(this, "instance", {});
      v(this, "bound", {});
      v(this, "rules", {});
      if (!t4)
        throw Error("Missing context");
      let e6 = this;
      this._context = t4, this.context.form.addEventListener("interaction", (i5) => {
        var s6, r4;
        i5.detail.source.bind ? e6.set(this.processBindingIndex(i5.detail.source, i5.detail.source.bind), i5.detail.value) : ((s6 = i5.detail.control) == null ? void 0 : s6.bind) && e6.set(this.processBindingIndex(i5.detail.control, (r4 = i5.detail.control) == null ? void 0 : r4.bind), i5.detail.value);
      });
    }
    initialize(t4 = {}, e6 = {}) {
      let i5 = this;
      this.options = e6;
      let s6 = c((r4, o5, a4) => (a4 = a4 || r4, new Proxy(o5, { get: function(l4, d2) {
        return ["[object Object]", "[object Array]"].indexOf(Object.prototype.toString.call(l4[d2])) > -1 ? s6(r4, l4[d2], a4 + "/" + d2) : l4[d2];
      }, set: function(l4, d2, u4) {
        if (Ae(l4[d2], u4))
          return true;
        let h3 = "#/" + a4 + "/" + d2;
        l4[d2] = u4, u4 = i5.applyRules(h3, u4);
        let p2 = i5.matchArrays(h3);
        return i5.bound[p2] && i5.bound[p2].forEach((f3) => {
          let b2 = f3.property === "bind" ? "value" : f3.property, H2 = i5.context.mapper.replaceVar(f3, b2, u4);
          i5.context.mapper.mapProperties(f3.control, b2, H2), console.debug(`Set property '${b2}' on ${f3.control} to`, u4);
        }), i5.context.form.emit("modelchange", { model: t4 }), true;
      } })), "proxify");
      i5.schemaModel = N({ instance: {} }, t4), this.addBuiltinModelState(), Object.entries(i5.schemaModel.instance).forEach((r4) => {
        let o5 = r4[0];
        this.instance[o5] = s6(o5, r4[1]);
      }), Object.entries(i5.schemaModel.rules || {}).forEach((r4) => {
        let o5 = r4[0];
        i5.rules[o5] = r4[1];
        try {
          o5 = this.processBindingIndex(null, o5);
          let a4 = i5.get(o5);
          typeof a4 != "undefined" && i5.applyRules(o5, a4);
        } catch (a4) {
        }
      }), setTimeout(() => {
        this.context.form.emit("modelchange", { model: i5.schemaModel });
      }, 1);
    }
    addBuiltinModelState() {
      this.schemaModel.instance._xo = { disabled: { back: true, next: false, send: true }, nav: { page: 1, total: this.options.pageCount, back: 0, next: 0, send: 0 } };
    }
    get context() {
      return this._context;
    }
    processBindingIndex(t4, e6) {
      if (typeof e6 == "string" && e6.indexOf("@index") !== -1) {
        let i5 = this.getParentScope(t4);
        if (!i5)
          throw "No scope for @index";
        e6 = e6.replace("@index", i5.options.index);
      }
      return e6;
    }
    getParentScope(t4) {
      var i5;
      let e6 = t4 == null ? void 0 : t4.parent;
      for (; e6 && e6; ) {
        if ((i5 = e6.options) == null ? void 0 : i5.scope)
          return e6;
        e6 = e6.parent;
      }
    }
    processBindings(t4, e6) {
      let i5 = this;
      for (let s6 in e6) {
        let r4 = e6[s6];
        if (s6 === "bind") {
          let o5 = r4;
          r4 = this.processBindingIndex(t4, r4), e6.value = i5.get(r4), this.addBinding({ control: t4, rawValue: o5, property: s6, binding: o5 });
        } else
          V.match(r4, (o5) => {
            this.addBinding({ control: t4, rawValue: r4, property: s6, binding: o5 }), o5 = this.processBindingIndex(t4, o5);
            let a4 = i5.get(o5);
            typeof a4 != "undefined" && (e6[s6 === "bind" ? "value" : s6] = a4);
          });
      }
    }
    addBinding(t4) {
      let e6 = this.matchArrays(t4.binding);
      this.bound[e6] = this.bound[e6] || [], this.bound[e6].findIndex((i5) => i5.control === t4.control) === -1 && this.bound[e6].push(t4);
    }
    applyRules(t4, e6) {
      let i5 = this, s6 = this.matchArrays(t4);
      if (i5.rules[s6]) {
        let r4 = i5.rules[s6];
        Array.isArray(r4) && r4.forEach((o5) => {
          var a4;
          if (o5.set = (a4 = o5.set) != null ? a4 : t4, o5.set) {
            let l4 = { value: e6, path: s6, binding: t4, get: (u4) => i5.get(u4), set: (u4, h3) => {
              i5.set(u4, h3), u4 === t4 && (e6 = h3);
            }, model: this.schemaModel }, d2;
            typeof o5.value == "function" ? d2 = o5.value(l4) : d2 = E.scopeEval(l4, "return " + o5.value), i5.set(o5.set, d2), o5.set === t4 && (e6 = d2);
          }
        });
      }
      return e6;
    }
    matchArrays(t4) {
      let e6 = t4.split("/");
      t4 = "";
      let i5 = e6.length, s6 = 0;
      return e6.forEach((r4) => {
        s6++, isNaN(parseInt(r4)) ? t4 += r4 : t4 += "*", s6 < i5 && (t4 += "/");
      }), t4;
    }
    parseKey(t4) {
      let e6 = parseInt(t4);
      return isNaN(e6) ? t4 : e6;
    }
    get(t4) {
      if (t4.indexOf("*") !== -1 || t4.indexOf("@index") !== -1)
        throw Error("Invalid binding path: " + t4);
      let e6 = t4.substring(2).split("/"), i5 = e6.shift();
      var s6 = this.instance[i5];
      if (!!s6)
        for (var r4 = 0; r4 < e6.length; r4++) {
          let o5 = this.parseKey(e6[r4]);
          if (r4 === e6.length - 1)
            return typeof o5 == "number" && console.log("GET: ", t4, s6[o5]), s6[o5];
          s6 = s6[o5];
        }
    }
    set(t4, e6) {
      let i5 = t4.substring(2).split("/"), s6 = i5.shift();
      var r4 = this.instance[s6];
      if (!!r4)
        for (var o5 = 0; o5 < i5.length; o5++) {
          let a4 = this.parseKey(i5[o5]);
          if (o5 === i5.length - 1) {
            r4[a4] = e6;
            break;
          }
          r4 = r4[a4];
        }
    }
  }, "Pt");
  c(Pt, "DataBinding");
  var et = Pt;
  var Ee = B`:root{--accent: var(--color-accent, #3477f3);--text-color: rgb(41, 41, 41);--bg-color: rgb(231, 231, 231);--shadow-color: black;--frame-color: rgb(250, 250, 250);--xo-input-bg: rgba(250, 250, 250);--xo-input-border-color: rgba(220, 220, 220);--xo-input-border-color-hover: rgba(200, 200, 200);--xo-input-border-color-active: rgba(180, 180, 180);--xo-card-background: rgb(100, 100, 100);--xo-card-color: white}:root.theme-dark{--accent: var(--color-accent, #5287eb);--bg-color: rgb(41, 41, 41);--text-color: rgb(241, 241, 241);--frame-color: rgb(230, 230, 230);--xo-input-bg: rgb(30, 30, 30);--xo-input-border-color: rgba(50, 50, 50);--xo-input-border-color-hover: rgba(80, 80, 80);--xo-input-border-color-active: rgba(110, 110, 110);--xo-card-background: rgb(60, 60, 60)}html,body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background-color:var(--bg-color);accent-color:var(--accent)}html img,body img{border:1rem solid var(--frame-color);border-radius:1rem;box-shadow:1rem 1rem 1rem var(--shadow-color);object-fit:scale-down;object-position:top;max-width:100%;max-height:40vh}.theme-dark html img,.theme-dark body img{filter:brightness(.8) contrast(1.2)}a:link,a:visited{color:var(--text-color);text-decoration:none}a:link:hover,a:visited:hover{text-decoration:underline}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--accent: var(--color-accent, #3477f3);--text-color: rgb(41, 41, 41);--bg-color: rgb(231, 231, 231);--shadow-color: black;--frame-color: rgb(250, 250, 250);--xo-input-bg: rgba(250, 250, 250);--xo-input-border-color: rgba(220, 220, 220);--xo-input-border-color-hover: rgba(200, 200, 200);--xo-input-border-color-active: rgba(180, 180, 180);--xo-card-background: rgb(100, 100, 100);--xo-card-color: white}:root.theme-dark{--accent: var(--color-accent, #5287eb);--bg-color: rgb(41, 41, 41);--text-color: rgb(241, 241, 241);--frame-color: rgb(230, 230, 230);--xo-input-bg: rgb(30, 30, 30);--xo-input-border-color: rgba(50, 50, 50);--xo-input-border-color-hover: rgba(80, 80, 80);--xo-input-border-color-active: rgba(110, 110, 110);--xo-card-background: rgb(60, 60, 60)}html,body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background-color:var(--bg-color);accent-color:var(--accent)}html img,body img{border:1rem solid var(--frame-color);border-radius:1rem;box-shadow:1rem 1rem 1rem var(--shadow-color);object-fit:scale-down;object-position:top;max-width:100%;max-height:40vh}.theme-dark html img,.theme-dark body img{filter:brightness(.8) contrast(1.2)}a:link,a:visited{color:var(--text-color);text-decoration:none}a:link:hover,a:visited:hover{text-decoration:underline}*{box-sizing:border-box}.xo-cn:not(.xo-rep){margin-top:.4rem}.xo-cn:not(.xo-rep) .xo-in{padding:0}.xo-cn:not(.xo-rep):not(.xo-gc) .xo-in,.xo-cn:not(.xo-rep).type-panel .xo-in{padding:15px;border:1px solid var(--xo-input-border-color);border-radius:1rem;background-color:var(--xo-input-bg)}.xo-cn:not(.xo-rep):hover .xo-in{border-color:var(--xo-input-border-color-hover);transition:all .3s ease}.xo-cn:not(.xo-rep).xo-fc .xo-in{border-color:var(--xo-input-border-color-active);transition:all .3s ease}.xo-cn:not(.xo-rep):not(.xo-ri) .xo-in .xo-grp{padding:0}.xo-ri{margin:0;padding:0!important}.xo-ri .xo-ct{margin:0;padding:0}.xo-ri .xo-in{border:0;padding:0!important}.xo-ct{padding:.5rem}label{display:inline-block;margin-top:.3rem;margin-bottom:.3rem;margin-right:.7rem}input,select,textarea{background-color:transparent;color:var(--text-color)}input:not([type=checkbox],[type=radio]),select,textarea{min-width:8rem;padding:.5rem 1rem;line-height:1.25rem}.xo-hd{display:none}input:not([type=checkbox],[type=radio]),select,textarea{border:0;outline:0;padding:0;width:100%;resize:vertical}label{display:inline-block}.xo-lb:empty{display:none}button{text-transform:uppercase;background-color:var(--xo-btn-bg, rgba(127, 127, 127, .8));padding:.4rem .8rem;border-radius:1rem;border:1px solid var(--xo-input-border-color)}button:hover{border:1px solid var(--xo-input-border-color-hover)}button:active{transform:translateY(2px);transition:all .1s ease-out}button.cta{margin:1rem 2rem;font-size:1.3rem;margin:3rem auto}.xo-sl{display:inline-block;padding-left:.5rem}.xo-ds{opacity:.5;user-select:none;cursor:not-allowed}.xo-ds input,.xo-ds [name],.xo-ds label{pointer-events:none}.xo-nv{margin-top:2rem}fieldset{border:0}legend{font-size:1.3rem}.xo-vl{color:#fa5e5e}.xo-grp.hor{display:flex;gap:.6rem}.xo-grp.hor.center{align-items:center}option{background-color:var(--bg-color)}[data-autocomplete]{margin:auto}[data-autocomplete] .xo-in{position:relative}[data-autocomplete] .xo-ac-rs{font-size:.9rem;text-align:left;background-color:var(--bg-color);position:absolute;box-shadow:0 5px 10px 2px #0000001a;border:1px solid rgba(0,0,0,.1);padding:.2rem;max-height:300px;max-width:500px;overflow-y:auto;z-index:9999}[data-autocomplete] .xo-ac-rs .xo-ac-itm{display:grid;grid-template-columns:var(--xo-ac-itm-grid, 30px 1fr 7rem);cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:.5rem;color:var(--text-color);height:var(--xo-ac-itm-height, auto)}[data-autocomplete] .xo-ac-rs .xo-ac-itm .xo-ac-img{background-repeat:no-repeat;background-size:contain;width:var(--xo-ac-itm-width, 1.1rem);height:var(--xo-ac-itm-height, auto);display:inline-block}[data-autocomplete] .xo-ac-rs .xo-ac-itm:hover{background-color:#0000000d}[data-autocomplete] .xo-ac-rs .xo-ac-itm span.text{display:inline-block;min-width:100px}[data-autocomplete] .xo-ac-rs .xo-ac-itm span.text small{word-wrap:normal;display:inline-block}[data-autocomplete] .xo-ac-rs .xo-ac-itm span.text .txt-hl{text-decoration:underline}[data-autocomplete] .xo-ac-rs .xo-ac-itm span.category{float:right;text-align:right;font-size:smaller}[data-autocomplete] .xo-ac-rs .xo-ac-itm.selected{background-color:#0000001a}[data-autocomplete] .xo-ac-rs .xo-ac-itm.active{background-color:#0000000d;transition:all .1s}[data-autocomplete].simple .xo-ac-rs .xo-ac-itm{grid-template-columns:var(--exf-ac-itm-grid, 1px 1fr 7rem)}html.theme-dark [data-autocomplete] .xo-ac-rs{background-color:#282828;box-shadow:0 5px 10px 2px #00000080;border-color:#ffffff1a}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm:hover{background-color:#ffffff0d}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm span.text small,html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm span.category{color:#ffffff80}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm.selected{background-color:#ffffff80}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm.active{background-color:#ffffffa6}.pwa-omnibox .exf-ctl-cnt.autocomplete{width:auto;display:inline-block}.material.xo-cn{margin-top:0}.material.xo-tx .xo-ct{position:relative}.material.xo-tx .xo-ct .xo-in{padding:20px 20px 10px 16px}.material.xo-tx .xo-ct label{position:absolute;top:20px;left:25px;padding:0;border-radius:5px;transition:all .2s;pointer-events:none}.material.xo-tx:not(.xo-fc) *::placeholder{opacity:0}.material.xo-tx.xo-fc .xo-ct label,.material.xo-tx.xo-ne .xo-ct label{font-size:75%;transition:all .2s;transform:translateY(-12px);opacity:.8}
`;
  var te = Ee;
  var it = /* @__PURE__ */ __name(class {
    constructor(t4) {
      this._form = t4, this._db = new et(this), this._mapper = new V(this);
    }
    get form() {
      return this._form;
    }
    get data() {
      return this._db;
    }
    get mapper() {
      return this._mapper;
    }
    static get sharedStyles() {
      return this._sheet || (this._sheet = new CSSStyleSheet(), this._sheet.replaceSync(te)), this._sheet;
    }
  }, "it");
  c(it, "Context"), v(it, "_sheet");
  var C = it;
  var we = "Invalid binding value";
  var st = /* @__PURE__ */ __name(class extends A {
    constructor() {
      super(...arguments);
      v(this, "_disabled", false);
      v(this, "_clicked", 0);
      v(this, "_context", null);
    }
    get context() {
      return this._context;
    }
    static get properties() {
      return { name: { type: String, attribute: true }, bind: { type: String }, type: { type: String, attribute: true }, hidden: { type: Boolean }, disabled: { type: Boolean }, required: { type: Boolean }, focus: { type: Boolean }, label: { type: String }, tooltip: { type: String }, placeholder: { type: String }, valid: { type: Boolean }, value: { type: Object }, prefix: { type: Object }, classes: { type: Array } };
    }
    get valid() {
      return this.checkValidity();
    }
    static get styles() {
      return [C.sharedStyles];
    }
    closestElement(t4, e6 = this, i5 = (s6, r4 = s6 && s6.closest(t4)) => !s6 || s6 === document || s6 === window ? null : r4 || i5(s6.getRootNode().host)) {
      return i5(e6);
    }
    connectedCallback() {
      var t4, e6, i5;
      super.connectedCallback(), this.form = this.closest("xo-form"), (t4 = this.form) == null || t4.registerElement(this), this.acceptMappedState(), (e6 = this.nestedElement) == null || e6.addEventListener("focus", this.onfocus.bind(this)), (i5 = this.nestedElement) == null || i5.addEventListener("blur", this.onblur.bind(this)), this.shadowRoot.addEventListener("input", this.onInput.bind(this)), this.shadowRoot.addEventListener("change", this.onInput.bind(this));
    }
    disconnectedCallback() {
      var t4, e6;
      (t4 = this.nestedElement) == null || t4.removeEventListener("focus", this.onfocus), (e6 = this.nestedElement) == null || e6.removeEventListener("blur", this.onblur), this.shadowRoot.removeEventListener("input", this.onInput), this.shadowRoot.removeEventListener("change", this.onInput);
    }
    firstUpdated() {
      this.nestedElement instanceof HTMLInputElement && this.context.mapper.tryAutoComplete(this, this.nestedElement, this.autocomplete);
    }
    acceptMappedState() {
    }
    onfocus(t4) {
      t4.stopPropagation(), this.focus = true;
    }
    onInput(t4) {
      t4.preventDefault(), t4.stopPropagation(), t4.stopImmediatePropagation();
      let e6 = t4.composedPath()[0];
      this.value = e6.value;
      let i5 = { control: this, source: e6, value: e6.value };
      this.form.emit("interaction", { control: this, source: e6, value: e6.value });
    }
    click(t4) {
      t4.preventDefault(), t4.stopImmediatePropagation(), t4.stopPropagation();
      let e6 = t4.composedPath()[0];
      this._clicked++, this.form && this.form.emit("interaction", { control: this, source: e6, value: e6.defaultValue || this._clicked });
    }
    checkValidity() {
      return this.nestedElement && this.nestedElement.checkValidity ? this.nestedElement.checkValidity() : true;
    }
    reportValidity() {
      return this.nestedElement ? this.nestedElement.reportValidity() : true;
    }
    onblur(t4) {
      t4.stopPropagation(), this.focus = false;
    }
    fireChange() {
      this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
    }
    get value() {
      var t4;
      return (t4 = this.nestedElement) == null ? void 0 : t4.value;
    }
    set value(t4) {
      if (this.nestedElement)
        if (this.nestedElement instanceof HTMLSelectElement) {
          let e6 = this.items.findIndex((i5) => t4 === i5.value || i5);
          this.nestedElement.selectedIndex = e6;
        } else
          this.nestedElement.value = t4 != null ? t4 : "";
    }
    createControl(t4, e6, i5, s6 = {}) {
      var o5;
      if (!t4 || !t4.data)
        throw Error("Invalid or missing context");
      e6 = this.transform(e6, i5) || "text";
      let r4;
      if (customElements.get("xo-" + e6) && (e6 = "xo-" + e6), e6.startsWith("xo-"))
        r4 = document.createElement(e6);
      else {
        try {
          r4 = document.createElement(e6);
          let l4 = (o5 = r4.__proto__) == null ? void 0 : o5.constructor.name;
          if (["HTMLUnknownElement", "HTMLTimeElement"].includes(l4))
            throw new Error("Invalid Element type");
        } catch (l4) {
          if (e6.indexOf("-") === -1) {
            r4 = document.createElement("input");
            try {
              r4.type = e6;
            } catch (d2) {
            }
          }
        }
        let a4 = document.createElement("xo-control");
        a4.type = e6, a4.nestedElement = r4, r4 = a4;
      }
      return r4 && (r4.parent = this, r4.options = s6, t4.parent = this, r4._context = t4, t4.mapper.mapProperties(r4, i5)), r4;
    }
    transform(t4, e6) {
      switch (t4) {
      }
      return t4;
    }
    getContainerClasses() {
      var i5, s6;
      let t4 = [];
      this.hidden && t4.push("xo-hd"), this.focus && t4.push("xo-fc"), this.disabled && t4.push("xo-ds"), this.valid || t4.push("xo-iv"), this.classes && t4.push(...this.classes), this.nestedElement && (this.nestedElement.value && t4.push("xo-ne"), this.isTextual && t4.push("xo-tx"));
      let e6 = (s6 = (i5 = this.form) == null ? void 0 : i5.theme) != null ? s6 : "standard";
      return t4.push(e6), t4.join(" ");
    }
    get isTextual() {
      return this.nestedElement instanceof HTMLTextAreaElement || this.nestedElement instanceof HTMLInputElement && ["text", "url", "tel", "password", "email"].includes(this.nestedElement.getAttribute("type"));
    }
    render() {
      return this.type && this.setAttribute("data-type", this.type), this.closest("xo-nav") ? g`${this.renderInput()}` : this.nestedElement instanceof HTMLButtonElement ? (typeof this.nestedElement.defaultValue == "undefined" && (this.nestedElement.defaultValue = this.nestedElement.value), this.nestedElement.removeEventListener("click", this.click), this.nestedElement.addEventListener("click", this.click.bind(this)), g`${this.renderInput(true)}`) : g`<div
      part="xo-cn"
      ${this.hidden ? " hidden" : ""}
      class="xo-cn ${this.getContainerClasses()}"
    >
      <div class="xo-ct" part="xo-ct">
        <label
          part="xo-lb"
          for="${this.id}"
          aria-hidden="true"
          class="xo-lb"
          title="${this.label}"
          >${this.label}${this.renderRequiredState()}</label
        >
        <div class="xo-in" part="xo-in">${this.renderInput()}</div>
      </div>
      <div class="xo-io" part="xo-io">
        <div class="xo-hl" part="xo-hl">${this.getValidation()}</div>
      </div>
    </div>`;
    }
    renderRequiredState() {
      return this.label && this.required ? g`<sup>*</sup>` : "";
    }
    renderInput(t4) {
      return this.renderNestedElement(t4);
    }
    renderNestedElement(t4) {
      return t4 && this.nestedElement.setAttribute("class", this.nestedElement.getAttribute("class") + " " + this.getContainerClasses()), this.nestedElement;
    }
    set bind(t4) {
      if (typeof t4 != "string" || !t4.startsWith("#/"))
        throw Error(we);
      this._bind = t4;
    }
    get bind() {
      return this._bind;
    }
    getValidation() {
      if (!this.valid)
        return g`<small class="xo-vl"
        >${this.validationText || this.invalidMessage}</small
      >`;
    }
    set disabled(t4) {
      this._disabled = t4;
    }
    get disabled() {
      return this._disabled;
    }
    toString() {
      return this.nestedElement ? this.nestedElement.nodeName === "INPUT" ? `${this.nestedElement.nodeName}[type="${this.nestedElement.type}"]` : this.nestedElement.nodeName : this.nodeName;
    }
    set invalidMessage(t4) {
      this._invalidMessage = t4;
    }
    get invalidMessage() {
      return this._invalidMessage;
    }
  }, "st");
  c(st, "Control");
  window.customElements.define("xo-control", st);
  var M = st;
  var It = /* @__PURE__ */ __name(class {
    constructor(t4) {
      this.form = t4, this.form.addEventListener("interaction", (e6) => {
        let i5 = e6.detail.control;
        this.processValidation(i5), this.checkValid();
      }), setTimeout(() => {
        this.checkValid();
      }, 60);
    }
    checkValid() {
      let t4 = this.isPageValid(this.form.page), e6 = this.form.context.data.get("#/_xo/nav/total");
      this.form.context.data.set("#/_xo/disabled/next", !t4 || this.form.page >= e6), this.form.context.data.set("#/_xo/disabled/back", this.form.page <= 1);
    }
    processValidation(t4) {
      let e6 = t4.checkValidity(), i5 = t4.closestElement("xo-control");
      try {
        i5.invalidMessage = t4.validationMessage;
      } catch (s6) {
      }
      i5 && i5.reportValidity && i5.reportValidity();
    }
    isPageValid(t4) {
      let e6 = this.form.childNodes[t4 - 1];
      if (e6) {
        let i5 = e6 == null ? void 0 : e6.childNodes, s6 = i5.length, r4 = 0;
        return i5.forEach((o5) => {
          o5.checkValidity(), o5.valid && r4++;
        }), r4 === s6;
      }
    }
  }, "It");
  c(It, "Validation");
  var rt = It;
  var ee = c((n5) => n5 === null || typeof n5 != "object" && typeof n5 != "function", "t");
  var ie = c((n5) => n5.strings === void 0, "r");
  var Y = c((n5, t4) => {
    var e6, i5;
    let s6 = n5._$AN;
    if (s6 === void 0)
      return false;
    for (let r4 of s6)
      (i5 = (e6 = r4)._$AO) === null || i5 === void 0 || i5.call(e6, t4, false), Y(r4, t4);
    return true;
  }, "e");
  var ot = c((n5) => {
    let t4, e6;
    do {
      if ((t4 = n5._$AM) === void 0)
        break;
      e6 = t4._$AN, e6.delete(n5), n5 = t4;
    } while ((e6 == null ? void 0 : e6.size) === 0);
  }, "o");
  var se = c((n5) => {
    for (let t4; t4 = n5._$AM; n5 = t4) {
      let e6 = t4._$AN;
      if (e6 === void 0)
        t4._$AN = e6 = new Set();
      else if (e6.has(n5))
        break;
      e6.add(n5), ke(t4);
    }
  }, "n");
  function Ce(n5) {
    this._$AN !== void 0 ? (ot(this), this._$AM = n5, se(this)) : this._$AM = n5;
  }
  __name(Ce, "Ce");
  c(Ce, "r");
  function Se(n5, t4 = false, e6 = 0) {
    let i5 = this._$AH, s6 = this._$AN;
    if (s6 !== void 0 && s6.size !== 0)
      if (t4)
        if (Array.isArray(i5))
          for (let r4 = e6; r4 < i5.length; r4++)
            Y(i5[r4], false), ot(i5[r4]);
        else
          i5 != null && (Y(i5, false), ot(i5));
      else
        Y(this, n5);
  }
  __name(Se, "Se");
  c(Se, "h");
  var ke = c((n5) => {
    var t4, e6, i5, s6;
    n5.type == tt.CHILD && ((t4 = (i5 = n5)._$AP) !== null && t4 !== void 0 || (i5._$AP = Se), (e6 = (s6 = n5)._$AQ) !== null && e6 !== void 0 || (s6._$AQ = Ce));
  }, "l");
  var nt = /* @__PURE__ */ __name(class extends j {
    constructor() {
      super(...arguments), this._$AN = void 0;
    }
    _$AT(t4, e6, i5) {
      super._$AT(t4, e6, i5), se(this), this.isConnected = t4._$AU;
    }
    _$AO(t4, e6 = true) {
      var i5, s6;
      t4 !== this.isConnected && (this.isConnected = t4, t4 ? (i5 = this.reconnected) === null || i5 === void 0 || i5.call(this) : (s6 = this.disconnected) === null || s6 === void 0 || s6.call(this)), e6 && (Y(this, t4), ot(this));
    }
    setValue(t4) {
      if (ie(this._$Ct))
        this._$Ct._$AI(t4, this);
      else {
        let e6 = [...this._$Ct._$AH];
        e6[this._$Ci] = t4, this._$Ct._$AI(e6, this, 0);
      }
    }
    disconnected() {
    }
    reconnected() {
    }
  }, "nt");
  c(nt, "d");
  var at = /* @__PURE__ */ __name(class {
    constructor(t4) {
      this.U = t4;
    }
    disconnect() {
      this.U = void 0;
    }
    reconnect(t4) {
      this.U = t4;
    }
    deref() {
      return this.U;
    }
  }, "at");
  c(at, "s");
  var lt = /* @__PURE__ */ __name(class {
    constructor() {
      this.Y = void 0, this.q = void 0;
    }
    get() {
      return this.Y;
    }
    pause() {
      var t4;
      (t4 = this.Y) !== null && t4 !== void 0 || (this.Y = new Promise((e6) => this.q = e6));
    }
    resume() {
      var t4;
      (t4 = this.q) === null || t4 === void 0 || t4.call(this), this.Y = this.q = void 0;
    }
  }, "lt");
  c(lt, "i");
  var re = c((n5) => !ee(n5) && typeof n5.then == "function", "n");
  var Mt = /* @__PURE__ */ __name(class extends nt {
    constructor() {
      super(...arguments), this._$Cwt = 1073741823, this._$Cyt = [], this._$CG = new at(this), this._$CK = new lt();
    }
    render(...t4) {
      var e6;
      return (e6 = t4.find((i5) => !re(i5))) !== null && e6 !== void 0 ? e6 : x;
    }
    update(t4, e6) {
      let i5 = this._$Cyt, s6 = i5.length;
      this._$Cyt = e6;
      let r4 = this._$CG, o5 = this._$CK;
      this.isConnected || this.disconnected();
      for (let a4 = 0; a4 < e6.length && !(a4 > this._$Cwt); a4++) {
        let l4 = e6[a4];
        if (!re(l4))
          return this._$Cwt = a4, l4;
        a4 < s6 && l4 === i5[a4] || (this._$Cwt = 1073741823, s6 = 0, Promise.resolve(l4).then(async (d2) => {
          for (; o5.get(); )
            await o5.get();
          let u4 = r4.deref();
          if (u4 !== void 0) {
            let h3 = u4._$Cyt.indexOf(l4);
            h3 > -1 && h3 < u4._$Cwt && (u4._$Cwt = h3, u4.setValue(d2));
          }
        }));
      }
      return x;
    }
    disconnected() {
      this._$CG.disconnect(), this._$CK.pause();
    }
    reconnected() {
      this._$CG.reconnect(this), this._$CK.resume();
    }
  }, "Mt");
  c(Mt, "h");
  var oe = K(Mt);
  var ne = "1.0.26";
  var ct = /* @__PURE__ */ __name(class extends M {
    constructor() {
      super();
      v(this, "elements", {});
      this._url = new URL(document.location.href), this._context = new C(this), this._page = 1;
    }
    static get version() {
      return ne;
    }
    static get properties() {
      return Z(N({}, M.properties), { page: { type: Number, attribute: true }, schema: { type: Object }, src: { type: String, attribute: true }, theme: { type: String, attribute: true } });
    }
    get context() {
      return this._context;
    }
    set page(t4) {
      t4 !== this._page && (t4 < 1 || t4 > this.querySelectorAll("xo-page").length || (t4 > this._page && this.validation.isPageValid(this._page), this._page = t4));
    }
    get page() {
      return this._page;
    }
    set schema(t4) {
      this._schema = t4, this.requestUpdate();
    }
    get schema() {
      return this._schema;
    }
    registerElement(t4) {
      t4.name && (this.elements[t4.name] = t4);
    }
    set src(t4) {
      this._src = t4;
    }
    get src() {
      return this._src;
    }
    readSchema() {
      return Q(this, null, function* () {
        if (!this.schema && this.src)
          try {
            let t4 = yield import(this.src), e6 = Object.keys(t4)[0];
            this._schema = t4[e6];
          } catch (t4) {
            throw Error("Could not load schema from " + this.src);
          }
        return this.schema ? (this.interpretSchema(this.schema), true) : false;
      });
    }
    interpretSchema(t4) {
      if (typeof t4 != "object")
        throw Error("Invalid schema");
      t4.page = "#/_xo/nav/page", this.context.data.initialize(t4.model, { pageCount: t4.pages.length });
      let e6 = 1;
      for (let i5 of t4.pages) {
        i5.index = e6++;
        let s6 = this.createControl(this.context, "xo-page", i5);
        s6.setAttribute("slot", "w"), this.appendChild(s6);
      }
      this.nav = this.createControl(this.context, "xo-nav", t4), this.nav.controls = this.nav.controls, this.nav.setAttribute("slot", "n"), this.appendChild(this.nav);
    }
    render() {
      return g`
      ${oe(this.readSchema().then((t4) => t4 ? g`<div class="xo-c" data-page="${this.page}" >
            <form>
                <div class="xo-w">
                    <slot name="w"></slot>
                </div>
                <div class="xo-n">
                    <slot name="n"></slot>
                <div>
            </form>
            <div>` : g``), g`Loading...`)}
    `;
    }
    firstUpdated() {
      this.validation = new rt(this), this.checkUrlState(), this.emit("first-updated");
    }
    emit(t4, e6 = {}) {
      this.dispatchEvent(new CustomEvent(t4, { detail: e6 }));
    }
    get url() {
      return this._url;
    }
    checkUrlState() {
    }
    getSlotted(t4) {
      var i5;
      let e6 = (i5 = t4.shadowRoot) == null ? void 0 : i5.querySelector("slot");
      return [...(e6 == null ? void 0 : e6.assignedElements({ flatten: true })) || []];
    }
  }, "ct");
  c(ct, "Form");
  var ae = ct;
  window.customElements.define("xo-form", ct);
  var dt = /* @__PURE__ */ __name(class extends M {
    static get properties() {
      return { layout: { type: String, attribute: true }, align: { type: String, attribute: true }, ui: { type: String, attribute: true }, fields: { type: Array } };
    }
    renderInput() {
      return g`<div class="${this.getGroupClasses()}">
      <slot></slot>
    </div>`;
    }
    set fields(t4) {
      this._fields = t4;
      for (let e6 of this._fields) {
        let i5 = this.createControl(this.context, e6.type, e6);
        this.appendChild(i5);
      }
    }
    get fields() {
      return this._fields;
    }
    getGroupClasses() {
      var t4, e6;
      return `xo-grp ${((t4 = this.layout) == null ? void 0 : t4.startsWith("hor")) ? "hor" : "ver"} ${(e6 = this.align) != null ? e6 : ""}`;
    }
    getContainerClasses() {
      return `${super.getContainerClasses()} xo-gc ${this.ui ? "type-" + this.ui : ""}`;
    }
  }, "dt");
  c(dt, "Group");
  var S = dt;
  window.customElements.define("xo-group", dt);
  var ht = /* @__PURE__ */ __name(class extends S {
    constructor() {
      super(...arguments);
      this.hidden = true;
    }
    connectedCallback() {
      super.connectedCallback(), this.closest("xo-form").addEventListener("page", (t4) => {
        this.hidden = t4.target.page !== this.index;
      }), this.hidden = this.index !== 1;
    }
    render() {
      return this.hidden ? g`` : g`<fieldset
      ${this.hidden ? "hidden" : ""}
      data-page="${this.index}"
      class="xo-cn ${this.getContainerClasses()}"
    >
      <legend>${this.label}</legend>
      <slot></slot>
    </fieldset>`;
    }
    static get properties() {
      return { index: { type: Number, attribute: true } };
    }
  }, "ht");
  c(ht, "Page");
  window.customElements.define("xo-page", ht);
  var le = ht;
  var ut = /* @__PURE__ */ __name(class extends S {
    static get properties() {
      return { items: { type: Array }, layout: { type: String }, fields: { type: Array } };
    }
    set fields(t4) {
      if (!Array.isArray(t4))
        throw Error("Invalid fields property value for repeat.");
      this._fields = t4, this.refresh();
    }
    get fields() {
      return this._fields;
    }
    set items(t4) {
      this._items = t4, console.log("ITEMS: ", t4), this.hasUpdated && (this.refresh(), this.requestUpdate());
    }
    get items() {
      return this._items;
    }
    refresh() {
      this.innerHTML = "";
      let t4 = 0;
      this.items.forEach((e6) => {
        let i5 = this.createControl(this.context, "group", { fields: this.fields, classes: ["xo-ri"], index: t4 }, { scope: e6, index: t4++ });
        i5.setAttribute("data-index", t4), this.appendChild(i5);
      });
    }
    getContainerClasses() {
      return super.getContainerClasses() + " xo-rep";
    }
  }, "ut");
  c(ut, "Repeat");
  var ce = ut;
  window.customElements.define("xo-repeat", ut);
  var pt = /* @__PURE__ */ __name(class extends S {
    static get styles() {
      return [C.sharedStyles, B`
        :host {
          display: flex;
        }
        .xo-grp {
          display: inline-block;
          margin: auto;
        }
      `];
    }
    beforeMap() {
      this.layout = "horizontal", this._controls = [], this.context.data.get("#/_xo/nav/total") > 1 && this._controls.push({ type: "button", name: "prev", label: "Back", bind: "#/_xo/nav/back", disabled: "#/_xo/disabled/back", click: this.prev.bind(this) }, { type: "button", name: "nxt", label: "Next", bind: "#/_xo/nav/next", disabled: "#/_xo/disabled/next", click: this.next.bind(this) });
    }
    static get properties() {
      return { page: { type: Number }, controls: { type: Array } };
    }
    set page(t4) {
      if (typeof t4 != "number")
        throw Error("Invalid value for page");
      let e6 = this.context.form.page;
      this.context.form.page = t4, this.context.form.emit("page", { from: e6, to: t4 }), this.updateUrl();
    }
    updateUrl() {
    }
    get page() {
      return this.context.form.page;
    }
    set controls(t4) {
      if (!Array.isArray(t4))
        throw Error("Invalid controls property value");
      this._controls = t4;
      for (let e6 of this._controls) {
        let i5 = this.createControl(this.context, "button", e6);
        this.appendChild(i5);
      }
    }
    get controls() {
      return this._controls;
    }
    prev() {
      this.updateState(-1);
    }
    next() {
      this.updateState(1);
    }
    updateState(t4) {
      let e6 = this.context.data.get("#/_xo/nav/page"), i5 = this.context.data.get("#/_xo/nav/total");
      t4 > 0 ? e6 = Math.min(i5, e6 + 1) : e6 = Math.max(1, e6 - 1), this.context.data.set("#/_xo/nav/page", e6), this.context.data.set("#/_xo/disabled/next", e6 >= i5), this.context.data.set("#/_xo/disabled/back", e6 <= 1);
    }
    submit() {
      let t4 = this.closest("xo-form"), e6 = {};
      Object.entries(t4.elements).forEach((i5) => {
        let s6 = i5[0];
        if (s6) {
          let r4 = i5[1].value;
          e6[s6] = r4;
        }
      }), console.log(JSON.stringify(e6, null, 2));
    }
  }, "pt");
  c(pt, "Navigation");
  window.customElements.define("xo-nav", pt);
  var de = pt;
  var mt = /* @__PURE__ */ __name(class {
    static get Context() {
      return C;
    }
    static get Control() {
      return M;
    }
    static get DataBinding() {
      return et;
    }
    static get Form() {
      return ae;
    }
    static get Group() {
      return S;
    }
    static get PropertyMapper() {
      return V;
    }
    static get Page() {
      return le;
    }
    static get Repeat() {
      return ce;
    }
    static get Util() {
      return E;
    }
    static get Navigation() {
      return de;
    }
    static get Validation() {
      return rt;
    }
  }, "mt");
  c(mt, "xo");
  window.xo = mt;
  var $s = mt;

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var e = Symbol();
  var n = new Map();
  var s = class {
    constructor(t4, n5) {
      if (this._$cssResult$ = true, n5 !== e)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4;
    }
    get styleSheet() {
      let e6 = n.get(this.cssText);
      return t && e6 === void 0 && (n.set(this.cssText, e6 = new CSSStyleSheet()), e6.replaceSync(this.cssText)), e6;
    }
    toString() {
      return this.cssText;
    }
  };
  __name(s, "s");
  var o = /* @__PURE__ */ __name((t4) => new s(typeof t4 == "string" ? t4 : t4 + "", e), "o");
  var r = /* @__PURE__ */ __name((t4, ...n5) => {
    const o5 = t4.length === 1 ? t4[0] : n5.reduce((e6, n6, s6) => e6 + ((t5) => {
      if (t5._$cssResult$ === true)
        return t5.cssText;
      if (typeof t5 == "number")
        return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(n6) + t4[s6 + 1], t4[0]);
    return new s(o5, e);
  }, "r");
  var i = /* @__PURE__ */ __name((e6, n5) => {
    t ? e6.adoptedStyleSheets = n5.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n5.forEach((t4) => {
      const n6 = document.createElement("style"), s6 = window.litNonce;
      s6 !== void 0 && n6.setAttribute("nonce", s6), n6.textContent = t4.cssText, e6.appendChild(n6);
    });
  }, "i");
  var S2 = t ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e6 = "";
    for (const n5 of t5.cssRules)
      e6 += n5.cssText;
    return o(e6);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window.trustedTypes;
  var r2 = e2 ? e2.emptyScript : "";
  var h = window.reactiveElementPolyfillSupport;
  var o2 = { toAttribute(t4, i5) {
    switch (i5) {
      case Boolean:
        t4 = t4 ? r2 : null;
        break;
      case Object:
      case Array:
        t4 = t4 == null ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, i5) {
    let s6 = t4;
    switch (i5) {
      case Boolean:
        s6 = t4 !== null;
        break;
      case Number:
        s6 = t4 === null ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          s6 = JSON.parse(t4);
        } catch (t5) {
          s6 = null;
        }
    }
    return s6;
  } };
  var n2 = /* @__PURE__ */ __name((t4, i5) => i5 !== t4 && (i5 == i5 || t4 == t4), "n");
  var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
  var a = class extends HTMLElement {
    constructor() {
      super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t4) {
      var i5;
      (i5 = this.l) !== null && i5 !== void 0 || (this.l = []), this.l.push(t4);
    }
    static get observedAttributes() {
      this.finalize();
      const t4 = [];
      return this.elementProperties.forEach((i5, s6) => {
        const e6 = this._$Eh(s6, i5);
        e6 !== void 0 && (this._$Eu.set(e6, s6), t4.push(e6));
      }), t4;
    }
    static createProperty(t4, i5 = l) {
      if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t4, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t4)) {
        const s6 = typeof t4 == "symbol" ? Symbol() : "__" + t4, e6 = this.getPropertyDescriptor(t4, s6, i5);
        e6 !== void 0 && Object.defineProperty(this.prototype, t4, e6);
      }
    }
    static getPropertyDescriptor(t4, i5, s6) {
      return { get() {
        return this[i5];
      }, set(e6) {
        const r4 = this[t4];
        this[i5] = e6, this.requestUpdate(t4, r4, s6);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t4 = Object.getPrototypeOf(this);
      if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
        const t5 = this.properties, i5 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
        for (const s6 of i5)
          this.createProperty(s6, t5[s6]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i5) {
      const s6 = [];
      if (Array.isArray(i5)) {
        const e6 = new Set(i5.flat(1 / 0).reverse());
        for (const i6 of e6)
          s6.unshift(S2(i6));
      } else
        i5 !== void 0 && s6.push(S2(i5));
      return s6;
    }
    static _$Eh(t4, i5) {
      const s6 = i5.attribute;
      return s6 === false ? void 0 : typeof s6 == "string" ? s6 : typeof t4 == "string" ? t4.toLowerCase() : void 0;
    }
    o() {
      var t4;
      this._$Ep = new Promise((t5) => this.enableUpdating = t5), this._$AL = new Map(), this._$Em(), this.requestUpdate(), (t4 = this.constructor.l) === null || t4 === void 0 || t4.forEach((t5) => t5(this));
    }
    addController(t4) {
      var i5, s6;
      ((i5 = this._$Eg) !== null && i5 !== void 0 ? i5 : this._$Eg = []).push(t4), this.renderRoot !== void 0 && this.isConnected && ((s6 = t4.hostConnected) === null || s6 === void 0 || s6.call(t4));
    }
    removeController(t4) {
      var i5;
      (i5 = this._$Eg) === null || i5 === void 0 || i5.splice(this._$Eg.indexOf(t4) >>> 0, 1);
    }
    _$Em() {
      this.constructor.elementProperties.forEach((t4, i5) => {
        this.hasOwnProperty(i5) && (this._$Et.set(i5, this[i5]), delete this[i5]);
      });
    }
    createRenderRoot() {
      var t4;
      const s6 = (t4 = this.shadowRoot) !== null && t4 !== void 0 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
      return i(s6, this.constructor.elementStyles), s6;
    }
    connectedCallback() {
      var t4;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
        var i5;
        return (i5 = t5.hostConnected) === null || i5 === void 0 ? void 0 : i5.call(t5);
      });
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      var t4;
      (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
        var i5;
        return (i5 = t5.hostDisconnected) === null || i5 === void 0 ? void 0 : i5.call(t5);
      });
    }
    attributeChangedCallback(t4, i5, s6) {
      this._$AK(t4, s6);
    }
    _$ES(t4, i5, s6 = l) {
      var e6, r4;
      const h3 = this.constructor._$Eh(t4, s6);
      if (h3 !== void 0 && s6.reflect === true) {
        const n5 = ((r4 = (e6 = s6.converter) === null || e6 === void 0 ? void 0 : e6.toAttribute) !== null && r4 !== void 0 ? r4 : o2.toAttribute)(i5, s6.type);
        this._$Ei = t4, n5 == null ? this.removeAttribute(h3) : this.setAttribute(h3, n5), this._$Ei = null;
      }
    }
    _$AK(t4, i5) {
      var s6, e6, r4;
      const h3 = this.constructor, n5 = h3._$Eu.get(t4);
      if (n5 !== void 0 && this._$Ei !== n5) {
        const t5 = h3.getPropertyOptions(n5), l4 = t5.converter, a4 = (r4 = (e6 = (s6 = l4) === null || s6 === void 0 ? void 0 : s6.fromAttribute) !== null && e6 !== void 0 ? e6 : typeof l4 == "function" ? l4 : null) !== null && r4 !== void 0 ? r4 : o2.fromAttribute;
        this._$Ei = n5, this[n5] = a4(i5, t5.type), this._$Ei = null;
      }
    }
    requestUpdate(t4, i5, s6) {
      let e6 = true;
      t4 !== void 0 && (((s6 = s6 || this.constructor.getPropertyOptions(t4)).hasChanged || n2)(this[t4], i5) ? (this._$AL.has(t4) || this._$AL.set(t4, i5), s6.reflect === true && this._$Ei !== t4 && (this._$EC === void 0 && (this._$EC = new Map()), this._$EC.set(t4, s6))) : e6 = false), !this.isUpdatePending && e6 && (this._$Ep = this._$E_());
    }
    async _$E_() {
      this.isUpdatePending = true;
      try {
        await this._$Ep;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return t4 != null && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t4;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Et && (this._$Et.forEach((t5, i6) => this[i6] = t5), this._$Et = void 0);
      let i5 = false;
      const s6 = this._$AL;
      try {
        i5 = this.shouldUpdate(s6), i5 ? (this.willUpdate(s6), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
          var i6;
          return (i6 = t5.hostUpdate) === null || i6 === void 0 ? void 0 : i6.call(t5);
        }), this.update(s6)) : this._$EU();
      } catch (t5) {
        throw i5 = false, this._$EU(), t5;
      }
      i5 && this._$AE(s6);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      var i5;
      (i5 = this._$Eg) === null || i5 === void 0 || i5.forEach((t5) => {
        var i6;
        return (i6 = t5.hostUpdated) === null || i6 === void 0 ? void 0 : i6.call(t5);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$EU() {
      this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Ep;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$EC !== void 0 && (this._$EC.forEach((t5, i5) => this._$ES(i5, this[i5], t5)), this._$EC = void 0), this._$EU();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  __name(a, "a");
  a.finalized = true, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.3.1");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = globalThis.trustedTypes;
  var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var e3 = `lit$${(Math.random() + "").slice(9)}$`;
  var o3 = "?" + e3;
  var n3 = `<${o3}>`;
  var l2 = document;
  var h2 = /* @__PURE__ */ __name((t4 = "") => l2.createComment(t4), "h");
  var r3 = /* @__PURE__ */ __name((t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function", "r");
  var d = Array.isArray;
  var u = /* @__PURE__ */ __name((t4) => {
    var i5;
    return d(t4) || typeof ((i5 = t4) === null || i5 === void 0 ? void 0 : i5[Symbol.iterator]) == "function";
  }, "u");
  var c2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v2 = /-->/g;
  var a2 = />/g;
  var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
  var _2 = /'/g;
  var m2 = /"/g;
  var g2 = /^(?:script|style|textarea|title)$/i;
  var p = /* @__PURE__ */ __name((t4) => (i5, ...s6) => ({ _$litType$: t4, strings: i5, values: s6 }), "p");
  var $2 = p(1);
  var y2 = p(2);
  var b = Symbol.for("lit-noChange");
  var w2 = Symbol.for("lit-nothing");
  var T2 = new WeakMap();
  var x2 = /* @__PURE__ */ __name((t4, i5, s6) => {
    var e6, o5;
    const n5 = (e6 = s6 == null ? void 0 : s6.renderBefore) !== null && e6 !== void 0 ? e6 : i5;
    let l4 = n5._$litPart$;
    if (l4 === void 0) {
      const t5 = (o5 = s6 == null ? void 0 : s6.renderBefore) !== null && o5 !== void 0 ? o5 : null;
      n5._$litPart$ = l4 = new N2(i5.insertBefore(h2(), t5), t5, void 0, s6 != null ? s6 : {});
    }
    return l4._$AI(t4), l4;
  }, "x");
  var A2 = l2.createTreeWalker(l2, 129, null, false);
  var C2 = /* @__PURE__ */ __name((t4, i5) => {
    const o5 = t4.length - 1, l4 = [];
    let h3, r4 = i5 === 2 ? "<svg>" : "", d2 = c2;
    for (let i6 = 0; i6 < o5; i6++) {
      const s6 = t4[i6];
      let o6, u5, p2 = -1, $3 = 0;
      for (; $3 < s6.length && (d2.lastIndex = $3, u5 = d2.exec(s6), u5 !== null); )
        $3 = d2.lastIndex, d2 === c2 ? u5[1] === "!--" ? d2 = v2 : u5[1] !== void 0 ? d2 = a2 : u5[2] !== void 0 ? (g2.test(u5[2]) && (h3 = RegExp("</" + u5[2], "g")), d2 = f) : u5[3] !== void 0 && (d2 = f) : d2 === f ? u5[0] === ">" ? (d2 = h3 != null ? h3 : c2, p2 = -1) : u5[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u5[2].length, o6 = u5[1], d2 = u5[3] === void 0 ? f : u5[3] === '"' ? m2 : _2) : d2 === m2 || d2 === _2 ? d2 = f : d2 === v2 || d2 === a2 ? d2 = c2 : (d2 = f, h3 = void 0);
      const y3 = d2 === f && t4[i6 + 1].startsWith("/>") ? " " : "";
      r4 += d2 === c2 ? s6 + n3 : p2 >= 0 ? (l4.push(o6), s6.slice(0, p2) + "$lit$" + s6.slice(p2) + e3 + y3) : s6 + e3 + (p2 === -2 ? (l4.push(void 0), i6) : y3);
    }
    const u4 = r4 + (t4[o5] || "<?>") + (i5 === 2 ? "</svg>" : "");
    if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [s3 !== void 0 ? s3.createHTML(u4) : u4, l4];
  }, "C");
  var E2 = class {
    constructor({ strings: t4, _$litType$: s6 }, n5) {
      let l4;
      this.parts = [];
      let r4 = 0, d2 = 0;
      const u4 = t4.length - 1, c5 = this.parts, [v3, a4] = C2(t4, s6);
      if (this.el = E2.createElement(v3, n5), A2.currentNode = this.el.content, s6 === 2) {
        const t5 = this.el.content, i5 = t5.firstChild;
        i5.remove(), t5.append(...i5.childNodes);
      }
      for (; (l4 = A2.nextNode()) !== null && c5.length < u4; ) {
        if (l4.nodeType === 1) {
          if (l4.hasAttributes()) {
            const t5 = [];
            for (const i5 of l4.getAttributeNames())
              if (i5.endsWith("$lit$") || i5.startsWith(e3)) {
                const s7 = a4[d2++];
                if (t5.push(i5), s7 !== void 0) {
                  const t6 = l4.getAttribute(s7.toLowerCase() + "$lit$").split(e3), i6 = /([.?@])?(.*)/.exec(s7);
                  c5.push({ type: 1, index: r4, name: i6[2], strings: t6, ctor: i6[1] === "." ? M2 : i6[1] === "?" ? H : i6[1] === "@" ? I2 : S3 });
                } else
                  c5.push({ type: 6, index: r4 });
              }
            for (const i5 of t5)
              l4.removeAttribute(i5);
          }
          if (g2.test(l4.tagName)) {
            const t5 = l4.textContent.split(e3), s7 = t5.length - 1;
            if (s7 > 0) {
              l4.textContent = i2 ? i2.emptyScript : "";
              for (let i5 = 0; i5 < s7; i5++)
                l4.append(t5[i5], h2()), A2.nextNode(), c5.push({ type: 2, index: ++r4 });
              l4.append(t5[s7], h2());
            }
          }
        } else if (l4.nodeType === 8)
          if (l4.data === o3)
            c5.push({ type: 2, index: r4 });
          else {
            let t5 = -1;
            for (; (t5 = l4.data.indexOf(e3, t5 + 1)) !== -1; )
              c5.push({ type: 7, index: r4 }), t5 += e3.length - 1;
          }
        r4++;
      }
    }
    static createElement(t4, i5) {
      const s6 = l2.createElement("template");
      return s6.innerHTML = t4, s6;
    }
  };
  __name(E2, "E");
  function P2(t4, i5, s6 = t4, e6) {
    var o5, n5, l4, h3;
    if (i5 === b)
      return i5;
    let d2 = e6 !== void 0 ? (o5 = s6._$Cl) === null || o5 === void 0 ? void 0 : o5[e6] : s6._$Cu;
    const u4 = r3(i5) ? void 0 : i5._$litDirective$;
    return (d2 == null ? void 0 : d2.constructor) !== u4 && ((n5 = d2 == null ? void 0 : d2._$AO) === null || n5 === void 0 || n5.call(d2, false), u4 === void 0 ? d2 = void 0 : (d2 = new u4(t4), d2._$AT(t4, s6, e6)), e6 !== void 0 ? ((l4 = (h3 = s6)._$Cl) !== null && l4 !== void 0 ? l4 : h3._$Cl = [])[e6] = d2 : s6._$Cu = d2), d2 !== void 0 && (i5 = P2(t4, d2._$AS(t4, i5.values), d2, e6)), i5;
  }
  __name(P2, "P");
  var V2 = class {
    constructor(t4, i5) {
      this.v = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t4) {
      var i5;
      const { el: { content: s6 }, parts: e6 } = this._$AD, o5 = ((i5 = t4 == null ? void 0 : t4.creationScope) !== null && i5 !== void 0 ? i5 : l2).importNode(s6, true);
      A2.currentNode = o5;
      let n5 = A2.nextNode(), h3 = 0, r4 = 0, d2 = e6[0];
      for (; d2 !== void 0; ) {
        if (h3 === d2.index) {
          let i6;
          d2.type === 2 ? i6 = new N2(n5, n5.nextSibling, this, t4) : d2.type === 1 ? i6 = new d2.ctor(n5, d2.name, d2.strings, this, t4) : d2.type === 6 && (i6 = new L2(n5, this, t4)), this.v.push(i6), d2 = e6[++r4];
        }
        h3 !== (d2 == null ? void 0 : d2.index) && (n5 = A2.nextNode(), h3++);
      }
      return o5;
    }
    m(t4) {
      let i5 = 0;
      for (const s6 of this.v)
        s6 !== void 0 && (s6.strings !== void 0 ? (s6._$AI(t4, s6, i5), i5 += s6.strings.length - 2) : s6._$AI(t4[i5])), i5++;
    }
  };
  __name(V2, "V");
  var N2 = class {
    constructor(t4, i5, s6, e6) {
      var o5;
      this.type = 2, this._$AH = w2, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s6, this.options = e6, this._$Cg = (o5 = e6 == null ? void 0 : e6.isConnected) === null || o5 === void 0 || o5;
    }
    get _$AU() {
      var t4, i5;
      return (i5 = (t4 = this._$AM) === null || t4 === void 0 ? void 0 : t4._$AU) !== null && i5 !== void 0 ? i5 : this._$Cg;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i5 = this._$AM;
      return i5 !== void 0 && t4.nodeType === 11 && (t4 = i5.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i5 = this) {
      t4 = P2(this, t4, i5), r3(t4) ? t4 === w2 || t4 == null || t4 === "" ? (this._$AH !== w2 && this._$AR(), this._$AH = w2) : t4 !== this._$AH && t4 !== b && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.k(t4) : u(t4) ? this.S(t4) : this.$(t4);
    }
    A(t4, i5 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t4, i5);
    }
    k(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.A(t4));
    }
    $(t4) {
      this._$AH !== w2 && r3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.k(l2.createTextNode(t4)), this._$AH = t4;
    }
    T(t4) {
      var i5;
      const { values: s6, _$litType$: e6 } = t4, o5 = typeof e6 == "number" ? this._$AC(t4) : (e6.el === void 0 && (e6.el = E2.createElement(e6.h, this.options)), e6);
      if (((i5 = this._$AH) === null || i5 === void 0 ? void 0 : i5._$AD) === o5)
        this._$AH.m(s6);
      else {
        const t5 = new V2(o5, this), i6 = t5.p(this.options);
        t5.m(s6), this.k(i6), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i5 = T2.get(t4.strings);
      return i5 === void 0 && T2.set(t4.strings, i5 = new E2(t4)), i5;
    }
    S(t4) {
      d(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s6, e6 = 0;
      for (const o5 of t4)
        e6 === i5.length ? i5.push(s6 = new N2(this.A(h2()), this.A(h2()), this, this.options)) : s6 = i5[e6], s6._$AI(o5), e6++;
      e6 < i5.length && (this._$AR(s6 && s6._$AB.nextSibling, e6), i5.length = e6);
    }
    _$AR(t4 = this._$AA.nextSibling, i5) {
      var s6;
      for ((s6 = this._$AP) === null || s6 === void 0 || s6.call(this, false, true, i5); t4 && t4 !== this._$AB; ) {
        const i6 = t4.nextSibling;
        t4.remove(), t4 = i6;
      }
    }
    setConnected(t4) {
      var i5;
      this._$AM === void 0 && (this._$Cg = t4, (i5 = this._$AP) === null || i5 === void 0 || i5.call(this, t4));
    }
  };
  __name(N2, "N");
  var S3 = class {
    constructor(t4, i5, s6, e6, o5) {
      this.type = 1, this._$AH = w2, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e6, this.options = o5, s6.length > 2 || s6[0] !== "" || s6[1] !== "" ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = w2;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4, i5 = this, s6, e6) {
      const o5 = this.strings;
      let n5 = false;
      if (o5 === void 0)
        t4 = P2(this, t4, i5, 0), n5 = !r3(t4) || t4 !== this._$AH && t4 !== b, n5 && (this._$AH = t4);
      else {
        const e7 = t4;
        let l4, h3;
        for (t4 = o5[0], l4 = 0; l4 < o5.length - 1; l4++)
          h3 = P2(this, e7[s6 + l4], i5, l4), h3 === b && (h3 = this._$AH[l4]), n5 || (n5 = !r3(h3) || h3 !== this._$AH[l4]), h3 === w2 ? t4 = w2 : t4 !== w2 && (t4 += (h3 != null ? h3 : "") + o5[l4 + 1]), this._$AH[l4] = h3;
      }
      n5 && !e6 && this.C(t4);
    }
    C(t4) {
      t4 === w2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
    }
  };
  __name(S3, "S");
  var M2 = class extends S3 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    C(t4) {
      this.element[this.name] = t4 === w2 ? void 0 : t4;
    }
  };
  __name(M2, "M");
  var k2 = i2 ? i2.emptyScript : "";
  var H = class extends S3 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    C(t4) {
      t4 && t4 !== w2 ? this.element.setAttribute(this.name, k2) : this.element.removeAttribute(this.name);
    }
  };
  __name(H, "H");
  var I2 = class extends S3 {
    constructor(t4, i5, s6, e6, o5) {
      super(t4, i5, s6, e6, o5), this.type = 5;
    }
    _$AI(t4, i5 = this) {
      var s6;
      if ((t4 = (s6 = P2(this, t4, i5, 0)) !== null && s6 !== void 0 ? s6 : w2) === b)
        return;
      const e6 = this._$AH, o5 = t4 === w2 && e6 !== w2 || t4.capture !== e6.capture || t4.once !== e6.once || t4.passive !== e6.passive, n5 = t4 !== w2 && (e6 === w2 || o5);
      o5 && this.element.removeEventListener(this.name, this, e6), n5 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      var i5, s6;
      typeof this._$AH == "function" ? this._$AH.call((s6 = (i5 = this.options) === null || i5 === void 0 ? void 0 : i5.host) !== null && s6 !== void 0 ? s6 : this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  __name(I2, "I");
  var L2 = class {
    constructor(t4, i5, s6) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s6;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      P2(this, t4);
    }
  };
  __name(L2, "L");
  var R2 = { P: "$lit$", L: e3, V: o3, I: 1, N: C2, R: V2, D: u, j: P2, H: N2, O: S3, F: H, B: I2, W: M2, Z: L2 };
  var z2 = window.litHtmlPolyfillSupport;
  z2 == null || z2(E2, N2), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.2.1");

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends a {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
    }
    createRenderRoot() {
      var t4, e6;
      const i5 = super.createRenderRoot();
      return (t4 = (e6 = this.renderOptions).renderBefore) !== null && t4 !== void 0 || (e6.renderBefore = i5.firstChild), i5;
    }
    update(t4) {
      const i5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Dt = x2(i5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t4;
      super.connectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(true);
    }
    disconnectedCallback() {
      var t4;
      super.disconnectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(false);
    }
    render() {
      return b;
    }
  };
  __name(s4, "s");
  s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  n4 == null || n4({ LitElement: s4 });
  ((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.2.0");

  // node_modules/lit-html/directive.js
  var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e4 = /* @__PURE__ */ __name((t4) => (...e6) => ({ _$litDirective$: t4, values: e6 }), "e");
  var i3 = class {
    constructor(t4) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t4, e6, i5) {
      this._$Ct = t4, this._$AM = e6, this._$Ci = i5;
    }
    _$AS(t4, e6) {
      return this.update(t4, e6);
    }
    update(t4, e6) {
      return this.render(...e6);
    }
  };
  __name(i3, "i");

  // node_modules/lit-html/directive-helpers.js
  var { H: i4 } = R2;
  var e5 = /* @__PURE__ */ __name(() => document.createComment(""), "e");
  var u2 = /* @__PURE__ */ __name((o5, t4, n5) => {
    var v3;
    const l4 = o5._$AA.parentNode, d2 = t4 === void 0 ? o5._$AB : t4._$AA;
    if (n5 === void 0) {
      const t5 = l4.insertBefore(e5(), d2), v4 = l4.insertBefore(e5(), d2);
      n5 = new i4(t5, v4, o5, o5.options);
    } else {
      const i5 = n5._$AB.nextSibling, t5 = n5._$AM, r4 = t5 !== o5;
      if (r4) {
        let i6;
        (v3 = n5._$AQ) === null || v3 === void 0 || v3.call(n5, o5), n5._$AM = o5, n5._$AP !== void 0 && (i6 = o5._$AU) !== t5._$AU && n5._$AP(i6);
      }
      if (i5 !== d2 || r4) {
        let o6 = n5._$AA;
        for (; o6 !== i5; ) {
          const i6 = o6.nextSibling;
          l4.insertBefore(o6, d2), o6 = i6;
        }
      }
    }
    return n5;
  }, "u");
  var c3 = /* @__PURE__ */ __name((o5, i5, t4 = o5) => (o5._$AI(i5, t4), o5), "c");
  var f2 = {};
  var s5 = /* @__PURE__ */ __name((o5, i5 = f2) => o5._$AH = i5, "s");
  var a3 = /* @__PURE__ */ __name((o5) => o5._$AH, "a");
  var m3 = /* @__PURE__ */ __name((o5) => {
    var i5;
    (i5 = o5._$AP) === null || i5 === void 0 || i5.call(o5, false, true);
    let t4 = o5._$AA;
    const n5 = o5._$AB.nextSibling;
    for (; t4 !== n5; ) {
      const o6 = t4.nextSibling;
      t4.remove(), t4 = o6;
    }
  }, "m");

  // node_modules/lit-html/directives/repeat.js
  var u3 = /* @__PURE__ */ __name((e6, s6, t4) => {
    const r4 = new Map();
    for (let l4 = s6; l4 <= t4; l4++)
      r4.set(e6[l4], l4);
    return r4;
  }, "u");
  var c4 = e4(class extends i3 {
    constructor(e6) {
      if (super(e6), e6.type !== t3.CHILD)
        throw Error("repeat() can only be used in text expressions");
    }
    dt(e6, s6, t4) {
      let r4;
      t4 === void 0 ? t4 = s6 : s6 !== void 0 && (r4 = s6);
      const l4 = [], o5 = [];
      let i5 = 0;
      for (const s7 of e6)
        l4[i5] = r4 ? r4(s7, i5) : i5, o5[i5] = t4(s7, i5), i5++;
      return { values: o5, keys: l4 };
    }
    render(e6, s6, t4) {
      return this.dt(e6, s6, t4).values;
    }
    update(s6, [t4, r4, c5]) {
      var d2;
      const a4 = a3(s6), { values: p2, keys: v3 } = this.dt(t4, r4, c5);
      if (!Array.isArray(a4))
        return this.ut = v3, p2;
      const h3 = (d2 = this.ut) !== null && d2 !== void 0 ? d2 : this.ut = [], m4 = [];
      let y3, x3, j2 = 0, k3 = a4.length - 1, w3 = 0, A3 = p2.length - 1;
      for (; j2 <= k3 && w3 <= A3; )
        if (a4[j2] === null)
          j2++;
        else if (a4[k3] === null)
          k3--;
        else if (h3[j2] === v3[w3])
          m4[w3] = c3(a4[j2], p2[w3]), j2++, w3++;
        else if (h3[k3] === v3[A3])
          m4[A3] = c3(a4[k3], p2[A3]), k3--, A3--;
        else if (h3[j2] === v3[A3])
          m4[A3] = c3(a4[j2], p2[A3]), u2(s6, m4[A3 + 1], a4[j2]), j2++, A3--;
        else if (h3[k3] === v3[w3])
          m4[w3] = c3(a4[k3], p2[w3]), u2(s6, a4[j2], a4[k3]), k3--, w3++;
        else if (y3 === void 0 && (y3 = u3(v3, w3, A3), x3 = u3(h3, j2, k3)), y3.has(h3[j2]))
          if (y3.has(h3[k3])) {
            const e6 = x3.get(v3[w3]), t5 = e6 !== void 0 ? a4[e6] : null;
            if (t5 === null) {
              const e7 = u2(s6, a4[j2]);
              c3(e7, p2[w3]), m4[w3] = e7;
            } else
              m4[w3] = c3(t5, p2[w3]), u2(s6, a4[j2], t5), a4[e6] = null;
            w3++;
          } else
            m3(a4[k3]), k3--;
        else
          m3(a4[j2]), j2++;
      for (; w3 <= A3; ) {
        const e6 = u2(s6, m4[A3 + 1]);
        c3(e6, p2[w3]), m4[w3++] = e6;
      }
      for (; j2 <= k3; ) {
        const e6 = a4[j2++];
        e6 !== null && m3(e6);
      }
      return this.ut = v3, s5(s6, m4), b;
    }
  });

  // src/web-components/CheckGroup.js
  var CheckGroup = class extends $s.Control {
    constructor() {
      super();
      __publicField(this, "_value", []);
      this.items = [];
    }
    static get properties() {
      return {
        items: { type: Array },
        value: { type: Object }
      };
    }
    renderInput() {
      let name = this.name;
      return $2`<div>
      ${c4(this.items, (item) => item.id, (item, index) => {
        item = this.makeItem(item);
        return $2`<label
            ><input
              @change=${this.change}
              @click=${this.toggleCheck}
              .checked=${this.isSelected(item)}
              type="checkbox"
              name="${name}"
              value="${item.value}"
            /><span class="xo-sl"> ${item.label}</span></label
          >`;
      })}
    </div>`;
    }
    change(e6) {
      e6.preventDefault();
      e6.stopPropagation();
    }
    onInput(e6) {
      e6.stopPropagation();
    }
    toggleCheck(e6) {
      e6.stopPropagation();
      if (e6.target.checked) {
        this._value.push(e6.target.value);
      } else {
        let ix = this._value.indexOf(e6.target.value);
        if (ix !== -1)
          this._value.splice(ix, 1);
      }
      this.fireChange();
    }
    checkValidity() {
    }
    isSelected(item) {
      return this._value.includes(item.value);
    }
    makeItem(item) {
      return typeof item === "string" ? { value: item, label: item } : item;
    }
    get value() {
      return this._value;
    }
    set value(value) {
      if (!Array.isArray(value))
        return;
      this._value = value;
    }
  };
  __name(CheckGroup, "CheckGroup");
  var CheckGroup_default = CheckGroup;
  window.customElements.define("xo-checkgroup", CheckGroup);

  // src/web-components/RadioGroup.js
  var RadioGroup = class extends $s.Control {
    constructor() {
      super();
      __publicField(this, "_value", []);
      __publicField(this, "_layout", "default");
      this.items = [];
    }
    static get styles() {
      return [
        $s.Context.sharedStyles,
        r`
        .cards {
          width: 100%;
          flex-wrap: wrap;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          grid-auto-rows: minmax(110px, auto);
        }

        .cards label {
          min-width: var(--card-width, 120px);
          min-height: var(--card-height, 120px);
          background-color: var(--xo-card-background);
          background-repeat: no-repeat;
          background-size: contain;
          border-radius: 10px;
          border: 2px solid var(--xo-input-border-color);
          background-image: var(--image);
        }

        .cards label:hover {
          transition: all 0.2s;
          border-color: var(--xo-input-border-color-hover);
        }

        .cards input,
        .cards .xo-sl {
          visibility: hidden;
        }

        label.selected {
          border-color: var(--accent) !important;
        }

        .cards label.selected,
        .list label.selected {
          position: relative;
          transition: all 0.2s;
        }
        .cards label.selected:after,
        .list label.selected:after {
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
        }

        .list label.selected {
        }

        .default [type="radio"],
        .list [type="radio"] {
          position: absolute;
          left: -9999px;
        }

        .default label {
          position: relative;
          padding-left: 16px;
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
      `
      ];
    }
    static get properties() {
      return {
        items: { type: Array },
        value: { type: Object },
        layout: { type: String },
        cardWidth: { type: String },
        cardHeight: { type: String }
      };
    }
    set layout(value) {
      this._layout = value;
    }
    get layout() {
      return this._layout;
    }
    renderInput() {
      let name = this.name;
      return $2`<div class="${this.layout}">
      ${c4(this.items, (item) => item.id, (item, index) => {
        item = this.makeItem(item);
        const checked = this.isSelected(item);
        return $2`<label
            title="${item.label}"
            class="${checked ? "selected" : ""}"
            style="--image: url(${item.image})"
            ><input
              @change=${this.change}
              @click=${this.toggleCheck}
              .checked=${checked}
              type="radio"
              name="${name}"
              value="${item.value}"
            /><span class="xo-sl"> ${item.label}</span></label
          >`;
      })}
    </div>`;
    }
    change(e6) {
      e6.preventDefault();
      e6.stopPropagation();
    }
    onInput(e6) {
      e6.stopPropagation();
    }
    toggleCheck(e6) {
      e6.stopPropagation();
      if (e6.target.checked) {
        this._value = e6.target.value;
      }
      this.fireChange();
    }
    checkValidity() {
      return this.required && !this.value ? false : true;
    }
    isSelected(item) {
      return this._value === item.value;
    }
    makeItem(item) {
      return typeof item === "string" ? { value: item, label: item } : item;
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
    }
  };
  __name(RadioGroup, "RadioGroup");
  window.customElements.define("xo-radiogroup", RadioGroup);

  // src/web-components/Switch.js
  var Switch = class extends $s.Control {
    constructor() {
      super(...arguments);
      __publicField(this, "_value", false);
    }
    static get styles() {
      return [
        $s.Context.sharedStyles,
        r`
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
        }
      `
      ];
    }
    renderInput() {
      return $2`<label class="switch">
      <input @change=${this.toggle} .checked=${this.value} type="checkbox" />
      <div class="knob round"></div>
      <div class="knob-lbl">${this.text}</div>
    </label>`;
    }
    connectedCallback() {
      super.connectedCallback();
      this.text = this.label;
      this.label = "";
    }
    checkValidity() {
      return true;
    }
    onInput(e6) {
      e6.preventDefault();
      e6.stopPropagation();
    }
    toggle(e6) {
      e6.preventDefault();
      e6.stopPropagation();
      this.value = e6.target.checked === true;
      this.fireChange();
    }
    get value() {
      var _a;
      return (_a = this._value) != null ? _a : false;
    }
    set value(value) {
      this._value = value;
    }
  };
  __name(Switch, "Switch");
  window.customElements.define("xo-switch", Switch);

  // src/web-components/Select.js
  var Select = class extends $s.Control {
    constructor() {
      super();
      __publicField(this, "_value", []);
      this.items = [];
    }
    static get properties() {
      return {
        items: { type: Array },
        value: { type: Object }
      };
    }
    renderInput() {
      return $2`<select @change=${this.fireChange.bind(this)} size="1">
             ${c4(this.items, (item) => item.id, (item, index) => {
        item = this.makeItem(item);
        return $2`<option .selected=${this.isSelected(item)} value="${item.value}">${item.label}</option>`;
      })}
        </select>`;
    }
    change(e6) {
      e6.preventDefault();
      e6.stopPropagation();
    }
    isSelected(item) {
      return this._value == item.value;
    }
    makeItem(item) {
      return typeof item === "string" ? { value: item, label: item } : item;
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
    }
  };
  __name(Select, "Select");
  window.customElements.define("xo-select", Select);

  // src/web-components/Tags.js
  var Tags = class extends $s.Control {
    constructor() {
      super(...arguments);
      __publicField(this, "_value", []);
      this.textInput = document.createElement("input");
      this.textInput.type = "text";
      this.textInput.addEventListener("keydown", this.input.bind(this));
    }
    set placeholder(value) {
      this.textInput.placeholder = value;
    }
    get placeholder() {
      return this.textInput.placeholder;
    }
    static get styles() {
      return [
        $s.Context.sharedStyles,
        r`
        .tags {
          display: flex;
        }
        .tag {
          white-space: nowrap;
          display: inline-block;
          margin: 0.4rem;
          border-radius: 0.3rem 1rem 1rem 0.3rem;
          background-color: var(--xo-card-background);
          color: var(--xo-card-color);
          padding: 0.3rem 0.6rem;
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
      `
      ];
    }
    static get properties() {
      return {
        value: {
          type: Array
        }
      };
    }
    onInput(e6) {
      e6.preventDefault();
      e6.stopPropagation();
    }
    get value() {
      return this._value;
    }
    set value(value) {
      if (!Array.isArray(value)) {
        console.warn("Tags value must be array");
        return;
      }
      this._value = value;
    }
    renderInput() {
      return $2`<div class="tags">
      ${c4(this.value, (item) => item.id, (item, index) => {
        return this.renderTag(item, index);
      })}
      ${this.textInput}
    </div>`;
    }
    firstUpdated() {
      super.firstUpdated();
      this.context.mapper.tryAutoComplete(this, this.textInput, this.autocomplete);
    }
    input(e6) {
      switch (e6.key) {
        case "Enter":
          if (e6.target.value !== "") {
            if (this.value.indexOf(e6.target.value) === -1) {
              this.value.push(e6.target.value);
              this.fireChange();
              this.requestUpdate();
              e6.target.value = "";
            }
          }
          break;
        case "Backspace":
          if (e6.target.value === "") {
            this.value.pop();
            this.fireChange();
            this.requestUpdate();
          }
          break;
      }
    }
    renderTag(value, index) {
      return $2`<div data-index="${index}" class="tag">
      <span class="eye">○</span><span>${value}</span>
      <a @click=${this.deleteTag}>x</a>
    </div>`;
    }
    deleteTag(e6) {
      e6.stopPropagation();
      e6.stopImmediatePropagation();
      e6.preventDefault();
      let index = parseInt(e6.target.closest("[data-index]").getAttribute("data-index"));
      this.value.splice(index, 1);
      this.requestUpdate();
    }
  };
  __name(Tags, "Tags");
  customElements.define("xo-tags", Tags);

  // src/web-components/FileDrop.js
  var DEF_HEIGHT = "100px";
  var FileDrop = class extends $s.Control {
    constructor() {
      super(...arguments);
      __publicField(this, "_value", []);
      __publicField(this, "_max", -1);
      __publicField(this, "_height", DEF_HEIGHT);
      __publicField(this, "_types", ["image/"]);
    }
    static get styles() {
      return [
        $s.Context.sharedStyles,
        r`
        .drop {
          position: relative;
          height: var(--image-height, DEF_HEIGHT);
          min-width: 200px;
        }
        input {
          position: absolute;
          width: 100%;
          height: var(--image-height, DEF_HEIGHT);
          opacity: 0;
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
          background-color: rgba(127,127,127,.1);
          display: inline-block;
          height: 100%;
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
      `
      ];
    }
    static get properties() {
      return {
        value: {
          type: Object
        },
        height: {
          type: Number
        },
        max: {
          type: Number
        },
        types: {
          type: Array
        }
      };
    }
    get height() {
      return this._height;
    }
    set height(height) {
      this._height = height;
    }
    set max(value) {
      this._max = value;
    }
    get max() {
      return this._max;
    }
    set value(value) {
      if (typeof value === "undefined")
        return;
      if (!Array.isArray(value))
        throw Error("Invalid value for filedrop");
      this._value = value;
    }
    get value() {
      return this._value;
    }
    set types(value) {
      if (!Array.isArray(value))
        throw Error("Types must be array");
      this._types = value;
    }
    get types() {
      return this._types;
    }
    renderInput() {
      const multiple = this.max !== 1 ? "multiple" : "";
      return $2`<div
      style="--image-height: ${this.height}"
      class="drop"
      @dragover=${this.dragOver}
      @dragend=${this.dragEnd}
      @dragleave=${this.dragEnd}
      @drop=${this.drop}
    >
      <input @change=${this.change} type="file" ${multiple} />
      <div class="files" part="files">
        ${c4(this.value, (item) => item.id, (item, index) => {
        return $2`<div
              class="thumb"
              style="background-image: url(${item.dataUrl})"
            >
              <a data-index="${index}" @click=${this.removeThumb.bind(this)}
                >⨉</a
              >
            </div>`;
      })}
      </div>

      <progress id="progress" value="0" max="100"></progress>
    </div>`;
    }
    removeThumb(e6) {
      let index = parseInt(e6.target.getAttribute("data-index"));
      this.value.splice(index, 1);
      this.fireChange();
      this.requestUpdate();
    }
    dragOver(e6) {
      e6.dataTransfer.dropEffect = "copy";
      this.shadowRoot.querySelector(".drop").classList.add("dropping");
      return false;
    }
    dragEnd(e6) {
      this.shadowRoot.querySelector(".drop").classList.remove("dropping");
      e6.dataTransfer.dropEffect = "none";
      return false;
    }
    drop(e6) {
      e6.preventDefault();
      e6.dataTransfer.dropEffect = "none";
      this.readFiles(e6.dataTransfer.files);
      this.dragEnd(e6);
      return false;
    }
    change(e6) {
      this.readFiles(e6.target.files);
    }
    readFiles(files) {
      this._readCount = files.length;
      this._readIndex = 0;
      [...files].forEach((file) => {
        this.readFile(file);
      });
    }
    readFile(file) {
      this.checkConstraints(file);
      const me2 = this;
      const reader = new FileReader();
      const progress = this.shadowRoot.querySelector("progress");
      progress.style.visibility = "visible";
      reader.readAsDataURL(file);
      reader.onload = function() {
        me2.value.push({
          name: file.name,
          type: file.type,
          size: file.size,
          date: new Date(file.lastModified).toISOString(),
          dataUrl: reader.result
        });
        me2._readIndex++;
        if (me2._readIndex === me2._readCount) {
          console.log("FileDrop ready reading all files");
          me2._readCount = 0;
          me2._readIndex = 0;
          me2.fireChange();
          me2.requestUpdate();
        }
      };
      reader.addEventListener("progress", (event) => {
        if (event.loaded && event.total) {
          const percent = event.loaded / event.total * 100;
          progress.value = percent;
          if (percent === 100) {
            progress.style.visibility = "hidden";
          }
        }
      });
    }
    fireChange() {
      this.classList[this.value.length ? "add" : "remove"]("has-files");
      super.fireChange();
    }
    checkConstraints(file) {
      this.checkMax();
      this.checkFileType(file.type);
      this.checkSizeLimit(file);
    }
    checkMax() {
      if (this.max !== -1 && this.value.length >= this.max)
        throw Error("Maximum number of files reached");
    }
    checkFileType(type) {
      let found = false;
      this.types.forEach((t4) => {
        if (type.indexOf(t4) === 0)
          found = true;
      });
      if (!found)
        throw Error("Invalid file type");
    }
    checkSizeLimit(file) {
      let totalSize = 0;
      this.value.forEach((f3) => {
        totalSize += f3.size;
      });
      if (totalSize > this.limit) {
        throw Error("File size limit exceeded");
      }
    }
    onInput(e6) {
      e6.preventDefault();
    }
  };
  __name(FileDrop, "FileDrop");
  customElements.define("xo-filedrop", FileDrop);

  // src/web-components/Checkbox.js
  var Checkbox = class extends CheckGroup_default {
    static get properties() {
      return {
        value: { type: Boolean }
      };
    }
    get value() {
      return this._value[0] === this.items[0].value;
    }
    set value(value) {
      if (typeof value !== "boolean")
        return;
      this._value = [value];
    }
    toggleCheck(e6) {
      this._value = [];
      super.toggleCheck(e6);
    }
    connectedCallback() {
      var _a;
      super.connectedCallback();
      this.items = [
        {
          value: "1",
          label: (_a = this.label) != null ? _a : "On"
        }
      ];
      this.label = "";
      this._value = this._value[0] === true ? ["1"] : [];
    }
  };
  __name(Checkbox, "Checkbox");
  window.customElements.define("xo-checkbox", Checkbox);

  // src/web-components/Info.js
  var Info = class extends $s.Control {
    static get properties() {
      return {
        title: {
          type: String
        },
        body: {
          type: String
        }
      };
    }
    render() {
      return $2`
            <div class="info">
                <h3>${this.title}</h3>
                <div class="info-body">
                    ${this.body}
                </div>
            </div>
        `;
    }
  };
  __name(Info, "Info");
  customElements.define("xo-info", Info);

  // src/web-components/Theme.js
  var Theme = class extends $s.Control {
    static get properties() {
      return {
        dark: {
          type: Boolean
        }
      };
    }
    static get styles() {
      return [
        $s.Context.sharedStyles,
        r`
        button {
          outline: none;
          padding: 0.5rem;
          border-radius: 100%;
          background-color: var(--theme-bg);
          position: fixed;
          top: 5px;
          right: 5px;
        }
      `
      ];
    }
    render() {
      return $2`<button
      @click=${this.click}
      style="--theme-bg: ${this.dark ? "rgba(100,100,100,.8)" : "rgba(50,50,50,.8)"}"
    >
      ${this.dark ? "\u{1F506}" : "\u{1F319}"}
    </button>`;
    }
    click(e6) {
      this.dark = !this.dark;
    }
    get dark() {
      return document.documentElement.classList.contains("theme-dark");
    }
    set dark(value) {
      document.documentElement.classList[value ? "add" : "remove"]("theme-dark");
      this.requestUpdate();
    }
  };
  __name(Theme, "Theme");
  customElements.define("pwa-theme", Theme);

  // src/web-components/Dialog.js
  var Dialog = class extends s4 {
    render() {
      console.log("render dialog");
      return $2`<dialog>
      <a class="close" @click=${this.close}>⨉</a>
      <h1>Hello</h1>
      <p>Welcome to the HTML 5.2 <code>dialog</code> element.</p>
    </dialog>`;
    }
    close(e6) {
      this.value = false;
    }
    fireChange() {
      this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
    }
    set value(value) {
      const me2 = this;
      if (!this.shadowRoot)
        return;
      const dlg = this.shadowRoot.querySelector("dialog");
      dlg.addEventListener("close", (e6) => {
        me2.fireChange();
      });
      dlg.classList.add("opening");
      setTimeout(() => {
        dlg.classList.remove("opening");
      }, 100);
      if (value)
        dlg[this.modal ? "showModal" : "show"]();
      else
        dlg.close();
    }
    checkValidity() {
      return true;
    }
    get value() {
      return this.shadowRoot.querySelector("dialog").open;
    }
  };
  __name(Dialog, "Dialog");
  __publicField(Dialog, "styles", r`
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
  `);
  __publicField(Dialog, "properties", {
    modal: { type: Boolean },
    display: { type: Boolean }
  });
  customElements.define("xo-dialog", Dialog);
})();
/**
 * @license
 * Copyright 2017 Google LLC
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
