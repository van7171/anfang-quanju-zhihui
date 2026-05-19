import { Link } from 'react-router-dom';
import { deliverySteps, maturityLevels, platformSop, statsFootnote } from '../data/siteCopy';
import PageHero from '../components/PageHero';
import './PlatformPage.css';

export default function PlatformPage() {
  return (
    <>
      <PageHero
        badge="平台与方法论"
        title="闭环成熟�?· �?L1 �?L4"
        subtitle="用可度量的成熟度模型与五步法交付，让 AI 项目可验收、可复制�?
      />
      <section className="section">
        <div className="container platform-grid">
          <div className="glass platform-block">
            <h3>成熟度等�?/h3>
            {maturityLevels.map((l) => (
              <div key={l.level} className="level-row">
                <span className="level-badge">{l.level}</span>
                <div>
                  <strong>{l.name}</strong>
                  <p>{l.desc}</p>
                  <p className="level-detail">{l.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass platform-block">
            <h3>交付五步�?/h3>
            <ol className="steps">
              {deliverySteps.map((s, i) => (
                <li key={s.step}>
                  <span>{i + 1}</span>
                  <div>
                    <strong>{s.step}</strong>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container glass platform-sop">
          <h3>数字资产�?SOP</h3>
          <ul>
            {platformSop.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="footnote">
            依托连云�?OPC 资源，为园区客户提供弹性算力与联合孵化【需用户替换：合作机构名称】�?
          </p>
          <p className="footnote">{statsFootnote}</p>
          <Link to="/contact" className="btn btn-primary">
            预约成熟度诊�?
          </Link>
        </div>
      </section>
    </>
  );
}
