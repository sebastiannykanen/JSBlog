import styles from "../../styles/styles.module.css";

export default function Categories({ title }) {
  return (
    <div>
      <div>
        <h2 className={styles.flexItem}>{title}</h2>
      </div>
    </div>
  );
}
