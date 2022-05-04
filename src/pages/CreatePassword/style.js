import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 10px 20px;
  button {
    margin-top: 1rem;
    border: 0;
    border-radius: 3px;
    background-color: #91a7ff;
    color: #fff5f5;
    width: 100%;
    height: 2em;
    &:hover {
      background-color: #5c7cfa;
    }
  }
`;
