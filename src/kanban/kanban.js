import {blockTemplate, dataMock} from './templates.js';

class Kanban {
    constructor() {
        this.cards = JSON.parse(localStorage.getItem('cards')) || dataMock;
        this.columnNames = ['backlog', 'ready', 'inProgress', 'finished'];
        this.columns = {
            backlog : document.querySelector('.block-container-backlog'),
            ready : document.querySelector('.block-container-ready'),
            progress : document.querySelector('.block-container-progress'),
            finished : document.querySelector('.block-container-finished'),
        };
        this.menuArrow = document.querySelector('.menu-closed');
        this.avatar = document.querySelector('.avatar');
        this.dropDownMenu = document.createElement('div');
        this.dropDownMenu.className = 'dropDownMenu';
        this.dropDownMenu.innerHTML = blockTemplate;
        this.addCardToBacklog = document.querySelector('.item-menu-backlog');
        this.addCardToReady = document.getElementById('1');
        this.addCardToProgress = document.getElementById('2');
        this.addCardToFinished = document.getElementById('3');
    }

    /* eslint-disable */
    init = () => {
        this.cards.forEach(elem => {

            elem.issues.forEach(card => {
                console.log('elem.title ',elem.title);
                this.appendTask(card, this.columns, elem.title)});
        });

        return this;
    }
    
    appendTask = (cardElem, columnsObject, blockName) => {
        const task = document.createElement('div');
        task.className = 'task';
        task.setAttribute("contenteditable", "true");
        task.innerHTML = cardElem.name;
    
        switch(blockName) {
            case 'backlog':
                columnsObject.backlog.append(task);
                break;
            case 'ready':
                columnsObject.ready.append(task);
                break;
            case 'progress':
                columnsObject.progress.append(task);
                break;
            case 'finished':
                columnsObject.finished.append(task);
                break;
            default:
                break;
          }
    }
    
    toggleMenu = () => {
        this.menuArrow.className = (this.menuArrow.className === 'menu-opened') ? 'menu-closed' : 'menu-opened';
        if (this.menuArrow.className === 'menu-opened') this.avatar.appendChild(this.dropDownMenu);
        if (this.menuArrow.className === 'menu-closed') this.dropDownMenu.remove();
    };
    
    addCard = () => {
        const task = document.createElement('div');
        task.className = 'task';
        task.setAttribute("placeholder", "Let's start");
        task.setAttribute("contenteditable", "true");
        this.columns.backlog.append(task);
        task.focus();
    }
    
    moveCard = (e) => {
        console.log(this.cards[e.target.id - 1].issues.length);
        e.target.className = (e.target.className === 'menu-opened') ? 'menu-closed' : 'menu-opened';
        if (e.target.className === 'menu-opened') e.target.parentElement.appendChild(this.dropDownMenu);
        if (e.target.className === 'menu-closed') this.dropDownMenu.remove();
    }
    
    initHandlers = () => {
        this.menuArrow.addEventListener('click', this.toggleMenu);
        this.addCardToBacklog.addEventListener('click', this.addCard);
        this.addCardToReady.addEventListener('click', this.moveCard);
        this.addCardToProgress.addEventListener('click', this.moveCard);
        this.addCardToFinished.addEventListener('click', this.moveCard);
    }
}

const kanban = new Kanban();

kanban.init().initHandlers();
