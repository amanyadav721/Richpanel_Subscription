import styles from "../../styles/Auth.module.css";
function ForgotPassword() {
  return (
    <div className={styles.box_forgot}>
      <span className={styles.borderLine}></span>
      <form className={styles.forms}>
        <h2 className={styles.forms_h2}> Forgot Password</h2>
        <div className={styles.inputBox}>
          <input type="email" required="required" />
          <span>Email</span>
          <i></i>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
export default ForgotPassword;
