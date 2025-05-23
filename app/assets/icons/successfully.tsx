import type { ComponentProps } from "react";

export default function SuccessfullyIcon({
  ref,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="207"
      height="207"
      viewBox="0 0 207 207"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="103.5" cy="103.5" r="103.5" fill="#A0D8B3" />
      <path
        d="M166.437 64.4379C169.928 67.9291 169.928 73.5988 166.437 77.09L94.9371 148.59C91.4458 152.081 85.7761 152.081 82.2849 148.59L46.5349 112.84C43.0437 109.349 43.0437 103.679 46.5349 100.188C50.0261 96.6967 55.6958 96.6967 59.1871 100.188L88.6249 129.598L153.813 64.4379C157.304 60.9467 162.974 60.9467 166.465 64.4379H166.437Z"
        fill="white"
      />
    </svg>
  );
}
