#! /usr/bin/env/node
import inquirer from "inquirer";
const result = await inquirer.prompt([
    {message:"Enter frist number", type: "number", name:"firstNumber"},
    {message:"Enter second number", type: "number", name:"secondNumber"},
    {message:"Select one of the operator to perfomyour operation",
    type:"list",
    name:"operator",
    choices:["Addition","Subtraction","Multiply","Division"],
},

]);
// condition 
if(result.operator === "Addition"){
    console.log(result.firstNumber + result.secondNumber);
}
else if(result.operator === "Subtraction"){
    console.log(result.firstNumber = result.secondNumber);
}
else if(result.operator === "Multiply"){
    console.log(result.firstNumber * result.secondNumber);
}
else if(result.operator === "Division"){
    console.log(result.firstNumber / result.secondNumber);
}
else{
    console.log("please select valid operator");
}