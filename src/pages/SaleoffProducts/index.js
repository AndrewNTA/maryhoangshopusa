import React, { useEffect } from 'react';
import useStyles from 'pages/Home/styles';
import { list2 } from 'pages/Home/mocks';
import ProductCard from 'pages/Home/ProductCard';

function SaleoffProducts() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
