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
    word.showText(true)
    translation.showText(true)
    synonym.showText(true)
    context.showText(true)
    comment.showText(true)
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
        word.setText(newWord[0])
        translation.setText(newWord[1])
    }else{
        word.setText(newWord[1])
        translation.setText(newWord[0])
    }
    synonym.setText(newWord[2])
    context.setText(newWord[3])
    comment.setText(newWord[4])
}

const btNext = document.getElementById('next')
btNext.addEventListener('click', () => {
                next()
                })

// −− FIRST −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
next()
