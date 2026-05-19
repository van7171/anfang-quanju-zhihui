# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src"
D = "d" + "iv"
O = f"<{D}"
C = f"</{D}>"


def el(cls: str, inner: str, indent: str = "        ") -> str:
    return f"{indent}{O} className=\"{cls}\">\n{inner}\n{indent}{C}\n"


layout = f"""import {{ Link, NavLink, Outlet }} from 'react-router-dom';
import {{ company, contactInfo }} from '../data/siteCopy';
import './Layout.css';

const nav = [
  {{ to: '/', label: '首页', end: true }},
  {{ to: '/products/link-sky', label: 'Link-Sky' }},
  {{ to: '/solutions/campus', label: '解决方案' }},
  {{ to: '/capabilities/data-bus', label: '核心能力' }},
  {{ to: '/platform', label: '方法论' }},
  {{ to: '/cases', label: '案例' }},
  {{ to: '/about', label: '关于' }},
  {{ to: '/contact', label: '联系' }},
];

export default function Layout() {{
  return (
    {O} className="site-shell">
      <header className="site-header glass">
        {O} className="container header-row">
          <Link to="/" className="brand">
            <span className="brand-glyph" aria-hidden>
              万
            </span>
            <span>
              <strong>{{company.brand}}</strong>
              <em>闭环智能体 · Link-Sky</em>
            </span>
          </Link>
          <nav className="main-nav" aria-label="主导航">
            {{nav.map((item) => (
              <NavLink
                key={{item.to}}
                to={{item.to}}
                end={{item.end}}
                className={{({{ isActive }}) => (isActive ? 'nav-item active' : 'nav-item')}}
              >
                {{item.label}}
              </NavLink>
            ))}}
          </nav>
        {C}
      </header>
      <Outlet />
      <footer className="site-footer">
        {O} className="container footer-inner glass">
          {O}>
            <strong>{{company.name}}</strong>
            <p className="footer-en">{{company.taglineEn}}</p>
          {C}
          {O}>
            <p>地址：{{contactInfo.address}}</p>
            <p>电话：{{contactInfo.phone}}</p>
            <p>邮箱：{{contactInfo.email}}</p>
          {C}
          <p className="footnote">备案号：【需用户替换】</p>
        {C}
      </footer>
    {C}
  );
}}
"""

(ROOT / "components" / "Layout.tsx").write_text(layout, encoding="utf-8")
print("Layout OK")
