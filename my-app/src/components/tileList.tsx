import { Tile } from './tile';
import { getAverage } from '../utils/getAverage';
import { getMode } from '../utils/getMode';
import { getMean } from '../utils/getMean';

export function TileList(props: any) {
  const { vals } = props;
  let average = 0;
  let mean = 0;
  let mode = 0;

  if (vals && vals.values && vals.values !== undefined && vals.values.length > 0) {
    average = getAverage(vals.values);
    mean = getMean(vals.values);
    mode = getMode(vals.values);
  }

  return (
    <>
      <Tile title="Mean" value={mean} />
      <Tile title="Average" value={average} />
      <Tile title="Mode" value={mode} />
    </>
  );
}
