import { Header } from "../components/Header/Header";
import { HeaderDropDownMenu } from "../components/HeaderDropDownMenu/HeaderDropDownMenu";
import { Main } from "../components/Main/Main";
import { Card } from "../components/Card/Card";
import { Task } from "../components/Task/Task";
import { Footer } from "../components/Footer/Footer";
import { NoTaskMessage } from "../components/NoTaskMessage/NoTaskMessage";
import state from "../components/State/State";
import { addTask } from './addTask';
import { deleteList } from './deleteList';
import { selectTask } from './selectTask';
import { createList } from './createList';
import { toggleMenu } from './toggleMenu';
import { updateTasksNumber } from './updateTasksNumber';
import { set } from './storage';
import cssHeader from "../components/Header/header.module.css";
import cssCard from "../components/Card/card.module.css";
import cssFooter from '../components/Footer/footer.module.css';

export const header = new Header();
export const headerDropDownMenu = new HeaderDropDownMenu();
export const main = new Main();
export const footer = new Footer();
const noTaskMessage = new NoTaskMessage();

document.body.appendChild(header.element);
document.body.appendChild(main.element);
document.body.appendChild(footer.element);

export const menuArrow = document.getElementsByClassName(cssHeader.menu)[0];
export const avatar = document.getElementsByClassName(cssHeader.avatar)[0];
export const finishedTasksNumber = document.body.getElementsByClassName(cssFooter.finishedTask)[0];
export const activeTasksNumber = document.body.getElementsByClassName(cssFooter.activeTask)[0];
export let cardMenu = [...document.body.getElementsByClassName(cssCard.itemMenuTop)];

const newListButton = header.element.getElementsByClassName(cssHeader.addListButton)[0];
let firstNewTaskButton = document.body.getElementsByClassName(cssCard.itemMenuDown)[0];
let restNewTaskButton = [...document.body.getElementsByClassName(cssCard.itemMenuDown)].slice(1);
const initHandlers = () => {
    if (state.length) {
        firstNewTaskButton = document.getElementsByClassName(cssCard.itemMenuDown)[0];
        firstNewTaskButton.addEventListener('click', addTask);
        cardMenu = [...document.getElementsByClassName(cssCard.itemMenuTop)];
        cardMenu.forEach(button => button.addEventListener('click', deleteList));
        restNewTaskButton = [...document.getElementsByClassName(cssCard.itemMenuDown)].slice(1);
        restNewTaskButton.forEach(button => button.addEventListener('click', selectTask));
    }
}
const observer = new MutationObserver(() => set('kanbanDataPLN', state));

observer.observe(document.body, {childList: true, subtree: true});
newListButton.addEventListener('click', createList);
menuArrow.addEventListener('click', toggleMenu);

export const rerender = () => {
    let isPreviousTasks = false;

    main.element.innerHTML = '';
    state.forEach((column, index) => {
        const card = new Card(column.title);

        isPreviousTasks = !Boolean(state[index - 1]?.issues.length);
        if (index) {card.element.children[2].firstElementChild.disabled = isPreviousTasks};
        if (column.issues.length) {

            column.issues.forEach(task => {
                const name = new Task(task.name);
    
                card.element.children[1].appendChild(name.element);
            });
        }
        main.element.appendChild(card.element);
    });

    if (!state.length) {
        main.element.appendChild(noTaskMessage.element);
        noTaskMessage.element.addEventListener('click', createList);
    }

    if (state.length) {
        noTaskMessage.element.remove();
    }

    initHandlers();
    updateTasksNumber();
}

rerender();
