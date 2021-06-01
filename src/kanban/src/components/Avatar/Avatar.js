import DomElement from "../DomElement/DomElement";
import css from "./avatar.module.css";
import avatar from '../../img/avatar.svg';
import vector from '../../img/vector.svg';

export class Avatar {
    constructor() {
        this.element = new DomElement({
            className: css.avatar,
            html: `
                <div class="${css.userpic}">
                    <img src="${avatar}" alt="Avatar">
                </div>
                <div class="${css.menu}">
                    <img class="${css.menuArrow}" src="${vector}" alt="Arrow">
                </div>
            `,
        }).element;
    }
}
