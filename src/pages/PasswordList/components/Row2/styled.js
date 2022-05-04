
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid #fff;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  height: 3rem;

  .text-box {
    text-align: center;
    width: 100%;
    overflow-x: scroll;
    & + & {
      border-right: 1px solid #fff;
    }
  }

  .text-box-2 {
    font-weight: bold;
  }
`;
