import {blockTemplate} from './templates.js';
import {dataMock} from './constants.js';
class Kanban {
    constructor() {
        this.cards = JSON.parse(localStorage.getItem('cards')) || dataMock;
        this.columnNames = ['backlog', 'ready', 'progress', 'finished'];
        this.columns = {
            backlog : document.querySelector('.block-container-backlog'),
            ready : document.querySelector('.block-container-ready'),
            progress : document.querySelector('.block-container-progress'),
            finished : document.querySelector('.block-container-finished'),
        };
        this.menuArrow = document.querySelector('.menu');
        this.avatar = document.querySelector('.avatar');
        this.dropDownMenu = document.createElement('div');
        this.dropDownMenu.className = 'dropDownMenu';
        this.dropDownMenu.innerHTML = blockTemplate;
        this.cardButtons = [...document.getElementsByClassName('item-menu-button')];
        this.addCardToBacklog = document.querySelector('.item-menu-backlog');
        this.addCardToReady = document.getElementById('ready');
        this.addCardToProgress = document.getElementById('progress');
        this.addCardToFinished = document.getElementById('finished');
    }

    /* eslint-disable */
    init = () => {
        this.cards.forEach(elem => {

            elem.issues.forEach(card => {
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
        this.menuArrow.classList.toggle('opened');
        if (this.menuArrow.className === 'menu opened') this.avatar.appendChild(this.dropDownMenu);
        if (this.menuArrow.className === 'menu') this.dropDownMenu.remove();
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
        // e.target.className = (e.target.className === 'opened') ? 'menu' : 'opened';
        
        // console.log(dataMock);

        let findedId = this.columnNames.indexOf(e.target.id) - 1;
        // console.log(findedId);
        // console.log(taskList);

        console.log(this.cards[findedId].issues);

        let listTemplate = `<form>
        <p>
            <select class="taskSelect" name="task">
            <option disabled selected>Select task...</option>'`;

        this.cards[findedId].issues.forEach(elem => listTemplate += `
        <option value="${elem.id}">${elem.name}</option>`);

        listTemplate += `
</select>
</p>
        </form>`


        // console.log(listTemplate);

        this.prevTasklist = document.createElement('div');
        this.prevTasklist.className = 'dropDownList';
        this.prevTasklist.id = `${e.target}`;
        this.prevTasklist.innerHTML = listTemplate;

        const select = document.querySelector('.dropDownList');
        // const container = document.getElementsByClassName('taskSelect');
        // console.log(e.target.parentElement.parentElement.children[1]);
        console.log(e.target);


        
        const changeCard = (e) => {
            console.log(e);
            return e;
        }


        e.target.classList.toggle('disabled');
        
        if (e.target.className === 'item-menu-button disabled') e.target.parentElement.parentElement.children[1].append(this.prevTasklist);
        if (e.target.className === 'item-menu-button') this.prevTasklist.remove();
        e.target.disabled = true;

        select.addEventListener('click', () => changeCard);

       
    }

    
    
    initHandlers = () => {
        this.menuArrow.addEventListener('click', this.toggleMenu);
        this.addCardToBacklog.addEventListener('click', this.addCard);
        // this.addCardToReady.addEventListener('click', this.moveCard);
        // this.addCardToProgress.addEventListener('click', this.moveCard);
        // this.addCardToFinished.addEventListener('click', this.moveCard);
        this.cardButtons.forEach(elem => elem.addEventListener('click', this.moveCard));
    }

    saveToLocalStorage = () => {
        localStorage.setItem('cards', JSON.stringify(this.cards));
    }
}

const kanban = new Kanban();

kanban.init().initHandlers();
