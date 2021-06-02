import { activeTasksNumber, finishedTasksNumber } from './rerender';
import { state } from "../components/State/State";

export const updateTasksNumber = () => {
    const finishedCounter = (state[state.length - 1]?.issues.length || 0);
    const activeCounter = state.reduce((count, elem) => {
        return count + (elem.issues?.length || 0);
    }, 0);

    activeTasksNumber.textContent = activeCounter;
    finishedTasksNumber.textContent = finishedCounter;
}
