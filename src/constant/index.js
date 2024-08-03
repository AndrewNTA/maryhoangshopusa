import DietImage from 'static/images/diet-img.jpg';
import HairImage from 'static/images/hair-care-img.jpg';
import SkinImage from 'static/images/skin-care-img.jpg';
import SerumImage from 'static/images/serum-img.jpg';
import KemNamImage from 'static/images/kem-nam-img.jpg';
import KoreaImage from 'static/images/korea-img.jpg';

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
  groupName: 'Dầu gội chống rụng tóc',
  groupDescription:
    'Cung cấp các sản phẩm dầu gội, dầu xả chống rụng tóc phù hợp với nhiều loại da đầu...',
};

const skinGroup = {
  imageSrc: SkinImage,
  path: '/my-pham-han-quoc',
  groupName: 'Mỹ phẩm Hàn Quốc, Nhật Bản, Thuỵ Sĩ',
  groupDescription:
    'Bán mỹ phẩm Hàn Quốc, Nhật Bản các sản phẩm skincare và makeup, cam kết chính hãng...',
};

export const groupList = [bodyGroup, hairGroup, skinGroup];

const kemNamGroup = {
  imageSrc: KemNamImage,
  path: '/kem-dieu-tri-nam',
  groupName: 'Kem điều trị nám',
  groupDescription:
    'Chuyên các sản phẩm kem điều trị nám, đảm bảo uy tín chất lượng...',
};

const serumGroup = {
  imageSrc: SerumImage,
  path: '/serum-moc-toc',
  groupName: 'Serum mọc tóc',
  groupDescription:
    'Cung cấp các sản phẩm serum mọc tóc giúp điều trị tóc thưa, tóc rụng nhiều...',
};

const koreaGroup = {
  imageSrc: KoreaImage,
  path: '/korea-weilaiya-elvawell',
  groupName: 'Korea - Weilaiya - Elvawell',
  groupDescription:
    'Bán các sản phẩm chính hãng Korea - Weilaiya - Elvawell, cam kết chính hãng...',
};

export const groupList1 = [kemNamGroup, serumGroup, koreaGroup];

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
    label: 'Mỹ phẩm',
  },
  {
    id: 'thuc-pham-chuc-nang',
    path: '/thuc-pham-chuc-nang',
    label: 'Thực phẩm chức năng',
  },
  {
    id: 'giam-can-diet',
    path: '/giam-can-diet',
    label: 'Giảm cân (diet)',
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
  { label: 'Phone: 678 559 8867 (Mary Hoang)', value: 'tel:+16785598867' },
  { label: 'Zalo: Mary Hoang', value: 'https://zalo.me/16785598867' },
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

export const footerCategoryItems = [
  {
    id: 'my-pham-han-quoc',
    path: '/my-pham-han-quoc',
    label: 'Mỹ phẩm Hàn Quốc, Nhật Bản, Thuỵ Sĩ',
  },
  {
    id: 'kem-dieu-tri-nam',
    path: '/kem-dieu-tri-nam',
    label: 'Kem điều trị nám',
  },
  {
    id: 'thuc-pham-chuc-nang',
    path: '/thuc-pham-chuc-nang',
    label: 'Thực phẩm chức năng, COLLAGEN',
  },
  {
    id: 'giam-can-diet',
    path: '/giam-can-diet',
    label: 'Giảm cân (diet)',
  },
  {
    id: 'dau-goi',
    path: '/dau-goi',
    label: 'Dầu gội chống rụng tóc',
  },
  {
    id: 'serum-moc-toc',
    path: '/serum-moc-toc',
    label: 'Serum mọc tóc',
  },
  {
    id: 'korea-weilaiya-elvawell',
    path: '/korea-weilaiya-elvawell',
    label: 'Korea - Weilaiya - Elvawell',
  },
];

export const paymentItems = [
  'Zelle: Mary Hoang LLC - 678 559 8867',
  'Venmo: Mary Hoang123',
];

export const MY_PHAM_HAN_QUOC = 'my_pham_han_quoc';
export const THUC_PHAM_CHUC_NANG = 'thuc_pham_chuc_nang';
export const GIAM_CAN_DIET = 'giam_can_diet';
export const DAU_GOI = 'dau_goi';
export const SERUM_MOC_TOC = 'serum_moc_toc';
export const KEM_DIEU_TRI_NAM = 'kem-dieu-tri-nam';
export const KOREA_WEILAIYA_ELVAWELL = 'korea-weilaiya-elvawell';
