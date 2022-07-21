import React from 'react';

import styles from './MainSelect.module.css';

export default function MainSelect({options, defaultValue, value, onChange}) {
  return (
    <select
      className={styles.mainSelect}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option => 
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  )
}
