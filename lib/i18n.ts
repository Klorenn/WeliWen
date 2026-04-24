export type Locale = "es" | "en" | "pt"

export const locales: Locale[] = ["es", "en", "pt"]

export const defaultLocale: Locale = "es"

export function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en" || value === "pt"
}
