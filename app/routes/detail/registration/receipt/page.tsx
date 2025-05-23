import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import SuccessfullyIcon from "~/assets/icons/successfully";
import Button, { ButtonVariant } from "~/components/common/button";
import Navbar from "~/components/layouts/navbar";

export default function ReceiptPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevention, setPrevention] = useState(true);

  useEffect(() => {
    if (location.state?.status != 200) {
      navigate("/");
      return;
    }
    setPrevention(false);
  }, [location.state]);

  if (prevention) {
    return null;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-1/2">
          <div className="text-center flex flex-col items-center justify-center">
            <SuccessfullyIcon />
            <div className="mt-8.75">
              <p className="text-2xl font-semibold leading-10">
                คุณได้สมัครเป็นอาสาเรียบร้อยแล้ว
              </p>
              <p className="text-sm">ขอบคุณที่เข้ามาเป็นส่วนหนึ่งกับเรา</p>
            </div>
            <div className="flex space-x-3 mt-9">
              <Button
                onClick={() => navigate("/")}
                className="border-[#3C60BC]"
                variant={ButtonVariant.OUTLINE}
              >
                กลับหน้าหลัก
              </Button>
              <Button
                onClick={() => navigate("/status/registration")}
                className="bg-[#3C60BC] text-white"
              >
                ติดตามสถานะการสมัคร
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
