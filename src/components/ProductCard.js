import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { formatPrice } from 'utils';

export default function ProductCard({
  id,
  name,
  price,
  comboPrice,
  comboNumber,
  unit,
  unitNote,
  mainImage,
}) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const displayPrice = `${formatPrice(Number(price))} / 1 ${unit}`;
  const displayComboPrice =
    comboPrice && comboNumber
      ? `${formatPrice(Number(comboPrice))} / ${comboNumber} ${unit}`
      : '';
  return (
    <Card
      sx={{ cursor: 'pointer' }}
      onClick={() => handleNavigate(`/products/${id}`)}
    >
      <CardMedia
        sx={(theme) => ({
          height: 260,
          [theme.breakpoints.down('sm')]: {
            height: 140,
          },
        })}
        image={mainImage?.url}
        title={name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={(theme) => ({
            fontWeight: 500,
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.8rem',
            },
          })}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={(theme) => ({
            fontWeight: 600,
            fontSize: '1.2rem',
            color: 'var(--mary--main-color)',
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.8rem',
            },
          })}
        >
          {displayPrice}
        </Typography>
        <Typography
          variant="body2"
          sx={(theme) => ({
            fontWeight: 600,
            fontSize: '1.2rem',
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.8rem',
            },
          })}
        >
          {displayComboPrice}
        </Typography>
        {unitNote && (
          <Typography
            variant="body2"
            sx={(theme) => ({
              fontWeight: 600,
              fontSize: '1.2rem',
              [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
              },
            })}
          >
            {unitNote}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
