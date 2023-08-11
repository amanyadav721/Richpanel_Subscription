import styles from "../../../styles/Success.module.css"; 

const Success = () => {
  return (
    <div className={styles.container}>
      <div className={styles.successIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#00a854"
        >
          <path d="M9 16.17l-3.59-3.59L4 14l5 5 10-10-1.41-1.42L9 16.17z" />
        </svg>
      </div>
      <h1 className={styles.heading}>Transaction Successful</h1>
      <p className={styles.message}>
        Your payment has been successfully processed.
      </p>
      <div className={styles.nextButtonContainer}>
        <a href="/" className={styles.nextButton}>
          Continue
        </a>
      </div>
    </div>
  );
};

export default Success;
