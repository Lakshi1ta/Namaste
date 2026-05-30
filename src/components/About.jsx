const About = () => {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="container-custom">

        <div className="text-center mb-12">

          <h3 className="text-xl">
            Our Story
          </h3>

        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}

          <div>

            <h2 className="text-4xl md:text-5xl leading-tight mb-6">

              More than
              <br />
              Just a cafe

            </h2>

            <p className="text-gray-300 leading-8">

              Lorem Ipsum is standard placeholder
              or dummy text used in graphic
              design, publishing and web
              development to demonstrate visual
              layouts without the distraction of
              meaningful content.

            </p>

          </div>

          {/* Right Image */}

          <div className="flex justify-center">

            <div className="w-full max-w-sm h-[350px] rounded-3xl overflow-hidden bg-gray-300">

              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
                alt="Cafe Interior"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;