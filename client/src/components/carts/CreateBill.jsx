import { Modal, Button, Form, Input, Select, Card, message } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";


const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async(values) => {
    try {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/bills/add-bill", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          subTotal: cart.total,
          totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
          tax: ((cart.total * cart.tax) / 100).toFixed(2),
          cartItems: cart.cartItems,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"},
      });
      if(res.status === 200){
        message.success("Fatura Oluşturuldu.");
        dispatch(reset());
        navigate("/bill");
      }
    } catch (error) {
      message.error("Fatura Oluşturulamadı.");
      console.log(error);
    }

  };
  
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        {/*Müşteri Adı */}
        <Form.Item
          label="Müşteri Adı"
          name={"customerName"}
          rules={[{ required: true, message: "Müşteri Adı Zorunludur !" }]}
          tooltip="Bu alan zorunludur."
        >
          <Input placeholder="Müşteri Adı..." />
        </Form.Item>
        {/*Telefon Numarası */}
        <Form.Item
          label="Telefon Numarası"
          name={"customerPhone"}
          rules={[{ required: true, whitespace:false, type:"number", len:10, message: "Telefon Numarası Zorunludur !" }]}
          tooltip="Bu alan zorunludur."
        >
          <Input placeholder="Telefon Numarası..." maxLength={10} />
        </Form.Item>
        {/*Ödeme Yöntemi */}
        <Form.Item
          label="Ödeme Yöntemi"
          name={"paymentMethod"}
          rules={[{ required: true, message: "Ödeme Yöntemi Seçiniz !" }]}
          required
        >
          <Select
            placeholder="Ödeme Yöntemi Seçiniz"
            options={[
              { value: "Nakit", label: "Nakit" },
              { value: "Kart", label: "Kart" },
            ]}
          />
        </Form.Item>
        <Card>
        <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV %8</span>
              <span className="text-red-600">{(cart.total * cart.tax) / 100 > 0
              ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
              : 0}₺</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Toplam</span>
              <span> {cart.total + (cart.total * cart.tax) / 100 > 0
              ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
              : 0}₺</span>
            </div>
          <div className="flex justify-end">
            <Button
            type="primary"
            className="mt-4"
            onClick={() => setIsModalOpen(true)} 
            htmlType="submit"
             >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
