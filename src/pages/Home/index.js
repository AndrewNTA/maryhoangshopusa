import React from 'react';
import Button from '@mui/material/Button';
import { Banner, BannerOutline, ProductGroupTitle, Spacing } from 'components';
import useStyles from './styles';
import { list1, list4, groupList } from './mocks';
import ProductCard from './ProductCard';
import GroupCard from './GroupCard';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner />
      <ProductGroupTitle title="SALEOFF PRODUCTS" />
      <div className={classes.listItem}>
        {list1.map((item) => (
          <ProductCard key={item.productName} {...item} />
        ))}
      </div>
      <div className={classes.viewAllContainer}>
        <Button variant="contained" color="primary" size="large">
          View all
        </Button>
      </div>
      <div className={classes.listGroup}>
        {groupList.map((group) => (
          <GroupCard key={group.groupName} {...group} />
        ))}
      </div>
      <Spacing size={48} />
      <BannerOutline />
      <ProductGroupTitle title="VITAMINS & NUTRITRION" />
      <div className={classes.listItem}>
        {list4.map((item) => (
          <ProductCard key={item.productName} {...item} />
        ))}
      </div>
      <div className={classes.viewAllContainer}>
        <Button variant="outlined" color="primary" size="large">
          View all
        </Button>
      </div>
    </div>
  );
}

export default Home;
