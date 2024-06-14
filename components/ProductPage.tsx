"use client";
import { AppDispatch, RootState } from "@/lib/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductPage.module.scss";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { addCartItem } from "@/lib/features/cartSlice";
import CartSideBar from "./CartSideBar";

const ProductPage = () => {
  const product: any = useSelector(
    (state: RootState) => state.productSlice.item
  );
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);
  const [openCart, setOpenCart] = useState(false);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const addToCart = () => {
    dispatch(
      addCartItem({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity: quantity,
      })
    );
    window.scrollTo(0, 0);
    setOpenCart(true);
    document.body.classList.add("modal-open");
  };
  return (
    <div>
      {openCart && (
        <>
          <div className={styles.overlay}></div>
          <CartSideBar setOpenCart={setOpenCart} />
        </>
      )}
      <div className={styles.productTop}>
        <div className={styles.productTopSpan}>
          <p>Home</p> <span>{">"}</span>
        </div>
        <div className={styles.productTopSpan}>
          <p>Shop</p> <span>{">"}</span>
        </div>
        <p className={styles.productTopTitle}>{product.title}</p>
      </div>
      <div className={styles.productContent}>
        <div className={styles.productContentImageContainer}>
          <Image
            src={product?.image}
            height={450}
            width={450}
            alt="productImage"
            className={styles.productContentImage}
          />
        </div>
        <div className={styles.productContentText}>
          <h2>{product?.title} </h2>
          <p className={styles.productContentPrice}>Rs {product?.price}</p>
          <p className={styles.productContentReview}>
            Customer review {product?.reviews?.length}
          </p>
          <p className={styles.productContentDesc}>{product.description}</p>
          <div>
            <div className={styles.productContentSize}>
              <p>Size</p>
              <span>
                <p className={styles.one}>L</p>
                <p>XL</p>
                <p>XS</p>
              </span>
            </div>
          </div>
          <div className={styles.productContentColor}>
            <p>Color</p>
            <span>
              <p className={styles.one}></p>
              <p className={styles.two}></p>
              <p className={styles.three}></p>
            </span>
          </div>
          <div className={styles.productContentButtons}>
            <div className={styles.productContentButtonCount}>
              <button onClick={decreaseQuantity}>-</button>
              <div>{quantity}</div>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <span>
              <div onClick={() => addToCart()}>Add To Cart</div>
            </span>
          </div>
          <hr className={styles.hr} />
          <div className={styles.productContentTextLast}>
            <div className={styles.productContentDiv}>
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>
            <div className={styles.productContentDiv}>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className={styles.productContentDiv}>
              <p>{product.sku}</p>
              <p>{product.category}</p>
              <p className={styles.productTag}>
                {product?.tags?.map((tag: string) => <p key={tag}>{tag},</p>)}
              </p>
              <p>
                <Facebook size={20} /> <Instagram size={20} />{" "}
                <Twitter size={20} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
