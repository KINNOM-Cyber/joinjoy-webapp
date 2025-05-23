import {
  NavLink,
  type NavLinkProps,
} from "react-router";
import { cn } from "~/utils/tw-merge";

export default function Link({
  className,
  children,
  ...props
}: NavLinkProps & { className?: string }) {
  return (
    <NavLink
      role="link"
      className={cn("text-sm text-[#3C9AFB] underline font-light", className)}
      {...props}
    >
      {children}
    </NavLink>
  );
}
