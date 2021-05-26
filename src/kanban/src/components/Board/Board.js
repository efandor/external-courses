import DomElement from "../DomElement/DomElement";
import css from "./board.module.css";
import html from './board.html'

export class Board {
    constructor() {
        this.element = new DomElement({
            className: css.header,
            html,
        }).element;
    }
}
