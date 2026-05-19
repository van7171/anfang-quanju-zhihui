import './KpiCard.css';

type Props = {
  value: string;
  label: string;
  note: string;
  delay?: number;
  large?: boolean;
};

export default function KpiCard({ value, label, note, delay = 0, large }: Props) {
  return (
    <article
      className={`kpi-card glass glass-glow ${large ? 'kpi-large' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="kpi-value">{value}</div>
      <div className="kpi-label">{label}</div>
      <span className="kpi-note">{note}</span>
    </article>
  );
}
