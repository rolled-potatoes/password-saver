import React from 'react';
import {
  matchPath,
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from 'react-router-dom';
import GapBox from 'components/GapBox';
import Button from 'components/Button';
import ListTab from './components/ListTab';
import NewTab from './components/NewTab';

import * as styles from './style';

const subRouters = [
  {
    path: '/list',
    href: '/list',
    nav: '리스트',
    exact: true,
    Component: () => <ListTab />,
  },
  {
    path: '/new/:name?',
    href: '/new',
    nav: '생성',
    exact: true,
    Component: () => <NewTab />,
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
          {subRouters.map((route) => {
            return (
              <Route key={route.href} {...route}>
                <React.Suspense fallback={() => <div>loader</div>}>
                  <route.Component />
                </React.Suspense>
              </Route>
            );
          })}
          <Redirect to="/list" />
        </Switch>
      </GapBox>
    </styles.Container>
  );
}

export default Main;
