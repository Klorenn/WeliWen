"use client"

import Link from "next/link"
import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer id="contacto" className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="/">
            <span className="font-serif text-3xl font-semibold tracking-widest">
              WELIWEN
            </span>
          </Link>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/80">
            <span className="block font-medium text-background">
              {t.footer.generalDirector}
            </span>
            <span className="mt-1 block tracking-wide text-background/70">
              Carla Vidal Sepúlveda
            </span>
          </p>

          {/* Location */}
          <p className="mt-6 flex items-center justify-center gap-2 text-sm tracking-wide text-background/70">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {t.footer.location}
          </p>

          {/* Email */}
          <a
            href="mailto:balletfkloricoweliwenchile@gmail.com"
            className="mt-3 block text-sm tracking-wide text-background/70 transition-colors hover:text-background"
          >
            balletfkloricoweliwenchile@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+56942871022"
            className="mt-2 inline-flex items-center justify-center gap-2 text-sm tracking-wide text-background/70 transition-colors hover:text-background"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            +56 9 4287 1022
          </a>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://instagram.com/weliwen.balletfolkloricochile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 transition-colors hover:text-background"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@weliwen.balletfolklorico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 transition-colors hover:text-background"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/56942871022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 transition-colors hover:text-background"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="mt-12 h-px w-full max-w-xs bg-background/20" />

          {/* Copyright */}
          <p className="mt-8 text-xs tracking-wide text-background/50">
            {t.footer.rights(year)}
          </p>
        </div>
      </div>
    </footer>
  )
}
