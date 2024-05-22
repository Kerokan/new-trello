import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Header from './components/Header';
import ListContainer from './components/ListContainer';

const theme = createTheme({
    palette: {
      gray: {
        main: '#ffffff3d',
        contrastText: '#ffffff',
      },
    },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <main className="App-main">
          <ListContainer/>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
