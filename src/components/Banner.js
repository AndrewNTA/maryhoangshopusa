import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'static/images/banner-img.jpg';
import useStyles from './styles';

function Banner() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={classes.bannerWrapper}>
      <img src={Image} alt="cosmetics" className={classes.bannerImg} />
      <div className={classes.bannerContent}>
        <div>
          <Typography
            color="white"
            sx={(theme) => ({
              fontSize: '2.5rem',
              fontWeight: 500,
              [theme.breakpoints.down('md')]: {
                fontSize: '1.6rem',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
              },
            })}
          >
            Welcome to Mary Hoang Shop USA!
          </Typography>
          <Typography
            color="white"
            sx={(theme) => ({
              fontSize: '1.5rem',
              fontWeight: 500,
              margin: '6px 0 32px 0',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
                margin: '2px 0 12px 0',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
              },
            })}
          >
            where beauty meets elegance
          </Typography>
          <Button
            variant="outlined"
            color="white"
            size="large"
            onClick={() => handleNavigate('/all-products')}
          >
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
