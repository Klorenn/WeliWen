"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Instagram, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "./language-provider"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: t.nav.inicio },
    { href: "#nosotros", label: t.nav.nosotros },
    { href: "#directora", label: t.nav.directora },
    { href: "#montajes", label: t.nav.montajes },
    { href: "#hitos", label: t.nav.hitos },
    { href: "#galeria", label: t.nav.galeria },
    { href: "#contacto", label: t.nav.contacto },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={cn(
                "font-serif text-2xl font-semibold tracking-wide transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              WELIWEN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <span
              className={cn(
                "h-5 w-px shrink-0",
                isScrolled ? "bg-foreground/15" : "bg-white/30"
              )}
              aria-hidden
            />
            <div className="flex items-center gap-5">
              <LanguageSwitcher scrolled={isScrolled} />
              <a
                href="https://instagram.com/weliwen.balletfolkloricochile"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors duration-300 hover:opacity-70",
                  isScrolled ? "text-foreground" : "text-white"
                )}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher scrolled={isScrolled} className="self-start" />
            <a
              href="https://instagram.com/weliwen.balletfolkloricochile"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
