const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  ];

  return (
    <section
      id="gallery"
      className="py-20"
    >
      <div className="container-custom">

        <div className="text-center mb-12">

          <h2 className="text-4xl">
            Gallery
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;