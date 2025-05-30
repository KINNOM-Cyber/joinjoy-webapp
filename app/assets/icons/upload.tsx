import type { ComponentProps } from "react";

export default function UploadIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2_4530)">
        <path
          d="M7.49996 18.0002C6.25223 18.0002 5.05561 17.5261 4.17334 16.6822C3.29107 15.8383 2.79541 14.6937 2.79541 13.5002C2.79541 12.3067 3.29107 11.1621 4.17334 10.3182C5.05561 9.4743 6.25223 9.0002 7.49996 9.0002C7.79464 7.68737 8.65672 6.53368 9.89654 5.79291C10.5104 5.42612 11.1986 5.17174 11.9217 5.04431C12.6449 4.91687 13.3888 4.91887 14.1111 5.0502C14.8333 5.18152 15.5198 5.43959 16.1312 5.80968C16.7427 6.17976 17.2672 6.65461 17.6747 7.20712C18.0823 7.75963 18.3649 8.37898 18.5065 9.02979C18.6481 9.68061 18.6459 10.3502 18.5 11.0002H19.5C20.4282 11.0002 21.3185 11.3689 21.9748 12.0253C22.6312 12.6817 23 13.5719 23 14.5002C23 15.4285 22.6312 16.3187 21.9748 16.9751C21.3185 17.6314 20.4282 18.0002 19.5 18.0002H18.5"
          stroke="#232323"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 15L12.5 12L15.5 15"
          stroke="#232323"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 12V21"
          stroke="#232323"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_4530">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
