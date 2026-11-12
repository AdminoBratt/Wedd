import { site } from '../content/site';

// nav-centre (sections-library.md): the logo on the left line, the words in the middle, the call button
// on the right line. The bar is fixed, so "Ring oss" and "Mejla oss" are reachable at every scroll depth.
export default function Header() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">{site.skipLink}</a>
        <a className="nav__logo" href="#top">
          <span className="mark" data-mark="arc" aria-hidden="true"></span>
          {site.name}
        </a>
        <nav className="nav__links" aria-label={site.navLabel}>
          {site.nav.map((n) => (
            <div className="nav__item" key={n.href}>
              <a className="nav__link" href={n.href}>{n.label}</a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="nav__link" href={site.emailHref}>{site.actions.email}</a>
          <a className="btn btn--primary" href={site.phoneHref}>{site.actions.call}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label={site.menuLabel}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
