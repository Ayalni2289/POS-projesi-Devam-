import { Form, Table, Input, Button, message, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";

const Edit = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingItem, seteditingItem] = useState({})
    const [form] = Form.useForm();

    console.log(editingItem);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await fetch(
              process.env.REACT_APP_SERVER_URL + "/api/products/get-product"
            );
            const data = await res.json();
            setProducts(data);
          } catch (error) {
            console.log(error);
          }
        };
        getProducts();
      }, []);

      useEffect(() => {
        const getCategories = async () => {
          try {
            const res = await fetch(
              process.env.REACT_APP_SERVER_URL + "/api/categories/get-category"
            );
            const data = await res.json();
            data &&
            setCategories(
            data.map((item)=> {
              return {...item, value: item.title};
            })
          );
          } catch (error) {
            console.log(error);
          }
        };
        getCategories();
      }, []);
    
  //ONFINISH
  const onFinish = (values) => {
    try {
      fetch(process.env.REACT_APP_SERVER_URL + "/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün Başarıyla Güncellendi");
      setProducts(
        products.map((item) => {
          if(item._id === editingItem._id){
            return {...values};
          }
          return item;
        })
      );
    //   setIsEditModalOpen(false);
    } catch (error) {
      message.error("Bir şeyler ters gitti");
      console.log(error);
    }
  };

  //DELETE
  const deleteCategories = (id) => {
    if(window.confirm("Emin Misiniz ?")){
        try {
            fetch(process.env.REACT_APP_SERVER_URL + "/api/products/delete-product", {
              method: "DELETE",
              body: JSON.stringify({ productId: id }),
              headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Ürün Başarıyla Silindi");
            setProducts(products.filter((item) => item._id !== id));
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
            return <img src={record.img} alt="" className="w-full h-20 object-cover"></img>;
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
              onClick={() => {
                setIsEditModalOpen(true);
                seteditingItem(record);
              }}
            >
              Düzenle
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
     <>
        <Table
          bordered={true}
          dataSource={products}
          columns={columns}
          rowKey={"_id"}
          scroll={{x: 1000, y: 500}}
        />
         <Modal
      title="Yeni Ürün Ekle"
      open={isEditModalOpen}
      onCancel={() => setIsEditModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form} initialValues={editingItem}>
        <Form.Item
          name="title"
          label="Ürün Adı"
          rules={[
            { required: true, message: "Ürün Adı Alanı Boş Bırakılamaz !" },
          ]}
        >
          <Input  placeholder="Ürün adı giriniz."/>
        </Form.Item>
        <Form.Item name="img"
        label="Ürün Resmi"
        rules={[
          { required: true, message: "Ürün Resmi Alanı Boş Bırakılamaz !" },
        ]}
          >
            <Input placeholder="Ürün fiyatı giriniz."/>
          </Form.Item>
      <Form.Item name="price"
      label="Ürün Fiyatı"
      rules={[
        { required: true, message: "Ürün Fiyatı Alanı Boş Bırakılamaz !" },
      ]}
        >
          <Input placeholder="Ürün fiyatı giriniz."/>
        </Form.Item>
      <Form.Item name="category"
      label="Kategori Seç"
      rules={[
        { required: true, message: "Kategori Alanı Boş Bırakılamaz !" },
      ]}
        >
          <Select
          showSearch
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.title ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
          (optionA?.title ?? "")
        .toLowerCase()
        .localeCompare((optionB?.title ?? "").toLowerCase())
      }
        options={categories}
        />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            Güncelle
          </Button>
        </Form.Item>
      </Form>
    </Modal>
      </>
  );
};

export default Edit;
