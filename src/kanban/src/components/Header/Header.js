import DomElement from "../DomElement/DomElement";
import css from "./header.module.css";
import logo from '../../img/logo.svg';
export class Header {
    constructor() {
        this.element = new DomElement({
            type: "header",
            className: css.header,
            html: `
                <div class="${css.title}">
                    <img class="${css.titleImg}" src="${logo}" alt="Logo">
                    <a class="${css.titleText}" href="#" target="blank">Awesome Kanban Board</a>
                </div>
                <div class="${css.rightHeader}"></div>
            `,
        }).element;
    }
}
