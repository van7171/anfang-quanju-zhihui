# 四仓备份到 GitHub 实操指南

> **调查日期**：2026-05-19 · **结构**：见 [`../../STRUCTURE.md`](../../STRUCTURE.md)  
> **当前推荐**：方案 B — 四个独立仓库（见下表），**不要**再在 `F:\C\git` 根建 monorepo。  
> 本机 **gh** 若不可用，用网页创建空仓库后 `git push`。

### 四仓与远程（目标态）

| 本地目录 | GitHub remote |
|----------|----------------|
| `安防开发总仓/安防-n8n运维` | `van7171/n8n-fix` |
| `安防开发总仓/安防-专利` | `van7171/anfang-zhuanli` |
| `安防开发总仓/安防-官网` | `van7171/anfang-guanwang` |
| `安防开发总仓/安防-全局指挥` | `van7171/anfang-quanju-zhihui` |

技能树 **`F:\C\git\.cursor\skills`** 不进 Git；用 `robocopy` 同步到 `%USERPROFILE%\.cursor\skills`。

---

## 1. 历史调查时的 Git 状态（2026-05-19 上午，部分已过时）

> 下列为迁移前快照；**以四仓各自 `git status` 为准。**

| 路径 | 是否 Git 仓库 | 分支 | `git remote -v` | 说明 |
|------|---------------|------|-----------------|------|
| `F:\C\git` | 是 | `main`（约 2 次提交） | **无 remote** | 已跟踪 `docs/`、`WEB/` 等；`安防-n8n运维/`、`安防开发总仓（已拆四仓）/`、`安防-专利/` 在根 `status` 中为 **未跟踪 `??`**（子目录自带 `.git`） |
| `F:\C\git\安防开发总仓\安防-n8n运维` | 是 | `main` | `origin` → `https://github.com/van7171/n8n-fix.git` | 有大量本地未提交改动；与 `origin/main` 同步关系需自行 `commit` 后再 `push` |
| `F:\C\git\安防开发总仓（已拆四仓）` | 是 | `master`（**尚无首次 commit**） | **无 remote** | 已 `git add` 大量专利/任务书 PDF；对象约 **96 MiB** |
| `F:\C\git\安防开发总仓\安防-专利` | 联结（Junction） | — | — | 指向 `F:\C\git\安防开发总仓（已拆四仓）`；**不要**在根仓库里再单独提交一份 |
| `F:\C\git\WEB` | 否（无独立 `.git`） | — | — | 属于 **根仓库** 的一部分 |

**磁盘粗算（含未跟踪文件）**：整棵 `F:\C\git` 约 **270 MB**；其中 `安防开发总仓（已拆四仓）` 约 **117 MB**，`n8n-fix` 约 **84 MB**，`WEB` 约 **68 MB**。

**`gh`**：PowerShell 中 `gh` 命令不可用；安装后运行 `gh auth login` / `gh auth status`。

---

## 2. 三种方案对比

| 方案 | 做法 | 适合「总目录备份」？ | 优点 | 缺点 |
|------|------|---------------------|------|------|
| **A. 根目录单 monorepo** | 只在 `F:\C\git` 一个仓库 | 名义上最像「一整盘备份」 | 一个 URL 拉全树 | 必须先处理 **嵌套 `.git`**（见下）；`n8n-fix` 已有独立历史，合并麻烦 |
| **B. 多仓库（推荐）** | 根 + `n8n-fix` + `安防开发总仓（已拆四仓）` 各一个 GitHub 仓 | **是（工程上最稳）** | 与现状一致；权限/体积可分开；`n8n-fix` 已上线 | 克隆时要拉 3 个仓；需在 README 里写清单 |
| **C. Monorepo + submodule** | 根仓把子项目当 submodule | 可以 | 版本钉死、结构清晰 | 初学成本高；每次子仓改完还要在根仓 bump 指针 |

### 推荐结论：**方案 B（多仓库）+ 根仓命名清晰**

原因简要：

1. 根仓 **已有** `docs/`、`WEB/` 历史，但 **没有** remote。  
2. `n8n-fix` **已有** `van7171/n8n-fix`，不宜为「总备份」强行删掉子 `.git` 合并进根仓（会丢独立 issue/PR 习惯）。  
3. `安防开发总仓（已拆四仓）` 已暂存 **近百 MB** PDF，适合 **独立私有仓**，并在 `.gitignore` 里控制 PDF（见第 4 节）。  
4. `anfang-patent` 只是联结，**只推 `安防开发总仓（已拆四仓）` 一次即可**。

若你坚持「一个 GitHub 仓库里看见所有文件夹」，再考虑 **方案 A**，但必须按第 5.2 节处理嵌套仓库（或改方案 C）。

---

## 3. 不应提交到 GitHub 的内容

### 3.1 通用（所有仓库）

| 类型 | 示例 | 处理 |
|------|------|------|
| 密钥 / Token | `.env`、`credentials.json`、**`.cursor/mcp.json`**（n8n-fix 下若存在） | 写入 `.gitignore`；已误提交需轮换密钥并用 `git filter-repo` 等清理历史 |
| 依赖目录 | `node_modules/` | 忽略；用 lock 文件重建 |
| 会话临时 | `tmp/`、`.claude/projects/` 等 | `n8n-fix/.gitignore` 已含部分规则 |
| IDE/OS 垃圾 | `.vscode/`、`.idea/`、`Thumbs.db` | 忽略 |

### 3.2 各项目已有 `.gitignore` 要点

- **`n8n-fix/.gitignore`**：`.cursor/mcp.json`、`tmp/`、`.claude/...`  
- **`安防开发总仓（已拆四仓）/.gitignore`**：`tmp/`、`patent/bundle/PDF电子版/*.pdf`、`web/WEB-wanxiang/node_modules/`、`dist/`  

### 3.3 大文件与 GitHub 限制

- 单文件 **> 100 MB**：普通 `git push` 会被拒绝；需 [Git LFS](https://git-lfs.github.com/) 或改存网盘/Release。  
- 仓库总大小建议长期 **< 1 GB**（免费账户软限制）；大量 PDF 任务书会使 clone 很慢。  
- **建议**：专利 PDF 电子版优先走「网盘 + 仓库只留 Markdown/脚本」；若必须版本管理，用 **私有仓 + LFS**。

---

## 4. 推荐执行步骤（方案 B）— 仅文档，需你回复 `go` 再执行

### 4.0 准备

```powershell
# 安装 GitHub CLI（任选其一）
winget install --id GitHub.cli
# 安装后新开终端：
gh auth login
gh auth status
```

### 4.1 仓库一：`n8n-fix`（已有远程）

```powershell
cd F:\C\git\安防开发总仓\安防-n8n运维

# 确认不会提交密钥
git status
# 若 .cursor/mcp.json 被跟踪：git rm --cached .cursor/mcp.json

git add -A
git commit --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" -m "docs: 重组目录与忽略专利原件迁移"
# 你明确 go 之后：
git push origin main
```

### 4.2 仓库二：`安防开发总仓（已拆四仓）`（新建远程）

```powershell
cd F:\C\git\安防开发总仓（已拆四仓）

# 建议先核对暂存区是否含巨型 PDF
git status

# 若希望 PDF 不进 Git，先取消暂存并依赖 .gitignore：
# git reset HEAD patent/bundle/PDF电子版/

git commit --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" -m "chore: 初始导入专利与任务书（web 子项目）"

# 你明确 go 之后（示例仓库名，请改成你的）：
gh repo create van7171/安防开发总仓（已拆四仓） --private --source=. --remote=origin
git push -u origin master
# 若希望默认分支叫 main：
# git branch -M main
# git push -u origin main
```

**不要**对 `F:\C\git\安防开发总仓\安防-专利` 再建第三个远程；它只是联结。

### 4.3 仓库三：根目录 `F:\C\git`（工作区 + WEB + 全局 docs）

```powershell
cd F:\C\git

# 确认：不要 git add n8n-fix 或 安防开发总仓（已拆四仓） 整个目录（除非已改为 submodule）
git status

# 建议新增根 .gitignore（见第 6 节模板）
git add docs WEB .cursor/rules AGENT-COMMANDER.md CLAUDE.md README.md .gitattributes
git add -u
git commit --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" -m "chore: 根工作区文档与 WEB 站点"

# 你明确 go 之后：
gh repo create van7171/git-workspace --private --source=. --remote=origin
git push -u origin main
```

在根 `README.md` 中维护「子仓库清单」：

```markdown
## 子项目 Git 仓库
- n8n-fix → https://github.com/van7171/n8n-fix
- 安防开发总仓（已拆四仓） → https://github.com/van7171/安防开发总仓（已拆四仓）（创建后填写）
- 本仓 → 全局 docs、WEB/wanxiang、Cursor 规则指针
```

### 4.4 日常备份节奏

| 改了哪里 | 操作 |
|----------|------|
| 只改 n8n 文档/脚本 | `cd n8n-fix` → commit → push |
| 专利/任务书/专利 web | `cd 安防开发总仓（已拆四仓）` → commit → push |
| 万象官网、全局 agent 文档 | `cd F:\C\git` → commit → push |

可选：用 `tools/git-sync/` 或自建脚本依次 `git -C ... pull/push`（勿把 token 写进脚本）。

---

## 5. 若坚持方案 A（单 monorepo）

**嵌套仓库问题**：父仓库 `git add n8n-fix` 默认 **不会** 导入子目录内文件，只会看到未跟踪目录或误操作。

可选路径（二选一）：

1. **删除子目录 `.git` 后并入根仓**（会丢失子仓独立 GitHub 历史关联，仅保留文件快照）— 仅当你确认不再需要 `van7171/n8n-fix` 独立仓时。  
2. **保留子 `.git`，根仓用 submodule**（方案 C）：

```powershell
cd F:\C\git
git submodule add https://github.com/van7171/n8n-fix.git n8n-fix
git submodule add https://github.com/van7171/安防开发总仓（已拆四仓）.git 安防开发总仓（已拆四仓）
# 不要 submodule add anfang-patent（联结）
```

首次克隆的人需：`git clone --recurse-submodules ...`。

---

## 6. 建议的根目录 `.gitignore` 模板

在 `F:\C\git\.gitignore` 新建（根仓尚无此文件时）：

```gitignore
# 子项目由各自仓库管理；避免误把整个嵌套仓 add 进来
/n8n-fix/
/安防开发总仓（已拆四仓）/
/安防-专利/

# Cursor / 本地 MCP
.cursor/mcp.json

# Node
**/node_modules/
**/dist/

# 临时
tmp/
**/.tmp/
*.log

# OS / IDE
Thumbs.db
desktop.ini
.vscode/
.idea/
```

说明：根仓 **故意忽略** 两个子目录，由方案 B 分别推送；`WEB/` 与 `docs/` 由根仓跟踪。

---

## 7. 推送前自检清单

- [ ] `git grep -i password` / 搜索 `api_key`、`token` 无意外命中  
- [ ] `.cursor/mcp.json` 未出现在 `git ls-files`  
- [ ] `git count-objects -vH` 体积可接受（尤其 安防开发总仓（已拆四仓））  
- [ ] 私有仓：`Settings → Danger Zone` 确认未误开公开  
- [ ] 大 PDF：是否改 LFS 或移出 Git  

---

## 8. 故障排除

| 现象 | 处理 |
|------|------|
| `gh` 不是内部命令 | 安装 GitHub CLI 并重启终端 |
| `push` 拒绝大文件 | LFS 或从提交中移除该文件 |
| 根仓 add 了子项目但 GitHub 上是空的 | 子目录有 `.git`；改用方案 B 或 submodule |
| 联结 `anfang-patent` 显示异常 | 只操作 `安防开发总仓（已拆四仓）` 路径 |

---

## 9. 与你确认后再做

请回复例如：**`go 方案B`** 或 **`go 只推 n8n-fix`**，再执行 `commit` / `gh repo create` / `push`。  
若希望改为 **单 monorepo**，请明确是否保留 `van7171/n8n-fix` 独立仓库历史。
