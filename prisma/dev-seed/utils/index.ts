export function generateRandomNumber(min: number, max: number) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateUniqueRandomNumbers(min: number, max: number, quantity: number): number[] {
  if (max - min + 1 < quantity) {
    throw new Error("Interval is too small to generate unique numbers.");
  }

  const uniqueNumbers: Set<number> = new Set();
  const result: number[] = [];

  while (uniqueNumbers.size < quantity) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(randomNumber);
  }

  uniqueNumbers.forEach((number) => result.push(number));

  return result;
}

export function getSalesQuantity(values: number[]) {
  const total = values.reduce((pv, cv) => pv + cv, 0)

  const sq = Math.floor(total/150) + 1

  return sq
}