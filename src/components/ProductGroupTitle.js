import React from 'react';
import Typography from '@mui/material/Typography';

function ProductGroupTitle({ title }) {
  return (
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={(theme) => ({
        marginBottom: '24px',
        [theme.breakpoints.down('sm')]: {
          marginBottom: '12px',
        },
      })}
    >
      {title}
    </Typography>
  );
}

export default ProductGroupTitle;
