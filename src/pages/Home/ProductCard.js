import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { formatPrice } from 'utils';
import useStyles from './styles';

export default function ProductCard({
  imageSrc,
  productName,
  productPrice,
  productDiscountPrice,
}) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const price = productDiscountPrice ? productDiscountPrice : productPrice;
  return (
    <Card
      sx={{ cursor: 'pointer' }}
      onClick={() => handleNavigate('/products/1')}
    >
      <CardMedia
        sx={(theme) => ({
          height: 260,
          [theme.breakpoints.down('sm')]: {
            height: 140,
          },
        })}
        image={imageSrc}
        title={productName}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={(theme) => ({
            [theme.breakpoints.down('sm')]: {
              fontSize: '1rem',
            },
          })}
        >
          {productName}
        </Typography>
        <div className={classes.priceWrapper}>
          <Typography
            variant="body2"
            sx={(theme) => ({
              fontWeight: 600,
              fontSize: '1.4rem',
              color: 'var(--mary--main-color)',
              [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
              },
            })}
          >
            {formatPrice(Number(price))}
          </Typography>
          <Typography
            variant="body2"
            sx={(theme) => ({
              textDecoration: 'line-through',
              fontSize: '1.2rem',
              color: '#9E9FA5',
              [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
              },
            })}
          >
            {productDiscountPrice ? formatPrice(Number(productPrice)) : ''}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
