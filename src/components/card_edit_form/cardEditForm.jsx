import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    comment,
    theme,
    fileName,
    fileURL,
    position,
  } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="comment"
        value={comment}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput></ImageFileInput>
      </div>
      <Button name="Delete" onClick={onSubmit}></Button>
    </form>
  );
};

export default CardEditForm;
