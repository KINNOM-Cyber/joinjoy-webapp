import { useNavigate } from "react-router";
import Button from "~/components/common/button";
import Input from "~/components/common/input";
import Link from "~/components/common/link";
import { useAuth } from "~/contexts/useAuth";
import { formDataToObject } from "~/utils/form";

export default function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (formData: FormData) => {
    const { email, password } = formDataToObject(formData);
    // alert(`Email: ${email}\nPassword: ${password}`);
    if (email === "noobuser@joinjoy.com" && password === "password") {
      const user = {
        name: "Noob User",
        email,
        role: "user",
      };
      auth?.updateCredential(user);
      navigate("/", { replace: true });
      return;
    }

    alert("Incorrect username or password");
  };

  return (
    <div className="font-light max-w-120  mx-auto">
      <div className="bg-[#D9D9D9] p-7 px-12 rounded-[28px] font-light">
        <p className="my-10 text-4xl font-light text-center">เข้าสู่ระบบ</p>
        <form action={handleSubmit}>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="email">
                อีเมล
              </label>
              <Input
                name="email"
                placeholder="กรอกอีเมล"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="password">
                รหัสผ่าน
              </label>
              <Input
                name="password"
                placeholder="กรอกรหัสผ่าน"
                type="password"
                id="password"
                required
              />
            </div>
            <div className="flex">
              <Link className="ml-auto mr-0" to="#">
                ลืมรหัสผ่าน
              </Link>
            </div>
            <div className="flex mt-8.5">
              <Button type="submit" className="rounded-full flex-1">
                เข้าสู่ระบบ
              </Button>
            </div>
          </div>
        </form>
        <p className="text-sm mt-7 text-center">
          ยังไม่มีบัญชี? <Link to="/register">สมัครเลย</Link>
        </p>
      </div>
      <p className="text-center mt-6.75 text-sm mx-16 leading-5.5">
        เมื่อดำเนินการต่อ ถือว่าคุณยอมรับ{" "}
        <Link to="#">ข้อกำหนดในการให้บริการ</Link> และ{" "}
        <Link to="#">นโยบายความเป็นส่วนตัวของเรา</Link>
      </p>
    </div>
  );
}
