import { twMerge, type ClassNameValue } from "tailwind-merge";

export const cn = (...classList: ClassNameValue[]) => twMerge(classList);
