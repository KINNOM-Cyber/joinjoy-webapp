import { useEffect, useState, type ReactNode } from "react";
import {
  href,
  NavLink,
  Outlet,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
} from "react-router";
import HomeIcon from "~/assets/icons/home";
import PlusIcon from "~/assets/icons/plus";
import UserGroupIcon from "~/assets/icons/user-group";
import Avatar from "~/components/common/Avatar";
import Button from "~/components/common/button";
import { useAuth } from "~/contexts/useAuth";
import { UserRole } from "~/libs/auth";
import { cn } from "~/utils/tw-merge";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { loading, user, isAuthenticated } = useAuth();

  const navLinks: { href: string; title: string; icon: ReactNode }[] = [
    {
      href: "/dashboard/activities",
      title: "กิจกรรมทั้งหมด",
      icon: <HomeIcon />,
    },
    {
      href: "/dashboard/activity/create",
      title: "สร้างกิจกรรม",
      icon: <PlusIcon />,
    },
    {
      href: "/dashboard/activity/registrations",
      title: "ผู้สมัคร",
      icon: <UserGroupIcon />,
    },
  ];

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login", { replace: true });
      return;
    }
  }, [isAuthenticated, loading]);

  if (loading) {
    return null;
  }

  if (user?.role !== UserRole.ADMIN) {
    return (
      <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-1/2">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="mt-8.75">
            <p className="text-2xl font-semibold leading-10">
              ไม่สามารถเข้าถึงหน้านี้ได้
            </p>
            <p className="text-sm">
              เนื่องจากบัญชีผู้ใช้ของท่านไม่มีสิทธิ์ในการเข้าถึงหน้านี้
            </p>
          </div>
          <div className="flex space-x-3 mt-3">
            <Button
              onClick={() => navigate("/")}
              className="bg-[#3C60BC] text-white"
            >
              กลับหน้าหลัก
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen h-screen min-h-0 fixed inset-0">
      <div
        className="flex items-center p-2 px-5 bg-[#1E1F2C] text-white shadow-[0px_4px_4px_0px_#00000040]
"
      >
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer text-3xl font-light"
        >
          JOINJOY
        </button>
      </div>
      <div className="flex h-screen min-h-0">
        <div className="w-90 h-full min-h-0 bg-white">
          <div className="border-b flex items-center p-2 px-3 border-[#D5D5D5]">
            <Avatar className="size-14.5 p-1" src={user?.avatar} />
            <div className="ml-3">
              <p className="text-base font-medium">KMUTT</p>
              <p className="text-xs text-[#3B3B3B9C]">{user?.role}</p>
            </div>
          </div>
          <div className="p-2 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.href}
                className={(state) =>
                  cn(
                    "p-4.25 px-5 flex items-center font-light rounded-sm",
                    state.isActive
                      ? "bg-[#EFF4FF] shadow-[0px_4px_10px_0px_#0000001F]"
                      : ""
                  )
                }
              >
                {link.icon}
                <span className="ml-4.75">{link.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col h-full min-h-0 min-w-0 w-full p-4 bg-[#EBEBEB]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
