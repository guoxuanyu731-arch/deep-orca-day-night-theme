# Deep Orca Day & Night Theme · 深海虎鲸昼夜舱

Deep Orca Day & Night 是一个面向 DeepSeek Harness Web GUI 的原创昼夜主题插件。它只改客户端展示层：背景、玻璃面板、按钮高亮、轻量动态氛围、角落主题切换按钮和系统主题色，不读取或修改聊天内容、模型请求、凭据或工作区文件。

This is an original presentation skin for the DeepSeek Harness Web GUI. It changes only the browser UI layer and does not read sessions, requests, credentials, or workspace files.

## Features · 功能

- 浅色模式：极光白、海盐青、轻玻璃面板和漂浮光点。
- 深色模式：深海蓝、荧光青、夜巡光点和更强的玻璃对比。
- 右上角悬浮按钮可调用 Harness 原生主题服务切换 light / dark。
- 所有视觉效果由 CSS 和 DOM 生成，不依赖远程图片资源。
- 卸载时会移除主题注入的样式、DOM 节点和标题修改。

## Install · 安装

从 GitHub 安装：

```sh
dsh plugin --profile web add git+https://github.com/guoxuanyu731-arch/deep-orca-day-night-theme.git
```

如果没有全局安装 `dsh`：

```sh
pnpm dlx @deepseek-ai/dsh@0.1.0-rc.7 plugin --profile web add git+https://github.com/guoxuanyu731-arch/deep-orca-day-night-theme.git
```

从本地目录安装：

```sh
dsh plugin --profile web add /absolute/path/to/deep-orca-day-night-theme
```

如果你使用的是 DeepSeek Harness Desktop，并且它启动的不是 `web` profile，请把命令里的 `--profile web` 改成实际 profile 名称。

## Remove · 卸载

```sh
dsh plugin --profile web remove @dsh-external/dsh-client-ui-skin-deep-orca-day-night
```

## Repository Layout · 目录结构

```text
cordis.patch.yml      Harness profile bundle patch
skin.json             Theme metadata
lib/index.js          Host-side no-op entry
lib/client.js         Browser-side theme implementation
src/                  Thin source entries
docs/COMPATIBILITY.md Compatibility notes
```

## Development · 开发

This first version intentionally keeps the runtime small and dependency-light. The installable browser client is committed in `lib/client.js`; `src/client/index.ts` re-exports it for source-oriented readers.

当前版本刻意保持轻量：可安装运行时代码直接提交在 `lib/client.js`，源码入口 `src/client/index.ts` 指向同一实现。

## Compatibility · 兼容性

The package follows the same public integration shape as community Harness Web GUI themes:

- `package.json > dsh.bundle.patch`
- `package.json > dsh.client.inject`
- `cordis.patch.yml`
- browser `apply(ctx)` entry

It is designed for `@deepseek-ai/dsh-client-ui-theme` compatible Harness Web GUI profiles. Live Harness verification still needs to be done on a machine where DeepSeek Harness is installed.

## License · 许可

MIT. This project is original and does not include assets from Deep Whale Day & Night Theme.
