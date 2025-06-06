import type { ComponentProps } from "react";

export default function ChevronLeftIcon({ ref, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.16003 1.41L3.58003 6L8.16003 10.59L6.75003 12L0.750034 6L6.75003 0L8.16003 1.41Z"
        fill="#C4CDD5"
      />
    </svg>
  );
}
