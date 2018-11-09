import {Layer} from "./layer.js";
import {Observer} from "../utils/observer.js";
import {Tile} from "./tile.js";

export class LevelView extends Observer {


    constructor(bg, fg) {
        super();
        this.bg = bg;
        this.fg = fg;
    }

    update(level, msg, ...args) {
        switch (msg) {

            case "TICK":
                this.drawTimer(level.timer);
                break;
            case "START":
                this.drawTimer(level.timer);
                //other things
                break;
            default:

        }
    }

    drawTimer (value) {
        if (value < 10) {
            value = "00" + value;
        } else if (value < 100) {
            value = "0" + value;
        } else {
            value = "" + value;
        }

        Tile.clear(this.fg.context, 7,0,3,1);
        this.fg.context.lineWidth = 3;
        this.fg.context.font = "48px serif";
        this.fg.context.strokeStyle = "#000000";  
        this.fg.context.fillStyle = "#ffff00";
        Tile.drawText(this.fg.context, 7, 0, value);
 
        this.fg.context.fill();
        this.fg.context.stroke();
    }



}