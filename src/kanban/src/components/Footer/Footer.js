import DomElement from '../DomElement/DomElement'
import css from './footer.module.css'

export class Footer {
  constructor() {
    this.element = new DomElement({
      type: 'footer',
      className: css.footer,
      html: `
      <div>
        Active tasks: 
      </div>
      <div>
          Finished tasks: 
      </div>
      <div>
          Kanban board by Pavel Litvinov, 2021
      </div>
      `
    }).element
  }
}
