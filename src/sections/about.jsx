const About = () => (
<section id="about" className="w-full py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

    {/* Left side */}
    <div>
      <p className="text-base md:text-lg text-gray-400 mb-4">This is me.</p>

      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Hi, I’m Tejomai.
      </h1>
    </div>

    {/* Right side */}
    <div className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed space-y-6">
      <p>
        I’m a Computer Science undergraduate focused on building secure backend
        systems and modern frontend applications.
      </p>

      <p>
        I work with technologies like React, Vite, Tailwind CSS, and TypeScript
        on the frontend, and design API-driven backends with a strong emphasis
        on correctness and application security.
      </p>

      <p>
        My interests include backend engineering, system design fundamentals,
        and building reliable software through real-world projects.
      </p>
    </div>

  </div>
</section>
);

export default About;