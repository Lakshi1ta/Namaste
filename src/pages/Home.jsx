import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Deals from "../components/Deals";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import OrderBanner from "../components/OrderBanner";

const Home = () => {
  return (
    <main className="wood-bg min-h-screen">

      <div className="section-content">

        <Navbar />
<Hero />
<Features />
<About />
<Deals />
<Contact />
<OrderBanner/>
<Gallery />
<Footer />
      </div>

    </main>
  );
};

export default Home;