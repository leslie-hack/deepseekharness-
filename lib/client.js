window.__ModuleLoader__.load({
	id: "@local/dsh-beautify",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let React = require("react");

		const PRESETS = {
		  violet: { name: '紫罗兰', swatch: '#8b5cf6', tokens: {
		    '--dsw-alias-brand-primary': { light: '#7c3aed', dark: '#a78bfa' },
		    '--dsw-alias-bg-base': { light: '#f6f4ff', dark: '#171521' },
		    '--dsw-alias-bg-layer-1': { light: '#ffffff', dark: '#211d31' },
		    '--dsw-alias-bg-layer-2': { light: '#ede9fe', dark: '#2a2542' },
		    '--dsw-alias-bg-overlay': { light: '#ffffff', dark: '#1e1a2c' },
		    '--dsw-alias-border-l1': { light: '#ddd6fe', dark: '#383254' },
		    '--dsw-alias-border-l2': { light: '#c4b5fd', dark: '#4b4270' },
		    '--dsw-alias-label-primary': { light: '#2e1065', dark: '#f2eeff' },
		    '--dsw-alias-label-secondary': { light: '#6d28d9', dark: '#c3b6f5' },
		    '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
		    '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
		    '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
		    '--dsw-specific-sidebar-fill': { light: '#ede9fe', dark: '#1c1830' },
		  } },
		  emerald: { name: '翡翠', swatch: '#10b981', tokens: {
		    '--dsw-alias-brand-primary': { light: '#059669', dark: '#34d399' },
		    '--dsw-alias-bg-base': { light: '#f2faf6', dark: '#0f1f18' },
		    '--dsw-alias-bg-layer-1': { light: '#ffffff', dark: '#14291f' },
		    '--dsw-alias-bg-layer-2': { light: '#d1fae5', dark: '#1b352a' },
		    '--dsw-alias-bg-overlay': { light: '#ffffff', dark: '#122418' },
		    '--dsw-alias-border-l1': { light: '#a7f3d0', dark: '#27473a' },
		    '--dsw-alias-border-l2': { light: '#6ee7b7', dark: '#35614f' },
		    '--dsw-alias-label-primary': { light: '#064e3b', dark: '#d1fae5' },
		    '--dsw-alias-label-secondary': { light: '#047857', dark: '#6ee7b7' },
		    '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
		    '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
		    '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
		    '--dsw-specific-sidebar-fill': { light: '#d1fae5', dark: '#0e1d15' },
		  } },
		  amber: { name: '琥珀', swatch: '#f59e0b', tokens: {
		    '--dsw-alias-brand-primary': { light: '#d97706', dark: '#fbbf24' },
		    '--dsw-alias-bg-base': { light: '#fffbeb', dark: '#1d1609' },
		    '--dsw-alias-bg-layer-1': { light: '#ffffff', dark: '#241b0d' },
		    '--dsw-alias-bg-layer-2': { light: '#fef3c7', dark: '#2e2312' },
		    '--dsw-alias-bg-overlay': { light: '#ffffff', dark: '#201808' },
		    '--dsw-alias-border-l1': { light: '#fde68a', dark: '#4a3a1c' },
		    '--dsw-alias-border-l2': { light: '#fcd34d', dark: '#615029' },
		    '--dsw-alias-label-primary': { light: '#78350f', dark: '#fef3c7' },
		    '--dsw-alias-label-secondary': { light: '#92400e', dark: '#fcd34d' },
		    '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
		    '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
		    '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
		    '--dsw-specific-sidebar-fill': { light: '#fef3c7', dark: '#191204' },
		  } },
		  sakura: { name: '樱花', swatch: '#ec4899', tokens: {
		    '--dsw-alias-brand-primary': { light: '#db2777', dark: '#f472b6' },
		    '--dsw-alias-bg-base': { light: '#fdf2f8', dark: '#1f0f18' },
		    '--dsw-alias-bg-layer-1': { light: '#ffffff', dark: '#281321' },
		    '--dsw-alias-bg-layer-2': { light: '#fce7f3', dark: '#331a2b' },
		    '--dsw-alias-bg-overlay': { light: '#ffffff', dark: '#241020' },
		    '--dsw-alias-border-l1': { light: '#fbcfe8', dark: '#4a2a40' },
		    '--dsw-alias-border-l2': { light: '#f9a8d4', dark: '#613955' },
		    '--dsw-alias-label-primary': { light: '#831843', dark: '#fce7f3' },
		    '--dsw-alias-label-secondary': { light: '#be185d', dark: '#f9a8d4' },
		    '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
		    '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
		    '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
		    '--dsw-specific-sidebar-fill': { light: '#fce7f3', dark: '#1a0c15' },
		  } },
		  ocean: { name: '深海', swatch: '#0ea5e9', tokens: {
		    '--dsw-alias-brand-primary': { light: '#0284c7', dark: '#38bdf8' },
		    '--dsw-alias-bg-base': { light: '#f0f9ff', dark: '#0a1522' },
		    '--dsw-alias-bg-layer-1': { light: '#ffffff', dark: '#0f1d2e' },
		    '--dsw-alias-bg-layer-2': { light: '#e0f2fe', dark: '#152638' },
		    '--dsw-alias-bg-overlay': { light: '#ffffff', dark: '#0d1928' },
		    '--dsw-alias-border-l1': { light: '#bae6fd', dark: '#243a50' },
		    '--dsw-alias-border-l2': { light: '#7dd3fc', dark: '#2f4c68' },
		    '--dsw-alias-label-primary': { light: '#0c4a6e', dark: '#e0f2fe' },
		    '--dsw-alias-label-secondary': { light: '#0369a1', dark: '#7dd3fc' },
		    '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
		    '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
		    '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
		    '--dsw-specific-sidebar-fill': { light: '#e0f2fe', dark: '#081222' },
		  } },
		}
		const ORDER = ['default', 'violet', 'emerald', 'amber', 'sakura', 'ocean']
		const DEFAULT_SWATCH = 'linear-gradient(135deg, #9ca3af, #6b7280)'
		const REGION_KEYS = ['base', 'sidebar', 'center', 'details']
		const REGION_NAMES = { base: '全局背景', sidebar: '侧边栏', center: '对话区', details: '详情区' }
		const PROBE_TIMEOUT_MS = 8000
		const STORAGE_KEY = 'bfy-beautify-state'

		let themeService = null
		let timerService = null
		let currentPreset = 'default'
		let currentDisposer = null
		let currentTokens = null
		let generated = null
		let hueTokens = null
		let hueValue = 210
		let savedPresets = []
		let savedCounter = 0
		let wallpaper = null
		let wallpaperOpacity = 0.85
		let wallpaperMode = 'behind'
		let icon = null
		let activeRegion = 'center'
		let persistTimer = null
		let restored = false
		let styleTag = null
		let sendIconEnabled = false
		let sendIconUrl = null
		let sendIconDisposer = null
		const regions = {
		  base: { url: null, fit: 'cover', scale: 100, pos: 'center', opacity: 1, panelOpacity: 1 },
		  sidebar: { url: null, fit: 'cover', scale: 100, pos: 'center', opacity: 1, panelOpacity: 1 },
		  center: { url: null, fit: 'cover', scale: 100, pos: 'center', opacity: 1, panelOpacity: 1 },
		  details: { url: null, fit: 'cover', scale: 100, pos: 'center', opacity: 1, panelOpacity: 1 },
		}
		let backdropDisposer = null
		const listeners = new Set()

		function getState() {
		  return {
		    current: currentPreset, generated: generated, wallpaper: wallpaper, wallpaperMode: wallpaperMode,
		    wallpaperOpacity: wallpaperOpacity, icon: icon, activeRegion: activeRegion, regions: regions,
		    hueValue: hueValue, savedPresets: savedPresets, restored: restored,
		    sendIconEnabled: sendIconEnabled, sendIconUrl: sendIconUrl,
		  }
		}
		function subscribe(fn) {
		  listeners.add(fn)
		  return function () { listeners.delete(fn) }
		}
		function emitChange() {
		  listeners.forEach(function (fn) { fn() })
		  schedulePersist()
		}
		function schedulePersist() {
		  if (persistTimer) { persistTimer(); persistTimer = null }
		  if (timerService) {
		    persistTimer = timerService.timeout(function () { persistState(); persistTimer = null }, 400)
		  }
		}
		function persistState() {
		  try {
		    const data = {
		      v: 1,
		      currentPreset: currentPreset,
		      hueValue: hueValue,
		      savedPresets: savedPresets,
		      savedCounter: savedCounter,
		      wallpaperOpacity: wallpaperOpacity,
		      wallpaperMode: wallpaperMode,
		      icon: icon,
		      activeRegion: activeRegion,
		      regions: regions,
		      sendIconEnabled: sendIconEnabled,
		      sendIconUrl: sendIconUrl,
		      generated: generated ? {
		        label: generated.label,
		        tokens: generated.tokens,
		        wallpaperUrl: generated.wallpaperUrl || null,
		      } : null,
		    }
		    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
		  } catch (e) { /* 存储不可用或超限时静默 */ }
		}
		function restoreState() {
		  try {
		    const raw = localStorage.getItem(STORAGE_KEY)
		    if (!raw) { restored = true; return }
		    const d = JSON.parse(raw)
		    if (!d || d.v !== 1) { restored = true; return }
		    currentPreset = d.currentPreset || 'default'
		    hueValue = typeof d.hueValue === 'number' ? d.hueValue : 210
		    hueTokens = makeHueTokens(hueValue)
		    savedPresets = Array.isArray(d.savedPresets) ? d.savedPresets : []
		    savedCounter = typeof d.savedCounter === 'number' ? d.savedCounter : savedPresets.length
		    wallpaperOpacity = typeof d.wallpaperOpacity === 'number' ? d.wallpaperOpacity : 0.85
		    wallpaperMode = d.wallpaperMode === 'front' ? 'front' : 'behind'
		    icon = d.icon || null
		    activeRegion = d.activeRegion || 'center'
		    sendIconEnabled = d.sendIconEnabled === true
		    sendIconUrl = d.sendIconUrl || null
		    if (d.regions && typeof d.regions === 'object') {
		      for (const k of REGION_KEYS) {
		        const r = d.regions[k]
		        if (r && typeof r === 'object') {
		          regions[k] = {
		            url: r.url || null,
		            fit: r.fit || 'cover',
		            scale: typeof r.scale === 'number' ? r.scale : 100,
		            pos: r.pos || 'center',
		            opacity: typeof r.opacity === 'number' ? r.opacity : 1,
		            panelOpacity: typeof r.panelOpacity === 'number' ? r.panelOpacity : 1,
		          }
		        }
		      }
		    }
		    if (d.generated && d.generated.tokens) {
		      generated = {
		        label: d.generated.label || '主题',
		        tokens: d.generated.tokens,
		        wallpaperUrl: d.generated.wallpaperUrl || null,
		        loadable: [],
		      }
		    }
		    const anyUrl = REGION_KEYS.some(function (k) { return regions[k] && regions[k].url })
		    wallpaper = anyUrl ? { url: regions.base.url || regions.center.url || regions.sidebar.url || regions.details.url, opacity: wallpaperOpacity } : null
		    syncBackdrop()
		    syncSendIcon()
		    applyTokens(presetTokens(currentPreset))
		    restored = true
		  } catch (e) { restored = true; /* 损坏数据静默忽略 */ }
		}
		function resetAll() {
		  try {
		    localStorage.removeItem(STORAGE_KEY)
		  } catch (e) { /* 忽略 */ }
		  currentPreset = 'default'
		  hueValue = 210
		  hueTokens = null
		  savedPresets = []
		  savedCounter = 0
		  wallpaper = null
		  wallpaperOpacity = 0.85
		  wallpaperMode = 'behind'
		  icon = null
		  activeRegion = 'center'
		  generated = null
		  sendIconEnabled = false
		  sendIconUrl = null
		  for (const k of REGION_KEYS) regions[k] = { url: null, fit: 'cover', scale: 100, pos: 'center', opacity: 1, panelOpacity: 1 }
		  if (currentDisposer) { currentDisposer(); currentDisposer = null }
		  if (backdropDisposer) { backdropDisposer(); backdropDisposer = null }
		  if (sendIconDisposer) { sendIconDisposer(); sendIconDisposer = null }
		  currentTokens = null
		  emitChange()
		}

		function presetInfo(id) {
		  if (id === 'default') return { name: '默认', swatch: DEFAULT_SWATCH }
		  if (id === 'generated' && generated) return { name: generated.label, swatch: generated.tokens['--dsw-alias-brand-primary'].dark }
		  if (id === 'hue') return { name: '自定义 ' + hueValue + '°', swatch: hslToHex(hueValue, 75, 60) }
		  if (id.indexOf('saved-') === 0) {
		    const idx = Number(id.slice(6))
		    const p = savedPresets[idx]
		    if (p) return { name: p.name, swatch: p.tokens['--dsw-alias-brand-primary'].dark }
		  }
		  return PRESETS[id] || { name: '默认', swatch: DEFAULT_SWATCH }
		}
		function presetTokens(id) {
		  if (id === 'default') return null
		  if (id === 'generated' && generated) return generated.tokens
		  if (id === 'hue') return hueTokens
		  if (id.indexOf('saved-') === 0) {
		    const p = savedPresets[Number(id.slice(6))]
		    if (p) return p.tokens
		  }
		  const t = PRESETS[id]
		  return t ? t.tokens : null
		}
		function hslToHex(h, s, l) {
		  s = s / 100
		  l = l / 100
		  const k = function (n) { return (n + h / 30) % 12 }
		  const a = s * Math.min(l, 1 - l)
		  const f = function (n) {
		    const c = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
		    return Math.round(c * 255).toString(16).padStart(2, '0')
		  }
		  return '#' + f(0) + f(8) + f(4)
		}
		function makeHueTokens(hue) {
		  return {
		    '--dsw-alias-brand-primary': { light: hslToHex(hue, 72, 52), dark: hslToHex(hue, 80, 66) },
		    '--dsw-alias-bg-base': { light: hslToHex(hue, 30, 96), dark: hslToHex(hue, 42, 9) },
		    '--dsw-alias-bg-layer-1': { light: hslToHex(hue, 18, 99), dark: hslToHex(hue, 36, 13) },
		    '--dsw-alias-bg-layer-2': { light: hslToHex(hue, 34, 91), dark: hslToHex(hue, 34, 17) },
		    '--dsw-alias-bg-overlay': { light: '#ffffff', dark: hslToHex(hue, 38, 11) },
		    '--dsw-alias-border-l1': { light: hslToHex(hue, 20, 86), dark: hslToHex(hue, 22, 24) },
		    '--dsw-alias-border-l2': { light: hslToHex(hue, 26, 76), dark: hslToHex(hue, 26, 34) },
		    '--dsw-alias-label-primary': { light: hslToHex(hue, 42, 18), dark: hslToHex(hue, 45, 93) },
		    '--dsw-alias-label-secondary': { light: hslToHex(hue, 30, 40), dark: hslToHex(hue, 28, 70) },
		    '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
		    '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
		    '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
		    '--dsw-specific-sidebar-fill': { light: hslToHex(hue, 30, 94), dark: hslToHex(hue, 36, 10) },
		  }
		}
		function hexToRgba(hex, alpha) {
		  const m = String(hex).trim().match(/^#([0-9a-f]{6})$/i)
		  if (!m) return hex
		  const n = parseInt(m[1], 16)
		  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + alpha + ')'
		}
		function applyTokens(tokens) {
		  if (currentDisposer) { currentDisposer(); currentDisposer = null }
		  currentTokens = tokens || null
		  if (!themeService || !tokens) { emitChange(); return }
		  let effective = tokens
		  if (wallpaper && wallpaperMode === 'behind') {
		    const a = wallpaperOpacity
		    const out = {}
		    for (const k of Object.keys(tokens)) {
		      const v = tokens[k]
		      if (k === '--dsw-alias-bg-base') {
		        out[k] = { light: hexToRgba(v.light, a), dark: hexToRgba(v.dark, a) }
		      } else if (k === '--dsw-alias-bg-layer-1' || k === '--dsw-alias-bg-layer-2') {
		        out[k] = { light: hexToRgba(v.light, 0.97), dark: hexToRgba(v.dark, 0.97) }
		      } else if (k === '--dsw-alias-bg-overlay') {
		        out[k] = { light: hexToRgba(v.light, 0.985), dark: hexToRgba(v.dark, 0.985) }
		      } else if (k === '--dsw-specific-sidebar-fill') {
		        out[k] = { light: hexToRgba(v.light, Math.max(a, 0.9)), dark: hexToRgba(v.dark, Math.max(a, 0.9)) }
		      } else {
		        out[k] = v
		      }
		    }
		    effective = out
		  }
		  currentDisposer = themeService.overrideTokens('beautify', effective)
		  emitChange()
		}
		function regionCss(r) {
		  if (!r || !r.url) return null
		  let size = 'cover'
		  let pos = 'center center'
		  if (r.fit === 'contain') size = 'contain'
		  else if (r.fit === 'fill') size = '100% 100%'
		  else if (r.fit === 'scale') size = r.scale + '% auto'
		  if (r.pos === 'top') pos = 'center top'
		  else if (r.pos === 'bottom') pos = 'center bottom'
		  else if (r.pos === 'left') pos = 'left center'
		  else if (r.pos === 'right') pos = 'right center'
		  return { size: size, pos: pos, opacity: (r.opacity === undefined ? 1 : r.opacity) }
		}
		function syncBackdrop() {
		  if (backdropDisposer) { backdropDisposer(); backdropDisposer = null }
		  if (!wallpaper || wallpaperMode !== 'behind') return
		  let css = ''
		  const frame = regionCss(regions.base)
		  if (frame) {
		    css += '.pI_x6G_frame{background-image:url("' + regions.base.url + '") !important;background-size:' + frame.size + ' !important;background-position:' + frame.pos + ' !important;background-repeat:no-repeat !important}'
		    if (frame.opacity < 1) {
		      css += '.pI_x6G_frame::before{content:"";position:absolute;inset:0;background:var(--dsw-alias-bg-base);opacity:' + (1 - frame.opacity) + ';z-index:0;pointer-events:none}'
		    }
		  }
		  const pairs = [
		    ['sidebar', '.pI_x6G_sidebarCol'],
		    ['center', '.pI_x6G_centerCol'],
		    ['details', '.pI_x6G_detailsCol'],
		  ]
		  for (const [key, sel] of pairs) {
		    const r = regions[key]
		    if (r && r.url) {
		      const c = regionCss(r)
		      css += sel + '{position:relative;background-image:url("' + r.url + '") !important;background-size:' + c.size + ' !important;background-position:' + c.pos + ' !important;background-repeat:no-repeat !important}'
		      if (c.opacity < 1) {
		        css += sel + '::before{content:"";position:absolute;inset:0;background:var(--dsw-alias-bg-base);opacity:' + (1 - c.opacity) + ';z-index:0;pointer-events:none}'
		      }
		    }
		    const p = (r && typeof r.panelOpacity === 'number') ? r.panelOpacity : 1
		    if (p < 1) {
		      const P = Math.round(p * 100)
		      const sfx = key
		      css += ':root{--bfy-l1-' + sfx + ':color-mix(in srgb,var(--dsw-alias-bg-layer-1) ' + P + '%,transparent) !important;--bfy-l2-' + sfx + ':color-mix(in srgb,var(--dsw-alias-bg-layer-2) ' + P + '%,transparent) !important;--bfy-ov-' + sfx + ':color-mix(in srgb,var(--dsw-alias-bg-overlay) ' + P + '%,transparent) !important;--bfy-sb-' + sfx + ':color-mix(in srgb,var(--dsw-specific-sidebar-fill) ' + P + '%,transparent) !important}'
		      css += sel + '{--dsw-alias-bg-layer-1:var(--bfy-l1-' + sfx + ') !important;--dsw-alias-bg-layer-2:var(--bfy-l2-' + sfx + ') !important;--dsw-alias-bg-overlay:var(--bfy-ov-' + sfx + ') !important;--dsw-specific-sidebar-fill:var(--bfy-sb-' + sfx + ') !important}'
		    }
		  }
		  if (!css) return
		  try {
		    backdropDisposer = insertStyles(css)
		  } catch (e) { backdropDisposer = null }
		}
		function insertStyles(css) {
		  if (typeof document === 'undefined') return function () {}
		  const tag = document.createElement('style')
		  tag.setAttribute('data-dyn', 'beautify')
		  tag.textContent = css
		  document.head.appendChild(tag)
		  return function () { tag.remove() }
		}
		function effectiveSendIcon() {
		  if (!sendIconEnabled) return null
		  return sendIconUrl || null
		}
		function syncSendIcon() {
		  if (sendIconDisposer) { sendIconDisposer(); sendIconDisposer = null }
		  const src = effectiveSendIcon()
		  if (!src) return
		  const base =
		    '{background-color:transparent !important;background-image:url("' + src + '") !important;background-size:cover !important;background-position:center !important;background-repeat:no-repeat !important;-webkit-mask-image:radial-gradient(circle,#000 100%,transparent 100%) !important;mask-image:radial-gradient(circle,#000 100%,transparent 100%) !important}'
		  const css =
		    '.uV2eYG_primary[aria-label="发送消息"],.uV2eYG_primary[aria-label="Send message"]' + base +
		    '.uV2eYG_primary[aria-label="发送消息"]:hover:not(:disabled),.uV2eYG_primary[aria-label="Send message"]:hover:not(:disabled)' + base +
		    '.uV2eYG_primary[aria-label="发送消息"] svg,.uV2eYG_primary[aria-label="Send message"] svg{display:none !important}'
		  try {
		    sendIconDisposer = insertStyles(css)
		  } catch (e) { sendIconDisposer = null }
		}
		function setSendIconEnabled(v) {
		  sendIconEnabled = v === true
		  syncSendIcon()
		  emitChange()
		}
		function setSendIconUrl(url) {
		  sendIconUrl = url ? String(url) : null
		  syncSendIcon()
		  emitChange()
		}
		function applyPreset(id) {
		  currentPreset = id
		  applyTokens(presetTokens(id))
		  emitChange()
		}
		function applyHue(v) {
		  hueValue = Number(v)
		  hueTokens = makeHueTokens(hueValue)
		  currentPreset = 'hue'
		  applyTokens(hueTokens)
		  emitChange()
		}
		function saveHuePreset() {
		  const tokens = makeHueTokens(hueValue)
		  savedPresets.push({ name: '自定义 ' + (savedCounter + 1) + '（' + hueValue + '°）', tokens: tokens })
		  savedCounter++
		  emitChange()
		}
		function removeSavedPreset(idx) {
		  savedPresets.splice(idx, 1)
		  if (currentPreset === 'saved-' + idx) currentPreset = 'default'
		  emitChange()
		}
		function applyGenerated() {
		  if (!generated) return
		  currentPreset = 'generated'
		  applyTokens(generated.tokens)
		  if (generated.wallpaperUrl) {
		    wallpaper = { url: generated.wallpaperUrl, opacity: wallpaperOpacity }
		    for (const k of REGION_KEYS) {
		      if (!regions[k].url) regions[k] = { url: generated.wallpaperUrl, fit: 'cover', scale: 100, pos: 'center', opacity: 1 }
		    }
		    syncBackdrop()
		  }
		  emitChange()
		}
		function setRegionImg(key, url) {
		  if (!regions[key]) return
		  regions[key].url = url || null
		  const hasAny = REGION_KEYS.some(function (k) { return regions[k] && regions[k].url })
		  if (hasAny && !wallpaper) wallpaper = { url: url, opacity: wallpaperOpacity }
		  syncBackdrop()
		  applyTokens(currentTokens)
		  emitChange()
		}
		function setRegionFit(key, fit) {
		  if (!regions[key]) return
		  regions[key].fit = fit
		  syncBackdrop()
		  emitChange()
		}
		function setRegionScale(key, v) {
		  if (!regions[key]) return
		  regions[key].scale = Number(v)
		  syncBackdrop()
		  emitChange()
		}
		function setRegionPos(key, v) {
		  if (!regions[key]) return
		  regions[key].pos = v
		  syncBackdrop()
		  emitChange()
		}
		function setRegionOpacity(key, v) {
		  if (!regions[key]) return
		  regions[key].opacity = Number(v)
		  syncBackdrop()
		  emitChange()
		}
		function setRegionPanelOpacity(key, v) {
		  if (!regions[key]) return
		  regions[key].panelOpacity = Number(v)
		  syncBackdrop()
		  emitChange()
		}
		function setWallpaperUrl(url) {
		  const u = String(url || '').trim()
		  if (!u) return
		  setRegionImg(activeRegion, u)
		}
		function clearWallpaper() {
		  wallpaper = null
		  for (const k of REGION_KEYS) regions[k] = { url: null, fit: 'cover', scale: 100, pos: 'center', opacity: 1, panelOpacity: 1 }
		  if (backdropDisposer) { backdropDisposer(); backdropDisposer = null }
		  applyTokens(currentTokens)
		  emitChange()
		}
		function setMode(mode) {
		  wallpaperMode = mode
		  syncBackdrop()
		  applyTokens(currentTokens)
		  emitChange()
		}
		function setOpacity(v) {
		  wallpaperOpacity = Number(v)
		  if (wallpaper) { wallpaper = { url: wallpaper.url, opacity: wallpaperOpacity } }
		  syncBackdrop()
		  applyTokens(currentTokens)
		  emitChange()
		}
		function setActiveRegion(k) {
		  activeRegion = k
		  emitChange()
		}
		function clearIcon() {
		  icon = null
		  syncSendIcon()
		  emitChange()
		}

		function readFileAsDataURL(file, cb) {
		  try {
		    const reader = new FileReader()
		    reader.onload = function () { cb(String(reader.result)) }
		    reader.readAsDataURL(file)
		  } catch (e) { cb(null) }
		}
		function probeImage(url, cb) {
		  let settled = false
		  const finish = function (ok) {
		    if (settled) return
		    settled = true
		    cb(ok ? url : null)
		  }
		  try {
		    const img = new Image()
		    img.onload = function () { finish(true) }
		    img.onerror = function () { finish(false) }
		    if (timerService !== null) {
		      timerService.timeout(function () { finish(false) }, PROBE_TIMEOUT_MS)
		    }
		    img.src = url
		  } catch (e) { finish(false) }
		}
		function probeAllLoadable(urls, cb) {
		  const list = []
		  const total = urls.length
		  if (total === 0) { cb([]); return }
		  let pending = 0
		  let idx = 0
		  const MAX_PARALLEL = 4
		  const next = function () {
		    while (pending < MAX_PARALLEL && idx < total) {
		      const u = urls[idx++]
		      pending++
		      probeImage(u, function (ok) {
		        pending--
		        if (ok && list.length < 8) list.push(ok)
		        if (idx < total || pending > 0) {
		          next()
		        } else {
		          cb(list)
		        }
		      })
		    }
		  }
		  next()
		}
		async function fetchTheme(keyword) {
		  try {
		    const res = await fetch('/api/bfy-search?q=' + encodeURIComponent(keyword))
		    return await res.json()
		  } catch (e) {
		    return { ok: false, reason: String((e && e.message) || e) }
		  }
		}

		const inject = ['slots', 'theme', 'timer']

		function apply(ctx) {
		  themeService = ctx.theme
		  timerService = ctx.get('timer')
		  if (timerService === undefined) timerService = null
		  restoreState()
		  ctx.on('dispose', function () {
		    if (currentDisposer) { currentDisposer(); currentDisposer = null }
		    if (backdropDisposer) { backdropDisposer(); backdropDisposer = null }
		    if (sendIconDisposer) { sendIconDisposer(); sendIconDisposer = null }
		    if (persistTimer) { persistTimer(); persistTimer = null }
		    listeners.clear()
		  })

		  insertStyles(
		    '.bfy-page{display:flex;flex-direction:column;gap:14px}' +
		    '.bfy-title{margin:0;font-size:15px;font-weight:600;color:var(--dsw-alias-label-primary)}' +
		    '.bfy-desc{margin:0;font-size:13px;line-height:1.5;color:var(--dsw-alias-label-secondary)}' +
		    '.bfy-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(118px,1fr));gap:10px}' +
		    '.bfy-swatch{display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px 10px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);cursor:pointer;transition:transform .15s ease,border-color .15s ease,box-shadow .15s ease;font:inherit}' +
		    '.bfy-swatch:hover{transform:translateY(-2px);border-color:var(--dsw-alias-border-l2)}' +
		    '.bfy-swatch.is-active{border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 2px color-mix(in srgb,var(--dsw-alias-brand-primary) 35%,transparent)}' +
		    '.bfy-swatch-dot{width:34px;height:34px;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);flex:none}' +
		    '.bfy-swatch-name{font-size:13px;font-weight:500}' +
		    '.bfy-swatch-check{font-size:12px;color:var(--dsw-alias-brand-primary)}' +
		    '.bfy-swatch-wrap{position:relative}' +
		    '.bfy-swatch-del{position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-secondary);font-size:13px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}' +
		    '.bfy-swatch-del:hover{color:var(--dsw-alias-state-error-primary);border-color:var(--dsw-alias-state-error-primary)}' +
		    '.bfy-hue{display:flex;flex-direction:column;gap:10px;padding:14px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-2)}' +
		    '.bfy-hue-row{display:flex;gap:10px;align-items:center}' +
		    '.bfy-hue-preview{width:38px;height:38px;border-radius:50%;flex:none;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}' +
		    '.bfy-hue-slider{flex:1;height:22px;border-radius:11px;-webkit-appearance:none;appearance:none;cursor:pointer;background:linear-gradient(90deg,#ff4d4d,#ff8c4d,#ffd54d,#8bd44d,#4dd47e,#4dd4b8,#4da8d4,#4d6dd4,#7a4dd4,#c24dd4,#e04d9b,#ff4d4d)}' +
		    '.bfy-hue-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:#fff;border:3px solid #00000055;box-shadow:0 1px 6px rgba(0,0,0,.3)}' +
		    '.bfy-hue-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#fff;border:3px solid #00000055;box-shadow:0 1px 6px rgba(0,0,0,.3)}' +
		    '.bfy-hue-tag{font-size:13px;color:var(--dsw-alias-label-primary);font-weight:600;min-width:52px}' +
		    '.bfy-hue-hint{font-size:12px;color:var(--dsw-alias-label-secondary)}' +
		    '.bfy-gen{display:flex;flex-direction:column;gap:10px;padding:14px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-2)}' +
		    '.bfy-gen-row{display:flex;gap:8px;align-items:center}' +
		    '.bfy-gen-input{flex:1;min-width:0;padding:9px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px}' +
		    '.bfy-gen-input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}' +
		    '.bfy-btn{padding:9px 14px;border:none;border-radius:8px;background:var(--dsw-alias-brand-primary);color:#fff;font:inherit;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap}' +
		    '.bfy-btn:hover{filter:brightness(1.08)}' +
		    '.bfy-btn:disabled{opacity:.55;cursor:default}' +
		    '.bfy-btn-ghost{background:transparent;color:var(--dsw-alias-label-secondary);border:1px solid var(--dsw-alias-border-l1)}' +
		    '.bfy-btn-ghost:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2)}' +
		    '.bfy-btn-sm{padding:6px 10px;font-size:12px}' +
		    '.bfy-hint{font-size:12px;color:var(--dsw-alias-label-secondary)}' +
		    '.bfy-preview{display:flex;flex-direction:column;gap:10px;padding:14px;border:1px solid var(--dsw-alias-brand-primary);border-radius:12px;background:var(--dsw-alias-bg-layer-1)}' +
		    '.bfy-preview-head{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:600;color:var(--dsw-alias-label-primary)}' +
		    '.bfy-preview-dots{display:flex;gap:6px}' +
		    '.bfy-preview-dot{width:22px;height:22px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}' +
		    '.bfy-wall-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px}' +
		    '.bfy-wall-thumb{height:60px;border-radius:8px;background-size:cover;background-position:center;border:2px solid var(--dsw-alias-border-l1);cursor:pointer;padding:0;background-color:var(--dsw-alias-bg-layer-2)}' +
		    '.bfy-wall-thumb:hover{border-color:var(--dsw-alias-border-l2)}' +
		    '.bfy-wall-thumb.is-active{border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 2px color-mix(in srgb,var(--dsw-alias-brand-primary) 35%,transparent)}' +
		    '.bfy-preview-actions{display:flex;gap:8px;flex-wrap:wrap}' +
		    '.bfy-studio{display:flex;flex-direction:column;gap:12px;padding:14px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-2)}' +
		    '.bfy-preview-frame{display:grid;grid-template-columns:100px 1fr 84px;height:170px;border-radius:10px;overflow:hidden;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base);background-size:cover;background-position:center}' +
		    '.bfy-preview-col{position:relative;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--dsw-alias-label-secondary);cursor:pointer;border:2px solid transparent;background-color:rgba(128,128,128,.14);background-size:cover;background-position:center}' +
		    '.bfy-preview-col.is-active{border-color:var(--dsw-alias-brand-primary);box-shadow:inset 0 0 0 1px var(--dsw-alias-brand-primary)}' +
		    '.bfy-preview-tag{position:absolute;top:6px;left:6px;padding:2px 6px;border-radius:4px;background:rgba(0,0,0,.5);color:#fff;font-size:10px;pointer-events:none}' +
		    '.bfy-preview-empty{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--dsw-alias-label-secondary);pointer-events:none}' +
		    '.bfy-studio-ctrl{display:flex;gap:8px;align-items:center;flex-wrap:wrap}' +
		    '.bfy-studio-label{font-size:12px;font-weight:600;color:var(--dsw-alias-label-primary)}' +
		    '.bfy-tag{font-size:12px;color:var(--dsw-alias-label-secondary)}' +
		    '.bfy-upload{display:flex;flex-direction:column;gap:10px;padding:14px;border:1px dashed var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2)}' +
		    '.bfy-upload-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}' +
		    '.bfy-file{display:none}' +
		    '.bfy-upload-label{padding:9px 14px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;cursor:pointer;white-space:nowrap}' +
		    '.bfy-upload-label:hover{border-color:var(--dsw-alias-brand-primary)}' +
		    '.bfy-thumb{width:44px;height:44px;border-radius:8px;background-size:cover;background-position:center;border:1px solid var(--dsw-alias-border-l1)}' +
		    '.bfy-range{width:160px;accent-color:var(--dsw-alias-brand-primary)}' +
		    '.bfy-url-row{display:flex;gap:8px;align-items:center}' +
		    '.bfy-header-logo{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:8px;overflow:hidden;flex:none}' +
		    '.bfy-header-logo img{width:100%;height:100%;object-fit:cover;display:block}' +
		    '.bfy-avatar{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:6px;overflow:hidden;flex:none;vertical-align:middle}' +
		    '.bfy-avatar img{width:100%;height:100%;object-fit:cover;display:block}'
		  )

		  ctx.slots.inject('conversation.chat.assistant-actions', () => ctx.slots.register(
		    { name: 'conversation.chat.assistant-actions', id: 'beautify-avatar', order: 0, label: 'AI 头像' },
		    function () {
		      const state = React.useState(getState)
		      React.useEffect(function () {
		        return subscribe(function () { state[1](getState()) })
		      }, [])
		      const s = state[0]
		      if (!s.icon) return null
		      return React.createElement('span', { className: 'bfy-avatar', title: 'AI 头像' }, React.createElement('img', { src: s.icon, alt: 'AI' }))
		    }
		  ))

		  ctx.slots.inject('conversation.session.header.utilities', () => ctx.slots.register(
		    { name: 'conversation.session.header.utilities', id: 'beautify-logo', order: 99 },
		    function () {
		      const state = React.useState(getState)
		      React.useEffect(function () {
		        return subscribe(function () { state[1](getState()) })
		      }, [])
		      const s = state[0]
		      if (!s.icon) return null
		      return React.createElement('span', { className: 'bfy-header-logo', title: '自定义图标' }, React.createElement('img', { src: s.icon, alt: 'logo' }))
		    }
		  ))

		  ctx.slots.inject('settings.section', () => ctx.slots.register(
		    { name: 'settings.section', id: 'beautify', order: 30, label: '界面美化' },
		    function () {
		      const state = React.useState(getState)
		      React.useEffect(function () {
		        return subscribe(function () { state[1](getState()) })
		      }, [])
		      const s = state[0]
		      const kw = React.useState('')
		      const busy = React.useState(false)
		      const err = React.useState('')
		      const urlIn = React.useState('')
		      const probing = React.useState(false)

		      const onGenerate = async function () {
		        const k = kw[0].trim()
		        if (!k || busy[0]) return
		        busy[1](true)
		        err[1]('')
		        probing[1](false)
		        const res = await fetchTheme(k)
		        if (res && res.ok) {
		          generated = res
		          generated.wallpaperUrl = null
		          const cands = (res.candidates || []).filter(function (u) { return !!u })
		          if (cands.length) {
		            probing[1](true)
		            probeAllLoadable(cands, function (okList) {
		              generated.loadable = okList
		              generated.wallpaperUrl = okList.length ? okList[0] : null
		              probing[1](false)
		              emitChange()
		            })
		          }
		        } else {
		          generated = null
		          err[1]((res && res.reason) || '生成失败')
		        }
		        busy[1](false)
		        emitChange()
		      }

		      const onWallpaperFile = function (e) {
		        const f = e && e.target && e.target.files && e.target.files[0]
		        if (!f) return
		        readFileAsDataURL(f, function (url) {
		          if (url) setRegionImg(activeRegion, url)
		        })
		      }
		      const onIconFile = function (e) {
		        const f = e && e.target && e.target.files && e.target.files[0]
		        if (!f) return
		        readFileAsDataURL(f, function (url) {
		          if (url) { icon = url; emitChange() }
		        })
		      }
		      const onSendIconFile = function (e) {
		        const f = e && e.target && e.target.files && e.target.files[0]
		        if (!f) return
		        readFileAsDataURL(f, function (url) {
		          if (url) { sendIconEnabled = true; sendIconUrl = url; syncSendIcon(); emitChange() }
		        })
		      }

		      const savedNodes = s.savedPresets.map(function (p, idx) {
		        const id = 'saved-' + idx
		        const active = id === s.current
		        return React.createElement('div', { key: id, className: 'bfy-swatch-wrap' },
		          React.createElement('button', {
		            className: 'bfy-swatch' + (active ? ' is-active' : ''),
		            onClick: function () { applyPreset(id) },
		            title: p.name,
		          },
		            React.createElement('span', { className: 'bfy-swatch-dot', style: { background: p.tokens['--dsw-alias-brand-primary'].dark } }),
		            React.createElement('span', { className: 'bfy-swatch-name' }, p.name),
		            active ? React.createElement('span', { className: 'bfy-swatch-check' }, '✓ 使用中') : null
		          ),
		          React.createElement('button', { className: 'bfy-swatch-del', onClick: function () { removeSavedPreset(idx) }, title: '删除此预设' }, '×')
		        )
		      })

		      const presetNodes = ORDER.map(function (id) {
		        const p = presetInfo(id)
		        const active = id === s.current || (id === 'default' && !s.current)
		        return React.createElement('button', {
		          key: id,
		          className: 'bfy-swatch' + (active ? ' is-active' : ''),
		          onClick: function () { applyPreset(id) },
		          title: p.name,
		        },
		          React.createElement('span', { className: 'bfy-swatch-dot', style: { background: p.swatch } }),
		          React.createElement('span', { className: 'bfy-swatch-name' }, p.name),
		          active ? React.createElement('span', { className: 'bfy-swatch-check' }, '✓ 使用中') : null
		        )
		      })

		      const wallNodes = (s.generated && s.generated.loadable || []).map(function (url) {
		        const active = url === s.generated.wallpaperUrl
		        return React.createElement('button', {
		          key: url,
		          className: 'bfy-wall-thumb' + (active ? ' is-active' : ''),
		          style: { backgroundImage: 'url("' + url + '")' },
		          title: '点击选为「' + REGION_NAMES[s.activeRegion] + '」壁纸',
		          onClick: function () {
		            generated.wallpaperUrl = url
		            setRegionImg(s.activeRegion, url)
		            emitChange()
		          },
		        })
		      })

		      const curRegion = s.regions[s.activeRegion]
		      const previewCols = ['sidebar', 'center', 'details'].map(function (key) {
		        const r = s.regions[key]
		        const c = regionCss(r)
		        const style = c && r.url
		          ? { backgroundImage: 'url("' + r.url + '")', backgroundSize: c.size, backgroundPosition: c.pos, opacity: c.opacity }
		          : null
		        return React.createElement('div', {
		          key: key,
		          className: 'bfy-preview-col' + (s.activeRegion === key ? ' is-active' : ''),
		          style: style,
		          onClick: function () { setActiveRegion(key) },
		        },
		          React.createElement('span', { className: 'bfy-preview-tag' }, REGION_NAMES[key]),
		          r.url ? null : React.createElement('span', { className: 'bfy-preview-empty' }, '点击设图')
		        )
		      })

		      const fitButtons = ['cover', 'contain', 'fill', 'scale'].map(function (fit) {
		        const names = { cover: '铺满', contain: '完整', fill: '拉伸', scale: '缩放' }
		        return React.createElement('button', {
		          key: fit,
		          className: 'bfy-btn bfy-btn-sm' + (curRegion.fit === fit ? '' : ' bfy-btn-ghost'),
		          onClick: function () { setRegionFit(s.activeRegion, fit) },
		        }, names[fit])
		      })
		      const posButtons = ['center', 'top', 'bottom', 'left', 'right'].map(function (pos) {
		        const names = { center: '居中', top: '顶部', bottom: '底部', left: '左侧', right: '右侧' }
		        return React.createElement('button', {
		          key: pos,
		          className: 'bfy-btn bfy-btn-sm' + (curRegion.pos === pos ? '' : ' bfy-btn-ghost'),
		          onClick: function () { setRegionPos(s.activeRegion, pos) },
		        }, names[pos])
		      })

		      const studio = React.createElement('div', { className: 'bfy-studio' },
		        React.createElement('span', { className: 'bfy-studio-label' }, '壁纸工作室 · 点击预览区选择区域，不同区域可用不同图片'),
		        React.createElement('div', { className: 'bfy-preview-frame' }, previewCols),
		        React.createElement('div', { className: 'bfy-studio-ctrl' },
		          React.createElement('span', { className: 'bfy-tag' }, '当前：' + REGION_NAMES[s.activeRegion]),
		          React.createElement('label', { className: 'bfy-upload-label bfy-btn-sm' }, '上传图片', React.createElement('input', { type: 'file', className: 'bfy-file', accept: 'image/*', onChange: onWallpaperFile })),
		          curRegion.url ? React.createElement('button', { className: 'bfy-btn bfy-btn-sm bfy-btn-ghost', onClick: function () { setRegionImg(s.activeRegion, null) } }, '清除此区') : null,
		          curRegion.url ? React.createElement('button', { className: 'bfy-btn bfy-btn-sm bfy-btn-ghost', onClick: clearWallpaper }, '清除全部') : null
		        ),
		        React.createElement('div', { className: 'bfy-studio-ctrl' },
		          React.createElement('span', { className: 'bfy-tag' }, '图片透明度'),
		          React.createElement('input', {
		            type: 'range', className: 'bfy-range', min: '0.15', max: '1', step: '0.05',
		            value: String(curRegion.opacity === undefined ? 1 : curRegion.opacity),
		            onChange: function (e) { setRegionOpacity(s.activeRegion, e.target.value) },
		          }),
		          React.createElement('span', { className: 'bfy-tag' }, Math.round((curRegion.opacity === undefined ? 1 : curRegion.opacity) * 100) + '%')
		        ),
		        React.createElement('div', { className: 'bfy-studio-ctrl' },
		          React.createElement('span', { className: 'bfy-tag' }, '该区面板透明度'),
		          React.createElement('input', {
		            type: 'range', className: 'bfy-range', min: '0.15', max: '1', step: '0.05',
		            value: String(curRegion.panelOpacity === undefined ? 1 : curRegion.panelOpacity),
		            onChange: function (e) { setRegionPanelOpacity(s.activeRegion, e.target.value) },
		          }),
		          React.createElement('span', { className: 'bfy-tag' }, Math.round((curRegion.panelOpacity === undefined ? 1 : curRegion.panelOpacity) * 100) + '%')
		        ),
		        React.createElement('div', { className: 'bfy-studio-ctrl' },
		          React.createElement('span', { className: 'bfy-tag' }, '大小'),
		          fitButtons,
		          curRegion.fit === 'scale' ? React.createElement('input', {
		            type: 'range', className: 'bfy-range', min: '50', max: '300', step: '10',
		            value: String(curRegion.scale),
		            onChange: function (e) { setRegionScale(s.activeRegion, e.target.value) },
		          }) : null,
		          curRegion.fit === 'scale' ? React.createElement('span', { className: 'bfy-tag' }, curRegion.scale + '%') : null
		        ),
		        React.createElement('div', { className: 'bfy-studio-ctrl' },
		          React.createElement('span', { className: 'bfy-tag' }, '位置'),
		          posButtons
		        ),
		        React.createElement('div', { className: 'bfy-studio-ctrl' },
		          React.createElement('span', { className: 'bfy-tag' }, '内容面板透明度（整体）'),
		          React.createElement('input', {
		            type: 'range', className: 'bfy-range', min: '0.25', max: '1', step: '0.05',
		            value: String(s.wallpaperOpacity),
		            onChange: function (e) { setOpacity(e.target.value) },
		          }),
		          React.createElement('span', { className: 'bfy-tag' }, Math.round(s.wallpaperOpacity * 100) + '%'),
		          React.createElement('button', {
		            className: 'bfy-btn bfy-btn-sm' + (s.wallpaperMode === 'behind' ? '' : ' bfy-btn-ghost'),
		            onClick: function () { setMode('behind') },
		          }, '背景模式'),
		          React.createElement('button', {
		            className: 'bfy-btn bfy-btn-sm' + (s.wallpaperMode === 'front' ? '' : ' bfy-btn-ghost'),
		            onClick: function () { setMode('front') },
		          }, '前景模式')
		        ),
		        React.createElement('div', { className: 'bfy-hint' }, '图片透明度：只影响该区域壁纸图片（内容文字不受影响）；该区面板透明度：只让当前区域的内容面板变透明露出壁纸；整体：全部区域一起调。')
		      )

		      const hueSection = React.createElement('div', { className: 'bfy-hue' },
		        React.createElement('span', { className: 'bfy-studio-label' }, '自定义配色 · 拖动色相滑块实时生成整套主题色'),
		        React.createElement('div', { className: 'bfy-hue-row' },
		          React.createElement('span', { className: 'bfy-hue-preview', style: { background: hslToHex(s.hueValue, 75, 60) } }),
		          React.createElement('input', {
		            type: 'range', className: 'bfy-hue-slider', min: '0', max: '360', step: '1',
		            value: String(s.hueValue),
		            onChange: function (e) { applyHue(e.target.value) },
		          }),
		          React.createElement('span', { className: 'bfy-hue-tag' }, s.hueValue + '°')
		        ),
		        React.createElement('div', { className: 'bfy-hue-row' },
		          React.createElement('button', { className: 'bfy-btn bfy-btn-sm', onClick: saveHuePreset }, '保存当前配色为预设'),
		          React.createElement('span', { className: 'bfy-hue-hint' }, '保存后出现在下方色卡网格，可随时切换')
		        ),
		        React.createElement('div', { className: 'bfy-hue-hint' }, '拖动滑块立即应用——主题色、背景、边框、侧边栏全部同步变化，浅色/深色模式自动适配。')
		      )

		      const genSection = React.createElement('div', { className: 'bfy-gen' },
		        React.createElement('div', { className: 'bfy-gen-row' },
		          React.createElement('input', {
		            className: 'bfy-gen-input',
		            placeholder: '输入关键词生成整套主题，如：我的世界、高达、EVA、赛博朋克…',
		            value: kw[0],
		            onChange: function (e) { kw[1](e.target.value) },
		            onKeyDown: function (e) { if (e.key === 'Enter') onGenerate() },
		          }),
		          React.createElement('button', { className: 'bfy-btn', disabled: busy[0], onClick: onGenerate }, busy[0] ? '生成中…' : '生成主题')
		        ),
		        err[0] ? React.createElement('div', { className: 'bfy-hint' }, err[0]) : null,
		        s.generated ? React.createElement('div', { className: 'bfy-preview' },
		          React.createElement('div', { className: 'bfy-preview-head' },
		            React.createElement('span', null, '「' + s.generated.label + '」主题已生成'),
		            React.createElement('span', { className: 'bfy-preview-dots' },
		              ['brand', 'bg', 'layer2', 'border1'].map(function (k, i) {
		                const key = k === 'brand' ? '--dsw-alias-brand-primary' : k === 'bg' ? '--dsw-alias-bg-base' : k === 'layer2' ? '--dsw-alias-bg-layer-2' : '--dsw-alias-border-l1'
		                return React.createElement('span', { key: i, className: 'bfy-preview-dot', style: { background: s.generated.tokens[key].dark } })
		              })
		            )
		          ),
		          probing[0]
		            ? React.createElement('div', { className: 'bfy-hint' }, '正在搜索并加载网络壁纸…')
		            : wallNodes.length
		            ? React.createElement('div', { className: 'bfy-hint' }, '点缩略图应用到当前选中区域（' + REGION_NAMES[s.activeRegion] + '）：')
		            : React.createElement('div', { className: 'bfy-hint' }, '⚠ 未找到可加载的网络壁纸，可在壁纸工作室上传或粘贴 URL'),
		          wallNodes.length ? React.createElement('div', { className: 'bfy-wall-grid' }, wallNodes) : null,
		          React.createElement('div', { className: 'bfy-preview-actions' },
		            React.createElement('button', { className: 'bfy-btn', onClick: function () { applyGenerated() } }, '应用主题配色 + 默认壁纸'),
		            React.createElement('button', { className: 'bfy-btn bfy-btn-ghost', onClick: function () { generated = null; emitChange() } }, '放弃')
		          )
		        ) : null
		      )

		      const uploadSection = React.createElement('div', { className: 'bfy-upload' },
		        React.createElement('div', { className: 'bfy-url-row' },
		          React.createElement('input', {
		            className: 'bfy-gen-input',
		            placeholder: '粘贴图片 URL，应用到当前选中区域（' + REGION_NAMES[s.activeRegion] + '）',
		            value: urlIn[0],
		            onChange: function (e) { urlIn[1](e.target.value) },
		          }),
		          React.createElement('button', {
		            className: 'bfy-btn bfy-btn-ghost',
		            onClick: function () { setWallpaperUrl(urlIn[0]); urlIn[1]('') },
		          }, '应用到此区')
		        ),
		        React.createElement('div', { className: 'bfy-upload-row' },
		          React.createElement('label', { className: 'bfy-upload-label' }, '上传图标（AI 头像 + 会话标题栏）', React.createElement('input', { type: 'file', className: 'bfy-file', accept: 'image/*', onChange: onIconFile })),
		          s.icon ? React.createElement('span', { className: 'bfy-thumb', style: { backgroundImage: 'url("' + s.icon + '")' } }) : null,
		          s.icon ? React.createElement('button', { className: 'bfy-btn bfy-btn-ghost', onClick: clearIcon }, '移除图标') : null
		        ),
		        React.createElement('div', { className: 'bfy-hint' }, '上传的图标将显示为：① 每条 AI 回复旁的头像徽章；② 会话标题栏右侧的 logo。')
		      )

		      const sendSection = React.createElement('div', { className: 'bfy-upload' },
		        React.createElement('div', { className: 'bfy-upload-row' },
		          React.createElement('span', { className: 'bfy-studio-label' }, '发送键图标'),
		          React.createElement('button', {
		            className: 'bfy-btn bfy-btn-sm' + (s.sendIconEnabled ? '' : ' bfy-btn-ghost'),
		            onClick: function () { setSendIconEnabled(!s.sendIconEnabled) },
		          }, s.sendIconEnabled ? '已开启' : '已关闭'),
		          (s.sendIconEnabled && effectiveSendIcon()) ? React.createElement('span', { className: 'bfy-thumb', style: { backgroundImage: 'url("' + effectiveSendIcon() + '")' } }) : null
		        ),
		        s.sendIconEnabled ? React.createElement('div', { className: 'bfy-upload-row' },
		          React.createElement('label', { className: 'bfy-upload-label bfy-btn-sm' }, '上传发送键图标（独立于头像）', React.createElement('input', { type: 'file', className: 'bfy-file', accept: 'image/*', onChange: onSendIconFile })),
		          s.icon ? React.createElement('button', { className: 'bfy-btn bfy-btn-sm bfy-btn-ghost', onClick: function () { sendIconUrl = s.icon; syncSendIcon(); emitChange() } }, '复制当前头像图标') : null,
		          s.sendIconUrl ? React.createElement('button', { className: 'bfy-btn bfy-btn-sm bfy-btn-ghost', onClick: function () { sendIconEnabled = false; sendIconUrl = null; syncSendIcon(); emitChange() } }, '关闭发送键图标') : null
		        ) : null,
		        React.createElement('div', { className: 'bfy-hint' }, '发送键图标完全独立：换 AI 头像不会影响它。可上传独立图标，或用「复制当前头像图标」一键采用当前头像。')
		      )

		      const resetSection = React.createElement('div', { className: 'bfy-upload' },
		        React.createElement('div', { className: 'bfy-upload-row' },
		          React.createElement('button', { className: 'bfy-btn bfy-btn-sm bfy-btn-ghost', onClick: resetAll }, '重置全部设置（清除保存）'),
		          React.createElement('span', { className: 'bfy-hint' }, s.restored ? '已启用自动保存：刷新页面后自动恢复效果' : '…')
		        )
		      )

		      return React.createElement('div', { className: 'bfy-page' },
		        React.createElement('h3', { className: 'bfy-title' }, '界面美化'),
		        hueSection,
		        genSection,
		        studio,
		        uploadSection,
		        sendSection,
		        resetSection,
		        savedNodes.length ? React.createElement('div', { className: 'bfy-grid' }, savedNodes) : null,
		        React.createElement('div', { className: 'bfy-grid' }, presetNodes)
		      )
		    }
		  ))
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
