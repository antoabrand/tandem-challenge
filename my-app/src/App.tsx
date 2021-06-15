import { AppBar, Button, TextField, Toolbar, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { TileList } from './components/tileList';
import { IStats } from './interfaces/IStats';

const defaultStats: IStats[] = [];
const App = () => {
  const [value, setValue]: [number, (value: number) => void] = useState(0);
  const [stats, setStats]: [IStats[], (stats: any) => void] = useState(defaultStats);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [err, setErr]: [string, (err: string) => void] = useState('');

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

  useEffect(() => {
    try {
      getStats();
    } catch (e) {
      const errMsg =
        e === 404 || stats.length < 1
          ? 'Resource not found'
          : 'Something else went terribly wrong :(';
      setErr(errMsg);
    }
  }, []);

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
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter a number to post"
          onChange={handleChange}
        />
        <Button variant="contained" style={{ marginLeft: '15px' }}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
