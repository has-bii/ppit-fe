import Navbar from "@/components/Navbar"

export default function Home() {
    return (
        <main>
            <section className="h-screen min-h-[535px] bg-[url('/images/hero.jpg')] bg-cover bg-top bg-no-repeat bg-black/30 bg-blend-multiply">
                <Navbar />
                <h1 className="lg:text-9xl text-5xl whitespace-nowrap text-white font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    PPI TURKI
                </h1>
            </section>
        </main>
    )
}
