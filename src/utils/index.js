export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(price);
};

export const genImages = (arr) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((g) => ({
    original: g.imageSrc,
    thumbnail: g.imageSrc,
    thumbnailHeight: 80,
    thumbnailWidth: 80,
  }));
};

export function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}
