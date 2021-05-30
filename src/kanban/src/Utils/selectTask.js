import { Task } from "../components/Task/Task";
import { PreviousTasks } from "../components/PreviousTasks/PreviousTasks";
import state from "../components/State/State";
import {rerender, initHandlers} from './rerender';
import {updateTasksNumber} from './updateTasksNumber';
import cssCard from "../components/Card/card.module.css";

export const selectTask = (event) => {
    let taskArray = [];
    const cardTitle = event.target.parentElement.previousElementSibling.previousElementSibling.children[0].textContent;

    state.forEach((card, index) => {
        if (cardTitle === card.title) {
            if (state[index - 1].issues.length) {
                const previousCardstate = state[index - 1];

                previousCardstate.issues.forEach(task => {
                    taskArray.push(task.name);
                });

                const previousTasks = new PreviousTasks(taskArray);

                event.target.parentElement.appendChild(previousTasks.element);
                document.body.prepend(previousTasks.modal);
                window.addEventListener('click', (event) => {
                    if (event.target === previousTasks.modal) {
                        previousTasks.modal.remove();
                        previousTasks.element.remove();
                    };
                });
                previousTasks.element.addEventListener('click', (e) => {
                    state[index - 1].issues.forEach((task) => {
                        if (task.name === e.target.value) {
                            state[index - 1].issues = state[index - 1].issues.filter(item => item.name !== task.name);
                            state[index].issues.push({name: task.name});
                            previousTasks.modal.remove();
                            previousTasks.element.remove();
                            updateTasksNumber();
                            rerender();
                            initHandlers();
                        }
                    })
                })
            }         
        }
    });
}
