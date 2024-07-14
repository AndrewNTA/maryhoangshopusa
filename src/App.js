import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import theme from './theme';
import './scss/index.scss';
import { Menu, Footer } from 'components';
import { isMobileScreen, useCurrentWidth } from 'hooks/useCurrentScreenSize';
import Container from '@mui/material/Container';

function App() {
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
