import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Director } from "@/components/director"
import { Repertoire } from "@/components/repertoire"
import { Milestones } from "@/components/milestones"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Director />
      <Repertoire />
      <Milestones />
      <Gallery />
      <Footer />
    </main>
  )
}
