import type { ComponentProps } from "react";
import { cn } from "~/utils/tw-merge";

type AvatarProps = ComponentProps<"div"> & {
  src?: string;
};

export default function Avatar({ ref, className, src, ...props }: AvatarProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex border-2 p-2 rounded-full border-[#5D9BCF] size-19 overflow-hidden",
        className
      )}
      {...props}
    >
      <img className=" object-cover rounded-full" src={src} alt="avatar" />
    </div>
  );
}
