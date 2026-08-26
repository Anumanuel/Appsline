// Isolates the website inside the mockup.
//
// Temporal variance alone is not enough: the After Effects background moves
// and lights too, so the whole 720x720 frame "varies". The website is the
// only region that swings between the page's DARK and LIGHT sections, so
// require both extremes at the same pixel.
import { openSync, readSync, closeSync, statSync } from "node:fs";
const S = 720, FRAME = S * S;
const path = new URL("./full.gray", import.meta.url);
const fd = openSync(path, "r");
const n = Math.floor(statSync(path).size / FRAME);
const buf = Buffer.alloc(FRAME);
const lo = new Uint8Array(FRAME).fill(255), hi = new Uint8Array(FRAME);
for (let f = 4; f < n - 2; f++) {
  readSync(fd, buf, 0, FRAME, f * FRAME);
  for (let i = 0; i < FRAME; i++) { if (buf[i] < lo[i]) lo[i] = buf[i]; if (buf[i] > hi[i]) hi[i] = buf[i]; }
}
const isSite = (i) => lo[i] < 70 && hi[i] > 200;
const rowV = (y) => { let c = 0; for (let x = 0; x < S; x++) if (isSite(y*S+x)) c++; return c/S; };
const colV = (x) => { let c = 0; for (let y = 0; y < S; y++) if (isSite(y*S+x)) c++; return c/S; };
const T = 0.35;
let top=0; while (top<S && rowV(top)<T) top++;
let bot=S-1; while (bot>top && rowV(bot)<T) bot--;
let left=0; while (left<S && colV(left)<T) left++;
let right=S-1; while (right>left && colV(right)<T) right--;
console.log(`inner website in the 720x720 frame:`);
console.log(`  x ${left}..${right}  y ${top}..${bot}   (${right-left+1} x ${bot-top+1})`);
console.log(`  ffmpeg: crop=${right-left+1}:${bot-top+1}:${left}:${top}`);
console.log(`  aspect: ${((right-left+1)/(bot-top+1)).toFixed(3)}`);
console.log(`\nedge profile (fraction of the row/col that behaves like page):`);
for (const y of [top-2,top-1,top,top+1,bot-1,bot,bot+1,bot+2]) if (y>=0&&y<S) console.log(`  y=${String(y).padStart(3)} ${rowV(y).toFixed(2)}`);
for (const x of [left-2,left-1,left,left+1,right-1,right,right+1,right+2]) if (x>=0&&x<S) console.log(`  x=${String(x).padStart(3)} ${colV(x).toFixed(2)}`);
closeSync(fd);
