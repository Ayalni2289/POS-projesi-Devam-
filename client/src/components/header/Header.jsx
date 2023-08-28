import React from "react";
import { SearchOutlined,HomeOutlined,ShoppingCartOutlined,CopyOutlined,UserOutlined,BarChartOutlined,LogoutOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Header = () => {
    return (
       <div className="border-b mb-6">
            <header className="py-4 px-6 flex justify-between items-center gap-10 ">
    {/*Logo*/}
                <div className="logo"></div>
                    <a href="/">
                        <h2 className="text-2xl font-bold 
                        md:text-4xl ">LOGO</h2>
                    </a>
    {/*Logo END*/}
    {/*Search*/}
                <div className="header-search flex-1 ">
                    <Input size="large"
                     placeholder="ürün ara..." 
                     prefix={<SearchOutlined />}
                     className="rounded-full max-w-[800px]"
                     />
                </div>
    {/*Search END*/}
    {/*Menu*/}
                <div className="menu-links flex justify-between items-center gap-8">
    {/*Ana Sayfa*/}
                        <a href={"/"} className="menu-link flex-col flex ">
                            <HomeOutlined  className="px-3 py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
                        </a>
    {/*Sepet*/}
                        <a href={"/"} className="menu-link flex flex-col">
                            <ShoppingCartOutlined   className="py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Sepet</span>
                        </a>
    {/*Faturalar*/}
                        <a href={"/"} className="menu-link flex flex-col">
                            <CopyOutlined    className="px-3 py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Faturalar</span>
                        </a>
    {/*Müşteriler*/}
                        <a href={"/"} className="menu-link flex flex-col">
                            <UserOutlined   className="px-3 py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Müşteriler</span>
                        </a>
    {/*İstatistikler*/}
                        <a href={"/"} className="menu-link flex flex-col">
                            <BarChartOutlined   className="px-4 py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">İstatistikler</span>
                        </a>
    {/*Çıkış*/}
                        <a href={"/"} className="menu-link flex flex-col">
                            <LogoutOutlined   className="py-2 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Çıkış</span>
                        </a>
    {/*Menu END*/}
                </div>
            </header>
       </div>
);
}

export default Header;