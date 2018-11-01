import * as loader from "./loader.js";

export function init (id) {
    window.addEventListener("load", () => {
        let elem = document.getElementById(id);
        if (!elem) {
            throw new Error("Initialisation error: element with id '" + id + "' not found");
        } else {
            console.log('foo');
            loader.loadLevel("assets/levels/test.json")
                  .then((l)=> console.log(l))
                  .catch((e) => console.log(e));            

        }

    });

}
