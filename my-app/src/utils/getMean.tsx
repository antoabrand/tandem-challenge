export function getMean(vals: number[]) {
  const sortedVals = vals.sort();
  const mean = sortedVals[Math.floor(vals.length / 2)];
  return mean;
}
