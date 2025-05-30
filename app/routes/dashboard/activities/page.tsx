import { useNavigate } from "react-router";
import SearchIcon from "~/assets/icons/search";
import Pagination from "~/components/common/pagination";
import VolunteerCard from "~/components/pages/card";

export default function ActivitiesPage() {
  const navigate = useNavigate();

  const getCurrentPage = (page: number) => {
    console.log(page);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex py-1 items-center mb-4 h-13">
        <h1 className="text-3xl font-semibold text-[#3C60BC]">
          กิจกรรมทั้งหมด
        </h1>
        <div className="ml-auto relative flex  w-[736px] p-2 bg-[#D9D9D9] overflow-hidden rounded-xl">
          <SearchIcon height={28} width={28} />
          <input
            type="text"
            className="flex-1 outline-0 ring-0 ml-3 placeholder:text-[#3B3B3B]"
            placeholder="ค้นหากิจกรรม"
          />
        </div>
      </div>
      <div className="h-full w-full min-h-0 flex flex-col overflow-y-auto p-10 bg-white rounded-md">
        <div className="grid grid-cols-3 gap-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <VolunteerCard
              key={i}
              onClick={() => navigate(`/detail/${i + 1}`)}
              title="ช่วยกันเก็บขยะบนทะเล kmutt"
              location="ทะเล kmutt"
              date="13:00 - 17:00 อาทิตย์ 27 เม.ย. 2568 - 17:00"
              capacity={80}
            />
          ))}
        </div>
        <div className="mx-auto mt-12.75">
          <Pagination
            pageLimit={10}
            onPageChange={getCurrentPage}
            total={100}
          />
        </div>
      </div>
    </div>
  );
}
