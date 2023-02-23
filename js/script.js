var main = document.getElementById("main");

var screen = document.createElement("div");
screen.id = "screen";
screen.innerText = "0";

var numberPad = document.createElement("div");
numberPad.id = "numberPad";

main.appendChild(screen);
main.appendChild(numberPad);

var buttons = ["C","8","4","1","±","7","5","2","%","9","6","3","÷","×","−","+",]

function createCalculator() {
    var index = 0
    for (var i = 0; i < 4; i++) {
        var row = document.createElement("div")
        row.classList.add("column")
        if(i < 3){
            row.style.borderRight = "Solid #212F3C"
        }
        for(var j = 0; j < 4; j++){
            var button = document.createElement("div");
            button.innerText = buttons[index];
            button.classList.add("button");
            button.addEventListener("click", clickEvent);

            if(index%4 != 3){
                button.style.borderBottom = "Solid #212F3C"
            }
            
            index++
            row.appendChild(button);
        }
        numberPad.appendChild(row)
    }

    var bottomRow = document.createElement("div")
    main.appendChild(bottomRow)
    bottomRow.classList.add("bottomRow")
    bottomRow.style.width = main.style.width
    bottomRow.style.borderTop = "Solid #212F3C"

    var button = document.createElement("div")
    button.innerHTML = "0"
    button.id = "zero"
    button.addEventListener("click", clickEvent);

    bottomRow.appendChild(button)

    button = document.createElement("div")
    button.innerHTML = "."
    button.classList.add("button")
    button.style.borderRight = "Solid #212F3C"
    button.style.borderLeft = "Solid #212F3C"
    button.addEventListener("click", clickEvent);
    bottomRow.appendChild(button)

    button = document.createElement("div")
    button.innerHTML = "="
    button.classList.add("button")
    button.addEventListener("click", clickEvent);
    bottomRow.appendChild(button)

}

var value = screen.innerText
var lastValue = null
var operator = null
var opClicked = false

function clickEvent(e) {
    var input = e.target.innerText;
    switch (true) {
        case input == "C":
            clear()
            break;
        case input == "+":
            opClick(input)
            break;
        case input == "-":
            opClick(input)
            break;
        case input == "/":
            opClick(input)
            break;        
        case input == "x":
            opClick(input)
            break;
        case input == "=":
            alert("equa")
            compute()
            operator = null
            break;
        default:
            numberClick(input)
            break;
    }
    console.log("ran?")
}
function opClick(op){
    if(operator !== null){
        compute();
    }
    operator = op
    lastValue = value
    opClicked = true
}
function numberClick(x){
    if(opClicked){
        lastValue = value
        value = ""
        opClicked = false
    }
    if(value === "0"){
        value = ""
    }
    value += x
    update();
}
function compute(){
    lastFloat = parseFloat(lastValue)
    curFloat = parseFloat(value)
    switch (operator) {
        case "+":
          value = (lastFloat + curFloat).toString();
          break;
        case "-":
          value = (lastFloat - curFloat).toString();
          break;
        case "×":
          value = (lastFloat * curFloat).toString();
          break;
        case "÷":
          value = (lastFloat / curFloat).toString();
          break;
        default:
          return;
      }
      update();
}
function update(){
    screen.innerText = value
}

function clear(){
    value = "0"
    lastValue = null
    operator = null
    update();
}
createCalculator();