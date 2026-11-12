import { site } from '../../content/site';
import Img from '../Img';

// Portfolio on the dealt dark band: two screens as two groups (.g2), weddings, then corporate events.
// Each group: its h3 (the tile title style, so the h3 level keeps one size), one line, three 4:5 photographs.
// sizes per tile, so each cover crop gets a file sharp enough (photo-upscale: at most 1.33x) and no
// larger than it needs (perf.mjs: at most 2.2x the shown width). On a phone the first two tiles are
// two-up at 165px and the third runs the full 342px; the 2.17:1 meeting room needs more for its 4:5 crop.
const tileSizes = (k: string, n: number) =>
  `(max-width: 639px) ${n === 2 ? '120vw' : '70vw'}, ${k === 'workConference' ? '60vw' : '45vw'}`;

export default function Portfolio() {
  const s = site.portfolio;
  return (
    <section className="section g2 ground-inverse" id="portfolio" aria-labelledby="portfolio-h">
      <div className="wrap">
        {s.groups.map((g, i) => (
          <div className="group stack-4" key={g.label}>
            {i === 0 && (
              <div className="section-head">
                <h2 id="portfolio-h">{s.h2}</h2>
              </div>
            )}
            <div className="tile__head"><h3>{g.label}</h3></div>
            <p>{g.line}</p>
            <div className="grid">
              {g.photos.map((k, n) => (
                <div className="tile tile--portrait span-4" key={k}>
                  <div className="tile__media">
                    <Img k={k} sizes={tileSizes(k, n)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
