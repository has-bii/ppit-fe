import Image from "next/image"

export default function LogoNavbar() {
    return (
        <div className="inline-flex items-center gap-2 lg:gap-4">
            <div className="h-16 w-16 relative">
                <Image
                    src="/images/logo_ppit.png"
                    priority
                    fill={true}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    alt="logo PPI Turki"
                />
            </div>
            <div className="h-16 w-16 relative">
                <Image
                    src="/images/logo_kabinet.png"
                    priority
                    fill={true}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    alt="logo Kabinet"
                />
            </div>
        </div>
    )
}
