import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Banner } from 'components';
import useStyles from './styles';
import { list1 } from './mocks';
import ProductCard from './ProductCard';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={(theme) => ({
          marginBottom: '24px',
          [theme.breakpoints.down('sm')]: {
            marginBottom: '12px',
          },
        })}
      >
        OUR BESTSELLERS
      </Typography>
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
    </div>
  );
}

export default Home;
