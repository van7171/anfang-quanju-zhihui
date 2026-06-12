# 何时调用 Claude Code（升格路由 · 最高优先级）

> **优先级**：栈位 **0.5**（仅次于 [`RATIONAL-AGENT.md`](../../../RATIONAL-AGENT.md)）。  
> **机器执行**：[`F:\C\git\.cursor\rules\10-claude-code-escalation.mdc`](../../../.cursor/rules/10-claude-code-escalation.mdc)  
> **安装**：[`CLAUDE-CODE-CURSOR.md`](CLAUDE-CODE-CURSOR.md)

**口诀**：小改 Cursor；**`plan` / `cc:` / 复杂难搞 / 同意升格 = Claude Code**。

---

## 三条铁律

1. 用户 **`cc:`**、**`plan`**（及同义）、或 **复杂难搞类任务**（见下表）→ **必须** Shell 调本机 `claude -p`（非 Cursor 模型下拉）。
2. **主动升格**（卡住、多轮无果等）前须 **先问用户**；目标不清 → AskQuestion（最多 1 题）。**不得**未同意静默调 API。
3. 仍遵守 [`安防-n8n运维/CLAUDE.md`](../../安防-n8n运维/CLAUDE.md) 与 [`n8n-mcp-workflow-guide.md`](../../安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md) 硬红线。

---

## 必调（用户触发）

| 触发 | 行为 |
|------|------|
| 消息以 **`cc:`** / **`cc：`** 开头 | `claude -p` 全任务（可执行向；仍守 n8n 授权边界） |
| 整句 **`plan`** 或「对齐需求 / 没思路 / 列方案我选」 | `claude -p` **仅规划**（见下表）；**禁止**改 git、改 n8n、MCP 写 |

### `plan` 时 Claude 只做什么

- 输出：OpenQuestions、北极星/反目标、2～3 条路径、验收标准、建议 `go` / `fix`
- **不**直接写仓库文件；Cursor Agent 可将结论 **摘要写入** `tmp/plans/`（不由 CLI 写盘）

---

## 必调（复杂难搞 · 任务类型）

用户 **明确** 要做下列之一，且 **未** 说「只要 Cursor / 别调 Claude」→ **必须** `claude -p`（执行向，用「通用 append」；范围不清可先 AskQuestion **最多 1 题** 再调）：

| 类型 | 典型表述 / 场景 |
|------|-----------------|
| **架构** | 系统架构、技术选型、模块划分、部署拓扑、C4/多仓整合、重构蓝图 |
| **高难度网页 / UI** | 整站/落地页/大屏视觉、品牌级界面、复杂布局与动效、从零设计页面体系 |
| **PPT / 演示** | 路演稿、商业计划宣讲、方案幻灯片结构与视觉、发布会/投标演示稿 |
| **其他复杂难搞** | 大重构、跨多系统编排、从零产品/方案设计、多轮 Cursor 仍搞不定的创意交付 |

**不必先征求**（与「卡住升格」不同）：用户已点名这类活，直接调 Claude；交付仍可由 Cursor 根据 CLI 输出落盘。

---

## 主动升格（Agent 识别 → 先问你）

满足 **任一** 且本会话 **尚未** 征求过同意：

| 信号 |
|------|
| 同一问题 **`fix` ≥2 次**仍无进展 |
| 单任务涉及 **≥5 个文件** 或 **≥2 个子仓** |
| 部署 / 迁移 / 架构 / 多步编排 |
| 用户说「还是不行」「卡很久」「搞不定」 |
| 连续多轮仅诊断、**无实质推进** |

**征求句（固定）**：

> 建议用 Claude Code 深挖。回复 **是** 或 **`cc:`** 继续；不需要就说 **不用**。

用户回复 **是 / 好 / cc / cc: …** → 调 `claude -p`。回复 **不用 / 否** → 继续 Cursor 原路径。

---

## 不必调

- 改 1～3 行、解释片段、只读问答
- 已有明确一步命令且未触发升格信号
- 用户明确「只要 Cursor / 别调 Claude」

---

## 调用方式（Agent 统一）

工作目录：`F:\C\git`（子仓任务可在 prompt 中写明路径）。

```powershell
cd F:\C\git
claude -p "<任务全文>" --append-system-prompt "<见 escalation.mdc>"
```

| 模式 | append 要点 |
|------|-------------|
| **cc:** | 遵守 RATIONAL-AGENT + n8n 红线；无证据不下结论 |
| **plan** | **仅规划**；禁止改 git / update_workflow / MCP 写；产出结构见上 |
| **升格** | 同 cc，并附上本会话 blocker 摘要 |

**禁止**在命令或仓库中写入 API Key。

---

## 失败与回退

| 情况 | 动作 |
|------|------|
| CLI 未认证 | 提示用户本机执行 `claude` 登录一次 |
| 超时 / 报错 | 如实摘要；**不编造** Claude 输出 |
| 用户拒绝升格 | 继续 Cursor，不重复征求（同一会话同一 blocker） |

---

## 与 Cursor 速记关系

| 速记 | 谁主执 | Claude Code |
|------|--------|-------------|
| **plan** | Claude 出规划 → Cursor 可落盘 `tmp/plans/` | **必调** |
| **cc:** | Claude | **必调** |
| **架构 / 高难度网页·UI / PPT** 等复杂难搞 | Claude 主执；Cursor 可整理落盘 | **必调** |
| **go** / **fix** / **goon** | Cursor（除非用户再加 `cc:`、命中复杂任务类型或同意升格） | 按需 |
| 日常聊天 | Cursor | 否（除非复杂任务 / 升格信号 + 用户同意） |

---

## 同步规则到本机（规则更新后）

```powershell
Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"
```
