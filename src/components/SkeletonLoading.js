import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import useStyles from './styles';

const longArr = [1, 2, 3, 4, 5, 6, 7, 8];
const shortArr = [1, 2, 3, 4];
const SkeletonLoading = ({ isDouble, noPadding }) => {
  const classes = useStyles();
  const arr = isDouble ? longArr : shortArr;
  return (
    <div className={noPadding ? null : classes.container}>
      <div className={classes.listItem}>
        {arr.map((item) => (
          <Box key={item}>
            <Skeleton variant="rectangular" height={160} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoading;
