import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { insights, mockCases, statsFootnote } from '../data/siteCopy';

export default function CasesPage() {
  return (
    <>
      <PageHero
        title="案例与洞�?
        subtitle="真实示范区验证，持续对齐低空经济与智慧安防政策�?
      />
      <section className="section">
        <div className="container cases-layout">
          <div className="case-filters glass">
            <span className="tag">Link-Sky</span>
            <span className="tag">Agent 闭环</span>
            <span className="tag">高校</span>
            <span className="tag">园区</span>
            <span className="tag">政企</span>
          </div>
          <div className="cases-list">
            {mockCases.map((c) => (
              <article key={c.slug} className="glass case-detail-card">
                {c.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <p className="footnote">{statsFootnote}</p>
              </article>
            ))}
          </div>
          <div className="glass insights-block">
            <h3>洞察 / 新闻</h3>
            <ul className="insight-list">
              {insights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="footnote">订阅洞察简报【需用户替换：表单或公众号�?/p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            预约案例交流
          </Link>
        </div>
      </section>
    </>
  );
}
