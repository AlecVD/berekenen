var main = document.getElementById("main")

var numberPad = document.createElement("div")
numberPad.id = "numberPad"
main.appendChild(numberPad)

function createCalculator(){
    var buttons = ["AC","±","%","÷","6","7","9","×","4","5","6","−","1","2","3","+","0",".","="]
    for(var i = 0; i < buttons.length; i++){
        var button = document.createElement("div")
        button.innerText = buttons[i]
        button.classList.add("num")
        numberPad.appendChild(button)
    }
}

createCalculator();