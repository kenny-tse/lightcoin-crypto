class Account {

  balance = 0;
  transaction = [];

  constructor(username) {
    this.username = username;
  }

  addTransaction(transaction) {
    this.transaction.push(transaction);
  }

  printTransactions() {
    for (let i = 0; i < this.transaction.length; i++) {
      console.log(this.transaction[i]);
    }
  }


}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (this.account.balance += this.value < 0) {
      console.log("You cannot withddrawl less than you have!")
      return;
    }
    let startingBalance = this.account.balance;
    this.account.balance += this.value;
    this.time = new Date();
    this.account.addTransaction(`${this.time} - \nStarting balance: ${startingBalance} \nEnding Balance: ${this.account.balance}`);
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

// DRIVER CODE BELOW
const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(500.00, myAccount);
t2.commit();

myAccount.printTransactions();


