import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import theme from './theme';
import './scss/index.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
