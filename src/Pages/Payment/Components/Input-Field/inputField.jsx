import styles from "./inputField.module.scss";
export default function InputField({ label, placeholder, onChange }) {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        <span>*</span>
      </label>
      <input
        className={styles.input}
        type='text'
        name={label}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}
