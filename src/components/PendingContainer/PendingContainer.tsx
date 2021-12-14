import styles from '../index.module.css';

export default function PendingContainer() {
  return (
    <div className={`${styles.container} ${styles.pending__container}`}>
      Data loading, wait please...
    </div>
  )
}
