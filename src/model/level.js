import * as map from "./map.js";
import { Observable } from "../utils/observer.js";

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

export class Level extends Observable {
    constructor (name, map, timer, hasExit) {
        super();
        this.map = map;
        this.name = name;
        this.timer = timer;
        this.startTime = 0;
        this.state = Level.STATE_LOADED;
        if (hasExit)
            this.exit = choose_exit (map);
        else
            this.exit = null;
    }
    start () {
        this.startTime = performance.now();
        this.state = Level.STATE_PLAYING;
        this.notifyObservers("START");
    }

    tick () {
        if (this.state != Level.STATE_PLAYING) return;
        let now = performance.now();
        if (now - this.startTime > 1000) {
            this.startTime = now;
            this.timer--;
            if (this.timer <= 0) {
                this.state = Level.STATE_TIMEOUT;
                this.notifyObservers("TIMEOUT");
            } else {
                this.notifyObservers("TICK", this.timer);
            }
        }
    }
}
Level.STATE_LOADED = 0;
Level.STATE_PLAYING = 1;
Level.STATE_TIMEOUT = 2;
