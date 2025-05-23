import type { ComponentProps } from "react";

export default function GroupIcon({ ref, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="49" height="49" fill="url(#pattern0_2_5694)" />
      <defs>
        <pattern
          id="pattern0_2_5694"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_5694" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_5694"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFa0lEQVR4nO2ca6gVVRTHf/deE7yVWVHdSCvFbsHNSiwqMivqQ0UvIntgmJUfguz2gAqqC1ZkFBVWFgQSYYYVBL0+ZI8bpD20IvpiT9Eye2CSlpWa3Ykl68BFOjN7z+w9M+e4frC+HM7svfb6z+xZs/aeAcMwDMMwDMMwDMMwDMMwDMMwDKPOHAhMAs5Rm6S/GSUyFXgEWA0kTexb4GHgFFMmHicAgykiNLP3VUQjECOAR4GhHGI0bEivqi5TpRhjgDcLCLGrvaFtGjnYA3g3oBgNWwaMNEX8eSqCGA172gTx4+KIYjTsAhPFjS5gVQmCfKkJg5HB1SWI0bCrTI1s3ipREMm6jBT2AbaVKMh2S4PTOa9EMRp2fjs9J5ylT9GvAx8D7wFLgOuBcTnavK4CQW7L4eehwBzgeR3zSo3BfI2JxKY0OoFZwHcZA/0XeBY4zKPtuysQ5EEP/8YDi3VsaW2uBWZqrKIyWs8EnwH/rlORCw9VIIic1S5cCPzh2farwN5EYk/g05yDljPqCoc+bq1AkHsd/JrhcFU0s0+AbiLwUsGB/wVMcRh4UrJd61D2/7tgHy9Q0+znI6AjpZ/jKhDkmBR/OjRZCdGPrGgG47OSakgdekMsS4w1GeO+KGBfMt0H4ajAQXguo7/HanRDXxK4v94QgtwU2KmNGf316hN0bDGkIjAxw5ffAvfZH0KQ+RGCISWSNJ4sQRC5EtMYE6FPWUYuzOIIjmWdmQcBP0UUYz1wQIYPEyP0K7EszOMRHNvPod8pmiqH7ltS2BMd+t8/Qt9SZirM7YGd2pKR+g7n8sD3E2nrMtzoiHBCyINvYY4P7NTLnv1PBX4J0O+vwBmefb8WeOyTCUCH5uuhnJKimy/jgVcKngSH5+h3VsBxr/aYGTK5JpBTXxUsTZ8KLAX+cZyelhbctThSt6XWbrlYNh58WNAhKc6dHciffYErdavQO1rAE3tbf5uh/wlVNiqya1JseYxS/MHAugJO3UHrMlBg3N8DPbEcG5ujBL9DM7VW50Ydi8/YP8957/JiL+B+x5RwZZvtPJ/mWP39E7hP15BKQ6awG/TGKVnYVmCDnhULgDNDZhU1okPXzZ/QsW7Qsa/RbUVzYk5RhmEYhtEO9ACnAbOBB4BFWhIZHPZgOKi/LdL/zNbMSMr5RgG6tRA4oFncpgCli02aBUmbp8famtNOjANu0TJDGUu42/X1tpv1gdfQqaRfRRgqQYS0Otsyfa5q2Q8PiOPnAqNyHDtZ5/mtFYqQNDHx6Rng2BzjGqUxKUXULr2pyhcSvlHnZXnXhyOBFyu+GhJHG9Ld7Ud4jnGBHv+17lWeFvr9eMlu7vyf3e5feFwdsq4wt+SXcZKAV8yAxzpOt677DG9jrVa7C5VUelTtZkG8xLGdsZqSJi1uK4BDHMd8aZM2tums4pWGy5upd+lmhGbOrXJccDka+LkGwUwC2Y9An8O4O3UGadbOFp11RrjM8SscHJNsJIsJOoCkzWy94xpHv+Pm89603SUbA21069Q0MmlT+8Bhhuj1eGA9adeDTwY2OzYgi/5ZzKxB0JLIJmv6WaR902u4bR4uimwG+MHDEdmrlMXyGgQsiWzysmfIfV3rGl8qusfTkYUOKW7e17+SFrIdDl8VWujZpjwa7Pzmh89B8xxu5sluYhMyYjHPsz3JzLwLeTtVTKGvBoFKSrKsFHiuZ3uihbcTJgjRBBEzQajPFWKCUK8pywTBBGkr67MrhMpFMEGoPvAmCNUH2wSh+gCbIDUIamKCVB/IxASpPniJCVJ9wJJWFGS6p/U5fJdx+m5iozNi0ZejTcMwDMMwDMMwDMMwDMMwDMMwDNqZ/wAXair49kkiHgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
