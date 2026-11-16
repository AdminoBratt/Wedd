'use client';

import { useRef, useState } from 'react';
import { coverSizes, type GalleryGroup } from '../content/gallery';
import GalleryImg from './GalleryImg';

type Props = { groups: GalleryGroup[]; label: string; title: string; close: string };

// "Se alla bilder": every portfolio photograph in the admin's order, in a full-screen dialog.
// The photographs mount only once it opens, so the page itself carries each picture once.
export default function GalleryDialog({ groups, label, title, close }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const total = groups.reduce((n, g) => n + g.photos.length, 0);
  return (
    <>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn--secondary"
          aria-haspopup="dialog"
          onClick={() => { setOpen(true); ref.current?.showModal(); }}
        >
          {label} ({total})
        </button>
      </div>
      <dialog
        ref={ref}
        className="gallery-dialog ground-base"
        aria-labelledby="galleri-h"
        onClose={() => setOpen(false)}
        onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
      >
        <div className="wrap stack-4">
          <div className="gallery-dialog__head">
            <h2 id="galleri-h">{title}</h2>
            <button type="button" className="btn btn--secondary" onClick={() => ref.current?.close()}>{close}</button>
          </div>
          {open && groups.map((g) => (
            <div className="stack-4" key={g.label}>
              <div className="tile__head"><h3>{g.label}</h3></div>
              <div className="grid">
                {g.photos.map((ph) => (
                  <div className="tile tile--portrait span-4" key={ph.src}>
                    <div className="tile__media">
                      <GalleryImg ph={ph} sizes={coverSizes(ph, { vw: 92, tile: 1 }, { vw: 30, tile: 0.8 })} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </dialog>
    </>
  );
}
