import DomElement from "../DomElement/DomElement";
import css from './main.module.css'
export class Main {
    constructor() {
        this.element = new DomElement({
            type: "main",
            className: css.main,
        }).element;
    }
}
