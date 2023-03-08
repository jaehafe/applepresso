import React from 'react';
import * as S from './RecommendLists.style';
import RecommendList from './RecommendList/RecommendList';

function RecommendLists(props) {
  return (
    <div>
      {props.menus.map((menu) => {
        return <RecommendList key={menu.id} {...menu} />;
      })}
    </div>
  );
}

export default RecommendLists;
