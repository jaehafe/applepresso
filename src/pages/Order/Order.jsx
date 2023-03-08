import React from 'react';
import * as S from './Order.style';

const menus = [
  {
    id: 'Hexamericano',
    title: '헥사메리카노',
    price: '3000',
    ENTitle: 'Hexamericano',
    desc: '[4 shot] 6가지 원두를 블렌딩해 만든, 고소 & 상큼한 풍미의 밸러스가 좋은 4shot의 진한 아메리카노',
    tags: 'coffee',
    thumbnail:
      'https://www.banapresso.com/from_open_storage?ws=fprocess&file=banapresso/menu/img_350a5a914a51.png',
    isSoldOut: false,
    discountRate: 10,
  },
  {
    id: 'ZeroSugarAmericano',
    title: '제로슈가아메리카노',
    price: '3300',
    ENTitle: 'ZeroSugarAmericano',
    desc: '스테비아가 첨가 된 아메리카노로 칼로리 걱정없이, 당 걱정없는 달콤한 아메리카노',
    tags: 'coffee',
    thumbnail:
      'https://www.banapresso.com/from_open_storage?ws=fprocess&file=banapresso/menu/img_c02fe040d0ad.png',
    isSoldOut: false,
    discountRate: 10,
  },
  {
    id: 'HazelnutAmericano',
    title: '헤이즐넛아메리카노',
    price: '3500',
    ENTitle: 'HazelnutAmericano',
    desc: '고소한 아메리카노에 헤이즐넛을 더해 달콤 고소한 풍미를 살린 아메리카노',
    tags: 'coffee',
    thumbnail:
      'https://www.banapresso.com/from_open_storage?ws=fprocess&file=banapresso/menu/img_dd9bbc721a56.png',
    isSoldOut: false,
    discountRate: 10,
  },
  {
    id: 'CafeMocha',
    title: '카페모카',
    price: '3500',
    ENTitle: 'CafeMocha',
    desc: '초콜릿 풍미에 에스프레소를 더한 달콤하면서도 쌉싸름한 맛의 커피',
    tags: 'coffee',
    thumbnail:
      'https://www.banapresso.com/from_open_storage?ws=fprocess&file=banapresso/menu/img_1418e586eccc.png',
    isSoldOut: false,
    discountRate: 10,
  },
  {
    id: 'SignatureAmericano',
    title: '시그니처아메리카노',
    price: '2900',
    ENTitle: 'SignatureAmericano',
    desc: '은은한 과일향의 부담없는 산미와 카라멜의 단맛, 견과의 풍미가 어우러진 감칠맛이 가득한 커피',
    tags: 'coffee',
    thumbnail:
      'https://www.banapresso.com/from_open_storage?ws=fprocess&file=banapresso/menu/img_e1983f793ad7.png',
    isSoldOut: false,
    discountRate: 10,
  },
];

function Order() {
  return (
    <S.Container>
      <S.MenuLists>
        {menus.map((menu) => {
          const {
            id,
            title,
            price,
            ENTitle,
            desc,
            tags,
            thumbnail,
            isSoldOut,
            discountRate,
          } = menu;
          return (
            <S.MenuList key={id}>
              {title}
              {desc}
              <img src={thumbnail} alt={title} />
            </S.MenuList>
          );
        })}
      </S.MenuLists>
    </S.Container>
  );
}

export default Order;
