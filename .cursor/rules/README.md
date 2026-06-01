# 全局 Cursor 规则（`F:\C\git\.cursor\rules`）

| 文件 | 作用 |
|------|------|
| `00-agent-commander.mdc` | **总指挥**（`alwaysApply: true`）；细则见 [`docs/agent/agent-skills-routing.md`](../../docs/agent/agent-skills-routing.md) |

**子仓库** `.cursor/rules`：**不再**放置 commander 指针；仅 **领域红线**（如 n8n [`01-baoxiu-wecom-redline.mdc`](../../../安防-n8n运维/.cursor/rules/01-baoxiu-wecom-redline.mdc)）。

只开子仓时：将本目录同步到用户级 → `Copy-Item -Force "F:\C\git\.cursor\rules\*.mdc" "$env:USERPROFILE\.cursor\rules\"`

详见 [`docs/SKILLS-PRIORITY.md`](../../docs/SKILLS-PRIORITY.md)。
