// \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
// node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
// node_modules/svelte/src/internal/flags/index.js
var n = !1;
function r() {
	n = !0;
}
// node_modules/svelte/src/internal/flags/legacy.js
r();
// node_modules/svelte/src/constants.js
var i = {}, a = Symbol("uninitialized"), o = Symbol("filename"), s = "http://www.w3.org/1999/xhtml", c = Array.isArray, l = Array.prototype.indexOf, u = Array.prototype.includes, d = Array.from, f = Object.defineProperty, p = Object.getOwnPropertyDescriptor, m = Object.getOwnPropertyDescriptors, h = Object.prototype, g = Array.prototype, _ = Object.getPrototypeOf, v = Object.isExtensible;
function y(e) {
	return typeof e == "function";
}
var b = () => {};
function x(e) {
	return e();
}
function ee(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function S() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var C = 1024, w = 2048, te = 4096, ne = 8192, re = 16384, ie = 32768, ae = 1 << 25, oe = 65536, se = 1 << 18, ce = 1 << 19, le = 1 << 20, ue = 1 << 25, de = 1 << 21, fe = 1 << 22, pe = 1 << 23, me = Symbol("$state"), he = Symbol("component"), ge = Symbol("legacy props"), _e = Symbol(""), ve = Symbol("proxy path"), ye = Symbol("attributes"), be = Symbol("class"), xe = Symbol("style"), Se = Symbol("text"), Ce = Symbol("form reset"), we = Symbol("hmr anchor"), Te = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Ee = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), De = "font-weight: bold", Oe = "font-weight: normal";
function ke(e) {
	console.warn(`%c[svelte] await_reactivity_loss\n%cDetected reactivity loss when reading \`${e}\`. This happens when state is read in an async function after an earlier \`await\`\nhttps://svelte.dev/e/await_reactivity_loss`, De, Oe);
}
function Ae(e, t) {
	console.warn(`%c[svelte] await_waterfall\n%cAn async derived, \`${e}\` (${t}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app\nhttps://svelte.dev/e/await_waterfall`, De, Oe);
}
function je(e, t) {
	console.warn(`%c[svelte] binding_property_non_reactive\n%c${t ? `\`${e}\` (${t}) is binding to a non-reactive property` : `\`${e}\` is binding to a non-reactive property`}\nhttps://svelte.dev/e/binding_property_non_reactive`, De, Oe);
}
function Me() {
	console.warn("%c[svelte] derived_inert\n%cReading a derived belonging to a now-destroyed effect may result in stale values\nhttps://svelte.dev/e/derived_inert", De, Oe);
}
function Ne(e, t, n) {
	console.warn(`%c[svelte] hydration_attribute_changed\n%cThe \`${e}\` attribute on \`${t}\` changed its value between server and client renders. The client value, \`${n}\`, will be ignored in favour of the server value\nhttps://svelte.dev/e/hydration_attribute_changed`, De, Oe);
}
function Pe(e) {
	console.warn(`%c[svelte] hydration_mismatch\n%c${e ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${e}` : "Hydration failed because the initial UI does not match what was rendered on the server"}\nhttps://svelte.dev/e/hydration_mismatch`, De, Oe);
}
function Fe() {
	console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", De, Oe);
}
function Ie(e) {
	console.warn(`%c[svelte] state_proxy_equality_mismatch\n%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results\nhttps://svelte.dev/e/state_proxy_equality_mismatch`, De, Oe);
}
function Le() {
	console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", De, Oe);
}
// node_modules/svelte/src/internal/client/dom/hydration.js
var T = !1;
function Re(e) {
	T = e;
}
var E;
function D(e) {
	if (e === null) throw Pe(), i;
	return E = e;
}
function ze() {
	return D(/* @__PURE__ */ Xn(E));
}
function O(e) {
	if (T) {
		if (/* @__PURE__ */ Xn(E) !== null) throw Pe(), i;
		E = e;
	}
}
function Be(e = 1) {
	if (T) {
		for (var t = e, n = E; t--;) n = /* @__PURE__ */ Xn(n);
		E = n;
	}
}
function Ve(e = !0) {
	for (var t = 0, n = E;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Xn(n);
		e && n.remove(), n = i;
	}
}
function He(e) {
	if (!e || e.nodeType !== 8) throw Pe(), i;
	return e.data;
}
// node_modules/svelte/src/internal/client/reactivity/equality.js
function Ue(e) {
	return e === this.v;
}
function We(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ge(e) {
	return !We(e, this.v);
}
function Ke() {
	{
		let e = /* @__PURE__ */ Error("snippet_without_render_tag\nAttempted to render a snippet without a `{@render}` block. This would cause the snippet code to be stringified instead of its content being rendered to the DOM. To fix this, change `{snippet}` to `{@render snippet()}`.\nhttps://svelte.dev/e/snippet_without_render_tag");
		throw e.name = "Svelte error", e;
	}
}
// node_modules/svelte/src/internal/client/errors.js
function qe() {
	{
		let e = /* @__PURE__ */ Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
		throw e.name = "Svelte error", e;
	}
}
function Je() {
	{
		let e = /* @__PURE__ */ Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
		throw e.name = "Svelte error", e;
	}
}
function Ye(e, t) {
	{
		let n = /* @__PURE__ */ Error(`component_api_changed\nCalling \`${e}\` on a component instance (of ${t}) is no longer valid in Svelte 5\nhttps://svelte.dev/e/component_api_changed`);
		throw n.name = "Svelte error", n;
	}
}
function Xe(e, t) {
	{
		let n = /* @__PURE__ */ Error(`component_api_invalid_new\nAttempted to instantiate ${e} with \`new ${t}\`, which is no longer valid in Svelte 5. If this component is not under your control, set the \`compatibility.componentApi\` compiler option to \`4\` to keep it working.\nhttps://svelte.dev/e/component_api_invalid_new`);
		throw n.name = "Svelte error", n;
	}
}
function Ze() {
	{
		let e = /* @__PURE__ */ Error("derived_references_self\nA derived value cannot reference itself recursively\nhttps://svelte.dev/e/derived_references_self");
		throw e.name = "Svelte error", e;
	}
}
function Qe(e, t, n) {
	{
		let r = /* @__PURE__ */ Error(`each_key_duplicate\n${n ? `Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}\nhttps://svelte.dev/e/each_key_duplicate`);
		throw r.name = "Svelte error", r;
	}
}
function $e(e, t, n) {
	{
		let r = /* @__PURE__ */ Error(`each_key_volatile\nKeyed each block has key that is not idempotent — the key for item at index ${e} was \`${t}\` but is now \`${n}\`. Keys must be the same each time for a given item\nhttps://svelte.dev/e/each_key_volatile`);
		throw r.name = "Svelte error", r;
	}
}
function et(e) {
	{
		let t = /* @__PURE__ */ Error(`effect_in_teardown\n\`${e}\` cannot be used inside an effect cleanup function\nhttps://svelte.dev/e/effect_in_teardown`);
		throw t.name = "Svelte error", t;
	}
}
function tt() {
	{
		let e = /* @__PURE__ */ Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
		throw e.name = "Svelte error", e;
	}
}
function nt(e) {
	{
		let t = /* @__PURE__ */ Error(`effect_orphan\n\`${e}\` can only be used inside an effect (e.g. during component initialisation)\nhttps://svelte.dev/e/effect_orphan`);
		throw t.name = "Svelte error", t;
	}
}
function rt() {
	{
		let e = /* @__PURE__ */ Error("effect_update_depth_exceeded\nMaximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state\nhttps://svelte.dev/e/effect_update_depth_exceeded");
		throw e.name = "Svelte error", e;
	}
}
function it() {
	{
		let e = /* @__PURE__ */ Error("hydration_failed\nFailed to hydrate the application\nhttps://svelte.dev/e/hydration_failed");
		throw e.name = "Svelte error", e;
	}
}
function at() {
	{
		let e = /* @__PURE__ */ Error("invalid_snippet\nCould not `{@render}` snippet due to the expression being `null` or `undefined`. Consider using optional chaining `{@render snippet?.()}`\nhttps://svelte.dev/e/invalid_snippet");
		throw e.name = "Svelte error", e;
	}
}
function ot(e) {
	{
		let t = /* @__PURE__ */ Error(`props_invalid_value\nCannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value\nhttps://svelte.dev/e/props_invalid_value`);
		throw t.name = "Svelte error", t;
	}
}
function st(e) {
	{
		let t = /* @__PURE__ */ Error(`rune_outside_svelte\nThe \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files\nhttps://svelte.dev/e/rune_outside_svelte`);
		throw t.name = "Svelte error", t;
	}
}
function ct() {
	{
		let e = /* @__PURE__ */ Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
		throw e.name = "Svelte error", e;
	}
}
function lt() {
	{
		let e = /* @__PURE__ */ Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
		throw e.name = "Svelte error", e;
	}
}
function ut() {
	{
		let e = /* @__PURE__ */ Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
		throw e.name = "Svelte error", e;
	}
}
function dt() {
	{
		let e = /* @__PURE__ */ Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
		throw e.name = "Svelte error", e;
	}
}
function k(e, t) {
	return e.label = t, ft(e.v, t), e;
}
function ft(e, t) {
	return e?.[ve]?.(t), e;
}
// node_modules/svelte/src/internal/shared/dev.js
function pt(e) {
	let t = /* @__PURE__ */ Error(), n = mt();
	return n.length === 0 ? null : (n.unshift("\n"), f(t, "stack", { value: n.join("\n") }), f(t, "name", { value: e }), t);
}
function mt() {
	let e = Error.stackTraceLimit;
	Error.stackTraceLimit = Infinity;
	let t = (/* @__PURE__ */ Error()).stack;
	if (Error.stackTraceLimit = e, !t) return [];
	let n = t.split("\n"), r = [];
	for (let e = 0; e < n.length; e++) {
		let t = n[e], i = t.replaceAll("\\", "/");
		if (t.trim() !== "Error") {
			if (t.includes("validate_each_keys")) return [];
			i.includes("svelte/src/internal") || i.includes("node_modules/.vite") || r.push(t);
		}
	}
	return r;
}
// node_modules/svelte/src/internal/client/context.js
var A = null;
function ht(e) {
	A = e;
}
var gt = null;
function _t(e) {
	gt = e;
}
function j(e, t, n, r, i, a) {
	let s = gt;
	gt = {
		type: t,
		file: n[o],
		line: r,
		column: i,
		parent: s,
		...a
	};
	try {
		return e();
	} finally {
		gt = s;
	}
}
var vt = null;
function yt(e) {
	vt = e;
}
function M(e, t = !1, r) {
	A = {
		p: A,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: n && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	}, A.function = r, vt = r;
}
function N(e) {
	var t = A, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) pr(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, A = t.p, vt = A?.function ?? null, bt(e);
}
function bt(e = {}) {
	return f(e, he, { value: !0 }), e;
}
function xt() {
	return !n || A !== null && A.l === null;
}
// node_modules/svelte/src/internal/client/dom/task.js
var St = [];
function Ct() {
	var e = St;
	St = [], ee(e);
}
function wt(e) {
	if (St.length === 0 && !rn) {
		var t = St;
		queueMicrotask(() => {
			t === St && Ct();
		});
	}
	St.push(e);
}
function Tt() {
	for (; St.length > 0;) Ct();
}
// node_modules/svelte/src/internal/client/reactivity/status.js
var Et = ~(w | te | C);
function P(e, t) {
	e.f = e.f & Et | t;
}
function Dt(e) {
	e.f & 512 || e.deps === null ? P(e, C) : P(e, te);
}
// node_modules/svelte/src/internal/client/reactivity/utils.js
function Ot(e, t) {
	e.f & 2048 ? t.set(e, w) : e.f & 4096 && t.get(e) !== 2048 && t.set(e, te), P(e, C);
}
// node_modules/svelte/src/internal/client/dev/debug.js
function kt(e) {
	return `{${e.toString().replace(/^async \(\) => /, "").replace(/^\(/, "").replace(/\$\.get\((.+?)\)/g, (e, t) => t).replace(/\$\.track_reactivity_loss\((.+?)\)\(\)/g, (e, t) => t).replace(/\)$/, "")}}`;
}
// node_modules/svelte/src/internal/client/dom/elements/misc.js
var At = !1;
function jt() {
	At || (At = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[Ce]?.();
		});
	}, { capture: !0 }));
}
// node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Mt(e) {
	var t = W, n = G;
	Fr(null), Ir(null);
	try {
		return e();
	} finally {
		Fr(t), Ir(n);
	}
}
function Nt(e, t, n, r = n) {
	e.addEventListener(t, () => Mt(n));
	let i = e[Ce];
	e[Ce] = i ? () => {
		i(), r(!0);
	} : () => r(!0), jt();
}
// node_modules/svelte/src/internal/client/reactivity/async.js
function Pt(e, t, n, r) {
	let i = xt() ? Ht : Kt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (o.forEach((e, n) => {
		e.label = t[n].toString().replace("() => ", "").replaceAll("$.eager(() => ", "$state.eager(").replace(/\$\.get\((.+?)\)/g, (e, t) => t);
	}), n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = G, c = It(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				ir(e, s);
			}
			Lt();
		}
	}
	var d = Rt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ Wt(e))).then(u).catch((e) => ir(e, s)).finally(d);
	}
	l ? l.then(() => {
		s.f & 16384 ? d() : (c(), f(), Lt());
	}) : f();
}
function Ft(e, t) {
	Pt(e, [], [], t);
}
function It() {
	var e = G, t = W, n = A, r = F, i = gt;
	return function(a = !0) {
		Ir(e), Fr(t), ht(n), a && !(e.f & 16384) && (r?.activate(), r?.apply()), Bt(null), _t(i);
	};
}
function Lt(e = !0) {
	Ir(null), Fr(null), ht(null), e && F?.deactivate(), Bt(null), _t(null);
}
function Rt() {
	var e = G, t = e.b, n = F, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
// node_modules/svelte/src/internal/client/reactivity/deriveds.js
var zt = null;
function Bt(e) {
	zt = e;
}
var Vt = /* @__PURE__ */ new Set();
/*#__NO_SIDE_EFFECTS__*/
function Ht(e) {
	var t = 2 | w;
	return G !== null && (G.f |= ce), {
		ctx: A,
		deps: null,
		effects: null,
		equals: Ue,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: a,
		wv: 0,
		parent: G,
		ac: null
	};
}
var Ut = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function Wt(e, t, n) {
	let r = G;
	r === null && qe();
	var i = void 0, o = wn(a);
	o.label = t ?? kt(e);
	var s = !W, c = /* @__PURE__ */ new Set();
	return _r(() => {
		var t = G;
		zt = {
			effect: t,
			effect_deps: /* @__PURE__ */ new Set(),
			warned: !1
		};
		var a = S();
		i = a.promise;
		try {
			Promise.resolve(e()).then(a.resolve, (e) => {
				e !== Te && a.reject(e);
			}).finally(Lt);
		} catch (e) {
			a.reject(e), Lt();
		}
		if (zt) {
			if (t.deps !== null) for (let e = 0; e < q; e += 1) zt.effect_deps.add(t.deps[e]);
			if (K !== null) for (let e = 0; e < K.length; e += 1) zt.effect_deps.add(K[e]);
		}
		zt = null;
		var l = F;
		if (s) {
			if (t.f & 32768) var u = Rt();
			if (r.b?.is_rendered()) l.async_deriveds.get(t)?.reject(Ut);
			else for (let e of c.values()) e.reject(Ut);
			c.add(a), l.async_deriveds.set(t, a);
		}
		let d = (e, r = void 0) => {
			zt = null, u?.(), c.delete(a), r !== Ut && (l.activate(), r ? (o.f |= pe, An(o, r)) : (o.f & 8388608 && (o.f ^= pe), n !== void 0 && !o.equals(e) && (Vt.add(o), setTimeout(() => {
				Vt.has(o) && !(t.f & 16384) && (Ae(o.label, n), Vt.delete(o));
			})), An(o, e)), l.deactivate());
		};
		a.promise.then(d, (e) => d(null, e || "unknown"));
	}), dr(() => {
		for (let e of c) e.reject(Ut);
	}), o.f |= fe, new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(o) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Gt(e) {
	let t = /* @__PURE__ */ Ht(e);
	return Rr(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function Kt(e) {
	let t = /* @__PURE__ */ Ht(e);
	return t.equals = Ge, t;
}
function qt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) U(t[n]);
	}
}
var Jt = [];
function Yt(e) {
	var t, n = G, r = e.parent;
	if (!Mr && r !== null && e.v !== a && r.f & 24576) return Me(), e.v;
	Ir(r);
	{
		let r = yn;
		xn(/* @__PURE__ */ new Set());
		try {
			u.call(Jt, e) && Ze(), Jt.push(e), qt(e), t = Jr(e);
		} finally {
			Ir(n), xn(r), Jt.pop();
		}
	}
	return t;
}
function Xt(e) {
	var t = Yt(e);
	!e.equals(t) && (e.wv = Gr(), (!F?.is_fork || e.deps === null) && (F === null ? e.v = t : (F.capture(e, t, !0), en?.capture(e, t, !0)), e.deps === null)) ? P(e, C) : Mr || (tn === null ? Dt(e) : (ur() || F?.is_fork) && tn.set(e, t));
}
function Zt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Mt(() => {
		t.ac.abort(Te), t.ac = null;
	}), t.fn !== null && (t.teardown = b), Zr(t, 0), Sr(t));
}
function Qt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Qr(t);
}
// node_modules/svelte/src/internal/client/reactivity/batch.js
var $t = null, F = null, en = null, tn = null, nn = null, rn = !1, an = !1, on = null, sn = null, cn = 0, ln = /* @__PURE__ */ new Set(), un = 1, dn = class e {
	id = un++;
	started = !1;
	linked = !0;
	prev = null;
	next = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#e = /* @__PURE__ */ new Set();
	#t = /* @__PURE__ */ new Set();
	#n = 0;
	#r = /* @__PURE__ */ new Map();
	#i = null;
	#a = [];
	#o = [];
	#s = /* @__PURE__ */ new Map();
	#c = /* @__PURE__ */ new Map();
	#l = /* @__PURE__ */ new Set();
	is_fork = !1;
	#u = !1;
	constructor() {
		$t === null ? $t = this : ($t.next = this, this.prev = $t), $t = this;
	}
	#d() {
		if (this.is_fork) return !0;
		for (let e of this.#r.keys()) if (!this.#f(e)) return !0;
		return !1;
	}
	#f(e) {
		for (var t = e; t !== null; t = t.parent) if (this.#c.has(t)) return !0;
		return !1;
	}
	skip_effect(e) {
		this.#c.has(e) || this.#c.set(e, {
			d: [],
			m: []
		}), this.#l.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#c.get(e);
		if (n) {
			this.#c.delete(e);
			for (var r of n.d) P(r, w), t(r);
			for (r of n.m) P(r, te), t(r);
		}
		this.#l.add(e);
	}
	#p() {
		var e = [];
		for (let i of this.#a) if (!(i.f & 16384 || !(i.f & 6144))) {
			for (var t = i, n = !1; t.parent !== null;) {
				t = t.parent;
				var r = t.f;
				if (r & 96) {
					if (!(r & 1024)) {
						n = !0;
						break;
					}
					t.f ^= C;
				}
			}
			n || e.push(t);
		}
		return this.#a = [], e;
	}
	#m() {
		this.started = !0;
		for (let e of this.current.keys()) ln.add(e);
		for (let [e, t] of this.#s) P(e, t), this.schedule(e);
		this.apply();
		for (var t = on = [], n = [], r = sn = []; this.#a.length > 0;) {
			cn++ > 1e3 && (this.#b(), pn());
			for (let e of this.#p()) try {
				this.#h(e, t, n);
			} catch (t) {
				throw vn(e), this.#d() || this.discard(), t;
			}
		}
		if (F = null, r.length > 0) {
			var i = e.ensure();
			for (let e of r) i.schedule(e);
		}
		if (on = null, sn = null, this.#d()) {
			this.#y(n), this.#y(t);
			for (let [e, t] of this.#c) _n(e, t);
			r.length > 0 && F.#m();
			return;
		}
		let a = this.#g();
		if (a) this.#y(n), this.#y(t), a.#v(this);
		else {
			this.#s.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), en = this, hn(n), hn(t), en = null, this.#i?.resolve();
			var o = F;
			this.#n === 0 && (this.#a.length === 0 || o !== null) && this.#b(), o !== null && (bn.clear(), o.#m());
		}
	}
	#h(e, t, n) {
		e.f ^= C;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#c.has(r)) && r.fn !== null) {
				a ? r.f ^= C : i & 4 ? t.push(r) : Kr(r) && (i & 16 && this.add_dirty_reaction(r, te), Qr(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#g() {
		for (var e = this.prev; e !== null; e = e.prev) if (!e.is_fork && this.#_(e)) return e;
		return null;
	}
	#_(e) {
		for (let [t, [, n]] of this.current) if (!n && e.current.has(t)) return !0;
		return !1;
	}
	#v(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_reactions(e.#s);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#s.delete(i), P(i, w), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#b(), F = this, this.#m();
	}
	#y(e) {
		for (var t = 0; t < e.length; t += 1) Ot(e[t], this.#s);
	}
	capture(e, t, n = !1) {
		e.v !== a && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), tn?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		F = this;
	}
	deactivate() {
		F = null, tn = null;
	}
	flush() {
		try {
			ln.clear(), an = !0, F = this, this.#m();
		} finally {
			cn = 0, nn = null, on = null, sn = null, an = !1, F = null, tn = null, bn.clear();
			for (let e of ln) e.updated = null;
		}
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear();
		for (let e of this.async_deriveds.values()) e.reject(Ut);
		this.#b(), this.#i?.resolve();
	}
	register_created_effect(e) {
		this.#o.push(e);
	}
	increment(e, t) {
		if (this.#n += 1, e) {
			let e = this.#r.get(t) ?? 0;
			this.#r.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#n, e) {
			let e = this.#r.get(t) ?? 0;
			e === 1 ? this.#r.delete(t) : this.#r.set(t, e - 1);
		}
		this.#u || (this.#u = !0, wt(() => {
			this.#u = !1, this.linked && this.flush();
		}));
	}
	transfer_reactions(e) {
		for (let [t, n] of e) this.add_dirty_reaction(t, n);
		e.clear();
	}
	add_dirty_reaction(e, t) {
		(t === 2048 || this.#s.get(e) !== 2048) && this.#s.set(e, t);
	}
	oncommit(e) {
		this.#e.add(e);
	}
	ondiscard(e) {
		this.#t.add(e);
	}
	settled() {
		return (this.#i ??= S()).promise;
	}
	static ensure() {
		if (F === null) {
			let t = F = new e();
			!an && !rn && wt(() => {
				t.started || t.flush();
			});
		}
		return F;
	}
	apply() {
		tn = null;
	}
	schedule(e) {
		nn = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768) ? e.b.defer_effect(e) : this.#a.push(e);
	}
	#b() {
		if (this.linked) {
			var e = this.prev, t = this.next;
			e === null || (e.next = t), t === null ? $t = e : t.prev = e, this.linked = !1;
		}
	}
};
function fn(e) {
	var t = rn, n = en;
	en = null, rn = !0;
	try {
		var r;
		for (e && (fn(), r = e());;) {
			if (Tt(), F === null) return r;
			F.flush();
		}
	} finally {
		rn = t, en = n;
	}
}
function pn() {
	var e = /* @__PURE__ */ new Map();
	for (let n of F.current.keys()) for (let [r, i] of n.updated ?? []) {
		var t = e.get(r);
		t || (t = {
			error: i.error,
			count: 0
		}, e.set(r, t)), t.count += i.count;
	}
	for (let t of e.values()) t.error && console.error(t.error);
	try {
		rt();
	} catch (e) {
		f(e, "stack", { value: "" }), ir(e, nn);
	}
}
var mn = null;
function hn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Kr(r) && (mn = /* @__PURE__ */ new Set(), Qr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Tr(r), mn?.size > 0)) {
				bn.clear();
				for (let e of mn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) mn.has(n) && (mn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Qr(n);
					}
				}
				mn.clear();
			}
		}
		mn = null;
	}
}
function gn(e) {
	F.schedule(e);
}
function _n(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), P(e, C);
		for (var n = e.first; n !== null;) _n(n, t), n = n.next;
	}
}
function vn(e) {
	P(e, C);
	for (var t = e.first; t !== null;) vn(t), t = t.next;
}
// node_modules/svelte/src/internal/client/reactivity/sources.js
var yn = /* @__PURE__ */ new Set(), bn = /* @__PURE__ */ new Map();
function xn(e) {
	yn = e;
}
var Sn = !1;
function Cn() {
	Sn = !0;
}
function wn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ue,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Tn(e, t) {
	let n = wn(e, t);
	return Rr(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function En(e, t = !1, r = !0) {
	let i = wn(e);
	return t || (i.equals = Ge), n && r && A !== null && A.l !== null && (A.l.s ??= []).push(i), i;
}
function Dn(e, t, n = !1) {
	W !== null && (!Pr || W.f & 131072) && xt() && W.f & 4325394 && (Lr === null || !Lr.has(e)) && ut();
	let r = n ? In(t) : t;
	return ft(r, e.label), An(e, r, sn);
}
var On = null, kn = 0;
function An(e, t, n = null) {
	if (!e.equals(t)) {
		Mr ? bn.set(e, t) : bn.has(e) || bn.set(e, e.v);
		var r = dn.ensure();
		if (r.capture(e, t), G !== null) {
			e.updated ??= /* @__PURE__ */ new Map();
			let t = (e.updated.get("")?.count ?? 0) + 1;
			if (e.updated.set("", {
				error: null,
				count: t
			}), t > 5) {
				let t = pt("updated at");
				if (t !== null) {
					let n = e.updated.get(t.stack);
					n || (n = {
						error: t,
						count: 0
					}, e.updated.set(t.stack, n)), n.count++;
				}
			}
		}
		if (G !== null && (e.set_during_effect = !0), e.f & 2) {
			let t = e;
			e.f & 2048 && Yt(t), tn === null && Dt(t);
		}
		e.wv = Gr(), On = null, kn = 0, Pn(e, w, n), On = null, xt() && G !== null && G.f & 1024 && !(G.f & 96) && (zr === null ? Br([e]) : zr.push(e)), !r.is_fork && yn.size > 0 && !Sn && jn();
	}
	return t;
}
function jn() {
	Sn = !1;
	for (let e of yn) {
		e.f & 1024 && P(e, te);
		let t;
		try {
			t = Kr(e);
		} catch {
			t = !0;
		}
		t && Qr(e);
	}
	yn.clear();
}
function Mn(e, t = 1) {
	var n = J(e), r = t === 1 ? n++ : n--;
	return Dn(e, n), r;
}
function Nn(e) {
	Dn(e, e.v + 1);
}
function Pn(e, t, n) {
	var r = e.reactions;
	if (r !== null) {
		var i = xt(), a = r.length;
		if (kn += a, kn > 1e5 && On === null && (On = /* @__PURE__ */ new Set()), On !== null) {
			if (On.has(e)) return;
			On.add(e);
		}
		for (var o = 0; o < a; o++) {
			var s = r[o], c = s.f;
			if (i || s !== G) {
				var l = (c & w) === 0;
				if (l && P(s, t), c & 131072) yn.add(s);
				else if (c & 2) {
					var u = s;
					tn?.delete(u), Pn(u, te, n);
				} else if (l) {
					var d = s;
					c & 16 && mn !== null && mn.add(d), n === null ? gn(d) : n.push(d);
				}
			}
		}
	}
}
// node_modules/svelte/src/internal/client/proxy.js
var Fn = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function In(e) {
	if (typeof e != "object" || !e || me in e || he in e) return e;
	let t = _(e);
	if (t !== h && t !== g) return e;
	var n = /* @__PURE__ */ new Map(), r = c(e), i = /* @__PURE__ */ Tn(0), o = null, s = Ur, l = (e) => {
		if (Ur === s) return e();
		var t = W, n = Ur;
		Fr(null), Wr(s);
		var r = e();
		return Fr(t), Wr(n), r;
	};
	r && (n.set("length", /* @__PURE__ */ Tn(e.length, o)), e = Vn(e));
	var u = "";
	let d = !1;
	function f(e) {
		if (!d) {
			d = !0, u = e, k(i, `${u} version`);
			for (let [e, t] of n) k(t, Ln(u, e));
			d = !1;
		}
	}
	return new Proxy(e, {
		defineProperty(e, t, r) {
			"value" in r && r.configurable !== !1 && r.enumerable !== !1 && r.writable !== !1 || ct();
			var i = n.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ Tn(r.value, o);
				return n.set(t, e), typeof t == "string" && k(e, Ln(u, t)), e;
			}) : Dn(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ Tn(a, o));
					n.set(t, e), Nn(i), k(e, Ln(u, t));
				}
			} else Dn(r, a), Nn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === me) return e;
			if (r === ve) return f;
			var s = n.get(r), c = r in t;
			if (s === void 0 && (!c || p(t, r)?.writable) && (s = l(() => {
				var e = /* @__PURE__ */ Tn(In(c ? t[r] : a), o);
				return k(e, Ln(u, r)), e;
			}), n.set(r, s)), s !== void 0) {
				var d = J(s);
				return d === a ? void 0 : d;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			this.has?.(e, t);
			var r = Reflect.getOwnPropertyDescriptor(e, t), i = n.get(t);
			if (i !== void 0) {
				var o = J(i);
				if (o === a) return;
				if (r && "value" in r) r.value = o;
				else return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === me) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== a || Reflect.has(e, t);
			return (r !== void 0 || (G !== null || W !== null) && (!i || p(e, t)?.writable)) && (r === void 0 && (r = l(() => {
				var n = /* @__PURE__ */ Tn(i ? In(e[t]) : a, o);
				return k(n, Ln(u, t)), n;
			}), n.set(t, r)), J(r) === a) ? !1 : i;
		},
		set(e, t, s, c) {
			var d = n.get(t), f = t in e;
			if (r && t === "length") for (var m = s; m < d.v; m += 1) {
				var h = n.get(m + "");
				h === void 0 ? m in e && (h = l(() => /* @__PURE__ */ Tn(a, o)), n.set(m + "", h), k(h, Ln(u, m))) : Dn(h, a);
			}
			if (d === void 0) (!f || p(e, t)?.writable) && (d = l(() => /* @__PURE__ */ Tn(void 0, o)), k(d, Ln(u, t)), Dn(d, In(s)), n.set(t, d));
			else {
				f = d.v !== a;
				var g = l(() => In(s));
				Dn(d, g);
			}
			var _ = Reflect.getOwnPropertyDescriptor(e, t);
			if (_?.set && _.set.call(c, s), !f) {
				if (r && typeof t == "string") {
					var v = n.get("length"), y = Number(t);
					Number.isInteger(y) && y >= v.v && Dn(v, y + 1);
				}
				Nn(i);
			}
			return !0;
		},
		ownKeys(e) {
			J(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== a;
			});
			for (var [r, o] of n) o.v !== a && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			lt();
		}
	});
}
function Ln(e, t) {
	return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Fn.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function Rn(e) {
	try {
		if (typeof e == "object" && e && me in e) return e[me];
	} catch {}
	return e;
}
function zn(e, t) {
	return Object.is(Rn(e), Rn(t));
}
var Bn = /* @__PURE__ */ new Set([
	"copyWithin",
	"fill",
	"pop",
	"push",
	"reverse",
	"shift",
	"sort",
	"splice",
	"unshift"
]);
function Vn(e) {
	return new Proxy(e, { get(e, t, n) {
		var r = Reflect.get(e, t, n);
		return Bn.has(t) ? function(...e) {
			Cn();
			var t = r.apply(this, e);
			return jn(), t;
		} : r;
	} });
}
// node_modules/svelte/src/internal/client/dev/equality.js
function Hn() {
	let e = Array.prototype, t = Array.__svelte_cleanup;
	t && t();
	let { indexOf: n, lastIndexOf: r, includes: i } = e;
	e.indexOf = function(e, t) {
		let r = n.call(this, e, t);
		if (r === -1) {
			for (let n = t ?? 0; n < this.length; n += 1) if (Rn(this[n]) === e) {
				Ie("array.indexOf(...)");
				break;
			}
		}
		return r;
	}, e.lastIndexOf = function(e, t) {
		let n = r.call(this, e, t ?? this.length - 1);
		if (n === -1) {
			for (let n = 0; n <= (t ?? this.length - 1); n += 1) if (Rn(this[n]) === e) {
				Ie("array.lastIndexOf(...)");
				break;
			}
		}
		return n;
	}, e.includes = function(e, t) {
		let n = i.call(this, e, t);
		if (!n) {
			for (let t = 0; t < this.length; t += 1) if (Rn(this[t]) === e) {
				Ie("array.includes(...)");
				break;
			}
		}
		return n;
	}, Array.__svelte_cleanup = () => {
		e.indexOf = n, e.lastIndexOf = r, e.includes = i;
	};
}
function Un(e, t, n = !0) {
	try {
		e === t != (Rn(e) === Rn(t)) && Ie(n ? "===" : "!==");
	} catch {}
	return e === t === n;
}
// node_modules/svelte/src/internal/client/dom/operations.js
var Wn, Gn, Kn, qn, Jn;
function Yn() {
	if (Wn === void 0) {
		Wn = window, Gn = document, Kn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		qn = p(t, "firstChild").get, Jn = p(t, "nextSibling").get, v(e) && (e[be] = void 0, e[ye] = null, e[xe] = void 0, e.__e = void 0), v(n) && (n[Se] = void 0), e.__svelte_meta = null, Hn();
	}
}
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function L(e) {
	return qn.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Xn(e) {
	return Jn.call(e);
}
function R(e, t) {
	if (!T) return /* @__PURE__ */ L(e);
	var n = /* @__PURE__ */ L(E);
	if (n === null) n = E.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), D(r), r;
	}
	return t && tr(n), D(n), n;
}
function Zn(e, t = !1) {
	if (!T) {
		var n = /* @__PURE__ */ L(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Xn(n) : n;
	}
	if (t) {
		if (E?.nodeType !== 3) {
			var r = I();
			return E?.before(r), D(r), r;
		}
		tr(E);
	}
	return E;
}
function z(e, t = !1) {
	if (!T) return /* @__PURE__ */ L(e);
	var n = R(e, t);
	return O(e), n;
}
function B(e, t = 1, n = !1) {
	let r = T ? E : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Xn(r);
	if (!T) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), D(a), a;
		}
		tr(r);
	}
	return D(r), r;
}
function Qn(e) {
	e.textContent = "";
}
function $n() {
	return !1;
}
function er(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function tr(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
// node_modules/svelte/src/internal/client/error-handling.js
var nr = /* @__PURE__ */ new WeakMap();
function rr(e) {
	var t = G;
	if (t === null) return W.f |= pe, e;
	if (e instanceof Error && !nr.has(e) && nr.set(e, ar(e, t)), !(t.f & 32768) && !(t.f & 4)) throw !t.parent && e instanceof Error && or(e), e;
	ir(e, t);
}
function ir(e, t) {
	if (e === i) throw e;
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128 && !(t.f & 33570816)) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e instanceof Error && or(e), e;
	}
}
function ar(e, t) {
	let n = p(e, "message");
	if (!n || n.configurable) {
		for (var r = Kn ? "  " : "	", i = `\n${r}in ${t.fn?.name || "<unknown>"}`, a = t.ctx; a !== null;) i += `\n${r}in ${a.function?.[o].split("/").pop()}`, a = a.p;
		return {
			message: e.message + `\n${i}\n`,
			stack: e.stack?.split("\n").filter((e) => !e.includes("svelte/src/internal")).join("\n")
		};
	}
}
function or(e) {
	let t = nr.get(e);
	t && (f(e, "message", { value: t.message }), f(e, "stack", { value: t.stack }));
}
// node_modules/svelte/src/internal/client/reactivity/effects.js
function sr(e) {
	G === null && (W === null && nt(e), tt()), Mr && et(e);
}
function cr(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function lr(e, t) {
	for (var n = G; n !== null && n.f & 131072;) n = n.parent;
	n !== null && n.f & 8192 && (e |= ne);
	var r = {
		ctx: A,
		deps: null,
		nodes: null,
		f: e | w | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	r.component_function = vt, F?.register_created_effect(r);
	var i = r;
	if (e & 4) on === null ? dn.ensure().schedule(r) : on.push(r);
	else if (t !== null) {
		try {
			Qr(r);
		} catch (e) {
			throw U(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= oe));
	}
	if (i !== null && (i.parent = n, n !== null && cr(i, n), W !== null && W.f & 2 && !(e & 64))) {
		var a = W;
		(a.effects ??= []).push(i);
	}
	return r;
}
function ur() {
	return W !== null && !Pr;
}
function dr(e) {
	let t = lr(8, null);
	return P(t, C), t.teardown = e, t;
}
function fr(e) {
	sr("$effect"), f(e, "name", { value: "$effect" });
	var t = G.f;
	if (!W && t & 32 && A !== null && !A.i) {
		var n = A;
		(n.e ??= []).push(e);
	} else return pr(e);
}
function pr(e) {
	return lr(4 | le, e);
}
function mr(e) {
	return sr("$effect.pre"), f(e, "name", { value: "$effect.pre" }), lr(8 | le, e);
}
function hr(e) {
	dn.ensure();
	let t = lr(64 | ce, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Er(t, () => {
			U(t), n(void 0);
		}) : (U(t), n(void 0));
	});
}
function gr(e) {
	return lr(4, e);
}
function _r(e) {
	return lr(fe | ce, e);
}
function vr(e, t = 0) {
	return lr(8 | t, e);
}
function V(e, t = [], n = [], r = []) {
	Pt(r, t, n, (t) => {
		lr(8, () => {
			e(...t.map(J));
		});
	});
}
function yr(e, t = [], n = [], r = []) {
	Pt(r, t, n, (t) => {
		lr(4, () => e(...t.map(J)));
	});
}
function br(e, t = 0) {
	var n = lr(16 | t, e);
	return n.dev_stack = gt, n;
}
function H(e) {
	return lr(32 | ce, e);
}
function xr(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = Mr, r = W;
		Nr(!0), Fr(null);
		try {
			t.call(null);
		} catch (t) {
			ir(t, e.parent);
		} finally {
			Nr(n), Fr(r);
		}
	}
}
function Sr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Mt(() => {
			e.abort(Te);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : U(n, t), n = r;
	}
}
function Cr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || U(t), t = n;
	}
}
function U(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (wr(e.nodes.start, e.nodes.end), n = !0), e.f |= ae, Sr(e, t && !n), Zr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	xr(e), e.f ^= ae, e.f |= re;
	var i = e.parent;
	i !== null && i.first !== null && Tr(e), e.component_function = null, e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function wr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Xn(e);
		e.remove(), e = n;
	}
}
function Tr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Er(e, t, n = !0) {
	var r = [];
	e.f |= 256, Dr(e, r, !0);
	var i = () => {
		n && U(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Dr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ne;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Dr(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Or(e) {
	e.f &= -257, kr(e, !0);
}
function kr(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		e.f ^= ne, e.f & 1024 || (P(e, w), dn.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			kr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Ar(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Xn(n);
		t.append(n), n = i;
	}
}
// node_modules/svelte/src/internal/client/legacy.js
var jr = null, Mr = !1;
function Nr(e) {
	Mr = e;
}
var W = null, Pr = !1;
function Fr(e) {
	W = e;
}
var G = null;
function Ir(e) {
	G = e;
}
var Lr = null;
function Rr(e) {
	W !== null && (W.f & 2097152 || W.f & 2) && (Lr ??= /* @__PURE__ */ new Set()).add(e);
}
var K = null, q = 0, zr = null;
function Br(e) {
	zr = e;
}
var Vr = 1, Hr = 0, Ur = Hr;
function Wr(e) {
	Ur = e;
}
function Gr() {
	return ++Vr;
}
function Kr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Kr(a) && Xt(a), a.wv > e.wv) return !0;
		}
		t & 512 && tn === null && P(e, C);
	}
	return !1;
}
function qr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Lr !== null && Lr.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? qr(a, t, !1) : t === a && (n ? P(a, w) : a.f & 1024 && P(a, te), gn(a));
	}
}
function Jr(e) {
	var t = K, n = q, r = zr, i = W, a = Lr, o = A, s = Pr, c = Ur, l = e.f;
	K = null, q = 0, zr = null, W = l & 96 ? null : e, Lr = null, ht(e.ctx), Pr = !1, Ur = ++Hr, e.ac !== null && (Mt(() => {
		e.ac.abort(Te);
	}), e.ac = null);
	try {
		e.f |= de;
		var u = e.fn, d = u();
		e.f |= ie;
		var f = Yr(e);
		if (xt() && zr !== null && !Pr && f !== null && !(e.f & 6146)) for (var p = 0; p < zr.length; p++) qr(zr[p], e);
		if (i !== null && i !== e) {
			if (Hr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Hr;
			if (t !== null) for (let e of t) e.rv = Hr;
			zr !== null && (r === null ? r = zr : r.push(...zr));
		}
		return e.f & 8388608 && (e.f ^= pe), d;
	} catch (t) {
		return Yr(e), rr(t);
	} finally {
		e.f ^= de, K = t, q = n, zr = r, W = i, Lr = a, ht(o), Pr = s, Ur = c;
	}
}
function Yr(e) {
	var t = e.deps, n = F?.is_fork;
	if (K !== null) {
		var r;
		if (n || Zr(e, q), t !== null && q > 0) for (t.length = q + K.length, r = 0; r < K.length; r++) t[q + r] = K[r];
		else e.deps = t = K;
		if (ur() && e.f & 512) for (r = q; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && q < t.length && (Zr(e, q), t.length = q);
	return t;
}
function Xr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = l.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (K === null || !u.call(K, t))) {
		var o = t;
		o.f & 512 && (o.f ^= 512), o.v !== a && Dt(o), o.ac !== null && Mt(() => {
			o.ac.abort(Te), o.ac = null, P(o, w);
		}), Zt(o), Zr(o, 0);
	}
}
function Zr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Xr(e, n[r]);
}
function Qr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		P(e, C);
		var n = G;
		G = e;
		var r = vt;
		yt(e.component_function);
		var i = gt;
		_t(e.dev_stack ?? gt);
		try {
			t & 16777232 ? Cr(e) : Sr(e), xr(e);
			var a = Jr(e);
			e.teardown = typeof a == "function" ? a : null, e.wv = Vr;
		} finally {
			G = n, yt(r), _t(i);
		}
	}
}
async function $r() {
	await Promise.resolve(), fn();
}
function J(e) {
	var t = !!(e.f & 2);
	if (jr?.add(e), W !== null && !Pr && !(G !== null && G.f & 16384) && (Lr === null || !Lr.has(e))) {
		var n = W.deps;
		if (W.f & 2097152) e.rv < Hr && (e.rv = Hr, K === null && n !== null && n[q] === e ? q++ : K === null ? K = [e] : K.push(e));
		else {
			W.deps ??= [], u.call(W.deps, e) || W.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [W] : u.call(r, W) || r.push(W);
		}
	}
	if (!Pr && zt && F === null && en === null && !zt.warned && !(zt.effect.f & 2097152) && !zt.effect_deps.has(e)) {
		zt.warned = !0, ke(e.label);
		var i = pt("traced at");
		i && console.warn(i);
	}
	if (Vt.delete(e), Mr && bn.has(e)) return bn.get(e);
	if (t) {
		var a = e;
		if (Mr) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || ti(a)) && (o = Yt(a)), bn.set(a, o), o;
		}
		var s = !(a.f & 512) && !Pr && W !== null && !!(W.f & 512), c = (a.f & ie) === 0;
		Kr(a) && (s && (a.f |= 512), Xt(a)), s && !c && (Qt(a), ei(a));
	}
	if (tn?.has(e)) return tn.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function ei(e) {
	if (e.f |= 512, e.deps !== null) for (let n of e.deps) {
		var t = n.reactions;
		t === null ? n.reactions = [e] : u.call(t, e) || t.push(e), n.f & 2 && !(n.f & 512) && (Qt(n), ei(n));
	}
}
function ti(e) {
	if (e.v === a) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (bn.has(t) || t.f & 2 && ti(t)) return !0;
	return !1;
}
function ni(e) {
	var t = Pr;
	try {
		return Pr = !0, e();
	} finally {
		Pr = t;
	}
}
function ri(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (me in e) ii(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && me in n && ii(n);
		}
	}
}
function ii(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			ii(e[n], t);
		} catch {}
		let n = _(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = m(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
// node_modules/svelte/src/internal/client/dom/elements/events.js
var ai = Symbol("events"), oi = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new Set(), ci = null, li = !1;
function ui(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ci = e, li || (li = !0, setTimeout(() => {
		li = !1, ci = null;
	}));
	var o = 0, s = ci === e && e[ai];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[ai] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		f(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = W, d = G;
		Fr(null), Ir(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[ai]?.[r];
					h == null || a.disabled && e.target !== a || h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[ai] = t, delete e.currentTarget, Fr(u), Ir(d);
		}
	}
}
// node_modules/svelte/src/internal/client/dom/reconciler.js
var di = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function fi(e) {
	return di?.createHTML(e) ?? e;
}
function pi(e) {
	var t = er("template");
	return t.innerHTML = fi(e.replaceAll("<!>", "<!---->")), t.content;
}
// node_modules/svelte/src/internal/client/dom/template.js
function mi(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Y(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (T) return mi(E, null), E;
		i === void 0 && (i = pi(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ L(i)));
		var t = r || Kn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ L(t), s = t.lastChild;
			mi(o, s);
		} else mi(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function hi(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = !!(t & 1), a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (T) return mi(E, null), E;
		if (!o) {
			var e = /* @__PURE__ */ L(pi(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ L(e);) o.appendChild(/* @__PURE__ */ L(e));
			else o = /* @__PURE__ */ L(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ L(t), r = t.lastChild;
			mi(n, r);
		} else mi(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function gi(e, t) {
	return /* @__PURE__ */ hi(e, t, "svg");
}
function _i(e = "") {
	if (!T) {
		var t = I(e + "");
		return mi(t, t), t;
	}
	var n = E;
	return n.nodeType === 3 ? tr(n) : (n.before(n = I()), D(n)), mi(n, n), n;
}
function vi() {
	if (T) return mi(E, null), E;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = I();
	return e.append(t, n), mi(t, n), e;
}
function X(e, t) {
	if (T) {
		var n = G;
		n.f & 32768 && n.nodes.end !== null || (n.nodes.end = E), ze();
	} else e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var yi = ["touchstart", "touchmove"];
function bi(e) {
	return yi.includes(e);
}
// node_modules/svelte/src/reactivity/create-subscriber.js
function xi(e) {
	let t = 0, n = wn(0), r;
	return k(n, "createSubscriber version"), () => {
		ur() && (J(n), vr(() => (t === 0 && (r = ni(() => e(() => Nn(n)))), t += 1, () => {
			wt(() => {
				--t, t === 0 && (r?.(), r = void 0, Nn(n));
			});
		})));
	};
}
// node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Si = oe | ce;
function Ci(e, t, n, r) {
	new wi(e, t, n, r);
}
var wi = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = T ? E : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Map();
	#p = null;
	#m = xi(() => (this.#p = wn(this.#l), k(this.#p, "$effect.pending()"), () => {
		this.#p = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = br(() => {
			if (T) {
				let e = He(this.#t);
				ze();
				let t = e === "[!";
				if (e.startsWith("[?")) {
					let t = JSON.parse(e.slice(2));
					this.#g(t);
				} else t ? this.#y() : this.#h();
			} else this.#b();
		}, Si), T && (this.#e = E);
	}
	#h() {
		try {
			this.#a = H(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#g(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#_(e);
		wt(r), t && (this.#s = H(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#_(e) {
		var t = !1, n = !1;
		let r = () => {
			this.#v() || (t ? Le() : (t = !0, n && dt(), this.#s !== null && Er(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			})));
		};
		return {
			reset: r,
			invoke_onerror: () => {
				if (!this.#v()) try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					ir(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#v() {
		return (this.#i.f & (re | ae)) !== 0;
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = H(() => e(this.#e)), wt(() => {
			if (!this.#v()) {
				var e = this.#c = document.createDocumentFragment(), t = I(), n = !1;
				e.append(t), this.#a = this.#S(() => {
					try {
						return H(() => this.#r(t));
					} catch (e) {
						try {
							this.error(e), n = !0;
						} catch (e) {
							ir(e, this.#i.parent);
						}
						return null;
					}
				}), this.#a === null ? (this.#c = null, n && this.#x(F)) : this.#u === 0 && (this.#e.before(e), this.#c = null, Er(this.#o, () => {
					this.#o = null;
				}), this.#x(F));
			}
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = H(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Ar(this.#a, e);
				let t = this.#n.pending;
				this.#o = H(() => t(this.#e));
			} else this.#x(F);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_reactions(this.#f);
	}
	defer_effect(e) {
		Ot(e, this.#f);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = G, n = W, r = A;
		Ir(this.#i), Fr(this.#i), ht(this.#i.ctx);
		try {
			return dn.ensure(), e();
		} finally {
			Ir(t), Fr(n), ht(r);
		}
	}
	#C(e, t) {
		this.has_pending_snippet() ? (this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Er(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null))) : this.parent && this.parent.#C(e, t);
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#p || this.#d) && (this.#d = !0, wt(() => {
			this.#d = !1, this.#p && An(this.#p, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#m(), J(this.#p);
	}
	error(e) {
		if (e === i || !this.#n.onerror && !this.#n.failed) throw e;
		F?.is_fork ? (this.#a && F.skip_effect(this.#a), this.#o && F.skip_effect(this.#o), this.#s && F.skip_effect(this.#s), F.oncommit(() => {
			this.#v() || this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (U(this.#a), null), this.#o &&= (U(this.#o), null), this.#s &&= (U(this.#s), null), T && (D(this.#t), Be(), D(Ve()));
		let t = this.#n.failed, n = (e) => {
			if (this.#v()) return;
			let { reset: n, invoke_onerror: r } = this.#_(e);
			r(), t && !this.#v() && (this.#s = this.#S(() => {
				try {
					return H(() => {
						var r = G;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return ir(e, this.#i.parent), null;
				}
			}));
		};
		wt(() => {
			if (!this.#v()) {
				var t;
				try {
					t = this.transform_error(e);
				} catch (e) {
					ir(e, this.#i && this.#i.parent);
					return;
				}
				typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => ir(e, this.#i && this.#i.parent)) : n(t);
			}
		});
	}
};
function Z(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[Se] ??= e.nodeValue) && (e[Se] = n, e.nodeValue = `${n}`);
}
function Ti(e, t) {
	return Oi(e, t);
}
function Ei(e, t) {
	Yn(), t.intro = t.intro ?? !1;
	let n = t.target, r = T, a = E;
	try {
		for (var o = /* @__PURE__ */ L(n); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ Xn(o);
		if (!o) throw i;
		Re(!0), D(o);
		let r = Oi(e, {
			...t,
			anchor: o
		});
		return Re(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== i && console.warn("Failed to hydrate: ", r), t.recover === !1 && it(), Yn(), Qn(n), Re(!1), Ti(e, t);
	} finally {
		Re(r), D(a);
	}
}
var Di = /* @__PURE__ */ new Map();
function Oi(e, { target: t, anchor: n, props: r = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Yn();
	var l = void 0, u = hr(() => {
		var s = n ?? t.appendChild(I());
		Ci(s, { pending: () => {} }, (t) => {
			M({});
			var n = A;
			if (o && (n.c = o), a && (r.$$events = a), T && mi(t, null), l = e(t, r) || bt(), T && (G.nodes.end = E, E === null || E.nodeType !== 8 || E.data !== "]")) throw Pe(), i;
			N();
		}, c);
		var u = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = bi(r);
					for (let e of [t, document]) {
						var a = Di.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Di.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ui, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(d(oi)), si.add(f), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = Di.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, ui), r.delete(e), r.size === 0 && Di.delete(n)) : r.set(e, i);
			}
			si.delete(f), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return ki.set(l, u), l;
}
var ki = /* @__PURE__ */ new WeakMap();
// node_modules/svelte/src/internal/shared/validate.js
function Ai(e) {
	return e.toString = () => (Ke(), ""), e;
}
// node_modules/svelte/src/internal/client/dom/blocks/branches.js
var ji = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) Or(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Or(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild[we] = this.anchor, r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (U(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Ar(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else U(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Er(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (U(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = F, r = $n();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = I();
				i.append(a), this.#n.set(e, {
					effect: H(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, H(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else T && (this.anchor = E), this.#a(n);
	}
};
// node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function Mi(e, t, ...n) {
	var r = new ji(e);
	br(() => {
		let e = t() ?? null;
		e ?? at(), r.ensure(e, e && ((t) => e(t, ...n)));
	}, oe);
}
function Ni(e, t) {
	let n = (n, ...r) => {
		var i = vt;
		yt(e);
		try {
			return t(n, ...r);
		} finally {
			yt(i);
		}
	};
	return Ai(n), n;
}
{
	function e(e) {
		if (!(e in globalThis)) {
			let t;
			Object.defineProperty(globalThis, e, {
				configurable: !0,
				get: () => {
					if (t !== void 0) return t;
					st(e);
				},
				set: (e) => {
					t = e;
				}
			});
		}
	}
	e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
// node_modules/svelte/src/internal/client/dev/css.js
var Pi = /* @__PURE__ */ new Map();
function Fi(e, t) {
	var n = Pi.get(e);
	n || (n = /* @__PURE__ */ new Set(), Pi.set(e, n)), n.add(t);
}
// node_modules/svelte/src/internal/client/dev/elements.js
function Q(e, t, n) {
	return (...r) => {
		let i = e(...r);
		return Li(T ? i : i.nodeType === 11 ? i.firstChild : i, t, n), i;
	};
}
function Ii(e, t, n) {
	e.__svelte_meta = {
		parent: gt,
		loc: {
			file: t,
			line: n[0],
			column: n[1]
		}
	}, n[2] && Li(e.firstChild, t, n[2]);
}
function Li(e, t, n) {
	for (var r = 0, i = 0; e && r < n.length;) {
		if (T && e.nodeType === 8) {
			var a = e;
			a.data[0] === "[" ? i += 1 : a.data[0] === "]" && --i;
		}
		i === 0 && e.nodeType === 1 && Ii(e, t, n[r++]), e = e.nextSibling;
	}
}
// node_modules/svelte/src/internal/client/dev/legacy.js
function Ri(e) {
	e && Xe(e[o] ?? "a component", e.name);
}
function zi() {
	let e = A?.function;
	function t(t) {
		Ye(t, e[o]);
	}
	return {
		$destroy: () => t("$destroy()"),
		$on: () => t("$on(...)"),
		$set: () => t("$set(...)")
	};
}
// node_modules/svelte/src/internal/client/dom/blocks/if.js
function Bi(e, t, n = !1) {
	var r;
	T && (r = E, ze());
	var i = new ji(e), a = n ? oe : 0;
	function o(e, t) {
		if (T) {
			var n = He(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ve();
				D(a), i.anchor = a, Re(!1), i.ensure(e, t), Re(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	br(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
// node_modules/svelte/src/internal/client/dom/blocks/each.js
function Vi(e, t) {
	return t;
}
function Hi(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		Er(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Ui(e, d(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null && e.pending.size === 0;
		if (c) {
			var l = n, u = l.parentNode;
			Qn(u), u.append(l), e.items.clear();
		}
		Ui(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Ui(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ue, Ar(a, document.createDocumentFragment())) : U(t[i], n);
	}
}
var Wi;
function Gi(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = T ? D(/* @__PURE__ */ L(l)) : l.appendChild(I());
	}
	T && ze();
	var u = null, f = /* @__PURE__ */ Kt(() => {
		var e = n();
		return c(e) ? e : e == null ? [] : d(e);
	});
	k(f, "{#each ...}");
	var p = /* @__PURE__ */ new Map(), m = !0;
	function h(e) {
		if (!(_.effect.f & 16384)) {
			_.pending.delete(e);
			var n = J(f);
			_.fallback = u, qi(_, n, o, t, r), u !== null && (n.length === 0 ? u.f & 33554432 ? (u.f ^= ue, Yi(u, null, o)) : Or(u) : Er(u, () => {
				u = null;
			}));
		}
	}
	function g(e) {
		_.pending.delete(e);
	}
	var _ = {
		effect: br(() => {
			var e = J(f), c = e.length;
			let l = !1;
			T && He(o) === "[!" != (c === 0) && (o = Ve(), D(o), Re(!1), l = !0);
			for (var d = /* @__PURE__ */ new Set(), _ = F, v = $n(), y = 0; y < c; y += 1) {
				T && E.nodeType === 8 && E.data === "]" && (o = E, l = !0, Re(!1));
				var b = e[y], x = r(b, y), ee = r(b, y);
				x !== ee && $e(String(y), String(x), String(ee));
				var S = m ? null : s.get(x);
				S ? (S.v && An(S.v, b), S.i && An(S.i, y), v && _.unskip_effect(S.e)) : (S = Ji(s, m ? o : Wi ??= I(), b, x, y, i, t, n), m || (S.e.f |= ue), s.set(x, S)), d.add(x);
			}
			if (c === 0 && a && !u && (m ? u = H(() => a(o)) : (u = H(() => a(Wi ??= I())), u.f |= ue)), c > d.size && Zi(e, r), T && c > 0 && D(Ve()), !m) {
				if (p.set(_, d), v) {
					for (let [e, t] of s) d.has(e) || _.skip_effect(t.e);
					_.oncommit(h), _.ondiscard(g);
				} else h(_);
			}
			l && Re(!0), J(f);
		}),
		flags: t,
		items: s,
		pending: p,
		outrogroups: null,
		fallback: u
	};
	m = !1, T && (o = E);
}
function Ki(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function qi(e, t, n, r, i) {
	var a = !!(r & 8), o = t.length, s = e.items, c = Ki(e.effect.first), l, u = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (Or(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= ue, _ === c) Yi(_, null, n);
			else {
				var y = u ? u.next : c;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Xi(e, u, _), Xi(e, _, y), Yi(_, y, n), u = _, p = [], m = [], c = Ki(u.next);
				continue;
			}
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					u = b.prev;
					var ee = p[0], S = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Yi(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					Xi(e, ee.prev, S.next), Xi(e, u, ee), Xi(e, S, b), c = b, u = S, --v, p = [], m = [];
				} else l.delete(_), Yi(_, c, n), Xi(e, _.prev, _.next), Xi(e, _, u === null ? e.effect.first : u.next), Xi(e, u, _), u = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = Ki(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), u = _, c = Ki(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Ui(e, d(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var C = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || C.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && C.push(c), c = Ki(c.next);
		var w = C.length;
		if (w > 0) {
			var te = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < w; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < w; v += 1) C[v].nodes?.a?.fix();
			}
			Hi(e, C, te);
		}
	}
	a && wt(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Ji(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? wn(n) : /* @__PURE__ */ En(n, !1, !1) : null, l = o & 2 ? wn(i) : null;
	return c && (c.trace = () => {
		s()[l?.v ?? i];
	}), {
		v: c,
		i: l,
		e: H(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Yi(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Xn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Xi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Zi(e, t) {
	let n = /* @__PURE__ */ new Map(), r = e.length;
	for (let i = 0; i < r; i++) {
		let r = t(e[i], i);
		if (n.has(r)) {
			let e = String(n.get(r)), t = String(i), a = String(r);
			a.startsWith("[object ") && (a = null), Qe(e, t, a);
		}
		n.set(r, i);
	}
}
// node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function Qi(e, t) {
	let n = null, r = T;
	var i;
	if (T) {
		n = E;
		for (var a = /* @__PURE__ */ L(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ Xn(a);
		if (a === null) Re(!1);
		else {
			var o = /* @__PURE__ */ Xn(a);
			a.remove(), D(o);
		}
	}
	T || (i = document.head.appendChild(I()));
	try {
		br(() => {
			var e = H(() => t(i));
			e.f |= se, T || (e.nodes === null ? e.nodes = {
				start: i,
				end: i,
				a: null,
				t: null
			} : e.nodes.end = i);
		});
	} finally {
		r && (Re(!0), D(n));
	}
}
// node_modules/svelte/src/internal/client/dom/css.js
function $i(e, t) {
	gr(() => {
		e = G?.parent?.nodes?.start ?? e;
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = er("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e), Fi(t.hash, e);
		}
	});
}
// node_modules/clsx/dist/clsx.mjs
function ea(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = ea(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function ta() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ea(e)) && (r && (r += " "), r += t);
	return r;
}
// node_modules/svelte/src/internal/shared/attributes.js
function na(e) {
	return typeof e == "object" ? ta(e) : e ?? "";
}
var ra = [..." 	\n\r\f\xA0\v﻿"];
function ia(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || ra.includes(r[o - 1])) && (s === r.length || ra.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
// node_modules/svelte/src/internal/client/dom/elements/class.js
function aa(e, t, n, r, i, a) {
	var o = e[be];
	if (T || o !== n || o === void 0) {
		var s = ia(n, r, a);
		T && s === e.getAttribute("class") || (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[be] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
// node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function oa(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function sa(e, t) {
	var n = e.__defaultValue, r = e.multiple, i = r ? n ?? [] : null;
	if (!r || c(i)) {
		var a = e.selectedIndex, o = t && r ? new Set(e.selectedOptions) : null;
		for (var s of e.options) {
			var l = da(s);
			oa(s, r ? i.includes(l) : zn(l, n));
		}
		if (t) {
			if (o !== null) for (s of e.options) {
				var u = o.has(s);
				s.selected !== u && (s.selected = u);
			}
			else e.selectedIndex !== a && (e.selectedIndex = a);
		}
	}
}
function ca(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!c(t)) return Fe();
		for (var r of e.options) r.selected = t.includes(da(r));
	} else {
		for (r of e.options) if (zn(da(r), t)) {
			r.selected = !0;
			return;
		}
		n && t === void 0 || (e.selectedIndex = -1);
	}
}
function la(e) {
	var t = new MutationObserver((t) => {
		t.every(fa) || ("__defaultValue" in e && sa(e, !1), "__value" in e && ca(e, e.__value));
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), dr(() => {
		t.disconnect();
	});
}
function ua(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet(), i = !0;
	Nt(e, "change", (t) => {
		var i = t ? "[selected]" : ":checked", a;
		if (e.multiple) a = [].map.call(e.querySelectorAll(i), da);
		else {
			var o = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
			a = o && da(o);
		}
		n(a), e.__value = a, F !== null && r.add(F);
	}), gr(() => {
		var a = t();
		if (e === document.activeElement) {
			var o = F;
			if (r.has(o)) return;
		}
		if (ca(e, a, i), i && a === void 0) {
			var s = e.querySelector(":checked");
			s !== null && (a = da(s), n(a));
		}
		e.__value = a, i = !1;
	});
}
function da(e) {
	return "__value" in e ? e.__value : e.value;
}
function fa(e) {
	if (e.target.closest("selectedcontent") !== null) return !0;
	if (e.type === "childList") {
		var t = [...e.addedNodes, ...e.removedNodes];
		return t.length > 0 && t.every((e) => e.nodeName === "SELECTEDCONTENT");
	}
	return !1;
}
// node_modules/svelte/src/internal/client/dom/elements/attributes.js
var pa = Symbol("is custom element"), ma = Symbol("is html"), ha = Ee ? "link" : "LINK";
function ga(e) {
	if (T) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					_a(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					_a(e, "checked", null), e.checked = r;
				}
			}
		};
		e[Ce] = n, wt(n), jt();
	}
}
function _a(e, t, n, r) {
	var i = va(e);
	if (T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ha)) r || xa(e, t, n ?? "");
	else {
		var a = i[t];
		a !== (i[t] = n) && (t === "loading" && (e[_e] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ba(e).has(t) ? e[t] = n : (!T || typeof n != "number" && typeof n != "boolean" || a !== String(n)) && e.setAttribute(t, n));
	}
}
function va(e) {
	return e[ye] ??= {
		[pa]: e.nodeName.includes("-"),
		[ma]: e.namespaceURI === s
	};
}
var ya = /* @__PURE__ */ new Map();
function ba(e) {
	var t = e.getAttribute("is") || e.nodeName, n = ya.get(t);
	if (n) return n;
	ya.set(t, n = /* @__PURE__ */ new Set());
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = m(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
		i = _(i);
	}
	return n;
}
function xa(e, t, n) {
	t === "srcset" && wa(e, n) || Sa(e.getAttribute(t) ?? "", n) || Ne(t, e.outerHTML.replace(e.innerHTML, e.innerHTML && "..."), String(n));
}
function Sa(e, t) {
	return e === t || new URL(e, document.baseURI).href === new URL(t, document.baseURI).href;
}
function Ca(e) {
	return e.split(",").map((e) => e.trim().split(" ").filter(Boolean));
}
function wa(e, t) {
	var n = Ca(e.srcset), r = Ca(t);
	return r.length === n.length && r.every(([e, t], r) => t === n[r][1] && (Sa(n[r][0], e) || Sa(e, n[r][0])));
}
// node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function Ta(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Nt(e, "input", async (i) => {
		e.type === "checkbox" && Je();
		var a = i ? e.defaultValue : e.value;
		if (a = Ea(e) ? Da(a) : a, n(a), F !== null && r.add(F), await $r(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (T && e.defaultValue !== e.value || ni(t) == null && e.value) && (n(Ea(e) ? Da(e.value) : e.value), F !== null && r.add(F)), vr(() => {
		e.type === "checkbox" && Je();
		var n = t();
		if (e === document.activeElement) {
			var i = F;
			if (r.has(i)) return;
		}
		Ea(e) && n === Da(e.value) || (e.type !== "date" || n || e.value) && n !== e.value && (e.value = n ?? "");
	});
}
function Ea(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Da(e) {
	return e === "" ? null : +e;
}
// node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Oa(e = !1) {
	let t = A, n = t.l.u;
	if (!n) return;
	let r = () => ri(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Ht(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => J(i);
	}
	n.b.length && mr(() => {
		ka(t, r), ee(n.b);
	}), fr(() => {
		let e = ni(() => n.m.map(x));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && fr(() => {
		ka(t, r), ee(n.a);
	});
}
function ka(e, t) {
	if (e.l.s) for (let t of e.l.s) J(t);
	t();
}
// node_modules/svelte/src/internal/client/reactivity/store.js
var Aa = !1;
function ja(e) {
	var t = Aa;
	try {
		return Aa = !1, [e(), Aa];
	} finally {
		Aa = t;
	}
}
// node_modules/svelte/src/internal/client/reactivity/props.js
var Ma = {
	get(e, t) {
		if (!e.exclude.includes(t)) return J(e.version), t in e.special ? e.special[t]() : e.props[t];
	},
	set(e, t, n) {
		if (!(t in e.special)) {
			var r = G;
			try {
				Ir(e.parent_effect), e.special[t] = Ia({ get [t]() {
					return e.props[t];
				} }, t, 4);
			} finally {
				Ir(r);
			}
		}
		return e.special[t](n), Mn(e.version), !0;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.includes(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	deleteProperty(e, t) {
		return e.exclude.includes(t) || (e.exclude.push(t), Mn(e.version)), !0;
	},
	has(e, t) {
		return !e.exclude.includes(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
	}
};
function Na(e, t) {
	return new Proxy({
		props: e,
		exclude: t,
		special: {},
		version: wn(0),
		parent_effect: G
	}, Ma);
}
var Pa = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (y(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			y(i) && (i = i());
			let a = p(i, t);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (y(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = p(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === me || t === ge) return !1;
		for (let n of e.props) if (y(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (y(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function Fa(...e) {
	return new Proxy({ props: e }, Pa);
}
function Ia(e, t, r, i) {
	var a = !n || !!(r & 2), o = !!(r & 8), s = !!(r & 16), c = i, l = !0, u = void 0, d = () => s && a ? (u ??= /* @__PURE__ */ Ht(i), J(u)) : (l && (l = !1, c = s ? ni(i) : i), c);
	let f;
	if (o) {
		var m = me in e || ge in e;
		f = p(e, t)?.set ?? (m && t in e ? (n) => e[t] = n : void 0);
	}
	var h, g = !1;
	o ? [h, g] = ja(() => e[t]) : h = e[t], h === void 0 && i !== void 0 && (h = d(), f && (a && ot(t), f(h)));
	var _ = a ? () => {
		var n = e[t];
		return n === void 0 ? d() : (l = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (c = void 0), n === void 0 ? c : n;
	};
	if (a && !(r & 4)) return _;
	if (f) {
		var v = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!a || !t || v || g) && f(t ? _() : e), e) : _();
		});
	}
	var y = !1, b = (r & 1 ? Ht : Kt)(() => (y = !1, _()));
	b.label = t, o && J(b);
	var x = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? J(b) : a && o ? In(e) : e;
			return Dn(b, n), y = !0, c !== void 0 && (c = n), e;
		}
		return Mr && y || x.f & 16384 ? b.v : J(b);
	});
}
// node_modules/svelte/src/internal/client/validate.js
function La(e, t, n, r, i, a) {
	Ft(t, () => {
		var t = !1, s = vt?.[o];
		vr(() => {
			if (!t) {
				var [o, c] = ja(n);
				if (!c) {
					var l = r(), u = !1, d = vr(() => {
						u || o[l];
					});
					u = !0, d.deps === null && (je(e, `${s}:${i}:${a}`), t = !0);
				}
			}
		});
	});
}
// src/lib/kb/staleness.ts
function Ra(e) {
	return new Date(e).toISOString().slice(0, 10);
}
function za(e, t = /* @__PURE__ */ new Date()) {
	return Math.floor((t.getTime() - new Date(e).getTime()) / 864e5);
}
// src/lib/layouts/runbook.svelte
Ua[o] = "src/lib/layouts/runbook.svelte";
var Ba = Q(/* @__PURE__ */ Y("<p class=\"banner svelte-e2jw2j\"> </p>"), Ua[o], [[31, 4]]), Va = Q(/* @__PURE__ */ Y("<div class=\"kb svelte-e2jw2j\"><header><a class=\"crumb svelte-e2jw2j\" href=\"/kb\">support desk · kb</a> <h1 class=\"svelte-e2jw2j\"> </h1> <p class=\"meta svelte-e2jw2j\"><span>owner <b> </b></span> <span> </span> <span> </span></p></header> <!> <main><!></main> <footer class=\"svelte-e2jw2j\">Pages are written by people. Tables and charts are built from data at render time.</footer></div>"), Ua[o], [[
	20,
	0,
	[
		[
			21,
			2,
			[
				[22, 4],
				[23, 4],
				[
					24,
					4,
					[
						[
							25,
							6,
							[[25, 18]]
						],
						[26, 6],
						[27, 6]
					]
				]
			]
		],
		[33, 2],
		[34, 2]
	]
]]), Ha = {
	hash: "svelte-e2jw2j",
	code: "\n  :root {\n    --bg: #fbfaf7; --fg: #1d1d1b; --muted: #6b6a66; --line: #e3e0d8;\n    --accent: #2f6f5e; --warn: #b4501f; --warn-bg: #fbeee6; --note-bg: #eef5f2;\n    --mono: ui-monospace, 'Cascadia Code', Menlo, monospace;\n  }\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --bg: #171716; --fg: #ecebe6; --muted: #9c9a93; --line: #34332f;\n      --accent: #6fbfa6; --warn: #f0905d; --warn-bg: #3a2418; --note-bg: #1d2c27;\n    }\n  }\n  body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.6 system-ui, sans-serif; }\n  .kb table { border-collapse: collapse; width: 100%; margin: 1rem 0; font-size: 0.92rem; }\n  .kb th, .kb td { border-bottom: 1px solid var(--line); padding: 0.35rem 0.5rem; text-align: left; }\n  .kb code { font-family: var(--mono); font-size: 0.88em; }\n  .kb a { color: var(--accent); }\n  .kb.svelte-e2jw2j { max-width: 760px; margin: 0 auto; padding: 2rem 16px 4rem; }\n  .crumb.svelte-e2jw2j { font: 0.8rem var(--mono); text-decoration: none; color: var(--muted); }\n  h1.svelte-e2jw2j { margin: 0.25rem 0 0.5rem; line-height: 1.2; }\n  .meta.svelte-e2jw2j { display: flex; flex-wrap: wrap; gap: 0.5rem 1rem; color: var(--muted); font-size: 0.85rem; margin: 0; }\n  .status.svelte-e2jw2j { border: 1px solid var(--line); border-radius: 99px; padding: 0 0.6rem; }\n  .stale.svelte-e2jw2j { color: var(--warn); font-weight: 600; }\n  .banner.svelte-e2jw2j { background: var(--warn-bg); color: var(--warn); padding: 0.6rem 1rem; border-radius: 6px; }\n  footer.svelte-e2jw2j { margin-top: 3rem; color: var(--muted); font-size: 0.8rem; border-top: 1px solid var(--line); padding-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuYm9vay5zdmVsdGUiLCJzb3VyY2VzIjpbInJ1bmJvb2suc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB0eXBlIHsgU25pcHBldCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGRheXNTaW5jZSwgaXNvRGF5LCBTVEFMRV9BRlRFUl9EQVlTLCB0eXBlIERheSB9IGZyb20gJyNsaWIva2Ivc3RhbGVuZXNzJztcblxuICAvLyBFdmVyeSBrYiBwYWdlOiBmcm9udG1hdHRlciBpbiwgdGhlIHNhbWUgZnJhbWUgb3V0LlxuICBsZXQge1xuICAgIHRpdGxlLFxuICAgIG93bmVyLFxuICAgIHN0YXR1cyxcbiAgICByZXZpZXdlZCxcbiAgICBjaGlsZHJlbixcbiAgfTogeyB0aXRsZTogc3RyaW5nOyBvd25lcjogc3RyaW5nOyBzdGF0dXM6IHN0cmluZzsgcmV2aWV3ZWQ6IERheTsgY2hpbGRyZW46IFNuaXBwZXQgfSA9ICRwcm9wcygpO1xuXG4gIGNvbnN0IGFnZSA9ICRkZXJpdmVkKGRheXNTaW5jZShyZXZpZXdlZCkpO1xuICBjb25zdCBzdGFsZSA9ICRkZXJpdmVkKGFnZSA+IFNUQUxFX0FGVEVSX0RBWVMpO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD48dGl0bGU+e3RpdGxlfSDCtyBzdXBwb3J0IGtiPC90aXRsZT48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwia2JcIj5cbiAgPGhlYWRlcj5cbiAgICA8YSBjbGFzcz1cImNydW1iXCIgaHJlZj1cIi9rYlwiPnN1cHBvcnQgZGVzayDCtyBrYjwvYT5cbiAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgPHAgY2xhc3M9XCJtZXRhXCI+XG4gICAgICA8c3Bhbj5vd25lciA8Yj57b3duZXJ9PC9iPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzIHtzdGF0dXN9XCI+e3N0YXR1c308L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzczpzdGFsZT5yZXZpZXdlZCB7aXNvRGF5KHJldmlld2VkKX0gwrcge2FnZX0gZGF5cyBhZ297c3RhbGUgPyAnIMK3IHN0YWxlJyA6ICcnfTwvc3Bhbj5cbiAgICA8L3A+XG4gIDwvaGVhZGVyPlxuICB7I2lmIHN0YWxlfVxuICAgIDxwIGNsYXNzPVwiYmFubmVyXCI+Tm9ib2R5IGhhcyByZS1yZWFkIHRoaXMgcGFnZSBpbiB7YWdlfSBkYXlzLiBDaGVjayBpdCBhZ2FpbnN0IHRoZSBsaXZlIHZpZXdzIGJlZm9yZSB5b3UgcmVseSBvbiBpdC48L3A+XG4gIHsvaWZ9XG4gIDxtYWluPntAcmVuZGVyIGNoaWxkcmVuKCl9PC9tYWluPlxuICA8Zm9vdGVyPlBhZ2VzIGFyZSB3cml0dGVuIGJ5IHBlb3BsZS4gVGFibGVzIGFuZCBjaGFydHMgYXJlIGJ1aWx0IGZyb20gZGF0YSBhdCByZW5kZXIgdGltZS48L2Zvb3Rlcj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIDpnbG9iYWwoOnJvb3QpIHtcbiAgICAtLWJnOiAjZmJmYWY3OyAtLWZnOiAjMWQxZDFiOyAtLW11dGVkOiAjNmI2YTY2OyAtLWxpbmU6ICNlM2UwZDg7XG4gICAgLS1hY2NlbnQ6ICMyZjZmNWU7IC0td2FybjogI2I0NTAxZjsgLS13YXJuLWJnOiAjZmJlZWU2OyAtLW5vdGUtYmc6ICNlZWY1ZjI7XG4gICAgLS1tb25vOiB1aS1tb25vc3BhY2UsICdDYXNjYWRpYSBDb2RlJywgTWVubG8sIG1vbm9zcGFjZTtcbiAgfVxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgOmdsb2JhbCg6cm9vdCkge1xuICAgICAgLS1iZzogIzE3MTcxNjsgLS1mZzogI2VjZWJlNjsgLS1tdXRlZDogIzljOWE5MzsgLS1saW5lOiAjMzQzMzJmO1xuICAgICAgLS1hY2NlbnQ6ICM2ZmJmYTY7IC0td2FybjogI2YwOTA1ZDsgLS13YXJuLWJnOiAjM2EyNDE4OyAtLW5vdGUtYmc6ICMxZDJjMjc7XG4gICAgfVxuICB9XG4gIDpnbG9iYWwoYm9keSkgeyBtYXJnaW46IDA7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgY29sb3I6IHZhcigtLWZnKTsgZm9udDogMTZweC8xLjYgc3lzdGVtLXVpLCBzYW5zLXNlcmlmOyB9XG4gIDpnbG9iYWwoLmtiIHRhYmxlKSB7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IHdpZHRoOiAxMDAlOyBtYXJnaW46IDFyZW0gMDsgZm9udC1zaXplOiAwLjkycmVtOyB9XG4gIDpnbG9iYWwoLmtiIHRoKSwgOmdsb2JhbCgua2IgdGQpIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmUpOyBwYWRkaW5nOiAwLjM1cmVtIDAuNXJlbTsgdGV4dC1hbGlnbjogbGVmdDsgfVxuICA6Z2xvYmFsKC5rYiBjb2RlKSB7IGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTsgZm9udC1zaXplOiAwLjg4ZW07IH1cbiAgOmdsb2JhbCgua2IgYSkgeyBjb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuICAua2IgeyBtYXgtd2lkdGg6IDc2MHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMnJlbSAxNnB4IDRyZW07IH1cbiAgLmNydW1iIHsgZm9udDogMC44cmVtIHZhcigtLW1vbm8pOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cbiAgaDEgeyBtYXJnaW46IDAuMjVyZW0gMCAwLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjI7IH1cbiAgLm1ldGEgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMC41cmVtIDFyZW07IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTogMC44NXJlbTsgbWFyZ2luOiAwOyB9XG4gIC5zdGF0dXMgeyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTsgYm9yZGVyLXJhZGl1czogOTlweDsgcGFkZGluZzogMCAwLjZyZW07IH1cbiAgLnN0YWxlIHsgY29sb3I6IHZhcigtLXdhcm4pOyBmb250LXdlaWdodDogNjAwOyB9XG4gIC5iYW5uZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuLWJnKTsgY29sb3I6IHZhcigtLXdhcm4pOyBwYWRkaW5nOiAwLjZyZW0gMXJlbTsgYm9yZGVyLXJhZGl1czogNnB4OyB9XG4gIGZvb3RlciB7IG1hcmdpbi10b3A6IDNyZW07IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTogMC44cmVtOyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGluZSk7IHBhZGRpbmctdG9wOiAxcmVtOyB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0= */"
};
function Ua(e, t) {
	Ri(new.target), M(t, !0, Ua), $i(e, Ha);
	let n = k(/* @__PURE__ */ Gt(() => za(t.reviewed)), "age"), r = k(/* @__PURE__ */ Gt(() => J(n) > 180), "stale");
	var i = { ...zi() }, a = Va();
	Qi("e2jw2j", (e) => {
		yr(() => {
			Gn.title = `${t.title ?? ""} · support kb`;
		});
	});
	var o = R(a), s = B(R(o), 2), c = z(s, !0), l = B(s, 2), u = R(l), d = z(B(R(u)), !0);
	O(u);
	var f = B(u, 2), p = z(f, !0), m = B(f, 2);
	let h;
	var g = z(m);
	O(l), O(o);
	var _ = B(o, 2), v = (e) => {
		var t = Ba(), r = z(t);
		V(() => Z(r, `Nobody has re-read this page in ${J(n) ?? ""} days. Check it against the live views before you rely on it.`)), X(e, t);
	};
	j(() => Bi(_, (e) => {
		J(r) && e(v);
	}), "if", Ua, 30, 2);
	var y = B(_, 2), b = R(y);
	return j(() => Mi(b, () => t.children), "render", Ua, 33, 8), O(y), Be(2), O(a), V((e) => {
		Z(c, t.title), Z(d, t.owner), aa(f, 1, `status ${t.status ?? ""}`, "svelte-e2jw2j"), Z(p, t.status), h = aa(m, 1, "svelte-e2jw2j", null, h, { stale: J(r) }), Z(g, `reviewed ${e ?? ""} · ${J(n) ?? ""} days ago${J(r) ? " · stale" : ""}`);
	}, [() => Ra(t.reviewed)]), X(e, a), N(i);
}
// src/routes/kb/decisions/0001-dedupe-by-subject/+page.svx
var Wa = /* @__PURE__ */ t({
	default: () => Qa,
	metadata: () => Ga
});
Qa[o] = "src/routes/kb/decisions/0001-dedupe-by-subject/+page.svx";
var Ga = {
	layout: "runbook",
	title: "0001 · Duplicates share a subject line",
	owner: "rune",
	status: "accepted",
	reviewed: "2024-06-11T00:00:00.000Z"
}, { layout: Ka, title: qa, owner: Ja, status: Ya, reviewed: Xa } = Ga, Za = Q(/* @__PURE__ */ Y("<p><strong>Date:</strong> 11 June 2024 · <strong>Deciders:</strong> Rune (product), support desk</p> <h2>Context</h2> <p>Reports arrive faster than the desk can read them. During incidents the same problem comes in\nhundreds of times, and engineering asks for one ticket per issue.</p> <h2>Decision</h2> <p>Two reports are the same issue when their subject lines match after lowercasing and stripping\npunctuation. The desk merges on subject alone; nobody has to read the body.</p> <h2>Consequences</h2> <ul><li>Fast: one person can triage an incident morning.</li> <li>Reports with different subjects about the same bug end up in separate tickets. Accepted;\nengineering merges them later.</li></ul>", 1), Qa[o], [
	[
		11,
		0,
		[[11, 3], [11, 41]]
	],
	[12, 0],
	[13, 0],
	[15, 0],
	[16, 0],
	[18, 0],
	[
		19,
		0,
		[[20, 0], [21, 0]]
	]
]);
function Qa(e, t) {
	Ri(new.target);
	let n = Na(t, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	M(t, !1, Qa);
	var r = { ...zi() };
	return j(() => Ua(e, Fa(() => n, () => Ga, {
		children: Ni(Qa, (e, t) => {
			var n = Za();
			Be(12), X(e, n);
		}),
		$$slots: { default: !0 }
	})), "component", Qa, 10, 0, { componentTag: "Layout_MDSVEX_DEFAULT" }), N(r);
}
// src/lib/data/reports-4471.json
var $a = /*#__PURE__*/ JSON.parse("[{\"id\":\"R-41200\",\"receivedAt\":\"2026-04-01T09:12:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Our 7 April reminder went out on 4 July. Is this a joke. It is not April Fools where we are.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:03:00+02:00\"},{\"id\":\"R-41201\",\"receivedAt\":\"2026-04-01T09:34:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Sorry. 4 July went out on 7 April. I have been up since five.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:05:00+02:00\"},{\"id\":\"R-41202\",\"receivedAt\":\"2026-04-02T10:41:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Invite says Tuesday 12 May. Calendar says Monday 11 May. My client turned up on the Monday. We had coffee.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:06:00+02:00\"},{\"id\":\"R-41203\",\"receivedAt\":\"2026-04-03T12:14:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Booked for 2 December. The invite says 12 February.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:09:00+02:00\"},{\"id\":\"R-41204\",\"receivedAt\":\"2026-04-04T21:55:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Invite says Thursday 10 December. We agreed Monday 12 October. Which one do I trust?\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:10:00+02:00\"},{\"id\":\"R-41205\",\"receivedAt\":\"2026-04-05T12:29:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Booking shows a different day\",\"body\":\"Customer booked 3 October and got an invite for 10 March. Please look at this.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:13:00+02:00\"},{\"id\":\"R-41206\",\"receivedAt\":\"2026-04-05T16:54:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Second time this month: 4 March turned into 3 April.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:15:00+02:00\"},{\"id\":\"R-41208\",\"receivedAt\":\"2026-04-06T14:52:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Booked for 2 March. The invite says 3 February.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:18:00+02:00\"},{\"id\":\"R-41209\",\"receivedAt\":\"2026-04-06T15:18:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Every booking in June is one day off. Only June. Why only June.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:19:00+02:00\"},{\"id\":\"R-41210\",\"receivedAt\":\"2026-04-07T08:53:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Second time this month: 12 April turned into 4 December.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:20:00+02:00\"},{\"id\":\"R-41211\",\"receivedAt\":\"2026-04-07T09:28:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 5 March arrived for 3 May.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:23:00+02:00\"},{\"id\":\"R-41212\",\"receivedAt\":\"2026-04-07T10:22:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Every booking we make shows the wrong day. 8 December is now 12 August.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:25:00+02:00\"},{\"id\":\"R-41213\",\"receivedAt\":\"2026-04-07T17:14:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Monday 1 June showed as Tuesday 6 January. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:27:00+02:00\"},{\"id\":\"R-41214\",\"receivedAt\":\"2026-04-08T18:22:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Invite says Thursday 9 July. We agreed Monday 7 September. Which one do I trust?\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:28:00+02:00\"},{\"id\":\"R-41215\",\"receivedAt\":\"2026-04-08T19:23:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"My client came on 3 February instead of 2 March. We sorted it out.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:30:00+02:00\"},{\"id\":\"R-41216\",\"receivedAt\":\"2026-04-11T12:34:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"We had two people show up on 5 December. They were booked for 12 May.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:33:00+02:00\"},{\"id\":\"R-41217\",\"receivedAt\":\"2026-04-12T15:23:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 9 May arrived for 5 September.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:34:00+02:00\"},{\"id\":\"R-41218\",\"receivedAt\":\"2026-04-12T18:55:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Customer booked 6 November and got an invite for 11 June. Please look at this.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:35:00+02:00\"},{\"id\":\"R-41219\",\"receivedAt\":\"2026-04-13T13:46:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Thursday 12 March showed as Thursday 3 December. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:36:00+02:00\"},{\"id\":\"R-41220\",\"receivedAt\":\"2026-04-13T18:08:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"We had two people show up on 5 June. They were booked for 6 May.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:38:00+02:00\"},{\"id\":\"R-41221\",\"receivedAt\":\"2026-04-13T21:27:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Booked for 2 July. The invite says 7 February.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:41:00+02:00\"},{\"id\":\"R-41222\",\"receivedAt\":\"2026-04-14T17:49:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Customer booked 1 October and got an invite for 10 January. Please look at this.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:43:00+02:00\"},{\"id\":\"R-41223\",\"receivedAt\":\"2026-04-14T19:08:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Tuesday 8 December showed as Wednesday 12 August. I moved it myself.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:44:00+02:00\"},{\"id\":\"R-41224\",\"receivedAt\":\"2026-04-17T13:50:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Every booking we make shows the wrong day. 10 September is now 9 October.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:47:00+02:00\"},{\"id\":\"R-41225\",\"receivedAt\":\"2026-04-17T14:02:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"The reminder for 3 May arrived for 5 March.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:48:00+02:00\"},{\"id\":\"R-41227\",\"receivedAt\":\"2026-04-17T14:23:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"We had two people show up on 2 June. They were booked for 6 February.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:50:00+02:00\"},{\"id\":\"R-41228\",\"receivedAt\":\"2026-04-17T17:27:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Customer booked 2 July and got an invite for 7 February. Please look at this.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:51:00+02:00\"},{\"id\":\"R-41229\",\"receivedAt\":\"2026-04-17T20:59:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Every booking we make shows the wrong day. 5 March is now 3 May.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:54:00+02:00\"},{\"id\":\"R-41230\",\"receivedAt\":\"2026-04-17T22:44:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"My client came on 1 June instead of 6 January. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:56:00+02:00\"},{\"id\":\"R-41231\",\"receivedAt\":\"2026-04-18T11:22:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Second time this month: 8 January turned into 1 August.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T09:58:00+02:00\"},{\"id\":\"R-41232\",\"receivedAt\":\"2026-04-19T13:15:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Second time this month: 6 January turned into 1 June.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:00:00+02:00\"},{\"id\":\"R-41233\",\"receivedAt\":\"2026-04-19T21:27:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"We had two people show up on 10 November. They were booked for 11 October.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:01:00+02:00\"},{\"id\":\"R-41234\",\"receivedAt\":\"2026-04-20T07:46:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Every booking we make shows the wrong day. 1 March is now 3 January.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:03:00+02:00\"},{\"id\":\"R-41235\",\"receivedAt\":\"2026-04-20T10:50:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Second time this month: 2 May turned into 5 February.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:06:00+02:00\"},{\"id\":\"R-41236\",\"receivedAt\":\"2026-04-20T11:52:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"The invite arrived before I made the booking. I would like to know how.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:08:00+02:00\"},{\"id\":\"R-41237\",\"receivedAt\":\"2026-04-20T21:02:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"The reminder for 12 January arrived for 1 December.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:08:00+02:00\"},{\"id\":\"R-41238\",\"receivedAt\":\"2026-04-20T22:16:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Every booking we make shows the wrong day. 8 March is now 3 August.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:11:00+02:00\"},{\"id\":\"R-41239\",\"receivedAt\":\"2026-04-21T10:21:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"The reminder for 8 November arrived for 11 August.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:13:00+02:00\"},{\"id\":\"R-41240\",\"receivedAt\":\"2026-04-21T12:34:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"Second time this month: 7 February turned into 2 July.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:14:00+02:00\"},{\"id\":\"R-41241\",\"receivedAt\":\"2026-04-21T19:21:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Invite came on the wrong day\",\"body\":\"We had two people show up on 8 June. They were booked for 6 August.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:15:00+02:00\"},{\"id\":\"R-41242\",\"receivedAt\":\"2026-04-22T14:50:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"The reminder for 5 October arrived for 10 May.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:16:00+02:00\"},{\"id\":\"R-41243\",\"receivedAt\":\"2026-04-22T21:56:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"My client came on 5 October instead of 10 May. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:18:00+02:00\"},{\"id\":\"R-41244\",\"receivedAt\":\"2026-04-23T13:35:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Second time this month: 1 December turned into 12 January.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:19:00+02:00\"},{\"id\":\"R-41245\",\"receivedAt\":\"2026-04-23T18:38:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"My client came on 10 November instead of 11 October. We sorted it out.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:21:00+02:00\"},{\"id\":\"R-41246\",\"receivedAt\":\"2026-04-24T10:27:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"form\",\"subject\":\"Dates mixed up\",\"body\":\"We had two people show up on 12 June. They were booked for 6 December.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:22:00+02:00\"},{\"id\":\"R-41247\",\"receivedAt\":\"2026-04-24T12:30:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"Customer booked 11 March and got an invite for 3 November. Please look at this.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:25:00+02:00\"},{\"id\":\"R-41248\",\"receivedAt\":\"2026-04-24T15:13:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"form\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Invite says Wednesday 5 August. We agreed Friday 8 May. Which one do I trust?\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:27:00+02:00\"},{\"id\":\"R-41249\",\"receivedAt\":\"2026-04-24T19:27:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"My client came on 10 November instead of 11 October. We sorted it out.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:28:00+02:00\"},{\"id\":\"R-41250\",\"receivedAt\":\"2026-04-24T19:35:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Booked for 10 December. The invite says 12 October.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:29:00+02:00\"},{\"id\":\"R-41251\",\"receivedAt\":\"2026-04-25T20:48:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Booking on the wrong date\",\"body\":\"Wednesday 7 January showed as Wednesday 1 July. I moved it myself.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:30:00+02:00\"},{\"id\":\"R-41251\",\"receivedAt\":\"2026-04-25T20:48:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Booking on the wrong date\",\"body\":\"Wednesday 7 January showed as Wednesday 1 July. I moved it myself.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:30:00+02:00\"},{\"id\":\"R-41252\",\"receivedAt\":\"2026-04-26T15:56:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"The reminder for 3 January arrived for 1 March.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:31:00+02:00\"},{\"id\":\"R-41253\",\"receivedAt\":\"2026-04-27T13:56:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"My client came on 4 February instead of 2 April. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:33:00+02:00\"},{\"id\":\"R-41254\",\"receivedAt\":\"2026-04-28T20:08:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The reminder for 8 April arrived for 4 August.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:35:00+02:00\"},{\"id\":\"R-41255\",\"receivedAt\":\"2026-04-29T13:22:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Customer booked 6 December and got an invite for 12 June. Please look at this.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:38:00+02:00\"},{\"id\":\"R-41256\",\"receivedAt\":\"2026-04-29T16:38:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"My client came on 6 July instead of 7 June. We sorted it out.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:40:00+02:00\"},{\"id\":\"R-41257\",\"receivedAt\":\"2026-04-30T09:53:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Every booking we make shows the wrong day. 12 August is now 8 December.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:42:00+02:00\"},{\"id\":\"R-41258\",\"receivedAt\":\"2026-05-01T11:08:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"We had two people show up on 9 December. They were booked for 12 September.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:44:00+02:00\"},{\"id\":\"R-41259\",\"receivedAt\":\"2026-05-01T12:24:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Customer booked 11 April and got an invite for 4 November. Please look at this.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:45:00+02:00\"},{\"id\":\"R-41260\",\"receivedAt\":\"2026-05-01T21:18:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Second time this month: 1 November turned into 11 January.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:47:00+02:00\"},{\"id\":\"R-41261\",\"receivedAt\":\"2026-05-02T10:47:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Booked for 2 September. The invite says 9 February.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:50:00+02:00\"},{\"id\":\"R-41262\",\"receivedAt\":\"2026-05-02T13:17:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"We had two people show up on 3 February. They were booked for 2 March.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:52:00+02:00\"},{\"id\":\"R-41263\",\"receivedAt\":\"2026-05-02T15:49:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"The reminder for 3 February arrived for 2 March.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:53:00+02:00\"},{\"id\":\"R-41264\",\"receivedAt\":\"2026-05-02T18:18:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Invite says Sunday 5 April. We agreed Monday 4 May. Which one do I trust?\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:56:00+02:00\"},{\"id\":\"R-41265\",\"receivedAt\":\"2026-05-03T08:12:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"form\",\"subject\":\"Booking shows a different day\",\"body\":\"The reminder for 7 August arrived for 8 July.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T10:59:00+02:00\"},{\"id\":\"R-41266\",\"receivedAt\":\"2026-05-03T11:40:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Every booking we make shows the wrong day. 12 November is now 11 December.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:01:00+02:00\"},{\"id\":\"R-41267\",\"receivedAt\":\"2026-05-03T14:36:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"The calendar invite for 12 November landed on 11 December. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:02:00+02:00\"},{\"id\":\"R-41268\",\"receivedAt\":\"2026-05-03T16:23:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"The reminder for 5 February arrived for 2 May.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:03:00+02:00\"},{\"id\":\"R-41269\",\"receivedAt\":\"2026-05-04T14:49:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Second time this month: 5 August turned into 8 May.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:05:00+02:00\"},{\"id\":\"R-41270\",\"receivedAt\":\"2026-05-04T16:03:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Our 5 June invoice meeting is shown as 6 May. We paid someone on the wrong day because of this. Not your problem. Noting it.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:08:00+02:00\"},{\"id\":\"R-41271\",\"receivedAt\":\"2026-05-04T16:33:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Second time this month: 12 January turned into 1 December.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:10:00+02:00\"},{\"id\":\"R-41272\",\"receivedAt\":\"2026-05-04T21:05:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"We had two people show up on 12 January. They were booked for 1 December.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:11:00+02:00\"},{\"id\":\"R-41273\",\"receivedAt\":\"2026-05-07T10:16:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Dates mixed up\",\"body\":\"Saturday 3 January showed as Sunday 1 March. I moved it myself.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:14:00+02:00\"},{\"id\":\"R-41274\",\"receivedAt\":\"2026-05-07T15:27:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Friday 7 August showed as Wednesday 8 July. I moved it myself.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:16:00+02:00\"},{\"id\":\"R-41275\",\"receivedAt\":\"2026-05-07T18:27:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"My client came on 11 July instead of 7 November. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:18:00+02:00\"},{\"id\":\"R-41276\",\"receivedAt\":\"2026-05-08T12:58:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Customer booked 11 June and got an invite for 6 November. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:20:00+02:00\"},{\"id\":\"R-41277\",\"receivedAt\":\"2026-05-08T17:43:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 11 January arrived for 1 November.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:23:00+02:00\"},{\"id\":\"R-41278\",\"receivedAt\":\"2026-05-08T18:54:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:25:00+02:00\"},{\"id\":\"R-41279\",\"receivedAt\":\"2026-05-08T19:21:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Second time this month: 6 November turned into 11 June.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:28:00+02:00\"},{\"id\":\"R-41280\",\"receivedAt\":\"2026-05-10T16:29:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Every booking we make shows the wrong day. 11 January is now 1 November.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:31:00+02:00\"},{\"id\":\"R-41281\",\"receivedAt\":\"2026-05-11T09:44:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Booked for 7 June. The invite says 6 July.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:34:00+02:00\"},{\"id\":\"R-41282\",\"receivedAt\":\"2026-05-12T13:50:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Second time this month: 11 April turned into 4 November.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:37:00+02:00\"},{\"id\":\"R-41283\",\"receivedAt\":\"2026-05-12T16:23:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"My client came on 10 December instead of 12 October. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:40:00+02:00\"},{\"id\":\"R-41284\",\"receivedAt\":\"2026-05-14T11:06:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"Every booking we make shows the wrong day. 6 August is now 8 June.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:42:00+02:00\"},{\"id\":\"R-41285\",\"receivedAt\":\"2026-05-14T22:27:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"form\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Booked for 1 December. The invite says 12 January.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:43:00+02:00\"},{\"id\":\"R-41286\",\"receivedAt\":\"2026-05-17T09:27:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Invite says Monday 9 November. We agreed Friday 11 September. Which one do I trust?\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:45:00+02:00\"},{\"id\":\"R-41287\",\"receivedAt\":\"2026-05-17T17:10:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Second time this month: 8 February turned into 2 August.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:47:00+02:00\"},{\"id\":\"R-41288\",\"receivedAt\":\"2026-05-17T21:53:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Customer booked 7 October and got an invite for 10 July. Please look at this.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:49:00+02:00\"},{\"id\":\"R-41289\",\"receivedAt\":\"2026-05-18T15:42:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Every booking we make shows the wrong day. 7 August is now 8 July.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:50:00+02:00\"},{\"id\":\"R-41290\",\"receivedAt\":\"2026-05-19T13:44:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Is there a setting for \\\"my country writes the day first\\\". I have looked. I would pay for it.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:51:00+02:00\"},{\"id\":\"R-41291\",\"receivedAt\":\"2026-05-20T09:56:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"The calendar invite for 12 February landed on 2 December. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:53:00+02:00\"},{\"id\":\"R-41292\",\"receivedAt\":\"2026-05-20T14:29:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"Tuesday 10 November showed as Sunday 11 October. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:54:00+02:00\"},{\"id\":\"R-41293\",\"receivedAt\":\"2026-05-20T21:10:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Customer booked 1 September and got an invite for 9 January. Please look at this.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:55:00+02:00\"},{\"id\":\"R-41294\",\"receivedAt\":\"2026-05-21T21:10:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Wrong date again\",\"body\":\"Thursday 5 November showed as Monday 11 May. I moved it myself.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T11:58:00+02:00\"},{\"id\":\"R-41295\",\"receivedAt\":\"2026-05-22T20:49:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Invite says Monday 2 March. We agreed Tuesday 3 February. Which one do I trust?\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:01:00+02:00\"},{\"id\":\"R-41296\",\"receivedAt\":\"2026-05-23T18:39:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Invite says Monday 6 July. We agreed Sunday 7 June. Which one do I trust?\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:04:00+02:00\"},{\"id\":\"R-41297\",\"receivedAt\":\"2026-05-23T21:58:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Customer booked 7 June and got an invite for 6 July. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:06:00+02:00\"},{\"id\":\"R-41298\",\"receivedAt\":\"2026-05-24T14:52:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 12 January arrived for 1 December.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:08:00+02:00\"},{\"id\":\"R-41299\",\"receivedAt\":\"2026-05-24T14:39:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"We had two people show up on 9 October. They were booked for 10 September.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:08:00+02:00\"},{\"id\":\"R-41300\",\"receivedAt\":\"2026-05-24T22:57:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Booked for 12 October. The invite says 10 December.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:10:00+02:00\"},{\"id\":\"R-41301\",\"receivedAt\":\"2026-05-26T09:53:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Booked for 2 July. The invite says 7 February.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:12:00+02:00\"},{\"id\":\"R-41300\",\"receivedAt\":\"2026-05-24T22:57:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Booked for 12 October. The invite says 10 December.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:10:00+02:00\"},{\"id\":\"R-41301\",\"receivedAt\":\"2026-05-26T09:53:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Booked for 2 July. The invite says 7 February.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:12:00+02:00\"},{\"id\":\"R-41302\",\"receivedAt\":\"2026-05-26T18:23:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"The reminder for 5 November arrived for 11 May.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:14:00+02:00\"},{\"id\":\"R-41303\",\"receivedAt\":\"2026-05-27T08:55:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Booked for 8 November. The invite says 11 August.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:16:00+02:00\"},{\"id\":\"R-41304\",\"receivedAt\":\"2026-05-27T09:16:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"form\",\"subject\":\"Appointment moved by itself\",\"body\":\"The calendar invite for 8 January landed on 1 August. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:18:00+02:00\"},{\"id\":\"R-41305\",\"receivedAt\":\"2026-05-27T13:04:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Booked for 9 August. The invite says 8 September.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:19:00+02:00\"},{\"id\":\"R-41306\",\"receivedAt\":\"2026-05-27T14:19:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Thursday 10 December showed as Monday 12 October. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:22:00+02:00\"},{\"id\":\"R-41308\",\"receivedAt\":\"2026-05-28T09:27:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Invite came on the wrong day\",\"body\":\"We had two people show up on 3 May. They were booked for 5 March.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:25:00+02:00\"},{\"id\":\"R-41309\",\"receivedAt\":\"2026-05-28T17:27:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Thursday 8 January showed as Saturday 1 August. I moved it myself.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:28:00+02:00\"},{\"id\":\"R-41310\",\"receivedAt\":\"2026-05-29T21:44:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"The calendar invite for 12 July landed on 7 December. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:29:00+02:00\"},{\"id\":\"R-41311\",\"receivedAt\":\"2026-05-30T10:55:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Booking shows a different day\",\"body\":\"Booked for 8 May. The invite says 5 August.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:30:00+02:00\"},{\"id\":\"R-41312\",\"receivedAt\":\"2026-05-30T20:00:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"We had two people show up on 4 June. They were booked for 6 April.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:33:00+02:00\"},{\"id\":\"R-41313\",\"receivedAt\":\"2026-05-31T09:05:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Customer booked 11 May and got an invite for 5 November. Please look at this.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:36:00+02:00\"},{\"id\":\"R-41314\",\"receivedAt\":\"2026-05-31T13:28:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Booked for 8 April. The invite says 4 August.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:37:00+02:00\"},{\"id\":\"R-41315\",\"receivedAt\":\"2026-05-31T19:21:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"The calendar invite for 1 November landed on 11 January. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:38:00+02:00\"},{\"id\":\"R-41316\",\"receivedAt\":\"2026-06-01T18:59:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Friday 2 October showed as Tuesday 10 February. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:40:00+02:00\"},{\"id\":\"R-41317\",\"receivedAt\":\"2026-06-01T20:05:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Second time this month: 1 September turned into 9 January.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:42:00+02:00\"},{\"id\":\"R-41318\",\"receivedAt\":\"2026-06-02T22:28:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"Every booking we make shows the wrong day. 12 November is now 11 December.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:44:00+02:00\"},{\"id\":\"R-41319\",\"receivedAt\":\"2026-06-03T12:43:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Invite says Wednesday 4 November. We agreed Saturday 11 April. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:45:00+02:00\"},{\"id\":\"R-41320\",\"receivedAt\":\"2026-06-04T15:35:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"We had two people show up on 5 November. They were booked for 11 May.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:47:00+02:00\"},{\"id\":\"R-41321\",\"receivedAt\":\"2026-06-04T16:56:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"form\",\"subject\":\"Dates mixed up\",\"body\":\"Customer booked 12 May and got an invite for 5 December. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:49:00+02:00\"},{\"id\":\"R-41322\",\"receivedAt\":\"2026-06-05T09:57:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"My client came on 10 December instead of 12 October. We sorted it out.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:52:00+02:00\"},{\"id\":\"R-41323\",\"receivedAt\":\"2026-06-05T12:35:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"form\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"The reminder for 12 August arrived for 8 December.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:53:00+02:00\"},{\"id\":\"R-41324\",\"receivedAt\":\"2026-06-05T16:33:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Customer booked 4 December and got an invite for 12 April. Please look at this.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:56:00+02:00\"},{\"id\":\"R-41325\",\"receivedAt\":\"2026-06-05T22:13:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"The reminder for 12 June arrived for 6 December.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T12:59:00+02:00\"},{\"id\":\"R-41327\",\"receivedAt\":\"2026-06-06T08:52:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"My client came on 9 January instead of 1 September. We sorted it out.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:02:00+02:00\"},{\"id\":\"R-41328\",\"receivedAt\":\"2026-06-06T20:06:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"My client came on 2 May instead of 5 February. We sorted it out.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:05:00+02:00\"},{\"id\":\"R-41329\",\"receivedAt\":\"2026-06-07T11:27:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"The calendar invite for 12 November landed on 11 December. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:06:00+02:00\"},{\"id\":\"R-41330\",\"receivedAt\":\"2026-06-07T16:11:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"Customer booked 7 April and got an invite for 4 July. Please look at this.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:08:00+02:00\"},{\"id\":\"R-41331\",\"receivedAt\":\"2026-06-07T17:36:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Customer booked 2 April and got an invite for 4 February. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:09:00+02:00\"},{\"id\":\"R-41332\",\"receivedAt\":\"2026-06-07T20:06:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"We had two people show up on 1 September. They were booked for 9 January.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:11:00+02:00\"},{\"id\":\"R-41333\",\"receivedAt\":\"2026-06-07T22:08:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Saturday 12 September showed as Wednesday 9 December. I moved it myself.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:14:00+02:00\"},{\"id\":\"R-41334\",\"receivedAt\":\"2026-06-08T10:59:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"My client came on 2 May instead of 5 February. We sorted it out.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:15:00+02:00\"},{\"id\":\"R-41335\",\"receivedAt\":\"2026-06-08T20:22:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"The calendar invite for 9 October landed on 10 September. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:16:00+02:00\"},{\"id\":\"R-41336\",\"receivedAt\":\"2026-06-08T20:25:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"Tuesday 12 May showed as Saturday 5 December. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:19:00+02:00\"},{\"id\":\"R-41337\",\"receivedAt\":\"2026-06-08T21:27:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"We had two people show up on 8 June. They were booked for 6 August.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:21:00+02:00\"},{\"id\":\"R-41338\",\"receivedAt\":\"2026-06-09T08:51:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Saturday 7 February showed as Thursday 2 July. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:22:00+02:00\"},{\"id\":\"R-41339\",\"receivedAt\":\"2026-06-09T22:38:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"form\",\"subject\":\"Appointment moved by itself\",\"body\":\"The calendar invite for 5 March landed on 3 May. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:25:00+02:00\"},{\"id\":\"R-41340\",\"receivedAt\":\"2026-06-10T18:22:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Invite says Sunday 9 August. We agreed Tuesday 8 September. Which one do I trust?\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:27:00+02:00\"},{\"id\":\"R-41341\",\"receivedAt\":\"2026-06-10T22:43:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Booking shows a different day\",\"body\":\"The calendar invite for 9 June landed on 6 September. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:29:00+02:00\"},{\"id\":\"R-41342\",\"receivedAt\":\"2026-06-11T08:32:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Every booking we make shows the wrong day. 4 March is now 3 April.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:31:00+02:00\"},{\"id\":\"R-41343\",\"receivedAt\":\"2026-06-11T15:23:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"The calendar invite for 6 May landed on 5 June. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:33:00+02:00\"},{\"id\":\"R-41344\",\"receivedAt\":\"2026-06-12T09:58:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Client in Lisbon got Tuesday. Client in Toronto got Monday. Same meeting. We held it twice.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:35:00+02:00\"},{\"id\":\"R-41345\",\"receivedAt\":\"2026-06-12T22:52:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Customer booked 9 February and got an invite for 2 September. Please look at this.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:38:00+02:00\"},{\"id\":\"R-41346\",\"receivedAt\":\"2026-06-13T13:25:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Booked for 11 January. The invite says 1 November.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:39:00+02:00\"},{\"id\":\"R-41347\",\"receivedAt\":\"2026-06-13T17:11:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Second time this month: 1 July turned into 7 January.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:41:00+02:00\"},{\"id\":\"R-41348\",\"receivedAt\":\"2026-06-14T12:50:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The reminder for 10 July arrived for 7 October.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:42:00+02:00\"},{\"id\":\"R-41349\",\"receivedAt\":\"2026-06-14T14:49:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"Thursday 10 September showed as Friday 9 October. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:43:00+02:00\"},{\"id\":\"R-41350\",\"receivedAt\":\"2026-06-15T16:29:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Second time this month: 2 June turned into 6 February.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:45:00+02:00\"},{\"id\":\"R-41351\",\"receivedAt\":\"2026-06-16T08:43:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Every booking we make shows the wrong day. 11 February is now 2 November.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:47:00+02:00\"},{\"id\":\"R-41352\",\"receivedAt\":\"2026-06-16T10:44:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Second time this month: 5 March turned into 3 May.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:48:00+02:00\"},{\"id\":\"R-41353\",\"receivedAt\":\"2026-06-16T10:46:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Every booking we make shows the wrong day. 3 August is now 8 March.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:50:00+02:00\"},{\"id\":\"R-41352\",\"receivedAt\":\"2026-06-16T10:44:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Second time this month: 5 March turned into 3 May.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:48:00+02:00\"},{\"id\":\"R-41353\",\"receivedAt\":\"2026-06-16T10:46:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Every booking we make shows the wrong day. 3 August is now 8 March.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:50:00+02:00\"},{\"id\":\"R-41354\",\"receivedAt\":\"2026-06-16T15:49:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"The calendar invite for 8 June landed on 6 August. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:53:00+02:00\"},{\"id\":\"R-41355\",\"receivedAt\":\"2026-06-16T20:42:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Customer booked 6 November and got an invite for 11 June. Please look at this.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:56:00+02:00\"},{\"id\":\"R-41356\",\"receivedAt\":\"2026-06-17T12:32:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Wednesday 5 August showed as Friday 8 May. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T13:58:00+02:00\"},{\"id\":\"R-41357\",\"receivedAt\":\"2026-06-17T14:48:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Wednesday 1 July showed as Wednesday 7 January. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:01:00+02:00\"},{\"id\":\"R-41358\",\"receivedAt\":\"2026-06-17T21:40:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"The reminder for 1 July arrived for 7 January.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:04:00+02:00\"},{\"id\":\"R-41359\",\"receivedAt\":\"2026-06-18T08:01:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Invite says Friday 4 September. We agreed Thursday 9 April. Which one do I trust?\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:06:00+02:00\"},{\"id\":\"R-41360\",\"receivedAt\":\"2026-06-18T11:29:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"We had two people show up on 4 October. They were booked for 10 April.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:09:00+02:00\"},{\"id\":\"R-41361\",\"receivedAt\":\"2026-06-18T21:08:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"The calendar invite for 1 August landed on 8 January. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:12:00+02:00\"},{\"id\":\"R-41362\",\"receivedAt\":\"2026-06-19T13:21:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Customer booked 12 February and got an invite for 2 December. Please look at this.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:14:00+02:00\"},{\"id\":\"R-41363\",\"receivedAt\":\"2026-06-19T14:27:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"My client came on 12 January instead of 1 December. We sorted it out.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:15:00+02:00\"},{\"id\":\"R-41364\",\"receivedAt\":\"2026-06-20T14:19:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"We had two people show up on 10 January. They were booked for 1 October.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:16:00+02:00\"},{\"id\":\"R-41365\",\"receivedAt\":\"2026-06-20T21:21:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Invite says Tuesday 4 August. We agreed Wednesday 8 April. Which one do I trust?\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:19:00+02:00\"},{\"id\":\"R-41366\",\"receivedAt\":\"2026-06-21T13:17:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Sunday 11 October showed as Tuesday 10 November. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:22:00+02:00\"},{\"id\":\"R-41367\",\"receivedAt\":\"2026-06-22T12:14:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Wednesday 11 March showed as Tuesday 3 November. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:25:00+02:00\"},{\"id\":\"R-41368\",\"receivedAt\":\"2026-06-24T09:08:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"We had two people show up on 9 April. They were booked for 4 September.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:27:00+02:00\"},{\"id\":\"R-41369\",\"receivedAt\":\"2026-06-25T11:43:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"Booked for 5 November. The invite says 11 May.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:27:00+02:00\"},{\"id\":\"R-41370\",\"receivedAt\":\"2026-06-25T11:59:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Booking shows a different day\",\"body\":\"The calendar invite for 9 December landed on 12 September. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:29:00+02:00\"},{\"id\":\"R-41371\",\"receivedAt\":\"2026-06-25T15:06:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"The calendar invite for 7 June landed on 6 July. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:32:00+02:00\"},{\"id\":\"R-41372\",\"receivedAt\":\"2026-06-25T20:34:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Dates mixed up\",\"body\":\"Invite says Tuesday 8 September. We agreed Sunday 9 August. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:35:00+02:00\"},{\"id\":\"R-41373\",\"receivedAt\":\"2026-06-26T09:18:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Booked for 7 March. The invite says 3 July.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:37:00+02:00\"},{\"id\":\"R-41374\",\"receivedAt\":\"2026-06-26T09:57:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"The reminder for 9 November arrived for 11 September.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:39:00+02:00\"},{\"id\":\"R-41375\",\"receivedAt\":\"2026-06-27T11:13:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The calendar invite for 7 April landed on 4 July. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:41:00+02:00\"},{\"id\":\"R-41376\",\"receivedAt\":\"2026-06-27T19:29:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"The reminder for 12 March arrived for 3 December.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:42:00+02:00\"},{\"id\":\"R-41377\",\"receivedAt\":\"2026-06-28T10:38:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Second time this month: 2 March turned into 3 February.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:43:00+02:00\"},{\"id\":\"R-41378\",\"receivedAt\":\"2026-06-29T08:06:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The reminder for 7 February arrived for 2 July.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:44:00+02:00\"},{\"id\":\"R-41379\",\"receivedAt\":\"2026-06-30T08:21:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"We had two people show up on 12 October. They were booked for 10 December.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:47:00+02:00\"},{\"id\":\"R-41380\",\"receivedAt\":\"2026-06-30T10:27:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"We had two people show up on 7 May. They were booked for 5 July.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:49:00+02:00\"},{\"id\":\"R-41381\",\"receivedAt\":\"2026-06-30T16:46:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"My client came on 10 February instead of 2 October. We sorted it out.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:52:00+02:00\"},{\"id\":\"R-41382\",\"receivedAt\":\"2026-06-30T18:12:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Every booking we make shows the wrong day. 6 August is now 8 June.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:53:00+02:00\"},{\"id\":\"R-41383\",\"receivedAt\":\"2026-07-01T13:45:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Monday 3 August showed as Sunday 8 March. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:55:00+02:00\"},{\"id\":\"R-41384\",\"receivedAt\":\"2026-07-01T15:19:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Calendar invite is wrong\",\"body\":\"The calendar invite for 8 January landed on 1 August. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:56:00+02:00\"},{\"id\":\"R-41385\",\"receivedAt\":\"2026-07-01T20:36:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Second time this month: 5 December turned into 12 May.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T14:57:00+02:00\"},{\"id\":\"R-41386\",\"receivedAt\":\"2026-07-01T21:52:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"form\",\"subject\":\"Dates mixed up\",\"body\":\"Second time this month: 10 August turned into 8 October.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T15:00:00+02:00\"},{\"id\":\"R-41387\",\"receivedAt\":\"2026-07-02T08:17:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Date is wrong\",\"body\":\"Invite says Sunday 4 October. We agreed Friday 10 April. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-02T15:01:00+02:00\"},{\"id\":\"R-41388\",\"receivedAt\":\"2026-07-02T21:41:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Invite says Sunday 4 January. We agreed Wednesday 1 April. Which one do I trust?\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-03T00:32:00+02:00\"},{\"id\":\"R-41389\",\"receivedAt\":\"2026-07-03T19:42:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Wednesday 4 February showed as Thursday 2 April. I moved it myself.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-03T23:58:00+02:00\"},{\"id\":\"R-41390\",\"receivedAt\":\"2026-07-05T08:08:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"We had two people show up on 9 August. They were booked for 8 September.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-05T10:56:00+02:00\"},{\"id\":\"R-41391\",\"receivedAt\":\"2026-07-05T11:06:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 12 October arrived for 10 December.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-05T15:27:00+02:00\"},{\"id\":\"R-41392\",\"receivedAt\":\"2026-07-05T13:19:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"The reminder for 3 February arrived for 2 March.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-05T17:02:00+02:00\"},{\"id\":\"R-41393\",\"receivedAt\":\"2026-07-06T12:22:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 1 July arrived for 7 January.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-06T15:28:00+02:00\"},{\"id\":\"R-41394\",\"receivedAt\":\"2026-07-06T13:12:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"We had two people show up on 1 September. They were booked for 9 January.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-06T18:00:00+02:00\"},{\"id\":\"R-41395\",\"receivedAt\":\"2026-07-07T17:15:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Sunday 5 July showed as Thursday 7 May. I moved it myself.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-07T18:54:00+02:00\"},{\"id\":\"R-41396\",\"receivedAt\":\"2026-07-07T19:19:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Dates mixed up\",\"body\":\"My client came on 10 April instead of 4 October. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-07T23:59:00+02:00\"},{\"id\":\"R-41397\",\"receivedAt\":\"2026-07-07T19:05:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"form\",\"subject\":\"Calendar invite is wrong\",\"body\":\"My client came on 4 December instead of 12 April. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-08T00:24:00+02:00\"},{\"id\":\"R-41398\",\"receivedAt\":\"2026-07-07T22:47:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"The calendar invite for 7 June landed on 6 July. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-08T00:12:00+02:00\"},{\"id\":\"R-41399\",\"receivedAt\":\"2026-07-08T12:03:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"The reminder for 2 March arrived for 3 February.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-08T12:54:00+02:00\"},{\"id\":\"R-41400\",\"receivedAt\":\"2026-07-09T15:16:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"We had two people show up on 11 October. They were booked for 10 November.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-09T19:04:00+02:00\"},{\"id\":\"R-41401\",\"receivedAt\":\"2026-07-09T16:13:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"We had two people show up on 10 June. They were booked for 6 October.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-09T17:31:00+02:00\"},{\"id\":\"R-41402\",\"receivedAt\":\"2026-07-10T13:17:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"The reminder for 4 September arrived for 9 April.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-10T15:17:00+02:00\"},{\"id\":\"R-41403\",\"receivedAt\":\"2026-07-10T16:32:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 7 February arrived for 2 July.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-10T20:11:00+02:00\"},{\"id\":\"R-41402\",\"receivedAt\":\"2026-07-10T13:17:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"The reminder for 4 September arrived for 9 April.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-10T15:17:00+02:00\"},{\"id\":\"R-41403\",\"receivedAt\":\"2026-07-10T16:32:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 7 February arrived for 2 July.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-10T20:11:00+02:00\"},{\"id\":\"R-41404\",\"receivedAt\":\"2026-07-10T15:56:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"My client came on 1 February instead of 2 January. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-10T20:23:00+02:00\"},{\"id\":\"R-41405\",\"receivedAt\":\"2026-07-11T15:22:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Every booking we make shows the wrong day. 1 October is now 10 January.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-11T15:45:00+02:00\"},{\"id\":\"R-41406\",\"receivedAt\":\"2026-07-11T17:06:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"Every booking we make shows the wrong day. 8 July is now 7 August.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-11T20:34:00+02:00\"},{\"id\":\"R-41408\",\"receivedAt\":\"2026-07-12T14:40:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Every booking we make shows the wrong day. 12 November is now 11 December.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-12T16:14:00+02:00\"},{\"id\":\"R-41409\",\"receivedAt\":\"2026-07-12T14:52:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"My client came on 4 June instead of 6 April. We sorted it out.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-12T18:38:00+02:00\"},{\"id\":\"R-41410\",\"receivedAt\":\"2026-07-12T15:02:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"form\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Invite says Friday 2 October. We agreed Tuesday 10 February. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-12T16:52:00+02:00\"},{\"id\":\"R-41411\",\"receivedAt\":\"2026-07-12T17:04:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Invite says Friday 7 August. We agreed Wednesday 8 July. Which one do I trust?\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-12T20:29:00+02:00\"},{\"id\":\"R-41412\",\"receivedAt\":\"2026-07-12T22:40:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"form\",\"subject\":\"Date is wrong\",\"body\":\"Wednesday 8 July showed as Friday 7 August. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-13T00:16:00+02:00\"},{\"id\":\"R-41413\",\"receivedAt\":\"2026-07-13T16:27:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"The reminder for 10 May arrived for 5 October.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-13T19:21:00+02:00\"},{\"id\":\"R-41414\",\"receivedAt\":\"2026-07-13T20:54:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Invite says Monday 6 July. We agreed Sunday 7 June. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-13T22:12:00+02:00\"},{\"id\":\"R-41415\",\"receivedAt\":\"2026-07-14T07:43:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The calendar invite for 9 January landed on 1 September. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-14T12:44:00+02:00\"},{\"id\":\"R-41416\",\"receivedAt\":\"2026-07-14T09:29:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"The reminder for 1 November arrived for 11 January.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-14T14:01:00+02:00\"},{\"id\":\"R-41417\",\"receivedAt\":\"2026-07-14T14:21:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"Your software sent my mother to the dentist on the wrong day. She went anyway. They fitted her in. This is not a complaint about the dentist.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-14T15:49:00+02:00\"},{\"id\":\"R-41418\",\"receivedAt\":\"2026-07-14T17:03:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Dates mixed up\",\"body\":\"The reminder for 1 December arrived for 12 January.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-14T21:39:00+02:00\"},{\"id\":\"R-41419\",\"receivedAt\":\"2026-07-15T17:57:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Booked for 9 August. The invite says 8 September.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-15T18:38:00+02:00\"},{\"id\":\"R-41420\",\"receivedAt\":\"2026-07-15T21:14:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Invite says Monday 9 November. We agreed Friday 11 September. Which one do I trust?\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-15T21:37:00+02:00\"},{\"id\":\"R-41421\",\"receivedAt\":\"2026-07-15T22:49:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"My client came on 7 August instead of 8 July. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-15T23:24:00+02:00\"},{\"id\":\"R-41422\",\"receivedAt\":\"2026-07-16T09:20:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Invite says Wednesday 6 May. We agreed Friday 5 June. Which one do I trust?\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-16T11:45:00+02:00\"},{\"id\":\"R-41423\",\"receivedAt\":\"2026-07-16T12:00:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"We had two people show up on 10 August. They were booked for 8 October.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-16T16:33:00+02:00\"},{\"id\":\"R-41424\",\"receivedAt\":\"2026-07-16T20:03:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Customer booked 4 August and got an invite for 8 April. Please look at this.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-17T00:53:00+02:00\"},{\"id\":\"R-41425\",\"receivedAt\":\"2026-07-16T22:17:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Invite says Thursday 8 January. We agreed Saturday 1 August. Which one do I trust?\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-16T23:53:00+02:00\"},{\"id\":\"R-41427\",\"receivedAt\":\"2026-07-18T18:09:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"We had two people show up on 7 October. They were booked for 10 July.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-18T22:18:00+02:00\"},{\"id\":\"R-41428\",\"receivedAt\":\"2026-07-19T08:01:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"My client came on 6 July instead of 7 June. We sorted it out.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-19T11:13:00+02:00\"},{\"id\":\"R-41429\",\"receivedAt\":\"2026-07-19T15:45:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Booked for 5 December. The invite says 12 May.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-19T19:24:00+02:00\"},{\"id\":\"R-41430\",\"receivedAt\":\"2026-07-19T22:06:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Tuesday 1 September showed as Friday 9 January. I moved it myself.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-19T22:42:00+02:00\"},{\"id\":\"R-41431\",\"receivedAt\":\"2026-07-20T12:27:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Dates mixed up\",\"body\":\"Invite says Friday 10 April. We agreed Sunday 4 October. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-20T15:43:00+02:00\"},{\"id\":\"R-41432\",\"receivedAt\":\"2026-07-20T15:14:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Monday 12 January showed as Tuesday 1 December. I moved it myself.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-20T16:02:00+02:00\"},{\"id\":\"R-41433\",\"receivedAt\":\"2026-07-21T13:32:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Customer booked 12 July and got an invite for 7 December. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-21T15:19:00+02:00\"},{\"id\":\"R-41434\",\"receivedAt\":\"2026-07-21T18:41:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The reminder for 1 October arrived for 10 January.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-21T21:10:00+02:00\"},{\"id\":\"R-41435\",\"receivedAt\":\"2026-07-21T19:00:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"Customer booked 7 October and got an invite for 10 July. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-22T00:47:00+02:00\"},{\"id\":\"R-41436\",\"receivedAt\":\"2026-07-21T21:40:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Customer booked 2 January and got an invite for 1 February. Please look at this.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-22T00:01:00+02:00\"},{\"id\":\"R-41437\",\"receivedAt\":\"2026-07-22T07:02:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Wednesday 4 March showed as Friday 3 April. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-22T10:59:00+02:00\"},{\"id\":\"R-41438\",\"receivedAt\":\"2026-07-22T11:54:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Wednesday 3 June showed as Friday 6 March. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-22T16:24:00+02:00\"},{\"id\":\"R-41439\",\"receivedAt\":\"2026-07-22T14:51:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Date is wrong\",\"body\":\"Booked for 3 January. The invite says 1 March.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-22T15:38:00+02:00\"},{\"id\":\"R-41440\",\"receivedAt\":\"2026-07-23T16:06:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Booked for 1 November. The invite says 11 January.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-23T18:10:00+02:00\"},{\"id\":\"R-41441\",\"receivedAt\":\"2026-07-23T15:17:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Dates mixed up\",\"body\":\"The reminder for 6 April arrived for 4 June.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-23T17:49:00+02:00\"},{\"id\":\"R-41442\",\"receivedAt\":\"2026-07-24T10:15:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Every booking we make shows the wrong day. 4 June is now 6 April.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-24T11:20:00+02:00\"},{\"id\":\"R-41443\",\"receivedAt\":\"2026-07-24T12:28:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Second time this month: 10 May turned into 5 October.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-24T16:23:00+02:00\"},{\"id\":\"R-41444\",\"receivedAt\":\"2026-07-25T21:59:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Customer booked 2 May and got an invite for 5 February. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-26T00:11:00+02:00\"},{\"id\":\"R-41445\",\"receivedAt\":\"2026-07-26T09:05:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Second time this month: 10 March turned into 3 October.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-26T10:34:00+02:00\"},{\"id\":\"R-41446\",\"receivedAt\":\"2026-07-27T18:22:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"We had two people show up on 6 May. They were booked for 5 June.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-27T20:30:00+02:00\"},{\"id\":\"R-41447\",\"receivedAt\":\"2026-07-27T21:45:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"My client came on 6 February instead of 2 June. We sorted it out.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-27T22:50:00+02:00\"},{\"id\":\"R-41448\",\"receivedAt\":\"2026-07-28T09:48:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Tuesday 4 August showed as Wednesday 8 April. I moved it myself.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-28T12:42:00+02:00\"},{\"id\":\"R-41449\",\"receivedAt\":\"2026-07-29T17:47:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"Thursday 8 January showed as Saturday 1 August. I moved it myself.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-29T22:38:00+02:00\"},{\"id\":\"R-41450\",\"receivedAt\":\"2026-07-29T20:22:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Sunday 5 April showed as Monday 4 May. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-30T01:08:00+02:00\"},{\"id\":\"R-41451\",\"receivedAt\":\"2026-07-30T11:32:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"We had two people show up on 6 August. They were booked for 8 June.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-30T14:50:00+02:00\"},{\"id\":\"R-41452\",\"receivedAt\":\"2026-07-30T11:48:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"We had two people show up on 2 October. They were booked for 10 February.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-30T14:34:00+02:00\"},{\"id\":\"R-41453\",\"receivedAt\":\"2026-07-30T15:44:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Booked for 10 February. The invite says 2 October.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-30T19:05:00+02:00\"},{\"id\":\"R-41454\",\"receivedAt\":\"2026-07-31T16:31:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"The calendar invite for 10 June landed on 6 October. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-31T20:19:00+02:00\"},{\"id\":\"R-41455\",\"receivedAt\":\"2026-07-31T17:03:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Booking shows a different day\",\"body\":\"My client came on 5 September instead of 9 May. We sorted it out.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-31T21:06:00+02:00\"},{\"id\":\"R-41454\",\"receivedAt\":\"2026-07-31T16:31:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"The calendar invite for 10 June landed on 6 October. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-31T20:19:00+02:00\"},{\"id\":\"R-41455\",\"receivedAt\":\"2026-07-31T17:03:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Booking shows a different day\",\"body\":\"My client came on 5 September instead of 9 May. We sorted it out.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-31T21:06:00+02:00\"},{\"id\":\"R-41456\",\"receivedAt\":\"2026-07-31T17:35:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Invite came on the wrong day\",\"body\":\"My client came on 6 January instead of 1 June. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-31T21:49:00+02:00\"},{\"id\":\"R-41457\",\"receivedAt\":\"2026-07-31T19:10:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Customer booked 6 February and got an invite for 2 June. Please look at this.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-07-31T20:30:00+02:00\"},{\"id\":\"R-41458\",\"receivedAt\":\"2026-08-01T08:35:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Customer booked 2 September and got an invite for 9 February. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-01T11:44:00+02:00\"},{\"id\":\"R-41459\",\"receivedAt\":\"2026-08-01T09:27:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Second time this month: 9 June turned into 6 September.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-01T11:21:00+02:00\"},{\"id\":\"R-41460\",\"receivedAt\":\"2026-08-01T13:05:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"Second time this month: 5 July turned into 7 May.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-01T15:09:00+02:00\"},{\"id\":\"R-41461\",\"receivedAt\":\"2026-08-01T16:27:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"We had two people show up on 5 March. They were booked for 3 May.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-01T18:12:00+02:00\"},{\"id\":\"R-41462\",\"receivedAt\":\"2026-08-01T16:35:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Every booking we make shows the wrong day. 8 April is now 4 August.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-01T21:29:00+02:00\"},{\"id\":\"R-41463\",\"receivedAt\":\"2026-08-02T07:37:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Second time this month: 5 October turned into 10 May.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-02T11:04:00+02:00\"},{\"id\":\"R-41464\",\"receivedAt\":\"2026-08-02T14:27:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Invite says Friday 4 December. We agreed Sunday 12 April. Which one do I trust?\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-02T19:08:00+02:00\"},{\"id\":\"R-41465\",\"receivedAt\":\"2026-08-04T07:55:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The calendar invite for 10 August landed on 8 October. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-04T09:39:00+02:00\"},{\"id\":\"R-41466\",\"receivedAt\":\"2026-08-04T22:44:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"We had two people show up on 9 November. They were booked for 11 September.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-05T01:00:00+02:00\"},{\"id\":\"R-41467\",\"receivedAt\":\"2026-08-05T14:32:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"Saturday 10 January showed as Thursday 1 October. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-05T15:41:00+02:00\"},{\"id\":\"R-41468\",\"receivedAt\":\"2026-08-05T14:53:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Booked for 6 May. The invite says 5 June.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-05T18:30:00+02:00\"},{\"id\":\"R-41469\",\"receivedAt\":\"2026-08-05T13:59:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"The reminder for 1 August arrived for 8 January.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-05T18:37:00+02:00\"},{\"id\":\"R-41470\",\"receivedAt\":\"2026-08-06T11:37:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"The calendar invite for 10 December landed on 12 October. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-06T15:35:00+02:00\"},{\"id\":\"R-41471\",\"receivedAt\":\"2026-08-06T18:29:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Second time this month: 11 January turned into 1 November.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-06T20:29:00+02:00\"},{\"id\":\"R-41472\",\"receivedAt\":\"2026-08-09T20:37:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"Tuesday 9 June showed as Sunday 6 September. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-09T23:31:00+02:00\"},{\"id\":\"R-41473\",\"receivedAt\":\"2026-08-10T15:27:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Wednesday 1 July showed as Wednesday 7 January. I moved it myself.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-10T20:20:00+02:00\"},{\"id\":\"R-41474\",\"receivedAt\":\"2026-08-11T11:28:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The calendar invite for 4 January landed on 1 April. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-11T16:09:00+02:00\"},{\"id\":\"R-41475\",\"receivedAt\":\"2026-08-11T19:53:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Booked for 2 July. The invite says 7 February.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-11T23:22:00+02:00\"},{\"id\":\"R-41476\",\"receivedAt\":\"2026-08-12T09:16:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Booked for 2 March. The invite says 3 February.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-12T12:12:00+02:00\"},{\"id\":\"R-41477\",\"receivedAt\":\"2026-08-12T22:58:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"Every booking we make shows the wrong day. 10 June is now 6 October.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-12T23:38:00+02:00\"},{\"id\":\"R-41478\",\"receivedAt\":\"2026-08-13T09:09:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"We had two people show up on 3 June. They were booked for 6 March.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-13T13:41:00+02:00\"},{\"id\":\"R-41479\",\"receivedAt\":\"2026-08-14T09:32:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-14T14:25:00+02:00\"},{\"id\":\"R-41480\",\"receivedAt\":\"2026-08-14T14:24:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Monday 8 June showed as Thursday 6 August. I moved it myself.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-14T15:01:00+02:00\"},{\"id\":\"R-41481\",\"receivedAt\":\"2026-08-14T15:28:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Booking shows a different day\",\"body\":\"We had two people show up on 12 January. They were booked for 1 December.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-14T20:20:00+02:00\"},{\"id\":\"R-41482\",\"receivedAt\":\"2026-08-14T14:59:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 1 November arrived for 11 January.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-14T18:56:00+02:00\"},{\"id\":\"R-41483\",\"receivedAt\":\"2026-08-14T17:27:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 2 May arrived for 5 February.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-14T20:25:00+02:00\"},{\"id\":\"R-41484\",\"receivedAt\":\"2026-08-14T17:28:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Thursday 8 January showed as Saturday 1 August. I moved it myself.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-14T20:17:00+02:00\"},{\"id\":\"R-41485\",\"receivedAt\":\"2026-08-14T21:55:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"form\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"The reminder for 4 November arrived for 11 April.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-14T22:20:00+02:00\"},{\"id\":\"R-41486\",\"receivedAt\":\"2026-08-15T09:19:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Customer booked 5 December and got an invite for 12 May. Please look at this.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-15T10:14:00+02:00\"},{\"id\":\"R-41487\",\"receivedAt\":\"2026-08-15T14:00:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"The reminder for 10 September arrived for 9 October.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-15T15:55:00+02:00\"},{\"id\":\"R-41488\",\"receivedAt\":\"2026-08-17T16:50:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Monday 6 July showed as Sunday 7 June. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-17T21:49:00+02:00\"},{\"id\":\"R-41489\",\"receivedAt\":\"2026-08-18T09:32:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"The reminder for 5 April arrived for 4 May.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-18T13:37:00+02:00\"},{\"id\":\"R-41490\",\"receivedAt\":\"2026-08-18T10:36:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Dates mixed up\",\"body\":\"We had two people show up on 6 February. They were booked for 2 June.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-18T12:17:00+02:00\"},{\"id\":\"R-41491\",\"receivedAt\":\"2026-08-18T17:53:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Booked for 12 October. The invite says 10 December.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-18T18:22:00+02:00\"},{\"id\":\"R-41492\",\"receivedAt\":\"2026-08-19T12:08:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Second time this month: 12 November turned into 11 December.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-19T16:11:00+02:00\"},{\"id\":\"R-41493\",\"receivedAt\":\"2026-08-19T11:18:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Dates mixed up\",\"body\":\"The reminder for 2 July arrived for 7 February.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-19T17:16:00+02:00\"},{\"id\":\"R-41494\",\"receivedAt\":\"2026-08-19T16:11:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Customer booked 3 November and got an invite for 11 March. Please look at this.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-19T18:42:00+02:00\"},{\"id\":\"R-41495\",\"receivedAt\":\"2026-08-19T15:12:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Invite says Tuesday 10 February. We agreed Friday 2 October. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-19T19:04:00+02:00\"},{\"id\":\"R-41496\",\"receivedAt\":\"2026-08-19T18:17:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Booked for 11 February. The invite says 2 November.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-19T19:47:00+02:00\"},{\"id\":\"R-41497\",\"receivedAt\":\"2026-08-19T22:37:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Second time this month: 12 November turned into 11 December.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-20T02:54:00+02:00\"},{\"id\":\"R-41498\",\"receivedAt\":\"2026-08-20T14:10:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Second time this month: 9 August turned into 8 September.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-20T16:29:00+02:00\"},{\"id\":\"R-41499\",\"receivedAt\":\"2026-08-20T16:53:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Second time this month: 3 June turned into 6 March.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-20T17:33:00+02:00\"},{\"id\":\"R-41500\",\"receivedAt\":\"2026-08-20T22:53:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Second time this month: 6 February turned into 2 June.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-20T23:41:00+02:00\"},{\"id\":\"R-41501\",\"receivedAt\":\"2026-08-21T08:13:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Invite says Monday 7 September. We agreed Thursday 9 July. Which one do I trust?\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-21T11:55:00+02:00\"},{\"id\":\"R-41502\",\"receivedAt\":\"2026-08-21T09:49:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Thursday 5 March showed as Sunday 3 May. I moved it myself.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-21T09:59:00+02:00\"},{\"id\":\"R-41503\",\"receivedAt\":\"2026-08-21T17:09:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"My client came on 1 February instead of 2 January. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-21T18:38:00+02:00\"},{\"id\":\"R-41504\",\"receivedAt\":\"2026-08-21T19:24:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Customer booked 9 November and got an invite for 11 September. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-21T20:13:00+02:00\"},{\"id\":\"R-41505\",\"receivedAt\":\"2026-08-22T12:08:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Customer booked 9 June and got an invite for 6 September. Please look at this.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-22T13:25:00+02:00\"},{\"id\":\"R-41504\",\"receivedAt\":\"2026-08-21T19:24:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Customer booked 9 November and got an invite for 11 September. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-21T20:13:00+02:00\"},{\"id\":\"R-41505\",\"receivedAt\":\"2026-08-22T12:08:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Customer booked 9 June and got an invite for 6 September. Please look at this.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-22T13:25:00+02:00\"},{\"id\":\"R-41506\",\"receivedAt\":\"2026-08-22T14:21:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Invite says Friday 8 May. We agreed Wednesday 5 August. Which one do I trust?\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-22T15:30:00+02:00\"},{\"id\":\"R-41508\",\"receivedAt\":\"2026-08-22T18:19:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Booked for 12 July. The invite says 7 December.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-22T23:00:00+02:00\"},{\"id\":\"R-41509\",\"receivedAt\":\"2026-08-24T15:09:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Booking shows a different day\",\"body\":\"Sunday 7 June showed as Monday 6 July. I moved it myself.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-24T15:25:00+02:00\"},{\"id\":\"R-41510\",\"receivedAt\":\"2026-08-24T20:19:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Customer booked 12 March and got an invite for 3 December. Please look at this.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-24T21:54:00+02:00\"},{\"id\":\"R-41511\",\"receivedAt\":\"2026-08-26T14:32:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Every booking we make shows the wrong day. 5 October is now 10 May.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-26T18:54:00+02:00\"},{\"id\":\"R-41512\",\"receivedAt\":\"2026-08-26T21:51:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Monday 8 June showed as Thursday 6 August. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-27T00:32:00+02:00\"},{\"id\":\"R-41513\",\"receivedAt\":\"2026-08-26T22:28:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"Second time this month: 2 September turned into 9 February.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-27T00:01:00+02:00\"},{\"id\":\"R-41514\",\"receivedAt\":\"2026-08-27T17:35:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"I have started telling clients the date in words. \\\"The second Tuesday.\\\" It works. Your product is now a phone call.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-27T19:49:00+02:00\"},{\"id\":\"R-41515\",\"receivedAt\":\"2026-08-27T20:34:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Booked for 6 April. The invite says 4 June.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-28T02:32:00+02:00\"},{\"id\":\"R-41516\",\"receivedAt\":\"2026-08-28T07:30:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"My client came on 7 December instead of 12 July. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-28T08:56:00+02:00\"},{\"id\":\"R-41517\",\"receivedAt\":\"2026-08-29T09:25:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"Customer booked 10 September and got an invite for 9 October. Please look at this.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-29T14:20:00+02:00\"},{\"id\":\"R-41518\",\"receivedAt\":\"2026-08-29T18:47:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"My client came on 7 November instead of 11 July. We sorted it out.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-29T21:45:00+02:00\"},{\"id\":\"R-41519\",\"receivedAt\":\"2026-08-29T19:02:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"form\",\"subject\":\"Booking on the wrong date\",\"body\":\"Invite says Friday 3 April. We agreed Wednesday 4 March. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-29T23:24:00+02:00\"},{\"id\":\"R-41520\",\"receivedAt\":\"2026-08-29T19:09:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"The calendar invite for 7 November landed on 11 July. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-30T00:14:00+02:00\"},{\"id\":\"R-41521\",\"receivedAt\":\"2026-08-30T11:29:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Customer booked 7 May and got an invite for 5 July. Please look at this.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-30T15:39:00+02:00\"},{\"id\":\"R-41522\",\"receivedAt\":\"2026-08-30T14:29:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Customer booked 7 December and got an invite for 12 July. Please look at this.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-30T17:41:00+02:00\"},{\"id\":\"R-41523\",\"receivedAt\":\"2026-08-31T11:17:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"My client came on 11 July instead of 7 November. We sorted it out.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-31T16:08:00+02:00\"},{\"id\":\"R-41524\",\"receivedAt\":\"2026-08-31T13:30:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Booking shows a different day\",\"body\":\"The calendar invite for 11 October landed on 10 November. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-31T16:12:00+02:00\"},{\"id\":\"R-41525\",\"receivedAt\":\"2026-08-31T19:47:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Wrong date again\",\"body\":\"Customer booked 12 January and got an invite for 1 December. Please look at this.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-08-31T23:25:00+02:00\"},{\"id\":\"R-41527\",\"receivedAt\":\"2026-08-31T22:57:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"We had two people show up on 9 October. They were booked for 10 September.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-01T03:49:00+02:00\"},{\"id\":\"R-41528\",\"receivedAt\":\"2026-09-01T08:30:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Wednesday 7 January showed as Wednesday 1 July. I moved it myself.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-01T12:36:00+02:00\"},{\"id\":\"R-41529\",\"receivedAt\":\"2026-09-01T20:06:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"form\",\"subject\":\"Month and day swapped?\",\"body\":\"Booked for 5 November. The invite says 11 May.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-02T00:10:00+02:00\"},{\"id\":\"R-41530\",\"receivedAt\":\"2026-09-01T20:56:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"We had two people show up on 3 July. They were booked for 7 March.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-01T21:53:00+02:00\"},{\"id\":\"R-41531\",\"receivedAt\":\"2026-09-02T09:34:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Customer booked 3 August and got an invite for 8 March. Please look at this.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-02T12:37:00+02:00\"},{\"id\":\"R-41532\",\"receivedAt\":\"2026-09-02T09:00:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Booked for 5 August. The invite says 8 May.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-02T13:04:00+02:00\"},{\"id\":\"R-41533\",\"receivedAt\":\"2026-09-03T12:19:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"The calendar invite for 10 September landed on 9 October. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-03T14:39:00+02:00\"},{\"id\":\"R-41534\",\"receivedAt\":\"2026-09-03T19:14:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Saturday 5 December showed as Tuesday 12 May. I moved it myself.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-03T20:42:00+02:00\"},{\"id\":\"R-41535\",\"receivedAt\":\"2026-09-03T20:34:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Booked for 5 August. The invite says 8 May.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-03T21:45:00+02:00\"},{\"id\":\"R-41536\",\"receivedAt\":\"2026-09-04T13:31:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"The reminder for 5 December arrived for 12 May.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-04T16:10:00+02:00\"},{\"id\":\"R-41537\",\"receivedAt\":\"2026-09-04T14:11:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Saturday 10 January showed as Thursday 1 October. I moved it myself.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-04T15:08:00+02:00\"},{\"id\":\"R-41538\",\"receivedAt\":\"2026-09-04T16:25:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Dates mixed up\",\"body\":\"Invite says Wednesday 4 February. We agreed Thursday 2 April. Which one do I trust?\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-04T19:14:00+02:00\"},{\"id\":\"R-41539\",\"receivedAt\":\"2026-09-04T16:31:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"The reminder for 2 March arrived for 3 February.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-04T19:44:00+02:00\"},{\"id\":\"R-41540\",\"receivedAt\":\"2026-09-05T13:58:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Invite says Tuesday 2 June. We agreed Friday 6 February. Which one do I trust?\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-05T15:57:00+02:00\"},{\"id\":\"R-41541\",\"receivedAt\":\"2026-09-06T10:14:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"My client came on 10 January instead of 1 October. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-06T12:15:00+02:00\"},{\"id\":\"R-41542\",\"receivedAt\":\"2026-09-06T14:06:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"form\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The reminder for 11 May arrived for 5 November.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-06T15:36:00+02:00\"},{\"id\":\"R-41543\",\"receivedAt\":\"2026-09-06T15:04:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Second time this month: 1 February turned into 2 January.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-06T19:17:00+02:00\"},{\"id\":\"R-41544\",\"receivedAt\":\"2026-09-06T17:10:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Sunday 10 May showed as Monday 5 October. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-06T18:43:00+02:00\"},{\"id\":\"R-41545\",\"receivedAt\":\"2026-09-07T08:06:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Wednesday 6 May showed as Friday 5 June. I moved it myself.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-07T11:42:00+02:00\"},{\"id\":\"R-41546\",\"receivedAt\":\"2026-09-07T09:00:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"The calendar invite for 1 December landed on 12 January. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-07T11:35:00+02:00\"},{\"id\":\"R-41547\",\"receivedAt\":\"2026-09-07T21:27:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"Every booking we make shows the wrong day. 8 November is now 11 August.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-08T01:17:00+02:00\"},{\"id\":\"R-41548\",\"receivedAt\":\"2026-09-08T08:51:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"My client came on 9 December instead of 12 September. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-08T12:33:00+02:00\"},{\"id\":\"R-41549\",\"receivedAt\":\"2026-09-08T10:00:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Friday 3 July showed as Saturday 7 March. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-08T15:59:00+02:00\"},{\"id\":\"R-41550\",\"receivedAt\":\"2026-09-08T17:55:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Monday 7 September showed as Thursday 9 July. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-08T22:17:00+02:00\"},{\"id\":\"R-41551\",\"receivedAt\":\"2026-09-08T18:03:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Second time this month: 9 June turned into 6 September.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-08T22:44:00+02:00\"},{\"id\":\"R-41552\",\"receivedAt\":\"2026-09-09T10:06:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"We had two people show up on 5 January. They were booked for 1 May.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-09T13:15:00+02:00\"},{\"id\":\"R-41553\",\"receivedAt\":\"2026-09-09T14:21:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Booked for 11 February. The invite says 2 November.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-09T16:21:00+02:00\"},{\"id\":\"R-41554\",\"receivedAt\":\"2026-09-09T17:50:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Customer booked 8 February and got an invite for 2 August. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-09T19:56:00+02:00\"},{\"id\":\"R-41555\",\"receivedAt\":\"2026-09-10T15:00:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"My client came on 1 November instead of 11 January. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-10T16:14:00+02:00\"},{\"id\":\"R-41556\",\"receivedAt\":\"2026-09-10T21:14:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Invite says Tuesday 10 February. We agreed Friday 2 October. Which one do I trust?\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-10T22:39:00+02:00\"},{\"id\":\"R-41557\",\"receivedAt\":\"2026-09-11T09:38:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"The calendar invite for 4 October landed on 10 April. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-11T12:37:00+02:00\"},{\"id\":\"R-41556\",\"receivedAt\":\"2026-09-10T21:14:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Calendar invite is wrong\",\"body\":\"Invite says Tuesday 10 February. We agreed Friday 2 October. Which one do I trust?\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-10T22:39:00+02:00\"},{\"id\":\"R-41557\",\"receivedAt\":\"2026-09-11T09:38:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"The calendar invite for 4 October landed on 10 April. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-11T12:37:00+02:00\"},{\"id\":\"R-41558\",\"receivedAt\":\"2026-09-11T13:08:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"The reminder for 4 June arrived for 6 April.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-11T14:29:00+02:00\"},{\"id\":\"R-41559\",\"receivedAt\":\"2026-09-11T20:20:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Invite says Sunday 2 August. We agreed Sunday 8 February. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-12T01:56:00+02:00\"},{\"id\":\"R-41560\",\"receivedAt\":\"2026-09-12T18:31:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Second time this month: 10 August turned into 8 October.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-12T19:45:00+02:00\"},{\"id\":\"R-41561\",\"receivedAt\":\"2026-09-12T20:47:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Customer booked 1 April and got an invite for 4 January. Please look at this.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-13T01:44:00+02:00\"},{\"id\":\"R-41562\",\"receivedAt\":\"2026-09-13T09:32:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"We had two people show up on 9 October. They were booked for 10 September.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-13T14:59:00+02:00\"},{\"id\":\"R-41563\",\"receivedAt\":\"2026-09-13T12:54:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Customer booked 1 September and got an invite for 9 January. Please look at this.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-13T16:36:00+02:00\"},{\"id\":\"R-41564\",\"receivedAt\":\"2026-09-13T17:15:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Booked for 7 August. The invite says 8 July.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-13T20:36:00+02:00\"},{\"id\":\"R-41565\",\"receivedAt\":\"2026-09-14T16:40:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Booked for 9 March. The invite says 3 September.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-14T20:51:00+02:00\"},{\"id\":\"R-41566\",\"receivedAt\":\"2026-09-14T17:31:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Second time this month: 7 June turned into 6 July.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-14T19:03:00+02:00\"},{\"id\":\"R-41567\",\"receivedAt\":\"2026-09-15T15:52:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"Thursday 11 June showed as Friday 6 November. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-15T17:51:00+02:00\"},{\"id\":\"R-41568\",\"receivedAt\":\"2026-09-15T20:35:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Booked for 4 December. The invite says 12 April.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-15T21:02:00+02:00\"},{\"id\":\"R-41569\",\"receivedAt\":\"2026-09-16T13:14:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Booked for 10 February. The invite says 2 October.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-16T16:48:00+02:00\"},{\"id\":\"R-41570\",\"receivedAt\":\"2026-09-17T12:08:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"Second time this month: 1 June turned into 6 January.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-17T12:56:00+02:00\"},{\"id\":\"R-41571\",\"receivedAt\":\"2026-09-17T13:08:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"The reminder for 4 November arrived for 11 April.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-17T13:32:00+02:00\"},{\"id\":\"R-41572\",\"receivedAt\":\"2026-09-17T17:17:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Invite came on the wrong day\",\"body\":\"Invite says Sunday 5 July. We agreed Thursday 7 May. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-17T20:38:00+02:00\"},{\"id\":\"R-41573\",\"receivedAt\":\"2026-09-17T22:45:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"The reminder for 3 February arrived for 2 March.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-18T00:06:00+02:00\"},{\"id\":\"R-41574\",\"receivedAt\":\"2026-09-18T12:27:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"Wednesday 12 August showed as Tuesday 8 December. I moved it myself.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-18T15:54:00+02:00\"},{\"id\":\"R-41575\",\"receivedAt\":\"2026-09-18T12:46:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Thursday 2 July showed as Saturday 7 February. I moved it myself.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-18T14:41:00+02:00\"},{\"id\":\"R-41576\",\"receivedAt\":\"2026-09-19T22:35:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Customer booked 12 January and got an invite for 1 December. Please look at this.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-19T23:55:00+02:00\"},{\"id\":\"R-41577\",\"receivedAt\":\"2026-09-20T10:02:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The calendar invite for 8 June landed on 6 August. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-20T11:35:00+02:00\"},{\"id\":\"R-41578\",\"receivedAt\":\"2026-09-20T19:01:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-20T23:38:00+02:00\"},{\"id\":\"R-41579\",\"receivedAt\":\"2026-09-20T18:49:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"The calendar invite for 1 March landed on 3 January. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-20T22:51:00+02:00\"},{\"id\":\"R-41580\",\"receivedAt\":\"2026-09-21T08:29:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Saturday 5 December showed as Tuesday 12 May. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-21T14:20:00+02:00\"},{\"id\":\"R-41581\",\"receivedAt\":\"2026-09-22T12:37:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"My client came on 10 May instead of 5 October. We sorted it out.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-22T15:54:00+02:00\"},{\"id\":\"R-41582\",\"receivedAt\":\"2026-09-22T17:15:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"form\",\"subject\":\"Calendar invite is wrong\",\"body\":\"The reminder for 7 March arrived for 3 July.\",\"meta\":{\"browserLocale\":\"pt-PT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-22T20:56:00+02:00\"},{\"id\":\"R-41583\",\"receivedAt\":\"2026-09-22T19:21:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Dates mixed up\",\"body\":\"My client came on 2 May instead of 5 February. We sorted it out.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-23T00:08:00+02:00\"},{\"id\":\"R-41584\",\"receivedAt\":\"2026-09-22T20:01:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"Every booking we make shows the wrong day. 7 November is now 11 July.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-23T00:10:00+02:00\"},{\"id\":\"R-41585\",\"receivedAt\":\"2026-09-22T20:01:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"My client came on 11 January instead of 1 November. We sorted it out.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-22T21:49:00+02:00\"},{\"id\":\"R-41586\",\"receivedAt\":\"2026-09-23T10:51:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"Booked for 6 May. The invite says 5 June.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-23T13:29:00+02:00\"},{\"id\":\"R-41587\",\"receivedAt\":\"2026-09-23T14:33:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"form\",\"subject\":\"Wrong day on the invite\",\"body\":\"My client came on 4 December instead of 12 April. We sorted it out.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-23T19:16:00+02:00\"},{\"id\":\"R-41588\",\"receivedAt\":\"2026-09-23T22:11:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"The calendar invite for 5 March landed on 3 May. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-23T23:52:00+02:00\"},{\"id\":\"R-41589\",\"receivedAt\":\"2026-09-24T11:34:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"Every booking we make shows the wrong day. 4 August is now 8 April.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-24T13:29:00+02:00\"},{\"id\":\"R-41590\",\"receivedAt\":\"2026-09-24T12:40:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Second time this month: 8 May turned into 5 August.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-24T14:25:00+02:00\"},{\"id\":\"R-41591\",\"receivedAt\":\"2026-09-24T19:45:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"The reminder for 6 March arrived for 3 June.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-25T01:23:00+02:00\"},{\"id\":\"R-41592\",\"receivedAt\":\"2026-09-24T22:01:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"My client came on 3 November instead of 11 March. We sorted it out.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-24T23:49:00+02:00\"},{\"id\":\"R-41593\",\"receivedAt\":\"2026-09-25T08:37:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"email\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Saturday 3 January showed as Sunday 1 March. I moved it myself.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-25T11:58:00+02:00\"},{\"id\":\"R-41594\",\"receivedAt\":\"2026-09-25T12:58:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"email\",\"subject\":\"Dates mixed up\",\"body\":\"Customer booked 4 June and got an invite for 6 April. Please look at this.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-25T15:27:00+02:00\"},{\"id\":\"R-41595\",\"receivedAt\":\"2026-09-25T16:43:00+02:00\",\"tenant\":\"copper.studio\",\"channel\":\"email\",\"subject\":\"Booking shows a different day\",\"body\":\"The calendar invite for 4 August landed on 8 April. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"es-ES\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-25T17:24:00+02:00\"},{\"id\":\"R-41596\",\"receivedAt\":\"2026-09-26T09:05:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Appointment moved by itself\",\"body\":\"Invite says Sunday 8 November. We agreed Tuesday 11 August. Which one do I trust?\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-26T11:11:00+02:00\"},{\"id\":\"R-41597\",\"receivedAt\":\"2026-09-26T09:25:00+01:00\",\"tenant\":\"pale.harbour\",\"channel\":\"app\",\"subject\":\"Reminder went out on the wrong day\",\"body\":\"The calendar invite for 10 April landed on 4 October. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-US\",\"intakeTag\":\"hint\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-26T13:13:00+02:00\"},{\"id\":\"R-41598\",\"receivedAt\":\"2026-09-26T11:38:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Date is wrong\",\"body\":\"Invite says Tuesday 1 December. We agreed Monday 12 January. Which one do I trust?\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-26T16:27:00+02:00\"},{\"id\":\"R-41599\",\"receivedAt\":\"2026-09-26T16:12:00+02:00\",\"tenant\":\"long.table\",\"channel\":\"app\",\"subject\":\"Booking on the wrong date\",\"body\":\"The calendar invite for 8 July landed on 7 August. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"it-IT\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-26T17:09:00+02:00\"},{\"id\":\"R-41600\",\"receivedAt\":\"2026-09-27T13:57:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"My client came on 9 March instead of 3 September. We sorted it out.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-27T18:27:00+02:00\"},{\"id\":\"R-41601\",\"receivedAt\":\"2026-09-27T13:22:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"We had two people show up on 11 June. They were booked for 6 November.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-27T15:08:00+02:00\"},{\"id\":\"R-41602\",\"receivedAt\":\"2026-09-27T15:53:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"app\",\"subject\":\"Invite came on the wrong day\",\"body\":\"The reminder for 11 March arrived for 3 November.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-27T17:16:00+02:00\"},{\"id\":\"R-41603\",\"receivedAt\":\"2026-09-27T19:00:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"The calendar invite for 6 March landed on 3 June. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-28T00:23:00+02:00\"},{\"id\":\"R-41604\",\"receivedAt\":\"2026-09-27T22:20:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"Booked for 4 December. The invite says 12 April.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-28T02:52:00+02:00\"},{\"id\":\"R-41605\",\"receivedAt\":\"2026-09-28T09:39:00+02:00\",\"tenant\":\"morrow.tax\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Customer booked 5 August and got an invite for 8 May. Please look at this.\",\"meta\":{\"browserLocale\":\"fr-FR\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-28T11:56:00+02:00\"},{\"id\":\"R-41606\",\"receivedAt\":\"2026-09-29T10:46:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Booked for 3 July. The invite says 7 March.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-29T14:16:00+02:00\"},{\"id\":\"R-41608\",\"receivedAt\":\"2026-09-30T19:43:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"We had two people show up on 8 September. They were booked for 9 August.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-30T22:00:00+02:00\"},{\"id\":\"R-41606\",\"receivedAt\":\"2026-09-29T10:46:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Booked for 3 July. The invite says 7 March.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-29T14:16:00+02:00\"},{\"id\":\"R-41608\",\"receivedAt\":\"2026-09-30T19:43:00+02:00\",\"tenant\":\"nine.lanterns\",\"channel\":\"email\",\"subject\":\"Calendar invite is wrong\",\"body\":\"We had two people show up on 8 September. They were booked for 9 August.\",\"meta\":{\"browserLocale\":\"pl-PL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-09-30T22:00:00+02:00\"},{\"id\":\"R-41609\",\"receivedAt\":\"2026-10-01T09:03:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Month and day swapped?\",\"body\":\"The calendar invite for 10 November landed on 11 October. Nobody here touched it.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-01T13:28:00+02:00\"},{\"id\":\"R-41610\",\"receivedAt\":\"2026-10-01T13:56:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"email\",\"subject\":\"Client turned up on the wrong day\",\"body\":\"Booked for 4 July. The invite says 7 April.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-01T14:23:00+02:00\"},{\"id\":\"R-41611\",\"receivedAt\":\"2026-10-01T14:30:00+02:00\",\"tenant\":\"kettle.books\",\"channel\":\"app\",\"subject\":\"Wrong date again\",\"body\":\"Booked for 1 April. The invite says 4 January.\",\"meta\":{\"browserLocale\":\"nl-NL\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-01T18:39:00+02:00\"},{\"id\":\"R-41612\",\"receivedAt\":\"2026-10-01T15:38:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"app\",\"subject\":\"Wrong day on the invite\",\"body\":\"Invite says Friday 3 April. We agreed Wednesday 4 March. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-01T20:22:00+02:00\"},{\"id\":\"R-41613\",\"receivedAt\":\"2026-10-01T17:50:00+02:00\",\"tenant\":\"alder.physio\",\"channel\":\"app\",\"subject\":\"Month and day swapped?\",\"body\":\"We had two people show up on 1 February. They were booked for 2 January.\",\"meta\":{\"browserLocale\":\"de-DE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-01T19:21:00+02:00\"},{\"id\":\"R-41614\",\"receivedAt\":\"2026-10-02T08:45:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Booking on the wrong date\",\"body\":\"Thursday 8 January showed as Saturday 1 August. I moved it myself.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-02T10:27:00+02:00\"},{\"id\":\"R-41615\",\"receivedAt\":\"2026-10-02T12:16:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Our October bookings came through for January. We are a heating company. January is when we need them. Thank you, actually.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-02T16:44:00+02:00\"},{\"id\":\"R-41616\",\"receivedAt\":\"2026-10-02T18:03:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"email\",\"subject\":\"Wrong day on the invite\",\"body\":\"Invite says Friday 7 August. We agreed Wednesday 8 July. Which one do I trust?\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-02T19:27:00+02:00\"},{\"id\":\"R-41617\",\"receivedAt\":\"2026-10-03T16:42:00+01:00\",\"tenant\":\"stone.and.sons\",\"channel\":\"form\",\"subject\":\"Date is wrong\",\"body\":\"Every booking we make shows the wrong day. 5 April is now 4 May.\",\"meta\":{\"browserLocale\":\"en-IE\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-03T18:08:00+02:00\"},{\"id\":\"R-41618\",\"receivedAt\":\"2026-10-03T20:42:00+02:00\",\"tenant\":\"ridge.clinic\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Every booking we make shows the wrong day. 7 May is now 5 July.\",\"meta\":{\"browserLocale\":\"da-DK\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-03T21:05:00+02:00\"},{\"id\":\"R-41619\",\"receivedAt\":\"2026-10-04T20:30:00+01:00\",\"tenant\":\"harbour.dental\",\"channel\":\"email\",\"subject\":\"Appointment moved by itself\",\"body\":\"Booked for 9 December. The invite says 12 September.\",\"meta\":{\"browserLocale\":\"en-GB\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-04T21:58:00+02:00\"},{\"id\":\"R-41620\",\"receivedAt\":\"2026-10-04T21:49:00+02:00\",\"tenant\":\"lantern.row\",\"channel\":\"email\",\"subject\":\"Date is wrong\",\"body\":\"Tuesday 6 October showed as Monday. I moved it myself. I have stopped reporting these but my colleague says it helps you.\",\"meta\":{\"browserLocale\":\"cs-CZ\",\"intakeTag\":\"parser\"},\"mergedInto\":4471,\"mergedAt\":\"2026-10-04T21:58:00+02:00\"}]"), eo = { oneDayMove: [
	"R-41202",
	"R-41209",
	"R-41236",
	"R-41344",
	"R-41620"
] }, to = {
	"booking-v2": "DD/MM/YYYY",
	"booking-v3": "MM/DD/YYYY"
};
function no(e) {
	let t = new Intl.DateTimeFormat(e, {
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).formatToParts(new Date(Date.UTC(2026, 0, 2, 12))).map((e) => e.type);
	return t.indexOf("day") < t.indexOf("month");
}
function ro(e, t) {
	return !t || !no(t.locale) ? null : e.channel === "form" && to[t.form].startsWith("MM") ? "hint" : "parser";
}
function io(e, t, n, r) {
	let i = ro(e, t);
	return i !== null && i === ro(n, r);
}
function ao(e) {
	return [...new Map(e.map((e) => [e.id, e])).values()];
}
function oo(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = ro(r, t(r)) ?? "unplaced";
		n.set(e, [...n.get(e) ?? [], r]);
	}
	return [...n.entries()].map(([e, t]) => {
		let n = t.map((e) => e.receivedAt.slice(0, 10)).sort();
		return {
			cause: e,
			reports: t,
			taggedAs: t.reduce((e, t) => ({
				...e,
				[t.meta.intakeTag]: (e[t.meta.intakeTag] ?? 0) + 1
			}), {}),
			tenants: new Set(t.map((e) => e.tenant)).size,
			firstSeen: n[0],
			lastSeen: n[n.length - 1],
			mergedInto: [...new Set(t.flatMap((e) => e.mergedInto ? [e.mergedInto] : []))]
		};
	}).sort((e, t) => t.reports.length - e.reports.length);
}
function so(e, t) {
	return e.find((e) => e.mergedInto.includes(t))?.cause ?? null;
}
function co(e, t) {
	return e.reports.filter((e) => t.includes(e.id)).length;
}
// src/lib/kb/locales.ts
var lo = Object.values([
	{
		handle: "alder.physio",
		name: "Alder Physio",
		locale: "de-DE",
		form: "booking-v3"
	},
	{
		handle: "copper.studio",
		name: "Copper Studio",
		locale: "es-ES",
		form: "booking-v3"
	},
	{
		handle: "harbour.dental",
		name: "Harbour Dental",
		locale: "en-GB",
		form: "booking-v2"
	},
	{
		handle: "kettle.books",
		name: "Kettle Books",
		locale: "nl-NL",
		form: "booking-v2"
	},
	{
		handle: "lantern.row",
		name: "Lantern Row",
		locale: "cs-CZ",
		form: "booking-v2"
	},
	{
		handle: "long.table",
		name: "Long Table",
		locale: "it-IT",
		form: "booking-v2"
	},
	{
		handle: "morrow.tax",
		name: "Morrow Tax",
		locale: "fr-FR",
		form: "booking-v2"
	},
	{
		handle: "nine.lanterns",
		name: "Nine Lanterns",
		locale: "pl-PL",
		form: "booking-v2"
	},
	{
		handle: "pale.harbour",
		name: "Pale Harbour",
		locale: "pt-PT",
		form: "booking-v3"
	},
	{
		handle: "ridge.clinic",
		name: "Ridge Clinic",
		locale: "da-DK",
		form: "booking-v2"
	},
	{
		handle: "stone.and.sons",
		name: "Stone and Sons",
		locale: "en-IE",
		form: "booking-v2"
	}
]), uo = new Map(lo.map((e) => [e.handle, e]));
function fo(e) {
	return uo.get(e.tenant);
}
var po = () => [...uo.keys()].sort();
// src/lib/kb/CauseTable.svelte
vo[o] = "src/lib/kb/CauseTable.svelte";
var mo = Q(/* @__PURE__ */ Y("<tr><td class=\"svelte-12oyimm\"><code> </code></td><td class=\"svelte-12oyimm\"> </td><td class=\"tags svelte-12oyimm\"> </td><td class=\"svelte-12oyimm\"> </td><td class=\"svelte-12oyimm\"> </td><td class=\"svelte-12oyimm\"> </td></tr>"), vo[o], [[
	31,
	6,
	[
		[
			32,
			8,
			[[32, 12]]
		],
		[33, 8],
		[34, 8],
		[35, 8],
		[36, 8],
		[37, 8]
	]
]]), ho = Q(/* @__PURE__ */ Y("<p class=\"note svelte-12oyimm\"> <code> </code> by tenant.</p>"), vo[o], [[
	46,
	4,
	[[46, 72]]
]]), go = Q(/* @__PURE__ */ Y("<p class=\"sum svelte-12oyimm\"><strong> </strong> <strong> </strong> </p> <table><thead><tr><th>cause</th><th>reports</th><th>tagged as</th><th>tenants</th><th>seen</th><th></th></tr></thead><tbody></tbody></table> <!>", 1), vo[o], [[
	19,
	0,
	[[20, 2], [21, 2]]
], [
	25,
	0,
	[[
		26,
		2,
		[[
			27,
			4,
			[
				[27, 8],
				[27, 22],
				[27, 38],
				[27, 56],
				[27, 72],
				[27, 85]
			]
		]]
	], [29, 2]]
]]), _o = {
	hash: "svelte-12oyimm",
	code: "\n  .sum.svelte-12oyimm { font-size: 1.1rem; }\n  .tags.svelte-12oyimm { color: var(--muted); font-size: 0.85em; }\n  .note.svelte-12oyimm { color: var(--muted); font-size: 0.85em; }\n  .wrong.svelte-12oyimm td:where(.svelte-12oyimm) { background: var(--warn-bg); }\n  .wrong.svelte-12oyimm td:where(.svelte-12oyimm):last-child { color: var(--warn); font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F1c2VUYWJsZS5zdmVsdGUiLCJzb3VyY2VzIjpbIkNhdXNlVGFibGUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCByZXBvcnRzIGZyb20gJyNsaWIvZGF0YS9yZXBvcnRzLTQ0NzEuanNvbic7XG4gIGltcG9ydCBub3RlcyBmcm9tICcjbGliL2RhdGEvZGVzay1ub3Rlcy5qc29uJztcbiAgaW1wb3J0IHsgZ3JvdXBCeUNhdXNlLCByZWFkQXMsIHRpY2tldENhdXNlLCB1bmlxdWVCeUlkLCB0eXBlIFJlcG9ydCB9IGZyb20gJyNsaWIva2IvY2F1c2VzJztcbiAgaW1wb3J0IHsgdGVuYW50T2YgfSBmcm9tICcjbGliL2tiL2xvY2FsZXMnO1xuXG4gIGxldCB7IHRpY2tldCB9OiB7IHRpY2tldDogbnVtYmVyIH0gPSAkcHJvcHMoKTtcblxuICBjb25zdCBtZXJnZWQgPSAkZGVyaXZlZCh1bmlxdWVCeUlkKHJlcG9ydHMgYXMgUmVwb3J0W10pLmZpbHRlcigocikgPT4gci5tZXJnZWRJbnRvID09PSB0aWNrZXQpKTtcbiAgY29uc3QgZ3JvdXBzID0gJGRlcml2ZWQoZ3JvdXBCeUNhdXNlKG1lcmdlZCwgdGVuYW50T2YpKTtcbiAgY29uc3Qgb3duZXIgPSAkZGVyaXZlZCh0aWNrZXRDYXVzZShncm91cHMsIHRpY2tldCkpO1xuICBjb25zdCB0YWdzID0gKGc6IHsgdGFnZ2VkQXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gfSkgPT5cbiAgICBPYmplY3QuZW50cmllcyhnLnRhZ2dlZEFzKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgICAgLm1hcCgoW3RhZywgbl0pID0+IGAke3RhZ30gw5cke259YClcbiAgICAgIC5qb2luKCcgwrcgJyk7XG48L3NjcmlwdD5cblxuPHAgY2xhc3M9XCJzdW1cIj5cbiAgPHN0cm9uZz57bWVyZ2VkLmxlbmd0aH08L3N0cm9uZz4gcmVwb3J0cyBtZXJnZWQgaW50byAje3RpY2tldH0gwrdcbiAgPHN0cm9uZz57Z3JvdXBzLmxlbmd0aH08L3N0cm9uZz5cbiAge2dyb3Vwcy5sZW5ndGggPT09IDEgPyAnY2F1c2UnIDogJ2NhdXNlcyd9XG48L3A+XG5cbjx0YWJsZT5cbiAgPHRoZWFkPlxuICAgIDx0cj48dGg+Y2F1c2U8L3RoPjx0aD5yZXBvcnRzPC90aD48dGg+dGFnZ2VkIGFzPC90aD48dGg+dGVuYW50czwvdGg+PHRoPnNlZW48L3RoPjx0aD48L3RoPjwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICB7I2VhY2ggZ3JvdXBzIGFzIGcgKGcuY2F1c2UpfVxuICAgICAgPHRyIGNsYXNzOndyb25nPXtnLmNhdXNlICE9PSBvd25lcn0+XG4gICAgICAgIDx0ZD48Y29kZT57Zy5jYXVzZX08L2NvZGU+PC90ZD5cbiAgICAgICAgPHRkPntnLnJlcG9ydHMubGVuZ3RofTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRhZ3NcIj57dGFncyhnKX08L3RkPlxuICAgICAgICA8dGQ+e2cudGVuYW50c308L3RkPlxuICAgICAgICA8dGQ+e2cuZmlyc3RTZWVufSDihpIge2cubGFzdFNlZW59PC90ZD5cbiAgICAgICAgPHRkPntnLmNhdXNlID09PSBvd25lciA/IGAjJHt0aWNrZXR9YCA6ICdub3QgdGhpcyB0aWNrZXQg4oCUIG5vIHRpY2tldCBvZiBpdHMgb3duJ308L3RkPlxuICAgICAgPC90cj5cbiAgICB7L2VhY2h9XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuXG57I2VhY2ggZ3JvdXBzIGFzIGcgKGcuY2F1c2UpfVxuICB7QGNvbnN0IG1vdmVkID0gcmVhZEFzKGcsIG5vdGVzLm9uZURheU1vdmUpfVxuICB7I2lmIG1vdmVkfVxuICAgIDxwIGNsYXNzPVwibm90ZVwiPnttb3ZlZH0gcmVwb3J0cyByZWFkIGFzIGEgb25lLWRheSBtb3ZlOyBmaWxlZCB1bmRlciA8Y29kZT57Zy5jYXVzZX08L2NvZGU+IGJ5IHRlbmFudC48L3A+XG4gIHsvaWZ9XG57L2VhY2h9XG5cbjxzdHlsZT5cbiAgLnN1bSB7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XG4gIC50YWdzIHsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udC1zaXplOiAwLjg1ZW07IH1cbiAgLm5vdGUgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250LXNpemU6IDAuODVlbTsgfVxuICAud3JvbmcgdGQgeyBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuLWJnKTsgfVxuICAud3JvbmcgdGQ6bGFzdC1jaGlsZCB7IGNvbG9yOiB2YXIoLS13YXJuKTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119 */"
};
function vo(e, t) {
	Ri(new.target), M(t, !0, vo), $i(e, _o);
	let n = k(/* @__PURE__ */ Gt(() => ao($a).filter((e) => Un(e.mergedInto, t.ticket))), "merged"), r = k(/* @__PURE__ */ Gt(() => oo(J(n), fo)), "groups"), i = k(/* @__PURE__ */ Gt(() => so(J(r), t.ticket)), "owner"), a = (e) => Object.entries(e.taggedAs).sort((e, t) => t[1] - e[1]).map(([e, t]) => `${e} ×${t}`).join(" · ");
	var o = { ...zi() }, s = go(), c = Zn(s), l = R(c), u = z(l, !0), d = B(l), f = B(d), p = z(f, !0), m = B(f);
	O(c);
	var h = B(c, 2), g = B(R(h));
	j(() => Gi(g, 21, () => J(r), (e) => e.cause, (e, n) => {
		var r = mo();
		let o;
		var s = R(r), c = z(R(s), !0);
		O(s);
		var l = B(s), u = z(l, !0), d = B(l), f = z(d, !0), p = B(d), m = z(p, !0), h = B(p), g = z(h), _ = z(B(h), !0);
		O(r), V((e) => {
			o = aa(r, 1, "svelte-12oyimm", null, o, { wrong: Un(J(n).cause, J(i), !1) }), Z(c, J(n).cause), Z(u, J(n).reports.length), Z(f, e), Z(m, J(n).tenants), Z(g, `${J(n).firstSeen ?? ""} → ${J(n).lastSeen ?? ""}`), Z(_, Un(J(n).cause, J(i)) ? `#${t.ticket}` : "not this ticket — no ticket of its own");
		}, [() => a(J(n))]), X(e, r);
	}), "each", vo, 30, 4), O(g), O(h);
	var _ = B(h, 2);
	return j(() => Gi(_, 17, () => J(r), (e) => e.cause, (e, t) => {
		let n = k(/* @__PURE__ */ Gt(() => co(J(t), eo.oneDayMove)), "moved");
		J(n);
		var r = vi(), i = Zn(r), a = (e) => {
			var r = ho(), i = R(r), a = z(B(i), !0);
			Be(), O(r), V(() => {
				Z(i, `${J(n) ?? ""} reports read as a one-day move; filed under `), Z(a, J(t).cause);
			}), X(e, r);
		};
		j(() => Bi(i, (e) => {
			J(n) && e(a);
		}), "if", vo, 45, 2), X(e, r);
	}), "each", vo, 43, 0), V(() => {
		Z(u, J(n).length), Z(d, ` reports merged into #${t.ticket ?? ""} · `), Z(p, J(r).length), Z(m, ` ${Un(J(r).length, 1) ? "cause" : "causes"}`);
	}), X(e, s), N(o);
}
// src/lib/kb/QueueTimeline.svelte
Co[o] = "src/lib/kb/QueueTimeline.svelte";
var yo = Q(/* @__PURE__ */ gi("<text y=\"128\" class=\"svelte-18a6qal\"> </text>"), Co[o], [[35, 23]]), bo = Q(/* @__PURE__ */ gi("<rect class=\"in svelte-18a6qal\" width=\"9\"></rect><rect class=\"merged svelte-18a6qal\" width=\"9\"></rect><!>", 1), Co[o], [[33, 6], [34, 6]]), xo = Q(/* @__PURE__ */ Y("<figure><svg role=\"img\" class=\"svelte-18a6qal\"></svg> <figcaption class=\"svelte-18a6qal\"><span class=\"key in svelte-18a6qal\"></span> received · <span class=\"key merged svelte-18a6qal\"></span> </figcaption></figure>"), Co[o], [[
	30,
	0,
	[[31, 2], [
		38,
		2,
		[[38, 14], [38, 54]]
	]]
]]), So = {
	hash: "svelte-18a6qal",
	code: "\n  svg.svelte-18a6qal { width: 100%; max-width: 640px; }\n  .in.svelte-18a6qal { fill: var(--warn); }\n  .merged.svelte-18a6qal { fill: var(--accent); }\n  text.svelte-18a6qal { font: 8px var(--mono); fill: var(--muted); text-anchor: middle; }\n  figcaption.svelte-18a6qal { color: var(--muted); font-size: 0.85rem; }\n  .key.svelte-18a6qal { display: inline-block; width: 0.7em; height: 0.7em; border-radius: 2px; }\n  .key.in.svelte-18a6qal { background: var(--warn); }\n  .key.merged.svelte-18a6qal { background: var(--accent); }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWVUaW1lbGluZS5zdmVsdGUiLCJzb3VyY2VzIjpbIlF1ZXVlVGltZWxpbmUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCByZXBvcnRzIGZyb20gJyNsaWIvZGF0YS9yZXBvcnRzLTQ0NzEuanNvbic7XG4gIGltcG9ydCB7IHVuaXF1ZUJ5SWQsIHR5cGUgUmVwb3J0IH0gZnJvbSAnI2xpYi9rYi9jYXVzZXMnO1xuXG4gIGxldCB7IHRpY2tldCwgZnJvbSA9ICcyMDI2LTAzLTMwJywgdG8gPSAnMjAyNi0xMC0wNScgfTogeyB0aWNrZXQ6IG51bWJlcjsgZnJvbT86IHN0cmluZzsgdG8/OiBzdHJpbmcgfSA9ICRwcm9wcygpO1xuXG4gIGNvbnN0IFdFRUsgPSA3ICogODZfNDAwXzAwMDtcbiAgY29uc3QgZGF5ID0gKGlzbzogc3RyaW5nKSA9PiBEYXRlLnBhcnNlKGlzby5zbGljZSgwLCAxMCkpO1xuXG4gIC8vIFJlY2VpdmVkIHZzIG1lcmdlZCwgcGVyIHdlZWsgKE1vbmRheSB0byBTdW5kYXksIHRoZSBkZXNrJ3Mgd2Vla3MpLlxuICBjb25zdCB3ZWVrcyA9ICRkZXJpdmVkLmJ5KCgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9IGRheShmcm9tKTtcbiAgICBjb25zdCBjb3VudCA9IE1hdGguY2VpbCgoZGF5KHRvKSAtIHN0YXJ0KSAvIFdFRUspO1xuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9LCAoXywgaSkgPT4gKHsgYXQ6IHN0YXJ0ICsgaSAqIFdFRUssIHJlY2VpdmVkOiAwLCBtZXJnZWQ6IDAgfSkpO1xuICAgIGNvbnN0IHdlZWtPZiA9IChpc286IHN0cmluZykgPT4gcm93c1tNYXRoLmZsb29yKChkYXkoaXNvKSAtIHN0YXJ0KSAvIFdFRUspXTtcbiAgICBmb3IgKGNvbnN0IHIgb2YgdW5pcXVlQnlJZChyZXBvcnRzIGFzIFJlcG9ydFtdKSkge1xuICAgICAgaWYgKHIubWVyZ2VkSW50byAhPT0gdGlja2V0KSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHJJbiA9IHdlZWtPZihyLnJlY2VpdmVkQXQpO1xuICAgICAgaWYgKHJJbikgckluLnJlY2VpdmVkKys7XG4gICAgICBjb25zdCByTWVyZ2VkID0gci5tZXJnZWRBdCA/IHdlZWtPZihyLm1lcmdlZEF0KSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChyTWVyZ2VkKSByTWVyZ2VkLm1lcmdlZCsrO1xuICAgIH1cbiAgICByZXR1cm4gcm93cztcbiAgfSk7XG4gIGNvbnN0IG1heCA9ICRkZXJpdmVkKE1hdGgubWF4KC4uLndlZWtzLmZsYXRNYXAoKHcpID0+IFt3LnJlY2VpdmVkLCB3Lm1lcmdlZF0pKSk7XG4gIGNvbnN0IGxhYmVsID0gKG1zOiBudW1iZXIpID0+IG5ldyBEYXRlKG1zKS50b0lTT1N0cmluZygpLnNsaWNlKDUsIDEwKTtcbiAgY29uc3QgaCA9IChuOiBudW1iZXIpID0+IChuIC8gbWF4KSAqIDEwMDtcbjwvc2NyaXB0PlxuXG48ZmlndXJlPlxuICA8c3ZnIHZpZXdCb3g9XCIwIDAge3dlZWtzLmxlbmd0aCAqIDI0fSAxNDBcIiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cInJlcG9ydHMgcmVjZWl2ZWQgYW5kIG1lcmdlZCBpbnRvICN7dGlja2V0fSwgcGVyIHdlZWtcIj5cbiAgICB7I2VhY2ggd2Vla3MgYXMgdywgaSAody5hdCl9XG4gICAgICA8cmVjdCBjbGFzcz1cImluXCIgeD17aSAqIDI0ICsgMn0geT17MTEwIC0gaCh3LnJlY2VpdmVkKX0gd2lkdGg9XCI5XCIgaGVpZ2h0PXtoKHcucmVjZWl2ZWQpfSAvPlxuICAgICAgPHJlY3QgY2xhc3M9XCJtZXJnZWRcIiB4PXtpICogMjQgKyAxMn0geT17MTEwIC0gaCh3Lm1lcmdlZCl9IHdpZHRoPVwiOVwiIGhlaWdodD17aCh3Lm1lcmdlZCl9IC8+XG4gICAgICB7I2lmIGkgJSA0ID09PSAwfTx0ZXh0IHg9e2kgKiAyNCArIDEyfSB5PVwiMTI4XCI+e2xhYmVsKHcuYXQpfTwvdGV4dD57L2lmfVxuICAgIHsvZWFjaH1cbiAgPC9zdmc+XG4gIDxmaWdjYXB0aW9uPjxzcGFuIGNsYXNzPVwia2V5IGluXCI+PC9zcGFuPiByZWNlaXZlZCDCtyA8c3BhbiBjbGFzcz1cImtleSBtZXJnZWRcIj48L3NwYW4+IG1lcmdlZCBpbnRvICN7dGlja2V0fSDCtyBwZXIgd2VlazwvZmlnY2FwdGlvbj5cbjwvZmlndXJlPlxuXG48c3R5bGU+XG4gIHN2ZyB7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDY0MHB4OyB9XG4gIC5pbiB7IGZpbGw6IHZhcigtLXdhcm4pOyB9XG4gIC5tZXJnZWQgeyBmaWxsOiB2YXIoLS1hY2NlbnQpOyB9XG4gIHRleHQgeyBmb250OiA4cHggdmFyKC0tbW9ubyk7IGZpbGw6IHZhcigtLW11dGVkKTsgdGV4dC1hbmNob3I6IG1pZGRsZTsgfVxuICBmaWdjYXB0aW9uIHsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udC1zaXplOiAwLjg1cmVtOyB9XG4gIC5rZXkgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAwLjdlbTsgaGVpZ2h0OiAwLjdlbTsgYm9yZGVyLXJhZGl1czogMnB4OyB9XG4gIC5rZXkuaW4geyBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuKTsgfVxuICAua2V5Lm1lcmdlZCB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ== */"
};
function Co(e, t) {
	Ri(new.target), M(t, !0, Co), $i(e, So);
	let n = Ia(t, "from", 3, "2026-03-30"), r = Ia(t, "to", 3, "2026-10-05"), i = 6048e5, a = (e) => Date.parse(e.slice(0, 10)), o = k(/* @__PURE__ */ Gt(() => {
		let e = a(n()), o = Math.ceil((a(r()) - e) / i), s = Array.from({ length: o }, (t, n) => ({
			at: e + n * i,
			received: 0,
			merged: 0
		})), c = (t) => s[Math.floor((a(t) - e) / i)];
		for (let e of ao($a)) {
			if (Un(e.mergedInto, t.ticket, !1)) continue;
			let n = c(e.receivedAt);
			n && n.received++;
			let r = e.mergedAt ? c(e.mergedAt) : void 0;
			r && r.merged++;
		}
		return s;
	}), "weeks"), s = k(/* @__PURE__ */ Gt(() => Math.max(...J(o).flatMap((e) => [e.received, e.merged]))), "max"), c = (e) => new Date(e).toISOString().slice(5, 10), l = (e) => e / J(s) * 100;
	var u = { ...zi() }, d = xo(), f = R(d);
	j(() => Gi(f, 23, () => J(o), (e) => e.at, (e, t, n) => {
		var r = bo(), i = Zn(r), a = B(i), o = B(a), s = (e) => {
			var r = yo(), i = z(r, !0);
			V((e) => {
				_a(r, "x", J(n) * 24 + 12), Z(i, e);
			}, [() => c(J(t).at)]), X(e, r);
		};
		j(() => Bi(o, (e) => {
			Un(J(n) % 4, 0) && e(s);
		}), "if", Co, 35, 6), V((e, t, r, o) => {
			_a(i, "x", J(n) * 24 + 2), _a(i, "y", e), _a(i, "height", t), _a(a, "x", J(n) * 24 + 12), _a(a, "y", r), _a(a, "height", o);
		}, [
			() => 110 - l(J(t).received),
			() => l(J(t).received),
			() => 110 - l(J(t).merged),
			() => l(J(t).merged)
		]), X(e, r);
	}), "each", Co, 32, 4), O(f);
	var p = B(f, 2), m = B(R(p), 3);
	return O(p), O(d), V(() => {
		_a(f, "viewBox", `0 0 ${J(o).length * 24} 140`), _a(f, "aria-label", `reports received and merged into #${t.ticket ?? ""}, per week`), Z(m, ` merged into #${t.ticket ?? ""} · per week`);
	}), X(e, d), N(u);
}
// src/lib/kb/dedupe-cases.ts
var wo = [
	{
		why: "app vs email, same tenant",
		a: {
			tenant: "kettle.books",
			channel: "app",
			subject: "Wrong day on the invite"
		},
		b: {
			tenant: "kettle.books",
			channel: "email",
			subject: "Client turned up on the wrong day"
		}
	},
	{
		why: "same subject, same tenant, different channel",
		a: {
			tenant: "alder.physio",
			channel: "form",
			subject: "Booking on the wrong date"
		},
		b: {
			tenant: "alder.physio",
			channel: "app",
			subject: "Booking on the wrong date"
		}
	},
	{
		why: "same subject, same channel, different tenant",
		a: {
			tenant: "copper.studio",
			channel: "form",
			subject: "Date is wrong"
		},
		b: {
			tenant: "morrow.tax",
			channel: "form",
			subject: "Date is wrong"
		}
	},
	{
		why: "different subject, same way in",
		a: {
			tenant: "pale.harbour",
			channel: "form",
			subject: "Month and day swapped?"
		},
		b: {
			tenant: "alder.physio",
			channel: "form",
			subject: "Appointment moved by itself"
		}
	},
	{
		why: "no tenant on file",
		a: {
			tenant: "unknown.sender",
			channel: "email",
			subject: "Dates mixed up"
		},
		b: {
			tenant: "unknown.sender",
			channel: "email",
			subject: "Dates mixed up"
		}
	}
];
// src/lib/kb/DedupeExplorer.svelte
$[o] = "src/lib/kb/DedupeExplorer.svelte";
var To = Q(/* @__PURE__ */ Y("<option> </option>"), $[o], [[18, 50]]), Eo = Q(/* @__PURE__ */ Y("<option> </option>"), $[o], [[21, 45]]), Do = Q(/* @__PURE__ */ Y("<fieldset class=\"svelte-gq0h2h\"><legend></legend> <select aria-label=\"tenant\"></select> <select aria-label=\"channel\"></select> <input aria-label=\"subject\"/> <code> </code></fieldset>"), $[o], [[
	15,
	4,
	[
		[16, 6],
		[17, 6],
		[20, 6],
		[23, 6],
		[24, 6]
	]
]]), Oo = Q(/* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td></tr>"), $[o], [[
	34,
	6,
	[
		[35, 8],
		[36, 8],
		[37, 8]
	]
]]), ko = Q(/* @__PURE__ */ Y("<div class=\"try svelte-gq0h2h\"><!> <p> </p></div> <table><thead><tr><th>case</th><th>same subject</th><th>same cause</th></tr></thead><tbody></tbody></table>", 1), $[o], [[
	13,
	0,
	[[27, 2]]
], [
	30,
	0,
	[[
		31,
		2,
		[[
			31,
			9,
			[
				[31, 13],
				[31, 26],
				[31, 47]
			]
		]]
	], [32, 2]]
]]), Ao = {
	hash: "svelte-gq0h2h",
	code: "\n  .try.svelte-gq0h2h { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin: 1rem 0; }\n  fieldset.svelte-gq0h2h { display: grid; gap: 0.4rem; border: 1px solid var(--line); border-radius: 6px; }\n  .verdict.svelte-gq0h2h { grid-column: 1 / -1; margin: 0; font-weight: 600; color: var(--muted); }\n  .dup.svelte-gq0h2h { color: var(--accent); font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVkdXBlRXhwbG9yZXIuc3ZlbHRlIiwic291cmNlcyI6WyJEZWR1cGVFeHBsb3Jlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgREVEVVBFX0NBU0VTIH0gZnJvbSAnI2xpYi9rYi9kZWR1cGUtY2FzZXMnO1xuICBpbXBvcnQgeyBjYXVzZU9mLCBzYW1lQ2F1c2UgfSBmcm9tICcjbGliL2tiL2NhdXNlcyc7XG4gIGltcG9ydCB7IHRlbmFudEhhbmRsZXMsIHRlbmFudE9mIH0gZnJvbSAnI2xpYi9rYi9sb2NhbGVzJztcblxuICBjb25zdCBDSEFOTkVMUyA9IFsnYXBwJywgJ2VtYWlsJywgJ2Zvcm0nXSBhcyBjb25zdDtcbiAgdHlwZSBTaWRlID0geyB0ZW5hbnQ6IHN0cmluZzsgY2hhbm5lbDogKHR5cGVvZiBDSEFOTkVMUylbbnVtYmVyXTsgc3ViamVjdDogc3RyaW5nIH07XG4gIGxldCBhOiBTaWRlID0gJHN0YXRlKHsgdGVuYW50OiAnYWxkZXIucGh5c2lvJywgY2hhbm5lbDogJ2Zvcm0nLCBzdWJqZWN0OiAnQm9va2luZyBvbiB0aGUgd3JvbmcgZGF0ZScgfSk7XG4gIGxldCBiOiBTaWRlID0gJHN0YXRlKHsgdGVuYW50OiAna2V0dGxlLmJvb2tzJywgY2hhbm5lbDogJ2Zvcm0nLCBzdWJqZWN0OiAnQm9va2luZyBvbiB0aGUgd3JvbmcgZGF0ZScgfSk7XG4gIGNvbnN0IHNhbWUgPSAoeDogU2lkZSwgeTogU2lkZSkgPT4gc2FtZUNhdXNlKHgsIHRlbmFudE9mKHgpLCB5LCB0ZW5hbnRPZih5KSk7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cInRyeVwiPlxuICB7I2VhY2ggW2EsIGJdIGFzIHNpZGUsIGkgKGkpfVxuICAgIDxmaWVsZHNldD5cbiAgICAgIDxsZWdlbmQ+cmVwb3J0IHtpID09PSAwID8gJ0EnIDogJ0InfTwvbGVnZW5kPlxuICAgICAgPHNlbGVjdCBiaW5kOnZhbHVlPXtzaWRlLnRlbmFudH0gYXJpYS1sYWJlbD1cInRlbmFudFwiPlxuICAgICAgICB7I2VhY2ggdGVuYW50SGFuZGxlcygpIGFzIGhhbmRsZSAoaGFuZGxlKX08b3B0aW9uPntoYW5kbGV9PC9vcHRpb24+ey9lYWNofVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8c2VsZWN0IGJpbmQ6dmFsdWU9e3NpZGUuY2hhbm5lbH0gYXJpYS1sYWJlbD1cImNoYW5uZWxcIj5cbiAgICAgICAgeyNlYWNoIENIQU5ORUxTIGFzIGNoYW5uZWwgKGNoYW5uZWwpfTxvcHRpb24+e2NoYW5uZWx9PC9vcHRpb24+ey9lYWNofVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8aW5wdXQgYmluZDp2YWx1ZT17c2lkZS5zdWJqZWN0fSBhcmlhLWxhYmVsPVwic3ViamVjdFwiIC8+XG4gICAgICA8Y29kZT57Y2F1c2VPZihzaWRlLCB0ZW5hbnRPZihzaWRlKSkgPz8gJ25vIGNhdXNlJ308L2NvZGU+XG4gICAgPC9maWVsZHNldD5cbiAgey9lYWNofVxuICA8cCBjbGFzcz1cInZlcmRpY3RcIiBjbGFzczpkdXA9e3NhbWUoYSwgYil9PntzYW1lKGEsIGIpID8gJ3NhbWUgY2F1c2Ug4oCUIG1lcmdlJyA6ICdkaWZmZXJlbnQgY2F1c2VzIOKAlCBrZWVwIGFwYXJ0J308L3A+XG48L2Rpdj5cblxuPHRhYmxlPlxuICA8dGhlYWQ+PHRyPjx0aD5jYXNlPC90aD48dGg+c2FtZSBzdWJqZWN0PC90aD48dGg+c2FtZSBjYXVzZTwvdGg+PC90cj48L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgeyNlYWNoIERFRFVQRV9DQVNFUyBhcyBjIChjLndoeSl9XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD57Yy53aHl9PC90ZD5cbiAgICAgICAgPHRkPntjLmEuc3ViamVjdCA9PT0gYy5iLnN1YmplY3QgPyAneWVzJyA6ICdubyd9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzOmR1cD17c2FtZShjLmEsIGMuYil9PntzYW1lKGMuYSwgYy5iKSA/ICd5ZXMnIDogJ25vJ308L3RkPlxuICAgICAgPC90cj5cbiAgICB7L2VhY2h9XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuXG48c3R5bGU+XG4gIC50cnkgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTsgZ2FwOiAwLjc1cmVtOyBtYXJnaW46IDFyZW0gMDsgfVxuICBmaWVsZHNldCB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMC40cmVtOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTsgYm9yZGVyLXJhZGl1czogNnB4OyB9XG4gIC52ZXJkaWN0IHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgbWFyZ2luOiAwOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4gIC5kdXAgeyBjb2xvcjogdmFyKC0tYWNjZW50KTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119 */"
};
function $(e, t) {
	Ri(new.target), M(t, !0, $), $i(e, Ao);
	let n = [
		"app",
		"email",
		"form"
	], r = ft(In({
		tenant: "alder.physio",
		channel: "form",
		subject: "Booking on the wrong date"
	}), "a"), i = ft(In({
		tenant: "kettle.books",
		channel: "form",
		subject: "Booking on the wrong date"
	}), "b"), a = (e, t) => io(e, fo(e), t, fo(t));
	var o = { ...zi() }, s = ko(), c = Zn(s), l = R(c);
	j(() => Gi(l, 17, () => [r, i], Vi, (e, t, r) => {
		var i = Do(), a = R(i);
		a.textContent = `report ${Un(r, 0) ? "A" : "B"}`;
		var o = B(a, 2);
		j(() => Gi(o, 20, po, (e) => e, (e, t) => {
			var n = To(), r = z(n, !0), i = {};
			V(() => {
				Z(r, t), i !== (i = t) && (n.__value = i);
			}), X(e, n);
		}), "each", $, 18, 8), O(o), La("bind:value={side.tenant}", [], () => J(t), () => "tenant", 17, 14), la(o);
		var s = B(o, 2);
		j(() => Gi(s, 20, () => n, (e) => e, (e, t) => {
			var n = Eo(), r = z(n, !0), i = {};
			V(() => {
				Z(r, t), i !== (i = t) && (n.__value = i);
			}), X(e, n);
		}), "each", $, 21, 8), O(s), La("bind:value={side.channel}", [], () => J(t), () => "channel", 20, 14), la(s);
		var c = B(s, 2);
		ga(c), La("bind:value={side.subject}", [], () => J(t), () => "subject", 23, 13);
		var l = z(B(c, 2), !0);
		O(i), V((e) => Z(l, e), [() => ro(J(t), fo(J(t))) ?? "no cause"]), ua(o, function() {
			return J(t).tenant;
		}, function(e) {
			J(t).tenant = e;
		}), ua(s, function() {
			return J(t).channel;
		}, function(e) {
			J(t).channel = e;
		}), Ta(c, function() {
			return J(t).subject;
		}, function(e) {
			J(t).subject = e;
		}), X(e, i);
	}), "each", $, 14, 2);
	var u = B(l, 2);
	let d;
	var f = z(u, !0);
	O(c);
	var p = B(c, 2), m = B(R(p));
	return j(() => Gi(m, 21, () => wo, (e) => e.why, (e, t) => {
		var n = Oo(), r = R(n), i = z(r, !0), o = B(r), s = z(o, !0), c = B(o);
		let l;
		var u = z(c, !0);
		O(n), V((e, n) => {
			Z(i, J(t).why), Z(s, Un(J(t).a.subject, J(t).b.subject) ? "yes" : "no"), l = aa(c, 1, "svelte-gq0h2h", null, l, { dup: e }), Z(u, n);
		}, [() => a(J(t).a, J(t).b), () => a(J(t).a, J(t).b) ? "yes" : "no"]), X(e, n);
	}), "each", $, 33, 4), O(m), O(p), V((e, t) => {
		d = aa(u, 1, "verdict svelte-gq0h2h", null, d, { dup: e }), Z(f, t);
	}, [() => a(r, i), () => a(r, i) ? "same cause — merge" : "different causes — keep apart"]), X(e, s), N(o);
}
// src/lib/kb/desk-ref.ts
var jo = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
function Mo(e, t) {
	let n = t >>> 0;
	for (let t = 0; t < e.length; t++) n ^= e.charCodeAt(t), n = Math.imul(n, 16777619) >>> 0;
	return n;
}
function No(e) {
	let t = e.trim(), n = Mo(t, 2166136261), r = Mo(t, 2654435769), i = BigInt(n) << 8n | BigInt(r & 255), a = "";
	for (let e = 0; e < 8; e++) a = jo[Number(i & 31n)] + a, i >>= 5n;
	return `DR-${a.slice(0, 4)}-${a.slice(4)}`;
}
// src/lib/kb/RenderStamp.svelte
Lo[o] = "src/lib/kb/RenderStamp.svelte";
var Po = Q(/* @__PURE__ */ Y("<p class=\"stamp svelte-1280m42\">desk ref <b class=\"svelte-1280m42\"> </b></p>"), Lo[o], [[
	11,
	2,
	[[11, 28]]
]]), Fo = Q(/* @__PURE__ */ Y("<p class=\"stamp missing svelte-1280m42\">no desk ref: this page isn't signed (no <code>signature</code> in its frontmatter)</p>"), Lo[o], [[
	13,
	2,
	[[13, 67]]
]]), Io = {
	hash: "svelte-1280m42",
	code: "\n  .stamp.svelte-1280m42 { margin: 2rem 0 0; font: 0.85rem var(--mono); color: var(--muted); }\n  .stamp.svelte-1280m42 b:where(.svelte-1280m42) { color: var(--accent); letter-spacing: 0.04em; }\n  .missing.svelte-1280m42 { color: var(--warn); }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyU3RhbXAuc3ZlbHRlIiwic291cmNlcyI6WyJSZW5kZXJTdGFtcC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgZGVza1JlZiB9IGZyb20gJyNsaWIva2IvZGVzay1yZWYnO1xuXG4gIC8vIFBhc3MgdGhlIHBhZ2UncyBmcm9udG1hdHRlciBzaWduYXR1cmU6IDxSZW5kZXJTdGFtcCB7c2lnbmF0dXJlfSAvPlxuICBsZXQgeyBzaWduYXR1cmUgfTogeyBzaWduYXR1cmU/OiBzdHJpbmcgfSA9ICRwcm9wcygpO1xuXG4gIGNvbnN0IHJlZiA9ICRkZXJpdmVkKHNpZ25hdHVyZSA/IGRlc2tSZWYoc2lnbmF0dXJlKSA6IG51bGwpO1xuPC9zY3JpcHQ+XG5cbnsjaWYgcmVmfVxuICA8cCBjbGFzcz1cInN0YW1wXCI+ZGVzayByZWYgPGI+e3JlZn08L2I+PC9wPlxuezplbHNlfVxuICA8cCBjbGFzcz1cInN0YW1wIG1pc3NpbmdcIj5ubyBkZXNrIHJlZjogdGhpcyBwYWdlIGlzbid0IHNpZ25lZCAobm8gPGNvZGU+c2lnbmF0dXJlPC9jb2RlPiBpbiBpdHMgZnJvbnRtYXR0ZXIpPC9wPlxuey9pZn1cblxuPHN0eWxlPlxuICAuc3RhbXAgeyBtYXJnaW46IDJyZW0gMCAwOyBmb250OiAwLjg1cmVtIHZhcigtLW1vbm8pOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4gIC5zdGFtcCBiIHsgY29sb3I6IHZhcigtLWFjY2VudCk7IGxldHRlci1zcGFjaW5nOiAwLjA0ZW07IH1cbiAgLm1pc3NpbmcgeyBjb2xvcjogdmFyKC0td2Fybik7IH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImlnbm9yZUxpc3QiOltdfQ== */"
};
function Lo(e, t) {
	Ri(new.target), M(t, !0, Lo), $i(e, Io);
	let n = k(/* @__PURE__ */ Gt(() => t.signature ? No(t.signature) : null), "ref");
	var r = { ...zi() }, i = vi(), a = Zn(i), o = (e) => {
		var t = Po(), r = z(B(R(t)), !0);
		O(t), V(() => Z(r, J(n))), X(e, t);
	}, s = (e) => {
		X(e, Fo());
	};
	return j(() => Bi(a, (e) => {
		J(n) ? e(o) : e(s, -1);
	}), "if", Lo, 10, 0), X(e, i), N(r);
}
// src/lib/kb/Callout.svelte
Bo[o] = "src/lib/kb/Callout.svelte";
var Ro = Q(/* @__PURE__ */ Y("<aside><!></aside>"), Bo[o], [[7, 0]]), zo = {
	hash: "svelte-17bri61",
	code: "\n  aside.svelte-17bri61 { border-left: 4px solid var(--accent); padding: 0.5rem 1rem; margin: 1rem 0; background: var(--note-bg); }\n  aside.warn.svelte-17bri61 { border-color: var(--warn); background: var(--warn-bg); }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsbG91dC5zdmVsdGUiLCJzb3VyY2VzIjpbIkNhbGxvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB0eXBlIHsgU25pcHBldCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbiAgbGV0IHsga2luZCA9ICdub3RlJywgY2hpbGRyZW4gfTogeyBraW5kPzogJ25vdGUnIHwgJ3dhcm4nOyBjaGlsZHJlbjogU25pcHBldCB9ID0gJHByb3BzKCk7XG48L3NjcmlwdD5cblxuPGFzaWRlIGNsYXNzPXtraW5kfT57QHJlbmRlciBjaGlsZHJlbigpfTwvYXNpZGU+XG5cbjxzdHlsZT5cbiAgYXNpZGUgeyBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWFjY2VudCk7IHBhZGRpbmc6IDAuNXJlbSAxcmVtOyBtYXJnaW46IDFyZW0gMDsgYmFja2dyb3VuZDogdmFyKC0tbm90ZS1iZyk7IH1cbiAgYXNpZGUud2FybiB7IGJvcmRlci1jb2xvcjogdmFyKC0td2Fybik7IGJhY2tncm91bmQ6IHZhcigtLXdhcm4tYmcpOyB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJpZ25vcmVMaXN0IjpbXX0= */"
};
function Bo(e, t) {
	Ri(new.target), M(t, !0, Bo), $i(e, zo);
	let n = Ia(t, "kind", 3, "note");
	var r = { ...zi() }, i = Ro(), a = R(i);
	return j(() => Mi(a, () => t.children), "render", Bo, 7, 20), O(i), V(() => aa(i, 1, na(n()), "svelte-17bri61")), X(e, i), N(r);
}
// src/routes/kb/decisions/0002-triage-by-cause/+page.svx
var Vo = /* @__PURE__ */ t({
	default: () => Xo,
	metadata: () => Ho
});
Xo[o] = "src/routes/kb/decisions/0002-triage-by-cause/+page.svx";
var Ho = {
	layout: "runbook",
	title: "0002 · Split #4471 and triage by cause",
	owner: "Mike Jones and Codex",
	status: "proposed",
	reviewed: "2026-10-28",
	signature: "v1.eyJzdWIiOiI1MzcyIiwiYXVkIjoiY2hhbGxlbmdlOndoYXQtaXQtc2hvd3MiLCJpYXQiOjE3OTMyMjIwODEsImV4cCI6MTc5MzMwODQ4MX0.bvBFoSDH0gAMogLcbHChvgFP1wYLlNKSq-PCSIhpOCg"
}, { layout: Uo, title: Wo, owner: Go, status: Ko, reviewed: qo, signature: Jo } = Ho, Yo = Q(/* @__PURE__ */ Y("<h2>What the export shows</h2> <p>This section preserves the <strong>4 October export snapshot</strong>, before engineering’s\nclosure. The table’s ticket labels describe that historical export; the new\nissue links and current dispositions are recorded below.</p> <p>The <a href=\"/kb/incidents/4471\">original incident page</a> says one issue and one queued fix.\nIts rendered cause table disagrees. The table below reads the report export and\ntenant directory at render time, deduplicates report IDs, and classifies each\nreport by tenant locale, channel, and form version. Intake tags only describe\nwhat intake guessed from the reporter’s browser.</p> <!> <p>The <strong>parser</strong> reads day-first tenant dates month first. The <strong>hint</strong> on booking-v3\nasks people to type month first, but the form interprets the entry day first.\nThese require separate tickets and independently verified fixes. The repository’s\nissue drafts and report-ID membership files record the export snapshot; rerun the\nanalysis and rebuild this page when data changes.</p> <!> <h2>When reports arrived, and when the desk merged them</h2> <!> <p>The two series measure different events. The large merge batch is not a burst of\nnew failures. Reports arrived before that batch and continued afterward, including\nnear the export cutoff. “Known” is a workflow label, not evidence that incoming\nreports stopped or that either failure was fixed. This export is a dated snapshot;\ncheck newer queue data before relying on these counts today.</p> <h2>Proposed replacement for decision 0001</h2> <p>This record proposes superseding <a href=\"/kb/decisions/0001-dedupe-by-subject\">decision 0001</a> and its <a href=\"/kb/triage/dedupe\">subject-based triage instructions</a>. The accepted record\nis preserved as history. Its old review date is another reason to check the current\nbehavior rather than treating the prose as current evidence.</p> <p>Read the report body and resolve the tenant before merging. Compare the tenant’s\nlocale, channel, deployed form, symptoms, and known causal behavior. Merge reports\nwith the same established cause even if subjects differ; keep different causes\nseparate even if subjects match. Missing tenant information means investigate,\nnot automatically merge. Preserve a report’s ID and count it once.</p> <!> <p>The explorer runs the same classification logic as the cause table. It demonstrates\nwhy the old subject rule can both split a single cause and merge different causes.\nClassification supports triage; conflicting symptoms still deserve investigation.</p> <h2>Engineering update · 5 October</h2> <p>The <a href=\"https://hq.mega.dev/challenges/what-it-shows#engineering-update\" rel=\"nofollow\">course’s engineering update</a> says <strong>#4471 closed 05 oct</strong> and gives separate outcomes:</p> <ul><li><a href=\"https://github.com/Mikejonesab12/mega-s01e03-what-it-shows/issues/1\" rel=\"nofollow\">Parser issue</a>: <strong>fixed</strong> — <code>fix(dates): parse dd/mm for eu locales</code>. Close as completed based\non that engineering report.</li> <li><a href=\"https://github.com/Mikejonesab12/mega-s01e03-what-it-shows/issues/2\" rel=\"nofollow\">Hint issue</a>: <strong>won’t fix</strong> — booking-v3 form retired. Close as not planned; retirement is\nthe stated disposition, not a claim that the hint was corrected.</li></ul> <p>These outcomes postdate the export. Keep the historical counts and original\nevidence; closing a ticket does not remove its reports. Engineering’s update is\nthe closure evidence, not a product test performed by this harness. The export’s\nfive exceptional bodies still do not independently establish a third root cause.\nIf those symptoms recur after the fix or retirement, investigate current evidence\nand open a separate issue when a distinct cause is established.</p> <h2>Follow-through</h2> <p>Keep parser and hint dispositions separate. Link future reports to the matching\ncause, retain uncertain cases for investigation, and review this page after the\nnext export or a verified behavior change. Do not infer that every symptom was\nfixed just because the umbrella ticket closed.</p> <!>", 1), Xo[o], [
	[15, 0],
	[
		16,
		0,
		[[16, 30]]
	],
	[
		19,
		0,
		[[19, 7]]
	],
	[
		25,
		0,
		[[25, 7], [25, 77]]
	],
	[36, 0],
	[38, 0],
	[43, 0],
	[
		44,
		0,
		[[44, 36], [47, 8]]
	],
	[50, 0],
	[56, 0],
	[59, 0],
	[
		60,
		0,
		[[60, 7], [64, 5]]
	],
	[
		65,
		0,
		[[
			66,
			0,
			[
				[66, 4],
				[70, 0],
				[70, 25]
			]
		], [
			72,
			0,
			[[72, 4], [76, 0]]
		]]
	],
	[79, 0],
	[85, 0],
	[86, 0]
]);
function Xo(e, t) {
	Ri(new.target);
	let n = Na(t, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	M(t, !1, Xo);
	var r = { ...zi() };
	return j(() => Ua(e, Fa(() => n, () => Ho, {
		children: Ni(Xo, (e, t) => {
			var n = Yo(), r = B(Zn(n), 6);
			j(() => vo(r, { ticket: 4471 }), "component", Xo, 24, 0, { componentTag: "CauseTable" });
			var i = B(r, 4);
			j(() => Bo(i, {
				children: Ni(Xo, (e, t) => {
					Be(), X(e, _i("The five reports footnoted in the table remain in their classifier-assigned group.\nTheir bodies mention one-day shifts, timezone differences, or an invite arriving\nbefore booking. Those symptoms require investigation; the export does not prove\na third cause or prove that a parser fix resolves them."));
				}),
				$$slots: { default: !0 }
			}), "component", Xo, 30, 0, { componentTag: "Callout" });
			var a = B(i, 4);
			j(() => Co(a, { ticket: 4471 }), "component", Xo, 37, 0, { componentTag: "QueueTimeline" });
			var o = B(a, 10);
			j(() => $(o, {}), "component", Xo, 55, 0, { componentTag: "DedupeExplorer" });
			var s = B(o, 16);
			j(() => Lo(s, { get signature() {
				return Jo;
			} }), "component", Xo, 90, 0, { componentTag: "RenderStamp" }), X(e, n);
		}),
		$$slots: { default: !0 }
	})), "component", Xo, 13, 0, { componentTag: "Layout_MDSVEX_DEFAULT" }), N(r);
}
// src/routes/kb/incidents/4471/+page.svx
var Zo = /* @__PURE__ */ t({
	default: () => as,
	metadata: () => Qo
});
as[o] = "src/routes/kb/incidents/4471/+page.svx";
var Qo = {
	layout: "runbook",
	title: "#4471 · dates parse mm/dd in eu locales",
	owner: "support desk",
	status: "known",
	reviewed: "2026-09-30T00:00:00.000Z"
}, { layout: $o, title: es, owner: ts, status: ns, reviewed: rs } = Qo, is = Q(/* @__PURE__ */ Y("<p>Since April, people have told us their bookings land on the wrong day: a month flipped. By\n4 October the desk had <strong>412 reports</strong>.</p> <p><strong>Merged as one issue.</strong> The parser reads dates month first, and our tenants write the day\nfirst. The fix is queued.</p> <!> <h2>What was merged</h2> <!> <h2>Since April</h2> <!> <h2>Lessons</h2> <ul><li>A big ticket is mostly one bug reported many times. Merge early, count once.</li> <li>Write the page while the queue is still in your head.</li></ul>", 1), as[o], [
	[
		13,
		0,
		[[14, 23]]
	],
	[
		15,
		0,
		[[15, 3]]
	],
	[20, 0],
	[22, 0],
	[24, 0],
	[
		25,
		0,
		[[26, 0], [27, 0]]
	]
]);
function as(e, t) {
	Ri(new.target);
	let n = Na(t, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	M(t, !1, as);
	var r = { ...zi() };
	return j(() => Ua(e, Fa(() => n, () => Qo, {
		children: Ni(as, (e, t) => {
			var n = is(), r = B(Zn(n), 4);
			j(() => Bo(r, {
				children: Ni(as, (e, t) => {
					Be(), X(e, _i("Known. One issue, one fix queued."));
				}),
				$$slots: { default: !0 }
			}), "component", as, 17, 0, { componentTag: "Callout" });
			var i = B(r, 4);
			j(() => vo(i, { ticket: 4471 }), "component", as, 21, 0, { componentTag: "CauseTable" });
			var a = B(i, 4);
			j(() => Co(a, { ticket: 4471 }), "component", as, 23, 0, { componentTag: "QueueTimeline" }), Be(4), X(e, n);
		}),
		$$slots: { default: !0 }
	})), "component", as, 11, 0, { componentTag: "Layout_MDSVEX_DEFAULT" }), N(r);
}
// src/routes/kb/triage/dedupe/+page.svx
var os = /* @__PURE__ */ t({
	default: () => ms,
	metadata: () => ss
});
ms[o] = "src/routes/kb/triage/dedupe/+page.svx";
var ss = {
	layout: "runbook",
	title: "Triage: duplicate reports",
	owner: "support desk",
	status: "accepted",
	reviewed: "2024-06-11T00:00:00.000Z"
}, { layout: cs, title: ls, owner: us, status: ds, reviewed: fs } = ss, ps = Q(/* @__PURE__ */ Y("<p>A busy morning brings hundreds of reports about the same thing. We keep one ticket per issue\nand merge every duplicate into it, so engineering sees one thread with a count.</p> <h2>The rule</h2> <p>A report is a duplicate when its <strong>subject line matches</strong> the subject of an open ticket\n(<a href=\"/kb/decisions/0001-dedupe-by-subject\">decision 0001</a>):</p> <ol><li>lowercase the subject and strip punctuation;</li> <li>look for an open ticket with the same subject;</li> <li>found one: merge the report into it. None: open a new ticket.</li></ol> <!> <h2>Try it</h2> <!> <h2>When you are unsure</h2> <p>Merge. Splitting a ticket later is cheaper than two engineers chasing the same bug.</p>", 1), ms[o], [
	[12, 0],
	[14, 0],
	[
		15,
		0,
		[[15, 36], [16, 1]]
	],
	[
		19,
		0,
		[
			[20, 0],
			[21, 0],
			[22, 0]
		]
	],
	[28, 0],
	[30, 0],
	[31, 0]
]);
function ms(e, t) {
	Ri(new.target);
	let n = Na(t, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	M(t, !1, ms);
	var r = { ...zi() };
	return j(() => Ua(e, Fa(() => n, () => ss, {
		children: Ni(ms, (e, t) => {
			var n = ps(), r = B(Zn(n), 8);
			j(() => Bo(r, {
				children: Ni(ms, (e, t) => {
					Be(), X(e, _i("Matching on subject is fast and needs no reading. During an incident that matters more than\nanything else."));
				}),
				$$slots: { default: !0 }
			}), "component", ms, 24, 0, { componentTag: "Callout" });
			var i = B(r, 4);
			j(() => $(i, {}), "component", ms, 29, 0, { componentTag: "DedupeExplorer" }), Be(4), X(e, n);
		}),
		$$slots: { default: !0 }
	})), "component", ms, 10, 0, { componentTag: "Layout_MDSVEX_DEFAULT" }), N(r);
}
// src/lib/kb/KbIndex.svelte
vs[o] = "src/lib/kb/KbIndex.svelte";
var hs = Q(/* @__PURE__ */ Y("<tr><td><a> </a></td><td> </td><td> </td><td> </td></tr>"), vs[o], [[
	16,
	6,
	[
		[
			17,
			8,
			[[17, 12]]
		],
		[18, 8],
		[19, 8],
		[20, 8]
	]
]]), gs = Q(/* @__PURE__ */ Y("<table><thead><tr><th>page</th><th>owner</th><th>status</th><th>reviewed</th></tr></thead><tbody></tbody></table>"), vs[o], [[
	12,
	0,
	[[
		13,
		2,
		[[
			13,
			9,
			[
				[13, 13],
				[13, 26],
				[13, 40],
				[13, 55]
			]
		]]
	], [14, 2]]
]]), _s = {
	hash: "svelte-tbc1ha",
	code: "\n  .stale.svelte-tbc1ha { color: var(--warn); font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2JJbmRleC5zdmVsdGUiLCJzb3VyY2VzIjpbIktiSW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGRheXNTaW5jZSwgaXNvRGF5LCBTVEFMRV9BRlRFUl9EQVlTLCB0eXBlIERheSB9IGZyb20gJyNsaWIva2Ivc3RhbGVuZXNzJztcblxuICB0eXBlIE1ldGEgPSB7IHRpdGxlOiBzdHJpbmc7IG93bmVyOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nOyByZXZpZXdlZDogRGF5IH07XG4gIGNvbnN0IHBhZ2VzID0gaW1wb3J0Lm1ldGEuZ2xvYjx7IG1ldGFkYXRhOiBNZXRhIH0+KCcvc3JjL3JvdXRlcy9rYi8qLyoqLytwYWdlLnN2eCcsIHsgZWFnZXI6IHRydWUgfSk7XG5cbiAgY29uc3Qgcm93cyA9IE9iamVjdC5lbnRyaWVzKHBhZ2VzKVxuICAgIC5tYXAoKFtwYXRoLCBtb2RdKSA9PiAoeyBocmVmOiBwYXRoLnJlcGxhY2UoJy9zcmMvcm91dGVzJywgJycpLnJlcGxhY2UoJy8rcGFnZS5zdngnLCAnJyksIC4uLm1vZC5tZXRhZGF0YSB9KSlcbiAgICAuc29ydCgoeCwgeSkgPT4geC5ocmVmLmxvY2FsZUNvbXBhcmUoeS5ocmVmKSk7XG48L3NjcmlwdD5cblxuPHRhYmxlPlxuICA8dGhlYWQ+PHRyPjx0aD5wYWdlPC90aD48dGg+b3duZXI8L3RoPjx0aD5zdGF0dXM8L3RoPjx0aD5yZXZpZXdlZDwvdGg+PC90cj48L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgeyNlYWNoIHJvd3MgYXMgciAoci5ocmVmKX1cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjxhIGhyZWY9e3IuaHJlZn0+e3IudGl0bGV9PC9hPjwvdGQ+XG4gICAgICAgIDx0ZD57ci5vd25lcn08L3RkPlxuICAgICAgICA8dGQ+e3Iuc3RhdHVzfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzczpzdGFsZT17ZGF5c1NpbmNlKHIucmV2aWV3ZWQpID4gU1RBTEVfQUZURVJfREFZU30+e2lzb0RheShyLnJldmlld2VkKX08L3RkPlxuICAgICAgPC90cj5cbiAgICB7L2VhY2h9XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuXG48c3R5bGU+XG4gIC5zdGFsZSB7IGNvbG9yOiB2YXIoLS13YXJuKTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiaWdub3JlTGlzdCI6W119 */"
};
function vs(e, t) {
	Ri(new.target), M(t, !1, vs), $i(e, _s);
	let n = Object.entries(/* @__PURE__ */ Object.assign({
		"/src/routes/kb/decisions/0001-dedupe-by-subject/+page.svx": Wa,
		"/src/routes/kb/decisions/0002-triage-by-cause/+page.svx": Vo,
		"/src/routes/kb/incidents/4471/+page.svx": Zo,
		"/src/routes/kb/triage/dedupe/+page.svx": os
	})).map(([e, t]) => ({
		href: e.replace("/src/routes", "").replace("/+page.svx", ""),
		...t.metadata
	})).sort((e, t) => e.href.localeCompare(t.href));
	var r = { ...zi() };
	Oa();
	var i = gs(), a = B(R(i));
	return j(() => Gi(a, 5, () => n, (e) => e.href, (e, t) => {
		var n = hs(), r = R(n), i = R(r), a = z(i, !0);
		O(r);
		var o = B(r), s = z(o, !0), c = B(o), l = z(c, !0), u = B(c);
		let d;
		var f = z(u, !0);
		O(n), V((e, n) => {
			_a(i, "href", J(t).href), Z(a, J(t).title), Z(s, J(t).owner), Z(l, J(t).status), d = aa(u, 1, "svelte-tbc1ha", null, d, { stale: e }), Z(f, n);
		}, [() => za(J(t).reviewed) > 180, () => Ra(J(t).reviewed)]), X(e, n);
	}), "each", vs, 15, 4), O(a), O(i), X(e, i), N(r);
}
// src/routes/kb/+page.svx
var ys = /* @__PURE__ */ t({
	default: () => Ds,
	metadata: () => bs
});
Ds[o] = "src/routes/kb/+page.svx";
var bs = {
	layout: "runbook",
	title: "Support knowledge base",
	owner: "support desk",
	status: "living",
	reviewed: "2026-09-28T00:00:00.000Z"
}, { layout: xs, title: Ss, owner: Cs, status: ws, reviewed: Ts } = bs, Es = Q(/* @__PURE__ */ Y("<p>What the support desk knows, kept next to the code that knows it. One desk, every product: <code>sched-prod</code> (calendar invites for about 300k people) and the rest. When something breaks, the reports land here first.</p> <p>Start with <a href=\"/kb/triage/dedupe\">triage</a> if you are new on the desk.</p> <h2>Pages</h2> <!> <h2>Writing a page</h2> <p>Keep the words here and the logic in <code>src/lib</code>. A number that can be computed should be\ncomputed by a component, not typed into a paragraph.</p>", 1), Ds[o], [
	[
		11,
		0,
		[[12, 0]]
	],
	[
		13,
		0,
		[[13, 14]]
	],
	[14, 0],
	[16, 0],
	[
		17,
		0,
		[[17, 40]]
	]
]);
function Ds(e, t) {
	Ri(new.target);
	let n = Na(t, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	M(t, !1, Ds);
	var r = { ...zi() };
	return j(() => Ua(e, Fa(() => n, () => bs, {
		children: Ni(Ds, (e, t) => {
			var n = Es(), r = B(Zn(n), 6);
			j(() => vs(r, {}), "component", Ds, 15, 0, { componentTag: "KbIndex" }), Be(4), X(e, n);
		}),
		$$slots: { default: !0 }
	})), "component", Ds, 9, 0, { componentTag: "Layout_MDSVEX_DEFAULT" }), N(r);
}
// scripts/client.js
var Os = (/* @__PURE__ */ Object.assign({
	"/src/routes/kb/+page.svx": ys,
	"/src/routes/kb/decisions/0001-dedupe-by-subject/+page.svx": Wa,
	"/src/routes/kb/decisions/0002-triage-by-cause/+page.svx": Vo,
	"/src/routes/kb/incidents/4471/+page.svx": Zo,
	"/src/routes/kb/triage/dedupe/+page.svx": os
}))[`/src/routes${window.location.pathname.replace(/\/$/, "")}/+page.svx`];
Os && Ei(Os.default, { target: document.body });
