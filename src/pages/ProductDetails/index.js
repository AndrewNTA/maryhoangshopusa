import React, { useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { formatPrice, genImages } from 'utils';
import Rating from '@mui/material/Rating';
import { Spacing } from 'components';

import useStyles from './styles';
import ContactInfo from './ContactInfo';
import { useScrollToTop } from 'hooks/useScrollToTop';

const PRODUCT_QUERY = gql`
  query Product($id: ID) {
    product(where: { id: $id }) {
      description {
        html
      }
      discountPrice
      id
      name
      price
      relateImages {
        url
      }
      mainImage {
        url
      }
    }
  }
`;

function ProductDetails() {
  const classes = useStyles();
  useScrollToTop();
  const { id } = useParams();
  // const { data } = useQuery(PRODUCT_QUERY, {
  //   variables: {
  //     id,
  //   },
  // });
  // const product = data?.product;
  const product = null;
  const discountPrice = product?.discountPrice;
  const price = product?.price;
  const description = product?.description;
  const mainImage = product?.mainImage;
  const relateImages = useMemo(() => product?.relateImages || [], [product?.relateImages]);
  const allImage = useMemo(() => mainImage ? [mainImage, ...relateImages] : [], [mainImage, relateImages]);

  const firstPrice = formatPrice(Number(discountPrice ? discountPrice : price));
  const secondPrice = discountPrice ? formatPrice(Number(price)) : '';

  const imageList = useMemo(() => genImages(allImage), [allImage]);

  if (!product) {
    return <div>Loading</div>
  }

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
          <div className={classes.productName}>{product?.name}</div>
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
            <div className={classes.priceNew}>{firstPrice}</div>
            <div className={classes.priceOld}>{secondPrice}</div>
          </div>
          <Spacing />
          <div className={classes.infoMessage}>Cam kết hàng chính hãng</div>
          <div className={classes.contactInfoTitle}>Thông tin liên hệ</div>
          <ContactInfo />
        </div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.title}>Thông tin chi tiết</div>
        <div
          dangerouslySetInnerHTML={{
            __html: description?.html ?? '',
          }}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
