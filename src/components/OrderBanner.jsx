import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

const OrderBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12">
      <div className="container-custom">

        <div className="overflow-hidden rounded-2xl bg-black">

          <div className="grid md:grid-cols-[35%_65%]">

            {/* Left Image */}

            <div className="relative   overflow-hidden">

  <img
    src="/coffee.png"
    alt="Coffee"
    className="w-full h-full object-cover"
  />

  {/* Smoke/Fade Effect */}

  <div
    className="
      absolute
      inset-y-0
      right-0
      w-32
      bg-gradient-to-r
      from-transparent
      via-black/60
      to-black
    "
  />

</div>

            {/* Right Content */}

            <div className="bg-black flex items-center px-8 md:px-12 py-8">

              <div>

                <h2 className="text-3xl mb-4">
                  Craving Something Delicious ?
                </h2>

                <p className="text-gray-300 mb-6 max-w-xl">
                  Skip the wait. Order your favourite food
                  online and enjoy at your comfort.
                </p>

                <div className="flex flex-wrap gap-4">

                  <button
                    onClick={() => navigate("/menu")}
                    className="
                      bg-[#d4a24c]
                      text-white
                      px-6
                      py-3
                      rounded-lg
                      flex
                      items-center
                      gap-2
                      hover:bg-[#bf913f]
                      transition
                    "
                  >
                    Start Ordering
                    <FaShoppingCart />
                  </button>

                  <button
                    onClick={() => navigate("/menu")}
                    className="
                      border
                      border-[#d4a24c]
                      text-white
                      px-6
                      py-3
                      rounded-lg
                      flex
                      items-center
                      gap-2
                      hover:bg-[#d4a24c]
                      hover:text-black
                      transition
                    "
                  >
                    View Menu
                    <FaArrowRight />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OrderBanner;