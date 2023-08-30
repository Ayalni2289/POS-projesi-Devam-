import { Button } from "antd"
import { ClearOutlined } from "@ant-design/icons"

const Carts = () => {
    return (
        <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
            <h2 className="bg-blue-600 text-center py-4
                       text-white font-bold tracking-wide">Sepetim</h2>
            <div className="cart-items">
                <div className="cart-item">cart items</div>
            </div>
            <div className="cart-totals mt-auto"></div>
            <div className="border-t border-b mt-4">

                <div className="flex justify-between p-2">
                    <b>Ara Toplam</b>
                    <span>100₺</span>
                </div>

                <div className="flex justify-between p-2">
                    <b>KDV %8</b>
                    <span className="text-red-700">+8₺</span>
                </div>

                <div className="flex justify-between p-2 border-b">
                    <b className="text-xl text-green-500">Genel Toplam</b>
                    <span className="text-xl leading-none">108₺</span>
                </div>
                <div className="py-4 px-2">
                    <Button type="primary" size="large" className="w-full">
                    Sipariş Oluştur
                    </Button>
                    <Button
                    type="primary" size="large"
                    className="w-full mt-2 flex items-center justify-center" danger
                    icon={<ClearOutlined />}
                    >Temizle
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Carts;