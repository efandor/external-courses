import { NoTaskMessage } from "./components/NoTaskMessage/NoTaskMessage";
import { Header } from "./components/Header/Header";
import { HeaderDropDownMenu } from "./components/HeaderDropDownMenu/HeaderDropDownMenu";
import { Main } from "./components/Main/Main";
import { Card } from "./components/Card/Card";
import { CardDropDownMenu } from "./components/CardDropDownMenu/CardDropDownMenu";
import { Task } from "./components/Task/Task";
import { Modal } from "./components/Modal/Modal";
import { PreviousTasks } from "./components/PreviousTasks/PreviousTasks";
import { Footer } from "./components/Footer/Footer";
import state from "./components/State/State";
import cssHeader from "./components/Header/header.module.css";
import cssFooter from './components/Footer/footer.module.css';
import cssCard from "./components/Card/card.module.css";
import "./main.css";

const header = new Header();
const headerDropDownMenu = new HeaderDropDownMenu();
const main = new Main();
const cardDropDownMenu = new CardDropDownMenu();
const noTaskMessage = new NoTaskMessage();
const footer = new Footer();

const rerender = () => {
    main.element.innerHTML = '';
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
}
rerender();

document.body.appendChild(header.element);
document.body.appendChild(main.element);
document.body.appendChild(footer.element);



const menuArrow = document.getElementsByClassName(cssHeader.menu)[0];
const avatar = document.getElementsByClassName(cssHeader.avatar)[0];
const newListButton = document.getElementsByClassName(cssHeader.addListButton)[0];
let firstNewTaskButton = document.getElementsByClassName(cssCard.itemMenuDown)[0];
let restNewTaskButton = [...document.getElementsByClassName(cssCard.itemMenuDown)].slice(1);
let cardMenu = [...document.getElementsByClassName(cssCard.itemMenuTop)];
const finishedTaskNumber = document.getElementsByClassName(cssFooter.finishedTask)[0];
const activeTaskNumber = document.getElementsByClassName(cssFooter.activeTask)[0];

const addTask = (event) => {
    const task = new Task('');
    event.target.parentElement.previousElementSibling.appendChild(task.element);
    task.element.focus();
    
    const removeEmtyTask = (event) => {
        if (!task.element.value) {
            task.element.remove()
        }

        if (task.element.value) {
            const cardTitle = event.target.parentElement.previousElementSibling.children[0].textContent;

            state.forEach(card => {
                if (card.title === cardTitle) card.issues.push({name: task.element.value});
            });
            updateTasksNumber();
        };
    }
    task.element.addEventListener('blur', removeEmtyTask);
}

const toggleMenu = () => {
    menuArrow.classList.toggle(cssHeader.menuOpened);
    menuArrow.classList.toggle(cssHeader.menu);
    if (menuArrow.className === cssHeader.menuOpened) avatar.appendChild(headerDropDownMenu.element);
    if (menuArrow.className === cssHeader.menu) headerDropDownMenu.element.remove();
}

const selectTask = (event) => {
    let taskArray = [];

    event.stopPropagation();
    const cardTitle = event.target.parentElement.previousElementSibling.previousElementSibling.children[0].textContent;
    state.forEach((card, index) => {
        if (cardTitle === card.title) {
            if (state[index - 1].issues.length) {
                const previousCardstate = state[index - 1];
                
                previousCardstate.issues.forEach(task => {
                    taskArray.push(task.name);
                });

                const previousTasks = new PreviousTasks(taskArray);

                event.target.parentElement.appendChild(previousTasks.element);
                document.body.prepend(previousTasks.modal);
                window.addEventListener('click', (event) => {
                    if (event.target === previousTasks.modal) {
                        previousTasks.modal.remove();
                        previousTasks.element.remove();
                    };
                });
                console.log ('previousCardstate: ', previousCardstate);
                console.log ('taskArray: ', taskArray);
                console.log ('cardTitle: ', cardTitle);

                previousTasks.element.addEventListener('click', (e) => {
                    
                    // if (event.target.tagName === 'OPTION') {
                        
                        let newState = [];
                        state[index - 1].issues.forEach((task, i) => {
                            if (task.name === e.target.value) {
                                //         // newState.push({task});
                                //         console.log ('state[index - 1]: ', state[index - 1]);
                                //         newState = 
                                //         console.log ('newState[index - 1]: ', newState[index - 1]);

                                console.log ('state[index - 1].issues: ', state[index - 1].issues);
                                state[index - 1].issues = state[index - 1].issues.filter(item => item.name !== task.name);
                                
                                state[index].issues.push({id: task.id, name: task.name});
                                previousTasks.modal.remove();
                                previousTasks.element.remove();

                                updateTasksNumber();
                                cardMenu.forEach(button => button.removeEventListener('click', deleteList));
                                firstNewTaskButton.removeEventListener('click', addTask);
                                restNewTaskButton.forEach(button => button.removeEventListener('click', selectTask));
                                rerender();
                                firstNewTaskButton = document.getElementsByClassName(cssCard.itemMenuDown)[0];
                                restNewTaskButton = [...document.getElementsByClassName(cssCard.itemMenuDown)].slice(1);
                                cardMenu = [...document.getElementsByClassName(cssCard.itemMenuTop)];
                                cardMenu.forEach(button => button.addEventListener('click', deleteList));
                                firstNewTaskButton.addEventListener('click', addTask);
                                restNewTaskButton.forEach(button => button.addEventListener('click', selectTask));

                        }
                        })
                    // }
                })

            }         
        }
    })
    
    // const task = new Task('');
    // event.target.parentElement.previousElementSibling.appendChild(task.element);
    // task.element.focus();
    // state.forEach(column => {
    //     const card = new Card(column.title);
    
    //     if (column.issues) {
    //         column.issues.forEach(task => {
    //             const name = new Task(task.name);
    
    //             card.element.children[1].appendChild(name.element);
    //         })
    //     }
    
    //     main.element.appendChild(card.element);
    // })

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
            state.forEach(card => {
                if (card.title === modalInput.value) {
                    modalInput.value = `${modalInput.value}${Math.floor(Math.random()*1000)}`
                }
            })

            const card = new Card(event.target.value);
            const newCardState = {title: event.target.value, issues: []};

            state.unshift(newCardState);
            updateTasksNumber();
            main.element.prepend(card.element);
            cardMenu.unshift(card.element.children[0].children[1]);
            cardMenu.forEach(button => {
                button.addEventListener('click', deleteList);
            })
            modal.element.remove();
            firstNewTaskButton.removeEventListener('click', addTask);
            firstNewTaskButton = main.element.getElementsByClassName(cssCard.itemMenuDown)[0];
            firstNewTaskButton.addEventListener('click', addTask);
            restNewTaskButton.forEach(button => button.removeEventListener('click', selectTask));
            restNewTaskButton = [...document.getElementsByClassName(cssCard.itemMenuDown)].slice(1);
            restNewTaskButton.forEach(button => button.addEventListener('click', selectTask));
            // localStorage.setItem('state', JSON.stringify(state));
        }    
    });
};

const deleteList = (event) => {
    cardDropDownMenu.element.addEventListener('click', () => {
        const card = event.target.parentElement.parentElement;
        const cardTitle = event.target.previousElementSibling.innerText;
        let newState = state.filter((elem) => {
            return elem.title !== cardTitle;
        });
        state.length = 0;
        newState.forEach(elem => state.push(elem));
        card.remove();
        cardDropDownMenu.modal.remove();
        cardMenu = [...document.getElementsByClassName(cssCard.itemMenuTop)];
        firstNewTaskButton.removeEventListener('click', addTask);
        restNewTaskButton.forEach(button => button.removeEventListener('click', selectTask));
        if (state.length) {
            firstNewTaskButton = main.element.getElementsByClassName(cssCard.itemMenuDown)[0];
            firstNewTaskButton.addEventListener('click', addTask);
            restNewTaskButton = [...document.getElementsByClassName(cssCard.itemMenuDown)].slice(1);
            restNewTaskButton.forEach(button => button.addEventListener('click', selectTask));
        }
        updateTasksNumber();
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
    const activeCounter = state.reduce((count, elem) => {
        return count + (elem.issues?.length || 0);
    }, 0 )
    activeTaskNumber.textContent = activeCounter;

    const finishedCounter = state[state.length - 1]?.issues?.length || 0;
    finishedTaskNumber.textContent = finishedCounter;

    if (!main.element.children[0]) {
        main.element.appendChild(noTaskMessage.element);
        noTaskMessage.element.addEventListener('click', createList);
    }

    if (state.length) {
        noTaskMessage.element.remove();
    }
}

updateTasksNumber();



menuArrow.addEventListener('click', toggleMenu);
newListButton.addEventListener('click', createList);
cardMenu.forEach(button => button.addEventListener('click', deleteList));
firstNewTaskButton.addEventListener('click', addTask);
restNewTaskButton.forEach(button => button.addEventListener('click', selectTask));
