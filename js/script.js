var main = document.getElementById("main");

var screen = document.createElement("div");
screen.id = "screen";
screen.innerText = "0";

var numberPad = document.createElement("div");
numberPad.id = "numberPad";

main.appendChild(screen);
main.appendChild(numberPad);

var buttons = ["C","±","%","÷","6","7","9","×","4","5","6","−","1","2","3","+","0",".","=",];

function createCalculator() {
    var index = 0
    for (var i = 0; i < 4; i++) {
        var row = document.createElement("div")
        row.classList.add("column")
        for(var j = 0; j < 4; j++){
            var button = document.createElement("div");
            button.innerText = buttons[index];
            button.classList.add("button");
            button.addEventListener("click", clickEvent);
            
            index++
            row.appendChild(button);
        }
        numberPad.appendChild(row)
    }
}

var lastKey = "";

function clickEvent(e) {
    var input = e.target.innerText;
    switch (true) {
        case input == "C":
            screen.innerText = "0";
            break;
        default:
            screen.innerText += input;
            break;
    }
    lastKey = input;
}

createCalculator();