import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

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
        <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
          <div className="product-img">
            <img
              src="https://img.piri.net/resim/upload/2020/09/26/12/21/24191133elma.jpg"
              alt="elma.png"
              title="elma"
              className="h-28 object-cover w-full border-b"
            />
          </div>
          <div className="product-info flex flex-col p-3">
            <span className="font-bold">{item.title}</span>
            <span>{item.price}₺</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
