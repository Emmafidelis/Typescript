class Accoun {
  nickname?: string; // Optional

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

let accoun = new Accoun(1, "Mosh", 0);
console.log(accoun.getBalance());
