# 技能与规则优先级（`F:\C\git`）

简明说明 Agent **先读什么、冲突怎么裁**。元规则 [`RATIONAL-AGENT.md`](../../../RATIONAL-AGENT.md) · 人读入口 [`AGENT-COMMANDER.md`](../AGENT-COMMANDER.md) · 总策略 [`CURSOR-TOTAL-GUIDE.md`](CURSOR-TOTAL-GUIDE.md) · 路由全文 [`agent/agent-skills-routing.md`](agent/agent-skills-routing.md) · 协作惯例 [`agent/agent-context-from-workflow-drive.md`](agent/agent-context-from-workflow-drive.md)。

---

## 1. 优先级（高 → 低）

| 顺序 | 来源 | 说明 |
|------|------|------|
| 0 | **[`F:\C\git\RATIONAL-AGENT.md`](../../../RATIONAL-AGENT.md)** | **元规则**：防幻觉、文档阅读预算、理性解题循环；**不替代**下列硬红线 |
| 0.5 | **[`WHEN-TO-USE-CLAUDE-CODE.md`](WHEN-TO-USE-CLAUDE-CODE.md)** | **Claude Code 升格**：`cc:` / `plan` / 复杂难搞（架构·高难度网页·PPT 等）必调；卡住先问用户；见 [`10-claude-code-escalation.mdc`](../../../.cursor/rules/10-claude-code-escalation.mdc) |
| 1 | **用户当轮明确指令** | 对话中的直接要求；`plan` / `go` / `goon` / `fix` 视为执行授权（对象仍须明确） |
| 2 | **`F:\C\git\.cursor\rules\*.mdc`** | 总指挥 `00-agent-commander.mdc`（`alwaysApply`） |
| 3 | **`F:\C\git\.cursor\skills\`** | Superpowers、01-plan、playwright-cli 等 **磁盘主副本** |
| 4 | **子仓库 `CLAUDE.md`** | 领域红线与运行环境（如 n8n 不改拓扑、专利不写客户机密） |
| 5 | **子仓库 `.cursor/rules`** | **仅领域红线 mdc**（如 n8n 企微）；**无** commander 指针 |
| 6 | **其他补充 md** | playbook、总项目 INDEX 等 |

**冲突示例**：Skill 要求 Mock 凭证 → 以 [`安防-n8n运维/CLAUDE.md`](../../安防-n8n运维/CLAUDE.md) + [`n8n-mcp-workflow-guide`](../../安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md) 为准；子仓库 `.mdc` 与全局 `.mdc` 冲突 → 以 **全局** 为准。

---

## 2. 同步到本机 Cursor（建议技能更新后执行）

```powershell
# 技能主副本 → 用户目录（Cursor 默认扫描）
robocopy "F:\C\git\.cursor\skills" "$env:USERPROFILE\.cursor\skills" /MIR /XD .git

# 全局规则 → 用户目录（任意工作区均可生效）
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.cursor\rules" | Out-Null
Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"
```

路径优先：**先** `F:\C\git\.cursor\skills\`，**再** `%USERPROFILE%\.cursor\skills\`（应与前者 `robocopy` 一致）。

### 2.1 云端备份（第五仓）

| 项 | 值 |
|----|-----|
| 本地仓 | `F:\C\git\安防开发总仓\安防-cursor-skills\` |
| GitHub | https://github.com/van7171/anfang-cursor-skills |
| 内容 | `skills/`（镜像 `.cursor/skills`）+ `rules/*.mdc` |
| 换机 / 推送 | 见该仓 [SYNC.md](../../安防-cursor-skills/SYNC.md) |

技能有改动时：先 `robocopy` 写入第五仓 → `git commit` → `git push`；新电脑 `git clone` + `submodule update`（若已启用子模块）+ 本节 §2 的 robocopy 到用户目录。

---

## 3. 按工作域（详见 routing · domain-skills）

速记与 skills 表已迁至 [`agent-skills-routing.md`](agent/agent-skills-routing.md) §1 与 [`domain-skills-thinking.md`](agent/domain-skills-thinking.md) §2，**此处不再复制**。

---

## 4. 关键路径速查

| 用途 | 路径 |
|------|------|
| 总指挥（人读） | `F:\C\git\AGENT-COMMANDER.md` |
| 总指挥（Cursor） | `F:\C\git\.cursor\rules\00-agent-commander.mdc` |
| 技能主副本 | `F:\C\git\.cursor\skills\` |
| 路由全文 | `F:\C\git\安防开发总仓\安防-全局指挥\docs\agent\agent-skills-routing.md` |
| Agent 协作惯例 | `F:\C\git\安防开发总仓\安防-全局指挥\docs\agent\agent-context-from-workflow-drive.md` |
| n8n 红线 | `F:\C\git\安防开发总仓\安防-n8n运维\CLAUDE.md` |
| 专利 / 官网 | `F:\C\git\安防开发总仓\安防-专利\CLAUDE.md` |

---

## 5. 变更记录

| 日期 | 说明 |
|------|------|
| 2026-05-19 | 初版：明确全局优先于子仓库；专利 / n8n / web 分域表；robocopy 同步命令。 |
| 2026-05-19 | 总指挥通用文迁至 `docs/agent/`；`n8n-global` 仅 n8n 域规格与 stub。 |
| 2026-05-19 | 增加第五仓 `安防-cursor-skills` 云端备份与 SYNC 链接。 |
| 2026-05-26 | §3 收短；子仓 rules 仅保留领域红线；RATIONAL 为第 0 层。 |
