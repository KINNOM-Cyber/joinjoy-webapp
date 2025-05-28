import type { ComponentProps } from "react";
import { cn } from "~/utils/tw-merge";

export enum ButtonVariant {
  FILL_ROUND = "fill-round",
  OUTLINE = "outline",
  DEFAULT = "default",
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

export default function Button({
  children,
  className,
  ref,
  variant = ButtonVariant.DEFAULT,
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    [ButtonVariant.FILL_ROUND]: "rounded-full",
    [ButtonVariant.OUTLINE]: "border-1 border-[#3C9AFB]",
    [ButtonVariant.DEFAULT]: "bg-[#7DB5E3]",
  };

  return (
    <button
      className={cn(
        "flex items-center justify-center p-2.75 px-5  rounded-lg font-light cursor-pointer disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
}
