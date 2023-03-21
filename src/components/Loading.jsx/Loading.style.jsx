import styled from 'styled-components';

export const Container = styled.div`
  /* backdrop-filter: saturate(180%) blur(5px); */
  width: 200px;
  height: 200px;

  z-index: 14;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
