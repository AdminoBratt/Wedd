import { site } from '../content/site';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Statement from '../components/sections/Statement';
import Portfolio from '../components/sections/Portfolio';
import About from '../components/sections/About';
import Faq from '../components/sections/Faq';

export default function Page() {
  return (
    <>
      {/* the deal record (SKILL.md step 4), as a comment at the top of <body> */}
      <template data-deal="" dangerouslySetInnerHTML={{ __html: `<!-- ${site.deal} -->` }} />
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Process />
        <Statement />
        <Portfolio />
        <About />
        <Faq />
      </main>
      <Footer />
      <nav className="actionbar" aria-label={site.quickLabel}>
        <a className="btn btn--secondary" href={site.emailHref}>{site.actions.email}</a>
        <a className="btn btn--primary" href={site.phoneHref}>{site.actions.call}</a>
      </nav>
    </>
  );
}
