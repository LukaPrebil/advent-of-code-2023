import { parseGames } from "./part1.js";

// 12 red cubes, 13 green cubes, and 14 blue cubes

export async function d2p2() {
  const games = await parseGames();
  const sumOfPowers = Object.values(games).reduce((acc, { red, green, blue }) => {
    return acc + red * green * blue;
  }, 0);
  return sumOfPowers;
}
