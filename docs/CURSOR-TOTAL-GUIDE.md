# Cursor 总指导策略（`F:\C\git` 全局）

本目录为 **跨仓库** 的 Agent 总策略与技能实体存放处；各子项目（如 **安防-n8n运维**）通过 `CLAUDE.md` 链回本文件，**不重复维护** 大块规则。

---

## 1. 目录地图

| 路径 | 作用 |
|------|------|
| [`F:\C\git\.cursor\rules\00-agent-commander.mdc`](../.cursor/rules/00-agent-commander.mdc) | **总指挥**（每轮调度 Superpowers + 技能） |
| [`F:\C\git\AGENT-COMMANDER.md`](../AGENT-COMMANDER.md) | 总指挥人读入口 |
| [`F:\C\git\.cursor\rules\`](../.cursor/rules/) | **始终生效** 的 Cursor 规则（`alwaysApply`） |
| [`F:\C\git\.cursor\skills\`](../.cursor/skills/) | 技能实体 **磁盘主副本**（与 `%USERPROFILE%\.cursor\skills\` 建议保持同步） |
| [`F:\C\git\安防开发总仓\安防-全局指挥\docs\agent\`](agent/) | **跨项目** 技能路由、Agent 协作惯例 |
| [`F:\C\git\安防开发总仓\安防-n8n运维\docs\n8n-global\`](../../安防-n8n运维/docs/n8n-global/) | n8n 域：`N8N_SPEC`、公众号 playbook 等（权威正文多在 `docs/n8n/`） |
| [`F:\C\git\安防开发总仓\安防-n8n运维\`](../安防-n8n运维/) | n8n 运维与安防文档子仓库 |

---

## 2. 每个会话 Agent 必读（优先级）

完整栈见 **[`SKILLS-PRIORITY.md`](SKILLS-PRIORITY.md)**。摘要：

1. **用户当轮明确指令**
2. **总指挥** [`00-agent-commander.mdc`](../.cursor/rules/00-agent-commander.mdc) → Read **`using-superpowers`** → [`agent-skills-routing.md`](agent/agent-skills-routing.md) §0
3. **`F:\C\git\.cursor\skills\`**（主副本，与 `%USERPROFILE%\.cursor\skills\` 同步）
4. 子项目 **`CLAUDE.md`**（`安防-n8n运维` / `anfang-patent` 等领域红线）
5. 子项目 **`.cursor/rules`**（仅指针，**不得**覆盖 §2）

**硬红线**仍以 **安防-n8n运维** 内 [`CLAUDE.md`](../../安防-n8n运维/CLAUDE.md) + [`docs/n8n/n8n-mcp-workflow-guide.md`](../../安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md) 为准（仅 n8n 域）。

---

## 3. 速记命令（对话层）

| 命令 | 行为 |
|------|------|
| **plan** | Read `brainstorming` → `writing-plans` → `01-plan`；结合 `N8N_SPEC`；产出 `tmp/plans/`；**不执行** |
| **go** | Read `executing-plans`；执行上一轮待办；n8n 改完备份 |
| **goon** | 同 go，断点续跑 |
| **fix** | Read `systematic-debugging`；能改则改；不 Mock 凭证 |

详见 [`agent-skills-routing.md`](agent/agent-skills-routing.md)。

---

## 4. 技能磁盘与同步

- **主副本**：`F:\C\git\.cursor\skills\`（见 [`skills/README.md`](../.cursor/skills/README.md)）
- **Cursor 默认扫描**：`%USERPROFILE%\.cursor\skills\`

同步到用户目录（管理员机执行一次，或技能更新后）：

```powershell
robocopy "F:\C\git\.cursor\skills" "$env:USERPROFILE\.cursor\skills" /MIR /XD .git
```

同步 **全局规则** 到用户目录（可选，使任意工作区生效）：

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.cursor\rules" | Out-Null
Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"
```

---

## 5. 子项目如何挂载

在子仓库 `CLAUDE.md` 开场写：

```markdown
全局策略：F:\C\git\安防开发总仓\安防-全局指挥\docs\CURSOR-TOTAL-GUIDE.md
技能路由：F:\C\git\安防开发总仓\安防-全局指挥\docs\agent\agent-skills-routing.md
```

**安防-n8n运维**、**安防-专利**、**安防-官网** 已按此方式链接（仅指针，见 [`SKILLS-PRIORITY.md`](SKILLS-PRIORITY.md)）。

---

## 6. 变更记录

| 日期 | 说明 |
|------|------|
| 2026-05-15 | 从 `n8n-fix` 项目内 `.cursor` / `docs` 上收至 `F:\C\git` 全局。 |
| 2026-05-19 | 新增 SKILLS-PRIORITY；anfang-patent 入口；明确子仓库 rules 次级。 |
