import Navbar from "@/components/Navbar"
import PeriodeCarousel from "@/components/PeriodeCarousel"

export default function Home() {
    return (
        <main>
            {/* Hero section start */}
            <section className="h-screen min-h-[768px] bg-[url('/images/hero.jpg')] bg-cover bg-top bg-no-repeat bg-black/30 bg-blend-multiply">
                <Navbar />
                <h1 className="whitespace-nowrap text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    PPI TURKI
                </h1>
            </section>
            {/* Hero section end */}

            {/* Sejarah section start */}

            <PeriodeCarousel />

            {/* Sejarah section end */}
        </main>
    )
}
