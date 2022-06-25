import React from 'react';
import styles from './styles.module.css';

function Input({
  type,
  label,
  name
}) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
      />
      <p className={styles.error}>Error</p>
    </div>
  )
}

export default Input;