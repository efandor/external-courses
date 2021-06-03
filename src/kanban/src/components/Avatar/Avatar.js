import DomElement from "../DomElement/DomElement";
import css from "./avatar.module.css";
import avatar from '../../assets/images/avatar.svg';
import menuarrow from '../../assets/images/menuarrow.svg';

export class Avatar {
    constructor() {
        this.element = new DomElement({
            className: css.avatar,
            html: `
                <div class="${css.userpic}">
                    <img src="${avatar}" alt="Avatar">
                </div>
                <div class="${css.menu}">
                    <img class="${css.menuArrow}" src="${menuarrow}" alt="Arrow">
                </div>
            `,
        }).element;
    }
}
