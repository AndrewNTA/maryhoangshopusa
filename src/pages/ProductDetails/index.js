import React, { useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { formatPrice, genImages } from 'utils';
import Rating from '@mui/material/Rating';
import { Spacing } from 'components';
import { useScrollToTop } from 'hooks/useScrollToTop';
import useStyles from './styles';
import ContactPaymentInfo from './ContactPaymentInfo';

const PRODUCT_QUERY = gql`
  query Product($id: ID) {
    product(where: { id: $id }) {
      description {
        html
      }
      id
      name
      price
      comboPrice
      comboNumber
      unit
      unitNote
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
  const { data } = useQuery(PRODUCT_QUERY, {
    variables: {
      id,
    },
  });
  const product = data?.product;
  const unit = product?.unit;
  const unitNote = product?.unitNote;
  const price = product?.price;
  const comboPrice = product?.comboPrice;
  const comboNumber = product?.comboNumber;
  const description = product?.description;
  const mainImage = product?.mainImage;
  const relateImages = useMemo(
    () => product?.relateImages || [],
    [product?.relateImages]
  );
  const allImage = useMemo(
    () => (mainImage ? [mainImage, ...relateImages] : []),
    [mainImage, relateImages]
  );

  const displayPrice = `${formatPrice(Number(price))} / 1 ${unit}`;
  const displayComboPrice =
    comboPrice && comboNumber
      ? `${formatPrice(Number(comboPrice))} / ${comboNumber} ${unit}`
      : '';

  const imageList = useMemo(() => genImages(allImage), [allImage]);

  if (!product) {
    return 'Loading';
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
          <div className={classes.price}>{displayPrice}</div>
          <div className={classes.comboPrice}>{displayComboPrice}</div>
          {unitNote && <div className={classes.comboPrice}>{unitNote}</div>}
          <Spacing />
          <div className={classes.infoMessage}>Cam kết hàng chính hãng</div>
          <ContactPaymentInfo />
        </div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.title}>Thông tin chi tiết</div>
        <div
          className={classes.contentDetails}
          dangerouslySetInnerHTML={{
            __html: description?.html ?? '',
          }}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
