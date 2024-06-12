import styles from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <main className={styles.benefitContainer}>
      <div>
        <h2>Free Delivery</h2>
        <p>For all oders over $50, consectetur adipim scing elit.</p>
      </div>
      <div>
        <h2>90 Days Return</h2>
        <p>If goods have problems, consectetur adipim scing elit.</p>
      </div>
      <div>
        <h2>Secure Payment</h2>
        <p>100% secure payment, consectetur adipim scing elit.</p>
      </div>
    </main>
  );
};

export default Benefits;
