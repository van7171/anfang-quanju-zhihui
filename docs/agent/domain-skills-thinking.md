# 领域思考 · 技能调度与自动补齐

> 与各子仓 `CLAUDE.md` **Agent 入口** 短链配套。路由：[`agent-skills-routing.md`](agent-skills-routing.md)。

---

## 1. 思考阶段总则

综合四问、文档预算、防幻觉：**只维护** [`RATIONAL-AGENT.md`](../../../../RATIONAL-AGENT.md) §1～§3；本文件 **§2 起** 仅列各领域 skills。

---

## 2. 各领域 · 思考阶段技能表

路径均相对 `F:\C\git\.cursor\skills\`（或 `%USERPROFILE%\.cursor\skills\`）。  
**plan / go / fix / cc** 速记全文见 [`agent-skills-routing.md`](agent-skills-routing.md) **§1**；本文件 §2 仅列领域 skills。

### 2.1 工作区根 `F:\C\git`

| 阶段 | 必读 Skill |
|------|------------|
| 每轮 | `superpowers/skills/using-superpowers` |
| 跨仓 plan | `superpowers/skills/brainstorming`、`superpowers/skills/writing-plans`、`01-plan` |
| 多任务并行 | `superpowers/skills/dispatching-parallel-agents` |
| 完工 | `superpowers/skills/verification-before-completion` |

### 2.2 hermes-studio

| 阶段 | 必读 Skill |
|------|------------|
| MCP 设计/排障 | `03-mcp-builder`、`superpowers/skills/systematic-debugging` |
| plan | `superpowers/skills/brainstorming`、`superpowers/skills/writing-plans` |
| 会话笔记 | `06-conversation-notes` |
| 完工 | `superpowers/skills/verification-before-completion` |

### 2.3 安防-全局指挥

| 阶段 | 必读 Skill |
|------|------------|
| 改路由/规则 | `superpowers/skills/writing-skills`、`create-rule`（Cursor 技能：`skills-cursor/create-rule` 若在用户目录） |
| 子代理设计 | `02-subagents` |
| 架构说明 | `04-mermaid-diagrams` |
| plan | `superpowers/skills/brainstorming`、`01-plan` |

### 2.4 安防-n8n运维

| 阶段 | 必读 Skill |
|------|------------|
| 路由 | `n8n/INDEX.md` → `n8n/anfang-ops-redlines` → **1** 个 `n8n/n8n-*`（见 INDEX 表） |
| fix | `superpowers/skills/systematic-debugging`（先于改流） |
| go | `superpowers/skills/executing-plans` |
| plan | `superpowers/skills/brainstorming`、`writing-plans`、`01-plan` + 仓内 `N8N_SPEC` / playbook |
| 流程图 | `04-mermaid-diagrams` |
| 页面/回调验 | `playwright-cli` |
| 大改完工 | `superpowers/skills/requesting-code-review`（可选） |
| 完工 | `verification-before-completion` + 备份钩子 |
| 更新 skills | `F:\C\git\scripts\sync-domain-skills.ps1 -Domain n8n` |

### 2.5 安防-服务器

| 阶段 | 必读 Skill |
|------|------------|
| plan 部署 | `01-plan`、`superpowers/skills/writing-plans` |
| fix 连通性 | `superpowers/skills/systematic-debugging` |
| 架构/拓扑 | `04-mermaid-diagrams` |
| Hermes MCP 联动 | `03-mcp-builder` + [`hermes-studio`](../../../../hermes-studio/AGENTS.md) |
| 完工 | `verification-before-completion`（curl/证书/首页） |

### 2.6 安防-专利

| 阶段 | 必读 Skill |
|------|------------|
| plan 材料结构 | `superpowers/skills/brainstorming`、`01-plan` |
| go 跑脚本 | `superpowers/skills/executing-plans` |
| 记录结论 | `06-conversation-notes` |
| 完工 | `verification-before-completion`（bundle 产物齐全） |

### 2.7 安防-官网

| 阶段 | 必读 Skill |
|------|------------|
| 大屏/可视化/官网 UI | `anfang-opensource-ref` + 仓内 `web/open-source-ref/INDEX.md` |
| 路由 | `design/INDEX.md` → **1～2** 个 `design/*`（见 INDEX；PPT 用 `pptx`） |
| UI/交互 plan | `superpowers/skills/brainstorming` + `design/frontend-design` |
| 浏览器验收 | `playwright-cli` |
| go 实现 | `superpowers/skills/executing-plans` |
| 完工 | `verification-before-completion` |
| 更新 skills | `F:\C\git\scripts\sync-domain-skills.ps1 -Domain design` |

### 2.8 安防-cursor-skills

| 阶段 | 必读 Skill |
|------|------------|
| 新建/改技能 | `superpowers/skills/writing-skills` |
| 同步流程 | 本仓 [`SYNC.md`](../../../安防-cursor-skills/SYNC.md) |
| 完工 | `verification-before-completion` + `robocopy` 双端 spot-check |

---

## 3. 技能缺失 · 自动补齐（Agent 执行顺序）

1. **检测**：对 §2 表中本轮需要的每条路径，确认  
   `F:\C\git\.cursor\skills\<path>/SKILL.md` **或**  
   `%USERPROFILE%\.cursor\skills\<path>/SKILL.md` 存在。  
2. **恢复**：在仓库根执行（Agent 可用 Shell）：

```powershell
& "F:\C\git\scripts\ensure-skill.ps1" `
  "superpowers/skills/using-superpowers" `
  "03-mcp-builder"
# … 按需追加路径
```

3. **仍缺失**：  
   - **Read** `superpowers/skills/writing-skills/SKILL.md`  
   - 在 `F:\C\git\.cursor\skills\<领域名>/SKILL.md` **脚手架**最小可用技能（frontmatter + 步骤 + 红线）  
   - 再跑 `ensure-skill.ps1` 或：

```powershell
robocopy "F:\C\git\.cursor\skills\<领域名>" "$env:USERPROFILE\.cursor\skills\<领域名>" /E
```

4. **备份**：告知用户将新技能 **robocopy 进** `安防-cursor-skills/skills` 并 commit（见 SYNC.md）。  
5. **禁止**：未 Read 技能就声称「已按 skill 执行」；禁止跳过检测直接改生产/n8n/发消息。

---

## 4. 与速记命令叠加

| 用户说 | 思考阶段额外强制 |
|--------|------------------|
| **plan** | brainstorming → writing-plans → 01-plan + 本领域 §2 行 |
| **go / goon** | executing-plans + 本领域 §2「go/fix」行 |
| **fix** | systematic-debugging 第一 + 本领域 fix 行 |

---

## 5. 维护

| 日期 | 说明 |
|------|------|
| 2026-05-26 | 初版：领域技能表 + ensure-skill.ps1 联动各仓角色定位 |
| 2026-06-13 | 分仓 Junction 部署：见 [`F:\C\git\STRUCTURE.md`](../../../../STRUCTURE.md) · `deploy-project-skills.ps1` |

---

## 6. 分仓 Skills 视图（Junction）

真源：`F:\C\git\.cursor\skills\`。各子仓 `.cursor/skills/` 由 `scripts/deploy-project-skills.ps1` 生成，**只改真源后重跑脚本**。

| 子仓 | SKILLS.md | 数量 |
|------|-----------|------|
| 全局指挥 | [`../../SKILLS.md`](../../SKILLS.md) | 4 |
| n8n运维 | [`../../../安防-n8n运维/SKILLS.md`](../../../安防-n8n运维/SKILLS.md) | 5 |
| 官网 | [`../../../安防-官网/SKILLS.md`](../../../安防-官网/SKILLS.md) | 6 |
| 专利 | [`../../../安防-专利/SKILLS.md`](../../../安防-专利/SKILLS.md) | 4 |
| 服务器 | [`../../../安防-服务器/SKILLS.md`](../../../安防-服务器/SKILLS.md) | 5 |
| Hermes同伴 | [`../../../安防-Hermes同伴/SKILLS.md`](../../../安防-Hermes同伴/SKILLS.md) | 5 |
| hermes-studio | [`../../../../hermes-studio/SKILLS.md`](../../../../hermes-studio/SKILLS.md) | 4 |
