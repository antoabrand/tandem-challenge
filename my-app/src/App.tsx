import { AppBar, Button, LinearProgress, TextField, Toolbar, Typography } from '@material-ui/core';
import React, { FormEvent, useEffect, useState } from 'react';
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
    if(res.status === 200){
      res = await res.json();
      setStats(res);
    } else {
      setErr(JSON.stringify(res.status))
    }
    setLoading(false);
  }

  async function submit(event: FormEvent) {
    event.preventDefault(); // dont force a rerender immediately
    setLoading(true);
    await fetch('/data-set/1234', {
      method: 'POST',
      body: JSON.stringify({ value: Number(value) }),
    });
    setValue(''); //reset val back to null essentially to clear out val and give user some feedback
    setSubmitted(!submitted); // watching this value in useeffect to trigger a render on submit - fetching the new data
    setLoading(false);
  }

  useEffect(() => {
    try {
      getStats();
    } catch (error) {
      setErr(error);
      console.log(error);
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
          <TextField
            helperText="Add a number to the data set"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit" value="Submit" variant="outlined">
            Submit
          </Button>
        </form>
      </div>
      {loading ? (
        <LinearProgress style={{ bottom: 'auto' }} variant="indeterminate" color="secondary" />
      ) : null}
    </div>
  );
};

export default App;
