import DomElement from "../DomElement/DomElement";
import css from "./headerDropDownMenu.module.css";

export class HeaderDropDownMenu {
    constructor() {
        this.element = new DomElement({
            type: "div",
            className: css.dropDownMenu,
            html:   `<div class="${css.menuWrapper}">
                        <div>
                            <span class="${css.menuItemTop}">Clear cache</span>
                        </div>
                        <div>
                            <span class="${css.menuItem}">My tasks</span>
                        </div>
                        <div>
                            <span class="${css.menuItem}">Log out</span>
                        </div>
                    </div>`,
        }).element;
    }
}
