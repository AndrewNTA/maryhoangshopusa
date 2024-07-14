import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TextField from '@mui/material/TextField';
import useStyles from './styles';

const SearchBar = ({ onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.searchWrapper}>
      <TextField
        id="outlined-search"
        label="Search"
        type="search"
        sx={{ flex: 1 }}
      />
      <IconButton
        edge="end"
        color="inherit"
        aria-label="close-search"
        onClick={onClose}
      >
        <CloseRoundedIcon
          fontSize="large"
          sx={{
            color: 'rgba(0,0,0,0.6)',
            fontSize: '1.9rem',
          }}
        />
      </IconButton>
    </div>
  );
};

export default SearchBar;
