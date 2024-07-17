import React, { useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import { formatPrice, genImages } from 'utils';
import { list3 } from 'pages/Home/mocks';
import useStyles from './styles';
import { Spacing } from 'components';

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
          <span className={classes.productName}>
            Silk Finish Setting Powder
          </span>
          <Spacing />
          <div className={classes.priceBox}>
          <span className={classes.priceNew}>{formatPrice(45)}</span>
          <span className={classes.priceOld}>{formatPrice(50)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
