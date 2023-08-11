/* eslint-disable react/prop-types */
import styles from "../../../styles/Subscription.module.css";

function Plan(props) {
  return (
    <div className={styles.subscription} id={props.id}>
      <h3>{props.id}</h3>
      <span className={styles.price_show__price}>{props.price}</span>
      <span className={styles.price}>{props.price}</span>
      
      <button>Select Plan</button>
    </div>
  );
}
export default Plan;
