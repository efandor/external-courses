import DomElement from '../DomElement/DomElement'
import css from './footer.module.css'
export class Footer {
    constructor() {
        this.element = new DomElement({
            type: 'footer',
            className: css.footer,
            html: `
                <div>
                    <span>Active tasks:</span>
                    <span class="${css.activeTask}"></span>
                </div>
                <div>
                    <span>Finished tasks: </span>
                    <span class="${css.finishedTask}"></span>
                </div>
                <div class="${css.aboutFooter}">
                    Kanban board by Pavel Litvinov, 2021
                </div>
            `,
        }).element
    }
}