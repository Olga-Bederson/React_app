import styles from './message_css.css';

export const Message = (props) => {
    return <div className={styles.message}>{props.text}</div>
};