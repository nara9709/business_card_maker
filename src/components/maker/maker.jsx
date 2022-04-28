import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Nara',
      company: 'Google',
      position: 'Web developer',
      email: 'worldkr19@gmail.com',
      comment: 'I love coding',
      fileName: 'nara',
      fileURL: null,
      theme: 'Dark',
    },
    2: {
      id: '2',
      name: 'Noah',
      company: 'Katsu express',
      position: 'Line cook',
      email: 'cow4635@gmail.com',
      comment: 'I love Nara!',
      fileName: 'nara',
      fileURL: 'nara.png',
      theme: 'Colorful',
    },

    3: {
      id: '3',
      name: 'Jiyeon',
      company: 'Seoul pharmacy',
      position: 'Pharmacist',
      email: 'tjdnfwldus@naver.com',
      comment: 'I love mandu!',
      fileName: 'nara',
      fileURL: null,
      theme: 'Light',
    },
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
