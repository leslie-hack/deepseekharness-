# dsh-beautify · 动态版（Dynamic Plugin）

与仓库根目录的**部署版**功能完全一致（关键词生成主题、Bing 壁纸、分区壁纸工作室、色相滑块、AI 头像、自动保存），但以 **DSH 动态插件**形式运行：

- ✅ **无需** 修改 `cordis.patch.yml`、无需放进 `node_modules`、无需重启 DSH
- ✅ 在当前会话里 `cordis_define` + `cordis_run` 即可生效，方便快速体验与二次开发
- ⚠️ 动态插件只存在于进程内存：**DSH 重启后需要重新运行**（与部署版"开机自启"互补）
- 与部署版可共存：本版使用独立的 slot id（`beautify-dyn`）与 localStorage key

## 安装（3 步）

### 1. 定义插件

在当前 DSH 会话中调用 `cordis_define`：

- `code.host` ← 粘贴 [host.js](./host.js) 的全部内容
- `code.client` ← 粘贴 [client.js](./client.js) 的全部内容

（idPrefix 填 `bfy` 之类即可；Host 会分配最终 pluginId，例如 `bfy-2`。）

### 2. 运行插件

调用 `cordis_run(pluginId, packageId, mode: "run")`。首次运行需要你在界面点一次授权。

### 3. 使用

- 打开 **设置 → 界面美化·动态版**：
  - 关键词生成整套主题（我的世界 / 高达 / EVA / 赛博朋克 / 星空 / 樱花…共 14 套内置 + 任意关键词哈希配色）
  - 壁纸工作室：全局 / 侧边栏 / 对话区 / 详情区 4 区域独立设图、透明度、大小、位置
  - 色相滑块实时配色，可保存为预设
  - 上传图标 → 显示为 **AI 回复头像** + **会话标题栏 logo**
- 效果自动保存在浏览器 localStorage，刷新页面后自动恢复。

## 与部署版的差异

| | 动态版（本目录） | 部署版（仓库根目录） |
| --- | --- | --- |
| 安装 | `cordis_define` + `cordis_run` | 拷贝到 `node_modules/@local/` + patch 注册 |
| 开机自启 | ❌ 重启后需重跑 | ✅ 随 DSH 自动加载 |
| 进程隔离 | 会话级、进程内存 | 部署级、持久 |
| 壁纸抓取 | Host RPC（`harness.handle`）→ `subprocess` | HTTP 路由 `/api/bfy-search` → `subprocess` |
| 适用场景 | 快速体验、二开调试 | 长期使用、分发给用户 |

> 动态版 Host 端不再注册 HTTP 路由，改为 `harness.handle('bfy-search')` RPC，因此沙箱内也能正常工作；Bing 抓取子进程的 `cwd` 使用 `sandboxPolicy.workspaceRoot`，不再依赖固定本地路径。
