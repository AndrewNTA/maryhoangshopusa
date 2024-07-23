import React from 'react';
import { ProductCard } from 'components';
import { useScrollToTop } from 'hooks/useScrollToTop';
import useStyles from './styles';

function ListProducts({ products }) {
  const classes = useStyles();
  useScrollToTop();

  return (
    <div className={classes.container}>
      <div className={classes.listItem}>
        {products &&
          products.map((item) => <ProductCard key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default ListProducts;
