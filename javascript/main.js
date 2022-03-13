import {Words} from "./words.js"
import {BaseField, Field} from "./field.js"


// −− GET WORDS −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
const words = new Words()
await words.init()

// −− FIELDS −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
const word = new BaseField('word')
const translation = new Field('translation', 'Translation')
const synonym = new Field('synonym', 'Synonym')
const context = new Field('context', 'Context')
const comment = new Field('comment', 'Comment')

// −− SET WORD CLICK EVENT  −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
word.setEvent(function showAll(){
    word.showText()
    translation.showText()
    synonym.showText()
    context.showText()
    comment.showText()
})

// −− BT REVERSE −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
let englishToFrench = true

const btReverse = document.getElementById('reverse')
btReverse.addEventListener('click', () => {
                                    englishToFrench = !englishToFrench
                                          }
                          )

// −− BT NEXT −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
function next(){

    const newWord = words.random()

    if (englishToFrench){
        word.saveText(newWord[0])
        translation.saveText(newWord[1])
    }else{
        word.saveText(newWord[1])
        translation.saveText(newWord[0])
    }
    synonym.saveText(newWord[2])
    context.saveText(newWord[3])
    comment.saveText(newWord[4])
}

const btNext = document.getElementById('next')
btNext.addEventListener('click', () => {
                next()
                })

// −− FIRST −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
next()
