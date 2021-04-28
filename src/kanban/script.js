const blockTemplate = `
    <div class="menu-wrapper">
        <div class="account">
            <span class="menu-item">My account</span>
        </div>
        <div class="tasks">
            <span class="menu-item">My tasks</span>
        </div>
        <div class="logout">
            <span class="menu-item">Log out</span>
        </div>
    </div>
`;
const dataMock = [
    {
        title: 'backlog',
        issues: [
            {
                id: 'task1',
                name: 'Sprint bugfix11 111'
            },
            {
                id: 'task2',
                name: 'Sprint bugfix222 22'
            },
            {
                id: 'task3',
                name: 'Sprint bugfix333333 3333333 33333 33333'
            }
        ],
    },
    {
        title: 'ready',
        issues: [
            {
                id: 'task2',
                name: 'Sprint bugfix222 22'
            }
    ],
    },
    {
        title: 'progress',
        issues: [
            {
                id: 'task3',
                name: 'Sprint bugfix33 333'
            }
        ],
    },
    {
        title: 'finished',
        issues: [
            {
                id: 'task4',
                name: 'Sprint bugfix444 44'
            }
        ],
    },
];
const cards = JSON.parse(localStorage.getItem('cards')) || dataMock;
const columns = {
    backlog : document.querySelector('.block-container-backlog'),
    ready : document.querySelector('.block-container-ready'),
    progress : document.querySelector('.block-container-progress'),
    finished : document.querySelector('.block-container-finished'),
};
const menuArrow = document.querySelector('.menu-closed');
const avatar = document.querySelector('.avatar');
const dropDownMenu = document.createElement('div');
const addCardToBacklog = document.querySelector('.item-menu-backlog');
const addCardToReady = document.getElementById('1');
const addCardToProgress = document.getElementById('2');
const addCardToFinished = document.getElementById('3');

dropDownMenu.className = 'dropDownMenu';
dropDownMenu.innerHTML = blockTemplate;

cards.forEach(elem => {
    elem.issues.forEach(card => appendTask(card, columns, elem.title));
})

function appendTask(cardElem, columnsObject, blockName) {
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

function toggleMenu() {
    menuArrow.className = (menuArrow.className === 'menu-opened') ? 'menu-closed' : 'menu-opened';
    if (menuArrow.className === 'menu-opened') avatar.appendChild(dropDownMenu);
    if (menuArrow.className === 'menu-closed') dropDownMenu.remove();
};

function addCard() {
    const task = document.createElement('div');
    task.className = 'task';
    task.setAttribute("placeholder", "Let's start");
    task.setAttribute("contenteditable", "true");
    columns.backlog.append(task);
    task.focus();
}

function moveCard(event) {
    // console.log(event.target.id);
    console.log(cards[event.target.id - 1].issues.length);

    if (cards) {

    }
    menuArrow.className = (menuArrow.className === 'menu-opened') ? 'menu-closed' : 'menu-opened';
    if (menuArrow.className === 'menu-opened') avatar.appendChild(dropDownMenu);
    if (menuArrow.className === 'menu-closed') dropDownMenu.remove();
}

menuArrow.addEventListener('click', toggleMenu);
addCardToBacklog.addEventListener('click', addCard);
// addCardToOther.addEventListener('click', toggleMenu);
addCardToReady.addEventListener('click', moveCard);
addCardToProgress.addEventListener('click', moveCard);
addCardToFinished.addEventListener('click', moveCard);
console.log(addCardToReady);
