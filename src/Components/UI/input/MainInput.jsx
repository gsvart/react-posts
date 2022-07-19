import React from 'react';
import styles from './MainInput.module.css';

export default function MainInput(props) {
  return (
    <input {...props} className={styles.mainInput}/>
  )
}
