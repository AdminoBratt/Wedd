import { site } from '../../content/site';
import Img from '../Img';
import Arrow from '../Arrow';

// hero-photo (assets/layout/hero-photo.html): the photograph full bleed, the words in a solid box on its
// calm right side, so the aisle and the bouquets stay clear on the left.
export default function Hero() {
  return (
    <section className="hero hero--photo" data-enter="" data-calm="right" aria-labelledby="hero-h">
      <Img k="hero" className="hero__bg" sizes="(max-width: 639px) 188vw, 100vw" eager phoneFill />
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__text">
            <h1 id="hero-h">{site.hero.h1}</h1>
            <p className="hero__lead">{site.hero.lead}</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={site.phoneHref}>{site.actions.call}<Arrow /></a>
              <a className="btn btn--secondary" href={site.emailHref}>{site.actions.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
