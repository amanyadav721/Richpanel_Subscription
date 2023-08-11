import { Component } from "react";
import { useLocation } from "react-router-dom";

class Payment extends Component {
render(){
  const location = useLocation();
  console.log(location.state);
  const { activePlan, isYearlyBilling } = location.state || {};

  return (
    <div>
      <h2>Payment Information</h2>
      <p>Selected Plan: {activePlan}</p>
      <p>Billing Cycle: {isYearlyBilling ? "Yearly" : "Monthly"}</p>
      {/* Additional payment-related information can be displayed here */}
    </div>
  );
  }
}

export default Payment;
