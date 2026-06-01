# 全局 Cursor 规则（`F:\C\git\.cursor\rules`）

| 文件 | 作用 |
|------|------|
| `00-agent-commander.mdc` | **总指挥**（`alwaysApply: true`）：每轮 Read using-superpowers + 路由 §0 |
| `00-agent-skills-routing.mdc` | **速记摘要**（`alwaysApply: false`）；全文见 `docs/agent/agent-skills-routing.md` |

子仓库（**安防-n8n运维**、**安防-专利**、**安防-官网**）内 `.cursor/rules` 仅为 **指针**；物理主本在 **`F:\C\git\.cursor\rules\`**。

同步到本机：`Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"`

详见 [`docs/SKILLS-PRIORITY.md`](../../docs/SKILLS-PRIORITY.md)。
