import { CardDropDownMenu } from "../components/CardDropDownMenu/CardDropDownMenu";
import state from "../components/State/State";
import { initHandlers } from './rerender';
import {updateTasksNumber} from './updateTasksNumber';

const cardDropDownMenu = new CardDropDownMenu();

export const deleteList = (event) => {
    cardDropDownMenu.element.addEventListener('click', () => {
        const card = event.target.parentElement.parentElement;
        const cardTitle = event.target.previousElementSibling.innerText;
        let newState = state.filter((elem) => elem.title !== cardTitle);
        state.length = 0;
        newState.forEach(elem => state.push(elem));
        card.remove();
        cardDropDownMenu.modal.remove();
        cardDropDownMenu.element.remove();
        if (state.length) {
            initHandlers();
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
