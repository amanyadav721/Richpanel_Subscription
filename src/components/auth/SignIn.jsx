import { Link } from "react-router-dom";
import styles from "../../styles/Auth.module.css";
function SignIn() {
  return (
    <div className={styles.box}>
      <span className={styles.borderLine}></span>
      <form className={styles.forms}>
        <h2 className={styles.forms_h2}> SignIn</h2>
        <div className={styles.inputBox}>
          <input type="text" required="required" />
          <span>Email</span>
          <i></i>
        </div>
        <div className={styles.inputBox}>
          <input type="password" required="required" />
          <span>Password</span>
          <i></i>
        </div>

        <div className={styles.links}>
          <Link to="/forgotpassword">
            <a href="#">Forgot Password</a>
          </Link>
          <Link to="/signup">
            <a href="#">SignUp</a>
          </Link>
        </div>

        <input type="submit" value="SignIn"></input>
      </form>
    </div>
  );
}
export default SignIn;
