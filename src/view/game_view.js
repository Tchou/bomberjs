import {Layer} from "./layer.js";

export class GameView {

    constructor(id) {
        let div = document.getElementById(id);
        if (div == null) {
            throw Error ("Invalid element id '"+ id + "'");
        };
        this.bg = new Layer("bg");
        this.fg = new Layer("fg");
        this.options = new Layer("options");
        this.bg.attach(div);
        this.fg.attach(div);
        this.options.attach(div);
        this.bg.bringDown();
        this.options.bringUp();

    }

}