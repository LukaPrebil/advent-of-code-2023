import fs from "node:fs/promises";

export async function d1p1() {
  const input = await fs.readFile(`day1/input.txt`, "utf-8");
  const numbers = input.split("\n").map((line) => {
    const numeric = line.replace(/\D/g, "");
    return parseInt(`${numeric.at(0)}${numeric.at(-1)}`);
  });
  return numbers.reduce((a, b) => a + b, 0);
}
