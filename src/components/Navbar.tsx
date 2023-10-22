"use client"

import Link from "next/link"
import LogoNavbar from "./LogoNavbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Navbar() {
    const [showNav, setShowNav] = useState<boolean>(false)

    return (
        <section className="navbar-container">
            <LogoNavbar />
            <div className="navlist-container">
                <button className="block lg:hidden text-white" onClick={() => setShowNav(true)}>
                    <FontAwesomeIcon icon={faBars} size="xl" />
                </button>
                <ul className={`navbar-list ${showNav ? "active" : ""}`}>
                    <li>
                        <button
                            className="block lg:hidden text-white"
                            onClick={() => setShowNav(false)}
                        >
                            <FontAwesomeIcon icon={faXmark} size="xl" />
                        </button>
                    </li>
                    <li>
                        <Link href="/aboutppi">about ppi</Link>
                    </li>
                    <li>
                        <Link href="/departemen">departemen</Link>
                    </li>
                    <li>
                        <Link href="/ppiwilayah">ppi wilayah</Link>
                    </li>
                    <li>
                        <Link href="/bph">bph</Link>
                    </li>
                    <li>
                        <Link href="/new">news</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}
