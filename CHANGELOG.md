# Changelog

All notable changes to **dsh-beautify** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- 完善英文版 README 与截图占位。
- **发送键图标**：上传的图标（或独立图标）可替换输入框发送键的默认箭头，一键开关；部署版与动态版同步支持。
- **发送键图标圆形裁切**：径向遮罩 + `cover` 铺满，透明背景。
- **分区内容面板透明度**：每个区域（全局背景/侧边栏/对话区/详情区）可独立调整内容面板透明度，只让当前区域透出壁纸。

## [0.1.0] - 2025-06-15

### Added

- **关键词生成整套主题**：14 套内置主题（我的世界 / 高达 / EVA / 赛博朋克 / 暗黑 / 星空 / 樱花 / 森林 / 海洋 / 落日 / 薄荷 / 蒸汽波 / 霓虹 / 午夜），任意其他关键词按哈希生成专属配色。
- **Bing 壁纸搜索**：服务端 `node` 子进程抓取 Bing 图片搜索结果，客户端逐张探测可加载性并展示候选图。
- **分区壁纸工作室**：全局背景 / 侧边栏 / 对话区 / 详情区 4 区域独立设图，支持透明度、铺满/完整/拉伸/缩放、位置调整。
- **色相滑块自定义配色**：实时预览整套主题色，可保存为预设；内置 5 套预设色卡（紫罗兰 / 翡翠 / 琥珀 / 樱花 / 深海）。
- **AI 头像 + Logo**：上传图标用作 AI 回复头像徽章与会话标题栏 Logo。
- **效果持久化**：localStorage 自动保存，刷新不丢失；一键重置全部设置。
- **两种安装方式**：部署级插件（`cordis.patch.yml` 注册，开机自启）+ 动态插件（`cordis_define` / `cordis_run`，无需改配置）。
- 动态版通过 `harness.handle` RPC 提供壁纸搜索，不依赖 HTTP 路由，沙箱环境可用。

[Unreleased]: https://github.com/leslie-hack/deepseekharness-
[0.1.0]: https://github.com/leslie-hack/deepseekharness-
