import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import Header from "./components/Header";
import Footer from './components/Footer';

const theme = createTheme();
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
         <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brand/:brand" element={<BrandPage />} />
        </Routes>
         <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
