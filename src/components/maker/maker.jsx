import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <section className={styles.home}></section>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
