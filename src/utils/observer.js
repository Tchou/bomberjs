export class Observer {

    update(subject, ...args) {

    }

}
export class Observable {

    constructor() {
        this.observers = [];
    }

    addObserver(obs) {
        if (this.observers.indexOf(obs) < 0) {
            this.observers.push(obs);
        };
        return this;
    }

    removeObserver(obs) {
        let i = this.observers.indexOf(obs);
        if (i >= 0) {
            this.observers.splice(i, 1);
        };
        return this;
    }

    notifyObservers(...args) {
        args = [this].concat(args);
        this.observers.forEach((o) => o.update.apply(o,args));
        return this;
    }
}
