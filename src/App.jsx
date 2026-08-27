import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingBar from "./components/BookingBar";
import AboutUs from "./components/AboutUs";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import ContactMap from "./components/ContactMap";
import Footer from "./components/Footer";
import Events from "./components/Events";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-slate-50">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <BookingBar />
        <AboutUs />
        <Rooms />
        <Facilities />
        <Events />
        <Gallery />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
