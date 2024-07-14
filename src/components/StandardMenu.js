import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { WEBSITE_NAME, menuItems } from 'constants';
import { SearchBar } from 'components';
import useStyles from './styles';

const StandardMenu = () => {
  const classes = useStyles();
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = (open) => () => {
    setSearchOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ padding: '12px 32px !important' }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {WEBSITE_NAME}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="search"
            onClick={toggleSearch(true)}
          >
            <SearchRoundedIcon fontSize="large" />
          </IconButton>
        </Toolbar>
        <div className={classes.menuListItem}>
          {menuItems.map((text) => (
            <span key={text} className={classes.menuItem}>
              {text}
            </span>
          ))}
        </div>
      </AppBar>
      <Drawer anchor="top" open={searchOpen} onClose={toggleSearch(false)}>
        <SearchBar onClose={toggleSearch(false)} />
      </Drawer>
    </>
  );
};

export default StandardMenu;
