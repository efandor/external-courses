import DomElement from "../DomElement/DomElement";
import css from "./task.module.css";
export class Task {
    constructor(text) {
        this.element = new DomElement({
            type: "div",
            className: css.task,
            html: `${text}`,
        }).element;
        this.element.setAttribute('contenteditable', 'true');
    }
}
