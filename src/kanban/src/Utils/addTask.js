import { Task } from "../components/Task/Task";
import { Modal } from "../components/Modal/Modal";
import { state } from "../components/State/State";
import {rerender} from './rerender';
import Cardcss from "../components/Card/card.module.css";

const modal = new Modal('This task is on board alredy');

export const addTask = () => {
    const task = new Task('');
    const tasksBlock = document.body.querySelector(`.${Cardcss.blockContainer}`);

    task.element.setAttribute('contenteditable', 'true');
    tasksBlock.appendChild(task.element);
    task.element.focus();

    const handleTaskName = () => {
        if (!task.element.textContent) task.element.remove();

        if (task.element.textContent) {
            let allIssues = [];
   
            state.forEach((card) => allIssues = allIssues.concat(card.issues));

            let isSameTaskName = allIssues.includes(task.element.textContent);

            if (isSameTaskName) {
                task.element.blur();                  
                document.body.appendChild(modal.element);
                
                window.addEventListener('click', () => {
                    task.element.remove();
                    modal.element.remove();
                }, {once:true});
            }

            if (!isSameTaskName) {
                task.element.setAttribute('contenteditable', 'false');
                state[0].issues.push(task.element.textContent);
                rerender(); 
            }
        }
    }

    task.element.addEventListener('blur', handleTaskName);
    tasksBlock.parentElement.addEventListener('mouseleave', () => task.element.blur(),{once:true});
}
