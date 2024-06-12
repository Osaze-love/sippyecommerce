"use client";

import Image from "next/image";
import styles from "./ProductCard.module.scss";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/lib/store";
import { useDispatch } from "react-redux";
import { addProduct } from "@/lib/features/product/productSlice";
const ProductCard = ({
  id,
  description,
  category,
  sku,
  thumbnail,
  tags,
  reviews,
  title,
  price,
  image,
}: {
  id: number;
  description: string;
  category: string;
  sku: string;
  thumbnail: string;
  tags: [];
  reviews: [];
  title: string;
  price: number;
  image: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const addActiveProduct = () => {
    dispatch(
      addProduct({
        id,
        description,
        category,
        sku,
        thumbnail,
        tags,
        reviews,
        title,
        price,
        image,
      })
    );
    router.push("/product");
  };
  return (
    <div onClick={() => addActiveProduct()} className={styles.productContainer}>
      <Image
        className={styles.productImage}
        src={image}
        height={200}
        width={200}
        alt="productImage"
      />

      <p>{title}</p>
      <h2>Rs. {price}</h2>
    </div>
  );
};

export default ProductCard;
