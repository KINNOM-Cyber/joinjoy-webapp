import type { ComponentProps } from "react";

export default function LeftArrowIcon({
  ref,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="39" height="39" fill="url(#pattern0_2_3347)" />
      <defs>
        <pattern
          id="pattern0_2_3347"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_3347" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_3347"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVR4nO3cMWpUURSH8Q+JuoekEgS1M6YypYUQgz63IkLIAoQUAUvtItlEsoCki3sxqAEVdGSKNDoYb4o5f+79fnD68/iKN2/u44EkSZIkSZIkSZIkSZLUm7vAW+AYOAS2qhca2QvgApj9Me+BG9XLjWYCvi+IcTm71QuOZLoixnzOgVvVi45g+o8Yl/OgetneTQ0x5rNavXDPWmOcVS/cs5eNMS6AR9VL9+oZ8K0xxpPqpXtljCDGCGKMIMYIsu0NPIcxghgjiDGCGCOIMYIYI4gxghgjiDHCzjN+NPyF/gt4DWx0OPerz/pbY4wwX4A94OayY2w2nvSNNofLDnIacNGz8FlfVozbwM+AC56FzyuDMGaQuZOAC56Fz8NlBnnsTZ1/xfhAAX/28leIz8AbYKUiyHWi9PxgeK/i+WMRX14IZJRARglklEBGCWSUQEYJZJRARglklEBGCWSUQEYJZJRARunkwwEb1Uv3rvXTGh+rFx7B1BhlrXrhEUwNUebv0SokyqeUs+tRTFdE2alecETPga8LYrzzI5h17gD7wBFwADwt3EWSJEmSJEmSJEmSJEki02+vmXB5ycXaLAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
