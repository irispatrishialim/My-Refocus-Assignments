function createBankAccount(name) {
    let balance = 0;
    console.log(`Account: ${name} \nBalance: ${balance}.`);

    function depositAmount(amount) {
        balance = balance + amount;
        console.log(`Awesome! Your bank account ${name} received ${amount}. Available balance is: ${balance}.`);
    }

    function withdrawAmount(amount) {
        if (amount <= balance) {
            balance = balance - amount;
            console.log(`Your bank account ${name} has succefully withdrawn ${amount}. Available balance is: ${balance}.`);
        } else {
            console.log(`Opps! You do not have enough balance to proceed.`)
        }
    }
    return {
        depositAmount,
        withdrawAmount
    }
}

let bankAccount = createBankAccount("Iris00");
bankAccount.depositAmount(1000);
bankAccount.withdrawAmount(1000);

