import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Kullanıcı Adı"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Lütfen kullanıcı adınızı giriniz!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "Lütfen E-mail giriniz!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Lütfen Şifre giriniz!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Şifre Tekrar"
              name={"passwordAgain"}
              rules={[
                {
                  required: true,
                  message: "Lütfen Şifreyi tekrar giriniz!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Kaydol
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute lef-0 bottom-10 w-full">
            Bir hesabınız mı var ?&nbsp;{" "}
            <Link className="text-blue-600" to="/login">
              Şimdi giriş yapın.
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 min-w-[800px]">right</div>
      </div>
    </div>
  );
};

export default Register;
