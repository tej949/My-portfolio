import { words } from "../constants/index.js";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import Button from "../components/Button.jsx";"../components/Button.jsx";

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">

            {/* Headline */}
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* Intro Text */}
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi! I’m Tejomai.<br />
              A Computer Science undergraduate focused on building secure backend
              systems <br />
              and modern frontend applications with real-world projects
            </p>

            {/* ✅ VIEW RESUME BUTTON */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1VDJqwZdv8RINPUHrCkUBmfwcS1fCuV3l/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3
                           px-8 py-4 rounded-full
                           bg-[#CFFCF2] text-black
                           text-lg font-medium
                           hover:bg-[#B6F5E6]
                           transition-all duration-300"
              >
                View Resume
              </a>
            </div>

          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>

        <div className="hero-3d-layout border-red-200-border-2"></div>
      </div>
    </section>
  );
};