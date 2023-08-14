import { Main } from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Main />
      </Router>
    </>
  );
}

export default App;
