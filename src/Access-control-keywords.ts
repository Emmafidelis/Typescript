class Accounting {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string; // Optional

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

let accounting = new Accounting(1, "Mosh", 0);
console.log(accounting.getBalance());
