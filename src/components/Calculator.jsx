import { Paper, useMediaQuery } from "@mui/material"
import Dialpad from "./Dialpad"
import Screen from "./Screen"
import { useState } from "react"

const Calculator = () => {

  const [screenContent, setScreenContent] = useState("");
  const [shouldReset, setShouldReset] = useState(false);
  const isNonMobile = useMediaQuery('(min-width:700px)');

  const wrapperStyles = {
    width: isNonMobile ? '400px' : '80%',
    height: 'fit-content',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }

  const getInput = (value) => {
    let temp;
    if (value === 'C') {
      setScreenContent('');
      return;
    }
    if (value === 'delete') {
      temp = screenContent;
      console.log(temp.slice(0, -1))
      setScreenContent(temp.slice(0, -1));
      return;
    }
    if (value === '=') {
      try {
        const ans = eval(screenContent);
        if (ans === undefined)
          setScreenContent('math error');
        else
          setScreenContent(ans.toString());
      } catch (error) {
        console.log(error)
        setScreenContent('math error');
      } finally {
        setShouldReset(true);
      }
      return;
    }
    if (shouldReset) {
      setScreenContent(value)
      setShouldReset(false);
    }
    else {
      setScreenContent(screenContent + value);
    }
  }

  return (
    <Paper sx={wrapperStyles} elevation={4}>
      <Screen content={screenContent} />
      <Dialpad sendInput={getInput} />
    </Paper>
  )
}

export default Calculator;