import './PageHero.css';

type Props = { title: string; subtitle?: string; badge?: string };

export default function PageHero({ title, subtitle, badge }: Props) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy fade-in">
          {badge ? <span className="tag">{badge}</span> : null}
          <h1 className="gradient-text">{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <div className="page-hero-orb glass glass-glow" aria-hidden>
          <span className="orb-ring" />
          <span className="orb-core" />
        </div>
      </div>
    </section>
  );
}
