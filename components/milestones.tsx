"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "./language-provider"

export function Milestones() {
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
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hitos"
      ref={sectionRef}
      className="bg-background py-24 md:py-32 border-t border-muted"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl lg:text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            {t.milestones.label}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.milestones.title}
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2 lg:gap-24">
          
          {/* International Recognition */}
          <div
            className={`flex flex-col transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {t.milestones.intlTitle}
              </h3>
              <div className="h-px w-12 bg-primary" />
            </div>
            
            <div className="space-y-8">
              {t.milestones.intlItems.map((item, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                  <h4 className="text-lg font-medium text-foreground">{item.place}</h4>
                  <p className="mt-2 text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* National Presence */}
          <div
            className={`flex flex-col transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {t.milestones.natTitle}
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-8">
              {t.milestones.natItems.map((item, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                  <h4 className="text-lg font-medium text-foreground">{item.place}</h4>
                  <p className="mt-2 text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
