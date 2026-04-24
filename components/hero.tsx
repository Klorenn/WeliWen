"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "./language-provider"

export function Hero() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true)
      })
    }
  }, [])

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Fallback Image */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/hero-poster.jpg"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/weliwen-hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/images/hero-poster.jpg"
          alt={t.hero.posterAlt}
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-serif text-6xl font-semibold tracking-widest text-white sm:text-7xl md:text-8xl lg:text-9xl">
            WELIWEN
          </h1>
          <p className="mt-4 text-sm font-light tracking-[0.3em] text-white/90 sm:text-base md:text-lg">
            {t.hero.tagline}
          </p>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#galeria"
            className="group inline-flex items-center gap-2 border border-white/50 px-8 py-3 text-sm font-medium tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-foreground"
          >
            {t.hero.cta}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#nosotros"
            className="flex flex-col items-center text-white/70 transition-colors hover:text-white"
            aria-label={t.hero.scrollAria}
          >
            <span className="mb-2 text-xs tracking-widest">{t.hero.scrollLabel}</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
