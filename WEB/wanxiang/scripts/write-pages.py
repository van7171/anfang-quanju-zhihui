# -*- coding: utf-8 -*-
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "pages"
D = "d" + "iv"
O, C = f"<{D}", f"</{D}>"


def write(name: str, content: str) -> None:
    content = content.replace("motion" + "-bg", D)
    (ROOT / name).write_text(content, encoding="utf-8")
    print(name, "OK")


GENERIC = f"""import type {{ ReactNode }} from 'react';
import {{ Link }} from 'react-router-dom';
import PageHero from '../components/PageHero';
import './GenericContentPage.css';

type Props = {{
  title: string;
  subtitle?: string;
  badge?: string;
  points?: string[];
  pains?: string[];
  features?: string[];
  value?: string;
  ctaLabel?: string;
  children?: ReactNode;
}};

export default function GenericContentPage({{
  title,
  subtitle,
  badge,
  points,
  pains,
  features,
  value,
  ctaLabel = '预约交流',
  children,
}}: Props) {{
  return (
    <>
      <PageHero title={{title}} subtitle={{subtitle}} badge={{badge}} />
      <section className="section">
        {O} className="container content-grid">
          {{pains && pains.length > 0 ? (
            {O} className="glass content-block">
              <h3>客户痛点</h3>
              <ul>
                {{pains.map((p) => (
                  <li key={{p}}>{{p}}</li>
                ))}}
              </ul>
            {C}
          ) : null}}
          {{features && features.length > 0 ? (
            {O} className="glass content-block">
              <h3>核心功能</h3>
              <ul>
                {{features.map((p) => (
                  <li key={{p}}>{{p}}</li>
                ))}}
              </ul>
            {C}
          ) : null}}
          {{points && points.length > 0 ? (
            {O} className="glass content-block">
              <h3>核心要点</h3>
              <ul>
                {{points.map((p) => (
                  <li key={{p}}>{{p}}</li>
                ))}}
              </ul>
            {C}
          ) : null}}
          {{value ? (
            {O} className="glass content-block value-block">
              <h3>价值指标 / 主张</h3>
              <p>{{value}}</p>
              <p className="footnote">* 以合同约定及项目验收为准。</p>
            {C}
          ) : null}}
          {{children}}
          {O} className="content-cta">
            <Link to="/contact" className="btn btn-primary">
              {{ctaLabel}}
            </Link>
            <Link to="/" className="btn btn-ghost">
              返回首页
            </Link>
          {C}
        {C}
      </section>
    </>
  );
}}
"""

ABOUT = f"""import {{ Link }} from 'react-router-dom';
import PageHero from '../components/PageHero';
import {{ aboutPoints, company }} from '../data/siteCopy';

export default function AboutPage() {{
  return (
    <>
      <PageHero
        badge="关于我们"
        title="关于新万相智能科技"
        subtitle={{company.name}}
      />
      <section className="section">
        {O} className="container content-grid">
          {O} className="glass content-block">
            <h3>公司简介</h3>
            <p>{{aboutPoints.intro}}</p>
          {C}
          {O} className="glass content-block">
            <h3>创始人与团队</h3>
            <ul>
              {{aboutPoints.team.map((t) => (
                <li key={{t}}>{{t}}</li>
              ))}}
            </ul>
          {C}
          {O} className="glass content-block">
            <h3>愿景与地域</h3>
            <ul>
              {{aboutPoints.vision.map((v) => (
                <li key={{v}}>{{v}}</li>
              ))}}
            </ul>
          {C}
          {O} className="glass content-block">
            <h3>资质与荣誉</h3>
            <p>{{aboutPoints.honors}}</p>
          {C}
          {O} className="glass content-block">
            <h3>合作伙伴</h3>
            <p>{{aboutPoints.partners}}</p>
          {C}
          {O} className="content-cta">
            <Link to="/contact" className="btn btn-primary">
              联系我们
            </Link>
            <Link to="/" className="btn btn-ghost">
              返回首页
            </Link>
          {C}
        {C}
      </section>
    </>
  );
}}
"""

PLATFORM = f"""import {{ Link }} from 'react-router-dom';
import {{ deliverySteps, maturityLevels, platformSop, statsFootnote }} from '../data/siteCopy';
import PageHero from '../components/PageHero';
import './PlatformPage.css';

export default function PlatformPage() {{
  return (
    <>
      <PageHero
        badge="平台与方法论"
        title="闭环成熟度 · 从 L1 到 L4"
        subtitle="用可度量的成熟度模型与五步法交付，让 AI 项目可验收、可复制。"
      />
      <section className="section">
        {O} className="container platform-grid">
          {O} className="glass platform-block">
            <h3>成熟度等级</h3>
            {{maturityLevels.map((l) => (
              {O} key={{l.level}} className="level-row">
                <span className="level-badge">{{l.level}}</span>
                {O}>
                  <strong>{{l.name}}</strong>
                  <p>{{l.desc}}</p>
                  <p className="level-detail">{{l.detail}}</p>
                {C}
              {C}
            ))}}
          {C}
          {O} className="glass platform-block">
            <h3>交付五步法</h3>
            <ol className="steps">
              {{deliverySteps.map((s, i) => (
                <li key={{s.step}}>
                  <span>{{i + 1}}</span>
                  {O}>
                    <strong>{{s.step}}</strong>
                    <p>{{s.desc}}</p>
                  {C}
                </li>
              ))}}
            </ol>
          {C}
        {C}
      </section>
      <section className="section">
        {O} className="container glass platform-sop">
          <h3>数字资产与 SOP</h3>
          <ul>
            {{platformSop.map((item) => (
              <li key={{item}}>{{item}}</li>
            ))}}
          </ul>
          <p className="footnote">
            依托连云港 OPC 资源，为园区客户提供弹性算力与联合孵化【需用户替换：合作机构名称】。
          </p>
          <p className="footnote">{{statsFootnote}}</p>
          <Link to="/contact" className="btn btn-primary">
            预约成熟度诊断
          </Link>
        {C}
      </section>
    </>
  );
}}
"""

# HomePage and LinkSkyPage are large - write from file template
HOMEPAGE_PATH = Path(__file__).parent / "HomePage.template.tsx"
LINKSKY_PATH = Path(__file__).parent / "LinkSkyPage.template.tsx"

if __name__ == "__main__":
    write("GenericContentPage.tsx", GENERIC)
    write("AboutPage.tsx", ABOUT)
    write("PlatformPage.tsx", PLATFORM)
    for tpl, out in [
        (HOMEPAGE_PATH, "HomePage.tsx"),
        (LINKSKY_PATH, "LinkSkyPage.tsx"),
    ]:
        if tpl.exists():
            write(out, tpl.read_text(encoding="utf-8"))
