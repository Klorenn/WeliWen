"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "./language-provider"

const instagramPosts = [
  {
    id: "1",
    url: "https://www.instagram.com/p/DMpnEqtOW9O/",
  },
  {
    id: "2",
    url: "https://www.instagram.com/p/DMpmeO7Ofni/",
  },
  {
    id: "3",
    url: "https://www.instagram.com/p/DMn6ipxSjzT/",
  },
  {
    id: "4",
    url: "https://www.instagram.com/p/DL97nputR7q/",
  },
  {
    id: "5",
    url: "https://www.instagram.com/p/DL5cQcYMoi5/",
  },
  {
    id: "6",
    url: "https://www.instagram.com/p/DHY5V56OCK-/",
  },
]

const ITEMS_VISIBLE = 2

function shortcodeFromInstagramUrl(url: string): string | null {
  const m = url.match(/instagram\.com\/(?:p|reel)\/([^/?#]+)/)
  return m?.[1] ?? null
}

function InstagramPostPreview({ url }: { url: string }) {
  const { t } = useLanguage()
  const shortcode = shortcodeFromInstagramUrl(url)
  if (!shortcode) return null

  const embedSrc = `https://www.instagram.com/p/${shortcode}/embed/`

  return (
    <div className="w-full max-w-[326px] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
      <iframe
        key={embedSrc}
        src={embedSrc}
        title={t.gallery.instagramEmbed(shortcode)}
        className="block h-[min(520px,80vh)] w-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  )
}

export function Gallery() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [page, setPage] = useState(0)

  const pageCount = Math.ceil(instagramPosts.length / ITEMS_VISIBLE)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const next = () => {
    setPage((p) => (p + 1) % pageCount)
  }

  const prev = () => {
    setPage((p) => (p - 1 + pageCount) % pageCount)
  }

  const visiblePosts = Array.from({ length: ITEMS_VISIBLE }, (_, i) => {
    const idx = page * ITEMS_VISIBLE + i
    return instagramPosts[idx % instagramPosts.length]
  })

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="bg-secondary py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            {t.gallery.label}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground md:text-5xl text-balance">
            {t.gallery.title}
          </h2>
          <a
            href="https://instagram.com/weliwen.balletfolkloricochile"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
            @weliwen.balletfolkloricochile
          </a>
        </div>

        {/* Carousel: vistas previas reales vía iframe oficial de Instagram */}
        <div className="mt-16">
          <div className="flex flex-col items-stretch justify-center gap-6 md:flex-row md:items-center">
            <button
              type="button"
              onClick={prev}
              className="order-2 flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-full border border-foreground/15 bg-background transition-colors hover:bg-primary hover:text-primary-foreground md:order-none"
              aria-label={t.gallery.prevAria}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="order-1 flex min-h-[min(520px,80vh)] flex-1 flex-wrap items-start justify-center gap-6 md:order-none md:gap-8">
              {visiblePosts.map((post) => (
                <InstagramPostPreview key={`${post.id}-${page}`} url={post.url} />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="order-3 flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-full border border-foreground/15 bg-background transition-colors hover:bg-primary hover:text-primary-foreground md:order-none"
              aria-label={t.gallery.nextAria}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <p
            className="mt-6 text-center text-xs text-muted-foreground"
            aria-live="polite"
          >
            {t.gallery.previewRange(
              page * ITEMS_VISIBLE + 1,
              Math.min((page + 1) * ITEMS_VISIBLE, instagramPosts.length),
              instagramPosts.length
            )}
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://instagram.com/weliwen.balletfolkloricochile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-foreground px-8 py-3 text-sm font-medium tracking-widest text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            <Instagram className="h-5 w-5" />
            {t.gallery.viewMore}
          </a>
        </div>
      </div>
    </section>
  )
}
