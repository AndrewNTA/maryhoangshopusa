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
            <Route
              path="/all-products"
              element={<SaleoffProducts key="all-products" />}
            />
            <Route
              path="/saleoff"
              element={<SaleoffProducts key="saleoff" />}
            />
            <Route
              path="/body-care"
              element={<SaleoffProducts key="body-care" />}
            />
            <Route
              path="/hair-care"
              element={<SaleoffProducts key="hair-care" />}
            />
            <Route
              path="/skin-care-makeup"
              element={<SaleoffProducts key="skin-care-makeup" />}
            />
            <Route
              path="/vitamins-nutrition"
              element={<SaleoffProducts key="vitamins-nutrition" />}
            />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
