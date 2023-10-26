import { Button } from "antd";
import { ClearOutlined, PlusCircleOutlined,MinusCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";

const Carts = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch= useDispatch()

  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2
        className="bg-blue-600 text-center py-4
                       text-white font-bold tracking-wide"
      >
        Sepetim
      </h2>
      {/*Sepet İçeriği*/}
      <ul
        className="cart-items px-2 flex flex-col gap-y-3 pt-2
                           overflow-y-auto "
      >
        {cartItems.map((item) => (
          <li className="cart-item flex justify-between" key={item._id}>
            <div className="flex items-center">
              <img src={item.img} alt="" className="w-16 h-16 object-cover cursor-pointer"
                onClick={()=> dispatch(deleteCart(item))} />
              <div className="flex flex-col ml-2">
                <b>{item.title}</b>
                <span>{item.price}₺ x {item.quantity}</span>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />
              <span className="font-bold">{item.quantity}</span>
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-totals mt-auto"></div>
      <div className="border-t border-b mt-4">
        {/*Ara Toplam */}
        <div className="flex justify-between p-2">
          <b>Ara Toplam</b>
          <span>100₺</span>
        </div>
        {/*KDV */}
        <div className="flex justify-between p-2">
          <b>KDV %8</b>
          <span className="text-red-700">+8₺</span>
        </div>
        {/*Genel Toplam*/}
        <div className="flex justify-between p-2 border-b">
          <b className="text-xl text-green-500">Genel Toplam</b>
          <span className="text-xl leading-none">108₺</span>
        </div>
        {/*Sipariş Oluştur ve Temizle Butonları*/}
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            danger
            icon={<ClearOutlined />}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
