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
  },
  {
    icon: <MessageIcon color="primary" />,
    label: 'Zalo: Mary Hoang 678 559 8867',
  },
  {
    icon: <FacebookIcon color="primary" />,
    label: 'Facebook: Mary Hoang LLC',
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

function ContactPaymentInfo() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contactInfoTitle}>Thông tin liên hệ</div>
      <List>{contactList.map((item) => renderItem(item))}</List>
      <div className={classes.contactInfoTitle}>Thông tin thanh toán</div>
      <List>{paymentList.map((item) => renderItem(item))}</List>
    </>
  );
}

export default ContactPaymentInfo;
