import React from 'react';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.inputContainer}>
        <div className={styles.firstLineContainer}>
          <input className={styles.firstLineInput} type="text" />
          <input className={styles.firstLineInput} type="text" />
          <select className={styles.section} name="Theme" id="theme">
            <option value="1">Dark</option>
            <option value="2">White</option>
          </select>
        </div>
        <div className={styles.secondLineContainer}>
          <input className={styles.secondLineInput} type="text" />
          <input className={styles.secondLineInput} type="text" />
        </div>
        <textarea
          className={styles.textArea}
          name="comment"
          id="comment"
          cols="35"
          rows="3"
        ></textarea>
        <button className={styles.imageBtn}>Image</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.firstLineContainer}>
          <input className={styles.firstLineInput} type="text" />
          <input className={styles.firstLineInput} type="text" />
          <select className={styles.section} name="Theme" id="theme">
            <option value="1">Dark</option>
            <option value="2">White</option>
          </select>
        </div>
        <div className={styles.secondLineContainer}>
          <input className={styles.secondLineInput} type="text" />
          <input className={styles.secondLineInput} type="text" />
        </div>
        <textarea
          className={styles.textArea}
          name="comment"
          id="comment"
          cols="35"
          rows="3"
        ></textarea>
        <button className={styles.imageBtn}>Image</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.firstLineContainer}>
          <input className={styles.firstLineInput} type="text" />
          <input className={styles.firstLineInput} type="text" />
          <select className={styles.section} name="Theme" id="theme">
            <option value="1">Dark</option>
            <option value="2">White</option>
          </select>
        </div>
        <div className={styles.secondLineContainer}>
          <input className={styles.secondLineInput} type="text" />
          <input className={styles.secondLineInput} type="text" />
        </div>
        <textarea
          className={styles.textArea}
          name="comment"
          id="comment"
          cols="35"
          rows="3"
        ></textarea>
        <button className={styles.imageBtn}>Image</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.firstLineContainer}>
          <input className={styles.firstLineInput} type="text" />
          <input className={styles.firstLineInput} type="text" />
          <select className={styles.section} name="Theme" id="theme">
            <option value="1">Dark</option>
            <option value="2">White</option>
          </select>
        </div>
        <div className={styles.secondLineContainer}>
          <input className={styles.secondLineInput} type="text" />
          <input className={styles.secondLineInput} type="text" />
        </div>
        <textarea
          className={styles.textArea}
          name="comment"
          id="comment"
          cols="35"
          rows="3"
        ></textarea>
        <button className={styles.imageBtn}>Image</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    </section>
  );
};

export default Editor;
