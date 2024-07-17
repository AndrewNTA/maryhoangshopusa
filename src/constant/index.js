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

export const WEBSITE_NAME = 'MARY HOANG SHOP USA';
export const FREE_SHIPPING_MESSAGE = 'FREE SHIPPING FOR ALL STATES';

export const menuItems = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
  },
  {
    id: 'all-products',
    path: '/all-products',
    label: 'All products',
  },
  {
    id: 'skin-care-makeup',
    path: '/skin-care-makeup',
    label: 'Skin Care & Makeup',
  },
  {
    id: 'body-care',
    path: '/body-care',
    label: 'Body Care',
  },
  {
    id: 'hair-care',
    path: '/hair-care',
    label: 'Hair Care',
  },
  {
    id: 'vitamins-nutrition',
    path: '/vitamins-nutrition',
    label: 'Vitamins & Nutrition',
  },
  {
    id: 'saleoff',
    path: '/saleoff',
    label: 'SALEOFF',
  },
];

export const contactItems = [
  'Phone: +1 888 888 888',
  'Zalo: Mary Hoang',
  'Facebook: Mary Hoang',
  'Email: maryhoang@gmail.com',
];

export const VITAMINS_AND_NUTRITION = 'vitaminsAndNutrition';
export const BODY_CARE = 'bodyCare';
export const THUOC_GIAM_CAN = 'thuocGiamCan';
export const SKIN_CARE_AND_MAKEUP = 'skinCareAndMakeup';
export const HAIR_CARE = 'hairCare';
