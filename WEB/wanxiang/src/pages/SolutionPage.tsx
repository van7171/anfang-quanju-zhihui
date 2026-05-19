import { useParams } from 'react-router-dom';
import { solutionPages } from '../data/siteCopy';
import GenericContentPage from './GenericContentPage';

export default function SolutionPage() {
  const { slug = 'campus' } = useParams();
  const page = solutionPages[slug] ?? solutionPages.campus;
  return (
    <GenericContentPage
      title={page.title}
      subtitle={page.subtitle}
      badge="解决方案"
      pains={page.pains}
      features={page.features}
      value={page.value}
      ctaLabel={page.cta}
    />
  );
}
