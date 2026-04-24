"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "./language-provider"

export function Director() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="directora"
      ref={sectionRef}
      className="bg-muted py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image */}
          <div
            className={`order-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/images/carla-weliwen.jpg"
                alt={t.director.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Optional overlay gradient for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`order-2 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
              {t.director.label}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl text-balance">
              {t.director.title}
            </h2>
            <div className="mt-6 mb-8">
              <h3 className="text-2xl font-medium text-foreground">{t.director.name}</h3>
              <p className="text-primary font-medium tracking-wide mt-1 uppercase text-sm">{t.director.roles}</p>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>{t.director.p1}</p>
              <p>{t.director.p2}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
