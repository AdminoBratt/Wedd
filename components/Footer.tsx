import { site } from '../content/site';
import Img from './Img';
import Arrow from './Arrow';

// footer.closing: row 1 the dealt close (close-photo; the brief's Kontakt section), row 2 footer-columns.
export default function Footer() {
  const f = site.footer;
  return (
    <footer className="footer closing" id="kontakt" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--photo">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">{site.close.h2}</h2>
              <p className="t-lead">{site.close.lead}</p>
            </div>
            <div className="btn-row">
              <a className="btn btn--primary" href={site.phoneHref}>{site.actions.call}<Arrow /></a>
              <a className="btn btn--secondary" href={site.emailHref}>{site.actions.email}</a>
            </div>
          </div>
          <div className="close__media">
            <Img k="close" sizes="(max-width: 639px) 150vw, 100vw" />
          </div>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo" href="#top">
                <span className="mark" data-mark="arc" aria-hidden="true"></span>
                {site.name}
              </a>
              <p className="footer__lede">{f.lede}</p>
            </div>
            {f.columns.map((c) => (
              <div className="span-2 footer__col" key={c.title}>
                <h3>{c.title}</h3>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.href}><a href={l.href}>{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="span-2 footer__col">
              <h3>{f.placeTitle}</h3>
              <ul><li>{f.place}</li></ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {f.year} {site.name}</span>
            <div className="socials"></div>
            <a className="credits" href={site.credits.href}>{site.credits.line}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
