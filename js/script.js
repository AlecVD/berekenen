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

    var bot = ["0",".","="]
    for(var i = 0; i < 3; i++){
        var element = document.createElement("div")
        element.innerHTML = bot[i]
        element.classList.add("button")
        bottomRow.appendChild(element)
    }
    
}

var lastKey = ""
var lastNum = ""
var lastmult = ""

function clickEvent(e) {
    var input = e.target.innerText;
    switch (true) {
        case input == "C":
            screen.innerText = "0";
            break;
        case input == "+":
            add()
            break;
        default:
            screen.innerText += input;
            break;
    }
    console.log("ran?")
    lastKey = input;
}

function add(){
    console.log("add")
    if(lastNum == ""){
        lastNum = screen.innerText
        screen.innerText = "0"
        return
    }
    screen.innerText = parseFloat(lastNum) + parseFloat(screen.innerText)
    lastNum = ""
}
createCalculator();