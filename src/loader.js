import * as utils from "./utils/utils.js";
import * as map from "./model/map.js";
import * as level from "./model/level.js";

export async function loadLevel(url) {

    let json = await utils.ajax(url, "GET");

    let obj = JSON.parse(json);

    let omap = obj.map.join("").split("");
    
    let ow = +obj.width;
    let oh = +obj.height;
    let cells = obj.cells;

    if (omap.length != ow * oh) {
        throw Error ("invalid map object");
    }
    let levelMapA = omap.map ( (c) => {
        let cell = cells[c];
        console.log(cell);
        if ( !cell || !cell.kind) return null;
        switch (cell.kind) {
            case "WALL":
                return new map.Wall();
            case "BONUS":
                return new map.Bonus();
            case "OBSTACLE":
                return new map.Obstacle(cell.health);
            default:
                return null;
        }
    });
    let levelMap = new map.Map(levelMapA, ow, oh);
    let levelTimer = +(obj.timer || 180);
    let levelName = obj.name;

    return new level.Level(levelName, levelMap, levelTimer, obj.hasExit);

}