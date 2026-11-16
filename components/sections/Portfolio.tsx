import { site } from '../../content/site';
import { coverSizes, galleryGroups, shownPerGroup } from '../../content/gallery';
import GalleryImg from '../GalleryImg';
import GalleryDialog from '../GalleryDialog';

// Portfolio on the dealt dark band: two screens as two groups (.g2), weddings, then corporate events.
// Each group: its h3 (the tile title style, so the h3 level keeps one size), then the first three of
// the admin's photographs (content/gallery.json, edited at /admin) as 4:5 tiles. "Se alla bilder"
// opens the rest in the admin's order. On a phone the first two tiles are two-up and the third runs
// the full width. Tiles are square on a phone, 4:5 above (globals.css); sizes follow each crop.

export default function Portfolio() {
  const s = site.portfolio;
  const more = galleryGroups.some((g) => g.photos.length > shownPerGroup);
  return (
    <section className="section g2 ground-inverse" id="portfolio" aria-labelledby="portfolio-h">
      <div className="wrap">
        {galleryGroups.map((g, i) => (
          <div className="group stack-4" key={g.label}>
            {i === 0 && (
              <div className="section-head">
                <h2 id="portfolio-h">{s.h2}</h2>
              </div>
            )}
            <div className="tile__head"><h3>{g.label}</h3></div>
            <div className="grid">
              {g.photos.slice(0, shownPerGroup).map((ph, n) => (
                <div className="tile tile--portrait span-4" key={ph.src}>
                  <div className="tile__media">
                    <GalleryImg ph={ph} sizes={coverSizes(ph, { vw: n === 2 ? 92 : 45, tile: 1 }, { vw: 30, tile: 0.8 })} />
                  </div>
                </div>
              ))}
            </div>
            {more && i === galleryGroups.length - 1 && (
              <GalleryDialog groups={galleryGroups} label={s.showAll} title={s.dialogTitle} close={s.close} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
