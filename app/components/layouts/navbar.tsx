import SearchIcon from "~/assets/icons/search";
import Button, { ButtonVariant } from "../common/button";
import { useNavigate, useNavigation } from "react-router";
import { useAuth } from "~/contexts/useAuth";
import ChevronDownIcon from "~/assets/icons/chevron-down";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";
import Avatar from "../common/Avatar";

export default function Navbar({
  hidden = false,
  textLogo = false,
}: {
  hidden?: boolean;
  textLogo?: boolean;
}) {
  const auth = useAuth();
  const navigate = useNavigate();
//   const navigation = useNavigation();
//   const isPending = Boolean(navigation.location);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (type: "login" | "register") => {
    switch (type) {
      case "login":
        return navigate("/login");
      case "register":
        return navigate("/register");
    }
  };

  return (
    !hidden && (
      <nav className="flex items-center justify-between p-12 px-28">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          {textLogo ? (
            <p className="text-2xl">JOINJOY</p>
          ) : (
            <div className="relative w-24">
              <img src="/assets/jjj.png" alt="logo" />
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4 ">
          {auth?.user ? (
            <DropdownMenu.Root onOpenChange={setIsOpen}>
              <div className="flex items-center relative">
                <DropdownMenu.Trigger asChild>
                  {/* //https://static.thairath.co.th/media/00_A5B2835909C1E1440.webp */}
                  <Avatar src="https://static.thairath.co.th/media/00_A5B2835909C1E1440.webp" />
                </DropdownMenu.Trigger>
                <ChevronDownIcon
                  className={isOpen ? "rotate-180" : "rotate-0"}
                />
              </div>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="start"
                  className="border-1 rounded-lg p-2 text-sm  font-light mt-5"
                >
                  <DropdownMenu.Item
                    onClick={() => navigate("/status/registration")}
                    className="outline-0 p-2 cursor-pointer hover:bg-[#0057FF26] rounded-sm"
                  >
                    ติดตามสถานะ
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onClick={() => auth.clearCredential()}
                    className="outline-0 p-2 cursor-pointer hover:bg-[#0057FF26] rounded-sm"
                  >
                    ออกจากระบบ
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          ) : (
            <>
              <Button
                variant={ButtonVariant.OUTLINE}
                onClick={() => handleClick("login")}
              >
                เข้าสู่ระบบ
              </Button>
              <Button onClick={() => handleClick("register")}>
                สร้างบัญชี
              </Button>
            </>
          )}
        </div>
      </nav>
    )
  );
}
