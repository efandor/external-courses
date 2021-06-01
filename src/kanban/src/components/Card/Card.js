import DomElement from "../DomElement/DomElement";
import css from "./card.module.css";
export class Card {
    constructor(title) {
        this.element = new DomElement({
            className: css.card,
            html: `
                    <div class="${css.blockTop}">
                        <span class="${css.itemTitle}">${title}</span>
                        <button class="${css.itemMenuTop}">•••</button>
                    </div>
                    <div class="${css.blockContainer}"></div>
                    <div class="${css.blockDown}">
                        <button class="${css.itemMenuDown}" id="0">Add card</button>
                    </div>
            `,
        }).element;
    }
}
