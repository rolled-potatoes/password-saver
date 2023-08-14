import styled from 'styled-components';

export const GapBox = styled.div`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
`;
