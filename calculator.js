screen = document.getElementById("screen")

operators = document.getElementsByClassName("operators")

plus = document.getElementById("sum")
plus.value = "+"

minus = document.getElementById("subt")
minus.value = "-"

multiplier = document.getElementById("mult")
multiplier.value = "*"

divider = document.getElementById("divd")
divider.value = "/"

equal = document.getElementById("equal")
equal.value = "="

ac = document.getElementById("ac")

numbers_container = document.getElementById("numbers")
numbers = document.getElementsByClassName("number_buttons")
screen.textContent = 0


for (i=9; i >= 0; i--){
    number = document.createElement("button")
    number.textContent = i
    number.value = i
    number.classList.add("number_buttons")
    numbers_container.appendChild(number)   
}



function sum(a,b){
    screen.textContent = (+a) + (+b)
}

function subt(a,b){
    screen.textContent = (+a) - (+b)
}

function multiply(a,b){
    screen.textContent = (+a) * (+b)
}

function divide(a,b){
    screen.textContent = (+a) / (+b)

}


Array.from(numbers).forEach((element) => {           // writes numbers on screen and replaces 0 if only value                                                                   
    element.addEventListener("click", (e)=>{

        if (screen.textContent == 0){
            screen.textContent = element.value

        }else{
            screen.textContent += element.value
        }})})

Array.from(operators).forEach((element) => {          // clicking operators will store the first number and operator and reset screen to 0
    element.addEventListener("click", () => {
        screen_arr["1"] = screen.textContent
        screen_arr["operator"] = element.value
        screen.textContent = 0

    })
})

equal.addEventListener("click", () => {               //provides result 
    screen_arr["2"] = screen.textContent
    if (screen_arr["operator"] == "+"){
        sum(screen_arr["1"], screen_arr["2"])

    }else if (screen_arr["operator"] == "-"){
        subt(screen_arr["1"], screen_arr["2"])

    }else if (screen_arr["operator"] == "*"){
        multiply(screen_arr["1"], screen_arr["2"])

    }else if (screen_arr["operator"] == "/"){
        divide(screen_arr["1"], screen_arr["2"])
    
    }else{ 
        console.log("something went wrong")}
 })


 ac.addEventListener("click", () =>{
    screen.textContent = 0
    screen_arr["1"] = null
    screen_arr["operator"] = null
    screen_arr["2"] = null

 })





let screen_arr = {"1": null, "operator": null, "2":null };
console.table(screen_arr)
