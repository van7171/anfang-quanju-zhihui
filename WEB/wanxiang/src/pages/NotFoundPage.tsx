import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { commonUi } from '../data/siteCopy';

export default function NotFoundPage() {
  return (
    <>
      <PageHero title={commonUi.notFoundTitle} subtitle={commonUi.notFoundBody} />
      <section className="section">
        <div className="container content-cta">
          <Link to="/" className="btn btn-primary">
            {commonUi.notFoundCta}
          </Link>
        </div>
      </section>
    </>
  );
}
