import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/maker'}>
          <Maker authService={authService}></Maker>
        </Route>
        <Route exact path={['/']}>
          <div className={styles.app}>
            <Login authService={authService}></Login>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
