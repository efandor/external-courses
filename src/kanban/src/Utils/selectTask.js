import { PreviousTasks } from "../components/PreviousTasks/PreviousTasks";
import { state } from "../components/State/State";
import {rerender} from './rerender';
import { deleteModal } from './deleteModal';

export const selectTask = (event) => {
    let taskArray = [];
    const cardTitle = event.target.parentElement.previousElementSibling.previousElementSibling.children[0].textContent;

    state.forEach((card, index) => {
        if (cardTitle === card.title) {
            if (state[index - 1].issues.length) {
                const previousCardstate = state[index - 1];

                previousCardstate.issues.forEach(task => {
                    taskArray.push(task);
                });

                const previousTasks = new PreviousTasks(taskArray);

                event.target.parentElement.appendChild(previousTasks.element);
                document.body.prepend(previousTasks.modal);
                deleteModal(previousTasks);
                previousTasks.element.addEventListener('click', (e) => {
                    state[index - 1].issues.forEach((task) => {
                        if (task === e.target.value) {
                            state[index - 1].issues = state[index - 1].issues.filter(item => item !== task);
                            state[index].issues.push(task);
                            previousTasks.modal.remove();
                            previousTasks.element.remove();
                            rerender();
                        }
                    });
                });
            }
        }
    });
}
