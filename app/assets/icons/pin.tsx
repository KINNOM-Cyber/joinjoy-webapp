import type { ComponentProps } from "react";

export default function PinIcon({ ref, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="51" height="51" fill="url(#pattern0_2_5681)" />
      <defs>
        <pattern
          id="pattern0_2_5681"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_5681" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_5681"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
