import React from 'react';
import useStyles from './styles';

function ProductDetails() {
  const classes = useStyles();

  return <div className={classes.container}>Product details</div>;
}

export default ProductDetails;
