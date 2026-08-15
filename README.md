# dsh-beautify 🎨

DeepSeek Harness (DSH) 界面美化插件 — 一键关键词生成整套主题，配合 Bing 壁纸、分区壁纸工作室、色相滑块与 AI 头像图标，把 Harness 的聊天界面变成你自己的风格。

## ✨ 功能

- **关键词生成整套主题**：输入「我的世界」「高达」「星空」等关键词，自动生成全套配色主题；内置 14 套主题（我的世界 / 高达 / EVA / 赛博朋克 / 暗黑 / 星空 / 樱花 / 森林 / 海洋 / 落日 / 薄荷 / 蒸汽波 / 霓虹 / 午夜），其他任意关键词会按哈希生成专属配色。
- **Bing 壁纸搜索**：关键词关联壁纸自动从 Bing 图片搜索抓取，提供候选图列表（服务端 `node` 子进程抓取，客户端逐张探测可加载性）。
- **分区壁纸工作室**：侧边栏 / 聊天区 / 详情栏 / 全屏背景 4 个区域可分别设置不同图片、透明度、尺寸与位置；支持粘贴图片 URL 或上传本地图片（图标 / 壁纸）。
- **色相滑块自定义配色**：拖动色相滑块实时预览整套主题，可保存为预设。
- **AI 头像图标**：上传的图标用作 AI 回复头像与页面 Logo。
- **效果持久化**：所有设置保存在浏览器 localStorage，刷新不丢失；支持一键重置。

## 📦 安装（部署级插件，开机自启）

### 1. 拷贝插件包

将本仓库的 `dsh-beautify` 文件夹拷贝到 DSH 配置目录的依赖位置：

```
<DSH_HOME>/.dsh/profiles/<profile>/node_modules/@local/dsh-beautify/
```

> 例如：`C:\Users\<你>\.dsh\profiles\web\node_modules\@local\dsh-beautify\`

### 2. 注册到 patch 配置

编辑同目录下的 `cordis.patch.yml`，在**顶层列表**追加（参考仓库内的 `cordis.patch.example.yml`）：

```yaml
- insert:
    - id: beautify
      name: '@local/dsh-beautify'
```

> ⚠️ 必须是顶层 `insert`（不要带 `id` 字段），否则 patch 会因找不到同名分组而被静默跳过。

### 3. 重启 DSH

重启后插件自动加载，侧边栏底部出现「✨ 美化」入口，无需手动运行。

## 🛠 前置要求

- DSH 部署环境（Web 客户端）
- 系统 `PATH` 中可找到 `node`（壁纸抓取通过 `node -e` 子进程完成）
- 机器可访问 `www.bing.com`（图片搜索抓取）

## ⚠️ 已知限制

- 壁纸候选通过浏览器 `new Image()` 探测可加载性，带 8 秒超时；某些 CDN 图床被限流时可能显示为不可用。
- 上传图片会转为 data URL 存入 localStorage，单张超过约 5MB 可能超出配额 —— 大图建议粘贴 URL 而非上传。
- 服务端抓取 Bing 搜索结果属于非官方接口，若 Bing 变更页面结构可能导致候选为空（此时自动回退到 LoremFlickr / Picsum 占位图）。

## 📁 文件结构

```
dsh-beautify/
├── package.json          # 插件清单（dsh.client 注入 slots / theme）
├── lib/
│   ├── index.js          # Host 端：/api/bfy-search 接口、Bing 抓取、主题生成
│   └── client.js         # Client 端：美化设置页、壁纸工作室、头像与 Logo
└── cordis.patch.example.yml
```

## 🗂 API

`GET /api/bfy-search?q=<关键词>` — 返回 `{ ok, label, tokens, candidates }`，其中 `tokens` 是可直接传给 `theme.overrideTokens` 的明暗双配色 token 对，`candidates` 是壁纸候选 URL 列表。

## 📄 License

[MIT](./LICENSE)
