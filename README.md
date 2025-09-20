# tw-mon Monorepo

使用 pnpm 管理的工作区，并且提供了使用 Yarn 发版的基础配置。当前包含两个私有包：

- `@tw/ai-libs`：基础工具库，提供与 AI 相关的通用方法。
- `@tw/ai-hooks`：基于工具库封装的 Hook，演示如何在内部包之间建立依赖。

## 快速开始

```bash
pnpm install
```

安装完成后可以通过 pnpm 在所有包上运行脚本，例如：

```bash
pnpm -r test
```

## 代码结构

```
packages/
  ai-libs/
    src/
      index.js
  ai-hooks/
    src/
      useGreeting.js
```

`@tw/ai-hooks` 通过 workspace 协议依赖 `@tw/ai-libs`，并在 `useGreeting` Hook 中调用 `generateGreeting` 方法。

## 发版（使用 Yarn）

项目根目录已经开启 Yarn 工作区，可通过 Yarn 的 workspaces 能力来统一发版。例如：

```bash
# 为所有包 bump 版本号（需要 Yarn Berry）
yarn workspaces foreach --all version patch

# 发布某个包（需要取消 private 并配置 npm 信息）
yarn npm publish --access restricted --cwd packages/ai-libs
```

可以根据实际需要调整脚本和访问权限。
