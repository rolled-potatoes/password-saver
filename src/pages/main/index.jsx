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
import ListTab from './components/ListTab';
import NewTab from './components/NewTab';

import * as styles from './style';

const subRouters = [
  {
    path: '/',
    href:'/',
    nav: '리스트',
    exact: true,
    children: <ListTab />,
  },
  {
    path: '/new/:name?',
    href: '/new',
    nav: '생성',
    children: <NewTab />,
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
                onClick={handleClick(route.href)}
              >
                {route.nav}
              </Button>
            );
          })}
        </GapBox>
        <Switch>
          <React.Suspense fallback={() => <div>loader</div>}>
            {subRouters.map((route) => {
              return <Route key={route.path} {...route} />;
            })}
          </React.Suspense>
        </Switch>
      </GapBox>
    </styles.Container>
  );
}

export default Main;
