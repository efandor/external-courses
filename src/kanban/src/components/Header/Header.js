import DomElement from "../DomElement/DomElement";
import css from "./header.module.css";
import logo from '../../img/logo.svg';
import avatar from '../../img/avatar.svg';
import vector from '../../img/vector.svg';
import cross from '../../img/cross.svg';

export class Header {
    constructor() {
        this.element = new DomElement({
            type: "header",
            className: css.header,
            html: `<div class="${css.title}">
            <img class="${css.titleImg}" src="${logo}" alt="Logo">
            <a class="${css.titleText}" href="#" target="blank">Awesome Kanban Board</a>
        </div>
        <div class="${css.rightHeader}">
            <button class="${css.addTaskButton}">
                <img class="${css.addTaskImg}" src="${cross}" alt="Add list">
                <span class="${css.addTaskText}">Create new list</span>
            </button>
            <div class="${css.avatar}">
                <div class="${css.userpic}">
                    <img class="${css.userpicImage}" src="${avatar}" alt="Avatar">
                </div>
                <div class="${css.menu}">
                    <img class="${css.menuArrow}" src="${vector}" alt="Arrow">
                </div>
            </div>
        </div>`,
        }).element;
    }
}
