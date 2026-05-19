import { useState } from 'react';
import { Link } from 'react-router-dom';
import KpiCard from '../components/KpiCard';
import {
  capabilities,
  company,
  ctaBand,
  deliverySteps,
  hero,
  heroStats,
  insights,
  linkSky,
  linkSkyPainPoints,
  maturityLevels,
  mockCases,
  serviceTiles,
  solutionTabs,
  statsFootnote,
} from '../data/siteCopy';
import './HomePage.css';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = solutionTabs[activeTab];

  return (
    <>
      <section className="hero">
        <div className="hero-bg-orb hero-bg-orb--1" aria-hidden />
        <div className="hero-bg-orb hero-bg-orb--2" aria-hidden />
        <div className="container hero-grid">
          <div className="hero-copy fade-in">
            <span className="tag">选项 C · 能力 + 标杆产品</span>
            <h1>
              企业级 <span className="gradient-text">AI 系统集成</span>
              <br />
              与闭环智能体工作流
            </h1>
            <p className="hero-lead">{hero.lead}</p>
            <p className="hero-en">{company.taglineEn}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {hero.ctaPrimary}
              </Link>
              <Link to="/products/link-sky" className="btn btn-ghost">
                {hero.ctaSecondary}
              </Link>
            </div>
            <p className="hero-meta">
              {company.name} — {company.heroTag}
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-stack">
              {heroStats.slice(0, 2).map((s, i) => (
                <KpiCard key={s.label} {...s} delay={i * 120} large />
              ))}
            </div>
            <div className="hero-stack offset">
              {heroStats.slice(2).map((s, i) => (
                <KpiCard key={s.label} {...s} delay={240 + i * 120} />
              ))}
            </div>
            <div className="hero-glow" aria-hidden />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2>{hero.missionTitle}</h2>
            <p>{hero.missionBody}</p>
          </header>
          <div className="kpi-strip">
            {heroStats.map((s, i) => (
              <KpiCard key={s.label} {...s} delay={i * 80} />
            ))}
          </div>
          <p className="footnote">{statsFootnote}</p>
        </div>
      </section>

      <section className="section solutions-section">
        <div className="container">
          <header className="section-head center">
            <h2>场景化解决方案</h2>
            <p>收窄场景、做深闭环 — 从校园治理到园区低空安防，再到政企工单与数字资产治理。</p>
          </header>
          <div className="tab-shell glass">
            <div className="tab-pills" role="tablist">
              {solutionTabs.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeTab}
                  className={i === activeTab ? 'pill active' : 'pill'}
                  onClick={() => setActiveTab(i)}
                >
                  {t.tab}
                </button>
              ))}
            </div>
            <article className="tab-body fade-in" key={tab.id}>
              <div className="tab-body-grid">
                <div>
                  <h3>{tab.title}</h3>
                  <p>{tab.body}</p>
                  <p className="tab-kw">{tab.keywords}</p>
                  <Link to={tab.href} className="btn btn-ghost">
                    {tab.cta} →
                  </Link>
                </div>
                <div className="tab-visual glass-glow" aria-hidden>
                  <span className="tab-visual-label">{tab.tab}</span>
                  <div className="tab-visual-bars">
                    {[72, 48, 88, 56].map((h, j) => (
                      <span key={j} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2>核心能力</h2>
            <p>同一套架构，既驱动 Link-Sky 标杆产品，也支撑您的专属业务流程闭环。</p>
          </header>
          <div className="cap-grid">
            {capabilities.map((c, i) => (
              <Link
                key={c.slug}
                to={`/capabilities/${c.slug}`}
                className="cap-card glass glass-glow fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="cap-index">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="cap-more">{c.link} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section linksky-section">
        <div className="container linksky-layout">
          <div className="linksky-copy">
            <span className="tag">{linkSky.badge}</span>
            <h2 className="gradient-text">{linkSky.title}</h2>
            <p>{linkSky.subtitle}</p>
            <p className="arch-line">{linkSky.arch}</p>
            <div className="hero-actions">
              <Link to="/products/link-sky" className="btn btn-primary">
                进入 Link-Sky 产品页
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                预约连云港示范参观
              </Link>
            </div>
          </div>
          <div className="pain-mosaic">
            {linkSkyPainPoints.map((p, i) => (
              <div
                key={p.title}
                className="pain-tile glass fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container method-grid">
          <div className="method-col glass">
            <h3>闭环成熟度 L1–L4</h3>
            <ul className="level-list">
              {maturityLevels.map((l) => (
                <li key={l.level}>
                  <strong>{l.level}</strong> {l.name} — {l.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="method-col glass">
            <h3>交付五步法</h3>
            <ol className="step-list">
              {deliverySteps.map((s) => (
                <li key={s.step}>
                  <strong>{s.step}</strong> — {s.desc}
                </li>
              ))}
            </ol>
            <Link to="/platform" className="btn btn-ghost">
              预约 L 级成熟度诊断
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2>案例与洞察</h2>
          </header>
          <div className="case-grid">
            {mockCases.map((c) => (
              <article key={c.slug} className="case-card glass glass-glow">
                {c.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <Link to={c.href}>查看案例 →</Link>
              </article>
            ))}
          </div>
          <ul className="insight-list glass">
            {insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/cases" className="btn btn-ghost insight-more">
            更多案例与新闻 →
          </Link>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner glass glass-glow">
          <h2>{ctaBand.title}</h2>
          <p className="cta-lead">{ctaBand.body}</p>
          <div className="cta-tiles">
            {serviceTiles.map((s) => (
              <div key={s.title}>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary">
            {ctaBand.button}
          </Link>
        </div>
      </section>
    </>
  );
}
