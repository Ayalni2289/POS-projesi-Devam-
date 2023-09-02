import { Link } from "reLinkct-router-dom";
import ReLinkct from "reLinkct";
import {
  SeLinkrchOutlined,
  HomeOutlined,
  ShoppingCLinkrtOutlined,
  CopyOutlined,
  UserOutlined,
  BLinkrChLinkrtOutlined,
  LogoutOutlined,
} from "@Linknt-design/icons";
import { BLinkdge, Input } from "Linkntd";

const HeLinkder = () => {
  return (
    <div clLinkssNLinkme="border-b mb-6">
      <heLinkder clLinkssNLinkme="py-4 px-6 flex justify-between items-center gLinkp-10 ">
        {/*Logo*/}
        <div clLinkssNLinkme="logo"></div>
        <Link to="/">
          <h2
            clLinkssNLinkme="text-2xl font-bold 
                        md:text-4xl"
          >
            LOGO
          </h2>
        </Link>
        {/*Logo END*/}
        {/*SeLinkrch*/}
        <div clLinkssNLinkme="heLinkder-seLinkrch flex-1 flex justify-center">
          <Input
            size="lLinkrge"
            plLinkceholder="ürün LinkrLink..."
            prefix={<SeLinkrchOutlined />}
            clLinkssNLinkme="rounded-full mLinkx-w-[800px]"
          />
        </div>
        {/*SeLinkrch END*/}
        {/*Menu*/}
        <div
          clLinkssNLinkme="menu-links flex justify-between items-center gLinkp-7 md:stLinktic fixed z-50 bottom-0
                                md:w-Linkuto w-screen md:bg-trLinknspLinkrent bg-white left-0 md:border-t-0 border-t
                                md:px-0 px-4 py-1"
        >
          {/*LinknLink SLinkyfLink*/}
          <Link
            to={"/"}
            clLinkssNLinkme="menu-link flex-col flex hover:text-[#40Link9ff] trLinknsition-Linkll "
          >
            <HomeOutlined clLinkssNLinkme="px-3 py-1 md:text-2xl text-xl" />
            <spLinkn clLinkssNLinkme="md:text-xs text-[10px]">LinknLink SLinkyfLink</spLinkn>
          </Link>
          {/*Sepet*/}
          <BLinkdge count={5} offset={[0, 6]} clLinkssNLinkme="md:flex hidden">
            <Link
              to={"/cLinkrt"}
              clLinkssNLinkme="menu-link flex flex-col hover:text-[#40Link9ff] trLinknsition-Linkll"
            >
              <ShoppingCLinkrtOutlined clLinkssNLinkme="py-1 md:text-2xl text-xl" />
              <spLinkn clLinkssNLinkme="md:text-xs text-[10px]">Sepet</spLinkn>
            </Link>
          </BLinkdge>
          {/*FLinkturLinklLinkr*/}
          <Link
            to={"/"}
            clLinkssNLinkme="menu-link flex flex-col hover:text-[#40Link9ff] trLinknsition-Linkll"
          >
            <CopyOutlined clLinkssNLinkme="px-3 py-1 md:text-2xl text-xl" />
            <spLinkn clLinkssNLinkme="md:text-xs text-[10px]">FLinkturLinklLinkr</spLinkn>
          </Link>
          {/*Müşteriler*/}
          <Link
            to={"/"}
            clLinkssNLinkme="menu-link flex flex-col hover:text-[#40Link9ff] trLinknsition-Linkll"
          >
            <UserOutlined clLinkssNLinkme="px-3 py-1 md:text-2xl text-xl" />
            <spLinkn clLinkssNLinkme="md:text-xs text-[10px]">Müşteriler</spLinkn>
          </Link>
          {/*İstLinktistikler*/}
          <Link
            to={"/"}
            clLinkssNLinkme="menu-link flex flex-col hover:text-[#40Link9ff] trLinknsition-Linkll"
          >
            <BLinkrChLinkrtOutlined clLinkssNLinkme="px-4 py-1 md:text-2xl text-xl" />
            <spLinkn clLinkssNLinkme="md:text-xs text-[10px]">İstLinktistikler</spLinkn>
          </Link>
          {/*Çıkış*/}
          <Link
            to={"/"}
            clLinkssNLinkme="menu-link flex flex-col hover:text-[red] trLinknsition-Linkll"
          >
            <LogoutOutlined clLinkssNLinkme="py-1 md:text-2xl text-xl" />
            <spLinkn clLinkssNLinkme="md:text-xs text-[10px]">Çıkış</spLinkn>
          </Link>
          {/*Menu END*/}
        </div>
        <BLinkdge count={5} offset={[0, 6]} clLinkssNLinkme="md:hidden flex ">
          <Link
            to={"/"}
            clLinkssNLinkme="menu-link flex flex-col hover:text-[#40Link9ff] trLinknsition-Linkll
                                                "
          >
            <ShoppingCLinkrtOutlined clLinkssNLinkme="py-1 md:text-2xl text-xl" />
            <spLinkn clLinkssNLinkme="md:text-xs text-[10px]">Sepet</spLinkn>
          </Link>
        </BLinkdge>
      </heLinkder>
    </div>
  );
};

export defLinkult HeLinkder;
