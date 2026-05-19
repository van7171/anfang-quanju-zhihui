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
        <motion-bg className="hero-bg-orb hero-bg-orb--1" aria-hidden />
        <motion-bg className="hero-bg-orb hero-bg-orb--2" aria-hidden />
        <motion-bg className="container hero-grid">
          <motion-bg className="hero-copy fade-in">
            <span className="tag">{'\u9009\u9879 C \u00b7 \u80fd\u529b + \u6807\u6746\u4ea7\u54c1'}</span>
            <h1>
              {'\u4f01\u4e1a\u7ea7 '}<span className="gradient-text">{'AI \u7cfb\u7edf\u96c6\u6210'}</span>
              <br />
              {'\u4e0e\u95ed\u73af\u667a\u80fd\u4f53\u5de5\u4f5c\u6d41'}
            </h1>
            <p className="hero-lead">{hero.lead}</p>
            <p className="hero-en">{company.taglineEn}</p>
            <motion-bg className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {hero.ctaPrimary}
              </Link>
              <Link to="/products/link-sky" className="btn btn-ghost">
                {hero.ctaSecondary}
              </Link>
            </motion-bg>
            <p className="hero-meta">
              {company.name} {'\u2014 '} {company.heroTag}
            </p>
          </motion-bg>
          <motion-bg className="hero-visual">
            <motion-bg className="hero-stack">
              {heroStats.slice(0, 2).map((s, i) => (
                <KpiCard key={s.label} {...s} delay={i * 120} large />
              ))}
            </motion-bg>
            <motion-bg className="hero-stack offset">
              {heroStats.slice(2).map((s, i) => (
                <KpiCard key={s.label} {...s} delay={240 + i * 120} />
              ))}
            </motion-bg>
            <motion-bg className="hero-glow" aria-hidden />
          </motion-bg>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container">
          <header className="section-head">
            <h2>{hero.missionTitle}</h2>
            <p>{hero.missionBody}</p>
          </header>
          <motion-bg className="kpi-strip">
            {heroStats.map((s, i) => (
              <KpiCard key={s.label} {...s} delay={i * 80} />
            ))}
          </motion-bg>
          <p className="footnote">{statsFootnote}</p>
        </motion-bg>
      </section>

      <section className="section solutions-section">
        <motion-bg className="container">
          <header className="section-head center">
            <h2>{'\u573a\u666f\u5316\u89e3\u51b3\u65b9\u6848'}</h2>
            <p>{'\u6536\u7a84\u573a\u666f\u3001\u505a\u6df1\u95ed\u73af \u2014 \u4ece\u6821\u56ed\u6cbb\u7406\u5230\u56ed\u533a\u4f4e\u7a7a\u5b89\u9632\uff0c\u518d\u5230\u653f\u4f01\u5de5\u5355\u4e0e\u6570\u5b57\u8d44\u4ea7\u6cbb\u7406\u3002'}</p>
          </header>
          <motion-bg className="tab-shell glass">
            <motion-bg className="tab-pills" role="tablist">
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
            </motion-bg>
            <article className="tab-body fade-in" key={tab.id}>
              <motion-bg className="tab-body-grid">
                <motion-bg>
                  <h3>{tab.title}</h3>
                  <p>{tab.body}</p>
                  <p className="tab-kw">{tab.keywords}</p>
                  <Link to={tab.href} className="btn btn-ghost">
                    {tab.cta} {'\u2192'}
                  </Link>
                </motion-bg>
                <motion-bg className="tab-visual glass-glow" aria-hidden>
                  <span className="tab-visual-label">{tab.tab}</span>
                  <motion-bg className="tab-visual-bars">
                    {[72, 48, 88, 56].map((h, j) => (
                      <span key={j} style={{ height: `${h}%` }} />
                    ))}
                  </motion-bg>
                </motion-bg>
              </motion-bg>
            </article>
          </motion-bg>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container">
          <header className="section-head">
            <h2>{'\u6838\u5fc3\u80fd\u529b'}</h2>
            <p>{'\u540c\u4e00\u5957\u67b6\u6784\uff0c\u65e2\u9a71\u52a8 Link-Sky \u6807\u6746\u4ea7\u54c1\uff0c\u4e5f\u652f\u6491\u60a8\u7684\u4e13\u5c5e\u4e1a\u52a1\u6d41\u7a0b\u95ed\u73af\u3002'}</p>
          </header>
          <motion-bg className="cap-grid">
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
                <span className="cap-more">{c.link} {'\u2192'}</span>
              </Link>
            ))}
          </motion-bg>
        </motion-bg>
      </section>

      <section className="section linksky-section">
        <motion-bg className="container linksky-layout">
          <motion-bg className="linksky-copy">
            <span className="tag">{linkSky.badge}</span>
            <h2 className="gradient-text">{linkSky.title}</h2>
            <p>{linkSky.subtitle}</p>
            <p className="arch-line">{linkSky.arch}</p>
            <motion-bg className="hero-actions">
              <Link to="/products/link-sky" className="btn btn-primary">
                {'\u8fdb\u5165 Link-Sky \u4ea7\u54c1\u9875'}
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                {'\u9884\u7ea6\u8fde\u4e91\u6e2f\u793a\u8303\u53c2\u89c2'}
              </Link>
            </motion-bg>
          </motion-bg>
          <motion-bg className="pain-mosaic">
            {linkSkyPainPoints.map((p, i) => (
              <motion-bg
                key={p.title}
                className="pain-tile glass fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </motion-bg>
            ))}
          </motion-bg>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container method-grid">
          <motion-bg className="method-col glass">
            <h3>{'\u95ed\u73af\u6210\u719f\u5ea6 L1\u2013L4'}</h3>
            <ul className="level-list">
              {maturityLevels.map((l) => (
                <li key={l.level}>
                  <strong>{l.level}</strong> {l.name} {'\u2014 '} {l.desc}
                </li>
              ))}
            </ul>
          </motion-bg>
          <motion-bg className="method-col glass">
            <h3>{'\u4ea4\u4ed8\u4e94\u6b65\u6cd5'}</h3>
            <ol className="step-list">
              {deliverySteps.map((s) => (
                <li key={s.step}>
                  <strong>{s.step}</strong> {'\u2014 '} {s.desc}
                </li>
              ))}
            </ol>
            <Link to="/platform" className="btn btn-ghost">
              {'\u9884\u7ea6 L \u7ea7\u6210\u719f\u5ea6\u8bca\u65ad'}
            </Link>
          </motion-bg>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container">
          <header className="section-head">
            <h2>{'\u6848\u4f8b\u4e0e\u6d1e\u5bdf'}</h2>
          </header>
          <motion-bg className="case-grid">
            {mockCases.map((c) => (
              <article key={c.slug} className="case-card glass glass-glow">
                {c.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <Link to={c.href}>{'\u67e5\u770b\u6848\u4f8b \u2192'}</Link>
              </article>
            ))}
          </motion-bg>
          <ul className="insight-list glass">
            {insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/cases" className="btn btn-ghost insight-more">
            {'\u66f4\u591a\u6848\u4f8b\u4e0e\u65b0\u95fb \u2192'}
          </Link>
        </motion-bg>
      </section>

      <section className="section cta-band">
        <motion-bg className="container cta-inner glass glass-glow">
          <h2>{ctaBand.title}</h2>
          <p className="cta-lead">{ctaBand.body}</p>
          <motion-bg className="cta-tiles">
            {serviceTiles.map((s) => (
              <motion-bg key={s.title}>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion-bg>
            ))}
          </motion-bg>
          <Link to="/contact" className="btn btn-primary">
            {ctaBand.button}
          </Link>
        </motion-bg>
      </section>
    </>
  );
}
