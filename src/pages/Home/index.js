import React from 'react';
import { Menu } from 'components';
import useStyles from './styles';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Menu />
    </div>
  );
}

export default Home;
