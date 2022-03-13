import {Words} from "./words.js"
import {BaseField, Field} from "./field.js"



// −− GET WORDS −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
const words = new Words()
await words.init()


// −− FIELDS −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
const word = new BaseField('word')
const translation = new Field('translation', 'Traduction')
const synonym = new Field('synonym', 'Synonyme')
const context = new Field('context', 'Contexte')
const comment = new Field('comment', 'Commentaire')


// −− SET WORD CLICK EVENT  −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
let f = function showAll(){
    translation.showText()
    synonym.showText()
    context.showText()
    comment.showText()
}

word.setEvent(f)


// −− TEST −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
const newWord = words.random()
console.log(newWord)

word.setText(newWord[0])
translation.setText(newWord[1])
synonym.setText(newWord[2])
context.setText(newWord[3])
comment.setText(newWord[4])
