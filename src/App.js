import { PasswordListPage, CreatePasswordPage } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <CreatePasswordPage />
        </Route>
        <Route path="/">
          <PasswordListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
