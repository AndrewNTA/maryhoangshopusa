import BodyImage from 'static/images/body-care-img.jpg';
import HairImage from 'static/images/hair-care-img.jpg';
import SkinImage from 'static/images/skin-care-img.jpg';

const bodyGroup = {
  imageSrc: BodyImage,
  path: '/thuc-pham-chuc-nang',
  groupName: 'Thực phẩm chức năng',
  groupDescription:
    'Pamper your skin with our exquisite range of body care products.',
};

const hairGroup = {
  imageSrc: HairImage,
  path: '/giam-can-diet',
  groupName: 'Giảm cân (Diet)',
  groupDescription:
    'Discover the secret to luscious, healthy hair with our exceptional range of hair care products.',
};

const skinGroup = {
  imageSrc: SkinImage,
  path: '/my-pham-han-quoc',
  groupName: 'Mỹ phẩm Hàn Quốc',
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
    id: 'my-pham-han-quoc',
    path: '/my-pham-han-quoc',
    label: 'Mỹ phẩm Hàn Quốc',
  },
  {
    id: 'thuc-pham-chuc-nang',
    path: '/thuc-pham-chuc-nang',
    label: 'Thực phẩm chức năng',
  },
  {
    id: 'giam-can-diet',
    path: '/giam-can-diet',
    label: 'Giảm cân (Diet)',
  },
  {
    id: 'dau-goi',
    path: '/dau-goi',
    label: 'Dầu gội',
  },
  {
    id: 'serum-moc-toc',
    path: '/serum-moc-toc',
    label: 'Serum mọc tóc',
  },
  {
    id: 'saleoff',
    path: '/saleoff',
    label: 'SALEOFF',
  },
];

export const contactItems = [
  { label: 'Phone: 678 559 8867', value: 'tel:+16785598867' },
  { label: 'Zalo: Mary Hoang', value: 'tel:+16785598867' },
  {
    label: 'Facebook: Mary Hoang',
    value: 'https://www.facebook.com/mary.hoang.14224',
  },
  {
    label: 'Facebook: Mary Linda',
    value: 'https://www.facebook.com/profile.php?id=100027470498826',
  },
  {
    label: 'Facebook: Mary T Thuong',
    value: 'https://www.facebook.com/profile.php?id=100022235714613',
  },
];

export const paymentItems = [
  'Zelle: Mary Hoang - 678 559 8867',
  'Venmo: Mary Hoang123 - 678 559 8867',
];

export const VITAMINS_AND_NUTRITION = 'vitaminsAndNutrition';
export const BODY_CARE = 'bodyCare';
export const THUOC_GIAM_CAN = 'thuocGiamCan';
export const SKIN_CARE_AND_MAKEUP = 'skinCareAndMakeup';
export const HAIR_CARE = 'hairCare';

export const MY_PHAM_HAN_QUOC = 'my_pham_han_quoc';
export const THUC_PHAM_CHUC_NANG = 'thuc_pham_chuc_nang';
export const GIAM_CAN_DIET = 'giam_can_diet';
export const DAU_GOI = 'dau_goi';
export const SERUM_MOC_TOC = 'serum_moc_toc';
