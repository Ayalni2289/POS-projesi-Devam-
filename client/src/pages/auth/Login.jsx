import { Button, Carousel, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

const Login = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const onFinish= async (values) => {
    console.log(values);
    setLoading(true);
    try {
      //Giriş İşlemi
      const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/login",{
        method: "POST",
        body: JSON.stringify(values),
        headers: {"Content-type": "application/json; charset=UTF-8"},
      });

      const user = await res.json();

      if(res.status===200){
        //Kullanıcı Bilgileri LocalStorage'a Kaydedildi
        localStorage.setItem("posUser", JSON.stringify({
          username: user.username,
          email: user.email,
        }));
        //Giriş Tamamlandı
        message.success("Giriş Başarılı");
        navigate("/");
      }
      else if(res.status===404)
      {
        message.error("Kullanıcı Bulunamadı");
      }
      else if(res.status===403)
      {
        message.error("Şifre Hatalı !");
      }
      setLoading(false);
    } catch (error) {
      //Giriş Başarısız
      message.error("Giriş Başarısız");
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical" onFinish={onFinish} initialValues={{
            remember: true,
          }}>
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
            <FormItem>
                <div className="flex justify-between items-center">
                    <Checkbox>Beni Hatırla </Checkbox>
                    <Link>Şifremi Unuttum</Link>
                </div>
            </FormItem>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
                loading={loading}
              >
                Giriş Yap
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Bir hesabınız yok mu ?&nbsp;{" "}
            <Link className="text-blue-600" to="/register">
              Şimdi Kaydolun.
            </Link>
          </div>
          
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full px-6">
                <AuthCarousel
                  img="/images/responsive.svg"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  img="/images/statistic.svg"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img="/images/customer.svg"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img="/images/admin.svg"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
