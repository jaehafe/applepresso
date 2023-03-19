import styled from 'styled-components';

export const StoreWrapper = styled.div`
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
`;
export const StoreInfoHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3px;
`;
export const StoreBranch = styled.div`
  background-color: var(--main-color);
  color: #fff;
  padding: 3px 8px 6px 6px;
  border-bottom-left-radius: 10px;
`;
export const StoreInfoHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 0.5fr;
  padding: 0 20px 20px;
  gap: 10px;
`;
export const StoreThumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;
export const StoreInfosHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const StoreTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
export const StoreDelivery = styled.div`
  font-size: 14px;
  color: var(--main-color);
  color: red;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  padding: 3px 6px;
`;
export const StoreInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
export const StoreInfosParaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--subtitle-color);
`;
export const StoreAddr = styled.div``;
export const StoreOpenTime = styled.div``;
export const StoreDistance = styled.div`
  color: red;
  font-size: 20px;
`;
