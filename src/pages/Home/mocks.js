import Image1 from 'static/images/mocks/img-product-1.jpg';
import Image2 from 'static/images/mocks/img-product-2.jpg';
import Image3 from 'static/images/mocks/img-product-3.jpg';
import Image4 from 'static/images/mocks/img-product-4.jpg';
import Image5 from 'static/images/mocks/img-product-5.jpg';
import Image6 from 'static/images/mocks/img-product-6.jpg';
import Image7 from 'static/images/mocks/img-product-7.jpg';
import Image8 from 'static/images/mocks/img-product-8.jpg';
import Image9 from 'static/images/mocks/img-product-9.jpg';
import Image10 from 'static/images/mocks/img-product-10.jpg';

import BodyImage from 'static/images/body-care-img.jpg';
import HairImage from 'static/images/hair-care-img.jpg';
import SkinImage from 'static/images/skin-care-img.jpg';

const bodyGroup = {
  imageSrc: BodyImage,
  path: '/body-care',
  groupName: 'Body Care',
  groupDescription:
    'Pamper your skin with our exquisite range of body care products.',
};

const hairGroup = {
  imageSrc: HairImage,
  path: '/hair-care',
  groupName: 'Hair Care',
  groupDescription:
    'Discover the secret to luscious, healthy hair with our exceptional range of hair care products.',
};

const skinGroup = {
  imageSrc: SkinImage,
  path: '/skin-care-makeup',
  groupName: 'Skin Care & Makeup',
  groupDescription:
    'Unleash your creativity with our exquisite makeup collection.',
};

export const groupList = [bodyGroup, hairGroup, skinGroup];

const product1 = {
  imageSrc: Image1,
  productName: 'Radiant Glow Foundation',
  productPrice: '42',
  productDiscountPrice: '40',
};
const product2 = {
  imageSrc: Image2,
  productName: 'Velvet Touch Lipstick',
  productPrice: '25',
  productDiscountPrice: '20',
};
const product3 = {
  imageSrc: Image3,
  productName: 'Luminous Highlighter',
  productPrice: '100',
  productDiscountPrice: null,
};
const product4 = {
  imageSrc: Image4,
  productName: 'Silk Finish Setting Powder',
  productPrice: '16',
  productDiscountPrice: '12',
};
const product5 = {
  imageSrc: Image5,
  productName: 'HydraBoost Moisturizer',
  productPrice: '35',
  productDiscountPrice: '32',
};
const product6 = {
  imageSrc: Image6,
  productName: 'Pure Radiance Serum',
  productPrice: '22',
  productDiscountPrice: '20',
};
const product7 = {
  imageSrc: Image7,
  productName: 'Ultimate Volume Mascara',
  productPrice: '28',
  productDiscountPrice: '26',
};
const product8 = {
  imageSrc: Image8,
  productName: 'Perfect Brow Kit',
  productPrice: '32',
  productDiscountPrice: '30',
};
const product9 = {
  imageSrc: Image9,
  productName: 'Nourishing Night Cream',
  productPrice: '19',
  productDiscountPrice: '18',
};
const product10 = {
  imageSrc: Image10,
  productName: 'Revitalizing Eye Cream',
  productPrice: '32',
  productDiscountPrice: '29',
};

const product11 = {
  imageSrc: SkinImage,
  productName: 'Radiance Pure Radiance',
  productPrice: '18',
  productDiscountPrice: '16',
};
const product12 = {
  imageSrc: HairImage,
  productName: 'Perfect Pure Cream',
  productPrice: '12',
  productDiscountPrice: '10',
};
const product13 = {
  imageSrc: BodyImage,
  productName: 'Nourishing HydraBoost Cream',
  productPrice: '29',
  productDiscountPrice: '25',
};
const product14 = {
  imageSrc: Image6,
  productName: 'Silk Finish Cream',
  productPrice: '22',
  productDiscountPrice: '15',
};

export const list1 = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
];
export const list2 = [
  product13,
  product11,
  product12,
  product14,
  product10,
  product8,
  product9,
  product7,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
];
export const list3 = [
  product4,
  product9,
  product6,
  product1,
  product3,
  product8,
  product10,
  product5,
];
export const list4 = [product10, product7, product8, product9];
