import { NoTaskMessage } from "./components/NoTaskMessage/NoTaskMessage";
import { Header } from "./components/Header/Header";
import { HeaderDropDownMenu } from "./components/HeaderDropDownMenu/HeaderDropDownMenu";
import { Main } from "./components/Main/Main";
import { Card } from "./components/Card/Card";
import { CardDropDownMenu } from "./components/CardDropDownMenu/CardDropDownMenu";
import { Task } from "./components/Task/Task";
import { Modal } from "./components/Modal/Modal";
import { Footer } from "./components/Footer/Footer";
import state from "./components/State/State";
import cssHeader from "./components/Header/header.module.css";
import cssFooter from './components/Footer/footer.module.css';
import cssMain from "./components/Main/main.module.css";
import cssCard from "./components/Card/card.module.css";
import "./main.css";

const header = new Header();
const headerDropDownMenu = new HeaderDropDownMenu();
const main = new Main();
const cardDropDownMenu = new CardDropDownMenu();
const noTaskMessage = new NoTaskMessage();
const footer = new Footer();

state.forEach(column => {
    const card = new Card(column.title);

    if (column.issues) {
        column.issues.forEach(task => {
            const name = new Task(task.name);

            card.element.children[1].appendChild(name.element);
        })
    }

    main.element.appendChild(card.element);
})

document.body.appendChild(header.element);
document.body.appendChild(main.element);
document.body.appendChild(footer.element);

const menuArrow = document.getElementsByClassName(cssHeader.menu)[0];
const avatar = document.getElementsByClassName(cssHeader.avatar)[0];
const newList = document.getElementsByClassName(cssHeader.addListButton)[0];
const cardMenu = [...document.getElementsByClassName(cssCard.itemMenuTop)];
const finishedTask = document.getElementsByClassName(cssFooter.finishedTask)[0];

const toggleMenu = () => {
    if (!headerDropDownMenu) {
        const headerDropDownMenu = new HeaderDropDownMenu();
    }

    menuArrow.classList.toggle(cssHeader.menuOpened);
    menuArrow.classList.toggle(cssHeader.menu);
    if (menuArrow.className === cssHeader.menuOpened) avatar.appendChild(headerDropDownMenu.element);
    if (menuArrow.className === cssHeader.menu) headerDropDownMenu.element.remove();
}

const createList = () => {
    const modal = new Modal('Enter title');
    const modalInput = modal.element.querySelector('input');
    const closeButton = modal.element.children[0].children[0];

    document.body.appendChild(modal.element);
    modalInput.focus();
    closeButton.addEventListener('click', () => modal.element.remove());
    window.addEventListener('click', (event) => {
        if (event.target === modal.element) {
            modal.element.remove();
        }
    });

    modalInput.addEventListener('change', (event) => {
        if (modalInput.value) {
            const card = new Card(event.target.value);
            const newCardState = {title: event.target.value, issue: []};

            state.unshift(newCardState);
            updateTasksNumber();
            main.element.prepend(card.element);
            cardMenu.unshift(card.element.children[0].children[1]);
            cardMenu.forEach(button => {
                button.addEventListener('click', deleteList);
            })
            modal.element.remove();
            // localStorage.setItem('state', JSON.stringify(state));
        }    
    });
};

const deleteList = (event) => {
    if (!cardDropDownMenu) {
        const cardDropDownMenu = new CardDropDownMenu();
    }

    cardDropDownMenu.element.addEventListener('click', () => {
        const card = event.target.parentElement.parentElement;
        const cardTitle = event.target.previousElementSibling.innerText;
        let newState = state.filter((elem) => {
            return elem.title !== cardTitle;
        });
        state.length = 0;
        newState.forEach(elem => state.push(elem));
        updateTasksNumber();
        card.remove();
        cardDropDownMenu.modal.remove();
    });

    event.target.parentElement.parentElement.appendChild(cardDropDownMenu.element);
    document.body.prepend(cardDropDownMenu.modal)

    window.addEventListener('click', (event) => {
        if (event.target === cardDropDownMenu.modal) {
            cardDropDownMenu.modal.remove();
            cardDropDownMenu.element.remove();
        };
    });
}

const updateTasksNumber = () => {
    const finishedCounter = state.reduce((count, elem) => {
        return count + (elem.issues?.length || 0);
    }, 0 )
    finishedTask.textContent = finishedCounter;
    if (!state.length) {
        main.element.appendChild(noTaskMessage.element)
    }

    if (state.length) {
        noTaskMessage.element.remove();
    }
}

updateTasksNumber();

menuArrow.addEventListener('click', toggleMenu);
newList.addEventListener('click', createList);
cardMenu.forEach(button => {
    button.addEventListener('click', deleteList);
})
