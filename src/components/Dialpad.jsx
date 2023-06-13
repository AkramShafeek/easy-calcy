import { Box, Button } from "@mui/material";

const Dialpad = ({ sendInput }) => {
  const row1 = ['C', '%', 'delete', '/'];
  const row2 = ['7', '8', '9', '*'];
  const row3 = ['4', '5', '6', '-'];
  const row4 = ['1', '2', '3', '+'];
  const row5 = ['00', '0', '.', '='];
  const buttons = [row1, row2, row3, row4, row5];

  const buttonsContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: 'primary',
    gap: '10px',
  }

  const buttonStyles = {
    flex: '1 0 21%',
    height: '50px',
  }

  const handleClick = (event) => {
    sendInput(event.target.value);
  }

  return (
    <Box sx={buttonsContainerStyles}>
      {buttons.map((row) => {
        return row.map((button) => {
          let isContained = false;
          if (button === '/' || button === '*' || button === '-' || button === '+' || button === '=')
            isContained = true;

          return (
            <Button key={button} value={button}
              variant={isContained ? 'contained' : 'standard'}
              sx={buttonStyles}
              disableElevation
              onClick={handleClick}>
              {button}
            </Button>
          )
        })
      })}
    </Box>
  )
}

Dialpad.defaultProps = {
  sendInput: () => { }
}

export default Dialpad;