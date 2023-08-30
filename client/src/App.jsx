import Categories from "./components/categories/categories";
import Header from "./components/header/Header";
import React from "react";
import Products from "./components/products/Products";

function App() {
  return (
    <>
  {/*Header*/}
      <Header />
      <div className="home flex justify-between px-6 gap-10">
  {/*Categories*/}      
        <div className="categories flex-1
                        overflow-auto max-h-[calc(100vh-111px)] pb-6">
          <Categories />
        </div>
  {/*Products*/}
        <div className="products flex-[8]">
          <Products />
        </div>
  {/*Cart*/}
        <div className="cart">
          <div>cart</div>
        </div>
      </div>
    </>
    );
}

export default App;
