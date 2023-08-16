function KgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 1.2;
  else return parseInt(weight) * 2.2;
}

KgToLbs(10);
KgToLbs("10Kg");
