"use client";
import { selectSubtotal } from "@/lib/features/cartSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartTable.module.scss";
import Image from "next/image";

const CartTable = () => {
  const cart: any = useSelector((state: RootState) => state.cartSlice.items);
  const dispatch = useDispatch<AppDispatch>();
  var subtotal = useSelector((state: RootState) => selectSubtotal(state));
  var subtotal = parseFloat(subtotal.toFixed(2));

  return (
    <div>
      <table>
        <thead>
          <tr className={styles.tableHead}>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item: any) => (
            <tr className={styles.tableBody}>
              <td className={styles.tableBodyProduct}>
                <div className={styles.cartImageContainer}>
                  <Image
                    className={styles.cartImage}
                    src={item.image}
                    width={70}
                    height={70}
                    alt="CartImage"
                  />
                </div>
                <p>{item.title}</p>
              </td>
              <td>
                <p>Rs{item.price}</p>
              </td>
              <td className={styles.tableBodyQty}>{item.quantity}</td>

              <td>
                <Trash fill="#fff9e5" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
