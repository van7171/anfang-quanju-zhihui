import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LinkSkyPage from './pages/LinkSkyPage';
import SolutionPage from './pages/SolutionPage';
import CapabilityPage from './pages/CapabilityPage';
import PlatformPage from './pages/PlatformPage';
import CasesPage from './pages/CasesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/link-sky" element={<LinkSkyPage />} />
        <Route path="solutions/:slug" element={<SolutionPage />} />
        <Route path="capabilities/:slug" element={<CapabilityPage />} />
        <Route path="platform" element={<PlatformPage />} />
        <Route path="cases" element={<CasesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
