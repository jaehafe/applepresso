/** 날짜 format 함수 */
const formatDate = (target) => {
  const date = new Date(target);
  const year = String(date.getFullYear()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const today = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${today} | ${hour}:${min}`;
};

/** 가격 format 함수 */
const formatPrice = (target) => {
  if (target) {
    const result = target.toLocaleString();
    return result;
  }
};

export { formatDate, formatPrice };

export const orderDate = new Date().toISOString();
