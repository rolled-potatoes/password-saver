import styled from 'styled-components';
import { buttonNomal, buttonWaring } from '../../../../styles/color';

export const ButtonContainer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #fff;

  a,
  a:link,
  a:visited {
    text-decoration: none;
  }
  .box {
    cursor: pointer;
    box-sizing: border-box;
    font-size: 0.875rem;
    width: 4em;
    border: 0;
    border-radius: 3px;
    padding: 0.5em 0.75em;
    margin: 0.875em 0;
    text-align: center;
    color: #fff !important;
  }
  .normal {
    background-color: ${buttonNomal};
  }
  .waring {
    background-color: ${buttonWaring};
  }
`;
