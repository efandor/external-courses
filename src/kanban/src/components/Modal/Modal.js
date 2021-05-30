import DomElement from "../DomElement/DomElement";
import css from "./modal.module.css";
export class Modal {
    constructor(text) {
        this.element = new DomElement({
            type: "div",
            className: css.modal,
            html: `
<div class="${css.modalContent}">
    <span class="${css.closeModal}">&times;</span>
    <span class="${css.text}">${text}</span>
    <input class="${css.modalInput}" type="text" placeholder="Type here"></span>
</div>
        `,
        }).element;
    }
}
