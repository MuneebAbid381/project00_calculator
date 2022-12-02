import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function wc() {
    let rainbowTitle = chalkAnimation.rainbow("lets start calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(`   _____________________
  |  _________________  |
  | | JO           0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`);
}
// wc();
async function askquestion() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            massage: "Wttch operation you want to perform ? /n",
            choices: ["Addition", "Subtraction", "Mutiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            massage: "Enter number 1",
        },
        {
            type: "number",
            name: "num2",
            massage: "Enter number 2",
        },
    ])
        .then((answers) => {
        if (answers.operator == "Addition") {
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
        }
        else if (answers.operator == "Subtraction") {
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
        }
        else if (answers.operator == "Multiplication") {
            console.log(`${answers.num1} *  ${answers.num2} = ${answers.num1 * answers.num2}`);
        }
        else if (answers.operator == "Divisionn") {
            console.log(`${answers.num1} /  ${answers.num2} = ${answers.num1 / answers.num2}`);
        }
    });
}
async function startAgain() {
    do {
        await askquestion();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                massage: "Do you want to continue? press y or n:",
            },
        ]);
    } while (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "YES");
}
startAgain();
