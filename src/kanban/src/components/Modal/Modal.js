import DomElement from "../DomElement/DomElement";
import css from "./modal.module.css";
export class Modal {
    constructor(text) {
        this.element = new DomElement({
            className: css.modal,
            html: `
                <div class="${css.modalContent}">
                    <div class="${css.closeModal}">
                        <span>&times;</span>
                    </div>
                    <span class="${css.text}">${text}</span>
                    <input class="${css.modalInput}" type="text" placeholder="Type here"></span>
                </div>
            `,
        }).element;
    }
}
