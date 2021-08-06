import styles from "./inputField.module.scss";
export default function InputField({ label }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type='text' placeholder='input' />
    </div>
  );
}
