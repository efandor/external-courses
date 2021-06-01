import DomElement from "../DomElement/DomElement";
import css from "./previousTasks.module.css";

const createTemplate = (tasksArray) => {
    let listTemplate = `<form><p><select class="${css.taskSelect}" name="task" autofocus><option hidden disabled selected>Select task...</option>'`;

    tasksArray.forEach(task => {
        listTemplate += `<option class="${css.task}" value="${task}">${task}</option>`;
    });

    listTemplate += `</select></p></form>`;
    
    return listTemplate;
}

export class PreviousTasks {
    constructor(tasks) {
        this.element = new DomElement({
            className: css.previousTasks,
            html:  createTemplate(tasks),
        }).element;
        this.modal = new DomElement({
            className: css.modal,
        }).element;
    }
}
