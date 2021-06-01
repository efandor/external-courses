import DomElement from "../DomElement/DomElement";
import css from "./cardDropDownMenu.module.css";
export class CardDropDownMenu {
    constructor() {
        this.element = new DomElement({
            className: css.dropDownMenu,
            html: `
                <div class="${css.menuWrapper}">
                    <span class="${css.menuItem}">Delete list</span>
                </div>
                `,
        }).element;
        this.modal = new DomElement({
            className: css.modal,
        }).element;
    }
}
