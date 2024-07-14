import React from 'react';
import { Menu } from 'components';
import useStyles from './styles';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Menu />
      <h1>Hello world</h1>
    </div>
  );
}

export default Home;
