import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-[700px] md:h-[780px]"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="container-custom relative z-10 h-full">

        <div className="flex h-full items-center">

          <div className="max-w-md mt-20">

            <h1
              className="
                text-5xl
                md:text-6xl
                font-medium
                leading-[1.25]
                text-white
                mb-6
              "
            >
              Good Food
              <br />
              Good Times
            </h1>

            <p
              className="
                text-white/90
                text-lg
                leading-8
                mb-10
              "
            >
              Coffee, Pizza, Burgers and more.....
              <br />
              All in one place
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="
                bg-[#d4a24c]
                hover:bg-[#c5943c]
                text-white
                px-8
                py-4
                rounded-xl
                text-lg
                font-medium
                transition
              "
            >
              Explore Menu →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;