import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import CartTable from "@/components/CartTable";

const page = () => {
  return (
    <div>
      <Banner pageName="Cart" />
      <div>
        <CartTable />
        <div></div>
      </div>
      <Benefits />
    </div>
  );
};

export default page;
