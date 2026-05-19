# 技能与规则优先级（`F:\C\git`）

简明说明 Agent **先读什么、冲突怎么裁**。人读入口：[`AGENT-COMMANDER.md`](../AGENT-COMMANDER.md) · 总策略 [`CURSOR-TOTAL-GUIDE.md`](CURSOR-TOTAL-GUIDE.md) · 路由全文 [`agent/agent-skills-routing.md`](agent/agent-skills-routing.md) · 协作惯例 [`agent/agent-context-from-workflow-drive.md`](agent/agent-context-from-workflow-drive.md)。

---

## 1. 优先级（高 → 低）

| 顺序 | 来源 | 说明 |
|------|------|------|
| 1 | **用户当轮明确指令** | 对话中的直接要求；`plan` / `go` / `goon` / `fix` 视为执行授权（对象仍须明确） |
| 2 | **`F:\C\git\.cursor\rules\*.mdc`** | 总指挥 `00-agent-commander.mdc`、速记 `00-agent-skills-routing.mdc`（`alwaysApply`） |
| 3 | **`F:\C\git\.cursor\skills\`** | Superpowers、01-plan、playwright-cli 等 **磁盘主副本** |
| 4 | **子仓库 `CLAUDE.md`** | 领域红线与运行环境（如 n8n 不改拓扑、专利不写客户机密） |
| 5 | **子仓库 `.cursor/rules`** | **仅指针**，链回 §2～§3；不得覆盖全局总指挥 |
| 6 | **其他补充 md** | playbook、总项目 INDEX 等 |

**冲突示例**：Skill 要求 Mock 凭证 → 以 `n8n-fix/CLAUDE.md` + `n8n-mcp-workflow-guide` 为准；子仓库 `.mdc` 与全局 `.mdc` 冲突 → 以 **全局** 为准。

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

## 3. 按工作域选 Skill（不复制到子仓库）

| 工作域 | 打开的工作区 | 每轮固定 | `plan` 额外 | `go` / `fix` 额外 | 关键词 |
|--------|--------------|----------|-------------|-------------------|--------|
| **n8n 运维** | `安防-n8n运维/` | using-superpowers → agent-skills-routing §0 | brainstorming → writing-plans → 01-plan；`N8N_SPEC.md` | executing-plans / systematic-debugging；`docs/n8n/n8n-mcp-workflow-guide.md` | 公众号 → gzh-playbook；巡检@ → workflow-aliases + guide §6.4 |
| **安防总项目** | `安防-n8n运维/`（文档） | 同上 | 同上 + `docs/project-docs/ANFANG-PROGRAM-MASTER.md` | 同上；任务书原件见 `安防-专利/taskbooks/` | 里程碑、商业化 → ANFANG-PROGRAM-MASTER §8 |
| **专利 / 材料包** | `安防-专利/` | 同上（**仍走全局** plan/go/fix） | brainstorming → writing-plans → 01-plan；`patent/` 与脚本 README | executing-plans；改稿用 verification-before-completion | 五书、交底、bundle → `patent/`、`scripts/build-patent-material-bundle.py` |
| **官网 / WEB** | `安防-专利/web/` 或 `WEB/`（旧副本） | 同上 | brainstorming → writing-plans → 01-plan；`web/` 文案 md | executing-plans；前端改动可加 playwright-cli | Playwright / E2E → `playwright-cli/SKILL.md` |
| **跨仓库** | `F:\C\git` 根 | 同上 | 按主任务选上表一行 | 同上 | GitHub → `05-github-cli`；架构图 → `04-mermaid-diagrams` |

**禁止**：在 `安防-n8n运维` 或 `anfang-patent` 内再维护一份完整 `superpowers/` 树；只保留 **指针**（`CLAUDE.md` + 可选 `.cursor/rules/*.mdc`）。

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
