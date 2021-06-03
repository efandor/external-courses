import DomElement from "../DomElement/DomElement";
import css from "./headerDropDownMenu.module.css";
export class HeaderDropDownMenu {
    constructor() {
        this.element = new DomElement({
            className: css.dropDownMenu,
            html: `
                    <div class="${css.menuWrapper}">
                        <div>
                            <span class="${css.menuItem}">My account</span>
                        </div>
                        <div>
                            <span class="${css.menuItem}">My tasks</span>
                        </div>
                        <div>
                            <span class="${css.menuItem}">Log out</span>
                        </div>
                    </div>
                `,
        }).element;
    }
}
