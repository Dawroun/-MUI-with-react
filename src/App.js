import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';


const useStyle = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '15px 30px',
    marginBottom: '15px'
  }
})

const colorTheme = createTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
    primary: {
      main: green[400],
    },
  },
});

function StyledButton(){
  const classes = useStyle();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel 
      control={
        <Checkbox 
        color="secondary"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />}
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={colorTheme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h1">
            Welcome to MUI
          </Typography>
          <Typography variant="h3">
            Learn how to use Materail UI with Dawroun
          </Typography>
          <StyledButton />
          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="Your Email"
            placeholder="test@com"
          />
          <TextField
            variant="outlined"
            color="secondary"
            type="date"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" color="primary">
            <Button startIcon={<SaveIcon />} href="#">Save</Button>
            <Button startIcon={<DeleteIcon />}  href="#">Discard</Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
