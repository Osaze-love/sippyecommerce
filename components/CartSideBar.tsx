"use client";
import { AppDispatch, RootState } from "@/lib/store";
import { ChevronLeft, CircleX, WalletCards } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartSideBar.module.scss";
import { deleteCartItem, selectSubtotal } from "@/lib/features/cartSlice";

const CartSideBar = ({
  setOpenCart,
}: {
  setOpenCart: (open: boolean) => void;
}) => {
  const cart: any = useSelector((state: RootState) => state.cartSlice.items);
  const dispatch = useDispatch<AppDispatch>();
  var subtotal = useSelector((state: RootState) => selectSubtotal(state));
  var subtotal = parseFloat(subtotal.toFixed(2));

  return (
    <div className={styles.cartSidebar}>
      <div
        onClick={() => {
          setOpenCart(false);
          document.body.classList.remove("modal-open");
        }}
        className={styles.sidebarTop}
      >
        <div className={styles.sidebarHead}>
          <ChevronLeft />
          <h3>Shopping Cart</h3>
        </div>

        <WalletCards />
      </div>
      <div>
        {cart.map((item: any) => (
          <div className={styles.cartMain} key={item.id}>
            <div className={styles.cartImageContainer}>
              <Image
                className={styles.cartImage}
                src={item.image}
                width={70}
                height={70}
                alt="CartImage"
              />
            </div>

            <div className={styles.cartContent}>
              <h3>{item.title}</h3>
              <p>
                {item.quantity}
                <span>X</span>
                Rs {item.price}
              </p>
            </div>

            <CircleX
              onClick={() => {
                dispatch(
                  deleteCartItem({
                    id: item.id,
                    image: item.image,
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity,
                  })
                );
              }}
              size={20}
              className={styles.deleteIcon}
            />
          </div>
        ))}
      </div>
      <div className={styles.cartSidebarBottom}>
        <div className={styles.cartSidebarBottomFirst}>
          <p>Subtotal</p>
          <p>Rs {subtotal}</p>
        </div>
        <div className={styles.cartSidebarBottomButtons}>
          <p>View Cart</p>
          <p className={styles.p2}>Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
