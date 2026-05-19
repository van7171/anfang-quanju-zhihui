import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import KpiCard from '../components/KpiCard';
import {
  heroStats,
  linkSky,
  linkSkyJourneySteps,
  linkSkyLayers,
  linkSkyPageUi,
  linkSkyPainPoints,
  statsFootnote,
} from '../data/siteCopy';
import './LinkSkyPage.css';

export default function LinkSkyPage() {
  const ui = linkSkyPageUi;

  return (
    <>
      <PageHero badge={ui.heroBadge} title={linkSky.title} subtitle={ui.heroSubtitle} />
      <section className="section">
        <div className="container">
          <p className="linksky-value-line">{linkSky.valueLine}</p>
          <div className="trust-row">
            {ui.trustPills.map((t) => (
              <span key={t} className="trust-pill glass">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2>{ui.painTitle}</h2>
          </header>
          <div className="pain-grid">
            {linkSkyPainPoints.map((p, i) => (
              <div
                key={p.title}
                className="glass pain-card fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="pain-transition glass">{ui.painTransition}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head center">
            <h2>{ui.archTitle}</h2>
            <p>{ui.archLead}</p>
          </header>
          <div className="layer-grid">
            {linkSkyLayers.map((layer, i) => (
              <article
                key={layer.title}
                className="glass layer-card fade-in"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="layer-num">0{i + 1}</span>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
              </article>
            ))}
          </div>
          <div className="arch-flow glass glass-glow">
            <p className="arch-steps">{linkSky.arch}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head center">
            <h2>{ui.kpiTitle}</h2>
          </header>
          <div className="kpi-strip">
            {heroStats.map((s, i) => (
              <KpiCard key={s.label} {...s} delay={i * 80} />
            ))}
          </div>
          <p className="footnote">{statsFootnote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2>{ui.complianceTitle}</h2>
            <p>{ui.complianceLead}</p>
          </header>
          <ul className="compliance-list glass">
            {ui.complianceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head center">
            <h2>{ui.journeyTitle}</h2>
          </header>
          <div className="journey-grid">
            {linkSkyJourneySteps.map((n) => (
              <div key={n.node} className="journey-node glass">
                <span className="journey-id">{n.node}</span>
                <strong>{n.name}</strong>
                <p>{n.desc}</p>
              </div>
            ))}
          </div>
          <p className="footnote journey-note">{ui.journeyNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container cta-row glass glass-glow">
          <div>
            <h2>{ui.ctaTitle}</h2>
            <p>{ui.ctaBody}</p>
          </div>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              {ui.ctaDemo}
            </Link>
            <Link to="/capabilities/agent-workflow" className="btn btn-ghost">
              {ui.ctaCapability}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
