import { CardDropDownMenu } from "../components/CardDropDownMenu/CardDropDownMenu";
import { state } from "../components/State/State";
import { rerender } from './rerender';
import { deleteModal } from './deleteModal';

export const deleteList = (event) => {
    const cardDropDownMenu = new CardDropDownMenu();

    cardDropDownMenu.element.addEventListener('click', () => {
        const card = event.target.parentElement.parentElement;
        const cardTitle = event.target.previousElementSibling.innerText;
        const newState = state.filter((elem) => elem.title !== cardTitle);

        state.length = 0;
        newState.forEach(elem => state.push(elem));
        card.remove();
        cardDropDownMenu.modal.remove();
        cardDropDownMenu.element.remove();
        rerender();
    });

    event.target.parentElement.parentElement.appendChild(cardDropDownMenu.element);
    document.body.prepend(cardDropDownMenu.modal);
    deleteModal(cardDropDownMenu);
}
