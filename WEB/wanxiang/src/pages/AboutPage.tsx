import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { aboutPoints, company } from '../data/siteCopy';

export default function AboutPage() {
  return (
    <>
      <PageHero badge="关于我们" title="关于新万相智能科技" subtitle={company.name} />
      <section className="section">
        <div className="container content-grid">
          <div className="glass content-block">
            <h3>公司简�?/h3>
            <p>{aboutPoints.intro}</p>
          </div>
          <div className="glass content-block">
            <h3>创始人与团队</h3>
            <ul>
              {aboutPoints.team.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="glass content-block">
            <h3>愿景与地�?/h3>
            <ul>
              {aboutPoints.vision.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
          <div className="glass content-block">
            <h3>资质与荣�?/h3>
            <p>{aboutPoints.honors}</p>
          </div>
          <div className="glass content-block">
            <h3>合作伙伴</h3>
            <p>{aboutPoints.partners}</p>
          </div>
          <div className="content-cta">
            <Link to="/contact" className="btn btn-primary">
              联系我们
            </Link>
            <Link to="/" className="btn btn-ghost">
              返回首页
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
