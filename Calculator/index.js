const display = document.querySelector(".display");

const appendToDisplay = (input) => {
    display.value += input;
}

const clearDisplay = () => {
    display.value = ""
}

const calculate = () => {
    try{
        display.value = eval(display.value);
    } catch(e){
        display.value = `Enter valid values ${e}`;
    }
}