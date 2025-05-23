import type { ComponentProps } from "react";

export default function ChevronDownIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 0.999999L11 16L1 0.999999" stroke="black" strokeWidth="2" />
    </svg>
  );
}
