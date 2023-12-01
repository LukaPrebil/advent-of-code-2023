import fs from "node:fs/promises";

export async function d1p1() {
  const input = await fs.readFile(`day1/input.txt`, "utf-8");
  const numbers = input.split("\n").map((line) => {
    const numeric = line.replace(/\D/g, "");
    return parseInt(`${numeric.at(0)}${numeric.at(-1)}`);
  });
  return numbers.reduce((a, b) => a + b, 0);
}

export async function d1p2() {
  const input = await fs.readFile(`day1/input.txt`, "utf-8");
  const numbers = input.split("\n").map((line) => {
    const numeric = line
      .replace(
        /(on(?=e)|tw(?=o)|thre(?=e)|four|five|six|seven|eigh(?=t)|nine)/g,
        (match) => {
          switch (match) {
            case "one":
            case "on":
              return 1;
            case "two":
            case "tw":
              return 2;
            case "three":
            case "thre":
              return 3;
            case "four":
              return 4;
            case "five":
              return 5;
            case "six":
              return 6;
            case "seven":
              return 7;
            case "eight":
            case "eigh":
              return 8;
            case "nine":
              return 9;
          }
        }
      )
      .replace(/\D/g, "");
    const firstlast = parseInt(`${numeric.at(0)}${numeric.at(-1)}`);
    console.log(numeric, firstlast);
    return firstlast;
  });
  return numbers.reduce((a, b) => a + b, 0);
}
