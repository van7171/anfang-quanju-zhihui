# 四仓 Git Remote 参考

> 探测时间：2026-05-19 · 代理：`http://127.0.0.1:3067`（仅 `-c http.proxy` / `-c https.proxy`，不改全局 git config）

## 一览表

| 本地目录 | 默认分支 | 当前 `origin` | 应有 `origin` | `ls-remote`（经代理） | 本地跟踪 |
|----------|----------|---------------|---------------|----------------------|----------|
| `安防-全局指挥` | `main` | `https://github.com/van7171/anfang-quanju-zhihui.git` | 同上 | **失败** Repository not found | `main` → `origin/main`，**领先 6 提交** |
| `安防-n8n运维` | `main` | `https://github.com/van7171/n8n-fix.git` | 同上 | **成功** | `main` → `origin/main`，已同步 |
| `安防-专利` | `master` | `https://github.com/van7171/anfang-zhuanli.git` | 同上 | **失败** Repository not found | `master`，**未设 upstream** |
| `安防-官网` | `master` | `https://github.com/van7171/anfang-guanwang.git` | 同上 | **失败** Repository not found | `master`，**未设 upstream** |

**结论**：三仓 URL 已与下表一致，但 GitHub 上可能尚未创建仓库、仓库为私有且当前凭据无权限，或仓库在别的 `OWNER` 名下。`n8n-fix` 可正常读写。

---

## 应有 Remote（van7171）

| 仓 | URL | 推送分支 |
|----|-----|----------|
| 全局指挥 | `https://github.com/van7171/anfang-quanju-zhihui.git` | `main` |
| n8n 运维 | `https://github.com/van7171/n8n-fix.git` | `main` |
| 专利 | `https://github.com/van7171/anfang-zhuanli.git` | `master` |
| 官网 | `https://github.com/van7171/anfang-guanwang.git` | `master` |

---

## 修正 URL（仓库在别的 GitHub 账号/组织时）

在对应仓目录执行（将 `OWNER`、`REPO` 换成实际值）：

```powershell
cd F:\C\git\安防开发总仓\安防-全局指挥   # 或另外三仓之一
git remote set-url origin https://github.com/OWNER/REPO.git
```

四仓标准 set-url（URL 已正确时可跳过）：

```powershell
# 全局指挥
cd F:\C\git\安防开发总仓\安防-全局指挥
git remote set-url origin https://github.com/van7171/anfang-quanju-zhihui.git

# n8n 运维
cd F:\C\git\安防开发总仓\安防-n8n运维
git remote set-url origin https://github.com/van7171/n8n-fix.git

# 专利
cd F:\C\git\安防开发总仓\安防-专利
git remote set-url origin https://github.com/van7171/anfang-zhuanli.git

# 官网
cd F:\C\git\安防开发总仓\安防-官网
git remote set-url origin https://github.com/van7171/anfang-guanwang.git
```

---

## 首次推送 / 设 upstream（经代理，不 force）

```powershell
$proxy = "http://127.0.0.1:3067"

# 全局指挥（main，当前领先 origin 6 提交）
cd F:\C\git\安防开发总仓\安防-全局指挥
git -c http.proxy=$proxy -c https.proxy=$proxy push -u origin main

# n8n 运维（已与 origin 同步，一般无需推）
cd F:\C\git\安防开发总仓\安防-n8n运维
git -c http.proxy=$proxy -c https.proxy=$proxy push -u origin main

# 专利
cd F:\C\git\安防开发总仓\安防-专利
git -c http.proxy=$proxy -c https.proxy=$proxy push -u origin master

# 官网
cd F:\C\git\安防开发总仓\安防-官网
git -c http.proxy=$proxy -c https.proxy=$proxy push -u origin master
```

---

## 连通性自检

```powershell
$proxy = "http://127.0.0.1:3067"
cd F:\C\git\安防开发总仓\安防-全局指挥   # 换成目标仓
git -c http.proxy=$proxy -c https.proxy=$proxy ls-remote origin HEAD
```

成功时输出一行 commit hash；`Repository not found` 表示远程不存在或当前账号无权访问。

---

## 2026-05-19 推送探测结果

| 仓 | `git push -u origin <branch>`（经代理） |
|----|----------------------------------------|
| 全局指挥 | **失败** — Repository not found |
| 专利 | **失败** — Repository not found |
| 官网 | **失败** — Repository not found |
| n8n 运维 | 未重推（已与 `origin/main` 一致；`ls-remote` 正常） |

**建议**：在 GitHub（van7171 或你的 OWNER）上创建缺失的三个空仓库（名称与上表一致），或 `git remote set-url` 指向已有仓库后，再执行上节 push。勿使用 `git push --force`。
