# Deep Orca Day & Night Theme · 深海虎鲸昼夜舱

**An original presentation skin for the DeepSeek Harness Web GUI — aurora day, deep-sea night.**
**面向 DeepSeek Harness Web GUI 的原创展示层主题——极光浅昼，深海夜巡。**

[![License](https://img.shields.io/badge/license-MIT-22d3ee.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-0891b2.svg)](package.json)
[![Platform](https://img.shields.io/badge/platform-web%20profile-0f172a.svg)](package.json)
[![Live Harness verification](https://img.shields.io/badge/live%20Harness%20verification-pending-f59e0b.svg)](docs/COMPATIBILITY.md)

---

## Overview · 简介

**English** — Deep Orca is a **client-side-only** theme plugin for the DeepSeek Harness Web GUI. It changes the browser presentation layer only: background gradients, glass panels, button highlight rings, lightweight ambient motion, a floating day/night toggle, and the browser theme color. It does not read or modify chat content, model requests, credentials, or workspace files.

**中文** — Deep Orca 是一个**只作用于客户端展示层**的 DeepSeek Harness Web GUI 主题插件。它只修改浏览器界面表现：背景渐变、玻璃面板、按钮高亮、轻量动态氛围、悬浮昼夜切换按钮，以及浏览器/系统主题色。它不读取、不修改聊天内容、模型请求、凭据或工作区文件。

For full transparency about what the plugin injects at runtime, see [What it changes · 它改了什么](#what-it-changes--它改了什么).

---

## Features · 功能

| Feature · 功能 | English | 中文 |
| --- | --- | --- |
| Day mode · 浅色模式 | Aurora white, sea-salt cyan, light glass panels, drifting light motes. | 极光白、海盐青、轻玻璃面板与漂浮光点。 |
| Night mode · 深色模式 | Deep-sea blue, fluorescent cyan, stronger glass contrast, night-watch motes. | 深海蓝、荧光青、更强的玻璃对比与夜巡光点。 |
| Native theme bridge · 原生主题桥接 | The floating button calls Harness's own theme service (`ctx.theme.setTheme('light' \| 'dark')`) instead of forcing its own mode. | 右上角悬浮按钮调用 Harness 原生主题服务（`ctx.theme.setTheme('light' \| 'dark')`），而不是自建一套模式。 |
| Zero remote assets · 无远程素材 | Every visual is CSS gradients, generated SVG, and DOM nodes — no remote images or fonts. | 所有视觉效果由 CSS 渐变、生成的 SVG 和 DOM 节点构成，不依赖远程图片或字体。 |
| Clean teardown · 干净卸载 | Injected styles, DOM nodes, the `body` attribute, and the title change are all removed on dispose. | 卸载时会移除注入的样式、DOM 节点、`body` 属性以及标题改动。 |
| Reduced motion · 尊重减弱动效 | `prefers-reduced-motion: reduce` disables mote animation. | 当系统开启"减弱动态效果"时，光点动画自动关闭。 |
| Responsive · 响应式 | The floating rail relocates on narrow viewports. | 窄视口下悬浮控件自动换位。 |

---

## Install · 安装

**Requirements · 环境要求**

- A DeepSeek Harness installation with a **web** profile (DeepSeek Harness Desktop may use a different profile name).
- The profile must expose `@deepseek-ai/dsh-client-ui-theme` (see [Compatibility · 兼容性](#compatibility--兼容性)).

**From GitHub · 从 GitHub 安装**

```sh
dsh plugin --profile web add git+https://github.com/guoxuanyu731-arch/deep-orca-day-night-theme.git
```

**Without a global `dsh` · 未全局安装 `dsh`**

```sh
pnpm dlx @deepseek-ai/dsh@0.1.0-rc.7 plugin --profile web add git+https://github.com/guoxuanyu731-arch/deep-orca-day-night-theme.git
```

**From a local directory · 从本地目录安装**

```sh
dsh plugin --profile web add /absolute/path/to/deep-orca-day-night-theme
```

> If you use DeepSeek Harness Desktop and it does not launch the `web` profile, replace `--profile web` with your actual profile name.
> 如果你使用的是 DeepSeek Harness Desktop，且它启动的不是 `web` profile，请把命令里的 `--profile web` 改成实际 profile 名称。

---

## Usage · 使用

Once the plugin is active, a glass pill appears at the **top-right** of the window:

- A round toggle button with a sun/moon icon and the tooltip `切换昼夜主题`.
- A label showing the state: `浅昼模式` (light) or `夜巡模式` (dark).
- Clicking the button asks Harness to switch theme; the icon, label, and `theme-color` meta update to match. The label stays in sync through a `MutationObserver` on `data-ds-dark-theme`, so switching theme from Harness's own UI works too.

激活后，窗口**右上角**会出现一枚玻璃胶囊控件：圆形的日/月图标按钮（提示文字 `切换昼夜主题`）和状态标签（`浅昼模式` / `夜巡模式`）。点击按钮会请求 Harness 切换主题，图标、标签与 `theme-color` 随之更新；标签通过监听 `data-ds-dark-theme` 的 `MutationObserver` 保持同步，因此用 Harness 自带入口切换主题也不会错位。

**Viewport behavior · 视口行为**

| Viewport · 视口 | Behavior · 行为 |
| --- | --- |
| Wider than 720px | Rail sits at `top: 64px; right: 24px`; the decorative orca ornament shows bottom-left. |
| 720px or narrower | Rail moves to the bottom-right; the ornament is hidden. |

---

## What it changes · 它改了什么

The skin is deliberately explicit about its runtime footprint / 本主题明确公开它的运行时足迹：

| Surface · 对象 | Detail · 说明 |
| --- | --- |
| `<body>` | Adds the `data-dsh-deep-orca` attribute while active; removed on dispose. |
| Injected `<style>` | One stylesheet, tagged `data-orca-owner="deep-orca-day-night"`. |
| Injected DOM | A rail (`rail` / `toggle` / `label`), an ambient field of 8 motes (`ambient`), and an orca ornament (`mark`) — all tagged with the same owner attribute. |
| `document.title` | Set to `深海虎鲸昼夜舱 · DeepSeek Harness`; on dispose the previous title is restored **if it still equals the theme title**. |
| `<meta name="theme-color">` | `#f4fdff` in light mode, `#061827` in dark mode. |
| Never touched · 从不触碰 | Chat content, model requests, credentials, workspace files, storage, or network calls. |

Everything above lives in one file you can read end to end: [`lib/client.js`](lib/client.js).

---

## Customization · 自定义

All colors are CSS custom properties scoped to `body[data-dsh-deep-orca]`, so an additional stylesheet loaded after the plugin can retheme it without forking the logic.

| Variable · 变量 | Light · 浅色 | Dark · 深色 |
| --- | --- | --- |
| `--orca-ink` | `#102a43` | `#dff8ff` |
| `--orca-muted` | `#486581` | `#8bc8d8` |
| `--orca-surface` | `rgba(248, 253, 255, 0.76)` | `rgba(6, 24, 39, 0.74)` |
| `--orca-surface-strong` | `rgba(255, 255, 255, 0.9)` | `rgba(10, 37, 57, 0.92)` |
| `--orca-border` | `rgba(34, 167, 199, 0.28)` | `rgba(125, 211, 252, 0.3)` |
| `--orca-ring` | `rgba(13, 148, 136, 0.22)` | `rgba(45, 212, 191, 0.2)` |
| `--orca-accent` | `#0891b2` | `#22d3ee` |
| `--orca-accent-2` | `#14b8a6` | `#a7f3d0` |

**Example override · 覆盖示例**

```css
body[data-dsh-deep-orca] {
  --orca-accent: #7c3aed;
  --orca-accent-2: #f472b6;
}
```

**Other tunables · 其他可调项** (all constants at the top of `lib/client.js`)

| Constant · 常量 | Purpose · 用途 |
| --- | --- |
| `TITLE` | The document title applied while the theme is active. |
| `LIGHT_CHROME` / `DARK_CHROME` | The two `theme-color` values. |
| `particles` | The 8 mote entries as `[x, y, size, duration, delay]`. Shorten the array to calm the field down; delete the `ambient` block to remove it entirely. |
| `BODY_ATTR` | The `body` attribute name that scopes every rule. |

---

## Accessibility · 无障碍

- The toggle is a real `<button type="button">` with an `aria-label` that names the **target** mode (`切换到浅昼主题` / `切换到夜巡主题`), not the current one.
- The ambient mote field is `aria-hidden="true"` and sets `pointer-events: none`, so it never intercepts clicks. The orca ornament is also `aria-hidden="true"`, but it does **not** set `pointer-events: none` today, so it can still receive clicks in its bottom-left corner.
- Ambient animation is disabled under `prefers-reduced-motion: reduce`.
- No focus trap, no keyboard interception, no `!important` rules on `outline`.

---

## Compatibility · 兼容性

The package follows the same public integration shape as community Harness Web GUI themes / 本包沿用社区 Harness Web GUI 主题的公开集成形态：

- `package.json > dsh.bundle.patch` → [`cordis.patch.yml`](cordis.patch.yml) inserts exactly one unique host row (`ui-skin-deep-orca-day-night`).
- `package.json > dsh.client.inject` → `['@deepseek-ai/dsh-client-ui-theme']`, `platform: "web"`.
- The browser half exports `inject = ['theme']` and `apply(ctx)`, and registers through `ctx.effect()` when available, falling back to a direct activation path for easier local inspection.
- Theme switching goes through `ctx.theme.setTheme()` with optional chaining, so a host without that service degrades gracefully instead of throwing.

| Peer dependency · 对等依赖 | Range · 范围 | Required · 必需 |
| --- | --- | --- |
| `@deepseek-ai/cordis` | `^4.0.1` | Optional · 可选 |
| `@deepseek-ai/dsh-client-ui-theme` | `>=0.1.0-rc.5 <0.2.0` | Optional · 可选 |

See [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) for the upstream note.

---

## Verification status · 验证状态

> **This theme has not yet been verified inside a live Harness installation.** `docs/COMPATIBILITY.md` records that the authoring workspace contains no running DeepSeek Harness profile, so the integration shape is asserted from the public pattern rather than from a live run.
>
> **本主题尚未在真实的 Harness 安装中验证。** `docs/COMPATIBILITY.md` 明确记录：编写环境没有运行中的 DeepSeek Harness profile，因此当前只保证与公开集成形态一致，而非"实测通过"。

If you install it, this is the checklist worth walking / 安装后建议逐项确认：

- [ ] `dsh plugin --profile web add ...` completes without profile or bundle errors.
- [ ] The rail appears top-right and the mode label matches the current theme.
- [ ] The toggle flips light/dark, and switching from Harness's own UI keeps the label in sync.
- [ ] The browser console stays free of errors and CSP violations.
- [ ] Narrowing the window below 720px moves the rail and hides the ornament.
- [ ] `dsh plugin --profile web remove @dsh-external/dsh-client-ui-skin-deep-orca-day-night` followed by a reload leaves no `data-orca-owner` nodes and no `data-dsh-deep-orca` attribute on `<body>`.

---

## Troubleshooting · 故障排查

| Symptom · 现象 | Likely cause and fix · 可能原因与处理 |
| --- | --- |
| Plugin installed, no visual change. | `apply()` never ran. Confirm the profile is the one Harness actually launches (`web` by default) and that `dsh.client.inject` resolved `@deepseek-ai/dsh-client-ui-theme`. |
| No floating rail, but colors changed. | Something removed the injected nodes after activation — check for another extension or script cleaning up `body` children. |
| Toggle does nothing. | The host does not expose `ctx.theme.setTheme`; the skin then relies on Harness's own theme switcher. Colors and labels still follow `data-ds-dark-theme`. |
| Two skins fighting over panels. | Remove the other UI skin. Both may target the same surfaces with `!important`, and the later stylesheet wins. |
| Document title changed. | Expected: the theme sets its own title while active and restores the previous one on dispose. |
| Styles persist after removal. | The CSS is injected at runtime only — reload the page. If it survives a reload, the bundle row is still in the profile. |
| Motion feels distracting. | Enable your OS "reduce motion" setting; the mote animation is disabled automatically. |

---

## Repository layout · 目录结构

| Path · 路径 | Purpose · 用途 |
| --- | --- |
| `cordis.patch.yml` | Harness profile bundle patch (inserts the single host row). |
| `skin.json` | Theme metadata: id, bilingual name, tagline, tags, accent `#22d3ee`, body attribute, wiring. |
| `lib/index.js` | Host-side no-op entry (`main`). |
| `lib/client.js` | The browser-side implementation: all CSS, DOM injection, and teardown. |
| `src/` | Thin source entries; `src/client/index.ts` re-exports the committed runtime. |
| `docs/COMPATIBILITY.md` | Compatibility notes and the unverified status. |
| `scripts/build.mjs` | Build script (`pnpm build`); asserts the required runtime files exist. |
| `LICENSE` · `NOTICE` | MIT license and the originality / non-affiliation notice. |

---

## Development · 开发

The first version intentionally stays small and dependency-light: the installable browser client is committed directly in `lib/client.js`, and `src/client/index.ts` re-exports that same implementation for source-oriented readers. There is no bundling step between the two — `pnpm build` only checks that the required runtime files are present.

当前版本刻意保持轻量：可安装运行时代码直接提交在 `lib/client.js`，源码入口 `src/client/index.ts` 指向同一实现，二者之间没有额外的打包步骤——`pnpm build` 只做运行时文件的存在性校验。

```sh
pnpm typecheck   # tsc -p tsconfig.json
pnpm build       # node scripts/build.mjs (runtime file presence check)
```

Runtime code has no dependencies; `typescript` is the only dev dependency.

---

## License · 许可

MIT — see [`LICENSE`](LICENSE). This project is original and does not include assets from Deep Whale Day & Night Theme.

Per [`NOTICE`](NOTICE): the package ships no third-party character artwork, screenshots, or logos — only CSS gradients, generated vector ornaments, and DOM-only ambient effects. DeepSeek, Harness, and related names belong to their respective owners; this project is not affiliated with or endorsed by DeepSeek.
