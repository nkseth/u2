import React from "react";
import SubsCard from "./Subs-Card/card";
import styles from "./index.module.scss";

export default function SelectedSubscriptionPlans({ data }) {
  return (
    <div className={styles.container}>
      <div>
        <span>Selected Subscription Plan</span>
        {/* here map through the SubsCard */}
        <SubsCard />
      </div>
    </div>
  );
}
