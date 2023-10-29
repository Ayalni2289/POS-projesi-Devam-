import { Table, Card, Button } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import PrintBill from "../components/bills/PrintBill";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billItems, setBillItems] = useState([]);

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bills/get-all");
        const data = await res.json();
        setBillItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBills();
  }, []);

  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhone",
      key: "customerPhone",
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text)=>{
        return <span>{text.substring(0, 10)}</span>
      }
    },
    {
      title: "Ödeme Yöntemi",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Toplam Tutar",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text)=>{
        return <span>{text}₺</span>
      }
    },
    {
      title: "Açıklama",
      dataIndex: "action",
      key: "action",
      render: (text)=>{
        return <Button type="link" className="pl-0"onClick={() => setIsModalOpen(true)}>Yazdır</Button>
      }
    },
  ];
  return (
    <>
      <Header />
      <div>
        <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
        <Table
          dataSource={billItems}
          columns={columns}
          bordered
          pagination={false}
        />
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default BillPage;
