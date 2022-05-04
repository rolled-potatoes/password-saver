import React from 'react';
import { Link } from 'react-router-dom';
import { asideNavigationList } from './contans';
import * as Styled from './style';

function Aside() {
  return (
    <Styled.Aside>
      <ul>
        {asideNavigationList.map((item) => {
          return (
            <Link to={item.link}>
              <Styled.Li>
                <item.Icon />
              </Styled.Li>
            </Link>
          );
        })}
      </ul>
    </Styled.Aside>
  );
}

export default Aside;
