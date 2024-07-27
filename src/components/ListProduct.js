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

  if (!products || products?.length === 0) {
    return <div className={classes.container}>Chưa có sản phẩm!!!</div>
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
