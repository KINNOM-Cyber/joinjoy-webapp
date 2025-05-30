import { useEffect } from "react";
import { useNavigate } from "react-router";
import FacebookIcon from "~/assets/icons/facebook";
import LineIcon from "~/assets/icons/line";
import Button from "~/components/common/button";
import VolunteerCard from "~/components/pages/card";
import { useAuth } from "~/contexts/useAuth";
import { formDataToObject } from "~/utils/form";

export default function RegisterationPage() {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (formData: FormData) => {
    const { reason, consent } = formDataToObject(formData);

    if (!consent) {
      alert("การุณายอมรับเงื่อนไขเพื่อดำเนินการต่อ");
      return;
    }

    navigate("/detail/registration/receipt", { state: { status: 200 } });
  };

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login", { replace: true });
      return;
    }
  }, [isAuthenticated, loading]);

  return (
    <div className="max-w-330 p-5 flex flex-col m-auto mt-10 mb-40">
      <div className="flex space-x-50">
        <div className="flex-2 space-y-7">
          <p className="text-4xl font-semibold text-[#383C3E]">
            สมัครเป็นจิตอาสา
          </p>
          <form action={handleSubmit} className="space-y-1 flex flex-col">
            <label className="text-sm font-light" htmlFor="reason">
              เหตุผลที่อยากเข้าร่วม
            </label>
            <textarea
              className="border-1 border-[#A6A6A6] p-2 ring-0 outline-0 rounded-sm"
              rows={10}
              name="reason"
              id="reason"
              required
            ></textarea>
            <Button
              type="submit"
              className="bg-[#3C5D9C] text-white mt-10.75 p-4 rounded-2xl"
            >
              เข้าร่วม
            </Button>
            <div className="flex items-center space-x-3 mt-7">
              <input
                className="size-5"
                type="checkbox"
                id="consent"
                name="consent"
              />
              <label className="text-[#383C3E] font-light" htmlFor="consent">
                ฉันเข้าใจและยินยอมเข้าร่วมกิจกรรมอย่างสมัครใจ
              </label>
            </div>
          </form>
        </div>
        <div className="flex-1 flex flex-col space-y-5">
          <VolunteerCard
            title="ช่วยกันเก็บขยะบนทะเล kmutt"
            location="ทะเล kmutt"
            date="13:00 - 17:00 อาทิตย์ 27 เม.ย. 2568 - 17:00"
            capacity={80}
          />

          <div className="space-y-7">
            <div className="text-[#383C3E]">
              <p className="font-semibold my-2">สิ่งที่จะได้รับจากกิจกรรมนี้</p>
              <ul className="space-y-1 font-light">
                <li>✅ ได้ใบประกาศเกียรติคุณ</li>
                <li>✅ ประสบการณ์จิตอาสาสุดพิเศษ</li>
                <li>✅ เพื่อนใหม่ และความทรงจำดี ๆ</li>
              </ul>
            </div>
            <div className="text-[#383C3E]">
              <p className="font-semibold my-2">กลุ่มของเรา</p>
              <ul className="space-y-1 font-light">
                <li className="flex items-center">
                  <FacebookIcon className="mr-3" />
                  kmutt
                </li>
                <li className="flex items-center">
                  <LineIcon className="mr-3" />
                  kmutt
                </li>
              </ul>
            </div>
            <div className="text-[#383C3E]">
              <p className="font-semibold my-2">ติดต่อเรา</p>
              <ul className="space-y-1 font-light">
                <li>+66 7777777777</li>
              </ul>
            </div>
          </div>
          <p className="mt-15 text-[#1B579C] font-semibold">
            มีผู้สมัครแล้ว {1} คน มาร่วมเป็นส่วนหนึ่งกับเรา!
          </p>
        </div>
      </div>
    </div>
  );
}
