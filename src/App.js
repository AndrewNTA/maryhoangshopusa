import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ProductDetails from 'pages/ProductDetails';
import { Menu, Footer, ListProducts } from 'components';
import { useQuery, gql } from '@apollo/client';
import { isMobileScreen, useCurrentWidth } from 'hooks/useCurrentScreenSize';
import theme from './theme';
import './scss/index.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import { getProductsByGroup, getSaleoffProducts } from 'utils';
import {
  GIAM_CAN_DIET,
  DAU_GOI,
  MY_PHAM_HAN_QUOC,
  THUC_PHAM_CHUC_NANG,
  SERUM_MOC_TOC,
  KEM_DIEU_TRI_NAM,
  KOREA_WEILAIYA_ELVAWELL,
} from 'constant';

const PRODUCTS_QUERY = gql`
  query Products {
    products(first: 100) {
      id
      name
      price
      comboPrice
      comboNumber
      unit
      unitNote
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
  const { data, loading } = useQuery(PRODUCTS_QUERY);
  const productList = data?.products ?? null;
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);

  const saleoffProducts = useMemo(
    () => getSaleoffProducts(productList),
    [productList]
  );

  const vitaminProducts = useMemo(
    () => getProductsByGroup(productList, THUC_PHAM_CHUC_NANG),
    [productList]
  );

  const dietProducts = useMemo(
    () => getProductsByGroup(productList, GIAM_CAN_DIET),
    [productList]
  );

  const hairCareProducts = useMemo(
    () => getProductsByGroup(productList, DAU_GOI),
    [productList]
  );

  const skinCareProducts = useMemo(
    () => getProductsByGroup(productList, MY_PHAM_HAN_QUOC),
    [productList]
  );

  const serumProducts = useMemo(
    () => getProductsByGroup(productList, SERUM_MOC_TOC),
    [productList]
  );

  const kemNamProducts = useMemo(
    () => getProductsByGroup(productList, KEM_DIEU_TRI_NAM),
    [productList]
  );

  const koreaProducts = useMemo(
    () => getProductsByGroup(productList, KOREA_WEILAIYA_ELVAWELL),
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
              <Route
                path="/"
                exact
                element={<Home products={productList} loading={loading} />}
              />
              <Route
                path="/all-products"
                element={
                  <ListProducts
                    key="all-products"
                    products={productList}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/saleoff"
                element={
                  <ListProducts
                    key="saleoff"
                    products={saleoffProducts}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/thuc-pham-chuc-nang"
                element={
                  <ListProducts
                    key="thuc-pham-chuc-nang"
                    products={vitaminProducts}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/giam-can-diet"
                element={
                  <ListProducts
                    key="giam-can-diet"
                    products={dietProducts}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/my-pham-han-quoc"
                element={
                  <ListProducts
                    key="my-pham-han-quoc"
                    products={skinCareProducts}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/dau-goi"
                element={
                  <ListProducts
                    key="dau-goi"
                    products={hairCareProducts}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/serum-moc-toc"
                element={
                  <ListProducts
                    key="serum-moc-toc"
                    products={serumProducts}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/kem-dieu-tri-nam"
                element={
                  <ListProducts
                    key="kem-dieu-tri-nam"
                    products={kemNamProducts}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/korea-weilaiya-elvawell"
                element={
                  <ListProducts
                    key="korea-weilaiya-elvawell"
                    products={koreaProducts}
                    loading={loading}
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
