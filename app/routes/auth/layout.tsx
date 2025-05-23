import { Outlet, useNavigate } from "react-router";
import Button, { ButtonVariant } from "~/components/common/button";
import Navbar from "~/components/layouts/navbar";

export default function AuthLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
