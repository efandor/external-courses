export const blockTemplate = `
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

export const dataMock = [
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
