# Agent 技能路由（最高优先级 · 与对话速记绑定）

本文件定义：**用户说什么 → 必须先读哪些 Skill / 仓库文档 → 按什么顺序产出**。  
**总指挥（每轮必跑）**：Cursor 规则 [`F:\C\git\.cursor\rules\00-agent-commander.mdc`](../../../../.cursor/rules/00-agent-commander.mdc) · 人读 [`AGENT-COMMANDER.md`](../../AGENT-COMMANDER.md)。

**优先级栈（全文）**：[`docs/SKILLS-PRIORITY.md`](../SKILLS-PRIORITY.md)。摘要：用户指令 > `F:\C\git\.cursor\rules` > `F:\C\git\.cursor\skills` > 子仓库 `CLAUDE.md`（含 n8n 硬红线与备份钩子）> 子仓库 `.cursor/rules`（指针）> 本文件与各 `SKILL.md` 正文。

技能实体路径：

- **磁盘主副本**：`F:\C\git\.cursor\skills\`（见 [`F:\C\git\.cursor\skills\README.md`](F:/C/git/.cursor/skills/README.md)）
- **Cursor 运行时**：`%USERPROFILE%\.cursor\skills\`（应与主副本 `robocopy` 同步，见 [`CURSOR-TOTAL-GUIDE.md`](../CURSOR-TOTAL-GUIDE.md) §4）

---

## 0. 总指挥 · 每轮会话入口（与 RATIONAL-AGENT 文档预算一致）

**未完成下列步骤，不得给出实质回复或改文件**（子 agent 见 `using-superpowers` 的 SUBAGENT-STOP 除外）。  
**预算**：开场固定 ≤4 个 Read；详见 [`RATIONAL-AGENT.md`](../../../../RATIONAL-AGENT.md) §3.2 与 [`00-agent-commander.mdc`](../../../../.cursor/rules/00-agent-commander.mdc) §1。

| 步骤 | 动作 |
|------|------|
| 1 | **Read** `using-superpowers`（会话首次） |
| 2 | **Read** `RATIONAL-AGENT` §1～§3（会话首次） |
| 3 | **Read** [`WHEN-TO-USE-CLAUDE-CODE.md`](../WHEN-TO-USE-CLAUDE-CODE.md)（会话首次；`cc:` / `plan` / 升格） |
| 4 | **Read** 子仓 `CLAUDE.md` 红线 / 环境 / 触发词 + `Agent 入口` 短链 |
| 5 | **增量**：扫本文件 **§1** 对应行 → **Read 1 个 SKILL**；领域见 [`domain-skills-thinking.md`](domain-skills-thinking.md) §2（按需）；完工前 `verification-before-completion` |

| 用户意图大类 | 增量文档（+1，与 SKILL 合计仍控预算） |
|--------------|----------------------------------------|
| 安防总项目 / 任务书 | [`ANFANG-PROGRAM-MASTER.md`](../../安防-n8n运维/docs/project-docs/ANFANG-PROGRAM-MASTER.md) |
| n8n / 巡检 / 公众号 | [`n8n-mcp-workflow-guide.md`](../../安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md) 或对应 playbook |
| **`plan` / `fix` / `go` / `goon`** | 本文件 **§1** 行 → 先 Read **§1 列出的第一个 SKILL** |

---

## 1. 速记命令 × 技能（核心绑定）

### `plan`（谋 · 只规划不执行）

**触发**：用户说 `plan`、或「帮我对齐需求」「没思路帮我捋」「列方案我选」等同类表述。

**禁止**：`update_workflow`、改 git 写盘、未授权的 MCP 写操作（用户随后 `go` / `fix` 除外）。

**Claude Code（必调）**：按 [`WHEN-TO-USE-CLAUDE-CODE.md`](../WHEN-TO-USE-CLAUDE-CODE.md) 与 [`10-claude-code-escalation.mdc`](../../../../.cursor/rules/10-claude-code-escalation.mdc)，Shell 执行 `claude -p` **仅生成规划正文**；**不由 CLI 直接写文件**。

**Cursor 侧可选补充**（不替代 Claude 调用）：`brainstorming` / `writing-plans` / `01-plan`；若涉及 n8n：[`N8N_SPEC.md`](../../../安防-n8n运维/N8N_SPEC.md) + 相关 playbook。

**产出（Cursor 将 Claude 输出摘要写入 `tmp/plans/`，见 `00-workspace-context`）**：

- **OpenQuestions**（缺什么先问什么，最多 3 个关键问题）
- **北极星 / 反目标**（一句话各一）
- **2～3 条可选路径**（利弊、依赖、与 n8n 红线是否冲突）
- **建议的下一步速记**：`go`（执行某路径）或 `fix`（若已有明确报错）

---

### `go`（执行）

**触发**：用户说 `go`、或明确「按方案执行」「开始改」。

**必读**：

1. `%USERPROFILE%\.cursor\skills\superpowers\skills\executing-plans\SKILL.md`
2. 上一轮或 `tmp/plans/` 中**已确认**的计划摘要
3. [`安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md`](../../安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md) §1.3（若动 n8n）

**行为**：直接执行待办；改工作流成功后按 `CLAUDE.md` 触发 **workflow-backup-bot**；完工前对照 `superpowers\skills\verification-before-completion\SKILL.md` 自检。

---

### `goon`（继续）

**触发**：用户说 `goon`、`继续`、`接着做`。

**必读**：同 `go`，以 `executing-plans\SKILL.md` 的「断点续跑」为准。

**行为**：复述「已完成 / 下一步」→ 从断点继续；无断点则请用户选 `plan` 或指明对象。

---

### `fix`（修 · debug）

**触发**：用户说 `fix`、或「修一下」「报错了」且上下文指向某流/仓库。

**必读（按顺序）**：

1. `%USERPROFILE%\.cursor\skills\superpowers\skills\systematic-debugging\SKILL.md`
2. [`安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md`](../../安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md) §3、§5
3. 公众号 / Form / `undefined.name`：[`安防-n8n运维/docs/n8n/n8n-workflow-encoding-and-graph-consistency.md`](../../安防-n8n运维/docs/n8n/n8n-workflow-encoding-and-graph-consistency.md)
4. 子代理-heavy 修复：`superpowers\skills\subagent-driven-development\SKILL.md`（可选）

**行为**：能改则改；不 Mock 凭证、不编造全量 JSON；硬红线项只给 UI 清单；修复后 **`verification-before-completion`** + 备份钩子。

---

## 2. 关键词 × 技能（无速记时也生效）

| 用户提到 | 附加必读 Skill / 文档 |
|----------|------------------------|
| 公众号 / GZ | [`gzh-workflow-playbook.md`](../../../安防-n8n运维/docs/n8n/gzh-workflow-playbook.md)；规划阶段叠加 **brainstorming** |
| Obsidian /  vault / 笔记 / Canvas | `obsidian-skills\skills\` 下对应子技能（如 `obsidian-markdown`、`obsidian-cli`）的 `SKILL.md` |
| Playwright / 浏览器测 / E2E / 页面自动化 | `%USERPROFILE%\.cursor\skills\playwright-cli\SKILL.md` |
| 架构图 / 流程图 | `%USERPROFILE%\.cursor\skills\04-mermaid-diagrams\SKILL.md` |
| PR / gh / GitHub | `%USERPROFILE%\.cursor\skills\05-github-cli\SKILL.md` |
| MCP 工具设计 / 粒度 | `%USERPROFILE%\.cursor\skills\03-mcp-builder\SKILL.md` |
| 记一笔 / 总结对话 | `%USERPROFILE%\.cursor\skills\06-conversation-notes\SKILL.md` → `docs/notes/` |

---

## 3. 与 `N8N_SPEC.md` 的联动

- **`plan` + n8n**：用 **brainstorming** 补全规格里空白段，把结论写回 **OpenQuestions** 或建议用户改 `N8N_SPEC.md`；**不**在 plan 阶段改远程工作流。
- **`go` + n8n**：以 `N8N_SPEC` 验收场景为完成判据之一。
- **`fix` + n8n**：对照 `N8N_SPEC` 数据契约与失败语义，避免只修表象。

---

## 4. 冲突裁决

| 冲突 | 裁决 |
|------|------|
| Skill 要求 Mock 凭证 / 输出全量工作流 JSON | **以 `CLAUDE.md` + 手册为准**，拒绝或改为 UI 清单 / SDK 增量 |
| `01-plan` vs Superpowers `writing-plans` | **合并使用**：brainstorming → writing-plans → 01-plan 验收条 |
| Skill 要求未授权即改生产 | **以用户 `go` / `fix` 与对象明确性为准** |

---

## 5. 领域 skills（按需 · 不全文必读）

完整八域表：[`domain-skills-thinking.md`](domain-skills-thinking.md) **§2**。子仓 `CLAUDE.md` 的 **Agent 入口** 短链指向对应 §2.x。

- 缺 skill：`F:\C\git\scripts\ensure-skill.ps1` → 仍无则 `writing-skills` 脚手架。
- **禁止**未 Read 本轮所需 SKILL 就改生产 / n8n / 发消息。

---

## 6. 变更记录

| 日期 | 说明 |
|------|------|
| 2026-05-15 | 初版：plan/go/goon/fix 与 brainstorming、obsidian、playwright、superpowers 子技能绑定。 |
| 2026-05-15 | 上收至 `F:\C\git\安防开发总仓\安防-n8n运维\docs\n8n-global\`，技能主副本在 `F:\C\git\.cursor\skills\`。 |
| 2026-05-19 | 路由全文迁至 `F:\C\git\安防开发总仓\安防-全局指挥\docs\agent\`（跨项目）；`n8n-global` 留重定向 stub。 |
| 2026-05-26 | §0/§5 与 RATIONAL-AGENT 文档预算对齐；领域 skills 改为按需 Read §2。 |
