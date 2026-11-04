// Builds the static site into dist/: copies index.html and downloads the
// photos listed in scripts/images.json from arham.org (resized through its
// image optimizer where "width" is set). A failed download is logged and
// skipped so one missing photo never breaks the deploy.
import { mkdir, copyFile, writeFile, readFile } from 'node:fs/promises';

const root = new URL('..', import.meta.url);
const dist = new URL('dist/', root);
const cfg = JSON.parse(await readFile(new URL('scripts/images.json', root), 'utf8'));

await mkdir(new URL('images/', dist), { recursive: true });
await copyFile(new URL('index.html', root), new URL('index.html', dist));

async function get(url, tries = 3) {
  for (let i = 1; i <= tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'aysg-site-build', Accept: 'image/jpeg,image/png,image/*' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (i === tries) throw e;
      await new Promise(r => setTimeout(r, 1000 * i));
    }
  }
}

let ok = 0, failed = 0;
await Promise.all(Object.entries(cfg.images).map(async ([name, img]) => {
  const url = img.resize === false
    ? cfg.source + img.path
    : `${cfg.source}/_next/image?url=${encodeURIComponent(img.path)}&w=${img.width}&q=78`;
  try {
    const buf = await get(url);
    await writeFile(new URL(`images/${name}`, dist), buf);
    ok++;
    console.log(`ok   ${name} ${Math.round(buf.length / 1024)}KB`);
  } catch (e) {
    failed++;
    console.warn(`skip ${name}: ${e.message}`);
  }
}));
console.log(`images: ${ok} downloaded, ${failed} skipped`);
