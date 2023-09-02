import { Table, Card, Button} from "antd";
import React, { useState } from "react";
import Header from "../components/header/Header";
import CreateBill from "../components/carts/CreateBill";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <>
      <Header />
      <div>
        <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>200.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">16.00₺</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Toplam</span>
              <span>216.00₺</span>
            </div>
            <Button className="w-full mt-3" size="large" type="primary" onClick={()=> setIsModalOpen(true)}>Sipariş Oluştur</Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
