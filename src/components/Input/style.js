import styled, { css } from 'styled-components';

const size = ({ size }) => {
  switch (size) {
    case 'sm': {
      return css`
        padding: 6px 4px;
        font-size: 12px;
      `;
    }
    case 'md': {
      return css`
        padding: 8px 4px;
        font-size: 14px;
      `;
    }
    case 'xl': {
      return css`
        padding: 10px 4px;
        font-size: 16px;
      `;
    }
  }
};

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid var(--divider);
  background:unset;
  outline: none;
  ${size}

  &:hover{
    border-color: var(--primary);
  }

  &:focus {
    border-color : var(--blue-800);
  }
`;
