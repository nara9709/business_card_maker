import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Nara',
      companyName: 'Google',
      position: 'Web developer',
      email: 'worldkr19@gmail.com',
      comment: 'I love coding',
      fileName: 'nara',
      fileURL: 'nara.png',
    },
    {
      id: '2',
      name: 'Noah',
      companyName: 'Katsu express',
      position: 'Line cook',
      email: 'cow4635@gmail.com',
      comment: 'I love Nara!',
      fileName: 'nara',
      fileURL: 'nara.png',
    },
    {
      id: '3',
      name: 'Jiyeon',
      companyName: 'Seoul pharmacy',
      position: 'Pharmacist',
      email: 'tjdnfwldus@naver.com',
      comment: 'I love mandu!',
      fileName: 'nara',
      fileURL: 'nara.png',
    },
  ]);
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
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
