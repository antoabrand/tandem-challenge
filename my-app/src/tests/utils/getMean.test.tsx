import { getMean } from '../../utils/getMean';

describe('get the mean of an array of numbers', () => {
  test('returns mode on good data', () => {
    const vals: number[] = [1, 23, 12, 1, 1, 1, 1];
    const average = getMean(vals);
    expect(average).toEqual(1);
  });
  test('returns zero on no data', () => {
    const vals: number[] = [];
    const average = getMean(vals);
    expect(average).toEqual(0);
  });
});
