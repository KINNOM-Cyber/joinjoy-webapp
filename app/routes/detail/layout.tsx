import { Outlet, useNavigate } from "react-router";
import SearchIcon from "~/assets/icons/search";
import Button, { ButtonVariant } from "~/components/common/button";
import Footer from "~/components/layouts/footer";
import Navbar from "~/components/layouts/navbar";

export default function DetailLayout() {
  const navigate = useNavigate();

  const handleClick = (type: "login" | "register") => {
    switch (type) {
      case "login":
        return navigate("/login");
      case "register":
        return navigate("/register");
    }
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
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
