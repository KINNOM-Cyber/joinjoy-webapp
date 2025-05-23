import type { ComponentProps } from "react";

export default function ClockIcon({ ref, ...prpos }: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...prpos}
    >
      <rect width="51" height="51" fill="url(#pattern0_2_5718)" />
      <defs>
        <pattern
          id="pattern0_2_5718"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_5718" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_5718"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGtUlEQVR4nO1d3W9VRRD/0UQSq1gKCgLtk4nanH9AodSvEvABpfqmQKGEBqvxIz6pSKIibeOTT4pf+FE18cmPqNECMWqskPJCjIkfPFmfBCxYEErbY8bMTZpq786eu7tnzrn7SzZpbu+9M2d/d2dn5szOASIiIiIiIiIiIiIiIiKqoRVAJ4A+AHsADALYD+BdHvv5taf5PZ38mQgHuALABp7gIwAmAKQZB332ewADANbzd0cIcBWAHgCHAUzWQIBpXARwCMA2AIsiM//FLWxyznskYb5xDsAQgLWRGKAdwMEcSEjnGd8C2AhgQb2R0wFgVAEB6TzjKP9YSo8l7AnNKJj01DBIx7cBLENJ0Q3gtIKJTi3HKQBbUCKQi/mW40maBPATm71hAB/yGObXfvbgpR0A0IiCIwHwY40TMcVxCMUQdwO4HsBlAtn0nhv4M4O8L0zVqMsPANpQUNwKYLwGEr4EsBlAk0Od6Lu28kqazqjbn+yUFApdAP7OeLF7AawKoGMLgOcz/mjo2jahINiewTQQEU86Xg1SLAbwVAZipjjSV427AFyyvLAPACzPW3EA17KbO2NJyr1QvGfYmKnfANwGfbgDwJil+erQ6E3ZLPlPAVwNvbgGwOeWJrdNU5xh49o+U5Bc0QLe9G1cYhVxyptChck2P+ZwRaaGQe9xgQctXOTXoSAdIlGULug+h3KTgIQQ7rcghWKnXEB7wEmhko84lp0EJoTwgEXui/YgtabqWQ+ykxwIAQetkmt+DYHRLvTXP/O0gSc5EULX8rFwv1yNgBgVxhm+XNskJ0LA5kgSp1BRRRDcKfyF+Az6khwJqQSPEguxDgHwjUARSkGgxISAizJMOnyFANUhkqh1eR0QsgLAGYEeXu/NvydQ4An4R6KAEMJugR7v+CxiO2cQPs7p7HohpIktgqlq0ksx3g7BJDyHMEiUEAJhvosyGs5xWHBvIMSdPm2EtAjSKnTL2CkauR62mtAvEA6JIkIgqL686LrAe4OypFqijJDu0DHJoMBcNdUxIc2COoJ+lwKPGITR/1HHhEjSSSNwmFD7yyCMitjqnZAXDPqcdZVobRVcPFWb1DshmwQ6OfFCOwWCqLyz3glpE+jkJOHaZxAyKay1LTshCwU1abtcCNpjEEKV5qGRKCSE8KtBJ8p9ed+sQntYmgkxeVoUPtSMlwxC6DSrRkIezkEvU3qJ5rJmDBmE0EEZjYTM8P4XEh+FSMUXlZA0B1KCEKLRZF1nUaVO7+stk8nSuKlX7s9MK1spQTZ1k9v7C/JDr7KVciKE26sxMNRISrDAUGPqRKP5CpY6aREIoqPHeaPXcqXs9HDQ1SR3ZVnT7xpXSrD0O7hOtZowOpSvBb05rZRjBlnfwSEGDMKmAtVjaSVliWBl7oNDrBdcmLYGLTsCmq/tAhnkHDktA7pgEEitMLShJxAppgid5u5yx9f2b4qkmtBp9si0Yadn89UqIN3Lj1WyLKmsEiUg5R6L7+4XfCc1vHGOKwWtWs8o29yzmK9RrrNyWWxNc+cFplR8yo1cUNCVMsJV/q7yfN4PL60VKDDOh1mKRsqIJRkrOdgzzccaeMbXAiVoJWlGzxzzZWOmKnhfMA/kfXmHJCaZ4YORKMBKGbFcGeDCaYmDEGwOjgqUGcuro4FlQtCWDGob+7vg+p2mSkxYI3QjqcVRA8qDBj4HY7puMoc3h1buDeGy1RqbZIEk5qDxCnLAUgB/CBV8FMVHn0Xzmdyas20RKjnNLY6Kis0WOTGXbagy4YBQUdpzHkfx8JAFGa9CARq5vV0qHHsL0uKvwWLPoHHcR0a3lhv8ppzOXO9Ls0u8TOhNVQY9ZOBGKEOHZZvYMaXB4zphnFEZ5zU/a2RjhkbKnyh5ktqKjI2UbVL1uWBbhlbj41zVtzgHfZs5aytJFM4lw0vLDF8HILM04x/nQDLEncdW3rQlLZb+z0xpqEWz3lNsNvp01pjmdhXdGbKw1dDMK/hQDY+rOK15z5B4XzYucTqPaRjlQrQu9maojtaEhSy/iz97rAYSZru26rypLHGKNO+VCsclrjQf5ZVUeeTRQX7tRAbnQtL6VU2c4Sr9cMrxJKUBxkkN6RBfIBv+ogPTkQZ8bJ7mANYZVgvqhdMcB91cugl1iHYODFNlj16te7TzCdWJHEiYYNPkvTqkiFjEscewoJa4lnGByzu3+ixiKxsaOdHXz5UhtqmN2eMs7wv7uAq9VO5rnlgF4HZ+lsduPrfyMteBDfHfA1w9uYvfG6pTakREREREREREREREBIqIfwDeCy8YmpE8twAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
