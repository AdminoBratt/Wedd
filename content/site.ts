// All copy, contacts, photo paths and credits for the page. Everything here is a placeholder
// (BRIEF.md): swap the real name, phone, email, photographs and story in this one file.

export type Photo = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  /** object-position, when the subject is off centre */
  pos?: string;
};

const p = (id: string, sizes: number[], width: number, height: number, alt: string, pos?: string): Photo => {
  const files = sizes.map((w, i) => (i === sizes.length - 1 && w > 960 ? `/photos/photo-${id}.jpg ${w}w` : `/photos/photo-${id}-${w}.jpg ${w}w`));
  const last = sizes[sizes.length - 1];
  return {
    src: last > 960 ? `/photos/photo-${id}.jpg` : `/photos/photo-${id}-${last}.jpg`,
    srcSet: files.join(', '),
    width,
    height,
    alt,
    pos,
  };
};

// Stand-in photographs (Wikimedia Commons, via the design skill's photos.mjs). Each one is to be
// replaced by the client's own; the build report lists them.
export const photos = {
  hero: p('f61710778', [500, 960, 1280, 1920], 1920, 1280, 'En gång mellan stolsrader mot en vit båge, med rosor i höga vaser längs gången', '40% 50%'),
  servicesWedding: p('f61711770', [500, 960, 1280], 1280, 853, 'En brud i spetsklänning håller en bukett med rosa och vita rosor', '50% 40%'),
  servicesCorporate: p('f33307605', [500, 960], 960, 640, 'En galamiddag med dukade runda bord under en kupol med kristallkronor'),
  stepProposal: p('f181144114', [500, 960], 960, 722, 'Ett dukat bord med blommigt porslin, glas och en bukett vita blommor'),
  stepPlanning: p('f38690209', [500, 960], 960, 640, 'En konferenssal med publik på rader under kristallkronor'),
  stepDay: p('f61708616', [500, 960, 1280], 1280, 853, 'Brudparets skor på ett trägolv, bruna skor bredvid vita klackskor'),
  workRings: p('f61711941', [500, 960, 1280], 1280, 853, 'Två vigselringar i en hand mot en vit klänning'),
  workHands: p('f194443110', [500, 960, 1280], 1280, 908, 'Ett par håller hand vid ett dukat bord under middagen'),
  workTable: p('f201908224', [500], 500, 746, 'Ett långbord med ljus, blommor och rosa tyg i en restaurang'),
  workStage: p('f84999500', [500, 960, 1280], 1280, 853, 'En stor scen med skärmar och publik framför, under en konferens'),
  workConference: p('f126871360', [500, 960, 1280], 1280, 590, 'Ett mötesrum dukat för ett långbord med stolar och en duk framme, innan deltagarna kommer'),
  workGlasses: p('f95147280', [500, 960, 1280], 1280, 853, 'Två champagneglas mot en mörk bakgrund'),
  stepCall: p('f117883894', [500, 960, 1280], 1280, 853, 'En hand skriver med penna i en anteckningsbok'),
  about: p('f108169023', [500, 960, 1280], 1280, 848, 'Ett bordsarrangemang med vita blommor och vinglas på ett dukat bord'),
  close: p('f28183529', [500, 960, 1280], 1280, 853, 'En dukad festlokal med runda bord och fönster mot vattnet'),
};

export const site = {
  name: 'Sigge Brat Event',
  city: 'Stockholm',
  lang: 'sv',
  title: 'Sigge Brat Event: bröllop och företagsevent i Stockholm',
  description:
    'Eventplanerare som planerar hela bröllop och företagsevent i Stockholmsområdet, i alla budgetnivåer. Ring eller mejla för ett första samtal.',
  ogDescription: 'Hela planeringen av bröllop och företagsevent, bara i Stockholmsområdet.',
  themeColor: '#a6b3bc',

  // Contacts: placeholders. The number is all zeros on purpose (never a real, dialable number)
  // and the email is on .example. The email address is never printed on the page.
  phoneDisplay: '08-000 00 00',
  phoneHref: 'tel:+46800000000',
  emailHref: 'mailto:hej@siggebratevent.example',

  actions: {
    call: 'Ring oss',
    email: 'Mejla oss',
  },

  skipLink: 'Till innehållet',
  menuLabel: 'Meny',
  navLabel: 'Huvudmeny',
  quickLabel: 'Snabbval',

  nav: [
    { href: '#tjanster', label: 'Tjänster' },
    { href: '#arbetsgang', label: 'Arbetsgång' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#om', label: 'Om oss' },
    { href: '#fragor', label: 'Frågor' },
  ],

  hero: {
    h1: 'Bröllop och event i Stockholm',
    lead: 'Hela planeringen av bröllop och företagsevent, från första samtalet till dagen, i alla budgetnivåer.',
  },

  services: {
    h2: 'Tjänster för bröllop och företag',
    lead: 'Ni har samma kontakt från första samtalet till dagen, oavsett om det gäller ert bröllop eller företagets gala.',
    items: [
      {
        title: 'Planerar hela bröllopet',
        body: 'Lokal, leverantörer, budget och tidsplan, från första mötet till bröllopsdagen. Stora och små budgetar planeras lika noga.',
        photo: 'servicesWedding' as const,
      },
      {
        title: 'Planerar företagsevent hela vägen',
        body: 'Koncept, lokal, leverantörer, logistik och ledning på plats. Julfester och kundkvällar lika väl som konferenser, galor och lanseringar.',
        photo: 'servicesCorporate' as const,
      },
    ],
  },

  process: {
    h2: 'Så går planeringen till',
    lead: 'Samma fyra steg för bröllop och företagsevent. Priset får ni i steg två, efter att vi har pratat.',
    steps: [
      {
        title: 'Första samtalet',
        body: 'Ni ringer eller mejlar. Vi pratar om datum, antal gäster, ungefärlig budget och vad som är viktigast för er.',
        photo: 'stepCall' as const,
      },
      {
        title: 'Förslag och offert',
        body: 'Ni får ett skriftligt förslag med upplägg och pris. Ingenting bokas förrän ni har sagt ja.',
        photo: 'stepProposal' as const,
      },
      {
        title: 'Planering',
        body: 'Vi bokar lokal och leverantörer, håller budget och tidsplan och stämmer av med er längs vägen.',
        photo: 'stepPlanning' as const,
      },
      {
        title: 'Dagen',
        body: 'Vi är på plats från första leveransen till sista gästen och tar hand om det som dyker upp.',
        photo: 'stepDay' as const,
      },
    ],
  },

  statement: {
    label: 'Budget',
    // one strong word or phrase goes in <strong> (word-highlight)
    before: 'Vi planerar i ',
    strong: 'alla budgetnivåer',
    after:
      '. Ett litet bröllop i stadshuset och en gala för hela företaget får samma planering. Budgeten avgör vad vi bokar, aldrig hur noga vi är.',
  },

  portfolio: {
    h2: 'Bilder från bröllop och företagsevent',
    groups: [
      { label: 'Bröllop', line: 'Vigslar, middagar och fester, stora som små.', photos: ['workRings', 'workHands', 'workTable'] as const },
      { label: 'Företagsevent', line: 'Konferenser, galor och kundkvällar för små och stora företag.', photos: ['workStage', 'workConference', 'workGlasses'] as const },
    ],
  },

  about: {
    h2: 'Om Sigge Brat Event',
    story:
      'Sigge Brat Event planerar bröllop och företagsevent i Stockholm. Vi arbetar bara här, eftersom vi vill känna lokalerna, leverantörerna och vägarna mellan dem innan vi lovar något.',
    values: [
      { name: 'Alla budgetnivåer', text: 'Vi säger vad budgeten räcker till, också när svaret är mindre än ni hoppats.' },
      { name: 'Bara Stockholm', text: 'Inga destinationsbröllop. Vi arbetar där vi känner lokalerna och leverantörerna.' },
      { name: 'Hela planeringen', text: 'Vi tar inte uppdrag som bara gäller själva dagen, eftersom vi vill stå för helheten.' },
    ],
  },

  faq: {
    h2: 'Vanliga frågor',
    lead: 'Hittar ni inte svaret här, fråga oss direkt.',
    linkLabel: 'Mejla en fråga',
    items: [
      {
        q: 'Hur långt i förväg ska vi höra av oss?',
        a: 'Så tidigt ni kan. Populära lokaler i Stockholm bokas ofta långt fram, särskilt lördagar på sommaren. Ring, så säger vi vad som går att få för ert datum.',
      },
      {
        q: 'Tar ni uppdrag med liten budget?',
        a: 'Ja. Vi planerar i alla budgetnivåer och säger direkt vad budgeten räcker till. Priset får ni i en skriftlig offert efter första samtalet.',
      },
      {
        q: 'Vad ingår i planeringen?',
        a: 'Allt från första mötet till dagen: lokal, leverantörer, budget, tidsplan och ledning på plats. Offerten visar vad som ingår för just er.',
      },
      {
        q: 'Använder ni egna leverantörer?',
        a: 'Vi föreslår leverantörer i Stockholm som passar budgeten och tar gärna in dem ni redan vill ha. Kontakten med alla sköter vi.',
      },
      {
        q: 'Är bröllop och företagsevent olika uppdrag?',
        a: 'Arbetsgången är densamma. Ett företagsevent har oftare program, teknik och fler som ska godkänna; ett bröllop fler personliga val.',
      },
    ],
  },

  close: {
    h2: 'Ring eller mejla oss',
    lead: 'Första samtalet handlar om ert datum, era gäster och vad ni vill ha.',
  },

  footer: {
    lede: 'Bröllop och företagsevent i Stockholm.',
    columns: [
      { title: 'Uppdrag', links: [{ href: '#tjanster', label: 'Tjänster' }, { href: '#arbetsgang', label: 'Arbetsgång' }] },
      { title: 'Arbete', links: [{ href: '#portfolio', label: 'Portfolio' }, { href: '#budget', label: 'Budget' }] },
      { title: 'Byrån', links: [{ href: '#om', label: 'Om oss' }, { href: '#fragor', label: 'Frågor' }] },
    ],
    placeTitle: 'Plats',
    place: 'Stockholmsområdet',
    year: 2026,
  },

  // Filled from `photos.mjs credits` once the markup uses the photographs.
  credits: {
    line: 'Fotografier via Wikimedia Commons',
    href: '/credits.html',
  },

  deal: `type: service (site-kind other)
     deal: hero photo (printed with --hero: the brief asks for a full-bleed photograph; the dealer gave split),
           nav nav-centre, close close-photo, footer footer-columns (re-dealt: footer-dark's recipe is for software and product, footer-visit needs a street the brief lacks), rhythm dark-band (portfolio), buttons tonal, mark arc,
           palette blush-sage-slate, type source-serif (the first serif pairing: the brief asks for serif display
           headlines; zilla and host were dealt first), radius soft, grounds none
     moments: photo-chapters (#arbetsgang, the four steps), word-highlight (#budget, the budget statement)`,
};

export type PhotoKey = keyof typeof photos;
