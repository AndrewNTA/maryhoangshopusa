import React, { useEffect } from 'react';
import { Spacing } from 'components';
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
      <Spacing size={48} />
      <div className={classes.listItem}>
        {list2.map((item) => (
          <ProductCard key={item.productName} {...item} />
        ))}
      </div>
      <Spacing size={48} />
    </div>
  );
}

export default SaleoffProducts;
