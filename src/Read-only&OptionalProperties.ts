class Accounted {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string; // Optional

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

let accounted = new Accounted(1, "Mosh", 0);
