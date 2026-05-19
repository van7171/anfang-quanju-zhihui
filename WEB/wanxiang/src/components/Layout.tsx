import { Link, NavLink, Outlet } from 'react-router-dom';
import { company, contactInfo, layoutNav, layoutUi } from '../data/siteCopy';
import './Layout.css';

export default function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header glass">
        <div className="container header-row">
          <Link to="/" className="brand">
            <span className="brand-glyph" aria-hidden>
              {layoutUi.brandGlyph}
            </span>
            <span>
              <strong>{company.brand}</strong>
              <em>{layoutUi.brandEm}</em>
            </span>
          </Link>
          <nav className="main-nav" aria-label="???">
            {layoutNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={'end' in item ? item.end : false}
                className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="site-footer">
        <div className="container footer-inner glass">
          <div>
            <strong>{company.name}</strong>
            <p className="footer-en">{company.taglineEn}</p>
          </div>
          <div>
            <p>???{contactInfo.address}</p>
            <p>???{contactInfo.phone}</p>
            <p>???{contactInfo.email}</p>
          </div>
          <p className="footnote">{layoutUi.footerIcp}</p>
        </div>
      </footer>
    </div>
  );
}
