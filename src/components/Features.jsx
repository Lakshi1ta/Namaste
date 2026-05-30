import {
  FaCoffee,
  FaUtensils,
  FaCouch,
  FaUsers,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaCoffee />,
      title: "Great Coffee",
      text: "Fresh coffee with great quality",
    },
    {
      icon: <FaUtensils />,
      title: "Delicious Food",
      text: "Great taste with good quality",
    },
    {
      icon: <FaCouch />,
      title: "Cozy Ambience",
      text: "Relax and enjoy a warm atmosphere",
    },
    {
      icon: <FaUsers />,
      title: "Friendly Service",
      text: "Serving every guest with a smile",
    },
  ];

  return (
    <section className="relative -mt-28 z-20">
      <div className="container-custom">

        <div className="glass-card rounded-2xl overflow-hidden">

          <div className="grid grid-cols-2 md:grid-cols-4">

            {features.map((item, index) => (
              <div
                key={index}
                className="relative text-center p-8 md:p-10"
              >
                <div className="gold text-3xl flex justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-6">
                  {item.text}
                </p>

                {/* Vertical Divider */}

                {index !== features.length - 1 && (
                  <div
                    className="
                      hidden md:block
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      h-24
                      w-[1px]
                      bg-[#d4a24c]/40
                    "
                  />
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;