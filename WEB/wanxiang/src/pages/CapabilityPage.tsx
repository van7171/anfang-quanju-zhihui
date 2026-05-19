import { useParams } from 'react-router-dom';
import { capabilityPages } from '../data/siteCopy';
import GenericContentPage from './GenericContentPage';

export default function CapabilityPage() {
  const { slug = 'data-bus' } = useParams();
  const page = capabilityPages[slug] ?? capabilityPages['data-bus'];
  return (
    <GenericContentPage
      title={page.title}
      subtitle={page.subtitle}
      badge="核心能力"
      points={page.points}
    />
  );
}
