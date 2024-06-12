import styles from "./page.module.scss";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Benefits from "@/components/Benefits";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=12");

  return res.json();
};

type productType = {
  id: number;
  description: string;
  category: string;
  sku: string;
  thumbnail: string;
  tags: [];
  reviews: [];
  title: string;
  price: number;
  images: string;
};

export default async function Page() {
  const Products = await getProducts();

  return (
    <>
      <Banner pageName="Shop" />
      <div className="productsContainer">
        {Products.products.map((product: productType) => (
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

      <Benefits />
    </>
  );
}
