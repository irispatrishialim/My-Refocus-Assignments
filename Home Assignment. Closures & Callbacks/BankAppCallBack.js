let balance = 0;

function createBankAccount(name, amount, callback) {
    console.log(`Account: ${name} \nBalance: ${balance}.`);
    callback(name, amount);
}

function depositAmount(name, amount) {
    balance = balance + amount;
    console.log(`Awesome! Your bank account ${name} received ${amount}. Available balance is: ${balance}.`);
}

function withdrawAmount(name, amount) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log(`Your bank account ${name} has succefully withdrawn ${amount}. Available balance is: ${balance}.`);
    } else {
        console.log(`Opps! You do not have enough balance to proceed.`)
    }
}

createBankAccount("iris00", 1000, depositAmount);
createBankAccount("iris00", 1000, withdrawAmount);