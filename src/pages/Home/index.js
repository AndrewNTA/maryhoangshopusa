import React from 'react';
import useStyles from './styles';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Hello world</h1>
    </div>
  );
}

export default Home;
