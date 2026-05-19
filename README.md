# F:\C\git — 工作区总览

| 目录 | 用途 | Cursor 打开 |
|------|------|-------------|
| [`n8n-fix/`](n8n-fix/) | n8n 工作流运维、安防编排文档、JSON Schema | 改流 / 巡检 / 总项目编排 |
| [`anfang-patent/`](anfang-patent/) | 专利、任务书 PDF、官网 `web/WEB-wanxiang` | 五书 / 交底 / 官网 / 任务书原件 |
| [`WEB/`](WEB/) | 官网**历史**副本（`site/`），新开发请用 `anfang-patent` | 仅维护旧副本时 |
| [`docs/`](docs/) | 全局 Agent（`agent/`）、n8n 规格（`n8n-global/`） | 调规则 / 跨项目说明 |

`anfang-patent` 当前为指向 `anfang-patent-web` 的目录联接（物理重命名被占用时）。关闭占用进程后可 `Rename-Item anfang-patent-web anfang-patent` 并删除联接。

详见各仓库根目录 `README.md`，尤其是 [`n8n-fix/README.md`](n8n-fix/README.md)。

---

## 技能与规则优先级

Agent **以 `F:\C\git` 为调度根**，不在子仓库复制完整技能树。

| 层级 | 路径 |
|------|------|
| 人读入口 | [`AGENT-COMMANDER.md`](AGENT-COMMANDER.md) |
| 全局 Agent 约定 | [`CLAUDE.md`](CLAUDE.md) |
| Cursor 总指挥规则 | [`.cursor/rules/00-agent-commander.mdc`](.cursor/rules/00-agent-commander.mdc) |
| 技能主副本 | [`.cursor/skills/`](.cursor/skills/) |
| 优先级与分域表 | [`docs/SKILLS-PRIORITY.md`](docs/SKILLS-PRIORITY.md) |
| 路由全文 | [`docs/agent/agent-skills-routing.md`](docs/agent/agent-skills-routing.md) |
| Agent 惯例 | [`docs/agent/`](docs/agent/) |
| 总策略 | [`docs/CURSOR-TOTAL-GUIDE.md`](docs/CURSOR-TOTAL-GUIDE.md) |

**优先级（简）**：用户指令 > 本目录 `.cursor/rules` > 本目录 `.cursor/skills` > 子仓库 `CLAUDE.md` > 子仓库 `.cursor/rules`（仅指针）。

**同步到本机**（建议执行一次或技能更新后）：

```powershell
robocopy "F:\C\git\.cursor\skills" "$env:USERPROFILE\.cursor\skills" /MIR /XD .git
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.cursor\rules" | Out-Null
Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"
```

子仓库入口：[`n8n-fix/CLAUDE.md`](n8n-fix/CLAUDE.md) · [`anfang-patent/CLAUDE.md`](anfang-patent/CLAUDE.md)。
