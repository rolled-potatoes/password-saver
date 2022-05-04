import React from 'react';
import * as Styled from './styled';

const Row2 = ({ text, text2 }) => {
  return (
    <Styled.Container>
      <div className="text-box-1 text-box">{text}</div>
      <div className="text-box-2 text-box">{text2}</div>
    </Styled.Container>
  );
};

export default Row2;
