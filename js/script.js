var main = document.getElementById("main")

function createCalculator(){
    console.log("???")
    for(var i = 0; i < 10; i++){
        var button = document.createElement("div")
        button.innerText = i
        button.classList.add("num")
        main.appendChild(button)
    }
}

createCalculator();