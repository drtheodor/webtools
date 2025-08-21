import ImageOptions from "@/components/partials/ImageOptions.astro";
import type { FormatOption } from "./formats";

export type CompVariant = '' | 'primary' | 'secondary' | 'accent' | 'success' | 'error';
export type ButtonHTMLAttrType = 'submit' | 'reset' | 'button' | undefined | null;

export interface ImageOptions {
    format?: FormatOption;
    quality?: number;
    width: number;
    height: number;
    valid: boolean;
};

export interface HTMLImageOptions extends ImageOptions {
    disabled: boolean;
};

export function debounce(callback, delay: number) {
    let timeoutId: number;
    return (...args: any[]) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => callback(...args), delay);
    };
}