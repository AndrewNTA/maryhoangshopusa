import React from 'react';
import useStyles from 'pages/Home/styles';
import ProductCard from 'pages/Home/ProductCard';
import { useScrollToTop } from 'hooks/useScrollToTop';

function ListProducts({ products }) {
  const classes = useStyles();
  useScrollToTop();

  return (
    <div className={classes.container}>
      <div className={classes.listItem}>
        {products && products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ListProducts;
