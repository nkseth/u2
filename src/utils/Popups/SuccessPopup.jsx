import styles from './SuccessPopUp.module.scss';
import close from './close.svg';
import { IconButton } from '@material-ui/core';
export function SuccessPopUp({
  toggle,
  title,
  text,
  history,
  payment,
  children,
  width,
  height,
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.SecondLayer} onClick={toggle}></div>
      <div className={styles.Popup} style={{ width: width, height: height }}>
        <IconButton className={styles.CloseBtn} onClick={toggle}>
          <img src={close} />
        </IconButton>
        {/* <img src={tick} />
        <h1>{title}</h1>
        <p>{text}</p>
        {payment ? (
          <>
            <Button
              className={styles.AddmeasureBTN}
              onClick={() =>
                history.push('/add-measurement-choose-standard-size')
              }
            >
              Add measurement
            </Button>
            <Button className={styles.LaterBTN} onClick={toggle}>
              I’ll do it later
            </Button>
          </>
        ) : (
          <></>
        )} */}
        {children}
      </div>
    </div>
  );
}
