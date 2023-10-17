import { Form, Table, Input, Button, message } from "antd";
import React, { useEffect, useState } from "react";

const Edit = ({
  isEditModalOpen,
  setIsEditModalOpen,
  categories,
  setCategories,
}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await fetch(
              "http://localhost:5000/api/products/get-product"
            );
            const data = await res.json();
            setProducts(data);
          } catch (error) {
            console.log(error);
          }
        };
        getProducts();
      }, []);
    
  //ONFINISH
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ ...values }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori Başarıyla Güncellendi");
      setCategories(
        categories.map((item) => {
          return item;
        })
      );
    } catch (error) {
      message.error("Bir şeyler ters gitti");
      console.log(error);
    }
  };

  //DELETE
  const deleteCategories = (id) => {
    if(window.confirm("Emin Misiniz ?")){
        try {
            fetch("http://localhost:5000/api/categories/delete-category", {
              method: "DELETE",
              body: JSON.stringify({ categoryId: id }),
              headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Kategori Başarıyla Silindi");
            setCategories(categories.filter((item) => item._id !== id));
          } catch (error) {
            message.error("Bir şeyler ters gitti");
            console.log(error);
          }
    }
  };
  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "title",
      width: "8%",
      render: (_, record) => {
          return <p>{record.title}</p>;
      },
    },
    {
        title: "Ürün Görseli",
        dataIndex: "img",
        width: "4%",
        render: (_, record) => {
            return <img src={record.img} className="w-full h-20 object-cover"></img>;
        },
    },
    {
        title: "Ürün Fiyatı",
        dataIndex: "price",
        width: "8%",
    },
    {
        title: "Kategori",
        dataIndex: "category",
        width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (_, record) => {
        return (
          <div className="">
            <Button
              type="link"
              className="pl-0"
            >
              Düzenle
            </Button>
            <Button type="text" htmlType="submit" className="text-gray-500">
              Kaydet
            </Button>
            <Button
              type="text"
              danger
              onClick={() => deleteCategories(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  return (
      <Form onFinish={onFinish}>
        <Table
          bordered
          dataSource={products}
          columns={columns}
          rowKey={"_id"}
          scroll={{x: 1000, y: 500}}
        />
      </Form>
  );
};

export default Edit;
