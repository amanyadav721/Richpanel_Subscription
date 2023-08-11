/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "../../../styles/Subscription.module.css";
import axios from "axios";

export const subscriptionPlans = [
  {
    id: "mobil1",
    name: "Mobile",
    monthlyPrice: 100,
    videoquality: "Good",
    resolution: "480p",
    devices: "Phone Tablet",
    yearlyPrice: 1000,
  },
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 200,
    videoquality: "Good",
    resolution: "480p",
    devices: "Phone Tablet Computer TV",
    yearlyPrice: 2000,
  },
  {
    id: "standard",
    name: "Standard",
    monthlyPrice: 500,
    videoquality: "Better",
    resolution: "1080p",
    devices: "Phone Tablet Computer TV",
    yearlyPrice: 5000,
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 700,
    videoquality: "Best",
    resolution: "4K+HDR",
    devices: "Phone Tablet Computer TV",
    yearlyPrice: 7000,
  },
];

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlan: "basic",
      isYearlyBilling: false,
    };
  }

  handlePlanClick = (plan) => {
    this.setState({ activePlan: plan });
  };

  handleBillingToggle = () => {
    this.setState((prevState) => ({
      isYearlyBilling: !prevState.isYearlyBilling,
    }));
  };
  render() {
    const { activePlan, isYearlyBilling } = this.state;
    const checkout = async () => {
      try {
        const selectedPlan = subscriptionPlans.find(
          (plan) => plan.id === activePlan
        );
        const savedUser = JSON.parse(localStorage.getItem("user"));
        const savedToken = localStorage.getItem("token");
        const requestData = {
          email: savedUser.email,
          plan: {
            id: selectedPlan.id,
            name: selectedPlan.name,
            type: isYearlyBilling ? "year" : "month",
            price: isYearlyBilling
              ? selectedPlan.yearlyPrice
              : selectedPlan.monthlyPrice,
          },
        };

        const headers = {
          "Content-Type": "application/json",
          Authorization: savedToken,
        };

        const response = await axios.post(
          "https://richpannel.onrender.com/auth/payment",
          requestData,
          { headers: headers }
        );
        console.log(response);
        const { url } = response.data;
        this.props.navigate(url);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div>
        <div className={styles.billingToggleContainer}>
          <div className={styles.billingToggle}>
            <div
              className={`${styles.toggleButton} ${
                isYearlyBilling ? styles.active : ""
              }`}
              onClick={() => this.handleBillingToggle(true)}
            >
              <span
                className={`${styles.toggleText} ${
                  isYearlyBilling ? styles.active : ""
                }`}
              >
                Yearly
              </span>
            </div>
            <div
              className={`${styles.toggleButton} ${
                !isYearlyBilling ? styles.active : ""
              }`}
              onClick={() => this.handleBillingToggle(false)}
            >
              <span
                className={`${styles.toggleText} ${
                  !isYearlyBilling ? styles.active : ""
                }`}
              >
                Monthly
              </span>
            </div>
          </div>
        </div>
        <div className={styles.subscriptionPlans}>
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.planButton} ${
                activePlan === plan.id ? styles.active : ""
              }`}
              onClick={() => this.handlePlanClick(plan.id)}
            >
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.planPrice}>
                {isYearlyBilling ? plan.yearlyPrice : plan.monthlyPrice}
              </div>
              <div className={styles.planName}>{plan.resolution}</div>
              <div className={styles.planName}>{plan.videoquality}</div>
              <div className={styles.planName}>{plan.devices}</div>
            </div>
          ))}
        </div>
        <div className={styles.nextButtonContainer}>
          <a onClick={checkout} className={styles.nextButton}>
            Next{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Subscription;
