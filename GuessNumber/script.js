

function play(){
    var txt = document.getElementById("numartxt")
    var inp_txt = document.getElementById("number").value
    
    var random_number = Math.floor(Math.random() * 10 + 1)

    var correct = document.getElementById("correct")
    var incorrect = document.getElementById("incorrect")

    if(inp_txt == random_number){
        txt.innerText = `Correct, numarul este: ${random_number}`
        txt.style.color = "limegreen"
        correct.innerText += ` ${inp_txt} `
    }else {
        txt.innerText = `Incorrect, numarul este: ${random_number}`
        txt.style.color = "red"
        incorrect.innerText += ` ${inp_txt} `
    }
}

