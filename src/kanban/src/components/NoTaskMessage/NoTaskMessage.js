import DomElement from "../DomElement/DomElement";
import css from './noTaskMessage.module.css'

export class NoTaskMessage {
    constructor() {
        this.element = new DomElement({
            type: "button",
            className: css.message,
            html: `
                <span">Create a new task list</span>
            `,
        }).element;
    }
}
