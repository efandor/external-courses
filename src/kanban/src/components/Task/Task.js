import DomElement from "../DomElement/DomElement";
import css from "./task.module.css";
export class Task {
    constructor(text) {
        this.element = new DomElement({
            className: css.task,
            html: `${text}`,
        }).element;
    }
}
