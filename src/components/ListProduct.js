import React from 'react';
import { ProductCard, SkeletonLoading } from 'components';
import { useScrollToTop } from 'hooks/useScrollToTop';
import useStyles from './styles';

function ListProducts({ products, loading }) {
  const classes = useStyles();
  useScrollToTop();

  if (loading) {
    return <SkeletonLoading noPadding isDouble />;
  }

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
