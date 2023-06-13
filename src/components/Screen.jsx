import { Box } from "@mui/material"

const Screen = ({ content }) => {
  const screenContainerStyles = {
    width: '100%',
    height: '90px',
    padding: '15px',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    borderRadius: '8px',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    overflowWrap: 'break-word'
  }
  return (
    <Box sx={screenContainerStyles}>
      {content}
    </Box>
  )
}

export default Screen;