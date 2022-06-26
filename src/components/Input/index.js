import React from 'react';
import styles from './styles.module.css';

function Input({
  type,
  label,
  name,
  value,
  error,
  onChange,
  onBlur
}) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input;