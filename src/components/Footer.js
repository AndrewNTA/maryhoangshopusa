import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { menuItems, contactItems } from 'constant';
import useStyles from './styles';

function Footer() {
  const classes = useStyles();
  const navigate = useNavigate();
  const listItem = menuItems.slice(1, 6);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerBox}>
        <List className={classes.footerBoxItem}>
          {listItem.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.label}
                sx={{
                  maxWidth: 'fit-content',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                    textUnderlineOffset: '.3rem',
                  },
                }}
                onClick={() => handleNavigate(item.path)}
              />
            </ListItem>
          ))}
        </List>
        <List>
          {contactItems.map((text) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      <div style={{ marginTop: 16 }}>{'© 2024, Mary Hoang Shop USA'}</div>
    </div>
  );
}

export default Footer;
