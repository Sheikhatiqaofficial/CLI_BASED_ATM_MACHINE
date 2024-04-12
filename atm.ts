import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";
let Totalbalance = 35000;

let AccountPin = 9876;

console.log(chalk.blueBright("\n \tDEAR USER! WELCOME TO YOUR ACCOUNT.\n \t"));

let PinResponse = await inquirer.prompt([

    {
        name: "pin",
        type: "number",
        message: chalk.blackBright("PLEASE INSERT YOUR PIN CODE!")
    }

])
if (PinResponse.pin === AccountPin) {
    console.log(chalk.greenBright("\nCORRECT PIN! LOGIN SUCCESFULLY.\n"));

    let functionAns = await inquirer.prompt([

        {
            name: "function",
            type: "list",
            message: "What function you want to do?",
            choices: ["WITHDRAW AN AMOUNT", "CHECK YOUR BALANCE"]
        }

    ])

    if (functionAns.function === "WITHDRAW AN AMOUNT") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "ENTER YOUR AMOUNT!"
            }
        ])

        if (amountAns.amount > Totalbalance) {
            console.log(chalk.redBright("YOUR ACCOUNT HAVE NOT THAT MCUH!"));
        }

        else {
            Totalbalance -= amountAns.amount;
            console.log(chalk.yellow(`YOU'VE SUCCESFULLY WITHDRAWN ${amountAns.amount}!`));
            console.log(chalk.yellow(`YOUR LEFT OVER AMOUNT IS: ${Totalbalance} `));
        }
    }

    else if (functionAns.function === "CHECK YOUR BALANCE") {
        console.log(chalk.greenBright(`YOUR CURRENT BALANCE IS: ${Totalbalance}!`))
    }
}
else {
    console.log(chalk.redBright("INCORRECT PIN!"));
}

