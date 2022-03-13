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

    constructor(){
        this.#words = []
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

        } catch (error)	{
            console.log(error)
            Dom.addElemWithText('p', "Echec de la connexion au site", this._container, "error");
            throw new Error(`Erreur fetch ! statut : ${error}`)
        }
    }

    random(){
        const i = Math.floor(Math.random() * this.#words.length)
        return this.#words[i]
    }
}
