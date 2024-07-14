import React from 'react';
import { Menu, Banner } from 'components';
import useStyles from './styles';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Menu />
      <Banner />
    </div>
  );
}

export default Home;
