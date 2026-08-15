# dsh-beautify 🎨

DeepSeek Harness (DSH) 界面美化插件 — 一键关键词生成整套主题，配合 Bing 壁纸、分区壁纸工作室、色相滑块与 AI 头像图标，把 Harness 的聊天界面变成你自己的风格。

> **English**: [README.en.md](./README.en.md) · **更新记录**: [CHANGELOG.md](./CHANGELOG.md)

## 📸 截图

> 截图占位：请将效果截图放入 [`docs/screenshots/`](./docs/screenshots/)，并以 `01-settings.png`、`02-theme-generator.png`、`03-wallpaper-studio.png`、`04-avatar-logo.png` 命名，即可在此处展示。

| 设置页（色相滑块） | 关键词生成主题 | 壁纸工作室 | AI 头像 + Logo |
| --- | --- | --- | --- |
| ![01-settings](docs/screenshots/01-settings.png) | ![02-theme-generator](docs/screenshots/02-theme-generator.png) | ![03-wallpaper-studio](docs/screenshots/03-wallpaper-studio.png) | ![04-avatar-logo](docs/screenshots/04-avatar-logo.png) |

## ✨ 功能

- **关键词生成整套主题**：输入「我的世界」「高达」「星空」等关键词，自动生成全套配色主题；内置 14 套主题（我的世界 / 高达 / EVA / 赛博朋克 / 暗黑 / 星空 / 樱花 / 森林 / 海洋 / 落日 / 薄荷 / 蒸汽波 / 霓虹 / 午夜），其他任意关键词会按哈希生成专属配色。
- **Bing 壁纸搜索**：关键词关联壁纸自动从 Bing 图片搜索抓取，提供候选图列表（服务端 `node` 子进程抓取，客户端逐张探测可加载性）。
- **分区壁纸工作室**：侧边栏 / 聊天区 / 详情栏 / 全屏背景 4 个区域可分别设置不同图片、透明度、尺寸与位置；支持粘贴图片 URL 或上传本地图片（图标 / 壁纸）。
- **色相滑块自定义配色**：拖动色相滑块实时预览整套主题，可保存为预设。
- **AI 头像图标**：上传的图标用作 AI 回复头像与页面 Logo。
- **发送键图标**：上传的图标（或独立图标）可替换输入框发送键的默认箭头，一键开关。
- **效果持久化**：所有设置保存在浏览器 localStorage，刷新不丢失；支持一键重置。

## 📦 两种安装方式（二选一）

### 方式 A：部署级插件（开机自启，推荐长期使用）

#### 1. 拷贝插件包

将本仓库的 `dsh-beautify` 文件夹拷贝到 DSH 配置目录的依赖位置：

```
<DSH_HOME>/.dsh/profiles/<profile>/node_modules/@local/dsh-beautify/
```

> 例如：`C:\Users\<你>\.dsh\profiles\web\node_modules\@local\dsh-beautify\`

#### 2. 注册到 patch 配置

编辑同目录下的 `cordis.patch.yml`，在**顶层列表**追加（参考仓库内的 `cordis.patch.example.yml`）：

```yaml
- insert:
    - id: beautify
      name: '@local/dsh-beautify'
```

> ⚠️ 必须是顶层 `insert`（不要带 `id` 字段），否则 patch 会因找不到同名分组而被静默跳过。

#### 3. 重启 DSH

重启后插件自动加载，侧边栏底部出现「✨ 美化」入口，无需手动运行。

### 方式 B：动态插件（快速体验 / 二开，无需改配置）

无需拷贝文件、无需修改 `cordis.patch.yml`、无需重启 —— 在当前会话里用 `cordis_define` + `cordis_run` 直接运行：

1. 打开 [`dynamic/`](./dynamic/) 目录
2. 把 [`dynamic/host.js`](./dynamic/host.js) 粘贴到 `cordis_define` 的 `code.host`
3. 把 [`dynamic/client.js`](./dynamic/client.js) 粘贴到 `code.client`
4. `cordis_run` 运行并批准

设置入口为 **设置 → 界面美化·动态版**。⚠️ 动态插件只存在于进程内存，DSH 重启后需重新运行（与部署版互补，详见 [`dynamic/README.md`](./dynamic/README.md)）。

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
├── package.json              # 插件清单（dsh.client 注入 slots / theme）
├── lib/
│   ├── index.js              # Host 端：/api/bfy-search 接口、Bing 抓取、主题生成
│   └── client.js             # Client 端：美化设置页、壁纸工作室、头像与 Logo
├── dynamic/                  # 动态版（cordis_define / cordis_run）
│   ├── host.js               #   动态版 Host（harness RPC）
│   ├── client.js             #   动态版 Client
│   └── README.md             #   动态版安装说明
├── docs/screenshots/         # 效果截图（占位）
├── README.en.md              # 英文说明
├── CHANGELOG.md              # 更新记录
└── cordis.patch.example.yml  # 部署版安装配置示例
```

## 🗂 API

`GET /api/bfy-search?q=<关键词>` — 返回 `{ ok, label, tokens, candidates }`，其中 `tokens` 是可直接传给 `theme.overrideTokens` 的明暗双配色 token 对，`candidates` 是壁纸候选 URL 列表。

## 📄 License

[MIT](./LICENSE)
