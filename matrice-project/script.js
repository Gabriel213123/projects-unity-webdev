function result(){

var number1 = document.getElementById("numar1").value
var number2 = document.getElementById("numar2").value
var number3 = document.getElementById("numar3").value
var number4 = document.getElementById("numar4").value
var number5 = document.getElementById("numar5").value
var number6 = document.getElementById("numar6").value
var number7 = document.getElementById("numar7").value
var number8 = document.getElementById("numar8").value
var number9 = document.getElementById("numar9").value
var number10 = document.getElementById("numar10").value
var number11 = document.getElementById("numar11").value
var number12 = document.getElementById("numar12").value
var number13 = document.getElementById("numar13").value
var number14 = document.getElementById("numar14").value
var number15 = document.getElementById("numar15").value

var result_TEXT = document.getElementById("resulttext")

var result = eval(number1 * number5 * number9 + number4 * number8 * number12 + number7 * number11 * number15 - number3 * number5 * number7 - number6 * number8 * number10 - number9 * number11 * number13)

result_TEXT.innerText = result


}

function ChangeNumber1() {
    var numberr10 = document.getElementById("numar10")
    var numberr1 = document.getElementById("numar1")

    numberr10.value = numberr1.value
}

function ChangeNumber2() {
    var numberr11 = document.getElementById("numar11")
    var numberr2 = document.getElementById("numar2")

    numberr11.value = numberr2.value
}

function ChangeNumber3() {
    var numberr12 = document.getElementById("numar12")
    var numberr3 = document.getElementById("numar3")

    numberr12.value = numberr3.value
}

function ChangeNumber4() {
    var numberr13 = document.getElementById("numar13")
    var numberr4 = document.getElementById("numar4")

    numberr13.value = numberr4.value
}

function ChangeNumber5() {
    var numberr14 = document.getElementById("numar14")
    var numberr5 = document.getElementById("numar5")

    numberr14.value = numberr5.value
}

function ChangeNumber6() {
    var numberr15 = document.getElementById("numar15")
    var numberr6 = document.getElementById("numar6")

    numberr15.value = numberr6.value
}