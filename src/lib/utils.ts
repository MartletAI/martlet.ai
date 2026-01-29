/**
 * Utility function to conditionally join class names.
 * Filters out falsy values and joins remaining strings with a space.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
