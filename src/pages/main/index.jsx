import React from 'react';
import {
  matchPath,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import GapBox from 'components/GapBox';
import Button from 'components/Button';

import * as styles from './style';

const subRouters = [
  {
    path: '/',
    nav: '리스트',
    exact: true,
    children: <div>list </div>,
  },
  {
    path: '/new',
    nav: '생성',
    children: <div>new</div>,
  },
];

function Main() {
  const location = useLocation();
  const history = useHistory();

  const handleClick = (path) => () => {
    history.push(path);
  };

  return (
    <styles.Container>
      <GapBox gap={10}>
        <GapBox row gap={8}>
          {subRouters.map((route) => {
            const isActive = matchPath(location.pathname, {
              path: route.path,
              exact: route.exact,
            });
            const color = isActive ? 'primary' : 'link';
            return (
              <Button
                color={color}
                size="sm"
                key={route.path}
                onClick={handleClick(route.path)}
              >
                {route.nav}
              </Button>
            );
          })}
        </GapBox>
      </GapBox>

      <Switch>
        {subRouters.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Switch>
    </styles.Container>
  );
}

export default Main;