import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainLayout />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
