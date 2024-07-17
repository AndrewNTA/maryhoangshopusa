import React, { useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import { formatPrice, genImages } from 'utils';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Rating from '@mui/material/Rating';
import PhoneIcon from '@mui/icons-material/Phone';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';
import { list3 } from 'pages/Home/mocks';
import { Spacing } from 'components';

import useStyles from './styles';

function ProductDetails() {
  const classes = useStyles();
  const imageList = useMemo(() => genImages(list3), []);

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <div className={classes.imageGallery}>
          {imageList && (
            <ImageGallery
              items={imageList}
              showPlayButton={false}
              thumbnailPosition="left"
            />
          )}
        </div>
        <div className={classes.productInfo}>
          <div className={classes.productName}>Silk Finish Setting Powder</div>
          <Rating
            name="read-only"
            value={4}
            readOnly
            sx={(theme) => ({
              marginTop: '16px',
              [theme.breakpoints.down('sm')]: {
                marginTop: '8px',
              },
            })}
          />
          <Spacing />
          <div className={classes.priceBox}>
            <div className={classes.priceNew}>{formatPrice(45)}</div>
            <div className={classes.priceOld}>{formatPrice(50)}</div>
          </div>
          <Spacing />
          <div className={classes.infoMessage}>Cam kết hàng chính hãng</div>
          <div className={classes.contactInfoTitle}>Thông tin liên hệ</div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
