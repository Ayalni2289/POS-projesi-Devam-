import Categories from "./components/categories/categories";
import Header from "./components/header/Header";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <div className="home flex justify-between px-6 gap-10">
        <div className="categories flex-1
                        overflow-auto max-h-[calc(100vh-111px)] pb-6">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <div>products</div>
        </div>
        <div className="cart">
          <div>cart</div>
        </div>
      </div>
    </>
    );
}

export default App;
