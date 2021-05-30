import { Task } from "../components/Task/Task";
import state from "../components/State/State";
import {rerender} from './rerender';
import {updateTasksNumber} from './updateTasksNumber';

export const addTask = (event) => {
    const task = new Task('');
    task.element.setAttribute('contenteditable', 'true');
    event.target.parentElement.previousElementSibling.appendChild(task.element);
    task.element.focus();
    
    const removeEmtyTask = (event) => {
        if (!task.element.textContent) {
            task.element.remove();
        }

        if (task.element.textContent) {
            const cardTitle = event.target.parentElement.previousElementSibling.children[0].textContent;

            state.forEach(card => {
                if (card.title === cardTitle) card.issues.push({name: task.element.textContent});
            });
            task.element.setAttribute('contenteditable', 'false');
            updateTasksNumber();
            rerender();
        };
    }
    task.element.addEventListener('blur', removeEmtyTask);
}
