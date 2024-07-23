import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Banner, BannerOutline, ProductGroupTitle, SkeletonLoading, Spacing } from 'components';
import useStyles from './styles';
import { VITAMINS_AND_NUTRITION, groupList } from 'constant';
import { ProductCard, GroupCard } from 'components';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { getSaleoffProducts, getProductsByGroup } from 'utils';

function Home({ products }) {
  const classes = useStyles();
  const navigate = useNavigate();
  useScrollToTop();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const saleoffProducts = useMemo(
    () => getSaleoffProducts(products).slice(0, 8),
    [products]
  );

  const vitaminProducts = useMemo(
    () => getProductsByGroup(products, VITAMINS_AND_NUTRITION).slice(0, 4),
    [products]
  );

  return (
    <div className={classes.container}>
      <Banner />
      <ProductGroupTitle title="SALEOFF PRODUCTS" />
      <div className={classes.listItem}>
        {saleoffProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
        <SkeletonLoading noPadding isDouble />
      </div>
      <div className={classes.viewAllContainer}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => handleNavigate('/saleoff')}
        >
          View all
        </Button>
      </div>
      <div className={classes.listGroup}>
        {groupList.map((group) => (
          <GroupCard key={group.groupName} {...group} />
        ))}
      </div>
      <Spacing />
      <BannerOutline />
      <ProductGroupTitle title="SERUM MỌC TÓC" />
      <div className={classes.listItem}>
        {vitaminProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
        <SkeletonLoading noPadding isDouble={false} />
      </div>
      <div className={classes.viewAllContainer}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => handleNavigate('/dau-goi')}
        >
          View all
        </Button>
      </div>
    </div>
  );
}

export default Home;
