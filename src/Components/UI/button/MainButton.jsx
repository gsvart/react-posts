import React from 'react';

import styles from './MainButton.module.css';

export default function MainButton(props) {
  return (
    <button {...props} className={styles.mainBtn}>
      {props.children}
    </button>
  )
}
