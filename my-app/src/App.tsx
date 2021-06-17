import { AppBar, LinearProgress, Toolbar, Typography } from '@material-ui/core';
import { FormEvent, useEffect, useState } from 'react';
import { TileList } from './components/tileList';
import { IStats } from './interfaces/IStats';

const defaultStats: IStats[] = [];
const App = () => {
  const [value, setValue]: [string, (value: string) => void] = useState('');
  const [stats, setStats]: [IStats[], (stats: any) => void] = useState(defaultStats);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [, setErr]: [string, (err: string) => void] = useState('');
  const [submitted, setSubmitted]: [boolean, (sumbitted: boolean) => void] =
    useState<boolean>(false);

  const handleChange = (input: any) => {
    const inputVal = input.target.value;
    setValue(inputVal);
  };

  async function getStats() {
    let res = await fetch('/data-set/1234');
    res = await res.json();
    setStats(res);
    setLoading(false);
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const postRes = await fetch('/data-set/1234', {
      method: 'POST',
      body: JSON.stringify({ value: Number(value) }),
    });
    const result = await postRes.json();
    setValue(''); //reset val back to null essentially to clear out val and give user some feedback
    setSubmitted(!submitted); //trigger a rerender and useffect to force a get for new data after the post
  }

  useEffect(() => {
    try {
      getStats();
    } catch (e) {
      const errMsg =
        e.status === 404 ? 'Resource not found' : 'Something else went terribly wrong :(';
      setErr(errMsg);
    }
  }, [submitted]);

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Tandem Challenge</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px', paddingTop: '50px' }}>
        <h3>Stats</h3>
        <TileList vals={stats} />
      </div>
      <div style={{ paddingLeft: '20px' }}>
        <form onSubmit={(e) => submit(e)}>
          <label>
            Number To Post:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      {loading ? (
        <LinearProgress style={{ bottom: 'auto' }} variant="indeterminate" color="secondary" />
      ) : null}
    </div>
  );
};

export default App;
