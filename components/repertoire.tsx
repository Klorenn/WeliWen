"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "./language-provider"

export function Repertoire() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="montajes"
      ref={sectionRef}
      className="bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl lg:text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            {t.repertoire.label}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.repertoire.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t.repertoire.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {t.repertoire.items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col relative bg-muted/50 rounded-2xl p-8 hover:bg-muted transition-colors duration-300 transform-gpu ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms`, transitionDuration: '700ms' }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary font-serif font-semibold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-foreground font-serif">
                  {item.title}
                </h3>
                <p className="mt-4 flex-auto text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
