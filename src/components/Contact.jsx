import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20"
    >
      <div className="container-custom">

        <div className="text-center mb-12">

          <h2 className="text-4xl">
            Contact Details
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="glass-card rounded-2xl p-8 text-center">

            <FaMapMarkerAlt
              className="gold mx-auto text-2xl mb-4"
            />

            <h3 className="mb-3">
              Address
            </h3>

            <p className="text-gray-400">
              123 Street,
              Almora, India
            </p>

          </div>

          <div className="glass-card rounded-2xl p-8 text-center">

            <FaPhoneAlt
              className="gold mx-auto text-2xl mb-4"
            />

            <h3 className="mb-3">
              Phone
            </h3>

            <p className="text-gray-400">
              +91 9876543210
            </p>

          </div>

          <div className="glass-card rounded-2xl p-8 text-center">

            <FaEnvelope
              className="gold mx-auto text-2xl mb-4"
            />

            <h3 className="mb-3">
              Email
            </h3>

            <p className="text-gray-400">
              hello@namastecafe.com
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;