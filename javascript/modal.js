import {Dom} from "./dom.js";



export class Modal{
    #containerModal
    #container

	constructor(){
		this.#containerModal = document.getElementById("modal");
		this.#container = document.getElementById("containerModal");
	}
	
// −− STATIC − EVENTS MANAGEMENT −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
	/* Adds an event to leave the modal div 'modal'
	 * Use this method one time in the main */
	static addEventCloseDetails(){

		const win = document.getElementById("modal")

		window.addEventListener('click', (event) => {
			if (event.target == win) {
				win.style.display = "none"
		  }
		});
	}

    /* Closes the modal div*/
    static close(){
		const win = document.getElementById("modal")
		win.style.display = "none"
    }

    /* Clear the div, displays and add a <p> for each word given */ 
    show(listWords, funct){
        Dom.clearContainer(this.#container)
        this.#containerModal.style.display = "block"

        for (let word of listWords){
            const para = Dom.addElemWithText('p', word[0], this.#container, 'paraModal')

            para.addEventListener('click', () => {
                funct(word) 
                })
        }
    }
}
