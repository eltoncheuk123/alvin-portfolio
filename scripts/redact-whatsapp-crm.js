const sharp = require("sharp");
const fs = require("fs");

const SRC =
  "C:/Users/business/AppData/Local/Temp/cursor/screenshots/whatsapp-crm-clean.png";
const OUT = "public/projects/whatsapp-crm.jpg";

// CSS viewport boxes for phone text only (leaf nodes from DOM)
const cssBoxes = [
  // status: only digits inside 「已連線（852…）」
  { x: 858, y: 294, w: 112, h: 24 },
  // first contact title is a phone
  { x: 744.4, y: 341.2, w: 122, h: 22 },
  // phone lines under contacts
  { x: 744.4, y: 363.2, w: 122, h: 22 },
  { x: 744.4, y: 462, w: 112, h: 22 },
  { x: 744.4, y: 560.8, w: 122, h: 22 },
  { x: 744.4, y: 659.6, w: 138, h: 22 },
  { x: 744.4, y: 758.4, w: 122, h: 22 },
  { x: 744.4, y: 857.2, w: 154, h: 22 },
  { x: 744.4, y: 956, w: 122, h: 22 },
  { x: 744.4, y: 1054.8, w: 112, h: 22 },
];

async function blurPhone(img, left, top, width, height) {
  const L = Math.max(0, Math.floor(left));
  const T = Math.max(0, Math.floor(top));
  const W = Math.max(1, Math.floor(width));
  const H = Math.max(1, Math.floor(height));

  const region = await img
    .clone()
    .extract({ left: L, top: T, width: W, height: H })
    .toBuffer();

  const tw = Math.max(2, Math.floor(W / 40));
  const th = Math.max(1, Math.floor(H / 12));

  const mosaicked = await sharp(region)
    .resize(tw, th, { kernel: "nearest" })
    .resize(W, H, { kernel: "nearest" })
    .blur(2)
    .png()
    .toBuffer();

  const frost = await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 228, g: 230, b: 232, alpha: 0.62 },
    },
  })
    .png()
    .toBuffer();

  const combined = await sharp(mosaicked)
    .composite([{ input: frost, blend: "over" }])
    .png()
    .toBuffer();

  return { input: combined, left: L, top: T };
}

async function main() {
  const meta = await sharp(SRC).metadata();
  // Width matches devicePixelRatio exactly; prefer it for both axes
  // (height can be slightly cropped by the screenshot tool).
  const scale = meta.width / 1920;

  const composites = [];
  for (const b of cssBoxes) {
    const left = b.x * scale;
    const top = b.y * scale;
    const width = Math.min(b.w * scale + 4, meta.width - left);
    const height = Math.min(b.h * scale + 2, meta.height - top);
    if (width < 4 || height < 4) continue;
    if (top >= meta.height || left >= meta.width) continue;
    composites.push(await blurPhone(sharp(SRC), left, top, width, height));
  }

  await sharp(SRC)
    .composite(composites)
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(OUT);

  console.log(
    "phone-only blur applied",
    composites.length,
    "regions",
    fs.statSync(OUT).size,
    `${meta.width}x${meta.height}`,
    `scale=${scale}`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
