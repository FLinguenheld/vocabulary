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

    /* Saves the new text and shows */
    setText(text){
        this._text = text
        this.showText(false)
    }

    /* Displays the text value.
     * Use clicked to directely modify container's class name */
    showText(clicked=true){
        Dom.clearContainer(this._container)
        Dom.addElemWithText('p', this._text, this._container)
        this.setClicked(clicked)
    }

    /* Removes/adds classname's _container
     * Allows to play with css values */
    setClicked(yes=true){
        if(yes){
            this._container.classList.remove('waiting')
            this._container.classList.add('clicked')
        }else{
            this._container.classList.remove('clicked')
            this._container.classList.add('waiting')
        }
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

    /* Overload to save the next nonetheless with displaying the title instead of text */
    setText(text){
        this._text = text
        this.showTitle()
    }

    /* Displays the title and changes the container's class name*/
    showTitle(){
        Dom.clearContainer(this._container)
        Dom.addElemWithText('p', this.#title, this._container)
        this.setClicked(false)
    }
}
