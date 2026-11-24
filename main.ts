// Seventeen Syllables of Debugging — make.fun bounty entry.
// Writes one original 5-7-5 haiku about debugging to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Cursor blinks at three", // 5: Cur-sor(2) blinks(1) at(1) three(1)
  "one breakpoint holds its breath", // 7: one(1) break-point(2) holds(1) its(1) breath(1)
  "and I am the bug", // 5: and(1) I(1) am(1) the(1) bug(1)
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku + "\n", "utf8");
