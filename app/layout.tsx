import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { site } from '../content/site';
import fs from 'node:fs';
import path from 'node:path';

// globals.css holds the dealt :root block and the page CSS. It is inlined after the kit's stylesheets
// (read at build time), because the kit sets its own :root defaults that the dealt tokens must follow.
const pageCss = fs.readFileSync(path.join(process.cwd(), 'app', 'globals.css'), 'utf8');

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
  openGraph: { type: 'website', title: site.title, description: site.ogDescription },
  twitter: { card: 'summary_large_image' },
  other: { 'site-kind': 'other', 'page-type': 'service' },
  // canonical: only once the client's domain is known
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: site.themeColor,
};

const kitCss = [
  '/assets/system.css',
  '/assets/ui/cards.css',
  '/assets/motion/motion.css',
  '/assets/backgrounds/backgrounds.css',
  '/assets/layout/layout.css',
  '/assets/icons/icon.css',
];

const moments = ['photo-chapters', 'word-highlight'];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.lang} data-type="service" data-radius="soft" data-buttons="tonal" data-motion="" suppressHydrationWarning>
      <head>
        {/* the share picture is the hero's own tile; relative until the client's domain is known */}
        <meta property="og:image" content="/share.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400..700&family=Libre+Franklin:wght@400..600&display=swap"
        />
        {kitCss.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <style dangerouslySetInnerHTML={{ __html: pageCss }} />
        {/* the hero's entrance and the moments' guard, before the first paint (motion.md, moments.md) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
              "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)",
          }}
        />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        {moments.map((id) => (
          <link key={id} rel="modulepreload" href={`/assets/moments/${id}/moment.js`} />
        ))}
      </head>
      <body suppressHydrationWarning>
        {children}
        {/* the kit's scripts run after hydration, so React never re-renders what they touch */}
        <Script type="module" src="/assets/system.js" strategy="afterInteractive" />
        <Script type="module" src="/assets/motion/motion.js" strategy="afterInteractive" />
        <Script type="module" src="/assets/layout/layout.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
