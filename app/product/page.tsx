import Image from "next/image";
import ProductPage from "@/components/ProductPage";
import styles from "./page.module.scss";
import DescriptionSection from "@/components/DescriptionSection";

const pages = () => {
  return (
    <div>
      <ProductPage />
      <DescriptionSection />
    </div>
  );
};

export default pages;
