import React, { useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import { formatPrice, genImages } from 'utils';
import Rating from '@mui/material/Rating';
import { list3 } from 'pages/Home/mocks';
import { Spacing } from 'components';

import useStyles from './styles';
import ContactInfo from './ContactInfo';
import { useScrollToTop } from 'hooks/useScrollToTop';

function ProductDetails() {
  const classes = useStyles();
  useScrollToTop();
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
          <ContactInfo />
        </div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.title}>Thông tin chi tiết</div>
        <div>test</div>
      </div>
    </div>
  );
}

export default ProductDetails;
