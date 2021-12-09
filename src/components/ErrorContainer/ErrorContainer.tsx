import styles from '../index.module.css';

export default function Error() {
  return (
    <div className={`${styles.container} ${styles.error__container}`}>
      An error occurred while receiving data. Check the connection, reload the web page, or contact customer support.
    </div>
  )
}
