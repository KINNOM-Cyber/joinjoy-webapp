import type { ComponentProps } from "react";

export default function LineIcon({ ref, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="27" height="27" fill="url(#pattern0_2_5931)" />
      <defs>
        <pattern
          id="pattern0_2_5931"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_5931" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_5931"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
