import type { ComponentProps } from "react";

export default function PlusIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 1L9.5 18"
        stroke="#3B3B3B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 9.5L1 9.5"
        stroke="#3B3B3B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
