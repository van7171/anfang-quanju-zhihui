import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './GenericContentPage.css';

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
  points?: string[];
  pains?: string[];
  features?: string[];
  value?: string;
  ctaLabel?: string;
  children?: ReactNode;
};

export default function GenericContentPage({
  title,
  subtitle,
  badge,
  points,
  pains,
  features,
  value,
  ctaLabel = '预约交流',
  children,
}: Props) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} badge={badge} />
      <section className="section">
        <div className="container content-grid">
          {pains && pains.length > 0 ? (
            <div className="glass content-block">
              <h3>客户痛点</h3>
              <ul>
                {pains.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {features && features.length > 0 ? (
            <div className="glass content-block">
              <h3>核心功能</h3>
              <ul>
                {features.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {points && points.length > 0 ? (
            <div className="glass content-block">
              <h3>核心要点</h3>
              <ul>
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {value ? (
            <div className="glass content-block value-block">
              <h3>价值指�?/ 主张</h3>
              <p>{value}</p>
              <p className="footnote">* 以合同约定及项目验收为准�?/p>
            </div>
          ) : null}
          {children}
          <div className="content-cta">
            <Link to="/contact" className="btn btn-primary">
              {ctaLabel}
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
