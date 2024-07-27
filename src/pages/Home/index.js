import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  Banner,
  BannerOutline,
  ProductGroupTitle,
  SkeletonLoading,
  Spacing,
} from 'components';
import useStyles from './styles';
import { THUC_PHAM_CHUC_NANG, groupList, groupList1 } from 'constant';
import { ProductCard, GroupCard } from 'components';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { getSaleoffProducts, getProductsByGroup } from 'utils';

function Home({ products, loading }) {
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
    () => getProductsByGroup(products, THUC_PHAM_CHUC_NANG).slice(0, 4),
    [products]
  );

  return (
    <div className={classes.container}>
      <Banner />
      <ProductGroupTitle title="SALEOFF PRODUCTS" />

      {loading ? (
        <SkeletonLoading noPadding isDouble />
      ) : (
        <div className={classes.listItem}>
          {saleoffProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      )}

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
      <ProductGroupTitle title="THỰC PHẨM CHỨC NĂNG" />
      {loading ? (
        <SkeletonLoading noPadding isDouble={false} />
      ) : (
        <div className={classes.listItem}>
          {vitaminProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      )}
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
      <div className={classes.listGroup}>
        {groupList1.map((group) => (
          <GroupCard key={group.groupName} {...group} />
        ))}
      </div>
    </div>
  );
}

export default Home;
