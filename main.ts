import { chmodSync, copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

// The entry image ships in this repo next to main.ts. Running this program
// copies it, byte for byte, to <MAKEFUN_OUTPUT_DIR>/entry.png (falling back
// to /output when the env var is unset), so repeated runs are identical.
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const scriptDir: string = dirname(resolve(process.argv[1]));
const src: string = join(scriptDir, "entry.png");
const dest: string = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
chmodSync(dest, 0o644);
