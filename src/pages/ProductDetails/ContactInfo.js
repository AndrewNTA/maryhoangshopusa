import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';

function ContactInfo() {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <PhoneIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Inbox/Call: 678 559 8867" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <MessageIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Zalo: 678 559 8867" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FacebookIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Facebook: Mary Hoang LLC" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LoyaltyIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Free shipping all States" />
      </ListItem>
    </List>
  );
}

export default ContactInfo;
