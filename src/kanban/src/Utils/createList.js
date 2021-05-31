import { Modal } from "../components/Modal/Modal";
import { Card } from "../components/Card/Card";
import state from "../components/State/State";
import {main, cardMenu, rerender} from './rerender';

export const createList = () => {
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
            });

            const card = new Card(event.target.value);
            const newCardState = {title: event.target.value, issues: []};

            state.unshift(newCardState);
            main.element.prepend(card.element);
            cardMenu.unshift(card.element.children[0].children[1]);
            rerender();
            modal.element.remove();
        }
    });
};
