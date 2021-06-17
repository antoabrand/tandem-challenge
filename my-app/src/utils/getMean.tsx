export function getMean(vals: number[]) {
  if (vals && vals.length > 0) {
    const sortedVals = vals.sort();
    const mean = sortedVals[Math.floor(vals.length / 2)];
    return mean;
  }
  return 0;
}
