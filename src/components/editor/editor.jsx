import React from 'react';
import CardAddForm from '../card_add_form/cardAddForm';
import CardEditForm from '../card_edit_form/cardEditForm';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm onAdd={addCard}> </CardAddForm>
    </section>
  );
};

export default Editor;
