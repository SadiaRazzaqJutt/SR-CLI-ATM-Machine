#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 20000; // rupees
let myPin = 4567;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message : "Enter your pin number",
            type: "number"
        }
    ]
);
if (pinAnswer.pin === myPin){
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt(
        [
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]
);
if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"

    }]);
    // = += -=
    myBalance -= amountAns.amount;
    console.log("Your remaining balance is" + myBalance);
} 
else if (operationAns.operation === "check balance"){
console.log(`Your remaining balance is ${myBalance}`)
} else {
    console.log("Your pin is incorrect");
}
}