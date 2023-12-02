import fs from "node:fs/promises";

/**
 * @returns {Promise<{[id: number]: {red: number, green: number, blue: number}}>}
 */
export async function parseGames() {
    const input = await fs.readFile("day2/testinput.txt", "utf-8");
    const gamesRaw = input.split("\n");
    const games = gamesRaw.map((game) => {
        const [idRaw, gameRaw] = game.split(": ");
        const id = parseInt(idRaw.split(" ")[1]);
        const blocks = gameRaw.split("; ");
        const maxShown = blocks.reduce((acc, block) => {
            const values = block.split(", ");
            const redValue = values.find((value) => value.includes("red"))?.split(" ")[0] ?? 0;
            const greenValue = values.find((value) => value.includes("green"))?.split(" ")[0] ?? 0;
            const blueValue = values.find((value) => value.includes("blue"))?.split(" ")[0] ?? 0;
            return {
                red: Math.max(acc.red, redValue),
                green: Math.max(acc.green, greenValue),
                blue: Math.max(acc.blue, blueValue),
            };
        }, { red: 0, green: 0, blue: 0 });
        return [id, maxShown];
    });
    return Object.fromEntries(games);
}