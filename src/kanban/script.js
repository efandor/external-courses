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

const menuArrow = document.querySelector('.menu');
const avatar = document.querySelector('.avatar');
const dropDownMenu = document.createElement('div');
  dropDownMenu.className = 'dropDownMenu';
  dropDownMenu.innerHTML = blockTemplate;

const toggleMenu = () => {
    menuArrow.className = (menuArrow.className === 'menu-open') ? 'menu' : 'menu-open';

    if (menuArrow.className === 'menu-open') {
        avatar.appendChild(dropDownMenu);
    }

    if (menuArrow.className === 'menu') {
        dropDownMenu.remove();
    }
};

menuArrow.addEventListener('click', toggleMenu);
