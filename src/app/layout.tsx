import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
config.autoAddCss = false
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "PPI Turki | Perhimpunan Pelajar Indonesia di Turki",
    description:
        "Website resmi Perhimpunan Pelajar Indonesia di Turki. The official website of PPI Turki.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
