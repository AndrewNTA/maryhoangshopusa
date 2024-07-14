import React, { useState, useEffect, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { WEBSITE_NAME, menuItems } from 'constants';
import { Spacing, SearchBar } from 'components';
import useStyles from './styles';
import { FREE_SHIPPING_MESSAGE } from 'constants';

const MobileMenu = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [controlNavbar, lastScrollY]);

  const toggleMenu = (open) => () => {
    setMenuOpen(open);
  };

  const toggleSearch = (open) => () => {
    setSearchOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleMenu(false)}
      onKeyDown={toggleMenu(false)}
      className={classes.mobileMenuListItem}
    >
      <List>
        {menuItems.map((text) => (
          <ListItem key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div
      className={classes.mobileMenuWrapper}
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? 1 : 0,
        transition: 'visibility 0.2s, opacity 0.2s linear',
      }}
    >
      <div className={classes.menuHeader}>{FREE_SHIPPING_MESSAGE}</div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu(true)}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ flexGrow: 1 }}
            sx={(theme) => ({
              [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem',
              },
            })}
          >
            {WEBSITE_NAME}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="search"
            onClick={toggleSearch(true)}
          >
            <SearchRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={menuOpen} onClose={toggleMenu(false)}>
        <Spacing size={48} />
        {list()}
      </Drawer>
      <Drawer anchor="top" open={searchOpen} onClose={toggleSearch(false)}>
        <SearchBar onClose={toggleSearch(false)} />
      </Drawer>
    </div>
  );
};

export default MobileMenu;
