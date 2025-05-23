import Button, { ButtonVariant } from "~/components/common/button";
import { Outlet, useNavigate } from "react-router";
import SearchIcon from "~/assets/icons/search";
import VolunteerCard from "~/components/pages/card";
import Navbar from "~/components/layouts/navbar";
import Footer from "~/components/layouts/footer";
import type { Route } from "./+types/page";
import Pagination from "~/components/common/pagination";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome to JoinJoy" },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  const getCurrentPage = (page: number) => {
    console.log(page);
  };

  return (
    <>
      <header>
        <Navbar textLogo />
        <div className="flex max-h-[250px] justify-center items-center">
          <img src="/assets/jjj.png" alt="logo" />
        </div>
        <div className="text-center block space-y-3">
          <p className="text-[#DF6951] font-semibold">
            JOINJOY: เว็บที่ทุกคนสามารถค้นหาจิตอาสาและร่วมสร้างสังคมที่ดีขึ้น
          </p>
          <div className="mx-auto relative flex  w-[736px] p-2 bg-[#D9D9D9] overflow-hidden rounded-xl">
            <input type="text" className="flex-1 outline-0 ring-0" />
            <SearchIcon height={28} width={28} />
          </div>
        </div>
      </header>
      <main className="max-w-300 p-7 m-auto flex flex-col">
        <p className="text-4xl my-12 font-semibold">
          <span className="text-[#3C5D9C]">งานอาสา</span>{" "}
          <span className="text-[#7DB5E3]">ประกาศล่าสุด</span>
        </p>
        <div className="m-auto grid grid-cols-3 gap-6">
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
        <div className="mx-auto mt-12.75 mb-5.75">
          <Pagination
            pageLimit={10}
            onPageChange={getCurrentPage}
            total={100}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
