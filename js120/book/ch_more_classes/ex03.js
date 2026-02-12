/*
Create a BankAccount class with a private field balance. 
Add a private method, #checkBalance, that logs the current balance. 
Provide a public method, deposit, to add money to the account and withdraw to take money out. 
Raise a RangeError if there are insufficient funds for the withdrawal.
*/


class BankAccount {
  #balance;

  constructor(balance = 0) {
    this.#balance = balance;
  }

  #checkBalance() {
    console.log(`Balance: ${this.#balance}`);
  }

  deposit(amount) {
    this.#balance += amount;
    this.#checkBalance();
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new RangeError('RangeError: Insufficient funds');
    }
    this.#balance -= amount;
    this.#checkBalance();
  }

}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds