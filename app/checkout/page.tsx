import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import CheckoutDetails from "@/components/CheckoutDetails";
import FormPage from "@/components/FormPage";
import React from "react";
import styles from "./page.module.scss";

const checkout = () => {
  return (
    <div>
      <Banner pageName="Checkout" />
      <div className={styles.checkoutpage}>
        <FormPage />
        <CheckoutDetails />
      </div>
      <Benefits />
    </div>
  );
};

export default checkout;
