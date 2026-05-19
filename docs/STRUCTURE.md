# 安防开发总仓 · 目录层级

```
F:\C\git\                          ← 工作区根（技能树，非 Git 仓）
├── .cursor\skills\                ← Agent 技能主副本（robocopy 到 %USERPROFILE%）
├── .cursor\rules\                 ← 总指挥规则（alwaysApply）
├── README.md                      ← 根索引 → 本总仓
├── scripts\                       ← 跨仓脚本（如删遗留目录）
└── 安防开发总仓\                  ← 四仓聚合（本文件所在）
    ├── README.md                  ← 四仓一览与推送命令
    ├── STRUCTURE.md               ← 本文件
    ├── 安防-n8n运维\              ← Git → van7171/n8n-fix
    │   ├── CLAUDE.md · N8N_SPEC.md
    │   ├── docs\n8n\              ← 运维手册（权威）
    │   ├── docs\n8n-global\      ← N8N_SPEC 副本、公众号 playbook
    │   ├── docs\project-docs\     ← 安防总项目编排
    │   ├── docs\schemas\          ← JSON 契约
    │   └── scripts\               ← n8n 补丁 .mjs
    ├── 安防-专利\                 ← Git → van7171/anfang-zhuanli
    │   ├── patent\                ← 五书 / 交底 / bundle
    │   ├── taskbooks\             ← 任务书 PDF 原件
    │   └── tools\patent\
    ├── 安防-官网\                 ← Git → van7171/anfang-guanwang
    │   ├── 01-08 文案\
    │   └── web\
    │       ├── WEB-wanxiang\      ← 主站 Vite
    │       ├── h5\
    │       └── 校园低空安防VUE开发\
    └── 安防-全局指挥\             ← Git → van7171/anfang-quanju-zhihui
        ├── AGENT-COMMANDER.md · CLAUDE.md
        └── docs\
            ├── agent\             ← 技能路由（权威）
            ├── SKILLS-PRIORITY.md
            ├── CURSOR-TOTAL-GUIDE.md
            ├── BACKUP-TO-GITHUB.md
            └── n8n-global\       ← 仅重定向 → 安防-n8n运维
```

## Cursor 打开建议

| 任务 | 打开目录 |
|------|----------|
| n8n 巡检 / 改流 / Schema | `安防-n8n运维` |
| 专利 / 任务书 PDF | `安防-专利` |
| 企业官网 | `安防-官网` → `web/WEB-wanxiang` |
| 调 Agent 规则 | `安防-全局指挥` 或根 `F:\C\git`（含 `.cursor`） |

## 禁止再用的路径

- `F:\C\git\n8n-fix`（已迁空，待删）
- `F:\C\git\WEB`（`wanxiang` 副本，与官网仓重复）
- `F:\C\git\docs`（已并入全局指挥仓）
