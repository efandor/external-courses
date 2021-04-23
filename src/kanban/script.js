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
            // {
            //     id: 'task1',
            //     name: 'Sprint bugfix11 111'
            // },
            // {
            //     id: 'task2',
            //     name: 'Sprint bugfix222 22'
            // },
            // {
            //     id: 'task3',
            //     name: 'Sprint bugfix333333 3333333 33333 33333'
            // }
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
const backlog = document.querySelector('.block-container-backlog');
const ready = document.querySelector('.block-container-ready');
const progress = document.querySelector('.block-container-progress');
const finished = document.querySelector('.block-container-finished');
const menuArrow = document.querySelector('.menu-closed');
const avatar = document.querySelector('.avatar');
const dropDownMenu = document.createElement('div');
const addCardButton = document.querySelector('.item-menu-backlog');

dropDownMenu.className = 'dropDownMenu';
dropDownMenu.innerHTML = blockTemplate;

cards.forEach(elem => {
    elem.issues.forEach(card => appendTask(card, backlog, ready, progress, finished, elem.title));
})

function appendTask(cardElem, backlogElem, readyElem, progressElem, finishedElem, blockName) {
    const task = document.createElement('div');
    task.className = 'task';
    task.setAttribute("contenteditable", "true");
    task.innerHTML = cardElem.name;

    switch(blockName) {
        case 'backlog':
            backlogElem.append(task);
            break;
        case 'ready':
            readyElem.append(task);
            break;
        case 'progress':
            progressElem.append(task);
            break;
        case 'finished':
            finishedElem.append(task);
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
    backlog.append(task);
    task.focus();
}

menuArrow.addEventListener('click', toggleMenu);
addCardButton.addEventListener('click', addCard);
