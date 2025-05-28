import Button, { ButtonVariant } from "../common/button";
import { useNavigate } from "react-router";
import { useAuth } from "~/contexts/useAuth";
import ChevronDownIcon from "~/assets/icons/chevron-down";
import { DropdownMenu } from "radix-ui";
import { useMemo, useState } from "react";
import Avatar from "../common/Avatar";
import { UserRole } from "~/libs/auth";

export default function Navbar({
  hidden = false,
  textLogo = false,
}: {
  hidden?: boolean;
  textLogo?: boolean;
}) {
  const { loading, isAuthenticated, user, clearCredential } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (type: "login" | "register") => {
    switch (type) {
      case "login":
        return navigate("/login");
      case "register":
        return navigate("/register");
    }
  };

  const dropdowItemList = useMemo<{ href: string; title: string }[]>(() => {
    const lists: Record<UserRole, { href: string; title: string }[]> = {
      [UserRole.ADMIN]: [
        {
          href: "/dashboard/activities",
          title: "กิจกรรมของคุณ",
        },
      ],
      [UserRole.USER]: [
        {
          href: "/status/registration",
          title: "ติดตามสถานะ",
        },
      ],
    };
    return lists[user?.role ?? "user"];
  }, [user, isAuthenticated]);

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
        {!loading && (
          <div className="flex items-center space-x-4 ">
            {user ? (
              <DropdownMenu.Root onOpenChange={setIsOpen}>
                <div className="flex items-center relative">
                  <DropdownMenu.Trigger asChild>
                    <Avatar
                      className="mr-4.25 cursor-pointer"
                      src={user.avatar}
                    />
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
                    {dropdowItemList.map((item) => (
                      <DropdownMenu.Item
                        key={item.title}
                        onClick={() => navigate(item.href)}
                        className="outline-0 p-2 cursor-pointer hover:bg-[#0057FF26] rounded-sm"
                      >
                        {item.title}
                      </DropdownMenu.Item>
                    ))}
                    <DropdownMenu.Item
                      onClick={() => clearCredential()}
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
        )}
      </nav>
    )
  );
}
