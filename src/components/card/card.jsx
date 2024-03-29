import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';
const Card = ({ card }) => {
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
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>
          {company} ({position})
        </p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.comment}>{comment}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
