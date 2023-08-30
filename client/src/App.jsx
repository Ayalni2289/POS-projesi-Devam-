import Categories from "./components/categories/categories";
import Header from "./components/header/Header";
import React from "react";
import Products from "./components/products/Products";
import Carts from "./components/carts/Carts";

function App() {
  return (
    <>
  {/*Header*/}
      <Header />
      <div className="home flex justify-between px-6 gap-10">
  {/*Categories*/}      
        <div className="categories
                        overflow-auto max-h-[calc(100vh-111px)] pb-6">
          <Categories />
        </div>
  {/*Products*/}
        <div className="products flex-[8]">
          <Products />
        </div>
  {/*Cart*/}
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          < Carts />
        </div>
      </div>
    </>
    );
}

export default App;
