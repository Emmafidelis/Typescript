let speed: number | null = null;
let ride = {
  // Nullish coalescing operator
  // speed: speed !== null ? speed : 30
  // or
  speed: speed ?? 30,
};
