var data = new Date()
var horas = data.getHours()
var elemento = document.getElementById(`tema`)

if(horas >= 6 && horas <= 11){
    elemento.classList.remove(`night`)
    elemento.classList.add(`morning`)
} else if(horas >= 12 && horas <= 17){
    elemento.classList.remove(`morning`)
    elemento.classList.add(`afternoon`)
} else {
    elemento.classList.remove(`afternoon`)
    elemento.classList.add(`night`)
}