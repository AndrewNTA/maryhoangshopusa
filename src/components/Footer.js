import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { footerCategoryItems, contactItems, paymentItems } from 'constant';
import useStyles from './styles';
import { Typography } from '@mui/material';

function Footer() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerBox}>
        <List className={classes.footerBoxItem}>
          <Typography variant="h6" mt={1}>
            Danh mục sản phẩm:
          </Typography>
          {footerCategoryItems.map((item) => (
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
        <div>
          <List>
            <Typography variant="h6" mt={1}>
              Thông tin liên hệ:
            </Typography>
            {contactItems.map((item) => (
              <ListItem key={item.label}>
                <a
                  href={item.value}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.footerItem}
                >
                  {item.label}
                </a>
              </ListItem>
            ))}
          </List>
          <List>
            <Typography variant="h6" mt={1}>
              Phương thức thanh toán:
            </Typography>
            {paymentItems.map((text) => (
              <ListItem key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>{'© 2024, Mary Hoang Shop USA'}</div>
    </div>
  );
}

export default Footer;
