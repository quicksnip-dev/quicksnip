import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(string: string, separator = "-") {
  return string
    .toString() // Cast to string (optional)
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, separator) // Replace spaces with {separator}
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\_/g, separator) // Replace _ with {separator}
    .replace(/\-\-+/g, separator) // Replace multiple - with single {separator}
    .replace(/\-$/g, ""); // Remove trailing -
}

const ACRONYMS: Record<string, string> = { dom: "DOM", id: "ID", json: "JSON", api: "API", css: "CSS", html: "HTML" };

export function unslugify(string: string) {
  return string
    .trim()
    .split("-")
    .filter(Boolean)
    .map((word) => ACRONYMS[word] ?? word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
