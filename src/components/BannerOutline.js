import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'static/images/banner-outline-img.jpg';
import useStyles from './styles';

function BannerOutline() {
  const classes = useStyles();

  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.bannerOutlineContent}>
        <div>
          <Typography
            color="var(--mary--main-color)"
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
            Kẹo giảm cân & Thực phẩm chức năng
          </Typography>
          <Typography
            color="var(--mary--main-color)"
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
            cam kết chính hãng
          </Typography>
          <Button variant="outlined" color="primary" size="large">
            Shop now
          </Button>
        </div>
      </div>
      <img src={Image} alt="cosmetics" className={classes.bannerOutlineImg} />
    </div>
  );
}

export default BannerOutline;
