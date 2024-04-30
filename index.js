import inquirer from 'inquirer';
let balance = 10000;
console.log(`Your current balance is: ${balance}`);
let atm = await inquirer.prompt({
    name: "yourPin",
    type: "number",
    message: "Enter your pin number"
});
if (atm.yourPin == 5555) {
    let atmOpt = await inquirer.prompt({
        name: "options",
        message: "What you want to do?",
        type: "list",
        choices: ["fast cash", "withdraw", "check balance"]
    });
    if (atmOpt.options == "check balance") {
        console.log(`Your current balance is: ${balance}`);
    }
    else if (atmOpt.options == "fast cash") {
        let fastcash = await inquirer.prompt({
            name: "sfastcash",
            message: "Select your fast cash option",
            type: "list",
            choices: ["1000", "2000", "5000", "10000"]
        });
        if (fastcash.sfastcash == 1000) {
            balance -= 1000;
            console.log(`Your Remaining balance is ${balance}`);
        }
        else if (fastcash.sfastcash == 2000) {
            balance -= 2000;
            console.log(`Your Remaining balance is ${balance}`);
        }
        else if (fastcash.sfastcash == 5000) {
            balance -= 5000;
            console.log(`Your Remaining balance is ${balance}`);
        }
        else if (fastcash.sfastcash == 10000) {
            balance -= 10000;
            console.log(`Your Remaining balance is ${balance}`);
        }
    }
    else if (atmOpt.options == "withdraw") {
        let withdraw = await inquirer.prompt({
            name: "widthrawamount",
            type: "number",
            message: "Enter amount"
        });
        if (withdraw && withdraw.widthrawamount <= balance) {
            balance -= withdraw.widthrawamount;
            console.log(`Your Remaining balance is ${balance}`);
        }
        else {
            console.log(`You have insufficiant balance`);
        }
    }
}
else {
    console.log("Please enter correct pin again");
}
