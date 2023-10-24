"use client"

import Image from "next/image"
import { DragEventHandler } from "react"
// import AliceCarousel, { Responsive } from "react-alice-carousel"
// import "react-alice-carousel/lib/alice-carousel.css"

// const sejarahJson = [
//     { tahun: "2019/2020", img: "/images/sejarah_img.jpg" },
//     { tahun: "2020/2021", img: "/images/sejarah_img.jpg" },
//     { tahun: "2021/2022", img: "/images/sejarah_img.jpg" },
//     { tahun: "2022/2023", img: "/images/sejarah_img.jpg" },
//     { tahun: "2023/2024", img: "/images/sejarah_img.jpg" },
// ]

// const handlerDragStart: DragEventHandler<HTMLDivElement> = (event) => event.preventDefault()

// const sejarahPeriode = sejarahJson.map((value, index) => (
//     <div key={index} onDragStart={handlerDragStart}>
//         <Image src={value.img} alt={value.tahun} width={380} height={380} className="rounded-xl" />
//         <div className="px-4 py-2 rounded-xl w-fit bg-[#B8A698]">{value.tahun}</div>
//     </div>
// ))

// const CarouselResponsive: Responsive = {
//     0: {
//         items: 1,
//     },
//     1024: {
//         items: 3,
//         itemsFit: "contain",
//     },
// }

export default function PeriodeCarousel() {
    return (
        <section className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-[#2F292D]">
            <div className="container">
                <h2 className="uppercase text-white text-center mb-28">
                    SEJARAH PERIODE PPI TURKI
                </h2>
                {/* <AliceCarousel
                    infinite
                    responsive={CarouselResponsive}
                    disableDotsControls
                    items={sejarahPeriode}
                /> */}
            </div>
        </section>
    )
}
