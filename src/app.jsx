import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
  const [cards, setCards] = useState({
    firstName: ['Nara', 'Noah', 'Jiyeon'],
    companyName: ['Google', 'Katsu express', 'Seoul pharmacy'],
    position: ['Web developer', 'Line cook', 'Pharmacist'],
    email: ['worldkr19@gmail.com', 'cow4635@gmail.com', 'tjdnfwldus@naver.com'],
    comment: ['I love coding', 'I love Nara!', 'I love mando!'],
  });

  console.log(cards);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} cards={cards} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
