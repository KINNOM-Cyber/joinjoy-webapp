import Button from "~/components/common/button";
import Input from "~/components/common/input";
import Link from "~/components/common/link";
import { formDataToObject } from "~/utils/form";

export default function RegisterPage() {
  const handleSubmit = (formData: FormData) => {
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      age,
      gender,
    } = formDataToObject(formData);
    alert(
      `First Name: ${firstName}\nLast Name: ${lastName}\nGender: ${gender}\nAge: ${age}\nEmail: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`
    );
  };

  return (
    <div className="font-light max-w-120 mx-auto pb-50">
      <div className="bg-[#D9D9D9] p-7 px-12 rounded-[28px] font-light">
        <p className="my-10 text-4xl font-light text-center">สร้างบัญชี</p>
        <form action={handleSubmit}>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="first-name">
                ชื่อจริง
              </label>
              <Input name="firstName" type="text" id="firs-tname" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="lastname">
                นามสกุล
              </label>
              <Input name="lastName" type="text" id="lastname" required />
            </div>
            <div className="grid grid-cols-2 space-x-3">
              <div className="flex flex-col space-y-2">
                <label className="text-sm" htmlFor="gender">
                  เพศ
                </label>
                <Input name="gender" type="text" id="gender" required />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm" htmlFor="age">
                  อายุ
                </label>
                <Input name="age" type="number" id="age" required />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="email">
                อีเมล
              </label>
              <Input
                name="email"
                placeholder="กรอกอีเมล"
                type="text"
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
            <div className="flex flex-col space-y-2">
              <label className="text-sm" htmlFor="confirm-password">
                ยืนยันรหัสผ่าน
              </label>
              <Input
                name="confirmPassword"
                placeholder="กรอกรหัสผ่าน"
                type="password"
                id="confirm-password"
                required
              />
            </div>
            <div className="flex mt-11.75">
              <Button type="submit" className="rounded-full flex-1 text-white">
                สร้างบัญชี
              </Button>
            </div>
          </div>
        </form>
        <p className="text-center mt-6.25 text-sm mx-5 leading-5.5 text-[#475569]">
          เมื่อดำเนินการต่อ ถือว่าคุณยอมรับ{" "}
          <Link to="#">ข้อกำหนดในการให้บริการ</Link> และ{" "}
          <Link to="#">นโยบายความเป็นส่วนตัวของเรา</Link>
        </p>
      </div>
    </div>
  );
}
