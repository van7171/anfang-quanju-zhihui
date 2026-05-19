# 安防-全局指挥（anfang-quanju-zhihui）

跨四仓的 **Agent 总指挥** 仓库：规则指针、`docs/agent`、技能优先级说明。**不**包含 n8n 工作流、专利 PDF、官网源码。

## 四仓（同级目录 `F:\C\git\安防开发总仓\`）

| 目录 | GitHub | 职责 |
|------|--------|------|
| [`../安防-n8n运维/`](../安防-n8n运维/) | `van7171/n8n-fix` | n8n 运维、Schema、安防编排 |
| [`../安防-专利/`](../安防-专利/) | `van7171/anfang-zhuanli` | 专利、任务书 PDF |
| [`../安防-官网/`](../安防-官网/) | `van7171/anfang-guanwang` | 官网 Vite + 文案 |
| **本仓** | `van7171/anfang-quanju-zhihui` | 本 README、`AGENT-COMMANDER`、路由 |

父级索引：[`../README.md`](../README.md)。

## 技能与规则

| 层级 | 路径 |
|------|------|
| 人读入口 | [`AGENT-COMMANDER.md`](AGENT-COMMANDER.md) |
| Agent 约定 | [`CLAUDE.md`](CLAUDE.md) |
| Cursor 规则 | [`.cursor/rules/`](.cursor/rules/) |
| **技能物理路径** | `F:\C\git\.cursor\skills\`（本仓 **不** git 跟踪 `skills/`） |
| 优先级 | [`docs/SKILLS-PRIORITY.md`](docs/SKILLS-PRIORITY.md) |
| 路由全文 | [`docs/agent/agent-skills-routing.md`](docs/agent/agent-skills-routing.md) |

## 远程

```text
https://github.com/van7171/anfang-quanju-zhihui.git
```

（由原 `My-Git` 收窄；推送前请在 GitHub 创建空仓库。）
