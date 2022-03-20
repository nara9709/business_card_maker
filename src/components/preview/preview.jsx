import React from 'react';
import styles from './preview.module.css';
import logo from '../../image/default_logo.png';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>

    <div className={styles.cardContainer}>
      <img className={styles.image} src={logo} alt="logo" />
      <div className={styles.descriptionContainer}>
        <h1 className={styles.name}> {cards.firstName[0]}</h1>
        <p className={styles.cardDescription}> {cards.companyName[0]} </p>
        <div className={styles.line}></div>
        <p className={styles.cardDescription}> {cards.position[0]} </p>
        <p className={styles.cardDescription}> {cards.email[0]} </p>
        <p className={styles.cardDescription}> "{cards.comment[0]}" </p>
      </div>
    </div>

    <div className={styles.cardContainer}>
      <img className={styles.image} src={logo} alt="logo" />
      <div className={styles.descriptionContainer}>
        <h1 className={styles.name}> {cards.firstName[1]}</h1>
        <p className={styles.cardDescription}> {cards.companyName[1]} </p>
        <div className={styles.line}></div>
        <p className={styles.cardDescription}> {cards.position[1]} </p>
        <p className={styles.cardDescription}> {cards.email[1]} </p>
        <p className={styles.cardDescription}> "{cards.comment[1]}" </p>
      </div>
    </div>

    <div className={styles.cardContainer}>
      <img className={styles.image} src={logo} alt="logo" />
      <div className={styles.descriptionContainer}>
        <h1 className={styles.name}> {cards.firstName[2]}</h1>
        <p className={styles.cardDescription}> {cards.companyName[2]} </p>
        <div className={styles.line}></div>
        <p className={styles.cardDescription}> {cards.position[2]} </p>
        <p className={styles.cardDescription}> {cards.email[2]} </p>
        <p className={styles.cardDescription}> "{cards.comment[2]}" </p>
      </div>
    </div>
  </section>
);

export default Preview;
