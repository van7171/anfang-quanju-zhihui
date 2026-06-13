# Agent 总指挥（人读入口）

Cursor 每轮自动加载 [`F:\C\git\.cursor\rules\00-agent-commander.mdc`](../../.cursor/rules/00-agent-commander.mdc)。本文件 **不重复** 路由表，只汇总链接。

## 权威文档（3+1）

| 用途 | 文件 |
|------|------|
| **必读命令 · skills 必调** | [`../../MUST-READ-COMMANDS.md`](../../MUST-READ-COMMANDS.md) |
| 怎么想 · 防幻觉 · 文档预算 | [`F:\C\git\RATIONAL-AGENT.md`](../../RATIONAL-AGENT.md) |
| plan / go / fix · 关键词 | [`docs/agent/agent-skills-routing.md`](docs/agent/agent-skills-routing.md) |
| 冲突优先级 | [`docs/SKILLS-PRIORITY.md`](docs/SKILLS-PRIORITY.md) |
| 领域 skills（按需 §2） | [`docs/agent/domain-skills-thinking.md`](docs/agent/domain-skills-thinking.md) |
| **何时调 Claude Code（升格 · 最高优先级）** | [`docs/WHEN-TO-USE-CLAUDE-CODE.md`](docs/WHEN-TO-USE-CLAUDE-CODE.md) — `plan` / `cc:` / 架构·高难度网页·PPT 等复杂难搞必调 |
| Claude Code 安装与双轨 | [`docs/CLAUDE-CODE-CURSOR.md`](docs/CLAUDE-CODE-CURSOR.md) · 根 [`CLAUDE.md`](../../CLAUDE.md) |

## 子仓入口

各仓 `CLAUDE.md` → **Agent 入口（短链）**；业务红线见子仓正文（n8n 企微等）。

| 仓 | CLAUDE |
|----|--------|
| n8n | [`../安防-n8n运维/CLAUDE.md`](../安防-n8n运维/CLAUDE.md) |
| 服务器 | [`../安防-服务器/CLAUDE.md`](../安防-服务器/CLAUDE.md) |
| 专利 | [`../安防-专利/CLAUDE.md`](../安防-专利/CLAUDE.md) |
| 官网 | [`../安防-官网/CLAUDE.md`](../安防-官网/CLAUDE.md) |
| Hermes MCP | [`../../hermes-studio/AGENTS.md`](../../hermes-studio/AGENTS.md) |

## 同步到本机（只开子仓时也建议执行）

```powershell
Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"
robocopy "F:\C\git\.cursor\skills" "$env:USERPROFILE\.cursor\skills" /MIR /XD .git
```

## 变更

| 日期 | 说明 |
|------|------|
| 2026-05-16 | 设立总指挥 |
| 2026-05-26 | 收短为人读链接页；细则迁至 RATIONAL + routing |
