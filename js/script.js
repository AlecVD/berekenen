var main = document.getElementById("main")
var screen = document.createElement("div")
screen.innerText = "00000"

var numberPad = document.createElement("div")
numberPad.id = "numberPad"

main.appendChild(screen)
main.appendChild(numberPad)

function createCalculator(){
    var buttons = ["AC","±","%","÷","6","7","9","×","4","5","6","−","1","2","3","+","0",".","="]
    for(var i = 0; i < buttons.length; i++){
        var button = document.createElement("div")
        button.innerText = buttons[i]
        button.classList.add("num")
        button.addEventListener("click",clickEvent)
        numberPad.appendChild(button)
    }
}

function clickEvent(e){
    var input = e.target.innerText
    screen.innerText += input
}
createCalculator();