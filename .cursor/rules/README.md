# 全局 Cursor 规则（`F:\C\git\.cursor\rules`）

| 文件 | 作用 |
|------|------|
| `00-agent-commander.mdc` | **总指挥**（`alwaysApply: true`）：每轮 Read using-superpowers + 路由 §0 |
| `00-agent-skills-routing.mdc` | **速记摘要**（`alwaysApply: false`）；全文见 `docs/agent/agent-skills-routing.md` |

子仓库（`安防-n8n运维`、`anfang-patent`）内同名文件仅为 **指针**，以本目录为准。

同步到本机：`Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"`

详见 [`docs/SKILLS-PRIORITY.md`](../../docs/SKILLS-PRIORITY.md)。
