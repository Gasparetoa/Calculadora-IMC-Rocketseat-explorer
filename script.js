//variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')

modalMessage.innerText = "Qualquer coisa "



form.onsubmit = function (event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const message = `Seu IMC é de ${result}`
    modalWrapper.classList.add('open')
    
   const result = IMC(weight, height)
   console.log(result)
}

function importScripts(weight, height){
    return(weight / ((height/100) ** 2 )).toFixed(2)
}