import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import theme from './theme';
import './scss/index.scss';
import { Menu, Footer } from 'components';
import { isMobileScreen, useCurrentWidth } from 'hooks/useCurrentScreenSize';

function App() {
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <div
        style={{
          paddingTop: isMobile ? '110px' : '180px',
        }}
      >
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
