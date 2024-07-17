import React from 'react';
import useStyles from 'pages/Home/styles';
import { list2 } from 'pages/Home/mocks';
import ProductCard from 'pages/Home/ProductCard';
import { useScrollToTop } from 'hooks/useScrollToTop';

function SaleoffProducts() {
  const classes = useStyles();
  useScrollToTop();

  return (
    <div className={classes.container}>
      <div className={classes.listItem}>
        {list2.map((item) => (
          <ProductCard key={item.productName} {...item} />
        ))}
      </div>
    </div>
  );
}

export default SaleoffProducts;
