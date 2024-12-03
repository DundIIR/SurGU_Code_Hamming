function q_(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n]
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const o in r)
				if (o !== 'default' && !(o in e)) {
					const i = Object.getOwnPropertyDescriptor(r, o)
					i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
	new MutationObserver(o => {
		for (const i of o)
			if (i.type === 'childList') for (const a of i.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(o) {
		const i = {}
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === 'use-credentials'
				? (i.credentials = 'include')
				: o.crossOrigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		)
	}
	function r(o) {
		if (o.ep) return
		o.ep = !0
		const i = n(o)
		fetch(o.href, i)
	}
})()
var Us =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {}
function rp(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var M1 = { exports: {} },
	qu = {},
	I1 = { exports: {} },
	U = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fs = Symbol.for('react.element'),
	Y_ = Symbol.for('react.portal'),
	X_ = Symbol.for('react.fragment'),
	Q_ = Symbol.for('react.strict_mode'),
	Z_ = Symbol.for('react.profiler'),
	J_ = Symbol.for('react.provider'),
	e2 = Symbol.for('react.context'),
	t2 = Symbol.for('react.forward_ref'),
	n2 = Symbol.for('react.suspense'),
	r2 = Symbol.for('react.memo'),
	o2 = Symbol.for('react.lazy'),
	Rv = Symbol.iterator
function i2(e) {
	return e === null || typeof e != 'object' ? null : ((e = (Rv && e[Rv]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var F1 = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	j1 = Object.assign,
	z1 = {}
function wi(e, t, n) {
	;(this.props = e), (this.context = t), (this.refs = z1), (this.updater = n || F1)
}
wi.prototype.isReactComponent = {}
wi.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
		)
	this.updater.enqueueSetState(this, e, t, 'setState')
}
wi.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function L1() {}
L1.prototype = wi.prototype
function op(e, t, n) {
	;(this.props = e), (this.context = t), (this.refs = z1), (this.updater = n || F1)
}
var ip = (op.prototype = new L1())
ip.constructor = op
j1(ip, wi.prototype)
ip.isPureReactComponent = !0
var Av = Array.isArray,
	D1 = Object.prototype.hasOwnProperty,
	ap = { current: null },
	O1 = { key: !0, ref: !0, __self: !0, __source: !0 }
function B1(e, t, n) {
	var r,
		o = {},
		i = null,
		a = null
	if (t != null)
		for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = '' + t.key), t))
			D1.call(t, r) && !O1.hasOwnProperty(r) && (o[r] = t[r])
	var s = arguments.length - 2
	if (s === 1) o.children = n
	else if (1 < s) {
		for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
		o.children = l
	}
	if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r])
	return { $$typeof: fs, type: e, key: i, ref: a, props: o, _owner: ap.current }
}
function a2(e, t) {
	return { $$typeof: fs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function sp(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === fs
}
function s2(e) {
	var t = { '=': '=0', ':': '=2' }
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n]
		})
	)
}
var Mv = /\/+/g
function rd(e, t) {
	return typeof e == 'object' && e !== null && e.key != null ? s2('' + e.key) : t.toString(36)
}
function Pl(e, t, n, r, o) {
	var i = typeof e
	;(i === 'undefined' || i === 'boolean') && (e = null)
	var a = !1
	if (e === null) a = !0
	else
		switch (i) {
			case 'string':
			case 'number':
				a = !0
				break
			case 'object':
				switch (e.$$typeof) {
					case fs:
					case Y_:
						a = !0
				}
		}
	if (a)
		return (
			(a = e),
			(o = o(a)),
			(e = r === '' ? '.' + rd(a, 0) : r),
			Av(o)
				? ((n = ''),
				  e != null && (n = e.replace(Mv, '$&/') + '/'),
				  Pl(o, t, n, '', function (u) {
						return u
				  }))
				: o != null &&
				  (sp(o) && (o = a2(o, n + (!o.key || (a && a.key === o.key) ? '' : ('' + o.key).replace(Mv, '$&/') + '/') + e)),
				  t.push(o)),
			1
		)
	if (((a = 0), (r = r === '' ? '.' : r + ':'), Av(e)))
		for (var s = 0; s < e.length; s++) {
			i = e[s]
			var l = r + rd(i, s)
			a += Pl(i, t, n, l, o)
		}
	else if (((l = i2(e)), typeof l == 'function'))
		for (e = l.call(e), s = 0; !(i = e.next()).done; ) (i = i.value), (l = r + rd(i, s++)), (a += Pl(i, t, n, l, o))
	else if (i === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
					'). If you meant to render a collection of children, use an array instead.',
			))
		)
	return a
}
function Hs(e, t, n) {
	if (e == null) return e
	var r = [],
		o = 0
	return (
		Pl(e, r, '', '', function (i) {
			return t.call(n, i, o++)
		}),
		r
	)
}
function l2(e) {
	if (e._status === -1) {
		var t = e._result
		;(t = t()),
			t.then(
				function (n) {
					;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
				},
				function (n) {
					;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t))
	}
	if (e._status === 1) return e._result.default
	throw e._result
}
var ft = { current: null },
	Tl = { transition: null },
	u2 = { ReactCurrentDispatcher: ft, ReactCurrentBatchConfig: Tl, ReactCurrentOwner: ap }
function N1() {
	throw Error('act(...) is not supported in production builds of React.')
}
U.Children = {
	map: Hs,
	forEach: function (e, t, n) {
		Hs(
			e,
			function () {
				t.apply(this, arguments)
			},
			n,
		)
	},
	count: function (e) {
		var t = 0
		return (
			Hs(e, function () {
				t++
			}),
			t
		)
	},
	toArray: function (e) {
		return (
			Hs(e, function (t) {
				return t
			}) || []
		)
	},
	only: function (e) {
		if (!sp(e)) throw Error('React.Children.only expected to receive a single React element child.')
		return e
	},
}
U.Component = wi
U.Fragment = X_
U.Profiler = Z_
U.PureComponent = op
U.StrictMode = Q_
U.Suspense = n2
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u2
U.act = N1
U.cloneElement = function (e, t, n) {
	if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
	var r = j1({}, e.props),
		o = e.key,
		i = e.ref,
		a = e._owner
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (a = ap.current)), t.key !== void 0 && (o = '' + t.key), e.type && e.type.defaultProps)
		)
			var s = e.type.defaultProps
		for (l in t) D1.call(t, l) && !O1.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
	}
	var l = arguments.length - 2
	if (l === 1) r.children = n
	else if (1 < l) {
		s = Array(l)
		for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
		r.children = s
	}
	return { $$typeof: fs, type: e.type, key: o, ref: i, props: r, _owner: a }
}
U.createContext = function (e) {
	return (
		(e = {
			$$typeof: e2,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: J_, _context: e }),
		(e.Consumer = e)
	)
}
U.createElement = B1
U.createFactory = function (e) {
	var t = B1.bind(null, e)
	return (t.type = e), t
}
U.createRef = function () {
	return { current: null }
}
U.forwardRef = function (e) {
	return { $$typeof: t2, render: e }
}
U.isValidElement = sp
U.lazy = function (e) {
	return { $$typeof: o2, _payload: { _status: -1, _result: e }, _init: l2 }
}
U.memo = function (e, t) {
	return { $$typeof: r2, type: e, compare: t === void 0 ? null : t }
}
U.startTransition = function (e) {
	var t = Tl.transition
	Tl.transition = {}
	try {
		e()
	} finally {
		Tl.transition = t
	}
}
U.unstable_act = N1
U.useCallback = function (e, t) {
	return ft.current.useCallback(e, t)
}
U.useContext = function (e) {
	return ft.current.useContext(e)
}
U.useDebugValue = function () {}
U.useDeferredValue = function (e) {
	return ft.current.useDeferredValue(e)
}
U.useEffect = function (e, t) {
	return ft.current.useEffect(e, t)
}
U.useId = function () {
	return ft.current.useId()
}
U.useImperativeHandle = function (e, t, n) {
	return ft.current.useImperativeHandle(e, t, n)
}
U.useInsertionEffect = function (e, t) {
	return ft.current.useInsertionEffect(e, t)
}
U.useLayoutEffect = function (e, t) {
	return ft.current.useLayoutEffect(e, t)
}
U.useMemo = function (e, t) {
	return ft.current.useMemo(e, t)
}
U.useReducer = function (e, t, n) {
	return ft.current.useReducer(e, t, n)
}
U.useRef = function (e) {
	return ft.current.useRef(e)
}
U.useState = function (e) {
	return ft.current.useState(e)
}
U.useSyncExternalStore = function (e, t, n) {
	return ft.current.useSyncExternalStore(e, t, n)
}
U.useTransition = function () {
	return ft.current.useTransition()
}
U.version = '18.3.1'
I1.exports = U
var b = I1.exports
const ru = rp(b),
	yf = q_({ __proto__: null, default: ru }, [b])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c2 = b,
	d2 = Symbol.for('react.element'),
	f2 = Symbol.for('react.fragment'),
	h2 = Object.prototype.hasOwnProperty,
	p2 = c2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	m2 = { key: !0, ref: !0, __self: !0, __source: !0 }
function V1(e, t, n) {
	var r,
		o = {},
		i = null,
		a = null
	n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (a = t.ref)
	for (r in t) h2.call(t, r) && !m2.hasOwnProperty(r) && (o[r] = t[r])
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
	return { $$typeof: d2, type: e, key: i, ref: a, props: o, _owner: p2.current }
}
qu.Fragment = f2
qu.jsx = V1
qu.jsxs = V1
M1.exports = qu
var S = M1.exports,
	W1 = { exports: {} },
	At = {},
	U1 = { exports: {} },
	H1 = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
	function t(I, O) {
		var N = I.length
		I.push(O)
		e: for (; 0 < N; ) {
			var oe = (N - 1) >>> 1,
				ie = I[oe]
			if (0 < o(ie, O)) (I[oe] = O), (I[N] = ie), (N = oe)
			else break e
		}
	}
	function n(I) {
		return I.length === 0 ? null : I[0]
	}
	function r(I) {
		if (I.length === 0) return null
		var O = I[0],
			N = I.pop()
		if (N !== O) {
			I[0] = N
			e: for (var oe = 0, ie = I.length, H = ie >>> 1; oe < H; ) {
				var ce = 2 * (oe + 1) - 1,
					on = I[ce],
					Be = ce + 1,
					Ft = I[Be]
				if (0 > o(on, N))
					Be < ie && 0 > o(Ft, on) ? ((I[oe] = Ft), (I[Be] = N), (oe = Be)) : ((I[oe] = on), (I[ce] = N), (oe = ce))
				else if (Be < ie && 0 > o(Ft, N)) (I[oe] = Ft), (I[Be] = N), (oe = Be)
				else break e
			}
		}
		return O
	}
	function o(I, O) {
		var N = I.sortIndex - O.sortIndex
		return N !== 0 ? N : I.id - O.id
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance
		e.unstable_now = function () {
			return i.now()
		}
	} else {
		var a = Date,
			s = a.now()
		e.unstable_now = function () {
			return a.now() - s
		}
	}
	var l = [],
		u = [],
		d = 1,
		c = null,
		f = 3,
		m = !1,
		y = !1,
		g = !1,
		x = typeof setTimeout == 'function' ? setTimeout : null,
		p = typeof clearTimeout == 'function' ? clearTimeout : null,
		h = typeof setImmediate < 'u' ? setImmediate : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function v(I) {
		for (var O = n(u); O !== null; ) {
			if (O.callback === null) r(u)
			else if (O.startTime <= I) r(u), (O.sortIndex = O.expirationTime), t(l, O)
			else break
			O = n(u)
		}
	}
	function k(I) {
		if (((g = !1), v(I), !y))
			if (n(l) !== null) (y = !0), ke(C)
			else {
				var O = n(u)
				O !== null && Oe(k, O.startTime - I)
			}
	}
	function C(I, O) {
		;(y = !1), g && ((g = !1), p(R), (R = -1)), (m = !0)
		var N = f
		try {
			for (v(O), c = n(l); c !== null && (!(c.expirationTime > O) || (I && !Y())); ) {
				var oe = c.callback
				if (typeof oe == 'function') {
					;(c.callback = null), (f = c.priorityLevel)
					var ie = oe(c.expirationTime <= O)
					;(O = e.unstable_now()), typeof ie == 'function' ? (c.callback = ie) : c === n(l) && r(l), v(O)
				} else r(l)
				c = n(l)
			}
			if (c !== null) var H = !0
			else {
				var ce = n(u)
				ce !== null && Oe(k, ce.startTime - O), (H = !1)
			}
			return H
		} finally {
			;(c = null), (f = N), (m = !1)
		}
	}
	var E = !1,
		T = null,
		R = -1,
		M = 5,
		F = -1
	function Y() {
		return !(e.unstable_now() - F < M)
	}
	function we() {
		if (T !== null) {
			var I = e.unstable_now()
			F = I
			var O = !0
			try {
				O = T(!0, I)
			} finally {
				O ? He() : ((E = !1), (T = null))
			}
		} else E = !1
	}
	var He
	if (typeof h == 'function')
		He = function () {
			h(we)
		}
	else if (typeof MessageChannel < 'u') {
		var at = new MessageChannel(),
			pe = at.port2
		;(at.port1.onmessage = we),
			(He = function () {
				pe.postMessage(null)
			})
	} else
		He = function () {
			x(we, 0)
		}
	function ke(I) {
		;(T = I), E || ((E = !0), He())
	}
	function Oe(I, O) {
		R = x(function () {
			I(e.unstable_now())
		}, O)
	}
	;(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (I) {
			I.callback = null
		}),
		(e.unstable_continueExecution = function () {
			y || m || ((y = !0), ke(C))
		}),
		(e.unstable_forceFrameRate = function (I) {
			0 > I || 125 < I
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
				  )
				: (M = 0 < I ? Math.floor(1e3 / I) : 5)
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return f
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(l)
		}),
		(e.unstable_next = function (I) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var O = 3
					break
				default:
					O = f
			}
			var N = f
			f = O
			try {
				return I()
			} finally {
				f = N
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (I, O) {
			switch (I) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					I = 3
			}
			var N = f
			f = I
			try {
				return O()
			} finally {
				f = N
			}
		}),
		(e.unstable_scheduleCallback = function (I, O, N) {
			var oe = e.unstable_now()
			switch (
				(typeof N == 'object' && N !== null ? ((N = N.delay), (N = typeof N == 'number' && 0 < N ? oe + N : oe)) : (N = oe), I)
			) {
				case 1:
					var ie = -1
					break
				case 2:
					ie = 250
					break
				case 5:
					ie = 1073741823
					break
				case 4:
					ie = 1e4
					break
				default:
					ie = 5e3
			}
			return (
				(ie = N + ie),
				(I = { id: d++, callback: O, priorityLevel: I, startTime: N, expirationTime: ie, sortIndex: -1 }),
				N > oe
					? ((I.sortIndex = N), t(u, I), n(l) === null && I === n(u) && (g ? (p(R), (R = -1)) : (g = !0), Oe(k, N - oe)))
					: ((I.sortIndex = ie), t(l, I), y || m || ((y = !0), ke(C))),
				I
			)
		}),
		(e.unstable_shouldYield = Y),
		(e.unstable_wrapCallback = function (I) {
			var O = f
			return function () {
				var N = f
				f = O
				try {
					return I.apply(this, arguments)
				} finally {
					f = N
				}
			}
		})
})(H1)
U1.exports = H1
var v2 = U1.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g2 = b,
	$t = v2
function A(e) {
	for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
		t += '&args[]=' + encodeURIComponent(arguments[n])
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	)
}
var K1 = new Set(),
	Ra = {}
function fo(e, t) {
	li(e, t), li(e + 'Capture', t)
}
function li(e, t) {
	for (Ra[e] = t, e = 0; e < t.length; e++) K1.add(t[e])
}
var Wn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
	bf = Object.prototype.hasOwnProperty,
	y2 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Iv = {},
	Fv = {}
function b2(e) {
	return bf.call(Fv, e) ? !0 : bf.call(Iv, e) ? !1 : y2.test(e) ? (Fv[e] = !0) : ((Iv[e] = !0), !1)
}
function x2(e, t, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0
		case 'boolean':
			return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
		default:
			return !1
	}
}
function S2(e, t, n, r) {
	if (t === null || typeof t > 'u' || x2(e, t, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t
			case 4:
				return t === !1
			case 5:
				return isNaN(t)
			case 6:
				return isNaN(t) || 1 > t
		}
	return !1
}
function ht(e, t, n, r, o, i, a) {
	;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = o),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = a)
}
var Qe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		Qe[e] = new ht(e, 0, !1, e, null, !1, !1)
	})
;[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0]
	Qe[t] = new ht(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	Qe[e] = new ht(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
	Qe[e] = new ht(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		Qe[e] = new ht(e, 3, !1, e.toLowerCase(), null, !1, !1)
	})
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	Qe[e] = new ht(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
	Qe[e] = new ht(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
	Qe[e] = new ht(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
	Qe[e] = new ht(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var lp = /[\-:]([a-z])/g
function up(e) {
	return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(lp, up)
		Qe[t] = new ht(t, 1, !1, e, null, !1, !1)
	})
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
	var t = e.replace(lp, up)
	Qe[t] = new ht(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(lp, up)
	Qe[t] = new ht(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
	Qe[e] = new ht(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Qe.xlinkHref = new ht('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Qe[e] = new ht(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function cp(e, t, n, r) {
	var o = Qe.hasOwnProperty(t) ? Qe[t] : null
	;(o !== null ? o.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
		(S2(t, n, o, r) && (n = null),
		r || o === null
			? b2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: o.mustUseProperty
			? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
			: ((t = o.attributeName),
			  (r = o.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((o = o.type),
					  (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Yn = g2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Ks = Symbol.for('react.element'),
	_o = Symbol.for('react.portal'),
	Po = Symbol.for('react.fragment'),
	dp = Symbol.for('react.strict_mode'),
	xf = Symbol.for('react.profiler'),
	G1 = Symbol.for('react.provider'),
	q1 = Symbol.for('react.context'),
	fp = Symbol.for('react.forward_ref'),
	Sf = Symbol.for('react.suspense'),
	wf = Symbol.for('react.suspense_list'),
	hp = Symbol.for('react.memo'),
	nr = Symbol.for('react.lazy'),
	Y1 = Symbol.for('react.offscreen'),
	jv = Symbol.iterator
function Li(e) {
	return e === null || typeof e != 'object' ? null : ((e = (jv && e[jv]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Te = Object.assign,
	od
function Ji(e) {
	if (od === void 0)
		try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/)
			od = (t && t[1]) || ''
		}
	return (
		`
` +
		od +
		e
	)
}
var id = !1
function ad(e, t) {
	if (!e || id) return ''
	id = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (t)
			if (
				((t = function () {
					throw Error()
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error()
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (u) {
					r = u
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			e()
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var o = u.stack.split(`
`),
					i = r.stack.split(`
`),
					a = o.length - 1,
					s = i.length - 1;
				1 <= a && 0 <= s && o[a] !== i[s];

			)
				s--
			for (; 1 <= a && 0 <= s; a--, s--)
				if (o[a] !== i[s]) {
					if (a !== 1 || s !== 1)
						do
							if ((a--, s--, 0 > s || o[a] !== i[s])) {
								var l =
									`
` + o[a].replace(' at new ', ' at ')
								return e.displayName && l.includes('<anonymous>') && (l = l.replace('<anonymous>', e.displayName)), l
							}
						while (1 <= a && 0 <= s)
					break
				}
		}
	} finally {
		;(id = !1), (Error.prepareStackTrace = n)
	}
	return (e = e ? e.displayName || e.name : '') ? Ji(e) : ''
}
function w2(e) {
	switch (e.tag) {
		case 5:
			return Ji(e.type)
		case 16:
			return Ji('Lazy')
		case 13:
			return Ji('Suspense')
		case 19:
			return Ji('SuspenseList')
		case 0:
		case 2:
		case 15:
			return (e = ad(e.type, !1)), e
		case 11:
			return (e = ad(e.type.render, !1)), e
		case 1:
			return (e = ad(e.type, !0)), e
		default:
			return ''
	}
}
function kf(e) {
	if (e == null) return null
	if (typeof e == 'function') return e.displayName || e.name || null
	if (typeof e == 'string') return e
	switch (e) {
		case Po:
			return 'Fragment'
		case _o:
			return 'Portal'
		case xf:
			return 'Profiler'
		case dp:
			return 'StrictMode'
		case Sf:
			return 'Suspense'
		case wf:
			return 'SuspenseList'
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case q1:
				return (e.displayName || 'Context') + '.Consumer'
			case G1:
				return (e._context.displayName || 'Context') + '.Provider'
			case fp:
				var t = e.render
				return (
					(e = e.displayName),
					e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				)
			case hp:
				return (t = e.displayName || null), t !== null ? t : kf(e.type) || 'Memo'
			case nr:
				;(t = e._payload), (e = e._init)
				try {
					return kf(e(t))
				} catch {}
		}
	return null
}
function k2(e) {
	var t = e.type
	switch (e.tag) {
		case 24:
			return 'Cache'
		case 9:
			return (t.displayName || 'Context') + '.Consumer'
		case 10:
			return (t._context.displayName || 'Context') + '.Provider'
		case 18:
			return 'DehydratedFragment'
		case 11:
			return (
				(e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			)
		case 7:
			return 'Fragment'
		case 5:
			return t
		case 4:
			return 'Portal'
		case 3:
			return 'Root'
		case 6:
			return 'Text'
		case 16:
			return kf(t)
		case 8:
			return t === dp ? 'StrictMode' : 'Mode'
		case 22:
			return 'Offscreen'
		case 12:
			return 'Profiler'
		case 21:
			return 'Scope'
		case 13:
			return 'Suspense'
		case 19:
			return 'SuspenseList'
		case 25:
			return 'TracingMarker'
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null
			if (typeof t == 'string') return t
	}
	return null
}
function br(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e
		case 'object':
			return e
		default:
			return ''
	}
}
function X1(e) {
	var t = e.type
	return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function C2(e) {
	var t = X1(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t]
	if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
		var o = n.get,
			i = n.set
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this)
				},
				set: function (a) {
					;(r = '' + a), i.call(this, a)
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (a) {
					r = '' + a
				},
				stopTracking: function () {
					;(e._valueTracker = null), delete e[t]
				},
			}
		)
	}
}
function Gs(e) {
	e._valueTracker || (e._valueTracker = C2(e))
}
function Q1(e) {
	if (!e) return !1
	var t = e._valueTracker
	if (!t) return !0
	var n = t.getValue(),
		r = ''
	return e && (r = X1(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1
}
function ou(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}
function Cf(e, t) {
	var n = t.checked
	return Te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked })
}
function zv(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked
	;(n = br(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
		})
}
function Z1(e, t) {
	;(t = t.checked), t != null && cp(e, 'checked', t, !1)
}
function _f(e, t) {
	Z1(e, t)
	var n = br(t.value),
		r = t.type
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n)
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value')
		return
	}
	t.hasOwnProperty('value') ? Pf(e, t.type, n) : t.hasOwnProperty('defaultValue') && Pf(e, t.type, br(t.defaultValue)),
		t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Lv(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type
		if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
		;(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
	}
	;(n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n)
}
function Pf(e, t, n) {
	;(t !== 'number' || ou(e.ownerDocument) !== e) &&
		(n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ea = Array.isArray
function qo(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {}
		for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
		for (n = 0; n < e.length; n++)
			(o = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
	} else {
		for (n = '' + br(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
				return
			}
			t !== null || e[o].disabled || (t = e[o])
		}
		t !== null && (t.selected = !0)
	}
}
function Tf(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(A(91))
	return Te({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
}
function Dv(e, t) {
	var n = t.value
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(A(92))
			if (ea(n)) {
				if (1 < n.length) throw Error(A(93))
				n = n[0]
			}
			t = n
		}
		t == null && (t = ''), (n = t)
	}
	e._wrapperState = { initialValue: br(n) }
}
function J1(e, t) {
	var n = br(t.value),
		r = br(t.defaultValue)
	n != null &&
		((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r)
}
function Ov(e) {
	var t = e.textContent
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function eb(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg'
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML'
		default:
			return 'http://www.w3.org/1999/xhtml'
	}
}
function Ef(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? eb(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e
}
var qs,
	tb = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, o)
					})
			  }
			: e
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
		else {
			for (
				qs = qs || document.createElement('div'), qs.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = qs.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild)
			for (; t.firstChild; ) e.appendChild(t.firstChild)
		}
	})
function Aa(e, t) {
	if (t) {
		var n = e.firstChild
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t
			return
		}
	}
	e.textContent = t
}
var da = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	_2 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(da).forEach(function (e) {
	_2.forEach(function (t) {
		;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (da[t] = da[e])
	})
})
function nb(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (da.hasOwnProperty(e) && da[e])
		? ('' + t).trim()
		: t + 'px'
}
function rb(e, t) {
	e = e.style
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				o = nb(n, t[n], r)
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
		}
}
var P2 = Te(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
)
function $f(e, t) {
	if (t) {
		if (P2[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e))
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(A(60))
			if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(A(61))
		}
		if (t.style != null && typeof t.style != 'object') throw Error(A(62))
	}
}
function Rf(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string'
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1
		default:
			return !0
	}
}
var Af = null
function pp(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	)
}
var Mf = null,
	Yo = null,
	Xo = null
function Bv(e) {
	if ((e = ms(e))) {
		if (typeof Mf != 'function') throw Error(A(280))
		var t = e.stateNode
		t && ((t = Ju(t)), Mf(e.stateNode, e.type, t))
	}
}
function ob(e) {
	Yo ? (Xo ? Xo.push(e) : (Xo = [e])) : (Yo = e)
}
function ib() {
	if (Yo) {
		var e = Yo,
			t = Xo
		if (((Xo = Yo = null), Bv(e), t)) for (e = 0; e < t.length; e++) Bv(t[e])
	}
}
function ab(e, t) {
	return e(t)
}
function sb() {}
var sd = !1
function lb(e, t, n) {
	if (sd) return e(t, n)
	sd = !0
	try {
		return ab(e, t, n)
	} finally {
		;(sd = !1), (Yo !== null || Xo !== null) && (sb(), ib())
	}
}
function Ma(e, t) {
	var n = e.stateNode
	if (n === null) return null
	var r = Ju(n)
	if (r === null) return null
	n = r[t]
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			;(r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
				(e = !r)
			break e
		default:
			e = !1
	}
	if (e) return null
	if (n && typeof n != 'function') throw Error(A(231, t, typeof n))
	return n
}
var If = !1
if (Wn)
	try {
		var Di = {}
		Object.defineProperty(Di, 'passive', {
			get: function () {
				If = !0
			},
		}),
			window.addEventListener('test', Di, Di),
			window.removeEventListener('test', Di, Di)
	} catch {
		If = !1
	}
function T2(e, t, n, r, o, i, a, s, l) {
	var u = Array.prototype.slice.call(arguments, 3)
	try {
		t.apply(n, u)
	} catch (d) {
		this.onError(d)
	}
}
var fa = !1,
	iu = null,
	au = !1,
	Ff = null,
	E2 = {
		onError: function (e) {
			;(fa = !0), (iu = e)
		},
	}
function $2(e, t, n, r, o, i, a, s, l) {
	;(fa = !1), (iu = null), T2.apply(E2, arguments)
}
function R2(e, t, n, r, o, i, a, s, l) {
	if (($2.apply(this, arguments), fa)) {
		if (fa) {
			var u = iu
			;(fa = !1), (iu = null)
		} else throw Error(A(198))
		au || ((au = !0), (Ff = u))
	}
}
function ho(e) {
	var t = e,
		n = e
	if (e.alternate) for (; t.return; ) t = t.return
	else {
		e = t
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
		while (e)
	}
	return t.tag === 3 ? n : null
}
function ub(e) {
	if (e.tag === 13) {
		var t = e.memoizedState
		if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
	}
	return null
}
function Nv(e) {
	if (ho(e) !== e) throw Error(A(188))
}
function A2(e) {
	var t = e.alternate
	if (!t) {
		if (((t = ho(e)), t === null)) throw Error(A(188))
		return t !== e ? null : e
	}
	for (var n = e, r = t; ; ) {
		var o = n.return
		if (o === null) break
		var i = o.alternate
		if (i === null) {
			if (((r = o.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (o.child === i.child) {
			for (i = o.child; i; ) {
				if (i === n) return Nv(o), e
				if (i === r) return Nv(o), t
				i = i.sibling
			}
			throw Error(A(188))
		}
		if (n.return !== r.return) (n = o), (r = i)
		else {
			for (var a = !1, s = o.child; s; ) {
				if (s === n) {
					;(a = !0), (n = o), (r = i)
					break
				}
				if (s === r) {
					;(a = !0), (r = o), (n = i)
					break
				}
				s = s.sibling
			}
			if (!a) {
				for (s = i.child; s; ) {
					if (s === n) {
						;(a = !0), (n = i), (r = o)
						break
					}
					if (s === r) {
						;(a = !0), (r = i), (n = o)
						break
					}
					s = s.sibling
				}
				if (!a) throw Error(A(189))
			}
		}
		if (n.alternate !== r) throw Error(A(190))
	}
	if (n.tag !== 3) throw Error(A(188))
	return n.stateNode.current === n ? e : t
}
function cb(e) {
	return (e = A2(e)), e !== null ? db(e) : null
}
function db(e) {
	if (e.tag === 5 || e.tag === 6) return e
	for (e = e.child; e !== null; ) {
		var t = db(e)
		if (t !== null) return t
		e = e.sibling
	}
	return null
}
var fb = $t.unstable_scheduleCallback,
	Vv = $t.unstable_cancelCallback,
	M2 = $t.unstable_shouldYield,
	I2 = $t.unstable_requestPaint,
	Ae = $t.unstable_now,
	F2 = $t.unstable_getCurrentPriorityLevel,
	mp = $t.unstable_ImmediatePriority,
	hb = $t.unstable_UserBlockingPriority,
	su = $t.unstable_NormalPriority,
	j2 = $t.unstable_LowPriority,
	pb = $t.unstable_IdlePriority,
	Yu = null,
	yn = null
function z2(e) {
	if (yn && typeof yn.onCommitFiberRoot == 'function')
		try {
			yn.onCommitFiberRoot(Yu, e, void 0, (e.current.flags & 128) === 128)
		} catch {}
}
var en = Math.clz32 ? Math.clz32 : O2,
	L2 = Math.log,
	D2 = Math.LN2
function O2(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((L2(e) / D2) | 0)) | 0
}
var Ys = 64,
	Xs = 4194304
function ta(e) {
	switch (e & -e) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return e
	}
}
function lu(e, t) {
	var n = e.pendingLanes
	if (n === 0) return 0
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		a = n & 268435455
	if (a !== 0) {
		var s = a & ~o
		s !== 0 ? (r = ta(s)) : ((i &= a), i !== 0 && (r = ta(i)))
	} else (a = n & ~o), a !== 0 ? (r = ta(a)) : i !== 0 && (r = ta(i))
	if (r === 0) return 0
	if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))) return t
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - en(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
	return r
}
function B2(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function N2(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
		var a = 31 - en(i),
			s = 1 << a,
			l = o[a]
		l === -1 ? (!(s & n) || s & r) && (o[a] = B2(s, t)) : l <= t && (e.expiredLanes |= s), (i &= ~s)
	}
}
function jf(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function mb() {
	var e = Ys
	return (Ys <<= 1), !(Ys & 4194240) && (Ys = 64), e
}
function ld(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e)
	return t
}
function hs(e, t, n) {
	;(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - en(t)),
		(e[t] = n)
}
function V2(e, t) {
	var n = e.pendingLanes & ~t
	;(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements)
	var r = e.eventTimes
	for (e = e.expirationTimes; 0 < n; ) {
		var o = 31 - en(n),
			i = 1 << o
		;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
	}
}
function vp(e, t) {
	var n = (e.entangledLanes |= t)
	for (e = e.entanglements; n; ) {
		var r = 31 - en(n),
			o = 1 << r
		;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
	}
}
var se = 0
function vb(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var gb,
	gp,
	yb,
	bb,
	xb,
	zf = !1,
	Qs = [],
	cr = null,
	dr = null,
	fr = null,
	Ia = new Map(),
	Fa = new Map(),
	or = [],
	W2 =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' ',
		)
function Wv(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			cr = null
			break
		case 'dragenter':
		case 'dragleave':
			dr = null
			break
		case 'mouseover':
		case 'mouseout':
			fr = null
			break
		case 'pointerover':
		case 'pointerout':
			Ia.delete(t.pointerId)
			break
		case 'gotpointercapture':
		case 'lostpointercapture':
			Fa.delete(t.pointerId)
	}
}
function Oi(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i
		? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
		  t !== null && ((t = ms(t)), t !== null && gp(t)),
		  e)
		: ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e)
}
function U2(e, t, n, r, o) {
	switch (t) {
		case 'focusin':
			return (cr = Oi(cr, e, t, n, r, o)), !0
		case 'dragenter':
			return (dr = Oi(dr, e, t, n, r, o)), !0
		case 'mouseover':
			return (fr = Oi(fr, e, t, n, r, o)), !0
		case 'pointerover':
			var i = o.pointerId
			return Ia.set(i, Oi(Ia.get(i) || null, e, t, n, r, o)), !0
		case 'gotpointercapture':
			return (i = o.pointerId), Fa.set(i, Oi(Fa.get(i) || null, e, t, n, r, o)), !0
	}
	return !1
}
function Sb(e) {
	var t = Wr(e.target)
	if (t !== null) {
		var n = ho(t)
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = ub(n)), t !== null)) {
					;(e.blockedOn = t),
						xb(e.priority, function () {
							yb(n)
						})
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	e.blockedOn = null
}
function El(e) {
	if (e.blockedOn !== null) return !1
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Lf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
		if (n === null) {
			n = e.nativeEvent
			var r = new n.constructor(n.type, n)
			;(Af = r), n.target.dispatchEvent(r), (Af = null)
		} else return (t = ms(n)), t !== null && gp(t), (e.blockedOn = n), !1
		t.shift()
	}
	return !0
}
function Uv(e, t, n) {
	El(e) && n.delete(t)
}
function H2() {
	;(zf = !1),
		cr !== null && El(cr) && (cr = null),
		dr !== null && El(dr) && (dr = null),
		fr !== null && El(fr) && (fr = null),
		Ia.forEach(Uv),
		Fa.forEach(Uv)
}
function Bi(e, t) {
	e.blockedOn === t && ((e.blockedOn = null), zf || ((zf = !0), $t.unstable_scheduleCallback($t.unstable_NormalPriority, H2)))
}
function ja(e) {
	function t(o) {
		return Bi(o, e)
	}
	if (0 < Qs.length) {
		Bi(Qs[0], e)
		for (var n = 1; n < Qs.length; n++) {
			var r = Qs[n]
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (
		cr !== null && Bi(cr, e), dr !== null && Bi(dr, e), fr !== null && Bi(fr, e), Ia.forEach(t), Fa.forEach(t), n = 0;
		n < or.length;
		n++
	)
		(r = or[n]), r.blockedOn === e && (r.blockedOn = null)
	for (; 0 < or.length && ((n = or[0]), n.blockedOn === null); ) Sb(n), n.blockedOn === null && or.shift()
}
var Qo = Yn.ReactCurrentBatchConfig,
	uu = !0
function K2(e, t, n, r) {
	var o = se,
		i = Qo.transition
	Qo.transition = null
	try {
		;(se = 1), yp(e, t, n, r)
	} finally {
		;(se = o), (Qo.transition = i)
	}
}
function G2(e, t, n, r) {
	var o = se,
		i = Qo.transition
	Qo.transition = null
	try {
		;(se = 4), yp(e, t, n, r)
	} finally {
		;(se = o), (Qo.transition = i)
	}
}
function yp(e, t, n, r) {
	if (uu) {
		var o = Lf(e, t, n, r)
		if (o === null) yd(e, t, r, cu, n), Wv(e, r)
		else if (U2(o, e, t, n, r)) r.stopPropagation()
		else if ((Wv(e, r), t & 4 && -1 < W2.indexOf(e))) {
			for (; o !== null; ) {
				var i = ms(o)
				if ((i !== null && gb(i), (i = Lf(e, t, n, r)), i === null && yd(e, t, r, cu, n), i === o)) break
				o = i
			}
			o !== null && r.stopPropagation()
		} else yd(e, t, r, null, n)
	}
}
var cu = null
function Lf(e, t, n, r) {
	if (((cu = null), (e = pp(r)), (e = Wr(e)), e !== null))
		if (((t = ho(e)), t === null)) e = null
		else if (((n = t.tag), n === 13)) {
			if (((e = ub(t)), e !== null)) return e
			e = null
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
			e = null
		} else t !== e && (e = null)
	return (cu = e), null
}
function wb(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4
		case 'message':
			switch (F2()) {
				case mp:
					return 1
				case hb:
					return 4
				case su:
				case j2:
					return 16
				case pb:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var sr = null,
	bp = null,
	$l = null
function kb() {
	if ($l) return $l
	var e,
		t = bp,
		n = t.length,
		r,
		o = 'value' in sr ? sr.value : sr.textContent,
		i = o.length
	for (e = 0; e < n && t[e] === o[e]; e++);
	var a = n - e
	for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
	return ($l = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Rl(e) {
	var t = e.keyCode
	return (
		'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	)
}
function Zs() {
	return !0
}
function Hv() {
	return !1
}
function Mt(e) {
	function t(n, r, o, i, a) {
		;(this._reactName = n),
			(this._targetInst = o),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = a),
			(this.currentTarget = null)
		for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]))
		return (
			(this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Zs : Hv),
			(this.isPropagationStopped = Hv),
			this
		)
	}
	return (
		Te(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Zs))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Zs))
			},
			persist: function () {},
			isPersistent: Zs,
		}),
		t
	)
}
var ki = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	xp = Mt(ki),
	ps = Te({}, ki, { view: 0, detail: 0 }),
	q2 = Mt(ps),
	ud,
	cd,
	Ni,
	Xu = Te({}, ps, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Sp,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== Ni &&
						(Ni && e.type === 'mousemove' ? ((ud = e.screenX - Ni.screenX), (cd = e.screenY - Ni.screenY)) : (cd = ud = 0),
						(Ni = e)),
				  ud)
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : cd
		},
	}),
	Kv = Mt(Xu),
	Y2 = Te({}, Xu, { dataTransfer: 0 }),
	X2 = Mt(Y2),
	Q2 = Te({}, ps, { relatedTarget: 0 }),
	dd = Mt(Q2),
	Z2 = Te({}, ki, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	J2 = Mt(Z2),
	eP = Te({}, ki, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData
		},
	}),
	tP = Mt(eP),
	nP = Te({}, ki, { data: 0 }),
	Gv = Mt(nP),
	rP = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	oP = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	iP = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function aP(e) {
	var t = this.nativeEvent
	return t.getModifierState ? t.getModifierState(e) : (e = iP[e]) ? !!t[e] : !1
}
function Sp() {
	return aP
}
var sP = Te({}, ps, {
		key: function (e) {
			if (e.key) {
				var t = rP[e.key] || e.key
				if (t !== 'Unidentified') return t
			}
			return e.type === 'keypress'
				? ((e = Rl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? oP[e.keyCode] || 'Unidentified'
				: ''
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Sp,
		charCode: function (e) {
			return e.type === 'keypress' ? Rl(e) : 0
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
		which: function (e) {
			return e.type === 'keypress' ? Rl(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
	}),
	lP = Mt(sP),
	uP = Te({}, Xu, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	qv = Mt(uP),
	cP = Te({}, ps, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Sp,
	}),
	dP = Mt(cP),
	fP = Te({}, ki, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	hP = Mt(fP),
	pP = Te({}, Xu, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
		},
		deltaY: function (e) {
			return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	mP = Mt(pP),
	vP = [9, 13, 27, 32],
	wp = Wn && 'CompositionEvent' in window,
	ha = null
Wn && 'documentMode' in document && (ha = document.documentMode)
var gP = Wn && 'TextEvent' in window && !ha,
	Cb = Wn && (!wp || (ha && 8 < ha && 11 >= ha)),
	Yv = ' ',
	Xv = !1
function _b(e, t) {
	switch (e) {
		case 'keyup':
			return vP.indexOf(t.keyCode) !== -1
		case 'keydown':
			return t.keyCode !== 229
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0
		default:
			return !1
	}
}
function Pb(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var To = !1
function yP(e, t) {
	switch (e) {
		case 'compositionend':
			return Pb(t)
		case 'keypress':
			return t.which !== 32 ? null : ((Xv = !0), Yv)
		case 'textInput':
			return (e = t.data), e === Yv && Xv ? null : e
		default:
			return null
	}
}
function bP(e, t) {
	if (To) return e === 'compositionend' || (!wp && _b(e, t)) ? ((e = kb()), ($l = bp = sr = null), (To = !1), e) : null
	switch (e) {
		case 'paste':
			return null
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char
				if (t.which) return String.fromCharCode(t.which)
			}
			return null
		case 'compositionend':
			return Cb && t.locale !== 'ko' ? null : t.data
		default:
			return null
	}
}
var xP = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
}
function Qv(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return t === 'input' ? !!xP[e.type] : t === 'textarea'
}
function Tb(e, t, n, r) {
	ob(r),
		(t = du(t, 'onChange')),
		0 < t.length && ((n = new xp('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var pa = null,
	za = null
function SP(e) {
	Db(e, 0)
}
function Qu(e) {
	var t = Ro(e)
	if (Q1(t)) return e
}
function wP(e, t) {
	if (e === 'change') return t
}
var Eb = !1
if (Wn) {
	var fd
	if (Wn) {
		var hd = 'oninput' in document
		if (!hd) {
			var Zv = document.createElement('div')
			Zv.setAttribute('oninput', 'return;'), (hd = typeof Zv.oninput == 'function')
		}
		fd = hd
	} else fd = !1
	Eb = fd && (!document.documentMode || 9 < document.documentMode)
}
function Jv() {
	pa && (pa.detachEvent('onpropertychange', $b), (za = pa = null))
}
function $b(e) {
	if (e.propertyName === 'value' && Qu(za)) {
		var t = []
		Tb(t, za, e, pp(e)), lb(SP, t)
	}
}
function kP(e, t, n) {
	e === 'focusin' ? (Jv(), (pa = t), (za = n), pa.attachEvent('onpropertychange', $b)) : e === 'focusout' && Jv()
}
function CP(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Qu(za)
}
function _P(e, t) {
	if (e === 'click') return Qu(t)
}
function PP(e, t) {
	if (e === 'input' || e === 'change') return Qu(t)
}
function TP(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var rn = typeof Object.is == 'function' ? Object.is : TP
function La(e, t) {
	if (rn(e, t)) return !0
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
	var n = Object.keys(e),
		r = Object.keys(t)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var o = n[r]
		if (!bf.call(t, o) || !rn(e[o], t[o])) return !1
	}
	return !0
}
function eg(e) {
	for (; e && e.firstChild; ) e = e.firstChild
	return e
}
function tg(e, t) {
	var n = eg(e)
	e = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
			e = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = eg(n)
	}
}
function Rb(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Rb(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1
}
function Ab() {
	for (var e = window, t = ou(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string'
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow
		else break
		t = ou(e.document)
	}
	return t
}
function kp(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	)
}
function EP(e) {
	var t = Ab(),
		n = e.focusedElem,
		r = e.selectionRange
	if (t !== n && n && n.ownerDocument && Rb(n.ownerDocument.documentElement, n)) {
		if (r !== null && kp(n)) {
			if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
			else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
				e = e.getSelection()
				var o = n.textContent.length,
					i = Math.min(r.start, o)
				;(r = r.end === void 0 ? i : Math.min(r.end, o)), !e.extend && i > r && ((o = r), (r = i), (i = o)), (o = tg(n, i))
				var a = tg(n, r)
				o &&
					a &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== a.node ||
						e.focusOffset !== a.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
	}
}
var $P = Wn && 'documentMode' in document && 11 >= document.documentMode,
	Eo = null,
	Df = null,
	ma = null,
	Of = !1
function ng(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	Of ||
		Eo == null ||
		Eo !== ou(r) ||
		((r = Eo),
		'selectionStart' in r && kp(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
			  (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
		(ma && La(ma, r)) ||
			((ma = r),
			(r = du(Df, 'onSelect')),
			0 < r.length && ((t = new xp('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Eo))))
}
function Js(e, t) {
	var n = {}
	return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
}
var $o = {
		animationend: Js('Animation', 'AnimationEnd'),
		animationiteration: Js('Animation', 'AnimationIteration'),
		animationstart: Js('Animation', 'AnimationStart'),
		transitionend: Js('Transition', 'TransitionEnd'),
	},
	pd = {},
	Mb = {}
Wn &&
	((Mb = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete $o.animationend.animation, delete $o.animationiteration.animation, delete $o.animationstart.animation),
	'TransitionEvent' in window || delete $o.transitionend.transition)
function Zu(e) {
	if (pd[e]) return pd[e]
	if (!$o[e]) return e
	var t = $o[e],
		n
	for (n in t) if (t.hasOwnProperty(n) && n in Mb) return (pd[e] = t[n])
	return e
}
var Ib = Zu('animationend'),
	Fb = Zu('animationiteration'),
	jb = Zu('animationstart'),
	zb = Zu('transitionend'),
	Lb = new Map(),
	rg =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' ',
		)
function kr(e, t) {
	Lb.set(e, t), fo(t, [e])
}
for (var md = 0; md < rg.length; md++) {
	var vd = rg[md],
		RP = vd.toLowerCase(),
		AP = vd[0].toUpperCase() + vd.slice(1)
	kr(RP, 'on' + AP)
}
kr(Ib, 'onAnimationEnd')
kr(Fb, 'onAnimationIteration')
kr(jb, 'onAnimationStart')
kr('dblclick', 'onDoubleClick')
kr('focusin', 'onFocus')
kr('focusout', 'onBlur')
kr(zb, 'onTransitionEnd')
li('onMouseEnter', ['mouseout', 'mouseover'])
li('onMouseLeave', ['mouseout', 'mouseover'])
li('onPointerEnter', ['pointerout', 'pointerover'])
li('onPointerLeave', ['pointerout', 'pointerover'])
fo('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
fo('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
fo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
fo('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
fo('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
fo('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var na =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' ',
		),
	MP = new Set('cancel close invalid load scroll toggle'.split(' ').concat(na))
function og(e, t, n) {
	var r = e.type || 'unknown-event'
	;(e.currentTarget = n), R2(r, t, void 0, e), (e.currentTarget = null)
}
function Db(e, t) {
	t = (t & 4) !== 0
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event
		r = r.listeners
		e: {
			var i = void 0
			if (t)
				for (var a = r.length - 1; 0 <= a; a--) {
					var s = r[a],
						l = s.instance,
						u = s.currentTarget
					if (((s = s.listener), l !== i && o.isPropagationStopped())) break e
					og(o, s, u), (i = l)
				}
			else
				for (a = 0; a < r.length; a++) {
					if (((s = r[a]), (l = s.instance), (u = s.currentTarget), (s = s.listener), l !== i && o.isPropagationStopped()))
						break e
					og(o, s, u), (i = l)
				}
		}
	}
	if (au) throw ((e = Ff), (au = !1), (Ff = null), e)
}
function me(e, t) {
	var n = t[Uf]
	n === void 0 && (n = t[Uf] = new Set())
	var r = e + '__bubble'
	n.has(r) || (Ob(t, e, 2, !1), n.add(r))
}
function gd(e, t, n) {
	var r = 0
	t && (r |= 4), Ob(n, e, r, t)
}
var el = '_reactListening' + Math.random().toString(36).slice(2)
function Da(e) {
	if (!e[el]) {
		;(e[el] = !0),
			K1.forEach(function (n) {
				n !== 'selectionchange' && (MP.has(n) || gd(n, !1, e), gd(n, !0, e))
			})
		var t = e.nodeType === 9 ? e : e.ownerDocument
		t === null || t[el] || ((t[el] = !0), gd('selectionchange', !1, t))
	}
}
function Ob(e, t, n, r) {
	switch (wb(t)) {
		case 1:
			var o = K2
			break
		case 4:
			o = G2
			break
		default:
			o = yp
	}
	;(n = o.bind(null, t, n, e)),
		(o = void 0),
		!If || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
		r
			? o !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: o })
				: e.addEventListener(t, n, !0)
			: o !== void 0
			? e.addEventListener(t, n, { passive: o })
			: e.addEventListener(t, n, !1)
}
function yd(e, t, n, r, o) {
	var i = r
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return
			var a = r.tag
			if (a === 3 || a === 4) {
				var s = r.stateNode.containerInfo
				if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
				if (a === 4)
					for (a = r.return; a !== null; ) {
						var l = a.tag
						if ((l === 3 || l === 4) && ((l = a.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o)))
							return
						a = a.return
					}
				for (; s !== null; ) {
					if (((a = Wr(s)), a === null)) return
					if (((l = a.tag), l === 5 || l === 6)) {
						r = i = a
						continue e
					}
					s = s.parentNode
				}
			}
			r = r.return
		}
	lb(function () {
		var u = i,
			d = pp(n),
			c = []
		e: {
			var f = Lb.get(e)
			if (f !== void 0) {
				var m = xp,
					y = e
				switch (e) {
					case 'keypress':
						if (Rl(n) === 0) break e
					case 'keydown':
					case 'keyup':
						m = lP
						break
					case 'focusin':
						;(y = 'focus'), (m = dd)
						break
					case 'focusout':
						;(y = 'blur'), (m = dd)
						break
					case 'beforeblur':
					case 'afterblur':
						m = dd
						break
					case 'click':
						if (n.button === 2) break e
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						m = Kv
						break
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						m = X2
						break
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						m = dP
						break
					case Ib:
					case Fb:
					case jb:
						m = J2
						break
					case zb:
						m = hP
						break
					case 'scroll':
						m = q2
						break
					case 'wheel':
						m = mP
						break
					case 'copy':
					case 'cut':
					case 'paste':
						m = tP
						break
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						m = qv
				}
				var g = (t & 4) !== 0,
					x = !g && e === 'scroll',
					p = g ? (f !== null ? f + 'Capture' : null) : f
				g = []
				for (var h = u, v; h !== null; ) {
					v = h
					var k = v.stateNode
					if ((v.tag === 5 && k !== null && ((v = k), p !== null && ((k = Ma(h, p)), k != null && g.push(Oa(h, k, v)))), x)) break
					h = h.return
				}
				0 < g.length && ((f = new m(f, y, null, n, d)), c.push({ event: f, listeners: g }))
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((f = e === 'mouseover' || e === 'pointerover'),
					(m = e === 'mouseout' || e === 'pointerout'),
					f && n !== Af && (y = n.relatedTarget || n.fromElement) && (Wr(y) || y[Un]))
				)
					break e
				if (
					(m || f) &&
					((f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window),
					m
						? ((y = n.relatedTarget || n.toElement),
						  (m = u),
						  (y = y ? Wr(y) : null),
						  y !== null && ((x = ho(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) && (y = null))
						: ((m = null), (y = u)),
					m !== y)
				) {
					if (
						((g = Kv),
						(k = 'onMouseLeave'),
						(p = 'onMouseEnter'),
						(h = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((g = qv), (k = 'onPointerLeave'), (p = 'onPointerEnter'), (h = 'pointer')),
						(x = m == null ? f : Ro(m)),
						(v = y == null ? f : Ro(y)),
						(f = new g(k, h + 'leave', m, n, d)),
						(f.target = x),
						(f.relatedTarget = v),
						(k = null),
						Wr(d) === u && ((g = new g(p, h + 'enter', y, n, d)), (g.target = v), (g.relatedTarget = x), (k = g)),
						(x = k),
						m && y)
					)
						t: {
							for (g = m, p = y, h = 0, v = g; v; v = bo(v)) h++
							for (v = 0, k = p; k; k = bo(k)) v++
							for (; 0 < h - v; ) (g = bo(g)), h--
							for (; 0 < v - h; ) (p = bo(p)), v--
							for (; h--; ) {
								if (g === p || (p !== null && g === p.alternate)) break t
								;(g = bo(g)), (p = bo(p))
							}
							g = null
						}
					else g = null
					m !== null && ig(c, f, m, g, !1), y !== null && x !== null && ig(c, x, y, g, !0)
				}
			}
			e: {
				if (
					((f = u ? Ro(u) : window),
					(m = f.nodeName && f.nodeName.toLowerCase()),
					m === 'select' || (m === 'input' && f.type === 'file'))
				)
					var C = wP
				else if (Qv(f))
					if (Eb) C = PP
					else {
						C = CP
						var E = kP
					}
				else (m = f.nodeName) && m.toLowerCase() === 'input' && (f.type === 'checkbox' || f.type === 'radio') && (C = _P)
				if (C && (C = C(e, u))) {
					Tb(c, C, n, d)
					break e
				}
				E && E(e, f, u),
					e === 'focusout' && (E = f._wrapperState) && E.controlled && f.type === 'number' && Pf(f, 'number', f.value)
			}
			switch (((E = u ? Ro(u) : window), e)) {
				case 'focusin':
					;(Qv(E) || E.contentEditable === 'true') && ((Eo = E), (Df = u), (ma = null))
					break
				case 'focusout':
					ma = Df = Eo = null
					break
				case 'mousedown':
					Of = !0
					break
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					;(Of = !1), ng(c, n, d)
					break
				case 'selectionchange':
					if ($P) break
				case 'keydown':
				case 'keyup':
					ng(c, n, d)
			}
			var T
			if (wp)
				e: {
					switch (e) {
						case 'compositionstart':
							var R = 'onCompositionStart'
							break e
						case 'compositionend':
							R = 'onCompositionEnd'
							break e
						case 'compositionupdate':
							R = 'onCompositionUpdate'
							break e
					}
					R = void 0
				}
			else To ? _b(e, n) && (R = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart')
			R &&
				(Cb &&
					n.locale !== 'ko' &&
					(To || R !== 'onCompositionStart'
						? R === 'onCompositionEnd' && To && (T = kb())
						: ((sr = d), (bp = 'value' in sr ? sr.value : sr.textContent), (To = !0))),
				(E = du(u, R)),
				0 < E.length &&
					((R = new Gv(R, e, null, n, d)),
					c.push({ event: R, listeners: E }),
					T ? (R.data = T) : ((T = Pb(n)), T !== null && (R.data = T)))),
				(T = gP ? yP(e, n) : bP(e, n)) &&
					((u = du(u, 'onBeforeInput')),
					0 < u.length &&
						((d = new Gv('onBeforeInput', 'beforeinput', null, n, d)), c.push({ event: d, listeners: u }), (d.data = T)))
		}
		Db(c, t)
	})
}
function Oa(e, t, n) {
	return { instance: e, listener: t, currentTarget: n }
}
function du(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var o = e,
			i = o.stateNode
		o.tag === 5 &&
			i !== null &&
			((o = i), (i = Ma(e, n)), i != null && r.unshift(Oa(e, i, o)), (i = Ma(e, t)), i != null && r.push(Oa(e, i, o))),
			(e = e.return)
	}
	return r
}
function bo(e) {
	if (e === null) return null
	do e = e.return
	while (e && e.tag !== 5)
	return e || null
}
function ig(e, t, n, r, o) {
	for (var i = t._reactName, a = []; n !== null && n !== r; ) {
		var s = n,
			l = s.alternate,
			u = s.stateNode
		if (l !== null && l === r) break
		s.tag === 5 &&
			u !== null &&
			((s = u),
			o ? ((l = Ma(n, i)), l != null && a.unshift(Oa(n, l, s))) : o || ((l = Ma(n, i)), l != null && a.push(Oa(n, l, s)))),
			(n = n.return)
	}
	a.length !== 0 && e.push({ event: t, listeners: a })
}
var IP = /\r\n?/g,
	FP = /\u0000|\uFFFD/g
function ag(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			IP,
			`
`,
		)
		.replace(FP, '')
}
function tl(e, t, n) {
	if (((t = ag(t)), ag(e) !== t && n)) throw Error(A(425))
}
function fu() {}
var Bf = null,
	Nf = null
function Vf(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	)
}
var Wf = typeof setTimeout == 'function' ? setTimeout : void 0,
	jP = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	sg = typeof Promise == 'function' ? Promise : void 0,
	zP =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof sg < 'u'
			? function (e) {
					return sg.resolve(null).then(e).catch(LP)
			  }
			: Wf
function LP(e) {
	setTimeout(function () {
		throw e
	})
}
function bd(e, t) {
	var n = t,
		r = 0
	do {
		var o = n.nextSibling
		if ((e.removeChild(n), o && o.nodeType === 8))
			if (((n = o.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(o), ja(t)
					return
				}
				r--
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++
		n = o
	} while (n)
	ja(t)
}
function hr(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType
		if (t === 1 || t === 3) break
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
			if (t === '/$') return null
		}
	}
	return e
}
function lg(e) {
	e = e.previousSibling
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e
				t--
			} else n === '/$' && t++
		}
		e = e.previousSibling
	}
	return null
}
var Ci = Math.random().toString(36).slice(2),
	hn = '__reactFiber$' + Ci,
	Ba = '__reactProps$' + Ci,
	Un = '__reactContainer$' + Ci,
	Uf = '__reactEvents$' + Ci,
	DP = '__reactListeners$' + Ci,
	OP = '__reactHandles$' + Ci
function Wr(e) {
	var t = e[hn]
	if (t) return t
	for (var n = e.parentNode; n; ) {
		if ((t = n[Un] || n[hn])) {
			if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
				for (e = lg(e); e !== null; ) {
					if ((n = e[hn])) return n
					e = lg(e)
				}
			return t
		}
		;(e = n), (n = e.parentNode)
	}
	return null
}
function ms(e) {
	return (e = e[hn] || e[Un]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
}
function Ro(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode
	throw Error(A(33))
}
function Ju(e) {
	return e[Ba] || null
}
var Hf = [],
	Ao = -1
function Cr(e) {
	return { current: e }
}
function ge(e) {
	0 > Ao || ((e.current = Hf[Ao]), (Hf[Ao] = null), Ao--)
}
function fe(e, t) {
	Ao++, (Hf[Ao] = e.current), (e.current = t)
}
var xr = {},
	it = Cr(xr),
	gt = Cr(!1),
	no = xr
function ui(e, t) {
	var n = e.type.contextTypes
	if (!n) return xr
	var r = e.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
	var o = {},
		i
	for (i in n) o[i] = t[i]
	return (
		r &&
			((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	)
}
function yt(e) {
	return (e = e.childContextTypes), e != null
}
function hu() {
	ge(gt), ge(it)
}
function ug(e, t, n) {
	if (it.current !== xr) throw Error(A(168))
	fe(it, t), fe(gt, n)
}
function Bb(e, t, n) {
	var r = e.stateNode
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
	r = r.getChildContext()
	for (var o in r) if (!(o in t)) throw Error(A(108, k2(e) || 'Unknown', o))
	return Te({}, n, r)
}
function pu(e) {
	return (
		(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xr),
		(no = it.current),
		fe(it, e),
		fe(gt, gt.current),
		!0
	)
}
function cg(e, t, n) {
	var r = e.stateNode
	if (!r) throw Error(A(169))
	n ? ((e = Bb(e, t, no)), (r.__reactInternalMemoizedMergedChildContext = e), ge(gt), ge(it), fe(it, e)) : ge(gt), fe(gt, n)
}
var En = null,
	ec = !1,
	xd = !1
function Nb(e) {
	En === null ? (En = [e]) : En.push(e)
}
function BP(e) {
	;(ec = !0), Nb(e)
}
function _r() {
	if (!xd && En !== null) {
		xd = !0
		var e = 0,
			t = se
		try {
			var n = En
			for (se = 1; e < n.length; e++) {
				var r = n[e]
				do r = r(!0)
				while (r !== null)
			}
			;(En = null), (ec = !1)
		} catch (o) {
			throw (En !== null && (En = En.slice(e + 1)), fb(mp, _r), o)
		} finally {
			;(se = t), (xd = !1)
		}
	}
	return null
}
var Mo = [],
	Io = 0,
	mu = null,
	vu = 0,
	Ot = [],
	Bt = 0,
	ro = null,
	An = 1,
	Mn = ''
function Lr(e, t) {
	;(Mo[Io++] = vu), (Mo[Io++] = mu), (mu = e), (vu = t)
}
function Vb(e, t, n) {
	;(Ot[Bt++] = An), (Ot[Bt++] = Mn), (Ot[Bt++] = ro), (ro = e)
	var r = An
	e = Mn
	var o = 32 - en(r) - 1
	;(r &= ~(1 << o)), (n += 1)
	var i = 32 - en(t) + o
	if (30 < i) {
		var a = o - (o % 5)
		;(i = (r & ((1 << a) - 1)).toString(32)), (r >>= a), (o -= a), (An = (1 << (32 - en(t) + o)) | (n << o) | r), (Mn = i + e)
	} else (An = (1 << i) | (n << o) | r), (Mn = e)
}
function Cp(e) {
	e.return !== null && (Lr(e, 1), Vb(e, 1, 0))
}
function _p(e) {
	for (; e === mu; ) (mu = Mo[--Io]), (Mo[Io] = null), (vu = Mo[--Io]), (Mo[Io] = null)
	for (; e === ro; ) (ro = Ot[--Bt]), (Ot[Bt] = null), (Mn = Ot[--Bt]), (Ot[Bt] = null), (An = Ot[--Bt]), (Ot[Bt] = null)
}
var Pt = null,
	_t = null,
	Se = !1,
	Zt = null
function Wb(e, t) {
	var n = Nt(5, null, null, 0)
	;(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function dg(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type
			return (
				(t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
				t !== null ? ((e.stateNode = t), (Pt = e), (_t = hr(t.firstChild)), !0) : !1
			)
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Pt = e), (_t = null), !0) : !1
			)
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = ro !== null ? { id: An, overflow: Mn } : null),
					  (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
					  (n = Nt(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Pt = e),
					  (_t = null),
					  !0)
					: !1
			)
		default:
			return !1
	}
}
function Kf(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Gf(e) {
	if (Se) {
		var t = _t
		if (t) {
			var n = t
			if (!dg(e, t)) {
				if (Kf(e)) throw Error(A(418))
				t = hr(n.nextSibling)
				var r = Pt
				t && dg(e, t) ? Wb(r, n) : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (Pt = e))
			}
		} else {
			if (Kf(e)) throw Error(A(418))
			;(e.flags = (e.flags & -4097) | 2), (Se = !1), (Pt = e)
		}
	}
}
function fg(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
	Pt = e
}
function nl(e) {
	if (e !== Pt) return !1
	if (!Se) return fg(e), (Se = !0), !1
	var t
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type), (t = t !== 'head' && t !== 'body' && !Vf(e.type, e.memoizedProps))),
		t && (t = _t))
	) {
		if (Kf(e)) throw (Ub(), Error(A(418)))
		for (; t; ) Wb(e, t), (t = hr(t.nextSibling))
	}
	if ((fg(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(A(317))
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data
					if (n === '/$') {
						if (t === 0) {
							_t = hr(e.nextSibling)
							break e
						}
						t--
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++
				}
				e = e.nextSibling
			}
			_t = null
		}
	} else _t = Pt ? hr(e.stateNode.nextSibling) : null
	return !0
}
function Ub() {
	for (var e = _t; e; ) e = hr(e.nextSibling)
}
function ci() {
	;(_t = Pt = null), (Se = !1)
}
function Pp(e) {
	Zt === null ? (Zt = [e]) : Zt.push(e)
}
var NP = Yn.ReactCurrentBatchConfig
function Vi(e, t, n) {
	if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(A(309))
				var r = n.stateNode
			}
			if (!r) throw Error(A(147, e))
			var o = r,
				i = '' + e
			return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
				? t.ref
				: ((t = function (a) {
						var s = o.refs
						a === null ? delete s[i] : (s[i] = a)
				  }),
				  (t._stringRef = i),
				  t)
		}
		if (typeof e != 'string') throw Error(A(284))
		if (!n._owner) throw Error(A(290, e))
	}
	return e
}
function rl(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(A(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
	)
}
function hg(e) {
	var t = e._init
	return t(e._payload)
}
function Hb(e) {
	function t(p, h) {
		if (e) {
			var v = p.deletions
			v === null ? ((p.deletions = [h]), (p.flags |= 16)) : v.push(h)
		}
	}
	function n(p, h) {
		if (!e) return null
		for (; h !== null; ) t(p, h), (h = h.sibling)
		return null
	}
	function r(p, h) {
		for (p = new Map(); h !== null; ) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling)
		return p
	}
	function o(p, h) {
		return (p = gr(p, h)), (p.index = 0), (p.sibling = null), p
	}
	function i(p, h, v) {
		return (
			(p.index = v),
			e
				? ((v = p.alternate), v !== null ? ((v = v.index), v < h ? ((p.flags |= 2), h) : v) : ((p.flags |= 2), h))
				: ((p.flags |= 1048576), h)
		)
	}
	function a(p) {
		return e && p.alternate === null && (p.flags |= 2), p
	}
	function s(p, h, v, k) {
		return h === null || h.tag !== 6 ? ((h = Td(v, p.mode, k)), (h.return = p), h) : ((h = o(h, v)), (h.return = p), h)
	}
	function l(p, h, v, k) {
		var C = v.type
		return C === Po
			? d(p, h, v.props.children, k, v.key)
			: h !== null && (h.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === nr && hg(C) === h.type))
			? ((k = o(h, v.props)), (k.ref = Vi(p, h, v)), (k.return = p), k)
			: ((k = Ll(v.type, v.key, v.props, null, p.mode, k)), (k.ref = Vi(p, h, v)), (k.return = p), k)
	}
	function u(p, h, v, k) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== v.containerInfo ||
			h.stateNode.implementation !== v.implementation
			? ((h = Ed(v, p.mode, k)), (h.return = p), h)
			: ((h = o(h, v.children || [])), (h.return = p), h)
	}
	function d(p, h, v, k, C) {
		return h === null || h.tag !== 7 ? ((h = Yr(v, p.mode, k, C)), (h.return = p), h) : ((h = o(h, v)), (h.return = p), h)
	}
	function c(p, h, v) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number') return (h = Td('' + h, p.mode, v)), (h.return = p), h
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case Ks:
					return (v = Ll(h.type, h.key, h.props, null, p.mode, v)), (v.ref = Vi(p, null, h)), (v.return = p), v
				case _o:
					return (h = Ed(h, p.mode, v)), (h.return = p), h
				case nr:
					var k = h._init
					return c(p, k(h._payload), v)
			}
			if (ea(h) || Li(h)) return (h = Yr(h, p.mode, v, null)), (h.return = p), h
			rl(p, h)
		}
		return null
	}
	function f(p, h, v, k) {
		var C = h !== null ? h.key : null
		if ((typeof v == 'string' && v !== '') || typeof v == 'number') return C !== null ? null : s(p, h, '' + v, k)
		if (typeof v == 'object' && v !== null) {
			switch (v.$$typeof) {
				case Ks:
					return v.key === C ? l(p, h, v, k) : null
				case _o:
					return v.key === C ? u(p, h, v, k) : null
				case nr:
					return (C = v._init), f(p, h, C(v._payload), k)
			}
			if (ea(v) || Li(v)) return C !== null ? null : d(p, h, v, k, null)
			rl(p, v)
		}
		return null
	}
	function m(p, h, v, k, C) {
		if ((typeof k == 'string' && k !== '') || typeof k == 'number') return (p = p.get(v) || null), s(h, p, '' + k, C)
		if (typeof k == 'object' && k !== null) {
			switch (k.$$typeof) {
				case Ks:
					return (p = p.get(k.key === null ? v : k.key) || null), l(h, p, k, C)
				case _o:
					return (p = p.get(k.key === null ? v : k.key) || null), u(h, p, k, C)
				case nr:
					var E = k._init
					return m(p, h, v, E(k._payload), C)
			}
			if (ea(k) || Li(k)) return (p = p.get(v) || null), d(h, p, k, C, null)
			rl(h, k)
		}
		return null
	}
	function y(p, h, v, k) {
		for (var C = null, E = null, T = h, R = (h = 0), M = null; T !== null && R < v.length; R++) {
			T.index > R ? ((M = T), (T = null)) : (M = T.sibling)
			var F = f(p, T, v[R], k)
			if (F === null) {
				T === null && (T = M)
				break
			}
			e && T && F.alternate === null && t(p, T), (h = i(F, h, R)), E === null ? (C = F) : (E.sibling = F), (E = F), (T = M)
		}
		if (R === v.length) return n(p, T), Se && Lr(p, R), C
		if (T === null) {
			for (; R < v.length; R++)
				(T = c(p, v[R], k)), T !== null && ((h = i(T, h, R)), E === null ? (C = T) : (E.sibling = T), (E = T))
			return Se && Lr(p, R), C
		}
		for (T = r(p, T); R < v.length; R++)
			(M = m(T, p, R, v[R], k)),
				M !== null &&
					(e && M.alternate !== null && T.delete(M.key === null ? R : M.key),
					(h = i(M, h, R)),
					E === null ? (C = M) : (E.sibling = M),
					(E = M))
		return (
			e &&
				T.forEach(function (Y) {
					return t(p, Y)
				}),
			Se && Lr(p, R),
			C
		)
	}
	function g(p, h, v, k) {
		var C = Li(v)
		if (typeof C != 'function') throw Error(A(150))
		if (((v = C.call(v)), v == null)) throw Error(A(151))
		for (var E = (C = null), T = h, R = (h = 0), M = null, F = v.next(); T !== null && !F.done; R++, F = v.next()) {
			T.index > R ? ((M = T), (T = null)) : (M = T.sibling)
			var Y = f(p, T, F.value, k)
			if (Y === null) {
				T === null && (T = M)
				break
			}
			e && T && Y.alternate === null && t(p, T), (h = i(Y, h, R)), E === null ? (C = Y) : (E.sibling = Y), (E = Y), (T = M)
		}
		if (F.done) return n(p, T), Se && Lr(p, R), C
		if (T === null) {
			for (; !F.done; R++, F = v.next())
				(F = c(p, F.value, k)), F !== null && ((h = i(F, h, R)), E === null ? (C = F) : (E.sibling = F), (E = F))
			return Se && Lr(p, R), C
		}
		for (T = r(p, T); !F.done; R++, F = v.next())
			(F = m(T, p, R, F.value, k)),
				F !== null &&
					(e && F.alternate !== null && T.delete(F.key === null ? R : F.key),
					(h = i(F, h, R)),
					E === null ? (C = F) : (E.sibling = F),
					(E = F))
		return (
			e &&
				T.forEach(function (we) {
					return t(p, we)
				}),
			Se && Lr(p, R),
			C
		)
	}
	function x(p, h, v, k) {
		if (
			(typeof v == 'object' && v !== null && v.type === Po && v.key === null && (v = v.props.children),
			typeof v == 'object' && v !== null)
		) {
			switch (v.$$typeof) {
				case Ks:
					e: {
						for (var C = v.key, E = h; E !== null; ) {
							if (E.key === C) {
								if (((C = v.type), C === Po)) {
									if (E.tag === 7) {
										n(p, E.sibling), (h = o(E, v.props.children)), (h.return = p), (p = h)
										break e
									}
								} else if (E.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === nr && hg(C) === E.type)) {
									n(p, E.sibling), (h = o(E, v.props)), (h.ref = Vi(p, E, v)), (h.return = p), (p = h)
									break e
								}
								n(p, E)
								break
							} else t(p, E)
							E = E.sibling
						}
						v.type === Po
							? ((h = Yr(v.props.children, p.mode, k, v.key)), (h.return = p), (p = h))
							: ((k = Ll(v.type, v.key, v.props, null, p.mode, k)), (k.ref = Vi(p, h, v)), (k.return = p), (p = k))
					}
					return a(p)
				case _o:
					e: {
						for (E = v.key; h !== null; ) {
							if (h.key === E)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo === v.containerInfo &&
									h.stateNode.implementation === v.implementation
								) {
									n(p, h.sibling), (h = o(h, v.children || [])), (h.return = p), (p = h)
									break e
								} else {
									n(p, h)
									break
								}
							else t(p, h)
							h = h.sibling
						}
						;(h = Ed(v, p.mode, k)), (h.return = p), (p = h)
					}
					return a(p)
				case nr:
					return (E = v._init), x(p, h, E(v._payload), k)
			}
			if (ea(v)) return y(p, h, v, k)
			if (Li(v)) return g(p, h, v, k)
			rl(p, v)
		}
		return (typeof v == 'string' && v !== '') || typeof v == 'number'
			? ((v = '' + v),
			  h !== null && h.tag === 6
					? (n(p, h.sibling), (h = o(h, v)), (h.return = p), (p = h))
					: (n(p, h), (h = Td(v, p.mode, k)), (h.return = p), (p = h)),
			  a(p))
			: n(p, h)
	}
	return x
}
var di = Hb(!0),
	Kb = Hb(!1),
	gu = Cr(null),
	yu = null,
	Fo = null,
	Tp = null
function Ep() {
	Tp = Fo = yu = null
}
function $p(e) {
	var t = gu.current
	ge(gu), (e._currentValue = t)
}
function qf(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break
		e = e.return
	}
}
function Zo(e, t) {
	;(yu = e),
		(Tp = Fo = null),
		(e = e.dependencies),
		e !== null && e.firstContext !== null && (e.lanes & t && (vt = !0), (e.firstContext = null))
}
function Wt(e) {
	var t = e._currentValue
	if (Tp !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Fo === null)) {
			if (yu === null) throw Error(A(308))
			;(Fo = e), (yu.dependencies = { lanes: 0, firstContext: e })
		} else Fo = Fo.next = e
	return t
}
var Ur = null
function Rp(e) {
	Ur === null ? (Ur = [e]) : Ur.push(e)
}
function Gb(e, t, n, r) {
	var o = t.interleaved
	return o === null ? ((n.next = n), Rp(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Hn(e, r)
}
function Hn(e, t) {
	e.lanes |= t
	var n = e.alternate
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
	return n.tag === 3 ? n.stateNode : null
}
var rr = !1
function Ap(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	}
}
function qb(e, t) {
	;(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			})
}
function zn(e, t) {
	return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function pr(e, t, n) {
	var r = e.updateQueue
	if (r === null) return null
	if (((r = r.shared), X & 2)) {
		var o = r.pending
		return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Hn(e, n)
	}
	return (
		(o = r.interleaved), o === null ? ((t.next = t), Rp(r)) : ((t.next = o.next), (o.next = t)), (r.interleaved = t), Hn(e, n)
	)
}
function Al(e, t, n) {
	if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), vp(e, n)
	}
}
function pg(e, t) {
	var n = e.updateQueue,
		r = e.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var o = null,
			i = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null }
				i === null ? (o = i = a) : (i = i.next = a), (n = n.next)
			} while (n !== null)
			i === null ? (o = i = t) : (i = i.next = t)
		} else o = i = t
		;(n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
			(e.updateQueue = n)
		return
	}
	;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
}
function bu(e, t, n, r) {
	var o = e.updateQueue
	rr = !1
	var i = o.firstBaseUpdate,
		a = o.lastBaseUpdate,
		s = o.shared.pending
	if (s !== null) {
		o.shared.pending = null
		var l = s,
			u = l.next
		;(l.next = null), a === null ? (i = u) : (a.next = u), (a = l)
		var d = e.alternate
		d !== null &&
			((d = d.updateQueue),
			(s = d.lastBaseUpdate),
			s !== a && (s === null ? (d.firstBaseUpdate = u) : (s.next = u), (d.lastBaseUpdate = l)))
	}
	if (i !== null) {
		var c = o.baseState
		;(a = 0), (d = u = l = null), (s = i)
		do {
			var f = s.lane,
				m = s.eventTime
			if ((r & f) === f) {
				d !== null && (d = d.next = { eventTime: m, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null })
				e: {
					var y = e,
						g = s
					switch (((f = t), (m = n), g.tag)) {
						case 1:
							if (((y = g.payload), typeof y == 'function')) {
								c = y.call(m, c, f)
								break e
							}
							c = y
							break e
						case 3:
							y.flags = (y.flags & -65537) | 128
						case 0:
							if (((y = g.payload), (f = typeof y == 'function' ? y.call(m, c, f) : y), f == null)) break e
							c = Te({}, c, f)
							break e
						case 2:
							rr = !0
					}
				}
				s.callback !== null && s.lane !== 0 && ((e.flags |= 64), (f = o.effects), f === null ? (o.effects = [s]) : f.push(s))
			} else
				(m = { eventTime: m, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
					d === null ? ((u = d = m), (l = c)) : (d = d.next = m),
					(a |= f)
			if (((s = s.next), s === null)) {
				if (((s = o.shared.pending), s === null)) break
				;(f = s), (s = f.next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null)
			}
		} while (!0)
		if (
			(d === null && (l = c),
			(o.baseState = l),
			(o.firstBaseUpdate = u),
			(o.lastBaseUpdate = d),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t
			do (a |= o.lane), (o = o.next)
			while (o !== t)
		} else i === null && (o.shared.lanes = 0)
		;(io |= a), (e.lanes = a), (e.memoizedState = c)
	}
}
function mg(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback
			if (o !== null) {
				if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(A(191, o))
				o.call(r)
			}
		}
}
var vs = {},
	bn = Cr(vs),
	Na = Cr(vs),
	Va = Cr(vs)
function Hr(e) {
	if (e === vs) throw Error(A(174))
	return e
}
function Mp(e, t) {
	switch ((fe(Va, t), fe(Na, e), fe(bn, vs), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ef(null, '')
			break
		default:
			;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ef(t, e))
	}
	ge(bn), fe(bn, t)
}
function fi() {
	ge(bn), ge(Na), ge(Va)
}
function Yb(e) {
	Hr(Va.current)
	var t = Hr(bn.current),
		n = Ef(t, e.type)
	t !== n && (fe(Na, e), fe(bn, n))
}
function Ip(e) {
	Na.current === e && (ge(bn), ge(Na))
}
var Ce = Cr(0)
function xu(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState
			if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			;(t.child.return = t), (t = t.child)
			continue
		}
		if (t === e) break
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null
			t = t.return
		}
		;(t.sibling.return = t.return), (t = t.sibling)
	}
	return null
}
var Sd = []
function Fp() {
	for (var e = 0; e < Sd.length; e++) Sd[e]._workInProgressVersionPrimary = null
	Sd.length = 0
}
var Ml = Yn.ReactCurrentDispatcher,
	wd = Yn.ReactCurrentBatchConfig,
	oo = 0,
	Pe = null,
	ze = null,
	Ve = null,
	Su = !1,
	va = !1,
	Wa = 0,
	VP = 0
function Ze() {
	throw Error(A(321))
}
function jp(e, t) {
	if (t === null) return !1
	for (var n = 0; n < t.length && n < e.length; n++) if (!rn(e[n], t[n])) return !1
	return !0
}
function zp(e, t, n, r, o, i) {
	if (
		((oo = i),
		(Pe = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Ml.current = e === null || e.memoizedState === null ? KP : GP),
		(e = n(r, o)),
		va)
	) {
		i = 0
		do {
			if (((va = !1), (Wa = 0), 25 <= i)) throw Error(A(301))
			;(i += 1), (Ve = ze = null), (t.updateQueue = null), (Ml.current = qP), (e = n(r, o))
		} while (va)
	}
	if (((Ml.current = wu), (t = ze !== null && ze.next !== null), (oo = 0), (Ve = ze = Pe = null), (Su = !1), t))
		throw Error(A(300))
	return e
}
function Lp() {
	var e = Wa !== 0
	return (Wa = 0), e
}
function un() {
	var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
	return Ve === null ? (Pe.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve
}
function Ut() {
	if (ze === null) {
		var e = Pe.alternate
		e = e !== null ? e.memoizedState : null
	} else e = ze.next
	var t = Ve === null ? Pe.memoizedState : Ve.next
	if (t !== null) (Ve = t), (ze = e)
	else {
		if (e === null) throw Error(A(310))
		;(ze = e),
			(e = { memoizedState: ze.memoizedState, baseState: ze.baseState, baseQueue: ze.baseQueue, queue: ze.queue, next: null }),
			Ve === null ? (Pe.memoizedState = Ve = e) : (Ve = Ve.next = e)
	}
	return Ve
}
function Ua(e, t) {
	return typeof t == 'function' ? t(e) : t
}
function kd(e) {
	var t = Ut(),
		n = t.queue
	if (n === null) throw Error(A(311))
	n.lastRenderedReducer = e
	var r = ze,
		o = r.baseQueue,
		i = n.pending
	if (i !== null) {
		if (o !== null) {
			var a = o.next
			;(o.next = i.next), (i.next = a)
		}
		;(r.baseQueue = o = i), (n.pending = null)
	}
	if (o !== null) {
		;(i = o.next), (r = r.baseState)
		var s = (a = null),
			l = null,
			u = i
		do {
			var d = u.lane
			if ((oo & d) === d)
				l !== null &&
					(l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action))
			else {
				var c = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }
				l === null ? ((s = l = c), (a = r)) : (l = l.next = c), (Pe.lanes |= d), (io |= d)
			}
			u = u.next
		} while (u !== null && u !== i)
		l === null ? (a = r) : (l.next = s),
			rn(r, t.memoizedState) || (vt = !0),
			(t.memoizedState = r),
			(t.baseState = a),
			(t.baseQueue = l),
			(n.lastRenderedState = r)
	}
	if (((e = n.interleaved), e !== null)) {
		o = e
		do (i = o.lane), (Pe.lanes |= i), (io |= i), (o = o.next)
		while (o !== e)
	} else o === null && (n.lanes = 0)
	return [t.memoizedState, n.dispatch]
}
function Cd(e) {
	var t = Ut(),
		n = t.queue
	if (n === null) throw Error(A(311))
	n.lastRenderedReducer = e
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState
	if (o !== null) {
		n.pending = null
		var a = (o = o.next)
		do (i = e(i, a.action)), (a = a.next)
		while (a !== o)
		rn(i, t.memoizedState) || (vt = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i)
	}
	return [i, r]
}
function Xb() {}
function Qb(e, t) {
	var n = Pe,
		r = Ut(),
		o = t(),
		i = !rn(r.memoizedState, o)
	if (
		(i && ((r.memoizedState = o), (vt = !0)),
		(r = r.queue),
		Dp(ex.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (Ve !== null && Ve.memoizedState.tag & 1))
	) {
		if (((n.flags |= 2048), Ha(9, Jb.bind(null, n, r, o, t), void 0, null), We === null)) throw Error(A(349))
		oo & 30 || Zb(n, t, o)
	}
	return o
}
function Zb(e, t, n) {
	;(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Pe.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Jb(e, t, n, r) {
	;(t.value = n), (t.getSnapshot = r), tx(t) && nx(e)
}
function ex(e, t, n) {
	return n(function () {
		tx(t) && nx(e)
	})
}
function tx(e) {
	var t = e.getSnapshot
	e = e.value
	try {
		var n = t()
		return !rn(e, n)
	} catch {
		return !0
	}
}
function nx(e) {
	var t = Hn(e, 1)
	t !== null && tn(t, e, 1, -1)
}
function vg(e) {
	var t = un()
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ua, lastRenderedState: e }),
		(t.queue = e),
		(e = e.dispatch = HP.bind(null, Pe, e)),
		[t.memoizedState, e]
	)
}
function Ha(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Pe.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	)
}
function rx() {
	return Ut().memoizedState
}
function Il(e, t, n, r) {
	var o = un()
	;(Pe.flags |= e), (o.memoizedState = Ha(1 | t, n, void 0, r === void 0 ? null : r))
}
function tc(e, t, n, r) {
	var o = Ut()
	r = r === void 0 ? null : r
	var i = void 0
	if (ze !== null) {
		var a = ze.memoizedState
		if (((i = a.destroy), r !== null && jp(r, a.deps))) {
			o.memoizedState = Ha(t, n, i, r)
			return
		}
	}
	;(Pe.flags |= e), (o.memoizedState = Ha(1 | t, n, i, r))
}
function gg(e, t) {
	return Il(8390656, 8, e, t)
}
function Dp(e, t) {
	return tc(2048, 8, e, t)
}
function ox(e, t) {
	return tc(4, 2, e, t)
}
function ix(e, t) {
	return tc(4, 4, e, t)
}
function ax(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null)
			}
		)
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null
			}
		)
}
function sx(e, t, n) {
	return (n = n != null ? n.concat([e]) : null), tc(4, 4, ax.bind(null, t, e), n)
}
function Op() {}
function lx(e, t) {
	var n = Ut()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && jp(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function ux(e, t) {
	var n = Ut()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && jp(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function cx(e, t, n) {
	return oo & 21
		? (rn(n, t) || ((n = mb()), (Pe.lanes |= n), (io |= n), (e.baseState = !0)), t)
		: (e.baseState && ((e.baseState = !1), (vt = !0)), (e.memoizedState = n))
}
function WP(e, t) {
	var n = se
	;(se = n !== 0 && 4 > n ? n : 4), e(!0)
	var r = wd.transition
	wd.transition = {}
	try {
		e(!1), t()
	} finally {
		;(se = n), (wd.transition = r)
	}
}
function dx() {
	return Ut().memoizedState
}
function UP(e, t, n) {
	var r = vr(e)
	if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), fx(e))) hx(t, n)
	else if (((n = Gb(e, t, n, r)), n !== null)) {
		var o = ct()
		tn(n, e, r, o), px(n, t, r)
	}
}
function HP(e, t, n) {
	var r = vr(e),
		o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
	if (fx(e)) hx(t, o)
	else {
		var i = e.alternate
		if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
			try {
				var a = t.lastRenderedState,
					s = i(a, n)
				if (((o.hasEagerState = !0), (o.eagerState = s), rn(s, a))) {
					var l = t.interleaved
					l === null ? ((o.next = o), Rp(t)) : ((o.next = l.next), (l.next = o)), (t.interleaved = o)
					return
				}
			} catch {
			} finally {
			}
		;(n = Gb(e, t, o, r)), n !== null && ((o = ct()), tn(n, e, r, o), px(n, t, r))
	}
}
function fx(e) {
	var t = e.alternate
	return e === Pe || (t !== null && t === Pe)
}
function hx(e, t) {
	va = Su = !0
	var n = e.pending
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function px(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), vp(e, n)
	}
}
var wu = {
		readContext: Wt,
		useCallback: Ze,
		useContext: Ze,
		useEffect: Ze,
		useImperativeHandle: Ze,
		useInsertionEffect: Ze,
		useLayoutEffect: Ze,
		useMemo: Ze,
		useReducer: Ze,
		useRef: Ze,
		useState: Ze,
		useDebugValue: Ze,
		useDeferredValue: Ze,
		useTransition: Ze,
		useMutableSource: Ze,
		useSyncExternalStore: Ze,
		useId: Ze,
		unstable_isNewReconciler: !1,
	},
	KP = {
		readContext: Wt,
		useCallback: function (e, t) {
			return (un().memoizedState = [e, t === void 0 ? null : t]), e
		},
		useContext: Wt,
		useEffect: gg,
		useImperativeHandle: function (e, t, n) {
			return (n = n != null ? n.concat([e]) : null), Il(4194308, 4, ax.bind(null, t, e), n)
		},
		useLayoutEffect: function (e, t) {
			return Il(4194308, 4, e, t)
		},
		useInsertionEffect: function (e, t) {
			return Il(4, 2, e, t)
		},
		useMemo: function (e, t) {
			var n = un()
			return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
		},
		useReducer: function (e, t, n) {
			var r = un()
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
				(r.queue = e),
				(e = e.dispatch = UP.bind(null, Pe, e)),
				[r.memoizedState, e]
			)
		},
		useRef: function (e) {
			var t = un()
			return (e = { current: e }), (t.memoizedState = e)
		},
		useState: vg,
		useDebugValue: Op,
		useDeferredValue: function (e) {
			return (un().memoizedState = e)
		},
		useTransition: function () {
			var e = vg(!1),
				t = e[0]
			return (e = WP.bind(null, e[1])), (un().memoizedState = e), [t, e]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Pe,
				o = un()
			if (Se) {
				if (n === void 0) throw Error(A(407))
				n = n()
			} else {
				if (((n = t()), We === null)) throw Error(A(349))
				oo & 30 || Zb(r, t, n)
			}
			o.memoizedState = n
			var i = { value: n, getSnapshot: t }
			return (o.queue = i), gg(ex.bind(null, r, i, e), [e]), (r.flags |= 2048), Ha(9, Jb.bind(null, r, i, n, t), void 0, null), n
		},
		useId: function () {
			var e = un(),
				t = We.identifierPrefix
			if (Se) {
				var n = Mn,
					r = An
				;(n = (r & ~(1 << (32 - en(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = Wa++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':')
			} else (n = VP++), (t = ':' + t + 'r' + n.toString(32) + ':')
			return (e.memoizedState = t)
		},
		unstable_isNewReconciler: !1,
	},
	GP = {
		readContext: Wt,
		useCallback: lx,
		useContext: Wt,
		useEffect: Dp,
		useImperativeHandle: sx,
		useInsertionEffect: ox,
		useLayoutEffect: ix,
		useMemo: ux,
		useReducer: kd,
		useRef: rx,
		useState: function () {
			return kd(Ua)
		},
		useDebugValue: Op,
		useDeferredValue: function (e) {
			var t = Ut()
			return cx(t, ze.memoizedState, e)
		},
		useTransition: function () {
			var e = kd(Ua)[0],
				t = Ut().memoizedState
			return [e, t]
		},
		useMutableSource: Xb,
		useSyncExternalStore: Qb,
		useId: dx,
		unstable_isNewReconciler: !1,
	},
	qP = {
		readContext: Wt,
		useCallback: lx,
		useContext: Wt,
		useEffect: Dp,
		useImperativeHandle: sx,
		useInsertionEffect: ox,
		useLayoutEffect: ix,
		useMemo: ux,
		useReducer: Cd,
		useRef: rx,
		useState: function () {
			return Cd(Ua)
		},
		useDebugValue: Op,
		useDeferredValue: function (e) {
			var t = Ut()
			return ze === null ? (t.memoizedState = e) : cx(t, ze.memoizedState, e)
		},
		useTransition: function () {
			var e = Cd(Ua)[0],
				t = Ut().memoizedState
			return [e, t]
		},
		useMutableSource: Xb,
		useSyncExternalStore: Qb,
		useId: dx,
		unstable_isNewReconciler: !1,
	}
function Xt(e, t) {
	if (e && e.defaultProps) {
		;(t = Te({}, t)), (e = e.defaultProps)
		for (var n in e) t[n] === void 0 && (t[n] = e[n])
		return t
	}
	return t
}
function Yf(e, t, n, r) {
	;(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Te({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n)
}
var nc = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? ho(e) === e : !1
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals
		var r = ct(),
			o = vr(e),
			i = zn(r, o)
		;(i.payload = t), n != null && (i.callback = n), (t = pr(e, i, o)), t !== null && (tn(t, e, o, r), Al(t, e, o))
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals
		var r = ct(),
			o = vr(e),
			i = zn(r, o)
		;(i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = pr(e, i, o)), t !== null && (tn(t, e, o, r), Al(t, e, o))
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals
		var n = ct(),
			r = vr(e),
			o = zn(n, r)
		;(o.tag = 2), t != null && (o.callback = t), (t = pr(e, o, r)), t !== null && (tn(t, e, r, n), Al(t, e, r))
	},
}
function yg(e, t, n, r, o, i, a) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, a)
			: t.prototype && t.prototype.isPureReactComponent
			? !La(n, r) || !La(o, i)
			: !0
	)
}
function mx(e, t, n) {
	var r = !1,
		o = xr,
		i = t.contextType
	return (
		typeof i == 'object' && i !== null
			? (i = Wt(i))
			: ((o = yt(t) ? no : it.current), (r = t.contextTypes), (i = (r = r != null) ? ui(e, o) : xr)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = nc),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	)
}
function bg(e, t, n, r) {
	;(e = t.state),
		typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && nc.enqueueReplaceState(t, t.state, null)
}
function Xf(e, t, n, r) {
	var o = e.stateNode
	;(o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ap(e)
	var i = t.contextType
	typeof i == 'object' && i !== null ? (o.context = Wt(i)) : ((i = yt(t) ? no : it.current), (o.context = ui(e, i))),
		(o.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (Yf(e, t, i, n), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function' ||
			(typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
			((t = o.state),
			typeof o.componentWillMount == 'function' && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
			t !== o.state && nc.enqueueReplaceState(o, o.state, null),
			bu(e, n, o, r),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function hi(e, t) {
	try {
		var n = '',
			r = t
		do (n += w2(r)), (r = r.return)
		while (r)
		var o = n
	} catch (i) {
		o =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack
	}
	return { value: e, source: t, stack: o, digest: null }
}
function _d(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Qf(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var YP = typeof WeakMap == 'function' ? WeakMap : Map
function vx(e, t, n) {
	;(n = zn(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = t.value
	return (
		(n.callback = function () {
			Cu || ((Cu = !0), (sh = r)), Qf(e, t)
		}),
		n
	)
}
function gx(e, t, n) {
	;(n = zn(-1, n)), (n.tag = 3)
	var r = e.type.getDerivedStateFromError
	if (typeof r == 'function') {
		var o = t.value
		;(n.payload = function () {
			return r(o)
		}),
			(n.callback = function () {
				Qf(e, t)
			})
	}
	var i = e.stateNode
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				Qf(e, t), typeof r != 'function' && (mr === null ? (mr = new Set([this])) : mr.add(this))
				var a = t.stack
				this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
			}),
		n
	)
}
function xg(e, t, n) {
	var r = e.pingCache
	if (r === null) {
		r = e.pingCache = new YP()
		var o = new Set()
		r.set(t, o)
	} else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
	o.has(n) || (o.add(n), (e = uT.bind(null, e, t, n)), t.then(e, e))
}
function Sg(e) {
	do {
		var t
		if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
		e = e.return
	} while (e !== null)
	return null
}
function wg(e, t, n, r, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = zn(-1, 1)), (t.tag = 2), pr(n, t, 1))),
				  (n.lanes |= 1)),
		  e)
}
var XP = Yn.ReactCurrentOwner,
	vt = !1
function st(e, t, n, r) {
	t.child = e === null ? Kb(t, null, n, r) : di(t, e.child, n, r)
}
function kg(e, t, n, r, o) {
	n = n.render
	var i = t.ref
	return (
		Zo(t, o),
		(r = zp(e, t, n, r, i, o)),
		(n = Lp()),
		e !== null && !vt
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Kn(e, t, o))
			: (Se && n && Cp(t), (t.flags |= 1), st(e, t, r, o), t.child)
	)
}
function Cg(e, t, n, r, o) {
	if (e === null) {
		var i = n.type
		return typeof i == 'function' && !Gp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), yx(e, t, i, r, o))
			: ((e = Ll(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
	}
	if (((i = e.child), !(e.lanes & o))) {
		var a = i.memoizedProps
		if (((n = n.compare), (n = n !== null ? n : La), n(a, r) && e.ref === t.ref)) return Kn(e, t, o)
	}
	return (t.flags |= 1), (e = gr(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function yx(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps
		if (La(i, r) && e.ref === t.ref)
			if (((vt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (vt = !0)
			else return (t.lanes = e.lanes), Kn(e, t, o)
	}
	return Zf(e, t, n, r, o)
}
function bx(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null
	if (r.mode === 'hidden')
		if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), fe(zo, Ct), (Ct |= n)
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
					(t.updateQueue = null),
					fe(zo, Ct),
					(Ct |= e),
					null
				)
			;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				fe(zo, Ct),
				(Ct |= r)
		}
	else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), fe(zo, Ct), (Ct |= r)
	return st(e, t, o, n), t.child
}
function xx(e, t) {
	var n = t.ref
	;((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
}
function Zf(e, t, n, r, o) {
	var i = yt(n) ? no : it.current
	return (
		(i = ui(t, i)),
		Zo(t, o),
		(n = zp(e, t, n, r, i, o)),
		(r = Lp()),
		e !== null && !vt
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Kn(e, t, o))
			: (Se && r && Cp(t), (t.flags |= 1), st(e, t, n, o), t.child)
	)
}
function _g(e, t, n, r, o) {
	if (yt(n)) {
		var i = !0
		pu(t)
	} else i = !1
	if ((Zo(t, o), t.stateNode === null)) Fl(e, t), mx(t, n, r), Xf(t, n, r, o), (r = !0)
	else if (e === null) {
		var a = t.stateNode,
			s = t.memoizedProps
		a.props = s
		var l = a.context,
			u = n.contextType
		typeof u == 'object' && u !== null ? (u = Wt(u)) : ((u = yt(n) ? no : it.current), (u = ui(t, u)))
		var d = n.getDerivedStateFromProps,
			c = typeof d == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
		c ||
			(typeof a.UNSAFE_componentWillReceiveProps != 'function' && typeof a.componentWillReceiveProps != 'function') ||
			((s !== r || l !== u) && bg(t, a, r, u)),
			(rr = !1)
		var f = t.memoizedState
		;(a.state = f),
			bu(t, r, a, o),
			(l = t.memoizedState),
			s !== r || f !== l || gt.current || rr
				? (typeof d == 'function' && (Yf(t, n, d, r), (l = t.memoizedState)),
				  (s = rr || yg(t, n, s, r, f, l, u))
						? (c ||
								(typeof a.UNSAFE_componentWillMount != 'function' && typeof a.componentWillMount != 'function') ||
								(typeof a.componentWillMount == 'function' && a.componentWillMount(),
								typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount()),
						  typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = l)),
				  (a.props = r),
				  (a.state = l),
				  (a.context = u),
				  (r = s))
				: (typeof a.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
	} else {
		;(a = t.stateNode),
			qb(e, t),
			(s = t.memoizedProps),
			(u = t.type === t.elementType ? s : Xt(t.type, s)),
			(a.props = u),
			(c = t.pendingProps),
			(f = a.context),
			(l = n.contextType),
			typeof l == 'object' && l !== null ? (l = Wt(l)) : ((l = yt(n) ? no : it.current), (l = ui(t, l)))
		var m = n.getDerivedStateFromProps
		;(d = typeof m == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
			(typeof a.UNSAFE_componentWillReceiveProps != 'function' && typeof a.componentWillReceiveProps != 'function') ||
			((s !== c || f !== l) && bg(t, a, r, l)),
			(rr = !1),
			(f = t.memoizedState),
			(a.state = f),
			bu(t, r, a, o)
		var y = t.memoizedState
		s !== c || f !== y || gt.current || rr
			? (typeof m == 'function' && (Yf(t, n, m, r), (y = t.memoizedState)),
			  (u = rr || yg(t, n, u, r, f, y, l) || !1)
					? (d ||
							(typeof a.UNSAFE_componentWillUpdate != 'function' && typeof a.componentWillUpdate != 'function') ||
							(typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(r, y, l),
							typeof a.UNSAFE_componentWillUpdate == 'function' && a.UNSAFE_componentWillUpdate(r, y, l)),
					  typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof a.componentDidUpdate != 'function' || (s === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
					  typeof a.getSnapshotBeforeUpdate != 'function' ||
							(s === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = y)),
			  (a.props = r),
			  (a.state = y),
			  (a.context = l),
			  (r = u))
			: (typeof a.componentDidUpdate != 'function' || (s === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
			  typeof a.getSnapshotBeforeUpdate != 'function' || (s === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
			  (r = !1))
	}
	return Jf(e, t, n, r, i, o)
}
function Jf(e, t, n, r, o, i) {
	xx(e, t)
	var a = (t.flags & 128) !== 0
	if (!r && !a) return o && cg(t, n, !1), Kn(e, t, i)
	;(r = t.stateNode), (XP.current = t)
	var s = a && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
	return (
		(t.flags |= 1),
		e !== null && a ? ((t.child = di(t, e.child, null, i)), (t.child = di(t, null, s, i))) : st(e, t, s, i),
		(t.memoizedState = r.state),
		o && cg(t, n, !0),
		t.child
	)
}
function Sx(e) {
	var t = e.stateNode
	t.pendingContext ? ug(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ug(e, t.context, !1),
		Mp(e, t.containerInfo)
}
function Pg(e, t, n, r, o) {
	return ci(), Pp(o), (t.flags |= 256), st(e, t, n, r), t.child
}
var eh = { dehydrated: null, treeContext: null, retryLane: 0 }
function th(e) {
	return { baseLanes: e, cachePool: null, transitions: null }
}
function wx(e, t, n) {
	var r = t.pendingProps,
		o = Ce.current,
		i = !1,
		a = (t.flags & 128) !== 0,
		s
	if (
		((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
		fe(Ce, o & 1),
		e === null)
	)
		return (
			Gf(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
				: ((a = r.children),
				  (e = r.fallback),
				  i
						? ((r = t.mode),
						  (i = t.child),
						  (a = { mode: 'hidden', children: a }),
						  !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = a)) : (i = ic(a, r, 0, null)),
						  (e = Yr(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = th(n)),
						  (t.memoizedState = eh),
						  e)
						: Bp(t, a))
		)
	if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null))) return QP(e, t, a, r, s, o, n)
	if (i) {
		;(i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling)
		var l = { mode: 'hidden', children: r.children }
		return (
			!(a & 1) && t.child !== o
				? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
				: ((r = gr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
			s !== null ? (i = gr(s, i)) : ((i = Yr(i, a, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(a = e.child.memoizedState),
			(a = a === null ? th(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
			(i.memoizedState = a),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = eh),
			r
		)
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = gr(i, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	)
}
function Bp(e, t) {
	return (t = ic({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function ol(e, t, n, r) {
	return (
		r !== null && Pp(r),
		di(t, e.child, null, n),
		(e = Bp(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	)
}
function QP(e, t, n, r, o, i, a) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = _d(Error(A(422)))), ol(e, t, a, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (o = t.mode),
			  (r = ic({ mode: 'visible', children: r.children }, o, 0, null)),
			  (i = Yr(i, o, a, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && di(t, e.child, null, a),
			  (t.child.memoizedState = th(a)),
			  (t.memoizedState = eh),
			  i)
	if (!(t.mode & 1)) return ol(e, t, a, null)
	if (o.data === '$!') {
		if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst
		return (r = s), (i = Error(A(419))), (r = _d(i, r, void 0)), ol(e, t, a, r)
	}
	if (((s = (a & e.childLanes) !== 0), vt || s)) {
		if (((r = We), r !== null)) {
			switch (a & -a) {
				case 4:
					o = 2
					break
				case 16:
					o = 8
					break
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32
					break
				case 536870912:
					o = 268435456
					break
				default:
					o = 0
			}
			;(o = o & (r.suspendedLanes | a) ? 0 : o), o !== 0 && o !== i.retryLane && ((i.retryLane = o), Hn(e, o), tn(r, e, o, -1))
		}
		return Kp(), (r = _d(Error(A(421)))), ol(e, t, a, r)
	}
	return o.data === '$?'
		? ((t.flags |= 128), (t.child = e.child), (t = cT.bind(null, e)), (o._reactRetry = t), null)
		: ((e = i.treeContext),
		  (_t = hr(o.nextSibling)),
		  (Pt = t),
		  (Se = !0),
		  (Zt = null),
		  e !== null && ((Ot[Bt++] = An), (Ot[Bt++] = Mn), (Ot[Bt++] = ro), (An = e.id), (Mn = e.overflow), (ro = t)),
		  (t = Bp(t, r.children)),
		  (t.flags |= 4096),
		  t)
}
function Tg(e, t, n) {
	e.lanes |= t
	var r = e.alternate
	r !== null && (r.lanes |= t), qf(e.return, t, n)
}
function Pd(e, t, n, r, o) {
	var i = e.memoizedState
	i === null
		? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
		: ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = o))
}
function kx(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail
	if ((st(e, t, r.children, n), (r = Ce.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Tg(e, n, t)
				else if (e.tag === 19) Tg(e, n, t)
				else if (e.child !== null) {
					;(e.child.return = e), (e = e.child)
					continue
				}
				if (e === t) break e
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e
					e = e.return
				}
				;(e.sibling.return = e.return), (e = e.sibling)
			}
		r &= 1
	}
	if ((fe(Ce, r), !(t.mode & 1))) t.memoizedState = null
	else
		switch (o) {
			case 'forwards':
				for (n = t.child, o = null; n !== null; ) (e = n.alternate), e !== null && xu(e) === null && (o = n), (n = n.sibling)
				;(n = o), n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), Pd(t, !1, o, n, i)
				break
			case 'backwards':
				for (n = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && xu(e) === null)) {
						t.child = o
						break
					}
					;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
				}
				Pd(t, !0, n, null, i)
				break
			case 'together':
				Pd(t, !1, null, null, void 0)
				break
			default:
				t.memoizedState = null
		}
	return t.child
}
function Fl(e, t) {
	!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Kn(e, t, n) {
	if ((e !== null && (t.dependencies = e.dependencies), (io |= t.lanes), !(n & t.childLanes))) return null
	if (e !== null && t.child !== e.child) throw Error(A(153))
	if (t.child !== null) {
		for (e = t.child, n = gr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
			(e = e.sibling), (n = n.sibling = gr(e, e.pendingProps)), (n.return = t)
		n.sibling = null
	}
	return t.child
}
function ZP(e, t, n) {
	switch (t.tag) {
		case 3:
			Sx(t), ci()
			break
		case 5:
			Yb(t)
			break
		case 1:
			yt(t.type) && pu(t)
			break
		case 4:
			Mp(t, t.stateNode.containerInfo)
			break
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value
			fe(gu, r._currentValue), (r._currentValue = o)
			break
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (fe(Ce, Ce.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? wx(e, t, n)
					: (fe(Ce, Ce.current & 1), (e = Kn(e, t, n)), e !== null ? e.sibling : null)
			fe(Ce, Ce.current & 1)
			break
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return kx(e, t, n)
				t.flags |= 128
			}
			if (
				((o = t.memoizedState),
				o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
				fe(Ce, Ce.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (t.lanes = 0), bx(e, t, n)
	}
	return Kn(e, t, n)
}
var Cx, nh, _x, Px
Cx = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === t) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
nh = function () {}
_x = function (e, t, n, r) {
	var o = e.memoizedProps
	if (o !== r) {
		;(e = t.stateNode), Hr(bn.current)
		var i = null
		switch (n) {
			case 'input':
				;(o = Cf(e, o)), (r = Cf(e, r)), (i = [])
				break
			case 'select':
				;(o = Te({}, o, { value: void 0 })), (r = Te({}, r, { value: void 0 })), (i = [])
				break
			case 'textarea':
				;(o = Tf(e, o)), (r = Tf(e, r)), (i = [])
				break
			default:
				typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = fu)
		}
		$f(n, r)
		var a
		n = null
		for (u in o)
			if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
				if (u === 'style') {
					var s = o[u]
					for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''))
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(Ra.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
		for (u in r) {
			var l = r[u]
			if (((s = o != null ? o[u] : void 0), r.hasOwnProperty(u) && l !== s && (l != null || s != null)))
				if (u === 'style')
					if (s) {
						for (a in s) !s.hasOwnProperty(a) || (l && l.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''))
						for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), (n[a] = l[a]))
					} else n || (i || (i = []), i.push(u, n)), (n = l)
				else
					u === 'dangerouslySetInnerHTML'
						? ((l = l ? l.__html : void 0), (s = s ? s.__html : void 0), l != null && s !== l && (i = i || []).push(u, l))
						: u === 'children'
						? (typeof l != 'string' && typeof l != 'number') || (i = i || []).push(u, '' + l)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (Ra.hasOwnProperty(u)
								? (l != null && u === 'onScroll' && me('scroll', e), i || s === l || (i = []))
								: (i = i || []).push(u, l))
		}
		n && (i = i || []).push('style', n)
		var u = i
		;(t.updateQueue = u) && (t.flags |= 4)
	}
}
Px = function (e, t, n, r) {
	n !== r && (t.flags |= 4)
}
function Wi(e, t) {
	if (!Se)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail
				for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
				n === null ? (e.tail = null) : (n.sibling = null)
				break
			case 'collapsed':
				n = e.tail
				for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
				r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
		}
}
function Je(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0
	if (t)
		for (var o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes), (r |= o.subtreeFlags & 14680064), (r |= o.flags & 14680064), (o.return = e), (o = o.sibling)
	else
		for (o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling)
	return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function JP(e, t, n) {
	var r = t.pendingProps
	switch ((_p(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Je(t), null
		case 1:
			return yt(t.type) && hu(), Je(t), null
		case 3:
			return (
				(r = t.stateNode),
				fi(),
				ge(gt),
				ge(it),
				Fp(),
				r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(nl(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Zt !== null && (ch(Zt), (Zt = null)))),
				nh(e, t),
				Je(t),
				null
			)
		case 5:
			Ip(t)
			var o = Hr(Va.current)
			if (((n = t.type), e !== null && t.stateNode != null))
				_x(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(A(166))
					return Je(t), null
				}
				if (((e = Hr(bn.current)), nl(t))) {
					;(r = t.stateNode), (n = t.type)
					var i = t.memoizedProps
					switch (((r[hn] = t), (r[Ba] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							me('cancel', r), me('close', r)
							break
						case 'iframe':
						case 'object':
						case 'embed':
							me('load', r)
							break
						case 'video':
						case 'audio':
							for (o = 0; o < na.length; o++) me(na[o], r)
							break
						case 'source':
							me('error', r)
							break
						case 'img':
						case 'image':
						case 'link':
							me('error', r), me('load', r)
							break
						case 'details':
							me('toggle', r)
							break
						case 'input':
							zv(r, i), me('invalid', r)
							break
						case 'select':
							;(r._wrapperState = { wasMultiple: !!i.multiple }), me('invalid', r)
							break
						case 'textarea':
							Dv(r, i), me('invalid', r)
					}
					$f(n, i), (o = null)
					for (var a in i)
						if (i.hasOwnProperty(a)) {
							var s = i[a]
							a === 'children'
								? typeof s == 'string'
									? r.textContent !== s && (i.suppressHydrationWarning !== !0 && tl(r.textContent, s, e), (o = ['children', s]))
									: typeof s == 'number' &&
									  r.textContent !== '' + s &&
									  (i.suppressHydrationWarning !== !0 && tl(r.textContent, s, e), (o = ['children', '' + s]))
								: Ra.hasOwnProperty(a) && s != null && a === 'onScroll' && me('scroll', r)
						}
					switch (n) {
						case 'input':
							Gs(r), Lv(r, i, !0)
							break
						case 'textarea':
							Gs(r), Ov(r)
							break
						case 'select':
						case 'option':
							break
						default:
							typeof i.onClick == 'function' && (r.onclick = fu)
					}
					;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
				} else {
					;(a = o.nodeType === 9 ? o : o.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = eb(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = a.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = a.createElement(n, { is: r.is }))
								: ((e = a.createElement(n)),
								  n === 'select' && ((a = e), r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size)))
							: (e = a.createElementNS(e, n)),
						(e[hn] = t),
						(e[Ba] = r),
						Cx(e, t, !1, !1),
						(t.stateNode = e)
					e: {
						switch (((a = Rf(n, r)), n)) {
							case 'dialog':
								me('cancel', e), me('close', e), (o = r)
								break
							case 'iframe':
							case 'object':
							case 'embed':
								me('load', e), (o = r)
								break
							case 'video':
							case 'audio':
								for (o = 0; o < na.length; o++) me(na[o], e)
								o = r
								break
							case 'source':
								me('error', e), (o = r)
								break
							case 'img':
							case 'image':
							case 'link':
								me('error', e), me('load', e), (o = r)
								break
							case 'details':
								me('toggle', e), (o = r)
								break
							case 'input':
								zv(e, r), (o = Cf(e, r)), me('invalid', e)
								break
							case 'option':
								o = r
								break
							case 'select':
								;(e._wrapperState = { wasMultiple: !!r.multiple }), (o = Te({}, r, { value: void 0 })), me('invalid', e)
								break
							case 'textarea':
								Dv(e, r), (o = Tf(e, r)), me('invalid', e)
								break
							default:
								o = r
						}
						$f(n, o), (s = o)
						for (i in s)
							if (s.hasOwnProperty(i)) {
								var l = s[i]
								i === 'style'
									? rb(e, l)
									: i === 'dangerouslySetInnerHTML'
									? ((l = l ? l.__html : void 0), l != null && tb(e, l))
									: i === 'children'
									? typeof l == 'string'
										? (n !== 'textarea' || l !== '') && Aa(e, l)
										: typeof l == 'number' && Aa(e, '' + l)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (Ra.hasOwnProperty(i) ? l != null && i === 'onScroll' && me('scroll', e) : l != null && cp(e, i, l, a))
							}
						switch (n) {
							case 'input':
								Gs(e), Lv(e, r, !1)
								break
							case 'textarea':
								Gs(e), Ov(e)
								break
							case 'option':
								r.value != null && e.setAttribute('value', '' + br(r.value))
								break
							case 'select':
								;(e.multiple = !!r.multiple),
									(i = r.value),
									i != null ? qo(e, !!r.multiple, i, !1) : r.defaultValue != null && qo(e, !!r.multiple, r.defaultValue, !0)
								break
							default:
								typeof o.onClick == 'function' && (e.onclick = fu)
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus
								break e
							case 'img':
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
			}
			return Je(t), null
		case 6:
			if (e && t.stateNode != null) Px(e, t, e.memoizedProps, r)
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(A(166))
				if (((n = Hr(Va.current)), Hr(bn.current), nl(t))) {
					if (((r = t.stateNode), (n = t.memoizedProps), (r[hn] = t), (i = r.nodeValue !== n) && ((e = Pt), e !== null)))
						switch (e.tag) {
							case 3:
								tl(r.nodeValue, n, (e.mode & 1) !== 0)
								break
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 && tl(r.nodeValue, n, (e.mode & 1) !== 0)
						}
					i && (t.flags |= 4)
				} else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[hn] = t), (t.stateNode = r)
			}
			return Je(t), null
		case 13:
			if ((ge(Ce), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
				if (Se && _t !== null && t.mode & 1 && !(t.flags & 128)) Ub(), ci(), (t.flags |= 98560), (i = !1)
				else if (((i = nl(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(A(318))
						if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(A(317))
						i[hn] = t
					} else ci(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
					Je(t), (i = !1)
				} else Zt !== null && (ch(Zt), (Zt = null)), (i = !0)
				if (!i) return t.flags & 65536 ? t : null
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192), t.mode & 1 && (e === null || Ce.current & 1 ? Le === 0 && (Le = 3) : Kp())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Je(t),
				  null)
		case 4:
			return fi(), nh(e, t), e === null && Da(t.stateNode.containerInfo), Je(t), null
		case 10:
			return $p(t.type._context), Je(t), null
		case 17:
			return yt(t.type) && hu(), Je(t), null
		case 19:
			if ((ge(Ce), (i = t.memoizedState), i === null)) return Je(t), null
			if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
				if (r) Wi(i, !1)
				else {
					if (Le !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((a = xu(e)), a !== null)) {
								for (
									t.flags |= 128,
										Wi(i, !1),
										r = a.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(a = i.alternate),
										a === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = a.childLanes),
											  (i.lanes = a.lanes),
											  (i.child = a.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps = a.memoizedProps),
											  (i.memoizedState = a.memoizedState),
											  (i.updateQueue = a.updateQueue),
											  (i.type = a.type),
											  (e = a.dependencies),
											  (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
										(n = n.sibling)
								return fe(Ce, (Ce.current & 1) | 2), t.child
							}
							e = e.sibling
						}
					i.tail !== null && Ae() > pi && ((t.flags |= 128), (r = !0), Wi(i, !1), (t.lanes = 4194304))
				}
			else {
				if (!r)
					if (((e = xu(a)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Wi(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !a.alternate && !Se)
						)
							return Je(t), null
					} else
						2 * Ae() - i.renderingStartTime > pi &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Wi(i, !1), (t.lanes = 4194304))
				i.isBackwards
					? ((a.sibling = t.child), (t.child = a))
					: ((n = i.last), n !== null ? (n.sibling = a) : (t.child = a), (i.last = a))
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = Ae()),
				  (t.sibling = null),
				  (n = Ce.current),
				  fe(Ce, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Je(t), null)
		case 22:
		case 23:
			return (
				Hp(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1 ? Ct & 1073741824 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error(A(156, t.tag))
}
function eT(e, t) {
	switch ((_p(t), t.tag)) {
		case 1:
			return yt(t.type) && hu(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
		case 3:
			return fi(), ge(gt), ge(it), Fp(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
		case 5:
			return Ip(t), null
		case 13:
			if ((ge(Ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(A(340))
				ci()
			}
			return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
		case 19:
			return ge(Ce), null
		case 4:
			return fi(), null
		case 10:
			return $p(t.type._context), null
		case 22:
		case 23:
			return Hp(), null
		case 24:
			return null
		default:
			return null
	}
}
var il = !1,
	nt = !1,
	tT = typeof WeakSet == 'function' ? WeakSet : Set,
	j = null
function jo(e, t) {
	var n = e.ref
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null)
			} catch (r) {
				Ee(e, t, r)
			}
		else n.current = null
}
function rh(e, t, n) {
	try {
		n()
	} catch (r) {
		Ee(e, t, r)
	}
}
var Eg = !1
function nT(e, t) {
	if (((Bf = uu), (e = Ab()), kp(e))) {
		if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var o = r.anchorOffset,
						i = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, i.nodeType
					} catch {
						n = null
						break e
					}
					var a = 0,
						s = -1,
						l = -1,
						u = 0,
						d = 0,
						c = e,
						f = null
					t: for (;;) {
						for (
							var m;
							c !== n || (o !== 0 && c.nodeType !== 3) || (s = a + o),
								c !== i || (r !== 0 && c.nodeType !== 3) || (l = a + r),
								c.nodeType === 3 && (a += c.nodeValue.length),
								(m = c.firstChild) !== null;

						)
							(f = c), (c = m)
						for (;;) {
							if (c === e) break t
							if ((f === n && ++u === o && (s = a), f === i && ++d === r && (l = a), (m = c.nextSibling) !== null)) break
							;(c = f), (f = c.parentNode)
						}
						c = m
					}
					n = s === -1 || l === -1 ? null : { start: s, end: l }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (Nf = { focusedElem: e, selectionRange: n }, uu = !1, j = t; j !== null; )
		if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (j = e)
		else
			for (; j !== null; ) {
				t = j
				try {
					var y = t.alternate
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (y !== null) {
									var g = y.memoizedProps,
										x = y.memoizedState,
										p = t.stateNode,
										h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Xt(t.type, g), x)
									p.__reactInternalSnapshotBeforeUpdate = h
								}
								break
							case 3:
								var v = t.stateNode.containerInfo
								v.nodeType === 1
									? (v.textContent = '')
									: v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error(A(163))
						}
				} catch (k) {
					Ee(t, t.return, k)
				}
				if (((e = t.sibling), e !== null)) {
					;(e.return = t.return), (j = e)
					break
				}
				j = t.return
			}
	return (y = Eg), (Eg = !1), y
}
function ga(e, t, n) {
	var r = t.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var o = (r = r.next)
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy
				;(o.destroy = void 0), i !== void 0 && rh(t, n, i)
			}
			o = o.next
		} while (o !== r)
	}
}
function rc(e, t) {
	if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
		var n = (t = t.next)
		do {
			if ((n.tag & e) === e) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}
function oh(e) {
	var t = e.ref
	if (t !== null) {
		var n = e.stateNode
		switch (e.tag) {
			case 5:
				e = n
				break
			default:
				e = n
		}
		typeof t == 'function' ? t(e) : (t.current = e)
	}
}
function Tx(e) {
	var t = e.alternate
	t !== null && ((e.alternate = null), Tx(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[hn], delete t[Ba], delete t[Uf], delete t[DP], delete t[OP])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null)
}
function Ex(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function $g(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Ex(e.return)) return null
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e
			;(e.child.return = e), (e = e.child)
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}
function ih(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = fu))
	else if (r !== 4 && ((e = e.child), e !== null)) for (ih(e, t, n), e = e.sibling; e !== null; ) ih(e, t, n), (e = e.sibling)
}
function ah(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
	else if (r !== 4 && ((e = e.child), e !== null)) for (ah(e, t, n), e = e.sibling; e !== null; ) ah(e, t, n), (e = e.sibling)
}
var Ge = null,
	Qt = !1
function Qn(e, t, n) {
	for (n = n.child; n !== null; ) $x(e, t, n), (n = n.sibling)
}
function $x(e, t, n) {
	if (yn && typeof yn.onCommitFiberUnmount == 'function')
		try {
			yn.onCommitFiberUnmount(Yu, n)
		} catch {}
	switch (n.tag) {
		case 5:
			nt || jo(n, t)
		case 6:
			var r = Ge,
				o = Qt
			;(Ge = null),
				Qn(e, t, n),
				(Ge = r),
				(Qt = o),
				Ge !== null &&
					(Qt
						? ((e = Ge), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Ge.removeChild(n.stateNode))
			break
		case 18:
			Ge !== null &&
				(Qt
					? ((e = Ge), (n = n.stateNode), e.nodeType === 8 ? bd(e.parentNode, n) : e.nodeType === 1 && bd(e, n), ja(e))
					: bd(Ge, n.stateNode))
			break
		case 4:
			;(r = Ge), (o = Qt), (Ge = n.stateNode.containerInfo), (Qt = !0), Qn(e, t, n), (Ge = r), (Qt = o)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (!nt && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
				o = r = r.next
				do {
					var i = o,
						a = i.destroy
					;(i = i.tag), a !== void 0 && (i & 2 || i & 4) && rh(n, t, a), (o = o.next)
				} while (o !== r)
			}
			Qn(e, t, n)
			break
		case 1:
			if (!nt && (jo(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
				try {
					;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
				} catch (s) {
					Ee(n, t, s)
				}
			Qn(e, t, n)
			break
		case 21:
			Qn(e, t, n)
			break
		case 22:
			n.mode & 1 ? ((nt = (r = nt) || n.memoizedState !== null), Qn(e, t, n), (nt = r)) : Qn(e, t, n)
			break
		default:
			Qn(e, t, n)
	}
}
function Rg(e) {
	var t = e.updateQueue
	if (t !== null) {
		e.updateQueue = null
		var n = e.stateNode
		n === null && (n = e.stateNode = new tT()),
			t.forEach(function (r) {
				var o = dT.bind(null, e, r)
				n.has(r) || (n.add(r), r.then(o, o))
			})
	}
}
function qt(e, t) {
	var n = t.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r]
			try {
				var i = e,
					a = t,
					s = a
				e: for (; s !== null; ) {
					switch (s.tag) {
						case 5:
							;(Ge = s.stateNode), (Qt = !1)
							break e
						case 3:
							;(Ge = s.stateNode.containerInfo), (Qt = !0)
							break e
						case 4:
							;(Ge = s.stateNode.containerInfo), (Qt = !0)
							break e
					}
					s = s.return
				}
				if (Ge === null) throw Error(A(160))
				$x(i, a, o), (Ge = null), (Qt = !1)
				var l = o.alternate
				l !== null && (l.return = null), (o.return = null)
			} catch (u) {
				Ee(o, t, u)
			}
		}
	if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rx(t, e), (t = t.sibling)
}
function Rx(e, t) {
	var n = e.alternate,
		r = e.flags
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((qt(t, e), sn(e), r & 4)) {
				try {
					ga(3, e, e.return), rc(3, e)
				} catch (g) {
					Ee(e, e.return, g)
				}
				try {
					ga(5, e, e.return)
				} catch (g) {
					Ee(e, e.return, g)
				}
			}
			break
		case 1:
			qt(t, e), sn(e), r & 512 && n !== null && jo(n, n.return)
			break
		case 5:
			if ((qt(t, e), sn(e), r & 512 && n !== null && jo(n, n.return), e.flags & 32)) {
				var o = e.stateNode
				try {
					Aa(o, '')
				} catch (g) {
					Ee(e, e.return, g)
				}
			}
			if (r & 4 && ((o = e.stateNode), o != null)) {
				var i = e.memoizedProps,
					a = n !== null ? n.memoizedProps : i,
					s = e.type,
					l = e.updateQueue
				if (((e.updateQueue = null), l !== null))
					try {
						s === 'input' && i.type === 'radio' && i.name != null && Z1(o, i), Rf(s, a)
						var u = Rf(s, i)
						for (a = 0; a < l.length; a += 2) {
							var d = l[a],
								c = l[a + 1]
							d === 'style' ? rb(o, c) : d === 'dangerouslySetInnerHTML' ? tb(o, c) : d === 'children' ? Aa(o, c) : cp(o, d, c, u)
						}
						switch (s) {
							case 'input':
								_f(o, i)
								break
							case 'textarea':
								J1(o, i)
								break
							case 'select':
								var f = o._wrapperState.wasMultiple
								o._wrapperState.wasMultiple = !!i.multiple
								var m = i.value
								m != null
									? qo(o, !!i.multiple, m, !1)
									: f !== !!i.multiple &&
									  (i.defaultValue != null
											? qo(o, !!i.multiple, i.defaultValue, !0)
											: qo(o, !!i.multiple, i.multiple ? [] : '', !1))
						}
						o[Ba] = i
					} catch (g) {
						Ee(e, e.return, g)
					}
			}
			break
		case 6:
			if ((qt(t, e), sn(e), r & 4)) {
				if (e.stateNode === null) throw Error(A(162))
				;(o = e.stateNode), (i = e.memoizedProps)
				try {
					o.nodeValue = i
				} catch (g) {
					Ee(e, e.return, g)
				}
			}
			break
		case 3:
			if ((qt(t, e), sn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
				try {
					ja(t.containerInfo)
				} catch (g) {
					Ee(e, e.return, g)
				}
			break
		case 4:
			qt(t, e), sn(e)
			break
		case 13:
			qt(t, e),
				sn(e),
				(o = e.child),
				o.flags & 8192 &&
					((i = o.memoizedState !== null),
					(o.stateNode.isHidden = i),
					!i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Wp = Ae())),
				r & 4 && Rg(e)
			break
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((nt = (u = nt) || d), qt(t, e), (nt = u)) : qt(t, e),
				sn(e),
				r & 8192)
			) {
				if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
					for (j = e, d = e.child; d !== null; ) {
						for (c = j = d; j !== null; ) {
							switch (((f = j), (m = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									ga(4, f, f.return)
									break
								case 1:
									jo(f, f.return)
									var y = f.stateNode
									if (typeof y.componentWillUnmount == 'function') {
										;(r = f), (n = f.return)
										try {
											;(t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount()
										} catch (g) {
											Ee(r, n, g)
										}
									}
									break
								case 5:
									jo(f, f.return)
									break
								case 22:
									if (f.memoizedState !== null) {
										Mg(c)
										continue
									}
							}
							m !== null ? ((m.return = f), (j = m)) : Mg(c)
						}
						d = d.sibling
					}
				e: for (d = null, c = e; ; ) {
					if (c.tag === 5) {
						if (d === null) {
							d = c
							try {
								;(o = c.stateNode),
									u
										? ((i = o.style),
										  typeof i.setProperty == 'function' ? i.setProperty('display', 'none', 'important') : (i.display = 'none'))
										: ((s = c.stateNode),
										  (l = c.memoizedProps.style),
										  (a = l != null && l.hasOwnProperty('display') ? l.display : null),
										  (s.style.display = nb('display', a)))
							} catch (g) {
								Ee(e, e.return, g)
							}
						}
					} else if (c.tag === 6) {
						if (d === null)
							try {
								c.stateNode.nodeValue = u ? '' : c.memoizedProps
							} catch (g) {
								Ee(e, e.return, g)
							}
					} else if (((c.tag !== 22 && c.tag !== 23) || c.memoizedState === null || c === e) && c.child !== null) {
						;(c.child.return = c), (c = c.child)
						continue
					}
					if (c === e) break e
					for (; c.sibling === null; ) {
						if (c.return === null || c.return === e) break e
						d === c && (d = null), (c = c.return)
					}
					d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling)
				}
			}
			break
		case 19:
			qt(t, e), sn(e), r & 4 && Rg(e)
			break
		case 21:
			break
		default:
			qt(t, e), sn(e)
	}
}
function sn(e) {
	var t = e.flags
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Ex(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error(A(160))
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode
					r.flags & 32 && (Aa(o, ''), (r.flags &= -33))
					var i = $g(e)
					ah(e, i, o)
					break
				case 3:
				case 4:
					var a = r.stateNode.containerInfo,
						s = $g(e)
					ih(e, s, a)
					break
				default:
					throw Error(A(161))
			}
		} catch (l) {
			Ee(e, e.return, l)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}
function rT(e, t, n) {
	;(j = e), Ax(e)
}
function Ax(e, t, n) {
	for (var r = (e.mode & 1) !== 0; j !== null; ) {
		var o = j,
			i = o.child
		if (o.tag === 22 && r) {
			var a = o.memoizedState !== null || il
			if (!a) {
				var s = o.alternate,
					l = (s !== null && s.memoizedState !== null) || nt
				s = il
				var u = nt
				if (((il = a), (nt = l) && !u))
					for (j = o; j !== null; )
						(a = j),
							(l = a.child),
							a.tag === 22 && a.memoizedState !== null ? Ig(o) : l !== null ? ((l.return = a), (j = l)) : Ig(o)
				for (; i !== null; ) (j = i), Ax(i), (i = i.sibling)
				;(j = o), (il = s), (nt = u)
			}
			Ag(e)
		} else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : Ag(e)
	}
}
function Ag(e) {
	for (; j !== null; ) {
		var t = j
		if (t.flags & 8772) {
			var n = t.alternate
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							nt || rc(5, t)
							break
						case 1:
							var r = t.stateNode
							if (t.flags & 4 && !nt)
								if (n === null) r.componentDidMount()
								else {
									var o = t.elementType === t.type ? n.memoizedProps : Xt(t.type, n.memoizedProps)
									r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
								}
							var i = t.updateQueue
							i !== null && mg(t, i, r)
							break
						case 3:
							var a = t.updateQueue
							if (a !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode
											break
										case 1:
											n = t.child.stateNode
									}
								mg(t, a, n)
							}
							break
						case 5:
							var s = t.stateNode
							if (n === null && t.flags & 4) {
								n = s
								var l = t.memoizedProps
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										l.autoFocus && n.focus()
										break
									case 'img':
										l.src && (n.src = l.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate
								if (u !== null) {
									var d = u.memoizedState
									if (d !== null) {
										var c = d.dehydrated
										c !== null && ja(c)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error(A(163))
					}
				nt || (t.flags & 512 && oh(t))
			} catch (f) {
				Ee(t, t.return, f)
			}
		}
		if (t === e) {
			j = null
			break
		}
		if (((n = t.sibling), n !== null)) {
			;(n.return = t.return), (j = n)
			break
		}
		j = t.return
	}
}
function Mg(e) {
	for (; j !== null; ) {
		var t = j
		if (t === e) {
			j = null
			break
		}
		var n = t.sibling
		if (n !== null) {
			;(n.return = t.return), (j = n)
			break
		}
		j = t.return
	}
}
function Ig(e) {
	for (; j !== null; ) {
		var t = j
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return
					try {
						rc(4, t)
					} catch (l) {
						Ee(t, n, l)
					}
					break
				case 1:
					var r = t.stateNode
					if (typeof r.componentDidMount == 'function') {
						var o = t.return
						try {
							r.componentDidMount()
						} catch (l) {
							Ee(t, o, l)
						}
					}
					var i = t.return
					try {
						oh(t)
					} catch (l) {
						Ee(t, i, l)
					}
					break
				case 5:
					var a = t.return
					try {
						oh(t)
					} catch (l) {
						Ee(t, a, l)
					}
			}
		} catch (l) {
			Ee(t, t.return, l)
		}
		if (t === e) {
			j = null
			break
		}
		var s = t.sibling
		if (s !== null) {
			;(s.return = t.return), (j = s)
			break
		}
		j = t.return
	}
}
var oT = Math.ceil,
	ku = Yn.ReactCurrentDispatcher,
	Np = Yn.ReactCurrentOwner,
	Vt = Yn.ReactCurrentBatchConfig,
	X = 0,
	We = null,
	Fe = null,
	Xe = 0,
	Ct = 0,
	zo = Cr(0),
	Le = 0,
	Ka = null,
	io = 0,
	oc = 0,
	Vp = 0,
	ya = null,
	pt = null,
	Wp = 0,
	pi = 1 / 0,
	Tn = null,
	Cu = !1,
	sh = null,
	mr = null,
	al = !1,
	lr = null,
	_u = 0,
	ba = 0,
	lh = null,
	jl = -1,
	zl = 0
function ct() {
	return X & 6 ? Ae() : jl !== -1 ? jl : (jl = Ae())
}
function vr(e) {
	return e.mode & 1
		? X & 2 && Xe !== 0
			? Xe & -Xe
			: NP.transition !== null
			? (zl === 0 && (zl = mb()), zl)
			: ((e = se), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wb(e.type))), e)
		: 1
}
function tn(e, t, n, r) {
	if (50 < ba) throw ((ba = 0), (lh = null), Error(A(185)))
	hs(e, n, r),
		(!(X & 2) || e !== We) &&
			(e === We && (!(X & 2) && (oc |= n), Le === 4 && ir(e, Xe)),
			bt(e, r),
			n === 1 && X === 0 && !(t.mode & 1) && ((pi = Ae() + 500), ec && _r()))
}
function bt(e, t) {
	var n = e.callbackNode
	N2(e, t)
	var r = lu(e, e === We ? Xe : 0)
	if (r === 0) n !== null && Vv(n), (e.callbackNode = null), (e.callbackPriority = 0)
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Vv(n), t === 1))
			e.tag === 0 ? BP(Fg.bind(null, e)) : Nb(Fg.bind(null, e)),
				zP(function () {
					!(X & 6) && _r()
				}),
				(n = null)
		else {
			switch (vb(r)) {
				case 1:
					n = mp
					break
				case 4:
					n = hb
					break
				case 16:
					n = su
					break
				case 536870912:
					n = pb
					break
				default:
					n = su
			}
			n = Ox(n, Mx.bind(null, e))
		}
		;(e.callbackPriority = t), (e.callbackNode = n)
	}
}
function Mx(e, t) {
	if (((jl = -1), (zl = 0), X & 6)) throw Error(A(327))
	var n = e.callbackNode
	if (Jo() && e.callbackNode !== n) return null
	var r = lu(e, e === We ? Xe : 0)
	if (r === 0) return null
	if (r & 30 || r & e.expiredLanes || t) t = Pu(e, r)
	else {
		t = r
		var o = X
		X |= 2
		var i = Fx()
		;(We !== e || Xe !== t) && ((Tn = null), (pi = Ae() + 500), qr(e, t))
		do
			try {
				sT()
				break
			} catch (s) {
				Ix(e, s)
			}
		while (!0)
		Ep(), (ku.current = i), (X = o), Fe !== null ? (t = 0) : ((We = null), (Xe = 0), (t = Le))
	}
	if (t !== 0) {
		if ((t === 2 && ((o = jf(e)), o !== 0 && ((r = o), (t = uh(e, o)))), t === 1))
			throw ((n = Ka), qr(e, 0), ir(e, r), bt(e, Ae()), n)
		if (t === 6) ir(e, r)
		else {
			if (
				((o = e.current.alternate),
				!(r & 30) && !iT(o) && ((t = Pu(e, r)), t === 2 && ((i = jf(e)), i !== 0 && ((r = i), (t = uh(e, i)))), t === 1))
			)
				throw ((n = Ka), qr(e, 0), ir(e, r), bt(e, Ae()), n)
			switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(A(345))
				case 2:
					Dr(e, pt, Tn)
					break
				case 3:
					if ((ir(e, r), (r & 130023424) === r && ((t = Wp + 500 - Ae()), 10 < t))) {
						if (lu(e, 0) !== 0) break
						if (((o = e.suspendedLanes), (o & r) !== r)) {
							ct(), (e.pingedLanes |= e.suspendedLanes & o)
							break
						}
						e.timeoutHandle = Wf(Dr.bind(null, e, pt, Tn), t)
						break
					}
					Dr(e, pt, Tn)
					break
				case 4:
					if ((ir(e, r), (r & 4194240) === r)) break
					for (t = e.eventTimes, o = -1; 0 < r; ) {
						var a = 31 - en(r)
						;(i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i)
					}
					if (
						((r = o),
						(r = Ae() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * oT(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Wf(Dr.bind(null, e, pt, Tn), r)
						break
					}
					Dr(e, pt, Tn)
					break
				case 5:
					Dr(e, pt, Tn)
					break
				default:
					throw Error(A(329))
			}
		}
	}
	return bt(e, Ae()), e.callbackNode === n ? Mx.bind(null, e) : null
}
function uh(e, t) {
	var n = ya
	return (
		e.current.memoizedState.isDehydrated && (qr(e, t).flags |= 256),
		(e = Pu(e, t)),
		e !== 2 && ((t = pt), (pt = n), t !== null && ch(t)),
		e
	)
}
function ch(e) {
	pt === null ? (pt = e) : pt.push.apply(pt, e)
}
function iT(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot
					o = o.value
					try {
						if (!rn(i(), o)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
		else {
			if (t === e) break
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0
				t = t.return
			}
			;(t.sibling.return = t.return), (t = t.sibling)
		}
	}
	return !0
}
function ir(e, t) {
	for (t &= ~Vp, t &= ~oc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
		var n = 31 - en(t),
			r = 1 << n
		;(e[n] = -1), (t &= ~r)
	}
}
function Fg(e) {
	if (X & 6) throw Error(A(327))
	Jo()
	var t = lu(e, 0)
	if (!(t & 1)) return bt(e, Ae()), null
	var n = Pu(e, t)
	if (e.tag !== 0 && n === 2) {
		var r = jf(e)
		r !== 0 && ((t = r), (n = uh(e, r)))
	}
	if (n === 1) throw ((n = Ka), qr(e, 0), ir(e, t), bt(e, Ae()), n)
	if (n === 6) throw Error(A(345))
	return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Dr(e, pt, Tn), bt(e, Ae()), null
}
function Up(e, t) {
	var n = X
	X |= 1
	try {
		return e(t)
	} finally {
		;(X = n), X === 0 && ((pi = Ae() + 500), ec && _r())
	}
}
function ao(e) {
	lr !== null && lr.tag === 0 && !(X & 6) && Jo()
	var t = X
	X |= 1
	var n = Vt.transition,
		r = se
	try {
		if (((Vt.transition = null), (se = 1), e)) return e()
	} finally {
		;(se = r), (Vt.transition = n), (X = t), !(X & 6) && _r()
	}
}
function Hp() {
	;(Ct = zo.current), ge(zo)
}
function qr(e, t) {
	;(e.finishedWork = null), (e.finishedLanes = 0)
	var n = e.timeoutHandle
	if ((n !== -1 && ((e.timeoutHandle = -1), jP(n)), Fe !== null))
		for (n = Fe.return; n !== null; ) {
			var r = n
			switch ((_p(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && hu()
					break
				case 3:
					fi(), ge(gt), ge(it), Fp()
					break
				case 5:
					Ip(r)
					break
				case 4:
					fi()
					break
				case 13:
					ge(Ce)
					break
				case 19:
					ge(Ce)
					break
				case 10:
					$p(r.type._context)
					break
				case 22:
				case 23:
					Hp()
			}
			n = n.return
		}
	if (
		((We = e),
		(Fe = e = gr(e.current, null)),
		(Xe = Ct = t),
		(Le = 0),
		(Ka = null),
		(Vp = oc = io = 0),
		(pt = ya = null),
		Ur !== null)
	) {
		for (t = 0; t < Ur.length; t++)
			if (((n = Ur[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var o = r.next,
					i = n.pending
				if (i !== null) {
					var a = i.next
					;(i.next = o), (r.next = a)
				}
				n.pending = r
			}
		Ur = null
	}
	return e
}
function Ix(e, t) {
	do {
		var n = Fe
		try {
			if ((Ep(), (Ml.current = wu), Su)) {
				for (var r = Pe.memoizedState; r !== null; ) {
					var o = r.queue
					o !== null && (o.pending = null), (r = r.next)
				}
				Su = !1
			}
			if (((oo = 0), (Ve = ze = Pe = null), (va = !1), (Wa = 0), (Np.current = null), n === null || n.return === null)) {
				;(Le = 1), (Ka = t), (Fe = null)
				break
			}
			e: {
				var i = e,
					a = n.return,
					s = n,
					l = t
				if (((t = Xe), (s.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
					var u = l,
						d = s,
						c = d.tag
					if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
						var f = d.alternate
						f
							? ((d.updateQueue = f.updateQueue), (d.memoizedState = f.memoizedState), (d.lanes = f.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null))
					}
					var m = Sg(a)
					if (m !== null) {
						;(m.flags &= -257), wg(m, a, s, i, t), m.mode & 1 && xg(i, u, t), (t = m), (l = u)
						var y = t.updateQueue
						if (y === null) {
							var g = new Set()
							g.add(l), (t.updateQueue = g)
						} else y.add(l)
						break e
					} else {
						if (!(t & 1)) {
							xg(i, u, t), Kp()
							break e
						}
						l = Error(A(426))
					}
				} else if (Se && s.mode & 1) {
					var x = Sg(a)
					if (x !== null) {
						!(x.flags & 65536) && (x.flags |= 256), wg(x, a, s, i, t), Pp(hi(l, s))
						break e
					}
				}
				;(i = l = hi(l, s)), Le !== 4 && (Le = 2), ya === null ? (ya = [i]) : ya.push(i), (i = a)
				do {
					switch (i.tag) {
						case 3:
							;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
							var p = vx(i, l, t)
							pg(i, p)
							break e
						case 1:
							s = l
							var h = i.type,
								v = i.stateNode
							if (
								!(i.flags & 128) &&
								(typeof h.getDerivedStateFromError == 'function' ||
									(v !== null && typeof v.componentDidCatch == 'function' && (mr === null || !mr.has(v))))
							) {
								;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
								var k = gx(i, s, t)
								pg(i, k)
								break e
							}
					}
					i = i.return
				} while (i !== null)
			}
			zx(n)
		} catch (C) {
			;(t = C), Fe === n && n !== null && (Fe = n = n.return)
			continue
		}
		break
	} while (!0)
}
function Fx() {
	var e = ku.current
	return (ku.current = wu), e === null ? wu : e
}
function Kp() {
	;(Le === 0 || Le === 3 || Le === 2) && (Le = 4), We === null || (!(io & 268435455) && !(oc & 268435455)) || ir(We, Xe)
}
function Pu(e, t) {
	var n = X
	X |= 2
	var r = Fx()
	;(We !== e || Xe !== t) && ((Tn = null), qr(e, t))
	do
		try {
			aT()
			break
		} catch (o) {
			Ix(e, o)
		}
	while (!0)
	if ((Ep(), (X = n), (ku.current = r), Fe !== null)) throw Error(A(261))
	return (We = null), (Xe = 0), Le
}
function aT() {
	for (; Fe !== null; ) jx(Fe)
}
function sT() {
	for (; Fe !== null && !M2(); ) jx(Fe)
}
function jx(e) {
	var t = Dx(e.alternate, e, Ct)
	;(e.memoizedProps = e.pendingProps), t === null ? zx(e) : (Fe = t), (Np.current = null)
}
function zx(e) {
	var t = e
	do {
		var n = t.alternate
		if (((e = t.return), t.flags & 32768)) {
			if (((n = eT(n, t)), n !== null)) {
				;(n.flags &= 32767), (Fe = n)
				return
			}
			if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
			else {
				;(Le = 6), (Fe = null)
				return
			}
		} else if (((n = JP(n, t, Ct)), n !== null)) {
			Fe = n
			return
		}
		if (((t = t.sibling), t !== null)) {
			Fe = t
			return
		}
		Fe = t = e
	} while (t !== null)
	Le === 0 && (Le = 5)
}
function Dr(e, t, n) {
	var r = se,
		o = Vt.transition
	try {
		;(Vt.transition = null), (se = 1), lT(e, t, n, r)
	} finally {
		;(Vt.transition = o), (se = r)
	}
	return null
}
function lT(e, t, n, r) {
	do Jo()
	while (lr !== null)
	if (X & 6) throw Error(A(327))
	n = e.finishedWork
	var o = e.finishedLanes
	if (n === null) return null
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(A(177))
	;(e.callbackNode = null), (e.callbackPriority = 0)
	var i = n.lanes | n.childLanes
	if (
		(V2(e, i),
		e === We && ((Fe = We = null), (Xe = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			al ||
			((al = !0),
			Ox(su, function () {
				return Jo(), null
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		;(i = Vt.transition), (Vt.transition = null)
		var a = se
		se = 1
		var s = X
		;(X |= 4),
			(Np.current = null),
			nT(e, n),
			Rx(n, e),
			EP(Nf),
			(uu = !!Bf),
			(Nf = Bf = null),
			(e.current = n),
			rT(n),
			I2(),
			(X = s),
			(se = a),
			(Vt.transition = i)
	} else e.current = n
	if (
		(al && ((al = !1), (lr = e), (_u = o)),
		(i = e.pendingLanes),
		i === 0 && (mr = null),
		z2(n.stateNode),
		bt(e, Ae()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
	if (Cu) throw ((Cu = !1), (e = sh), (sh = null), e)
	return (
		_u & 1 && e.tag !== 0 && Jo(), (i = e.pendingLanes), i & 1 ? (e === lh ? ba++ : ((ba = 0), (lh = e))) : (ba = 0), _r(), null
	)
}
function Jo() {
	if (lr !== null) {
		var e = vb(_u),
			t = Vt.transition,
			n = se
		try {
			if (((Vt.transition = null), (se = 16 > e ? 16 : e), lr === null)) var r = !1
			else {
				if (((e = lr), (lr = null), (_u = 0), X & 6)) throw Error(A(331))
				var o = X
				for (X |= 4, j = e.current; j !== null; ) {
					var i = j,
						a = i.child
					if (j.flags & 16) {
						var s = i.deletions
						if (s !== null) {
							for (var l = 0; l < s.length; l++) {
								var u = s[l]
								for (j = u; j !== null; ) {
									var d = j
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											ga(8, d, i)
									}
									var c = d.child
									if (c !== null) (c.return = d), (j = c)
									else
										for (; j !== null; ) {
											d = j
											var f = d.sibling,
												m = d.return
											if ((Tx(d), d === u)) {
												j = null
												break
											}
											if (f !== null) {
												;(f.return = m), (j = f)
												break
											}
											j = m
										}
								}
							}
							var y = i.alternate
							if (y !== null) {
								var g = y.child
								if (g !== null) {
									y.child = null
									do {
										var x = g.sibling
										;(g.sibling = null), (g = x)
									} while (g !== null)
								}
							}
							j = i
						}
					}
					if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (j = a)
					else
						e: for (; j !== null; ) {
							if (((i = j), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										ga(9, i, i.return)
								}
							var p = i.sibling
							if (p !== null) {
								;(p.return = i.return), (j = p)
								break e
							}
							j = i.return
						}
				}
				var h = e.current
				for (j = h; j !== null; ) {
					a = j
					var v = a.child
					if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (j = v)
					else
						e: for (a = h; j !== null; ) {
							if (((s = j), s.flags & 2048))
								try {
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											rc(9, s)
									}
								} catch (C) {
									Ee(s, s.return, C)
								}
							if (s === a) {
								j = null
								break e
							}
							var k = s.sibling
							if (k !== null) {
								;(k.return = s.return), (j = k)
								break e
							}
							j = s.return
						}
				}
				if (((X = o), _r(), yn && typeof yn.onPostCommitFiberRoot == 'function'))
					try {
						yn.onPostCommitFiberRoot(Yu, e)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(se = n), (Vt.transition = t)
		}
	}
	return !1
}
function jg(e, t, n) {
	;(t = hi(n, t)), (t = vx(e, t, 1)), (e = pr(e, t, 1)), (t = ct()), e !== null && (hs(e, 1, t), bt(e, t))
}
function Ee(e, t, n) {
	if (e.tag === 3) jg(e, e, n)
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				jg(t, e, n)
				break
			} else if (t.tag === 1) {
				var r = t.stateNode
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' && (mr === null || !mr.has(r)))
				) {
					;(e = hi(n, e)), (e = gx(t, e, 1)), (t = pr(t, e, 1)), (e = ct()), t !== null && (hs(t, 1, e), bt(t, e))
					break
				}
			}
			t = t.return
		}
}
function uT(e, t, n) {
	var r = e.pingCache
	r !== null && r.delete(t),
		(t = ct()),
		(e.pingedLanes |= e.suspendedLanes & n),
		We === e && (Xe & n) === n && (Le === 4 || (Le === 3 && (Xe & 130023424) === Xe && 500 > Ae() - Wp) ? qr(e, 0) : (Vp |= n)),
		bt(e, t)
}
function Lx(e, t) {
	t === 0 && (e.mode & 1 ? ((t = Xs), (Xs <<= 1), !(Xs & 130023424) && (Xs = 4194304)) : (t = 1))
	var n = ct()
	;(e = Hn(e, t)), e !== null && (hs(e, t, n), bt(e, n))
}
function cT(e) {
	var t = e.memoizedState,
		n = 0
	t !== null && (n = t.retryLane), Lx(e, n)
}
function dT(e, t) {
	var n = 0
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState
			o !== null && (n = o.retryLane)
			break
		case 19:
			r = e.stateNode
			break
		default:
			throw Error(A(314))
	}
	r !== null && r.delete(t), Lx(e, n)
}
var Dx
Dx = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || gt.current) vt = !0
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (vt = !1), ZP(e, t, n)
			vt = !!(e.flags & 131072)
		}
	else (vt = !1), Se && t.flags & 1048576 && Vb(t, vu, t.index)
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type
			Fl(e, t), (e = t.pendingProps)
			var o = ui(t, it.current)
			Zo(t, n), (o = zp(null, t, r, e, o, n))
			var i = Lp()
			return (
				(t.flags |= 1),
				typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  yt(r) ? ((i = !0), pu(t)) : (i = !1),
					  (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
					  Ap(t),
					  (o.updater = nc),
					  (t.stateNode = o),
					  (o._reactInternals = t),
					  Xf(t, r, e, n),
					  (t = Jf(null, t, r, !0, i, n)))
					: ((t.tag = 0), Se && i && Cp(t), st(null, t, o, n), (t = t.child)),
				t
			)
		case 16:
			r = t.elementType
			e: {
				switch (
					(Fl(e, t),
					(e = t.pendingProps),
					(o = r._init),
					(r = o(r._payload)),
					(t.type = r),
					(o = t.tag = hT(r)),
					(e = Xt(r, e)),
					o)
				) {
					case 0:
						t = Zf(null, t, r, e, n)
						break e
					case 1:
						t = _g(null, t, r, e, n)
						break e
					case 11:
						t = kg(null, t, r, e, n)
						break e
					case 14:
						t = Cg(null, t, r, Xt(r.type, e), n)
						break e
				}
				throw Error(A(306, r, ''))
			}
			return t
		case 0:
			return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Xt(r, o)), Zf(e, t, r, o, n)
		case 1:
			return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Xt(r, o)), _g(e, t, r, o, n)
		case 3:
			e: {
				if ((Sx(t), e === null)) throw Error(A(387))
				;(r = t.pendingProps), (i = t.memoizedState), (o = i.element), qb(e, t), bu(t, r, null, n)
				var a = t.memoizedState
				if (((r = a.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: a.cache,
							pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
							transitions: a.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						;(o = hi(Error(A(423)), t)), (t = Pg(e, t, r, n, o))
						break e
					} else if (r !== o) {
						;(o = hi(Error(A(424)), t)), (t = Pg(e, t, r, n, o))
						break e
					} else
						for (
							_t = hr(t.stateNode.containerInfo.firstChild), Pt = t, Se = !0, Zt = null, n = Kb(t, null, r, n), t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((ci(), r === o)) {
						t = Kn(e, t, n)
						break e
					}
					st(e, t, r, n)
				}
				t = t.child
			}
			return t
		case 5:
			return (
				Yb(t),
				e === null && Gf(t),
				(r = t.type),
				(o = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(a = o.children),
				Vf(r, o) ? (a = null) : i !== null && Vf(r, i) && (t.flags |= 32),
				xx(e, t),
				st(e, t, a, n),
				t.child
			)
		case 6:
			return e === null && Gf(t), null
		case 13:
			return wx(e, t, n)
		case 4:
			return (
				Mp(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = di(t, null, r, n)) : st(e, t, r, n),
				t.child
			)
		case 11:
			return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Xt(r, o)), kg(e, t, r, o, n)
		case 7:
			return st(e, t, t.pendingProps, n), t.child
		case 8:
			return st(e, t, t.pendingProps.children, n), t.child
		case 12:
			return st(e, t, t.pendingProps.children, n), t.child
		case 10:
			e: {
				if (
					((r = t.type._context),
					(o = t.pendingProps),
					(i = t.memoizedProps),
					(a = o.value),
					fe(gu, r._currentValue),
					(r._currentValue = a),
					i !== null)
				)
					if (rn(i.value, a)) {
						if (i.children === o.children && !gt.current) {
							t = Kn(e, t, n)
							break e
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var s = i.dependencies
							if (s !== null) {
								a = i.child
								for (var l = s.firstContext; l !== null; ) {
									if (l.context === r) {
										if (i.tag === 1) {
											;(l = zn(-1, n & -n)), (l.tag = 2)
											var u = i.updateQueue
											if (u !== null) {
												u = u.shared
												var d = u.pending
												d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)), (u.pending = l)
											}
										}
										;(i.lanes |= n), (l = i.alternate), l !== null && (l.lanes |= n), qf(i.return, n, t), (s.lanes |= n)
										break
									}
									l = l.next
								}
							} else if (i.tag === 10) a = i.type === t.type ? null : i.child
							else if (i.tag === 18) {
								if (((a = i.return), a === null)) throw Error(A(341))
								;(a.lanes |= n), (s = a.alternate), s !== null && (s.lanes |= n), qf(a, n, t), (a = i.sibling)
							} else a = i.child
							if (a !== null) a.return = i
							else
								for (a = i; a !== null; ) {
									if (a === t) {
										a = null
										break
									}
									if (((i = a.sibling), i !== null)) {
										;(i.return = a.return), (a = i)
										break
									}
									a = a.return
								}
							i = a
						}
				st(e, t, o.children, n), (t = t.child)
			}
			return t
		case 9:
			return (
				(o = t.type), (r = t.pendingProps.children), Zo(t, n), (o = Wt(o)), (r = r(o)), (t.flags |= 1), st(e, t, r, n), t.child
			)
		case 14:
			return (r = t.type), (o = Xt(r, t.pendingProps)), (o = Xt(r.type, o)), Cg(e, t, r, o, n)
		case 15:
			return yx(e, t, t.type, t.pendingProps, n)
		case 17:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : Xt(r, o)),
				Fl(e, t),
				(t.tag = 1),
				yt(r) ? ((e = !0), pu(t)) : (e = !1),
				Zo(t, n),
				mx(t, r, o),
				Xf(t, r, o, n),
				Jf(null, t, r, !0, e, n)
			)
		case 19:
			return kx(e, t, n)
		case 22:
			return bx(e, t, n)
	}
	throw Error(A(156, t.tag))
}
function Ox(e, t) {
	return fb(e, t)
}
function fT(e, t, n, r) {
	;(this.tag = e),
		(this.key = n),
		(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function Nt(e, t, n, r) {
	return new fT(e, t, n, r)
}
function Gp(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent)
}
function hT(e) {
	if (typeof e == 'function') return Gp(e) ? 1 : 0
	if (e != null) {
		if (((e = e.$$typeof), e === fp)) return 11
		if (e === hp) return 14
	}
	return 2
}
function gr(e, t) {
	var n = e.alternate
	return (
		n === null
			? ((n = Nt(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	)
}
function Ll(e, t, n, r, o, i) {
	var a = 2
	if (((r = e), typeof e == 'function')) Gp(e) && (a = 1)
	else if (typeof e == 'string') a = 5
	else
		e: switch (e) {
			case Po:
				return Yr(n.children, o, i, t)
			case dp:
				;(a = 8), (o |= 8)
				break
			case xf:
				return (e = Nt(12, n, t, o | 2)), (e.elementType = xf), (e.lanes = i), e
			case Sf:
				return (e = Nt(13, n, t, o)), (e.elementType = Sf), (e.lanes = i), e
			case wf:
				return (e = Nt(19, n, t, o)), (e.elementType = wf), (e.lanes = i), e
			case Y1:
				return ic(n, o, i, t)
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case G1:
							a = 10
							break e
						case q1:
							a = 9
							break e
						case fp:
							a = 11
							break e
						case hp:
							a = 14
							break e
						case nr:
							;(a = 16), (r = null)
							break e
					}
				throw Error(A(130, e == null ? e : typeof e, ''))
		}
	return (t = Nt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
}
function Yr(e, t, n, r) {
	return (e = Nt(7, e, r, t)), (e.lanes = n), e
}
function ic(e, t, n, r) {
	return (e = Nt(22, e, r, t)), (e.elementType = Y1), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
}
function Td(e, t, n) {
	return (e = Nt(6, e, null, t)), (e.lanes = n), e
}
function Ed(e, t, n) {
	return (
		(t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
		t
	)
}
function pT(e, t, n, r, o) {
	;(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = ld(0)),
		(this.expirationTimes = ld(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = ld(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null)
}
function qp(e, t, n, r, o, i, a, s, l) {
	return (
		(e = new pT(e, t, n, s, l)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = Nt(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
		Ap(i),
		e
	)
}
function mT(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return { $$typeof: _o, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n }
}
function Bx(e) {
	if (!e) return xr
	e = e._reactInternals
	e: {
		if (ho(e) !== e || e.tag !== 1) throw Error(A(170))
		var t = e
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context
					break e
				case 1:
					if (yt(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			t = t.return
		} while (t !== null)
		throw Error(A(171))
	}
	if (e.tag === 1) {
		var n = e.type
		if (yt(n)) return Bb(e, n, t)
	}
	return t
}
function Nx(e, t, n, r, o, i, a, s, l) {
	return (
		(e = qp(n, r, !0, e, o, i, a, s, l)),
		(e.context = Bx(null)),
		(n = e.current),
		(r = ct()),
		(o = vr(n)),
		(i = zn(r, o)),
		(i.callback = t ?? null),
		pr(n, i, o),
		(e.current.lanes = o),
		hs(e, o, r),
		bt(e, r),
		e
	)
}
function ac(e, t, n, r) {
	var o = t.current,
		i = ct(),
		a = vr(o)
	return (
		(n = Bx(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = zn(i, a)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = pr(o, t, a)),
		e !== null && (tn(e, o, a, i), Al(e, o, a)),
		a
	)
}
function Tu(e) {
	if (((e = e.current), !e.child)) return null
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode
		default:
			return e.child.stateNode
	}
}
function zg(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane
		e.retryLane = n !== 0 && n < t ? n : t
	}
}
function Yp(e, t) {
	zg(e, t), (e = e.alternate) && zg(e, t)
}
function vT() {
	return null
}
var Vx =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e)
		  }
function Xp(e) {
	this._internalRoot = e
}
sc.prototype.render = Xp.prototype.render = function (e) {
	var t = this._internalRoot
	if (t === null) throw Error(A(409))
	ac(e, t, null, null)
}
sc.prototype.unmount = Xp.prototype.unmount = function () {
	var e = this._internalRoot
	if (e !== null) {
		this._internalRoot = null
		var t = e.containerInfo
		ao(function () {
			ac(null, e, null, null)
		}),
			(t[Un] = null)
	}
}
function sc(e) {
	this._internalRoot = e
}
sc.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = bb()
		e = { blockedOn: null, target: e, priority: t }
		for (var n = 0; n < or.length && t !== 0 && t < or[n].priority; n++);
		or.splice(n, 0, e), n === 0 && Sb(e)
	}
}
function Qp(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function lc(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	)
}
function Lg() {}
function gT(e, t, n, r, o) {
	if (o) {
		if (typeof r == 'function') {
			var i = r
			r = function () {
				var u = Tu(a)
				i.call(u)
			}
		}
		var a = Nx(t, r, e, 0, null, !1, !1, '', Lg)
		return (e._reactRootContainer = a), (e[Un] = a.current), Da(e.nodeType === 8 ? e.parentNode : e), ao(), a
	}
	for (; (o = e.lastChild); ) e.removeChild(o)
	if (typeof r == 'function') {
		var s = r
		r = function () {
			var u = Tu(l)
			s.call(u)
		}
	}
	var l = qp(e, 0, !1, null, null, !1, !1, '', Lg)
	return (
		(e._reactRootContainer = l),
		(e[Un] = l.current),
		Da(e.nodeType === 8 ? e.parentNode : e),
		ao(function () {
			ac(t, l, n, r)
		}),
		l
	)
}
function uc(e, t, n, r, o) {
	var i = n._reactRootContainer
	if (i) {
		var a = i
		if (typeof o == 'function') {
			var s = o
			o = function () {
				var l = Tu(a)
				s.call(l)
			}
		}
		ac(t, a, e, o)
	} else a = gT(n, t, e, o, r)
	return Tu(a)
}
gb = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode
			if (t.current.memoizedState.isDehydrated) {
				var n = ta(t.pendingLanes)
				n !== 0 && (vp(t, n | 1), bt(t, Ae()), !(X & 6) && ((pi = Ae() + 500), _r()))
			}
			break
		case 13:
			ao(function () {
				var r = Hn(e, 1)
				if (r !== null) {
					var o = ct()
					tn(r, e, 1, o)
				}
			}),
				Yp(e, 1)
	}
}
gp = function (e) {
	if (e.tag === 13) {
		var t = Hn(e, 134217728)
		if (t !== null) {
			var n = ct()
			tn(t, e, 134217728, n)
		}
		Yp(e, 134217728)
	}
}
yb = function (e) {
	if (e.tag === 13) {
		var t = vr(e),
			n = Hn(e, t)
		if (n !== null) {
			var r = ct()
			tn(n, e, t, r)
		}
		Yp(e, t)
	}
}
bb = function () {
	return se
}
xb = function (e, t) {
	var n = se
	try {
		return (se = e), t()
	} finally {
		se = n
	}
}
Mf = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((_f(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode
				for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t]
					if (r !== e && r.form === e.form) {
						var o = Ju(r)
						if (!o) throw Error(A(90))
						Q1(r), _f(r, o)
					}
				}
			}
			break
		case 'textarea':
			J1(e, n)
			break
		case 'select':
			;(t = n.value), t != null && qo(e, !!n.multiple, t, !1)
	}
}
ab = Up
sb = ao
var yT = { usingClientEntryPoint: !1, Events: [ms, Ro, Ju, ob, ib, Up] },
	Ui = { findFiberByHostInstance: Wr, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
	bT = {
		bundleType: Ui.bundleType,
		version: Ui.version,
		rendererPackageName: Ui.rendererPackageName,
		rendererConfig: Ui.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Yn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = cb(e)), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Ui.findFiberByHostInstance || vT,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!sl.isDisabled && sl.supportsFiber)
		try {
			;(Yu = sl.inject(bT)), (yn = sl)
		} catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yT
At.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!Qp(t)) throw Error(A(200))
	return mT(e, t, null, n)
}
At.createRoot = function (e, t) {
	if (!Qp(e)) throw Error(A(299))
	var n = !1,
		r = '',
		o = Vx
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = qp(e, 1, !1, null, null, n, !1, r, o)),
		(e[Un] = t.current),
		Da(e.nodeType === 8 ? e.parentNode : e),
		new Xp(t)
	)
}
At.findDOMNode = function (e) {
	if (e == null) return null
	if (e.nodeType === 1) return e
	var t = e._reactInternals
	if (t === void 0) throw typeof e.render == 'function' ? Error(A(188)) : ((e = Object.keys(e).join(',')), Error(A(268, e)))
	return (e = cb(t)), (e = e === null ? null : e.stateNode), e
}
At.flushSync = function (e) {
	return ao(e)
}
At.hydrate = function (e, t, n) {
	if (!lc(t)) throw Error(A(200))
	return uc(null, e, t, !0, n)
}
At.hydrateRoot = function (e, t, n) {
	if (!Qp(e)) throw Error(A(405))
	var r = (n != null && n.hydratedSources) || null,
		o = !1,
		i = '',
		a = Vx
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (o = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
		(t = Nx(t, null, e, 1, n ?? null, o, !1, i, a)),
		(e[Un] = t.current),
		Da(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(o = n._getVersion),
				(o = o(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, o])
					: t.mutableSourceEagerHydrationData.push(n, o)
	return new sc(t)
}
At.render = function (e, t, n) {
	if (!lc(t)) throw Error(A(200))
	return uc(null, e, t, !1, n)
}
At.unmountComponentAtNode = function (e) {
	if (!lc(e)) throw Error(A(40))
	return e._reactRootContainer
		? (ao(function () {
				uc(null, null, e, !1, function () {
					;(e._reactRootContainer = null), (e[Un] = null)
				})
		  }),
		  !0)
		: !1
}
At.unstable_batchedUpdates = Up
At.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!lc(n)) throw Error(A(200))
	if (e == null || e._reactInternals === void 0) throw Error(A(38))
	return uc(e, t, n, !1, r)
}
At.version = '18.3.1-next-f1338f8080-20240426'
function Wx() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)
		} catch (e) {
			console.error(e)
		}
}
Wx(), (W1.exports = At)
var Zp = W1.exports,
	Ux,
	Dg = Zp
;(Ux = Dg.createRoot), Dg.hydrateRoot
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ga() {
	return (
		(Ga = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Ga.apply(this, arguments)
	)
}
var ur
;(function (e) {
	;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(ur || (ur = {}))
const Og = 'popstate'
function xT(e) {
	e === void 0 && (e = {})
	function t(r, o) {
		let { pathname: i, search: a, hash: s } = r.location
		return dh('', { pathname: i, search: a, hash: s }, (o.state && o.state.usr) || null, (o.state && o.state.key) || 'default')
	}
	function n(r, o) {
		return typeof o == 'string' ? o : Eu(o)
	}
	return wT(t, n, null, e)
}
function $e(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Hx(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t)
		try {
			throw new Error(t)
		} catch {}
	}
}
function ST() {
	return Math.random().toString(36).substr(2, 8)
}
function Bg(e, t) {
	return { usr: e.state, key: e.key, idx: t }
}
function dh(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Ga({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? _i(t) : t, {
			state: n,
			key: (t && t.key) || r || ST(),
		})
	)
}
function Eu(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e
	return n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n), r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r), t
}
function _i(e) {
	let t = {}
	if (e) {
		let n = e.indexOf('#')
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
		let r = e.indexOf('?')
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e)
	}
	return t
}
function wT(e, t, n, r) {
	r === void 0 && (r = {})
	let { window: o = document.defaultView, v5Compat: i = !1 } = r,
		a = o.history,
		s = ur.Pop,
		l = null,
		u = d()
	u == null && ((u = 0), a.replaceState(Ga({}, a.state, { idx: u }), ''))
	function d() {
		return (a.state || { idx: null }).idx
	}
	function c() {
		s = ur.Pop
		let x = d(),
			p = x == null ? null : x - u
		;(u = x), l && l({ action: s, location: g.location, delta: p })
	}
	function f(x, p) {
		s = ur.Push
		let h = dh(g.location, x, p)
		u = d() + 1
		let v = Bg(h, u),
			k = g.createHref(h)
		try {
			a.pushState(v, '', k)
		} catch (C) {
			if (C instanceof DOMException && C.name === 'DataCloneError') throw C
			o.location.assign(k)
		}
		i && l && l({ action: s, location: g.location, delta: 1 })
	}
	function m(x, p) {
		s = ur.Replace
		let h = dh(g.location, x, p)
		u = d()
		let v = Bg(h, u),
			k = g.createHref(h)
		a.replaceState(v, '', k), i && l && l({ action: s, location: g.location, delta: 0 })
	}
	function y(x) {
		let p = o.location.origin !== 'null' ? o.location.origin : o.location.href,
			h = typeof x == 'string' ? x : Eu(x)
		return (
			(h = h.replace(/ $/, '%20')),
			$e(p, 'No window.location.(origin|href) available to create URL for href: ' + h),
			new URL(h, p)
		)
	}
	let g = {
		get action() {
			return s
		},
		get location() {
			return e(o, a)
		},
		listen(x) {
			if (l) throw new Error('A history only accepts one active listener')
			return (
				o.addEventListener(Og, c),
				(l = x),
				() => {
					o.removeEventListener(Og, c), (l = null)
				}
			)
		},
		createHref(x) {
			return t(o, x)
		},
		createURL: y,
		encodeLocation(x) {
			let p = y(x)
			return { pathname: p.pathname, search: p.search, hash: p.hash }
		},
		push: f,
		replace: m,
		go(x) {
			return a.go(x)
		},
	}
	return g
}
var Ng
;(function (e) {
	;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(Ng || (Ng = {}))
function kT(e, t, n) {
	return n === void 0 && (n = '/'), CT(e, t, n, !1)
}
function CT(e, t, n, r) {
	let o = typeof t == 'string' ? _i(t) : t,
		i = mi(o.pathname || '/', n)
	if (i == null) return null
	let a = Kx(e)
	_T(a)
	let s = null
	for (let l = 0; s == null && l < a.length; ++l) {
		let u = zT(i)
		s = FT(a[l], u, r)
	}
	return s
}
function Kx(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
	let o = (i, a, s) => {
		let l = { relativePath: s === void 0 ? i.path || '' : s, caseSensitive: i.caseSensitive === !0, childrenIndex: a, route: i }
		l.relativePath.startsWith('/') &&
			($e(
				l.relativePath.startsWith(r),
				'Absolute route path "' +
					l.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.',
			),
			(l.relativePath = l.relativePath.slice(r.length)))
		let u = yr([r, l.relativePath]),
			d = n.concat(l)
		i.children &&
			i.children.length > 0 &&
			($e(
				i.index !== !0,
				'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".'),
			),
			Kx(i.children, t, d, u)),
			!(i.path == null && !i.index) && t.push({ path: u, score: MT(u, i.index), routesMeta: d })
	}
	return (
		e.forEach((i, a) => {
			var s
			if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, a)
			else for (let l of Gx(i.path)) o(i, a, l)
		}),
		t
	)
}
function Gx(e) {
	let t = e.split('/')
	if (t.length === 0) return []
	let [n, ...r] = t,
		o = n.endsWith('?'),
		i = n.replace(/\?$/, '')
	if (r.length === 0) return o ? [i, ''] : [i]
	let a = Gx(r.join('/')),
		s = []
	return (
		s.push(...a.map(l => (l === '' ? i : [i, l].join('/')))),
		o && s.push(...a),
		s.map(l => (e.startsWith('/') && l === '' ? '/' : l))
	)
}
function _T(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: IT(
					t.routesMeta.map(r => r.childrenIndex),
					n.routesMeta.map(r => r.childrenIndex),
			  ),
	)
}
const PT = /^:[\w-]+$/,
	TT = 3,
	ET = 2,
	$T = 1,
	RT = 10,
	AT = -2,
	Vg = e => e === '*'
function MT(e, t) {
	let n = e.split('/'),
		r = n.length
	return (
		n.some(Vg) && (r += AT), t && (r += ET), n.filter(o => !Vg(o)).reduce((o, i) => o + (PT.test(i) ? TT : i === '' ? $T : RT), r)
	)
}
function IT(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function FT(e, t, n) {
	let { routesMeta: r } = e,
		o = {},
		i = '/',
		a = []
	for (let s = 0; s < r.length; ++s) {
		let l = r[s],
			u = s === r.length - 1,
			d = i === '/' ? t : t.slice(i.length) || '/',
			c = $u({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, d),
			f = l.route
		if (
			(!c &&
				u &&
				n &&
				!r[r.length - 1].route.index &&
				(c = $u({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, d)),
			!c)
		)
			return null
		Object.assign(o, c.params),
			a.push({ params: o, pathname: yr([i, c.pathname]), pathnameBase: BT(yr([i, c.pathnameBase])), route: f }),
			c.pathnameBase !== '/' && (i = yr([i, c.pathnameBase]))
	}
	return a
}
function $u(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
	let [n, r] = jT(e.path, e.caseSensitive, e.end),
		o = t.match(n)
	if (!o) return null
	let i = o[0],
		a = i.replace(/(.)\/+$/, '$1'),
		s = o.slice(1)
	return {
		params: r.reduce((u, d, c) => {
			let { paramName: f, isOptional: m } = d
			if (f === '*') {
				let g = s[c] || ''
				a = i.slice(0, i.length - g.length).replace(/(.)\/+$/, '$1')
			}
			const y = s[c]
			return m && !y ? (u[f] = void 0) : (u[f] = (y || '').replace(/%2F/g, '/')), u
		}, {}),
		pathname: i,
		pathnameBase: a,
		pattern: e,
	}
}
function jT(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Hx(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
		)
	let r = [],
		o =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(a, s, l) => (r.push({ paramName: s, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)'),
				)
	return (
		e.endsWith('*')
			? (r.push({ paramName: '*' }), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (o += '\\/*$')
			: e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
		[new RegExp(o, t ? void 0 : 'i'), r]
	)
}
function zT(e) {
	try {
		return e
			.split('/')
			.map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
			.join('/')
	} catch (t) {
		return (
			Hx(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').'),
			),
			e
		)
	}
}
function mi(e, t) {
	if (t === '/') return e
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n)
	return r && r !== '/' ? null : e.slice(n) || '/'
}
function LT(e, t) {
	t === void 0 && (t = '/')
	let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? _i(e) : e
	return { pathname: n ? (n.startsWith('/') ? n : DT(n, t)) : t, search: NT(r), hash: VT(o) }
}
function DT(e, t) {
	let n = t.replace(/\/+$/, '').split('/')
	return (
		e.split('/').forEach(o => {
			o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o)
		}),
		n.length > 1 ? n.join('/') : '/'
	)
}
function $d(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	)
}
function OT(e) {
	return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0))
}
function qx(e, t) {
	let n = OT(e)
	return t ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map(r => r.pathnameBase)
}
function Yx(e, t, n, r) {
	r === void 0 && (r = !1)
	let o
	typeof e == 'string'
		? (o = _i(e))
		: ((o = Ga({}, e)),
		  $e(!o.pathname || !o.pathname.includes('?'), $d('?', 'pathname', 'search', o)),
		  $e(!o.pathname || !o.pathname.includes('#'), $d('#', 'pathname', 'hash', o)),
		  $e(!o.search || !o.search.includes('#'), $d('#', 'search', 'hash', o)))
	let i = e === '' || o.pathname === '',
		a = i ? '/' : o.pathname,
		s
	if (a == null) s = n
	else {
		let c = t.length - 1
		if (!r && a.startsWith('..')) {
			let f = a.split('/')
			for (; f[0] === '..'; ) f.shift(), (c -= 1)
			o.pathname = f.join('/')
		}
		s = c >= 0 ? t[c] : '/'
	}
	let l = LT(o, s),
		u = a && a !== '/' && a.endsWith('/'),
		d = (i || a === '.') && n.endsWith('/')
	return !l.pathname.endsWith('/') && (u || d) && (l.pathname += '/'), l
}
const yr = e => e.join('/').replace(/\/\/+/g, '/'),
	BT = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	NT = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	VT = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function WT(e) {
	return (
		e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.internal == 'boolean' && 'data' in e
	)
}
const Xx = ['post', 'put', 'patch', 'delete']
new Set(Xx)
const UT = ['get', ...Xx]
new Set(UT)
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qa() {
	return (
		(qa = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		qa.apply(this, arguments)
	)
}
const cc = b.createContext(null),
	Qx = b.createContext(null),
	Pr = b.createContext(null),
	dc = b.createContext(null),
	po = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Zx = b.createContext(null)
function HT(e, t) {
	let { relative: n } = t === void 0 ? {} : t
	gs() || $e(!1)
	let { basename: r, navigator: o } = b.useContext(Pr),
		{ hash: i, pathname: a, search: s } = fc(e, { relative: n }),
		l = a
	return r !== '/' && (l = a === '/' ? r : yr([r, a])), o.createHref({ pathname: l, search: s, hash: i })
}
function gs() {
	return b.useContext(dc) != null
}
function ys() {
	return gs() || $e(!1), b.useContext(dc).location
}
function Jx(e) {
	b.useContext(Pr).static || b.useLayoutEffect(e)
}
function KT() {
	let { isDataRoute: e } = b.useContext(po)
	return e ? iE() : GT()
}
function GT() {
	gs() || $e(!1)
	let e = b.useContext(cc),
		{ basename: t, future: n, navigator: r } = b.useContext(Pr),
		{ matches: o } = b.useContext(po),
		{ pathname: i } = ys(),
		a = JSON.stringify(qx(o, n.v7_relativeSplatPath)),
		s = b.useRef(!1)
	return (
		Jx(() => {
			s.current = !0
		}),
		b.useCallback(
			function (u, d) {
				if ((d === void 0 && (d = {}), !s.current)) return
				if (typeof u == 'number') {
					r.go(u)
					return
				}
				let c = Yx(u, JSON.parse(a), i, d.relative === 'path')
				e == null && t !== '/' && (c.pathname = c.pathname === '/' ? t : yr([t, c.pathname])),
					(d.replace ? r.replace : r.push)(c, d.state, d)
			},
			[t, r, a, i, e],
		)
	)
}
function fc(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = b.useContext(Pr),
		{ matches: o } = b.useContext(po),
		{ pathname: i } = ys(),
		a = JSON.stringify(qx(o, r.v7_relativeSplatPath))
	return b.useMemo(() => Yx(e, JSON.parse(a), i, n === 'path'), [e, a, i, n])
}
function qT(e, t) {
	return YT(e, t)
}
function YT(e, t, n, r) {
	gs() || $e(!1)
	let { navigator: o } = b.useContext(Pr),
		{ matches: i } = b.useContext(po),
		a = i[i.length - 1],
		s = a ? a.params : {}
	a && a.pathname
	let l = a ? a.pathnameBase : '/'
	a && a.route
	let u = ys(),
		d
	if (t) {
		var c
		let x = typeof t == 'string' ? _i(t) : t
		l === '/' || ((c = x.pathname) != null && c.startsWith(l)) || $e(!1), (d = x)
	} else d = u
	let f = d.pathname || '/',
		m = f
	if (l !== '/') {
		let x = l.replace(/^\//, '').split('/')
		m = '/' + f.replace(/^\//, '').split('/').slice(x.length).join('/')
	}
	let y = kT(e, { pathname: m }),
		g = eE(
			y &&
				y.map(x =>
					Object.assign({}, x, {
						params: Object.assign({}, s, x.params),
						pathname: yr([l, o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname]),
						pathnameBase:
							x.pathnameBase === '/' ? l : yr([l, o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase]),
					}),
				),
			i,
			n,
			r,
		)
	return t && g
		? b.createElement(
				dc.Provider,
				{
					value: {
						location: qa({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, d),
						navigationType: ur.Pop,
					},
				},
				g,
		  )
		: g
}
function XT() {
	let e = oE(),
		t = WT(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
	return b.createElement(
		b.Fragment,
		null,
		b.createElement('h2', null, 'Unexpected Application Error!'),
		b.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? b.createElement('pre', { style: o }, n) : null,
		null,
	)
}
const QT = b.createElement(XT, null)
class ZT extends b.Component {
	constructor(t) {
		super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error })
	}
	static getDerivedStateFromError(t) {
		return { error: t }
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation }
	}
	componentDidCatch(t, n) {
		console.error('React Router caught the following error during render', t, n)
	}
	render() {
		return this.state.error !== void 0
			? b.createElement(
					po.Provider,
					{ value: this.props.routeContext },
					b.createElement(Zx.Provider, { value: this.state.error, children: this.props.component }),
			  )
			: this.props.children
	}
}
function JT(e) {
	let { routeContext: t, match: n, children: r } = e,
		o = b.useContext(cc)
	return (
		o &&
			o.static &&
			o.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(o.staticContext._deepestRenderedBoundaryId = n.route.id),
		b.createElement(po.Provider, { value: t }, r)
	)
}
function eE(e, t, n, r) {
	var o
	if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
		var i
		if (!n) return null
		if (n.errors) e = n.matches
		else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches
		else return null
	}
	let a = e,
		s = (o = n) == null ? void 0 : o.errors
	if (s != null) {
		let d = a.findIndex(c => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0)
		d >= 0 || $e(!1), (a = a.slice(0, Math.min(a.length, d + 1)))
	}
	let l = !1,
		u = -1
	if (n && r && r.v7_partialHydration)
		for (let d = 0; d < a.length; d++) {
			let c = a[d]
			if (((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d), c.route.id)) {
				let { loaderData: f, errors: m } = n,
					y = c.route.loader && f[c.route.id] === void 0 && (!m || m[c.route.id] === void 0)
				if (c.route.lazy || y) {
					;(l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]])
					break
				}
			}
		}
	return a.reduceRight((d, c, f) => {
		let m,
			y = !1,
			g = null,
			x = null
		n &&
			((m = s && c.route.id ? s[c.route.id] : void 0),
			(g = c.route.errorElement || QT),
			l && (u < 0 && f === 0 ? ((y = !0), (x = null)) : u === f && ((y = !0), (x = c.route.hydrateFallbackElement || null))))
		let p = t.concat(a.slice(0, f + 1)),
			h = () => {
				let v
				return (
					m
						? (v = g)
						: y
						? (v = x)
						: c.route.Component
						? (v = b.createElement(c.route.Component, null))
						: c.route.element
						? (v = c.route.element)
						: (v = d),
					b.createElement(JT, { match: c, routeContext: { outlet: d, matches: p, isDataRoute: n != null }, children: v })
				)
			}
		return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
			? b.createElement(ZT, {
					location: n.location,
					revalidation: n.revalidation,
					component: g,
					error: m,
					children: h(),
					routeContext: { outlet: null, matches: p, isDataRoute: !0 },
			  })
			: h()
	}, null)
}
var eS = (function (e) {
		return (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
	})(eS || {}),
	Ru = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseLoaderData = 'useLoaderData'),
			(e.UseActionData = 'useActionData'),
			(e.UseRouteError = 'useRouteError'),
			(e.UseNavigation = 'useNavigation'),
			(e.UseRouteLoaderData = 'useRouteLoaderData'),
			(e.UseMatches = 'useMatches'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			(e.UseRouteId = 'useRouteId'),
			e
		)
	})(Ru || {})
function tE(e) {
	let t = b.useContext(cc)
	return t || $e(!1), t
}
function nE(e) {
	let t = b.useContext(Qx)
	return t || $e(!1), t
}
function rE(e) {
	let t = b.useContext(po)
	return t || $e(!1), t
}
function tS(e) {
	let t = rE(),
		n = t.matches[t.matches.length - 1]
	return n.route.id || $e(!1), n.route.id
}
function oE() {
	var e
	let t = b.useContext(Zx),
		n = nE(Ru.UseRouteError),
		r = tS(Ru.UseRouteError)
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function iE() {
	let { router: e } = tE(eS.UseNavigateStable),
		t = tS(Ru.UseNavigateStable),
		n = b.useRef(!1)
	return (
		Jx(() => {
			n.current = !0
		}),
		b.useCallback(
			function (o, i) {
				i === void 0 && (i = {}), n.current && (typeof o == 'number' ? e.navigate(o) : e.navigate(o, qa({ fromRouteId: t }, i)))
			},
			[e, t],
		)
	)
}
function ra(e) {
	$e(!1)
}
function aE(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: o = ur.Pop,
		navigator: i,
		static: a = !1,
		future: s,
	} = e
	gs() && $e(!1)
	let l = t.replace(/^\/*/, '/'),
		u = b.useMemo(() => ({ basename: l, navigator: i, static: a, future: qa({ v7_relativeSplatPath: !1 }, s) }), [l, s, i, a])
	typeof r == 'string' && (r = _i(r))
	let { pathname: d = '/', search: c = '', hash: f = '', state: m = null, key: y = 'default' } = r,
		g = b.useMemo(() => {
			let x = mi(d, l)
			return x == null ? null : { location: { pathname: x, search: c, hash: f, state: m, key: y }, navigationType: o }
		}, [l, d, c, f, m, y, o])
	return g == null ? null : b.createElement(Pr.Provider, { value: u }, b.createElement(dc.Provider, { children: n, value: g }))
}
function sE(e) {
	let { children: t, location: n } = e
	return qT(fh(t), n)
}
new Promise(() => {})
function fh(e, t) {
	t === void 0 && (t = [])
	let n = []
	return (
		b.Children.forEach(e, (r, o) => {
			if (!b.isValidElement(r)) return
			let i = [...t, o]
			if (r.type === b.Fragment) {
				n.push.apply(n, fh(r.props.children, i))
				return
			}
			r.type !== ra && $e(!1), !r.props.index || !r.props.children || $e(!1)
			let a = {
				id: r.props.id || i.join('-'),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			}
			r.props.children && (a.children = fh(r.props.children, i)), n.push(a)
		}),
		n
	)
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Au() {
	return (
		(Au = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Au.apply(this, arguments)
	)
}
function nS(e, t) {
	if (e == null) return {}
	var n = {},
		r = Object.keys(e),
		o,
		i
	for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
	return n
}
function lE(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function uE(e, t) {
	return e.button === 0 && (!t || t === '_self') && !lE(e)
}
const cE = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
		'unstable_viewTransition',
	],
	dE = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'unstable_viewTransition', 'children'],
	fE = '6'
try {
	window.__reactRouterVersion = fE
} catch {}
const hE = b.createContext({ isTransitioning: !1 }),
	pE = 'startTransition',
	Wg = yf[pE]
function mE(e) {
	let { basename: t, children: n, future: r, window: o } = e,
		i = b.useRef()
	i.current == null && (i.current = xT({ window: o, v5Compat: !0 }))
	let a = i.current,
		[s, l] = b.useState({ action: a.action, location: a.location }),
		{ v7_startTransition: u } = r || {},
		d = b.useCallback(
			c => {
				u && Wg ? Wg(() => l(c)) : l(c)
			},
			[l, u],
		)
	return (
		b.useLayoutEffect(() => a.listen(d), [a, d]),
		b.createElement(aE, { basename: t, children: n, location: s.location, navigationType: s.action, navigator: a, future: r })
	)
}
const vE = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
	gE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	yE = b.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: o,
				reloadDocument: i,
				replace: a,
				state: s,
				target: l,
				to: u,
				preventScrollReset: d,
				unstable_viewTransition: c,
			} = t,
			f = nS(t, cE),
			{ basename: m } = b.useContext(Pr),
			y,
			g = !1
		if (typeof u == 'string' && gE.test(u) && ((y = u), vE))
			try {
				let v = new URL(window.location.href),
					k = u.startsWith('//') ? new URL(v.protocol + u) : new URL(u),
					C = mi(k.pathname, m)
				k.origin === v.origin && C != null ? (u = C + k.search + k.hash) : (g = !0)
			} catch {}
		let x = HT(u, { relative: o }),
			p = xE(u, { replace: a, state: s, target: l, preventScrollReset: d, relative: o, unstable_viewTransition: c })
		function h(v) {
			r && r(v), v.defaultPrevented || p(v)
		}
		return b.createElement('a', Au({}, f, { href: y || x, onClick: g || i ? r : h, ref: n, target: l }))
	}),
	ll = b.forwardRef(function (t, n) {
		let {
				'aria-current': r = 'page',
				caseSensitive: o = !1,
				className: i = '',
				end: a = !1,
				style: s,
				to: l,
				unstable_viewTransition: u,
				children: d,
			} = t,
			c = nS(t, dE),
			f = fc(l, { relative: c.relative }),
			m = ys(),
			y = b.useContext(Qx),
			{ navigator: g, basename: x } = b.useContext(Pr),
			p = y != null && SE(f) && u === !0,
			h = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname,
			v = m.pathname,
			k = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null
		o || ((v = v.toLowerCase()), (k = k ? k.toLowerCase() : null), (h = h.toLowerCase())), k && x && (k = mi(k, x) || k)
		const C = h !== '/' && h.endsWith('/') ? h.length - 1 : h.length
		let E = v === h || (!a && v.startsWith(h) && v.charAt(C) === '/'),
			T = k != null && (k === h || (!a && k.startsWith(h) && k.charAt(h.length) === '/')),
			R = { isActive: E, isPending: T, isTransitioning: p },
			M = E ? r : void 0,
			F
		typeof i == 'function'
			? (F = i(R))
			: (F = [i, E ? 'active' : null, T ? 'pending' : null, p ? 'transitioning' : null].filter(Boolean).join(' '))
		let Y = typeof s == 'function' ? s(R) : s
		return b.createElement(
			yE,
			Au({}, c, { 'aria-current': M, className: F, ref: n, style: Y, to: l, unstable_viewTransition: u }),
			typeof d == 'function' ? d(R) : d,
		)
	})
var hh
;(function (e) {
	;(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState')
})(hh || (hh = {}))
var Ug
;(function (e) {
	;(e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration')
})(Ug || (Ug = {}))
function bE(e) {
	let t = b.useContext(cc)
	return t || $e(!1), t
}
function xE(e, t) {
	let { target: n, replace: r, state: o, preventScrollReset: i, relative: a, unstable_viewTransition: s } = t === void 0 ? {} : t,
		l = KT(),
		u = ys(),
		d = fc(e, { relative: a })
	return b.useCallback(
		c => {
			if (uE(c, n)) {
				c.preventDefault()
				let f = r !== void 0 ? r : Eu(u) === Eu(d)
				l(e, { replace: f, state: o, preventScrollReset: i, relative: a, unstable_viewTransition: s })
			}
		},
		[u, l, d, r, o, n, e, i, a, s],
	)
}
function SE(e, t) {
	t === void 0 && (t = {})
	let n = b.useContext(hE)
	n == null && $e(!1)
	let { basename: r } = bE(hh.useViewTransitionState),
		o = fc(e, { relative: t.relative })
	if (!n.isTransitioning) return !1
	let i = mi(n.currentLocation.pathname, r) || n.currentLocation.pathname,
		a = mi(n.nextLocation.pathname, r) || n.nextLocation.pathname
	return $u(o.pathname, a) != null || $u(o.pathname, i) != null
}
var wE = !1
function kE(e) {
	if (e.sheet) return e.sheet
	for (var t = 0; t < document.styleSheets.length; t++)
		if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function CE(e) {
	var t = document.createElement('style')
	return (
		t.setAttribute('data-emotion', e.key),
		e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
		t.appendChild(document.createTextNode('')),
		t.setAttribute('data-s', ''),
		t
	)
}
var _E = (function () {
		function e(n) {
			var r = this
			;(this._insertTag = function (o) {
				var i
				r.tags.length === 0
					? r.insertionPoint
						? (i = r.insertionPoint.nextSibling)
						: r.prepend
						? (i = r.container.firstChild)
						: (i = r.before)
					: (i = r.tags[r.tags.length - 1].nextSibling),
					r.container.insertBefore(o, i),
					r.tags.push(o)
			}),
				(this.isSpeedy = n.speedy === void 0 ? !wE : n.speedy),
				(this.tags = []),
				(this.ctr = 0),
				(this.nonce = n.nonce),
				(this.key = n.key),
				(this.container = n.container),
				(this.prepend = n.prepend),
				(this.insertionPoint = n.insertionPoint),
				(this.before = null)
		}
		var t = e.prototype
		return (
			(t.hydrate = function (r) {
				r.forEach(this._insertTag)
			}),
			(t.insert = function (r) {
				this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(CE(this))
				var o = this.tags[this.tags.length - 1]
				if (this.isSpeedy) {
					var i = kE(o)
					try {
						i.insertRule(r, i.cssRules.length)
					} catch {}
				} else o.appendChild(document.createTextNode(r))
				this.ctr++
			}),
			(t.flush = function () {
				this.tags.forEach(function (r) {
					var o
					return (o = r.parentNode) == null ? void 0 : o.removeChild(r)
				}),
					(this.tags = []),
					(this.ctr = 0)
			}),
			e
		)
	})(),
	et = '-ms-',
	Mu = '-moz-',
	J = '-webkit-',
	rS = 'comm',
	Jp = 'rule',
	em = 'decl',
	PE = '@import',
	oS = '@keyframes',
	TE = '@layer',
	EE = Math.abs,
	hc = String.fromCharCode,
	$E = Object.assign
function RE(e, t) {
	return Ye(e, 0) ^ 45 ? (((((((t << 2) ^ Ye(e, 0)) << 2) ^ Ye(e, 1)) << 2) ^ Ye(e, 2)) << 2) ^ Ye(e, 3) : 0
}
function iS(e) {
	return e.trim()
}
function AE(e, t) {
	return (e = t.exec(e)) ? e[0] : e
}
function ee(e, t, n) {
	return e.replace(t, n)
}
function ph(e, t) {
	return e.indexOf(t)
}
function Ye(e, t) {
	return e.charCodeAt(t) | 0
}
function Ya(e, t, n) {
	return e.slice(t, n)
}
function dn(e) {
	return e.length
}
function tm(e) {
	return e.length
}
function ul(e, t) {
	return t.push(e), e
}
function ME(e, t) {
	return e.map(t).join('')
}
var pc = 1,
	vi = 1,
	aS = 0,
	xt = 0,
	Ie = 0,
	Pi = ''
function mc(e, t, n, r, o, i, a) {
	return { value: e, root: t, parent: n, type: r, props: o, children: i, line: pc, column: vi, length: a, return: '' }
}
function Hi(e, t) {
	return $E(mc('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function IE() {
	return Ie
}
function FE() {
	return (Ie = xt > 0 ? Ye(Pi, --xt) : 0), vi--, Ie === 10 && ((vi = 1), pc--), Ie
}
function Tt() {
	return (Ie = xt < aS ? Ye(Pi, xt++) : 0), vi++, Ie === 10 && ((vi = 1), pc++), Ie
}
function xn() {
	return Ye(Pi, xt)
}
function Dl() {
	return xt
}
function bs(e, t) {
	return Ya(Pi, e, t)
}
function Xa(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32:
			return 5
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125:
			return 4
		case 58:
			return 3
		case 34:
		case 39:
		case 40:
		case 91:
			return 2
		case 41:
		case 93:
			return 1
	}
	return 0
}
function sS(e) {
	return (pc = vi = 1), (aS = dn((Pi = e))), (xt = 0), []
}
function lS(e) {
	return (Pi = ''), e
}
function Ol(e) {
	return iS(bs(xt - 1, mh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function jE(e) {
	for (; (Ie = xn()) && Ie < 33; ) Tt()
	return Xa(e) > 2 || Xa(Ie) > 3 ? '' : ' '
}
function zE(e, t) {
	for (; --t && Tt() && !(Ie < 48 || Ie > 102 || (Ie > 57 && Ie < 65) || (Ie > 70 && Ie < 97)); );
	return bs(e, Dl() + (t < 6 && xn() == 32 && Tt() == 32))
}
function mh(e) {
	for (; Tt(); )
		switch (Ie) {
			case e:
				return xt
			case 34:
			case 39:
				e !== 34 && e !== 39 && mh(Ie)
				break
			case 40:
				e === 41 && mh(e)
				break
			case 92:
				Tt()
				break
		}
	return xt
}
function LE(e, t) {
	for (; Tt() && e + Ie !== 57; ) if (e + Ie === 84 && xn() === 47) break
	return '/*' + bs(t, xt - 1) + '*' + hc(e === 47 ? e : Tt())
}
function DE(e) {
	for (; !Xa(xn()); ) Tt()
	return bs(e, xt)
}
function OE(e) {
	return lS(Bl('', null, null, null, [''], (e = sS(e)), 0, [0], e))
}
function Bl(e, t, n, r, o, i, a, s, l) {
	for (var u = 0, d = 0, c = a, f = 0, m = 0, y = 0, g = 1, x = 1, p = 1, h = 0, v = '', k = o, C = i, E = r, T = v; x; )
		switch (((y = h), (h = Tt()))) {
			case 40:
				if (y != 108 && Ye(T, c - 1) == 58) {
					ph((T += ee(Ol(h), '&', '&\f')), '&\f') != -1 && (p = -1)
					break
				}
			case 34:
			case 39:
			case 91:
				T += Ol(h)
				break
			case 9:
			case 10:
			case 13:
			case 32:
				T += jE(y)
				break
			case 92:
				T += zE(Dl() - 1, 7)
				continue
			case 47:
				switch (xn()) {
					case 42:
					case 47:
						ul(BE(LE(Tt(), Dl()), t, n), l)
						break
					default:
						T += '/'
				}
				break
			case 123 * g:
				s[u++] = dn(T) * p
			case 125 * g:
			case 59:
			case 0:
				switch (h) {
					case 0:
					case 125:
						x = 0
					case 59 + d:
						p == -1 && (T = ee(T, /\f/g, '')),
							m > 0 && dn(T) - c && ul(m > 32 ? Kg(T + ';', r, n, c - 1) : Kg(ee(T, ' ', '') + ';', r, n, c - 2), l)
						break
					case 59:
						T += ';'
					default:
						if ((ul((E = Hg(T, t, n, u, d, o, s, v, (k = []), (C = []), c)), i), h === 123))
							if (d === 0) Bl(T, t, E, E, k, i, c, s, C)
							else
								switch (f === 99 && Ye(T, 3) === 110 ? 100 : f) {
									case 100:
									case 108:
									case 109:
									case 115:
										Bl(e, E, E, r && ul(Hg(e, E, E, 0, 0, o, s, v, o, (k = []), c), C), o, C, c, s, r ? k : C)
										break
									default:
										Bl(T, E, E, E, [''], C, 0, s, C)
								}
				}
				;(u = d = m = 0), (g = p = 1), (v = T = ''), (c = a)
				break
			case 58:
				;(c = 1 + dn(T)), (m = y)
			default:
				if (g < 1) {
					if (h == 123) --g
					else if (h == 125 && g++ == 0 && FE() == 125) continue
				}
				switch (((T += hc(h)), h * g)) {
					case 38:
						p = d > 0 ? 1 : ((T += '\f'), -1)
						break
					case 44:
						;(s[u++] = (dn(T) - 1) * p), (p = 1)
						break
					case 64:
						xn() === 45 && (T += Ol(Tt())), (f = xn()), (d = c = dn((v = T += DE(Dl())))), h++
						break
					case 45:
						y === 45 && dn(T) == 2 && (g = 0)
				}
		}
	return i
}
function Hg(e, t, n, r, o, i, a, s, l, u, d) {
	for (var c = o - 1, f = o === 0 ? i : [''], m = tm(f), y = 0, g = 0, x = 0; y < r; ++y)
		for (var p = 0, h = Ya(e, c + 1, (c = EE((g = a[y])))), v = e; p < m; ++p)
			(v = iS(g > 0 ? f[p] + ' ' + h : ee(h, /&\f/g, f[p]))) && (l[x++] = v)
	return mc(e, t, n, o === 0 ? Jp : s, l, u, d)
}
function BE(e, t, n) {
	return mc(e, t, n, rS, hc(IE()), Ya(e, 2, -2), 0)
}
function Kg(e, t, n, r) {
	return mc(e, t, n, em, Ya(e, 0, r), Ya(e, r + 1, -1), r)
}
function ei(e, t) {
	for (var n = '', r = tm(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || ''
	return n
}
function NE(e, t, n, r) {
	switch (e.type) {
		case TE:
			if (e.children.length) break
		case PE:
		case em:
			return (e.return = e.return || e.value)
		case rS:
			return ''
		case oS:
			return (e.return = e.value + '{' + ei(e.children, r) + '}')
		case Jp:
			e.value = e.props.join(',')
	}
	return dn((n = ei(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function VE(e) {
	var t = tm(e)
	return function (n, r, o, i) {
		for (var a = '', s = 0; s < t; s++) a += e[s](n, r, o, i) || ''
		return a
	}
}
function WE(e) {
	return function (t) {
		t.root || ((t = t.return) && e(t))
	}
}
var Gg = function (t) {
	var n = new WeakMap()
	return function (r) {
		if (n.has(r)) return n.get(r)
		var o = t(r)
		return n.set(r, o), o
	}
}
function uS(e) {
	var t = Object.create(null)
	return function (n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n]
	}
}
var UE = function (t, n, r) {
		for (var o = 0, i = 0; (o = i), (i = xn()), o === 38 && i === 12 && (n[r] = 1), !Xa(i); ) Tt()
		return bs(t, xt)
	},
	HE = function (t, n) {
		var r = -1,
			o = 44
		do
			switch (Xa(o)) {
				case 0:
					o === 38 && xn() === 12 && (n[r] = 1), (t[r] += UE(xt - 1, n, r))
					break
				case 2:
					t[r] += Ol(o)
					break
				case 4:
					if (o === 44) {
						;(t[++r] = xn() === 58 ? '&\f' : ''), (n[r] = t[r].length)
						break
					}
				default:
					t[r] += hc(o)
			}
		while ((o = Tt()))
		return t
	},
	KE = function (t, n) {
		return lS(HE(sS(t), n))
	},
	qg = new WeakMap(),
	GE = function (t) {
		if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
			for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== 'rule'; )
				if (((r = r.parent), !r)) return
			if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !qg.get(r)) && !o) {
				qg.set(t, !0)
				for (var i = [], a = KE(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
					for (var d = 0; d < s.length; d++, u++) t.props[u] = i[l] ? a[l].replace(/&\f/g, s[d]) : s[d] + ' ' + a[l]
			}
		}
	},
	qE = function (t) {
		if (t.type === 'decl') {
			var n = t.value
			n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''))
		}
	}
function cS(e, t) {
	switch (RE(e, t)) {
		case 5103:
			return J + 'print-' + e + e
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829:
			return J + e + e
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756:
			return J + e + Mu + e + et + e + e
		case 6828:
		case 4268:
			return J + e + et + e + e
		case 6165:
			return J + e + et + 'flex-' + e + e
		case 5187:
			return J + e + ee(e, /(\w+).+(:[^]+)/, J + 'box-$1$2' + et + 'flex-$1$2') + e
		case 5443:
			return J + e + et + 'flex-item-' + ee(e, /flex-|-self/, '') + e
		case 4675:
			return J + e + et + 'flex-line-pack' + ee(e, /align-content|flex-|-self/, '') + e
		case 5548:
			return J + e + et + ee(e, 'shrink', 'negative') + e
		case 5292:
			return J + e + et + ee(e, 'basis', 'preferred-size') + e
		case 6060:
			return J + 'box-' + ee(e, '-grow', '') + J + e + et + ee(e, 'grow', 'positive') + e
		case 4554:
			return J + ee(e, /([^-])(transform)/g, '$1' + J + '$2') + e
		case 6187:
			return ee(ee(ee(e, /(zoom-|grab)/, J + '$1'), /(image-set)/, J + '$1'), e, '') + e
		case 5495:
		case 3959:
			return ee(e, /(image-set\([^]*)/, J + '$1$`$1')
		case 4968:
			return ee(ee(e, /(.+:)(flex-)?(.*)/, J + 'box-pack:$3' + et + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + J + e + e
		case 4095:
		case 3583:
		case 4068:
		case 2532:
			return ee(e, /(.+)-inline(.+)/, J + '$1$2') + e
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (dn(e) - 1 - t > 6)
				switch (Ye(e, t + 1)) {
					case 109:
						if (Ye(e, t + 4) !== 45) break
					case 102:
						return ee(e, /(.+:)(.+)-([^]+)/, '$1' + J + '$2-$3$1' + Mu + (Ye(e, t + 3) == 108 ? '$3' : '$2-$3')) + e
					case 115:
						return ~ph(e, 'stretch') ? cS(ee(e, 'stretch', 'fill-available'), t) + e : e
				}
			break
		case 4949:
			if (Ye(e, t + 1) !== 115) break
		case 6444:
			switch (Ye(e, dn(e) - 3 - (~ph(e, '!important') && 10))) {
				case 107:
					return ee(e, ':', ':' + J) + e
				case 101:
					return (
						ee(
							e,
							/(.+:)([^;!]+)(;|!.+)?/,
							'$1' + J + (Ye(e, 14) === 45 ? 'inline-' : '') + 'box$3$1' + J + '$2$3$1' + et + '$2box$3',
						) + e
					)
			}
			break
		case 5936:
			switch (Ye(e, t + 11)) {
				case 114:
					return J + e + et + ee(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
				case 108:
					return J + e + et + ee(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
				case 45:
					return J + e + et + ee(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
			}
			return J + e + et + e + e
	}
	return e
}
var YE = function (t, n, r, o) {
		if (t.length > -1 && !t.return)
			switch (t.type) {
				case em:
					t.return = cS(t.value, t.length)
					break
				case oS:
					return ei([Hi(t, { value: ee(t.value, '@', '@' + J) })], o)
				case Jp:
					if (t.length)
						return ME(t.props, function (i) {
							switch (AE(i, /(::plac\w+|:read-\w+)/)) {
								case ':read-only':
								case ':read-write':
									return ei([Hi(t, { props: [ee(i, /:(read-\w+)/, ':' + Mu + '$1')] })], o)
								case '::placeholder':
									return ei(
										[
											Hi(t, { props: [ee(i, /:(plac\w+)/, ':' + J + 'input-$1')] }),
											Hi(t, { props: [ee(i, /:(plac\w+)/, ':' + Mu + '$1')] }),
											Hi(t, { props: [ee(i, /:(plac\w+)/, et + 'input-$1')] }),
										],
										o,
									)
							}
							return ''
						})
			}
	},
	XE = [YE],
	QE = function (t) {
		var n = t.key
		if (n === 'css') {
			var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
			Array.prototype.forEach.call(r, function (g) {
				var x = g.getAttribute('data-emotion')
				x.indexOf(' ') !== -1 && (document.head.appendChild(g), g.setAttribute('data-s', ''))
			})
		}
		var o = t.stylisPlugins || XE,
			i = {},
			a,
			s = []
		;(a = t.container || document.head),
			Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (g) {
				for (var x = g.getAttribute('data-emotion').split(' '), p = 1; p < x.length; p++) i[x[p]] = !0
				s.push(g)
			})
		var l,
			u = [GE, qE]
		{
			var d,
				c = [
					NE,
					WE(function (g) {
						d.insert(g)
					}),
				],
				f = VE(u.concat(o, c)),
				m = function (x) {
					return ei(OE(x), f)
				}
			l = function (x, p, h, v) {
				;(d = h), m(x ? x + '{' + p.styles + '}' : p.styles), v && (y.inserted[p.name] = !0)
			}
		}
		var y = {
			key: n,
			sheet: new _E({
				key: n,
				container: a,
				nonce: t.nonce,
				speedy: t.speedy,
				prepend: t.prepend,
				insertionPoint: t.insertionPoint,
			}),
			nonce: t.nonce,
			inserted: i,
			registered: {},
			insert: l,
		}
		return y.sheet.hydrate(s), y
	}
function so() {
	return (
		(so = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		so.apply(null, arguments)
	)
}
var dS = { exports: {} },
	le = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ue = typeof Symbol == 'function' && Symbol.for,
	nm = Ue ? Symbol.for('react.element') : 60103,
	rm = Ue ? Symbol.for('react.portal') : 60106,
	vc = Ue ? Symbol.for('react.fragment') : 60107,
	gc = Ue ? Symbol.for('react.strict_mode') : 60108,
	yc = Ue ? Symbol.for('react.profiler') : 60114,
	bc = Ue ? Symbol.for('react.provider') : 60109,
	xc = Ue ? Symbol.for('react.context') : 60110,
	om = Ue ? Symbol.for('react.async_mode') : 60111,
	Sc = Ue ? Symbol.for('react.concurrent_mode') : 60111,
	wc = Ue ? Symbol.for('react.forward_ref') : 60112,
	kc = Ue ? Symbol.for('react.suspense') : 60113,
	ZE = Ue ? Symbol.for('react.suspense_list') : 60120,
	Cc = Ue ? Symbol.for('react.memo') : 60115,
	_c = Ue ? Symbol.for('react.lazy') : 60116,
	JE = Ue ? Symbol.for('react.block') : 60121,
	e5 = Ue ? Symbol.for('react.fundamental') : 60117,
	t5 = Ue ? Symbol.for('react.responder') : 60118,
	n5 = Ue ? Symbol.for('react.scope') : 60119
function It(e) {
	if (typeof e == 'object' && e !== null) {
		var t = e.$$typeof
		switch (t) {
			case nm:
				switch (((e = e.type), e)) {
					case om:
					case Sc:
					case vc:
					case yc:
					case gc:
					case kc:
						return e
					default:
						switch (((e = e && e.$$typeof), e)) {
							case xc:
							case wc:
							case _c:
							case Cc:
							case bc:
								return e
							default:
								return t
						}
				}
			case rm:
				return t
		}
	}
}
function fS(e) {
	return It(e) === Sc
}
le.AsyncMode = om
le.ConcurrentMode = Sc
le.ContextConsumer = xc
le.ContextProvider = bc
le.Element = nm
le.ForwardRef = wc
le.Fragment = vc
le.Lazy = _c
le.Memo = Cc
le.Portal = rm
le.Profiler = yc
le.StrictMode = gc
le.Suspense = kc
le.isAsyncMode = function (e) {
	return fS(e) || It(e) === om
}
le.isConcurrentMode = fS
le.isContextConsumer = function (e) {
	return It(e) === xc
}
le.isContextProvider = function (e) {
	return It(e) === bc
}
le.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === nm
}
le.isForwardRef = function (e) {
	return It(e) === wc
}
le.isFragment = function (e) {
	return It(e) === vc
}
le.isLazy = function (e) {
	return It(e) === _c
}
le.isMemo = function (e) {
	return It(e) === Cc
}
le.isPortal = function (e) {
	return It(e) === rm
}
le.isProfiler = function (e) {
	return It(e) === yc
}
le.isStrictMode = function (e) {
	return It(e) === gc
}
le.isSuspense = function (e) {
	return It(e) === kc
}
le.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === vc ||
		e === Sc ||
		e === yc ||
		e === gc ||
		e === kc ||
		e === ZE ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === _c ||
				e.$$typeof === Cc ||
				e.$$typeof === bc ||
				e.$$typeof === xc ||
				e.$$typeof === wc ||
				e.$$typeof === e5 ||
				e.$$typeof === t5 ||
				e.$$typeof === n5 ||
				e.$$typeof === JE))
	)
}
le.typeOf = It
dS.exports = le
var r5 = dS.exports,
	hS = r5,
	o5 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
	i5 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
	pS = {}
pS[hS.ForwardRef] = o5
pS[hS.Memo] = i5
var a5 = !0
function s5(e, t, n) {
	var r = ''
	return (
		n.split(' ').forEach(function (o) {
			e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ')
		}),
		r
	)
}
var mS = function (t, n, r) {
		var o = t.key + '-' + n.name
		;(r === !1 || a5 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
	},
	vS = function (t, n, r) {
		mS(t, n, r)
		var o = t.key + '-' + n.name
		if (t.inserted[n.name] === void 0) {
			var i = n
			do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next)
			while (i !== void 0)
		}
	}
function l5(e) {
	for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
		(n =
			(e.charCodeAt(r) & 255) |
			((e.charCodeAt(++r) & 255) << 8) |
			((e.charCodeAt(++r) & 255) << 16) |
			((e.charCodeAt(++r) & 255) << 24)),
			(n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
			(n ^= n >>> 24),
			(t = ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^ ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
	switch (o) {
		case 3:
			t ^= (e.charCodeAt(r + 2) & 255) << 16
		case 2:
			t ^= (e.charCodeAt(r + 1) & 255) << 8
		case 1:
			;(t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
	}
	return (t ^= t >>> 13), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)), ((t ^ (t >>> 15)) >>> 0).toString(36)
}
var u5 = {
		animationIterationCount: 1,
		aspectRatio: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		scale: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1,
	},
	c5 = !1,
	d5 = /[A-Z]|^ms/g,
	f5 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
	gS = function (t) {
		return t.charCodeAt(1) === 45
	},
	Yg = function (t) {
		return t != null && typeof t != 'boolean'
	},
	Rd = uS(function (e) {
		return gS(e) ? e : e.replace(d5, '-$&').toLowerCase()
	}),
	Xg = function (t, n) {
		switch (t) {
			case 'animation':
			case 'animationName':
				if (typeof n == 'string')
					return n.replace(f5, function (r, o, i) {
						return (fn = { name: o, styles: i, next: fn }), o
					})
		}
		return u5[t] !== 1 && !gS(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n
	},
	h5 =
		'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.'
function Qa(e, t, n) {
	if (n == null) return ''
	var r = n
	if (r.__emotion_styles !== void 0) return r
	switch (typeof n) {
		case 'boolean':
			return ''
		case 'object': {
			var o = n
			if (o.anim === 1) return (fn = { name: o.name, styles: o.styles, next: fn }), o.name
			var i = n
			if (i.styles !== void 0) {
				var a = i.next
				if (a !== void 0) for (; a !== void 0; ) (fn = { name: a.name, styles: a.styles, next: fn }), (a = a.next)
				var s = i.styles + ';'
				return s
			}
			return p5(e, t, n)
		}
		case 'function': {
			if (e !== void 0) {
				var l = fn,
					u = n(e)
				return (fn = l), Qa(e, t, u)
			}
			break
		}
	}
	var d = n
	if (t == null) return d
	var c = t[d]
	return c !== void 0 ? c : d
}
function p5(e, t, n) {
	var r = ''
	if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += Qa(e, t, n[o]) + ';'
	else
		for (var i in n) {
			var a = n[i]
			if (typeof a != 'object') {
				var s = a
				t != null && t[s] !== void 0 ? (r += i + '{' + t[s] + '}') : Yg(s) && (r += Rd(i) + ':' + Xg(i, s) + ';')
			} else {
				if (i === 'NO_COMPONENT_SELECTOR' && c5) throw new Error(h5)
				if (Array.isArray(a) && typeof a[0] == 'string' && (t == null || t[a[0]] === void 0))
					for (var l = 0; l < a.length; l++) Yg(a[l]) && (r += Rd(i) + ':' + Xg(i, a[l]) + ';')
				else {
					var u = Qa(e, t, a)
					switch (i) {
						case 'animation':
						case 'animationName': {
							r += Rd(i) + ':' + u + ';'
							break
						}
						default:
							r += i + '{' + u + '}'
					}
				}
			}
		}
	return r
}
var Qg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
	fn
function im(e, t, n) {
	if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0) return e[0]
	var r = !0,
		o = ''
	fn = void 0
	var i = e[0]
	if (i == null || i.raw === void 0) (r = !1), (o += Qa(n, t, i))
	else {
		var a = i
		o += a[0]
	}
	for (var s = 1; s < e.length; s++)
		if (((o += Qa(n, t, e[s])), r)) {
			var l = i
			o += l[s]
		}
	Qg.lastIndex = 0
	for (var u = '', d; (d = Qg.exec(o)) !== null; ) u += '-' + d[1]
	var c = l5(o) + u
	return { name: c, styles: o, next: fn }
}
var m5 = function (t) {
		return t()
	},
	yS = yf.useInsertionEffect ? yf.useInsertionEffect : !1,
	v5 = yS || m5,
	Zg = yS || b.useLayoutEffect,
	bS = b.createContext(typeof HTMLElement < 'u' ? QE({ key: 'css' }) : null)
bS.Provider
var xS = function (t) {
		return b.forwardRef(function (n, r) {
			var o = b.useContext(bS)
			return t(n, o, r)
		})
	},
	Za = b.createContext({}),
	g5 = function (t, n) {
		if (typeof n == 'function') {
			var r = n(t)
			return r
		}
		return so({}, t, n)
	},
	y5 = Gg(function (e) {
		return Gg(function (t) {
			return g5(e, t)
		})
	}),
	b5 = function (t) {
		var n = b.useContext(Za)
		return t.theme !== n && (n = y5(n)(t.theme)), b.createElement(Za.Provider, { value: n }, t.children)
	},
	Pc = xS(function (e, t) {
		var n = e.styles,
			r = im([n], void 0, b.useContext(Za)),
			o = b.useRef()
		return (
			Zg(
				function () {
					var i = t.key + '-global',
						a = new t.sheet.constructor({ key: i, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }),
						s = !1,
						l = document.querySelector('style[data-emotion="' + i + ' ' + r.name + '"]')
					return (
						t.sheet.tags.length && (a.before = t.sheet.tags[0]),
						l !== null && ((s = !0), l.setAttribute('data-emotion', i), a.hydrate([l])),
						(o.current = [a, s]),
						function () {
							a.flush()
						}
					)
				},
				[t],
			),
			Zg(
				function () {
					var i = o.current,
						a = i[0],
						s = i[1]
					if (s) {
						i[1] = !1
						return
					}
					if ((r.next !== void 0 && vS(t, r.next, !0), a.tags.length)) {
						var l = a.tags[a.tags.length - 1].nextElementSibling
						;(a.before = l), a.flush()
					}
					t.insert('', r, a, !1)
				},
				[t, r.name],
			),
			null
		)
	})
function x5() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
	return im(t)
}
var Tc = function () {
		var t = x5.apply(void 0, arguments),
			n = 'animation-' + t.name
		return {
			name: n,
			styles: '@keyframes ' + n + '{' + t.styles + '}',
			anim: 1,
			toString: function () {
				return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
			},
		}
	},
	SS = String.raw,
	wS = SS`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
	S5 = () => S.jsx(Pc, { styles: wS }),
	w5 = ({ scope: e = '' }) =>
		S.jsx(Pc, {
			styles: SS`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${wS}
    `,
		})
function k5(e, t) {
	return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`
}
function Ht(e = {}) {
	const {
			name: t,
			strict: n = !0,
			hookName: r = 'useContext',
			providerName: o = 'Provider',
			errorMessage: i,
			defaultValue: a,
		} = e,
		s = b.createContext(a)
	s.displayName = t
	function l() {
		var u
		const d = b.useContext(s)
		if (!d && n) {
			const c = new Error(i ?? k5(r, o))
			throw ((c.name = 'ContextError'), (u = Error.captureStackTrace) == null || u.call(Error, c, l), c)
		}
		return d
	}
	return [s.Provider, l, s]
}
var [C5, _5] = Ht({ strict: !1, name: 'PortalManagerContext' })
function kS(e) {
	const { children: t, zIndex: n } = e
	return S.jsx(C5, { value: { zIndex: n }, children: t })
}
kS.displayName = 'PortalManager'
var Xr = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect,
	[CS, P5] = Ht({ strict: !1, name: 'PortalContext' }),
	am = 'chakra-portal',
	T5 = '.chakra-portal',
	E5 = e =>
		S.jsx('div', {
			className: 'chakra-portal-zIndex',
			style: { position: 'absolute', zIndex: e.zIndex, top: 0, left: 0, right: 0 },
			children: e.children,
		}),
	$5 = e => {
		const { appendToParentPortal: t, children: n } = e,
			[r, o] = b.useState(null),
			i = b.useRef(null),
			[, a] = b.useState({})
		b.useEffect(() => a({}), [])
		const s = P5(),
			l = _5()
		Xr(() => {
			if (!r) return
			const d = r.ownerDocument,
				c = t ? s ?? d.body : d.body
			if (!c) return
			;(i.current = d.createElement('div')), (i.current.className = am), c.appendChild(i.current), a({})
			const f = i.current
			return () => {
				c.contains(f) && c.removeChild(f)
			}
		}, [r])
		const u = l != null && l.zIndex ? S.jsx(E5, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n
		return i.current
			? Zp.createPortal(S.jsx(CS, { value: i.current, children: u }), i.current)
			: S.jsx('span', {
					ref: d => {
						d && o(d)
					},
			  })
	},
	R5 = e => {
		const { children: t, containerRef: n, appendToParentPortal: r } = e,
			o = n.current,
			i = o ?? (typeof window < 'u' ? document.body : void 0),
			a = b.useMemo(() => {
				const l = o == null ? void 0 : o.ownerDocument.createElement('div')
				return l && (l.className = am), l
			}, [o]),
			[, s] = b.useState({})
		return (
			Xr(() => s({}), []),
			Xr(() => {
				if (!(!a || !i))
					return (
						i.appendChild(a),
						() => {
							i.removeChild(a)
						}
					)
			}, [a, i]),
			i && a ? Zp.createPortal(S.jsx(CS, { value: r ? a : null, children: t }), a) : null
		)
	}
function xs(e) {
	const t = { appendToParentPortal: !0, ...e },
		{ containerRef: n, ...r } = t
	return n ? S.jsx(R5, { containerRef: n, ...r }) : S.jsx($5, { ...r })
}
xs.className = am
xs.selector = T5
xs.displayName = 'Portal'
function _S() {
	const e = b.useContext(Za)
	if (!e)
		throw Error(
			'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`',
		)
	return e
}
var sm = b.createContext({})
sm.displayName = 'ColorModeContext'
function lm() {
	const e = b.useContext(sm)
	if (e === void 0) throw new Error('useColorMode must be used within a ColorModeProvider')
	return e
}
var cl = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' }
function A5(e = {}) {
	const { preventTransition: t = !0 } = e,
		n = {
			setDataset: r => {
				const o = t ? n.preventTransition() : void 0
				;(document.documentElement.dataset.theme = r), (document.documentElement.style.colorScheme = r), o == null || o()
			},
			setClassName(r) {
				document.body.classList.add(r ? cl.dark : cl.light), document.body.classList.remove(r ? cl.light : cl.dark)
			},
			query() {
				return window.matchMedia('(prefers-color-scheme: dark)')
			},
			getSystemTheme(r) {
				var o
				return ((o = n.query().matches) != null ? o : r === 'dark') ? 'dark' : 'light'
			},
			addListener(r) {
				const o = n.query(),
					i = a => {
						r(a.matches ? 'dark' : 'light')
					}
				return (
					typeof o.addListener == 'function' ? o.addListener(i) : o.addEventListener('change', i),
					() => {
						typeof o.removeListener == 'function' ? o.removeListener(i) : o.removeEventListener('change', i)
					}
				)
			},
			preventTransition() {
				const r = document.createElement('style')
				return (
					r.appendChild(
						document.createTextNode(
							'*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
						),
					),
					document.head.appendChild(r),
					() => {
						window.getComputedStyle(document.body),
							requestAnimationFrame(() => {
								requestAnimationFrame(() => {
									document.head.removeChild(r)
								})
							})
					}
				)
			},
		}
	return n
}
var M5 = 'chakra-ui-color-mode'
function I5(e) {
	return {
		ssr: !1,
		type: 'localStorage',
		get(t) {
			if (!(globalThis != null && globalThis.document)) return t
			let n
			try {
				n = localStorage.getItem(e) || t
			} catch {}
			return n || t
		},
		set(t) {
			try {
				localStorage.setItem(e, t)
			} catch {}
		},
	}
}
var F5 = I5(M5),
	Jg = () => {}
function e0(e, t) {
	return e.type === 'cookie' && e.ssr ? e.get(t) : t
}
function PS(e) {
	const {
			value: t,
			children: n,
			options: { useSystemColorMode: r, initialColorMode: o, disableTransitionOnChange: i } = {},
			colorModeManager: a = F5,
		} = e,
		s = o === 'dark' ? 'dark' : 'light',
		[l, u] = b.useState(() => e0(a, s)),
		[d, c] = b.useState(() => e0(a)),
		{ getSystemTheme: f, setClassName: m, setDataset: y, addListener: g } = b.useMemo(() => A5({ preventTransition: i }), [i]),
		x = o === 'system' && !l ? d : l,
		p = b.useCallback(
			k => {
				const C = k === 'system' ? f() : k
				u(C), m(C === 'dark'), y(C), a.set(C)
			},
			[a, f, m, y],
		)
	Xr(() => {
		o === 'system' && c(f())
	}, []),
		b.useEffect(() => {
			const k = a.get()
			if (k) {
				p(k)
				return
			}
			if (o === 'system') {
				p('system')
				return
			}
			p(s)
		}, [a, s, o, p])
	const h = b.useCallback(() => {
		p(x === 'dark' ? 'light' : 'dark')
	}, [x, p])
	b.useEffect(() => {
		if (r) return g(p)
	}, [r, g, p])
	const v = b.useMemo(
		() => ({ colorMode: t ?? x, toggleColorMode: t ? Jg : h, setColorMode: t ? Jg : p, forced: t !== void 0 }),
		[x, h, p, t],
	)
	return S.jsx(sm.Provider, { value: v, children: n })
}
PS.displayName = 'ColorModeProvider'
function TS() {
	const e = lm(),
		t = _S()
	return { ...e, theme: t }
}
var ue = (...e) => e.filter(Boolean).join(' ')
function nn(e) {
	const t = typeof e
	return e != null && (t === 'object' || t === 'function') && !Array.isArray(e)
}
function vn(e, ...t) {
	return j5(e) ? e(...t) : e
}
var j5 = e => typeof e == 'function',
	q = e => (e ? '' : void 0),
	Ad = e => (e ? !0 : void 0)
function Ne(...e) {
	return function (n) {
		e.some(r => (r == null || r(n), n == null ? void 0 : n.defaultPrevented))
	}
}
function z5(...e) {
	return function (n) {
		e.forEach(r => {
			r == null || r(n)
		})
	}
}
var Iu = { exports: {} }
Iu.exports
;(function (e, t) {
	var n = 200,
		r = '__lodash_hash_undefined__',
		o = 800,
		i = 16,
		a = 9007199254740991,
		s = '[object Arguments]',
		l = '[object Array]',
		u = '[object AsyncFunction]',
		d = '[object Boolean]',
		c = '[object Date]',
		f = '[object Error]',
		m = '[object Function]',
		y = '[object GeneratorFunction]',
		g = '[object Map]',
		x = '[object Number]',
		p = '[object Null]',
		h = '[object Object]',
		v = '[object Proxy]',
		k = '[object RegExp]',
		C = '[object Set]',
		E = '[object String]',
		T = '[object Undefined]',
		R = '[object WeakMap]',
		M = '[object ArrayBuffer]',
		F = '[object DataView]',
		Y = '[object Float32Array]',
		we = '[object Float64Array]',
		He = '[object Int8Array]',
		at = '[object Int16Array]',
		pe = '[object Int32Array]',
		ke = '[object Uint8Array]',
		Oe = '[object Uint8ClampedArray]',
		I = '[object Uint16Array]',
		O = '[object Uint32Array]',
		N = /[\\^$.*+?()[\]{}|]/g,
		oe = /^\[object .+?Constructor\]$/,
		ie = /^(?:0|[1-9]\d*)$/,
		H = {}
	;(H[Y] = H[we] = H[He] = H[at] = H[pe] = H[ke] = H[Oe] = H[I] = H[O] = !0),
		(H[s] = H[l] = H[M] = H[d] = H[F] = H[c] = H[f] = H[m] = H[g] = H[x] = H[h] = H[k] = H[C] = H[E] = H[R] = !1)
	var ce = typeof Us == 'object' && Us && Us.Object === Object && Us,
		on = typeof self == 'object' && self && self.Object === Object && self,
		Be = ce || on || Function('return this')(),
		Ft = t && !t.nodeType && t,
		an = Ft && !0 && e && !e.nodeType && e,
		mo = an && an.exports === Ft,
		Rr = mo && ce.process,
		vo = (function () {
			try {
				var w = an && an.require && an.require('util').types
				return w || (Rr && Rr.binding && Rr.binding('util'))
			} catch {}
		})(),
		Ar = vo && vo.isTypedArray
	function Ii(w, P, $) {
		switch ($.length) {
			case 0:
				return w.call(P)
			case 1:
				return w.call(P, $[0])
			case 2:
				return w.call(P, $[0], $[1])
			case 3:
				return w.call(P, $[0], $[1], $[2])
		}
		return w.apply(P, $)
	}
	function zs(w, P) {
		for (var $ = -1, z = Array(w); ++$ < w; ) z[$] = P($)
		return z
	}
	function W(w) {
		return function (P) {
			return w(P)
		}
	}
	function ye(w, P) {
		return w == null ? void 0 : w[P]
	}
	function je(w, P) {
		return function ($) {
			return w(P($))
		}
	}
	var St = Array.prototype,
		Cn = Function.prototype,
		Mr = Object.prototype,
		Kc = Be['__core-js_shared__'],
		Ls = Cn.toString,
		Xn = Mr.hasOwnProperty,
		fv = (function () {
			var w = /[^.]+$/.exec((Kc && Kc.keys && Kc.keys.IE_PROTO) || '')
			return w ? 'Symbol(src)_1.' + w : ''
		})(),
		hv = Mr.toString,
		VC = Ls.call(Object),
		WC = RegExp(
			'^' +
				Ls.call(Xn)
					.replace(N, '\\$&')
					.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
				'$',
		),
		Ds = mo ? Be.Buffer : void 0,
		pv = Be.Symbol,
		mv = Be.Uint8Array
	Ds && Ds.allocUnsafe
	var vv = je(Object.getPrototypeOf, Object),
		gv = Object.create,
		UC = Mr.propertyIsEnumerable,
		HC = St.splice,
		Ir = pv ? pv.toStringTag : void 0,
		Os = (function () {
			try {
				var w = Yc(Object, 'defineProperty')
				return w({}, '', {}), w
			} catch {}
		})(),
		KC = Ds ? Ds.isBuffer : void 0,
		yv = Math.max,
		GC = Date.now,
		bv = Yc(Be, 'Map'),
		Fi = Yc(Object, 'create'),
		qC = (function () {
			function w() {}
			return function (P) {
				if (!jr(P)) return {}
				if (gv) return gv(P)
				w.prototype = P
				var $ = new w()
				return (w.prototype = void 0), $
			}
		})()
	function Fr(w) {
		var P = -1,
			$ = w == null ? 0 : w.length
		for (this.clear(); ++P < $; ) {
			var z = w[P]
			this.set(z[0], z[1])
		}
	}
	function YC() {
		;(this.__data__ = Fi ? Fi(null) : {}), (this.size = 0)
	}
	function XC(w) {
		var P = this.has(w) && delete this.__data__[w]
		return (this.size -= P ? 1 : 0), P
	}
	function QC(w) {
		var P = this.__data__
		if (Fi) {
			var $ = P[w]
			return $ === r ? void 0 : $
		}
		return Xn.call(P, w) ? P[w] : void 0
	}
	function ZC(w) {
		var P = this.__data__
		return Fi ? P[w] !== void 0 : Xn.call(P, w)
	}
	function JC(w, P) {
		var $ = this.__data__
		return (this.size += this.has(w) ? 0 : 1), ($[w] = Fi && P === void 0 ? r : P), this
	}
	;(Fr.prototype.clear = YC),
		(Fr.prototype.delete = XC),
		(Fr.prototype.get = QC),
		(Fr.prototype.has = ZC),
		(Fr.prototype.set = JC)
	function _n(w) {
		var P = -1,
			$ = w == null ? 0 : w.length
		for (this.clear(); ++P < $; ) {
			var z = w[P]
			this.set(z[0], z[1])
		}
	}
	function e_() {
		;(this.__data__ = []), (this.size = 0)
	}
	function t_(w) {
		var P = this.__data__,
			$ = Bs(P, w)
		if ($ < 0) return !1
		var z = P.length - 1
		return $ == z ? P.pop() : HC.call(P, $, 1), --this.size, !0
	}
	function n_(w) {
		var P = this.__data__,
			$ = Bs(P, w)
		return $ < 0 ? void 0 : P[$][1]
	}
	function r_(w) {
		return Bs(this.__data__, w) > -1
	}
	function o_(w, P) {
		var $ = this.__data__,
			z = Bs($, w)
		return z < 0 ? (++this.size, $.push([w, P])) : ($[z][1] = P), this
	}
	;(_n.prototype.clear = e_),
		(_n.prototype.delete = t_),
		(_n.prototype.get = n_),
		(_n.prototype.has = r_),
		(_n.prototype.set = o_)
	function go(w) {
		var P = -1,
			$ = w == null ? 0 : w.length
		for (this.clear(); ++P < $; ) {
			var z = w[P]
			this.set(z[0], z[1])
		}
	}
	function i_() {
		;(this.size = 0), (this.__data__ = { hash: new Fr(), map: new (bv || _n)(), string: new Fr() })
	}
	function a_(w) {
		var P = Vs(this, w).delete(w)
		return (this.size -= P ? 1 : 0), P
	}
	function s_(w) {
		return Vs(this, w).get(w)
	}
	function l_(w) {
		return Vs(this, w).has(w)
	}
	function u_(w, P) {
		var $ = Vs(this, w),
			z = $.size
		return $.set(w, P), (this.size += $.size == z ? 0 : 1), this
	}
	;(go.prototype.clear = i_),
		(go.prototype.delete = a_),
		(go.prototype.get = s_),
		(go.prototype.has = l_),
		(go.prototype.set = u_)
	function yo(w) {
		var P = (this.__data__ = new _n(w))
		this.size = P.size
	}
	function c_() {
		;(this.__data__ = new _n()), (this.size = 0)
	}
	function d_(w) {
		var P = this.__data__,
			$ = P.delete(w)
		return (this.size = P.size), $
	}
	function f_(w) {
		return this.__data__.get(w)
	}
	function h_(w) {
		return this.__data__.has(w)
	}
	function p_(w, P) {
		var $ = this.__data__
		if ($ instanceof _n) {
			var z = $.__data__
			if (!bv || z.length < n - 1) return z.push([w, P]), (this.size = ++$.size), this
			$ = this.__data__ = new go(z)
		}
		return $.set(w, P), (this.size = $.size), this
	}
	;(yo.prototype.clear = c_),
		(yo.prototype.delete = d_),
		(yo.prototype.get = f_),
		(yo.prototype.has = h_),
		(yo.prototype.set = p_)
	function m_(w, P) {
		var $ = Zc(w),
			z = !$ && Qc(w),
			G = !$ && !z && Cv(w),
			de = !$ && !z && !G && Pv(w),
			be = $ || z || G || de,
			Q = be ? zs(w.length, String) : [],
			xe = Q.length
		for (var Gt in w)
			(be &&
				(Gt == 'length' ||
					(G && (Gt == 'offset' || Gt == 'parent')) ||
					(de && (Gt == 'buffer' || Gt == 'byteLength' || Gt == 'byteOffset')) ||
					wv(Gt, xe))) ||
				Q.push(Gt)
		return Q
	}
	function Gc(w, P, $) {
		;(($ !== void 0 && !Ws(w[P], $)) || ($ === void 0 && !(P in w))) && qc(w, P, $)
	}
	function v_(w, P, $) {
		var z = w[P]
		;(!(Xn.call(w, P) && Ws(z, $)) || ($ === void 0 && !(P in w))) && qc(w, P, $)
	}
	function Bs(w, P) {
		for (var $ = w.length; $--; ) if (Ws(w[$][0], P)) return $
		return -1
	}
	function qc(w, P, $) {
		P == '__proto__' && Os ? Os(w, P, { configurable: !0, enumerable: !0, value: $, writable: !0 }) : (w[P] = $)
	}
	var g_ = R_()
	function Ns(w) {
		return w == null ? (w === void 0 ? T : p) : Ir && Ir in Object(w) ? A_(w) : L_(w)
	}
	function xv(w) {
		return ji(w) && Ns(w) == s
	}
	function y_(w) {
		if (!jr(w) || j_(w)) return !1
		var P = ed(w) ? WC : oe
		return P.test(N_(w))
	}
	function b_(w) {
		return ji(w) && _v(w.length) && !!H[Ns(w)]
	}
	function x_(w) {
		if (!jr(w)) return z_(w)
		var P = kv(w),
			$ = []
		for (var z in w) (z == 'constructor' && (P || !Xn.call(w, z))) || $.push(z)
		return $
	}
	function Sv(w, P, $, z, G) {
		w !== P &&
			g_(
				P,
				function (de, be) {
					if ((G || (G = new yo()), jr(de))) S_(w, P, be, $, Sv, z, G)
					else {
						var Q = z ? z(Xc(w, be), de, be + '', w, P, G) : void 0
						Q === void 0 && (Q = de), Gc(w, be, Q)
					}
				},
				Tv,
			)
	}
	function S_(w, P, $, z, G, de, be) {
		var Q = Xc(w, $),
			xe = Xc(P, $),
			Gt = be.get(xe)
		if (Gt) {
			Gc(w, $, Gt)
			return
		}
		var wt = de ? de(Q, xe, $ + '', w, P, be) : void 0,
			zi = wt === void 0
		if (zi) {
			var td = Zc(xe),
				nd = !td && Cv(xe),
				$v = !td && !nd && Pv(xe)
			;(wt = xe),
				td || nd || $v
					? Zc(Q)
						? (wt = Q)
						: V_(Q)
						? (wt = T_(Q))
						: nd
						? ((zi = !1), (wt = C_(xe)))
						: $v
						? ((zi = !1), (wt = P_(xe)))
						: (wt = [])
					: W_(xe) || Qc(xe)
					? ((wt = Q), Qc(Q) ? (wt = U_(Q)) : (!jr(Q) || ed(Q)) && (wt = M_(xe)))
					: (zi = !1)
		}
		zi && (be.set(xe, wt), G(wt, xe, z, de, be), be.delete(xe)), Gc(w, $, wt)
	}
	function w_(w, P) {
		return O_(D_(w, P, Ev), w + '')
	}
	var k_ = Os
		? function (w, P) {
				return Os(w, 'toString', { configurable: !0, enumerable: !1, value: K_(P), writable: !0 })
		  }
		: Ev
	function C_(w, P) {
		return w.slice()
	}
	function __(w) {
		var P = new w.constructor(w.byteLength)
		return new mv(P).set(new mv(w)), P
	}
	function P_(w, P) {
		var $ = __(w.buffer)
		return new w.constructor($, w.byteOffset, w.length)
	}
	function T_(w, P) {
		var $ = -1,
			z = w.length
		for (P || (P = Array(z)); ++$ < z; ) P[$] = w[$]
		return P
	}
	function E_(w, P, $, z) {
		var G = !$
		$ || ($ = {})
		for (var de = -1, be = P.length; ++de < be; ) {
			var Q = P[de],
				xe = void 0
			xe === void 0 && (xe = w[Q]), G ? qc($, Q, xe) : v_($, Q, xe)
		}
		return $
	}
	function $_(w) {
		return w_(function (P, $) {
			var z = -1,
				G = $.length,
				de = G > 1 ? $[G - 1] : void 0,
				be = G > 2 ? $[2] : void 0
			for (
				de = w.length > 3 && typeof de == 'function' ? (G--, de) : void 0,
					be && I_($[0], $[1], be) && ((de = G < 3 ? void 0 : de), (G = 1)),
					P = Object(P);
				++z < G;

			) {
				var Q = $[z]
				Q && w(P, Q, z, de)
			}
			return P
		})
	}
	function R_(w) {
		return function (P, $, z) {
			for (var G = -1, de = Object(P), be = z(P), Q = be.length; Q--; ) {
				var xe = be[++G]
				if ($(de[xe], xe, de) === !1) break
			}
			return P
		}
	}
	function Vs(w, P) {
		var $ = w.__data__
		return F_(P) ? $[typeof P == 'string' ? 'string' : 'hash'] : $.map
	}
	function Yc(w, P) {
		var $ = ye(w, P)
		return y_($) ? $ : void 0
	}
	function A_(w) {
		var P = Xn.call(w, Ir),
			$ = w[Ir]
		try {
			w[Ir] = void 0
			var z = !0
		} catch {}
		var G = hv.call(w)
		return z && (P ? (w[Ir] = $) : delete w[Ir]), G
	}
	function M_(w) {
		return typeof w.constructor == 'function' && !kv(w) ? qC(vv(w)) : {}
	}
	function wv(w, P) {
		var $ = typeof w
		return (P = P ?? a), !!P && ($ == 'number' || ($ != 'symbol' && ie.test(w))) && w > -1 && w % 1 == 0 && w < P
	}
	function I_(w, P, $) {
		if (!jr($)) return !1
		var z = typeof P
		return (z == 'number' ? Jc($) && wv(P, $.length) : z == 'string' && P in $) ? Ws($[P], w) : !1
	}
	function F_(w) {
		var P = typeof w
		return P == 'string' || P == 'number' || P == 'symbol' || P == 'boolean' ? w !== '__proto__' : w === null
	}
	function j_(w) {
		return !!fv && fv in w
	}
	function kv(w) {
		var P = w && w.constructor,
			$ = (typeof P == 'function' && P.prototype) || Mr
		return w === $
	}
	function z_(w) {
		var P = []
		if (w != null) for (var $ in Object(w)) P.push($)
		return P
	}
	function L_(w) {
		return hv.call(w)
	}
	function D_(w, P, $) {
		return (
			(P = yv(P === void 0 ? w.length - 1 : P, 0)),
			function () {
				for (var z = arguments, G = -1, de = yv(z.length - P, 0), be = Array(de); ++G < de; ) be[G] = z[P + G]
				G = -1
				for (var Q = Array(P + 1); ++G < P; ) Q[G] = z[G]
				return (Q[P] = $(be)), Ii(w, this, Q)
			}
		)
	}
	function Xc(w, P) {
		if (!(P === 'constructor' && typeof w[P] == 'function') && P != '__proto__') return w[P]
	}
	var O_ = B_(k_)
	function B_(w) {
		var P = 0,
			$ = 0
		return function () {
			var z = GC(),
				G = i - (z - $)
			if ((($ = z), G > 0)) {
				if (++P >= o) return arguments[0]
			} else P = 0
			return w.apply(void 0, arguments)
		}
	}
	function N_(w) {
		if (w != null) {
			try {
				return Ls.call(w)
			} catch {}
			try {
				return w + ''
			} catch {}
		}
		return ''
	}
	function Ws(w, P) {
		return w === P || (w !== w && P !== P)
	}
	var Qc = xv(
			(function () {
				return arguments
			})(),
		)
			? xv
			: function (w) {
					return ji(w) && Xn.call(w, 'callee') && !UC.call(w, 'callee')
			  },
		Zc = Array.isArray
	function Jc(w) {
		return w != null && _v(w.length) && !ed(w)
	}
	function V_(w) {
		return ji(w) && Jc(w)
	}
	var Cv = KC || G_
	function ed(w) {
		if (!jr(w)) return !1
		var P = Ns(w)
		return P == m || P == y || P == u || P == v
	}
	function _v(w) {
		return typeof w == 'number' && w > -1 && w % 1 == 0 && w <= a
	}
	function jr(w) {
		var P = typeof w
		return w != null && (P == 'object' || P == 'function')
	}
	function ji(w) {
		return w != null && typeof w == 'object'
	}
	function W_(w) {
		if (!ji(w) || Ns(w) != h) return !1
		var P = vv(w)
		if (P === null) return !0
		var $ = Xn.call(P, 'constructor') && P.constructor
		return typeof $ == 'function' && $ instanceof $ && Ls.call($) == VC
	}
	var Pv = Ar ? W(Ar) : b_
	function U_(w) {
		return E_(w, Tv(w))
	}
	function Tv(w) {
		return Jc(w) ? m_(w) : x_(w)
	}
	var H_ = $_(function (w, P, $, z) {
		Sv(w, P, $, z)
	})
	function K_(w) {
		return function () {
			return w
		}
	}
	function Ev(w) {
		return w
	}
	function G_() {
		return !1
	}
	e.exports = H_
})(Iu, Iu.exports)
var L5 = Iu.exports
const gn = rp(L5)
var D5 = e => /!(important)?$/.test(e),
	t0 = e => (typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e),
	O5 = (e, t) => n => {
		const r = String(t),
			o = D5(r),
			i = t0(r),
			a = e ? `${e}.${i}` : i
		let s = nn(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t
		return (s = t0(s)), o ? `${s} !important` : s
	}
function um(e) {
	const { scale: t, transform: n, compose: r } = e
	return (i, a) => {
		var s
		const l = O5(t, i)(a)
		let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l
		return r && (u = r(u, a)), u
	}
}
var dl =
	(...e) =>
	t =>
		e.reduce((n, r) => r(n), t)
function jt(e, t) {
	return n => {
		const r = { property: n, scale: e }
		return (r.transform = um({ scale: e, transform: t })), r
	}
}
var B5 =
	({ rtl: e, ltr: t }) =>
	n =>
		n.direction === 'rtl' ? e : t
function N5(e) {
	const { property: t, scale: n, transform: r } = e
	return { scale: n, property: B5(t), transform: n ? um({ scale: n, compose: r }) : r }
}
var ES = [
	'rotate(var(--chakra-rotate, 0))',
	'scaleX(var(--chakra-scale-x, 1))',
	'scaleY(var(--chakra-scale-y, 1))',
	'skewX(var(--chakra-skew-x, 0))',
	'skewY(var(--chakra-skew-y, 0))',
]
function V5() {
	return ['translateX(var(--chakra-translate-x, 0))', 'translateY(var(--chakra-translate-y, 0))', ...ES].join(' ')
}
function W5() {
	return ['translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)', ...ES].join(' ')
}
var U5 = {
		'--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
		filter: [
			'var(--chakra-blur)',
			'var(--chakra-brightness)',
			'var(--chakra-contrast)',
			'var(--chakra-grayscale)',
			'var(--chakra-hue-rotate)',
			'var(--chakra-invert)',
			'var(--chakra-saturate)',
			'var(--chakra-sepia)',
			'var(--chakra-drop-shadow)',
		].join(' '),
	},
	H5 = {
		backdropFilter: [
			'var(--chakra-backdrop-blur)',
			'var(--chakra-backdrop-brightness)',
			'var(--chakra-backdrop-contrast)',
			'var(--chakra-backdrop-grayscale)',
			'var(--chakra-backdrop-hue-rotate)',
			'var(--chakra-backdrop-invert)',
			'var(--chakra-backdrop-opacity)',
			'var(--chakra-backdrop-saturate)',
			'var(--chakra-backdrop-sepia)',
		].join(' '),
		'--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
	}
function K5(e) {
	return {
		'--chakra-ring-offset-shadow':
			'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
		'--chakra-ring-shadow':
			'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
		'--chakra-ring-width': e,
		boxShadow: ['var(--chakra-ring-offset-shadow)', 'var(--chakra-ring-shadow)', 'var(--chakra-shadow, 0 0 #0000)'].join(', '),
	}
}
var G5 = {
		'row-reverse': { space: '--chakra-space-x-reverse', divide: '--chakra-divide-x-reverse' },
		'column-reverse': { space: '--chakra-space-y-reverse', divide: '--chakra-divide-y-reverse' },
	},
	vh = {
		'to-t': 'to top',
		'to-tr': 'to top right',
		'to-r': 'to right',
		'to-br': 'to bottom right',
		'to-b': 'to bottom',
		'to-bl': 'to bottom left',
		'to-l': 'to left',
		'to-tl': 'to top left',
	},
	q5 = new Set(Object.values(vh)),
	gh = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset']),
	Y5 = e => e.trim()
function X5(e, t) {
	if (e == null || gh.has(e)) return e
	if (!(yh(e) || gh.has(e))) return `url('${e}')`
	const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
		i = o == null ? void 0 : o[1],
		a = o == null ? void 0 : o[2]
	if (!i || !a) return e
	const s = i.includes('-gradient') ? i : `${i}-gradient`,
		[l, ...u] = a.split(',').map(Y5).filter(Boolean)
	if ((u == null ? void 0 : u.length) === 0) return e
	const d = l in vh ? vh[l] : l
	u.unshift(d)
	const c = u.map(f => {
		if (q5.has(f)) return f
		const m = f.indexOf(' '),
			[y, g] = m !== -1 ? [f.substr(0, m), f.substr(m + 1)] : [f],
			x = yh(g) ? g : g && g.split(' '),
			p = `colors.${y}`,
			h = p in t.__cssMap ? t.__cssMap[p].varRef : y
		return x ? [h, ...(Array.isArray(x) ? x : [x])].join(' ') : h
	})
	return `${s}(${c.join(', ')})`
}
var yh = e => typeof e == 'string' && e.includes('(') && e.includes(')'),
	Q5 = (e, t) => X5(e, t ?? {})
function Z5(e) {
	return /^var\(--.+\)$/.test(e)
}
var J5 = e => {
		const t = parseFloat(e.toString()),
			n = e.toString().replace(String(t), '')
		return { unitless: !n, value: t, unit: n }
	},
	ln = e => t => `${e}(${t})`,
	K = {
		filter(e) {
			return e !== 'auto' ? e : U5
		},
		backdropFilter(e) {
			return e !== 'auto' ? e : H5
		},
		ring(e) {
			return K5(K.px(e))
		},
		bgClip(e) {
			return e === 'text' ? { color: 'transparent', backgroundClip: 'text' } : { backgroundClip: e }
		},
		transform(e) {
			return e === 'auto' ? V5() : e === 'auto-gpu' ? W5() : e
		},
		vh(e) {
			return e === '$100vh' ? 'var(--chakra-vh)' : e
		},
		px(e) {
			if (e == null) return e
			const { unitless: t } = J5(e)
			return t || typeof e == 'number' ? `${e}px` : e
		},
		fraction(e) {
			return typeof e != 'number' || e > 1 ? e : `${e * 100}%`
		},
		float(e, t) {
			const n = { left: 'right', right: 'left' }
			return t.direction === 'rtl' ? n[e] : e
		},
		degree(e) {
			if (Z5(e) || e == null) return e
			const t = typeof e == 'string' && !e.endsWith('deg')
			return typeof e == 'number' || t ? `${e}deg` : e
		},
		gradient: Q5,
		blur: ln('blur'),
		opacity: ln('opacity'),
		brightness: ln('brightness'),
		contrast: ln('contrast'),
		dropShadow: ln('drop-shadow'),
		grayscale: ln('grayscale'),
		hueRotate: e => ln('hue-rotate')(K.degree(e)),
		invert: ln('invert'),
		saturate: ln('saturate'),
		sepia: ln('sepia'),
		bgImage(e) {
			return e == null || yh(e) || gh.has(e) ? e : `url(${e})`
		},
		outline(e) {
			const t = String(e) === '0' || String(e) === 'none'
			return e !== null && t ? { outline: '2px solid transparent', outlineOffset: '2px' } : { outline: e }
		},
		flexDirection(e) {
			var t
			const { space: n, divide: r } = (t = G5[e]) != null ? t : {},
				o = { flexDirection: e }
			return n && (o[n] = 1), r && (o[r] = 1), o
		},
	},
	_ = {
		borderWidths: jt('borderWidths'),
		borderStyles: jt('borderStyles'),
		colors: jt('colors'),
		borders: jt('borders'),
		gradients: jt('gradients', K.gradient),
		radii: jt('radii', K.px),
		space: jt('space', dl(K.vh, K.px)),
		spaceT: jt('space', dl(K.vh, K.px)),
		degreeT(e) {
			return { property: e, transform: K.degree }
		},
		prop(e, t, n) {
			return { property: e, scale: t, ...(t && { transform: um({ scale: t, transform: n }) }) }
		},
		propT(e, t) {
			return { property: e, transform: t }
		},
		sizes: jt('sizes', dl(K.vh, K.px)),
		sizesT: jt('sizes', dl(K.vh, K.fraction)),
		shadows: jt('shadows'),
		logical: N5,
		blur: jt('blur', K.blur),
	},
	Nl = {
		background: _.colors('background'),
		backgroundColor: _.colors('backgroundColor'),
		backgroundImage: _.gradients('backgroundImage'),
		backgroundSize: !0,
		backgroundPosition: !0,
		backgroundRepeat: !0,
		backgroundAttachment: !0,
		backgroundClip: { transform: K.bgClip },
		bgSize: _.prop('backgroundSize'),
		bgPosition: _.prop('backgroundPosition'),
		bg: _.colors('background'),
		bgColor: _.colors('backgroundColor'),
		bgPos: _.prop('backgroundPosition'),
		bgRepeat: _.prop('backgroundRepeat'),
		bgAttachment: _.prop('backgroundAttachment'),
		bgGradient: _.gradients('backgroundImage'),
		bgClip: { transform: K.bgClip },
	}
Object.assign(Nl, { bgImage: Nl.backgroundImage, bgImg: Nl.backgroundImage })
var Z = {
	border: _.borders('border'),
	borderWidth: _.borderWidths('borderWidth'),
	borderStyle: _.borderStyles('borderStyle'),
	borderColor: _.colors('borderColor'),
	borderRadius: _.radii('borderRadius'),
	borderTop: _.borders('borderTop'),
	borderBlockStart: _.borders('borderBlockStart'),
	borderTopLeftRadius: _.radii('borderTopLeftRadius'),
	borderStartStartRadius: _.logical({ scale: 'radii', property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' } }),
	borderEndStartRadius: _.logical({
		scale: 'radii',
		property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
	}),
	borderTopRightRadius: _.radii('borderTopRightRadius'),
	borderStartEndRadius: _.logical({ scale: 'radii', property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' } }),
	borderEndEndRadius: _.logical({ scale: 'radii', property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' } }),
	borderRight: _.borders('borderRight'),
	borderInlineEnd: _.borders('borderInlineEnd'),
	borderBottom: _.borders('borderBottom'),
	borderBlockEnd: _.borders('borderBlockEnd'),
	borderBottomLeftRadius: _.radii('borderBottomLeftRadius'),
	borderBottomRightRadius: _.radii('borderBottomRightRadius'),
	borderLeft: _.borders('borderLeft'),
	borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
	borderInlineStartRadius: _.logical({
		scale: 'radii',
		property: {
			ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
			rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
		},
	}),
	borderInlineEndRadius: _.logical({
		scale: 'radii',
		property: {
			ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
			rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
		},
	}),
	borderX: _.borders(['borderLeft', 'borderRight']),
	borderInline: _.borders('borderInline'),
	borderY: _.borders(['borderTop', 'borderBottom']),
	borderBlock: _.borders('borderBlock'),
	borderTopWidth: _.borderWidths('borderTopWidth'),
	borderBlockStartWidth: _.borderWidths('borderBlockStartWidth'),
	borderTopColor: _.colors('borderTopColor'),
	borderBlockStartColor: _.colors('borderBlockStartColor'),
	borderTopStyle: _.borderStyles('borderTopStyle'),
	borderBlockStartStyle: _.borderStyles('borderBlockStartStyle'),
	borderBottomWidth: _.borderWidths('borderBottomWidth'),
	borderBlockEndWidth: _.borderWidths('borderBlockEndWidth'),
	borderBottomColor: _.colors('borderBottomColor'),
	borderBlockEndColor: _.colors('borderBlockEndColor'),
	borderBottomStyle: _.borderStyles('borderBottomStyle'),
	borderBlockEndStyle: _.borderStyles('borderBlockEndStyle'),
	borderLeftWidth: _.borderWidths('borderLeftWidth'),
	borderInlineStartWidth: _.borderWidths('borderInlineStartWidth'),
	borderLeftColor: _.colors('borderLeftColor'),
	borderInlineStartColor: _.colors('borderInlineStartColor'),
	borderLeftStyle: _.borderStyles('borderLeftStyle'),
	borderInlineStartStyle: _.borderStyles('borderInlineStartStyle'),
	borderRightWidth: _.borderWidths('borderRightWidth'),
	borderInlineEndWidth: _.borderWidths('borderInlineEndWidth'),
	borderRightColor: _.colors('borderRightColor'),
	borderInlineEndColor: _.colors('borderInlineEndColor'),
	borderRightStyle: _.borderStyles('borderRightStyle'),
	borderInlineEndStyle: _.borderStyles('borderInlineEndStyle'),
	borderTopRadius: _.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
	borderBottomRadius: _.radii(['borderBottomLeftRadius', 'borderBottomRightRadius']),
	borderLeftRadius: _.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
	borderRightRadius: _.radii(['borderTopRightRadius', 'borderBottomRightRadius']),
}
Object.assign(Z, {
	rounded: Z.borderRadius,
	roundedTop: Z.borderTopRadius,
	roundedTopLeft: Z.borderTopLeftRadius,
	roundedTopRight: Z.borderTopRightRadius,
	roundedTopStart: Z.borderStartStartRadius,
	roundedTopEnd: Z.borderStartEndRadius,
	roundedBottom: Z.borderBottomRadius,
	roundedBottomLeft: Z.borderBottomLeftRadius,
	roundedBottomRight: Z.borderBottomRightRadius,
	roundedBottomStart: Z.borderEndStartRadius,
	roundedBottomEnd: Z.borderEndEndRadius,
	roundedLeft: Z.borderLeftRadius,
	roundedRight: Z.borderRightRadius,
	roundedStart: Z.borderInlineStartRadius,
	roundedEnd: Z.borderInlineEndRadius,
	borderStart: Z.borderInlineStart,
	borderEnd: Z.borderInlineEnd,
	borderTopStartRadius: Z.borderStartStartRadius,
	borderTopEndRadius: Z.borderStartEndRadius,
	borderBottomStartRadius: Z.borderEndStartRadius,
	borderBottomEndRadius: Z.borderEndEndRadius,
	borderStartRadius: Z.borderInlineStartRadius,
	borderEndRadius: Z.borderInlineEndRadius,
	borderStartWidth: Z.borderInlineStartWidth,
	borderEndWidth: Z.borderInlineEndWidth,
	borderStartColor: Z.borderInlineStartColor,
	borderEndColor: Z.borderInlineEndColor,
	borderStartStyle: Z.borderInlineStartStyle,
	borderEndStyle: Z.borderInlineEndStyle,
})
var e$ = { color: _.colors('color'), textColor: _.colors('color'), fill: _.colors('fill'), stroke: _.colors('stroke') },
	bh = {
		boxShadow: _.shadows('boxShadow'),
		mixBlendMode: !0,
		blendMode: _.prop('mixBlendMode'),
		backgroundBlendMode: !0,
		bgBlendMode: _.prop('backgroundBlendMode'),
		opacity: !0,
	}
Object.assign(bh, { shadow: bh.boxShadow })
var t$ = {
		filter: { transform: K.filter },
		blur: _.blur('--chakra-blur'),
		brightness: _.propT('--chakra-brightness', K.brightness),
		contrast: _.propT('--chakra-contrast', K.contrast),
		hueRotate: _.propT('--chakra-hue-rotate', K.hueRotate),
		invert: _.propT('--chakra-invert', K.invert),
		saturate: _.propT('--chakra-saturate', K.saturate),
		dropShadow: _.propT('--chakra-drop-shadow', K.dropShadow),
		backdropFilter: { transform: K.backdropFilter },
		backdropBlur: _.blur('--chakra-backdrop-blur'),
		backdropBrightness: _.propT('--chakra-backdrop-brightness', K.brightness),
		backdropContrast: _.propT('--chakra-backdrop-contrast', K.contrast),
		backdropHueRotate: _.propT('--chakra-backdrop-hue-rotate', K.hueRotate),
		backdropInvert: _.propT('--chakra-backdrop-invert', K.invert),
		backdropSaturate: _.propT('--chakra-backdrop-saturate', K.saturate),
	},
	Fu = {
		alignItems: !0,
		alignContent: !0,
		justifyItems: !0,
		justifyContent: !0,
		flexWrap: !0,
		flexDirection: { transform: K.flexDirection },
		flex: !0,
		flexFlow: !0,
		flexGrow: !0,
		flexShrink: !0,
		flexBasis: _.sizes('flexBasis'),
		justifySelf: !0,
		alignSelf: !0,
		order: !0,
		placeItems: !0,
		placeContent: !0,
		placeSelf: !0,
		gap: _.space('gap'),
		rowGap: _.space('rowGap'),
		columnGap: _.space('columnGap'),
	}
Object.assign(Fu, { flexDir: Fu.flexDirection })
var $S = {
		gridGap: _.space('gridGap'),
		gridColumnGap: _.space('gridColumnGap'),
		gridRowGap: _.space('gridRowGap'),
		gridColumn: !0,
		gridRow: !0,
		gridAutoFlow: !0,
		gridAutoColumns: !0,
		gridColumnStart: !0,
		gridColumnEnd: !0,
		gridRowStart: !0,
		gridRowEnd: !0,
		gridAutoRows: !0,
		gridTemplate: !0,
		gridTemplateColumns: !0,
		gridTemplateRows: !0,
		gridTemplateAreas: !0,
		gridArea: !0,
	},
	n$ = {
		appearance: !0,
		cursor: !0,
		resize: !0,
		userSelect: !0,
		pointerEvents: !0,
		outline: { transform: K.outline },
		outlineOffset: !0,
		outlineColor: _.colors('outlineColor'),
	},
	Lt = {
		width: _.sizesT('width'),
		inlineSize: _.sizesT('inlineSize'),
		height: _.sizes('height'),
		blockSize: _.sizes('blockSize'),
		boxSize: _.sizes(['width', 'height']),
		minWidth: _.sizes('minWidth'),
		minInlineSize: _.sizes('minInlineSize'),
		minHeight: _.sizes('minHeight'),
		minBlockSize: _.sizes('minBlockSize'),
		maxWidth: _.sizes('maxWidth'),
		maxInlineSize: _.sizes('maxInlineSize'),
		maxHeight: _.sizes('maxHeight'),
		maxBlockSize: _.sizes('maxBlockSize'),
		overflow: !0,
		overflowX: !0,
		overflowY: !0,
		overscrollBehavior: !0,
		overscrollBehaviorX: !0,
		overscrollBehaviorY: !0,
		display: !0,
		aspectRatio: !0,
		hideFrom: {
			scale: 'breakpoints',
			transform: (e, t) => {
				var n, r, o
				return {
					[`@media screen and (min-width: ${
						(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r.minW) != null ? o : e
					})`]: { display: 'none' },
				}
			},
		},
		hideBelow: {
			scale: 'breakpoints',
			transform: (e, t) => {
				var n, r, o
				return {
					[`@media screen and (max-width: ${
						(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r._minW) != null ? o : e
					})`]: { display: 'none' },
				}
			},
		},
		verticalAlign: !0,
		boxSizing: !0,
		boxDecorationBreak: !0,
		float: _.propT('float', K.float),
		objectFit: !0,
		objectPosition: !0,
		visibility: !0,
		isolation: !0,
	}
Object.assign(Lt, {
	w: Lt.width,
	h: Lt.height,
	minW: Lt.minWidth,
	maxW: Lt.maxWidth,
	minH: Lt.minHeight,
	maxH: Lt.maxHeight,
	overscroll: Lt.overscrollBehavior,
	overscrollX: Lt.overscrollBehaviorX,
	overscrollY: Lt.overscrollBehaviorY,
})
var r$ = {
	listStyleType: !0,
	listStylePosition: !0,
	listStylePos: _.prop('listStylePosition'),
	listStyleImage: !0,
	listStyleImg: _.prop('listStyleImage'),
}
function o$(e, t, n, r) {
	const o = typeof t == 'string' ? t.split('.') : [t]
	for (r = 0; r < o.length && e; r += 1) e = e[o[r]]
	return e === void 0 ? n : e
}
var i$ = e => {
		const t = new WeakMap()
		return (r, o, i, a) => {
			if (typeof r > 'u') return e(r, o, i)
			t.has(r) || t.set(r, new Map())
			const s = t.get(r)
			if (s.has(o)) return s.get(o)
			const l = e(r, o, i, a)
			return s.set(o, l), l
		}
	},
	a$ = i$(o$),
	s$ = {
		border: '0px',
		clip: 'rect(0, 0, 0, 0)',
		width: '1px',
		height: '1px',
		margin: '-1px',
		padding: '0px',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		position: 'absolute',
	},
	l$ = {
		position: 'static',
		width: 'auto',
		height: 'auto',
		clip: 'auto',
		padding: '0',
		margin: '0',
		overflow: 'visible',
		whiteSpace: 'normal',
	},
	Md = (e, t, n) => {
		const r = {},
			o = a$(e, t, {})
		for (const i in o) (i in n && n[i] != null) || (r[i] = o[i])
		return r
	},
	u$ = {
		srOnly: {
			transform(e) {
				return e === !0 ? s$ : e === 'focusable' ? l$ : {}
			},
		},
		layerStyle: { processResult: !0, transform: (e, t, n) => Md(t, `layerStyles.${e}`, n) },
		textStyle: { processResult: !0, transform: (e, t, n) => Md(t, `textStyles.${e}`, n) },
		apply: { processResult: !0, transform: (e, t, n) => Md(t, e, n) },
	},
	xa = {
		position: !0,
		pos: _.prop('position'),
		zIndex: _.prop('zIndex', 'zIndices'),
		inset: _.spaceT('inset'),
		insetX: _.spaceT(['left', 'right']),
		insetInline: _.spaceT('insetInline'),
		insetY: _.spaceT(['top', 'bottom']),
		insetBlock: _.spaceT('insetBlock'),
		top: _.spaceT('top'),
		insetBlockStart: _.spaceT('insetBlockStart'),
		bottom: _.spaceT('bottom'),
		insetBlockEnd: _.spaceT('insetBlockEnd'),
		left: _.spaceT('left'),
		insetInlineStart: _.logical({ scale: 'space', property: { ltr: 'left', rtl: 'right' } }),
		right: _.spaceT('right'),
		insetInlineEnd: _.logical({ scale: 'space', property: { ltr: 'right', rtl: 'left' } }),
	}
Object.assign(xa, { insetStart: xa.insetInlineStart, insetEnd: xa.insetInlineEnd })
var c$ = {
		ring: { transform: K.ring },
		ringColor: _.colors('--chakra-ring-color'),
		ringOffset: _.prop('--chakra-ring-offset-width'),
		ringOffsetColor: _.colors('--chakra-ring-offset-color'),
		ringInset: _.prop('--chakra-ring-inset'),
	},
	ve = {
		margin: _.spaceT('margin'),
		marginTop: _.spaceT('marginTop'),
		marginBlockStart: _.spaceT('marginBlockStart'),
		marginRight: _.spaceT('marginRight'),
		marginInlineEnd: _.spaceT('marginInlineEnd'),
		marginBottom: _.spaceT('marginBottom'),
		marginBlockEnd: _.spaceT('marginBlockEnd'),
		marginLeft: _.spaceT('marginLeft'),
		marginInlineStart: _.spaceT('marginInlineStart'),
		marginX: _.spaceT(['marginInlineStart', 'marginInlineEnd']),
		marginInline: _.spaceT('marginInline'),
		marginY: _.spaceT(['marginTop', 'marginBottom']),
		marginBlock: _.spaceT('marginBlock'),
		padding: _.space('padding'),
		paddingTop: _.space('paddingTop'),
		paddingBlockStart: _.space('paddingBlockStart'),
		paddingRight: _.space('paddingRight'),
		paddingBottom: _.space('paddingBottom'),
		paddingBlockEnd: _.space('paddingBlockEnd'),
		paddingLeft: _.space('paddingLeft'),
		paddingInlineStart: _.space('paddingInlineStart'),
		paddingInlineEnd: _.space('paddingInlineEnd'),
		paddingX: _.space(['paddingInlineStart', 'paddingInlineEnd']),
		paddingInline: _.space('paddingInline'),
		paddingY: _.space(['paddingTop', 'paddingBottom']),
		paddingBlock: _.space('paddingBlock'),
	}
Object.assign(ve, {
	m: ve.margin,
	mt: ve.marginTop,
	mr: ve.marginRight,
	me: ve.marginInlineEnd,
	marginEnd: ve.marginInlineEnd,
	mb: ve.marginBottom,
	ml: ve.marginLeft,
	ms: ve.marginInlineStart,
	marginStart: ve.marginInlineStart,
	mx: ve.marginX,
	my: ve.marginY,
	p: ve.padding,
	pt: ve.paddingTop,
	py: ve.paddingY,
	px: ve.paddingX,
	pb: ve.paddingBottom,
	pl: ve.paddingLeft,
	ps: ve.paddingInlineStart,
	paddingStart: ve.paddingInlineStart,
	pr: ve.paddingRight,
	pe: ve.paddingInlineEnd,
	paddingEnd: ve.paddingInlineEnd,
})
var d$ = {
		textDecorationColor: _.colors('textDecorationColor'),
		textDecoration: !0,
		textDecor: { property: 'textDecoration' },
		textDecorationLine: !0,
		textDecorationStyle: !0,
		textDecorationThickness: !0,
		textUnderlineOffset: !0,
		textShadow: _.shadows('textShadow'),
	},
	f$ = {
		clipPath: !0,
		transform: _.propT('transform', K.transform),
		transformOrigin: !0,
		translateX: _.spaceT('--chakra-translate-x'),
		translateY: _.spaceT('--chakra-translate-y'),
		skewX: _.degreeT('--chakra-skew-x'),
		skewY: _.degreeT('--chakra-skew-y'),
		scaleX: _.prop('--chakra-scale-x'),
		scaleY: _.prop('--chakra-scale-y'),
		scale: _.prop(['--chakra-scale-x', '--chakra-scale-y']),
		rotate: _.degreeT('--chakra-rotate'),
	},
	h$ = {
		transition: !0,
		transitionDelay: !0,
		animation: !0,
		willChange: !0,
		transitionDuration: _.prop('transitionDuration', 'transition.duration'),
		transitionProperty: _.prop('transitionProperty', 'transition.property'),
		transitionTimingFunction: _.prop('transitionTimingFunction', 'transition.easing'),
	},
	p$ = {
		fontFamily: _.prop('fontFamily', 'fonts'),
		fontSize: _.prop('fontSize', 'fontSizes', K.px),
		fontWeight: _.prop('fontWeight', 'fontWeights'),
		lineHeight: _.prop('lineHeight', 'lineHeights'),
		letterSpacing: _.prop('letterSpacing', 'letterSpacings'),
		textAlign: !0,
		fontStyle: !0,
		textIndent: !0,
		wordBreak: !0,
		overflowWrap: !0,
		textOverflow: !0,
		textTransform: !0,
		whiteSpace: !0,
		isTruncated: {
			transform(e) {
				if (e === !0) return { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
			},
		},
		noOfLines: {
			static: {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				display: '-webkit-box',
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: 'var(--chakra-line-clamp)',
			},
			property: '--chakra-line-clamp',
		},
	},
	m$ = {
		scrollBehavior: !0,
		scrollSnapAlign: !0,
		scrollSnapStop: !0,
		scrollSnapType: !0,
		scrollMargin: _.spaceT('scrollMargin'),
		scrollMarginTop: _.spaceT('scrollMarginTop'),
		scrollMarginBottom: _.spaceT('scrollMarginBottom'),
		scrollMarginLeft: _.spaceT('scrollMarginLeft'),
		scrollMarginRight: _.spaceT('scrollMarginRight'),
		scrollMarginX: _.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
		scrollMarginY: _.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
		scrollPadding: _.spaceT('scrollPadding'),
		scrollPaddingTop: _.spaceT('scrollPaddingTop'),
		scrollPaddingBottom: _.spaceT('scrollPaddingBottom'),
		scrollPaddingLeft: _.spaceT('scrollPaddingLeft'),
		scrollPaddingRight: _.spaceT('scrollPaddingRight'),
		scrollPaddingX: _.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
		scrollPaddingY: _.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
	}
function RS(e) {
	return nn(e) && e.reference ? e.reference : String(e)
}
var Ec = (e, ...t) => t.map(RS).join(` ${e} `).replace(/calc/g, ''),
	n0 = (...e) => `calc(${Ec('+', ...e)})`,
	r0 = (...e) => `calc(${Ec('-', ...e)})`,
	xh = (...e) => `calc(${Ec('*', ...e)})`,
	o0 = (...e) => `calc(${Ec('/', ...e)})`,
	i0 = e => {
		const t = RS(e)
		return t != null && !Number.isNaN(parseFloat(t)) ? (String(t).startsWith('-') ? String(t).slice(1) : `-${t}`) : xh(t, -1)
	},
	Nr = Object.assign(
		e => ({
			add: (...t) => Nr(n0(e, ...t)),
			subtract: (...t) => Nr(r0(e, ...t)),
			multiply: (...t) => Nr(xh(e, ...t)),
			divide: (...t) => Nr(o0(e, ...t)),
			negate: () => Nr(i0(e)),
			toString: () => e.toString(),
		}),
		{ add: n0, subtract: r0, multiply: xh, divide: o0, negate: i0 },
	)
function v$(e, t = '-') {
	return e.replace(/\s+/g, t)
}
function g$(e) {
	const t = v$(e.toString())
	return b$(y$(t))
}
function y$(e) {
	return e.includes('\\.') ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace('.', '\\.') : e
}
function b$(e) {
	return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&')
}
function x$(e, t = '') {
	return [t, e].filter(Boolean).join('-')
}
function S$(e, t) {
	return `var(${e}${t ? `, ${t}` : ''})`
}
function w$(e, t = '') {
	return g$(`--${x$(e, t)}`)
}
function D(e, t, n) {
	const r = w$(e, n)
	return { variable: r, reference: S$(r, t) }
}
function k$(e, t) {
	const n = {}
	for (const r of t) {
		if (Array.isArray(r)) {
			const [o, i] = r
			n[o] = D(`${e}-${o}`, i)
			continue
		}
		n[r] = D(`${e}-${r}`)
	}
	return n
}
function C$(e) {
	const t = e == null ? 0 : e.length
	return t ? e[t - 1] : void 0
}
function _$(e) {
	const t = parseFloat(e.toString()),
		n = e.toString().replace(String(t), '')
	return { unitless: !n, value: t, unit: n }
}
function Sh(e) {
	if (e == null) return e
	const { unitless: t } = _$(e)
	return t || typeof e == 'number' ? `${e}px` : e
}
var AS = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
	cm = e => Object.fromEntries(Object.entries(e).sort(AS))
function a0(e) {
	const t = cm(e)
	return Object.assign(Object.values(t), t)
}
function P$(e) {
	const t = Object.keys(cm(e))
	return new Set(t)
}
function s0(e) {
	var t
	if (!e) return e
	e = (t = Sh(e)) != null ? t : e
	const n = -0.02
	return typeof e == 'number' ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, r => `${parseFloat(r) + n}`)
}
function oa(e, t) {
	const n = ['@media screen']
	return e && n.push('and', `(min-width: ${Sh(e)})`), t && n.push('and', `(max-width: ${Sh(t)})`), n.join(' ')
}
function T$(e) {
	var t
	if (!e) return null
	e.base = (t = e.base) != null ? t : '0px'
	const n = a0(e),
		r = Object.entries(e)
			.sort(AS)
			.map(([a, s], l, u) => {
				var d
				let [, c] = (d = u[l + 1]) != null ? d : []
				return (
					(c = parseFloat(c) > 0 ? s0(c) : void 0),
					{ _minW: s0(s), breakpoint: a, minW: s, maxW: c, maxWQuery: oa(null, c), minWQuery: oa(s), minMaxQuery: oa(s, c) }
				)
			}),
		o = P$(e),
		i = Array.from(o.values())
	return {
		keys: o,
		normalized: n,
		isResponsive(a) {
			const s = Object.keys(a)
			return s.length > 0 && s.every(l => o.has(l))
		},
		asObject: cm(e),
		asArray: a0(e),
		details: r,
		get(a) {
			return r.find(s => s.breakpoint === a)
		},
		media: [null, ...n.map(a => oa(a)).slice(1)],
		toArrayValue(a) {
			if (!nn(a)) throw new Error('toArrayValue: value must be an object')
			const s = i.map(l => {
				var u
				return (u = a[l]) != null ? u : null
			})
			for (; C$(s) === null; ) s.pop()
			return s
		},
		toObjectValue(a) {
			if (!Array.isArray(a)) throw new Error('toObjectValue: value must be an array')
			return a.reduce((s, l, u) => {
				const d = i[u]
				return d != null && l != null && (s[d] = l), s
			}, {})
		},
	}
}
var Ke = {
		hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
		focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
		focusVisible: (e, t) => `${e}:focus-visible ${t}`,
		focusWithin: (e, t) => `${e}:focus-within ${t}`,
		active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
		disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
		invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
		checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
		indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
		readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
		expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
		placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
	},
	Zn = e => MS(t => e(t, '&'), '[role=group]', '[data-group]', '.group'),
	Pn = e => MS(t => e(t, '~ &'), '[data-peer]', '.peer'),
	MS = (e, ...t) => t.map(e).join(', '),
	$c = {
		_hover: '&:hover, &[data-hover]',
		_active: '&:active, &[data-active]',
		_focus: '&:focus, &[data-focus]',
		_highlighted: '&[data-highlighted]',
		_focusWithin: '&:focus-within',
		_focusVisible: '&:focus-visible, &[data-focus-visible]',
		_disabled: '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
		_readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
		_before: '&::before',
		_after: '&::after',
		_empty: '&:empty',
		_expanded: '&[aria-expanded=true], &[data-expanded]',
		_checked: '&[aria-checked=true], &[data-checked]',
		_grabbed: '&[aria-grabbed=true], &[data-grabbed]',
		_pressed: '&[aria-pressed=true], &[data-pressed]',
		_invalid: '&[aria-invalid=true], &[data-invalid]',
		_valid: '&[data-valid], &[data-state=valid]',
		_loading: '&[data-loading], &[aria-busy=true]',
		_selected: '&[aria-selected=true], &[data-selected]',
		_hidden: '&[hidden], &[data-hidden]',
		_autofill: '&:-webkit-autofill',
		_even: '&:nth-of-type(even)',
		_odd: '&:nth-of-type(odd)',
		_first: '&:first-of-type',
		_firstLetter: '&::first-letter',
		_last: '&:last-of-type',
		_notFirst: '&:not(:first-of-type)',
		_notLast: '&:not(:last-of-type)',
		_visited: '&:visited',
		_activeLink: '&[aria-current=page]',
		_activeStep: '&[aria-current=step]',
		_indeterminate: '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
		_groupHover: Zn(Ke.hover),
		_peerHover: Pn(Ke.hover),
		_groupFocus: Zn(Ke.focus),
		_peerFocus: Pn(Ke.focus),
		_groupFocusVisible: Zn(Ke.focusVisible),
		_peerFocusVisible: Pn(Ke.focusVisible),
		_groupActive: Zn(Ke.active),
		_peerActive: Pn(Ke.active),
		_groupDisabled: Zn(Ke.disabled),
		_peerDisabled: Pn(Ke.disabled),
		_groupInvalid: Zn(Ke.invalid),
		_peerInvalid: Pn(Ke.invalid),
		_groupChecked: Zn(Ke.checked),
		_peerChecked: Pn(Ke.checked),
		_groupFocusWithin: Zn(Ke.focusWithin),
		_peerFocusWithin: Pn(Ke.focusWithin),
		_peerPlaceholderShown: Pn(Ke.placeholderShown),
		_placeholder: '&::placeholder',
		_placeholderShown: '&:placeholder-shown',
		_fullScreen: '&:fullscreen',
		_selection: '&::selection',
		_rtl: '[dir=rtl] &, &[dir=rtl]',
		_ltr: '[dir=ltr] &, &[dir=ltr]',
		_mediaDark: '@media (prefers-color-scheme: dark)',
		_mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
		_dark: '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
		_light: '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]',
		_horizontal: '&[data-orientation=horizontal]',
		_vertical: '&[data-orientation=vertical]',
	},
	IS = Object.keys($c)
function l0(e, t) {
	return D(String(e).replace(/\./g, '-'), void 0, t)
}
function E$(e, t) {
	let n = {}
	const r = {}
	for (const [o, i] of Object.entries(e)) {
		const { isSemantic: a, value: s } = i,
			{ variable: l, reference: u } = l0(o, t == null ? void 0 : t.cssVarPrefix)
		if (!a) {
			if (o.startsWith('space')) {
				const f = o.split('.'),
					[m, ...y] = f,
					g = `${m}.-${y.join('.')}`,
					x = Nr.negate(s),
					p = Nr.negate(u)
				r[g] = { value: x, var: l, varRef: p }
			}
			;(n[l] = s), (r[o] = { value: s, var: l, varRef: u })
			continue
		}
		const d = f => {
				const y = [String(o).split('.')[0], f].join('.')
				if (!e[y]) return f
				const { reference: x } = l0(y, t == null ? void 0 : t.cssVarPrefix)
				return x
			},
			c = nn(s) ? s : { default: s }
		;(n = gn(
			n,
			Object.entries(c).reduce((f, [m, y]) => {
				var g, x
				if (!y) return f
				const p = d(`${y}`)
				if (m === 'default') return (f[l] = p), f
				const h = (x = (g = $c) == null ? void 0 : g[m]) != null ? x : m
				return (f[h] = { [l]: p }), f
			}, {}),
		)),
			(r[o] = { value: u, var: l, varRef: u })
	}
	return { cssVars: n, cssMap: r }
}
function $$(e, t = []) {
	const n = Object.assign({}, e)
	for (const r of t) r in n && delete n[r]
	return n
}
function R$(e, t) {
	const n = {}
	for (const r of t) r in e && (n[r] = e[r])
	return n
}
function A$(e) {
	return typeof e == 'object' && e != null && !Array.isArray(e)
}
function u0(e, t, n = {}) {
	const { stop: r, getKey: o } = n
	function i(a, s = []) {
		var l
		if (A$(a) || Array.isArray(a)) {
			const u = {}
			for (const [d, c] of Object.entries(a)) {
				const f = (l = o == null ? void 0 : o(d)) != null ? l : d,
					m = [...s, f]
				if (r != null && r(a, m)) return t(a, s)
				u[f] = i(c, m)
			}
			return u
		}
		return t(a, s)
	}
	return i(e)
}
var M$ = [
	'colors',
	'borders',
	'borderWidths',
	'borderStyles',
	'fonts',
	'fontSizes',
	'fontWeights',
	'gradients',
	'letterSpacings',
	'lineHeights',
	'radii',
	'space',
	'shadows',
	'sizes',
	'zIndices',
	'transition',
	'blur',
	'breakpoints',
]
function I$(e) {
	return R$(e, M$)
}
function F$(e) {
	return e.semanticTokens
}
function j$(e) {
	const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e
	return o
}
var z$ = e => IS.includes(e) || e === 'default'
function L$({ tokens: e, semanticTokens: t }) {
	const n = {}
	return (
		u0(e, (r, o) => {
			r != null && (n[o.join('.')] = { isSemantic: !1, value: r })
		}),
		u0(
			t,
			(r, o) => {
				r != null && (n[o.join('.')] = { isSemantic: !0, value: r })
			},
			{ stop: r => Object.keys(r).every(z$) },
		),
		n
	)
}
function D$(e) {
	var t
	const n = j$(e),
		r = I$(n),
		o = F$(n),
		i = L$({ tokens: r, semanticTokens: o }),
		a = (t = n.config) == null ? void 0 : t.cssVarPrefix,
		{ cssMap: s, cssVars: l } = E$(i, { cssVarPrefix: a })
	return (
		Object.assign(n, {
			__cssVars: {
				...{
					'--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
					'--chakra-ring-offset-width': '0px',
					'--chakra-ring-offset-color': '#fff',
					'--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
					'--chakra-ring-offset-shadow': '0 0 #0000',
					'--chakra-ring-shadow': '0 0 #0000',
					'--chakra-space-x-reverse': '0',
					'--chakra-space-y-reverse': '0',
				},
				...l,
			},
			__cssMap: s,
			__breakpoints: T$(n.breakpoints),
		}),
		n
	)
}
var dm = gn({}, Nl, Z, e$, Fu, Lt, t$, c$, n$, $S, u$, xa, bh, ve, m$, p$, d$, f$, r$, h$)
Object.assign({}, ve, Lt, Fu, $S, xa)
var O$ = [...Object.keys(dm), ...IS],
	B$ = { ...dm, ...$c },
	N$ = e => e in B$,
	V$ = e => t => {
		if (!t.__breakpoints) return e
		const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
			i = {}
		for (const a in e) {
			let s = vn(e[a], t)
			if (s == null) continue
			if (((s = nn(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
				i[a] = s
				continue
			}
			const l = s.slice(0, o.length).length
			for (let u = 0; u < l; u += 1) {
				const d = o == null ? void 0 : o[u]
				if (!d) {
					i[a] = s[u]
					continue
				}
				;(i[d] = i[d] || {}), s[u] != null && (i[d][a] = s[u])
			}
		}
		return i
	}
function W$(e) {
	const t = []
	let n = '',
		r = !1
	for (let o = 0; o < e.length; o++) {
		const i = e[o]
		i === '(' ? ((r = !0), (n += i)) : i === ')' ? ((r = !1), (n += i)) : i === ',' && !r ? (t.push(n), (n = '')) : (n += i)
	}
	return (n = n.trim()), n && t.push(n), t
}
function U$(e) {
	return /^var\(--.+\)$/.test(e)
}
var H$ = (e, t) => e.startsWith('--') && typeof t == 'string' && !U$(t),
	K$ = (e, t) => {
		var n, r
		if (t == null) return t
		const o = l => {
				var u, d
				return (d = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : d.varRef
			},
			i = l => {
				var u
				return (u = o(l)) != null ? u : l
			},
			[a, s] = W$(t)
		return (t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t)), t
	}
function G$(e) {
	const { configs: t = {}, pseudos: n = {}, theme: r } = e,
		o = (i, a = !1) => {
			var s, l, u
			const d = vn(i, r),
				c = V$(d)(r)
			let f = {}
			for (let m in c) {
				const y = c[m]
				let g = vn(y, r)
				m in n && (m = n[m]), H$(m, g) && (g = K$(r, g))
				let x = t[m]
				if ((x === !0 && (x = { property: m }), nn(g))) {
					;(f[m] = (s = f[m]) != null ? s : {}), (f[m] = gn({}, f[m], o(g, !0)))
					continue
				}
				let p = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, g, r, d)) != null ? u : g
				p = x != null && x.processResult ? o(p, !0) : p
				const h = vn(x == null ? void 0 : x.property, r)
				if (!a && x != null && x.static) {
					const v = vn(x.static, r)
					f = gn({}, f, v)
				}
				if (h && Array.isArray(h)) {
					for (const v of h) f[v] = p
					continue
				}
				if (h) {
					h === '&' && nn(p) ? (f = gn({}, f, p)) : (f[h] = p)
					continue
				}
				if (nn(p)) {
					f = gn({}, f, p)
					continue
				}
				f[m] = p
			}
			return f
		}
	return o
}
var FS = e => t => G$({ theme: t, pseudos: $c, configs: dm })(e)
function he(e) {
	return {
		definePartsStyle(t) {
			return t
		},
		defineMultiStyleConfig(t) {
			return { parts: e, ...t }
		},
	}
}
function q$(e, t) {
	if (Array.isArray(e)) return e
	if (nn(e)) return t(e)
	if (e != null) return [e]
}
function Y$(e, t) {
	for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n
	return -1
}
function X$(e) {
	const t = e.__breakpoints
	return function (r, o, i, a) {
		var s, l
		if (!t) return
		const u = {},
			d = q$(i, t.toArrayValue)
		if (!d) return u
		const c = d.length,
			f = c === 1,
			m = !!r.parts
		for (let y = 0; y < c; y++) {
			const g = t.details[y],
				x = t.details[Y$(d, y)],
				p = oa(g.minW, x == null ? void 0 : x._minW),
				h = vn((s = r[o]) == null ? void 0 : s[d[y]], a)
			if (h) {
				if (m) {
					;(l = r.parts) == null ||
						l.forEach(v => {
							gn(u, { [v]: f ? h[v] : { [p]: h[v] } })
						})
					continue
				}
				if (!m) {
					f ? gn(u, h) : (u[p] = h)
					continue
				}
				u[p] = h
			}
		}
		return u
	}
}
function Q$(e) {
	return t => {
		var n
		const { variant: r, size: o, theme: i } = t,
			a = X$(i)
		return gn({}, vn((n = e.baseStyle) != null ? n : {}, t), a(e, 'sizes', o, t), a(e, 'variants', r, t))
	}
}
function Kt(e) {
	return $$(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
}
var Z$ = {
		common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
		colors: 'background-color, border-color, color, fill, stroke',
		dimensions: 'width, height',
		position: 'left, right, top, bottom',
		background: 'background-color, background-image, background-position',
	},
	J$ = {
		'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
		'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
		'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
	},
	eR = {
		'ultra-fast': '50ms',
		faster: '100ms',
		fast: '150ms',
		normal: '200ms',
		slow: '300ms',
		slower: '400ms',
		'ultra-slow': '500ms',
	},
	tR = { property: Z$, easing: J$, duration: eR },
	nR = tR,
	rR = {
		hide: -1,
		auto: 'auto',
		base: 0,
		docked: 10,
		dropdown: 1e3,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1400,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800,
	},
	oR = rR,
	iR = { none: 0, '1px': '1px solid', '2px': '2px solid', '4px': '4px solid', '8px': '8px solid' },
	aR = iR,
	sR = { base: '0em', sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' },
	lR = sR,
	uR = {
		transparent: 'transparent',
		current: 'currentColor',
		black: '#000000',
		white: '#FFFFFF',
		whiteAlpha: {
			50: 'rgba(255, 255, 255, 0.04)',
			100: 'rgba(255, 255, 255, 0.06)',
			200: 'rgba(255, 255, 255, 0.08)',
			300: 'rgba(255, 255, 255, 0.16)',
			400: 'rgba(255, 255, 255, 0.24)',
			500: 'rgba(255, 255, 255, 0.36)',
			600: 'rgba(255, 255, 255, 0.48)',
			700: 'rgba(255, 255, 255, 0.64)',
			800: 'rgba(255, 255, 255, 0.80)',
			900: 'rgba(255, 255, 255, 0.92)',
		},
		blackAlpha: {
			50: 'rgba(0, 0, 0, 0.04)',
			100: 'rgba(0, 0, 0, 0.06)',
			200: 'rgba(0, 0, 0, 0.08)',
			300: 'rgba(0, 0, 0, 0.16)',
			400: 'rgba(0, 0, 0, 0.24)',
			500: 'rgba(0, 0, 0, 0.36)',
			600: 'rgba(0, 0, 0, 0.48)',
			700: 'rgba(0, 0, 0, 0.64)',
			800: 'rgba(0, 0, 0, 0.80)',
			900: 'rgba(0, 0, 0, 0.92)',
		},
		gray: {
			50: '#F7FAFC',
			100: '#EDF2F7',
			200: '#E2E8F0',
			300: '#CBD5E0',
			400: '#A0AEC0',
			500: '#718096',
			600: '#4A5568',
			700: '#2D3748',
			800: '#1A202C',
			900: '#171923',
		},
		red: {
			50: '#FFF5F5',
			100: '#FED7D7',
			200: '#FEB2B2',
			300: '#FC8181',
			400: '#F56565',
			500: '#E53E3E',
			600: '#C53030',
			700: '#9B2C2C',
			800: '#822727',
			900: '#63171B',
		},
		orange: {
			50: '#FFFAF0',
			100: '#FEEBC8',
			200: '#FBD38D',
			300: '#F6AD55',
			400: '#ED8936',
			500: '#DD6B20',
			600: '#C05621',
			700: '#9C4221',
			800: '#7B341E',
			900: '#652B19',
		},
		yellow: {
			50: '#FFFFF0',
			100: '#FEFCBF',
			200: '#FAF089',
			300: '#F6E05E',
			400: '#ECC94B',
			500: '#D69E2E',
			600: '#B7791F',
			700: '#975A16',
			800: '#744210',
			900: '#5F370E',
		},
		green: {
			50: '#F0FFF4',
			100: '#C6F6D5',
			200: '#9AE6B4',
			300: '#68D391',
			400: '#48BB78',
			500: '#38A169',
			600: '#2F855A',
			700: '#276749',
			800: '#22543D',
			900: '#1C4532',
		},
		teal: {
			50: '#E6FFFA',
			100: '#B2F5EA',
			200: '#81E6D9',
			300: '#4FD1C5',
			400: '#38B2AC',
			500: '#319795',
			600: '#2C7A7B',
			700: '#285E61',
			800: '#234E52',
			900: '#1D4044',
		},
		blue: {
			50: '#ebf8ff',
			100: '#bee3f8',
			200: '#90cdf4',
			300: '#63b3ed',
			400: '#4299e1',
			500: '#3182ce',
			600: '#2b6cb0',
			700: '#2c5282',
			800: '#2a4365',
			900: '#1A365D',
		},
		cyan: {
			50: '#EDFDFD',
			100: '#C4F1F9',
			200: '#9DECF9',
			300: '#76E4F7',
			400: '#0BC5EA',
			500: '#00B5D8',
			600: '#00A3C4',
			700: '#0987A0',
			800: '#086F83',
			900: '#065666',
		},
		purple: {
			50: '#FAF5FF',
			100: '#E9D8FD',
			200: '#D6BCFA',
			300: '#B794F4',
			400: '#9F7AEA',
			500: '#805AD5',
			600: '#6B46C1',
			700: '#553C9A',
			800: '#44337A',
			900: '#322659',
		},
		pink: {
			50: '#FFF5F7',
			100: '#FED7E2',
			200: '#FBB6CE',
			300: '#F687B3',
			400: '#ED64A6',
			500: '#D53F8C',
			600: '#B83280',
			700: '#97266D',
			800: '#702459',
			900: '#521B41',
		},
		linkedin: {
			50: '#E8F4F9',
			100: '#CFEDFB',
			200: '#9BDAF3',
			300: '#68C7EC',
			400: '#34B3E4',
			500: '#00A0DC',
			600: '#008CC9',
			700: '#0077B5',
			800: '#005E93',
			900: '#004471',
		},
		facebook: {
			50: '#E8F4F9',
			100: '#D9DEE9',
			200: '#B7C2DA',
			300: '#6482C0',
			400: '#4267B2',
			500: '#385898',
			600: '#314E89',
			700: '#29487D',
			800: '#223B67',
			900: '#1E355B',
		},
		messenger: {
			50: '#D0E6FF',
			100: '#B9DAFF',
			200: '#A2CDFF',
			300: '#7AB8FF',
			400: '#2E90FF',
			500: '#0078FF',
			600: '#0063D1',
			700: '#0052AC',
			800: '#003C7E',
			900: '#002C5C',
		},
		whatsapp: {
			50: '#dffeec',
			100: '#b9f5d0',
			200: '#90edb3',
			300: '#65e495',
			400: '#3cdd78',
			500: '#22c35e',
			600: '#179848',
			700: '#0c6c33',
			800: '#01421c',
			900: '#001803',
		},
		twitter: {
			50: '#E5F4FD',
			100: '#C8E9FB',
			200: '#A8DCFA',
			300: '#83CDF7',
			400: '#57BBF5',
			500: '#1DA1F2',
			600: '#1A94DA',
			700: '#1681BF',
			800: '#136B9E',
			900: '#0D4D71',
		},
		telegram: {
			50: '#E3F2F9',
			100: '#C5E4F3',
			200: '#A2D4EC',
			300: '#7AC1E4',
			400: '#47A9DA',
			500: '#0088CC',
			600: '#007AB8',
			700: '#006BA1',
			800: '#005885',
			900: '#003F5E',
		},
	},
	cR = uR,
	dR = {
		none: '0',
		sm: '0.125rem',
		base: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px',
	},
	fR = dR,
	hR = {
		xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		none: 'none',
		'dark-lg': 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
	},
	pR = hR,
	mR = { none: 0, sm: '4px', base: '8px', md: '12px', lg: '16px', xl: '24px', '2xl': '40px', '3xl': '64px' },
	vR = mR,
	gR = {
		letterSpacings: { tighter: '-0.05em', tight: '-0.025em', normal: '0', wide: '0.025em', wider: '0.05em', widest: '0.1em' },
		lineHeights: {
			normal: 'normal',
			none: 1,
			shorter: 1.25,
			short: 1.375,
			base: 1.5,
			tall: 1.625,
			taller: '2',
			3: '.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
		},
		fontWeights: {
			hairline: 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
		},
		fonts: {
			heading:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
		},
		fontSizes: {
			'3xs': '0.45rem',
			'2xs': '0.625rem',
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem',
		},
	},
	jS = gR,
	zS = {
		px: '1px',
		0.5: '0.125rem',
		1: '0.25rem',
		1.5: '0.375rem',
		2: '0.5rem',
		2.5: '0.625rem',
		3: '0.75rem',
		3.5: '0.875rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		7: '1.75rem',
		8: '2rem',
		9: '2.25rem',
		10: '2.5rem',
		12: '3rem',
		14: '3.5rem',
		16: '4rem',
		20: '5rem',
		24: '6rem',
		28: '7rem',
		32: '8rem',
		36: '9rem',
		40: '10rem',
		44: '11rem',
		48: '12rem',
		52: '13rem',
		56: '14rem',
		60: '15rem',
		64: '16rem',
		72: '18rem',
		80: '20rem',
		96: '24rem',
	},
	yR = {
		max: 'max-content',
		min: 'min-content',
		full: '100%',
		'3xs': '14rem',
		'2xs': '16rem',
		xs: '20rem',
		sm: '24rem',
		md: '28rem',
		lg: '32rem',
		xl: '36rem',
		'2xl': '42rem',
		'3xl': '48rem',
		'4xl': '56rem',
		'5xl': '64rem',
		'6xl': '72rem',
		'7xl': '80rem',
		'8xl': '90rem',
		prose: '60ch',
	},
	bR = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
	xR = { ...zS, ...yR, container: bR },
	LS = xR,
	SR = {
		breakpoints: lR,
		zIndices: oR,
		radii: fR,
		blur: vR,
		colors: cR,
		...jS,
		sizes: LS,
		shadows: pR,
		space: zS,
		borders: aR,
		transition: nR,
	},
	{ defineMultiStyleConfig: wR, definePartsStyle: ia } = he([
		'stepper',
		'step',
		'title',
		'description',
		'indicator',
		'separator',
		'icon',
		'number',
	]),
	$n = D('stepper-indicator-size'),
	Lo = D('stepper-icon-size'),
	Do = D('stepper-title-font-size'),
	aa = D('stepper-description-font-size'),
	Ki = D('stepper-accent-color'),
	kR = ia(({ colorScheme: e }) => ({
		stepper: {
			display: 'flex',
			justifyContent: 'space-between',
			gap: '4',
			'&[data-orientation=vertical]': { flexDirection: 'column', alignItems: 'flex-start' },
			'&[data-orientation=horizontal]': { flexDirection: 'row', alignItems: 'center' },
			[Ki.variable]: `colors.${e}.500`,
			_dark: { [Ki.variable]: `colors.${e}.200` },
		},
		title: { fontSize: Do.reference, fontWeight: 'medium' },
		description: { fontSize: aa.reference, color: 'chakra-subtle-text' },
		number: { fontSize: Do.reference },
		step: {
			flexShrink: 0,
			position: 'relative',
			display: 'flex',
			gap: '2',
			'&[data-orientation=horizontal]': { alignItems: 'center' },
			flex: '1',
			'&:last-of-type:not([data-stretch])': { flex: 'initial' },
		},
		icon: { flexShrink: 0, width: Lo.reference, height: Lo.reference },
		indicator: {
			flexShrink: 0,
			borderRadius: 'full',
			width: $n.reference,
			height: $n.reference,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'&[data-status=active]': { borderWidth: '2px', borderColor: Ki.reference },
			'&[data-status=complete]': { bg: Ki.reference, color: 'chakra-inverse-text' },
			'&[data-status=incomplete]': { borderWidth: '2px' },
		},
		separator: {
			bg: 'chakra-border-color',
			flex: '1',
			'&[data-status=complete]': { bg: Ki.reference },
			'&[data-orientation=horizontal]': { width: '100%', height: '2px', marginStart: '2' },
			'&[data-orientation=vertical]': {
				width: '2px',
				position: 'absolute',
				height: '100%',
				maxHeight: `calc(100% - ${$n.reference} - 8px)`,
				top: `calc(${$n.reference} + 4px)`,
				insetStart: `calc(${$n.reference} / 2 - 1px)`,
			},
		},
	})),
	CR = wR({
		baseStyle: kR,
		sizes: {
			xs: ia({
				stepper: {
					[$n.variable]: 'sizes.4',
					[Lo.variable]: 'sizes.3',
					[Do.variable]: 'fontSizes.xs',
					[aa.variable]: 'fontSizes.xs',
				},
			}),
			sm: ia({
				stepper: {
					[$n.variable]: 'sizes.6',
					[Lo.variable]: 'sizes.4',
					[Do.variable]: 'fontSizes.sm',
					[aa.variable]: 'fontSizes.xs',
				},
			}),
			md: ia({
				stepper: {
					[$n.variable]: 'sizes.8',
					[Lo.variable]: 'sizes.5',
					[Do.variable]: 'fontSizes.md',
					[aa.variable]: 'fontSizes.sm',
				},
			}),
			lg: ia({
				stepper: {
					[$n.variable]: 'sizes.10',
					[Lo.variable]: 'sizes.6',
					[Do.variable]: 'fontSizes.lg',
					[aa.variable]: 'fontSizes.md',
				},
			}),
		},
		defaultProps: { size: 'md', colorScheme: 'blue' },
	})
function ne(e, t = {}) {
	let n = !1
	function r() {
		if (!n) {
			n = !0
			return
		}
		throw new Error('[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?')
	}
	function o(...d) {
		r()
		for (const c of d) t[c] = l(c)
		return ne(e, t)
	}
	function i(...d) {
		for (const c of d) c in t || (t[c] = l(c))
		return ne(e, t)
	}
	function a() {
		return Object.fromEntries(Object.entries(t).map(([c, f]) => [c, f.selector]))
	}
	function s() {
		return Object.fromEntries(Object.entries(t).map(([c, f]) => [c, f.className]))
	}
	function l(d) {
		const m = `chakra-${(['container', 'root'].includes(d ?? '') ? [e] : [e, d]).filter(Boolean).join('__')}`
		return { className: m, selector: `.${m}`, toString: () => d }
	}
	return {
		parts: o,
		toPart: l,
		extend: i,
		selectors: a,
		classnames: s,
		get keys() {
			return Object.keys(t)
		},
		__type: {},
	}
}
var _R = ne('accordion').parts('root', 'container', 'button', 'panel').extend('icon'),
	PR = ne('alert').parts('title', 'description', 'container').extend('icon', 'spinner'),
	TR = ne('avatar').parts('label', 'badge', 'container').extend('excessLabel', 'group'),
	ER = ne('breadcrumb').parts('link', 'item', 'container').extend('separator')
ne('button').parts()
var $R = ne('checkbox').parts('control', 'icon', 'container').extend('label')
ne('progress').parts('track', 'filledTrack').extend('label')
var RR = ne('drawer').parts('overlay', 'dialogContainer', 'dialog').extend('header', 'closeButton', 'body', 'footer'),
	AR = ne('editable').parts('preview', 'input', 'textarea'),
	MR = ne('form').parts('container', 'requiredIndicator', 'helperText'),
	IR = ne('formError').parts('text', 'icon'),
	FR = ne('input').parts('addon', 'field', 'element', 'group'),
	jR = ne('list').parts('container', 'item', 'icon'),
	zR = ne('menu').parts('button', 'list', 'item').extend('groupTitle', 'icon', 'command', 'divider'),
	LR = ne('modal').parts('overlay', 'dialogContainer', 'dialog').extend('header', 'closeButton', 'body', 'footer'),
	DR = ne('numberinput').parts('root', 'field', 'stepperGroup', 'stepper')
ne('pininput').parts('field')
var OR = ne('popover').parts('content', 'header', 'body', 'footer').extend('popper', 'arrow', 'closeButton'),
	BR = ne('progress').parts('label', 'filledTrack', 'track'),
	NR = ne('radio').parts('container', 'control', 'label'),
	VR = ne('select').parts('field', 'icon'),
	WR = ne('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
	UR = ne('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
	HR = ne('switch').parts('container', 'track', 'thumb', 'label'),
	KR = ne('table').parts('table', 'thead', 'tbody', 'tr', 'th', 'td', 'tfoot', 'caption'),
	GR = ne('tabs').parts('root', 'tab', 'tablist', 'tabpanel', 'tabpanels', 'indicator'),
	qR = ne('tag').parts('container', 'label', 'closeButton'),
	YR = ne('card').parts('container', 'header', 'body', 'footer')
ne('stepper').parts('stepper', 'step', 'title', 'description', 'indicator', 'separator', 'icon', 'number')
function Kr(e, t, n) {
	return Math.min(Math.max(e, n), t)
}
class XR extends Error {
	constructor(t) {
		super(`Failed to parse color: "${t}"`)
	}
}
var sa = XR
function fm(e) {
	if (typeof e != 'string') throw new sa(e)
	if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0]
	let t = e.trim()
	t = oA.test(e) ? JR(e) : e
	const n = eA.exec(t)
	if (n) {
		const a = Array.from(n).slice(1)
		return [...a.slice(0, 3).map(s => parseInt(Ja(s, 2), 16)), parseInt(Ja(a[3] || 'f', 2), 16) / 255]
	}
	const r = tA.exec(t)
	if (r) {
		const a = Array.from(r).slice(1)
		return [...a.slice(0, 3).map(s => parseInt(s, 16)), parseInt(a[3] || 'ff', 16) / 255]
	}
	const o = nA.exec(t)
	if (o) {
		const a = Array.from(o).slice(1)
		return [...a.slice(0, 3).map(s => parseInt(s, 10)), parseFloat(a[3] || '1')]
	}
	const i = rA.exec(t)
	if (i) {
		const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat)
		if (Kr(0, 100, s) !== s) throw new sa(e)
		if (Kr(0, 100, l) !== l) throw new sa(e)
		return [...iA(a, s, l), Number.isNaN(u) ? 1 : u]
	}
	throw new sa(e)
}
function QR(e) {
	let t = 5381,
		n = e.length
	for (; n; ) t = (t * 33) ^ e.charCodeAt(--n)
	return (t >>> 0) % 2341
}
const c0 = e => parseInt(e.replace(/_/g, ''), 36),
	ZR =
		'1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
			.split(' ')
			.reduce((e, t) => {
				const n = c0(t.substring(0, 3)),
					r = c0(t.substring(3)).toString(16)
				let o = ''
				for (let i = 0; i < 6 - r.length; i++) o += '0'
				return (e[n] = `${o}${r}`), e
			}, {})
function JR(e) {
	const t = e.toLowerCase().trim(),
		n = ZR[QR(t)]
	if (!n) throw new sa(e)
	return `#${n}`
}
const Ja = (e, t) =>
		Array.from(Array(t))
			.map(() => e)
			.join(''),
	eA = new RegExp(`^#${Ja('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
	tA = new RegExp(`^#${Ja('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
	nA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ja(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, 'i'),
	rA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
	oA = /^[a-z]+$/i,
	d0 = e => Math.round(e * 255),
	iA = (e, t, n) => {
		let r = n / 100
		if (t === 0) return [r, r, r].map(d0)
		const o = (((e % 360) + 360) % 360) / 60,
			i = (1 - Math.abs(2 * r - 1)) * (t / 100),
			a = i * (1 - Math.abs((o % 2) - 1))
		let s = 0,
			l = 0,
			u = 0
		o >= 0 && o < 1
			? ((s = i), (l = a))
			: o >= 1 && o < 2
			? ((s = a), (l = i))
			: o >= 2 && o < 3
			? ((l = i), (u = a))
			: o >= 3 && o < 4
			? ((l = a), (u = i))
			: o >= 4 && o < 5
			? ((s = a), (u = i))
			: o >= 5 && o < 6 && ((s = i), (u = a))
		const d = r - i / 2,
			c = s + d,
			f = l + d,
			m = u + d
		return [c, f, m].map(d0)
	}
function aA(e, t, n, r) {
	return `rgba(${Kr(0, 255, e).toFixed()}, ${Kr(0, 255, t).toFixed()}, ${Kr(0, 255, n).toFixed()}, ${parseFloat(
		Kr(0, 1, r).toFixed(3),
	)})`
}
function sA(e, t) {
	const [n, r, o, i] = fm(e)
	return aA(n, r, o, i - t)
}
function lA(e) {
	const [t, n, r, o] = fm(e)
	let i = a => {
		const s = Kr(0, 255, a).toString(16)
		return s.length === 1 ? `0${s}` : s
	}
	return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ''}`
}
function uA(e, t, n, r, o) {
	for (t = t.split ? t.split('.') : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : o
	return e === o ? n : e
}
var cA = e => Object.keys(e).length === 0,
	lt = (e, t, n) => {
		const r = uA(e, `colors.${t}`, t)
		try {
			return lA(r), r
		} catch {
			return n ?? '#000000'
		}
	},
	dA = e => {
		const [t, n, r] = fm(e)
		return (t * 299 + n * 587 + r * 114) / 1e3
	},
	fA = e => t => {
		const n = lt(t, e)
		return dA(n) < 128 ? 'dark' : 'light'
	},
	hA = e => t => fA(e)(t) === 'dark',
	gi = (e, t) => n => {
		const r = lt(n, e)
		return sA(r, 1 - t)
	}
function f0(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
	return {
		backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
		backgroundSize: `${e} ${e}`,
	}
}
var pA = () =>
	`#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padEnd(6, '0')}`
function mA(e) {
	const t = pA()
	return !e || cA(e)
		? t
		: e.string && e.colors
		? gA(e.string, e.colors)
		: e.string && !e.colors
		? vA(e.string)
		: e.colors && !e.string
		? yA(e.colors)
		: t
}
function vA(e) {
	let t = 0
	if (e.length === 0) return t.toString()
	for (let r = 0; r < e.length; r += 1) (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t)
	let n = '#'
	for (let r = 0; r < 3; r += 1) {
		const o = (t >> (r * 8)) & 255
		n += `00${o.toString(16)}`.substr(-2)
	}
	return n
}
function gA(e, t) {
	let n = 0
	if (e.length === 0) return t[0]
	for (let r = 0; r < e.length; r += 1) (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n)
	return (n = ((n % t.length) + t.length) % t.length), t[n]
}
function yA(e) {
	return e[Math.floor(Math.random() * e.length)]
}
function L(e, t) {
	return n => (n.colorMode === 'dark' ? t : e)
}
function hm(e) {
	const { orientation: t, vertical: n, horizontal: r } = e
	return t ? (t === 'vertical' ? n : r) : {}
}
function DS(e) {
	return nn(e) && e.reference ? e.reference : String(e)
}
var Rc = (e, ...t) => t.map(DS).join(` ${e} `).replace(/calc/g, ''),
	h0 = (...e) => `calc(${Rc('+', ...e)})`,
	p0 = (...e) => `calc(${Rc('-', ...e)})`,
	wh = (...e) => `calc(${Rc('*', ...e)})`,
	m0 = (...e) => `calc(${Rc('/', ...e)})`,
	v0 = e => {
		const t = DS(e)
		return t != null && !Number.isNaN(parseFloat(t)) ? (String(t).startsWith('-') ? String(t).slice(1) : `-${t}`) : wh(t, -1)
	},
	Rn = Object.assign(
		e => ({
			add: (...t) => Rn(h0(e, ...t)),
			subtract: (...t) => Rn(p0(e, ...t)),
			multiply: (...t) => Rn(wh(e, ...t)),
			divide: (...t) => Rn(m0(e, ...t)),
			negate: () => Rn(v0(e)),
			toString: () => e.toString(),
		}),
		{ add: h0, subtract: p0, multiply: wh, divide: m0, negate: v0 },
	)
function bA(e) {
	return !Number.isInteger(parseFloat(e.toString()))
}
function xA(e, t = '-') {
	return e.replace(/\s+/g, t)
}
function OS(e) {
	const t = xA(e.toString())
	return t.includes('\\.') ? e : bA(e) ? t.replace('.', '\\.') : e
}
function SA(e, t = '') {
	return [t, OS(e)].filter(Boolean).join('-')
}
function wA(e, t) {
	return `var(${OS(e)}${t ? `, ${t}` : ''})`
}
function kA(e, t = '') {
	return `--${SA(e, t)}`
}
function De(e, t) {
	const n = kA(e, void 0)
	return { variable: n, reference: wA(n, CA(void 0)) }
}
function CA(e) {
	return typeof e == 'string' ? e : e == null ? void 0 : e.reference
}
var { defineMultiStyleConfig: _A, definePartsStyle: Vl } = he(HR.keys),
	Sa = De('switch-track-width'),
	Qr = De('switch-track-height'),
	Id = De('switch-track-diff'),
	PA = Rn.subtract(Sa, Qr),
	kh = De('switch-thumb-x'),
	Gi = De('switch-bg'),
	TA = e => {
		const { colorScheme: t } = e
		return {
			borderRadius: 'full',
			p: '0.5',
			width: [Sa.reference],
			height: [Qr.reference],
			transitionProperty: 'common',
			transitionDuration: 'fast',
			[Gi.variable]: 'colors.gray.300',
			_dark: { [Gi.variable]: 'colors.whiteAlpha.400' },
			_focusVisible: { boxShadow: 'outline' },
			_disabled: { opacity: 0.4, cursor: 'not-allowed' },
			_checked: { [Gi.variable]: `colors.${t}.500`, _dark: { [Gi.variable]: `colors.${t}.200` } },
			bg: Gi.reference,
		}
	},
	EA = {
		bg: 'white',
		transitionProperty: 'transform',
		transitionDuration: 'normal',
		borderRadius: 'inherit',
		width: [Qr.reference],
		height: [Qr.reference],
		_checked: { transform: `translateX(${kh.reference})` },
	},
	$A = Vl(e => ({
		container: { [Id.variable]: PA, [kh.variable]: Id.reference, _rtl: { [kh.variable]: Rn(Id).negate().toString() } },
		track: TA(e),
		thumb: EA,
	})),
	RA = {
		sm: Vl({ container: { [Sa.variable]: '1.375rem', [Qr.variable]: 'sizes.3' } }),
		md: Vl({ container: { [Sa.variable]: '1.875rem', [Qr.variable]: 'sizes.4' } }),
		lg: Vl({ container: { [Sa.variable]: '2.875rem', [Qr.variable]: 'sizes.6' } }),
	},
	AA = _A({ baseStyle: $A, sizes: RA, defaultProps: { size: 'md', colorScheme: 'blue' } }),
	{ defineMultiStyleConfig: MA, definePartsStyle: ti } = he(KR.keys),
	IA = ti({
		table: { fontVariantNumeric: 'lining-nums tabular-nums', borderCollapse: 'collapse', width: 'full' },
		th: { fontFamily: 'heading', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 'wider', textAlign: 'start' },
		td: { textAlign: 'start' },
		caption: { mt: 4, fontFamily: 'heading', textAlign: 'center', fontWeight: 'medium' },
	}),
	ju = { '&[data-is-numeric=true]': { textAlign: 'end' } },
	FA = ti(e => {
		const { colorScheme: t } = e
		return {
			th: { color: L('gray.600', 'gray.400')(e), borderBottom: '1px', borderColor: L(`${t}.100`, `${t}.700`)(e), ...ju },
			td: { borderBottom: '1px', borderColor: L(`${t}.100`, `${t}.700`)(e), ...ju },
			caption: { color: L('gray.600', 'gray.100')(e) },
			tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
		}
	}),
	jA = ti(e => {
		const { colorScheme: t } = e
		return {
			th: { color: L('gray.600', 'gray.400')(e), borderBottom: '1px', borderColor: L(`${t}.100`, `${t}.700`)(e), ...ju },
			td: { borderBottom: '1px', borderColor: L(`${t}.100`, `${t}.700`)(e), ...ju },
			caption: { color: L('gray.600', 'gray.100')(e) },
			tbody: {
				tr: {
					'&:nth-of-type(odd)': {
						'th, td': { borderBottomWidth: '1px', borderColor: L(`${t}.100`, `${t}.700`)(e) },
						td: { background: L(`${t}.100`, `${t}.700`)(e) },
					},
				},
			},
			tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
		}
	}),
	zA = { simple: FA, striped: jA, unstyled: {} },
	LA = {
		sm: ti({
			th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
			td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
			caption: { px: '4', py: '2', fontSize: 'xs' },
		}),
		md: ti({
			th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
			td: { px: '6', py: '4', lineHeight: '5' },
			caption: { px: '6', py: '2', fontSize: 'sm' },
		}),
		lg: ti({
			th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
			td: { px: '8', py: '5', lineHeight: '6' },
			caption: { px: '6', py: '2', fontSize: 'md' },
		}),
	},
	DA = MA({ baseStyle: IA, variants: zA, sizes: LA, defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' } }),
	mt = D('tabs-color'),
	Jt = D('tabs-bg'),
	fl = D('tabs-border-color'),
	{ defineMultiStyleConfig: OA, definePartsStyle: Sn } = he(GR.keys),
	BA = e => {
		const { orientation: t } = e
		return { display: t === 'vertical' ? 'flex' : 'block' }
	},
	NA = e => {
		const { isFitted: t } = e
		return {
			flex: t ? 1 : void 0,
			transitionProperty: 'common',
			transitionDuration: 'normal',
			_focusVisible: { zIndex: 1, boxShadow: 'outline' },
			_disabled: { cursor: 'not-allowed', opacity: 0.4 },
		}
	},
	VA = e => {
		const { align: t = 'start', orientation: n } = e
		return {
			justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[t],
			flexDirection: n === 'vertical' ? 'column' : 'row',
		}
	},
	WA = { p: 4 },
	UA = Sn(e => ({ root: BA(e), tab: NA(e), tablist: VA(e), tabpanel: WA })),
	HA = {
		sm: Sn({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
		md: Sn({ tab: { fontSize: 'md', py: 2, px: 4 } }),
		lg: Sn({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
	},
	KA = Sn(e => {
		const { colorScheme: t, orientation: n } = e,
			r = n === 'vertical',
			o = r ? 'borderStart' : 'borderBottom',
			i = r ? 'marginStart' : 'marginBottom'
		return {
			tablist: { [o]: '2px solid', borderColor: 'inherit' },
			tab: {
				[o]: '2px solid',
				borderColor: 'transparent',
				[i]: '-2px',
				_selected: { [mt.variable]: `colors.${t}.600`, _dark: { [mt.variable]: `colors.${t}.300` }, borderColor: 'currentColor' },
				_active: { [Jt.variable]: 'colors.gray.200', _dark: { [Jt.variable]: 'colors.whiteAlpha.300' } },
				_disabled: { _active: { bg: 'none' } },
				color: mt.reference,
				bg: Jt.reference,
			},
		}
	}),
	GA = Sn(e => {
		const { colorScheme: t } = e
		return {
			tab: {
				borderTopRadius: 'md',
				border: '1px solid',
				borderColor: 'transparent',
				mb: '-1px',
				[fl.variable]: 'transparent',
				_selected: {
					[mt.variable]: `colors.${t}.600`,
					[fl.variable]: 'colors.white',
					_dark: { [mt.variable]: `colors.${t}.300`, [fl.variable]: 'colors.gray.800' },
					borderColor: 'inherit',
					borderBottomColor: fl.reference,
				},
				color: mt.reference,
			},
			tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
		}
	}),
	qA = Sn(e => {
		const { colorScheme: t } = e
		return {
			tab: {
				border: '1px solid',
				borderColor: 'inherit',
				[Jt.variable]: 'colors.gray.50',
				_dark: { [Jt.variable]: 'colors.whiteAlpha.50' },
				mb: '-1px',
				_notLast: { marginEnd: '-1px' },
				_selected: {
					[Jt.variable]: 'colors.white',
					[mt.variable]: `colors.${t}.600`,
					_dark: { [Jt.variable]: 'colors.gray.800', [mt.variable]: `colors.${t}.300` },
					borderColor: 'inherit',
					borderTopColor: 'currentColor',
					borderBottomColor: 'transparent',
				},
				color: mt.reference,
				bg: Jt.reference,
			},
			tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' },
		}
	}),
	YA = Sn(e => {
		const { colorScheme: t, theme: n } = e
		return {
			tab: {
				borderRadius: 'full',
				fontWeight: 'semibold',
				color: 'gray.600',
				_selected: { color: lt(n, `${t}.700`), bg: lt(n, `${t}.100`) },
			},
		}
	}),
	XA = Sn(e => {
		const { colorScheme: t } = e
		return {
			tab: {
				borderRadius: 'full',
				fontWeight: 'semibold',
				[mt.variable]: 'colors.gray.600',
				_dark: { [mt.variable]: 'inherit' },
				_selected: {
					[mt.variable]: 'colors.white',
					[Jt.variable]: `colors.${t}.600`,
					_dark: { [mt.variable]: 'colors.gray.800', [Jt.variable]: `colors.${t}.300` },
				},
				color: mt.reference,
				bg: Jt.reference,
			},
		}
	}),
	QA = Sn({}),
	ZA = { line: KA, enclosed: GA, 'enclosed-colored': qA, 'soft-rounded': YA, 'solid-rounded': XA, unstyled: QA },
	JA = OA({ baseStyle: UA, sizes: HA, variants: ZA, defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' } }),
	Me = k$('badge', ['bg', 'color', 'shadow']),
	eM = {
		px: 1,
		textTransform: 'uppercase',
		fontSize: 'xs',
		borderRadius: 'sm',
		fontWeight: 'bold',
		bg: Me.bg.reference,
		color: Me.color.reference,
		boxShadow: Me.shadow.reference,
	},
	tM = e => {
		const { colorScheme: t, theme: n } = e,
			r = gi(`${t}.500`, 0.6)(n)
		return {
			[Me.bg.variable]: `colors.${t}.500`,
			[Me.color.variable]: 'colors.white',
			_dark: { [Me.bg.variable]: r, [Me.color.variable]: 'colors.whiteAlpha.800' },
		}
	},
	nM = e => {
		const { colorScheme: t, theme: n } = e,
			r = gi(`${t}.200`, 0.16)(n)
		return {
			[Me.bg.variable]: `colors.${t}.100`,
			[Me.color.variable]: `colors.${t}.800`,
			_dark: { [Me.bg.variable]: r, [Me.color.variable]: `colors.${t}.200` },
		}
	},
	rM = e => {
		const { colorScheme: t, theme: n } = e,
			r = gi(`${t}.200`, 0.8)(n)
		return {
			[Me.color.variable]: `colors.${t}.500`,
			_dark: { [Me.color.variable]: r },
			[Me.shadow.variable]: `inset 0 0 0px 1px ${Me.color.reference}`,
		}
	},
	oM = { solid: tM, subtle: nM, outline: rM },
	wa = { baseStyle: eM, variants: oM, defaultProps: { variant: 'subtle', colorScheme: 'gray' } },
	{ defineMultiStyleConfig: iM, definePartsStyle: Zr } = he(qR.keys),
	g0 = D('tag-bg'),
	y0 = D('tag-color'),
	Fd = D('tag-shadow'),
	Wl = D('tag-min-height'),
	Ul = D('tag-min-width'),
	Hl = D('tag-font-size'),
	Kl = D('tag-padding-inline'),
	aM = {
		fontWeight: 'medium',
		lineHeight: 1.2,
		outline: 0,
		[y0.variable]: Me.color.reference,
		[g0.variable]: Me.bg.reference,
		[Fd.variable]: Me.shadow.reference,
		color: y0.reference,
		bg: g0.reference,
		boxShadow: Fd.reference,
		borderRadius: 'md',
		minH: Wl.reference,
		minW: Ul.reference,
		fontSize: Hl.reference,
		px: Kl.reference,
		_focusVisible: { [Fd.variable]: 'shadows.outline' },
	},
	sM = { lineHeight: 1.2, overflow: 'visible' },
	lM = {
		fontSize: 'lg',
		w: '5',
		h: '5',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		borderRadius: 'full',
		marginStart: '1.5',
		marginEnd: '-1',
		opacity: 0.5,
		_disabled: { opacity: 0.4 },
		_focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
		_hover: { opacity: 0.8 },
		_active: { opacity: 1 },
	},
	uM = Zr({ container: aM, label: sM, closeButton: lM }),
	cM = {
		sm: Zr({
			container: { [Wl.variable]: 'sizes.5', [Ul.variable]: 'sizes.5', [Hl.variable]: 'fontSizes.xs', [Kl.variable]: 'space.2' },
			closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
		}),
		md: Zr({
			container: { [Wl.variable]: 'sizes.6', [Ul.variable]: 'sizes.6', [Hl.variable]: 'fontSizes.sm', [Kl.variable]: 'space.2' },
		}),
		lg: Zr({
			container: { [Wl.variable]: 'sizes.8', [Ul.variable]: 'sizes.8', [Hl.variable]: 'fontSizes.md', [Kl.variable]: 'space.3' },
		}),
	},
	dM = {
		subtle: Zr(e => {
			var t
			return { container: (t = wa.variants) == null ? void 0 : t.subtle(e) }
		}),
		solid: Zr(e => {
			var t
			return { container: (t = wa.variants) == null ? void 0 : t.solid(e) }
		}),
		outline: Zr(e => {
			var t
			return { container: (t = wa.variants) == null ? void 0 : t.outline(e) }
		}),
	},
	fM = iM({ variants: dM, baseStyle: uM, sizes: cM, defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' } }),
	{ definePartsStyle: In, defineMultiStyleConfig: hM } = he(FR.keys),
	Oo = D('input-height'),
	Bo = D('input-font-size'),
	No = D('input-padding'),
	Vo = D('input-border-radius'),
	pM = In({
		addon: { height: Oo.reference, fontSize: Bo.reference, px: No.reference, borderRadius: Vo.reference },
		field: {
			width: '100%',
			height: Oo.reference,
			fontSize: Bo.reference,
			px: No.reference,
			borderRadius: Vo.reference,
			minWidth: 0,
			outline: 0,
			position: 'relative',
			appearance: 'none',
			transitionProperty: 'common',
			transitionDuration: 'normal',
			_disabled: { opacity: 0.4, cursor: 'not-allowed' },
		},
	}),
	Jn = {
		lg: { [Bo.variable]: 'fontSizes.lg', [No.variable]: 'space.4', [Vo.variable]: 'radii.md', [Oo.variable]: 'sizes.12' },
		md: { [Bo.variable]: 'fontSizes.md', [No.variable]: 'space.4', [Vo.variable]: 'radii.md', [Oo.variable]: 'sizes.10' },
		sm: { [Bo.variable]: 'fontSizes.sm', [No.variable]: 'space.3', [Vo.variable]: 'radii.sm', [Oo.variable]: 'sizes.8' },
		xs: { [Bo.variable]: 'fontSizes.xs', [No.variable]: 'space.2', [Vo.variable]: 'radii.sm', [Oo.variable]: 'sizes.6' },
	},
	mM = {
		lg: In({ field: Jn.lg, group: Jn.lg }),
		md: In({ field: Jn.md, group: Jn.md }),
		sm: In({ field: Jn.sm, group: Jn.sm }),
		xs: In({ field: Jn.xs, group: Jn.xs }),
	}
function pm(e) {
	const { focusBorderColor: t, errorBorderColor: n } = e
	return { focusBorderColor: t || L('blue.500', 'blue.300')(e), errorBorderColor: n || L('red.500', 'red.300')(e) }
}
var vM = In(e => {
		const { theme: t } = e,
			{ focusBorderColor: n, errorBorderColor: r } = pm(e)
		return {
			field: {
				border: '1px solid',
				borderColor: 'inherit',
				bg: 'inherit',
				_hover: { borderColor: L('gray.300', 'whiteAlpha.400')(e) },
				_readOnly: { boxShadow: 'none !important', userSelect: 'all' },
				_invalid: { borderColor: lt(t, r), boxShadow: `0 0 0 1px ${lt(t, r)}` },
				_focusVisible: { zIndex: 1, borderColor: lt(t, n), boxShadow: `0 0 0 1px ${lt(t, n)}` },
			},
			addon: { border: '1px solid', borderColor: L('inherit', 'whiteAlpha.50')(e), bg: L('gray.100', 'whiteAlpha.300')(e) },
		}
	}),
	gM = In(e => {
		const { theme: t } = e,
			{ focusBorderColor: n, errorBorderColor: r } = pm(e)
		return {
			field: {
				border: '2px solid',
				borderColor: 'transparent',
				bg: L('gray.100', 'whiteAlpha.50')(e),
				_hover: { bg: L('gray.200', 'whiteAlpha.100')(e) },
				_readOnly: { boxShadow: 'none !important', userSelect: 'all' },
				_invalid: { borderColor: lt(t, r) },
				_focusVisible: { bg: 'transparent', borderColor: lt(t, n) },
			},
			addon: { border: '2px solid', borderColor: 'transparent', bg: L('gray.100', 'whiteAlpha.50')(e) },
		}
	}),
	yM = In(e => {
		const { theme: t } = e,
			{ focusBorderColor: n, errorBorderColor: r } = pm(e)
		return {
			field: {
				borderBottom: '1px solid',
				borderColor: 'inherit',
				borderRadius: '0',
				px: '0',
				bg: 'transparent',
				_readOnly: { boxShadow: 'none !important', userSelect: 'all' },
				_invalid: { borderColor: lt(t, r), boxShadow: `0px 1px 0px 0px ${lt(t, r)}` },
				_focusVisible: { borderColor: lt(t, n), boxShadow: `0px 1px 0px 0px ${lt(t, n)}` },
			},
			addon: { borderBottom: '2px solid', borderColor: 'inherit', borderRadius: '0', px: '0', bg: 'transparent' },
		}
	}),
	bM = In({ field: { bg: 'transparent', px: '0', height: 'auto' }, addon: { bg: 'transparent', px: '0', height: 'auto' } }),
	xM = { outline: vM, filled: gM, flushed: yM, unstyled: bM },
	te = hM({ baseStyle: pM, sizes: mM, variants: xM, defaultProps: { size: 'md', variant: 'outline' } }),
	b0,
	SM = {
		...((b0 = te.baseStyle) == null ? void 0 : b0.field),
		paddingY: '2',
		minHeight: '20',
		lineHeight: 'short',
		verticalAlign: 'top',
	},
	x0,
	S0,
	wM = {
		outline: e => {
			var t, n
			return (n = (t = te.variants) == null ? void 0 : t.outline(e).field) != null ? n : {}
		},
		flushed: e => {
			var t, n
			return (n = (t = te.variants) == null ? void 0 : t.flushed(e).field) != null ? n : {}
		},
		filled: e => {
			var t, n
			return (n = (t = te.variants) == null ? void 0 : t.filled(e).field) != null ? n : {}
		},
		unstyled: (S0 = (x0 = te.variants) == null ? void 0 : x0.unstyled.field) != null ? S0 : {},
	},
	w0,
	k0,
	C0,
	_0,
	P0,
	T0,
	E0,
	$0,
	kM = {
		xs: (k0 = (w0 = te.sizes) == null ? void 0 : w0.xs.field) != null ? k0 : {},
		sm: (_0 = (C0 = te.sizes) == null ? void 0 : C0.sm.field) != null ? _0 : {},
		md: (T0 = (P0 = te.sizes) == null ? void 0 : P0.md.field) != null ? T0 : {},
		lg: ($0 = (E0 = te.sizes) == null ? void 0 : E0.lg.field) != null ? $0 : {},
	},
	CM = { baseStyle: SM, sizes: kM, variants: wM, defaultProps: { size: 'md', variant: 'outline' } },
	hl = De('tooltip-bg'),
	jd = De('tooltip-fg'),
	_M = De('popper-arrow-bg'),
	PM = {
		bg: hl.reference,
		color: jd.reference,
		[hl.variable]: 'colors.gray.700',
		[jd.variable]: 'colors.whiteAlpha.900',
		_dark: { [hl.variable]: 'colors.gray.300', [jd.variable]: 'colors.gray.900' },
		[_M.variable]: hl.reference,
		px: '2',
		py: '0.5',
		borderRadius: 'sm',
		fontWeight: 'medium',
		fontSize: 'sm',
		boxShadow: 'md',
		maxW: 'xs',
		zIndex: 'tooltip',
	},
	TM = { baseStyle: PM },
	{ defineMultiStyleConfig: EM, definePartsStyle: la } = he(BR.keys),
	$M = e => {
		const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
			i = L(f0(), f0('1rem', 'rgba(0,0,0,0.1)'))(e),
			a = L(`${t}.500`, `${t}.200`)(e),
			s = `linear-gradient(
    to right,
    transparent 0%,
    ${lt(n, a)} 50%,
    transparent 100%
  )`
		return { ...(!r && o && i), ...(r ? { bgImage: s } : { bgColor: a }) }
	},
	RM = { lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' },
	AM = e => ({ bg: L('gray.100', 'whiteAlpha.300')(e) }),
	MM = e => ({ transitionProperty: 'common', transitionDuration: 'slow', ...$M(e) }),
	IM = la(e => ({ label: RM, filledTrack: MM(e), track: AM(e) })),
	FM = {
		xs: la({ track: { h: '1' } }),
		sm: la({ track: { h: '2' } }),
		md: la({ track: { h: '3' } }),
		lg: la({ track: { h: '4' } }),
	},
	jM = EM({ sizes: FM, baseStyle: IM, defaultProps: { size: 'md', colorScheme: 'blue' } }),
	zM = e => typeof e == 'function'
function dt(e, ...t) {
	return zM(e) ? e(...t) : e
}
var { definePartsStyle: Gl, defineMultiStyleConfig: LM } = he($R.keys),
	ka = D('checkbox-size'),
	DM = e => {
		const { colorScheme: t } = e
		return {
			w: ka.reference,
			h: ka.reference,
			transitionProperty: 'box-shadow',
			transitionDuration: 'normal',
			border: '2px solid',
			borderRadius: 'sm',
			borderColor: 'inherit',
			color: 'white',
			_checked: {
				bg: L(`${t}.500`, `${t}.200`)(e),
				borderColor: L(`${t}.500`, `${t}.200`)(e),
				color: L('white', 'gray.900')(e),
				_hover: { bg: L(`${t}.600`, `${t}.300`)(e), borderColor: L(`${t}.600`, `${t}.300`)(e) },
				_disabled: {
					borderColor: L('gray.200', 'transparent')(e),
					bg: L('gray.200', 'whiteAlpha.300')(e),
					color: L('gray.500', 'whiteAlpha.500')(e),
				},
			},
			_indeterminate: {
				bg: L(`${t}.500`, `${t}.200`)(e),
				borderColor: L(`${t}.500`, `${t}.200`)(e),
				color: L('white', 'gray.900')(e),
			},
			_disabled: { bg: L('gray.100', 'whiteAlpha.100')(e), borderColor: L('gray.100', 'transparent')(e) },
			_focusVisible: { boxShadow: 'outline' },
			_invalid: { borderColor: L('red.500', 'red.300')(e) },
		}
	},
	OM = { _disabled: { cursor: 'not-allowed' } },
	BM = { userSelect: 'none', _disabled: { opacity: 0.4 } },
	NM = { transitionProperty: 'transform', transitionDuration: 'normal' },
	VM = Gl(e => ({ icon: NM, container: OM, control: dt(DM, e), label: BM })),
	WM = {
		sm: Gl({ control: { [ka.variable]: 'sizes.3' }, label: { fontSize: 'sm' }, icon: { fontSize: '3xs' } }),
		md: Gl({ control: { [ka.variable]: 'sizes.4' }, label: { fontSize: 'md' }, icon: { fontSize: '2xs' } }),
		lg: Gl({ control: { [ka.variable]: 'sizes.5' }, label: { fontSize: 'lg' }, icon: { fontSize: '2xs' } }),
	},
	zu = LM({ baseStyle: VM, sizes: WM, defaultProps: { size: 'md', colorScheme: 'blue' } }),
	{ defineMultiStyleConfig: UM, definePartsStyle: ql } = he(NR.keys),
	HM = e => {
		var t
		const n = (t = dt(zu.baseStyle, e)) == null ? void 0 : t.control
		return {
			...n,
			borderRadius: 'full',
			_checked: {
				...(n == null ? void 0 : n._checked),
				_before: {
					content: '""',
					display: 'inline-block',
					pos: 'relative',
					w: '50%',
					h: '50%',
					borderRadius: '50%',
					bg: 'currentColor',
				},
			},
		}
	},
	KM = ql(e => {
		var t, n, r, o
		return {
			label: (n = (t = zu).baseStyle) == null ? void 0 : n.call(t, e).label,
			container: (o = (r = zu).baseStyle) == null ? void 0 : o.call(r, e).container,
			control: HM(e),
		}
	}),
	GM = {
		md: ql({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
		lg: ql({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
		sm: ql({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } }),
	},
	qM = UM({ baseStyle: KM, sizes: GM, defaultProps: { size: 'md', colorScheme: 'blue' } }),
	{ defineMultiStyleConfig: YM, definePartsStyle: XM } = he(VR.keys),
	pl = D('select-bg'),
	R0,
	QM = {
		...((R0 = te.baseStyle) == null ? void 0 : R0.field),
		appearance: 'none',
		paddingBottom: '1px',
		lineHeight: 'normal',
		bg: pl.reference,
		[pl.variable]: 'colors.white',
		_dark: { [pl.variable]: 'colors.gray.700' },
		'> option, > optgroup': { bg: pl.reference },
	},
	ZM = {
		width: '6',
		height: '100%',
		insetEnd: '2',
		position: 'relative',
		color: 'currentColor',
		fontSize: 'xl',
		_disabled: { opacity: 0.5 },
	},
	JM = XM({ field: QM, icon: ZM }),
	ml = { paddingInlineEnd: '8' },
	A0,
	M0,
	I0,
	F0,
	j0,
	z0,
	L0,
	D0,
	e3 = {
		lg: { ...((A0 = te.sizes) == null ? void 0 : A0.lg), field: { ...((M0 = te.sizes) == null ? void 0 : M0.lg.field), ...ml } },
		md: { ...((I0 = te.sizes) == null ? void 0 : I0.md), field: { ...((F0 = te.sizes) == null ? void 0 : F0.md.field), ...ml } },
		sm: { ...((j0 = te.sizes) == null ? void 0 : j0.sm), field: { ...((z0 = te.sizes) == null ? void 0 : z0.sm.field), ...ml } },
		xs: {
			...((L0 = te.sizes) == null ? void 0 : L0.xs),
			field: { ...((D0 = te.sizes) == null ? void 0 : D0.xs.field), ...ml },
			icon: { insetEnd: '1' },
		},
	},
	t3 = YM({ baseStyle: JM, sizes: e3, variants: te.variants, defaultProps: te.defaultProps }),
	zd = D('skeleton-start-color'),
	Ld = D('skeleton-end-color'),
	n3 = {
		[zd.variable]: 'colors.gray.100',
		[Ld.variable]: 'colors.gray.400',
		_dark: { [zd.variable]: 'colors.gray.800', [Ld.variable]: 'colors.gray.600' },
		background: zd.reference,
		borderColor: Ld.reference,
		opacity: 0.7,
		borderRadius: 'sm',
	},
	r3 = { baseStyle: n3 },
	Dd = D('skip-link-bg'),
	o3 = {
		borderRadius: 'md',
		fontWeight: 'semibold',
		_focusVisible: {
			boxShadow: 'outline',
			padding: '4',
			position: 'fixed',
			top: '6',
			insetStart: '6',
			[Dd.variable]: 'colors.white',
			_dark: { [Dd.variable]: 'colors.gray.700' },
			bg: Dd.reference,
		},
	},
	i3 = { baseStyle: o3 },
	{ defineMultiStyleConfig: a3, definePartsStyle: Ac } = he(WR.keys),
	es = D('slider-thumb-size'),
	ts = D('slider-track-size'),
	ar = D('slider-bg'),
	s3 = e => {
		const { orientation: t } = e
		return {
			display: 'inline-block',
			position: 'relative',
			cursor: 'pointer',
			_disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
			...hm({ orientation: t, vertical: { h: '100%' }, horizontal: { w: '100%' } }),
		}
	},
	l3 = e => ({
		...hm({ orientation: e.orientation, horizontal: { h: ts.reference }, vertical: { w: ts.reference } }),
		overflow: 'hidden',
		borderRadius: 'sm',
		[ar.variable]: 'colors.gray.200',
		_dark: { [ar.variable]: 'colors.whiteAlpha.200' },
		_disabled: { [ar.variable]: 'colors.gray.300', _dark: { [ar.variable]: 'colors.whiteAlpha.300' } },
		bg: ar.reference,
	}),
	u3 = e => {
		const { orientation: t } = e
		return {
			...hm({
				orientation: t,
				vertical: { left: '50%', transform: 'translateX(-50%)', _active: { transform: 'translateX(-50%) scale(1.15)' } },
				horizontal: { top: '50%', transform: 'translateY(-50%)', _active: { transform: 'translateY(-50%) scale(1.15)' } },
			}),
			w: es.reference,
			h: es.reference,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			outline: 0,
			zIndex: 1,
			borderRadius: 'full',
			bg: 'white',
			boxShadow: 'base',
			border: '1px solid',
			borderColor: 'transparent',
			transitionProperty: 'transform',
			transitionDuration: 'normal',
			_focusVisible: { boxShadow: 'outline' },
			_disabled: { bg: 'gray.300' },
		}
	},
	c3 = e => {
		const { colorScheme: t } = e
		return {
			width: 'inherit',
			height: 'inherit',
			[ar.variable]: `colors.${t}.500`,
			_dark: { [ar.variable]: `colors.${t}.200` },
			bg: ar.reference,
		}
	},
	d3 = Ac(e => ({ container: s3(e), track: l3(e), thumb: u3(e), filledTrack: c3(e) })),
	f3 = Ac({ container: { [es.variable]: 'sizes.4', [ts.variable]: 'sizes.1' } }),
	h3 = Ac({ container: { [es.variable]: 'sizes.3.5', [ts.variable]: 'sizes.1' } }),
	p3 = Ac({ container: { [es.variable]: 'sizes.2.5', [ts.variable]: 'sizes.0.5' } }),
	m3 = { lg: f3, md: h3, sm: p3 },
	v3 = a3({ baseStyle: d3, sizes: m3, defaultProps: { size: 'md', colorScheme: 'blue' } }),
	Vr = De('spinner-size'),
	g3 = { width: [Vr.reference], height: [Vr.reference] },
	y3 = {
		xs: { [Vr.variable]: 'sizes.3' },
		sm: { [Vr.variable]: 'sizes.4' },
		md: { [Vr.variable]: 'sizes.6' },
		lg: { [Vr.variable]: 'sizes.8' },
		xl: { [Vr.variable]: 'sizes.12' },
	},
	b3 = { baseStyle: g3, sizes: y3, defaultProps: { size: 'md' } },
	{ defineMultiStyleConfig: x3, definePartsStyle: BS } = he(UR.keys),
	S3 = { fontWeight: 'medium' },
	w3 = { opacity: 0.8, marginBottom: '2' },
	k3 = { verticalAlign: 'baseline', fontWeight: 'semibold' },
	C3 = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
	_3 = BS({ container: {}, label: S3, helpText: w3, number: k3, icon: C3 }),
	P3 = { md: BS({ label: { fontSize: 'sm' }, helpText: { fontSize: 'sm' }, number: { fontSize: '2xl' } }) },
	T3 = x3({ baseStyle: _3, sizes: P3, defaultProps: { size: 'md' } }),
	Od = D('kbd-bg'),
	E3 = {
		[Od.variable]: 'colors.gray.100',
		_dark: { [Od.variable]: 'colors.whiteAlpha.100' },
		bg: Od.reference,
		borderRadius: 'md',
		borderWidth: '1px',
		borderBottomWidth: '3px',
		fontSize: '0.8em',
		fontWeight: 'bold',
		lineHeight: 'normal',
		px: '0.4em',
		whiteSpace: 'nowrap',
	},
	$3 = { baseStyle: E3 },
	R3 = {
		transitionProperty: 'common',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		cursor: 'pointer',
		textDecoration: 'none',
		outline: 'none',
		color: 'inherit',
		_hover: { textDecoration: 'underline' },
		_focusVisible: { boxShadow: 'outline' },
	},
	A3 = { baseStyle: R3 },
	{ defineMultiStyleConfig: M3, definePartsStyle: I3 } = he(jR.keys),
	F3 = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
	j3 = I3({ icon: F3 }),
	z3 = M3({ baseStyle: j3 }),
	{ defineMultiStyleConfig: L3, definePartsStyle: D3 } = he(zR.keys),
	cn = D('menu-bg'),
	Bd = D('menu-shadow'),
	O3 = {
		[cn.variable]: '#fff',
		[Bd.variable]: 'shadows.sm',
		_dark: { [cn.variable]: 'colors.gray.700', [Bd.variable]: 'shadows.dark-lg' },
		color: 'inherit',
		minW: '3xs',
		py: '2',
		zIndex: 1,
		borderRadius: 'md',
		borderWidth: '1px',
		bg: cn.reference,
		boxShadow: Bd.reference,
	},
	B3 = {
		py: '1.5',
		px: '3',
		transitionProperty: 'background',
		transitionDuration: 'ultra-fast',
		transitionTimingFunction: 'ease-in',
		_focus: { [cn.variable]: 'colors.gray.100', _dark: { [cn.variable]: 'colors.whiteAlpha.100' } },
		_active: { [cn.variable]: 'colors.gray.200', _dark: { [cn.variable]: 'colors.whiteAlpha.200' } },
		_expanded: { [cn.variable]: 'colors.gray.100', _dark: { [cn.variable]: 'colors.whiteAlpha.100' } },
		_disabled: { opacity: 0.4, cursor: 'not-allowed' },
		bg: cn.reference,
	},
	N3 = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
	V3 = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
	W3 = { opacity: 0.6 },
	U3 = { border: 0, borderBottom: '1px solid', borderColor: 'inherit', my: '2', opacity: 0.6 },
	H3 = { transitionProperty: 'common', transitionDuration: 'normal' },
	K3 = D3({ button: H3, list: O3, item: B3, groupTitle: N3, icon: V3, command: W3, divider: U3 }),
	G3 = L3({ baseStyle: K3 }),
	{ defineMultiStyleConfig: q3, definePartsStyle: Ch } = he(LR.keys),
	Nd = D('modal-bg'),
	Vd = D('modal-shadow'),
	Y3 = { bg: 'blackAlpha.600', zIndex: 'modal' },
	X3 = e => {
		const { isCentered: t, scrollBehavior: n } = e
		return {
			display: 'flex',
			zIndex: 'modal',
			justifyContent: 'center',
			alignItems: t ? 'center' : 'flex-start',
			overflow: n === 'inside' ? 'hidden' : 'auto',
			overscrollBehaviorY: 'none',
		}
	},
	Q3 = e => {
		const { isCentered: t, scrollBehavior: n } = e
		return {
			borderRadius: 'md',
			color: 'inherit',
			my: t ? 'auto' : '16',
			mx: t ? 'auto' : void 0,
			zIndex: 'modal',
			maxH: n === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
			[Nd.variable]: 'colors.white',
			[Vd.variable]: 'shadows.lg',
			_dark: { [Nd.variable]: 'colors.gray.700', [Vd.variable]: 'shadows.dark-lg' },
			bg: Nd.reference,
			boxShadow: Vd.reference,
		}
	},
	Z3 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
	J3 = { position: 'absolute', top: '2', insetEnd: '3' },
	e4 = e => {
		const { scrollBehavior: t } = e
		return { px: '6', py: '2', flex: '1', overflow: t === 'inside' ? 'auto' : void 0 }
	},
	t4 = { px: '6', py: '4' },
	n4 = Ch(e => ({
		overlay: Y3,
		dialogContainer: dt(X3, e),
		dialog: dt(Q3, e),
		header: Z3,
		closeButton: J3,
		body: dt(e4, e),
		footer: t4,
	}))
function Yt(e) {
	return Ch(e === 'full' ? { dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } } : { dialog: { maxW: e } })
}
var r4 = {
		xs: Yt('xs'),
		sm: Yt('sm'),
		md: Yt('md'),
		lg: Yt('lg'),
		xl: Yt('xl'),
		'2xl': Yt('2xl'),
		'3xl': Yt('3xl'),
		'4xl': Yt('4xl'),
		'5xl': Yt('5xl'),
		'6xl': Yt('6xl'),
		full: Yt('full'),
	},
	o4 = q3({ baseStyle: n4, sizes: r4, defaultProps: { size: 'md' } }),
	{ defineMultiStyleConfig: i4, definePartsStyle: NS } = he(DR.keys),
	mm = De('number-input-stepper-width'),
	VS = De('number-input-input-padding'),
	a4 = Rn(mm).add('0.5rem').toString(),
	Wd = De('number-input-bg'),
	Ud = De('number-input-color'),
	Hd = De('number-input-border-color'),
	s4 = { [mm.variable]: 'sizes.6', [VS.variable]: a4 },
	l4 = e => {
		var t, n
		return (n = (t = dt(te.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {}
	},
	u4 = { width: mm.reference },
	c4 = {
		borderStart: '1px solid',
		borderStartColor: Hd.reference,
		color: Ud.reference,
		bg: Wd.reference,
		[Ud.variable]: 'colors.chakra-body-text',
		[Hd.variable]: 'colors.chakra-border-color',
		_dark: { [Ud.variable]: 'colors.whiteAlpha.800', [Hd.variable]: 'colors.whiteAlpha.300' },
		_active: { [Wd.variable]: 'colors.gray.200', _dark: { [Wd.variable]: 'colors.whiteAlpha.300' } },
		_disabled: { opacity: 0.4, cursor: 'not-allowed' },
	},
	d4 = NS(e => {
		var t
		return { root: s4, field: (t = dt(l4, e)) != null ? t : {}, stepperGroup: u4, stepper: c4 }
	})
function vl(e) {
	var t, n, r
	const o = (t = te.sizes) == null ? void 0 : t[e],
		i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
		a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : 'md',
		s = jS.fontSizes[a]
	return NS({
		field: { ...o.field, paddingInlineEnd: VS.reference, verticalAlign: 'top' },
		stepper: {
			fontSize: Rn(s).multiply(0.75).toString(),
			_first: { borderTopEndRadius: i[e] },
			_last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 },
		},
	})
}
var f4 = { xs: vl('xs'), sm: vl('sm'), md: vl('md'), lg: vl('lg') },
	h4 = i4({ baseStyle: d4, sizes: f4, variants: te.variants, defaultProps: te.defaultProps }),
	O0,
	p4 = { ...((O0 = te.baseStyle) == null ? void 0 : O0.field), textAlign: 'center' },
	m4 = {
		lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
		md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
		sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
		xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
	},
	B0,
	N0,
	v4 = {
		outline: e => {
			var t, n, r
			return (r = (n = dt((t = te.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {}
		},
		flushed: e => {
			var t, n, r
			return (r = (n = dt((t = te.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {}
		},
		filled: e => {
			var t, n, r
			return (r = (n = dt((t = te.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {}
		},
		unstyled: (N0 = (B0 = te.variants) == null ? void 0 : B0.unstyled.field) != null ? N0 : {},
	},
	g4 = { baseStyle: p4, sizes: m4, variants: v4, defaultProps: te.defaultProps },
	{ defineMultiStyleConfig: y4, definePartsStyle: b4 } = he(OR.keys),
	gl = De('popper-bg'),
	x4 = De('popper-arrow-bg'),
	V0 = De('popper-arrow-shadow-color'),
	S4 = { zIndex: 10 },
	w4 = {
		[gl.variable]: 'colors.white',
		bg: gl.reference,
		[x4.variable]: gl.reference,
		[V0.variable]: 'colors.gray.200',
		_dark: { [gl.variable]: 'colors.gray.700', [V0.variable]: 'colors.whiteAlpha.300' },
		width: 'xs',
		border: '1px solid',
		borderColor: 'inherit',
		borderRadius: 'md',
		boxShadow: 'sm',
		zIndex: 'inherit',
		_focusVisible: { outline: 0, boxShadow: 'outline' },
	},
	k4 = { px: 3, py: 2, borderBottomWidth: '1px' },
	C4 = { px: 3, py: 2 },
	_4 = { px: 3, py: 2, borderTopWidth: '1px' },
	P4 = { position: 'absolute', borderRadius: 'md', top: 1, insetEnd: 2, padding: 2 },
	T4 = b4({ popper: S4, content: w4, header: k4, body: C4, footer: _4, closeButton: P4 }),
	E4 = y4({ baseStyle: T4 }),
	{ definePartsStyle: _h, defineMultiStyleConfig: $4 } = he(RR.keys),
	Kd = D('drawer-bg'),
	Gd = D('drawer-box-shadow')
function xo(e) {
	return _h(e === 'full' ? { dialog: { maxW: '100vw', h: '100vh' } } : { dialog: { maxW: e } })
}
var R4 = { bg: 'blackAlpha.600', zIndex: 'modal' },
	A4 = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
	M4 = e => {
		const { isFullHeight: t } = e
		return {
			...(t && { height: '100vh' }),
			zIndex: 'modal',
			maxH: '100vh',
			color: 'inherit',
			[Kd.variable]: 'colors.white',
			[Gd.variable]: 'shadows.lg',
			_dark: { [Kd.variable]: 'colors.gray.700', [Gd.variable]: 'shadows.dark-lg' },
			bg: Kd.reference,
			boxShadow: Gd.reference,
		}
	},
	I4 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
	F4 = { position: 'absolute', top: '2', insetEnd: '3' },
	j4 = { px: '6', py: '2', flex: '1', overflow: 'auto' },
	z4 = { px: '6', py: '4' },
	L4 = _h(e => ({ overlay: R4, dialogContainer: A4, dialog: dt(M4, e), header: I4, closeButton: F4, body: j4, footer: z4 })),
	D4 = { xs: xo('xs'), sm: xo('md'), md: xo('lg'), lg: xo('2xl'), xl: xo('4xl'), full: xo('full') },
	O4 = $4({ baseStyle: L4, sizes: D4, defaultProps: { size: 'xs' } }),
	{ definePartsStyle: B4, defineMultiStyleConfig: N4 } = he(AR.keys),
	V4 = { borderRadius: 'md', py: '1', transitionProperty: 'common', transitionDuration: 'normal' },
	W4 = {
		borderRadius: 'md',
		py: '1',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		width: 'full',
		_focusVisible: { boxShadow: 'outline' },
		_placeholder: { opacity: 0.6 },
	},
	U4 = {
		borderRadius: 'md',
		py: '1',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		width: 'full',
		_focusVisible: { boxShadow: 'outline' },
		_placeholder: { opacity: 0.6 },
	},
	H4 = B4({ preview: V4, input: W4, textarea: U4 }),
	K4 = N4({ baseStyle: H4 }),
	{ definePartsStyle: G4, defineMultiStyleConfig: q4 } = he(MR.keys),
	ni = D('form-control-color'),
	Y4 = { marginStart: '1', [ni.variable]: 'colors.red.500', _dark: { [ni.variable]: 'colors.red.300' }, color: ni.reference },
	X4 = {
		mt: '2',
		[ni.variable]: 'colors.gray.600',
		_dark: { [ni.variable]: 'colors.whiteAlpha.600' },
		color: ni.reference,
		lineHeight: 'normal',
		fontSize: 'sm',
	},
	Q4 = G4({ container: { width: '100%', position: 'relative' }, requiredIndicator: Y4, helperText: X4 }),
	Z4 = q4({ baseStyle: Q4 }),
	{ definePartsStyle: J4, defineMultiStyleConfig: eI } = he(IR.keys),
	ri = D('form-error-color'),
	tI = {
		[ri.variable]: 'colors.red.500',
		_dark: { [ri.variable]: 'colors.red.300' },
		color: ri.reference,
		mt: '2',
		fontSize: 'sm',
		lineHeight: 'normal',
	},
	nI = { marginEnd: '0.5em', [ri.variable]: 'colors.red.500', _dark: { [ri.variable]: 'colors.red.300' }, color: ri.reference },
	rI = J4({ text: tI, icon: nI }),
	oI = eI({ baseStyle: rI }),
	iI = {
		fontSize: 'md',
		marginEnd: '3',
		mb: '2',
		fontWeight: 'medium',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		opacity: 1,
		_disabled: { opacity: 0.4 },
	},
	aI = { baseStyle: iI },
	sI = { fontFamily: 'heading', fontWeight: 'bold' },
	lI = {
		'4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
		'3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
		'2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
		xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
		lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
		md: { fontSize: 'xl', lineHeight: 1.2 },
		sm: { fontSize: 'md', lineHeight: 1.2 },
		xs: { fontSize: 'sm', lineHeight: 1.2 },
	},
	uI = { baseStyle: sI, sizes: lI, defaultProps: { size: 'xl' } },
	{ defineMultiStyleConfig: cI, definePartsStyle: dI } = he(ER.keys),
	qd = D('breadcrumb-link-decor'),
	fI = {
		transitionProperty: 'common',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		outline: 'none',
		color: 'inherit',
		textDecoration: qd.reference,
		[qd.variable]: 'none',
		'&:not([aria-current=page])': {
			cursor: 'pointer',
			_hover: { [qd.variable]: 'underline' },
			_focusVisible: { boxShadow: 'outline' },
		},
	},
	hI = dI({ link: fI }),
	pI = cI({ baseStyle: hI }),
	mI = {
		lineHeight: '1.2',
		borderRadius: 'md',
		fontWeight: 'semibold',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		_focusVisible: { boxShadow: 'outline' },
		_disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
		_hover: { _disabled: { bg: 'initial' } },
	},
	WS = e => {
		const { colorScheme: t, theme: n } = e
		if (t === 'gray')
			return {
				color: L('gray.800', 'whiteAlpha.900')(e),
				_hover: { bg: L('gray.100', 'whiteAlpha.200')(e) },
				_active: { bg: L('gray.200', 'whiteAlpha.300')(e) },
			}
		const r = gi(`${t}.200`, 0.12)(n),
			o = gi(`${t}.200`, 0.24)(n)
		return {
			color: L(`${t}.600`, `${t}.200`)(e),
			bg: 'transparent',
			_hover: { bg: L(`${t}.50`, r)(e) },
			_active: { bg: L(`${t}.100`, o)(e) },
		}
	},
	vI = e => {
		const { colorScheme: t } = e,
			n = L('gray.200', 'whiteAlpha.300')(e)
		return {
			border: '1px solid',
			borderColor: t === 'gray' ? n : 'currentColor',
			'.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)': { marginEnd: '-1px' },
			'.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)': { marginBottom: '-1px' },
			...dt(WS, e),
		}
	},
	gI = {
		yellow: { bg: 'yellow.400', color: 'black', hoverBg: 'yellow.500', activeBg: 'yellow.600' },
		cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' },
	},
	yI = e => {
		var t
		const { colorScheme: n } = e
		if (n === 'gray') {
			const l = L('gray.100', 'whiteAlpha.200')(e)
			return {
				bg: l,
				color: L('gray.800', 'whiteAlpha.900')(e),
				_hover: { bg: L('gray.200', 'whiteAlpha.300')(e), _disabled: { bg: l } },
				_active: { bg: L('gray.300', 'whiteAlpha.400')(e) },
			}
		}
		const {
				bg: r = `${n}.500`,
				color: o = 'white',
				hoverBg: i = `${n}.600`,
				activeBg: a = `${n}.700`,
			} = (t = gI[n]) != null ? t : {},
			s = L(r, `${n}.200`)(e)
		return {
			bg: s,
			color: L(o, 'gray.800')(e),
			_hover: { bg: L(i, `${n}.300`)(e), _disabled: { bg: s } },
			_active: { bg: L(a, `${n}.400`)(e) },
		}
	},
	bI = e => {
		const { colorScheme: t } = e
		return {
			padding: 0,
			height: 'auto',
			lineHeight: 'normal',
			verticalAlign: 'baseline',
			color: L(`${t}.500`, `${t}.200`)(e),
			_hover: { textDecoration: 'underline', _disabled: { textDecoration: 'none' } },
			_active: { color: L(`${t}.700`, `${t}.500`)(e) },
		}
	},
	xI = { bg: 'none', color: 'inherit', display: 'inline', lineHeight: 'inherit', m: '0', p: '0' },
	SI = { ghost: WS, outline: vI, solid: yI, link: bI, unstyled: xI },
	wI = {
		lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
		md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
		sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
		xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' },
	},
	kI = { baseStyle: mI, variants: SI, sizes: wI, defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' } },
	{ definePartsStyle: Jr, defineMultiStyleConfig: CI } = he(YR.keys),
	Lu = D('card-bg'),
	Ln = D('card-padding'),
	US = D('card-shadow'),
	Yl = D('card-radius'),
	HS = D('card-border-width', '0'),
	KS = D('card-border-color'),
	_I = Jr({
		container: {
			[Lu.variable]: 'colors.chakra-body-bg',
			backgroundColor: Lu.reference,
			boxShadow: US.reference,
			borderRadius: Yl.reference,
			color: 'chakra-body-text',
			borderWidth: HS.reference,
			borderColor: KS.reference,
		},
		body: { padding: Ln.reference, flex: '1 1 0%' },
		header: { padding: Ln.reference },
		footer: { padding: Ln.reference },
	}),
	PI = {
		sm: Jr({ container: { [Yl.variable]: 'radii.base', [Ln.variable]: 'space.3' } }),
		md: Jr({ container: { [Yl.variable]: 'radii.md', [Ln.variable]: 'space.5' } }),
		lg: Jr({ container: { [Yl.variable]: 'radii.xl', [Ln.variable]: 'space.7' } }),
	},
	TI = {
		elevated: Jr({ container: { [US.variable]: 'shadows.base', _dark: { [Lu.variable]: 'colors.gray.700' } } }),
		outline: Jr({ container: { [HS.variable]: '1px', [KS.variable]: 'colors.chakra-border-color' } }),
		filled: Jr({ container: { [Lu.variable]: 'colors.chakra-subtle-bg' } }),
		unstyled: { body: { [Ln.variable]: 0 }, header: { [Ln.variable]: 0 }, footer: { [Ln.variable]: 0 } },
	},
	EI = CI({ baseStyle: _I, variants: TI, sizes: PI, defaultProps: { variant: 'elevated', size: 'md' } }),
	Ca = De('close-button-size'),
	qi = De('close-button-bg'),
	$I = {
		w: [Ca.reference],
		h: [Ca.reference],
		borderRadius: 'md',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		_disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
		_hover: { [qi.variable]: 'colors.blackAlpha.100', _dark: { [qi.variable]: 'colors.whiteAlpha.100' } },
		_active: { [qi.variable]: 'colors.blackAlpha.200', _dark: { [qi.variable]: 'colors.whiteAlpha.200' } },
		_focusVisible: { boxShadow: 'outline' },
		bg: qi.reference,
	},
	RI = {
		lg: { [Ca.variable]: 'sizes.10', fontSize: 'md' },
		md: { [Ca.variable]: 'sizes.8', fontSize: 'xs' },
		sm: { [Ca.variable]: 'sizes.6', fontSize: '2xs' },
	},
	AI = { baseStyle: $I, sizes: RI, defaultProps: { size: 'md' } },
	{ variants: MI, defaultProps: II } = wa,
	FI = {
		fontFamily: 'mono',
		fontSize: 'sm',
		px: '0.2em',
		borderRadius: 'sm',
		bg: Me.bg.reference,
		color: Me.color.reference,
		boxShadow: Me.shadow.reference,
	},
	jI = { baseStyle: FI, variants: MI, defaultProps: II },
	zI = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
	LI = { baseStyle: zI },
	DI = { opacity: 0.6, borderColor: 'inherit' },
	OI = { borderStyle: 'solid' },
	BI = { borderStyle: 'dashed' },
	NI = { solid: OI, dashed: BI },
	VI = { baseStyle: DI, variants: NI, defaultProps: { variant: 'solid' } },
	{ definePartsStyle: WI, defineMultiStyleConfig: UI } = he(_R.keys),
	HI = { borderTopWidth: '1px', borderColor: 'inherit', _last: { borderBottomWidth: '1px' } },
	KI = {
		transitionProperty: 'common',
		transitionDuration: 'normal',
		fontSize: 'md',
		_focusVisible: { boxShadow: 'outline' },
		_hover: { bg: 'blackAlpha.50' },
		_disabled: { opacity: 0.4, cursor: 'not-allowed' },
		px: '4',
		py: '2',
	},
	GI = { pt: '2', px: '4', pb: '5' },
	qI = { fontSize: '1.25em' },
	YI = WI({ container: HI, button: KI, panel: GI, icon: qI }),
	XI = UI({ baseStyle: YI }),
	{ definePartsStyle: Ss, defineMultiStyleConfig: QI } = he(PR.keys),
	Et = D('alert-fg'),
	Gn = D('alert-bg'),
	ZI = Ss({
		container: { bg: Gn.reference, px: '4', py: '3' },
		title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
		description: { lineHeight: '6' },
		icon: { color: Et.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
		spinner: { color: Et.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' },
	})
function vm(e) {
	const { theme: t, colorScheme: n } = e,
		r = gi(`${n}.200`, 0.16)(t)
	return { light: `colors.${n}.100`, dark: r }
}
var JI = Ss(e => {
		const { colorScheme: t } = e,
			n = vm(e)
		return {
			container: {
				[Et.variable]: `colors.${t}.600`,
				[Gn.variable]: n.light,
				_dark: { [Et.variable]: `colors.${t}.200`, [Gn.variable]: n.dark },
			},
		}
	}),
	eF = Ss(e => {
		const { colorScheme: t } = e,
			n = vm(e)
		return {
			container: {
				[Et.variable]: `colors.${t}.600`,
				[Gn.variable]: n.light,
				_dark: { [Et.variable]: `colors.${t}.200`, [Gn.variable]: n.dark },
				paddingStart: '3',
				borderStartWidth: '4px',
				borderStartColor: Et.reference,
			},
		}
	}),
	tF = Ss(e => {
		const { colorScheme: t } = e,
			n = vm(e)
		return {
			container: {
				[Et.variable]: `colors.${t}.600`,
				[Gn.variable]: n.light,
				_dark: { [Et.variable]: `colors.${t}.200`, [Gn.variable]: n.dark },
				pt: '2',
				borderTopWidth: '4px',
				borderTopColor: Et.reference,
			},
		}
	}),
	nF = Ss(e => {
		const { colorScheme: t } = e
		return {
			container: {
				[Et.variable]: 'colors.white',
				[Gn.variable]: `colors.${t}.600`,
				_dark: { [Et.variable]: 'colors.gray.900', [Gn.variable]: `colors.${t}.200` },
				color: Et.reference,
			},
		}
	}),
	rF = { subtle: JI, 'left-accent': eF, 'top-accent': tF, solid: nF },
	oF = QI({ baseStyle: ZI, variants: rF, defaultProps: { variant: 'subtle', colorScheme: 'blue' } }),
	{ definePartsStyle: GS, defineMultiStyleConfig: iF } = he(TR.keys),
	oi = D('avatar-border-color'),
	_a = D('avatar-bg'),
	ns = D('avatar-font-size'),
	yi = D('avatar-size'),
	aF = {
		borderRadius: 'full',
		border: '0.2em solid',
		borderColor: oi.reference,
		[oi.variable]: 'white',
		_dark: { [oi.variable]: 'colors.gray.800' },
	},
	sF = {
		bg: _a.reference,
		fontSize: ns.reference,
		width: yi.reference,
		height: yi.reference,
		lineHeight: '1',
		[_a.variable]: 'colors.gray.200',
		_dark: { [_a.variable]: 'colors.whiteAlpha.400' },
	},
	lF = e => {
		const { name: t, theme: n } = e,
			r = t ? mA({ string: t }) : 'colors.gray.400',
			o = hA(r)(n)
		let i = 'white'
		return (
			o || (i = 'gray.800'),
			{
				bg: _a.reference,
				fontSize: ns.reference,
				color: i,
				borderColor: oi.reference,
				verticalAlign: 'top',
				width: yi.reference,
				height: yi.reference,
				'&:not([data-loaded])': { [_a.variable]: r },
				[oi.variable]: 'colors.white',
				_dark: { [oi.variable]: 'colors.gray.800' },
			}
		)
	},
	uF = { fontSize: ns.reference, lineHeight: '1' },
	cF = GS(e => ({ badge: dt(aF, e), excessLabel: dt(sF, e), container: dt(lF, e), label: uF }))
function er(e) {
	const t = e !== '100%' ? LS[e] : void 0
	return GS({
		container: { [yi.variable]: t ?? e, [ns.variable]: `calc(${t ?? e} / 2.5)` },
		excessLabel: { [yi.variable]: t ?? e, [ns.variable]: `calc(${t ?? e} / 2.5)` },
	})
}
var dF = { '2xs': er(4), xs: er(6), sm: er(8), md: er(12), lg: er(16), xl: er(24), '2xl': er(32), full: er('100%') },
	fF = iF({ baseStyle: cF, sizes: dF, defaultProps: { size: 'md' } }),
	hF = {
		Accordion: XI,
		Alert: oF,
		Avatar: fF,
		Badge: wa,
		Breadcrumb: pI,
		Button: kI,
		Checkbox: zu,
		CloseButton: AI,
		Code: jI,
		Container: LI,
		Divider: VI,
		Drawer: O4,
		Editable: K4,
		Form: Z4,
		FormError: oI,
		FormLabel: aI,
		Heading: uI,
		Input: te,
		Kbd: $3,
		Link: A3,
		List: z3,
		Menu: G3,
		Modal: o4,
		NumberInput: h4,
		PinInput: g4,
		Popover: E4,
		Progress: jM,
		Radio: qM,
		Select: t3,
		Skeleton: r3,
		SkipLink: i3,
		Slider: v3,
		Spinner: b3,
		Stat: T3,
		Switch: AA,
		Table: DA,
		Tabs: JA,
		Tag: fM,
		Textarea: CM,
		Tooltip: TM,
		Card: EI,
		Stepper: CR,
	},
	pF = {
		colors: {
			'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
			'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
			'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
			'chakra-inverse-text': { _light: 'white', _dark: 'gray.800' },
			'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
			'chakra-subtle-text': { _light: 'gray.600', _dark: 'gray.400' },
			'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
		},
	},
	mF = {
		global: {
			body: {
				fontFamily: 'body',
				color: 'chakra-body-text',
				bg: 'chakra-body-bg',
				transitionProperty: 'background-color',
				transitionDuration: 'normal',
				lineHeight: 'base',
			},
			'*::placeholder': { color: 'chakra-placeholder-color' },
			'*, *::before, &::after': { borderColor: 'chakra-border-color' },
		},
	},
	vF = 'ltr',
	gF = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
	yF = { semanticTokens: pF, direction: vF, ...SR, components: hF, styles: mF, config: gF }
function bF() {
	return !!(typeof window < 'u' && window.document && window.document.createElement)
}
var xF = bF()
function SF(e, t) {
	const n = {}
	return (
		Object.keys(e).forEach(r => {
			t.includes(r) || (n[r] = e[r])
		}),
		n
	)
}
function wF(e, t, n, r) {
	const o = typeof t == 'string' ? t.split('.') : [t]
	for (r = 0; r < o.length && e; r += 1) e = e[o[r]]
	return e === void 0 ? n : e
}
var kF = e => {
		const t = new WeakMap()
		return (r, o, i, a) => {
			if (typeof r > 'u') return e(r, o, i)
			t.has(r) || t.set(r, new Map())
			const s = t.get(r)
			if (s.has(o)) return s.get(o)
			const l = e(r, o, i, a)
			return s.set(o, l), l
		}
	},
	qS = kF(wF)
function YS(e, t) {
	const n = {}
	return (
		Object.keys(e).forEach(r => {
			const o = e[r]
			t(o, r, e) && (n[r] = o)
		}),
		n
	)
}
var XS = e => YS(e, t => t != null)
function CF(e) {
	return typeof e == 'function'
}
function QS(e, ...t) {
	return CF(e) ? e(...t) : e
}
function _F(...e) {
	return function (n) {
		e.some(r => (r == null || r(n), n == null ? void 0 : n.defaultPrevented))
	}
}
var PF = typeof Element < 'u',
	TF = typeof Map == 'function',
	EF = typeof Set == 'function',
	$F = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function Xl(e, t) {
	if (e === t) return !0
	if (e && t && typeof e == 'object' && typeof t == 'object') {
		if (e.constructor !== t.constructor) return !1
		var n, r, o
		if (Array.isArray(e)) {
			if (((n = e.length), n != t.length)) return !1
			for (r = n; r-- !== 0; ) if (!Xl(e[r], t[r])) return !1
			return !0
		}
		var i
		if (TF && e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1
			for (i = e.entries(); !(r = i.next()).done; ) if (!t.has(r.value[0])) return !1
			for (i = e.entries(); !(r = i.next()).done; ) if (!Xl(r.value[1], t.get(r.value[0]))) return !1
			return !0
		}
		if (EF && e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1
			for (i = e.entries(); !(r = i.next()).done; ) if (!t.has(r.value[0])) return !1
			return !0
		}
		if ($F && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
			if (((n = e.length), n != t.length)) return !1
			for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1
			return !0
		}
		if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags
		if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == 'function' && typeof t.valueOf == 'function')
			return e.valueOf() === t.valueOf()
		if (e.toString !== Object.prototype.toString && typeof e.toString == 'function' && typeof t.toString == 'function')
			return e.toString() === t.toString()
		if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1
		for (r = n; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1
		if (PF && e instanceof Element) return !1
		for (r = n; r-- !== 0; )
			if (!((o[r] === '_owner' || o[r] === '__v' || o[r] === '__o') && e.$$typeof) && !Xl(e[o[r]], t[o[r]])) return !1
		return !0
	}
	return e !== e && t !== t
}
var RF = function (t, n) {
	try {
		return Xl(t, n)
	} catch (r) {
		if ((r.message || '').match(/stack|recursion/i)) return console.warn('react-fast-compare cannot handle circular refs'), !1
		throw r
	}
}
const AF = rp(RF)
function ZS(e, t = {}) {
	var n
	const { styleConfig: r, ...o } = t,
		{ theme: i, colorMode: a } = TS(),
		s = e ? qS(i, `components.${e}`) : void 0,
		l = r || s,
		u = gn({ theme: i, colorMode: a }, (n = l == null ? void 0 : l.defaultProps) != null ? n : {}, XS(SF(o, ['children']))),
		d = b.useRef({})
	if (l) {
		const f = Q$(l)(u)
		AF(d.current, f) || (d.current = f)
	}
	return d.current
}
function Tr(e, t = {}) {
	return ZS(e, t)
}
function Ti(e, t = {}) {
	return ZS(e, t)
}
var MF = new Set([
		...O$,
		'textStyle',
		'layerStyle',
		'apply',
		'noOfLines',
		'focusBorderColor',
		'errorBorderColor',
		'as',
		'__css',
		'css',
		'sx',
	]),
	IF = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate'])
function FF(e) {
	return IF.has(e) || !MF.has(e)
}
function jF(e, ...t) {
	if (e == null) throw new TypeError('Cannot convert undefined or null to object')
	const n = { ...e }
	for (const r of t)
		if (r != null) for (const o in r) Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], (n[o] = r[o]))
	return n
}
var zF =
		/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
	LF = uS(function (e) {
		return zF.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
	}),
	DF = LF,
	OF = function (t) {
		return t !== 'theme'
	},
	W0 = function (t) {
		return typeof t == 'string' && t.charCodeAt(0) > 96 ? DF : OF
	},
	U0 = function (t, n, r) {
		var o
		if (n) {
			var i = n.shouldForwardProp
			o =
				t.__emotion_forwardProp && i
					? function (a) {
							return t.__emotion_forwardProp(a) && i(a)
					  }
					: i
		}
		return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o
	},
	BF = !1,
	NF = function (t) {
		var n = t.cache,
			r = t.serialized,
			o = t.isStringTag
		return (
			mS(n, r, o),
			v5(function () {
				return vS(n, r, o)
			}),
			null
		)
	},
	VF = function e(t, n) {
		var r = t.__emotion_real === t,
			o = (r && t.__emotion_base) || t,
			i,
			a
		n !== void 0 && ((i = n.label), (a = n.target))
		var s = U0(t, n, r),
			l = s || W0(o),
			u = !l('as')
		return function () {
			var d = arguments,
				c = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
			if ((i !== void 0 && c.push('label:' + i + ';'), d[0] == null || d[0].raw === void 0)) c.push.apply(c, d)
			else {
				c.push(d[0][0])
				for (var f = d.length, m = 1; m < f; m++) c.push(d[m], d[0][m])
			}
			var y = xS(function (g, x, p) {
				var h = (u && g.as) || o,
					v = '',
					k = [],
					C = g
				if (g.theme == null) {
					C = {}
					for (var E in g) C[E] = g[E]
					C.theme = b.useContext(Za)
				}
				typeof g.className == 'string' ? (v = s5(x.registered, k, g.className)) : g.className != null && (v = g.className + ' ')
				var T = im(c.concat(k), x.registered, C)
				;(v += x.key + '-' + T.name), a !== void 0 && (v += ' ' + a)
				var R = u && s === void 0 ? W0(h) : l,
					M = {}
				for (var F in g) (u && F === 'as') || (R(F) && (M[F] = g[F]))
				return (
					(M.className = v),
					p && (M.ref = p),
					b.createElement(
						b.Fragment,
						null,
						b.createElement(NF, { cache: x, serialized: T, isStringTag: typeof h == 'string' }),
						b.createElement(h, M),
					)
				)
			})
			return (
				(y.displayName =
					i !== void 0 ? i : 'Styled(' + (typeof o == 'string' ? o : o.displayName || o.name || 'Component') + ')'),
				(y.defaultProps = t.defaultProps),
				(y.__emotion_real = y),
				(y.__emotion_base = o),
				(y.__emotion_styles = c),
				(y.__emotion_forwardProp = s),
				Object.defineProperty(y, 'toString', {
					value: function () {
						return a === void 0 && BF ? 'NO_COMPONENT_SELECTOR' : '.' + a
					},
				}),
				(y.withComponent = function (g, x) {
					return e(g, so({}, n, x, { shouldForwardProp: U0(y, x, !0) })).apply(void 0, c)
				}),
				y
			)
		}
	},
	WF = [
		'a',
		'abbr',
		'address',
		'area',
		'article',
		'aside',
		'audio',
		'b',
		'base',
		'bdi',
		'bdo',
		'big',
		'blockquote',
		'body',
		'br',
		'button',
		'canvas',
		'caption',
		'cite',
		'code',
		'col',
		'colgroup',
		'data',
		'datalist',
		'dd',
		'del',
		'details',
		'dfn',
		'dialog',
		'div',
		'dl',
		'dt',
		'em',
		'embed',
		'fieldset',
		'figcaption',
		'figure',
		'footer',
		'form',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'head',
		'header',
		'hgroup',
		'hr',
		'html',
		'i',
		'iframe',
		'img',
		'input',
		'ins',
		'kbd',
		'keygen',
		'label',
		'legend',
		'li',
		'link',
		'main',
		'map',
		'mark',
		'marquee',
		'menu',
		'menuitem',
		'meta',
		'meter',
		'nav',
		'noscript',
		'object',
		'ol',
		'optgroup',
		'option',
		'output',
		'p',
		'param',
		'picture',
		'pre',
		'progress',
		'q',
		'rp',
		'rt',
		'ruby',
		's',
		'samp',
		'script',
		'section',
		'select',
		'small',
		'source',
		'span',
		'strong',
		'style',
		'sub',
		'summary',
		'sup',
		'table',
		'tbody',
		'td',
		'textarea',
		'tfoot',
		'th',
		'thead',
		'time',
		'title',
		'tr',
		'track',
		'u',
		'ul',
		'var',
		'video',
		'wbr',
		'circle',
		'clipPath',
		'defs',
		'ellipse',
		'foreignObject',
		'g',
		'image',
		'line',
		'linearGradient',
		'mask',
		'path',
		'pattern',
		'polygon',
		'polyline',
		'radialGradient',
		'rect',
		'stop',
		'svg',
		'text',
		'tspan',
	],
	Du = VF.bind()
WF.forEach(function (e) {
	Du[e] = Du(e)
})
var H0,
	UF = (H0 = Du.default) != null ? H0 : Du,
	HF =
		({ baseStyle: e }) =>
		t => {
			const { theme: n, css: r, __css: o, sx: i, ...a } = t,
				s = YS(a, (c, f) => N$(f)),
				l = QS(e, t),
				u = jF({}, o, l, XS(s), i),
				d = FS(u)(t.theme)
			return r ? [d, r] : d
		}
function Yd(e, t) {
	const { baseStyle: n, ...r } = t ?? {}
	r.shouldForwardProp || (r.shouldForwardProp = FF)
	const o = HF({ baseStyle: n }),
		i = UF(e, r)(o)
	return ru.forwardRef(function (l, u) {
		const { colorMode: d, forced: c } = lm()
		return ru.createElement(i, { ref: u, 'data-theme': c ? d : void 0, ...l })
	})
}
function KF() {
	const e = new Map()
	return new Proxy(Yd, {
		apply(t, n, r) {
			return Yd(...r)
		},
		get(t, n) {
			return e.has(n) || e.set(n, Yd(n)), e.get(n)
		},
	})
}
var V = KF()
function re(e) {
	return b.forwardRef(e)
}
function GF(e = {}) {
	const {
			strict: t = !0,
			errorMessage: n = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
			name: r,
		} = e,
		o = b.createContext(void 0)
	o.displayName = r
	function i() {
		var a
		const s = b.useContext(o)
		if (!s && t) {
			const l = new Error(n)
			throw ((l.name = 'ContextError'), (a = Error.captureStackTrace) == null || a.call(Error, l, i), l)
		}
		return s
	}
	return [o.Provider, i, o]
}
function qF(e) {
	const { cssVarsRoot: t, theme: n, children: r } = e,
		o = b.useMemo(() => D$(n), [n])
	return S.jsxs(b5, { theme: o, children: [S.jsx(YF, { root: t }), r] })
}
function YF({ root: e = ':host, :root' }) {
	const t = [e, '[data-theme]'].join(',')
	return S.jsx(Pc, { styles: n => ({ [t]: n.__cssVars }) })
}
GF({
	name: 'StylesContext',
	errorMessage: 'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
})
function XF() {
	const { colorMode: e } = lm()
	return S.jsx(Pc, {
		styles: t => {
			const n = qS(t, 'styles.global'),
				r = QS(n, { theme: t, colorMode: e })
			return r ? FS(r)(t) : void 0
		},
	})
}
var JS = b.createContext({
	getDocument() {
		return document
	},
	getWindow() {
		return window
	},
})
JS.displayName = 'EnvironmentContext'
function ew(e) {
	const { children: t, environment: n, disabled: r } = e,
		o = b.useRef(null),
		i = b.useMemo(
			() =>
				n || {
					getDocument: () => {
						var s, l
						return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document
					},
					getWindow: () => {
						var s, l
						return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window
					},
				},
			[n],
		),
		a = !r || !n
	return S.jsxs(JS.Provider, { value: i, children: [t, a && S.jsx('span', { id: '__chakra_env', hidden: !0, ref: o })] })
}
ew.displayName = 'EnvironmentProvider'
var QF = e => {
		const {
				children: t,
				colorModeManager: n,
				portalZIndex: r,
				resetScope: o,
				resetCSS: i = !0,
				theme: a = {},
				environment: s,
				cssVarsRoot: l,
				disableEnvironment: u,
				disableGlobalStyle: d,
			} = e,
			c = S.jsx(ew, { environment: s, disabled: u, children: t })
		return S.jsx(qF, {
			theme: a,
			cssVarsRoot: l,
			children: S.jsxs(PS, {
				colorModeManager: n,
				options: a.config,
				children: [
					i ? S.jsx(w5, { scope: o }) : S.jsx(S5, {}),
					!d && S.jsx(XF, {}),
					r ? S.jsx(kS, { zIndex: r, children: c }) : c,
				],
			}),
		})
	},
	ZF = (e, t) => e.find(n => n.id === t)
function K0(e, t) {
	const n = tw(e, t),
		r = n ? e[n].findIndex(o => o.id === t) : -1
	return { position: n, index: r }
}
function tw(e, t) {
	for (const [n, r] of Object.entries(e)) if (ZF(r, t)) return n
}
function JF(e) {
	const t = e.includes('right'),
		n = e.includes('left')
	let r = 'center'
	return t && (r = 'flex-end'), n && (r = 'flex-start'), { display: 'flex', flexDirection: 'column', alignItems: r }
}
function ej(e) {
	const n = e === 'top' || e === 'bottom' ? '0 auto' : void 0,
		r = e.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
		o = e.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
		i = e.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
		a = e.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)'
	return {
		position: 'fixed',
		zIndex: 'var(--toast-z-index, 5500)',
		pointerEvents: 'none',
		display: 'flex',
		flexDirection: 'column',
		margin: n,
		top: r,
		bottom: o,
		right: i,
		left: a,
	}
}
function Ql(e, t = []) {
	const n = b.useRef(e)
	return (
		b.useEffect(() => {
			n.current = e
		}),
		b.useCallback((...r) => {
			var o
			return (o = n.current) == null ? void 0 : o.call(n, ...r)
		}, t)
	)
}
function tj(e, t) {
	const n = Ql(e)
	b.useEffect(() => {
		if (t == null) return
		let r = null
		return (
			(r = window.setTimeout(() => {
				n()
			}, t)),
			() => {
				r && window.clearTimeout(r)
			}
		)
	}, [t, n])
}
function Ph(e, t) {
	const n = b.useRef(!1),
		r = b.useRef(!1)
	b.useEffect(() => {
		if (n.current && r.current) return e()
		r.current = !0
	}, t),
		b.useEffect(
			() => (
				(n.current = !0),
				() => {
					n.current = !1
				}
			),
			[],
		)
}
function nj(e) {
	if (typeof Proxy > 'u') return e
	const t = new Map(),
		n = (...r) => e(...r)
	return new Proxy(n, { get: (r, o) => (o === 'create' ? e : (t.has(o) || t.set(o, e(o)), t.get(o))) })
}
function rs(e) {
	return e !== null && typeof e == 'object' && typeof e.start == 'function'
}
const Th = e => Array.isArray(e)
function nw(e, t) {
	if (!Array.isArray(t)) return !1
	const n = t.length
	if (n !== e.length) return !1
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
	return !0
}
function os(e) {
	return typeof e == 'string' || Array.isArray(e)
}
function G0(e) {
	const t = [{}, {}]
	return (
		e == null ||
			e.values.forEach((n, r) => {
				;(t[0][r] = n.get()), (t[1][r] = n.getVelocity())
			}),
		t
	)
}
function gm(e, t, n, r) {
	if (typeof t == 'function') {
		const [o, i] = G0(r)
		t = t(n !== void 0 ? n : e.custom, o, i)
	}
	if ((typeof t == 'string' && (t = e.variants && e.variants[t]), typeof t == 'function')) {
		const [o, i] = G0(r)
		t = t(n !== void 0 ? n : e.custom, o, i)
	}
	return t
}
function Mc(e, t, n) {
	const r = e.getProps()
	return gm(r, t, n !== void 0 ? n : r.custom, e)
}
const ym = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
	bm = ['initial', ...ym],
	ws = [
		'transformPerspective',
		'x',
		'y',
		'z',
		'translateX',
		'translateY',
		'translateZ',
		'scale',
		'scaleX',
		'scaleY',
		'rotate',
		'rotateX',
		'rotateY',
		'rotateZ',
		'skew',
		'skewX',
		'skewY',
	],
	Er = new Set(ws),
	Dn = e => e * 1e3,
	On = e => e / 1e3,
	rj = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
	oj = e => ({ type: 'spring', stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
	ij = { type: 'keyframes', duration: 0.8 },
	aj = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	sj = (e, { keyframes: t }) => (t.length > 2 ? ij : Er.has(e) ? (e.startsWith('scale') ? oj(t[1]) : rj) : aj)
function lj({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: o,
	repeat: i,
	repeatType: a,
	repeatDelay: s,
	from: l,
	elapsed: u,
	...d
}) {
	return !!Object.keys(d).length
}
function xm(e, t) {
	return e[t] || e.default || e
}
const uj = { skipAnimations: !1, useManualTiming: !1 },
	cj = e => e !== null
function Ic(e, { repeat: t, repeatType: n = 'loop' }, r) {
	const o = e.filter(cj),
		i = t && n !== 'loop' && t % 2 === 1 ? 0 : o.length - 1
	return !i || r === void 0 ? o[i] : r
}
const ot = e => e
function dj(e) {
	let t = new Set(),
		n = new Set(),
		r = !1,
		o = !1
	const i = new WeakSet()
	let a = { delta: 0, timestamp: 0, isProcessing: !1 }
	function s(u) {
		i.has(u) && (l.schedule(u), e()), u(a)
	}
	const l = {
		schedule: (u, d = !1, c = !1) => {
			const m = c && r ? t : n
			return d && i.add(u), m.has(u) || m.add(u), u
		},
		cancel: u => {
			n.delete(u), i.delete(u)
		},
		process: u => {
			if (((a = u), r)) {
				o = !0
				return
			}
			;(r = !0), ([t, n] = [n, t]), n.clear(), t.forEach(s), (r = !1), o && ((o = !1), l.process(u))
		},
	}
	return l
}
const yl = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'],
	fj = 40
function rw(e, t) {
	let n = !1,
		r = !0
	const o = { delta: 0, timestamp: 0, isProcessing: !1 },
		i = () => (n = !0),
		a = yl.reduce((p, h) => ((p[h] = dj(i)), p), {}),
		{ read: s, resolveKeyframes: l, update: u, preRender: d, render: c, postRender: f } = a,
		m = () => {
			const p = performance.now()
			;(n = !1),
				(o.delta = r ? 1e3 / 60 : Math.max(Math.min(p - o.timestamp, fj), 1)),
				(o.timestamp = p),
				(o.isProcessing = !0),
				s.process(o),
				l.process(o),
				u.process(o),
				d.process(o),
				c.process(o),
				f.process(o),
				(o.isProcessing = !1),
				n && t && ((r = !1), e(m))
		},
		y = () => {
			;(n = !0), (r = !0), o.isProcessing || e(m)
		}
	return {
		schedule: yl.reduce((p, h) => {
			const v = a[h]
			return (p[h] = (k, C = !1, E = !1) => (n || y(), v.schedule(k, C, E))), p
		}, {}),
		cancel: p => {
			for (let h = 0; h < yl.length; h++) a[yl[h]].cancel(p)
		},
		state: o,
		steps: a,
	}
}
const {
		schedule: ae,
		cancel: qn,
		state: qe,
		steps: Xd,
	} = rw(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : ot, !0),
	ow = e => /^0[^.\s]+$/u.test(e)
function hj(e) {
	return typeof e == 'number' ? e === 0 : e !== null ? e === 'none' || e === '0' || ow(e) : !0
}
let Eh = ot
const iw = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
	aw = e => t => typeof t == 'string' && t.startsWith(e),
	sw = aw('--'),
	pj = aw('var(--'),
	Sm = e => (pj(e) ? mj.test(e.split('/*')[0].trim()) : !1),
	mj = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	vj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function gj(e) {
	const t = vj.exec(e)
	if (!t) return [,]
	const [, n, r, o] = t
	return [`--${n ?? r}`, o]
}
function lw(e, t, n = 1) {
	const [r, o] = gj(e)
	if (!r) return
	const i = window.getComputedStyle(t).getPropertyValue(r)
	if (i) {
		const a = i.trim()
		return iw(a) ? parseFloat(a) : a
	}
	return Sm(o) ? lw(o, t, n + 1) : o
}
const Sr = (e, t, n) => (n > t ? t : n < e ? e : n),
	Ei = { test: e => typeof e == 'number', parse: parseFloat, transform: e => e },
	Pa = { ...Ei, transform: e => Sr(0, 1, e) },
	bl = { ...Ei, default: 1 },
	Ta = e => Math.round(e * 1e5) / 1e5,
	wm = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
	yj = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
	bj = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
function ks(e) {
	return typeof e == 'string'
}
function xj(e) {
	return e == null
}
const Cs = e => ({
		test: t => ks(t) && t.endsWith(e) && t.split(' ').length === 1,
		parse: parseFloat,
		transform: t => `${t}${e}`,
	}),
	tr = Cs('deg'),
	wn = Cs('%'),
	B = Cs('px'),
	Sj = Cs('vh'),
	wj = Cs('vw'),
	q0 = { ...wn, parse: e => wn.parse(e) / 100, transform: e => wn.transform(e * 100) },
	kj = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y', 'translateX', 'translateY']),
	Y0 = e => e === Ei || e === B,
	X0 = (e, t) => parseFloat(e.split(', ')[t]),
	Q0 =
		(e, t) =>
		(n, { transform: r }) => {
			if (r === 'none' || !r) return 0
			const o = r.match(/^matrix3d\((.+)\)$/u)
			if (o) return X0(o[1], t)
			{
				const i = r.match(/^matrix\((.+)\)$/u)
				return i ? X0(i[1], e) : 0
			}
		},
	Cj = new Set(['x', 'y', 'z']),
	_j = ws.filter(e => !Cj.has(e))
function Pj(e) {
	const t = []
	return (
		_j.forEach(n => {
			const r = e.getValue(n)
			r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0))
		}),
		t
	)
}
const bi = {
	width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: Q0(4, 13),
	y: Q0(5, 14),
}
bi.translateX = bi.x
bi.translateY = bi.y
const uw = e => t => t.test(e),
	Tj = { test: e => e === 'auto', parse: e => e },
	cw = [Ei, B, wn, tr, wj, Sj, Tj],
	Z0 = e => cw.find(uw(e)),
	eo = new Set()
let $h = !1,
	Rh = !1
function dw() {
	if (Rh) {
		const e = Array.from(eo).filter(r => r.needsMeasurement),
			t = new Set(e.map(r => r.element)),
			n = new Map()
		t.forEach(r => {
			const o = Pj(r)
			o.length && (n.set(r, o), r.render())
		}),
			e.forEach(r => r.measureInitialState()),
			t.forEach(r => {
				r.render()
				const o = n.get(r)
				o &&
					o.forEach(([i, a]) => {
						var s
						;(s = r.getValue(i)) === null || s === void 0 || s.set(a)
					})
			}),
			e.forEach(r => r.measureEndState()),
			e.forEach(r => {
				r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
			})
	}
	;(Rh = !1), ($h = !1), eo.forEach(e => e.complete()), eo.clear()
}
function fw() {
	eo.forEach(e => {
		e.readKeyframes(), e.needsMeasurement && (Rh = !0)
	})
}
function Ej() {
	fw(), dw()
}
class km {
	constructor(t, n, r, o, i, a = !1) {
		;(this.isComplete = !1),
			(this.isAsync = !1),
			(this.needsMeasurement = !1),
			(this.isScheduled = !1),
			(this.unresolvedKeyframes = [...t]),
			(this.onComplete = n),
			(this.name = r),
			(this.motionValue = o),
			(this.element = i),
			(this.isAsync = a)
	}
	scheduleResolve() {
		;(this.isScheduled = !0),
			this.isAsync
				? (eo.add(this), $h || (($h = !0), ae.read(fw), ae.resolveKeyframes(dw)))
				: (this.readKeyframes(), this.complete())
	}
	readKeyframes() {
		const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this
		for (let i = 0; i < t.length; i++)
			if (t[i] === null)
				if (i === 0) {
					const a = o == null ? void 0 : o.get(),
						s = t[t.length - 1]
					if (a !== void 0) t[0] = a
					else if (r && n) {
						const l = r.readValue(n, s)
						l != null && (t[0] = l)
					}
					t[0] === void 0 && (t[0] = s), o && a === void 0 && o.set(t[0])
				} else t[i] = t[i - 1]
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		;(this.isComplete = !0), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), eo.delete(this)
	}
	cancel() {
		this.isComplete || ((this.isScheduled = !1), eo.delete(this))
	}
	resume() {
		this.isComplete || this.scheduleResolve()
	}
}
const Cm = (e, t) => n =>
		!!((ks(n) && bj.test(n) && n.startsWith(e)) || (t && !xj(n) && Object.prototype.hasOwnProperty.call(n, t))),
	hw = (e, t, n) => r => {
		if (!ks(r)) return r
		const [o, i, a, s] = r.match(wm)
		return { [e]: parseFloat(o), [t]: parseFloat(i), [n]: parseFloat(a), alpha: s !== void 0 ? parseFloat(s) : 1 }
	},
	$j = e => Sr(0, 255, e),
	Qd = { ...Ei, transform: e => Math.round($j(e)) },
	Gr = {
		test: Cm('rgb', 'red'),
		parse: hw('red', 'green', 'blue'),
		transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
			'rgba(' + Qd.transform(e) + ', ' + Qd.transform(t) + ', ' + Qd.transform(n) + ', ' + Ta(Pa.transform(r)) + ')',
	}
function Rj(e) {
	let t = '',
		n = '',
		r = '',
		o = ''
	return (
		e.length > 5
			? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (o = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (n = e.substring(2, 3)),
			  (r = e.substring(3, 4)),
			  (o = e.substring(4, 5)),
			  (t += t),
			  (n += n),
			  (r += r),
			  (o += o)),
		{ red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: o ? parseInt(o, 16) / 255 : 1 }
	)
}
const Ah = { test: Cm('#'), parse: Rj, transform: Gr.transform },
	Wo = {
		test: Cm('hsl', 'hue'),
		parse: hw('hue', 'saturation', 'lightness'),
		transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
			'hsla(' + Math.round(e) + ', ' + wn.transform(Ta(t)) + ', ' + wn.transform(Ta(n)) + ', ' + Ta(Pa.transform(r)) + ')',
	},
	tt = {
		test: e => Gr.test(e) || Ah.test(e) || Wo.test(e),
		parse: e => (Gr.test(e) ? Gr.parse(e) : Wo.test(e) ? Wo.parse(e) : Ah.parse(e)),
		transform: e => (ks(e) ? e : e.hasOwnProperty('red') ? Gr.transform(e) : Wo.transform(e)),
	}
function Aj(e) {
	var t, n
	return (
		isNaN(e) &&
		ks(e) &&
		(((t = e.match(wm)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((n = e.match(yj)) === null || n === void 0 ? void 0 : n.length) || 0) >
			0
	)
}
const pw = 'number',
	mw = 'color',
	Mj = 'var',
	Ij = 'var(',
	J0 = '${}',
	Fj =
		/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function is(e) {
	const t = e.toString(),
		n = [],
		r = { color: [], number: [], var: [] },
		o = []
	let i = 0
	const s = t
		.replace(
			Fj,
			l => (
				tt.test(l)
					? (r.color.push(i), o.push(mw), n.push(tt.parse(l)))
					: l.startsWith(Ij)
					? (r.var.push(i), o.push(Mj), n.push(l))
					: (r.number.push(i), o.push(pw), n.push(parseFloat(l))),
				++i,
				J0
			),
		)
		.split(J0)
	return { values: n, split: s, indexes: r, types: o }
}
function vw(e) {
	return is(e).values
}
function gw(e) {
	const { split: t, types: n } = is(e),
		r = t.length
	return o => {
		let i = ''
		for (let a = 0; a < r; a++)
			if (((i += t[a]), o[a] !== void 0)) {
				const s = n[a]
				s === pw ? (i += Ta(o[a])) : s === mw ? (i += tt.transform(o[a])) : (i += o[a])
			}
		return i
	}
}
const jj = e => (typeof e == 'number' ? 0 : e)
function zj(e) {
	const t = vw(e)
	return gw(e)(t.map(jj))
}
const wr = { test: Aj, parse: vw, createTransformer: gw, getAnimatableNone: zj },
	Lj = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function Dj(e) {
	const [t, n] = e.slice(0, -1).split('(')
	if (t === 'drop-shadow') return e
	const [r] = n.match(wm) || []
	if (!r) return e
	const o = n.replace(r, '')
	let i = Lj.has(t) ? 1 : 0
	return r !== n && (i *= 100), t + '(' + i + o + ')'
}
const Oj = /\b([a-z-]*)\(.*?\)/gu,
	Mh = {
		...wr,
		getAnimatableNone: e => {
			const t = e.match(Oj)
			return t ? t.map(Dj).join(' ') : e
		},
	},
	ey = { ...Ei, transform: Math.round },
	_m = {
		borderWidth: B,
		borderTopWidth: B,
		borderRightWidth: B,
		borderBottomWidth: B,
		borderLeftWidth: B,
		borderRadius: B,
		radius: B,
		borderTopLeftRadius: B,
		borderTopRightRadius: B,
		borderBottomRightRadius: B,
		borderBottomLeftRadius: B,
		width: B,
		maxWidth: B,
		height: B,
		maxHeight: B,
		size: B,
		top: B,
		right: B,
		bottom: B,
		left: B,
		padding: B,
		paddingTop: B,
		paddingRight: B,
		paddingBottom: B,
		paddingLeft: B,
		margin: B,
		marginTop: B,
		marginRight: B,
		marginBottom: B,
		marginLeft: B,
		rotate: tr,
		rotateX: tr,
		rotateY: tr,
		rotateZ: tr,
		scale: bl,
		scaleX: bl,
		scaleY: bl,
		scaleZ: bl,
		skew: tr,
		skewX: tr,
		skewY: tr,
		distance: B,
		translateX: B,
		translateY: B,
		translateZ: B,
		x: B,
		y: B,
		z: B,
		perspective: B,
		transformPerspective: B,
		opacity: Pa,
		originX: q0,
		originY: q0,
		originZ: B,
		zIndex: ey,
		backgroundPositionX: B,
		backgroundPositionY: B,
		fillOpacity: Pa,
		strokeOpacity: Pa,
		numOctaves: ey,
	},
	Bj = {
		..._m,
		color: tt,
		backgroundColor: tt,
		outlineColor: tt,
		fill: tt,
		stroke: tt,
		borderColor: tt,
		borderTopColor: tt,
		borderRightColor: tt,
		borderBottomColor: tt,
		borderLeftColor: tt,
		filter: Mh,
		WebkitFilter: Mh,
	},
	Pm = e => Bj[e]
function yw(e, t) {
	let n = Pm(e)
	return n !== Mh && (n = wr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Nj = new Set(['auto', 'none', '0'])
function Vj(e, t, n) {
	let r = 0,
		o
	for (; r < e.length && !o; ) {
		const i = e[r]
		typeof i == 'string' && !Nj.has(i) && is(i).values.length && (o = e[r]), r++
	}
	if (o && n) for (const i of t) e[i] = yw(n, o)
}
class bw extends km {
	constructor(t, n, r, o, i) {
		super(t, n, r, o, i, !0)
	}
	readKeyframes() {
		const { unresolvedKeyframes: t, element: n, name: r } = this
		if (!n || !n.current) return
		super.readKeyframes()
		for (let l = 0; l < t.length; l++) {
			let u = t[l]
			if (typeof u == 'string' && ((u = u.trim()), Sm(u))) {
				const d = lw(u, n.current)
				d !== void 0 && (t[l] = d), l === t.length - 1 && (this.finalKeyframe = u)
			}
		}
		if ((this.resolveNoneKeyframes(), !kj.has(r) || t.length !== 2)) return
		const [o, i] = t,
			a = Z0(o),
			s = Z0(i)
		if (a !== s)
			if (Y0(a) && Y0(s))
				for (let l = 0; l < t.length; l++) {
					const u = t[l]
					typeof u == 'string' && (t[l] = parseFloat(u))
				}
			else this.needsMeasurement = !0
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes: t, name: n } = this,
			r = []
		for (let o = 0; o < t.length; o++) hj(t[o]) && r.push(o)
		r.length && Vj(t, r, n)
	}
	measureInitialState() {
		const { element: t, unresolvedKeyframes: n, name: r } = this
		if (!t || !t.current) return
		r === 'height' && (this.suspendedScrollY = window.pageYOffset),
			(this.measuredOrigin = bi[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
			(n[0] = this.measuredOrigin)
		const o = n[n.length - 1]
		o !== void 0 && t.getValue(r, o).jump(o, !1)
	}
	measureEndState() {
		var t
		const { element: n, name: r, unresolvedKeyframes: o } = this
		if (!n || !n.current) return
		const i = n.getValue(r)
		i && i.jump(this.measuredOrigin, !1)
		const a = o.length - 1,
			s = o[a]
		;(o[a] = bi[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
			s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
			!((t = this.removedTransforms) === null || t === void 0) &&
				t.length &&
				this.removedTransforms.forEach(([l, u]) => {
					n.getValue(l).set(u)
				}),
			this.resolveNoneKeyframes()
	}
}
function xw(e) {
	let t
	return () => (t === void 0 && (t = e()), t)
}
let Zl
function Wj() {
	Zl = void 0
}
const Bn = {
		now: () => (Zl === void 0 && Bn.set(qe.isProcessing || uj.useManualTiming ? qe.timestamp : performance.now()), Zl),
		set: e => {
			;(Zl = e), queueMicrotask(Wj)
		},
	},
	ty = (e, t) =>
		t === 'zIndex'
			? !1
			: !!(
					typeof e == 'number' ||
					Array.isArray(e) ||
					(typeof e == 'string' && (wr.test(e) || e === '0') && !e.startsWith('url('))
			  )
function Uj(e) {
	const t = e[0]
	if (e.length === 1) return !0
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}
function Hj(e, t, n, r) {
	const o = e[0]
	if (o === null) return !1
	if (t === 'display' || t === 'visibility') return !0
	const i = e[e.length - 1],
		a = ty(o, t),
		s = ty(i, t)
	return !a || !s ? !1 : Uj(e) || (n === 'spring' && r)
}
const Kj = 40
class Sw {
	constructor({
		autoplay: t = !0,
		delay: n = 0,
		type: r = 'keyframes',
		repeat: o = 0,
		repeatDelay: i = 0,
		repeatType: a = 'loop',
		...s
	}) {
		;(this.isStopped = !1),
			(this.hasAttemptedResolve = !1),
			(this.createdAt = Bn.now()),
			(this.options = { autoplay: t, delay: n, type: r, repeat: o, repeatDelay: i, repeatType: a, ...s }),
			this.updateFinishedPromise()
	}
	calcStartTime() {
		return this.resolvedAt ? (this.resolvedAt - this.createdAt > Kj ? this.resolvedAt : this.createdAt) : this.createdAt
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && Ej(), this._resolved
	}
	onKeyframesResolved(t, n) {
		;(this.resolvedAt = Bn.now()), (this.hasAttemptedResolve = !0)
		const { name: r, type: o, velocity: i, delay: a, onComplete: s, onUpdate: l, isGenerator: u } = this.options
		if (!u && !Hj(t, r, o, i))
			if (a) this.options.duration = 0
			else {
				l == null || l(Ic(t, this.options, n)), s == null || s(), this.resolveFinishedPromise()
				return
			}
		const d = this.initPlayback(t, n)
		d !== !1 && ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }), this.onPostResolved())
	}
	onPostResolved() {}
	then(t, n) {
		return this.currentFinishedPromise.then(t, n)
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise(t => {
			this.resolveFinishedPromise = t
		})
	}
}
function ww(e, t) {
	return t ? e * (1e3 / t) : 0
}
const Gj = 5
function kw(e, t, n) {
	const r = Math.max(t - Gj, 0)
	return ww(n - e(r), t - r)
}
const Zd = 0.001,
	qj = 0.01,
	Yj = 10,
	Xj = 0.05,
	Qj = 1
function Zj({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
	let o,
		i,
		a = 1 - t
	;(a = Sr(Xj, Qj, a)),
		(e = Sr(qj, Yj, On(e))),
		a < 1
			? ((o = u => {
					const d = u * a,
						c = d * e,
						f = d - n,
						m = Ih(u, a),
						y = Math.exp(-c)
					return Zd - (f / m) * y
			  }),
			  (i = u => {
					const c = u * a * e,
						f = c * n + n,
						m = Math.pow(a, 2) * Math.pow(u, 2) * e,
						y = Math.exp(-c),
						g = Ih(Math.pow(u, 2), a)
					return ((-o(u) + Zd > 0 ? -1 : 1) * ((f - m) * y)) / g
			  }))
			: ((o = u => {
					const d = Math.exp(-u * e),
						c = (u - n) * e + 1
					return -Zd + d * c
			  }),
			  (i = u => {
					const d = Math.exp(-u * e),
						c = (n - u) * (e * e)
					return d * c
			  }))
	const s = 5 / e,
		l = ez(o, i, s)
	if (((e = Dn(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e }
	{
		const u = Math.pow(l, 2) * r
		return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e }
	}
}
const Jj = 12
function ez(e, t, n) {
	let r = n
	for (let o = 1; o < Jj; o++) r = r - e(r) / t(r)
	return r
}
function Ih(e, t) {
	return e * Math.sqrt(1 - t * t)
}
const tz = ['duration', 'bounce'],
	nz = ['stiffness', 'damping', 'mass']
function ny(e, t) {
	return t.some(n => e[n] !== void 0)
}
function rz(e) {
	let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
	if (!ny(e, nz) && ny(e, tz)) {
		const n = Zj(e)
		;(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0)
	}
	return t
}
function Cw({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	const o = e[0],
		i = e[e.length - 1],
		a = { done: !1, value: o },
		{
			stiffness: s,
			damping: l,
			mass: u,
			duration: d,
			velocity: c,
			isResolvedFromDuration: f,
		} = rz({ ...r, velocity: -On(r.velocity || 0) }),
		m = c || 0,
		y = l / (2 * Math.sqrt(s * u)),
		g = i - o,
		x = On(Math.sqrt(s / u)),
		p = Math.abs(g) < 5
	n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5)
	let h
	if (y < 1) {
		const v = Ih(x, y)
		h = k => {
			const C = Math.exp(-y * x * k)
			return i - C * (((m + y * x * g) / v) * Math.sin(v * k) + g * Math.cos(v * k))
		}
	} else if (y === 1) h = v => i - Math.exp(-x * v) * (g + (m + x * g) * v)
	else {
		const v = x * Math.sqrt(y * y - 1)
		h = k => {
			const C = Math.exp(-y * x * k),
				E = Math.min(v * k, 300)
			return i - (C * ((m + y * x * g) * Math.sinh(E) + v * g * Math.cosh(E))) / v
		}
	}
	return {
		calculatedDuration: (f && d) || null,
		next: v => {
			const k = h(v)
			if (f) a.done = v >= d
			else {
				let C = 0
				y < 1 && (C = v === 0 ? Dn(m) : kw(h, v, k))
				const E = Math.abs(C) <= n,
					T = Math.abs(i - k) <= t
				a.done = E && T
			}
			return (a.value = a.done ? i : k), a
		},
	}
}
function ry({
	keyframes: e,
	velocity: t = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: o = 10,
	bounceStiffness: i = 500,
	modifyTarget: a,
	min: s,
	max: l,
	restDelta: u = 0.5,
	restSpeed: d,
}) {
	const c = e[0],
		f = { done: !1, value: c },
		m = R => (s !== void 0 && R < s) || (l !== void 0 && R > l),
		y = R => (s === void 0 ? l : l === void 0 || Math.abs(s - R) < Math.abs(l - R) ? s : l)
	let g = n * t
	const x = c + g,
		p = a === void 0 ? x : a(x)
	p !== x && (g = p - c)
	const h = R => -g * Math.exp(-R / r),
		v = R => p + h(R),
		k = R => {
			const M = h(R),
				F = v(R)
			;(f.done = Math.abs(M) <= u), (f.value = f.done ? p : F)
		}
	let C, E
	const T = R => {
		m(f.value) &&
			((C = R),
			(E = Cw({
				keyframes: [f.value, y(f.value)],
				velocity: kw(v, R, f.value),
				damping: o,
				stiffness: i,
				restDelta: u,
				restSpeed: d,
			})))
	}
	return (
		T(0),
		{
			calculatedDuration: null,
			next: R => {
				let M = !1
				return !E && C === void 0 && ((M = !0), k(R), T(R)), C !== void 0 && R >= C ? E.next(R - C) : (!M && k(R), f)
			},
		}
	)
}
const _w = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	oz = 1e-7,
	iz = 12
function az(e, t, n, r, o) {
	let i,
		a,
		s = 0
	do (a = t + (n - t) / 2), (i = _w(a, r, o) - e), i > 0 ? (n = a) : (t = a)
	while (Math.abs(i) > oz && ++s < iz)
	return a
}
function _s(e, t, n, r) {
	if (e === t && n === r) return ot
	const o = i => az(i, 0, 1, e, n)
	return i => (i === 0 || i === 1 ? i : _w(o(i), t, r))
}
const sz = _s(0.42, 0, 1, 1),
	lz = _s(0, 0, 0.58, 1),
	Pw = _s(0.42, 0, 0.58, 1),
	uz = e => Array.isArray(e) && typeof e[0] != 'number',
	Tw = e => t => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	Ew = e => t => 1 - e(1 - t),
	Tm = e => 1 - Math.sin(Math.acos(e)),
	$w = Ew(Tm),
	cz = Tw(Tm),
	Rw = _s(0.33, 1.53, 0.69, 0.99),
	Em = Ew(Rw),
	dz = Tw(Em),
	fz = e => ((e *= 2) < 1 ? 0.5 * Em(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
	oy = {
		linear: ot,
		easeIn: sz,
		easeInOut: Pw,
		easeOut: lz,
		circIn: Tm,
		circInOut: cz,
		circOut: $w,
		backIn: Em,
		backInOut: dz,
		backOut: Rw,
		anticipate: fz,
	},
	iy = e => {
		if (Array.isArray(e)) {
			Eh(e.length === 4)
			const [t, n, r, o] = e
			return _s(t, n, r, o)
		} else if (typeof e == 'string') return Eh(oy[e] !== void 0), oy[e]
		return e
	},
	hz = (e, t) => n => t(e(n)),
	Nn = (...e) => e.reduce(hz),
	as = (e, t, n) => {
		const r = t - e
		return r === 0 ? 1 : (n - e) / r
	},
	_e = (e, t, n) => e + (t - e) * n
function Jd(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
	)
}
function pz({ hue: e, saturation: t, lightness: n, alpha: r }) {
	;(e /= 360), (t /= 100), (n /= 100)
	let o = 0,
		i = 0,
		a = 0
	if (!t) o = i = a = n
	else {
		const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
			l = 2 * n - s
		;(o = Jd(l, s, e + 1 / 3)), (i = Jd(l, s, e)), (a = Jd(l, s, e - 1 / 3))
	}
	return { red: Math.round(o * 255), green: Math.round(i * 255), blue: Math.round(a * 255), alpha: r }
}
function Ou(e, t) {
	return n => (n > 0 ? t : e)
}
const ef = (e, t, n) => {
		const r = e * e,
			o = n * (t * t - r) + r
		return o < 0 ? 0 : Math.sqrt(o)
	},
	mz = [Ah, Gr, Wo],
	vz = e => mz.find(t => t.test(e))
function ay(e) {
	const t = vz(e)
	if (!t) return !1
	let n = t.parse(e)
	return t === Wo && (n = pz(n)), n
}
const sy = (e, t) => {
		const n = ay(e),
			r = ay(t)
		if (!n || !r) return Ou(e, t)
		const o = { ...n }
		return i => (
			(o.red = ef(n.red, r.red, i)),
			(o.green = ef(n.green, r.green, i)),
			(o.blue = ef(n.blue, r.blue, i)),
			(o.alpha = _e(n.alpha, r.alpha, i)),
			Gr.transform(o)
		)
	},
	Fh = new Set(['none', 'hidden'])
function gz(e, t) {
	return Fh.has(e) ? n => (n <= 0 ? e : t) : n => (n >= 1 ? t : e)
}
function yz(e, t) {
	return n => _e(e, t, n)
}
function $m(e) {
	return typeof e == 'number'
		? yz
		: typeof e == 'string'
		? Sm(e)
			? Ou
			: tt.test(e)
			? sy
			: Sz
		: Array.isArray(e)
		? Aw
		: typeof e == 'object'
		? tt.test(e)
			? sy
			: bz
		: Ou
}
function Aw(e, t) {
	const n = [...e],
		r = n.length,
		o = e.map((i, a) => $m(i)(i, t[a]))
	return i => {
		for (let a = 0; a < r; a++) n[a] = o[a](i)
		return n
	}
}
function bz(e, t) {
	const n = { ...e, ...t },
		r = {}
	for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = $m(e[o])(e[o], t[o]))
	return o => {
		for (const i in r) n[i] = r[i](o)
		return n
	}
}
function xz(e, t) {
	var n
	const r = [],
		o = { color: 0, var: 0, number: 0 }
	for (let i = 0; i < t.values.length; i++) {
		const a = t.types[i],
			s = e.indexes[a][o[a]],
			l = (n = e.values[s]) !== null && n !== void 0 ? n : 0
		;(r[i] = l), o[a]++
	}
	return r
}
const Sz = (e, t) => {
	const n = wr.createTransformer(t),
		r = is(e),
		o = is(t)
	return r.indexes.var.length === o.indexes.var.length &&
		r.indexes.color.length === o.indexes.color.length &&
		r.indexes.number.length >= o.indexes.number.length
		? (Fh.has(e) && !o.values.length) || (Fh.has(t) && !r.values.length)
			? gz(e, t)
			: Nn(Aw(xz(r, o), o.values), n)
		: Ou(e, t)
}
function Mw(e, t, n) {
	return typeof e == 'number' && typeof t == 'number' && typeof n == 'number' ? _e(e, t, n) : $m(e)(e, t)
}
function wz(e, t, n) {
	const r = [],
		o = n || Mw,
		i = e.length - 1
	for (let a = 0; a < i; a++) {
		let s = o(e[a], e[a + 1])
		if (t) {
			const l = Array.isArray(t) ? t[a] || ot : t
			s = Nn(l, s)
		}
		r.push(s)
	}
	return r
}
function kz(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
	const i = e.length
	if ((Eh(i === t.length), i === 1)) return () => t[0]
	if (i === 2 && e[0] === e[1]) return () => t[1]
	e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
	const a = wz(t, r, o),
		s = a.length,
		l = u => {
			let d = 0
			if (s > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
			const c = as(e[d], e[d + 1], u)
			return a[d](c)
		}
	return n ? u => l(Sr(e[0], e[i - 1], u)) : l
}
function Cz(e, t) {
	const n = e[e.length - 1]
	for (let r = 1; r <= t; r++) {
		const o = as(0, t, r)
		e.push(_e(n, 1, o))
	}
}
function _z(e) {
	const t = [0]
	return Cz(t, e.length - 1), t
}
function Pz(e, t) {
	return e.map(n => n * t)
}
function Tz(e, t) {
	return e.map(() => t || Pw).splice(0, e.length - 1)
}
function Bu({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
	const o = uz(r) ? r.map(iy) : iy(r),
		i = { done: !1, value: t[0] },
		a = Pz(n && n.length === t.length ? n : _z(t), e),
		s = kz(a, t, { ease: Array.isArray(o) ? o : Tz(t, o) })
	return { calculatedDuration: e, next: l => ((i.value = s(l)), (i.done = l >= e), i) }
}
const ly = 2e4
function Ez(e) {
	let t = 0
	const n = 50
	let r = e.next(t)
	for (; !r.done && t < ly; ) (t += n), (r = e.next(t))
	return t >= ly ? 1 / 0 : t
}
const $z = e => {
		const t = ({ timestamp: n }) => e(n)
		return { start: () => ae.update(t, !0), stop: () => qn(t), now: () => (qe.isProcessing ? qe.timestamp : Bn.now()) }
	},
	Rz = { decay: ry, inertia: ry, tween: Bu, keyframes: Bu, spring: Cw },
	Az = e => e / 100
class Rm extends Sw {
	constructor(t) {
		super(t),
			(this.holdTime = null),
			(this.cancelTime = null),
			(this.currentTime = 0),
			(this.playbackSpeed = 1),
			(this.pendingPlayState = 'running'),
			(this.startTime = null),
			(this.state = 'idle'),
			(this.stop = () => {
				if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return
				this.teardown()
				const { onStop: l } = this.options
				l && l()
			})
		const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
			a = (o == null ? void 0 : o.KeyframeResolver) || km,
			s = (l, u) => this.onKeyframesResolved(l, u)
		;(this.resolver = new a(i, s, n, r, o)), this.resolver.scheduleResolve()
	}
	initPlayback(t) {
		const { type: n = 'keyframes', repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: a = 0 } = this.options,
			s = Rz[n] || Bu
		let l, u
		s !== Bu && typeof t[0] != 'number' && ((l = Nn(Az, Mw(t[0], t[1]))), (t = [0, 100]))
		const d = s({ ...this.options, keyframes: t })
		i === 'mirror' && (u = s({ ...this.options, keyframes: [...t].reverse(), velocity: -a })),
			d.calculatedDuration === null && (d.calculatedDuration = Ez(d))
		const { calculatedDuration: c } = d,
			f = c + o,
			m = f * (r + 1) - o
		return {
			generator: d,
			mirroredGenerator: u,
			mapPercentToKeyframes: l,
			calculatedDuration: c,
			resolvedDuration: f,
			totalDuration: m,
		}
	}
	onPostResolved() {
		const { autoplay: t = !0 } = this.options
		this.play(), this.pendingPlayState === 'paused' || !t ? this.pause() : (this.state = this.pendingPlayState)
	}
	tick(t, n = !1) {
		const { resolved: r } = this
		if (!r) {
			const { keyframes: R } = this.options
			return { done: !0, value: R[R.length - 1] }
		}
		const {
			finalKeyframe: o,
			generator: i,
			mirroredGenerator: a,
			mapPercentToKeyframes: s,
			keyframes: l,
			calculatedDuration: u,
			totalDuration: d,
			resolvedDuration: c,
		} = r
		if (this.startTime === null) return i.next(0)
		const { delay: f, repeat: m, repeatType: y, repeatDelay: g, onUpdate: x } = this.options
		this.speed > 0
			? (this.startTime = Math.min(this.startTime, t))
			: this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
			n
				? (this.currentTime = t)
				: this.holdTime !== null
				? (this.currentTime = this.holdTime)
				: (this.currentTime = Math.round(t - this.startTime) * this.speed)
		const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
			h = this.speed >= 0 ? p < 0 : p > d
		;(this.currentTime = Math.max(p, 0)), this.state === 'finished' && this.holdTime === null && (this.currentTime = d)
		let v = this.currentTime,
			k = i
		if (m) {
			const R = Math.min(this.currentTime, d) / c
			let M = Math.floor(R),
				F = R % 1
			!F && R >= 1 && (F = 1),
				F === 1 && M--,
				(M = Math.min(M, m + 1)),
				!!(M % 2) && (y === 'reverse' ? ((F = 1 - F), g && (F -= g / c)) : y === 'mirror' && (k = a)),
				(v = Sr(0, 1, F) * c)
		}
		const C = h ? { done: !1, value: l[0] } : k.next(v)
		s && (C.value = s(C.value))
		let { done: E } = C
		!h && u !== null && (E = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0)
		const T = this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && E))
		return T && o !== void 0 && (C.value = Ic(l, this.options, o)), x && x(C.value), T && this.finish(), C
	}
	get duration() {
		const { resolved: t } = this
		return t ? On(t.calculatedDuration) : 0
	}
	get time() {
		return On(this.currentTime)
	}
	set time(t) {
		;(t = Dn(t)),
			(this.currentTime = t),
			this.holdTime !== null || this.speed === 0
				? (this.holdTime = t)
				: this.driver && (this.startTime = this.driver.now() - t / this.speed)
	}
	get speed() {
		return this.playbackSpeed
	}
	set speed(t) {
		const n = this.playbackSpeed !== t
		;(this.playbackSpeed = t), n && (this.time = On(this.currentTime))
	}
	play() {
		if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
			this.pendingPlayState = 'running'
			return
		}
		if (this.isStopped) return
		const { driver: t = $z, onPlay: n, startTime: r } = this.options
		this.driver || (this.driver = t(i => this.tick(i))), n && n()
		const o = this.driver.now()
		this.holdTime !== null
			? (this.startTime = o - this.holdTime)
			: this.startTime
			? this.state === 'finished' && (this.startTime = o)
			: (this.startTime = r ?? this.calcStartTime()),
			this.state === 'finished' && this.updateFinishedPromise(),
			(this.cancelTime = this.startTime),
			(this.holdTime = null),
			(this.state = 'running'),
			this.driver.start()
	}
	pause() {
		var t
		if (!this._resolved) {
			this.pendingPlayState = 'paused'
			return
		}
		;(this.state = 'paused'), (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0)
	}
	complete() {
		this.state !== 'running' && this.play(), (this.pendingPlayState = this.state = 'finished'), (this.holdTime = null)
	}
	finish() {
		this.teardown(), (this.state = 'finished')
		const { onComplete: t } = this.options
		t && t()
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
	}
	teardown() {
		;(this.state = 'idle'),
			this.stopDriver(),
			this.resolveFinishedPromise(),
			this.updateFinishedPromise(),
			(this.startTime = this.cancelTime = null),
			this.resolver.cancel()
	}
	stopDriver() {
		this.driver && (this.driver.stop(), (this.driver = void 0))
	}
	sample(t) {
		return (this.startTime = 0), this.tick(t, !0)
	}
}
const Iw = new Set(['opacity', 'clipPath', 'filter', 'transform']),
	Fw = e => Array.isArray(e) && typeof e[0] == 'number'
function jw(e) {
	return !!(!e || (typeof e == 'string' && e in Am) || Fw(e) || (Array.isArray(e) && e.every(jw)))
}
const ua = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	Am = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: ua([0, 0.65, 0.55, 1]),
		circOut: ua([0.55, 0, 1, 0.45]),
		backIn: ua([0.31, 0.01, 0.66, -0.59]),
		backOut: ua([0.33, 1.53, 0.69, 0.99]),
	}
function Mz(e) {
	return zw(e) || Am.easeOut
}
function zw(e) {
	if (e) return Fw(e) ? ua(e) : Array.isArray(e) ? e.map(Mz) : Am[e]
}
function Iz(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: a = 'loop', ease: s, times: l } = {}) {
	const u = { [t]: n }
	l && (u.offset = l)
	const d = zw(s)
	return (
		Array.isArray(d) && (u.easing = d),
		e.animate(u, {
			delay: r,
			duration: o,
			easing: Array.isArray(d) ? 'linear' : d,
			fill: 'both',
			iterations: i + 1,
			direction: a === 'reverse' ? 'alternate' : 'normal',
		})
	)
}
const Fz = xw(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
	Nu = 10,
	jz = 2e4
function zz(e) {
	return e.type === 'spring' || !jw(e.ease)
}
function Lz(e, t) {
	const n = new Rm({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 })
	let r = { done: !1, value: e[0] }
	const o = []
	let i = 0
	for (; !r.done && i < jz; ) (r = n.sample(i)), o.push(r.value), (i += Nu)
	return { times: void 0, keyframes: o, duration: i - Nu, ease: 'linear' }
}
class uy extends Sw {
	constructor(t) {
		super(t)
		const { name: n, motionValue: r, element: o, keyframes: i } = this.options
		;(this.resolver = new bw(i, (a, s) => this.onKeyframesResolved(a, s), n, r, o)), this.resolver.scheduleResolve()
	}
	initPlayback(t, n) {
		var r
		let { duration: o = 300, times: i, ease: a, type: s, motionValue: l, name: u, startTime: d } = this.options
		if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1
		if (zz(this.options)) {
			const { onComplete: f, onUpdate: m, motionValue: y, element: g, ...x } = this.options,
				p = Lz(t, x)
			;(t = p.keyframes), t.length === 1 && (t[1] = t[0]), (o = p.duration), (i = p.times), (a = p.ease), (s = 'keyframes')
		}
		const c = Iz(l.owner.current, u, t, { ...this.options, duration: o, times: i, ease: a })
		return (
			(c.startTime = d ?? this.calcStartTime()),
			this.pendingTimeline
				? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
				: (c.onfinish = () => {
						const { onComplete: f } = this.options
						l.set(Ic(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
				  }),
			{ animation: c, duration: o, times: i, type: s, ease: a, keyframes: t }
		)
	}
	get duration() {
		const { resolved: t } = this
		if (!t) return 0
		const { duration: n } = t
		return On(n)
	}
	get time() {
		const { resolved: t } = this
		if (!t) return 0
		const { animation: n } = t
		return On(n.currentTime || 0)
	}
	set time(t) {
		const { resolved: n } = this
		if (!n) return
		const { animation: r } = n
		r.currentTime = Dn(t)
	}
	get speed() {
		const { resolved: t } = this
		if (!t) return 1
		const { animation: n } = t
		return n.playbackRate
	}
	set speed(t) {
		const { resolved: n } = this
		if (!n) return
		const { animation: r } = n
		r.playbackRate = t
	}
	get state() {
		const { resolved: t } = this
		if (!t) return 'idle'
		const { animation: n } = t
		return n.playState
	}
	get startTime() {
		const { resolved: t } = this
		if (!t) return null
		const { animation: n } = t
		return n.startTime
	}
	attachTimeline(t) {
		if (!this._resolved) this.pendingTimeline = t
		else {
			const { resolved: n } = this
			if (!n) return ot
			const { animation: r } = n
			;(r.timeline = t), (r.onfinish = null)
		}
		return ot
	}
	play() {
		if (this.isStopped) return
		const { resolved: t } = this
		if (!t) return
		const { animation: n } = t
		n.playState === 'finished' && this.updateFinishedPromise(), n.play()
	}
	pause() {
		const { resolved: t } = this
		if (!t) return
		const { animation: n } = t
		n.pause()
	}
	stop() {
		if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return
		this.resolveFinishedPromise(), this.updateFinishedPromise()
		const { resolved: t } = this
		if (!t) return
		const { animation: n, keyframes: r, duration: o, type: i, ease: a, times: s } = t
		if (n.playState === 'idle' || n.playState === 'finished') return
		if (this.time) {
			const { motionValue: u, onUpdate: d, onComplete: c, element: f, ...m } = this.options,
				y = new Rm({ ...m, keyframes: r, duration: o, type: i, ease: a, times: s, isGenerator: !0 }),
				g = Dn(this.time)
			u.setWithVelocity(y.sample(g - Nu).value, y.sample(g).value, Nu)
		}
		const { onStop: l } = this.options
		l && l(), this.cancel()
	}
	complete() {
		const { resolved: t } = this
		t && t.animation.finish()
	}
	cancel() {
		const { resolved: t } = this
		t && t.animation.cancel()
	}
	static supports(t) {
		const { motionValue: n, name: r, repeatDelay: o, repeatType: i, damping: a, type: s } = t
		return (
			Fz() &&
			r &&
			Iw.has(r) &&
			n &&
			n.owner &&
			n.owner.current instanceof HTMLElement &&
			!n.owner.getProps().onUpdate &&
			!o &&
			i !== 'mirror' &&
			a !== 0 &&
			s !== 'inertia'
		)
	}
}
function Dz(e, t) {
	let n
	const r = () => {
		const { currentTime: o } = t,
			a = (o === null ? 0 : o.value) / 100
		n !== a && e(a), (n = a)
	}
	return ae.update(r, !0), () => qn(r)
}
const Oz = xw(() => window.ScrollTimeline !== void 0)
class Bz {
	constructor(t) {
		;(this.stop = () => this.runAll('stop')), (this.animations = t.filter(Boolean))
	}
	then(t, n) {
		return Promise.all(this.animations).then(t).catch(n)
	}
	getAll(t) {
		return this.animations[0][t]
	}
	setAll(t, n) {
		for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
	}
	attachTimeline(t) {
		const n = this.animations.map(r => {
			if (Oz() && r.attachTimeline) r.attachTimeline(t)
			else
				return (
					r.pause(),
					Dz(o => {
						r.time = r.duration * o
					}, t)
				)
		})
		return () => {
			n.forEach((r, o) => {
				r && r(), this.animations[o].stop()
			})
		}
	}
	get time() {
		return this.getAll('time')
	}
	set time(t) {
		this.setAll('time', t)
	}
	get speed() {
		return this.getAll('speed')
	}
	set speed(t) {
		this.setAll('speed', t)
	}
	get startTime() {
		return this.getAll('startTime')
	}
	get duration() {
		let t = 0
		for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration)
		return t
	}
	runAll(t) {
		this.animations.forEach(n => n[t]())
	}
	play() {
		this.runAll('play')
	}
	pause() {
		this.runAll('pause')
	}
	cancel() {
		this.runAll('cancel')
	}
	complete() {
		this.runAll('complete')
	}
}
const Mm =
		(e, t, n, r = {}, o, i, a) =>
		s => {
			const l = xm(r, e) || {},
				u = l.delay || r.delay || 0
			let { elapsed: d = 0 } = r
			d = d - Dn(u)
			let c = {
				keyframes: Array.isArray(n) ? n : [null, n],
				ease: 'easeOut',
				velocity: t.getVelocity(),
				...l,
				delay: -d,
				onUpdate: m => {
					t.set(m), l.onUpdate && l.onUpdate(m)
				},
				onComplete: () => {
					s(), l.onComplete && l.onComplete(), a && a()
				},
				onStop: a,
				name: e,
				motionValue: t,
				element: i ? void 0 : o,
			}
			lj(l) || (c = { ...c, ...sj(e, c) }),
				c.duration && (c.duration = Dn(c.duration)),
				c.repeatDelay && (c.repeatDelay = Dn(c.repeatDelay)),
				c.from !== void 0 && (c.keyframes[0] = c.from)
			let f = !1
			if (
				((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) && ((c.duration = 0), c.delay === 0 && (f = !0)),
				f && !i && t.get() !== void 0)
			) {
				const m = Ic(c.keyframes, l)
				if (m !== void 0)
					return (
						ae.update(() => {
							c.onUpdate(m), c.onComplete()
						}),
						new Bz([])
					)
			}
			return !i && uy.supports(c) ? new uy(c) : new Rm(c)
		},
	Nz = e => !!(e && typeof e == 'object' && e.mix && e.toValue),
	Vz = e => (Th(e) ? e[e.length - 1] || 0 : e)
function Fc(e, t) {
	e.indexOf(t) === -1 && e.push(t)
}
function jc(e, t) {
	const n = e.indexOf(t)
	n > -1 && e.splice(n, 1)
}
class Im {
	constructor() {
		this.subscriptions = []
	}
	add(t) {
		return Fc(this.subscriptions, t), () => jc(this.subscriptions, t)
	}
	notify(t, n, r) {
		const o = this.subscriptions.length
		if (o)
			if (o === 1) this.subscriptions[0](t, n, r)
			else
				for (let i = 0; i < o; i++) {
					const a = this.subscriptions[i]
					a && a(t, n, r)
				}
	}
	getSize() {
		return this.subscriptions.length
	}
	clear() {
		this.subscriptions.length = 0
	}
}
const cy = 30,
	Wz = e => !isNaN(parseFloat(e))
class Lw {
	constructor(t, n = {}) {
		;(this.version = '11.5.4'),
			(this.canTrackVelocity = null),
			(this.events = {}),
			(this.updateAndNotify = (r, o = !0) => {
				const i = Bn.now()
				this.updatedAt !== i && this.setPrevFrameValue(),
					(this.prev = this.current),
					this.setCurrent(r),
					this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
					o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
			}),
			(this.hasAnimated = !1),
			this.setCurrent(t),
			(this.owner = n.owner)
	}
	setCurrent(t) {
		;(this.current = t),
			(this.updatedAt = Bn.now()),
			this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Wz(this.current))
	}
	setPrevFrameValue(t = this.current) {
		;(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt)
	}
	onChange(t) {
		return this.on('change', t)
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new Im())
		const r = this.events[t].add(n)
		return t === 'change'
			? () => {
					r(),
						ae.read(() => {
							this.events.change.getSize() || this.stop()
						})
			  }
			: r
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear()
	}
	attach(t, n) {
		;(this.passiveEffect = t), (this.stopPassiveEffect = n)
	}
	set(t, n = !0) {
		!n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
	}
	setWithVelocity(t, n, r) {
		this.set(n), (this.prev = void 0), (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt - r)
	}
	jump(t, n = !0) {
		this.updateAndNotify(t),
			(this.prev = t),
			(this.prevUpdatedAt = this.prevFrameValue = void 0),
			n && this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect()
	}
	get() {
		return this.current
	}
	getPrevious() {
		return this.prev
	}
	getVelocity() {
		const t = Bn.now()
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > cy) return 0
		const n = Math.min(this.updatedAt - this.prevUpdatedAt, cy)
		return ww(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
	}
	start(t) {
		return (
			this.stop(),
			new Promise(n => {
				;(this.hasAnimated = !0), (this.animation = t(n)), this.events.animationStart && this.events.animationStart.notify()
			}).then(() => {
				this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
			})
		)
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation()
	}
	isAnimating() {
		return !!this.animation
	}
	clearAnimation() {
		delete this.animation
	}
	destroy() {
		this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
}
function ss(e, t) {
	return new Lw(e, t)
}
function Uz(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ss(n))
}
function Hz(e, t) {
	const n = Mc(e, t)
	let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {}
	i = { ...i, ...r }
	for (const a in i) {
		const s = Vz(i[a])
		Uz(e, a, s)
	}
}
const zc = e => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
	Kz = 'framerAppearId',
	Dw = 'data-' + zc(Kz)
function Ow(e) {
	return e.props[Dw]
}
function Bw(e) {
	if (Er.has(e)) return 'transform'
	if (Iw.has(e)) return zc(e)
}
class Gz extends Lw {
	constructor() {
		super(...arguments), (this.output = []), (this.counts = new Map())
	}
	add(t) {
		const n = Bw(t)
		if (!n) return
		const r = this.counts.get(n) || 0
		this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update())
		let o = !1
		return () => {
			if (o) return
			o = !0
			const i = this.counts.get(n) - 1
			this.counts.set(n, i), i === 0 && (jc(this.output, n), this.update())
		}
	}
	update() {
		this.set(this.output.length ? this.output.join(', ') : 'auto')
	}
}
const rt = e => !!(e && e.getVelocity)
function qz(e) {
	return !!(rt(e) && e.add)
}
function jh(e, t) {
	var n
	if (!e.applyWillChange) return
	let r = e.getValue('willChange')
	if (
		(!r &&
			!(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
			((r = new Gz('auto')), e.addValue('willChange', r)),
		qz(r))
	)
		return r.add(t)
}
function Yz({ protectedKeys: e, needsAnimating: t }, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0
	return (t[n] = !1), r
}
function Nw(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
	var i
	let { transition: a = e.getDefaultTransition(), transitionEnd: s, ...l } = t
	r && (a = r)
	const u = [],
		d = o && e.animationState && e.animationState.getState()[o]
	for (const c in l) {
		const f = e.getValue(c, (i = e.latestValues[c]) !== null && i !== void 0 ? i : null),
			m = l[c]
		if (m === void 0 || (d && Yz(d, c))) continue
		const y = { delay: n, ...xm(a || {}, c) }
		let g = !1
		if (window.MotionHandoffAnimation) {
			const p = Ow(e)
			if (p) {
				const h = window.MotionHandoffAnimation(p, c, ae)
				h !== null && ((y.startTime = h), (g = !0))
			}
		}
		f.start(Mm(c, f, m, e.shouldReduceMotion && Er.has(c) ? { type: !1 } : y, e, g, jh(e, c)))
		const x = f.animation
		x && u.push(x)
	}
	return (
		s &&
			Promise.all(u).then(() => {
				ae.update(() => {
					s && Hz(e, s)
				})
			}),
		u
	)
}
function zh(e, t, n = {}) {
	var r
	const o = Mc(e, t, n.type === 'exit' ? ((r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom) : void 0)
	let { transition: i = e.getDefaultTransition() || {} } = o || {}
	n.transitionOverride && (i = n.transitionOverride)
	const a = o ? () => Promise.all(Nw(e, o, n)) : () => Promise.resolve(),
		s =
			e.variantChildren && e.variantChildren.size
				? (u = 0) => {
						const { delayChildren: d = 0, staggerChildren: c, staggerDirection: f } = i
						return Xz(e, t, d + u, c, f, n)
				  }
				: () => Promise.resolve(),
		{ when: l } = i
	if (l) {
		const [u, d] = l === 'beforeChildren' ? [a, s] : [s, a]
		return u().then(() => d())
	} else return Promise.all([a(), s(n.delay)])
}
function Xz(e, t, n = 0, r = 0, o = 1, i) {
	const a = [],
		s = (e.variantChildren.size - 1) * r,
		l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r
	return (
		Array.from(e.variantChildren)
			.sort(Qz)
			.forEach((u, d) => {
				u.notify('AnimationStart', t), a.push(zh(u, t, { ...i, delay: n + l(d) }).then(() => u.notify('AnimationComplete', t)))
			}),
		Promise.all(a)
	)
}
function Qz(e, t) {
	return e.sortNodePosition(t)
}
function Zz(e, t, n = {}) {
	e.notify('AnimationStart', t)
	let r
	if (Array.isArray(t)) {
		const o = t.map(i => zh(e, i, n))
		r = Promise.all(o)
	} else if (typeof t == 'string') r = zh(e, t, n)
	else {
		const o = typeof t == 'function' ? Mc(e, t, n.custom) : t
		r = Promise.all(Nw(e, o, n))
	}
	return r.then(() => {
		e.notify('AnimationComplete', t)
	})
}
const Jz = [...ym].reverse(),
	eL = ym.length
function tL(e) {
	return t => Promise.all(t.map(({ animation: n, options: r }) => Zz(e, n, r)))
}
function nL(e) {
	let t = tL(e),
		n = dy(),
		r = !0
	const o = l => (u, d) => {
		var c
		const f = Mc(e, d, l === 'exit' ? ((c = e.presenceContext) === null || c === void 0 ? void 0 : c.custom) : void 0)
		if (f) {
			const { transition: m, transitionEnd: y, ...g } = f
			u = { ...u, ...g, ...y }
		}
		return u
	}
	function i(l) {
		t = l(e)
	}
	function a(l) {
		const u = e.getProps(),
			d = e.getVariantContext(!0) || {},
			c = [],
			f = new Set()
		let m = {},
			y = 1 / 0
		for (let x = 0; x < eL; x++) {
			const p = Jz[x],
				h = n[p],
				v = u[p] !== void 0 ? u[p] : d[p],
				k = os(v),
				C = p === l ? h.isActive : null
			C === !1 && (y = x)
			let E = v === d[p] && v !== u[p] && k
			if (
				(E && r && e.manuallyAnimateOnMount && (E = !1),
				(h.protectedKeys = { ...m }),
				(!h.isActive && C === null) || (!v && !h.prevProp) || rs(v) || typeof v == 'boolean')
			)
				continue
			let R = rL(h.prevProp, v) || (p === l && h.isActive && !E && k) || (x > y && k),
				M = !1
			const F = Array.isArray(v) ? v : [v]
			let Y = F.reduce(o(p), {})
			C === !1 && (Y = {})
			const { prevResolvedValues: we = {} } = h,
				He = { ...we, ...Y },
				at = pe => {
					;(R = !0), f.has(pe) && ((M = !0), f.delete(pe)), (h.needsAnimating[pe] = !0)
					const ke = e.getValue(pe)
					ke && (ke.liveStyle = !1)
				}
			for (const pe in He) {
				const ke = Y[pe],
					Oe = we[pe]
				if (m.hasOwnProperty(pe)) continue
				let I = !1
				Th(ke) && Th(Oe) ? (I = !nw(ke, Oe)) : (I = ke !== Oe),
					I ? (ke != null ? at(pe) : f.add(pe)) : ke !== void 0 && f.has(pe) ? at(pe) : (h.protectedKeys[pe] = !0)
			}
			;(h.prevProp = v),
				(h.prevResolvedValues = Y),
				h.isActive && (m = { ...m, ...Y }),
				r && e.blockInitialAnimation && (R = !1),
				R && (!E || M) && c.push(...F.map(pe => ({ animation: pe, options: { type: p } })))
		}
		if (f.size) {
			const x = {}
			f.forEach(p => {
				const h = e.getBaseTarget(p),
					v = e.getValue(p)
				v && (v.liveStyle = !0), (x[p] = h ?? null)
			}),
				c.push({ animation: x })
		}
		let g = !!c.length
		return (
			r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (g = !1),
			(r = !1),
			g ? t(c) : Promise.resolve()
		)
	}
	function s(l, u) {
		var d
		if (n[l].isActive === u) return Promise.resolve()
		;(d = e.variantChildren) === null ||
			d === void 0 ||
			d.forEach(f => {
				var m
				return (m = f.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u)
			}),
			(n[l].isActive = u)
		const c = a(l)
		for (const f in n) n[f].protectedKeys = {}
		return c
	}
	return {
		animateChanges: a,
		setActive: s,
		setAnimateFunction: i,
		getState: () => n,
		reset: () => {
			;(n = dy()), (r = !0)
		},
	}
}
function rL(e, t) {
	return typeof t == 'string' ? t !== e : Array.isArray(t) ? !nw(t, e) : !1
}
function zr(e = !1) {
	return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function dy() {
	return { animate: zr(!0), whileInView: zr(), whileHover: zr(), whileTap: zr(), whileDrag: zr(), whileFocus: zr(), exit: zr() }
}
class $r {
	constructor(t) {
		;(this.isMounted = !1), (this.node = t)
	}
	update() {}
}
class oL extends $r {
	constructor(t) {
		super(t), t.animationState || (t.animationState = nL(t))
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps()
		rs(t) && (this.unmountControls = t.subscribe(this.node))
	}
	mount() {
		this.updateAnimationControlsSubscription()
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {}
		t !== n && this.updateAnimationControlsSubscription()
	}
	unmount() {
		var t
		this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
	}
}
let iL = 0
class aL extends $r {
	constructor() {
		super(...arguments), (this.id = iL++)
	}
	update() {
		if (!this.node.presenceContext) return
		const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
			{ isPresent: r } = this.node.prevPresenceContext || {}
		if (!this.node.animationState || t === r) return
		const o = this.node.animationState.setActive('exit', !t)
		n && !t && o.then(() => n(this.id))
	}
	mount() {
		const { register: t } = this.node.presenceContext || {}
		t && (this.unmount = t(this.id))
	}
	unmount() {}
}
const sL = { animation: { Feature: oL }, exit: { Feature: aL } },
	Vw = e => (e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1)
function Lc(e, t = 'page') {
	return { point: { x: e[`${t}X`], y: e[`${t}Y`] } }
}
const lL = e => t => Vw(t) && e(t, Lc(t))
function Fn(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
function Vn(e, t, n, r) {
	return Fn(e, t, lL(n), r)
}
const fy = (e, t) => Math.abs(e - t)
function uL(e, t) {
	const n = fy(e.x, t.x),
		r = fy(e.y, t.y)
	return Math.sqrt(n ** 2 + r ** 2)
}
class Ww {
	constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
				const c = nf(this.lastMoveEventInfo, this.history),
					f = this.startEvent !== null,
					m = uL(c.offset, { x: 0, y: 0 }) >= 3
				if (!f && !m) return
				const { point: y } = c,
					{ timestamp: g } = qe
				this.history.push({ ...y, timestamp: g })
				const { onStart: x, onMove: p } = this.handlers
				f || (x && x(this.lastMoveEvent, c), (this.startEvent = this.lastMoveEvent)), p && p(this.lastMoveEvent, c)
			}),
			(this.handlePointerMove = (c, f) => {
				;(this.lastMoveEvent = c), (this.lastMoveEventInfo = tf(f, this.transformPagePoint)), ae.update(this.updatePoint, !0)
			}),
			(this.handlePointerUp = (c, f) => {
				this.end()
				const { onEnd: m, onSessionEnd: y, resumeAnimation: g } = this.handlers
				if ((this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
				const x = nf(c.type === 'pointercancel' ? this.lastMoveEventInfo : tf(f, this.transformPagePoint), this.history)
				this.startEvent && m && m(c, x), y && y(c, x)
			}),
			!Vw(t))
		)
			return
		;(this.dragSnapToOrigin = i), (this.handlers = n), (this.transformPagePoint = r), (this.contextWindow = o || window)
		const a = Lc(t),
			s = tf(a, this.transformPagePoint),
			{ point: l } = s,
			{ timestamp: u } = qe
		this.history = [{ ...l, timestamp: u }]
		const { onSessionStart: d } = n
		d && d(t, nf(s, this.history)),
			(this.removeListeners = Nn(
				Vn(this.contextWindow, 'pointermove', this.handlePointerMove),
				Vn(this.contextWindow, 'pointerup', this.handlePointerUp),
				Vn(this.contextWindow, 'pointercancel', this.handlePointerUp),
			))
	}
	updateHandlers(t) {
		this.handlers = t
	}
	end() {
		this.removeListeners && this.removeListeners(), qn(this.updatePoint)
	}
}
function tf(e, t) {
	return t ? { point: t(e.point) } : e
}
function hy(e, t) {
	return { x: e.x - t.x, y: e.y - t.y }
}
function nf({ point: e }, t) {
	return { point: e, delta: hy(e, Uw(t)), offset: hy(e, cL(t)), velocity: dL(t, 0.1) }
}
function cL(e) {
	return e[0]
}
function Uw(e) {
	return e[e.length - 1]
}
function dL(e, t) {
	if (e.length < 2) return { x: 0, y: 0 }
	let n = e.length - 1,
		r = null
	const o = Uw(e)
	for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Dn(t))); ) n--
	if (!r) return { x: 0, y: 0 }
	const i = On(o.timestamp - r.timestamp)
	if (i === 0) return { x: 0, y: 0 }
	const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i }
	return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}
function Hw(e) {
	let t = null
	return () => {
		const n = () => {
			t = null
		}
		return t === null ? ((t = e), n) : !1
	}
}
const py = Hw('dragHorizontal'),
	my = Hw('dragVertical')
function Kw(e) {
	let t = !1
	if (e === 'y') t = my()
	else if (e === 'x') t = py()
	else {
		const n = py(),
			r = my()
		n && r
			? (t = () => {
					n(), r()
			  })
			: (n && n(), r && r())
	}
	return t
}
function Gw() {
	const e = Kw(!0)
	return e ? (e(), !1) : !0
}
function Uo(e) {
	return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
}
const qw = 1e-4,
	fL = 1 - qw,
	hL = 1 + qw,
	Yw = 0.01,
	pL = 0 - Yw,
	mL = 0 + Yw
function Rt(e) {
	return e.max - e.min
}
function vL(e, t, n) {
	return Math.abs(e - t) <= n
}
function vy(e, t, n, r = 0.5) {
	;(e.origin = r),
		(e.originPoint = _e(t.min, t.max, e.origin)),
		(e.scale = Rt(n) / Rt(t)),
		(e.translate = _e(n.min, n.max, e.origin) - e.originPoint),
		((e.scale >= fL && e.scale <= hL) || isNaN(e.scale)) && (e.scale = 1),
		((e.translate >= pL && e.translate <= mL) || isNaN(e.translate)) && (e.translate = 0)
}
function Ea(e, t, n, r) {
	vy(e.x, t.x, n.x, r ? r.originX : void 0), vy(e.y, t.y, n.y, r ? r.originY : void 0)
}
function gy(e, t, n) {
	;(e.min = n.min + t.min), (e.max = e.min + Rt(t))
}
function gL(e, t, n) {
	gy(e.x, t.x, n.x), gy(e.y, t.y, n.y)
}
function yy(e, t, n) {
	;(e.min = t.min - n.min), (e.max = e.min + Rt(t))
}
function $a(e, t, n) {
	yy(e.x, t.x, n.x), yy(e.y, t.y, n.y)
}
function yL(e, { min: t, max: n }, r) {
	return (
		t !== void 0 && e < t
			? (e = r ? _e(t, e, r.min) : Math.max(e, t))
			: n !== void 0 && e > n && (e = r ? _e(n, e, r.max) : Math.min(e, n)),
		e
	)
}
function by(e, t, n) {
	return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 }
}
function bL(e, { top: t, left: n, bottom: r, right: o }) {
	return { x: by(e.x, n, o), y: by(e.y, t, r) }
}
function xy(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
}
function xL(e, t) {
	return { x: xy(e.x, t.x), y: xy(e.y, t.y) }
}
function SL(e, t) {
	let n = 0.5
	const r = Rt(e),
		o = Rt(t)
	return o > r ? (n = as(t.min, t.max - r, e.min)) : r > o && (n = as(e.min, e.max - o, t.min)), Sr(0, 1, n)
}
function wL(e, t) {
	const n = {}
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Lh = 0.35
function kL(e = Lh) {
	return e === !1 ? (e = 0) : e === !0 && (e = Lh), { x: Sy(e, 'left', 'right'), y: Sy(e, 'top', 'bottom') }
}
function Sy(e, t, n) {
	return { min: wy(e, t), max: wy(e, n) }
}
function wy(e, t) {
	return typeof e == 'number' ? e : e[t] || 0
}
const ky = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Ho = () => ({ x: ky(), y: ky() }),
	Cy = () => ({ min: 0, max: 0 }),
	Re = () => ({ x: Cy(), y: Cy() })
function Dt(e) {
	return [e('x'), e('y')]
}
function Xw({ top: e, left: t, right: n, bottom: r }) {
	return { x: { min: t, max: n }, y: { min: e, max: r } }
}
function CL({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function _L(e, t) {
	if (!t) return e
	const n = t({ x: e.left, y: e.top }),
		r = t({ x: e.right, y: e.bottom })
	return { top: n.y, left: n.x, bottom: r.y, right: r.x }
}
function rf(e) {
	return e === void 0 || e === 1
}
function Dh({ scale: e, scaleX: t, scaleY: n }) {
	return !rf(e) || !rf(t) || !rf(n)
}
function Or(e) {
	return Dh(e) || Qw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Qw(e) {
	return _y(e.x) || _y(e.y)
}
function _y(e) {
	return e && e !== '0%'
}
function Vu(e, t, n) {
	const r = e - n,
		o = t * r
	return n + o
}
function Py(e, t, n, r, o) {
	return o !== void 0 && (e = Vu(e, o, r)), Vu(e, n, r) + t
}
function Oh(e, t = 0, n = 1, r, o) {
	;(e.min = Py(e.min, t, n, r, o)), (e.max = Py(e.max, t, n, r, o))
}
function Zw(e, { x: t, y: n }) {
	Oh(e.x, t.translate, t.scale, t.originPoint), Oh(e.y, n.translate, n.scale, n.originPoint)
}
const Ty = 0.999999999999,
	Ey = 1.0000000000001
function PL(e, t, n, r = !1) {
	const o = n.length
	if (!o) return
	t.x = t.y = 1
	let i, a
	for (let s = 0; s < o; s++) {
		;(i = n[s]), (a = i.projectionDelta)
		const { visualElement: l } = i.options
		;(l && l.props.style && l.props.style.display === 'contents') ||
			(r && i.options.layoutScroll && i.scroll && i !== i.root && Go(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
			a && ((t.x *= a.x.scale), (t.y *= a.y.scale), Zw(e, a)),
			r && Or(i.latestValues) && Go(e, i.latestValues))
	}
	t.x < Ey && t.x > Ty && (t.x = 1), t.y < Ey && t.y > Ty && (t.y = 1)
}
function Ko(e, t) {
	;(e.min = e.min + t), (e.max = e.max + t)
}
function $y(e, t, n, r, o = 0.5) {
	const i = _e(e.min, e.max, o)
	Oh(e, t, n, i, r)
}
function Go(e, t) {
	$y(e.x, t.x, t.scaleX, t.scale, t.originX), $y(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function Jw(e, t) {
	return Xw(_L(e.getBoundingClientRect(), t))
}
function TL(e, t, n) {
	const r = Jw(e, n),
		{ scroll: o } = t
	return o && (Ko(r.x, o.offset.x), Ko(r.y, o.offset.y)), r
}
const ek = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
	EL = new WeakMap()
class $L {
	constructor(t) {
		;(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = Re()),
			(this.visualElement = t)
	}
	start(t, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: r } = this.visualElement
		if (r && r.isPresent === !1) return
		const o = d => {
				const { dragSnapToOrigin: c } = this.getProps()
				c ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Lc(d, 'page').point)
			},
			i = (d, c) => {
				var f
				const { drag: m, dragPropagation: y, onDragStart: g } = this.getProps()
				if (m && !y && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = Kw(m)), !this.openGlobalLock)) return
				;(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
					Dt(p => {
						let h = this.getAxisMotionValue(p).get() || 0
						if (wn.test(h)) {
							const { projection: v } = this.visualElement
							if (v && v.layout) {
								const k = v.layout.layoutBox[p]
								k && (h = Rt(k) * (parseFloat(h) / 100))
							}
						}
						this.originPoint[p] = h
					}),
					g && ae.postRender(() => g(d, c)),
					(f = this.removeWillChange) === null || f === void 0 || f.call(this),
					(this.removeWillChange = jh(this.visualElement, 'transform'))
				const { animationState: x } = this.visualElement
				x && x.setActive('whileDrag', !0)
			},
			a = (d, c) => {
				const { dragPropagation: f, dragDirectionLock: m, onDirectionLock: y, onDrag: g } = this.getProps()
				if (!f && !this.openGlobalLock) return
				const { offset: x } = c
				if (m && this.currentDirection === null) {
					;(this.currentDirection = RL(x)), this.currentDirection !== null && y && y(this.currentDirection)
					return
				}
				this.updateAxis('x', c.point, x), this.updateAxis('y', c.point, x), this.visualElement.render(), g && g(d, c)
			},
			s = (d, c) => this.stop(d, c),
			l = () =>
				Dt(d => {
					var c
					return (
						this.getAnimationState(d) === 'paused' &&
						((c = this.getAxisMotionValue(d).animation) === null || c === void 0 ? void 0 : c.play())
					)
				}),
			{ dragSnapToOrigin: u } = this.getProps()
		this.panSession = new Ww(
			t,
			{ onSessionStart: o, onStart: i, onMove: a, onSessionEnd: s, resumeAnimation: l },
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: u,
				contextWindow: ek(this.visualElement),
			},
		)
	}
	stop(t, n) {
		var r
		;(r = this.removeWillChange) === null || r === void 0 || r.call(this)
		const o = this.isDragging
		if ((this.cancel(), !o)) return
		const { velocity: i } = n
		this.startAnimation(i)
		const { onDragEnd: a } = this.getProps()
		a && ae.postRender(() => a(t, n))
	}
	cancel() {
		this.isDragging = !1
		const { projection: t, animationState: n } = this.visualElement
		t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0)
		const { dragPropagation: r } = this.getProps()
		!r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), n && n.setActive('whileDrag', !1)
	}
	updateAxis(t, n, r) {
		const { drag: o } = this.getProps()
		if (!r || !xl(t, o, this.currentDirection)) return
		const i = this.getAxisMotionValue(t)
		let a = this.originPoint[t] + r[t]
		this.constraints && this.constraints[t] && (a = yL(a, this.constraints[t], this.elastic[t])), i.set(a)
	}
	resolveConstraints() {
		var t
		const { dragConstraints: n, dragElastic: r } = this.getProps(),
			o =
				this.visualElement.projection && !this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: (t = this.visualElement.projection) === null || t === void 0
					? void 0
					: t.layout,
			i = this.constraints
		n && Uo(n)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: n && o
			? (this.constraints = bL(o.layoutBox, n))
			: (this.constraints = !1),
			(this.elastic = kL(r)),
			i !== this.constraints &&
				o &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				Dt(a => {
					this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = wL(o.layoutBox[a], this.constraints[a]))
				})
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps()
		if (!t || !Uo(t)) return !1
		const r = t.current,
			{ projection: o } = this.visualElement
		if (!o || !o.layout) return !1
		const i = TL(r, o.root, this.visualElement.getTransformPagePoint())
		let a = xL(o.layout.layoutBox, i)
		if (n) {
			const s = n(CL(a))
			;(this.hasMutatedConstraints = !!s), s && (a = Xw(s))
		}
		return a
	}
	startAnimation(t) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: o,
				dragTransition: i,
				dragSnapToOrigin: a,
				onDragTransitionEnd: s,
			} = this.getProps(),
			l = this.constraints || {},
			u = Dt(d => {
				if (!xl(d, n, this.currentDirection)) return
				let c = (l && l[d]) || {}
				a && (c = { min: 0, max: 0 })
				const f = o ? 200 : 1e6,
					m = o ? 40 : 1e7,
					y = {
						type: 'inertia',
						velocity: r ? t[d] : 0,
						bounceStiffness: f,
						bounceDamping: m,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...i,
						...c,
					}
				return this.startAxisValueAnimation(d, y)
			})
		return Promise.all(u).then(s)
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t)
		return r.start(Mm(t, r, 0, n, this.visualElement, !1, jh(this.visualElement, t)))
	}
	stopAnimation() {
		Dt(t => this.getAxisMotionValue(t).stop())
	}
	pauseAnimation() {
		Dt(t => {
			var n
			return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
		})
	}
	getAnimationState(t) {
		var n
		return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
	}
	getAxisMotionValue(t) {
		const n = `_drag${t.toUpperCase()}`,
			r = this.visualElement.getProps(),
			o = r[n]
		return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
	}
	snapToCursor(t) {
		Dt(n => {
			const { drag: r } = this.getProps()
			if (!xl(n, r, this.currentDirection)) return
			const { projection: o } = this.visualElement,
				i = this.getAxisMotionValue(n)
			if (o && o.layout) {
				const { min: a, max: s } = o.layout.layoutBox[n]
				i.set(t[n] - _e(a, s, 0.5))
			}
		})
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return
		const { drag: t, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement
		if (!Uo(n) || !r || !this.constraints) return
		this.stopAnimation()
		const o = { x: 0, y: 0 }
		Dt(a => {
			const s = this.getAxisMotionValue(a)
			if (s && this.constraints !== !1) {
				const l = s.get()
				o[a] = SL({ min: l, max: l }, this.constraints[a])
			}
		})
		const { transformTemplate: i } = this.visualElement.getProps()
		;(this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			this.resolveConstraints(),
			Dt(a => {
				if (!xl(a, t, null)) return
				const s = this.getAxisMotionValue(a),
					{ min: l, max: u } = this.constraints[a]
				s.set(_e(l, u, o[a]))
			})
	}
	addListeners() {
		if (!this.visualElement.current) return
		EL.set(this.visualElement, this)
		const t = this.visualElement.current,
			n = Vn(t, 'pointerdown', l => {
				const { drag: u, dragListener: d = !0 } = this.getProps()
				u && d && this.start(l)
			}),
			r = () => {
				const { dragConstraints: l } = this.getProps()
				Uo(l) && l.current && (this.constraints = this.resolveRefConstraints())
			},
			{ projection: o } = this.visualElement,
			i = o.addEventListener('measure', r)
		o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ae.read(r)
		const a = Fn(window, 'resize', () => this.scalePositionWithinConstraints()),
			s = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
				this.isDragging &&
					u &&
					(Dt(d => {
						const c = this.getAxisMotionValue(d)
						c && ((this.originPoint[d] += l[d].translate), c.set(c.get() + l[d].translate))
					}),
					this.visualElement.render())
			})
		return () => {
			a(), n(), i(), s && s()
		}
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: o = !1,
				dragConstraints: i = !1,
				dragElastic: a = Lh,
				dragMomentum: s = !0,
			} = t
		return { ...t, drag: n, dragDirectionLock: r, dragPropagation: o, dragConstraints: i, dragElastic: a, dragMomentum: s }
	}
}
function xl(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e)
}
function RL(e, t = 10) {
	let n = null
	return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n
}
class AL extends $r {
	constructor(t) {
		super(t), (this.removeGroupControls = ot), (this.removeListeners = ot), (this.controls = new $L(t))
	}
	mount() {
		const { dragControls: t } = this.node.getProps()
		t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || ot)
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners()
	}
}
const Ry = e => (t, n) => {
	e && ae.postRender(() => e(t, n))
}
class ML extends $r {
	constructor() {
		super(...arguments), (this.removePointerDownListener = ot)
	}
	onPointerDown(t) {
		this.session = new Ww(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: ek(this.node),
		})
	}
	createPanHandlers() {
		const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps()
		return {
			onSessionStart: Ry(t),
			onStart: Ry(n),
			onMove: r,
			onEnd: (i, a) => {
				delete this.session, o && ae.postRender(() => o(i, a))
			},
		}
	}
	mount() {
		this.removePointerDownListener = Vn(this.node.current, 'pointerdown', t => this.onPointerDown(t))
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers())
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end()
	}
}
const Ps = b.createContext(null)
function tk() {
	const e = b.useContext(Ps)
	if (e === null) return [!0, null]
	const { isPresent: t, onExitComplete: n, register: r } = e,
		o = b.useId()
	b.useEffect(() => r(o), [])
	const i = b.useCallback(() => n && n(o), [o, n])
	return !t && n ? [!1, i] : [!0]
}
function IL() {
	return FL(b.useContext(Ps))
}
function FL(e) {
	return e === null ? !0 : e.isPresent
}
const Fm = b.createContext({}),
	nk = b.createContext({}),
	Jl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function Ay(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const Yi = {
		correct: (e, t) => {
			if (!t.target) return e
			if (typeof e == 'string')
				if (B.test(e)) e = parseFloat(e)
				else return e
			const n = Ay(e, t.target.x),
				r = Ay(e, t.target.y)
			return `${n}% ${r}%`
		},
	},
	jL = {
		correct: (e, { treeScale: t, projectionDelta: n }) => {
			const r = e,
				o = wr.parse(e)
			if (o.length > 5) return r
			const i = wr.createTransformer(e),
				a = typeof o[0] != 'number' ? 1 : 0,
				s = n.x.scale * t.x,
				l = n.y.scale * t.y
			;(o[0 + a] /= s), (o[1 + a] /= l)
			const u = _e(s, l, 0.5)
			return typeof o[2 + a] == 'number' && (o[2 + a] /= u), typeof o[3 + a] == 'number' && (o[3 + a] /= u), i(o)
		},
	},
	Wu = {}
function zL(e) {
	Object.assign(Wu, e)
}
const { schedule: jm, cancel: bV } = rw(queueMicrotask, !1)
class LL extends b.Component {
	componentDidMount() {
		const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props,
			{ projection: i } = t
		zL(DL),
			i &&
				(n.group && n.group.add(i),
				r && r.register && o && r.register(i),
				i.root.didUpdate(),
				i.addEventListener('animationComplete', () => {
					this.safeToRemove()
				}),
				i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
			(Jl.hasEverUpdated = !0)
	}
	getSnapshotBeforeUpdate(t) {
		const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props,
			a = r.projection
		return (
			a &&
				((a.isPresent = i),
				o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(),
				t.isPresent !== i &&
					(i
						? a.promote()
						: a.relegate() ||
						  ae.postRender(() => {
								const s = a.getStack()
								;(!s || !s.members.length) && this.safeToRemove()
						  }))),
			null
		)
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement
		t &&
			(t.root.didUpdate(),
			jm.postRender(() => {
				!t.currentAnimation && t.isLead() && this.safeToRemove()
			}))
	}
	componentWillUnmount() {
		const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
			{ projection: o } = t
		o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o))
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props
		t && t()
	}
	render() {
		return null
	}
}
function rk(e) {
	const [t, n] = tk(),
		r = b.useContext(Fm)
	return S.jsx(LL, { ...e, layoutGroup: r, switchLayoutGroup: b.useContext(nk), isPresent: t, safeToRemove: n })
}
const DL = {
		borderRadius: {
			...Yi,
			applyTo: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'],
		},
		borderTopLeftRadius: Yi,
		borderTopRightRadius: Yi,
		borderBottomLeftRadius: Yi,
		borderBottomRightRadius: Yi,
		boxShadow: jL,
	},
	ok = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	OL = ok.length,
	My = e => (typeof e == 'string' ? parseFloat(e) : e),
	Iy = e => typeof e == 'number' || B.test(e)
function BL(e, t, n, r, o, i) {
	o
		? ((e.opacity = _e(0, n.opacity !== void 0 ? n.opacity : 1, NL(r))),
		  (e.opacityExit = _e(t.opacity !== void 0 ? t.opacity : 1, 0, VL(r))))
		: i && (e.opacity = _e(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r))
	for (let a = 0; a < OL; a++) {
		const s = `border${ok[a]}Radius`
		let l = Fy(t, s),
			u = Fy(n, s)
		if (l === void 0 && u === void 0) continue
		l || (l = 0),
			u || (u = 0),
			l === 0 || u === 0 || Iy(l) === Iy(u)
				? ((e[s] = Math.max(_e(My(l), My(u), r), 0)), (wn.test(u) || wn.test(l)) && (e[s] += '%'))
				: (e[s] = u)
	}
	;(t.rotate || n.rotate) && (e.rotate = _e(t.rotate || 0, n.rotate || 0, r))
}
function Fy(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius
}
const NL = ik(0, 0.5, $w),
	VL = ik(0.5, 0.95, ot)
function ik(e, t, n) {
	return r => (r < e ? 0 : r > t ? 1 : n(as(e, t, r)))
}
function jy(e, t) {
	;(e.min = t.min), (e.max = t.max)
}
function zt(e, t) {
	jy(e.x, t.x), jy(e.y, t.y)
}
function zy(e, t) {
	;(e.translate = t.translate), (e.scale = t.scale), (e.originPoint = t.originPoint), (e.origin = t.origin)
}
function Ly(e, t, n, r, o) {
	return (e -= t), (e = Vu(e, 1 / n, r)), o !== void 0 && (e = Vu(e, 1 / o, r)), e
}
function WL(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
	if ((wn.test(t) && ((t = parseFloat(t)), (t = _e(a.min, a.max, t / 100) - a.min)), typeof t != 'number')) return
	let s = _e(i.min, i.max, r)
	e === i && (s -= t), (e.min = Ly(e.min, t, n, s, o)), (e.max = Ly(e.max, t, n, s, o))
}
function Dy(e, t, [n, r, o], i, a) {
	WL(e, t[n], t[r], t[o], t.scale, i, a)
}
const UL = ['x', 'scaleX', 'originX'],
	HL = ['y', 'scaleY', 'originY']
function Oy(e, t, n, r) {
	Dy(e.x, t, UL, n ? n.x : void 0, r ? r.x : void 0), Dy(e.y, t, HL, n ? n.y : void 0, r ? r.y : void 0)
}
function By(e) {
	return e.translate === 0 && e.scale === 1
}
function ak(e) {
	return By(e.x) && By(e.y)
}
function Ny(e, t) {
	return e.min === t.min && e.max === t.max
}
function KL(e, t) {
	return Ny(e.x, t.x) && Ny(e.y, t.y)
}
function Vy(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function sk(e, t) {
	return Vy(e.x, t.x) && Vy(e.y, t.y)
}
function Wy(e) {
	return Rt(e.x) / Rt(e.y)
}
function Uy(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class GL {
	constructor() {
		this.members = []
	}
	add(t) {
		Fc(this.members, t), t.scheduleRender()
	}
	remove(t) {
		if ((jc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
			const n = this.members[this.members.length - 1]
			n && this.promote(n)
		}
	}
	relegate(t) {
		const n = this.members.findIndex(o => t === o)
		if (n === 0) return !1
		let r
		for (let o = n; o >= 0; o--) {
			const i = this.members[o]
			if (i.isPresent !== !1) {
				r = i
				break
			}
		}
		return r ? (this.promote(r), !0) : !1
	}
	promote(t, n) {
		const r = this.lead
		if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
			r.instance && r.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = r),
				n && (t.resumeFrom.preserveOpacity = !0),
				r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0)
			const { crossfade: o } = t.options
			o === !1 && r.hide()
		}
	}
	exitAnimationComplete() {
		this.members.forEach(t => {
			const { options: n, resumingFrom: r } = t
			n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
		})
	}
	scheduleRender() {
		this.members.forEach(t => {
			t.instance && t.scheduleRender(!1)
		})
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
	}
}
function qL(e, t, n) {
	let r = ''
	const o = e.x.translate / t.x,
		i = e.y.translate / t.y,
		a = (n == null ? void 0 : n.z) || 0
	if (
		((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `),
		(t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
		n)
	) {
		const { transformPerspective: u, rotate: d, rotateX: c, rotateY: f, skewX: m, skewY: y } = n
		u && (r = `perspective(${u}px) ${r}`),
			d && (r += `rotate(${d}deg) `),
			c && (r += `rotateX(${c}deg) `),
			f && (r += `rotateY(${f}deg) `),
			m && (r += `skewX(${m}deg) `),
			y && (r += `skewY(${y}deg) `)
	}
	const s = e.x.scale * t.x,
		l = e.y.scale * t.y
	return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || 'none'
}
const YL = (e, t) => e.depth - t.depth
class XL {
	constructor() {
		;(this.children = []), (this.isDirty = !1)
	}
	add(t) {
		Fc(this.children, t), (this.isDirty = !0)
	}
	remove(t) {
		jc(this.children, t), (this.isDirty = !0)
	}
	forEach(t) {
		this.isDirty && this.children.sort(YL), (this.isDirty = !1), this.children.forEach(t)
	}
}
function eu(e) {
	const t = rt(e) ? e.get() : e
	return Nz(t) ? t.toValue() : t
}
function QL(e, t) {
	const n = Bn.now(),
		r = ({ timestamp: o }) => {
			const i = o - n
			i >= t && (qn(r), e(i - t))
		}
	return ae.read(r, !0), () => qn(r)
}
function ZL(e) {
	return e instanceof SVGElement && e.tagName !== 'svg'
}
function JL(e, t, n) {
	const r = rt(e) ? e : ss(e)
	return r.start(Mm('', r, t, n)), r.animation
}
const Br = { type: 'projectionFrame', totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 },
	ca = typeof window < 'u' && window.MotionDebug !== void 0,
	of = ['', 'X', 'Y', 'Z'],
	eD = { visibility: 'hidden' },
	Hy = 1e3
let tD = 0
function af(e, t, n, r) {
	const { latestValues: o } = t
	o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
}
function lk(e) {
	if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return
	const { visualElement: t } = e.options
	if (!t) return
	const n = Ow(t)
	if (window.MotionHasOptimisedAnimation(n, 'transform')) {
		const { layout: o, layoutId: i } = e.options
		window.MotionCancelOptimisedAnimation(n, 'transform', ae, !(o || i))
	}
	const { parent: r } = e
	r && !r.hasCheckedOptimisedAppear && lk(r)
}
function uk({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
	return class {
		constructor(a = {}, s = t == null ? void 0 : t()) {
			;(this.id = tD++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.hasCheckedOptimisedAppear = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.updateScheduled = !1),
				(this.scheduleUpdate = () => this.update()),
				(this.projectionUpdateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
				}),
				(this.updateProjection = () => {
					;(this.projectionUpdateScheduled = !1),
						ca && (Br.totalNodes = Br.resolvedTargetDeltas = Br.recalculatedProjection = 0),
						this.nodes.forEach(oD),
						this.nodes.forEach(uD),
						this.nodes.forEach(cD),
						this.nodes.forEach(iD),
						ca && window.MotionDebug.record(Br)
				}),
				(this.resolvedRelativeTargetAt = 0),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = a),
				(this.root = s ? s.root || s : this),
				(this.path = s ? [...s.path, s] : []),
				(this.parent = s),
				(this.depth = s ? s.depth + 1 : 0)
			for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0
			this.root === this && (this.nodes = new XL())
		}
		addEventListener(a, s) {
			return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Im()), this.eventHandlers.get(a).add(s)
		}
		notifyListeners(a, ...s) {
			const l = this.eventHandlers.get(a)
			l && l.notify(...s)
		}
		hasListeners(a) {
			return this.eventHandlers.has(a)
		}
		mount(a, s = this.root.hasTreeAnimated) {
			if (this.instance) return
			;(this.isSVG = ZL(a)), (this.instance = a)
			const { layoutId: l, layout: u, visualElement: d } = this.options
			if (
				(d && !d.current && d.mount(a),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				s && (u || l) && (this.isLayoutDirty = !0),
				e)
			) {
				let c
				const f = () => (this.root.updateBlockedByResize = !1)
				e(a, () => {
					;(this.root.updateBlockedByResize = !0),
						c && c(),
						(c = QL(f, 250)),
						Jl.hasAnimatedSinceResize && ((Jl.hasAnimatedSinceResize = !1), this.nodes.forEach(Gy))
				})
			}
			l && this.root.registerSharedNode(l, this),
				this.options.animate !== !1 &&
					d &&
					(l || u) &&
					this.addEventListener('didUpdate', ({ delta: c, hasLayoutChanged: f, hasRelativeTargetChanged: m, layout: y }) => {
						if (this.isTreeAnimationBlocked()) {
							;(this.target = void 0), (this.relativeTarget = void 0)
							return
						}
						const g = this.options.transition || d.getDefaultTransition() || mD,
							{ onLayoutAnimationStart: x, onLayoutAnimationComplete: p } = d.getProps(),
							h = !this.targetLayout || !sk(this.targetLayout, y) || m,
							v = !f && m
						if (
							this.options.layoutRoot ||
							(this.resumeFrom && this.resumeFrom.instance) ||
							v ||
							(f && (h || !this.currentAnimation))
						) {
							this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
								this.setAnimationOrigin(c, v)
							const k = { ...xm(g, 'layout'), onPlay: x, onComplete: p }
							;(d.shouldReduceMotion || this.options.layoutRoot) && ((k.delay = 0), (k.type = !1)), this.startAnimation(k)
						} else f || Gy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete()
						this.targetLayout = y
					})
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
			const a = this.getStack()
			a && a.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), qn(this.updateProjection)
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
		}
		startUpdate() {
			this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(dD), this.animationId++)
		}
		getTransformTemplate() {
			const { visualElement: a } = this.options
			return a && a.getProps().transformTemplate
		}
		willUpdate(a = !0) {
			if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
				this.options.onExitComplete && this.options.onExitComplete()
				return
			}
			if (
				(window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lk(this),
				!this.root.isUpdating && this.root.startUpdate(),
				this.isLayoutDirty)
			)
				return
			this.isLayoutDirty = !0
			for (let d = 0; d < this.path.length; d++) {
				const c = this.path[d]
				;(c.shouldResetTransform = !0), c.updateScroll('snapshot'), c.options.layoutRoot && c.willUpdate(!1)
			}
			const { layoutId: s, layout: l } = this.options
			if (s === void 0 && !l) return
			const u = this.getTransformTemplate()
			;(this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
				this.updateSnapshot(),
				a && this.notifyListeners('willUpdate')
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ky)
				return
			}
			this.isUpdating || this.nodes.forEach(sD),
				(this.isUpdating = !1),
				this.nodes.forEach(lD),
				this.nodes.forEach(nD),
				this.nodes.forEach(rD),
				this.clearAllSnapshots()
			const s = Bn.now()
			;(qe.delta = Sr(0, 1e3 / 60, s - qe.timestamp)),
				(qe.timestamp = s),
				(qe.isProcessing = !0),
				Xd.update.process(qe),
				Xd.preRender.process(qe),
				Xd.render.process(qe),
				(qe.isProcessing = !1)
		}
		didUpdate() {
			this.updateScheduled || ((this.updateScheduled = !0), jm.read(this.scheduleUpdate))
		}
		clearAllSnapshots() {
			this.nodes.forEach(aD), this.sharedNodes.forEach(fD)
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || ((this.projectionUpdateScheduled = !0), ae.preRender(this.updateProjection, !1, !0))
		}
		scheduleCheckAfterUnmount() {
			ae.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
			})
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure())
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
				return
			if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll()
			const a = this.layout
			;(this.layout = this.measure(!1)),
				(this.layoutCorrected = Re()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners('measure', this.layout.layoutBox)
			const { visualElement: s } = this.options
			s && s.notify('LayoutMeasure', this.layout.layoutBox, a ? a.layoutBox : void 0)
		}
		updateScroll(a = 'measure') {
			let s = !!(this.options.layoutScroll && this.instance)
			if ((this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s)) {
				const l = r(this.instance)
				this.scroll = {
					animationId: this.root.animationId,
					phase: a,
					isRoot: l,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : l,
				}
			}
		}
		resetTransform() {
			if (!o) return
			const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
				s = this.projectionDelta && !ak(this.projectionDelta),
				l = this.getTransformTemplate(),
				u = l ? l(this.latestValues, '') : void 0,
				d = u !== this.prevTransformTemplateValue
			a && (s || Or(this.latestValues) || d) && (o(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender())
		}
		measure(a = !0) {
			const s = this.measurePageBox()
			let l = this.removeElementScroll(s)
			return (
				a && (l = this.removeTransform(l)),
				vD(l),
				{ animationId: this.root.animationId, measuredBox: s, layoutBox: l, latestValues: {}, source: this.id }
			)
		}
		measurePageBox() {
			var a
			const { visualElement: s } = this.options
			if (!s) return Re()
			const l = s.measureViewportBox()
			if (!(((a = this.scroll) === null || a === void 0 ? void 0 : a.wasRoot) || this.path.some(gD))) {
				const { scroll: d } = this.root
				d && (Ko(l.x, d.offset.x), Ko(l.y, d.offset.y))
			}
			return l
		}
		removeElementScroll(a) {
			var s
			const l = Re()
			if ((zt(l, a), !((s = this.scroll) === null || s === void 0) && s.wasRoot)) return l
			for (let u = 0; u < this.path.length; u++) {
				const d = this.path[u],
					{ scroll: c, options: f } = d
				d !== this.root && c && f.layoutScroll && (c.wasRoot && zt(l, a), Ko(l.x, c.offset.x), Ko(l.y, c.offset.y))
			}
			return l
		}
		applyTransform(a, s = !1) {
			const l = Re()
			zt(l, a)
			for (let u = 0; u < this.path.length; u++) {
				const d = this.path[u]
				!s && d.options.layoutScroll && d.scroll && d !== d.root && Go(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
					Or(d.latestValues) && Go(l, d.latestValues)
			}
			return Or(this.latestValues) && Go(l, this.latestValues), l
		}
		removeTransform(a) {
			const s = Re()
			zt(s, a)
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l]
				if (!u.instance || !Or(u.latestValues)) continue
				Dh(u.latestValues) && u.updateSnapshot()
				const d = Re(),
					c = u.measurePageBox()
				zt(d, c), Oy(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
			}
			return Or(this.latestValues) && Oy(s, this.latestValues), s
		}
		setTargetDelta(a) {
			;(this.targetDelta = a), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
		}
		setOptions(a) {
			this.options = { ...this.options, ...a, crossfade: a.crossfade !== void 0 ? a.crossfade : !0 }
		}
		clearMeasurements() {
			;(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1)
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== qe.timestamp &&
				this.relativeParent.resolveTargetDelta(!0)
		}
		resolveTargetDelta(a = !1) {
			var s
			const l = this.getLead()
			this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
				this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty)
			const u = !!this.resumingFrom || this !== l
			if (
				!(
					a ||
					(u && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((s = this.parent) === null || s === void 0) && s.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget ||
					this.root.updateBlockedByResize
				)
			)
				return
			const { layout: c, layoutId: f } = this.options
			if (!(!this.layout || !(c || f))) {
				if (((this.resolvedRelativeTargetAt = qe.timestamp), !this.targetDelta && !this.relativeTarget)) {
					const m = this.getClosestProjectingParent()
					m && m.layout && this.animationProgress !== 1
						? ((this.relativeParent = m),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = Re()),
						  (this.relativeTargetOrigin = Re()),
						  $a(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
						  zt(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0)
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target || ((this.target = Re()), (this.targetWithTransforms = Re())),
						this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(), gL(this.target, this.relativeTarget, this.relativeParent.target))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: zt(this.target, this.layout.layoutBox),
							  Zw(this.target, this.targetDelta))
							: zt(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1
						const m = this.getClosestProjectingParent()
						m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1
							? ((this.relativeParent = m),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = Re()),
							  (this.relativeTargetOrigin = Re()),
							  $a(this.relativeTargetOrigin, this.target, m.target),
							  zt(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0)
					}
					ca && Br.resolvedTargetDeltas++
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Dh(this.parent.latestValues) || Qw(this.parent.latestValues)))
				return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
		}
		calcProjection() {
			var a
			const s = this.getLead(),
				l = !!this.resumingFrom || this !== s
			let u = !0
			if (
				((this.isProjectionDirty || (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty)) && (u = !1),
				l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
				this.resolvedRelativeTargetAt === qe.timestamp && (u = !1),
				u)
			)
				return
			const { layout: d, layoutId: c } = this.options
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(d || c))
			)
				return
			zt(this.layoutCorrected, this.layout.layoutBox)
			const f = this.treeScale.x,
				m = this.treeScale.y
			PL(this.layoutCorrected, this.treeScale, this.path, l),
				s.layout &&
					!s.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					((s.target = s.layout.layoutBox), (s.targetWithTransforms = Re()))
			const { target: y } = s
			if (!y) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
				return
			}
			!this.projectionDelta || !this.prevProjectionDelta
				? this.createProjectionDeltas()
				: (zy(this.prevProjectionDelta.x, this.projectionDelta.x), zy(this.prevProjectionDelta.y, this.projectionDelta.y)),
				Ea(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
				(this.treeScale.x !== f ||
					this.treeScale.y !== m ||
					!Uy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
					!Uy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
					((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners('projectionUpdate', y)),
				ca && Br.recalculatedProjection++
		}
		hide() {
			this.isVisible = !1
		}
		show() {
			this.isVisible = !0
		}
		scheduleRender(a = !0) {
			var s
			if (((s = this.options.visualElement) === null || s === void 0 || s.scheduleRender(), a)) {
				const l = this.getStack()
				l && l.scheduleRender()
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
		}
		createProjectionDeltas() {
			;(this.prevProjectionDelta = Ho()), (this.projectionDelta = Ho()), (this.projectionDeltaWithTransform = Ho())
		}
		setAnimationOrigin(a, s = !1) {
			const l = this.snapshot,
				u = l ? l.latestValues : {},
				d = { ...this.latestValues },
				c = Ho()
			;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !s)
			const f = Re(),
				m = l ? l.source : void 0,
				y = this.layout ? this.layout.source : void 0,
				g = m !== y,
				x = this.getStack(),
				p = !x || x.members.length <= 1,
				h = !!(g && !p && this.options.crossfade === !0 && !this.path.some(pD))
			this.animationProgress = 0
			let v
			;(this.mixTargetDelta = k => {
				const C = k / 1e3
				qy(c.x, a.x, C),
					qy(c.y, a.y, C),
					this.setTargetDelta(c),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						($a(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						hD(this.relativeTarget, this.relativeTargetOrigin, f, C),
						v && KL(this.relativeTarget, v) && (this.isProjectionDirty = !1),
						v || (v = Re()),
						zt(v, this.relativeTarget)),
					g && ((this.animationValues = d), BL(d, u, this.latestValues, C, h, p)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = C)
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
		}
		startAnimation(a) {
			this.notifyListeners('animationStart'),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation && (qn(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = ae.update(() => {
					;(Jl.hasAnimatedSinceResize = !0),
						(this.currentAnimation = JL(0, Hy, {
							...a,
							onUpdate: s => {
								this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s)
							},
							onComplete: () => {
								a.onComplete && a.onComplete(), this.completeAnimation()
							},
						})),
						this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0)
				}))
		}
		completeAnimation() {
			this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0))
			const a = this.getStack()
			a && a.exitAnimationComplete(),
				(this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
				this.notifyListeners('animationComplete')
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Hy), this.currentAnimation.stop()),
				this.completeAnimation()
		}
		applyTransformsToTarget() {
			const a = this.getLead()
			let { targetWithTransforms: s, target: l, layout: u, latestValues: d } = a
			if (!(!s || !l || !u)) {
				if (this !== a && this.layout && u && ck(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
					l = this.target || Re()
					const c = Rt(this.layout.layoutBox.x)
					;(l.x.min = a.target.x.min), (l.x.max = l.x.min + c)
					const f = Rt(this.layout.layoutBox.y)
					;(l.y.min = a.target.y.min), (l.y.max = l.y.min + f)
				}
				zt(s, l), Go(s, d), Ea(this.projectionDeltaWithTransform, this.layoutCorrected, s, d)
			}
		}
		registerSharedNode(a, s) {
			this.sharedNodes.has(a) || this.sharedNodes.set(a, new GL()), this.sharedNodes.get(a).add(s)
			const u = s.options.initialPromotionConfig
			s.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0,
			})
		}
		isLead() {
			const a = this.getStack()
			return a ? a.lead === this : !0
		}
		getLead() {
			var a
			const { layoutId: s } = this.options
			return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
		}
		getPrevLead() {
			var a
			const { layoutId: s } = this.options
			return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead) : void 0
		}
		getStack() {
			const { layoutId: a } = this.options
			if (a) return this.root.sharedNodes.get(a)
		}
		promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
			const u = this.getStack()
			u && u.promote(this, l),
				a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				s && this.setOptions({ transition: s })
		}
		relegate() {
			const a = this.getStack()
			return a ? a.relegate(this) : !1
		}
		resetSkewAndRotation() {
			const { visualElement: a } = this.options
			if (!a) return
			let s = !1
			const { latestValues: l } = a
			if (((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (s = !0), !s)) return
			const u = {}
			l.z && af('z', a, u, this.animationValues)
			for (let d = 0; d < of.length; d++)
				af(`rotate${of[d]}`, a, u, this.animationValues), af(`skew${of[d]}`, a, u, this.animationValues)
			a.render()
			for (const d in u) a.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d])
			a.scheduleRender()
		}
		getProjectionStyles(a) {
			var s, l
			if (!this.instance || this.isSVG) return
			if (!this.isVisible) return eD
			const u = { visibility: '' },
				d = this.getTransformTemplate()
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(u.opacity = ''),
					(u.pointerEvents = eu(a == null ? void 0 : a.pointerEvents) || ''),
					(u.transform = d ? d(this.latestValues, '') : 'none'),
					u
				)
			const c = this.getLead()
			if (!this.projectionDelta || !this.layout || !c.target) {
				const g = {}
				return (
					this.options.layoutId &&
						((g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
						(g.pointerEvents = eu(a == null ? void 0 : a.pointerEvents) || '')),
					this.hasProjected && !Or(this.latestValues) && ((g.transform = d ? d({}, '') : 'none'), (this.hasProjected = !1)),
					g
				)
			}
			const f = c.animationValues || c.latestValues
			this.applyTransformsToTarget(),
				(u.transform = qL(this.projectionDeltaWithTransform, this.treeScale, f)),
				d && (u.transform = d(f, u.transform))
			const { x: m, y } = this.projectionDelta
			;(u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
				c.animationValues
					? (u.opacity =
							c === this
								? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0
									? l
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: f.opacityExit)
					: (u.opacity = c === this ? (f.opacity !== void 0 ? f.opacity : '') : f.opacityExit !== void 0 ? f.opacityExit : 0)
			for (const g in Wu) {
				if (f[g] === void 0) continue
				const { correct: x, applyTo: p } = Wu[g],
					h = u.transform === 'none' ? f[g] : x(f[g], c)
				if (p) {
					const v = p.length
					for (let k = 0; k < v; k++) u[p[k]] = h
				} else u[g] = h
			}
			return this.options.layoutId && (u.pointerEvents = c === this ? eu(a == null ? void 0 : a.pointerEvents) || '' : 'none'), u
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0
		}
		resetTree() {
			this.root.nodes.forEach(a => {
				var s
				return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop()
			}),
				this.root.nodes.forEach(Ky),
				this.root.sharedNodes.clear()
		}
	}
}
function nD(e) {
	e.updateLayout()
}
function rD(e) {
	var t
	const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
	if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
		const { layoutBox: r, measuredBox: o } = e.layout,
			{ animationType: i } = e.options,
			a = n.source !== e.layout.source
		i === 'size'
			? Dt(c => {
					const f = a ? n.measuredBox[c] : n.layoutBox[c],
						m = Rt(f)
					;(f.min = r[c].min), (f.max = f.min + m)
			  })
			: ck(i, n.layoutBox, r) &&
			  Dt(c => {
					const f = a ? n.measuredBox[c] : n.layoutBox[c],
						m = Rt(r[c])
					;(f.max = f.min + m),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0), (e.relativeTarget[c].max = e.relativeTarget[c].min + m))
			  })
		const s = Ho()
		Ea(s, r, n.layoutBox)
		const l = Ho()
		a ? Ea(l, e.applyTransform(o, !0), n.measuredBox) : Ea(l, r, n.layoutBox)
		const u = !ak(s)
		let d = !1
		if (!e.resumeFrom) {
			const c = e.getClosestProjectingParent()
			if (c && !c.resumeFrom) {
				const { snapshot: f, layout: m } = c
				if (f && m) {
					const y = Re()
					$a(y, n.layoutBox, f.layoutBox)
					const g = Re()
					$a(g, r, m.layoutBox),
						sk(y, g) || (d = !0),
						c.options.layoutRoot && ((e.relativeTarget = g), (e.relativeTargetOrigin = y), (e.relativeParent = c))
				}
			}
		}
		e.notifyListeners('didUpdate', {
			layout: r,
			snapshot: n,
			delta: l,
			layoutDelta: s,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: d,
		})
	} else if (e.isLead()) {
		const { onExitComplete: r } = e.options
		r && r()
	}
	e.options.transition = void 0
}
function oD(e) {
	ca && Br.totalNodes++,
		e.parent &&
			(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
			e.isSharedProjectionDirty ||
				(e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
			e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function iD(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function aD(e) {
	e.clearSnapshot()
}
function Ky(e) {
	e.clearMeasurements()
}
function sD(e) {
	e.isLayoutDirty = !1
}
function lD(e) {
	const { visualElement: t } = e.options
	t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform()
}
function Gy(e) {
	e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0)
}
function uD(e) {
	e.resolveTargetDelta()
}
function cD(e) {
	e.calcProjection()
}
function dD(e) {
	e.resetSkewAndRotation()
}
function fD(e) {
	e.removeLeadSnapshot()
}
function qy(e, t, n) {
	;(e.translate = _e(t.translate, 0, n)), (e.scale = _e(t.scale, 1, n)), (e.origin = t.origin), (e.originPoint = t.originPoint)
}
function Yy(e, t, n, r) {
	;(e.min = _e(t.min, n.min, r)), (e.max = _e(t.max, n.max, r))
}
function hD(e, t, n, r) {
	Yy(e.x, t.x, n.x, r), Yy(e.y, t.y, n.y, r)
}
function pD(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0
}
const mD = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Xy = e => typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
	Qy = Xy('applewebkit/') && !Xy('chrome/') ? Math.round : ot
function Zy(e) {
	;(e.min = Qy(e.min)), (e.max = Qy(e.max))
}
function vD(e) {
	Zy(e.x), Zy(e.y)
}
function ck(e, t, n) {
	return e === 'position' || (e === 'preserve-aspect' && !vL(Wy(t), Wy(n), 0.2))
}
function gD(e) {
	var t
	return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const yD = uk({
		attachResizeListener: (e, t) => Fn(e, 'resize', t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	sf = { current: void 0 },
	dk = uk({
		measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!sf.current) {
				const e = new yD({})
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (sf.current = e)
			}
			return sf.current
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : 'none'
		},
		checkIsScrollRoot: e => window.getComputedStyle(e).position === 'fixed',
	}),
	bD = { pan: { Feature: ML }, drag: { Feature: AL, ProjectionNode: dk, MeasureLayout: rk } }
function Jy(e, t) {
	const n = t ? 'pointerenter' : 'pointerleave',
		r = t ? 'onHoverStart' : 'onHoverEnd',
		o = (i, a) => {
			if (i.pointerType === 'touch' || Gw()) return
			const s = e.getProps()
			e.animationState && s.whileHover && e.animationState.setActive('whileHover', t)
			const l = s[r]
			l && ae.postRender(() => l(i, a))
		}
	return Vn(e.current, n, o, { passive: !e.getProps()[r] })
}
class xD extends $r {
	mount() {
		this.unmount = Nn(Jy(this.node, !0), Jy(this.node, !1))
	}
	unmount() {}
}
class SD extends $r {
	constructor() {
		super(...arguments), (this.isActive = !1)
	}
	onFocus() {
		let t = !1
		try {
			t = this.node.current.matches(':focus-visible')
		} catch {
			t = !0
		}
		!t || !this.node.animationState || (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0))
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1))
	}
	mount() {
		this.unmount = Nn(
			Fn(this.node.current, 'focus', () => this.onFocus()),
			Fn(this.node.current, 'blur', () => this.onBlur()),
		)
	}
	unmount() {}
}
const fk = (e, t) => (t ? (e === t ? !0 : fk(e, t.parentElement)) : !1)
function lf(e, t) {
	if (!t) return
	const n = new PointerEvent('pointer' + e)
	t(n, Lc(n))
}
class wD extends $r {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = ot),
			(this.removeEndListeners = ot),
			(this.removeAccessibleListeners = ot),
			(this.startPointerPress = (t, n) => {
				if (this.isPressing) return
				this.removeEndListeners()
				const r = this.node.getProps(),
					i = Vn(
						window,
						'pointerup',
						(s, l) => {
							if (!this.checkPressEnd()) return
							const { onTap: u, onTapCancel: d, globalTapTarget: c } = this.node.getProps(),
								f = !c && !fk(this.node.current, s.target) ? d : u
							f && ae.update(() => f(s, l))
						},
						{ passive: !(r.onTap || r.onPointerUp) },
					),
					a = Vn(window, 'pointercancel', (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) })
				;(this.removeEndListeners = Nn(i, a)), this.startPress(t, n)
			}),
			(this.startAccessiblePress = () => {
				const t = i => {
						if (i.key !== 'Enter' || this.isPressing) return
						const a = s => {
							s.key !== 'Enter' ||
								!this.checkPressEnd() ||
								lf('up', (l, u) => {
									const { onTap: d } = this.node.getProps()
									d && ae.postRender(() => d(l, u))
								})
						}
						this.removeEndListeners(),
							(this.removeEndListeners = Fn(this.node.current, 'keyup', a)),
							lf('down', (s, l) => {
								this.startPress(s, l)
							})
					},
					n = Fn(this.node.current, 'keydown', t),
					r = () => {
						this.isPressing && lf('cancel', (i, a) => this.cancelPress(i, a))
					},
					o = Fn(this.node.current, 'blur', r)
				this.removeAccessibleListeners = Nn(n, o)
			})
	}
	startPress(t, n) {
		this.isPressing = !0
		const { onTapStart: r, whileTap: o } = this.node.getProps()
		o && this.node.animationState && this.node.animationState.setActive('whileTap', !0), r && ae.postRender(() => r(t, n))
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive('whileTap', !1),
			!Gw()
		)
	}
	cancelPress(t, n) {
		if (!this.checkPressEnd()) return
		const { onTapCancel: r } = this.node.getProps()
		r && ae.postRender(() => r(t, n))
	}
	mount() {
		const t = this.node.getProps(),
			n = Vn(t.globalTapTarget ? window : this.node.current, 'pointerdown', this.startPointerPress, {
				passive: !(t.onTapStart || t.onPointerStart),
			}),
			r = Fn(this.node.current, 'focus', this.startAccessiblePress)
		this.removeStartListeners = Nn(n, r)
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
	}
}
const Bh = new WeakMap(),
	uf = new WeakMap(),
	kD = e => {
		const t = Bh.get(e.target)
		t && t(e)
	},
	CD = e => {
		e.forEach(kD)
	}
function _D({ root: e, ...t }) {
	const n = e || document
	uf.has(n) || uf.set(n, {})
	const r = uf.get(n),
		o = JSON.stringify(t)
	return r[o] || (r[o] = new IntersectionObserver(CD, { root: e, ...t })), r[o]
}
function PD(e, t, n) {
	const r = _D(t)
	return (
		Bh.set(e, n),
		r.observe(e),
		() => {
			Bh.delete(e), r.unobserve(e)
		}
	)
}
const TD = { some: 0, all: 1 }
class ED extends $r {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
	}
	startObserver() {
		this.unmount()
		const { viewport: t = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: o = 'some', once: i } = t,
			a = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof o == 'number' ? o : TD[o] },
			s = l => {
				const { isIntersecting: u } = l
				if (this.isInView === u || ((this.isInView = u), i && !u && this.hasEnteredView)) return
				u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive('whileInView', u)
				const { onViewportEnter: d, onViewportLeave: c } = this.node.getProps(),
					f = u ? d : c
				f && f(l)
			}
		return PD(this.node.current, a, s)
	}
	mount() {
		this.startObserver()
	}
	update() {
		if (typeof IntersectionObserver > 'u') return
		const { props: t, prevProps: n } = this.node
		;['amount', 'margin', 'root'].some($D(t, n)) && this.startObserver()
	}
	unmount() {}
}
function $D({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return n => e[n] !== t[n]
}
const RD = { inView: { Feature: ED }, tap: { Feature: wD }, focus: { Feature: SD }, hover: { Feature: xD } },
	AD = { layout: { ProjectionNode: dk, MeasureLayout: rk } },
	zm = b.createContext({ transformPagePoint: e => e, isStatic: !1, reducedMotion: 'never' }),
	Dc = b.createContext({}),
	Lm = typeof window < 'u',
	hk = Lm ? b.useLayoutEffect : b.useEffect,
	pk = b.createContext({ strict: !1 })
let e1 = !1
function MD(e, t, n, r, o) {
	var i
	const { visualElement: a } = b.useContext(Dc),
		s = b.useContext(pk),
		l = b.useContext(Ps),
		u = b.useContext(zm).reducedMotion,
		d = b.useRef()
	;(r = r || s.renderer),
		!d.current &&
			r &&
			(d.current = r(e, {
				visualState: t,
				parent: a,
				props: n,
				presenceContext: l,
				blockInitialAnimation: l ? l.initial === !1 : !1,
				reducedMotionConfig: u,
			}))
	const c = d.current,
		f = b.useContext(nk)
	c && !c.projection && o && (c.type === 'html' || c.type === 'svg') && FD(d.current, n, o, f),
		b.useInsertionEffect(() => {
			c && c.update(n, l)
		})
	const m = n[Dw],
		y = b.useRef(
			!!m &&
				!window.MotionHandoffIsComplete &&
				((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, m)),
		)
	return (
		hk(() => {
			c && (c.updateFeatures(), jm.render(c.render), y.current && c.animationState && c.animationState.animateChanges())
		}),
		b.useEffect(() => {
			c &&
				(!y.current && c.animationState && c.animationState.animateChanges(),
				(y.current = !1),
				e1 || ((e1 = !0), queueMicrotask(ID)))
		}),
		c
	)
}
function ID() {
	window.MotionHandoffIsComplete = !0
}
function FD(e, t, n, r) {
	const { layoutId: o, layout: i, drag: a, dragConstraints: s, layoutScroll: l, layoutRoot: u } = t
	;(e.projection = new n(e.latestValues, t['data-framer-portal-id'] ? void 0 : mk(e.parent))),
		e.projection.setOptions({
			layoutId: o,
			layout: i,
			alwaysMeasureLayout: !!a || (s && Uo(s)),
			visualElement: e,
			animationType: typeof i == 'string' ? i : 'both',
			initialPromotionConfig: r,
			layoutScroll: l,
			layoutRoot: u,
		})
}
function mk(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : mk(e.parent)
}
function jD(e, t, n) {
	return b.useCallback(
		r => {
			r && e.mount && e.mount(r),
				t && (r ? t.mount(r) : t.unmount()),
				n && (typeof n == 'function' ? n(r) : Uo(n) && (n.current = r))
		},
		[t],
	)
}
function Oc(e) {
	return rs(e.animate) || bm.some(t => os(e[t]))
}
function vk(e) {
	return !!(Oc(e) || e.variants)
}
function zD(e, t) {
	if (Oc(e)) {
		const { initial: n, animate: r } = e
		return { initial: n === !1 || os(n) ? n : void 0, animate: os(r) ? r : void 0 }
	}
	return e.inherit !== !1 ? t : {}
}
function LD(e) {
	const { initial: t, animate: n } = zD(e, b.useContext(Dc))
	return b.useMemo(() => ({ initial: t, animate: n }), [t1(t), t1(n)])
}
function t1(e) {
	return Array.isArray(e) ? e.join(' ') : e
}
const n1 = {
		animation: ['animate', 'variants', 'whileHover', 'whileTap', 'exit', 'whileInView', 'whileFocus', 'whileDrag'],
		exit: ['exit'],
		drag: ['drag', 'dragControls'],
		focus: ['whileFocus'],
		hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
		tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
		pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
		inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
		layout: ['layout', 'layoutId'],
	},
	xi = {}
for (const e in n1) xi[e] = { isEnabled: t => n1[e].some(n => !!t[n]) }
function DD(e) {
	for (const t in e) xi[t] = { ...xi[t], ...e[t] }
}
const OD = Symbol.for('motionComponentSymbol')
function BD({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
	e && DD(e)
	function i(s, l) {
		let u
		const d = { ...b.useContext(zm), ...s, layoutId: ND(s) },
			{ isStatic: c } = d,
			f = LD(s),
			m = r(s, c)
		if (!c && Lm) {
			VD()
			const y = WD(d)
			;(u = y.MeasureLayout), (f.visualElement = MD(o, m, d, t, y.ProjectionNode))
		}
		return S.jsxs(Dc.Provider, {
			value: f,
			children: [
				u && f.visualElement ? S.jsx(u, { visualElement: f.visualElement, ...d }) : null,
				n(o, s, jD(m, f.visualElement, l), m, c, f.visualElement),
			],
		})
	}
	const a = b.forwardRef(i)
	return (a[OD] = o), a
}
function ND({ layoutId: e }) {
	const t = b.useContext(Fm).id
	return t && e !== void 0 ? t + '-' + e : e
}
function VD(e, t) {
	b.useContext(pk).strict
}
function WD(e) {
	const { drag: t, layout: n } = xi
	if (!t && !n) return {}
	const r = { ...t, ...n }
	return {
		MeasureLayout: (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e)) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode,
	}
}
const UD = [
	'animate',
	'circle',
	'defs',
	'desc',
	'ellipse',
	'g',
	'image',
	'line',
	'filter',
	'marker',
	'mask',
	'metadata',
	'path',
	'pattern',
	'polygon',
	'polyline',
	'rect',
	'stop',
	'switch',
	'symbol',
	'svg',
	'text',
	'tspan',
	'use',
	'view',
]
function Dm(e) {
	return typeof e != 'string' || e.includes('-') ? !1 : !!(UD.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function gk(e, { style: t, vars: n }, r, o) {
	Object.assign(e.style, t, o && o.getProjectionStyles(r))
	for (const i in n) e.style.setProperty(i, n[i])
}
const yk = new Set([
	'baseFrequency',
	'diffuseConstant',
	'kernelMatrix',
	'kernelUnitLength',
	'keySplines',
	'keyTimes',
	'limitingConeAngle',
	'markerHeight',
	'markerWidth',
	'numOctaves',
	'targetX',
	'targetY',
	'surfaceScale',
	'specularConstant',
	'specularExponent',
	'stdDeviation',
	'tableValues',
	'viewBox',
	'gradientTransform',
	'pathLength',
	'startOffset',
	'textLength',
	'lengthAdjust',
])
function bk(e, t, n, r) {
	gk(e, t, void 0, r)
	for (const o in t.attrs) e.setAttribute(yk.has(o) ? o : zc(o), t.attrs[o])
}
function xk(e, { layout: t, layoutId: n }) {
	return Er.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!Wu[e] || e === 'opacity'))
}
function Om(e, t, n) {
	var r
	const { style: o } = e,
		i = {}
	for (const a in o)
		(rt(o[a]) ||
			(t.style && rt(t.style[a])) ||
			xk(a, e) ||
			((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) &&
			(i[a] = o[a])
	return n && o && typeof o.willChange == 'string' && (n.applyWillChange = !1), i
}
function Sk(e, t, n) {
	const r = Om(e, t, n)
	for (const o in e)
		if (rt(e[o]) || rt(t[o])) {
			const i = ws.indexOf(o) !== -1 ? 'attr' + o.charAt(0).toUpperCase() + o.substring(1) : o
			r[i] = e[o]
		}
	return r
}
function Bm(e) {
	const t = b.useRef(null)
	return t.current === null && (t.current = e()), t.current
}
function HD({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, o, i, a, s) {
	const l = { latestValues: GD(o, i, a, s ? !1 : e, t), renderState: n() }
	return r && (l.mount = u => r(o, u, l)), l
}
const wk = e => (t, n) => {
	const r = b.useContext(Dc),
		o = b.useContext(Ps),
		i = () => HD(e, t, r, o, n)
	return n ? i() : Bm(i)
}
function KD(e, t) {
	const n = Bw(t)
	n && Fc(e, n)
}
function r1(e, t, n) {
	const r = Array.isArray(t) ? t : [t]
	for (let o = 0; o < r.length; o++) {
		const i = gm(e, r[o])
		if (i) {
			const { transitionEnd: a, transition: s, ...l } = i
			n(l, a)
		}
	}
}
function GD(e, t, n, r, o) {
	var i
	const a = {},
		s = [],
		l = r && ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) === void 0,
		u = o(e, {})
	for (const x in u) a[x] = eu(u[x])
	let { initial: d, animate: c } = e
	const f = Oc(e),
		m = vk(e)
	t && m && !f && e.inherit !== !1 && (d === void 0 && (d = t.initial), c === void 0 && (c = t.animate))
	let y = n ? n.initial === !1 : !1
	y = y || d === !1
	const g = y ? c : d
	return (
		g &&
			typeof g != 'boolean' &&
			!rs(g) &&
			r1(e, g, (x, p) => {
				for (const h in x) {
					let v = x[h]
					if (Array.isArray(v)) {
						const k = y ? v.length - 1 : 0
						v = v[k]
					}
					v !== null && (a[h] = v)
				}
				for (const h in p) a[h] = p[h]
			}),
		l &&
			(c &&
				d !== !1 &&
				!rs(c) &&
				r1(e, c, x => {
					for (const p in x) KD(s, p)
				}),
			s.length && (a.willChange = s.join(','))),
		a
	)
}
const Nm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
	kk = () => ({ ...Nm(), attrs: {} }),
	Ck = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
	qD = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
	YD = ws.length
function XD(e, t, n) {
	let r = '',
		o = !0
	for (let i = 0; i < YD; i++) {
		const a = ws[i],
			s = e[a]
		if (s === void 0) continue
		let l = !0
		if ((typeof s == 'number' ? (l = s === (a.startsWith('scale') ? 1 : 0)) : (l = parseFloat(s) === 0), !l || n)) {
			const u = Ck(s, _m[a])
			if (!l) {
				o = !1
				const d = qD[a] || a
				r += `${d}(${u}) `
			}
			n && (t[a] = u)
		}
	}
	return (r = r.trim()), n ? (r = n(t, o ? '' : r)) : o && (r = 'none'), r
}
function Vm(e, t, n) {
	const { style: r, vars: o, transformOrigin: i } = e
	let a = !1,
		s = !1
	for (const l in t) {
		const u = t[l]
		if (Er.has(l)) {
			a = !0
			continue
		} else if (sw(l)) {
			o[l] = u
			continue
		} else {
			const d = Ck(u, _m[l])
			l.startsWith('origin') ? ((s = !0), (i[l] = d)) : (r[l] = d)
		}
	}
	if ((t.transform || (a || n ? (r.transform = XD(t, e.transform, n)) : r.transform && (r.transform = 'none')), s)) {
		const { originX: l = '50%', originY: u = '50%', originZ: d = 0 } = i
		r.transformOrigin = `${l} ${u} ${d}`
	}
}
function o1(e, t, n) {
	return typeof e == 'string' ? e : B.transform(t + n * e)
}
function QD(e, t, n) {
	const r = o1(t, e.x, e.width),
		o = o1(n, e.y, e.height)
	return `${r} ${o}`
}
const ZD = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	JD = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function eO(e, t, n = 1, r = 0, o = !0) {
	e.pathLength = 1
	const i = o ? ZD : JD
	e[i.offset] = B.transform(-r)
	const a = B.transform(t),
		s = B.transform(n)
	e[i.array] = `${a} ${s}`
}
function Wm(
	e,
	{ attrX: t, attrY: n, attrScale: r, originX: o, originY: i, pathLength: a, pathSpacing: s = 1, pathOffset: l = 0, ...u },
	d,
	c,
) {
	if ((Vm(e, u, c), d)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
		return
	}
	;(e.attrs = e.style), (e.style = {})
	const { attrs: f, style: m, dimensions: y } = e
	f.transform && (y && (m.transform = f.transform), delete f.transform),
		y &&
			(o !== void 0 || i !== void 0 || m.transform) &&
			(m.transformOrigin = QD(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)),
		t !== void 0 && (f.x = t),
		n !== void 0 && (f.y = n),
		r !== void 0 && (f.scale = r),
		a !== void 0 && eO(f, a, s, l, !1)
}
const Um = e => typeof e == 'string' && e.toLowerCase() === 'svg',
	tO = {
		useVisualState: wk({
			scrapeMotionValuesFromProps: Sk,
			createRenderState: kk,
			onMount: (e, t, { renderState: n, latestValues: r }) => {
				ae.read(() => {
					try {
						n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
					} catch {
						n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
					}
				}),
					ae.render(() => {
						Wm(n, r, Um(t.tagName), e.transformTemplate), bk(t, n)
					})
			},
		}),
	},
	nO = { useVisualState: wk({ applyWillChange: !0, scrapeMotionValuesFromProps: Om, createRenderState: Nm }) }
function _k(e, t, n) {
	for (const r in t) !rt(t[r]) && !xk(r, n) && (e[r] = t[r])
}
function rO({ transformTemplate: e }, t) {
	return b.useMemo(() => {
		const n = Nm()
		return Vm(n, t, e), Object.assign({}, n.vars, n.style)
	}, [t])
}
function oO(e, t) {
	const n = e.style || {},
		r = {}
	return _k(r, n, e), Object.assign(r, rO(e, t)), r
}
function iO(e, t) {
	const n = {},
		r = oO(e, t)
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((n.draggable = !1),
			(r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
			(r.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
		e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
		(n.style = r),
		n
	)
}
const aO = new Set([
	'animate',
	'exit',
	'variants',
	'initial',
	'style',
	'values',
	'variants',
	'transition',
	'transformTemplate',
	'custom',
	'inherit',
	'onBeforeLayoutMeasure',
	'onAnimationStart',
	'onAnimationComplete',
	'onUpdate',
	'onDragStart',
	'onDrag',
	'onDragEnd',
	'onMeasureDragConstraints',
	'onDirectionLock',
	'onDragTransitionEnd',
	'_dragX',
	'_dragY',
	'onHoverStart',
	'onHoverEnd',
	'onViewportEnter',
	'onViewportLeave',
	'globalTapTarget',
	'ignoreStrict',
	'viewport',
])
function Uu(e) {
	return (
		e.startsWith('while') ||
		(e.startsWith('drag') && e !== 'draggable') ||
		e.startsWith('layout') ||
		e.startsWith('onTap') ||
		e.startsWith('onPan') ||
		e.startsWith('onLayout') ||
		aO.has(e)
	)
}
let Pk = e => !Uu(e)
function sO(e) {
	e && (Pk = t => (t.startsWith('on') ? !Uu(t) : e(t)))
}
try {
	sO(require('@emotion/is-prop-valid').default)
} catch {}
function lO(e, t, n) {
	const r = {}
	for (const o in e)
		(o === 'values' && typeof e.values == 'object') ||
			((Pk(o) || (n === !0 && Uu(o)) || (!t && !Uu(o)) || (e.draggable && o.startsWith('onDrag'))) && (r[o] = e[o]))
	return r
}
function uO(e, t, n, r) {
	const o = b.useMemo(() => {
		const i = kk()
		return Wm(i, t, Um(r), e.transformTemplate), { ...i.attrs, style: { ...i.style } }
	}, [t])
	if (e.style) {
		const i = {}
		_k(i, e.style, e), (o.style = { ...i, ...o.style })
	}
	return o
}
function cO(e = !1) {
	return (n, r, o, { latestValues: i }, a) => {
		const l = (Dm(n) ? uO : iO)(r, i, a, n),
			u = lO(r, typeof n == 'string', e),
			d = n !== b.Fragment ? { ...u, ...l, ref: o } : {},
			{ children: c } = r,
			f = b.useMemo(() => (rt(c) ? c.get() : c), [c])
		return b.createElement(n, { ...d, children: f })
	}
}
function dO(e, t) {
	return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
		const a = { ...(Dm(r) ? tO : nO), preloadedFeatures: e, useRender: cO(o), createVisualElement: t, Component: r }
		return BD(a)
	}
}
const Nh = { current: null },
	Tk = { current: !1 }
function fO() {
	if (((Tk.current = !0), !!Lm))
		if (window.matchMedia) {
			const e = window.matchMedia('(prefers-reduced-motion)'),
				t = () => (Nh.current = e.matches)
			e.addListener(t), t()
		} else Nh.current = !1
}
function hO(e, t, n) {
	for (const r in t) {
		const o = t[r],
			i = n[r]
		if (rt(o)) e.addValue(r, o)
		else if (rt(i)) e.addValue(r, ss(o, { owner: e }))
		else if (i !== o)
			if (e.hasValue(r)) {
				const a = e.getValue(r)
				a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o)
			} else {
				const a = e.getStaticValue(r)
				e.addValue(r, ss(a !== void 0 ? a : o, { owner: e }))
			}
	}
	for (const r in n) t[r] === void 0 && e.removeValue(r)
	return t
}
const i1 = new WeakMap(),
	pO = [...cw, tt, wr],
	mO = e => pO.find(uw(e)),
	a1 = [
		'AnimationStart',
		'AnimationComplete',
		'Update',
		'BeforeLayoutMeasure',
		'LayoutMeasure',
		'LayoutAnimationStart',
		'LayoutAnimationComplete',
	],
	vO = bm.length
class gO {
	scrapeMotionValuesFromProps(t, n, r) {
		return {}
	}
	constructor(
		{ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: a },
		s = {},
	) {
		;(this.applyWillChange = !1),
			(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.KeyframeResolver = km),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify('Update', this.latestValues)),
			(this.render = () => {
				;(this.isRenderScheduled = !1),
					this.current &&
						(this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
			}),
			(this.isRenderScheduled = !1),
			(this.scheduleRender = () => {
				this.isRenderScheduled || ((this.isRenderScheduled = !0), ae.render(this.render, !1, !0))
			})
		const { latestValues: l, renderState: u } = a
		;(this.latestValues = l),
			(this.baseTarget = { ...l }),
			(this.initialValues = n.initial ? { ...l } : {}),
			(this.renderState = u),
			(this.parent = t),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = o),
			(this.options = s),
			(this.blockInitialAnimation = !!i),
			(this.isControllingVariants = Oc(n)),
			(this.isVariantNode = vk(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current))
		const { willChange: d, ...c } = this.scrapeMotionValuesFromProps(n, {}, this)
		for (const f in c) {
			const m = c[f]
			l[f] !== void 0 && rt(m) && m.set(l[f], !1)
		}
	}
	mount(t) {
		;(this.current = t),
			i1.set(t, this),
			this.projection && !this.projection.instance && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
			Tk.current || fO(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === 'never' ? !1 : this.reducedMotionConfig === 'always' ? !0 : Nh.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext)
	}
	unmount() {
		i1.delete(this.current),
			this.projection && this.projection.unmount(),
			qn(this.notifyUpdate),
			qn(this.render),
			this.valueSubscriptions.forEach(t => t()),
			this.valueSubscriptions.clear(),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this)
		for (const t in this.events) this.events[t].clear()
		for (const t in this.features) {
			const n = this.features[t]
			n && (n.unmount(), (n.isMounted = !1))
		}
		this.current = null
	}
	bindToMotionValue(t, n) {
		this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)()
		const r = Er.has(t),
			o = n.on('change', s => {
				;(this.latestValues[t] = s),
					this.props.onUpdate && ae.preRender(this.notifyUpdate),
					r && this.projection && (this.projection.isTransformDirty = !0)
			}),
			i = n.on('renderRequest', this.scheduleRender)
		let a
		window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, t, n)),
			this.valueSubscriptions.set(t, () => {
				o(), i(), a && a(), n.owner && n.stop()
			})
	}
	sortNodePosition(t) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current)
	}
	updateFeatures() {
		let t = 'animation'
		for (t in xi) {
			const n = xi[t]
			if (!n) continue
			const { isEnabled: r, Feature: o } = n
			if ((!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t])) {
				const i = this.features[t]
				i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0))
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props)
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Re()
	}
	getStaticValue(t) {
		return this.latestValues[t]
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n
	}
	update(t, n) {
		;(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n)
		for (let r = 0; r < a1.length; r++) {
			const o = a1[r]
			this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o])
			const i = 'on' + o,
				a = t[i]
			a && (this.propEventSubscriptions[o] = this.on(o, a))
		}
		;(this.prevMotionValues = hO(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues)),
			this.handleChildMotionValue && this.handleChildMotionValue()
	}
	getProps() {
		return this.props
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0
	}
	getDefaultTransition() {
		return this.props.transition
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
	}
	getVariantContext(t = !1) {
		if (t) return this.parent ? this.parent.getVariantContext() : void 0
		if (!this.isControllingVariants) {
			const r = this.parent ? this.parent.getVariantContext() || {} : {}
			return this.props.initial !== void 0 && (r.initial = this.props.initial), r
		}
		const n = {}
		for (let r = 0; r < vO; r++) {
			const o = bm[r],
				i = this.props[o]
			;(os(i) || i === !1) && (n[o] = i)
		}
		return n
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode()
		if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
	}
	addValue(t, n) {
		const r = this.values.get(t)
		n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), (this.latestValues[t] = n.get()))
	}
	removeValue(t) {
		this.values.delete(t)
		const n = this.valueSubscriptions.get(t)
		n && (n(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState)
	}
	hasValue(t) {
		return this.values.has(t)
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t]
		let r = this.values.get(t)
		return r === void 0 && n !== void 0 && ((r = ss(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)), r
	}
	readValue(t, n) {
		var r
		let o =
			this.latestValues[t] !== void 0 || !this.current
				? this.latestValues[t]
				: (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0
				? r
				: this.readValueFromInstance(this.current, t, this.options)
		return (
			o != null &&
				(typeof o == 'string' && (iw(o) || ow(o)) ? (o = parseFloat(o)) : !mO(o) && wr.test(n) && (o = yw(t, n)),
				this.setBaseTarget(t, rt(o) ? o.get() : o)),
			rt(o) ? o.get() : o
		)
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n
	}
	getBaseTarget(t) {
		var n
		const { initial: r } = this.props
		let o
		if (typeof r == 'string' || typeof r == 'object') {
			const a = gm(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom)
			a && (o = a[t])
		}
		if (r && o !== void 0) return o
		const i = this.getBaseTargetFromProps(this.props, t)
		return i !== void 0 && !rt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new Im()), this.events[t].add(n)
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n)
	}
}
class Ek extends gO {
	constructor() {
		super(...arguments), (this.KeyframeResolver = bw)
	}
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0
	}
	removeValueFromRenderState(t, { vars: n, style: r }) {
		delete n[t], delete r[t]
	}
}
function yO(e) {
	return window.getComputedStyle(e)
}
class bO extends Ek {
	constructor() {
		super(...arguments), (this.type = 'html'), (this.applyWillChange = !0), (this.renderInstance = gk)
	}
	readValueFromInstance(t, n) {
		if (Er.has(n)) {
			const r = Pm(n)
			return (r && r.default) || 0
		} else {
			const r = yO(t),
				o = (sw(n) ? r.getPropertyValue(n) : r[n]) || 0
			return typeof o == 'string' ? o.trim() : o
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: n }) {
		return Jw(t, n)
	}
	build(t, n, r) {
		Vm(t, n, r.transformTemplate)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return Om(t, n, r)
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription)
		const { children: t } = this.props
		rt(t) &&
			(this.childSubscription = t.on('change', n => {
				this.current && (this.current.textContent = `${n}`)
			}))
	}
}
class xO extends Ek {
	constructor() {
		super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1), (this.measureInstanceViewportBox = Re)
	}
	getBaseTargetFromProps(t, n) {
		return t[n]
	}
	readValueFromInstance(t, n) {
		if (Er.has(n)) {
			const r = Pm(n)
			return (r && r.default) || 0
		}
		return (n = yk.has(n) ? n : zc(n)), t.getAttribute(n)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return Sk(t, n, r)
	}
	build(t, n, r) {
		Wm(t, n, this.isSVGTag, r.transformTemplate)
	}
	renderInstance(t, n, r, o) {
		bk(t, n, r, o)
	}
	mount(t) {
		;(this.isSVGTag = Um(t.tagName)), super.mount(t)
	}
}
const SO = (e, t) => (Dm(e) ? new xO(t) : new bO(t, { allowProjection: e !== b.Fragment })),
	wO = dO({ ...sL, ...RD, ...bD, ...AD }, SO),
	Bc = nj(wO)
class kO extends b.Component {
	getSnapshotBeforeUpdate(t) {
		const n = this.props.childRef.current
		if (n && t.isPresent && !this.props.isPresent) {
			const r = this.props.sizeRef.current
			;(r.height = n.offsetHeight || 0), (r.width = n.offsetWidth || 0), (r.top = n.offsetTop), (r.left = n.offsetLeft)
		}
		return null
	}
	componentDidUpdate() {}
	render() {
		return this.props.children
	}
}
function CO({ children: e, isPresent: t }) {
	const n = b.useId(),
		r = b.useRef(null),
		o = b.useRef({ width: 0, height: 0, top: 0, left: 0 }),
		{ nonce: i } = b.useContext(zm)
	return (
		b.useInsertionEffect(() => {
			const { width: a, height: s, top: l, left: u } = o.current
			if (t || !r.current || !a || !s) return
			r.current.dataset.motionPopId = n
			const d = document.createElement('style')
			return (
				i && (d.nonce = i),
				document.head.appendChild(d),
				d.sheet &&
					d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
				() => {
					document.head.removeChild(d)
				}
			)
		}, [t]),
		S.jsx(kO, { isPresent: t, childRef: r, sizeRef: o, children: b.cloneElement(e, { ref: r }) })
	)
}
const _O = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
	const s = Bm(PO),
		l = b.useId(),
		u = b.useMemo(
			() => ({
				id: l,
				initial: t,
				isPresent: n,
				custom: o,
				onExitComplete: d => {
					s.set(d, !0)
					for (const c of s.values()) if (!c) return
					r && r()
				},
				register: d => (s.set(d, !1), () => s.delete(d)),
			}),
			i ? [Math.random()] : [n],
		)
	return (
		b.useMemo(() => {
			s.forEach((d, c) => s.set(c, !1))
		}, [n]),
		b.useEffect(() => {
			!n && !s.size && r && r()
		}, [n]),
		a === 'popLayout' && (e = S.jsx(CO, { isPresent: n, children: e })),
		S.jsx(Ps.Provider, { value: u, children: e })
	)
}
function PO() {
	return new Map()
}
const Sl = e => e.key || ''
function s1(e) {
	const t = []
	return (
		b.Children.forEach(e, n => {
			b.isValidElement(n) && t.push(n)
		}),
		t
	)
}
const Nc = ({
	children: e,
	exitBeforeEnter: t,
	custom: n,
	initial: r = !0,
	onExitComplete: o,
	presenceAffectsLayout: i = !0,
	mode: a = 'sync',
}) => {
	const s = b.useMemo(() => s1(e), [e]),
		l = s.map(Sl),
		u = b.useRef(!0),
		d = b.useRef(s),
		c = Bm(() => new Map()),
		[f, m] = b.useState(s),
		[y, g] = b.useState(s)
	hk(() => {
		;(u.current = !1), (d.current = s)
		for (let h = 0; h < y.length; h++) {
			const v = Sl(y[h])
			l.includes(v) ? c.delete(v) : c.get(v) !== !0 && c.set(v, !1)
		}
	}, [y, l.length, l.join('-')])
	const x = []
	if (s !== f) {
		let h = [...s]
		for (let v = 0; v < y.length; v++) {
			const k = y[v],
				C = Sl(k)
			l.includes(C) || (h.splice(v, 0, k), x.push(k))
		}
		a === 'wait' && x.length && (h = x), g(s1(h)), m(s)
		return
	}
	const { forceRender: p } = b.useContext(Fm)
	return S.jsx(S.Fragment, {
		children: y.map(h => {
			const v = Sl(h),
				k = s === y || l.includes(v),
				C = () => {
					if (c.has(v)) c.set(v, !0)
					else return
					let E = !0
					c.forEach(T => {
						T || (E = !1)
					}),
						E && (p == null || p(), g(d.current), o && o())
				}
			return S.jsx(
				_O,
				{
					isPresent: k,
					initial: !u.current || r ? void 0 : !1,
					custom: k ? void 0 : n,
					presenceAffectsLayout: i,
					mode: a,
					onExitComplete: k ? void 0 : C,
					children: h,
				},
				v,
			)
		}),
	})
}
var TO = {
		initial: e => {
			const { position: t } = e,
				n = ['top', 'bottom'].includes(t) ? 'y' : 'x'
			let r = ['top-right', 'bottom-right'].includes(t) ? 1 : -1
			return t === 'bottom' && (r = 1), { opacity: 0, [n]: r * 24 }
		},
		animate: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
		exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
	},
	$k = b.memo(e => {
		const {
				id: t,
				message: n,
				onCloseComplete: r,
				onRequestRemove: o,
				requestClose: i = !1,
				position: a = 'bottom',
				duration: s = 5e3,
				containerStyle: l,
				motionVariants: u = TO,
				toastSpacing: d = '0.5rem',
			} = e,
			[c, f] = b.useState(s),
			m = IL()
		Ph(() => {
			m || r == null || r()
		}, [m]),
			Ph(() => {
				f(s)
			}, [s])
		const y = () => f(null),
			g = () => f(s),
			x = () => {
				m && o()
			}
		b.useEffect(() => {
			m && i && o()
		}, [m, i, o]),
			tj(x, c)
		const p = b.useMemo(() => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: d, ...l }), [l, d]),
			h = b.useMemo(() => JF(a), [a])
		return S.jsx(Bc.div, {
			layout: !0,
			className: 'chakra-toast',
			variants: u,
			initial: 'initial',
			animate: 'animate',
			exit: 'exit',
			onHoverStart: y,
			onHoverEnd: g,
			custom: { position: a },
			style: h,
			children: S.jsx(V.div, {
				role: 'status',
				'aria-atomic': 'true',
				className: 'chakra-toast__inner',
				__css: p,
				children: vn(n, { id: t, onClose: x }),
			}),
		})
	})
$k.displayName = 'ToastComponent'
function EO(e, t) {
	var n
	const r = e ?? 'bottom',
		i = {
			'top-start': { ltr: 'top-left', rtl: 'top-right' },
			'top-end': { ltr: 'top-right', rtl: 'top-left' },
			'bottom-start': { ltr: 'bottom-left', rtl: 'bottom-right' },
			'bottom-end': { ltr: 'bottom-right', rtl: 'bottom-left' },
		}[r]
	return (n = i == null ? void 0 : i[t]) != null ? n : r
}
var l1 = {
		path: S.jsxs('g', {
			stroke: 'currentColor',
			strokeWidth: '1.5',
			children: [
				S.jsx('path', { strokeLinecap: 'round', fill: 'none', d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25' }),
				S.jsx('path', {
					fill: 'currentColor',
					strokeLinecap: 'round',
					d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
				}),
				S.jsx('circle', { fill: 'none', strokeMiterlimit: '10', cx: '12', cy: '12', r: '11.25' }),
			],
		}),
		viewBox: '0 0 24 24',
	},
	$i = re((e, t) => {
		const { as: n, viewBox: r, color: o = 'currentColor', focusable: i = !1, children: a, className: s, __css: l, ...u } = e,
			d = ue('chakra-icon', s),
			c = Tr('Icon', e),
			f = { w: '1em', h: '1em', display: 'inline-block', lineHeight: '1em', flexShrink: 0, color: o, ...l, ...c },
			m = { ref: t, focusable: i, className: d, __css: f },
			y = r ?? l1.viewBox
		if (n && typeof n != 'string') return S.jsx(V.svg, { as: n, ...m, ...u })
		const g = a ?? l1.path
		return S.jsx(V.svg, { verticalAlign: 'middle', viewBox: y, ...m, ...u, children: g })
	})
$i.displayName = 'Icon'
function Hm(e) {
	const { viewBox: t = '0 0 24 24', d: n, displayName: r, defaultProps: o = {} } = e,
		i = b.Children.toArray(e.path),
		a = re((s, l) =>
			S.jsx($i, { ref: l, viewBox: t, ...o, ...s, children: i.length ? i : S.jsx('path', { fill: 'currentColor', d: n }) }),
		)
	return (a.displayName = r), a
}
function $O(e) {
	return S.jsx($i, {
		viewBox: '0 0 24 24',
		...e,
		children: S.jsx('path', {
			fill: 'currentColor',
			d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
		}),
	})
}
function RO(e) {
	return S.jsx($i, {
		viewBox: '0 0 24 24',
		...e,
		children: S.jsx('path', {
			fill: 'currentColor',
			d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
		}),
	})
}
function u1(e) {
	return S.jsx($i, {
		viewBox: '0 0 24 24',
		...e,
		children: S.jsx('path', {
			fill: 'currentColor',
			d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
		}),
	})
}
var AO = Tc({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }),
	Km = re((e, t) => {
		const n = Tr('Spinner', e),
			{
				label: r = 'Loading...',
				thickness: o = '2px',
				speed: i = '0.45s',
				emptyColor: a = 'transparent',
				className: s,
				...l
			} = Kt(e),
			u = ue('chakra-spinner', s),
			d = {
				display: 'inline-block',
				borderColor: 'currentColor',
				borderStyle: 'solid',
				borderRadius: '99999px',
				borderWidth: o,
				borderBottomColor: a,
				borderLeftColor: a,
				animation: `${AO} ${i} linear infinite`,
				...n,
			}
		return S.jsx(V.div, { ref: t, __css: d, className: u, ...l, children: r && S.jsx(V.span, { srOnly: !0, children: r }) })
	})
Km.displayName = 'Spinner'
var [MO, Gm] = Ht({ name: 'AlertContext', hookName: 'useAlertContext', providerName: '<Alert />' }),
	[IO, qm] = Ht({ name: 'AlertStylesContext', hookName: 'useAlertStyles', providerName: '<Alert />' }),
	Rk = {
		info: { icon: RO, colorScheme: 'blue' },
		warning: { icon: u1, colorScheme: 'orange' },
		success: { icon: $O, colorScheme: 'green' },
		error: { icon: u1, colorScheme: 'red' },
		loading: { icon: Km, colorScheme: 'blue' },
	}
function FO(e) {
	return Rk[e].colorScheme
}
function jO(e) {
	return Rk[e].icon
}
var Ak = re(function (t, n) {
	const r = qm(),
		{ status: o } = Gm(),
		i = { display: 'inline', ...r.description }
	return S.jsx(V.div, { ref: n, 'data-status': o, ...t, className: ue('chakra-alert__desc', t.className), __css: i })
})
Ak.displayName = 'AlertDescription'
function Mk(e) {
	const { status: t } = Gm(),
		n = jO(t),
		r = qm(),
		o = t === 'loading' ? r.spinner : r.icon
	return S.jsx(V.span, {
		display: 'inherit',
		'data-status': t,
		...e,
		className: ue('chakra-alert__icon', e.className),
		__css: o,
		children: e.children || S.jsx(n, { h: '100%', w: '100%' }),
	})
}
Mk.displayName = 'AlertIcon'
var Ik = re(function (t, n) {
	const r = qm(),
		{ status: o } = Gm()
	return S.jsx(V.div, { ref: n, 'data-status': o, ...t, className: ue('chakra-alert__title', t.className), __css: r.title })
})
Ik.displayName = 'AlertTitle'
var Fk = re(function (t, n) {
	var r
	const { status: o = 'info', addRole: i = !0, ...a } = Kt(t),
		s = (r = t.colorScheme) != null ? r : FO(o),
		l = Ti('Alert', { ...t, colorScheme: s }),
		u = { width: '100%', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', ...l.container }
	return S.jsx(MO, {
		value: { status: o },
		children: S.jsx(IO, {
			value: l,
			children: S.jsx(V.div, {
				'data-status': o,
				role: i ? 'alert' : void 0,
				ref: n,
				...a,
				className: ue('chakra-alert', t.className),
				__css: u,
			}),
		}),
	})
})
Fk.displayName = 'Alert'
function zO(e) {
	return S.jsx($i, {
		focusable: 'false',
		'aria-hidden': !0,
		...e,
		children: S.jsx('path', {
			fill: 'currentColor',
			d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
		}),
	})
}
var Ym = re(function (t, n) {
	const r = Tr('CloseButton', t),
		{ children: o, isDisabled: i, __css: a, ...s } = Kt(t),
		l = { outline: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
	return S.jsx(V.button, {
		type: 'button',
		'aria-label': 'Close',
		ref: n,
		disabled: i,
		__css: { ...l, ...r, ...a },
		...s,
		children: o || S.jsx(zO, { width: '1em', height: '1em' }),
	})
})
Ym.displayName = 'CloseButton'
var LO = { top: [], 'top-left': [], 'top-right': [], 'bottom-left': [], bottom: [], 'bottom-right': [] },
	pn = DO(LO)
function DO(e) {
	let t = e
	const n = new Set(),
		r = o => {
			;(t = o(t)), n.forEach(i => i())
		}
	return {
		getState: () => t,
		subscribe: o => (
			n.add(o),
			() => {
				r(() => e), n.delete(o)
			}
		),
		removeToast: (o, i) => {
			r(a => ({ ...a, [i]: a[i].filter(s => s.id != o) }))
		},
		notify: (o, i) => {
			const a = OO(o, i),
				{ position: s, id: l } = a
			return (
				r(u => {
					var d, c
					const m = s.includes('top') ? [a, ...((d = u[s]) != null ? d : [])] : [...((c = u[s]) != null ? c : []), a]
					return { ...u, [s]: m }
				}),
				l
			)
		},
		update: (o, i) => {
			o &&
				r(a => {
					const s = { ...a },
						{ position: l, index: u } = K0(s, o)
					return l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: jk(i) }), s
				})
		},
		closeAll: ({ positions: o } = {}) => {
			r(i =>
				(o ?? ['bottom', 'bottom-right', 'bottom-left', 'top', 'top-left', 'top-right']).reduce(
					(l, u) => ((l[u] = i[u].map(d => ({ ...d, requestClose: !0 }))), l),
					{ ...i },
				),
			)
		},
		close: o => {
			r(i => {
				const a = tw(i, o)
				return a ? { ...i, [a]: i[a].map(s => (s.id == o ? { ...s, requestClose: !0 } : s)) } : i
			})
		},
		isActive: o => !!K0(pn.getState(), o).position,
	}
}
var c1 = 0
function OO(e, t = {}) {
	var n, r
	c1 += 1
	const o = (n = t.id) != null ? n : c1,
		i = (r = t.position) != null ? r : 'bottom'
	return {
		id: o,
		message: e,
		position: i,
		duration: t.duration,
		onCloseComplete: t.onCloseComplete,
		onRequestRemove: () => pn.removeToast(String(o), i),
		status: t.status,
		requestClose: !1,
		containerStyle: t.containerStyle,
	}
}
var BO = e => {
	const {
			status: t,
			variant: n = 'solid',
			id: r,
			title: o,
			isClosable: i,
			onClose: a,
			description: s,
			colorScheme: l,
			icon: u,
		} = e,
		d = r ? { root: `toast-${r}`, title: `toast-${r}-title`, description: `toast-${r}-description` } : void 0
	return S.jsxs(Fk, {
		addRole: !1,
		status: t,
		variant: n,
		id: d == null ? void 0 : d.root,
		alignItems: 'start',
		borderRadius: 'md',
		boxShadow: 'lg',
		paddingEnd: 8,
		textAlign: 'start',
		width: 'auto',
		colorScheme: l,
		children: [
			S.jsx(Mk, { children: u }),
			S.jsxs(V.div, {
				flex: '1',
				maxWidth: '100%',
				children: [
					o && S.jsx(Ik, { id: d == null ? void 0 : d.title, children: o }),
					s && S.jsx(Ak, { id: d == null ? void 0 : d.description, display: 'block', children: s }),
				],
			}),
			i && S.jsx(Ym, { size: 'sm', onClick: a, position: 'absolute', insetEnd: 1, top: 1 }),
		],
	})
}
function jk(e = {}) {
	const { render: t, toastComponent: n = BO } = e
	return o => (typeof t == 'function' ? t({ ...o, ...e }) : S.jsx(n, { ...o, ...e }))
}
function NO(e, t) {
	const n = o => {
			var i
			return { ...t, ...o, position: EO((i = o == null ? void 0 : o.position) != null ? i : t == null ? void 0 : t.position, e) }
		},
		r = o => {
			const i = n(o),
				a = jk(i)
			return pn.notify(a, i)
		}
	return (
		(r.update = (o, i) => {
			pn.update(o, n(i))
		}),
		(r.promise = (o, i) => {
			const a = r({ ...i.loading, status: 'loading', duration: null })
			o.then(s => r.update(a, { status: 'success', duration: 5e3, ...vn(i.success, s) })).catch(s =>
				r.update(a, { status: 'error', duration: 5e3, ...vn(i.error, s) }),
			)
		}),
		(r.closeAll = pn.closeAll),
		(r.close = pn.close),
		(r.isActive = pn.isActive),
		r
	)
}
var [VO, WO] = Ht({ name: 'ToastOptionsContext', strict: !1 }),
	UO = e => {
		const t = b.useSyncExternalStore(pn.subscribe, pn.getState, pn.getState),
			{ motionVariants: n, component: r = $k, portalProps: o } = e,
			a = Object.keys(t).map(s => {
				const l = t[s]
				return S.jsx(
					'div',
					{
						role: 'region',
						'aria-live': 'polite',
						'aria-label': `Notifications-${s}`,
						id: `chakra-toast-manager-${s}`,
						style: ej(s),
						children: S.jsx(Nc, { initial: !1, children: l.map(u => S.jsx(r, { motionVariants: n, ...u }, u.id)) }),
					},
					s,
				)
			})
		return S.jsx(xs, { ...o, children: a })
	}
function Xm(e) {
	const { theme: t } = TS(),
		n = WO()
	return b.useMemo(() => NO(t.direction, { ...n, ...e }), [e, t.direction, n])
}
var HO = e =>
		function ({ children: n, theme: r = e, toastOptions: o, ...i }) {
			return S.jsxs(QF, {
				theme: r,
				...i,
				children: [S.jsx(VO, { value: o == null ? void 0 : o.defaultOptions, children: n }), S.jsx(UO, { ...o })],
			})
		},
	KO = HO(yF)
function GO(e, t) {
	if (e != null) {
		if (typeof e == 'function') {
			e(t)
			return
		}
		try {
			e.current = t
		} catch {
			throw new Error(`Cannot assign value '${t}' to ref '${e}'`)
		}
	}
}
function lo(...e) {
	return t => {
		e.forEach(n => {
			GO(n, t)
		})
	}
}
function qO(...e) {
	return b.useMemo(() => lo(...e), e)
}
var Vh = { ease: [0.25, 0.1, 0.25, 1], easeIn: [0.4, 0, 1, 1], easeOut: [0, 0, 0.2, 1], easeInOut: [0.4, 0, 0.2, 1] },
	Xi = {
		scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
		fade: { enter: { opacity: 1 }, exit: { opacity: 0 } },
		pushLeft: { enter: { x: '100%' }, exit: { x: '-30%' } },
		pushRight: { enter: { x: '-100%' }, exit: { x: '30%' } },
		pushUp: { enter: { y: '100%' }, exit: { y: '-30%' } },
		pushDown: { enter: { y: '-100%' }, exit: { y: '30%' } },
		slideLeft: { position: { left: 0, top: 0, bottom: 0, width: '100%' }, enter: { x: 0, y: 0 }, exit: { x: '-100%', y: 0 } },
		slideRight: { position: { right: 0, top: 0, bottom: 0, width: '100%' }, enter: { x: 0, y: 0 }, exit: { x: '100%', y: 0 } },
		slideUp: { position: { top: 0, left: 0, right: 0, maxWidth: '100vw' }, enter: { x: 0, y: 0 }, exit: { x: 0, y: '-100%' } },
		slideDown: {
			position: { bottom: 0, left: 0, right: 0, maxWidth: '100vw' },
			enter: { x: 0, y: 0 },
			exit: { x: 0, y: '100%' },
		},
	}
function Wh(e) {
	var t
	switch ((t = e == null ? void 0 : e.direction) != null ? t : 'right') {
		case 'right':
			return Xi.slideRight
		case 'left':
			return Xi.slideLeft
		case 'bottom':
			return Xi.slideDown
		case 'top':
			return Xi.slideUp
		default:
			return Xi.slideRight
	}
}
var d1 = { enter: { duration: 0.2, ease: Vh.easeOut }, exit: { duration: 0.1, ease: Vh.easeIn } },
	Hu = {
		enter: (e, t) => ({ ...e, delay: typeof t == 'number' ? t : t == null ? void 0 : t.enter }),
		exit: (e, t) => ({ ...e, delay: typeof t == 'number' ? t : t == null ? void 0 : t.exit }),
	},
	YO = {
		enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
			var r
			return {
				opacity: 1,
				transition: (r = e == null ? void 0 : e.enter) != null ? r : Hu.enter(d1.enter, n),
				transitionEnd: t == null ? void 0 : t.enter,
			}
		},
		exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
			var r
			return {
				opacity: 0,
				transition: (r = e == null ? void 0 : e.exit) != null ? r : Hu.exit(d1.exit, n),
				transitionEnd: t == null ? void 0 : t.exit,
			}
		},
	},
	zk = { initial: 'exit', animate: 'enter', exit: 'exit', variants: YO },
	XO = b.forwardRef(function (t, n) {
		const { unmountOnExit: r, in: o, className: i, transition: a, transitionEnd: s, delay: l, ...u } = t,
			d = o || r ? 'enter' : 'exit',
			c = r ? o && r : !0,
			f = { transition: a, transitionEnd: s, delay: l }
		return S.jsx(Nc, {
			custom: f,
			children: c && S.jsx(Bc.div, { ref: n, className: ue('chakra-fade', i), custom: f, ...zk, animate: d, ...u }),
		})
	})
XO.displayName = 'Fade'
var f1 = { exit: { duration: 0.15, ease: Vh.easeInOut }, enter: { type: 'spring', damping: 25, stiffness: 180 } },
	QO = {
		exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
			var o
			const { exit: i } = Wh({ direction: e })
			return {
				...i,
				transition: (o = t == null ? void 0 : t.exit) != null ? o : Hu.exit(f1.exit, r),
				transitionEnd: n == null ? void 0 : n.exit,
			}
		},
		enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
			var o
			const { enter: i } = Wh({ direction: e })
			return {
				...i,
				transition: (o = n == null ? void 0 : n.enter) != null ? o : Hu.enter(f1.enter, r),
				transitionEnd: t == null ? void 0 : t.enter,
			}
		},
	},
	Lk = b.forwardRef(function (t, n) {
		const {
				direction: r = 'right',
				style: o,
				unmountOnExit: i,
				in: a,
				className: s,
				transition: l,
				transitionEnd: u,
				delay: d,
				motionProps: c,
				...f
			} = t,
			m = Wh({ direction: r }),
			y = Object.assign({ position: 'fixed' }, m.position, o),
			g = i ? a && i : !0,
			x = a || i ? 'enter' : 'exit',
			p = { transitionEnd: u, transition: l, direction: r, delay: d }
		return S.jsx(Nc, {
			custom: p,
			children:
				g &&
				S.jsx(Bc.div, {
					...f,
					ref: n,
					initial: 'exit',
					className: ue('chakra-slide', s),
					animate: x,
					exit: 'exit',
					custom: p,
					variants: QO,
					style: y,
					...c,
				}),
		})
	})
Lk.displayName = 'Slide'
function ZO(e) {
	return b.Children.toArray(e).filter(t => b.isValidElement(t))
}
var [SV, JO] = Ht({ strict: !1, name: 'ButtonGroupContext' })
function eB(e) {
	const [t, n] = b.useState(!e)
	return {
		ref: b.useCallback(i => {
			i && n(i.tagName === 'BUTTON')
		}, []),
		type: t ? 'button' : void 0,
	}
}
function Uh(e) {
	const { children: t, className: n, ...r } = e,
		o = b.isValidElement(t) ? b.cloneElement(t, { 'aria-hidden': !0, focusable: !1 }) : t,
		i = ue('chakra-button__icon', n)
	return S.jsx(V.span, { display: 'inline-flex', alignSelf: 'center', flexShrink: 0, ...r, className: i, children: o })
}
Uh.displayName = 'ButtonIcon'
function Hh(e) {
	const {
			label: t,
			placement: n,
			spacing: r = '0.5rem',
			children: o = S.jsx(Km, { color: 'currentColor', width: '1em', height: '1em' }),
			className: i,
			__css: a,
			...s
		} = e,
		l = ue('chakra-button__spinner', i),
		u = n === 'start' ? 'marginEnd' : 'marginStart',
		d = b.useMemo(
			() => ({
				display: 'flex',
				alignItems: 'center',
				position: t ? 'relative' : 'absolute',
				[u]: t ? r : 0,
				fontSize: '1em',
				lineHeight: 'normal',
				...a,
			}),
			[a, t, u, r],
		)
	return S.jsx(V.div, { className: l, ...s, __css: d, children: o })
}
Hh.displayName = 'ButtonSpinner'
var ut = re((e, t) => {
	const n = JO(),
		r = Tr('Button', { ...n, ...e }),
		{
			isDisabled: o = n == null ? void 0 : n.isDisabled,
			isLoading: i,
			isActive: a,
			children: s,
			leftIcon: l,
			rightIcon: u,
			loadingText: d,
			iconSpacing: c = '0.5rem',
			type: f,
			spinner: m,
			spinnerPlacement: y = 'start',
			className: g,
			as: x,
			...p
		} = Kt(e),
		h = b.useMemo(() => {
			const E = { ...(r == null ? void 0 : r._focus), zIndex: 1 }
			return {
				display: 'inline-flex',
				appearance: 'none',
				alignItems: 'center',
				justifyContent: 'center',
				userSelect: 'none',
				position: 'relative',
				whiteSpace: 'nowrap',
				verticalAlign: 'middle',
				outline: 'none',
				...r,
				...(!!n && { _focus: E }),
			}
		}, [r, n]),
		{ ref: v, type: k } = eB(x),
		C = { rightIcon: u, leftIcon: l, iconSpacing: c, children: s }
	return S.jsxs(V.button, {
		ref: qO(t, v),
		as: x,
		type: f ?? k,
		'data-active': q(a),
		'data-loading': q(i),
		__css: h,
		className: ue('chakra-button', g),
		...p,
		disabled: o || i,
		children: [
			i &&
				y === 'start' &&
				S.jsx(Hh, { className: 'chakra-button__spinner--start', label: d, placement: 'start', spacing: c, children: m }),
			i ? d || S.jsx(V.span, { opacity: 0, children: S.jsx(h1, { ...C }) }) : S.jsx(h1, { ...C }),
			i &&
				y === 'end' &&
				S.jsx(Hh, { className: 'chakra-button__spinner--end', label: d, placement: 'end', spacing: c, children: m }),
		],
	})
})
ut.displayName = 'Button'
function h1(e) {
	const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e
	return S.jsxs(S.Fragment, {
		children: [t && S.jsx(Uh, { marginEnd: o, children: t }), r, n && S.jsx(Uh, { marginStart: o, children: n })],
	})
}
var [wV, tB] = Ht({ name: 'CheckboxGroupContext', strict: !1 })
function nB(e) {
	const [t, n] = b.useState(e),
		[r, o] = b.useState(!1)
	return e !== t && (o(!0), n(e)), r
}
function rB(e) {
	return S.jsx(V.svg, {
		width: '1.2em',
		viewBox: '0 0 12 10',
		style: { fill: 'none', strokeWidth: 2, stroke: 'currentColor', strokeDasharray: 16 },
		...e,
		children: S.jsx('polyline', { points: '1.5 6 4.5 9 10.5 1' }),
	})
}
function oB(e) {
	return S.jsx(V.svg, {
		width: '1.2em',
		viewBox: '0 0 24 24',
		style: { stroke: 'currentColor', strokeWidth: 4 },
		...e,
		children: S.jsx('line', { x1: '21', x2: '3', y1: '12', y2: '12' }),
	})
}
function iB(e) {
	const { isIndeterminate: t, isChecked: n, ...r } = e,
		o = t ? oB : rB
	return n || t
		? S.jsx(V.div, {
				style: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' },
				children: S.jsx(o, { ...r }),
		  })
		: null
}
var [aB, Dk] = Ht({
		name: 'FormControlStylesContext',
		errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
	}),
	[sB, Vc] = Ht({ strict: !1, name: 'FormControlContext' })
function lB(e) {
	const { id: t, isRequired: n, isInvalid: r, isDisabled: o, isReadOnly: i, ...a } = e,
		s = b.useId(),
		l = t || `field-${s}`,
		u = `${l}-label`,
		d = `${l}-feedback`,
		c = `${l}-helptext`,
		[f, m] = b.useState(!1),
		[y, g] = b.useState(!1),
		[x, p] = b.useState(!1),
		h = b.useCallback(
			(T = {}, R = null) => ({
				id: c,
				...T,
				ref: lo(R, M => {
					M && g(!0)
				}),
			}),
			[c],
		),
		v = b.useCallback(
			(T = {}, R = null) => ({
				...T,
				ref: R,
				'data-focus': q(x),
				'data-disabled': q(o),
				'data-invalid': q(r),
				'data-readonly': q(i),
				id: T.id !== void 0 ? T.id : u,
				htmlFor: T.htmlFor !== void 0 ? T.htmlFor : l,
			}),
			[l, o, x, r, i, u],
		),
		k = b.useCallback(
			(T = {}, R = null) => ({
				id: d,
				...T,
				ref: lo(R, M => {
					M && m(!0)
				}),
				'aria-live': 'polite',
			}),
			[d],
		),
		C = b.useCallback(
			(T = {}, R = null) => ({
				...T,
				...a,
				ref: R,
				role: 'group',
				'data-focus': q(x),
				'data-disabled': q(o),
				'data-invalid': q(r),
				'data-readonly': q(i),
			}),
			[a, o, x, r, i],
		),
		E = b.useCallback(
			(T = {}, R = null) => ({ ...T, ref: R, role: 'presentation', 'aria-hidden': !0, children: T.children || '*' }),
			[],
		)
	return {
		isRequired: !!n,
		isInvalid: !!r,
		isReadOnly: !!i,
		isDisabled: !!o,
		isFocused: !!x,
		onFocus: () => p(!0),
		onBlur: () => p(!1),
		hasFeedbackText: f,
		setHasFeedbackText: m,
		hasHelpText: y,
		setHasHelpText: g,
		id: l,
		labelId: u,
		feedbackId: d,
		helpTextId: c,
		htmlProps: a,
		getHelpTextProps: h,
		getErrorMessageProps: k,
		getRootProps: C,
		getLabelProps: v,
		getRequiredIndicatorProps: E,
	}
}
var uB = re(function (t, n) {
	const r = Ti('Form', t),
		o = Kt(t),
		{ getRootProps: i, htmlProps: a, ...s } = lB(o),
		l = ue('chakra-form-control', t.className)
	return S.jsx(sB, {
		value: s,
		children: S.jsx(aB, { value: r, children: S.jsx(V.div, { ...i({}, n), className: l, __css: r.container }) }),
	})
})
uB.displayName = 'FormControl'
var cB = re(function (t, n) {
	const r = Vc(),
		o = Dk(),
		i = ue('chakra-form__helper-text', t.className)
	return S.jsx(V.div, { ...(r == null ? void 0 : r.getHelpTextProps(t, n)), __css: o.helperText, className: i })
})
cB.displayName = 'FormHelperText'
var Ok = re(function (t, n) {
	var r
	const o = Tr('FormLabel', t),
		i = Kt(t),
		{ className: a, children: s, requiredIndicator: l = S.jsx(Bk, {}), optionalIndicator: u = null, ...d } = i,
		c = Vc(),
		f = (r = c == null ? void 0 : c.getLabelProps(d, n)) != null ? r : { ref: n, ...d }
	return S.jsxs(V.label, {
		...f,
		className: ue('chakra-form__label', i.className),
		__css: { display: 'block', textAlign: 'start', ...o },
		children: [s, c != null && c.isRequired ? l : u],
	})
})
Ok.displayName = 'FormLabel'
var Bk = re(function (t, n) {
	const r = Vc(),
		o = Dk()
	if (!(r != null && r.isRequired)) return null
	const i = ue('chakra-form__required-indicator', t.className)
	return S.jsx(V.span, { ...(r == null ? void 0 : r.getRequiredIndicatorProps(t, n)), __css: o.requiredIndicator, className: i })
})
Bk.displayName = 'RequiredIndicator'
function Nk(e) {
	const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = Vk(e)
	return { ...i, disabled: t, readOnly: r, required: o, 'aria-invalid': Ad(n), 'aria-required': Ad(o), 'aria-readonly': Ad(r) }
}
function Vk(e) {
	var t, n, r
	const o = Vc(),
		{
			id: i,
			disabled: a,
			readOnly: s,
			required: l,
			isRequired: u,
			isInvalid: d,
			isReadOnly: c,
			isDisabled: f,
			onFocus: m,
			onBlur: y,
			...g
		} = e,
		x = e['aria-describedby'] ? [e['aria-describedby']] : []
	return (
		o != null && o.hasFeedbackText && o != null && o.isInvalid && x.push(o.feedbackId),
		o != null && o.hasHelpText && x.push(o.helpTextId),
		{
			...g,
			'aria-describedby': x.join(' ') || void 0,
			id: i ?? (o == null ? void 0 : o.id),
			isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
			isReadOnly: (n = s ?? c) != null ? n : o == null ? void 0 : o.isReadOnly,
			isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
			isInvalid: d ?? (o == null ? void 0 : o.isInvalid),
			onFocus: Ne(o == null ? void 0 : o.onFocus, m),
			onBlur: Ne(o == null ? void 0 : o.onBlur, y),
		}
	)
}
var dB = {
		border: '0',
		clip: 'rect(0, 0, 0, 0)',
		height: '1px',
		width: '1px',
		margin: '-1px',
		padding: '0',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		position: 'absolute',
	},
	fB = () => typeof document < 'u',
	p1 = !1,
	Ts = null,
	uo = !1,
	Kh = !1,
	Gh = new Set()
function Qm(e, t) {
	Gh.forEach(n => n(e, t))
}
var hB = typeof window < 'u' && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1
function pB(e) {
	return !(e.metaKey || (!hB && e.altKey) || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta')
}
function m1(e) {
	;(uo = !0), pB(e) && ((Ts = 'keyboard'), Qm('keyboard', e))
}
function So(e) {
	if (((Ts = 'pointer'), e.type === 'mousedown' || e.type === 'pointerdown')) {
		uo = !0
		const t = e.composedPath ? e.composedPath()[0] : e.target
		let n = !1
		try {
			n = t.matches(':focus-visible')
		} catch {}
		if (n) return
		Qm('pointer', e)
	}
}
function mB(e) {
	return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType
}
function vB(e) {
	mB(e) && ((uo = !0), (Ts = 'virtual'))
}
function gB(e) {
	e.target === window || e.target === document || (!uo && !Kh && ((Ts = 'virtual'), Qm('virtual', e)), (uo = !1), (Kh = !1))
}
function yB() {
	;(uo = !1), (Kh = !0)
}
function v1() {
	return Ts !== 'pointer'
}
function bB() {
	if (!fB() || p1) return
	const { focus: e } = HTMLElement.prototype
	;(HTMLElement.prototype.focus = function (...n) {
		;(uo = !0), e.apply(this, n)
	}),
		document.addEventListener('keydown', m1, !0),
		document.addEventListener('keyup', m1, !0),
		document.addEventListener('click', vB, !0),
		window.addEventListener('focus', gB, !0),
		window.addEventListener('blur', yB, !1),
		typeof PointerEvent < 'u'
			? (document.addEventListener('pointerdown', So, !0),
			  document.addEventListener('pointermove', So, !0),
			  document.addEventListener('pointerup', So, !0))
			: (document.addEventListener('mousedown', So, !0),
			  document.addEventListener('mousemove', So, !0),
			  document.addEventListener('mouseup', So, !0)),
		(p1 = !0)
}
function xB(e) {
	bB(), e(v1())
	const t = () => e(v1())
	return (
		Gh.add(t),
		() => {
			Gh.delete(t)
		}
	)
}
function SB(e, t = []) {
	const n = Object.assign({}, e)
	for (const r of t) r in n && delete n[r]
	return n
}
function Wk(e = {}) {
	const t = Vk(e),
		{ isDisabled: n, isReadOnly: r, isRequired: o, isInvalid: i, id: a, onBlur: s, onFocus: l, 'aria-describedby': u } = t,
		{
			defaultChecked: d,
			isChecked: c,
			isFocusable: f,
			onChange: m,
			isIndeterminate: y,
			name: g,
			value: x,
			tabIndex: p = void 0,
			'aria-label': h,
			'aria-labelledby': v,
			'aria-invalid': k,
			...C
		} = e,
		E = SB(C, ['isDisabled', 'isReadOnly', 'isRequired', 'isInvalid', 'id', 'onBlur', 'onFocus', 'aria-describedby']),
		T = Ql(m),
		R = Ql(s),
		M = Ql(l),
		[F, Y] = b.useState(!1),
		[we, He] = b.useState(!1),
		[at, pe] = b.useState(!1),
		[ke, Oe] = b.useState(!1)
	b.useEffect(() => xB(Y), [])
	const I = b.useRef(null),
		[O, N] = b.useState(!0),
		[oe, ie] = b.useState(!!d),
		H = c !== void 0,
		ce = H ? c : oe,
		on = b.useCallback(
			W => {
				if (r || n) {
					W.preventDefault()
					return
				}
				H || ie(ce ? W.target.checked : y ? !0 : W.target.checked), T == null || T(W)
			},
			[r, n, ce, H, y, T],
		)
	Xr(() => {
		I.current && (I.current.indeterminate = !!y)
	}, [y]),
		Ph(() => {
			n && He(!1)
		}, [n, He]),
		Xr(() => {
			const W = I.current
			if (!(W != null && W.form)) return
			const ye = () => {
				ie(!!d)
			}
			return (
				W.form.addEventListener('reset', ye),
				() => {
					var je
					return (je = W.form) == null ? void 0 : je.removeEventListener('reset', ye)
				}
			)
		}, [])
	const Be = n && !f,
		Ft = b.useCallback(
			W => {
				W.key === ' ' && Oe(!0)
			},
			[Oe],
		),
		an = b.useCallback(
			W => {
				W.key === ' ' && Oe(!1)
			},
			[Oe],
		)
	Xr(() => {
		if (!I.current) return
		I.current.checked !== ce && ie(I.current.checked)
	}, [I.current])
	const mo = b.useCallback(
			(W = {}, ye = null) => {
				const je = St => {
					we && St.preventDefault(), Oe(!0)
				}
				return {
					...W,
					ref: ye,
					'data-active': q(ke),
					'data-hover': q(at),
					'data-checked': q(ce),
					'data-focus': q(we),
					'data-focus-visible': q(we && F),
					'data-indeterminate': q(y),
					'data-disabled': q(n),
					'data-invalid': q(i),
					'data-readonly': q(r),
					'aria-hidden': !0,
					onMouseDown: Ne(W.onMouseDown, je),
					onMouseUp: Ne(W.onMouseUp, () => Oe(!1)),
					onMouseEnter: Ne(W.onMouseEnter, () => pe(!0)),
					onMouseLeave: Ne(W.onMouseLeave, () => pe(!1)),
				}
			},
			[ke, ce, n, we, F, at, y, i, r],
		),
		Rr = b.useCallback(
			(W = {}, ye = null) => ({
				...W,
				ref: ye,
				'data-active': q(ke),
				'data-hover': q(at),
				'data-checked': q(ce),
				'data-focus': q(we),
				'data-focus-visible': q(we && F),
				'data-indeterminate': q(y),
				'data-disabled': q(n),
				'data-invalid': q(i),
				'data-readonly': q(r),
			}),
			[ke, ce, n, we, F, at, y, i, r],
		),
		vo = b.useCallback(
			(W = {}, ye = null) => ({
				...E,
				...W,
				ref: lo(ye, je => {
					je && N(je.tagName === 'LABEL')
				}),
				onClick: Ne(W.onClick, () => {
					var je
					O ||
						((je = I.current) == null || je.click(),
						requestAnimationFrame(() => {
							var St
							;(St = I.current) == null || St.focus({ preventScroll: !0 })
						}))
				}),
				'data-disabled': q(n),
				'data-checked': q(ce),
				'data-invalid': q(i),
			}),
			[E, n, ce, i, O],
		),
		Ar = b.useCallback(
			(W = {}, ye = null) => ({
				...W,
				ref: lo(I, ye),
				type: 'checkbox',
				name: g,
				value: x,
				id: a,
				tabIndex: p,
				onChange: Ne(W.onChange, on),
				onBlur: Ne(W.onBlur, R, () => He(!1)),
				onFocus: Ne(W.onFocus, M, () => He(!0)),
				onKeyDown: Ne(W.onKeyDown, Ft),
				onKeyUp: Ne(W.onKeyUp, an),
				required: o,
				checked: ce,
				disabled: Be,
				readOnly: r,
				'aria-label': h,
				'aria-labelledby': v,
				'aria-invalid': k ? !!k : i,
				'aria-describedby': u,
				'aria-disabled': n,
				style: dB,
			}),
			[g, x, a, on, R, M, Ft, an, o, ce, Be, r, h, v, k, i, u, n, p],
		),
		Ii = b.useCallback(
			(W = {}, ye = null) => ({
				...W,
				ref: ye,
				onMouseDown: Ne(W.onMouseDown, wB),
				'data-disabled': q(n),
				'data-checked': q(ce),
				'data-invalid': q(i),
			}),
			[ce, n, i],
		)
	return {
		state: {
			isInvalid: i,
			isFocused: we,
			isChecked: ce,
			isActive: ke,
			isHovered: at,
			isIndeterminate: y,
			isDisabled: n,
			isReadOnly: r,
			isRequired: o,
		},
		getRootProps: vo,
		getCheckboxProps: mo,
		getIndicatorProps: Rr,
		getInputProps: Ar,
		getLabelProps: Ii,
		htmlProps: E,
	}
}
function wB(e) {
	e.preventDefault(), e.stopPropagation()
}
var kB = {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		verticalAlign: 'top',
		userSelect: 'none',
		flexShrink: 0,
	},
	CB = { cursor: 'pointer', display: 'inline-flex', alignItems: 'center', verticalAlign: 'top', position: 'relative' },
	_B = Tc({
		from: { opacity: 0, strokeDashoffset: 16, transform: 'scale(0.95)' },
		to: { opacity: 1, strokeDashoffset: 0, transform: 'scale(1)' },
	}),
	PB = Tc({ from: { opacity: 0 }, to: { opacity: 1 } }),
	TB = Tc({ from: { transform: 'scaleX(0.65)' }, to: { transform: 'scaleX(1)' } }),
	Uk = re(function (t, n) {
		const r = tB(),
			o = { ...r, ...t },
			i = Ti('Checkbox', o),
			a = Kt(t),
			{
				spacing: s = '0.5rem',
				className: l,
				children: u,
				iconColor: d,
				iconSize: c,
				icon: f = S.jsx(iB, {}),
				isChecked: m,
				isDisabled: y = r == null ? void 0 : r.isDisabled,
				onChange: g,
				inputProps: x,
				...p
			} = a
		let h = m
		r != null && r.value && a.value && (h = r.value.includes(a.value))
		let v = g
		r != null && r.onChange && a.value && (v = z5(r.onChange, g))
		const {
				state: k,
				getInputProps: C,
				getCheckboxProps: E,
				getLabelProps: T,
				getRootProps: R,
			} = Wk({ ...p, isDisabled: y, isChecked: h, onChange: v }),
			M = nB(k.isChecked),
			F = b.useMemo(
				() => ({
					animation: M ? (k.isIndeterminate ? `${PB} 20ms linear, ${TB} 200ms linear` : `${_B} 200ms linear`) : void 0,
					fontSize: c,
					color: d,
					...i.icon,
				}),
				[d, c, M, k.isIndeterminate, i.icon],
			),
			Y = b.cloneElement(f, { __css: F, isIndeterminate: k.isIndeterminate, isChecked: k.isChecked })
		return S.jsxs(V.label, {
			__css: { ...CB, ...i.container },
			className: ue('chakra-checkbox', l),
			...R(),
			children: [
				S.jsx('input', { className: 'chakra-checkbox__input', ...C(x, n) }),
				S.jsx(V.span, { __css: { ...kB, ...i.control }, className: 'chakra-checkbox__control', ...E(), children: Y }),
				u && S.jsx(V.span, { className: 'chakra-checkbox__label', ...T(), __css: { marginStart: s, ...i.label }, children: u }),
			],
		})
	})
Uk.displayName = 'Checkbox'
function EB(e, t) {
	if (e == null) return {}
	var n = {}
	for (var r in e)
		if ({}.hasOwnProperty.call(e, r)) {
			if (t.includes(r)) continue
			n[r] = e[r]
		}
	return n
}
var qh = 'data-focus-lock',
	Hk = 'data-focus-lock-disabled',
	$B = 'data-no-focus-lock',
	RB = 'data-autofocus-inside',
	AB = 'data-no-autofocus'
function cf(e, t) {
	return typeof e == 'function' ? e(t) : e && (e.current = t), e
}
function MB(e, t) {
	var n = b.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value
				},
				set current(r) {
					var o = n.value
					o !== r && ((n.value = r), n.callback(r, o))
				},
			},
		}
	})[0]
	return (n.callback = t), n.facade
}
var IB = typeof window < 'u' ? b.useLayoutEffect : b.useEffect,
	g1 = new WeakMap()
function Kk(e, t) {
	var n = MB(null, function (r) {
		return e.forEach(function (o) {
			return cf(o, r)
		})
	})
	return (
		IB(
			function () {
				var r = g1.get(n)
				if (r) {
					var o = new Set(r),
						i = new Set(e),
						a = n.current
					o.forEach(function (s) {
						i.has(s) || cf(s, null)
					}),
						i.forEach(function (s) {
							o.has(s) || cf(s, a)
						})
				}
				g1.set(n, e)
			},
			[e],
		),
		n
	)
}
var df = { width: '1px', height: '0px', padding: 0, overflow: 'hidden', position: 'fixed', top: '1px', left: '1px' },
	mn = function () {
		return (
			(mn =
				Object.assign ||
				function (t) {
					for (var n, r = 1, o = arguments.length; r < o; r++) {
						n = arguments[r]
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
					}
					return t
				}),
			mn.apply(this, arguments)
		)
	}
function Gk(e, t) {
	var n = {}
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
			t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
	return n
}
function FB(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, o = t.length, i; r < o; r++)
			(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]))
	return e.concat(i || Array.prototype.slice.call(t))
}
function qk(e) {
	return e
}
function Yk(e, t) {
	t === void 0 && (t = qk)
	var n = [],
		r = !1,
		o = {
			read: function () {
				if (r) throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.')
				return n.length ? n[n.length - 1] : e
			},
			useMedium: function (i) {
				var a = t(i, r)
				return (
					n.push(a),
					function () {
						n = n.filter(function (s) {
							return s !== a
						})
					}
				)
			},
			assignSyncMedium: function (i) {
				for (r = !0; n.length; ) {
					var a = n
					;(n = []), a.forEach(i)
				}
				n = {
					push: function (s) {
						return i(s)
					},
					filter: function () {
						return n
					},
				}
			},
			assignMedium: function (i) {
				r = !0
				var a = []
				if (n.length) {
					var s = n
					;(n = []), s.forEach(i), (a = n)
				}
				var l = function () {
						var d = a
						;(a = []), d.forEach(i)
					},
					u = function () {
						return Promise.resolve().then(l)
					}
				u(),
					(n = {
						push: function (d) {
							a.push(d), u()
						},
						filter: function (d) {
							return (a = a.filter(d)), n
						},
					})
			},
		}
	return o
}
function Zm(e, t) {
	return t === void 0 && (t = qk), Yk(e, t)
}
function Xk(e) {
	e === void 0 && (e = {})
	var t = Yk(null)
	return (t.options = mn({ async: !0, ssr: !1 }, e)), t
}
var Qk = function (e) {
	var t = e.sideCar,
		n = Gk(e, ['sideCar'])
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car')
	var r = t.read()
	if (!r) throw new Error('Sidecar medium not found')
	return b.createElement(r, mn({}, n))
}
Qk.isSideCarExport = !0
function jB(e, t) {
	return e.useMedium(t), Qk
}
var Zk = Zm({}, function (e) {
		var t = e.target,
			n = e.currentTarget
		return { target: t, currentTarget: n }
	}),
	Jk = Zm(),
	zB = Zm(),
	LB = Xk({ async: !0, ssr: typeof document < 'u' }),
	DB = b.createContext(void 0),
	OB = [],
	Jm = b.forwardRef(function (t, n) {
		var r,
			o = b.useState(),
			i = o[0],
			a = o[1],
			s = b.useRef(),
			l = b.useRef(!1),
			u = b.useRef(null),
			d = b.useState({}),
			c = d[1],
			f = t.children,
			m = t.disabled,
			y = m === void 0 ? !1 : m,
			g = t.noFocusGuards,
			x = g === void 0 ? !1 : g,
			p = t.persistentFocus,
			h = p === void 0 ? !1 : p,
			v = t.crossFrame,
			k = v === void 0 ? !0 : v,
			C = t.autoFocus,
			E = C === void 0 ? !0 : C
		t.allowTextSelection
		var T = t.group,
			R = t.className,
			M = t.whiteList,
			F = t.hasPositiveIndices,
			Y = t.shards,
			we = Y === void 0 ? OB : Y,
			He = t.as,
			at = He === void 0 ? 'div' : He,
			pe = t.lockProps,
			ke = pe === void 0 ? {} : pe,
			Oe = t.sideCar,
			I = t.returnFocus,
			O = I === void 0 ? !1 : I,
			N = t.focusOptions,
			oe = t.onActivation,
			ie = t.onDeactivation,
			H = b.useState({}),
			ce = H[0],
			on = b.useCallback(
				function (ye) {
					var je = ye.captureFocusRestore
					if (!u.current) {
						var St,
							Cn = (St = document) == null ? void 0 : St.activeElement
						;(u.current = Cn), Cn !== document.body && (u.current = je(Cn))
					}
					s.current && oe && oe(s.current), (l.current = !0), c()
				},
				[oe],
			),
			Be = b.useCallback(
				function () {
					;(l.current = !1), ie && ie(s.current), c()
				},
				[ie],
			),
			Ft = b.useCallback(
				function (ye) {
					var je = u.current
					if (je) {
						var St = (typeof je == 'function' ? je() : je) || document.body,
							Cn = typeof O == 'function' ? O(St) : O
						if (Cn) {
							var Mr = typeof Cn == 'object' ? Cn : void 0
							;(u.current = null),
								ye
									? Promise.resolve().then(function () {
											return St.focus(Mr)
									  })
									: St.focus(Mr)
						}
					}
				},
				[O],
			),
			an = b.useCallback(function (ye) {
				l.current && Zk.useMedium(ye)
			}, []),
			mo = Jk.useMedium,
			Rr = b.useCallback(function (ye) {
				s.current !== ye && ((s.current = ye), a(ye))
			}, []),
			vo = so(((r = {}), (r[Hk] = y && 'disabled'), (r[qh] = T), r), ke),
			Ar = x !== !0,
			Ii = Ar && x !== 'tail',
			zs = Kk([n, Rr]),
			W = b.useMemo(
				function () {
					return { observed: s, shards: we, enabled: !y, active: l.current }
				},
				[y, l.current, we, i],
			)
		return b.createElement(
			b.Fragment,
			null,
			Ar && [
				b.createElement('div', { key: 'guard-first', 'data-focus-guard': !0, tabIndex: y ? -1 : 0, style: df }),
				F ? b.createElement('div', { key: 'guard-nearest', 'data-focus-guard': !0, tabIndex: y ? -1 : 1, style: df }) : null,
			],
			!y &&
				b.createElement(Oe, {
					id: ce,
					sideCar: LB,
					observed: i,
					disabled: y,
					persistentFocus: h,
					crossFrame: k,
					autoFocus: E,
					whiteList: M,
					shards: we,
					onActivation: on,
					onDeactivation: Be,
					returnFocus: Ft,
					focusOptions: N,
					noFocusGuards: x,
				}),
			b.createElement(
				at,
				so({ ref: zs }, vo, { className: R, onBlur: mo, onFocus: an }),
				b.createElement(DB.Provider, { value: W }, f),
			),
			Ii && b.createElement('div', { 'data-focus-guard': !0, tabIndex: y ? -1 : 0, style: df }),
		)
	})
Jm.propTypes = {}
function Yh(e, t) {
	return (
		(Yh = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (n, r) {
					return (n.__proto__ = r), n
			  }),
		Yh(e, t)
	)
}
function BB(e, t) {
	;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Yh(e, t)
}
function ls(e) {
	'@babel/helpers - typeof'
	return (
		(ls =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t
				  }
				: function (t) {
						return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
				  }),
		ls(e)
	)
}
function NB(e, t) {
	if (ls(e) != 'object' || !e) return e
	var n = e[Symbol.toPrimitive]
	if (n !== void 0) {
		var r = n.call(e, t || 'default')
		if (ls(r) != 'object') return r
		throw new TypeError('@@toPrimitive must return a primitive value.')
	}
	return (t === 'string' ? String : Number)(e)
}
function VB(e) {
	var t = NB(e, 'string')
	return ls(t) == 'symbol' ? t : t + ''
}
function WB(e, t, n) {
	return (
		(t = VB(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
	)
}
function UB(e, t) {
	function n(r) {
		return r.displayName || r.name || 'Component'
	}
	return function (o) {
		var i = [],
			a
		function s() {
			;(a = e(
				i.map(function (u) {
					return u.props
				}),
			)),
				t(a)
		}
		var l = (function (u) {
			BB(d, u)
			function d() {
				return u.apply(this, arguments) || this
			}
			d.peek = function () {
				return a
			}
			var c = d.prototype
			return (
				(c.componentDidMount = function () {
					i.push(this), s()
				}),
				(c.componentDidUpdate = function () {
					s()
				}),
				(c.componentWillUnmount = function () {
					var m = i.indexOf(this)
					i.splice(m, 1), s()
				}),
				(c.render = function () {
					return ru.createElement(o, this.props)
				}),
				d
			)
		})(b.PureComponent)
		return WB(l, 'displayName', 'SideEffect(' + n(o) + ')'), l
	}
}
var kn = function (e) {
		for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n]
		return t
	},
	co = function (e) {
		return Array.isArray(e) ? e : [e]
	},
	eC = function (e) {
		return Array.isArray(e) ? e[0] : e
	},
	HB = function (e) {
		if (e.nodeType !== Node.ELEMENT_NODE) return !1
		var t = window.getComputedStyle(e, null)
		return !t || !t.getPropertyValue
			? !1
			: t.getPropertyValue('display') === 'none' || t.getPropertyValue('visibility') === 'hidden'
	},
	tC = function (e) {
		return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
	},
	nC = function (e) {
		return e === document || (e && e.nodeType === Node.DOCUMENT_NODE)
	},
	KB = function (e) {
		return e.hasAttribute('inert')
	},
	GB = function (e, t) {
		return !e || nC(e) || (!HB(e) && !KB(e) && t(tC(e)))
	},
	rC = function (e, t) {
		var n = e.get(t)
		if (n !== void 0) return n
		var r = GB(t, rC.bind(void 0, e))
		return e.set(t, r), r
	},
	qB = function (e, t) {
		return e && !nC(e) ? (QB(e) ? t(tC(e)) : !1) : !0
	},
	oC = function (e, t) {
		var n = e.get(t)
		if (n !== void 0) return n
		var r = qB(t, oC.bind(void 0, e))
		return e.set(t, r), r
	},
	iC = function (e) {
		return e.dataset
	},
	YB = function (e) {
		return e.tagName === 'BUTTON'
	},
	aC = function (e) {
		return e.tagName === 'INPUT'
	},
	sC = function (e) {
		return aC(e) && e.type === 'radio'
	},
	XB = function (e) {
		return !((aC(e) || YB(e)) && (e.type === 'hidden' || e.disabled))
	},
	QB = function (e) {
		var t = e.getAttribute(AB)
		return ![!0, 'true', ''].includes(t)
	},
	ev = function (e) {
		var t
		return !!(e && !((t = iC(e)) === null || t === void 0) && t.focusGuard)
	},
	Xh = function (e) {
		return !ev(e)
	},
	ZB = function (e) {
		return !!e
	},
	JB = function (e, t) {
		var n = Math.max(0, e.tabIndex),
			r = Math.max(0, t.tabIndex),
			o = n - r,
			i = e.index - t.index
		if (o) {
			if (!n) return 1
			if (!r) return -1
		}
		return o || i
	},
	eN = function (e) {
		return e.tabIndex < 0 && !e.hasAttribute('tabindex') ? 0 : e.tabIndex
	},
	tv = function (e, t, n) {
		return kn(e)
			.map(function (r, o) {
				var i = eN(r)
				return { node: r, index: o, tabIndex: n && i === -1 ? ((r.dataset || {}).focusGuard ? 0 : -1) : i }
			})
			.filter(function (r) {
				return !t || r.tabIndex >= 0
			})
			.sort(JB)
	},
	tN = [
		'button:enabled',
		'select:enabled',
		'textarea:enabled',
		'input:enabled',
		'a[href]',
		'area[href]',
		'summary',
		'iframe',
		'object',
		'embed',
		'audio[controls]',
		'video[controls]',
		'[tabindex]',
		'[contenteditable]',
		'[autofocus]',
	],
	nv = tN.join(','),
	nN = ''.concat(nv, ', [data-focus-guard]'),
	lC = function (e, t) {
		return kn((e.shadowRoot || e).children).reduce(function (n, r) {
			return n.concat(r.matches(t ? nN : nv) ? [r] : [], lC(r))
		}, [])
	},
	rN = function (e, t) {
		var n
		return e instanceof HTMLIFrameElement && !((n = e.contentDocument) === null || n === void 0) && n.body
			? Si([e.contentDocument.body], t)
			: [e]
	},
	Si = function (e, t) {
		return e.reduce(function (n, r) {
			var o,
				i = lC(r, t),
				a = (o = []).concat.apply(
					o,
					i.map(function (s) {
						return rN(s, t)
					}),
				)
			return n.concat(
				a,
				r.parentNode
					? kn(r.parentNode.querySelectorAll(nv)).filter(function (s) {
							return s === r
					  })
					: [],
			)
		}, [])
	},
	oN = function (e) {
		var t = e.querySelectorAll('['.concat(RB, ']'))
		return kn(t)
			.map(function (n) {
				return Si([n])
			})
			.reduce(function (n, r) {
				return n.concat(r)
			}, [])
	},
	rv = function (e, t) {
		return kn(e)
			.filter(function (n) {
				return rC(t, n)
			})
			.filter(function (n) {
				return XB(n)
			})
	},
	y1 = function (e, t) {
		return (
			t === void 0 && (t = new Map()),
			kn(e).filter(function (n) {
				return oC(t, n)
			})
		)
	},
	ov = function (e, t, n) {
		return tv(rv(Si(e, n), t), !0, n)
	},
	us = function (e, t) {
		return tv(rv(Si(e), t), !1)
	},
	iN = function (e, t) {
		return rv(oN(e), t)
	},
	to = function (e, t) {
		return e.shadowRoot
			? to(e.shadowRoot, t)
			: Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t)
			? !0
			: kn(e.children).some(function (n) {
					var r
					if (n instanceof HTMLIFrameElement) {
						var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body
						return o ? to(o, t) : !1
					}
					return to(n, t)
			  })
	},
	aN = function (e) {
		for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
			for (var o = r + 1; o < n; o += 1) {
				var i = e[r].compareDocumentPosition(e[o])
				;(i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r)
			}
		return e.filter(function (a, s) {
			return !t.has(s)
		})
	},
	uC = function (e) {
		return e.parentNode ? uC(e.parentNode) : e
	},
	iv = function (e) {
		var t = co(e)
		return t.filter(Boolean).reduce(function (n, r) {
			var o = r.getAttribute(qh)
			return (
				n.push.apply(
					n,
					o ? aN(kn(uC(r).querySelectorAll('['.concat(qh, '="').concat(o, '"]:not([').concat(Hk, '="disabled"])')))) : [r],
				),
				n
			)
		}, [])
	},
	sN = function (e) {
		try {
			return e()
		} catch {
			return
		}
	},
	cs = function (e) {
		if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
			var t = e.activeElement
			return t.shadowRoot
				? cs(t.shadowRoot)
				: t instanceof HTMLIFrameElement &&
				  sN(function () {
						return t.contentWindow.document
				  })
				? cs(t.contentWindow.document)
				: t
		}
	},
	lN = function (e, t) {
		return e === t
	},
	uN = function (e, t) {
		return !!kn(e.querySelectorAll('iframe')).some(function (n) {
			return lN(n, t)
		})
	},
	cC = function (e, t) {
		return (
			t === void 0 && (t = cs(eC(e).ownerDocument)),
			!t || (t.dataset && t.dataset.focusGuard)
				? !1
				: iv(e).some(function (n) {
						return to(n, t) || uN(n, t)
				  })
		)
	},
	cN = function (e) {
		e === void 0 && (e = document)
		var t = cs(e)
		return t
			? kn(e.querySelectorAll('['.concat($B, ']'))).some(function (n) {
					return to(n, t)
			  })
			: !1
	},
	dN = function (e, t) {
		return (
			t
				.filter(sC)
				.filter(function (n) {
					return n.name === e.name
				})
				.filter(function (n) {
					return n.checked
				})[0] || e
		)
	},
	av = function (e, t) {
		return sC(e) && e.name ? dN(e, t) : e
	},
	fN = function (e) {
		var t = new Set()
		return (
			e.forEach(function (n) {
				return t.add(av(n, e))
			}),
			e.filter(function (n) {
				return t.has(n)
			})
		)
	},
	b1 = function (e) {
		return e[0] && e.length > 1 ? av(e[0], e) : e[0]
	},
	x1 = function (e, t) {
		return e.indexOf(av(t, e))
	},
	Qh = 'NEW_FOCUS',
	hN = function (e, t, n, r, o) {
		var i = e.length,
			a = e[0],
			s = e[i - 1],
			l = ev(r)
		if (!(r && e.indexOf(r) >= 0)) {
			var u = r !== void 0 ? n.indexOf(r) : -1,
				d = o ? n.indexOf(o) : u,
				c = o ? e.indexOf(o) : -1
			if (u === -1) return c !== -1 ? c : Qh
			if (c === -1) return Qh
			var f = u - d,
				m = n.indexOf(a),
				y = n.indexOf(s),
				g = fN(n),
				x = r !== void 0 ? g.indexOf(r) : -1,
				p = x - (o ? g.indexOf(o) : u)
			if ((!f && c >= 0) || t.length === 0) return c
			var h = x1(e, t[0]),
				v = x1(e, t[t.length - 1])
			if (u <= m && l && Math.abs(f) > 1) return v
			if (u >= y && l && Math.abs(f) > 1) return h
			if (f && Math.abs(p) > 1) return c
			if (u <= m) return v
			if (u > y) return h
			if (f) return Math.abs(f) > 1 ? c : (i + c + f) % i
		}
	},
	pN = function (e) {
		return function (t) {
			var n,
				r = (n = iC(t)) === null || n === void 0 ? void 0 : n.autofocus
			return t.autofocus || (r !== void 0 && r !== 'false') || e.indexOf(t) >= 0
		}
	},
	S1 = function (e, t, n) {
		var r = e.map(function (i) {
				var a = i.node
				return a
			}),
			o = y1(r.filter(pN(n)))
		return o && o.length ? b1(o) : b1(y1(t))
	},
	Zh = function (e, t) {
		return t === void 0 && (t = []), t.push(e), e.parentNode && Zh(e.parentNode.host || e.parentNode, t), t
	},
	ff = function (e, t) {
		for (var n = Zh(e), r = Zh(t), o = 0; o < n.length; o += 1) {
			var i = n[o]
			if (r.indexOf(i) >= 0) return i
		}
		return !1
	},
	dC = function (e, t, n) {
		var r = co(e),
			o = co(t),
			i = r[0],
			a = !1
		return (
			o.filter(Boolean).forEach(function (s) {
				;(a = ff(a || s, s) || a),
					n.filter(Boolean).forEach(function (l) {
						var u = ff(i, l)
						u && (!a || to(u, a) ? (a = u) : (a = ff(u, a)))
					})
			}),
			a
		)
	},
	w1 = function (e, t) {
		return e.reduce(function (n, r) {
			return n.concat(iN(r, t))
		}, [])
	},
	mN = function (e, t) {
		var n = new Map()
		return (
			t.forEach(function (r) {
				return n.set(r.node, r)
			}),
			e
				.map(function (r) {
					return n.get(r)
				})
				.filter(ZB)
		)
	},
	vN = function (e, t) {
		var n = cs(co(e).length > 0 ? document : eC(e).ownerDocument),
			r = iv(e).filter(Xh),
			o = dC(n || e, e, r),
			i = new Map(),
			a = us(r, i),
			s = a.filter(function (y) {
				var g = y.node
				return Xh(g)
			})
		if (s[0]) {
			var l = us([o], i).map(function (y) {
					var g = y.node
					return g
				}),
				u = mN(l, s),
				d = u.map(function (y) {
					var g = y.node
					return g
				}),
				c = u
					.filter(function (y) {
						var g = y.tabIndex
						return g >= 0
					})
					.map(function (y) {
						var g = y.node
						return g
					}),
				f = hN(d, c, l, n, t)
			if (f === Qh) {
				var m = S1(a, c, w1(r, i)) || S1(a, d, w1(r, i))
				if (m) return { node: m }
				console.warn('focus-lock: cannot find any node to move focus into')
				return
			}
			return f === void 0 ? f : u[f]
		}
	},
	gN = function (e) {
		var t = iv(e).filter(Xh),
			n = dC(e, e, t),
			r = tv(Si([n], !0), !0, !0),
			o = Si(t, !1)
		return r.map(function (i) {
			var a = i.node,
				s = i.index
			return { node: a, index: s, lockItem: o.indexOf(a) >= 0, guard: ev(a) }
		})
	},
	sv = function (e, t) {
		e && ('focus' in e && e.focus(t), 'contentWindow' in e && e.contentWindow && e.contentWindow.focus())
	},
	hf = 0,
	pf = !1,
	fC = function (e, t, n) {
		n === void 0 && (n = {})
		var r = vN(e, t)
		if (!pf && r) {
			if (hf > 2) {
				console.error(
					'FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting',
				),
					(pf = !0),
					setTimeout(function () {
						pf = !1
					}, 1)
				return
			}
			hf++, sv(r.node, n.focusOptions), hf--
		}
	}
function Qi(e) {
	if (!e) return null
	if (typeof WeakRef > 'u')
		return function () {
			return e || null
		}
	var t = e ? new WeakRef(e) : null
	return function () {
		return (t == null ? void 0 : t.deref()) || null
	}
}
var yN = function (e) {
		if (!e) return null
		for (var t = [], n = e; n && n !== document.body; )
			t.push({
				current: Qi(n),
				parent: Qi(n.parentElement),
				left: Qi(n.previousElementSibling),
				right: Qi(n.nextElementSibling),
			}),
				(n = n.parentElement)
		return { element: Qi(e), stack: t, ownerDocument: e.ownerDocument }
	},
	bN = function (e) {
		var t, n, r, o, i
		if (e)
			for (var a = e.stack, s = e.ownerDocument, l = new Map(), u = 0, d = a; u < d.length; u++) {
				var c = d[u],
					f = (t = c.parent) === null || t === void 0 ? void 0 : t.call(c)
				if (f && s.contains(f)) {
					for (
						var m = (n = c.left) === null || n === void 0 ? void 0 : n.call(c),
							y = c.current(),
							g = f.contains(y) ? y : void 0,
							x = (r = c.right) === null || r === void 0 ? void 0 : r.call(c),
							p = ov([f], l),
							h =
								(i = (o = g ?? (m == null ? void 0 : m.nextElementSibling)) !== null && o !== void 0 ? o : x) !== null &&
								i !== void 0
									? i
									: m;
						h;

					) {
						for (var v = 0, k = p; v < k.length; v++) {
							var C = k[v]
							if (h != null && h.contains(C.node)) return C.node
						}
						h = h.nextElementSibling
					}
					if (p.length) return p[0].node
				}
			}
	},
	hC = function (e) {
		var t = yN(e)
		return function () {
			return bN(t)
		}
	},
	xN = function (e, t, n) {
		if (!e || !t) return console.error('no element or scope given'), {}
		var r = co(t)
		if (
			r.every(function (a) {
				return !to(a, e)
			})
		)
			return console.error('Active element is not contained in the scope'), {}
		var o = n ? ov(r, new Map()) : us(r, new Map()),
			i = o.findIndex(function (a) {
				var s = a.node
				return s === e
			})
		if (i !== -1) return { prev: o[i - 1], next: o[i + 1], first: o[0], last: o[o.length - 1] }
	},
	SN = function (e, t) {
		var n = t ? ov(co(e), new Map()) : us(co(e), new Map())
		return { first: n[0], last: n[n.length - 1] }
	},
	wN = function (e) {
		return Object.assign({ scope: document.body, cycle: !0, onlyTabbable: !0 }, e)
	},
	pC = function (e, t, n) {
		t === void 0 && (t = {})
		var r = wN(t),
			o = xN(e, r.scope, r.onlyTabbable)
		if (o) {
			var i = n(o, r.cycle)
			i && sv(i.node, r.focusOptions)
		}
	},
	kN = function (e, t) {
		t === void 0 && (t = {}),
			pC(e, t, function (n, r) {
				var o = n.next,
					i = n.first
				return o || (r && i)
			})
	},
	CN = function (e, t) {
		t === void 0 && (t = {}),
			pC(e, t, function (n, r) {
				var o = n.prev,
					i = n.last
				return o || (r && i)
			})
	},
	mC = function (e, t, n) {
		var r,
			o = SN(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0),
			i = o[n]
		i && sv(i.node, t.focusOptions)
	},
	_N = function (e, t) {
		t === void 0 && (t = {}), mC(e, t, 'first')
	},
	PN = function (e, t) {
		t === void 0 && (t = {}), mC(e, t, 'last')
	}
function lv(e) {
	setTimeout(e, 1)
}
var TN = function (t) {
		return t && 'current' in t ? t.current : t
	},
	vC = function () {
		return document && document.activeElement === document.body
	},
	EN = function () {
		return vC() || cN()
	},
	ii = null,
	kt = null,
	k1 = function () {
		return null
	},
	ai = null,
	ds = !1,
	uv = !1,
	$N = function () {
		return !0
	},
	RN = function (t) {
		return (ii.whiteList || $N)(t)
	},
	AN = function (t, n) {
		ai = { observerNode: t, portaledElement: n }
	},
	MN = function (t) {
		return ai && ai.portaledElement === t
	}
function C1(e, t, n, r) {
	var o = null,
		i = e
	do {
		var a = r[i]
		if (a.guard) a.node.dataset.focusAutoGuard && (o = a)
		else if (a.lockItem) {
			if (i !== e) return
			o = null
		} else break
	} while ((i += n) !== t)
	o && (o.node.tabIndex = 0)
}
var IN = function (t) {
		return t ? !!ds : ds === 'meanwhile'
	},
	FN = function e(t, n, r) {
		return n && ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) || (n.parentNode && e(t, n.parentNode, r)))
	},
	jN = function (t, n) {
		return n.some(function (r) {
			return FN(t, r, r)
		})
	},
	gC = function (t) {
		return us(t, new Map())
	},
	zN = function (t) {
		return !gC([t.parentNode]).some(function (n) {
			return n.node === t
		})
	},
	Ku = function () {
		var t = !1
		if (ii) {
			var n = ii,
				r = n.observed,
				o = n.persistentFocus,
				i = n.autoFocus,
				a = n.shards,
				s = n.crossFrame,
				l = n.focusOptions,
				u = n.noFocusGuards,
				d = r || (ai && ai.portaledElement)
			if (vC() && kt && (!document.body.contains(kt) || zN(kt))) {
				kt = null
				var c = k1()
				c && c.focus()
			}
			var f = document && document.activeElement
			if (d) {
				var m = [d].concat(a.map(TN).filter(Boolean)),
					y = function () {
						if (!IN(s) || !u || !kt || uv) return !1
						var v = gC(m),
							k = v.findIndex(function (C) {
								var E = C.node
								return E === kt
							})
						return k === 0 || k === v.length - 1
					}
				if (
					((!f || RN(f)) &&
						(o || y() || !EN() || (!kt && i)) &&
						(d &&
							!(cC(m) || (f && jN(f, m)) || MN(f)) &&
							(document && !kt && f && !i
								? (f.blur && f.blur(), document.body.focus())
								: ((t = fC(m, kt, { focusOptions: l })), (ai = {}))),
						(ds = !1),
						(kt = document && document.activeElement),
						(k1 = hC(kt))),
					document && f !== document.activeElement && document.querySelector('[data-focus-auto-guard]'))
				) {
					var g = document && document.activeElement,
						x = gN(m),
						p = x
							.map(function (h) {
								var v = h.node
								return v
							})
							.indexOf(g)
					p > -1 &&
						(x
							.filter(function (h) {
								var v = h.guard,
									k = h.node
								return v && k.dataset.focusAutoGuard
							})
							.forEach(function (h) {
								var v = h.node
								return v.removeAttribute('tabIndex')
							}),
						C1(p, x.length, 1, x),
						C1(p, -1, -1, x))
				}
			}
		}
		return t
	},
	yC = function (t) {
		Ku() && t && (t.stopPropagation(), t.preventDefault())
	},
	cv = function () {
		return lv(Ku)
	},
	LN = function (t) {
		var n = t.target,
			r = t.currentTarget
		r.contains(n) || AN(r, n)
	},
	DN = function () {
		return null
	},
	bC = function () {
		uv = !0
	},
	xC = function () {
		;(uv = !1),
			(ds = 'just'),
			lv(function () {
				ds = 'meanwhile'
			})
	},
	ON = function () {
		document.addEventListener('focusin', yC),
			document.addEventListener('focusout', cv),
			window.addEventListener('focus', bC),
			window.addEventListener('blur', xC)
	},
	BN = function () {
		document.removeEventListener('focusin', yC),
			document.removeEventListener('focusout', cv),
			window.removeEventListener('focus', bC),
			window.removeEventListener('blur', xC)
	}
function NN(e) {
	return e.filter(function (t) {
		var n = t.disabled
		return !n
	})
}
var SC = {
	moveFocusInside: fC,
	focusInside: cC,
	focusNextElement: kN,
	focusPrevElement: CN,
	focusFirstElement: _N,
	focusLastElement: PN,
	captureFocusRestore: hC,
}
function VN(e) {
	var t = e.slice(-1)[0]
	t && !ii && ON()
	var n = ii,
		r = n && t && t.id === n.id
	;(ii = t),
		n &&
			!r &&
			(n.onDeactivation(),
			e.filter(function (o) {
				var i = o.id
				return i === n.id
			}).length || n.returnFocus(!t)),
		t ? ((kt = null), (!r || n.observed !== t.observed) && t.onActivation(SC), Ku(), lv(Ku)) : (BN(), (kt = null))
}
Zk.assignSyncMedium(LN)
Jk.assignMedium(cv)
zB.assignMedium(function (e) {
	return e(SC)
})
const WN = UB(NN, VN)(DN)
var Jh = b.forwardRef(function (t, n) {
		return b.createElement(Jm, so({ sideCar: WN, ref: n }, t))
	}),
	wC = Jm.propTypes || {}
wC.sideCar
EB(wC, ['sideCar'])
Jh.propTypes = {}
function UN(e) {
	return e != null && typeof e == 'object' && 'nodeType' in e && e.nodeType === Node.ELEMENT_NODE
}
function HN(e) {
	var t
	if (!UN(e)) return !1
	const n = (t = e.ownerDocument.defaultView) != null ? t : window
	return e instanceof n.HTMLElement
}
var KN = e => e.hasAttribute('tabindex')
function GN(e) {
	return !!e.getAttribute('disabled') || !!e.getAttribute('aria-disabled')
}
function kC(e) {
	return e.parentElement && kC(e.parentElement) ? !0 : e.hidden
}
function qN(e) {
	const t = e.getAttribute('contenteditable')
	return t !== 'false' && t != null
}
function YN(e) {
	if (!HN(e) || kC(e) || GN(e)) return !1
	const { localName: t } = e
	if (['input', 'select', 'textarea', 'button'].indexOf(t) >= 0) return !0
	const r = { a: () => e.hasAttribute('href'), audio: () => e.hasAttribute('controls'), video: () => e.hasAttribute('controls') }
	return t in r ? r[t]() : qN(e) ? !0 : KN(e)
}
var XN = [
		'input:not(:disabled):not([disabled])',
		'select:not(:disabled):not([disabled])',
		'textarea:not(:disabled):not([disabled])',
		'embed',
		'iframe',
		'object',
		'a[href]',
		'area[href]',
		'button:not(:disabled):not([disabled])',
		'[tabindex]',
		'audio[controls]',
		'video[controls]',
		'*[tabindex]:not([aria-disabled])',
		'*[contenteditable]',
	],
	QN = XN.join(),
	ZN = e => e.offsetWidth > 0 && e.offsetHeight > 0
function JN(e) {
	const t = Array.from(e.querySelectorAll(QN))
	return t.unshift(e), t.filter(n => YN(n) && ZN(n))
}
var _1,
	e6 = (_1 = Jh.default) != null ? _1 : Jh,
	CC = e => {
		const {
				initialFocusRef: t,
				finalFocusRef: n,
				contentRef: r,
				restoreFocus: o,
				children: i,
				isDisabled: a,
				autoFocus: s,
				persistentFocus: l,
				lockFocusAcrossFrames: u,
			} = e,
			d = b.useCallback(() => {
				t != null && t.current
					? t.current.focus()
					: r != null &&
					  r.current &&
					  JN(r.current).length === 0 &&
					  requestAnimationFrame(() => {
							var y
							;(y = r.current) == null || y.focus()
					  })
			}, [t, r]),
			c = b.useCallback(() => {
				var m
				;(m = n == null ? void 0 : n.current) == null || m.focus()
			}, [n]),
			f = o && !n
		return S.jsx(e6, {
			crossFrame: u,
			persistentFocus: l,
			autoFocus: s,
			disabled: a,
			onActivation: d,
			onDeactivation: c,
			returnFocus: f,
			children: i,
		})
	}
CC.displayName = 'FocusLock'
var t6 = xF ? b.useLayoutEffect : b.useEffect
function P1(e, t = []) {
	const n = b.useRef(e)
	return (
		t6(() => {
			n.current = e
		}),
		b.useCallback((...r) => {
			var o
			return (o = n.current) == null ? void 0 : o.call(n, ...r)
		}, t)
	)
}
function n6(e, t) {
	const n = b.useId()
	return b.useMemo(() => e || [t, n].filter(Boolean).join('-'), [e, t, n])
}
function r6(e, t) {
	const n = e !== void 0
	return [n, n && typeof e < 'u' ? e : t]
}
function Wc(e = {}) {
	const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
		i = P1(n),
		a = P1(t),
		[s, l] = b.useState(e.defaultIsOpen || !1),
		[u, d] = r6(r, s),
		c = n6(o, 'disclosure'),
		f = b.useCallback(() => {
			u || l(!1), a == null || a()
		}, [u, a]),
		m = b.useCallback(() => {
			u || l(!0), i == null || i()
		}, [u, i]),
		y = b.useCallback(() => {
			;(d ? f : m)()
		}, [d, m, f])
	return {
		isOpen: !!d,
		onOpen: m,
		onClose: f,
		onToggle: y,
		isControlled: u,
		getButtonProps: (g = {}) => ({ ...g, 'aria-expanded': d, 'aria-controls': c, onClick: _F(g.onClick, y) }),
		getDisclosureProps: (g = {}) => ({ ...g, hidden: !d, id: c }),
	}
}
var Ri = re(function (t, n) {
	const { htmlSize: r, ...o } = t,
		i = Ti('Input', o),
		a = Kt(o),
		s = Nk(a),
		l = ue('chakra-input', t.className)
	return S.jsx(V.input, { size: r, ...s, __css: i.field, ref: n, className: l })
})
Ri.displayName = 'Input'
Ri.id = 'Input'
function o6(e, t) {
	return Array.isArray(e)
		? e.map(n => (n === null ? null : t(n)))
		: nn(e)
		? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
		: e != null
		? t(e)
		: null
}
var _C = e =>
	S.jsx(V.div, {
		className: 'chakra-stack__item',
		...e,
		__css: { display: 'inline-block', flex: '0 0 auto', minWidth: 0, ...e.__css },
	})
_C.displayName = 'StackItem'
function i6(e) {
	const { spacing: t, direction: n } = e,
		r = {
			column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
			'column-reverse': { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
			row: { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
			'row-reverse': { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
		}
	return { '&': o6(n, o => r[o]) }
}
var dv = re((e, t) => {
	const {
			isInline: n,
			direction: r,
			align: o,
			justify: i,
			spacing: a = '0.5rem',
			wrap: s,
			children: l,
			divider: u,
			className: d,
			shouldWrapChildren: c,
			...f
		} = e,
		m = n ? 'row' : r ?? 'column',
		y = b.useMemo(() => i6({ spacing: a, direction: m }), [a, m]),
		g = !!u,
		x = !c && !g,
		p = b.useMemo(() => {
			const v = ZO(l)
			return x
				? v
				: v.map((k, C) => {
						const E = typeof k.key < 'u' ? k.key : C,
							T = C + 1 === v.length,
							M = c ? S.jsx(_C, { children: k }, E) : k
						if (!g) return M
						const F = b.cloneElement(u, { __css: y }),
							Y = T ? null : F
						return S.jsxs(b.Fragment, { children: [M, Y] }, E)
				  })
		}, [u, y, g, x, c, l]),
		h = ue('chakra-stack', d)
	return S.jsx(V.div, {
		ref: t,
		display: 'flex',
		alignItems: o,
		justifyContent: i,
		flexDirection: m,
		flexWrap: s,
		gap: g ? void 0 : a,
		className: h,
		...f,
		children: p,
	})
})
dv.displayName = 'Stack'
var Es = re((e, t) => S.jsx(dv, { align: 'center', ...e, direction: 'column', ref: t }))
Es.displayName = 'VStack'
var PC = re((e, t) => S.jsx(dv, { align: 'center', ...e, direction: 'row', ref: t }))
PC.displayName = 'HStack'
var jn = V('div')
jn.displayName = 'Box'
var TC = re(function (t, n) {
	const { size: r, centerContent: o = !0, ...i } = t,
		a = o ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}
	return S.jsx(jn, { ref: n, boxSize: r, __css: { ...a, flexShrink: 0, flexGrow: 0 }, ...i })
})
TC.displayName = 'Square'
var a6 = re(function (t, n) {
	const { size: r, ...o } = t
	return S.jsx(TC, { size: r, ref: n, borderRadius: '9999px', ...o })
})
a6.displayName = 'Circle'
var Gu = re(function (t, n) {
	const r = Tr('Code', t),
		{ className: o, ...i } = Kt(t)
	return S.jsx(V.code, { ref: n, className: ue('chakra-code', t.className), ...i, __css: { display: 'inline-block', ...r } })
})
Gu.displayName = 'Code'
var $s = re(function (t, n) {
	const { className: r, centerContent: o, ...i } = Kt(t),
		a = Tr('Container', t)
	return S.jsx(V.div, {
		ref: n,
		className: ue('chakra-container', r),
		...i,
		__css: { ...a, ...(o && { display: 'flex', flexDirection: 'column', alignItems: 'center' }) },
	})
})
$s.displayName = 'Container'
var EC = re(function (t, n) {
	const { direction: r, align: o, justify: i, wrap: a, basis: s, grow: l, shrink: u, ...d } = t,
		c = {
			display: 'flex',
			flexDirection: r,
			alignItems: o,
			justifyContent: i,
			flexWrap: a,
			flexBasis: s,
			flexGrow: l,
			flexShrink: u,
		}
	return S.jsx(V.div, { ref: n, __css: c, ...d })
})
EC.displayName = 'Flex'
var s6 = Object.defineProperty,
	l6 = (e, t, n) => (t in e ? s6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
	u6 = (e, t, n) => (l6(e, t + '', n), n),
	c6 = class {
		constructor() {
			u6(this, 'modals'), (this.modals = new Map())
		}
		add(e) {
			return this.modals.set(e, this.modals.size + 1), this.modals.size
		}
		remove(e) {
			this.modals.delete(e)
		}
		isTopModal(e) {
			return e ? this.modals.get(e) === this.modals.size : !1
		}
	},
	ep = new c6()
function $C(e, t) {
	const [n, r] = b.useState(0)
	return (
		b.useEffect(() => {
			const o = e.current
			if (o) {
				if (t) {
					const i = ep.add(o)
					r(i)
				}
				return () => {
					ep.remove(o), r(0)
				}
			}
		}, [t, e]),
		n
	)
}
var d6 = function (e) {
		if (typeof document > 'u') return null
		var t = Array.isArray(e) ? e[0] : e
		return t.ownerDocument.body
	},
	wo = new WeakMap(),
	wl = new WeakMap(),
	kl = {},
	mf = 0,
	RC = function (e) {
		return e && (e.host || RC(e.parentNode))
	},
	f6 = function (e, t) {
		return t
			.map(function (n) {
				if (e.contains(n)) return n
				var r = RC(n)
				return r && e.contains(r) ? r : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null)
			})
			.filter(function (n) {
				return !!n
			})
	},
	h6 = function (e, t, n, r) {
		var o = f6(t, Array.isArray(e) ? e : [e])
		kl[n] || (kl[n] = new WeakMap())
		var i = kl[n],
			a = [],
			s = new Set(),
			l = new Set(o),
			u = function (c) {
				!c || s.has(c) || (s.add(c), u(c.parentNode))
			}
		o.forEach(u)
		var d = function (c) {
			!c ||
				l.has(c) ||
				Array.prototype.forEach.call(c.children, function (f) {
					if (s.has(f)) d(f)
					else
						try {
							var m = f.getAttribute(r),
								y = m !== null && m !== 'false',
								g = (wo.get(f) || 0) + 1,
								x = (i.get(f) || 0) + 1
							wo.set(f, g),
								i.set(f, x),
								a.push(f),
								g === 1 && y && wl.set(f, !0),
								x === 1 && f.setAttribute(n, 'true'),
								y || f.setAttribute(r, 'true')
						} catch (p) {
							console.error('aria-hidden: cannot operate on ', f, p)
						}
				})
		}
		return (
			d(t),
			s.clear(),
			mf++,
			function () {
				a.forEach(function (c) {
					var f = wo.get(c) - 1,
						m = i.get(c) - 1
					wo.set(c, f), i.set(c, m), f || (wl.has(c) || c.removeAttribute(r), wl.delete(c)), m || c.removeAttribute(n)
				}),
					mf--,
					mf || ((wo = new WeakMap()), (wo = new WeakMap()), (wl = new WeakMap()), (kl = {}))
			}
		)
	},
	p6 = function (e, t, n) {
		n === void 0 && (n = 'data-aria-hidden')
		var r = Array.from(Array.isArray(e) ? e : [e]),
			o = d6(e)
		return o
			? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))), h6(r, o, n, 'aria-hidden'))
			: function () {
					return null
			  }
	}
function m6(e) {
	const {
			isOpen: t,
			onClose: n,
			id: r,
			closeOnOverlayClick: o = !0,
			closeOnEsc: i = !0,
			useInert: a = !0,
			onOverlayClick: s,
			onEsc: l,
		} = e,
		u = b.useRef(null),
		d = b.useRef(null),
		[c, f, m] = g6(r, 'chakra-modal', 'chakra-modal--header', 'chakra-modal--body')
	v6(u, t && a)
	const y = $C(u, t),
		g = b.useRef(null),
		x = b.useCallback(M => {
			g.current = M.target
		}, []),
		p = b.useCallback(
			M => {
				M.key === 'Escape' && (M.stopPropagation(), i && (n == null || n()), l == null || l())
			},
			[i, n, l],
		),
		[h, v] = b.useState(!1),
		[k, C] = b.useState(!1),
		E = b.useCallback(
			(M = {}, F = null) => ({
				role: 'dialog',
				...M,
				ref: lo(F, u),
				id: c,
				tabIndex: -1,
				'aria-modal': !0,
				'aria-labelledby': h ? f : void 0,
				'aria-describedby': k ? m : void 0,
				onClick: Ne(M.onClick, Y => Y.stopPropagation()),
			}),
			[m, k, c, f, h],
		),
		T = b.useCallback(
			M => {
				M.stopPropagation(), g.current === M.target && ep.isTopModal(u.current) && (o && (n == null || n()), s == null || s())
			},
			[n, o, s],
		),
		R = b.useCallback(
			(M = {}, F = null) => ({
				...M,
				ref: lo(F, d),
				onClick: Ne(M.onClick, T),
				onKeyDown: Ne(M.onKeyDown, p),
				onMouseDown: Ne(M.onMouseDown, x),
			}),
			[p, x, T],
		)
	return {
		isOpen: t,
		onClose: n,
		headerId: f,
		bodyId: m,
		setBodyMounted: C,
		setHeaderMounted: v,
		dialogRef: u,
		overlayRef: d,
		getDialogProps: E,
		getDialogContainerProps: R,
		index: y,
	}
}
function v6(e, t) {
	const n = e.current
	b.useEffect(() => {
		if (!(!e.current || !t)) return p6(e.current)
	}, [t, e, n])
}
function g6(e, ...t) {
	const n = b.useId(),
		r = e || n
	return b.useMemo(() => t.map(o => `${o}-${r}`), [r, t])
}
var [y6, Ai] = Ht({
		name: 'ModalStylesContext',
		errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
	}),
	[b6, Mi] = Ht({
		strict: !0,
		name: 'ModalContext',
		errorMessage: 'useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`',
	}),
	AC = e => {
		const t = {
				scrollBehavior: 'outside',
				autoFocus: !0,
				trapFocus: !0,
				returnFocusOnClose: !0,
				blockScrollOnMount: !0,
				allowPinchZoom: !1,
				motionPreset: 'scale',
				lockFocusAcrossFrames: !0,
				...e,
			},
			{
				portalProps: n,
				children: r,
				autoFocus: o,
				trapFocus: i,
				initialFocusRef: a,
				finalFocusRef: s,
				returnFocusOnClose: l,
				blockScrollOnMount: u,
				allowPinchZoom: d,
				preserveScrollBarGap: c,
				motionPreset: f,
				lockFocusAcrossFrames: m,
				onCloseComplete: y,
			} = t,
			g = Ti('Modal', t),
			p = {
				...m6(t),
				autoFocus: o,
				trapFocus: i,
				initialFocusRef: a,
				finalFocusRef: s,
				returnFocusOnClose: l,
				blockScrollOnMount: u,
				allowPinchZoom: d,
				preserveScrollBarGap: c,
				motionPreset: f,
				lockFocusAcrossFrames: m,
			}
		return S.jsx(b6, {
			value: p,
			children: S.jsx(y6, {
				value: g,
				children: S.jsx(Nc, { onExitComplete: y, children: p.isOpen && S.jsx(xs, { ...n, children: r }) }),
			}),
		})
	}
AC.displayName = 'Modal'
var tu = 'right-scroll-bar-position',
	nu = 'width-before-scroll-bar',
	x6 = 'with-scroll-bars-hidden',
	S6 = '--removed-body-scroll-bar-size',
	MC = Xk(),
	vf = function () {},
	Uc = b.forwardRef(function (e, t) {
		var n = b.useRef(null),
			r = b.useState({ onScrollCapture: vf, onWheelCapture: vf, onTouchMoveCapture: vf }),
			o = r[0],
			i = r[1],
			a = e.forwardProps,
			s = e.children,
			l = e.className,
			u = e.removeScrollBar,
			d = e.enabled,
			c = e.shards,
			f = e.sideCar,
			m = e.noIsolation,
			y = e.inert,
			g = e.allowPinchZoom,
			x = e.as,
			p = x === void 0 ? 'div' : x,
			h = e.gapMode,
			v = Gk(e, [
				'forwardProps',
				'children',
				'className',
				'removeScrollBar',
				'enabled',
				'shards',
				'sideCar',
				'noIsolation',
				'inert',
				'allowPinchZoom',
				'as',
				'gapMode',
			]),
			k = f,
			C = Kk([n, t]),
			E = mn(mn({}, v), o)
		return b.createElement(
			b.Fragment,
			null,
			d &&
				b.createElement(k, {
					sideCar: MC,
					removeScrollBar: u,
					shards: c,
					noIsolation: m,
					inert: y,
					setCallbacks: i,
					allowPinchZoom: !!g,
					lockRef: n,
					gapMode: h,
				}),
			a
				? b.cloneElement(b.Children.only(s), mn(mn({}, E), { ref: C }))
				: b.createElement(p, mn({}, E, { className: l, ref: C }), s),
		)
	})
Uc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
Uc.classNames = { fullWidth: nu, zeroRight: tu }
var w6 = function () {
	if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__
}
function k6() {
	if (!document) return null
	var e = document.createElement('style')
	e.type = 'text/css'
	var t = w6()
	return t && e.setAttribute('nonce', t), e
}
function C6(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t))
}
function _6(e) {
	var t = document.head || document.getElementsByTagName('head')[0]
	t.appendChild(e)
}
var P6 = function () {
		var e = 0,
			t = null
		return {
			add: function (n) {
				e == 0 && (t = k6()) && (C6(t, n), _6(t)), e++
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null))
			},
		}
	},
	T6 = function () {
		var e = P6()
		return function (t, n) {
			b.useEffect(
				function () {
					return (
						e.add(t),
						function () {
							e.remove()
						}
					)
				},
				[t && n],
			)
		}
	},
	IC = function () {
		var e = T6(),
			t = function (n) {
				var r = n.styles,
					o = n.dynamic
				return e(r, o), null
			}
		return t
	},
	E6 = { left: 0, top: 0, right: 0, gap: 0 },
	gf = function (e) {
		return parseInt(e || '', 10) || 0
	},
	$6 = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			o = t[e === 'padding' ? 'paddingRight' : 'marginRight']
		return [gf(n), gf(r), gf(o)]
	},
	R6 = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return E6
		var t = $6(e),
			n = document.documentElement.clientWidth,
			r = window.innerWidth
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) }
	},
	A6 = IC(),
	si = 'data-scroll-locked',
	M6 = function (e, t, n, r) {
		var o = e.left,
			i = e.top,
			a = e.right,
			s = e.gap
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					x6,
					` {
   overflow: hidden `,
				)
				.concat(
					r,
					`;
   padding-right: `,
				)
				.concat(s, 'px ')
				.concat(
					r,
					`;
  }
  body[`,
				)
				.concat(
					si,
					`] {
    overflow: hidden `,
				)
				.concat(
					r,
					`;
    overscroll-behavior: contain;
    `,
				)
				.concat(
					[
						t && 'position: relative '.concat(r, ';'),
						n === 'margin' &&
							`
    padding-left: `
								.concat(
									o,
									`px;
    padding-top: `,
								)
								.concat(
									i,
									`px;
    padding-right: `,
								)
								.concat(
									a,
									`px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
								)
								.concat(s, 'px ')
								.concat(
									r,
									`;
    `,
								),
						n === 'padding' && 'padding-right: '.concat(s, 'px ').concat(r, ';'),
					]
						.filter(Boolean)
						.join(''),
					`
  }
  
  .`,
				)
				.concat(
					tu,
					` {
    right: `,
				)
				.concat(s, 'px ')
				.concat(
					r,
					`;
  }
  
  .`,
				)
				.concat(
					nu,
					` {
    margin-right: `,
				)
				.concat(s, 'px ')
				.concat(
					r,
					`;
  }
  
  .`,
				)
				.concat(tu, ' .')
				.concat(
					tu,
					` {
    right: 0 `,
				)
				.concat(
					r,
					`;
  }
  
  .`,
				)
				.concat(nu, ' .')
				.concat(
					nu,
					` {
    margin-right: 0 `,
				)
				.concat(
					r,
					`;
  }
  
  body[`,
				)
				.concat(
					si,
					`] {
    `,
				)
				.concat(S6, ': ')
				.concat(
					s,
					`px;
  }
`,
				)
		)
	},
	T1 = function () {
		var e = parseInt(document.body.getAttribute(si) || '0', 10)
		return isFinite(e) ? e : 0
	},
	I6 = function () {
		b.useEffect(function () {
			return (
				document.body.setAttribute(si, (T1() + 1).toString()),
				function () {
					var e = T1() - 1
					e <= 0 ? document.body.removeAttribute(si) : document.body.setAttribute(si, e.toString())
				}
			)
		}, [])
	},
	F6 = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			r = e.gapMode,
			o = r === void 0 ? 'margin' : r
		I6()
		var i = b.useMemo(
			function () {
				return R6(o)
			},
			[o],
		)
		return b.createElement(A6, { styles: M6(i, !t, o, n ? '' : '!important') })
	},
	tp = !1
if (typeof window < 'u')
	try {
		var Cl = Object.defineProperty({}, 'passive', {
			get: function () {
				return (tp = !0), !0
			},
		})
		window.addEventListener('test', Cl, Cl), window.removeEventListener('test', Cl, Cl)
	} catch {
		tp = !1
	}
var ko = tp ? { passive: !1 } : !1,
	j6 = function (e) {
		return e.tagName === 'TEXTAREA'
	},
	FC = function (e, t) {
		if (!(e instanceof Element)) return !1
		var n = window.getComputedStyle(e)
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !j6(e) && n[t] === 'visible')
	},
	z6 = function (e) {
		return FC(e, 'overflowY')
	},
	L6 = function (e) {
		return FC(e, 'overflowX')
	},
	E1 = function (e, t) {
		var n = t.ownerDocument,
			r = t
		do {
			typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host)
			var o = jC(e, r)
			if (o) {
				var i = zC(e, r),
					a = i[1],
					s = i[2]
				if (a > s) return !0
			}
			r = r.parentNode
		} while (r && r !== n.body)
		return !1
	},
	D6 = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			r = e.clientHeight
		return [t, n, r]
	},
	O6 = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			r = e.clientWidth
		return [t, n, r]
	},
	jC = function (e, t) {
		return e === 'v' ? z6(t) : L6(t)
	},
	zC = function (e, t) {
		return e === 'v' ? D6(t) : O6(t)
	},
	B6 = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1
	},
	N6 = function (e, t, n, r, o) {
		var i = B6(e, window.getComputedStyle(t).direction),
			a = i * r,
			s = n.target,
			l = t.contains(s),
			u = !1,
			d = a > 0,
			c = 0,
			f = 0
		do {
			var m = zC(e, s),
				y = m[0],
				g = m[1],
				x = m[2],
				p = g - x - i * y
			;(y || p) && jC(e, s) && ((c += p), (f += y)), s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode)
		} while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)))
		return ((d && (Math.abs(c) < 1 || !o)) || (!d && (Math.abs(f) < 1 || !o))) && (u = !0), u
	},
	_l = function (e) {
		return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
	},
	$1 = function (e) {
		return [e.deltaX, e.deltaY]
	},
	R1 = function (e) {
		return e && 'current' in e ? e.current : e
	},
	V6 = function (e, t) {
		return e[0] === t[0] && e[1] === t[1]
	},
	W6 = function (e) {
		return `
  .block-interactivity-`
			.concat(
				e,
				` {pointer-events: none;}
  .allow-interactivity-`,
			)
			.concat(
				e,
				` {pointer-events: all;}
`,
			)
	},
	U6 = 0,
	Co = []
function H6(e) {
	var t = b.useRef([]),
		n = b.useRef([0, 0]),
		r = b.useRef(),
		o = b.useState(U6++)[0],
		i = b.useState(IC)[0],
		a = b.useRef(e)
	b.useEffect(
		function () {
			a.current = e
		},
		[e],
	),
		b.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(o))
					var g = FB([e.lockRef.current], (e.shards || []).map(R1), !0).filter(Boolean)
					return (
						g.forEach(function (x) {
							return x.classList.add('allow-interactivity-'.concat(o))
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(o)),
								g.forEach(function (x) {
									return x.classList.remove('allow-interactivity-'.concat(o))
								})
						}
					)
				}
			},
			[e.inert, e.lockRef.current, e.shards],
		)
	var s = b.useCallback(function (g, x) {
			if (('touches' in g && g.touches.length === 2) || (g.type === 'wheel' && g.ctrlKey)) return !a.current.allowPinchZoom
			var p = _l(g),
				h = n.current,
				v = 'deltaX' in g ? g.deltaX : h[0] - p[0],
				k = 'deltaY' in g ? g.deltaY : h[1] - p[1],
				C,
				E = g.target,
				T = Math.abs(v) > Math.abs(k) ? 'h' : 'v'
			if ('touches' in g && T === 'h' && E.type === 'range') return !1
			var R = E1(T, E)
			if (!R) return !0
			if ((R ? (C = T) : ((C = T === 'v' ? 'h' : 'v'), (R = E1(T, E))), !R)) return !1
			if ((!r.current && 'changedTouches' in g && (v || k) && (r.current = C), !C)) return !0
			var M = r.current || C
			return N6(M, x, g, M === 'h' ? v : k, !0)
		}, []),
		l = b.useCallback(function (g) {
			var x = g
			if (!(!Co.length || Co[Co.length - 1] !== i)) {
				var p = 'deltaY' in x ? $1(x) : _l(x),
					h = t.current.filter(function (C) {
						return C.name === x.type && (C.target === x.target || x.target === C.shadowParent) && V6(C.delta, p)
					})[0]
				if (h && h.should) {
					x.cancelable && x.preventDefault()
					return
				}
				if (!h) {
					var v = (a.current.shards || [])
							.map(R1)
							.filter(Boolean)
							.filter(function (C) {
								return C.contains(x.target)
							}),
						k = v.length > 0 ? s(x, v[0]) : !a.current.noIsolation
					k && x.cancelable && x.preventDefault()
				}
			}
		}, []),
		u = b.useCallback(function (g, x, p, h) {
			var v = { name: g, delta: x, target: p, should: h, shadowParent: K6(p) }
			t.current.push(v),
				setTimeout(function () {
					t.current = t.current.filter(function (k) {
						return k !== v
					})
				}, 1)
		}, []),
		d = b.useCallback(function (g) {
			;(n.current = _l(g)), (r.current = void 0)
		}, []),
		c = b.useCallback(function (g) {
			u(g.type, $1(g), g.target, s(g, e.lockRef.current))
		}, []),
		f = b.useCallback(function (g) {
			u(g.type, _l(g), g.target, s(g, e.lockRef.current))
		}, [])
	b.useEffect(function () {
		return (
			Co.push(i),
			e.setCallbacks({ onScrollCapture: c, onWheelCapture: c, onTouchMoveCapture: f }),
			document.addEventListener('wheel', l, ko),
			document.addEventListener('touchmove', l, ko),
			document.addEventListener('touchstart', d, ko),
			function () {
				;(Co = Co.filter(function (g) {
					return g !== i
				})),
					document.removeEventListener('wheel', l, ko),
					document.removeEventListener('touchmove', l, ko),
					document.removeEventListener('touchstart', d, ko)
			}
		)
	}, [])
	var m = e.removeScrollBar,
		y = e.inert
	return b.createElement(
		b.Fragment,
		null,
		y ? b.createElement(i, { styles: W6(o) }) : null,
		m ? b.createElement(F6, { gapMode: e.gapMode }) : null,
	)
}
function K6(e) {
	for (var t = null; e !== null; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode)
	return t
}
const G6 = jB(MC, H6)
var LC = b.forwardRef(function (e, t) {
	return b.createElement(Uc, mn({}, e, { ref: t, sideCar: G6 }))
})
LC.classNames = Uc.classNames
function q6(e) {
	const {
			autoFocus: t,
			trapFocus: n,
			dialogRef: r,
			initialFocusRef: o,
			blockScrollOnMount: i,
			allowPinchZoom: a,
			finalFocusRef: s,
			returnFocusOnClose: l,
			preserveScrollBarGap: u,
			lockFocusAcrossFrames: d,
			isOpen: c,
		} = Mi(),
		[f, m] = tk()
	b.useEffect(() => {
		!f && m && setTimeout(m)
	}, [f, m])
	const y = $C(r, c)
	return S.jsx(CC, {
		autoFocus: t,
		isDisabled: !n,
		initialFocusRef: o,
		finalFocusRef: s,
		restoreFocus: l,
		contentRef: r,
		lockFocusAcrossFrames: d,
		children: S.jsx(LC, {
			removeScrollBar: !u,
			allowPinchZoom: a,
			enabled: y === 1 && i,
			forwardProps: !0,
			children: e.children,
		}),
	})
}
var [Y6, X6] = Ht(),
	Q6 = { start: { ltr: 'left', rtl: 'right' }, end: { ltr: 'right', rtl: 'left' } }
function Z6(e, t) {
	var n, r
	if (e) return (r = (n = Q6[e]) == null ? void 0 : n[t]) != null ? r : e
}
function Hc(e) {
	var t
	const { isOpen: n, onClose: r, placement: o = 'right', children: i, ...a } = e,
		s = _S(),
		l = (t = s.components) == null ? void 0 : t.Drawer,
		u = Z6(o, s.direction)
	return S.jsx(Y6, { value: { placement: u }, children: S.jsx(AC, { isOpen: n, onClose: r, styleConfig: l, ...a, children: i }) })
}
var J6 = V(Lk),
	Rs = re((e, t) => {
		const { className: n, children: r, motionProps: o, containerProps: i, ...a } = e,
			{ getDialogProps: s, getDialogContainerProps: l, isOpen: u } = Mi(),
			d = s(a, t),
			c = l(i),
			f = ue('chakra-modal__content', n),
			m = Ai(),
			y = { display: 'flex', flexDirection: 'column', position: 'relative', width: '100%', outline: 0, ...m.dialog },
			g = { display: 'flex', width: '100vw', height: '$100vh', position: 'fixed', left: 0, top: 0, ...m.dialogContainer },
			{ placement: x } = X6()
		return S.jsx(q6, {
			children: S.jsx(V.div, {
				...c,
				className: 'chakra-modal__content-container',
				__css: g,
				children: S.jsx(J6, { motionProps: o, direction: x, in: u, className: f, ...d, __css: y, children: r }),
			}),
		})
	})
Rs.displayName = 'DrawerContent'
var As = re((e, t) => {
	const { className: n, ...r } = e,
		o = ue('chakra-modal__footer', n),
		a = { display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ...Ai().footer }
	return S.jsx(V.footer, { ref: t, ...r, __css: a, className: o })
})
As.displayName = 'ModalFooter'
var Ms = re((e, t) => {
	const { className: n, ...r } = e,
		{ headerId: o, setHeaderMounted: i } = Mi()
	b.useEffect(() => (i(!0), () => i(!1)), [i])
	const a = ue('chakra-modal__header', n),
		l = { flex: 0, ...Ai().header }
	return S.jsx(V.header, { ref: t, className: a, id: o, ...r, __css: l })
})
Ms.displayName = 'ModalHeader'
var eV = V(Bc.div),
	Is = re((e, t) => {
		const { className: n, transition: r, motionProps: o, ...i } = e,
			a = ue('chakra-modal__overlay', n),
			l = { pos: 'fixed', left: '0', top: '0', w: '100vw', h: '100vh', ...Ai().overlay },
			{ motionPreset: u } = Mi(),
			c = o || (u === 'none' ? {} : zk)
		return S.jsx(eV, { ...c, __css: l, ref: t, className: a, ...i })
	})
Is.displayName = 'ModalOverlay'
var Fs = re((e, t) => {
	const { className: n, ...r } = e,
		{ bodyId: o, setBodyMounted: i } = Mi()
	b.useEffect(() => (i(!0), () => i(!1)), [i])
	const a = ue('chakra-modal__body', n),
		s = Ai()
	return S.jsx(V.div, { ref: t, className: a, id: o, ...r, __css: s.body })
})
Fs.displayName = 'ModalBody'
var js = re((e, t) => {
	const { onClick: n, className: r, ...o } = e,
		{ onClose: i } = Mi(),
		a = ue('chakra-modal__close-btn', r),
		s = Ai()
	return S.jsx(Ym, {
		ref: t,
		__css: s.closeButton,
		className: a,
		onClick: Ne(n, l => {
			l.stopPropagation(), i()
		}),
		...o,
	})
})
js.displayName = 'ModalCloseButton'
var DC = re(function (t, n) {
	const r = Ti('Switch', t),
		{ spacing: o = '0.5rem', children: i, ...a } = Kt(t),
		{ getIndicatorProps: s, getInputProps: l, getCheckboxProps: u, getRootProps: d, getLabelProps: c } = Wk(a),
		f = b.useMemo(
			() => ({ display: 'inline-block', position: 'relative', verticalAlign: 'middle', lineHeight: 0, ...r.container }),
			[r.container],
		),
		m = b.useMemo(
			() => ({
				display: 'inline-flex',
				flexShrink: 0,
				justifyContent: 'flex-start',
				boxSizing: 'content-box',
				cursor: 'pointer',
				...r.track,
			}),
			[r.track],
		),
		y = b.useMemo(() => ({ userSelect: 'none', marginStart: o, ...r.label }), [o, r.label])
	return S.jsxs(V.label, {
		...d(),
		className: ue('chakra-switch', t.className),
		__css: f,
		children: [
			S.jsx('input', { className: 'chakra-switch__input', ...l({}, n) }),
			S.jsx(V.span, {
				...u(),
				className: 'chakra-switch__track',
				__css: m,
				children: S.jsx(V.span, { __css: r.thumb, className: 'chakra-switch__thumb', ...s() }),
			}),
			i && S.jsx(V.span, { className: 'chakra-switch__label', ...c(), __css: y, children: i }),
		],
	})
})
DC.displayName = 'Switch'
function tV(e, t = []) {
	const n = Object.assign({}, e)
	for (const r of t) r in n && delete n[r]
	return n
}
var nV = ['h', 'minH', 'height', 'minHeight'],
	OC = re((e, t) => {
		const n = Tr('Textarea', e),
			{ className: r, rows: o, ...i } = Kt(e),
			a = Nk(i),
			s = o ? tV(n, nV) : n
		return S.jsx(V.textarea, { ref: t, rows: o, ...a, className: ue('chakra-textarea', r), __css: s })
	})
OC.displayName = 'Textarea'
function rV() {
	const [e, t] = b.useState(''),
		[n, r] = b.useState(!1),
		[o, i] = b.useState(''),
		[a, s] = b.useState(['']),
		{ isOpen: l, onOpen: u, onClose: d } = Wc(),
		c = () => {
			r(!n)
		},
		f = p =>
			p
				.split('')
				.map(h => h.charCodeAt(0).toString(2).padStart(16, '0'))
				.join(''),
		m = p => {
			let h = p.split(''),
				v = []
			for (let C = 0; C < h.length; C++) (C + 1) & C || (v.push(C), h.splice(C, 0, '0'))
			return (
				v.forEach(C => {
					let E = 0
					for (let T = C; T < h.length; T += 2 * (C + 1)) for (let R = T; R < T + C + 1 && R < h.length; R++) E += +h[R]
					h[C] = E % 2 == 0 ? 0 : 1
				}),
				h.join('')
			)
		},
		y = p => {
			n || (p = p.split('0011111111')[0])
			let h = p.split(''),
				v = []
			for (let E = 0; E < h.length; E++) (E + 1) & E || v.push(E)
			let k = 0
			return (
				v.forEach(E => {
					let T = 0
					for (let R = E; R < h.length; R += 2 * (E + 1)) for (let M = R; M < R + E + 1 && M < h.length; M++) T += +h[M]
					T % 2 != 0 && (k += E + 1)
				}),
				k > 0 && (i(`Ошибка в позиции: ${k}`), (h[k - 1] = h[k - 1] === '0' ? '1' : '0')),
				h.filter((E, T) => !v.includes(T)).join('')
			)
		},
		g = p =>
			p
				.match(/.{1,16}/g)
				.map(h => String.fromCharCode(parseInt(h, 2)))
				.join(''),
		x = p => {
			i(''), s([''])
			let h = e
			n || ((h = f(e)), console.log('Бинарное представление строки: ', h))
			let v = ''
			p
				? ((v = y(h)), console.log('Расшифрованная последовательность: ', v))
				: ((v = m(h)), console.log('Добавлены контрольные биты: ', v))
			const k = g(v)
			console.log('Закодированное сообщение: ', k), s([`${h}`, `Промежуточное значение: ${v}`, `Результат: ${k}`]), u()
		}
	return S.jsxs($s, {
		maxW: '800px',
		h: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		children: [
			S.jsxs(Es, {
				spacing: 4,
				children: [
					S.jsxs(jn, {
						display: 'flex',
						children: [
							S.jsx(Ok, { htmlFor: 'binaryCheck', children: 'Двоичный код:' }),
							S.jsx(DC, { id: 'binaryCheck', isChecked: n, onChange: c }),
						],
					}),
					S.jsx(Ri, { placeholder: 'Введите что угодно...', value: e, onChange: p => t(p.target.value) }),
					S.jsx(ut, { onClick: () => x(!1), colorScheme: 'teal', children: 'Зашифровать сообщение' }),
					S.jsx(ut, { onClick: () => x(!0), colorScheme: 'red', children: 'Расшифровать сообщение' }),
				],
			}),
			S.jsxs(Hc, {
				isOpen: l,
				placement: 'right',
				onClose: d,
				size: 'md',
				children: [
					S.jsx(Is, {}),
					S.jsxs(Rs, {
						children: [
							S.jsx(js, {}),
							S.jsx(Ms, { children: 'Результат' }),
							S.jsxs(Fs, {
								children: [
									S.jsxs('p', { size: 'xl', children: ['Бинарное представление: ', a[0]] }),
									S.jsx('p', { children: a[1] }),
									S.jsx('p', { children: a[2] }),
									o ? S.jsx('p', { children: o }) : null,
								],
							}),
							S.jsx(As, { children: S.jsx(ut, { variant: 'outline', mr: 3, onClick: d, children: 'Close' }) }),
						],
					}),
				],
			}),
		],
	})
}
const oV = Hm({
		displayName: 'CheckCircleIcon',
		d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
	}),
	iV = Hm({
		d: 'M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z',
		displayName: 'DownloadIcon',
		viewBox: '0 0 14 14',
	}),
	aV = Hm({
		displayName: 'RepeatIcon',
		path: S.jsxs('g', {
			fill: 'currentColor',
			children: [
				S.jsx('path', {
					d: 'M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z',
				}),
				S.jsx('path', {
					d: 'M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z',
				}),
			],
		}),
	}),
	sV = e => {
		const t = new Array(e + 1).fill(!0)
		t[0] = t[1] = !1
		for (let r = 2; r * r <= e; r++) if (t[r]) for (let o = r * r; o <= e; o += r) t[o] = !1
		const n = []
		for (let r = 2; r <= e; r++) t[r] && n.push(r)
		return n
	},
	A1 = e => {
		const t = Math.floor(Math.random() * (e.length - 5)) + 5
		return e[t]
	},
	BC = (e, t) => {
		let n = 0
		for (; t != 0; ) {
			if (t > e) return BC(t, e)
			;(n = t), (t = e % t), (e = n)
		}
		return e
	},
	lV = e => {
		const t = A1(e),
			n = A1(e),
			r = t * n,
			o = (t - 1) * (n - 1)
		let i = 2
		for (; BC(e[i], o) !== 1; ) i++
		const a = e[i]
		let s = 1
		for (; (1 + s * o) % a !== 0; ) s++
		const l = (1 + s * o) / a
		return (
			console.log({ publicKey: { e: a, n: r }, privateKey: { d: l, n: r } }),
			{ publicKey: { e: a, n: r }, privateKey: { d: l, n: r } }
		)
	}
function uV(e, t, n) {
	if (n <= 0) return NaN
	let r = 1
	for (let o = 0; o < t; o++) r = (r * e) % n
	return r
}
const cV = () => {
	const { isOpen: e, onOpen: t, onClose: n } = Wc(),
		[r, o] = b.useState(''),
		[i, a] = b.useState([]),
		[s, l] = b.useState(''),
		[{ publicKey: u, privateKey: d }, c] = b.useState({ publicKey: { e: 3, n: 55 }, privateKey: { d: 27, n: 55 } }),
		f = Xm()
	b.useEffect(() => {
		const h = sV(100)
		a(h), console.log('Простые числа до 100 сгенерированы')
	}, [])
	const m = () => {
			c(lV(i))
		},
		y = p => {
			const { e: h, n: v } = u,
				k = []
			console.log('Начало')
			for (let C of p) {
				let E = C.charCodeAt(0).toString()
				console.log('Код символа: ', C, E)
				for (let T of E) {
					console.log('Цифра: ', T)
					const R = (Math.pow(T, h) % v).toString().padStart(8, '0')
					k.push(R)
				}
				k.push('11110011')
			}
			l(k), console.log(k), t()
		},
		g = p => {
			const { d: h, n: v } = d
			let k = ''
			const C = p.split('11110011').slice(0, -1)
			console.log('массив символов: ', C)
			for (let E of C) {
				const T = E.match(/.{1,8}/g) || []
				console.log('массив кодов символов: ', T)
				let R = ''
				for (let M of T) {
					const F = uV(parseInt(M, 10), h, v)
					R += F
				}
				k += String.fromCharCode(R)
			}
			l(k), t()
		},
		x = () => {
			let p = ''
			Array.isArray(s) ? (p = s.join('')) : (p = s),
				navigator.clipboard
					.writeText(p)
					.then(() => {
						f({ title: 'Сообщение скопировано', status: 'success', duration: 1e3, isClosable: !0 })
					})
					.catch(h => {
						console.log(h), f({ title: 'Возникла ошибка', status: 'error', duration: 1e3, isClosable: !0 })
					})
		}
	return S.jsxs($s, {
		maxW: '800px',
		h: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		children: [
			S.jsxs(Es, {
				spacing: 4,
				children: [
					S.jsxs(EC, {
						gap: 2,
						alignItems: 'center',
						children: [
							S.jsx(ut, { variant: 'outline', borderColor: 'teal', onClick: m, children: S.jsx(aV, { color: 'teal' }) }),
							S.jsxs(jn, {
								children: [
									S.jsxs('p', { children: ['Открытый ключ: ', `{ e: ${u.e}, n: ${u.n}}`] }),
									S.jsxs('p', { children: ['Закрытый ключ: ', `{ d: ${d.d}, n: ${d.n}}`] }),
								],
							}),
						],
					}),
					S.jsx(Ri, { type: 'search', placeholder: 'Введите что угодно...', value: r, onChange: p => o(p.target.value) }),
					S.jsx(ut, { colorScheme: 'teal', onClick: () => y(r), children: 'Зашифровать сообщение' }),
					S.jsx(ut, { colorScheme: 'red', onClick: () => g(r), children: 'Расшифровать сообщение' }),
				],
			}),
			S.jsxs(Hc, {
				isOpen: e,
				placement: 'right',
				onClose: n,
				size: 'md',
				children: [
					S.jsx(Is, {}),
					S.jsxs(Rs, {
						children: [
							S.jsx(js, {}),
							S.jsx(Ms, { children: 'Результат' }),
							S.jsx(Fs, {
								children: S.jsxs('p', {
									onClick: x,
									style: { cursor: 'pointer' },
									children: ['Зашифрованное сообщение: ', S.jsx(Gu, { width: 'md', children: s })],
								}),
							}),
							S.jsx(As, { children: S.jsx(ut, { variant: 'outline', mr: 3, onClick: n, children: 'Закрыть' }) }),
						],
					}),
				],
			}),
		],
	})
}
let NC = class {
	constructor(t, n) {
		;(this.char = t), (this.freq = n), (this.left = null), (this.right = null)
	}
}
const dV = e => {
		const t = new Map()
		for (const n of e) t.set(n, (t.get(n) || 0) + 1)
		return Array.from(t, ([n, r]) => new NC(n, r))
	},
	fV = e => {
		for (; e.length > 1; ) {
			e.sort((o, i) => o.freq - i.freq)
			const t = e.shift(),
				n = e.shift(),
				r = new NC(null, t.freq + n.freq)
			;(r.left = t), (r.right = n), e.push(r)
		}
		return e[0]
	},
	np = (e, t = '', n = {}) => {
		if (e) return e.char ? (n[e.char] = t) : (np(e.left, t + '0', n), np(e.right, t + '1', n)), n
	},
	hV = () => {
		const { isOpen: e, onOpen: t, onClose: n } = Wc(),
			[r, o] = b.useState(''),
			[i, a] = b.useState({}),
			[s, l] = b.useState(''),
			u = Xm(),
			d = m => {
				const y = dV(m.toLowerCase())
				console.log(y)
				const g = fV(y)
				console.log(g)
				const x = np(g)
				console.log(x)
				const p = m
					.toLowerCase()
					.split('')
					.map(h => x[h])
					.join('')
				l(p), a(x), t()
			},
			c = (m, y) => {
				const g = Object.fromEntries(Object.entries(y).map(([h, v]) => [v, h]))
				let x = '',
					p = ''
				for (const h of m) (p += h), p in g && ((x += g[p]), (p = ''))
				l(x), t()
			},
			f = () => {
				let m = ''
				Array.isArray(s) ? (m = s.join('')) : (m = s),
					navigator.clipboard
						.writeText(m)
						.then(() => {
							u({ title: 'Сообщение скопировано', status: 'success', duration: 1e3, isClosable: !0 })
						})
						.catch(y => {
							console.log(y), u({ title: 'Возникла ошибка', status: 'error', duration: 1e3, isClosable: !0 })
						})
			}
		return S.jsxs($s, {
			maxW: '800px',
			h: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			children: [
				S.jsxs(Es, {
					spacing: 4,
					children: [
						S.jsx(Ri, { type: 'search', placeholder: 'Введите что угодно...', value: r, onChange: m => o(m.target.value) }),
						S.jsx(ut, { colorScheme: 'teal', onClick: () => d(r), children: 'Зашифровать сообщение' }),
						S.jsx(ut, { colorScheme: 'red', onClick: () => c(r, i), children: 'Расшифровать сообщение' }),
					],
				}),
				S.jsxs(Hc, {
					isOpen: e,
					placement: 'right',
					onClose: n,
					size: 'md',
					children: [
						S.jsx(Is, {}),
						S.jsxs(Rs, {
							children: [
								S.jsx(js, {}),
								S.jsx(Ms, { children: 'Результат' }),
								S.jsxs(Fs, {
									children: [
										S.jsx(jn, {
											mb: 2,
											children: S.jsxs('p', {
												onClick: f,
												cursor: 'pointer',
												children: ['Начальное сообщение: ', S.jsx(Gu, { width: 'md', children: r })],
											}),
										}),
										S.jsx(jn, {
											mb: 2,
											children: S.jsxs('p', {
												onClick: f,
												style: { cursor: 'pointer' },
												children: ['Зашифрованное сообщение: ', S.jsx(Gu, { width: 'md', children: s })],
											}),
										}),
										S.jsxs(jn, {
											mt: 4,
											children: [
												S.jsx('p', { children: 'Кодировка символов:' }),
												S.jsx(jn, {
													children: Object.entries(i).map(([m, y], g) =>
														S.jsxs('p', { children: [S.jsx('b', { children: m }), ': ', y] }, g),
													),
												}),
											],
										}),
									],
								}),
								S.jsx(As, { children: S.jsx(ut, { variant: 'outline', mr: 3, onClick: n, children: 'Закрыть' }) }),
							],
						}),
					],
				}),
			],
		})
	},
	pV = async (e, t, n = 1) =>
		new Promise((r, o) => {
			const i = new FileReader()
			;(i.onload = a => {
				const s = new Image()
				;(s.src = a.target.result),
					(s.onload = () => {
						const l = document.createElement('canvas'),
							u = l.getContext('2d', { willReadFrequently: !0 })
						;(l.width = s.width), (l.height = s.height), u.drawImage(s, 0, 0)
						const d = u.getImageData(0, 0, s.width, s.height),
							c = d.data
						let f = t
							.split('')
							.map(p => p.charCodeAt(0).toString(2).padStart(8, '0'))
							.join('')
						const m = f.length % +n
						console.log('Не хватает до целого: ' + m), m !== 0 && (f = f.padEnd(f.length + (+n - m), '0'))
						const y = f.length.toString(2).padStart(32, '0')
						console.log('Данные сообщения: ', t, f, f.length)
						let g = 0
						for (let p = 0; p < 32; g++) {
							let h = y.slice(p, p + 1)
							if ((g + 1) % 4 !== 0 && c[3 - (g % 4) + g] == 255) {
								p++
								const v = c[g],
									k = (1 << n) - 1
								c[g] = (v & ~k) | parseInt(h, 2)
							}
						}
						let x = 0
						for (let p = 0; g < c.length && !(x >= f.length); g++)
							if (c[3 - (g % 4) + g] == 255 && (g + 1) % 4 !== 0) {
								const h = c[g]
								let v = f.slice(x, x + +n)
								x += +n
								const k = 255 << +n,
									C = (h & k) | parseInt(v, 2)
								;(c[g] = C),
									(p < 20 || p > f.length - 20) &&
										console.log(
											`Пиксель-бит ${g} который был ${h} - ${h.toString(2)}: `,
											`${c[g]} - ${c[g].toString(2)} добавили ${parseInt(v, 2)} где messageIndex: ${x}`,
										),
									(p += +n)
							}
						if (x < f.length) {
							o('Изображение маленькое для шифрования всего сообщения.')
							return
						}
						u.putImageData(d, 0, 0), l.toBlob(r, 'image/png')
					}),
					(s.onerror = () => o('Ошибка загрузки изображения.'))
			}),
				(i.onerror = () => o('Ошибка чтения файла.')),
				i.readAsDataURL(e)
		}),
	mV = async (e, t) => (
		t || (t = 1),
		new Promise((n, r) => {
			const o = new FileReader()
			;(o.onload = i => {
				const a = new Image()
				;(a.src = i.target.result),
					(a.onload = () => {
						const s = document.createElement('canvas'),
							l = s.getContext('2d')
						;(s.width = a.width), (s.height = a.height), l.drawImage(a, 0, 0)
						const d = l.getImageData(0, 0, a.width, a.height).data
						let c = '',
							f = 0
						for (let p = 0; p < 32; f++)
							if (d[3 - (f % 4) + f] === 255 && (f + 1) % 4 !== 0) {
								p++
								const v = d[f] & 1
								c += v
							}
						const m = parseInt(c, 2)
						console.log(`Сообщение длиной: ${m}`)
						let y = ''
						for (let p = 0; f < d.length && !(y.length >= m); f++)
							if (d[3 - (f % 4) + f] === 255 && (f + 1) % 4 !== 0) {
								const h = d[f]
								let v = h.toString(2).padStart(8, '0'),
									k = (1 << +t) - 1,
									C = h & k
								;(y += C.toString(2).padStart(+t, '0')),
									(p < 20 || p > y.length - 20) &&
										console.log(
											`Пиксель-бит ${f} который ${h} - ${v}: забрали ${C.toString(2).padStart(+t, '0')}`,
											`маска - ${k}`,
										),
									p++
							}
						if (y.length < m) {
							r('Не удалось извлечь все данные из изображения.')
							return
						}
						const g = y.length % 8
						console.log('Не хватает до целого: ' + g),
							g !== 0 && (y = y.slice(0, -g)),
							console.log(`Сообщение в бинарном виде: ${y} - ${y.length}`)
						let x = ''
						for (let p = 0; p < y.length; p += 8) {
							const h = y.slice(p, p + 8)
							x += String.fromCharCode(parseInt(h, 2))
						}
						console.log(x), n(x)
					}),
					(a.onerror = () => r('Ошибка загрузки изображения.'))
			}),
				(o.onerror = () => r('Ошибка чтения файла.')),
				o.readAsDataURL(e)
		})
	),
	vV = () => {
		const { isOpen: e, onOpen: t, onClose: n } = Wc(),
			[r, o] = b.useState(''),
			[i, a] = b.useState(null),
			[s, l] = b.useState(''),
			[u, d] = b.useState([]),
			c = Xm(),
			f = x => {
				const p = x.target.files[0]
				p && p.type.startsWith('image/')
					? (a(p),
					  console.log(
							`Файл загружен
`,
							p,
					  ))
					: c({
							title: 'Ошибка',
							description: 'Пожалуйста, загрузите корректное изображение',
							status: 'error',
							duration: 2e3,
							isClosable: !0,
					  })
			},
			m = x => {
				d(p => (p.includes(x) ? p.filter(h => h !== x) : [...p, x]))
			},
			y = async () => {
				if (!i || !r || u.length === 0) {
					c({
						title: 'Ошибка',
						description: 'Необходимо загрузить изображение и ввести сообщение',
						status: 'error',
						duration: 2e3,
						isClosable: !0,
					})
					return
				}
				try {
					const x = []
					for (const h of u) {
						const v = await pV(i, r, h),
							k = URL.createObjectURL(v)
						x.push({ bit: h, link: k })
					}
					x.sort((h, v) => h.bit - v.bit)
					const p = URL.createObjectURL(i)
					l(
						S.jsxs(S.Fragment, {
							children: [
								S.jsx('p', { children: 'Сообщение зашифровано. Измененные изображения готовы.' }),
								S.jsxs('div', {
									children: [
										S.jsx('p', { children: 'Оригинальное изображение:' }),
										S.jsx('img', { src: p, alt: 'Original Image', style: { maxWidth: '100%', marginBottom: '10px' } }),
									],
								}),
								x.map(({ bit: h, link: v }) =>
									S.jsxs(
										'div',
										{
											children: [
												S.jsxs('p', { children: ['Изображение с ', h, ' битами заменёнными:'] }),
												S.jsx('a', {
													href: v,
													download: `encrypted_${h}bit.png`,
													children: S.jsx('img', {
														src: v,
														alt: `Encrypted Image (${h} bits)`,
														style: { maxWidth: '100%', marginBottom: '10px' },
													}),
												}),
											],
										},
										h,
									),
								),
							],
						}),
					),
						t()
				} catch (x) {
					c({
						title: 'Ошибка',
						description: `Произошла ошибка при шифровании: ${x}`,
						status: 'error',
						duration: 3e3,
						isClosable: !0,
					})
				}
			},
			g = async () => {
				if (!i) {
					c({
						title: 'Ошибка',
						description: 'Необходимо загрузить изображение для дешифрования',
						status: 'error',
						duration: 2e3,
						isClosable: !0,
					})
					return
				}
				try {
					console.log('Начали дешифрование')
					const x = await mV(i, r)
					l(`Дешифрованное сообщение: ${x}`), t()
				} catch (x) {
					c({
						title: 'Ошибка',
						description: `Произошла ошибка при дешифровании: ${x}`,
						status: 'error',
						duration: 3e3,
						isClosable: !0,
					})
				}
			}
		return S.jsxs($s, {
			maxW: '800px',
			h: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			children: [
				S.jsxs(Es, {
					spacing: 4,
					children: [
						S.jsx('p', { children: 'Кол-во шифрующих бит' }),
						S.jsx(PC, {
							children: [1, 2, 3, 4, 5, 6, 7, 8].map(x =>
								S.jsx(Uk, { isChecked: u.includes(x), onChange: () => m(x), children: x }, x),
							),
						}),
						S.jsxs(jn, {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							children: [
								S.jsx(Ri, { type: 'file', accept: 'image/*', onChange: f, id: 'file-upload', style: { display: 'none' } }),
								S.jsx('label', {
									htmlFor: 'file-upload',
									children: S.jsxs(ut, {
										variant: 'outline',
										as: 'span',
										width: '325px',
										fontWeight: 'bold',
										colorScheme: i ? 'green' : 'teal',
										leftIcon: i ? S.jsx(oV, {}) : S.jsx(iV, {}),
										cursor: 'pointer',
										_hover: { bg: i ? 'green.400' : 'teal.400' },
										children: [i ? 'Файл загружен' : 'Загрузить изображение', ' '],
									}),
								}),
							],
						}),
						S.jsx(OC, {
							placeholder: 'Введите сообщение для шифрования',
							value: r,
							onChange: x => o(x.target.value),
							resize: 'vertical',
							width: '325px',
							maxHeight: '200px',
							overflow: 'auto',
						}),
						S.jsx(ut, { colorScheme: 'teal', onClick: y, children: 'Зашифровать сообщение' }),
						S.jsx(ut, { colorScheme: 'red', onClick: g, children: 'Дешифровать сообщение' }),
					],
				}),
				S.jsxs(Hc, {
					isOpen: e,
					placement: 'right',
					onClose: n,
					size: 'md',
					children: [
						S.jsx(Is, {}),
						S.jsxs(Rs, {
							children: [
								S.jsx(js, {}),
								S.jsx(Ms, { children: 'Результат' }),
								S.jsx(Fs, { children: s }),
								S.jsx(As, { children: S.jsx(ut, { variant: 'outline', mr: 3, onClick: n, children: 'Закрыть' }) }),
							],
						}),
					],
				}),
			],
		})
	},
	Zi = {
		header: {
			position: 'absolute',
			top: '0',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '20px',
		},
		button: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: '#333',
			textDecoration: 'none',
			margin: '0 10px',
			padding: '5px 15px',
			borderRadius: '8px',
			border: '1px solid #BBB',
		},
	}
function gV() {
	return S.jsx(KO, {
		children: S.jsxs(mE, {
			children: [
				S.jsx(yV, {}),
				S.jsxs(sE, {
					children: [
						S.jsx(ra, { path: '/SurGU_Code_Hamming/Lab_4', element: S.jsx(vV, {}) }),
						S.jsx(ra, { path: '/SurGU_Code_Hamming/Lab_3', element: S.jsx(hV, {}) }),
						S.jsx(ra, { path: '/SurGU_Code_Hamming/Lab_2', element: S.jsx(cV, {}) }),
						S.jsx(ra, { path: '/SurGU_Code_Hamming/', element: S.jsx(rV, {}) }),
					],
				}),
			],
		}),
	})
}
function yV() {
	return S.jsxs('header', {
		style: Zi.header,
		children: [
			S.jsx(ll, {
				to: '/SurGU_Code_Hamming/',
				style: Zi.button,
				className: ({ isActive: e }) => (e ? 'active' : ''),
				children: 'Hamming',
			}),
			S.jsx(ll, {
				to: '/SurGU_Code_Hamming/Lab_2',
				style: Zi.button,
				className: ({ isActive: e }) => (e ? 'active' : ''),
				children: 'RSA',
			}),
			S.jsx(ll, {
				to: '/SurGU_Code_Hamming/Lab_3',
				style: Zi.button,
				className: ({ isActive: e }) => (e ? 'active' : ''),
				children: 'Hafman',
			}),
			S.jsx(ll, {
				to: '/SurGU_Code_Hamming/Lab_4',
				style: Zi.button,
				className: ({ isActive: e }) => (e ? 'active' : ''),
				children: 'LSB',
			}),
		],
	})
}
Ux(document.getElementById('root')).render(S.jsx(gV, {}))