import { Board } from "./components/Board/Board";
import { Header } from "./components/Header/Header";
import { HeaderDropDownMenu } from "./components/HeaderDropDownMenu/HeaderDropDownMenu";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

import cssFooter from './components/Footer/footer.module.css';
import cssHeader from "./components/Header/header.module.css";
// import toggleMenu from './utils/toggleMenu';


import "./main.css";

const header = new Header();
const footer = new Footer();
const headerDropDownMenu = new HeaderDropDownMenu();
const main = new Main();

document.body.appendChild(header.element);
document.body.appendChild(main.element);
document.body.appendChild(footer.element);

const menuArrow = document.getElementsByClassName(cssHeader.menu)[0];
const avatar = document.getElementsByClassName(cssHeader.avatar)[0];

const toggleMenu = () => {
    menuArrow.classList.toggle(cssHeader.menuOpened);
    menuArrow.classList.toggle(cssHeader.menu);
    if (menuArrow.className === cssHeader.menuOpened) avatar.appendChild(headerDropDownMenu.element);
    if (menuArrow.className === cssHeader.menu) headerDropDownMenu.element.remove();
};

menuArrow.addEventListener('click', toggleMenu);