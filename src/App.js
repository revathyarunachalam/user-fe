import './App.css';
import Box from '@mui/material/Box';
import Menu from './shared/components/Menu';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
      <Menu />
      <Profile />
    </Box>

    </div>
  );
}

export default App;
