(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a4, b4) => {
    for (var prop in b4 || (b4 = {}))
      if (__hasOwnProp.call(b4, prop))
        __defNormalProp(a4, prop, b4[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b4)) {
        if (__propIsEnum.call(b4, prop))
          __defNormalProp(a4, prop, b4[prop]);
      }
    return a4;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
    get: (a4, b4) => (typeof require !== "undefined" ? require : a4)[b4]
  }) : x3)(function(x3) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x3 + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e6) {
          reject(e6);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e6) {
          reject(e6);
        }
      };
      var step = (x3) => x3.done ? resolve(x3.value) : Promise.resolve(x3.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t, e, n, s, o, r, i, S2;
  var init_css_tag = __esm({
    "node_modules/@lit/reactive-element/css-tag.js"() {
      t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
      e = Symbol();
      n = new Map();
      s = class {
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
      o = /* @__PURE__ */ __name((t4) => new s(typeof t4 == "string" ? t4 : t4 + "", e), "o");
      r = /* @__PURE__ */ __name((t4, ...n5) => {
        const o5 = t4.length === 1 ? t4[0] : n5.reduce((e6, n6, s6) => e6 + ((t5) => {
          if (t5._$cssResult$ === true)
            return t5.cssText;
          if (typeof t5 == "number")
            return t5;
          throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(n6) + t4[s6 + 1], t4[0]);
        return new s(o5, e);
      }, "r");
      i = /* @__PURE__ */ __name((e6, n5) => {
        t ? e6.adoptedStyleSheets = n5.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n5.forEach((t4) => {
          const n6 = document.createElement("style"), s6 = window.litNonce;
          s6 !== void 0 && n6.setAttribute("nonce", s6), n6.textContent = t4.cssText, e6.appendChild(n6);
        });
      }, "i");
      S2 = t ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
        let e6 = "";
        for (const n5 of t5.cssRules)
          e6 += n5.cssText;
        return o(e6);
      })(t4) : t4;
    }
  });

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2, e2, r2, h, o2, n2, l, a;
  var init_reactive_element = __esm({
    "node_modules/@lit/reactive-element/reactive-element.js"() {
      init_css_tag();
      init_css_tag();
      e2 = window.trustedTypes;
      r2 = e2 ? e2.emptyScript : "";
      h = window.reactiveElementPolyfillSupport;
      o2 = { toAttribute(t4, i5) {
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
      n2 = /* @__PURE__ */ __name((t4, i5) => i5 !== t4 && (i5 == i5 || t4 == t4), "n");
      l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
      a = class extends HTMLElement {
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
            const t5 = h3.getPropertyOptions(n5), l5 = t5.converter, a4 = (r4 = (e6 = (s6 = l5) === null || s6 === void 0 ? void 0 : s6.fromAttribute) !== null && e6 !== void 0 ? e6 : typeof l5 == "function" ? l5 : null) !== null && r4 !== void 0 ? r4 : o2.fromAttribute;
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
    }
  });

  // node_modules/lit-html/lit-html.js
  function P2(t4, i5, s6 = t4, e6) {
    var o5, n5, l5, h3;
    if (i5 === b2)
      return i5;
    let d3 = e6 !== void 0 ? (o5 = s6._$Cl) === null || o5 === void 0 ? void 0 : o5[e6] : s6._$Cu;
    const u4 = r3(i5) ? void 0 : i5._$litDirective$;
    return (d3 == null ? void 0 : d3.constructor) !== u4 && ((n5 = d3 == null ? void 0 : d3._$AO) === null || n5 === void 0 || n5.call(d3, false), u4 === void 0 ? d3 = void 0 : (d3 = new u4(t4), d3._$AT(t4, s6, e6)), e6 !== void 0 ? ((l5 = (h3 = s6)._$Cl) !== null && l5 !== void 0 ? l5 : h3._$Cl = [])[e6] = d3 : s6._$Cu = d3), d3 !== void 0 && (i5 = P2(t4, d3._$AS(t4, i5.values), d3, e6)), i5;
  }
  var t2, i2, s3, e3, o3, n3, l2, h2, r3, d2, u, c, v2, a2, f2, _2, m2, g, p, $2, y2, b2, w2, T2, x, A, C2, E2, V2, N2, S3, M2, k2, H2, I2, L2, R2, z2;
  var init_lit_html = __esm({
    "node_modules/lit-html/lit-html.js"() {
      i2 = globalThis.trustedTypes;
      s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
      e3 = `lit$${(Math.random() + "").slice(9)}$`;
      o3 = "?" + e3;
      n3 = `<${o3}>`;
      l2 = document;
      h2 = /* @__PURE__ */ __name((t4 = "") => l2.createComment(t4), "h");
      r3 = /* @__PURE__ */ __name((t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function", "r");
      d2 = Array.isArray;
      u = /* @__PURE__ */ __name((t4) => {
        var i5;
        return d2(t4) || typeof ((i5 = t4) === null || i5 === void 0 ? void 0 : i5[Symbol.iterator]) == "function";
      }, "u");
      c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
      v2 = /-->/g;
      a2 = />/g;
      f2 = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
      _2 = /'/g;
      m2 = /"/g;
      g = /^(?:script|style|textarea|title)$/i;
      p = /* @__PURE__ */ __name((t4) => (i5, ...s6) => ({ _$litType$: t4, strings: i5, values: s6 }), "p");
      $2 = p(1);
      y2 = p(2);
      b2 = Symbol.for("lit-noChange");
      w2 = Symbol.for("lit-nothing");
      T2 = new WeakMap();
      x = /* @__PURE__ */ __name((t4, i5, s6) => {
        var e6, o5;
        const n5 = (e6 = s6 == null ? void 0 : s6.renderBefore) !== null && e6 !== void 0 ? e6 : i5;
        let l5 = n5._$litPart$;
        if (l5 === void 0) {
          const t5 = (o5 = s6 == null ? void 0 : s6.renderBefore) !== null && o5 !== void 0 ? o5 : null;
          n5._$litPart$ = l5 = new N2(i5.insertBefore(h2(), t5), t5, void 0, s6 != null ? s6 : {});
        }
        return l5._$AI(t4), l5;
      }, "x");
      A = l2.createTreeWalker(l2, 129, null, false);
      C2 = /* @__PURE__ */ __name((t4, i5) => {
        const o5 = t4.length - 1, l5 = [];
        let h3, r4 = i5 === 2 ? "<svg>" : "", d3 = c;
        for (let i6 = 0; i6 < o5; i6++) {
          const s6 = t4[i6];
          let o6, u5, p2 = -1, $4 = 0;
          for (; $4 < s6.length && (d3.lastIndex = $4, u5 = d3.exec(s6), u5 !== null); )
            $4 = d3.lastIndex, d3 === c ? u5[1] === "!--" ? d3 = v2 : u5[1] !== void 0 ? d3 = a2 : u5[2] !== void 0 ? (g.test(u5[2]) && (h3 = RegExp("</" + u5[2], "g")), d3 = f2) : u5[3] !== void 0 && (d3 = f2) : d3 === f2 ? u5[0] === ">" ? (d3 = h3 != null ? h3 : c, p2 = -1) : u5[1] === void 0 ? p2 = -2 : (p2 = d3.lastIndex - u5[2].length, o6 = u5[1], d3 = u5[3] === void 0 ? f2 : u5[3] === '"' ? m2 : _2) : d3 === m2 || d3 === _2 ? d3 = f2 : d3 === v2 || d3 === a2 ? d3 = c : (d3 = f2, h3 = void 0);
          const y4 = d3 === f2 && t4[i6 + 1].startsWith("/>") ? " " : "";
          r4 += d3 === c ? s6 + n3 : p2 >= 0 ? (l5.push(o6), s6.slice(0, p2) + "$lit$" + s6.slice(p2) + e3 + y4) : s6 + e3 + (p2 === -2 ? (l5.push(void 0), i6) : y4);
        }
        const u4 = r4 + (t4[o5] || "<?>") + (i5 === 2 ? "</svg>" : "");
        if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return [s3 !== void 0 ? s3.createHTML(u4) : u4, l5];
      }, "C");
      E2 = class {
        constructor({ strings: t4, _$litType$: s6 }, n5) {
          let l5;
          this.parts = [];
          let r4 = 0, d3 = 0;
          const u4 = t4.length - 1, c5 = this.parts, [v4, a4] = C2(t4, s6);
          if (this.el = E2.createElement(v4, n5), A.currentNode = this.el.content, s6 === 2) {
            const t5 = this.el.content, i5 = t5.firstChild;
            i5.remove(), t5.append(...i5.childNodes);
          }
          for (; (l5 = A.nextNode()) !== null && c5.length < u4; ) {
            if (l5.nodeType === 1) {
              if (l5.hasAttributes()) {
                const t5 = [];
                for (const i5 of l5.getAttributeNames())
                  if (i5.endsWith("$lit$") || i5.startsWith(e3)) {
                    const s7 = a4[d3++];
                    if (t5.push(i5), s7 !== void 0) {
                      const t6 = l5.getAttribute(s7.toLowerCase() + "$lit$").split(e3), i6 = /([.?@])?(.*)/.exec(s7);
                      c5.push({ type: 1, index: r4, name: i6[2], strings: t6, ctor: i6[1] === "." ? M2 : i6[1] === "?" ? H2 : i6[1] === "@" ? I2 : S3 });
                    } else
                      c5.push({ type: 6, index: r4 });
                  }
                for (const i5 of t5)
                  l5.removeAttribute(i5);
              }
              if (g.test(l5.tagName)) {
                const t5 = l5.textContent.split(e3), s7 = t5.length - 1;
                if (s7 > 0) {
                  l5.textContent = i2 ? i2.emptyScript : "";
                  for (let i5 = 0; i5 < s7; i5++)
                    l5.append(t5[i5], h2()), A.nextNode(), c5.push({ type: 2, index: ++r4 });
                  l5.append(t5[s7], h2());
                }
              }
            } else if (l5.nodeType === 8)
              if (l5.data === o3)
                c5.push({ type: 2, index: r4 });
              else {
                let t5 = -1;
                for (; (t5 = l5.data.indexOf(e3, t5 + 1)) !== -1; )
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
      __name(P2, "P");
      V2 = class {
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
          A.currentNode = o5;
          let n5 = A.nextNode(), h3 = 0, r4 = 0, d3 = e6[0];
          for (; d3 !== void 0; ) {
            if (h3 === d3.index) {
              let i6;
              d3.type === 2 ? i6 = new N2(n5, n5.nextSibling, this, t4) : d3.type === 1 ? i6 = new d3.ctor(n5, d3.name, d3.strings, this, t4) : d3.type === 6 && (i6 = new L2(n5, this, t4)), this.v.push(i6), d3 = e6[++r4];
            }
            h3 !== (d3 == null ? void 0 : d3.index) && (n5 = A.nextNode(), h3++);
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
      N2 = class {
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
          t4 = P2(this, t4, i5), r3(t4) ? t4 === w2 || t4 == null || t4 === "" ? (this._$AH !== w2 && this._$AR(), this._$AH = w2) : t4 !== this._$AH && t4 !== b2 && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.k(t4) : u(t4) ? this.S(t4) : this.$(t4);
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
          d2(this._$AH) || (this._$AH = [], this._$AR());
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
      S3 = class {
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
            t4 = P2(this, t4, i5, 0), n5 = !r3(t4) || t4 !== this._$AH && t4 !== b2, n5 && (this._$AH = t4);
          else {
            const e7 = t4;
            let l5, h3;
            for (t4 = o5[0], l5 = 0; l5 < o5.length - 1; l5++)
              h3 = P2(this, e7[s6 + l5], i5, l5), h3 === b2 && (h3 = this._$AH[l5]), n5 || (n5 = !r3(h3) || h3 !== this._$AH[l5]), h3 === w2 ? t4 = w2 : t4 !== w2 && (t4 += (h3 != null ? h3 : "") + o5[l5 + 1]), this._$AH[l5] = h3;
          }
          n5 && !e6 && this.C(t4);
        }
        C(t4) {
          t4 === w2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
        }
      };
      __name(S3, "S");
      M2 = class extends S3 {
        constructor() {
          super(...arguments), this.type = 3;
        }
        C(t4) {
          this.element[this.name] = t4 === w2 ? void 0 : t4;
        }
      };
      __name(M2, "M");
      k2 = i2 ? i2.emptyScript : "";
      H2 = class extends S3 {
        constructor() {
          super(...arguments), this.type = 4;
        }
        C(t4) {
          t4 && t4 !== w2 ? this.element.setAttribute(this.name, k2) : this.element.removeAttribute(this.name);
        }
      };
      __name(H2, "H");
      I2 = class extends S3 {
        constructor(t4, i5, s6, e6, o5) {
          super(t4, i5, s6, e6, o5), this.type = 5;
        }
        _$AI(t4, i5 = this) {
          var s6;
          if ((t4 = (s6 = P2(this, t4, i5, 0)) !== null && s6 !== void 0 ? s6 : w2) === b2)
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
      L2 = class {
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
      R2 = { P: "$lit$", L: e3, V: o3, I: 1, N: C2, R: V2, D: u, j: P2, H: N2, O: S3, F: H2, B: I2, W: M2, Z: L2 };
      z2 = window.litHtmlPolyfillSupport;
      z2 == null || z2(E2, N2), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.2.1");
    }
  });

  // node_modules/lit-element/lit-element.js
  var l3, o4, s4, n4;
  var init_lit_element = __esm({
    "node_modules/lit-element/lit-element.js"() {
      init_reactive_element();
      init_reactive_element();
      init_lit_html();
      init_lit_html();
      s4 = class extends a {
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
          this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Dt = x(i5, this.renderRoot, this.renderOptions);
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
          return b2;
        }
      };
      __name(s4, "s");
      s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
      n4 = globalThis.litElementPolyfillSupport;
      n4 == null || n4({ LitElement: s4 });
      ((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.2.0");
    }
  });

  // node_modules/lit/index.js
  var init_lit = __esm({
    "node_modules/lit/index.js"() {
      init_reactive_element();
      init_lit_html();
      init_lit_element();
    }
  });

  // node_modules/lit-html/directives/if-defined.js
  var l4;
  var init_if_defined = __esm({
    "node_modules/lit-html/directives/if-defined.js"() {
      init_lit_html();
      l4 = /* @__PURE__ */ __name((l5) => l5 != null ? l5 : w2, "l");
    }
  });

  // node_modules/lit/directives/if-defined.js
  var init_if_defined2 = __esm({
    "node_modules/lit/directives/if-defined.js"() {
      init_if_defined();
    }
  });

  // node_modules/lit-html/directive.js
  var t3, e4, i3;
  var init_directive = __esm({
    "node_modules/lit-html/directive.js"() {
      t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
      e4 = /* @__PURE__ */ __name((t4) => (...e6) => ({ _$litDirective$: t4, values: e6 }), "e");
      i3 = class {
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
    }
  });

  // node_modules/lit-html/directive-helpers.js
  var i4, e5, u2, c2, f3, s5, a3, m3;
  var init_directive_helpers = __esm({
    "node_modules/lit-html/directive-helpers.js"() {
      init_lit_html();
      ({ H: i4 } = R2);
      e5 = /* @__PURE__ */ __name(() => document.createComment(""), "e");
      u2 = /* @__PURE__ */ __name((o5, t4, n5) => {
        var v4;
        const l5 = o5._$AA.parentNode, d3 = t4 === void 0 ? o5._$AB : t4._$AA;
        if (n5 === void 0) {
          const t5 = l5.insertBefore(e5(), d3), v5 = l5.insertBefore(e5(), d3);
          n5 = new i4(t5, v5, o5, o5.options);
        } else {
          const i5 = n5._$AB.nextSibling, t5 = n5._$AM, r4 = t5 !== o5;
          if (r4) {
            let i6;
            (v4 = n5._$AQ) === null || v4 === void 0 || v4.call(n5, o5), n5._$AM = o5, n5._$AP !== void 0 && (i6 = o5._$AU) !== t5._$AU && n5._$AP(i6);
          }
          if (i5 !== d3 || r4) {
            let o6 = n5._$AA;
            for (; o6 !== i5; ) {
              const i6 = o6.nextSibling;
              l5.insertBefore(o6, d3), o6 = i6;
            }
          }
        }
        return n5;
      }, "u");
      c2 = /* @__PURE__ */ __name((o5, i5, t4 = o5) => (o5._$AI(i5, t4), o5), "c");
      f3 = {};
      s5 = /* @__PURE__ */ __name((o5, i5 = f3) => o5._$AH = i5, "s");
      a3 = /* @__PURE__ */ __name((o5) => o5._$AH, "a");
      m3 = /* @__PURE__ */ __name((o5) => {
        var i5;
        (i5 = o5._$AP) === null || i5 === void 0 || i5.call(o5, false, true);
        let t4 = o5._$AA;
        const n5 = o5._$AB.nextSibling;
        for (; t4 !== n5; ) {
          const o6 = t4.nextSibling;
          t4.remove(), t4 = o6;
        }
      }, "m");
    }
  });

  // node_modules/lit-html/directives/repeat.js
  var u3, c3;
  var init_repeat = __esm({
    "node_modules/lit-html/directives/repeat.js"() {
      init_lit_html();
      init_directive();
      init_directive_helpers();
      u3 = /* @__PURE__ */ __name((e6, s6, t4) => {
        const r4 = new Map();
        for (let l5 = s6; l5 <= t4; l5++)
          r4.set(e6[l5], l5);
        return r4;
      }, "u");
      c3 = e4(class extends i3 {
        constructor(e6) {
          if (super(e6), e6.type !== t3.CHILD)
            throw Error("repeat() can only be used in text expressions");
        }
        dt(e6, s6, t4) {
          let r4;
          t4 === void 0 ? t4 = s6 : s6 !== void 0 && (r4 = s6);
          const l5 = [], o5 = [];
          let i5 = 0;
          for (const s7 of e6)
            l5[i5] = r4 ? r4(s7, i5) : i5, o5[i5] = t4(s7, i5), i5++;
          return { values: o5, keys: l5 };
        }
        render(e6, s6, t4) {
          return this.dt(e6, s6, t4).values;
        }
        update(s6, [t4, r4, c5]) {
          var d3;
          const a4 = a3(s6), { values: p2, keys: v4 } = this.dt(t4, r4, c5);
          if (!Array.isArray(a4))
            return this.ut = v4, p2;
          const h3 = (d3 = this.ut) !== null && d3 !== void 0 ? d3 : this.ut = [], m5 = [];
          let y4, x3, j3 = 0, k4 = a4.length - 1, w4 = 0, A3 = p2.length - 1;
          for (; j3 <= k4 && w4 <= A3; )
            if (a4[j3] === null)
              j3++;
            else if (a4[k4] === null)
              k4--;
            else if (h3[j3] === v4[w4])
              m5[w4] = c2(a4[j3], p2[w4]), j3++, w4++;
            else if (h3[k4] === v4[A3])
              m5[A3] = c2(a4[k4], p2[A3]), k4--, A3--;
            else if (h3[j3] === v4[A3])
              m5[A3] = c2(a4[j3], p2[A3]), u2(s6, m5[A3 + 1], a4[j3]), j3++, A3--;
            else if (h3[k4] === v4[w4])
              m5[w4] = c2(a4[k4], p2[w4]), u2(s6, a4[j3], a4[k4]), k4--, w4++;
            else if (y4 === void 0 && (y4 = u3(v4, w4, A3), x3 = u3(h3, j3, k4)), y4.has(h3[j3]))
              if (y4.has(h3[k4])) {
                const e6 = x3.get(v4[w4]), t5 = e6 !== void 0 ? a4[e6] : null;
                if (t5 === null) {
                  const e7 = u2(s6, a4[j3]);
                  c2(e7, p2[w4]), m5[w4] = e7;
                } else
                  m5[w4] = c2(t5, p2[w4]), u2(s6, a4[j3], t5), a4[e6] = null;
                w4++;
              } else
                m3(a4[k4]), k4--;
            else
              m3(a4[j3]), j3++;
          for (; w4 <= A3; ) {
            const e6 = u2(s6, m5[A3 + 1]);
            c2(e6, p2[w4]), m5[w4++] = e6;
          }
          for (; j3 <= k4; ) {
            const e6 = a4[j3++];
            e6 !== null && m3(e6);
          }
          return this.ut = v4, s5(s6, m5), b2;
        }
      });
    }
  });

  // node_modules/lit/directives/repeat.js
  var init_repeat2 = __esm({
    "node_modules/lit/directives/repeat.js"() {
      init_repeat();
    }
  });

  // src/web-components/InputGroup.js
  var InputGroup, InputGroup_default;
  var init_InputGroup = __esm({
    "src/web-components/InputGroup.js"() {
      init_lit();
      init_if_defined2();
      init_repeat2();
      InputGroup = class extends s4 {
        constructor() {
          super();
          __publicField(this, "_value", []);
          __publicField(this, "_layout", "default");
          this.items = [];
        }
        static get styles() {
          return [
            r`
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
        render() {
          var _a;
          return $2`<div class="${(_a = this.layout) != null ? _a : "default"}" style=${this.getStyle()}>
      ${c3(this.items, (item) => item.id, (item, index) => {
            item = this.makeItem(item);
            item.checked = this.isSelected(item);
            item.style = this.getItemStyle(item);
            item.class = this.getItemClass(item);
            return this.renderItem(item);
          })}
    </div>`;
        }
        renderItem(item) {
          return $2`<label
      title=${item.label}
      class=${l4(item.class ? item.class : void 0)}
      style=${l4(item.style ? item.style : void 0)}
      ><input
        @change=${this.change}
        @click=${this.toggleCheck}
        .checked=${item.checked}
        type=${this.inputType}
        name="${this.name}"
        value="${item.value}"
      /><span class="xo-sl"> ${item.label}</span></label
    >`;
        }
        getItemClass(item) {
          return `${item.checked ? "selected" : ""} ${item.image ? "has-image" : ""}`.trim();
        }
        getItemStyle(item) {
          let s6 = item.image ? `--image: url(${item.image})` : void 0;
          return s6;
        }
        getStyle() {
          switch (this.layout) {
            case "cards":
              return `--card-width: ${this.cardWidth}; --card-height: ${this.cardHeight}`;
          }
        }
        get inputType() {
          throw Error("Not implemented");
        }
        change(e6) {
          e6.preventDefault();
          e6.stopPropagation();
        }
        onInput(e6) {
          e6.stopPropagation();
        }
        reportValidity() {
        }
        toggleCheck(e6) {
          throw Error("Not implemented");
        }
        checkValidity() {
          return this.required && !this.value ? false : true;
        }
        isSelected(item) {
          throw Error("Not implemented");
        }
        makeItem(item) {
          return typeof item === "string" ? { value: item, label: item } : item;
        }
      };
      __name(InputGroup, "InputGroup");
      InputGroup_default = InputGroup;
    }
  });

  // src/web-components/CheckGroup.js
  var CheckGroup, CheckGroup_default;
  var init_CheckGroup = __esm({
    "src/web-components/CheckGroup.js"() {
      init_InputGroup();
      init_lit();
      CheckGroup = class extends InputGroup_default {
        constructor() {
          super(...arguments);
          __publicField(this, "_value", []);
        }
        static get styles() {
          return [
            InputGroup_default.styles,
            r`
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
      `
          ];
        }
        static get properties() {
          return InputGroup_default.properties;
        }
        get inputType() {
          return "checkbox";
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
          this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
          this.requestUpdate();
        }
        checkValidity() {
          return this.required ? this.value.length > 0 : true;
        }
        reportValidity() {
        }
        isSelected(item) {
          return this._value.includes(item.value);
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
      CheckGroup_default = CheckGroup;
      window.customElements.define("xw-checkgroup", CheckGroup);
    }
  });

  // src/web-components/Checkbox.js
  var Checkbox, Checkbox_default;
  var init_Checkbox = __esm({
    "src/web-components/Checkbox.js"() {
      init_CheckGroup();
      Checkbox = class extends CheckGroup_default {
        constructor() {
          super(...arguments);
          __publicField(this, "_value", false);
          this.items = [
            {
              value: true,
              label: "On"
            }
          ];
        }
        static get properties() {
          return {
            value: { type: Boolean },
            text: { type: String }
          };
        }
        get value() {
          return this._value;
        }
        set value(value) {
          this._value = value;
        }
        set text(value) {
          this.items[0].label = value;
        }
        get text() {
          return this.items ? this.items[0].label : "On";
        }
        toggleCheck(e6) {
          e6.stopPropagation();
          if (e6.target.checked) {
            this._value = true;
          } else {
            this._value = false;
          }
          this.requestUpdate();
        }
        isSelected() {
          return this.value;
        }
      };
      __name(Checkbox, "Checkbox");
      Checkbox_default = Checkbox;
      window.customElements.define("xw-checkbox", Checkbox);
    }
  });

  // src/web-components/Dialog.js
  var Dialog, Dialog_default;
  var init_Dialog = __esm({
    "src/web-components/Dialog.js"() {
      init_lit();
      Dialog = class extends s4 {
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
      customElements.define("xw-dialog", Dialog);
      Dialog_default = Dialog;
    }
  });

  // src/web-components/FileDrop.js
  var DEF_THUMB_HEIGHT, FileDrop, FileDrop_default;
  var init_FileDrop = __esm({
    "src/web-components/FileDrop.js"() {
      init_lit();
      init_repeat2();
      init_if_defined2();
      DEF_THUMB_HEIGHT = "70px";
      FileDrop = class extends s4 {
        constructor() {
          super(...arguments);
          __publicField(this, "_value", []);
          __publicField(this, "_max", -1);
          __publicField(this, "_thumbSize", DEF_THUMB_HEIGHT);
          __publicField(this, "_types", ["image/"]);
        }
        static get styles() {
          return [
            r`
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
      `
          ];
        }
        static get properties() {
          return {
            value: {
              type: Object
            },
            height: {
              type: String
            },
            thumbSize: {
              type: String
            },
            max: {
              type: Number
            },
            types: {
              type: Array
            },
            infotext: {
              type: String
            }
          };
        }
        get thumbSize() {
          return this._thumbSize;
        }
        set thumbSize(height) {
          this._thumbSize = height;
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
            return;
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
        render() {
          const setinfo = this.infotext ? `--filedrop-info-text: ${this.infotext}` : "";
          const style = `--filedrop-thumb-size: ${this.thumbSize};` + setinfo;
          return $2`<div
      style="${style}"
      class="drop ${this.value.length ? "has-files" : ""}"
      @dragover=${this.dragOver}
      @dragend=${this.dragEnd}
      @dragleave=${this.dragEnd}
      @drop=${this.drop}
    >
      <input @change=${this.change} type="file" .multiple=${this.max !== 1} />
      <div class="files" part="files">
        ${c3(this.value, (item) => item.id, (item, index) => {
            return this.renderFile(item, index);
          })}
      </div>

      <progress id="progress" value="0" max="100"></progress>
    </div>`;
        }
        renderFile(item, index) {
          var _a;
          let url = (_a = item.dataUrl) != null ? _a : item.url;
          return $2`<div
      class="thumb"
      style=${l4(url ? `background-image: url(${url});` : void 0)}
    >
      <a data-index="${index}" @click=${this.removeThumb.bind(this)}>⨉</a>
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
        reportValidity() {
          this.invalidMessage = "";
          try {
            this.checkConstraints();
          } catch (ex) {
            this.validationMessage = ex.message;
            return ex.message;
          } finally {
            this.requestUpdate();
          }
        }
        checkValidity() {
          try {
            this.checkConstraints();
            return true;
          } catch (ex) {
            return false;
          }
          4;
        }
        dragEnd(e6) {
          this.shadowRoot.querySelector(".drop").classList.remove("dropping");
          e6.dataTransfer.dropEffect = "none";
          return false;
        }
        get valid() {
          return this.checkValidity();
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
          try {
            this.checkConstraints(file);
          } catch (e6) {
            return;
          }
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
          this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
        }
        checkConstraints(file) {
          this.checkMax();
          if (file) {
            this.checkFileType(file.type);
            this.checkSizeLimit(file);
          }
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
          this.value.forEach((f4) => {
            totalSize += f4.size;
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
      customElements.define("xw-filedrop", FileDrop);
      FileDrop_default = FileDrop;
    }
  });

  // src/web-components/Info.js
  var Info, Info_default;
  var init_Info = __esm({
    "src/web-components/Info.js"() {
      init_lit();
      Info = class extends s4 {
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
      customElements.define("xw-info", Info);
      Info_default = Info;
    }
  });

  // src/web-components/RadioGroup.js
  var RadioGroup, RadioGroup_default;
  var init_RadioGroup = __esm({
    "src/web-components/RadioGroup.js"() {
      init_InputGroup();
      init_lit();
      RadioGroup = class extends InputGroup_default {
        static get styles() {
          return [
            InputGroup_default.styles,
            r`
       
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
      `
          ];
        }
        static get properties() {
          return InputGroup_default.properties;
        }
        onInput(e6) {
          e6.stopPropagation();
        }
        reportValidity() {
        }
        toggleCheck(e6) {
          e6.stopPropagation();
          if (e6.target.checked) {
            this._value = e6.target.value;
          }
          this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
          this.requestUpdate();
        }
        checkValidity() {
          return this.required && !this.value ? false : true;
        }
        isSelected(item) {
          return this._value === item.value;
        }
        get inputType() {
          return "radio";
        }
        get value() {
          return this._value;
        }
        set value(value) {
          this._value = value;
        }
      };
      __name(RadioGroup, "RadioGroup");
      RadioGroup_default = RadioGroup;
      window.customElements.define("xw-radiogroup", RadioGroup);
    }
  });

  // src/web-components/Select.js
  var Select, Select_default;
  var init_Select = __esm({
    "src/web-components/Select.js"() {
      init_lit();
      init_repeat2();
      Select = class extends s4 {
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
        render() {
          return $2`<select @change=${this.fireChange.bind(this)} size="1">
      ${c3(this.items, (item) => item.id, (item, index) => {
            item = this.makeItem(item);
            return $2`<option
            .selected=${this.isSelected(item)}
            value="${item.value}"
          >
            ${item.label}
          </option>`;
          })}
    </select>`;
        }
        change(e6) {
          e6.preventDefault();
          e6.stopPropagation();
        }
        fireChange() {
          this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
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
      Select_default = Select;
      window.customElements.define("xw-select", Select);
    }
  });

  // src/web-components/Switch.js
  var Switch, Switch_default;
  var init_Switch = __esm({
    "src/web-components/Switch.js"() {
      init_lit();
      Switch = class extends s4 {
        constructor() {
          super(...arguments);
          __publicField(this, "_value", false);
        }
        static get styles() {
          return [
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
          cursor: pointer;
        }
      `
          ];
        }
        static get properties() {
          return {
            text: {
              type: String
            }
          };
        }
        render() {
          return $2`<label class="switch">
      <input @change=${this.toggle} .checked=${this.value} type="checkbox" />
      <div class="knob round"></div>
      <div class="knob-lbl">${this.text}</div>
    </label>`;
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
          this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
        }
        reportValidity() {
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
      Switch_default = Switch;
      window.customElements.define("xw-switch", Switch);
    }
  });

  // node_modules/xo-form/dist/xo-autocomplete.js
  function C3(r4, t4, e6 = r4, s6) {
    var i5, n5, o5, h3;
    if (t4 === x2)
      return t4;
    let a4 = s6 !== void 0 ? (i5 = e6._$Cl) === null || i5 === void 0 ? void 0 : i5[s6] : e6._$Cu, l5 = U2(t4) ? void 0 : t4._$litDirective$;
    return (a4 == null ? void 0 : a4.constructor) !== l5 && ((n5 = a4 == null ? void 0 : a4._$AO) === null || n5 === void 0 || n5.call(a4, false), l5 === void 0 ? a4 = void 0 : (a4 = new l5(r4), a4._$AT(r4, e6, s6)), s6 !== void 0 ? ((o5 = (h3 = e6)._$Cl) !== null && o5 !== void 0 ? o5 : h3._$Cl = [])[s6] = a4 : e6._$Cu = a4), a4 !== void 0 && (t4 = C3(r4, a4._$AS(r4, t4.values), a4, s6)), t4;
  }
  var nt2, Lt2, Mt2, ot2, It2, Nt2, q2, L3, lt2, c4, g2, zt2, at2, ht2, $3, B2, ct2, M3, j2, dt2, T3, ut2, W2, V3, I3, F2, K2, pt2, qt2, mt2, X2, ft2, Z2, v3, N3, J2, w3, vt2, y3, gt2, Bt2, E3, P3, U2, $t2, jt2, R3, yt2, _t2, _3, xt2, At2, bt2, wt2, te2, ee2, x2, m4, Et2, St2, S4, Wt2, A2, Q2, b3, k3, G2, Vt2, Y2, tt2, et2, Ct2, z3, st2, it2, H3, kt2, Ht2, Tt2, Ft2, Pt2, Ut2, rt2, Rt2, Ot2, Kt2, xo_autocomplete_default;
  var init_xo_autocomplete = __esm({
    "node_modules/xo-form/dist/xo-autocomplete.js"() {
      nt2 = Object.defineProperty;
      Lt2 = Object.defineProperties;
      Mt2 = Object.getOwnPropertyDescriptors;
      ot2 = Object.getOwnPropertySymbols;
      It2 = Object.prototype.hasOwnProperty;
      Nt2 = Object.prototype.propertyIsEnumerable;
      q2 = /* @__PURE__ */ __name((r4, t4, e6) => t4 in r4 ? nt2(r4, t4, { enumerable: true, configurable: true, writable: true, value: e6 }) : r4[t4] = e6, "q");
      L3 = /* @__PURE__ */ __name((r4, t4) => {
        for (var e6 in t4 || (t4 = {}))
          It2.call(t4, e6) && q2(r4, e6, t4[e6]);
        if (ot2)
          for (var e6 of ot2(t4))
            Nt2.call(t4, e6) && q2(r4, e6, t4[e6]);
        return r4;
      }, "L");
      lt2 = /* @__PURE__ */ __name((r4, t4) => Lt2(r4, Mt2(t4)), "lt");
      c4 = /* @__PURE__ */ __name((r4, t4) => nt2(r4, "name", { value: t4, configurable: true }), "c");
      g2 = /* @__PURE__ */ __name((r4, t4) => () => (r4 && (t4 = r4(r4 = 0)), t4), "g");
      zt2 = /* @__PURE__ */ __name((r4, t4) => () => (t4 || r4((t4 = { exports: {} }).exports, t4), t4.exports), "zt");
      at2 = /* @__PURE__ */ __name((r4, t4, e6) => (q2(r4, typeof t4 != "symbol" ? t4 + "" : t4, e6), e6), "at");
      ht2 = /* @__PURE__ */ __name((r4, t4, e6) => new Promise((s6, i5) => {
        var n5 = /* @__PURE__ */ __name((a4) => {
          try {
            h3(e6.next(a4));
          } catch (l5) {
            i5(l5);
          }
        }, "n"), o5 = /* @__PURE__ */ __name((a4) => {
          try {
            h3(e6.throw(a4));
          } catch (l5) {
            i5(l5);
          }
        }, "o"), h3 = /* @__PURE__ */ __name((a4) => a4.done ? s6(a4.value) : Promise.resolve(a4.value).then(n5, o5), "h");
        h3((e6 = e6.apply(r4, t4)).next());
      }), "ht");
      ct2 = g2(() => {
        $3 = /* @__PURE__ */ __name(class {
          static isUrl(t4) {
            try {
              return typeof t4 != "string" || t4.indexOf(`
`) !== -1 || t4.indexOf(" ") !== -1 || t4.startsWith("#/") ? false : (new URL(t4, window.location.origin), true);
            } catch (e6) {
            }
            return false;
          }
          static clone(t4) {
            if (t4 === null || typeof t4 != "object" || "isActiveClone" in t4)
              return t4;
            if (t4 instanceof Date)
              var e6 = new t4.constructor();
            else
              var e6 = t4.constructor();
            for (var s6 in t4)
              Object.prototype.hasOwnProperty.call(t4, s6) && (t4.isActiveClone = null, e6[s6] = $3.clone(t4[s6]), delete t4.isActiveClone);
            return e6;
          }
          static parseHTML(t4) {
            return new DOMParser().parseFromString(t4, "text/html").body.firstChild;
          }
          static throttle(t4, e6 = 500) {
            var s6, i5 = c4(function(n5) {
              s6 && clearTimeout(s6), s6 = setTimeout(t4, e6, n5);
            }, "throttledListener");
            return i5;
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
            var s6 = Object.keys(t4);
            return Object.keys(e6).every(function(i5) {
              return s6.indexOf(i5) !== -1;
            }) && s6.every(function(i5) {
              return $3.objectEquals(t4[i5], e6[i5]);
            });
          }
          static equals(t4, e6) {
            return Array.isArray(t4) ? $3.arrayEquals(t4, e6) : typeof t4 == "object" ? $3.objectEquals(t4, e6) : t4 === e6;
          }
          static arrayEquals(t4, e6) {
            return Array.isArray(t4) && Array.isArray(e6) && t4.length === e6.length && t4.every((s6, i5) => s6 === e6[i5]);
          }
          static scopeEval(t4, e6) {
            return Function('"use strict";' + e6).bind(t4)();
          }
          static guid(t4) {
            t4 = L3({}, t4 || {});
            let e6 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(s6) {
              var i5 = Math.random() * 16 | 0, n5 = s6 == "x" ? i5 : i5 & 3 | 8;
              return n5.toString(16);
            });
            return `${t4.prefix || ""}${t4.compact ? e6.split("-").pop() : e6}`;
          }
        }, "$");
        c4($3, "Util");
        B2 = $3;
      });
      F2 = g2(() => {
        M3 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, j2 = Symbol(), dt2 = new Map(), T3 = /* @__PURE__ */ __name(class {
          constructor(t4, e6) {
            if (this._$cssResult$ = true, e6 !== j2)
              throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = t4;
          }
          get styleSheet() {
            let t4 = dt2.get(this.cssText);
            return M3 && t4 === void 0 && (dt2.set(this.cssText, t4 = new CSSStyleSheet()), t4.replaceSync(this.cssText)), t4;
          }
          toString() {
            return this.cssText;
          }
        }, "T");
        c4(T3, "s");
        ut2 = c4((r4) => new T3(typeof r4 == "string" ? r4 : r4 + "", j2), "o"), W2 = c4((r4, ...t4) => {
          let e6 = r4.length === 1 ? r4[0] : t4.reduce((s6, i5, n5) => s6 + ((o5) => {
            if (o5._$cssResult$ === true)
              return o5.cssText;
            if (typeof o5 == "number")
              return o5;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + o5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
          })(i5) + r4[n5 + 1], r4[0]);
          return new T3(e6, j2);
        }, "r"), V3 = c4((r4, t4) => {
          M3 ? r4.adoptedStyleSheets = t4.map((e6) => e6 instanceof CSSStyleSheet ? e6 : e6.styleSheet) : t4.forEach((e6) => {
            let s6 = document.createElement("style"), i5 = window.litNonce;
            i5 !== void 0 && s6.setAttribute("nonce", i5), s6.textContent = e6.cssText, r4.appendChild(s6);
          });
        }, "i"), I3 = M3 ? (r4) => r4 : (r4) => r4 instanceof CSSStyleSheet ? ((t4) => {
          let e6 = "";
          for (let s6 of t4.cssRules)
            e6 += s6.cssText;
          return ut2(e6);
        })(r4) : r4;
      });
      N3 = g2(() => {
        F2();
        F2();
        pt2 = window.trustedTypes, qt2 = pt2 ? pt2.emptyScript : "", mt2 = window.reactiveElementPolyfillSupport, X2 = { toAttribute(r4, t4) {
          switch (t4) {
            case Boolean:
              r4 = r4 ? qt2 : null;
              break;
            case Object:
            case Array:
              r4 = r4 == null ? r4 : JSON.stringify(r4);
          }
          return r4;
        }, fromAttribute(r4, t4) {
          let e6 = r4;
          switch (t4) {
            case Boolean:
              e6 = r4 !== null;
              break;
            case Number:
              e6 = r4 === null ? null : Number(r4);
              break;
            case Object:
            case Array:
              try {
                e6 = JSON.parse(r4);
              } catch {
                e6 = null;
              }
          }
          return e6;
        } }, ft2 = c4((r4, t4) => t4 !== r4 && (t4 == t4 || r4 == r4), "n"), Z2 = { attribute: true, type: String, converter: X2, reflect: false, hasChanged: ft2 }, v3 = /* @__PURE__ */ __name(class extends HTMLElement {
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
            return this.elementProperties.forEach((e6, s6) => {
              let i5 = this._$Eh(s6, e6);
              i5 !== void 0 && (this._$Eu.set(i5, s6), t4.push(i5));
            }), t4;
          }
          static createProperty(t4, e6 = Z2) {
            if (e6.state && (e6.attribute = false), this.finalize(), this.elementProperties.set(t4, e6), !e6.noAccessor && !this.prototype.hasOwnProperty(t4)) {
              let s6 = typeof t4 == "symbol" ? Symbol() : "__" + t4, i5 = this.getPropertyDescriptor(t4, s6, e6);
              i5 !== void 0 && Object.defineProperty(this.prototype, t4, i5);
            }
          }
          static getPropertyDescriptor(t4, e6, s6) {
            return { get() {
              return this[e6];
            }, set(i5) {
              let n5 = this[t4];
              this[e6] = i5, this.requestUpdate(t4, n5, s6);
            }, configurable: true, enumerable: true };
          }
          static getPropertyOptions(t4) {
            return this.elementProperties.get(t4) || Z2;
          }
          static finalize() {
            if (this.hasOwnProperty("finalized"))
              return false;
            this.finalized = true;
            let t4 = Object.getPrototypeOf(this);
            if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
              let e6 = this.properties, s6 = [...Object.getOwnPropertyNames(e6), ...Object.getOwnPropertySymbols(e6)];
              for (let i5 of s6)
                this.createProperty(i5, e6[i5]);
            }
            return this.elementStyles = this.finalizeStyles(this.styles), true;
          }
          static finalizeStyles(t4) {
            let e6 = [];
            if (Array.isArray(t4)) {
              let s6 = new Set(t4.flat(1 / 0).reverse());
              for (let i5 of s6)
                e6.unshift(I3(i5));
            } else
              t4 !== void 0 && e6.push(I3(t4));
            return e6;
          }
          static _$Eh(t4, e6) {
            let s6 = e6.attribute;
            return s6 === false ? void 0 : typeof s6 == "string" ? s6 : typeof t4 == "string" ? t4.toLowerCase() : void 0;
          }
          o() {
            var t4;
            this._$Ep = new Promise((e6) => this.enableUpdating = e6), this._$AL = new Map(), this._$Em(), this.requestUpdate(), (t4 = this.constructor.l) === null || t4 === void 0 || t4.forEach((e6) => e6(this));
          }
          addController(t4) {
            var e6, s6;
            ((e6 = this._$Eg) !== null && e6 !== void 0 ? e6 : this._$Eg = []).push(t4), this.renderRoot !== void 0 && this.isConnected && ((s6 = t4.hostConnected) === null || s6 === void 0 || s6.call(t4));
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
            return V3(e6, this.constructor.elementStyles), e6;
          }
          connectedCallback() {
            var t4;
            this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((e6) => {
              var s6;
              return (s6 = e6.hostConnected) === null || s6 === void 0 ? void 0 : s6.call(e6);
            });
          }
          enableUpdating(t4) {
          }
          disconnectedCallback() {
            var t4;
            (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((e6) => {
              var s6;
              return (s6 = e6.hostDisconnected) === null || s6 === void 0 ? void 0 : s6.call(e6);
            });
          }
          attributeChangedCallback(t4, e6, s6) {
            this._$AK(t4, s6);
          }
          _$ES(t4, e6, s6 = Z2) {
            var i5, n5;
            let o5 = this.constructor._$Eh(t4, s6);
            if (o5 !== void 0 && s6.reflect === true) {
              let h3 = ((n5 = (i5 = s6.converter) === null || i5 === void 0 ? void 0 : i5.toAttribute) !== null && n5 !== void 0 ? n5 : X2.toAttribute)(e6, s6.type);
              this._$Ei = t4, h3 == null ? this.removeAttribute(o5) : this.setAttribute(o5, h3), this._$Ei = null;
            }
          }
          _$AK(t4, e6) {
            var s6, i5, n5;
            let o5 = this.constructor, h3 = o5._$Eu.get(t4);
            if (h3 !== void 0 && this._$Ei !== h3) {
              let a4 = o5.getPropertyOptions(h3), l5 = a4.converter, p2 = (n5 = (i5 = (s6 = l5) === null || s6 === void 0 ? void 0 : s6.fromAttribute) !== null && i5 !== void 0 ? i5 : typeof l5 == "function" ? l5 : null) !== null && n5 !== void 0 ? n5 : X2.fromAttribute;
              this._$Ei = h3, this[h3] = p2(e6, a4.type), this._$Ei = null;
            }
          }
          requestUpdate(t4, e6, s6) {
            let i5 = true;
            t4 !== void 0 && (((s6 = s6 || this.constructor.getPropertyOptions(t4)).hasChanged || ft2)(this[t4], e6) ? (this._$AL.has(t4) || this._$AL.set(t4, e6), s6.reflect === true && this._$Ei !== t4 && (this._$EC === void 0 && (this._$EC = new Map()), this._$EC.set(t4, s6))) : i5 = false), !this.isUpdatePending && i5 && (this._$Ep = this._$E_());
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
            this.hasUpdated, this._$Et && (this._$Et.forEach((i5, n5) => this[n5] = i5), this._$Et = void 0);
            let e6 = false, s6 = this._$AL;
            try {
              e6 = this.shouldUpdate(s6), e6 ? (this.willUpdate(s6), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((i5) => {
                var n5;
                return (n5 = i5.hostUpdate) === null || n5 === void 0 ? void 0 : n5.call(i5);
              }), this.update(s6)) : this._$EU();
            } catch (i5) {
              throw e6 = false, this._$EU(), i5;
            }
            e6 && this._$AE(s6);
          }
          willUpdate(t4) {
          }
          _$AE(t4) {
            var e6;
            (e6 = this._$Eg) === null || e6 === void 0 || e6.forEach((s6) => {
              var i5;
              return (i5 = s6.hostUpdated) === null || i5 === void 0 ? void 0 : i5.call(s6);
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
            this._$EC !== void 0 && (this._$EC.forEach((e6, s6) => this._$ES(s6, this[s6], e6)), this._$EC = void 0), this._$EU();
          }
          updated(t4) {
          }
          firstUpdated(t4) {
          }
        }, "v");
        c4(v3, "a");
        v3.finalized = true, v3.elementProperties = new Map(), v3.elementStyles = [], v3.shadowRootOptions = { mode: "open" }, mt2 == null || mt2({ ReactiveElement: v3 }), ((K2 = globalThis.reactiveElementVersions) !== null && K2 !== void 0 ? K2 : globalThis.reactiveElementVersions = []).push("1.3.0");
      });
      __name(C3, "C");
      z3 = g2(() => {
        w3 = globalThis.trustedTypes, vt2 = w3 ? w3.createPolicy("lit-html", { createHTML: (r4) => r4 }) : void 0, y3 = `lit$${(Math.random() + "").slice(9)}$`, gt2 = "?" + y3, Bt2 = `<${gt2}>`, E3 = document, P3 = c4((r4 = "") => E3.createComment(r4), "h"), U2 = c4((r4) => r4 === null || typeof r4 != "object" && typeof r4 != "function", "r"), $t2 = Array.isArray, jt2 = c4((r4) => {
          var t4;
          return $t2(r4) || typeof ((t4 = r4) === null || t4 === void 0 ? void 0 : t4[Symbol.iterator]) == "function";
        }, "u"), R3 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, yt2 = /-->/g, _t2 = />/g, _3 = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, xt2 = /'/g, At2 = /"/g, bt2 = /^(?:script|style|textarea|title)$/i, wt2 = c4((r4) => (t4, ...e6) => ({ _$litType$: r4, strings: t4, values: e6 }), "p"), te2 = wt2(1), ee2 = wt2(2), x2 = Symbol.for("lit-noChange"), m4 = Symbol.for("lit-nothing"), Et2 = new WeakMap(), St2 = c4((r4, t4, e6) => {
          var s6, i5;
          let n5 = (s6 = e6 == null ? void 0 : e6.renderBefore) !== null && s6 !== void 0 ? s6 : t4, o5 = n5._$litPart$;
          if (o5 === void 0) {
            let h3 = (i5 = e6 == null ? void 0 : e6.renderBefore) !== null && i5 !== void 0 ? i5 : null;
            n5._$litPart$ = o5 = new b3(t4.insertBefore(P3(), h3), h3, void 0, e6 ?? {});
          }
          return o5._$AI(r4), o5;
        }, "x"), S4 = E3.createTreeWalker(E3, 129, null, false), Wt2 = c4((r4, t4) => {
          let e6 = r4.length - 1, s6 = [], i5, n5 = t4 === 2 ? "<svg>" : "", o5 = R3;
          for (let a4 = 0; a4 < e6; a4++) {
            let l5 = r4[a4], p2, d3, u4 = -1, f4 = 0;
            for (; f4 < l5.length && (o5.lastIndex = f4, d3 = o5.exec(l5), d3 !== null); )
              f4 = o5.lastIndex, o5 === R3 ? d3[1] === "!--" ? o5 = yt2 : d3[1] !== void 0 ? o5 = _t2 : d3[2] !== void 0 ? (bt2.test(d3[2]) && (i5 = RegExp("</" + d3[2], "g")), o5 = _3) : d3[3] !== void 0 && (o5 = _3) : o5 === _3 ? d3[0] === ">" ? (o5 = i5 ?? R3, u4 = -1) : d3[1] === void 0 ? u4 = -2 : (u4 = o5.lastIndex - d3[2].length, p2 = d3[1], o5 = d3[3] === void 0 ? _3 : d3[3] === '"' ? At2 : xt2) : o5 === At2 || o5 === xt2 ? o5 = _3 : o5 === yt2 || o5 === _t2 ? o5 = R3 : (o5 = _3, i5 = void 0);
            let O2 = o5 === _3 && r4[a4 + 1].startsWith("/>") ? " " : "";
            n5 += o5 === R3 ? l5 + Bt2 : u4 >= 0 ? (s6.push(p2), l5.slice(0, u4) + "$lit$" + l5.slice(u4) + y3 + O2) : l5 + y3 + (u4 === -2 ? (s6.push(void 0), a4) : O2);
          }
          let h3 = n5 + (r4[e6] || "<?>") + (t4 === 2 ? "</svg>" : "");
          if (!Array.isArray(r4) || !r4.hasOwnProperty("raw"))
            throw Error("invalid template strings array");
          return [vt2 !== void 0 ? vt2.createHTML(h3) : h3, s6];
        }, "C"), A2 = /* @__PURE__ */ __name(class {
          constructor({ strings: t4, _$litType$: e6 }, s6) {
            let i5;
            this.parts = [];
            let n5 = 0, o5 = 0, h3 = t4.length - 1, a4 = this.parts, [l5, p2] = Wt2(t4, e6);
            if (this.el = A2.createElement(l5, s6), S4.currentNode = this.el.content, e6 === 2) {
              let d3 = this.el.content, u4 = d3.firstChild;
              u4.remove(), d3.append(...u4.childNodes);
            }
            for (; (i5 = S4.nextNode()) !== null && a4.length < h3; ) {
              if (i5.nodeType === 1) {
                if (i5.hasAttributes()) {
                  let d3 = [];
                  for (let u4 of i5.getAttributeNames())
                    if (u4.endsWith("$lit$") || u4.startsWith(y3)) {
                      let f4 = p2[o5++];
                      if (d3.push(u4), f4 !== void 0) {
                        let O2 = i5.getAttribute(f4.toLowerCase() + "$lit$").split(y3), D2 = /([.?@])?(.*)/.exec(f4);
                        a4.push({ type: 1, index: n5, name: D2[2], strings: O2, ctor: D2[1] === "." ? G2 : D2[1] === "?" ? Y2 : D2[1] === "@" ? tt2 : k3 });
                      } else
                        a4.push({ type: 6, index: n5 });
                    }
                  for (let u4 of d3)
                    i5.removeAttribute(u4);
                }
                if (bt2.test(i5.tagName)) {
                  let d3 = i5.textContent.split(y3), u4 = d3.length - 1;
                  if (u4 > 0) {
                    i5.textContent = w3 ? w3.emptyScript : "";
                    for (let f4 = 0; f4 < u4; f4++)
                      i5.append(d3[f4], P3()), S4.nextNode(), a4.push({ type: 2, index: ++n5 });
                    i5.append(d3[u4], P3());
                  }
                }
              } else if (i5.nodeType === 8)
                if (i5.data === gt2)
                  a4.push({ type: 2, index: n5 });
                else {
                  let d3 = -1;
                  for (; (d3 = i5.data.indexOf(y3, d3 + 1)) !== -1; )
                    a4.push({ type: 7, index: n5 }), d3 += y3.length - 1;
                }
              n5++;
            }
          }
          static createElement(t4, e6) {
            let s6 = E3.createElement("template");
            return s6.innerHTML = t4, s6;
          }
        }, "A");
        c4(A2, "E");
        c4(C3, "P");
        Q2 = /* @__PURE__ */ __name(class {
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
            let { el: { content: s6 }, parts: i5 } = this._$AD, n5 = ((e6 = t4 == null ? void 0 : t4.creationScope) !== null && e6 !== void 0 ? e6 : E3).importNode(s6, true);
            S4.currentNode = n5;
            let o5 = S4.nextNode(), h3 = 0, a4 = 0, l5 = i5[0];
            for (; l5 !== void 0; ) {
              if (h3 === l5.index) {
                let p2;
                l5.type === 2 ? p2 = new b3(o5, o5.nextSibling, this, t4) : l5.type === 1 ? p2 = new l5.ctor(o5, l5.name, l5.strings, this, t4) : l5.type === 6 && (p2 = new et2(o5, this, t4)), this.v.push(p2), l5 = i5[++a4];
              }
              h3 !== (l5 == null ? void 0 : l5.index) && (o5 = S4.nextNode(), h3++);
            }
            return n5;
          }
          m(t4) {
            let e6 = 0;
            for (let s6 of this.v)
              s6 !== void 0 && (s6.strings !== void 0 ? (s6._$AI(t4, s6, e6), e6 += s6.strings.length - 2) : s6._$AI(t4[e6])), e6++;
          }
        }, "Q");
        c4(Q2, "V");
        b3 = /* @__PURE__ */ __name(class {
          constructor(t4, e6, s6, i5) {
            var n5;
            this.type = 2, this._$AH = m4, this._$AN = void 0, this._$AA = t4, this._$AB = e6, this._$AM = s6, this.options = i5, this._$Cg = (n5 = i5 == null ? void 0 : i5.isConnected) === null || n5 === void 0 || n5;
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
            t4 = C3(this, t4, e6), U2(t4) ? t4 === m4 || t4 == null || t4 === "" ? (this._$AH !== m4 && this._$AR(), this._$AH = m4) : t4 !== this._$AH && t4 !== x2 && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.k(t4) : jt2(t4) ? this.S(t4) : this.$(t4);
          }
          A(t4, e6 = this._$AB) {
            return this._$AA.parentNode.insertBefore(t4, e6);
          }
          k(t4) {
            this._$AH !== t4 && (this._$AR(), this._$AH = this.A(t4));
          }
          $(t4) {
            this._$AH !== m4 && U2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.k(E3.createTextNode(t4)), this._$AH = t4;
          }
          T(t4) {
            var e6;
            let { values: s6, _$litType$: i5 } = t4, n5 = typeof i5 == "number" ? this._$AC(t4) : (i5.el === void 0 && (i5.el = A2.createElement(i5.h, this.options)), i5);
            if (((e6 = this._$AH) === null || e6 === void 0 ? void 0 : e6._$AD) === n5)
              this._$AH.m(s6);
            else {
              let o5 = new Q2(n5, this), h3 = o5.p(this.options);
              o5.m(s6), this.k(h3), this._$AH = o5;
            }
          }
          _$AC(t4) {
            let e6 = Et2.get(t4.strings);
            return e6 === void 0 && Et2.set(t4.strings, e6 = new A2(t4)), e6;
          }
          S(t4) {
            $t2(this._$AH) || (this._$AH = [], this._$AR());
            let e6 = this._$AH, s6, i5 = 0;
            for (let n5 of t4)
              i5 === e6.length ? e6.push(s6 = new b3(this.A(P3()), this.A(P3()), this, this.options)) : s6 = e6[i5], s6._$AI(n5), i5++;
            i5 < e6.length && (this._$AR(s6 && s6._$AB.nextSibling, i5), e6.length = i5);
          }
          _$AR(t4 = this._$AA.nextSibling, e6) {
            var s6;
            for ((s6 = this._$AP) === null || s6 === void 0 || s6.call(this, false, true, e6); t4 && t4 !== this._$AB; ) {
              let i5 = t4.nextSibling;
              t4.remove(), t4 = i5;
            }
          }
          setConnected(t4) {
            var e6;
            this._$AM === void 0 && (this._$Cg = t4, (e6 = this._$AP) === null || e6 === void 0 || e6.call(this, t4));
          }
        }, "b");
        c4(b3, "N");
        k3 = /* @__PURE__ */ __name(class {
          constructor(t4, e6, s6, i5, n5) {
            this.type = 1, this._$AH = m4, this._$AN = void 0, this.element = t4, this.name = e6, this._$AM = i5, this.options = n5, s6.length > 2 || s6[0] !== "" || s6[1] !== "" ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = m4;
          }
          get tagName() {
            return this.element.tagName;
          }
          get _$AU() {
            return this._$AM._$AU;
          }
          _$AI(t4, e6 = this, s6, i5) {
            let n5 = this.strings, o5 = false;
            if (n5 === void 0)
              t4 = C3(this, t4, e6, 0), o5 = !U2(t4) || t4 !== this._$AH && t4 !== x2, o5 && (this._$AH = t4);
            else {
              let h3 = t4, a4, l5;
              for (t4 = n5[0], a4 = 0; a4 < n5.length - 1; a4++)
                l5 = C3(this, h3[s6 + a4], e6, a4), l5 === x2 && (l5 = this._$AH[a4]), o5 || (o5 = !U2(l5) || l5 !== this._$AH[a4]), l5 === m4 ? t4 = m4 : t4 !== m4 && (t4 += (l5 ?? "") + n5[a4 + 1]), this._$AH[a4] = l5;
            }
            o5 && !i5 && this.C(t4);
          }
          C(t4) {
            t4 === m4 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
          }
        }, "k");
        c4(k3, "S");
        G2 = /* @__PURE__ */ __name(class extends k3 {
          constructor() {
            super(...arguments), this.type = 3;
          }
          C(t4) {
            this.element[this.name] = t4 === m4 ? void 0 : t4;
          }
        }, "G");
        c4(G2, "M");
        Vt2 = w3 ? w3.emptyScript : "", Y2 = /* @__PURE__ */ __name(class extends k3 {
          constructor() {
            super(...arguments), this.type = 4;
          }
          C(t4) {
            t4 && t4 !== m4 ? this.element.setAttribute(this.name, Vt2) : this.element.removeAttribute(this.name);
          }
        }, "Y");
        c4(Y2, "H");
        tt2 = /* @__PURE__ */ __name(class extends k3 {
          constructor(t4, e6, s6, i5, n5) {
            super(t4, e6, s6, i5, n5), this.type = 5;
          }
          _$AI(t4, e6 = this) {
            var s6;
            if ((t4 = (s6 = C3(this, t4, e6, 0)) !== null && s6 !== void 0 ? s6 : m4) === x2)
              return;
            let i5 = this._$AH, n5 = t4 === m4 && i5 !== m4 || t4.capture !== i5.capture || t4.once !== i5.once || t4.passive !== i5.passive, o5 = t4 !== m4 && (i5 === m4 || n5);
            n5 && this.element.removeEventListener(this.name, this, i5), o5 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
          }
          handleEvent(t4) {
            var e6, s6;
            typeof this._$AH == "function" ? this._$AH.call((s6 = (e6 = this.options) === null || e6 === void 0 ? void 0 : e6.host) !== null && s6 !== void 0 ? s6 : this.element, t4) : this._$AH.handleEvent(t4);
          }
        }, "tt");
        c4(tt2, "I");
        et2 = /* @__PURE__ */ __name(class {
          constructor(t4, e6, s6) {
            this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = e6, this.options = s6;
          }
          get _$AU() {
            return this._$AM._$AU;
          }
          _$AI(t4) {
            C3(this, t4);
          }
        }, "et");
        c4(et2, "L");
        Ct2 = window.litHtmlPolyfillSupport;
        Ct2 == null || Ct2(A2, b3), ((J2 = globalThis.litHtmlVersions) !== null && J2 !== void 0 ? J2 : globalThis.litHtmlVersions = []).push("2.2.0");
      });
      Ht2 = g2(() => {
        N3();
        N3();
        z3();
        z3();
        H3 = /* @__PURE__ */ __name(class extends v3 {
          constructor() {
            super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
          }
          createRenderRoot() {
            var t4, e6;
            let s6 = super.createRenderRoot();
            return (t4 = (e6 = this.renderOptions).renderBefore) !== null && t4 !== void 0 || (e6.renderBefore = s6.firstChild), s6;
          }
          update(t4) {
            let e6 = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Dt = St2(e6, this.renderRoot, this.renderOptions);
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
            return x2;
          }
        }, "H");
        c4(H3, "s");
        H3.finalized = true, H3._$litElement$ = true, (st2 = globalThis.litElementHydrateSupport) === null || st2 === void 0 || st2.call(globalThis, { LitElement: H3 });
        kt2 = globalThis.litElementPolyfillSupport;
        kt2 == null || kt2({ LitElement: H3 });
        ((it2 = globalThis.litElementVersions) !== null && it2 !== void 0 ? it2 : globalThis.litElementVersions = []).push("3.2.0");
      });
      Tt2 = g2(() => {
        N3();
        z3();
        Ht2();
      });
      Ut2 = g2(() => {
        Tt2();
        Ft2 = W2`[data-autocomplete] {
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
/*# sourceMappingURL=autocomplete.css.map */`, Pt2 = Ft2;
      });
      Ot2 = g2(() => {
        ct2();
        Ut2();
        rt2 = /* @__PURE__ */ __name(class {
          constructor(t4, e6, s6) {
            at2(this, "cssClasses", { result: "xo-ac-rs", item: "xo-ac-itm" });
            if (this.settings = s6, this.control = t4, this.htmlElement = e6, this.htmlElement.setAttribute("autocomplete", "off"), this.categories = s6.categories || {}, !s6.items)
              throw TypeError("Must pass items array, function or promise in autocomplete settings");
            this.items = s6.items;
          }
          static get sharedStyles() {
            return this._sheet || (this._sheet = new CSSStyleSheet(), this._sheet.replaceSync(Pt2)), this._sheet;
          }
          attach() {
            let t4 = this.isXoControl(this.control), e6 = c4((i5, n5) => {
              this.htmlElement.addEventListener(i5, n5);
            }, "on");
            e6("input", this.inputHandler.bind(this)), e6("click", this.clickHandler.bind(this)), e6("focusout", this.blurHandler.bind(this)), e6("keyup", this.keyUpHandler.bind(this)), e6("keydown", this.keyDownHandler.bind(this)), this.resultsDiv = document.createElement("div"), this.resultsDiv.title = "", this.resultsDiv.classList.add(this.cssClasses.result), this.resultsDiv.addEventListener("mousedown", this.resultClick.bind(this));
            let s6 = t4 ? this.control.shadowRoot.querySelector(".xo-cn") : this.control.shadowRoot.querySelector("*");
            s6.appendChild(this.resultsDiv), this.clear(), s6.setAttribute("data-autocomplete", "on");
          }
          isXoControl(t4) {
            var e6;
            return (e6 = t4.shadowRoot) == null ? void 0 : e6.querySelector(".xo-cn");
          }
          moveResult(t4) {
            this.show();
            let e6 = this.resultsDiv.querySelectorAll("div"), s6 = e6.length;
            this.rowIndex = this.rowIndex + t4, this.rowIndex <= 0 ? this.rowIndex = 0 : this.rowIndex > s6 - 1 && (this.rowIndex = 0), e6.forEach((n5) => {
              n5.classList.remove("selected");
            });
            let i5 = this.getSelectedDiv();
            i5 ? (i5.classList.add("selected"), i5.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })) : this.clickHandler({ target: this.htmlElement });
          }
          getSelectedDiv() {
            return this.resultsDiv.querySelector(`div:nth-child(${this.rowIndex + 1})`);
          }
          selectResult(t4) {
            var e6, s6;
            if (t4 = t4 || this.getSelectedDiv(), t4) {
              let i5 = parseInt(t4.getAttribute("data-index"));
              this.resultClicked = true;
              let n5 = this.results[i5], o5 = (e6 = this.categories[n5.category]) != null ? e6 : {};
              o5.action = (s6 = o5.action) != null ? s6 : this.setText.bind(this), o5.newTab && (this.tabWindow = window.open("about:blank", "_blank"));
              let h3 = lt2(L3({}, n5), { search: this.htmlElement.value });
              t4.classList.add("active"), setTimeout(() => {
                o5.action(h3), o5.newTab && (h3.url ? this.tabWindow.location.href = h3.url : this.tabWindow.close());
                var a4 = new Event("change", { bubbles: true });
                this.htmlElement.dispatchEvent(a4), this.clear();
                let l5 = new Event("result-selected", { bubbles: false });
                l5.detail = { text: h3.text }, this.htmlElement.dispatchEvent(l5);
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
            this.getItems(e6, t4).then((s6) => {
              this.clear(), this.resultsHandler(s6, e6);
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
            let s6 = { suggest: true, search: t4 || "", categories: this.categories };
            this.getItems(s6, e6).then((i5) => {
              this.htmlElement.dispatchEvent(new CustomEvent("show-results", { detail: { results: i5 } })), this.resultsHandler(i5, s6);
            });
          }
          resultsHandler(t4, e6) {
            this.results = t4, this.rowIndex = -1;
            let s6 = 0;
            t4.forEach((i5) => {
              let n5 = null, o5 = e6.categories[i5.category] || {};
              i5.image && (i5.icon = "xo-ac-img", n5 = `style="background-image: url('${i5.image}')"`), i5.element ? this.resultsDiv.appendChild(i5.element) : (i5 = typeof i5 == "string" ? { text: i5 } : i5, this.resultsDiv.appendChild(B2.parseHTML(`<div title="${i5.tooltip || ""}" data-index="${s6}" class="${this.cssClasses.item}">
                            <span ${n5} class="${i5.icon || o5.icon}"></span>
                            <span class="text">${this.formatResultItem(i5, e6, o5)}</span>
                            <span class="category">${i5.category || ""}</span></div>`))), s6++;
            }), t4.length && this.show();
          }
          formatResultItem(t4, e6, s6) {
            var n5;
            t4 = typeof t4 == "string" ? { text: t4 } : t4;
            let i5 = t4.text;
            return e6.search && (i5 = i5.replace("%search%", e6.search), t4.description = (n5 = t4.description) == null ? void 0 : n5.replace("%search%", e6.search)), i5 = this.highlight(i5, e6.search), t4.description && (i5 = `<div>${i5}</div><small>${t4.description}</small>`), s6.format && (i5 = s6.format({ item: t4, result: i5, options: e6 })), i5;
          }
          highlight(t4, e6) {
            var s6 = new RegExp("(" + e6 + ")", "gi");
            return t4.replace(s6, '<span class="txt-hl">$1</span>');
          }
          getItems(t4, e6) {
            return ht2(this, null, function* () {
              let s6 = this.settings.map, i5 = c4((h3) => (typeof h3 == "string" && (h3 = { text: h3 }), h3), "normalizeItem"), n5 = c4((h3) => s6 ? h3.map((a4) => ({ text: a4[s6] })) : h3, "map"), o5 = c4((h3) => (this.settings.max && this.settings.max > 0 && (h3.length = this.settings.max), h3), "max");
              return new Promise((h3) => {
                if (B2.isUrl(this.items)) {
                  if (this.settings.minlength > 0 && (!t4.search || t4.search.length < this.settings.minlength)) {
                    h3([]);
                    return;
                  }
                  let a4 = this.formatSearch(this.items, t4);
                  fetch(a4).then((l5) => {
                    if (l5.status === 200) {
                      l5.json().then((p2) => {
                        p2 = n5(p2), h3(o5(p2.filter((d3) => this.isMatch(t4, d3))));
                      });
                      return;
                    }
                    throw Error(`HTTP error ${l5.status} - ${a4}`);
                  });
                } else if (Array.isArray(this.items)) {
                  let a4 = true;
                  this.items = this.items.map((l5) => typeof l5 == "string" ? { text: l5 } : (a4 = false, l5)), a4 && this.control.classList.add("simple"), h3(o5(n5(this.items.filter((l5) => this.isMatch(t4, l5)))));
                } else if (typeof this.items == "function") {
                  t4.control = this.control;
                  let a4 = this.items(t4, e6).then((l5) => {
                    l5 = l5.map((p2) => i5(p2)), l5 = n5(l5.filter((p2) => this.isMatch(t4, p2))), h3(l5);
                  });
                } else
                  return h3(Promise.resolve(this.items.apply(this, t4)));
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
            var s6, i5;
            return ((s6 = e6.text) == null ? void 0 : s6.indexOf("%search%")) >= 0 ? true : t4.search ? ((i5 = e6.text) == null ? void 0 : i5.toLowerCase().indexOf(t4.search.toLowerCase())) >= 0 : t4.suggest;
          }
        }, "rt");
        c4(rt2, "AutoComplete");
        Rt2 = rt2;
      });
      Kt2 = zt2(($e2, Dt2) => {
        Ot2();
        Dt2.exports = { AutoComplete: Rt2 };
      });
      xo_autocomplete_default = Kt2();
    }
  });

  // src/web-components/Tags.js
  var DEF_MAX_WIDTH, AutoComplete, Tags, Tags_default;
  var init_Tags = __esm({
    "src/web-components/Tags.js"() {
      init_lit();
      init_repeat2();
      init_xo_autocomplete();
      DEF_MAX_WIDTH = "100%";
      AutoComplete = xo_autocomplete_default.AutoComplete;
      Tags = class extends s4 {
        constructor() {
          super(...arguments);
          __publicField(this, "_value", []);
          this.textInput = document.createElement("input");
          this.textInput.type = "text";
          this.textInput.addEventListener("keydown", this.input.bind(this));
          this.listenToAutoCompleteEvents();
        }
        listenToAutoCompleteEvents() {
          this.textInput.addEventListener("result-selected", (e6) => {
            this.textInput.value = e6.detail.text;
            this.tryAdd();
          });
          this.textInput.addEventListener("show-results", (e6) => {
            const r4 = e6.detail.results;
            this.value.forEach((tag) => {
              let index = r4.findIndex((i5) => {
                return i5.text === tag;
              });
              if (index !== -1) {
                r4.splice(index, 1);
              }
            });
          });
        }
        set placeholder(value) {
          this.textInput.placeholder = value;
        }
        get placeholder() {
          return this.textInput.placeholder;
        }
        firstUpdated() {
          super.firstUpdated();
          if (this.autocomplete && this.autocomplete.items) {
            if (typeof AutoComplete !== "undefined") {
              this._autoCompleter = new AutoComplete(this, this.textInput, this.autocomplete);
              this._autoCompleter.attach();
            }
          }
        }
        static get styles() {
          return [
            typeof AutoComplete !== "undefined" ? AutoComplete.sharedStyles : r``,
            r`
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
      `
          ];
        }
        static get properties() {
          return {
            value: {
              type: Array
            },
            maxWidth: {
              type: String
            },
            autocomplete: {
              type: Object
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
            return;
          }
          this._value = value;
        }
        render() {
          var _a;
          return $2`<div
      class="tags"
      style="--max-tags-width: ${(_a = this.maxWidth) != null ? _a : DEF_MAX_WIDTH}"
    >
      ${c3(this.value, (item) => item.id, (item, index) => {
            return this.renderTag(item, index);
          })}
      ${this.textInput}
    </div>`;
        }
        reportValidity() {
          return true;
        }
        checkValidity() {
          return true;
        }
        input(e6) {
          switch (e6.key) {
            case "Enter":
              if (e6.target.value !== "") {
                this.tryAdd(e6.target.value);
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
        tryAdd() {
          if (this.value.indexOf(this.textInput.value) === -1) {
            this.value.push(this.textInput.value);
            this.fireChange();
            this.requestUpdate();
            this.textInput.value = "";
          }
        }
        fireChange() {
          this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
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
      customElements.define("xw-tags", Tags);
      Tags_default = Tags;
    }
  });

  // src/web-components/Util.js
  var Util, Util_default;
  var init_Util = __esm({
    "src/web-components/Util.js"() {
      Util = class {
        static require(src, c5) {
          var d3 = document;
          let elm = d3.head.querySelector(`script[src="${src}"]`);
          if (elm) {
            let loadState = elm.getAttribute("data-exf-rl");
            if (loadState) {
              if (loadState === "1") {
                elm.addEventListener("load", (ev) => {
                  ev.target.setAttribute("data-exf-rl", "2");
                  if (typeof c5 === "function") {
                    c5();
                  }
                });
              } else if (loadState === "2" && typeof c5 === "function") {
                c5();
              }
              return;
            }
          }
          return new Promise((resolve, reject) => {
            const check = /* @__PURE__ */ __name(() => {
              if (typeof c5 === "function") {
                c5();
              }
              resolve();
            }, "check");
            let e6 = d3.createElement("script");
            e6.setAttribute("data-exf-rl", "1");
            e6.src = src;
            d3.head.appendChild(e6);
            e6.onload = (ev) => {
              ev.target.setAttribute("data-exf-rl", "2");
              check();
            };
          });
        }
        static throttleEvent(elm, eventName, callback, delay = 100) {
          let timeout;
          callback();
          elm.addEventListener(eventName, (e6) => {
            clearTimeout(timeout);
            timeout = setTimeout(callback, delay);
          });
        }
        static scopeEval(scope, script) {
          return Function('"use strict";' + script).bind(scope)();
        }
      };
      __name(Util, "Util");
      Util_default = Util;
    }
  });

  // src/web-components/Monaco.js
  var MONACO_VERSION, getTheme, Monaco, Monaco_default;
  var init_Monaco = __esm({
    "src/web-components/Monaco.js"() {
      init_lit();
      init_Util();
      MONACO_VERSION = "0.33.0";
      getTheme = /* @__PURE__ */ __name(() => {
        return document.documentElement.classList.contains("theme-dark") ? "vs-dark" : "vs-light";
      }, "getTheme");
      Monaco = class extends s4 {
        constructor() {
          super(...arguments);
          __publicField(this, "_version", MONACO_VERSION);
          __publicField(this, "language", "javascript");
          __publicField(this, "_theme", getTheme());
        }
        get version() {
          return this._version;
        }
        set version(version) {
          this._version = version;
        }
        static get properties() {
          return {
            version: {
              type: String
            },
            language: {
              type: String
            },
            theme: {
              type: String
            },
            value: {
              type: String
            }
          };
        }
        render() {
          return $2`<div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/monaco-editor@${this.version}/min/vs/editor/editor.main.css"
      />
      <div id="monaco" style="height: 300px; width: 100%"></div>
    </div>`;
        }
        get theme() {
          return this._theme;
        }
        set theme(name) {
          this._theme = name;
          if (monaco && monaco.editor)
            monaco.editor.setTheme(name);
        }
        firstUpdated() {
          var __superGet = (key) => super[key];
          return __async(this, null, function* () {
            const me2 = this;
            yield __superGet("firstUpdated").call(this);
            let monaco2 = yield this.requireMonaco();
            const detail = {
              editorOptions: __spreadValues({
                readOnly: this.readonly,
                value: this.value || "",
                language: this.language,
                theme: this.theme
              }, this.options || {})
            };
            this.dispatchEvent(new CustomEvent("create", {
              detail
            }));
            let div = this.shadowRoot.getElementById("monaco");
            this.editor = monaco2.editor.create(div, detail.editorOptions);
            this.dispatchEvent(new CustomEvent("ready"));
            this.editor.getModel().onDidChangeContent((e6) => {
              this.dispatchEvent(new CustomEvent("editor-change"));
            });
            Util_default.throttleEvent(this, "editor-change", () => {
              me2.value = this.editor.getModel().getValue();
              me2.fireChange();
            }, 100);
            Util_default.throttleEvent(window, "resize", () => {
              me2.editor.layout();
            });
            this.listenThemeChange();
          });
        }
        checkValidity() {
          return true;
        }
        reportValidity() {
        }
        listenThemeChange() {
          const me2 = this;
          var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              if (mutation.type === "attributes") {
                me2.theme = getTheme();
              }
            });
          });
          observer.observe(document.documentElement, {
            attributes: true
          });
        }
        requireMonaco() {
          return __async(this, null, function* () {
            const me2 = this;
            return new Promise((resolve) => {
              Util_default.require(`https://unpkg.com/monaco-editor@${me2.version}/min/vs/loader.js`, () => {
                __require.config({
                  paths: {
                    vs: `https://unpkg.com/monaco-editor@${me2.version}/min/vs`
                  }
                });
                window.MonacoEnvironment = { getWorkerUrl: () => proxy };
                let proxy = URL.createObjectURL(new Blob([
                  `self.MonacoEnvironment = {
                    baseUrl: 'https://unpkg.com/monaco-editor@${me2.version}/min/'
                };
                importScripts('https://unpkg.com/monaco-editor@${me2.version}/min/vs/base/worker/workerMain.js');`
                ], { type: "text/javascript" }));
                __require(["vs/editor/editor.main"], () => {
                  resolve(monaco);
                });
              });
            });
          });
        }
        fireChange() {
          this.dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
        }
        set value(data) {
          if (this._value === data)
            return;
          this._value = data;
          if (this.editor) {
            if (this.editor.getModel().getValue() !== data)
              this.editor.getModel().setValue(data);
          }
        }
        get value() {
          var _a;
          return ((_a = this.editor) == null ? void 0 : _a.getModel().getValue()) || this._value;
        }
      };
      __name(Monaco, "Monaco");
      customElements.define("xw-monaco", Monaco);
      Monaco_default = Monaco;
    }
  });

  // src/web-components/OmniBox.js
  var AutoComplete2, OmniBox, OmniBox_default;
  var init_OmniBox = __esm({
    "src/web-components/OmniBox.js"() {
      init_lit();
      init_xo_autocomplete();
      AutoComplete2 = xo_autocomplete_default.AutoComplete;
      OmniBox = class extends s4 {
        constructor() {
          super(...arguments);
          __publicField(this, "_value", []);
          __publicField(this, "_categories", {});
        }
        static get properties() {
          return {
            categories: { type: Object },
            value: { type: Object },
            placeholder: { type: String }
          };
        }
        static get styles() {
          return [
            AutoComplete2.sharedStyles,
            r`
        input {
          border: 0px;
          width: 100%;
          outline: none;
          background-color: transparent;
          line-height: 1.1rem;
        }
      `
          ];
        }
        get categories() {
          return this._categories;
        }
        set categories(categories) {
          this._categories = categories;
        }
        render() {
          return $2`<div>
      <input placeholder=${this.placeholder} type="search" />
    </div>`;
        }
        firstUpdated() {
          super.firstUpdated();
          let input = this.shadowRoot.querySelector("input");
          input.addEventListener("result-selected", (e6) => {
            input.value = e6.detail.text;
          });
          this._autoCompleter = new AutoComplete2(this, input, {
            categories: this.categories,
            items: this.items
          });
          this._autoCompleter.attach();
        }
        items(options) {
          return __async(this, null, function* () {
            var _a;
            let arr = [];
            options.results = [];
            for (var c5 in options.categories) {
              let catHandler = options.categories[c5];
              catHandler.trigger = (_a = catHandler.trigger) != null ? _a : (e6) => {
                return true;
              };
              options.results = arr;
              if (catHandler.trigger(options)) {
                let catResults = [];
                try {
                  catResults = yield catHandler.getItems(options);
                } catch (ex) {
                  console.warn(`Error loading items for omniBox category '${c5}'.`, ex);
                }
                arr = arr.concat(catResults.map((i5) => {
                  i5.category = c5;
                  return i5;
                }));
              }
            }
            return arr;
          });
        }
        get value() {
          return this._value;
        }
        set value(value) {
          this._value = value;
        }
      };
      __name(OmniBox, "OmniBox");
      OmniBox_default = OmniBox;
      window.customElements.define("xw-omnibox", OmniBox);
    }
  });

  // src/web-components/Theme.js
  var Theme, Theme_default;
  var init_Theme = __esm({
    "src/web-components/Theme.js"() {
      init_lit();
      Theme = class extends s4 {
        static get properties() {
          return {
            dark: {
              type: Boolean
            }
          };
        }
        static get styles() {
          return [
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
        constructor() {
          super();
          this.cls = document.documentElement.classList;
          this.dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        get dark() {
          return this._dark;
        }
        set dark(value) {
          this._dark = value;
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
          return this.cls.contains("theme-dark");
        }
        set dark(value) {
          this.cls[value ? "add" : "remove"]("theme-dark");
          this.cls[!value ? "add" : "remove"]("theme-light");
          this.requestUpdate();
        }
      };
      __name(Theme, "Theme");
      customElements.define("xw-theme", Theme);
      Theme_default = Theme;
    }
  });

  // src/web-components/index.js
  var require_web_components = __commonJS({
    "src/web-components/index.js"(exports, module) {
      init_Checkbox();
      init_CheckGroup();
      init_Dialog();
      init_FileDrop();
      init_Info();
      init_RadioGroup();
      init_Select();
      init_Switch();
      init_Tags();
      init_Monaco();
      init_OmniBox();
      init_Theme();
      module.exports = {
        Checkbox: Checkbox_default,
        CheckGroup: CheckGroup_default,
        Dialog: Dialog_default,
        FileDrop: FileDrop_default,
        Info: Info_default,
        Monaco: Monaco_default,
        OmniBox: OmniBox_default,
        RadioGroup: RadioGroup_default,
        Select: Select_default,
        Switch: Switch_default,
        Tags: Tags_default,
        Theme: Theme_default
      };
    }
  });

  // node_modules/xo-form/dist/xo-form.js
  var Ut = Object.defineProperty;
  var me = Object.defineProperties;
  var fe = Object.getOwnPropertyDescriptors;
  var Rt = Object.getOwnPropertySymbols;
  var ge = Object.prototype.hasOwnProperty;
  var ve = Object.prototype.propertyIsEnumerable;
  var ht = /* @__PURE__ */ __name((n5, t4, e6) => t4 in n5 ? Ut(n5, t4, { enumerable: true, configurable: true, writable: true, value: e6 }) : n5[t4] = e6, "ht");
  var E = /* @__PURE__ */ __name((n5, t4) => {
    for (var e6 in t4 || (t4 = {}))
      ge.call(t4, e6) && ht(n5, e6, t4[e6]);
    if (Rt)
      for (var e6 of Rt(t4))
        ve.call(t4, e6) && ht(n5, e6, t4[e6]);
    return n5;
  }, "E");
  var K = /* @__PURE__ */ __name((n5, t4) => me(n5, fe(t4)), "K");
  var d = /* @__PURE__ */ __name((n5, t4) => Ut(n5, "name", { value: t4, configurable: true }), "d");
  var v = /* @__PURE__ */ __name((n5, t4, e6) => (ht(n5, typeof t4 != "symbol" ? t4 + "" : t4, e6), e6), "v");
  var Y = /* @__PURE__ */ __name((n5, t4, e6) => new Promise((i5, s6) => {
    var r4 = /* @__PURE__ */ __name((l5) => {
      try {
        a4(e6.next(l5));
      } catch (c5) {
        s6(c5);
      }
    }, "r"), o5 = /* @__PURE__ */ __name((l5) => {
      try {
        a4(e6.throw(l5));
      } catch (c5) {
        s6(c5);
      }
    }, "o"), a4 = /* @__PURE__ */ __name((l5) => l5.done ? i5(l5.value) : Promise.resolve(l5.value).then(r4, o5), "a");
    a4((e6 = e6.apply(n5, t4)).next());
  }), "Y");
  var F = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var ut = Symbol();
  var Nt = new Map();
  var j = /* @__PURE__ */ __name(class {
    constructor(t4, e6) {
      if (this._$cssResult$ = true, e6 !== ut)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4;
    }
    get styleSheet() {
      let t4 = Nt.get(this.cssText);
      return F && t4 === void 0 && (Nt.set(this.cssText, t4 = new CSSStyleSheet()), t4.replaceSync(this.cssText)), t4;
    }
    toString() {
      return this.cssText;
    }
  }, "j");
  d(j, "s");
  var Ot = d((n5) => new j(typeof n5 == "string" ? n5 : n5 + "", ut), "o");
  var I = d((n5, ...t4) => {
    let e6 = n5.length === 1 ? n5[0] : t4.reduce((i5, s6, r4) => i5 + ((o5) => {
      if (o5._$cssResult$ === true)
        return o5.cssText;
      if (typeof o5 == "number")
        return o5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + o5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s6) + n5[r4 + 1], n5[0]);
    return new j(e6, ut);
  }, "r");
  var pt = d((n5, t4) => {
    F ? n5.adoptedStyleSheets = t4.map((e6) => e6 instanceof CSSStyleSheet ? e6 : e6.styleSheet) : t4.forEach((e6) => {
      let i5 = document.createElement("style"), s6 = window.litNonce;
      s6 !== void 0 && i5.setAttribute("nonce", s6), i5.textContent = e6.cssText, n5.appendChild(i5);
    });
  }, "i");
  var Z = F ? (n5) => n5 : (n5) => n5 instanceof CSSStyleSheet ? ((t4) => {
    let e6 = "";
    for (let i5 of t4.cssRules)
      e6 += i5.cssText;
    return Ot(e6);
  })(n5) : n5;
  var mt;
  var Ht = window.trustedTypes;
  var xe = Ht ? Ht.emptyScript : "";
  var Lt = window.reactiveElementPolyfillSupport;
  var ft = { toAttribute(n5, t4) {
    switch (t4) {
      case Boolean:
        n5 = n5 ? xe : null;
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
  var Dt = d((n5, t4) => t4 !== n5 && (t4 == t4 || n5 == n5), "n");
  var gt = { attribute: true, type: String, converter: ft, reflect: false, hasChanged: Dt };
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
    static createProperty(t4, e6 = gt) {
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
      return this.elementProperties.get(t4) || gt;
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
          e6.unshift(Z(s6));
      } else
        t4 !== void 0 && e6.push(Z(t4));
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
      return pt(e6, this.constructor.elementStyles), e6;
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
    _$ES(t4, e6, i5 = gt) {
      var s6, r4;
      let o5 = this.constructor._$Eh(t4, i5);
      if (o5 !== void 0 && i5.reflect === true) {
        let a4 = ((r4 = (s6 = i5.converter) === null || s6 === void 0 ? void 0 : s6.toAttribute) !== null && r4 !== void 0 ? r4 : ft.toAttribute)(e6, i5.type);
        this._$Ei = t4, a4 == null ? this.removeAttribute(o5) : this.setAttribute(o5, a4), this._$Ei = null;
      }
    }
    _$AK(t4, e6) {
      var i5, s6, r4;
      let o5 = this.constructor, a4 = o5._$Eu.get(t4);
      if (a4 !== void 0 && this._$Ei !== a4) {
        let l5 = o5.getPropertyOptions(a4), c5 = l5.converter, u4 = (r4 = (s6 = (i5 = c5) === null || i5 === void 0 ? void 0 : i5.fromAttribute) !== null && s6 !== void 0 ? s6 : typeof c5 == "function" ? c5 : null) !== null && r4 !== void 0 ? r4 : ft.fromAttribute;
        this._$Ei = a4, this[a4] = u4(e6, l5.type), this._$Ei = null;
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
  d($, "a");
  $.finalized = true, $.elementProperties = new Map(), $.elementStyles = [], $.shadowRootOptions = { mode: "open" }, Lt == null || Lt({ ReactiveElement: $ }), ((mt = globalThis.reactiveElementVersions) !== null && mt !== void 0 ? mt : globalThis.reactiveElementVersions = []).push("1.3.0");
  var vt;
  var O = globalThis.trustedTypes;
  var Vt = O ? O.createPolicy("lit-html", { createHTML: (n5) => n5 }) : void 0;
  var w = `lit$${(Math.random() + "").slice(9)}$`;
  var zt = "?" + w;
  var be = `<${zt}>`;
  var H = document;
  var B = d((n5 = "") => H.createComment(n5), "h");
  var q = d((n5) => n5 === null || typeof n5 != "object" && typeof n5 != "function", "r");
  var jt = Array.isArray;
  var ye = d((n5) => {
    var t4;
    return jt(n5) || typeof ((t4 = n5) === null || t4 === void 0 ? void 0 : t4[Symbol.iterator]) == "function";
  }, "u");
  var G = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var Bt = /-->/g;
  var qt = />/g;
  var M = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
  var Gt = /'/g;
  var Wt = /"/g;
  var Kt = /^(?:script|style|textarea|title)$/i;
  var Yt = d((n5) => (t4, ...e6) => ({ _$litType$: n5, strings: t4, values: e6 }), "p");
  var m = Yt(1);
  var ze = Yt(2);
  var _ = Symbol.for("lit-noChange");
  var f = Symbol.for("lit-nothing");
  var Ft = new WeakMap();
  var Zt = d((n5, t4, e6) => {
    var i5, s6;
    let r4 = (i5 = e6 == null ? void 0 : e6.renderBefore) !== null && i5 !== void 0 ? i5 : t4, o5 = r4._$litPart$;
    if (o5 === void 0) {
      let a4 = (s6 = e6 == null ? void 0 : e6.renderBefore) !== null && s6 !== void 0 ? s6 : null;
      r4._$litPart$ = o5 = new R(t4.insertBefore(B(), a4), a4, void 0, e6 ?? {});
    }
    return o5._$AI(n5), o5;
  }, "x");
  var L = H.createTreeWalker(H, 129, null, false);
  var _e = d((n5, t4) => {
    let e6 = n5.length - 1, i5 = [], s6, r4 = t4 === 2 ? "<svg>" : "", o5 = G;
    for (let l5 = 0; l5 < e6; l5++) {
      let c5 = n5[l5], u4, h3, p2 = -1, g3 = 0;
      for (; g3 < c5.length && (o5.lastIndex = g3, h3 = o5.exec(c5), h3 !== null); )
        g3 = o5.lastIndex, o5 === G ? h3[1] === "!--" ? o5 = Bt : h3[1] !== void 0 ? o5 = qt : h3[2] !== void 0 ? (Kt.test(h3[2]) && (s6 = RegExp("</" + h3[2], "g")), o5 = M) : h3[3] !== void 0 && (o5 = M) : o5 === M ? h3[0] === ">" ? (o5 = s6 ?? G, p2 = -1) : h3[1] === void 0 ? p2 = -2 : (p2 = o5.lastIndex - h3[2].length, u4 = h3[1], o5 = h3[3] === void 0 ? M : h3[3] === '"' ? Wt : Gt) : o5 === Wt || o5 === Gt ? o5 = M : o5 === Bt || o5 === qt ? o5 = G : (o5 = M, s6 = void 0);
      let x3 = o5 === M && n5[l5 + 1].startsWith("/>") ? " " : "";
      r4 += o5 === G ? c5 + be : p2 >= 0 ? (i5.push(u4), c5.slice(0, p2) + "$lit$" + c5.slice(p2) + w + x3) : c5 + w + (p2 === -2 ? (i5.push(void 0), l5) : x3);
    }
    let a4 = r4 + (n5[e6] || "<?>") + (t4 === 2 ? "</svg>" : "");
    if (!Array.isArray(n5) || !n5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [Vt !== void 0 ? Vt.createHTML(a4) : a4, i5];
  }, "C");
  var U = /* @__PURE__ */ __name(class {
    constructor({ strings: t4, _$litType$: e6 }, i5) {
      let s6;
      this.parts = [];
      let r4 = 0, o5 = 0, a4 = t4.length - 1, l5 = this.parts, [c5, u4] = _e(t4, e6);
      if (this.el = U.createElement(c5, i5), L.currentNode = this.el.content, e6 === 2) {
        let h3 = this.el.content, p2 = h3.firstChild;
        p2.remove(), h3.append(...p2.childNodes);
      }
      for (; (s6 = L.nextNode()) !== null && l5.length < a4; ) {
        if (s6.nodeType === 1) {
          if (s6.hasAttributes()) {
            let h3 = [];
            for (let p2 of s6.getAttributeNames())
              if (p2.endsWith("$lit$") || p2.startsWith(w)) {
                let g3 = u4[o5++];
                if (h3.push(p2), g3 !== void 0) {
                  let x3 = s6.getAttribute(g3.toLowerCase() + "$lit$").split(w), A3 = /([.?@])?(.*)/.exec(g3);
                  l5.push({ type: 1, index: r4, name: A3[2], strings: x3, ctor: A3[1] === "." ? bt : A3[1] === "?" ? yt : A3[1] === "@" ? _t : V });
                } else
                  l5.push({ type: 6, index: r4 });
              }
            for (let p2 of h3)
              s6.removeAttribute(p2);
          }
          if (Kt.test(s6.tagName)) {
            let h3 = s6.textContent.split(w), p2 = h3.length - 1;
            if (p2 > 0) {
              s6.textContent = O ? O.emptyScript : "";
              for (let g3 = 0; g3 < p2; g3++)
                s6.append(h3[g3], B()), L.nextNode(), l5.push({ type: 2, index: ++r4 });
              s6.append(h3[p2], B());
            }
          }
        } else if (s6.nodeType === 8)
          if (s6.data === zt)
            l5.push({ type: 2, index: r4 });
          else {
            let h3 = -1;
            for (; (h3 = s6.data.indexOf(w, h3 + 1)) !== -1; )
              l5.push({ type: 7, index: r4 }), h3 += w.length - 1;
          }
        r4++;
      }
    }
    static createElement(t4, e6) {
      let i5 = H.createElement("template");
      return i5.innerHTML = t4, i5;
    }
  }, "U");
  d(U, "E");
  function D(n5, t4, e6 = n5, i5) {
    var s6, r4, o5, a4;
    if (t4 === _)
      return t4;
    let l5 = i5 !== void 0 ? (s6 = e6._$Cl) === null || s6 === void 0 ? void 0 : s6[i5] : e6._$Cu, c5 = q(t4) ? void 0 : t4._$litDirective$;
    return (l5 == null ? void 0 : l5.constructor) !== c5 && ((r4 = l5 == null ? void 0 : l5._$AO) === null || r4 === void 0 || r4.call(l5, false), c5 === void 0 ? l5 = void 0 : (l5 = new c5(n5), l5._$AT(n5, e6, i5)), i5 !== void 0 ? ((o5 = (a4 = e6)._$Cl) !== null && o5 !== void 0 ? o5 : a4._$Cl = [])[i5] = l5 : e6._$Cu = l5), l5 !== void 0 && (t4 = D(n5, l5._$AS(n5, t4.values), l5, i5)), t4;
  }
  __name(D, "D");
  d(D, "P");
  var xt = /* @__PURE__ */ __name(class {
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
      let { el: { content: i5 }, parts: s6 } = this._$AD, r4 = ((e6 = t4 == null ? void 0 : t4.creationScope) !== null && e6 !== void 0 ? e6 : H).importNode(i5, true);
      L.currentNode = r4;
      let o5 = L.nextNode(), a4 = 0, l5 = 0, c5 = s6[0];
      for (; c5 !== void 0; ) {
        if (a4 === c5.index) {
          let u4;
          c5.type === 2 ? u4 = new R(o5, o5.nextSibling, this, t4) : c5.type === 1 ? u4 = new c5.ctor(o5, c5.name, c5.strings, this, t4) : c5.type === 6 && (u4 = new $t(o5, this, t4)), this.v.push(u4), c5 = s6[++l5];
        }
        a4 !== (c5 == null ? void 0 : c5.index) && (o5 = L.nextNode(), a4++);
      }
      return r4;
    }
    m(t4) {
      let e6 = 0;
      for (let i5 of this.v)
        i5 !== void 0 && (i5.strings !== void 0 ? (i5._$AI(t4, i5, e6), e6 += i5.strings.length - 2) : i5._$AI(t4[e6])), e6++;
    }
  }, "xt");
  d(xt, "V");
  var R = /* @__PURE__ */ __name(class {
    constructor(t4, e6, i5, s6) {
      var r4;
      this.type = 2, this._$AH = f, this._$AN = void 0, this._$AA = t4, this._$AB = e6, this._$AM = i5, this.options = s6, this._$Cg = (r4 = s6 == null ? void 0 : s6.isConnected) === null || r4 === void 0 || r4;
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
      t4 = D(this, t4, e6), q(t4) ? t4 === f || t4 == null || t4 === "" ? (this._$AH !== f && this._$AR(), this._$AH = f) : t4 !== this._$AH && t4 !== _ && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.k(t4) : ye(t4) ? this.S(t4) : this.$(t4);
    }
    A(t4, e6 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t4, e6);
    }
    k(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.A(t4));
    }
    $(t4) {
      this._$AH !== f && q(this._$AH) ? this._$AA.nextSibling.data = t4 : this.k(H.createTextNode(t4)), this._$AH = t4;
    }
    T(t4) {
      var e6;
      let { values: i5, _$litType$: s6 } = t4, r4 = typeof s6 == "number" ? this._$AC(t4) : (s6.el === void 0 && (s6.el = U.createElement(s6.h, this.options)), s6);
      if (((e6 = this._$AH) === null || e6 === void 0 ? void 0 : e6._$AD) === r4)
        this._$AH.m(i5);
      else {
        let o5 = new xt(r4, this), a4 = o5.p(this.options);
        o5.m(i5), this.k(a4), this._$AH = o5;
      }
    }
    _$AC(t4) {
      let e6 = Ft.get(t4.strings);
      return e6 === void 0 && Ft.set(t4.strings, e6 = new U(t4)), e6;
    }
    S(t4) {
      jt(this._$AH) || (this._$AH = [], this._$AR());
      let e6 = this._$AH, i5, s6 = 0;
      for (let r4 of t4)
        s6 === e6.length ? e6.push(i5 = new R(this.A(B()), this.A(B()), this, this.options)) : i5 = e6[s6], i5._$AI(r4), s6++;
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
  }, "R");
  d(R, "N");
  var V = /* @__PURE__ */ __name(class {
    constructor(t4, e6, i5, s6, r4) {
      this.type = 1, this._$AH = f, this._$AN = void 0, this.element = t4, this.name = e6, this._$AM = s6, this.options = r4, i5.length > 2 || i5[0] !== "" || i5[1] !== "" ? (this._$AH = Array(i5.length - 1).fill(new String()), this.strings = i5) : this._$AH = f;
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
        t4 = D(this, t4, e6, 0), o5 = !q(t4) || t4 !== this._$AH && t4 !== _, o5 && (this._$AH = t4);
      else {
        let a4 = t4, l5, c5;
        for (t4 = r4[0], l5 = 0; l5 < r4.length - 1; l5++)
          c5 = D(this, a4[i5 + l5], e6, l5), c5 === _ && (c5 = this._$AH[l5]), o5 || (o5 = !q(c5) || c5 !== this._$AH[l5]), c5 === f ? t4 = f : t4 !== f && (t4 += (c5 ?? "") + r4[l5 + 1]), this._$AH[l5] = c5;
      }
      o5 && !s6 && this.C(t4);
    }
    C(t4) {
      t4 === f ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  }, "V");
  d(V, "S");
  var bt = /* @__PURE__ */ __name(class extends V {
    constructor() {
      super(...arguments), this.type = 3;
    }
    C(t4) {
      this.element[this.name] = t4 === f ? void 0 : t4;
    }
  }, "bt");
  d(bt, "M");
  var $e = O ? O.emptyScript : "";
  var yt = /* @__PURE__ */ __name(class extends V {
    constructor() {
      super(...arguments), this.type = 4;
    }
    C(t4) {
      t4 && t4 !== f ? this.element.setAttribute(this.name, $e) : this.element.removeAttribute(this.name);
    }
  }, "yt");
  d(yt, "H");
  var _t = /* @__PURE__ */ __name(class extends V {
    constructor(t4, e6, i5, s6, r4) {
      super(t4, e6, i5, s6, r4), this.type = 5;
    }
    _$AI(t4, e6 = this) {
      var i5;
      if ((t4 = (i5 = D(this, t4, e6, 0)) !== null && i5 !== void 0 ? i5 : f) === _)
        return;
      let s6 = this._$AH, r4 = t4 === f && s6 !== f || t4.capture !== s6.capture || t4.once !== s6.once || t4.passive !== s6.passive, o5 = t4 !== f && (s6 === f || r4);
      r4 && this.element.removeEventListener(this.name, this, s6), o5 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      var e6, i5;
      typeof this._$AH == "function" ? this._$AH.call((i5 = (e6 = this.options) === null || e6 === void 0 ? void 0 : e6.host) !== null && i5 !== void 0 ? i5 : this.element, t4) : this._$AH.handleEvent(t4);
    }
  }, "_t");
  d(_t, "I");
  var $t = /* @__PURE__ */ __name(class {
    constructor(t4, e6, i5) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = e6, this.options = i5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      D(this, t4);
    }
  }, "$t");
  d($t, "L");
  var Qt = window.litHtmlPolyfillSupport;
  Qt == null || Qt(U, R), ((vt = globalThis.litHtmlVersions) !== null && vt !== void 0 ? vt : globalThis.litHtmlVersions = []).push("2.2.0");
  var At;
  var Et;
  var C = /* @__PURE__ */ __name(class extends $ {
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
      return _;
    }
  }, "C");
  d(C, "s");
  C.finalized = true, C._$litElement$ = true, (At = globalThis.litElementHydrateSupport) === null || At === void 0 || At.call(globalThis, { LitElement: C });
  var Xt = globalThis.litElementPolyfillSupport;
  Xt == null || Xt({ LitElement: C });
  ((Et = globalThis.litElementVersions) !== null && Et !== void 0 ? Et : globalThis.litElementVersions = []).push("3.2.0");
  var S = /* @__PURE__ */ __name(class {
    static isUrl(t4) {
      try {
        return typeof t4 != "string" || t4.indexOf(`
`) !== -1 || t4.indexOf(" ") !== -1 || t4.startsWith("#/") ? false : (new URL(t4, window.location.origin), true);
      } catch (e6) {
      }
      return false;
    }
    static clone(t4) {
      if (t4 === null || typeof t4 != "object" || "isActiveClone" in t4)
        return t4;
      if (t4 instanceof Date)
        var e6 = new t4.constructor();
      else
        var e6 = t4.constructor();
      for (var i5 in t4)
        Object.prototype.hasOwnProperty.call(t4, i5) && (t4.isActiveClone = null, e6[i5] = S.clone(t4[i5]), delete t4.isActiveClone);
      return e6;
    }
    static parseHTML(t4) {
      return new DOMParser().parseFromString(t4, "text/html").body.firstChild;
    }
    static throttle(t4, e6 = 500) {
      var i5, s6 = d(function(r4) {
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
        return S.objectEquals(t4[s6], e6[s6]);
      });
    }
    static equals(t4, e6) {
      return Array.isArray(t4) ? S.arrayEquals(t4, e6) : typeof t4 == "object" ? S.objectEquals(t4, e6) : t4 === e6;
    }
    static arrayEquals(t4, e6) {
      return Array.isArray(t4) && Array.isArray(e6) && t4.length === e6.length && t4.every((i5, s6) => i5 === e6[s6]);
    }
    static scopeEval(t4, e6) {
      return Function('"use strict";' + e6).bind(t4)();
    }
    static guid(t4) {
      t4 = E({}, t4 || {});
      let e6 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(i5) {
        var s6 = Math.random() * 16 | 0, r4 = i5 == "x" ? s6 : s6 & 3 | 8;
        return r4.toString(16);
      });
      return `${t4.prefix || ""}${t4.compact ? e6.split("-").pop() : e6}`;
    }
  }, "S");
  d(S, "Util");
  var b = S;
  var Ae = I`[data-autocomplete] {
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
/*# sourceMappingURL=autocomplete.css.map */`;
  var Jt = Ae;
  var wt = /* @__PURE__ */ __name(class {
    constructor(t4, e6, i5) {
      v(this, "cssClasses", { result: "xo-ac-rs", item: "xo-ac-itm" });
      if (this.settings = i5, this.control = t4, this.htmlElement = e6, this.htmlElement.setAttribute("autocomplete", "off"), this.categories = i5.categories || {}, !i5.items)
        throw TypeError("Must pass items array, function or promise in autocomplete settings");
      this.items = i5.items;
    }
    static get sharedStyles() {
      return this._sheet || (this._sheet = new CSSStyleSheet(), this._sheet.replaceSync(Jt)), this._sheet;
    }
    attach() {
      let t4 = this.isXoControl(this.control), e6 = d((s6, r4) => {
        this.htmlElement.addEventListener(s6, r4);
      }, "on");
      e6("input", this.inputHandler.bind(this)), e6("click", this.clickHandler.bind(this)), e6("focusout", this.blurHandler.bind(this)), e6("keyup", this.keyUpHandler.bind(this)), e6("keydown", this.keyDownHandler.bind(this)), this.resultsDiv = document.createElement("div"), this.resultsDiv.title = "", this.resultsDiv.classList.add(this.cssClasses.result), this.resultsDiv.addEventListener("mousedown", this.resultClick.bind(this));
      let i5 = t4 ? this.control.shadowRoot.querySelector(".xo-cn") : this.control.shadowRoot.querySelector("*");
      i5.appendChild(this.resultsDiv), this.clear(), i5.setAttribute("data-autocomplete", "on");
    }
    isXoControl(t4) {
      var e6;
      return (e6 = t4.shadowRoot) == null ? void 0 : e6.querySelector(".xo-cn");
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
      var e6, i5;
      if (t4 = t4 || this.getSelectedDiv(), t4) {
        let s6 = parseInt(t4.getAttribute("data-index"));
        this.resultClicked = true;
        let r4 = this.results[s6], o5 = (e6 = this.categories[r4.category]) != null ? e6 : {};
        o5.action = (i5 = o5.action) != null ? i5 : this.setText.bind(this), o5.newTab && (this.tabWindow = window.open("about:blank", "_blank"));
        let a4 = K(E({}, r4), { search: this.htmlElement.value });
        t4.classList.add("active"), setTimeout(() => {
          o5.action(a4), o5.newTab && (a4.url ? this.tabWindow.location.href = a4.url : this.tabWindow.close());
          var l5 = new Event("change", { bubbles: true });
          this.htmlElement.dispatchEvent(l5), this.clear();
          let c5 = new Event("result-selected", { bubbles: false });
          c5.detail = { text: a4.text }, this.htmlElement.dispatchEvent(c5);
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
        this.htmlElement.dispatchEvent(new CustomEvent("show-results", { detail: { results: s6 } })), this.resultsHandler(s6, i5);
      });
    }
    resultsHandler(t4, e6) {
      this.results = t4, this.rowIndex = -1;
      let i5 = 0;
      t4.forEach((s6) => {
        let r4 = null, o5 = e6.categories[s6.category] || {};
        s6.image && (s6.icon = "xo-ac-img", r4 = `style="background-image: url('${s6.image}')"`), s6.element ? this.resultsDiv.appendChild(s6.element) : (s6 = typeof s6 == "string" ? { text: s6 } : s6, this.resultsDiv.appendChild(b.parseHTML(`<div title="${s6.tooltip || ""}" data-index="${i5}" class="${this.cssClasses.item}">
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
      return Y(this, null, function* () {
        let i5 = this.settings.map, s6 = d((a4) => (typeof a4 == "string" && (a4 = { text: a4 }), a4), "normalizeItem"), r4 = d((a4) => i5 ? a4.map((l5) => ({ text: l5[i5] })) : a4, "map"), o5 = d((a4) => (this.settings.max && this.settings.max > 0 && (a4.length = this.settings.max), a4), "max");
        return new Promise((a4) => {
          if (b.isUrl(this.items)) {
            if (this.settings.minlength > 0 && (!t4.search || t4.search.length < this.settings.minlength)) {
              a4([]);
              return;
            }
            let l5 = this.formatSearch(this.items, t4);
            fetch(l5).then((c5) => {
              if (c5.status === 200) {
                c5.json().then((u4) => {
                  u4 = r4(u4), a4(o5(u4.filter((h3) => this.isMatch(t4, h3))));
                });
                return;
              }
              throw Error(`HTTP error ${c5.status} - ${l5}`);
            });
          } else if (Array.isArray(this.items)) {
            let l5 = true;
            this.items = this.items.map((c5) => typeof c5 == "string" ? { text: c5 } : (l5 = false, c5)), l5 && this.control.classList.add("simple"), a4(o5(r4(this.items.filter((c5) => this.isMatch(t4, c5)))));
          } else if (typeof this.items == "function") {
            t4.control = this.control;
            let l5 = this.items(t4, e6).then((c5) => {
              c5 = c5.map((u4) => s6(u4)), c5 = r4(c5.filter((u4) => this.isMatch(t4, u4))), a4(c5);
            });
          } else
            return a4(Promise.resolve(this.items.apply(this, t4)));
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
  }, "wt");
  d(wt, "AutoComplete");
  var Ct = wt;
  var Ee = ["type", "label", "bind", "classes"];
  var we = 1e3;
  var Ce = d(() => `xo${(we++).toString(16)}`, "getUniqueName");
  var k = {};
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
      e6.id || (e6.id = Ce()), e6.name || (e6.name = e6.id), r4 && this.context.data.processBindings(t4, e6);
      for (let o5 in e6) {
        if (o5 === "type")
          continue;
        let a4 = this.getCurrentValue(t4, e6, o5);
        ["id"].includes(o5) || (t4[o5] = a4);
        let l5 = y.camelCaseToHyphen(o5);
        if (s6)
          if (y.elementSupportsProperty(s6, o5))
            s6[o5] = a4 != null ? a4 : "";
          else {
            if (y.isReservedProperty(o5))
              continue;
            y.elementSupportsAttribute(s6, l5) ? s6.setAttribute(l5, a4) : s6.setAttribute("data-" + l5, a4);
          }
      }
      if (s6 instanceof HTMLSelectElement)
        y.importItems(s6, e6.items);
      else if (s6 instanceof HTMLButtonElement || s6 instanceof HTMLAnchorElement) {
        typeof e6.label != "undefined" && (s6.innerText = e6.label);
        let o5 = d((a4, l5) => {
          let c5 = a4;
          if (c5.nodeType === 11 ? c5 = c5.host : c5 = c5.parentNode, !!c5)
            return l5(c5) ? c5 : o5(c5, l5);
        }, "getParent");
        e6.click && s6.addEventListener("click", (a4) => {
          a4.preventDefault(), a4.stopPropagation();
          let l5 = a4.path[0], c5 = o5(l5, (p2) => p2.nodeName === "XO-REPEAT"), u4 = -1;
          c5 && [...c5.childNodes].forEach((p2) => {
            u4 === -1 && o5(l5, (g3) => {
              let x3 = g3.getAttribute ? g3.getAttribute("data-index") : null;
              x3 && (u4 = parseInt(x3) - 1);
            });
          });
          let h3 = { target: a4.target, path: a4.path, detail: { repeat: c5, index: u4 } };
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
      return Ee.includes(t4);
    }
    static match(t4, e6) {
      let i5 = t4;
      return typeof t4 != "string" || t4.length < 5 ? t4 : t4.replace(/(#\/[A-Za-z_]+[A-Za-z_0-9\/@]*[A-Za-z_]+[A-Za-z_0-9]*)(?=[\s+\/*,.?!;'")]|$)/gm, (s6, r4, o5) => e6(r4, i5));
    }
    replaceVar(t4, e6, i5) {
      let s6 = this, r4 = false, o5, a4 = y.match(t4.rawValue, (l5, c5) => (c5 !== l5 && (r4 = true), o5 = s6.context.data.get(l5), o5));
      return r4 ? a4 : o5;
    }
    static importItems(t4, e6 = []) {
      for (let i5 of e6) {
        let s6 = document.createElement("option");
        s6.value = i5.value || i5, s6.innerText = i5.label || i5, t4.appendChild(s6);
      }
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
      return k[i5] || (k[i5] = [], k[i5] = Object.getOwnPropertyNames(Object.getPrototypeOf(t4)), k[i5] = [...k[i5], ...Object.getOwnPropertyNames(HTMLElement.prototype)], k[i5] = [...new Set(k[i5])]), k[i5].includes(e6);
    }
  }, "y");
  d(y, "PropertyMapper");
  var z = y;
  var St = /* @__PURE__ */ __name(class {
    constructor(t4) {
      v(this, "_options", null);
      this._options = t4;
    }
    get value() {
      return this._options.value;
    }
    get data() {
      return this._options.data;
    }
    get form() {
      return this._options.form;
    }
    get path() {
      return this._options.path;
    }
    get binding() {
      return this._options.binding;
    }
  }, "St");
  d(St, "DataBindingContext");
  var te = St;
  var Se = d((n5, t4) => {
    if (b.equals(n5, t4))
      return !(Array.isArray(n5) && t4.length === 0);
  }, "isIrelevantChange");
  var kt = /* @__PURE__ */ __name(class {
    constructor(t4) {
      v(this, "instance", {});
      v(this, "bound", {});
      v(this, "rules", {});
      if (!t4)
        throw Error("Missing context");
      let e6 = this;
      this._context = t4, this.context.form.on("interaction", (i5) => {
        var s6, r4;
        if (console.debug("interaction", i5), (s6 = i5.detail.control) == null ? void 0 : s6.bind) {
          let o5 = this.processBindingIndex(i5.detail.control, (r4 = i5.detail.control) == null ? void 0 : r4.bind);
          e6.set(o5, i5.detail.value, i5.detail);
        }
      });
    }
    initialize(t4 = {}, e6 = {}) {
      let i5 = this;
      this.options = e6;
      let s6 = d((r4, o5, a4) => (a4 = a4 || r4, new Proxy(o5, { get: function(l5, c5) {
        return ["[object Object]", "[object Array]"].indexOf(Object.prototype.toString.call(l5[c5])) > -1 ? s6(r4, l5[c5], a4 + "/" + c5) : l5[c5];
      }, set: function(l5, c5, u4) {
        if (Se(l5[c5], u4))
          return true;
        let h3 = "#/" + a4 + "/" + c5, p2 = l5[c5];
        l5[c5] = u4, u4 = i5.applyRules(h3, u4);
        let g3 = i5.matchArrays(h3);
        i5.bound[g3] && i5.bound[g3].forEach((x3) => {
          let A3 = x3.property === "bind" ? "value" : x3.property, pe = i5.context.mapper.replaceVar(x3, A3, u4);
          i5.context.mapper.mapProperties(x3.control, A3, pe), console.debug(`Set property '${A3}' on ${x3.control} to`, u4);
        });
        try {
          i5.context.form.emit("modelchange", { model: t4, change: h3, oldValue: p2, newValue: u4, context: i5.originatingEventContext });
        } finally {
          i5.originatingEventContext = null;
        }
        return true;
      } })), "proxify");
      i5.schemaModel = E({ instance: {} }, t4), this.addBuiltinModelState(), Object.entries(i5.schemaModel.instance).forEach((r4) => {
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
        this.context.form.emit("modelchange", { model: i5.schemaModel, initial: true, change: void 0 });
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
          z.match(r4, (o5) => {
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
          var l5;
          o5.set = (l5 = o5.set) != null ? l5 : t4;
          let a4 = new te({ data: i5, form: i5.form, value: e6, path: s6, binding: t4 });
          if (o5.run)
            typeof o5.run == "function" ? o5.run(a4) : b.scopeEval(a4, "return " + o5.run);
          else if (o5.set) {
            let c5;
            typeof o5.value == "function" ? c5 = o5.value(a4) : c5 = b.scopeEval(a4, "return " + o5.value), typeof c5 != "undefined" && (i5.set(o5.set, c5), o5.set === t4 && (e6 = c5));
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
    set(t4, e6, i5) {
      let s6 = t4.substring(2).split("/"), r4 = s6.shift();
      var o5 = this.instance[r4];
      if (!!o5)
        for (var a4 = 0; a4 < s6.length; a4++) {
          let l5 = this.parseKey(s6[a4]);
          if (a4 === s6.length - 1) {
            this.originatingEventContext = this.createDataBindingOriginContext(i5), o5[l5] = e6;
            break;
          }
          o5 = o5[l5];
        }
    }
    createDataBindingOriginContext(t4) {
      if (!!t4)
        return { eventType: t4.type, sourceControl: t4.control, eventSourceElement: t4.source, controlValue: t4.value, guid: t4.guid };
    }
  }, "kt");
  d(kt, "DataBinding");
  var Q = kt;
  var ke = I`:root{--accent: var(--color-accent, #3477f3);--text-color: rgb(41, 41, 41);--bg-color: rgb(231, 231, 231);--shadow-color: black;--frame-color: rgb(250, 250, 250);--xo-input-bg: rgba(250, 250, 250);--xo-input-border-color: rgba(220, 220, 220);--xo-input-border-color-hover: rgba(200, 200, 200);--xo-input-border-color-active: rgba(180, 180, 180);--xo-card-background: rgb(100, 100, 100);--xo-card-color: white;--color-validation-warning: rgb(150, 34, 34)}:root.theme-dark{--accent: var(--color-accent, #5287eb);--bg-color: rgb(41, 41, 41);--text-color: rgb(241, 241, 241);--frame-color: rgb(230, 230, 230);--xo-input-bg: rgb(30, 30, 30);--xo-input-border-color: rgba(50, 50, 50);--xo-input-border-color-hover: rgba(80, 80, 80);--xo-input-border-color-active: rgba(110, 110, 110);--xo-card-background: rgb(60, 60, 60);--color-validation-warning: rgb(220, 124, 124)}html,body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background-color:var(--bg-color);accent-color:var(--accent)}html img,body img{border:1rem solid var(--frame-color);border-radius:1rem;box-shadow:1rem 1rem 1rem var(--shadow-color);object-fit:scale-down;object-position:top;max-width:100%;max-height:40vh}.theme-dark html img,.theme-dark body img{filter:brightness(.8) contrast(1.2)}a:link,a:visited{color:var(--text-color);text-decoration:none}a:link:hover,a:visited:hover{text-decoration:underline}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--accent: var(--color-accent, #3477f3);--text-color: rgb(41, 41, 41);--bg-color: rgb(231, 231, 231);--shadow-color: black;--frame-color: rgb(250, 250, 250);--xo-input-bg: rgba(250, 250, 250);--xo-input-border-color: rgba(220, 220, 220);--xo-input-border-color-hover: rgba(200, 200, 200);--xo-input-border-color-active: rgba(180, 180, 180);--xo-card-background: rgb(100, 100, 100);--xo-card-color: white;--color-validation-warning: rgb(150, 34, 34)}:root.theme-dark{--accent: var(--color-accent, #5287eb);--bg-color: rgb(41, 41, 41);--text-color: rgb(241, 241, 241);--frame-color: rgb(230, 230, 230);--xo-input-bg: rgb(30, 30, 30);--xo-input-border-color: rgba(50, 50, 50);--xo-input-border-color-hover: rgba(80, 80, 80);--xo-input-border-color-active: rgba(110, 110, 110);--xo-card-background: rgb(60, 60, 60);--color-validation-warning: rgb(220, 124, 124)}html,body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background-color:var(--bg-color);accent-color:var(--accent)}html img,body img{border:1rem solid var(--frame-color);border-radius:1rem;box-shadow:1rem 1rem 1rem var(--shadow-color);object-fit:scale-down;object-position:top;max-width:100%;max-height:40vh}.theme-dark html img,.theme-dark body img{filter:brightness(.8) contrast(1.2)}a:link,a:visited{color:var(--text-color);text-decoration:none}a:link:hover,a:visited:hover{text-decoration:underline}*{box-sizing:border-box}.xo-cn:not(.xo-rep){margin-top:.4rem;margin-bottom:.4rem}.xo-cn:not(.xo-rep) .xo-in{padding:0}.xo-cn:not(.xo-rep):not(.xo-gc) .xo-in,.xo-cn:not(.xo-rep).type-panel .xo-in{padding:15px;border:1px solid var(--xo-input-border-color);border-radius:1rem;background-color:var(--xo-input-bg)}.xo-cn:not(.xo-rep):hover .xo-in{border-color:var(--xo-input-border-color-hover);transition:all .3s ease}.xo-cn:not(.xo-rep).xo-fc .xo-in{border-color:var(--xo-input-border-color-active);transition:all .3s ease}.xo-cn:not(.xo-rep):not(.xo-ri) .xo-in .xo-grp{padding:0}.xo-ri{margin:0;padding:0!important}.xo-ri .xo-ct{margin:0;padding:0}.xo-ri .xo-in{border:0;padding:0!important}.xo-ct{padding:.5rem 0px 0px .5rem}.xo-pp{display:inline}label{display:inline-block;margin-top:.3rem;margin-bottom:.3rem;margin-right:.7rem}input,select,textarea{background-color:transparent;color:var(--text-color)}input:not([type=checkbox],[type=radio]),select,textarea{min-width:8rem;padding:.5rem 1rem;line-height:1.25rem}.xo-hd{display:none}input:not([type=checkbox],[type=radio]),select,textarea{border:0;outline:0;padding:0;width:100%;resize:vertical}label{display:inline-block}.xo-lb:empty{display:none}button{margin-top:.5rem;text-transform:uppercase;background-color:var(--xo-btn-bg, rgba(127, 127, 127, .8));padding:.4rem .8rem;border-radius:1rem;border:1px solid var(--xo-input-border-color)}button:hover{border:1px solid var(--xo-input-border-color-hover)}button:active{transform:translateY(2px);transition:all .1s ease-out}button.cta{margin:1rem 2rem;font-size:1.3rem;margin:3rem auto}.xo-sl{display:inline-block;padding-left:.5rem}.xo-ds{opacity:.5;user-select:none;cursor:not-allowed}.xo-ds input,.xo-ds [name],.xo-ds label{pointer-events:none}.xo-nv{margin-top:2rem}fieldset{border:0}legend{font-size:1.3rem}.xo-hl{display:inline-block;width:80%;margin-left:1rem;margin-top:-1rem}.xo-vl{color:var(--color-validation-warning, #fa5e5e)}.xo-grp.hor{display:flex;gap:.6rem}.xo-grp.hor.center{align-items:center}option{background-color:var(--bg-color)}html.theme-dark [data-autocomplete] .xo-ac-rs{background-color:#282828;box-shadow:0 5px 10px 2px #00000080;border-color:#ffffff1a}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm:hover{background-color:#ffffff0d}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm span.text small,html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm span.category{color:#ffffff80}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm.selected{background-color:#ffffff80}html.theme-dark [data-autocomplete] .xo-ac-rs .exf-ac-itm.active{background-color:#ffffffa6}.pwa-omnibox .exf-ctl-cnt.autocomplete{width:auto;display:inline-block}.material.xo-cn{margin-top:0}.material.xo-tx .xo-ct{position:relative}.material.xo-tx .xo-ct .xo-in{padding:20px 20px 10px 16px}.material.xo-tx .xo-ct label{position:absolute;z-index:1;top:20px;left:25px;padding:0;border-radius:5px;transition:all .2s;pointer-events:none}.material.xo-tx:not(.xo-fc) *::placeholder{opacity:0}.material.xo-tx.xo-fc .xo-ct label,.material.xo-tx.xo-ne .xo-ct label{font-size:75%;transition:all .2s;transform:translateY(-12px);opacity:.8}
`;
  var ee = ke;
  var X = /* @__PURE__ */ __name(class {
    constructor(t4) {
      this._form = t4, this._db = new Q(this), this._mapper = new z(this);
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
      return this._sheet || (this._sheet = new CSSStyleSheet(), this._sheet.replaceSync(ee)), this._sheet;
    }
  }, "X");
  d(X, "Context"), v(X, "_sheet");
  var T = X;
  var Te = "Invalid binding value";
  var J = /* @__PURE__ */ __name(class extends C {
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
      return { name: { type: String, attribute: true }, bind: { type: String }, type: { type: String, attribute: true }, hidden: { type: Boolean }, disabled: { type: Boolean }, required: { type: Boolean }, focus: { type: Boolean }, label: { type: String }, tooltip: { type: String }, placeholder: { type: String }, valid: { type: Boolean }, value: { type: Object }, classes: { type: Array }, autocomplete: { type: Object }, prepend: { type: Object }, append: { type: Object } };
    }
    get valid() {
      return this.checkValidity();
    }
    static get styles() {
      return [T.sharedStyles, Ct.sharedStyles];
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
      this.autocomplete && this.autocomplete.items && this.nestedElement instanceof HTMLInputElement && this.tryApplyAutoComplete();
    }
    set autocomplete(t4) {
      this._autocomplete = t4;
    }
    get autocomplete() {
      return this._autocomplete;
    }
    tryApplyAutoComplete() {
      this._autoCompleter = new Ct(this, this.nestedElement, this.autocomplete), this._autoCompleter.attach();
    }
    acceptMappedState() {
    }
    onfocus(t4) {
      t4.stopPropagation(), this.focus = true;
    }
    onInput(t4) {
      if (t4.type === "input" && this.nestedElement && this.nestedElement.nodeName.indexOf("-") !== -1)
        return;
      t4.preventDefault(), t4.stopPropagation(), t4.stopImmediatePropagation();
      let e6 = t4.composedPath()[0];
      t4.type === "change" && typeof this.__lastInputValue != "undefined" && this.__lastInputValue === this.value || (this.form.emit("interaction", { type: "input", control: this, source: e6, value: this.value, guid: b.guid() }), t4.type === "input" && (this.__lastInputValue = this.value));
    }
    click(t4) {
      t4.preventDefault(), t4.stopImmediatePropagation(), t4.stopPropagation();
      let e6 = t4.composedPath()[0];
      this._clicked++, this.form && this.form.emit("interaction", { type: "click", control: this, source: e6, value: e6.defaultValue || this._clicked, guid: b.guid() });
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
      e6 = this.transform(e6, i5) || "text", t4.form.emit("create-control", { type: e6, properties: i5 });
      let r4;
      if (customElements.get("xo-" + e6) && (e6 = "xo-" + e6), e6.startsWith("xo-"))
        r4 = document.createElement(e6);
      else {
        try {
          r4 = document.createElement(e6);
          let l5 = (o5 = r4.__proto__) == null ? void 0 : o5.constructor.name;
          if (["HTMLUnknownElement", "HTMLTimeElement"].includes(l5))
            throw new Error("Invalid Element type");
        } catch (l5) {
          if (e6.indexOf("-") === -1) {
            r4 = document.createElement("input");
            try {
              r4.type = e6;
            } catch (c5) {
            }
          }
        }
        let a4 = document.createElement("xo-control");
        a4.type = e6, a4.nestedElement = r4, r4 = a4;
      }
      return r4 && (r4.parent = this, r4.options = s6, t4.parent = this, r4._context = t4, t4.mapper.mapProperties(r4, i5), t4.form.emit("created-control", { control: r4 })), r4;
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
      return this.type && this.setAttribute("data-type", this.type), this.closest("xo-nav") ? m`${this.renderInput()}` : this.nestedElement instanceof HTMLButtonElement ? (typeof this.nestedElement.defaultValue == "undefined" && (this.nestedElement.defaultValue = this.nestedElement.value), this.nestedElement.removeEventListener("click", this.click), this.nestedElement.addEventListener("click", this.click.bind(this)), m`${this.renderInput(true)}`) : m`<div
      part="xo-cn"
      ${this.hidden ? " hidden" : ""}
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
    </div>`;
    }
    renderPrepend() {
      if (this.prepend) {
        if (this.prepend.icon)
          return m`<span class="material-icons">${this.prepend.icon}</span>`;
        if (this.prepend.text)
          return m`<span class="xo-pp">${this.prepend.text}</span>`;
      }
    }
    renderAppend() {
    }
    renderRequiredState() {
      return this.label && this.required ? m`<sup>*</sup>` : "";
    }
    renderInput(t4) {
      return this.renderNestedElement(t4);
    }
    renderNestedElement(t4) {
      return t4 && this.nestedElement.setAttribute("class", this.nestedElement.getAttribute("class") + " " + this.getContainerClasses()), this.nestedElement;
    }
    set bind(t4) {
      if (typeof t4 != "string" || !t4.startsWith("#/"))
        throw Error(Te);
      this._bind = t4;
    }
    get bind() {
      return this._bind;
    }
    getValidation() {
      if (!this.valid)
        return m`<small class="xo-vl"
        >${this.validationText || this.invalidMessage}</small
      >`;
    }
    on(t4, e6) {
      (Array.isArray(t4) ? t4 : [...t4.split(" ")]).forEach((s6) => {
        this.addEventListener(s6, e6);
      });
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
  }, "J");
  d(J, "Control");
  window.customElements.define("xo-control", J);
  var N = J;
  var Pe = "inline";
  var Ie = "inline";
  var Tt = /* @__PURE__ */ __name(class {
    constructor(t4) {
      this.form = t4, this.form.on("interaction", (e6) => {
        let i5 = e6.detail.control;
        this.processValidation(i5), this.checkValid();
      }), this.form.on("created-control", (e6) => {
        var i5;
        ((i5 = this.form.schema.validation) != null ? i5 : Pe === Ie) && (e6.detail.control.on("invalid", (s6) => {
          s6.preventDefault();
        }), e6.detail.control.nestedElement && e6.detail.control.nestedElement.addEventListener("invalid", (s6) => {
          s6.preventDefault(), s6.stopPropagation(), e6.detail.control.validationMessage = s6.target.validationMessage;
        }));
      }), setTimeout(() => {
        this.checkValid();
      }, 60);
    }
    checkValid() {
      let t4 = this.isPageValid(this.form.page), e6 = this.form.context.data.get("#/_xo/nav/total");
      this.form.context.data.set("#/_xo/disabled/next", !t4 || this.form.page >= e6), this.form.context.data.set("#/_xo/disabled/back", this.form.page <= 1);
    }
    processValidation(t4) {
      if (!t4.checkValidity()) {
        let i5 = t4.closestElement("xo-control");
        try {
          i5.invalidMessage = t4.validationMessage;
        } catch (s6) {
        }
        i5 && i5.reportValidity && i5.reportValidity();
      }
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
  }, "Tt");
  d(Tt, "Validator");
  var tt = Tt;
  var ie = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var Pt = d((n5) => (...t4) => ({ _$litDirective$: n5, values: t4 }), "e");
  var et = /* @__PURE__ */ __name(class {
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
  }, "et");
  d(et, "i");
  var se = d((n5) => n5 === null || typeof n5 != "object" && typeof n5 != "function", "t");
  var re = d((n5) => n5.strings === void 0, "r");
  var W = d((n5, t4) => {
    var e6, i5;
    let s6 = n5._$AN;
    if (s6 === void 0)
      return false;
    for (let r4 of s6)
      (i5 = (e6 = r4)._$AO) === null || i5 === void 0 || i5.call(e6, t4, false), W(r4, t4);
    return true;
  }, "e");
  var it = d((n5) => {
    let t4, e6;
    do {
      if ((t4 = n5._$AM) === void 0)
        break;
      e6 = t4._$AN, e6.delete(n5), n5 = t4;
    } while ((e6 == null ? void 0 : e6.size) === 0);
  }, "o");
  var oe = d((n5) => {
    for (let t4; t4 = n5._$AM; n5 = t4) {
      let e6 = t4._$AN;
      if (e6 === void 0)
        t4._$AN = e6 = new Set();
      else if (e6.has(n5))
        break;
      e6.add(n5), Re(t4);
    }
  }, "n");
  function Me(n5) {
    this._$AN !== void 0 ? (it(this), this._$AM = n5, oe(this)) : this._$AM = n5;
  }
  __name(Me, "Me");
  d(Me, "r");
  function Ue(n5, t4 = false, e6 = 0) {
    let i5 = this._$AH, s6 = this._$AN;
    if (s6 !== void 0 && s6.size !== 0)
      if (t4)
        if (Array.isArray(i5))
          for (let r4 = e6; r4 < i5.length; r4++)
            W(i5[r4], false), it(i5[r4]);
        else
          i5 != null && (W(i5, false), it(i5));
      else
        W(this, n5);
  }
  __name(Ue, "Ue");
  d(Ue, "h");
  var Re = d((n5) => {
    var t4, e6, i5, s6;
    n5.type == ie.CHILD && ((t4 = (i5 = n5)._$AP) !== null && t4 !== void 0 || (i5._$AP = Ue), (e6 = (s6 = n5)._$AQ) !== null && e6 !== void 0 || (s6._$AQ = Me));
  }, "l");
  var st = /* @__PURE__ */ __name(class extends et {
    constructor() {
      super(...arguments), this._$AN = void 0;
    }
    _$AT(t4, e6, i5) {
      super._$AT(t4, e6, i5), oe(this), this.isConnected = t4._$AU;
    }
    _$AO(t4, e6 = true) {
      var i5, s6;
      t4 !== this.isConnected && (this.isConnected = t4, t4 ? (i5 = this.reconnected) === null || i5 === void 0 || i5.call(this) : (s6 = this.disconnected) === null || s6 === void 0 || s6.call(this)), e6 && (W(this, t4), it(this));
    }
    setValue(t4) {
      if (re(this._$Ct))
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
  }, "st");
  d(st, "d");
  var rt = /* @__PURE__ */ __name(class {
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
  }, "rt");
  d(rt, "s");
  var ot = /* @__PURE__ */ __name(class {
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
  }, "ot");
  d(ot, "i");
  var ne = d((n5) => !se(n5) && typeof n5.then == "function", "n");
  var It = /* @__PURE__ */ __name(class extends st {
    constructor() {
      super(...arguments), this._$Cwt = 1073741823, this._$Cyt = [], this._$CG = new rt(this), this._$CK = new ot();
    }
    render(...t4) {
      var e6;
      return (e6 = t4.find((i5) => !ne(i5))) !== null && e6 !== void 0 ? e6 : _;
    }
    update(t4, e6) {
      let i5 = this._$Cyt, s6 = i5.length;
      this._$Cyt = e6;
      let r4 = this._$CG, o5 = this._$CK;
      this.isConnected || this.disconnected();
      for (let a4 = 0; a4 < e6.length && !(a4 > this._$Cwt); a4++) {
        let l5 = e6[a4];
        if (!ne(l5))
          return this._$Cwt = a4, l5;
        a4 < s6 && l5 === i5[a4] || (this._$Cwt = 1073741823, s6 = 0, Promise.resolve(l5).then(async (c5) => {
          for (; o5.get(); )
            await o5.get();
          let u4 = r4.deref();
          if (u4 !== void 0) {
            let h3 = u4._$Cyt.indexOf(l5);
            h3 > -1 && h3 < u4._$Cwt && (u4._$Cwt = h3, u4.setValue(c5));
          }
        }));
      }
      return _;
    }
    disconnected() {
      this._$CG.disconnect(), this._$CK.pause();
    }
    reconnected() {
      this._$CG.reconnect(this), this._$CK.resume();
    }
  }, "It");
  d(It, "h");
  var ae = Pt(It);
  var le = "1.0.17";
  var nt = /* @__PURE__ */ __name(class extends N {
    constructor() {
      super();
      v(this, "elements", {});
      this._url = new URL(document.location.href), this._context = new T(this), this._page = 1;
    }
    static get version() {
      return le;
    }
    static get properties() {
      return K(E({}, N.properties), { page: { type: Number, attribute: true }, schema: { type: Object }, src: { type: String, attribute: true }, theme: { type: String, attribute: true }, validation: { type: String } });
    }
    get context() {
      return this._context;
    }
    set page(t4) {
      t4 !== this._page && (t4 < 1 || t4 > this.querySelectorAll("xo-page").length || (t4 > this._page && this.validator.isPageValid(this._page), this._page = t4));
    }
    get page() {
      return this._page;
    }
    set schema(t4) {
      this._schema = t4, this.innerHTML = "", this.requestUpdate();
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
      return Y(this, null, function* () {
        if (!this.schema && this.src)
          try {
            let t4 = yield import(this.src), e6 = Object.keys(t4)[0];
            this._schema = t4[e6];
          } catch (t4) {
            throw Error("Could not load schema from " + this.src + ". " + t4.message);
          }
        return this.schema ? (this.interpretSchema(), true) : false;
      });
    }
    interpretSchema() {
      var e6, i5;
      if (typeof this.schema != "object")
        throw Error("Invalid schema");
      this.schema.page = "#/_xo/nav/page", this.schema.pages = (e6 = this.schema.pages) != null ? e6 : [], this.context.data.initialize(this.schema.model, { pageCount: this.schema.pages.length });
      let t4 = 1;
      for (let s6 of this.schema.pages) {
        s6.index = t4++;
        let r4 = this.createControl(this.context, (i5 = s6.type) != null ? i5 : "xo-page", s6);
        r4.setAttribute("slot", "w"), this.appendChild(r4);
      }
      this.nav = this.createControl(this.context, "xo-nav", this.schema), this.nav.controls = this.nav.controls, this.nav.setAttribute("slot", "n"), this.appendChild(this.nav), this.emit("ready");
    }
    render() {
      return m`
      ${ae(this.readSchema().then((t4) => t4 ? m`<div class="xo-c" data-page="${this.page}" >
            <form>
                <div class="xo-w">
                    <slot name="w"></slot>
                </div>
                <div class="xo-n">
                    <slot name="n"></slot>
                <div>
            </form>
            <div>` : m``), m`Loading...`)}
    `;
    }
    firstUpdated() {
      this.checkUrlState(), this.validator = new tt(this), this.emit("first-updated");
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
  }, "nt");
  d(nt, "Form");
  var ce = nt;
  window.customElements.define("xo-form", nt);
  var at = /* @__PURE__ */ __name(class extends N {
    static get properties() {
      return { layout: { type: String, attribute: true }, align: { type: String, attribute: true }, ui: { type: String, attribute: true }, fields: { type: Array } };
    }
    renderInput() {
      return m`<div class="${this.getGroupClasses()}">
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
  }, "at");
  d(at, "Group");
  var P = at;
  window.customElements.define("xo-group", at);
  var lt = /* @__PURE__ */ __name(class extends P {
    constructor() {
      super(...arguments);
      this.hidden = true;
    }
    connectedCallback() {
      super.connectedCallback(), this.closest("xo-form").on("page", (t4) => {
        this.hidden = t4.target.page !== this.index;
      }), this.hidden = this.index !== 1;
    }
    render() {
      return this.hidden ? m`` : m`<fieldset
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
  }, "lt");
  d(lt, "Page");
  window.customElements.define("xo-page", lt);
  var de = lt;
  var ct = /* @__PURE__ */ __name(class extends P {
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
      this._items = t4, this.hasUpdated && (this.refresh(), this.requestUpdate());
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
  }, "ct");
  d(ct, "Repeat");
  var he = ct;
  window.customElements.define("xo-repeat", ct);
  var dt = /* @__PURE__ */ __name(class extends P {
    static get styles() {
      return [T.sharedStyles, I`
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
  }, "dt");
  d(dt, "Navigation");
  window.customElements.define("xo-nav", dt);
  var ue = dt;
  var Mt = /* @__PURE__ */ __name(class {
    static get Context() {
      return T;
    }
    static get Control() {
      return N;
    }
    static get DataBinding() {
      return Q;
    }
    static get Form() {
      return ce;
    }
    static get Group() {
      return P;
    }
    static get PropertyMapper() {
      return z;
    }
    static get Page() {
      return de;
    }
    static get Repeat() {
      return he;
    }
    static get Util() {
      return b;
    }
    static get Navigation() {
      return ue;
    }
    static get Validation() {
      return tt;
    }
  }, "Mt");
  d(Mt, "xo");

  // src/test/index.js
  var import_web_components = __toModule(require_web_components());
})();
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
