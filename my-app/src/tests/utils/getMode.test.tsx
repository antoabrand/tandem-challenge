import { getMode } from '../../utils/getMode';

describe('get the mode of an array of numbers', () => {
  test('returns mode on good data', () => {
    const vals: number[] = [1, 23, 12, 1];
    const average = getMode(vals);
    expect(average).toEqual(1);
  });
  test('returns zero on no data', () => {
    const vals: number[] = [];
    const average = getMode(vals);
    expect(average).toEqual(0);
  });
});
