import { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
const menuData = {
  Coffee: [
    {
      name: "Espresso",
      desc: "Strong and rich coffee shot",
      price: "₹149",
      image: "/espresso.png",
    },
    {
      name: "Latte",
      desc: "Smooth milk coffee",
      price: "₹199",
      image: "/latte.png",
    },
    {
      name: "Cappuccino",
      desc: "Creamy foamed coffee",
      price: "₹249",
      image: "/cappuchino.png",
    },
    {
      name: "Mocha",
      desc: "Coffee with chocolate",
      price: "₹279",
      image: "/mocha.jpg"
    },
    {
      name: "Cold Coffee",
      desc: "Refreshing chilled coffee",
      price: "₹229",
      image: "/cold-coffee.jpg",
    },
  ],

  Pizza: [
    {
      name: "Margherita",
      desc: "Classic delight with cheese",
      price: "₹399",
      image: "/Margherita.png",
    },
    {
      name: "Farmhouse",
      desc: "Loaded with veggies",
      price: "₹499",
      image: "/farmhouse.png",
    },
    {
      name: "Pepperoni",
      desc: "Pepperoni with herbs",
      price: "₹599",
      image: "/pepperoni.png",
    },
    {
      name: "BBQ Chicken",
      desc: "Chicken with BBQ sauce",
      price: "₹699",
      image: "/bbq-chicken-pizza.jpg",
    },
    {
      name: "Meat Lovers",
      desc: "Loaded meat pizza",
      price: "₹799",
      image: "/meatlovers-pizza.jpg",
    },
  ],

  Burgers: [
    {
      name: "Classic Burger",
      desc: "Beef patty with lettuce",
      price: "₹249",
      image: "/classic-burger.png",
    },
    {
      name: "Cheese Burger",
      desc: "Loaded with cheese",
      price: "₹299",
      image: "/cheese-burger.png",
    },
    {
      name: "Chicken Burger",
      desc: "Crispy chicken burger",
      price: "₹349",
      image: "/chicken-burger.png",
    },
    {
      name: "Spicy Burger",
      desc: "Spicy chicken burger",
      price: "₹379",
      image: "/spicy-burger.jpg",
    },
    {
      name: "Double Patty",
      desc: "Double layer burger",
      price: "₹449",
      image: "/double-patty.jpg",
    },
  ],

  "Fast Food": [
    {
      name: "French Fries",
      desc: "Crispy golden fries",
      price: "₹149",
      image: "/french-fries.png",
    },
    {
      name: "Garlic Bread",
      desc: "Toasted garlic bread",
      price: "₹199",
      image: "/garlic-bread.jpg",
    },
    {
      name: "Chicken Nuggets",
      desc: "Crunchy nuggets",
      price: "₹249",
      image: "/chicken-nuggets.jpg",
    },
    {
      name: "Chicken Wings",
      desc: "Spicy wings",
      price: "₹299",
      image: "/chicken-wings.jpg",
    },
    {
      name: "Loaded Nachos",
      desc: "Cheesy nachos",
      price: "₹349",
      image: "/Nachos.jpg",
    },
  ],

  Drinks: [
    {
      name: "Mojito",
      desc: "Mint & lime drink",
      price: "₹199",
      image: "/mojito.jpg",
    },
    {
      name: "Lemon Soda",
      desc: "Refreshing soda",
      price: "₹149",
      image: "/lemon-soda.jpg",
    },
    {
      name: "Iced Tea",
      desc: "Chilled tea",
      price: "₹179",
      image: "/iced-tea.jpg",
    },
    {
      name: "Orange Juice",
      desc: "Fresh fruit juice",
      price: "₹199",
      image: "/orange-juice.jpg",
    },
    {
      name: "Milkshake",
      desc: "Creamy thick shake",
      price: "₹249",
      image: "/milkshake.jpg",
    },
  ],

  Desserts: [
    {
      name: "Brownie",
      desc: "Chocolate brownie",
      price: "₹149",
      image: "/brownie.png",
    },
    {
      name: "Cheesecake",
      desc: "Creamy cheesecake",
      price: "₹249",
      image: "/cheesecake.png",
    },
    {
      name: "Chocolate Cake",
      desc: "Rich chocolate cake",
      price: "₹299",
      image: "/chocolate-cake.png",
    },
    {
      name: "Ice Cream",
      desc: "Vanilla delight",
      price: "₹149",
      image: "/ice-cream.jpg",
    },
    {
      name: "Waffles",
      desc: "Fresh waffles",
      price: "₹249",
      image: "/waffle.jpg",
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Coffee");

  const items = menuData[activeCategory];

  return (
    <div className="min-h-screen  wood-bg">
      <Navbar />

      <section className="pt-32 z-2 pb-20">
        <div className="container-custom">

          {/* Heading */}

          <div className="text-center text-white mb-12">
            <h1 className="text-5xl text-white mb-4">
              Our Menu
            </h1>

            <div className="w-60 h-[2px] bg-[#d4a24c] mx-auto mb-4"></div>

            <p className="text-white">
              A delicious range of coffee, bites,
              meals and more
            </p>
          </div>

          {/* Filters */}

          <div className="flex flex-wrap justify-center gap-4 mb-12">

            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`px-6 py-2 rounded-lg transition font-medium ${
                  activeCategory === category
                    ? "bg-[#d4a24c] text-white"
                    : "glass-card hover:bg-[#d4a24c]/20"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Menu Items */}

          <div className="glass-card rounded-2xl  overflow-hidden">

            {items.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-5
                  border-b
                  border-white/10
                  last:border-b-0
                "
              >
                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-16
                      h-16
                      rounded-full
                      object-cover
                      border-2
                      border-[#d4a24c]
                    "
                  />

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {item.desc}
                    </p>
                  </div>

                </div>

                <p className="text-[#d4a24c] font-semibold text-lg">
                  {item.price}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
      <Contact/>
    </div>
  );
};

export default Menu;