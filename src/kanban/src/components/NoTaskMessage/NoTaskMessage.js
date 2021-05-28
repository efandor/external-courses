import DomElement from "../DomElement/DomElement";
import css from './noTaskMessage.module.css'

export class NoTaskMessage {
    constructor() {
        this.element = new DomElement({
            type: "div",
            className: css.message,
            html: `
                <span">There are no task to do. Create a new task list</span>
            `,
        }).element;
    }
}
