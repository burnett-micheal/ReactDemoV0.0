//Declare Function
function declare(){
    return "Declare Function Return";
}

//Function Expression
const expression = function ex(){return "Expression Function Return";}

//Arrow / Anonymous Function
const arrow = () => {return "Arrow Function Return"}

/*
some anonymous function examples:
const arrowFunction = (param_1, param_2) => {code} --- executes code
const arrowFunction = (param_1, param_2) => returnValue --- returns returnValue
const arrowFunction = param_1 => param_1 --- returns param_1
*/

export {declare, expression, arrow};