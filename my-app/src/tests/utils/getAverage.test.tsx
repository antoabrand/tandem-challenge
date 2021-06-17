import { getAverage } from '../../utils/getAverage';

describe('get the average of an array of numbers', () => {
  test('returns mode on good data', () => {
    const vals: number[] = [1, 23, 12];
    const average = getAverage(vals);
    expect(average).toEqual(12); //36 divided by 3 is 12
  });

  test('returns zero on no data', () => {
    const vals: number[] = [];
    const average = getAverage(vals);
    expect(average).toEqual(0);
  });
});
