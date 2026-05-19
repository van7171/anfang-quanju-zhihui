# GitHub Desktop · 四仓推送步骤

**2026-05-19**：`van7171/n8n-fix`（安防-n8n运维）已通过 CLI 推送成功。  
以下三仓需在 GitHub **先建空私有仓库**，再 Publish / Push。

| 本地文件夹 | 建议 GitHub 仓库名 | 默认分支 |
|------------|-------------------|----------|
| `安防-全局指挥` | `anfang-quanju-zhihui` | `main` |
| `安防-专利` | `anfang-zhuanli` | `master` |
| `安防-官网` | `anfang-guanwang` | `master` |

## 1. 登录

打开 GitHub Desktop → **File → Options → Accounts**，确认已登录 `van7171`。

## 2. 添加本地仓库

对每个路径：**File → Add local repository**：

```
F:\C\git\安防开发总仓\安防-全局指挥
F:\C\git\安防开发总仓\安防-专利
F:\C\git\安防开发总仓\安防-官网
```

（`安防-n8n运维` 已推送，可选添加以便在 Desktop 里看历史。）

## 3. 首次发布（仓库尚不存在时）

选中仓库 → **Publish repository**：

- Owner：`van7171`
- Name：上表对应名（**勿**改拼写）
- 勾选 **Keep this code private**（推荐）
- 专利仓若含大 PDF，确认未超 GitHub 单文件 100MB 限制

## 4. 已存在远程时

若网页上已建好空仓：**Repository → Repository settings → Remote**，应为：

- `https://github.com/van7171/anfang-quanju-zhihui.git`
- `https://github.com/van7171/anfang-zhuanli.git`
- `https://github.com/van7171/anfang-guanwang.git`

然后 **Push origin**。

## 5. CLI 备用（Desktop 建仓后）

```powershell
git -C "F:\C\git\安防开发总仓\安防-全局指挥" push -u origin main
git -C "F:\C\git\安防开发总仓\安防-专利" push -u origin master
git -C "F:\C\git\安防开发总仓\安防-官网" push -u origin master
```

## 6. 不要用 Desktop 添加的路径

- `F:\C\git\n8n-fix`（已废弃）
- `F:\C\git\WEB`（重复副本）
- 整个 `F:\C\git` 根（无统一 remote，易误提交）

技能树仍在 `F:\C\git\.cursor\skills`，不进上述四仓 Git。
