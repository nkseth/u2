import styles from "./inputField.module.scss";
export default function InputField({ label, value, setValue }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input value={value} onChange={(e)=> setValue(e.target.value)} className={styles.input} type='text' placeholder='input' />
    </div>
  );
}
