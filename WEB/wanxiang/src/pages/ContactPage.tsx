import { useState, type FormEvent } from 'react';
import PageHero from '../components/PageHero';
import { contactInfo } from '../data/siteCopy';
import './ContactPage.css';

const intentOptions = [
  'Link-Sky 示范参观（连云港�?,
  '闭环成熟度诊�?,
  '解决方案咨询',
  '商务合作 / 渠道',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="联系我们"
        subtitle="预约闭环评估、示范参观或方案交流，属地团�?1 个工作日内响应�?
      />
      <section className="section">
        <div className="container contact-layout">
          <form className="glass glass-glow contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <p className="success-msg">
                感谢提交（演示模式，未发送真实请求）。我们将�?1 个工作日内联系您�?              </p>
            ) : (
              <>
                <label>
                  姓名
                  <input name="name" required placeholder="您的姓名" />
                </label>
                <label>
                  单位
                  <input name="org" required placeholder="单位名称" />
                </label>
                <label>
                  职务
                  <input name="title" placeholder="职务" />
                </label>
                <label>
                  手机
                  <input name="phone" type="tel" required placeholder="手机�? />
                </label>
                <label>
                  邮箱
                  <input name="email" type="email" placeholder="邮箱" />
                </label>
                <label>
                  关注方向
                  <select name="intent" defaultValue={intentOptions[0]}>
                    {intentOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  留言
                  <textarea name="msg" rows={4} placeholder="简要描述需�? />
                </label>
                <button type="submit" className="btn btn-primary">
                  提交预约
                </button>
              </>
            )}
          </form>
          <aside className="glass contact-aside">
            <h3>联系信息</h3>
            <p>{contactInfo.company}</p>
            <p>地址：{contactInfo.address}</p>
            <p>电话：{contactInfo.phone}</p>
            <p>邮箱：{contactInfo.email}</p>
            <p>服务区域：{contactInfo.region}</p>
            <p>地图与交通：{contactInfo.mapNote}</p>
            <p className="footnote">
              您提交的信息仅用于商务联系。隐私说明：{contactInfo.privacy}（mock 表单，无后端�?            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
