# Agent 技能路由（最高优先级 · 与对话速记绑定）

本文件定义：**用户说什么 → 必须先读哪些 Skill / 仓库文档 → 按什么顺序产出**。  
**总指挥（每轮必跑）**：Cursor 规则 [`F:\C\git\.cursor\rules\00-agent-commander.mdc`](../../.cursor/rules/00-agent-commander.mdc) · 人读 [`F:\C\git\AGENT-COMMANDER.md`](../../AGENT-COMMANDER.md)。

**优先级栈（全文）**：[`docs/SKILLS-PRIORITY.md`](../SKILLS-PRIORITY.md)。摘要：用户指令 > `F:\C\git\.cursor\rules` > `F:\C\git\.cursor\skills` > 子仓库 `CLAUDE.md`（含 n8n 硬红线与备份钩子）> 子仓库 `.cursor/rules`（指针）> 本文件与各 `SKILL.md` 正文。

技能实体路径：

- **磁盘主副本**：`F:\C\git\.cursor\skills\`（见 [`F:\C\git\.cursor\skills\README.md`](F:/C/git/.cursor/skills/README.md)）
- **Cursor 运行时**：`%USERPROFILE%\.cursor\skills\`（应与主副本 `robocopy` 同步，见 [`CURSOR-TOTAL-GUIDE.md`](../CURSOR-TOTAL-GUIDE.md) §4）

---

## 0. 总指挥 · 每轮会话入口（Agent 自检）

**未完成下列步骤，不得给出实质回复或改文件**（子 agent 见 `using-superpowers` 的 SUBAGENT-STOP 除外）。

| 步骤 | 动作 |
|------|------|
| 0.1 | **Read** `superpowers/skills/using-superpowers/SKILL.md`（`F:\C\git\.cursor\skills\` 或 `%USERPROFILE%\.cursor\skills\`） |
| 0.2 | **Read** 本文件 **§0～§1**（至少扫表） |
| 0.3 | 按用户消息加载 **§1 速记** 或 **§2 关键词** 所列 `SKILL.md` |
| 0.4 | 将声称完成 / 修完前：**Read** `superpowers/skills/verification-before-completion/SKILL.md` |

| 用户意图大类 | 除上表外必读 |
|--------------|----------------|
| 安防总项目 / 任务书 / 商业化 | [`n8n-fix/docs/project-docs/ANFANG-PROGRAM-MASTER.md`](../../n8n-fix/docs/project-docs/ANFANG-PROGRAM-MASTER.md)、[`INDEX.md`](../../n8n-fix/docs/project-docs/INDEX.md) §0 |
| n8n / 工作流 / 巡检 / 公众号 | [`n8n-fix/docs/n8n/n8n-mcp-workflow-guide.md`](../../n8n-fix/docs/n8n/n8n-mcp-workflow-guide.md)、[`N8N_SPEC.md`](../n8n-global/N8N_SPEC.md) |
| 任意 **`plan` / `fix` / `go` / `goon`** | **§1 对应行 + 所列 `SKILL.md` 必须先 Read 再回复** |

---

## 1. 速记命令 × 技能（核心绑定）

### `plan`（谋 · 只规划不执行）

**触发**：用户说 `plan`、或「帮我对齐需求」「没思路帮我捋」「列方案我选」等同类表述。

**禁止**：`update_workflow`、改 git 写盘、未授权的 MCP 写操作（用户随后 `go` / `fix` 除外）。

**必读（按顺序）**：

1. `%USERPROFILE%\.cursor\skills\brainstorming\SKILL.md` — 澄清意图、约束、设计选项（Superpowers）
2. `%USERPROFILE%\.cursor\skills\superpowers\skills\writing-plans\SKILL.md` — 可执行计划结构
3. `%USERPROFILE%\.cursor\skills\01-plan\SKILL.md` — 依赖顺序与验收标准
4. 若涉及 n8n / 某条工作流：[`N8N_SPEC.md`](../n8n-global/N8N_SPEC.md)（或 `n8n-fix` 根目录同名文件）+ 相关 playbook（如公众号 → [`gzh-workflow-playbook.md`](../n8n-global/gzh-workflow-playbook.md)）

**产出（写入 `tmp/plans/`，见 `00-workspace-context`）**：

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
3. [`n8n-fix/docs/n8n/n8n-mcp-workflow-guide.md`](../../n8n-fix/docs/n8n/n8n-mcp-workflow-guide.md) §1.3（若动 n8n）

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
2. [`n8n-fix/docs/n8n/n8n-mcp-workflow-guide.md`](../../n8n-fix/docs/n8n/n8n-mcp-workflow-guide.md) §3、§5
3. 公众号 / Form / `undefined.name`：[`n8n-fix/docs/n8n/n8n-workflow-encoding-and-graph-consistency.md`](../../n8n-fix/docs/n8n/n8n-workflow-encoding-and-graph-consistency.md)
4. 子代理-heavy 修复：`superpowers\skills\subagent-driven-development\SKILL.md`（可选）

**行为**：能改则改；不 Mock 凭证、不编造全量 JSON；硬红线项只给 UI 清单；修复后 **`verification-before-completion`** + 备份钩子。

---

## 2. 关键词 × 技能（无速记时也生效）

| 用户提到 | 附加必读 Skill / 文档 |
|----------|------------------------|
| 公众号 / GZ | [`gzh-workflow-playbook.md`](../n8n-global/gzh-workflow-playbook.md)；规划阶段叠加 **brainstorming** |
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

## 5. 变更记录

| 日期 | 说明 |
|------|------|
| 2026-05-15 | 初版：plan/go/goon/fix 与 brainstorming、obsidian、playwright、superpowers 子技能绑定。 |
| 2026-05-15 | 上收至 `F:\C\git\docs\n8n-global\`，技能主副本在 `F:\C\git\.cursor\skills\`。 |
| 2026-05-19 | 路由全文迁至 `F:\C\git\docs\agent\`（跨项目）；`n8n-global` 留重定向 stub。 |
