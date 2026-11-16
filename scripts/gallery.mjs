// Runs before `npm run dev` and `npm run build`. Reads content/gallery.json (edited by the admin at
// /admin), and writes content/gallery.generated.json with each photo's size and srcset, so the page
// never ships a phone camera's full-size file.
//  - A stand-in under /photos/ already has its -500 / -960 / -1280 files beside it: those are used.
//  - An upload under /uploads/ is resized once into public/uploads/sizes/ (gitignored, rebuilt on
//    the host from the original).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const pub = path.join(root, 'public');
const src = path.join(root, 'content', 'gallery.json');
const out = path.join(root, 'content', 'gallery.generated.json');
const sizesDir = path.join(pub, 'uploads', 'sizes');
const WIDTHS = [500, 960, 1280, 1920];

const gallery = JSON.parse(fs.readFileSync(src, 'utf8'));

async function resolve(photo) {
  const url = photo.image;
  const file = path.join(pub, url.replace(/^\//, ''));
  if (!url.startsWith('/') || !fs.existsSync(file)) {
    console.warn(`gallery: skipped, file missing: ${url}`);
    return null;
  }
  const meta = await sharp(file).rotate().metadata();
  // .rotate() honours the camera's EXIF orientation; metadata() reports the stored size, so swap
  const turned = (meta.orientation ?? 1) >= 5;
  const width = turned ? meta.height : meta.width;
  const height = turned ? meta.width : meta.height;
  const files = [];

  if (url.startsWith('/photos/')) {
    // stand-in: photo-<id>.jpg or photo-<id>-<w>.jpg, siblings photo-<id>-<w>.jpg
    const id = path.basename(url).replace(/(-\d+)?\.jpg$/, '');
    for (const w of WIDTHS) {
      const f = `/photos/${id}-${w}.jpg`;
      if (w < width && fs.existsSync(path.join(pub, f))) files.push([f, w]);
    }
    files.push([url, width]);
  } else {
    fs.mkdirSync(sizesDir, { recursive: true });
    const base = path.basename(url).replace(/\.[^.]+$/, '');
    for (const w of WIDTHS) {
      if (w >= width) continue;
      const name = `${base}-${w}.jpg`;
      const dest = path.join(sizesDir, name);
      if (!fs.existsSync(dest) || fs.statSync(dest).mtimeMs < fs.statSync(file).mtimeMs) {
        await sharp(file).rotate().resize({ width: w }).jpeg({ quality: 80, mozjpeg: true }).toFile(dest);
      }
      files.push([`/uploads/sizes/${name}`, w]);
    }
    // the largest step stands in for the original when the upload is wider than 1920
    if (width <= WIDTHS[WIDTHS.length - 1]) files.push([url, width]);
  }

  const [largest] = files[files.length - 1];
  return {
    src: largest,
    srcSet: files.map(([f, w]) => `${f} ${w}w`).join(', '),
    width: files[files.length - 1][1],
    height: Math.round((height * files[files.length - 1][1]) / width),
    alt: photo.alt ?? '',
    pos: photo.position || undefined,
    own: !url.startsWith('/photos/'),
  };
}

const result = {};
for (const [key, group] of Object.entries(gallery)) {
  const photos = [];
  for (const p of group.photos ?? []) {
    const r = await resolve(p);
    if (r) photos.push(r);
  }
  result[key] = { label: group.label, photos };
}
fs.writeFileSync(out, JSON.stringify(result, null, 1));
console.log(`gallery: ${Object.values(result).map((g) => `${g.label} ${g.photos.length}`).join(', ')}`);
