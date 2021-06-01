import DomElement from "../DomElement/DomElement";
import css from "./createListHeader.module.css";
import cross from '../../img/cross.svg';

export class CreateListHeader {
    constructor() {
        this.element = new DomElement({
            type: "button",
            className: css.addListButton,
            html: `
                <img class="${css.addListImg}" src="${cross}" alt="Add list">
                <span class="${css.addListText}">Create new list</span>
            `,
        }).element;
    }
}
