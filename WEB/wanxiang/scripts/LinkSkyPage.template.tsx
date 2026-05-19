import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import KpiCard from '../components/KpiCard';
import {
  heroStats,
  linkSky,
  linkSkyLayers,
  linkSkyPainPoints,
  linkSkyJourneySteps,
  statsFootnote,
} from '../data/siteCopy';
import './LinkSkyPage.css';

export default function LinkSkyPage() {
  return (
    <>
      <PageHero
        badge={'\u6807\u6746\u4ea7\u54c1 \u00b7 \u65b0\u4e07\u76f8\u667a\u80fd\u79d1\u6280\u81ea\u7814'}
        title={linkSky.title}
        subtitle={'\u4f4e\u7a7a + \u89c6\u89c9 + \u5de5\u5355 \u2014 \u56db\u4f4d\u4e00\u4f53\uff0c\u8ba9\u5b89\u9632\u4ece\u300c\u770b\u89c1\u300d\u8d70\u5411\u300c\u95ed\u73af\u300d'}
      />
      <section className="section">
        <motion-bg className="container">
          <p className="linksky-value-line">{linkSky.valueLine}</p>
          <motion-bg className="trust-row">
            {['\u4f4e\u7a7a\u7ecf\u6d4e', '\u667a\u6167\u5b89\u9632', '\u65b0\u8d28\u751f\u4ea7\u529b'].map((t) => (
              <span key={t} className="trust-pill glass">
                {t}
              </span>
            ))}
          </motion-bg>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container">
          <header className="section-head">
            <h2>{'\u60a8\u662f\u5426\u9762\u4e34\u8fd9\u4e9b\u5b89\u9632\u56f0\u5883\uff1f'}</h2>
          </header>
          <motion-bg className="pain-grid">
            {linkSkyPainPoints.map((p, i) => (
              <motion-bg
                key={p.title}
                className="glass pain-card fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </motion-bg>
            ))}
          </motion-bg>
          <p className="pain-transition glass">
            Link-Sky {'\u7528\u4e00\u5957\u6570\u636e\u603b\u7ebf\u3001\u4e00\u4e2a\u7814\u5224\u5927\u8111\u3001\u4e00\u6761 Agent \u5de5\u5355\u94fe\uff0c\u628a\u300c\u7a7a\u5730\u611f\u77e5\u300d\u771f\u6b63\u53d8\u6210\u300c\u53ef\u95ed\u73af\u7684\u5b89\u9632\u751f\u4ea7\u529b\u300d\u3002'}
          </p>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container">
          <header className="section-head center">
            <h2>Link-Sky {'\u56db\u5c42\u67b6\u6784'}</h2>
            <p>{'\u4ece\u8bbe\u5907\u5230\u9500\u9879\uff0c\u5168\u6808\u53ef\u4ea4\u4ed8\u3001\u53ef\u8fd0\u7ef4\u3002'}</p>
          </header>
          <motion-bg className="layer-grid">
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
          </motion-bg>
          <motion-bg className="arch-flow glass glass-glow">
            <p className="arch-steps">{linkSky.arch}</p>
          </motion-bg>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container">
          <header className="section-head center">
            <h2>{'\u9ad8\u6821\u793a\u8303\u533a MVP \u9a8c\u8bc1\u6307\u6807'}</h2>
          </header>
          <motion-bg className="kpi-strip">
            {heroStats.map((s, i) => (
              <KpiCard key={s.label} {...s} delay={i * 80} />
            ))}
          </motion-bg>
          <p className="footnote">{statsFootnote}</p>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container">
          <header className="section-head">
            <h2>{'\u5408\u89c4\u4f18\u5148 \u00b7 \u6838\u5fc3\u6570\u636e\u4e0d\u51fa\u57df'}</h2>
            <p>
              {'\u6d89\u5bc6\u5730\u7406\u5750\u6807\u3001\u4eba\u8138\u56fe\u50cf\u7b49\u654f\u611f\u4fe1\u606f\uff0c\u5728\u7aef\u4fa7\u5b8c\u6210\u8131\u654f\u4e0e\u7269\u7406\u963b\u65ad\uff0c\u672a\u7ecf\u6388\u6743\u4e0d\u51fa\u5ba2\u6237\u6570\u636e\u57df\u3002'}
            </p>
          </header>
          <ul className="compliance-list glass">
            <li>{'\u7aef\u4fa7\u7269\u7406\u963b\u65ad\u8131\u654f'}</li>
            <li>{'\u53ef\u79c1\u6709\u5316 / \u6df7\u5408\u4e91\u90e8\u7f72'}</li>
            <li>{'\u4f4e\u7a7a\u98de\u884c\u4f9d\u6cd5\u62a5\u6279\uff0c\u4e0d\u627f\u8bfa\u89c4\u907f\u76d1\u7ba1'}</li>
            <li>{'\u4eba\u529b\u4f18\u5316\u8868\u8ff0\u4e3a\u91ca\u653e\u4eba\u529b\u4ece\u4e8b\u9ad8\u4ef7\u503c\u4efb\u52a1'}</li>
          </ul>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container">
          <header className="section-head center">
            <h2>{'\u4e00\u6761\u544a\u8b66\u7684\u95ed\u73af\u4e4b\u65c5'}</h2>
          </header>
          <motion-bg className="journey-grid">
            {linkSkyJourneySteps.map((n) => (
              <motion-bg key={n.node} className="journey-node glass">
                <span className="journey-id">{n.node}</span>
                <strong>{n.name}</strong>
                <p>{n.desc}</p>
              </motion-bg>
            ))}
          </motion-bg>
          <p className="footnote journey-note">
            N3{'\u2013'}N6 {'\u5728\u793a\u8303\u533a\u53ef\u5b9e\u73b0\u65e0\u4eba\u5316\uff1b'}N7 {'\u6309\u6cd5\u89c4\u53ca\u5ba2\u6237\u5236\u5ea6\u914d\u7f6e\u3002'}
          </p>
        </motion-bg>
      </section>

      <section className="section">
        <motion-bg className="container cta-row glass glass-glow">
          <motion-bg>
            <h2>{'\u4eb2\u773c\u770b\u89c1\u7a7a\u5730\u8054\u52e4\u5982\u4f55\u95ed\u73af'}</h2>
            <p>
              {'\u6b22\u8fce\u9884\u7ea6\u8fde\u4e91\u6e2f\u793a\u8303\u4e2d\u5fc3\u4f53\u9a8c\uff1a\u65e0\u4eba\u673a\u8054\u52a8\u3001\u7814\u5224\u5927\u5c4f\u3001\u5de5\u5355\u9500\u9879\u4e0e\u8131\u654f\u673a\u5236\u5168\u6d41\u7a0b\u6f14\u793a\u3002'}
            </p>
          </motion-bg>
          <motion-bg className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              {'\u9884\u7ea6\u793a\u8303\u4f53\u9a8c'}
            </Link>
            <Link to="/capabilities/agent-workflow" className="btn btn-ghost">
              {'\u4e86\u89e3 AI \u7cfb\u7edf\u96c6\u6210\u80fd\u529b'}
            </Link>
          </motion-bg>
        </motion-bg>
      </section>
    </>
  );
}
