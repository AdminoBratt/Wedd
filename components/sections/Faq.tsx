import { site } from '../../content/site';

// FAQ (sections-library.md): the page's split, every answer open.
export default function Faq() {
  const s = site.faq;
  return (
    <section className="section" id="fragor" aria-labelledby="fragor-h">
      <div className="wrap grid grid--top">
        <div className="span-5 stack-4">
          <h2 id="fragor-h">{s.h2}</h2>
          <p className="muted">{s.lead}</p>
          <p><a className="link" href={site.emailHref}>{s.linkLabel}</a></p>
        </div>
        <div className="faq span-6 start-7">
          {s.items.map((it) => (
            <div className="faq__item" key={it.q}>
              <h3>{it.q}</h3>
              <p>{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
