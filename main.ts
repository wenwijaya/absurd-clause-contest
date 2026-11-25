// The Absurd Clause Contest — entry program.
// Writes one original absurd terms-of-service clause to /output/entry.txt.
// The clause is a single sentence of at most 200 characters: deadpan legal
// boilerplate ("at its sole discretion", "effective immediately upon
// acceptance") that quietly turns absurd at the stock photo of a stranger.

import { mkdirSync, writeFileSync } from "node:fs";

const CLAUSE =
  "The Company may, at its sole discretion, replace your reflection in all mirrors with a stock photo of a smiling stranger, effective immediately upon acceptance of these Terms.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  try {
    if (CLAUSE.length < 1 || CLAUSE.length > 200) {
      throw new Error(
        `clause length ${CLAUSE.length} is outside the 1-200 character gate`,
      );
    }
    mkdirSync("/output", { recursive: true });
    writeFileSync(OUTPUT_PATH, CLAUSE, "utf8");
  } catch (error) {
    console.error(
      "failed to write entry:",
      error instanceof Error ? error.message : error,
    );
    process.exit(1);
  }
}

main();
