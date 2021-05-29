import DomElement from "../DomElement/DomElement";
import css from "./task.module.css";
export class Task {
    constructor(text) {
        this.element = new DomElement({
            type: "input",
            className: css.task,
            html: `${text}`,
        }).element;
        this.element.setAttribute('placeholder', 'Add description');
        this.element.setAttribute('type', 'text');
        this.element.setAttribute('value', text);
    }
}
