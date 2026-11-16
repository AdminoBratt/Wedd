import type { GalleryPhoto } from '../content/gallery';

// One portfolio photograph from the admin's gallery, with the data-source the skill reads
// (stand-in until the client uploads their own).
export default function GalleryImg({ ph, sizes }: { ph: GalleryPhoto; sizes: string }) {
  const style = ph.pos ? ({ '--ly-pos': ph.pos, '--pos': ph.pos } as React.CSSProperties) : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={ph.src}
      srcSet={ph.srcSet}
      sizes={sizes}
      width={ph.width}
      height={ph.height}
      alt={ph.alt}
      loading="lazy"
      decoding="async"
      style={style}
      data-source={ph.own ? 'client' : 'stand-in'}
    />
  );
}
