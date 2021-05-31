import { headerDropDownMenu, menuArrow, avatar, rerender } from './rerender';
import { deleteCache, get } from './storage';
import state from "../components/State/State";
import temlateState from "../components/Constants/constants";
import cssHeader from "../components/Header/header.module.css";
import cssMenu from "../components/HeaderDropDownMenu/headerDropDownMenu.module.css";


export const toggleMenu = () => {
    menuArrow.classList.toggle(cssHeader.menuOpened);
    menuArrow.classList.toggle(cssHeader.menu);
    if (menuArrow.className === cssHeader.menuOpened) {
        avatar.appendChild(headerDropDownMenu.element);
        const clearButton = document.body.getElementsByClassName(cssMenu.menuItemTop)[0];
        clearButton.addEventListener('click', () => {
            deleteCache('kanbanDataPLN');
            state.length = 0;
            temlateState.dataArray.forEach(item => state.push(item));
            console.log('state',  state);
            rerender();
        });
    }

    if (menuArrow.className === cssHeader.menu) headerDropDownMenu.element.remove();
}
