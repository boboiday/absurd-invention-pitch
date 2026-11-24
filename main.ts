import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "A toaster that ejects your bread with a tiny parachute, so it never lands butter-side down on your kitchen floor again.";

if (SENTENCE.length < 1 || SENTENCE.length > 220) {
  throw new Error("sentence must be 1-220 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
