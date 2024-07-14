import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { menuItems, contactItems } from 'constants';
import useStyles from './styles';

function Footer() {
  const classes = useStyles();
  const listItem = menuItems.slice(1, 6);

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerBox}>
        <List className={classes.footerBoxItem}>
          {listItem.map((text) => (
            <ListItem
              key={text}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                  textUnderlineOffset: '.3rem',
                },
              }}
            >
              <ListItemText primary={text} />
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
