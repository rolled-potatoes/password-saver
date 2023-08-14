import styled, { css } from 'styled-components';

const color = ({ color }) => {
  switch (color) {
    case 'primary':
      return css`
        background-color: var(--primary);
      `;
    case 'danger':
      return css`
        background-color: var(--danger);
      `;
    case 'link':
      return css`
        background-color: var(--link);
        color: var(--font);
      `;
  }
};

const size = ({ size }) => {
  switch (size) {
    case 'sm': {
      return css`
        padding: 8px 12px;
      `;
    }
    case 'md': {
      return css`
        padding: 10px 14px;
      `;
    }
    case 'xl': {
      return css`
        padding: 12px 16px;
      `;
    }
  }
};

const disabled = ({ disabled }) => {
  if (disabled) {
    return css`
      opacity: 0.32;
      cursor: not-allowed;
    `;
  }
};

export const Button = styled.button`
  border-radius: var(--radius);
  border: 0;
  color: white;
  cursor: pointer;
  transition: filter 0.3s;
  ${color}
  ${size}
${disabled}
  &:hover {
    filter: brightness(0.85);
  }
  &:active {
    transform: scale(0.95);
  }
`;
