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
    saveText(text){
        this._text = text
        this.showText()
    }

    /* Displays the text value.
     * Use clicked to directely modify container's class name */
    showText(){
        if(this._text !== ''){
            Dom.clearContainer(this._container)
            Dom.addElemWithText('p', this._text, this._container)
            this.setClicked()
        }
    }

    /* Allows to play with css values */
    setClicked(){
        this.clearClass()
        this._container.classList.add('clicked')
    }
    setWaiting(){
        this.clearClass()
        this._container.classList.add('waiting')
    }
    setEmpty(){
        this.clearClass()
        this._container.classList.add('empty')
    }

    /* Removes/adds classname's _container */
    clearClass(){
        this._container.classList.remove('waiting')
        this._container.classList.remove('clicked')
        this._container.classList.remove('empty')
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
    saveText(text){
        this._text = text

        Dom.clearContainer(this._container)
        Dom.addElemWithText('p', this.#title, this._container)

        // Css --
        if (text !== ''){
            this.setWaiting()
        }else{
            this.setEmpty()
        }
    }
}
