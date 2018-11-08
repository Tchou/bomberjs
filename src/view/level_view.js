import {Layer} from "./layer.js";
import {Observer} from "../utils/observer.js";

export class LevelView extends Observer {


    constructor(bg, fg) {
        super();
        this.bg = bg;
        this.fg = fg;
    }

    update(level, msg, ...args) {
        console.log(this);
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
        console.log(value);
        
        this.fg.context.clearRect(100,50,100,100);
        this.fg.context.fillColor = "#000000";
        this.fg.context.fillText(value,100,50);
        this.fg.context.fillRect(100,50,100,100);
    }



}