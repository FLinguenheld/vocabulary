import {Words} from "./words.js"
import {BaseField, Field} from "./field.js"
import {Modal} from "./modal.js"


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

// −− NEXT −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
const btNext = document.getElementById('next')
btNext.addEventListener('click', () => {
                next(words.random()) 
                })

/* Update all fields with the word w*/
function next(w){

    if (englishToFrench){
            word.saveText(w[0])
            translation.saveText(w[1])
        }else{
            word.saveText(w[1])
            translation.saveText(w[0])
        }
        synonym.saveText(w[2])
        context.saveText(w[3])
        comment.saveText(w[4])
}

// −− MODAL −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
/* Closes the modal and launches next
 * This function is used by Modal class */
function setNext(t){
    Modal.close()
    next(t)
}

/* Allows to close modal by a click outside the modal */
Modal.addEventCloseDetails()

// −− BT LIST −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
const btList = document.getElementById('list')
btList.addEventListener('click', () => {
                const myList = new Modal();
                myList.show(words.list(), setNext);
                })

// −− BT HISTORY −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
const btHistory = document.getElementById('history')
btHistory.addEventListener('click', () => {
                const myHistory = new Modal();
                myHistory.show(words.history(), setNext);
                })

// −− FIRST −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
next(words.random())
