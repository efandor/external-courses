import { HeaderDropDownMenu } from "../components/HeaderDropDownMenu/HeaderDropDownMenu";
import cssHeader from "../components/Header/header.module.css";

const headerDropDownMenu = new HeaderDropDownMenu();
const menuArrow = document.getElementsByClassName(cssHeader.menu)[0];
const avatar = document.getElementsByClassName(cssHeader.avatar)[0];

const toggleMenu = () => {
    menuArrow.classList.toggle(cssHeader.menuOpened);
    menuArrow.classList.toggle(cssHeader.menu);
    if (menuArrow.className === cssHeader.menuOpened) avatar.appendChild(headerDropDownMenu.element);
    if (menuArrow.className === cssHeader.menu) headerDropDownMenu.element.remove();
};

console.log(menuArrow);
menuArrow.addEventListener('click', toggleMenu);

export default toggleMenu;

