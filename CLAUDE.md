# F:\C\git — 全局工作区（Agent 入口）

本目录为 **跨子仓库** 的 Cursor 工作区根。打开任意子目录（`n8n-fix`、`anfang-patent`、`WEB`）时，Agent 仍须以 **本层总指挥** 为先。

## 每轮必做（摘要）

1. [`AGENT-COMMANDER.md`](AGENT-COMMANDER.md) · [`docs/CURSOR-TOTAL-GUIDE.md`](docs/CURSOR-TOTAL-GUIDE.md)
2. Read **`F:\C\git\.cursor\skills\superpowers\skills\using-superpowers\SKILL.md`**（或 `%USERPROFILE%\.cursor\skills\` 下同路径）
3. Read [`docs/agent/agent-skills-routing.md`](docs/agent/agent-skills-routing.md) §0～§1
4. 按意图加载 Skill；速记：**plan** · **go** / **goon** · **fix**

完整优先级见 [`docs/SKILLS-PRIORITY.md`](docs/SKILLS-PRIORITY.md)。

## 子仓库（仅指针，不复制技能树）

| 子目录 | 子仓库 Agent 文件 | 专有约定 |
|--------|-------------------|----------|
| [`n8n-fix/`](n8n-fix/) | [`n8n-fix/CLAUDE.md`](n8n-fix/CLAUDE.md) | n8n 红线、巡检、MCP、安防编排 |
| [`anfang-patent/`](anfang-patent/) | [`anfang-patent/CLAUDE.md`](anfang-patent/CLAUDE.md) | 专利五书、任务书原件、官网 `web/` |
| [`WEB/`](WEB/) | 历史官网副本；新开发用 `anfang-patent/web/` | 见 [`WEB/README.md`](WEB/README.md) |

**规则优先级**：用户明确指令 > `F:\C\git\.cursor\rules\` > `F:\C\git\.cursor\skills\` > 子仓库 `CLAUDE.md`（红线与领域约定）> 子仓库 `.cursor/rules`（仅链回全局，次级）。
