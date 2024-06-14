"use client";
import { useSelector } from "react-redux";
import styles from "./CheckoutDetails.module.scss";
import { RootState } from "@/lib/store";
import { selectSubtotal } from "@/lib/features/cartSlice";

const CheckoutDetails = () => {
  const cart: any = useSelector((state: RootState) => state.cartSlice.items);
  var subtotal = useSelector((state: RootState) => selectSubtotal(state));
  var subtotal = parseFloat(subtotal.toFixed(2));
  return (
    <div className={styles.checkoutDetails}>
      <div className={styles.checkoutHead}>
        <h2>Product</h2>
        <h2>Subtotal</h2>
      </div>
      {cart.map((item: any) => (
        <div className={styles.checkoutProductDetails}>
          <p>
            {item.title}
            <span>X</span>
            {item.quantity}
          </p>
          <p>{item.price}</p>
        </div>
      ))}
      <div className={styles.checkoutTotal}>
        <p>Total</p>
        <p>Rs{subtotal}</p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.checkoutBank}>
        <p>Direct Bank Transfer</p>
        <p>
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <div className={styles.checkoutmode}>
          <p>Direct Bank Transfer</p>
          <p>Pay on Delivery</p>
        </div>
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <span className={styles.privacy}>privacy policy</span>.
        </p>

        <div className={styles.orderBtn}>Place Order</div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
