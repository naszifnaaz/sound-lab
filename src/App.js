import { BestSellers } from "./components/BestSellers";
import { HeroCarousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroCarousel />
      <BestSellers />
      <Footer />
    </div>
  );
}

export default App;
