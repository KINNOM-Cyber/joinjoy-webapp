import type { ComponentProps } from "react";

export default function SearchIcon({ ref, ...prpos }: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...prpos}
    >
      <rect
        x="0.393555"
        width="36"
        height="36"
        transform="rotate(0.626363 0.393555 0)"
        fill="url(#pattern0_2_5693)"
      />
      <defs>
        <pattern
          id="pattern0_2_5693"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_5693" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_5693"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDElEQVR4nO2dW4hWVRTHf2qX+Uoqm0zR3jQcAqUgsKKioBs9SE2ohI4F0yRlGVJmkU86QlCIEWVB+JDVQxAIvljR9FC9WRA0OtbYzayxjJzEBq2ZE5sW9CEzs9eZ+eY7a5+zfrCfhnHW2v+zL2vttbfgOI7jOI7jOI7jOI7jOM5kOB9YDNwDPAxsADZJWwusBm4CZns3Tw2twErgNaAP+AfIlO13YK+ItsQFmjjnAvcCe4DTOQTIIq1XRtI8F0fHecAa4JsGipCN0s4AbwKLXJixuR84OsVCZGe1MP3tBGa5MP+zEPioyUJkZ7VfgQ4X5b914o+Cxcjq2m5gZhWFmQ68ZECAbJR2EFhAxeKIdxvUeSeBH4F+4DBwHBhuwL/7C3ANFRHj/Ql20mn53bBtvXmcwK9FAsewJuyaxEZhEFhKyaepiYyMEAyukwBxIswAbpe/nXf0/Aa0UVLyrhnfAitEyEaxaAIfxQ/AHErGyhwdEL7i54ELptCeO2Tt0dr0YYM/jMLjjEGl48eA25pkV6vkubSibKYkaIO+74Arm2zbDOBVpX1/y2Yh+XSIxtnDBSf8tivt/BiYRqK0KLecxwwEYtOAt5SiLCdR1ikX8LAltfIBfaGw+asUF/hwnvG9wrmwm7JEGzCksHsZidGu3N9fiD22KGwPGYOk2KNwKgR9FqkBPyvOUeaTCK2KY9c+4/PwU4oPaiMlisrDgm+Zi4BTER96SITXI46E0XMZ9nkn4seQTG/m6SvJgtiuGOm3YpwWRd1UOM9IgUsV6fr1GGex4qsKVYWp0Bvx5RVKMMwvJx3eU6TlTfNQxIE/SYsXIv58jnE2RBw4Qlo8F/Hna4yzOeJA2IGlxBMRf0JEb5qnFefkKbFRkY8zzSOKKo6U2BLx5wDGWR1xYDiV6FbYFfHnM4xzo2Lbm9K59KcRX97GOLMVgnQkdMh2MuJLNwlwPOJEmAZS4DrFx3UfCRCrdToq5TfW6VYIcgUJEAsOM0OFDeNVofRHfAg/T4IlCkFCfa1l7lL4sIMSZUmHjV+47FEIcgsJsSnhUXK3wvb+1CoY5ynvl4cqdEvUgEMKu58hQd5QOHbE2Pn6ywqbB1O9Rr1Q+QzGXiPb4BXAiMLeJILBsdipcDCTKwFFcj3wl8LOAeBiEmaWXMrXiLK9oIXyBuCE0sYHKQEdSmczuRJQa3JR35DStn2p7azGY3cOUb5sws3XmizgmjUjkxGUTC2vhpnyQoJWlCE5HKpNUZxxKIctmQgXHkcrFQvkhYQ8HRHOrJ+UWtvJcqcyAq+UKFfnuJFb307JYVC7VBRqOEdeYtiqSBRWWpSlijOTWB6sV4rYXgSeBR6XdM1WOW/5RHG45KLU0SYVG1mibQR4lJIxR0oxM0PtRI6d14i8iloqpktx3RkDYuyTpOjaqosSuEou5RchxIBE4PVBn4siHbJcAsNmTU/d4+SmXJQ6YZbJTas8jyZnytYv5xmXKEZumI4qP33VM19uxPbkyDmNJcIOOXbNm49yUcagJnf61ku6/gNgv3T2gLwmdFDKO0MQuU3qphpRquOiGKQzxxOBpYxTLNLpotij00WxR6eLYg8XxSAuikFcFIPkjVNWFW1wFejKIUqoAZtbtMFVoCuHKI8VbWxV6FKKElI7jiFRHmiWMU5clJ+q+l8rFc2qUYq4gxjXFm1YlZkrC/g2maZ8ZDiO4ziO4ziO4ziO4ziUnX8B8zlHbnDu2cYAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}
