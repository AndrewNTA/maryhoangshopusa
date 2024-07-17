import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { WEBSITE_NAME, menuItems } from 'constant';
import { SearchBar } from 'components';
import useStyles from './styles';

const MobileMenu = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = (open) => () => {
    setMenuOpen(open);
  };

  const toggleSearch = (open) => () => {
    setSearchOpen(open);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleMenu(false)}
      onKeyDown={toggleMenu(false)}
      className={classes.mobileMenuListItem}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.label}
              onClick={() => handleNavigate(item.path)}
              className={
                item.path === location.pathname
                  ? classes.mobileMenuItemActive
                  : null
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
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
            onClick={() => handleNavigate('/')}
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
        {list()}
      </Drawer>
      <Drawer anchor="top" open={searchOpen} onClose={toggleSearch(false)}>
        <SearchBar onClose={toggleSearch(false)} />
      </Drawer>
    </>
  );
};

export default MobileMenu;
