import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import CartTable from "@/components/CartTable";
import styles from "./page.module.scss";
import CartTool from "@/components/CartTool";

const page = () => {
  return (
    <div>
      <Banner pageName="Cart" />
      <div className={styles.cartPage}>
        <CartTable />
        <CartTool />
      </div>
      <Benefits />
    </div>
  );
};

export default page;
