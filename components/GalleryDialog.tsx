'use client';

import { useRef, useState } from 'react';
import { coverSizes, type GalleryGroup } from '../content/gallery';
import GalleryImg from './GalleryImg';

type Props = { id: string; group: GalleryGroup; button: string; title: string; close: string };

// "Se alla …": every photograph of one portfolio group in the admin's order, in a full-screen dialog.
// The photographs mount only once it opens, so the page itself carries each picture once.
export default function GalleryDialog({ id, group, button, title, close }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const h = `${id}-h`;
  return (
    <>
      <button
        type="button"
        className="btn btn--secondary"
        aria-haspopup="dialog"
        aria-controls={id}
        onClick={() => { setOpen(true); ref.current?.showModal(); }}
      >
        {button} ({group.photos.length})
      </button>
      <dialog
        ref={ref}
        id={id}
        className="gallery-dialog ground-base"
        aria-labelledby={h}
        onClose={() => setOpen(false)}
        onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
      >
        <div className="wrap stack-4">
          <div className="gallery-dialog__head">
            <h2 id={h}>{title}</h2>
            <button type="button" className="btn btn--secondary" onClick={() => ref.current?.close()}>{close}</button>
          </div>
          {open && (
            <div className="grid">
              {group.photos.map((ph) => (
                <div className="tile tile--portrait span-4" key={ph.src}>
                  <div className="tile__media">
                    <GalleryImg ph={ph} sizes={coverSizes(ph, { vw: 92, tile: 1 }, { vw: 30, tile: 0.8 })} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
