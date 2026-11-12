import { site } from '../../content/site';
import Img from '../Img';

// Om oss: the h2 and the story on the left line above the grid, then the page's 6/6 split:
// the three values left, the photograph right.
export default function About() {
  const s = site.about;
  return (
    <section className="section" id="om" aria-labelledby="om-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="om-h">{s.h2}</h2>
          <p>{s.story}</p>
        </div>
        <div className="grid grid--top">
          <ul className="rows span-6">
            {s.values.map((v) => (
              <li key={v.name}>
                <span className="rows__name">{v.name}</span>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
          <div className="frame frame--photo span-6 start-7" style={{ '--ratio': '66.6%' } as React.CSSProperties}>
            <Img k="about" className="frame__img" sizes="(max-width: 1023px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
