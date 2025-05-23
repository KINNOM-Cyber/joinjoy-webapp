import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useNavigate } from "react-router";
import LeftArrowIcon from "~/assets/icons/left-arrow";
import VolunteerCard from "~/components/pages/card";
import type { Status } from "~/utils/mapping";

export default function RegisterationPage() {
  const naviage = useNavigate();
  const [tab, setTab] = useState<Status>("approve");

  const handleSetTab = useCallback(
    (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
      const tabValue = e.currentTarget.value as Status;
      setTab(tabValue);
    },
    [tab]
  );

  const sampleData = useMemo(() => {
    switch (tab) {
      case "approve":
        return [
          {
            title: "ช่วยกันเก็บขยะบนทะเล kmutt",
            location: "ทะเล kmutt",
            date: "13:00 - 17:00 อาทิตย์ 27 เม.ย. 2568 - 17:00",
            capacity: 80,
            status: "approve",
          },
          {
            title: "ช่วยกันเก็บขยะบนทะเล kmutt",
            location: "ทะเล kmutt",
            date: "13:00 - 17:00 อาทิตย์ 27 เม.ย. 2568 - 17:00",
            capacity: 80,
            status: "approve",
          },
        ];
      case "pending":
        return [
          {
            title: "ช่วยกันเก็บขยะบนทะเล kmutt",
            location: "ทะเล kmutt",
            date: "13:00 - 17:00 อาทิตย์ 27 เม.ย. 2568 - 17:00",
            capacity: 80,
            status: "pending",
          },
        ];
      case "reject":
        return [
          {
            title: "ช่วยกันเก็บขยะบนทะเล kmutt",
            location: "ทะเล kmutt",
            date: "13:00 - 17:00 อาทิตย์ 27 เม.ย. 2568 - 17:00",
            capacity: 80,
            status: "reject",
          },
        ];
      default:
        return [];
    }
  }, [tab]);

  return (
    <div className="max-w-300 p-7 mb-5 flex flex-col m-auto space-y-6">
      <div className="flex items-center text-2xl font-semibold">
        <button className="cursor-pointer mr-7" onClick={() => naviage("/")}>
          <LeftArrowIcon width={39} height={39} />
        </button>
        <p className="text-[#7DB5E3]">ติดตามสถานะการสมัคร</p>
      </div>
      <div className="text-2xl font-semibold bg-[#3C5D9C] text-white p-3.5 px-10 rounded-t-2xl">
        กิจกรรมที่คุณสมัคร
      </div>
      <div className="border-2 border-[#939090] p-8.5 rounded-xl space-y-8.5">
        <div className="grid grid-cols-3 gap-7.5">
          <button
            value="approve"
            onClick={handleSetTab}
            style={{ borderColor: tab == "approve" ? "#3C60BC" : "#939090" }}
            className="text-2xl font-semibold flex items-center justify-center border-3 border-[#939090] py-4.5 rounded-2xl cursor-pointer focus:border-[#3C60BC]"
          >
            สำเร็จ
          </button>
          <button
            value="pending"
            onClick={handleSetTab}
            style={{ borderColor: tab == "pending" ? "#3C60BC" : "#939090" }}
            className="text-2xl font-semibold flex items-center justify-center border-3 border-[#939090] py-4.5 rounded-2xl cursor-pointer"
          >
            รอดำเนินการ
          </button>
          <button
            value="reject"
            onClick={handleSetTab}
            style={{ borderColor: tab == "reject" ? "#3C60BC" : "#939090" }}
            className="text-2xl font-semibold flex items-center justify-center border-3 border-[#939090] py-4.5 rounded-2xl cursor-pointer"
          >
            ถูกปฏิเสธ
          </button>
        </div>
        <div className="grid grid-cols-3 gap-7.5 grid-rows-3">
          {sampleData.map((data, i) => (
            <VolunteerCard
              key={i}
              title={data.title}
              location={data.location}
              date={data.date}
              capacity={data.capacity}
              status={data.status as Status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
