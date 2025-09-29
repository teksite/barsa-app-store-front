
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function HtmlContent({ html }: { html: string }) {
    return { __html: html };
}



export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}