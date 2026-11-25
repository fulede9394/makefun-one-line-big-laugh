// One funny line that lands on its own.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My code review had one comment: 'have you tried turning yourself off and on again?'";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
