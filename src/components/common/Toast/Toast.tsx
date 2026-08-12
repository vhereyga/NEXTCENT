import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import styles from './Toast.module.css';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={styles.toastContainer}>
      <div className={`${styles.toast} ${styles[type]}`} role="alert">
        {type === 'success' ? (
          <CheckCircle2 size={18} color="var(--color-primary)" />
        ) : (
          <AlertCircle size={18} color="var(--color-error)" />
        )}
        <span style={{ flex: 1 }}>{message}</span>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 2 }}
          aria-label="Dismiss toast"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
