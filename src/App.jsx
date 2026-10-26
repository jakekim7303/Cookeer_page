import Box from '@mui/material/Box';
import HomePage from './pages/home-page.jsx';

function App() {
  return (
    <Box
      sx={ {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'background.default',
      } }
    >
      <HomePage />
    </Box>
  );
}

export default App;
