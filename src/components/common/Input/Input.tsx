import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightElement?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, rightElement, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className={`${styles.fieldGroup} ${error ? styles.hasError : ''}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            id={inputId}
            className={`${styles.input} ${className}`}
            aria-invalid={!!error}
            aria-describedby={error && inputId ? `${inputId}-error` : undefined}
            {...props}
          />
          {rightElement && <div className={styles.rightElement}>{rightElement}</div>}
        </div>
        {error && (
          <span id={inputId ? `${inputId}-error` : undefined} className={styles.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
