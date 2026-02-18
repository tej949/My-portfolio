import React from "react";
import {Hero} from "./sections/Hero";
import About from "./sections/about.jsx";
import ShowCaseSection from "./sections/ShowCaseSection";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeaturedCards from "./sections/FeaturedCards.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
const App = () => {
    return (
        <>
        <NavBar />
        <Hero />
        <About />
        <ShowCaseSection />
        <LogoSection />
        <FeaturedCards/>
        <Contact />
        <Footer />
        </>
    )
}
export default App;