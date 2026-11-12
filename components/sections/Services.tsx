import { site } from '../../content/site';
import Img from '../Img';

// Tjänster: the brief's two side-by-side cards, as open tiles (the photograph on top, the words under it).
export default function Services() {
  const s = site.services;
  return (
    <section className="section" id="tjanster" aria-labelledby="tjanster-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="tjanster-h">{s.h2}</h2>
          <p>{s.lead}</p>
        </div>
        <div className="grid">
          {s.items.map((it) => (
            <article className="tile tile--wide span-6" key={it.title}>
              <div className="tile__media">
                <Img k={it.photo} sizes="(max-width: 1023px) 100vw, 50vw" />
              </div>
              <div className="tile__head"><h3>{it.title}</h3></div>
              <p>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
