import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* PROJECT 1 */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="images/Project1.png"
                alt="Ethereum Transaction System"
              />
            </div>

            <div className="text-content">
              <h2>
                Blockchain-Based Ethereum Transaction System with Auditable On-Chain Records
              </h2>

              <p className="text-white-50 md:text-xl">
                Built a lightweight Ethereum-based system to send ETH and persist
                compact, auditable transaction metadata on-chain using Solidity
                smart contracts.
              </p>

              <p className="mt-4 text-sm text-white-50">
                Tech Stack: Solidity, Hardhat, ethers.js, MetaMask, TypeScript,
                React, Vite
              </p>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://your-ethereum-live-site.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                >
                  View Live →
                </a>

                <a
                  href="https://github.com/tej949/blockchain-based-application-for-sending-and-storing-Ethereum.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github.png"
                    alt="GitHub"
                    className="w-9 h-9 hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT LIST */}
          <div className="project-list-wrapper overflow-hidden">

            {/* PROJECT 2 */}
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="images/Project2.png" alt="SoulVault" />
              </div>

              <h2>SoulVault — Encrypted Digital Time Capsule</h2>

              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://preview--timeless-memory-keeper.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                >
                  View Live →
                </a>

                <a
                  href="https://github.com/tej949/timeless-memory-keeper.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github.png"
                    alt="GitHub"
                    className="w-9 h-9 hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="images/Project3.png" alt="MaskerLogger" />
              </div>

              <h2>MaskerLogger — Secure Student Information System</h2>

              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://preview--secure-grade-portal.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                >
                  View Live →
                </a>

                <a
                  href="https://github.com/tej949/secure-grade-portal.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github.png"
                    alt="GitHub"
                    className="w-9 h-9 hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
          </div>

          

        </div>
      </div>
      {/* VIEW MORE PROJECTS — CENTERED */}
          <div className="md:w-80 md:h-16 w-60 h-12">
            <a
              href="https://github.com/tej949"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-10 py-4 rounded-full
                         bg-[#2F2F2F] text-white text-lg font-medium
                         border border-white/20
                         hover:bg-[#3A3A3A] hover:border-white/40
                         transition-all duration-300"
            >
              View More Projects
              <img
                src="/images/github.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>
          </div>
    </section>
  );
};

export default ShowCaseSection;