import styled from 'styled-components';
import { background } from '../../styles/color';

export const Aside = styled.aside`
  width: 100%;
  height: calc(100vh - 2.25rem);
  background-color: ${background};
  border-right: 1px solid #fff;

  ul {
    list-style: none;
  }
`;

export const Li = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  background: wheat;
  border-radius: 50%;
  margin: 1.5rem auto;
  background-color: #fff;
  & + & {
    border-top: 1px solid #212529;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  a {
    display: flex;
    justify-content: center;
  }
`;
