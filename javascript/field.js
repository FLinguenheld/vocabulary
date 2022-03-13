import {Dom} from "./dom.js"


/* Allows to display the main field */
export class BaseField{
    _container
    _text

    constructor(idContainer){
        this._container = document.getElementById(idContainer)
        this._text = ""
    }

    /* Used to show others fields with a click here (see main) */ 
    setEvent(f){
        this._container.addEventListener('click', () => {
                    f()
                    })
    }

    setText(text){
        this._text = text
        this.showText()
    }

    showText(){
        Dom.clearContainer(this._container)
        Dom.addElemWithText('p', this._text, this._container)
    }
}



/* Specialized to display clickable fields */
export class Field extends BaseField{
    #title

    constructor(idContainer, title){

        super(idContainer)
        this.#title = title

        this._container.addEventListener('click', () => {
					this.showText()
                    })
    }

    setText(text){
        this._text = text
        this.showTitle()
    }

    showTitle(){
        Dom.clearContainer(this._container)
        Dom.addElemWithText('p', this.#title, this._container)
    }


}

