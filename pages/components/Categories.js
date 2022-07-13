import styles from "../../styles/styles.module.css";

export default function Categories({ categories }) {
  return (
    <div>
      <div className={styles.flexItem}>
        <h2>{categories.map((categories) => categories.name)}</h2>
      </div>
    </div>
  );
}
