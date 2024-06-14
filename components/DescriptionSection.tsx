"use client";
import Image from "next/image";
import styles from "./DescriptionSection.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { useEffect, useState } from "react";
import { fetchProductCategory } from "@/lib/features/product/productSlice";
import ProductCard from "./ProductCard";

const DescriptionSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product: any = useSelector(
    (state: RootState) => state.productSlice.item
  );

  const category = useSelector(
    (state: RootState) => state.productSlice.category
  );

  useEffect(() => {
    if (product) {
      dispatch(fetchProductCategory(product.category));
    }
  }, [dispatch, product]);

  const categoryToRemove = product?.id;
  const filteredCategories = category.filter((item) => {
    if ("id" in item) {
      return item.id !== categoryToRemove;
    }
  });

  const selectedCategories = filteredCategories.slice(0, 4);

  return (
    <div>
      <div className={styles.description}>
        <h2>Description</h2>
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className={styles.Images}>
        <div className={styles.ImageContainer}>
          <Image
            src="/Description1.png"
            height={300}
            width={200}
            alt="DescriptionImage1"
            className={styles.Image}
          />
        </div>
        <div className={styles.ImageContainer}>
          <Image
            src="/Description2.png"
            height={300}
            width={300}
            alt="DescriptionImage2"
            className={styles.Image}
          />
        </div>
      </div>
      <div className={styles.relatedProducts}>
        <h2>Related Products</h2>
        <div className={styles.relatedProductsContainer}>
          {selectedCategories.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              description={product.description}
              category={product.category}
              sku={product.sku}
              thumbnail={product.thumbnail}
              tags={product.tags}
              reviews={product.reviews}
              title={product.title}
              price={product.price}
              image={product.images[0]}
            />
          ))}
        </div>

        <p className={styles.viewMore}>View More</p>
      </div>
    </div>
  );
};

export default DescriptionSection;
