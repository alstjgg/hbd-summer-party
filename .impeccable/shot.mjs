import { chromium } from 'playwright-core';
const EXE = process.env.HOME + '/Library/Caches/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-mac-arm64/chrome-headless-shell';
const URL = process.env.SHOT_URL || 'http://127.0.0.1:4321/';

const shots = [
  { name: 'mobile',  width: 390,  height: 844,  dsr: 2, full: true },
  { name: 'desktop', width: 1440, height: 900,  dsr: 1, full: true },
  // Fix 7: the hero reproduction checkpoint, at the approved comp's own
  // pixel dimensions (1024x1536), so the comparison is like-for-like.
  { name: 'hero-repro', width: 1024, height: 1536, dsr: 1, full: false },
];

const browser = await chromium.launch({ executablePath: EXE });
for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: s.dsr,
    reducedMotion: 'reduce',
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
  });
  await page.evaluate(() => Promise.all(
    Array.from(document.images).filter((i) => !i.complete)
      .map((i) => new Promise((r) => { i.onload = i.onerror = r; }))
  ));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `.impeccable/review/${s.name}.png`, fullPage: s.full });
  if (s.full) await page.screenshot({ path: `.impeccable/review/${s.name}-fold.png`, fullPage: false });
  console.log(`${s.name}: ${s.width}x${s.height} @${s.dsr}x captured`);
  await ctx.close();
}
await browser.close();
