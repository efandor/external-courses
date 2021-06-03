import { HeaderDropDownMenu } from "../components/HeaderDropDownMenu/HeaderDropDownMenu";
import { menuArrow, avatar } from './rerender';
import cssAvatar from "../components/Avatar/avatar.module.css";

const headerDropDownMenu = new HeaderDropDownMenu();

export const toggleMenu = () => {
    menuArrow.classList.toggle(cssAvatar.opened);
    if (menuArrow.className === `${cssAvatar.menu} ${cssAvatar.opened}`) avatar.element.appendChild(headerDropDownMenu.element);
    if (menuArrow.className === `${cssAvatar.menu}`) headerDropDownMenu.element.remove();
}
