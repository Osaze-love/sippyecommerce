"use client";
import { useSelector } from "react-redux";
import styles from "./CartTool.module.scss";
import { RootState } from "@/lib/store";
import { selectSubtotal } from "@/lib/features/cartSlice";
import { useRouter } from "next/navigation";

const CartTool = () => {
  var subtotal = useSelector((state: RootState) => selectSubtotal(state));
  var subtotal = parseFloat(subtotal.toFixed(2));
  const router = useRouter();
  return (
    <div className={styles.cartTool}>
      <h2>Cart Totals</h2>
      <div className={styles.cartToolTotal}>
        <p>Total</p>
        <p>Rs. {subtotal}</p>
      </div>
      <div
        onClick={() => {
          router.push("/checkout");
        }}
        className={styles.cartToolBtn}
      >
        Checkout
      </div>
    </div>
  );
};

export default CartTool;
