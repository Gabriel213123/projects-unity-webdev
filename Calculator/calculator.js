const calculator = document.querySelector("#calculator")

function numbers(key){
    calculator.value += key
    console.log(key)
}

function equal(){
    try{
    calculator.value = eval(calculator.value)
    }
    catch{
        calculator.value = "ERROR"
    }
}

function del() {
    calculator.value = ""
}