import React from 'react';
import { Banner } from 'components';
import useStyles from './styles';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner />
      <div style={{ height: '1200px' }} />
    </div>
  );
}

export default Home;
