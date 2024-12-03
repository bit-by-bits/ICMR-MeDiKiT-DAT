import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges and combines class names while handling duplicates
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

// Capitalizes the first letter of a string
export function capitalizeWord(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

// Validates if a URL is an image based on its extension
export function isValidImageURL(url: string): boolean {
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;
  return imageExtensions.test(url) || /^(https?:\/\/.*)/.test(url);
}
