import { photos, type PhotoKey } from '../content/site';

type Props = {
  k: PhotoKey;
  sizes: string;
  className?: string;
  eager?: boolean;
  phoneFill?: boolean;
};

// One stand-in photograph from content/site.ts, with the data-source and data-subject the skill asks for.
export default function Img({ k, sizes, className, eager, phoneFill }: Props) {
  const ph = photos[k];
  const style = ph.pos ? ({ '--ly-pos': ph.pos, '--pos': ph.pos } as React.CSSProperties) : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={ph.src}
      srcSet={ph.srcSet}
      sizes={sizes}
      width={ph.width}
      height={ph.height}
      alt={ph.alt}
      loading={eager ? undefined : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      style={style}
      data-phone-fill={phoneFill ? '' : undefined}
      data-source="stand-in"
      data-subject={k}
    />
  );
}
