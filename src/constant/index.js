import DietImage from 'static/images/diet-img.jpg';
import HairImage from 'static/images/hair-care-img.jpg';
import SkinImage from 'static/images/skin-care-img.jpg';

const bodyGroup = {
  imageSrc: DietImage,
  path: '/giam-can-diet',
  groupName: 'Giảm cân (Diet)',
  groupDescription:
    'Chuyên các sản phẩm kẹo giảm cân, hỗ trợ ăn kiêng, giảm mỡ, tăng cơ...',
};

const hairGroup = {
  imageSrc: HairImage,
  path: '/dau-goi',
  groupName: 'Dầu gội',
  groupDescription:
    'Cung cấp các sản phẩm dầu gội, dầu xả phù hợp với nhiều loại tóc...',
};

const skinGroup = {
  imageSrc: SkinImage,
  path: '/my-pham-han-quoc',
  groupName: 'Mỹ phẩm Hàn Quốc',
  groupDescription:
    'Bán mỹ phẩm Hàn Quốc, các sản phẩm skincare và makeup, cam kết chính hãng...',
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

export const MY_PHAM_HAN_QUOC = 'my_pham_han_quoc';
export const THUC_PHAM_CHUC_NANG = 'thuc_pham_chuc_nang';
export const GIAM_CAN_DIET = 'giam_can_diet';
export const DAU_GOI = 'dau_goi';
export const SERUM_MOC_TOC = 'serum_moc_toc';
