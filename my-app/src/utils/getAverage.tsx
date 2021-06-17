export function getAverage(vals: number[]) {
  if (vals && vals.length > 0) {
    return vals.reduce((a, b) => Number(a) + Number(b)) / vals.length; //casting to be defensive against the api 
  }
  return 0;
}
