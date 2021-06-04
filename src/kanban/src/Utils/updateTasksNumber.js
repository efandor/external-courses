import { activeTasksNumber, finishedTasksNumber } from './rerender';
import { state } from "../components/State/State";

export const updateTasksNumber = () => {
    const finishedCounter = state[state.length - 1] ? state[state.length - 1].issues.length : 0;
    const activeCounter = state.reduce((count, elem) => {
        const tasksInCard = elem.issues ? elem.issues.length : 0;
        return count + tasksInCard;
    }, 0);

    activeTasksNumber.textContent = activeCounter;
    finishedTasksNumber.textContent = finishedCounter;
}
