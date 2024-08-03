import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import PaymentsIcon from '@mui/icons-material/Payments';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import useStyles from './styles';

const contactList = [
  {
    icon: <PhoneIcon color="primary" />,
    label: 'Inbox/Call: 678 559 8867 (Mary Hoang)',
    value: 'tel:+16785598867',
  },
  {
    icon: <MessageIcon color="primary" />,
    label: 'Zalo: Mary Hoang 678 559 8867',
    value: 'https://zalo.me/16785598867',
  },
  {
    icon: <FacebookIcon color="primary" />,
    label: 'Facebook: Mary Hoang',
    value: 'https://www.facebook.com/mary.hoang.14224',
  },
  {
    icon: <FacebookIcon color="primary" />,
    label: 'Facebook: Mary Linda',
    value: 'https://www.facebook.com/profile.php?id=100027470498826',
  },
  {
    icon: <FacebookIcon color="primary" />,
    label: 'Facebook: Mary T Thuong',
    value: 'https://www.facebook.com/profile.php?id=100022235714613',
  },
];

const paymentList = [
  {
    icon: <PaymentsIcon color="primary" />,
    label: 'Zelle: Mary Hoang LLC - 678 559 8867',
  },
  {
    icon: <LocalAtmIcon color="primary" />,
    label: 'Venmo: Mary Hoang123',
  },
];

function ContactPaymentInfo() {
  const classes = useStyles();
  const renderItem = (item) => (
    <ListItem
      key={item.label}
      sx={{
        paddingTop: '2px',
        paddingBottom: '2px',
      }}
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.label} />
    </ListItem>
  );

  const renderLinkItem = (item) => (
    <ListItem
      key={item.label}
      sx={{
        paddingTop: '2px',
        paddingBottom: '2px',
      }}
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <a
        href={item.value}
        target="_blank"
        rel="noreferrer"
        className={classes.linkItem}
      >
        {item.label}
      </a>
    </ListItem>
  );
  return (
    <>
      <div className={classes.contactInfoTitle}>Thông tin liên hệ</div>
      <List>{contactList.map((item) => renderLinkItem(item))}</List>
      <div className={classes.contactInfoTitle}>Thông tin thanh toán</div>
      <List>{paymentList.map((item) => renderItem(item))}</List>
    </>
  );
}

export default ContactPaymentInfo;
