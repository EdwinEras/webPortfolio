/** Joins class names, dropping anything falsy. Keeps conditional classes
 *  readable at the call site without pulling in a dependency. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
