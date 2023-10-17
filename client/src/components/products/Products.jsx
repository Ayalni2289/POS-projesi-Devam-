import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import Add from "./Add";

const Products = ({categories}) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
    <div className="products-wrapper grid gap-4 grid-cols-card">
      {products.map((item) => (
        <ProductItem key={item._id} item={item} />
      ))}
      <div
        className="product-item border hover:shadow-lg
       cursor-pointer transition-all select-none
       bg-fuchsia-700 flex justify-center items-center hover:opacity-80"
       onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="text-white md:text-4xl" />
      </div>
      <div
        className="product-item border hover:shadow-lg
       cursor-pointer transition-all select-none
       bg-orange-700 flex justify-center items-center hover:opacity-80"
      >
        <EditOutlined className="text-white md:text-4xl" />
      </div>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default Products;
