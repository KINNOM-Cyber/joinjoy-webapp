import type { ComponentProps } from "react";
import { cn } from "~/utils/tw-merge";

export default function Input({
  ref,
  className,
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex items-center p-3 px-4 rounded-lg bg-white border-[1.5px] border-[#E2E8F0] outline-0 ring-0 placeholder:text-[#94A3B8] placeholder:font-light placeholder:text-sm",
        className
      )}
      {...props}
      ref={ref}
    />
  );
}
