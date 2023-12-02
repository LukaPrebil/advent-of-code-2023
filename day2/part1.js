import { parseGames } from "./parser.js";

export async function d2p1() {
    const games = await parseGames();
    const validGames = Object.entries(games).filter(([, { red, green, blue }]) => {
        return red <= 12 && green <= 13 && blue <= 14;
    });
    return validGames.map(([id]) => parseInt(id)).reduce((acc, id) => acc + id, 0);
}
