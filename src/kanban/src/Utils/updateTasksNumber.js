import { main, activeTasksNumber, finishedTasksNumber, noTaskMessage } from './rerender';
import { createList } from './createList';
import state from "../components/State/State";

export const updateTasksNumber = () => {
    const activeCounter = state.reduce((count, elem) => {
        return count + (elem.issues?.length || 0);
    }, 0);

    activeTasksNumber.textContent = activeCounter;

    const finishedCounter = state[state.length - 1]?.issues.length || 0;
    finishedTasksNumber.textContent = finishedCounter;

    if (!state.length) {
        main.element.appendChild(noTaskMessage.element);
        noTaskMessage.element.addEventListener('click', createList);
    }

    if (state.length) {
        noTaskMessage.element.remove();
    }
}
