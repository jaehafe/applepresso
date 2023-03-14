export const selectPlace = [
  { id: 'TAKEOUT', option: '테이크아웃', subOption: '일회용 컵', isCheck: 'false' },
  { id: 'INSHOP', option: '매장', subOption: '종이컵', isCheck: 'false' },
  {
    id: 'TAKEOUT_INSHOP',
    option: '매장 + 테이크아웃',
    subOption: '종이컵',
    isCheck: 'false',
  },
  {
    id: 'TUMBLER',
    option: '텀블러',
    subOption: '음료 1잔만 주문 가능',
    isCheck: 'false',
  },
];

export const takeoutOptions = [
  { id: 'NO_TAEKOUT', option: '포장 안함', subOption: '일회용 컵', isCheck: 'false' },
  { id: 'ALL_TAKEOUT', option: '전체 포장', subOption: '캐리어', isCheck: 'false' },
];
