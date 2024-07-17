import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ListProducts from 'pages/ListProducts';
import ProductDetails from 'pages/ProductDetails';
import { Menu, Footer } from 'components';
import { useQuery, gql } from '@apollo/client';
import { isMobileScreen, useCurrentWidth } from 'hooks/useCurrentScreenSize';
import theme from './theme';
import './scss/index.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import { getProductsByGroup, getSaleoffProducts } from 'utils';
import {
  BODY_CARE,
  HAIR_CARE,
  SKIN_CARE_AND_MAKEUP,
  VITAMINS_AND_NUTRITION,
} from 'constant';

const PRODUCTS_QUERY = gql`
  query Products {
    products(first: 20) {
      id
      name
      price
      discountPrice
      group
      isSaleOff
      mainImage {
        url
      }
    }
  }
`;

export const AppContext = React.createContext({
  products: null,
});

function App() {
  const { data } = useQuery(PRODUCTS_QUERY);
  const productList = data?.products ?? null;
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);

  const saleoffProducts = useMemo(
    () => getSaleoffProducts(productList),
    [productList]
  );

  const vitaminProducts = useMemo(
    () => getProductsByGroup(productList, VITAMINS_AND_NUTRITION),
    [productList]
  );

  const bodyCareProducts = useMemo(
    () => getProductsByGroup(productList, BODY_CARE),
    [productList]
  );

  const hairCareProducts = useMemo(
    () => getProductsByGroup(productList, HAIR_CARE),
    [productList]
  );

  const skinCareProducts = useMemo(
    () => getProductsByGroup(productList, SKIN_CARE_AND_MAKEUP),
    [productList]
  );

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          products: productList,
        }}
      >
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
              <Route path="/" exact element={<Home products={productList}/>} />
              <Route
                path="/all-products"
                element={
                  <ListProducts key="all-products" products={productList} />
                }
              />
              <Route
                path="/saleoff"
                element={
                  <ListProducts key="saleoff" products={saleoffProducts} />
                }
              />
              <Route
                path="/body-care"
                element={
                  <ListProducts key="body-care" products={bodyCareProducts} />
                }
              />
              <Route
                path="/hair-care"
                element={
                  <ListProducts key="hair-care" products={hairCareProducts} />
                }
              />
              <Route
                path="/skin-care-makeup"
                element={
                  <ListProducts
                    key="skin-care-makeup"
                    products={skinCareProducts}
                  />
                }
              />
              <Route
                path="/vitamins-nutrition"
                element={
                  <ListProducts
                    key="vitamins-nutrition"
                    products={vitaminProducts}
                  />
                }
              />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </div>
          <Footer />
        </Container>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
