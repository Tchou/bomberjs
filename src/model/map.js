import { Observable } from "../utils/observer.js";
import * as utils from "../utils/utils.js";

export class Map extends Observable {

    constructor(a, w, h) {
        super();
        utils.finalStatic(this, "map", a);
        utils.finalStatic(this, "width", w);
        utils.finalStatic(this, "height", h);
    }

    getCell (x,y) {

        if (x < this.width && y < this.height)
            return this.map[y*this.width + x];
        else
            throw new Error("invalid map access " + x + ", " + y)
    }
}

export class Cell extends Observable {

    constructor () {
        super();
    }
}

export class Wall extends Cell {

    constructor() {
        super();        
    }
}

export class Obstacle extends Cell {

    constructor(health) {
        super();
        this.health = health || 1;  
    }
}

export class Bonus extends Cell {

    constructor() {
        super();        
    }
}
