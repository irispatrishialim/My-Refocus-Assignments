const userAccount = {
    "bankAccount": [{
        "bankAccountID": 1,
        "accountNumber": 12341234,
        "credentials":
        {
            "userName": "account1",
            "password": "Password1!",
            "pin": 1234,
        }
        ,
        "balance": 1000,
        "createdAt": "10/19/22"
    }],
    "debitCard": 11234456,
    "firstName": "Iris",
    "lastName": "Lim",
    "birthDate": "11/30/1997",
    "validID": ['Passport', "Driver's License", 'Postal ID'],
    "address": "Blk1 Lot1, Street Village, Manila",

    "getUserName": function () {
        for (details of this.bankAccount)
            return (details.credentials.userName); //check username
    },

    "getPassword": function () {
        for (details of this.bankAccount)
            return (details.credentials.password); //check password
    },

    "getAccountNumber": function () {
        for (details of this.bankAccount)
            return (details.accountNumber) //check account number
    },

    "getBalance": function () {
        for (details of this.bankAccount)
            return (details.balance) //check balance
    }
}

// userAccount.getUserName();
// userAccount.getPassword();

let balance = userAccount.getBalance();

function getBankAccountDetails(inputUsername, inputPassword, amount, callback) {
    if (inputUsername === userAccount.getUserName() && inputPassword === userAccount.getPassword()) {
        console.log(`Account Number: ${userAccount.getAccountNumber()} \nAvailable Balance: ₱${userAccount.getBalance()}`);
    } else {
        console.log(`Error!`)
    }
    callback(inputUsername, inputPassword, amount);
}

function withdrawMoney(inputUsername, inputPassword, amount) {
    if (inputUsername === userAccount.getUserName() && inputPassword === userAccount.getPassword()) {
        if (amount <= balance) {
            balance = balance - amount;
            console.log(` Amount: ₱${amount} \n Expected balance: ₱${balance}`);
        } else {
            console.log(`Opps! You do not have enough balance to proceed.`)
        }
    } else {
        console.log(`You have entered an invalid username or password.`)
    }
}

function depositMoney(inputUsername, inputPassword, amount) {
    if (inputUsername === userAccount.getUserName() && inputPassword === userAccount.getPassword()) {
        balance = balance + amount;
        console.log(` Amount: ₱${amount} \n Expected balance: ₱${balance}`);
    } else {
        console.log(`You have entered an invalid username or password.`);
    }
}

getBankAccountDetails("account1", "Password1!", 100, withdrawMoney);
getBankAccountDetails("account1", "Password1!", 200, depositMoney);








