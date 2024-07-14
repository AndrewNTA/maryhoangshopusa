import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TextField from '@mui/material/TextField';
import useStyles from './styles';
import { isPhoneScreen, useCurrentWidth } from 'hooks/useCurrentScreenSize';

const SearchBar = ({ onClose }) => {
  const classes = useStyles();
  const currentWidth = useCurrentWidth();
  const isPhone = isPhoneScreen(currentWidth);

  return (
    <div className={classes.searchWrapper}>
      <TextField
        id="outlined-search"
        label="Search"
        type="search"
        sx={{ flex: 1 }}
        size={isPhone ? 'small' : 'medium'}
      />
      <IconButton
        edge="end"
        color="inherit"
        aria-label="close-search"
        onClick={onClose}
      >
        <CloseRoundedIcon
          fontSize="large"
          sx={(theme) => ({
            color: 'rgba(0,0,0,0.6)',
            fontSize: '1.9rem',
            [theme.breakpoints.down('sm')]: {
              fontSize: '1.4rem',
            },
          })}
        />
      </IconButton>
    </div>
  );
};

export default SearchBar;
