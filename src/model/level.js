import * as map from "./map.js";

function choose_exit (omap) {
    let obstacles = [];
    omap.map.forEach((c, i)=> {
        let y = (i / omap.width) | 0;
        let x = (i % omap.width) | 0;
        if (c && c instanceof map.Obstacle) {
            obstacles.push ({ x : x, y : y});
        }
    });
    return obstacles[ (Math.random() * obstacles.length)|0 ];

}

export class Level {
    constructor (name, map, timer, hasExit) {
        this.map = map;
        this.name = name;
        this.timer = timer;
        if (hasExit)
            this.exit = choose_exit (map);
        else
            this.exit = null;
    }
}