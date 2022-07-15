import styles from "../../styles/styles.module.css";

export default function Categories({ title }) {
  return (
    <div>
      <div className={styles.flexItem}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
