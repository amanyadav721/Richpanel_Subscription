import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/Auth.module.css";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("https://richpannel.onrender.com/auth/signin", {
        email,
        password,
      });
      console.log(response);

      if (response.status === 200) {
        const { user, token } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        navigate("/home");
      } else {
        setError(response.data.error || "Sign-in failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.box}>
      <span className={styles.borderLine}></span>
      <form className={styles.forms} onSubmit={handleSignIn}>
        <h2 className={styles.forms_h2}>SignIn</h2>
        <div className={styles.inputBox}>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className={styles.inputBox}>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
          <i></i>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.links}>
          <Link to="/forgotpassword">Forgot Password</Link>
          <Link to="/signup">SignUp</Link>
        </div>

        <input type="submit" value="SignIn" />
      </form>
    </div>
  );
}

export default SignIn;
