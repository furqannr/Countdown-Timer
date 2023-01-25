import inquirer from "inquirer";
import chalk from "chalk";
let timeInSeconds: number = -1;
async function eachSecond() {
    console.clear();
    if (timeInSeconds > 0) {
        console.log(timeInSeconds);
        setTimeout(() => {
            eachSecond();
        }, 1000);
    }
    timeInSeconds -= 1;
}

async function askUser() {
    await inquirer.prompt([{
        type: "input",
        name: "seconds",
        message: "Enter the number you want the timer to start from? "
    }]).then(async (answers) => {
        {
            timeInSeconds = answers.seconds;
            //console.log(typeof (Number(timeInSeconds)))
            await eachSecond();
        }
    })
}
async function continueChoice() {
    do {
        await askUser();
        var choice = await inquirer.prompt(
            {
                type: "input",
                name: "qa",
                message: chalk.bgGrey("Do you want to play again? Press Y or y to continue")
            })
    }
    while (choice.qa == 'yes' || choice.qa == 'Yes' || choice.qa == 'YES' || choice.qa == 'y' || choice.qa == 'Y');
}
continueChoice();
