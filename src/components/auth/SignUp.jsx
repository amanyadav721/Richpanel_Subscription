import { Link } from "react-router-dom";
import styles from "../../styles/Auth.module.css";
function SignUp() {
  return (
    <div className={styles.box_signup}>
      <span className={styles.borderLine}></span>
      <form className={styles.forms}>
        <h2 className={styles.forms_h2}> SignUp</h2>
        <div className={styles.inputBox}>
          <input type="text" required="required" />
          <span>Name</span>
          <i></i>
        </div>
        <div className={styles.inputBox}>
          <input type="TEXT" required="required" />
          <span>Email</span>
          <i></i>
        </div>
        <div className={styles.inputBox}>
          <input type="password" required="required" />
          <span>Password</span>
          <i></i>
        </div>
        <div className={styles.inputBox}>
          <input type="password" required="required" />
          <span>Confirm Password</span>
          <i></i>
        </div>

        <div className={styles.links}>
          <Link to="/signin">
            <a href="#">SignIn</a>
          </Link>
        </div>

        <input type="submit" value="LogIN"></input>
      </form>
    </div>
  );
}
export default SignUp;
