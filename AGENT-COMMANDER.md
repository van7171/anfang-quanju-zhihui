# Agent 总指挥（全局入口）

本仓库 **每条 Cursor 对话** 默认走「总指挥」调度，避免跳过 Superpowers / 技能路由直接改代码。

## 自动生效位置

| 层级 | 文件 |
|------|------|
| Cursor 规则（始终应用） | [`F:\C\git\.cursor\rules\00-agent-commander.mdc`](.cursor/rules/00-agent-commander.mdc) |
| 路由全文 | [`docs/agent/agent-skills-routing.md`](docs/agent/agent-skills-routing.md) |
| Agent 协作惯例 | [`docs/agent/agent-context-from-workflow-drive.md`](docs/agent/agent-context-from-workflow-drive.md) |
| 总策略 | [`docs/CURSOR-TOTAL-GUIDE.md`](docs/CURSOR-TOTAL-GUIDE.md) |
| 优先级说明 | [`docs/SKILLS-PRIORITY.md`](docs/SKILLS-PRIORITY.md) |
| 全局 CLAUDE | [`CLAUDE.md`](CLAUDE.md) |
| n8n 子项目 | [`../安防-n8n运维/CLAUDE.md`](../安防-n8n运维/CLAUDE.md) |
| 专利 / 官网 | [`安防-专利/CLAUDE.md`](安防-专利/CLAUDE.md) |

## 每轮 Agent 必做（摘要）

1. Read **`using-superpowers`** → Read **`agent-skills-routing`**。
2. 按用户意图加载：**brainstorming / writing-plans / executing-plans / systematic-debugging / verification-before-completion** 等（见路由表）。
3. 速记：**plan**（只规划）· **go** / **goon**（执行）· **fix**（修）。

## 同步到本机 Cursor（建议执行一次）

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.cursor\rules" | Out-Null
Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"
robocopy "F:\C\git\.cursor\skills" "$env:USERPROFILE\.cursor\skills" /MIR /XD .git
```

## 变更

| 日期 | 说明 |
|------|------|
| 2026-05-16 | 设立总指挥；强制每轮 Superpowers + 技能路由调度。 |
| 2026-05-19 | 补充 SKILLS-PRIORITY、anfang-patent 入口；明确子仓库规则为次级指针。 |
