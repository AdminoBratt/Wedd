// Serves out/ on 127.0.0.1 and takes full-page Playwright screenshots at four sizes into shots/<width>.png.
import { chromium } from '@playwright/test';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('out');
const outDir = path.resolve('shots');
const sizes = [[1440, 900], [1024, 768], [768, 1024], [390, 844]];
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.txt': 'text/plain' };

if (!fs.existsSync(path.join(root, 'index.html'))) { console.error('shots: out/index.html is missing, run npm run build first'); process.exit(1); }
fs.mkdirSync(outDir, { recursive: true });

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  let f = path.join(root, p);
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (!fs.existsSync(f) && fs.existsSync(f + '.html')) f += '.html';
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch();
try {
  for (const [w, h] of sizes) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(url, { waitUntil: 'networkidle' });
    // walk the page once so lazy photographs load, then back to the top
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < height; y += h) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(120); }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);
    const file = path.join(outDir, `${w}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`shots: ${w}x${h} -> ${path.relative(process.cwd(), file)}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
