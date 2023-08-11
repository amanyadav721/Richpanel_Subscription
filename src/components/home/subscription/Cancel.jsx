import { Link } from "react-router-dom";
import styles from "../../../styles/Cancel.module.css"; // Import the CSS module

const Cancel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.failureIcon}>
        {/* Red cross SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ff3d3d"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 13h-4v-2h4v2zm0-4h-4V7h4v4z" />
        </svg>
      </div>
      <h1 className={styles.heading}>Payment Unsuccessful</h1>
      <p className={styles.message}>
        Sorry, your payment could not be processed.
      </p>
      <div className={styles.nextButtonContainer}>
        <Link to="/home" className={styles.nextButton}>
          {/* <a href="/" > */}
          Return to Home
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
