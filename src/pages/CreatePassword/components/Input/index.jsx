import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  color: #fff;

  & + & {
    margin-top: 1rem;
  }

  label {
    display: block;
    text-align: left;
  }

  input {
    border: 0;
    border-bottom: 2px solid #ced4da;
    border-radius: 3px;
    width: 100%;
    height: 1.4em;
    text-indent: 0.2em;
    &:focus {
      border-bottom: 3px solid #fa5252;
      outline: none;
    }
  }
`;
const Input = (prop) => {
  const { title, value, onChange, onPressKey } = prop;

  return (
    <Div>
      <label htmlFor={title}>{title}</label>
      <input id={title} type="text" onKeyPress={onPressKey} value={value} onChange={onChange} />
    </Div>
  );
};

export default Input;
