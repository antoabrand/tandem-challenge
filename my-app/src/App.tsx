import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { IStats } from "./interfaces/IStats";

const defaultStats: IStats[] = [];
const App = () => {
  const [value, setValue]: [number, (value: number) => void] = useState(0);
  const [stats, setStats]: [IStats[], (stats: any) => void] = useState(defaultStats);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [err, setErr]: [string, (err: string) => void] = useState('');

  const handleChange = (input: any) => {
    const inputVal = input.target.value;
    setValue(inputVal)
    console.log(value)
  }

  async function getStats() {
    let res = await fetch('/data-set/1234');
    res = await res.json();
    setStats(res)
    setLoading(false);
  }
  useEffect(() => {
    try {
      getStats();
      console.log(stats)
    } catch (e) {
      const errMsg = e === 404 || stats.length < 1 ? "Resource not found" : "Something else went terribly wrong :(";
      setErr(errMsg)
    }

  }, ([]))

  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />
      <Button variant="contained">Default</Button>
    </div>
  );
};

export default App;
