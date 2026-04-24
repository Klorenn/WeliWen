"use client"

import { ChevronDown } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { locales } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Messages } from "@/lib/translations"
import { useLanguage } from "./language-provider"

const localeLongKey: Record<
  Locale,
  keyof Pick<Messages["lang"], "nameEs" | "nameEn" | "namePt">
> = {
  es: "nameEs",
  en: "nameEn",
  pt: "namePt",
}

type Props = {
  /** Header sobre el video: texto claro; con scroll: texto oscuro */
  scrolled: boolean
  className?: string
}

export function LanguageSwitcher({ scrolled, className }: Props) {
  const { locale, setLocale, t } = useLanguage()

  const triggerClass = cn(
    "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium tracking-wide outline-none transition-[color,background-color,border-color,box-shadow]",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    scrolled
      ? "border-foreground/12 bg-background/90 text-foreground shadow-sm backdrop-blur-sm hover:border-foreground/20 hover:bg-muted/80 focus-visible:ring-foreground/25 focus-visible:ring-offset-background"
      : "border-white/40 bg-white/[0.12] text-white shadow-[0_2px_20px_rgba(0,0,0,0.18)] backdrop-blur-md hover:border-white/55 hover:bg-white/[0.2] focus-visible:ring-white/40 focus-visible:ring-offset-0"
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn("group", triggerClass, className)}
        aria-label={t.lang.switchLabel}
      >
        <span className="tabular-nums">{t.lang[locale]}</span>
        <ChevronDown
          className="size-4 shrink-0 opacity-90 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="min-w-[11.5rem] rounded-xl border-border/60 p-1.5 shadow-lg"
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => setLocale(value as Locale)}
        >
          {locales.map((code) => {
            const nameKey = localeLongKey[code]
            const label = t.lang[nameKey]
            return (
              <DropdownMenuRadioItem
                key={code}
                value={code}
                className="cursor-pointer rounded-lg py-2 pl-8 pr-2"
              >
                <span className="flex w-full items-center justify-between gap-4">
                  <span className="font-medium">{label}</span>
                  <span className="text-muted-foreground text-xs font-semibold tabular-nums tracking-wide">
                    {t.lang[code]}
                  </span>
                </span>
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
