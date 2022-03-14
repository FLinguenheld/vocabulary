import {Dom} from "./dom.js"

// Convert csv in tab
// 0 : word
// 1 : translation
// 2 : synonym
// 3 : context
// 4 : comment


/* This class gets the list in github and convert in an array 
*  Launch init() one time and use random() to generate a new words */
export class Words{
    #words
    #previous
    #history

    constructor(){
        this.#words = []
        this.#previous = []
        this.#history = []
    }

    async init(){

        try {
            const response = await fetch('https://raw.githubusercontent.com/FLinguenheld/vocabulary/main/vocabulary.csv')

            if (!response.ok) {
                    throw new Error(`Erreur HTTP ! statut : ${response.status}`)
            }

            const r = await response.text()
            const lines = r.split("\n")

            for (let i = 1; i < lines.length -1; i++) {
              this.#words[i-1] = lines[i].split(",")
            }

            // Sorts for the method list
            this.#words.sort((a, b)=> a[0].localeCompare(b[0]))

        } catch (error)	{
            console.log(error)
            Dom.addElemWithText('p', "Echec de la connexion au site", this._container, "error");
            throw new Error(`Erreur fetch ! statut : ${error}`)
        }
    }

    /* Returns a random word (a word is an array with all fields)
     * Save the history in this.#history */
    random(){
    
        while(true){

            const i = Math.floor(Math.random() * this.#words.length)

            // Check if already worked
            if (this.#previous.includes(i)){
                if (this.#previous.length >= this.#words.length){
                    this.#previous = []
                }
            }else{
                this.#previous.push(i)

                // Save history
                if (!this.#history.includes(this.#words[i])){
                    this.#history.push(this.#words[i])
                }

                return this.#words[i]
            }
        }
    }

    /* Returns the history array */
    history(){
        this.#history.sort((a, b)=> a[0].localeCompare(b[0]))
        return this.#history
    }

    /* Returns the full list array */
    list(){
        return this.#words
    }
}
