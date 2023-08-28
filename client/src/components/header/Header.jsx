import React from "react";

const Header = () => {
    return (
       <div className="border-b mb-6">
            <header className="py-4 px-6">
                <div className="logo"></div>
                <a href="/">
                    <h2 className="text-2xl font-bold 
                    md:text-4xl">LOGO</h2>
                </a>
                <div className="header-search"></div>
                <div className="menu-links"></div>
            </header>
       </div>
);
}

export default Header;