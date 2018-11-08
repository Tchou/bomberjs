import * as loader from "./loader.js";
import {LevelView} from "./view/level_view.js";
import {GameView} from "./view/game_view.js";

export function init (id) {
    window.addEventListener("load", () => {
        let elem = document.getElementById(id);
        if (!elem) {
            throw new Error("Initialisation error: element with id '" + id + "' not found");
        } else {
            console.log('foo');
            loader.loadLevel("assets/levels/test.json")
                  .then((l)=> {
                    let gv = new GameView(id);
                    let lv = new LevelView(gv.bg, gv.fg);
                    l.addObserver(lv);
                    function loop (t) {
                        l.tick();
                        
                        requestAnimationFrame(loop);
                    };
                    l.start();
                    loop(performance.now());
                    

                  })
                  .catch((e) => console.log(e));            

        }

    });

}
