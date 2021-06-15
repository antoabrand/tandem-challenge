export function getMode(vals: number[]) {
  let frequency: any = {};
  let highestVal: number = 0;
  let highestValKey: number = 0;
  let value: number = 0;

  //iterate over array
  //add val to object if it doesn't already exist on obj
  //if it does exist the increment the number of times you've come across it
  vals.forEach((num) => {
    if (!frequency[num]) {
      frequency[num] = 1;
    } else {
      frequency[num] += 1;
    }
  });

  //check with key has highest value
  for (let key in frequency) {
    value = frequency[key];

    if (highestVal < value) {
      highestVal = value;
      highestValKey = Number(key);
    }
  }

  return highestValKey;
}
