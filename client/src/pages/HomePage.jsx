import { useEffect, useState } from "react";
import Categories from "../components/categories/categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";
import Carts from "../components/carts/Carts";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/categories/get-category"
        );
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/products/get-product"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      {/*Header*/}
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 h-screen">
        {/*Categories*/}
        <div
          className="categories
                      overflow-auto max-h-[calc(100vh-111px)] pb-6"
        >
          <Categories
            categories={categories}
            setCategories={setCategories}
            setFiltered={setFiltered}
            products={products}
          />
        </div>
        {/*Products*/}
        <div className="products flex-[8] max-h-[calc(100vh-111px)] overflow-auto pb-6 min-h-[500px]">
          <Products
            setProducts={setProducts}
            categories={categories}
            filtered={filtered}
            products={products}
          />
        </div>
        {/*Cart*/}
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <Carts />
        </div>
      </div>
    </>
  );
};

export default HomePage;
