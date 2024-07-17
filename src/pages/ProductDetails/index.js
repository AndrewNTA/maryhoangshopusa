import React, { useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import { genImages } from 'utils';
import { list3 } from 'pages/Home/mocks';
import useStyles from './styles';

function ProductDetails() {
  const classes = useStyles();

  const imageList = useMemo(() => genImages(list3), []);

  return (
    <div className={classes.container}>
      {imageList && (
        <ImageGallery
          items={imageList}
          showPlayButton={false}
          thumbnailPosition="left"
        />
      )}
    </div>
  );
}

export default ProductDetails;
