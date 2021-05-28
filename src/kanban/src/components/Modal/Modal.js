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

    showModal = () => {
        const modal = document.getElementsByClassName(css.modal)[0];
        const closeButton = document.getElementsByClassName(css.closeModal)[0];
        modal.element.style.display = 'block';

        const closeModal = () => {
            modal.element.style.display = 'none';
        }
        modal.addEventListener('click', showModal);
    }
}
