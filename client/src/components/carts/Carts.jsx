import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart, increase, decrease } from "../../redux/cartSlice";

const Carts = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
        {cart.cartItems.length > 0 ? cart.cartItems.map((item) => (
          <li className="cart-item flex justify-between" key={item._id}>
            <div className="flex items-center">
              <img
                src={item.img}
                alt=""
                className="w-16 h-16 object-cover cursor-pointer"
                onClick={() => dispatch(deleteCart(item))}
              />
              <div className="flex flex-col ml-2">
                <b>{item.title}</b>
                <span>
                  {item.price}₺ x {item.quantity}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
                onClick={() => dispatch(increase(item))}
              />
              <span className="font-bold w-6 inline-block text-center">{item.quantity}</span>
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
                onClick={() => {
                    if(item.quantity === 1){
                        if(window.confirm("Ürünü silmek istediğinize emin misiniz?")){
                            dispatch(deleteCart(item))
                        }
                    }
                    if(item.quantity > 1){
                        dispatch(decrease(item))
                    }
                }}
              />
            </div>
          </li>
        )) : "Sepette Hiç Ürün Bulunamadı."}
      </ul>
      <div className="cart-totals mt-auto"></div>
      <div className="border-t border-b mt-4">
        {/*Ara Toplam */}
        <div className="flex justify-between p-2">
          <b>Ara Toplam</b>
          <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</span>
        </div>
        {/*KDV */}
        <div className="flex justify-between p-2">
          <b>KDV %{cart.tax}</b>
          <span className="text-red-700">
            {(cart.total * cart.tax) / 100 > 0
              ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
              : 0}
            ₺
          </span>
        </div>
        {/*Genel Toplam*/}
        <div className="flex justify-between p-2 border-b">
          <b className="text-xl text-green-500">Genel Toplam</b>
          <span className="text-xl leading-none">
            {cart.total + (cart.total * cart.tax) / 100 > 0
              ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
              : 0}
            ₺
          </span>
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
