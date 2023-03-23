import styled from 'styled-components';
import { FiSearch, AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/all';

export const ButtonContainer = styled.div`
  z-index: 5;
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 60px;
  border-radius: 16px;
  background-color: #fff;
`;
export const RetryButton = styled.button`
  border: 1px solid;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: var(--button-color);
  color: #fff;
`;
export const TitleWrapper = styled.div``;
export const RetryTitle = styled.div``;
export const RetrySubtitle = styled.div``;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  z-index: 5;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 90%;
  border-radius: 20px;
  background-color: #fff;
  overflow: scroll;
`;

export const HeaderWrapper = styled.div`
  z-index: 4;
  display: flex;
  justify-content: space-between;

  padding: 40px 20px 20px;
  /* height: 100px; */
  font-size: 26px;
  border-bottom: 1px solid #000;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 40px;
`;
export const StyledFiSearch = styled(FiSearch)`
  color: var(--main-color);
`;
export const HeaderSearchInput = styled.input`
  font-size: 20px;
  &::placeholder {
    color: var(--division);
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const StyledAiOutlineCloseCircle = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  color: var(--main-color);
`;
export const HeaderCancelButton = styled.button`
  font-size: 20px;
`;
export const HeaderSearchButton = styled.button`
  font-size: 20px;
`;
export const BodyContainer = styled.div`
  z-index: 3;
  padding: 30px 30px;
  overflow-y: scroll;
`;
export const SearchHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const SearchHistoryList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
export const SearchHistoryTitle = styled.h3`
  font-weight: 400;
`;
export const StyledAiOutlineClose = styled(AiOutlineClose)``;

// 검색 결과
export const SearchResultCount = styled.div`
  /* color: grey; */
`;
export const Strong = styled.strong`
  color: var(--main-color);
`;
export const SearchResultContainer = styled.div`
  overflow-y: scroll;
`;
export const SearchResultMenuNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
`;
export const SearchResultMenuName = styled.h3`
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 20px;

  &:hover,
  &:active {
    background-color: var(--division);
  }
`;

// export const Container = styled.div``
