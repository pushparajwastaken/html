import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names conpm install clsxnditionally and resolves Tailwind conflicts.
 *
 * Example:
 * cn("p-2", condition && "bg-red-500", "p-4")
 * → "bg-red-500 p-4" (p-2 removed due to conflict)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
