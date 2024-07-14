import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { WEBSITE_NAME } from 'constants';
import { Spacing } from 'components';
import useStyles from './styles';

const MobileMenu = () => {
  const classes = useStyles();
  const [menuOpen, setDrawerOpen] = useState(false);

  const toggleMenu = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    'Home',
    'All products',
    'Skin Care & Makeup',
    'Hair Care',
    'Vitamins & Nutrition',
    'Contact',
  ];

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
      <Divider />
    </div>
  );

  return (
    <div className={classes.mobileMenuWrapper}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {WEBSITE_NAME}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={menuOpen} onClose={toggleMenu(false)}>
        <Spacing size={48} />
        {list()}
      </Drawer>
    </div>
  );
};

export default MobileMenu;
