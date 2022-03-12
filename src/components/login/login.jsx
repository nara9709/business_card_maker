import styles from './login.module.css';

import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Login = ({ authService }) => {
  const onLogin = (e) => {
    authService.login(e.currentTarget.textContent).then(console.log);
  };
  return (
    <section className={styles.login}>
      <Header></Header>

      <section>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Login;
