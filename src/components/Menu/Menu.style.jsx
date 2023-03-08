import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px 20px;
  border-bottom: 1px solid rgb(225, 212, 212);
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const IMGWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

//
export const MenuStatus = styled.span`
  position: absolute;
  border-radius: 10px;
  width: auto;
  padding: 7px 8px;
  transform: translate(-10px, -10px);

  background-color: ${({ $isNew, $isBest }) => {
    if ($isNew && $isBest) {
      return '#AFE3FE';
    }
    if ($isNew) {
      return '#f1b74a';
    }
    if ($isBest) {
      return 'var(--main-color)';
    }

    return 'none';
  }};

  color: #fff;
  font-size: 13px;
`;

export const Thumbnail = styled.img`
  background-color: rgb(239, 224, 224);
  border-radius: 40px;
  object-fit: contain;
`;

export const MenuInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const MenuTitle = styled.h3`
  font-size: 26px;
  font-weight: 500;
`;
export const MenuENTitle = styled.span`
  color: rgb(174, 153, 153);
  font-weight: 200;
`;
export const MenuPrice = styled.strong`
  color: rgba(149, 122, 122, 0.978);
`;
