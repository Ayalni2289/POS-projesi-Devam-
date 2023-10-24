import { Link } from "react-router-dom";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Input, Badge } from "antd";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart.cartItems.length);

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10 ">
        {/*Logo*/}
        <div className="logo"></div>
        <Link to="/">
          <h2
            className="text-2xl font-bold 
                        md:text-4xl"
          >
            LOGO
          </h2>
        </Link>
        {/*Logo END*/}
        {/*Search*/}
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="ürün ara..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        {/*Search END*/}
        {/*Menu*/}
        <div
          className="menu-as flex justify-between items-center gap-7 md:static fixed z-50 bottom-0
                                md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t
                                md:px-0 px-4 py-1"
        >
          {/*ana Sayfa*/}
          <Link
            to={"/"}
            className="menu-a flex-col flex hover:text-[#40a9ff] transition-all "
          >
            <HomeOutlined className="px-3 py-1 md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">
              Ana Sayfa
            </span>
          </Link>
          {/*Sepet*/}
          <Badge count={cart.cartItems.length} offset={[0, 6]} className="md:flex hidden">
            <Link
              to={"/cart"}
              className="menu-a flex flex-col hover:text-[#40a9ff] transition-all"
            >
              <ShoppingCartOutlined className="py-1 md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Sepet</span>
            </Link>
          </Badge>
          {/*Faturalar*/}
          <Link
            to={"/bill"}
            className="menu-a flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <CopyOutlined className="px-3 py-1 md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">
              Faturalar
            </span>
          </Link>
          {/*Müşteriler*/}
          <Link
            to={"/customers"}
            className="menu-a flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <UserOutlined className="px-3 py-1 md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">
              Müşteriler
            </span>
          </Link>
          {/*İstatistikler*/}
          <Link
            to={"/statistics"}
            className="menu-a flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <BarChartOutlined className="px-4 py-1 md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">
              İstatistikler
            </span>
          </Link>
          {/*Çıkış*/}
          <Link
            to={"/"}
            className="menu-a flex flex-col hover:text-[red] transition-all"
          >
            <LogoutOutlined className="py-1 md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </Link>
          {/*Menu END*/}
        </div>
        <Badge count={5} offset={[0, 6]} className="md:hidden flex ">
          <Link
            to={"/"}
            className="menu-a flex flex-col hover:text-[#40a9ff] transition-all
                                                "
          >
            <ShoppingCartOutlined className="py-1 md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
