const THEMES = [
  { label: '我的世界', en: 'minecraft', keys: ['我的世界', 'minecraft', 'mc', 'mcy'], light: { brand: '#6A8D2E', bg: '#F7FAF0', layer1: '#ffffff', layer2: '#EDF3DC', overlay: '#ffffff', border1: '#DDE5C8', border2: '#C6D3A4', label: '#2C3A1A', label2: '#5C6B44', sidebar: '#F0F5E0' }, dark: { brand: '#9BC440', bg: '#141B0E', layer1: '#1A2312', layer2: '#202C16', overlay: '#181F10', border1: '#2E3C1E', border2: '#3E5030', label: '#EDF5D8', label2: '#A9BC84', sidebar: '#11170C' } },
  { label: '高达', en: 'gundam', keys: ['高达', 'gundam', 'mobile suit'], light: { brand: '#E0333B', bg: '#FAF8F7', layer1: '#ffffff', layer2: '#F5EDEA', overlay: '#ffffff', border1: '#E5D9D4', border2: '#D4BFB6', label: '#33201C', label2: '#7A5A52', sidebar: '#F7F1EE' }, dark: { brand: '#FF4D52', bg: '#1A1210', layer1: '#221614', layer2: '#2B1C19', overlay: '#1E1412', border1: '#3A2722', border2: '#4E3630', label: '#FBE9E5', label2: '#C49A8F', sidebar: '#170F0D' } },
  { label: 'EVA 新世纪福音战士', en: 'evangelion', keys: ['eva', 'evangelion', '新世纪福音战士', 'eve'], light: { brand: '#8E24AA', bg: '#FAF5FC', layer1: '#ffffff', layer2: '#F3E9F8', overlay: '#ffffff', border1: '#E3D3EC', border2: '#CEAEDD', label: '#33123F', label2: '#6D4F7D', sidebar: '#F6EEFA' }, dark: { brand: '#BA68C8', bg: '#160E1D', layer1: '#1C1226', layer2: '#231831', overlay: '#190F22', border1: '#33233F', border2: '#46305A', label: '#F4E8FB', label2: '#B79CCB', sidebar: '#120B18' } },
  { label: '赛博朋克', en: 'cyberpunk', keys: ['赛博朋克', 'cyberpunk', '2077'], light: { brand: '#D81B60', bg: '#FBF4F8', layer1: '#ffffff', layer2: '#F8E8F0', overlay: '#ffffff', border1: '#EBCFD9', border2: '#DBA4BA', label: '#3A0F23', label2: '#7E4A61', sidebar: '#FAEEF4' }, dark: { brand: '#FF2E88', bg: '#120A14', layer1: '#190F1D', layer2: '#201426', overlay: '#160C1A', border1: '#33203C', border2: '#483052', label: '#FFE4F2', label2: '#D19CB8', sidebar: '#0F0812' } },
  { label: '暗黑', en: 'dark gold black', keys: ['暗黑', '黑金', 'dark'], light: { brand: '#B8860B', bg: '#FAF9F6', layer1: '#ffffff', layer2: '#F3EFE4', overlay: '#ffffff', border1: '#E2DBC8', border2: '#CFC4A6', label: '#2B2515', label2: '#6E644A', sidebar: '#F6F2E8' }, dark: { brand: '#E2B13C', bg: '#12110C', layer1: '#1A1811', layer2: '#211E16', overlay: '#17150F', border1: '#38331F', border2: '#4C4529', label: '#F7EFD8', label2: '#C0AF84', sidebar: '#0F0E09' } },
  { label: '星空', en: 'starry night space', keys: ['星空', '星夜', 'starry', 'star'], light: { brand: '#3F51B5', bg: '#F6F7FC', layer1: '#ffffff', layer2: '#ECEEF9', overlay: '#ffffff', border1: '#D8DCEE', border2: '#BAC0E0', label: '#1B2140', label2: '#4A5178', sidebar: '#EFF1FA' }, dark: { brand: '#7C8CE8', bg: '#0B1024', layer1: '#111735', layer2: '#161E42', overlay: '#0E1430', border1: '#232C55', border2: '#313C72', label: '#E8EBFB', label2: '#A3ACDA', sidebar: '#090D1E' } },
  { label: '樱花', en: 'sakura cherry blossom', keys: ['樱花', 'sakura', 'cherry'], light: { brand: '#E91E63', bg: '#FEF7FA', layer1: '#ffffff', layer2: '#FCEAF2', overlay: '#ffffff', border1: '#F3D3E0', border2: '#E6ACC3', label: '#41101F', label2: '#855065', sidebar: '#FDF1F6' }, dark: { brand: '#F06292', bg: '#1D0F16', layer1: '#261420', layer2: '#2F1A28', overlay: '#221119', border1: '#402434', border2: '#57304A', label: '#FDEAF1', label2: '#CE93AC', sidebar: '#190C13' } },
  { label: '森林', en: 'forest green', keys: ['森林', 'forest', '丛林'], light: { brand: '#2E7D32', bg: '#F4FAF2', layer1: '#ffffff', layer2: '#E8F3E4', overlay: '#ffffff', border1: '#D3E5CC', border2: '#B6D2AC', label: '#16290F', label2: '#4E6B41', sidebar: '#EFF7EA' }, dark: { brand: '#66BB6A', bg: '#0E1709', layer1: '#142011', layer2: '#1A2915', overlay: '#111B0D', border1: '#2A3D22', border2: '#3B5232', label: '#E9F5DF', label2: '#9FBE8C', sidebar: '#0B1308' } },
  { label: '海洋', en: 'ocean blue', keys: ['海洋', '大海', 'ocean', 'sea'], light: { brand: '#0277BD', bg: '#F2F8FC', layer1: '#ffffff', layer2: '#E4F1F9', overlay: '#ffffff', border1: '#CFE3F0', border2: '#A9CBE2', label: '#0C2C43', label2: '#3E6680', sidebar: '#EBF3FA' }, dark: { brand: '#4FC3F7', bg: '#08141D', layer1: '#0D1C28', layer2: '#122332', overlay: '#0A1822', border1: '#1F3445', border2: '#2D4A62', label: '#E0F2FC', label2: '#8FBFD8', sidebar: '#07101A' } },
  { label: '落日', en: 'sunset orange', keys: ['落日', '夕阳', '黄昏', 'sunset'], light: { brand: '#E64A19', bg: '#FDF6F2', layer1: '#ffffff', layer2: '#F9E9E0', overlay: '#ffffff', border1: '#EED4C4', border2: '#E0B39B', label: '#3A1607', label2: '#7C4A30', sidebar: '#FAEFE8' }, dark: { brand: '#FF8A65', bg: '#1C1009', layer1: '#251510', layer2: '#2E1B14', overlay: '#211209', border1: '#3E2A1E', border2: '#553A2B', label: '#FDE9DE', label2: '#D0A18A', sidebar: '#180D07' } },
  { label: '薄荷', en: 'mint teal', keys: ['薄荷', 'mint', 'teal'], light: { brand: '#00897B', bg: '#F2FAF9', layer1: '#ffffff', layer2: '#E2F3F0', overlay: '#ffffff', border1: '#CCE8E3', border2: '#A9D8D0', label: '#082E2B', label2: '#3E6B66', sidebar: '#E9F6F4' }, dark: { brand: '#4DB6AC', bg: '#0A1515', layer1: '#0F1D1D', layer2: '#142524', overlay: '#0C1818', border1: '#1F3837', border2: '#2D4F4D', label: '#DFF3F1', label2: '#8FC4BE', sidebar: '#081212' } },
  { label: '蒸汽波', en: 'vaporwave', keys: ['蒸汽波', 'vaporwave', 'vapor'], light: { brand: '#D500F9', bg: '#FBF4FE', layer1: '#ffffff', layer2: '#F6E6FE', overlay: '#ffffff', border1: '#E8CCFA', border2: '#D4A3F5', label: '#340A46', label2: '#74458D', sidebar: '#F8EEFC' }, dark: { brand: '#E040FB', bg: '#170A1F', layer1: '#1D0F28', layer2: '#251437', overlay: '#1A0D24', border1: '#36204A', border2: '#4C2F66', label: '#F6E6FF', label2: '#C79EE0', sidebar: '#130821' } },
  { label: '霓虹', en: 'neon', keys: ['霓虹', 'neon', '荧光'], light: { brand: '#00B0FF', bg: '#F4FBFE', layer1: '#ffffff', layer2: '#E2F6FE', overlay: '#ffffff', border1: '#C8EDFB', border2: '#9BDFF8', label: '#062A38', label2: '#33677E', sidebar: '#EBF8FD' }, dark: { brand: '#18FFFF', bg: '#060D13', layer1: '#0A141C', layer2: '#0F1C26', overlay: '#081018', border1: '#1C3040', border2: '#2A465C', label: '#DDFBFF', label2: '#7FD8E8', sidebar: '#050B10' } },
  { label: '午夜', en: 'midnight blue', keys: ['午夜', '深夜', 'midnight'], light: { brand: '#303F9F', bg: '#F5F6FB', layer1: '#ffffff', layer2: '#E9EBF7', overlay: '#ffffff', border1: '#D5D8EC', border2: '#B4B9DD', label: '#171D3C', label2: '#434A72', sidebar: '#EEF0F9' }, dark: { brand: '#7986CB', bg: '#0A0C1A', layer1: '#10132A', layer2: '#151938', overlay: '#0C0F22', border1: '#232747', border2: '#30355E', label: '#E4E6F8', label2: '#9AA0CE', sidebar: '#080A16' } },
]

function hslToHex(h, s, l) {
  s = s / 100
  l = l / 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) => {
    const c = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
    return Math.round(c * 255).toString(16).padStart(2, '0')
  }
  return '#' + f(0) + f(8) + f(4)
}

function hashHue(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0
  return Math.abs(h) % 360
}

function buildTokens(t) {
  return {
    '--dsw-alias-bg-base': { light: t.light.bg, dark: t.dark.bg },
    '--dsw-alias-bg-layer-1': { light: t.light.layer1, dark: t.dark.layer1 },
    '--dsw-alias-bg-layer-2': { light: t.light.layer2, dark: t.dark.layer2 },
    '--dsw-alias-bg-overlay': { light: t.light.overlay, dark: t.dark.overlay },
    '--dsw-alias-border-l1': { light: t.light.border1, dark: t.dark.border1 },
    '--dsw-alias-border-l2': { light: t.light.border2, dark: t.dark.border2 },
    '--dsw-alias-brand-primary': { light: t.light.brand, dark: t.dark.brand },
    '--dsw-alias-label-primary': { light: t.light.label, dark: t.dark.label },
    '--dsw-alias-label-secondary': { light: t.light.label2, dark: t.dark.label2 },
    '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
    '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
    '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
    '--dsw-specific-sidebar-fill': { light: t.light.sidebar, dark: t.dark.sidebar },
  }
}

function matchTheme(keyword) {
  const k = keyword.toLowerCase().replace(/\s+/g, '')
  for (const t of THEMES) {
    for (const key of t.keys) {
      const kk = key.toLowerCase().replace(/\s+/g, '')
      if (k === kk || k.includes(kk) || kk.includes(k)) return t
    }
  }
  return null
}

function makeGenerated(keyword) {
  const hue = hashHue(keyword)
  return {
    label: keyword,
    light: { brand: hslToHex(hue, 70, 55), bg: hslToHex(hue, 25, 97), layer1: '#ffffff', layer2: hslToHex(hue, 30, 93), overlay: '#ffffff', border1: hslToHex(hue, 15, 88), border2: hslToHex(hue, 20, 78), label: hslToHex(hue, 40, 20), label2: hslToHex(hue, 25, 42), sidebar: hslToHex(hue, 25, 95) },
    dark: { brand: hslToHex(hue, 75, 65), bg: hslToHex(hue, 35, 10), layer1: hslToHex(hue, 30, 14), layer2: hslToHex(hue, 28, 18), overlay: hslToHex(hue, 32, 12), border1: hslToHex(hue, 18, 24), border2: hslToHex(hue, 22, 34), label: hslToHex(hue, 40, 92), label2: hslToHex(hue, 25, 70), sidebar: hslToHex(hue, 30, 11) },
  }
}

const BING_SCRIPT = `const kw = process.argv[1] || 'wallpaper';
const url = 'https://www.bing.com/images/search?q=' + encodeURIComponent(kw) + '&first=0&count=100&mkt=zh-CN';
fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } })
  .then(r => r.text())
  .then(h => {
    const u = [];
    const needle = 'murl&quot;:&quot;';
    let i = 0;
    while (u.length < 40) {
      i = h.indexOf(needle, i);
      if (i < 0) break;
      i += needle.length;
      const j = h.indexOf('&quot;', i);
      if (j < 0) break;
      let v = h.slice(i, j).split('\\/').join('/').split('&amp;').join('&');
      if ((v.slice(0, 7) === 'http://' || v.slice(0, 8) === 'https://') && u.indexOf(v) < 0) u.push(v);
    }
    console.log(JSON.stringify(u));
  })
  .catch(e => { console.log('[]'); });`

async function bingWallpapers(sub, keyword) {
  try {
    const nodePath = await sub.resolveExecutable('node')
    const handle = sub.spawn({
      argv: [nodePath, '-e', BING_SCRIPT, keyword],
      cwd: process.cwd(),
      stdio: {
        stdin: 'ignore',
        stdout: { maxBytes: 131072 },
        stderr: { maxBytes: 4096 },
      },
      graceMs: 20000,
    })
    await handle.done
    const reader = handle.collected.stdout
    const text = reader ? reader.readFrom(0).text : ''
    const arr = JSON.parse(text.trim())
    return Array.isArray(arr) ? arr.filter((x) => typeof x === 'string') : []
  } catch (e) {
    return []
  }
}

export const name = 'beautify'
export const inject = ['subprocess', 'webServer']

export function apply(ctx) {
  const sub = ctx.subprocess
  const webServer = ctx.webServer
  webServer.register({
    kind: 'exact',
    path: '/api/bfy-search',
    async handler(req, res) {
      let keyword = ''
      try {
        const url = new URL(req.url || '', 'http://localhost')
        keyword = url.searchParams.get('q') || ''
      } catch (e) { /* 忽略 */ }
      if (!keyword) {
        res.writeHead(400, { 'content-type': 'application/json' })
        res.end(JSON.stringify({ ok: false, reason: 'empty' }))
        return
      }
      const def = matchTheme(keyword)
      const t = def || makeGenerated(keyword)
      const tokens = buildTokens(t)
      const searchKw = def ? def.en + ' wallpaper' : keyword + ' 壁纸'
      let candidates = []
      try {
        candidates = await bingWallpapers(sub, searchKw)
      } catch (e) { /* 搜索失败 */ }
      const fallback = [
        'https://loremflickr.com/1920/1080/' + encodeURIComponent(searchKw + ',wallpaper'),
        'https://picsum.photos/seed/' + encodeURIComponent(searchKw) + '/1920/1080',
      ]
      for (const u of fallback) {
        if (candidates.indexOf(u) < 0) candidates.push(u)
      }
      // 客户端按每页 10 张本地翻页；hasMore = 页数 > 1
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ ok: true, label: t.label, tokens, candidates: candidates.slice(0, 40), hasMore: candidates.length > 10 }))
    },
  })
  console.log('[beautify] host half active')
}
