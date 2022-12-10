var main = document.getElementById("main");

var screen = document.createElement("div");
screen.id = "screen";
screen.innerText = "0";

var numberPad = document.createElement("div");
numberPad.id = "numberPad";

main.appendChild(screen);
main.appendChild(numberPad);

var buttons =    ["C","6","4","1","±","7","5","2","%","9","6","3","÷","×","−","+",]

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
    //0 line
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