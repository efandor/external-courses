import { Header } from "../components/Header/Header";
import { Avatar } from "../components/Avatar/Avatar";
import { CreateListHeader } from "../components/CreateListHeader/CreateListHeader";
import { Main } from "../components/Main/Main";
import { Card } from "../components/Card/Card";
import { Task } from "../components/Task/Task";
import { Footer } from "../components/Footer/Footer";
import { NoTaskMessage } from "../components/NoTaskMessage/NoTaskMessage";
import { state } from "../components/State/State";
import { addTask } from './addTask';
import { deleteList } from './deleteList';
import { selectTask } from './selectTask';
import { createList } from './createList';
import { toggleMenu } from './toggleMenu';
import { updateTasksNumber } from './updateTasksNumber';
import { set } from './storage';
import cssHeader from "../components/Header/header.module.css";
import cssAvatar from "../components/Avatar/avatar.module.css";
import cssCard from "../components/Card/card.module.css";
import cssFooter from '../components/Footer/footer.module.css';

export const header = new Header();
export const avatar = new Avatar();
export const main = new Main();
export const footer = new Footer();
const noTaskMessage = new NoTaskMessage();
const createListHeader = new CreateListHeader();

document.body.appendChild(header.element);

const rightHeaderBlock = document.getElementsByClassName(cssHeader.rightHeader)[0];

rightHeaderBlock.appendChild(createListHeader.element);
rightHeaderBlock.appendChild(avatar.element);
document.body.appendChild(main.element);
document.body.appendChild(footer.element);

export const menuArrow = document.getElementsByClassName(cssAvatar.menu)[0];
export const finishedTasksNumber = document.body.getElementsByClassName(cssFooter.finishedTask)[0];
export const activeTasksNumber = document.body.getElementsByClassName(cssFooter.activeTask)[0];
export let cardMenu = [...document.body.getElementsByClassName(cssCard.itemMenuTop)];

let firstNewTaskButton = document.body.getElementsByClassName(cssCard.addCardButton)[0];
let restNewTaskButton = [...document.body.getElementsByClassName(cssCard.addCardButton)].slice(1);

const initHandlers = () => {
    if (state.length) {
        firstNewTaskButton = document.getElementsByClassName(cssCard.addCardButton)[0];
        firstNewTaskButton.addEventListener('click', addTask);
        cardMenu = [...document.getElementsByClassName(cssCard.itemMenuTop)];
        cardMenu.forEach(button => button.addEventListener('click', deleteList));
        restNewTaskButton = [...document.getElementsByClassName(cssCard.addCardButton)].slice(1);
        restNewTaskButton.forEach(button => button.addEventListener('click', selectTask));
    }
}
const observer = new MutationObserver(() => set('kanbanDataPLN', state));

observer.observe(main.element, {childList: true});
createListHeader.element.addEventListener('click', createList);
avatar.element.addEventListener('click', toggleMenu);

export const rerender = () => {
    let isPreviousTasks = false;

    main.element.innerHTML = '';
    state.forEach((column, index) => {
        const card = new Card(column.title);
        const addCardButton = card.element.querySelector(`.${cssCard.addCardButton}`);
        const taskContainer = card.element.querySelector(`.${cssCard.taskContainer}`);

        isPreviousTasks = !Boolean(state[index - 1] && state[index - 1].issues.length);
        if (index) {
            addCardButton.disabled = isPreviousTasks;
        }

        if (column.issues.length) {

            column.issues.forEach(item => {
                const task = new Task(item);

                taskContainer.appendChild(task.element);
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
