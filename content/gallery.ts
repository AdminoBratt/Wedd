// The portfolio photographs, as the admin at /admin orders them (content/gallery.json), resolved by
// scripts/gallery.mjs (sizes, srcset) before every dev and build run.
import data from './gallery.generated.json';

export type GalleryPhoto = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  pos?: string;
  /** false for a licensed stand-in, true for the client's own upload */
  own: boolean;
};
export type GalleryGroup = { label: string; photos: GalleryPhoto[] };

export const gallery = data as Record<'wedding' | 'corporate', GalleryGroup>;
export type GroupKey = keyof typeof gallery;
/** the portfolio's groups in page order */
export const groupKeys: GroupKey[] = ['wedding', 'corporate'];
/** how many of each group's photographs the portfolio section shows; the rest open under "Se alla bilder" */
export const shownPerGroup = 3;

/** a `sizes` value for a photograph cropped to cover a tile of ratio `tile` (width / height) that is
 *  `vw` of the viewport wide: a wide photograph in a tall tile is shown wider than the tile */
export const coverSizes = (ph: GalleryPhoto, phone: { vw: number; tile: number }, wide: { vw: number; tile: number }) => {
  const r = ph.width / ph.height;
  const at = (o: { vw: number; tile: number }) => `${Math.ceil(o.vw * Math.max(1, r / o.tile))}vw`;
  return `(max-width: 639px) ${at(phone)}, ${at(wide)}`;
};
