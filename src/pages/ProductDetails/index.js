import React, { useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import { genImages } from 'utils';
import { list3 } from 'pages/Home/mocks';
import useStyles from './styles';
import { isMobileScreen, useCurrentWidth } from 'hooks/useCurrentScreenSize';

function ProductDetails() {
  const classes = useStyles();
  const currentWidth = useCurrentWidth();
  const isMobile = isMobileScreen(currentWidth);
  const imageList = useMemo(() => genImages(list3), []);

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <div className={classes.imageGallery}>
          {imageList && (
            <ImageGallery
              items={imageList}
              showPlayButton={false}
              thumbnailPosition={isMobile ? 'bottom' : 'left'}
            />
          )}
        </div>
        <div className={classes.productInfo}>product info name data</div>
      </div>
    </div>
  );
}

export default ProductDetails;
