import Categories from "../components/categories/categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";
import Carts from "../components/carts/Carts";

const HomePage = () => {
  return (
    <>
    {/*Header*/}
    <Header />
    <div className="home flex justify-between flex-col md:flex-row px-6 gap-10 md:pb-0 pb-16">
{/*Categories*/}      
      <div className="categories
                      overflow-auto max-h-[calc(100vh-111px)] pb-6">
        <Categories />
      </div>
{/*Products*/}
      <div className="products flex-[8] max-h-[calc(100vh-111px)] overflow-auto pb-6">
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

export default HomePage;