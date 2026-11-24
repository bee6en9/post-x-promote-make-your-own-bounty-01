// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
//
// The entry itself is the X post: one post of your own quoting or linking
// make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached and make.fun (or @makefunai) plus your play
// code in its text. This program does nothing about the post: it only copies
// POST.json from the repository root into /output, where the gate reads it.
// No network, no dependencies, no other output. The copy is byte for byte,
// so running it twice always writes the same /output/POST.json.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
