import React from "react";
import { SearchOutlined,HomeOutlined,ShoppingCartOutlined,CopyOutlined,UserOutlined,BarChartOutlined,LogoutOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';

const Header = () => {
    return (
       <div className="border-b mb-6">
            <header className="py-4 px-6 flex justify-between items-center gap-10 ">
    {/*Logo*/}
                <div className="logo"></div>
                    <a href="/">
                        <h2 className="text-2xl font-bold 
                        md:text-4xl">LOGO</h2>
                    </a>
    {/*Logo END*/}
    {/*Search*/}
                <div className="header-search flex-1 flex justify-center">
                    <Input size="large"
                     placeholder="ürün ara..." 
                     prefix={<SearchOutlined />}
                     className="rounded-full max-w-[800px]"
                     />
                </div>
    {/*Search END*/}
    {/*Menu*/}
                <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0
                                md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t
                                md:px-0 px-4 py-1">
    {/*Ana Sayfa*/}
                        <a href={"/"} className="menu-link flex-col flex hover:text-[#40a9ff] transition-all ">
                            <HomeOutlined  className="px-3 py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
                        </a>
    {/*Sepet*/}
                    <Badge count={5} offset={[0,6]} className="md:flex hidden">
                        <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                            <ShoppingCartOutlined   className="py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Sepet</span>
                        </a>
                    </Badge>
    {/*Faturalar*/}
                        <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                            <CopyOutlined    className="px-3 py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Faturalar</span>
                        </a>
    {/*Müşteriler*/}
                        <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                            <UserOutlined   className="px-3 py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Müşteriler</span>
                        </a>
    {/*İstatistikler*/}
                        <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                            <BarChartOutlined   className="px-4 py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">İstatistikler</span>
                        </a>
    {/*Çıkış*/}
                        <a href={"/"} className="menu-link flex flex-col hover:text-[red] transition-all">
                            <LogoutOutlined   className="py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Çıkış</span>
                        </a>
    {/*Menu END*/}
                </div>
                <Badge count={5} offset={[0,6]} className="md:hidden flex ">
                        <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff] transition-all
                                                ">
                            <ShoppingCartOutlined   className="py-1 md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Sepet</span>
                        </a>
                </Badge>
            </header>
       </div>
);
}

export default Header;