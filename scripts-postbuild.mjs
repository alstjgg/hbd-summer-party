// Provenance sidecars live beside the assets in public/img so the impeccable
// tooling finds them and every shipping raster stays traceable. They are
// working notes, not page content, so they are stripped from the served
// output rather than published alongside the invitation.
import { readdir, unlink } from 'node:fs/promises';
import { join } from 'node:path';

const dir = 'dist/img';
const files = await readdir(dir);
let n = 0;
for (const f of files) {
  if (f.endsWith('.json')) {
    await unlink(join(dir, f));
    n++;
  }
}
console.log(`postbuild: removed ${n} provenance sidecar(s) from ${dir}`);
