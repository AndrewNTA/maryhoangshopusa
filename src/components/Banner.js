import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'static/images/bg-img.jpg';
import useStyles from './styles';
import Spacing from './Spacing';

const headingStyle = (theme) => ({
  fontSize: '2.5rem',
  fontWeight: 500,
  marginBottom: '16px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
});

const textStyle = (theme) => ({
  fontSize: '1.5rem',
  fontWeight: 500,
  padding: '0 16px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: 0,
    fontSize: '1rem',
  },
});

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
          <Typography color="white" sx={headingStyle}>
            Welcome to Mary Hoang Shop USA!
          </Typography>
          <Typography color="white" sx={textStyle}>
            Chuyên bán: mỹ phẩm Hàn Quốc - Nhật Bản - Thuỵ Sĩ - Weilaiya -
            Elvawell, dầu gội chống rụng tóc và serum mọc tóc, thực phẩm chức
            năng, collagen uống, giảm cân,...
          </Typography>
          <Typography color="white" sx={textStyle}>
            Cam kết hàng chính hãng 100%
          </Typography>
          <Spacing />
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
