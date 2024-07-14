import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import SaleoffProducts from 'pages/SaleoffProducts';
import ProductDetails from 'pages/ProductDetails';
import { Menu, Footer } from 'components';
import { isMobileScreen, useCurrentWidth } from 'hooks/useCurrentScreenSize';
import theme from './theme';
import './scss/index.scss';

function App() {
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        })}
      >
        <Menu />
        <div
          style={{
            paddingTop: isMobile ? '110px' : '180px',
          }}
        >
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/saleoff" element={<SaleoffProducts />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
