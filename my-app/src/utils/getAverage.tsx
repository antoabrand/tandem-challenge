export function getAverage(vals: number[]) {
  return vals.reduce((a, b) => a + b) / vals.length;
}
