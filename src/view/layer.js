
export class Layer {

    constructor(name) {
        this.name = name || "";
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.style.zIndex = "0";
    }

    get width () {
        return this.canvas.width;
    }

    get height () {
        return this.canvas.height;
    }

    clear() {
        this.context.clearRect(0,0,this.width, this.height);
    }

    resize() {
        let parent = this.canvas.parentElement;
        if (parent) {
            let w = parent.offsetWidth;
            let h = parent.offsetHeight;
            this.canvas.width = w;
            this.canvas.height = h;
        }
    }


    bringUp() {
        let z = this.canvas.zIndex;
        z = z || 0;
        this.canvas.zIndex = "" + ((+z)+1);
    }
    
    bringDown() {
        let z = this.canvas.zIndex;
        z = z || 0;
        this.canvas.zIndex = "" + ((+z)-1);
    }
    attach (div) {
        div.appendChild(this.canvas);
        this.canvas.style.position = "absolute";
        this.canvas.style.top = "0";
        this.canvas.style.left = "0";
        this.resize();
    }
}