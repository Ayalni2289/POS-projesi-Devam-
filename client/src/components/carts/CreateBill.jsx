import { Modal, Button, Form, Input, Select, Card } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout="vertical" onFinish={onFinish}>
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
          name={"phoneNumber"}
          rules={[{ required: true, message: "Telefon Numarası Zorunludur !" }]}
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
          <div className="flex justify-between p-2">
            <p>Ara Toplam</p>
            <span>200₺</span>
          </div>
          {/*KDV */}
          <div className="flex justify-between p-2">
            <p>KDV %8</p>
            <span className="text-red-700">+16₺</span>
          </div>
          {/*Genel Toplam*/}
          <div className="flex justify-between p-2">
            <b className="text-lg">Genel Toplam</b>
            <b className="text-lg leading-none">216₺</b>
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
