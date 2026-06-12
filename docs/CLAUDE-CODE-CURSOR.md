# Claude Code × Cursor 双轨指南

> **升格细则（最高优先级）**：[`WHEN-TO-USE-CLAUDE-CODE.md`](WHEN-TO-USE-CLAUDE-CODE.md) — `plan` / `cc:` / 复杂难搞（架构·高难度网页·PPT 等）必调；卡住先问用户。本文侧重 **安装与 MCP**。

**口诀**：小改 Cursor；**`plan` / `cc:` / 复杂难搞 = Claude Code**。

| 工具 | 入口 | 计费（混合） |
|------|------|----------------|
| **Cursor Agent** | Chat / Agent 面板 | Cursor 订阅 |
| **Claude Code** | 集成终端 `claude` 或扩展侧栏 | Anthropic API / OAuth |

人读总指挥仍见 [`AGENT-COMMANDER.md`](../AGENT-COMMANDER.md)；防幻觉见 [`F:\C\git\RATIONAL-AGENT.md`](../../../RATIONAL-AGENT.md)。

---

## 1. 一次性安装（Windows）

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File F:\C\git\scripts\ensure-claude-code.ps1
```

或手动：

```powershell
npm install -g @anthropic-ai/claude-code
claude --version
```

**认证**（复杂任务）：在交互式 `claude` 中按提示配置，或 [Anthropic Console](https://console.anthropic.com/) 创建 Key。**勿**将 Key 写入 Git；可放用户环境变量或 `安防-服务器/secrets/.env`（本地 gitignore）。

---

## 2. 在 Cursor 里接通（无感习惯）

1. 打开工作区根 **`F:\C\git`**（或子仓目录）。
2. **`Ctrl+``** 打开**集成终端**（不要用外部 PowerShell，否则 `/ide` 常失败）。
3. 执行：

   ```bash
   claude
   ```

4. 会话内输入 **`/ide`**，应识别 **Cursor**。

### 扩展（可选）

- 扩展 ID：`anthropic.claude-code`
- 安装失败（网络/TLS）时：**仅用 CLI 即可**，不必强装扩展。
- 手动 VSIX（若包内存在 `vendor/claude-code.vsix`）：

  ```powershell
  cursor --install-extension "<npm-global>\@anthropic-ai\claude-code\vendor\claude-code.vsix"
  ```

- PATH：Cursor 内 `Ctrl+Shift+P` → **Shell Command: Install 'cursor' command in PATH**

### 已知问题

- Cursor 大版本升级后扩展偶发失效 → **终端 `claude` 为备用主路径**。
- `claude doctor` 会拉起 `.mcp.json` 中的 stdio 服务，**仅在可信目录**交互运行；自动化脚本中可能卡住。

---

## 3. 项目记忆（与 Cursor 对齐）

| 文件 | 作用 |
|------|------|
| [`F:\C\git\CLAUDE.md`](../../../CLAUDE.md) | Claude Code **根入口** |
| [`RATIONAL-AGENT.md`](../../../RATIONAL-AGENT.md) | 防幻觉、文档预算 |
| [`CLAUDE.md`](../CLAUDE.md) | 四仓索引 |
| 子仓 `CLAUDE.md` | 进入子目录时叠加 |
| [`.cursor/rules`](../../../.cursor/rules) | **仅 Cursor** alwaysApply；Claude Code 不自动读 mdc |

复杂任务开头可粘贴：

```text
遵守 RATIONAL-AGENT.md 与 安防-n8n运维/CLAUDE.md 红线；先 plan 再执行；无证据不下结论。
```

速记 **`plan` / `go` / `fix`** 在两套 Agent 中语义相同（见 [`agent-skills-routing.md`](agent/agent-skills-routing.md)）。

技能磁盘路径（按需 Read）：`F:\C\git\.cursor\skills\`

---

## 4. 路由表（何时用谁）

| 场景 | 用谁 |
|------|------|
| 改 1～3 文件、解释、lint | Cursor |
| n8n 巡检 / 改流（红线 + 备份钩子） | Cursor + 必读 [`n8n-mcp-workflow-guide.md`](../../安防-n8n运维/docs/n8n/n8n-mcp-workflow-guide.md) |
| 多仓迁移、部署编排、架构重构、>30min 自主任务 | **`claude`** |
| 1Panel 部署 | Cursor `plan` 出步骤；执行可 `cd 安防开发总仓/安防-服务器` 再 `claude` |

子仓示例：

```bash
cd F:/C/git/安防开发总仓/安防-服务器
claude
```

---

## 5. MCP（Claude Code 与 Cursor 分开配）

| 配置 | 位置 | 说明 |
|------|------|------|
| **Cursor MCP** | 用户/项目 `mcp.json`（Cursor 设置） | 见 Cursor 文档 |
| **Claude Code MCP** | 项目根 [`.mcp.json.example`](../../../.mcp.json.example) → 复制为 `.mcp.json` | **勿提交含密钥的 `.mcp.json`** |

Hermes 远程范例（与 Cursor 范例同源思路）：[`安防-服务器/.cursor/mcp.hermes.example.json`](../../安防-服务器/.cursor/mcp.hermes.example.json)

---

## 6. 与 Hermes / n8n / Cursor SDK 的边界

| 组件 | 用途 |
|------|------|
| **Claude Code** | 本机改仓库、终端、长任务 |
| **Cursor SDK** | 脚本/CI 调 **Cursor Agent**，不是 Claude Code |
| **Hermes（1Panel）** | 服务器对话、消息网关 |
| **n8n** | 生产自动化；改流后走备份钩子 |

---

## 7. 快捷任务（Cursor Tasks）

工作区根 [`.vscode/tasks.json`](../../../.vscode/tasks.json) 含 **「Claude Code: 启动」**，绑定在集成终端执行 `claude`。

---

## 8. 验收清单

- [ ] `claude --version` 有输出
- [ ] Cursor **集成终端** 中 `claude` 可进入会话
- [ ] `/ide` 识别 Cursor（或接受纯 CLI 无 IDE 桥接）
- [ ] 根 [`CLAUDE.md`](../../../CLAUDE.md) 含双轨说明与 n8n 红线链接
- [ ] 无 API Key 提交到 Git
