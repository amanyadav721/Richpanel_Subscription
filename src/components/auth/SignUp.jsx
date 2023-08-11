import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/Auth.module.css";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const response = await axios.post("https://richpannel.onrender.com/auth/signup", {
        name,
        email,
        password,
      });
      console.log(response);
      if (response.status === 201) {
        toast.success("Registration successful. Please sign in.");
        navigate("/signin");
      } else {
        setError(
          response.data.error || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.box_signup}>
      <span className={styles.borderLine}></span>
      <form className={styles.forms} onSubmit={handleSignUp}>
        <h2 className={styles.forms_h2}> SignUp</h2>
        <div className={styles.inputBox}>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Name</span>
          <i></i>
        </div>
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
        <div className={styles.inputBox}>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm Password</span>
          <i></i>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.links}>
          <Link to="/signin">SignIn</Link>
        </div>

        <input type="submit" value="SignUp" />
      </form>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default SignUp;
