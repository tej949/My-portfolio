import React from "react";
import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";


const NavBar = () => {
    const[strolled, setStrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setStrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    } , [])

    return (
        <header className={`navbar ${strolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    V Tejomai
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar