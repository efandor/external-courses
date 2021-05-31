import { headerDropDownMenu, menuArrow, avatar } from './rerender';
import cssHeader from "../components/Header/header.module.css";

export const toggleMenu = () => {
    menuArrow.classList.toggle(cssHeader.menuOpened);
    menuArrow.classList.toggle(cssHeader.menu);
    if (menuArrow.className === cssHeader.menuOpened) avatar.appendChild(headerDropDownMenu.element);
    if (menuArrow.className === cssHeader.menu) headerDropDownMenu.element.remove();
}
