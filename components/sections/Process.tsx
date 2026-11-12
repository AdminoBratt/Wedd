import { site, photos } from '../../content/site';

// Så går det till, as the photo-chapters moment (moments.md): the section is the host, and the moment
// makes it (hold + 1) screens tall. Markup as assets/moments/_demo/in-page.html.
export default function Process() {
  const s = site.process;
  return (
    <section className="section" id="arbetsgang" data-moment="photo-chapters" aria-labelledby="arbetsgang-h">
      <div className="wrap mo-ph">
        <div className="mo-ph__head">
          <h2 id="arbetsgang-h">{s.h2}</h2>
          <p>{s.lead}</p>
        </div>
        <ol className="mo-ph__list">
          {s.steps.map((st) => {
            const ph = photos[st.photo];
            return (
              <li className="mo-ph__ch" key={st.title}>
                <figure className="mo-ph__pic">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ph.src}
                    srcSet={ph.srcSet}
                    sizes="(max-width: 639px) 175vw, 100vw"
                    alt={ph.alt}
                    width={ph.width}
                    height={ph.height}
                    loading="lazy"
                    decoding="async"
                    data-source="stand-in"
                    data-subject={st.photo}
                  />
                </figure>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
