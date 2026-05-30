const Deals = () => {
  return (
    <section >

      <div >

        <div className="glass-card h-72 overflow-hidden">

          <div className="grid md:grid-cols-2">

            <div className="p-5 mb-6 flex flex-col justify-center">

              <span className="gold text-sm tracking-[3px] uppercase">
                Special Offer
              </span>

              <h2 className="text-4xl mt-4 mb-5">
                Current Deals
              </h2>

              <p className="text-gray-400 leading-7 mb-6">
                Enjoy exclusive combos, handcrafted coffee,
                burgers and pizzas at special prices.
              </p>

              <button className="btn-primary w-fit">
                View Offers
              </button>

            </div>

            <div className="h-[350px]">

              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                alt=""
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Deals;