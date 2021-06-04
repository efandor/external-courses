import DomElement from "../DomElement/DomElement";
import css from "./modal.module.css";

const createTemplate = (title, isInput = false) => {
    let listTemplate = `
                        <div class="${css.modalContent}">
                            <div class="${css.closeModal}">
                                <span>&times;</span>
                            </div>
                            <span class="${css.text}">${title}</span>
    `;

    if (isInput) {
        listTemplate += `<input class="${css.modalInput}" type="text" placeholder="Type here"></span>`;
    };

    listTemplate += `</div>`;
    
    return listTemplate;
}
export class Modal {
    constructor(titleText, hasInput) {
        this.element = new DomElement({
            className: css.modal,
            html: createTemplate(titleText, hasInput),
        }).element;
    }
}
