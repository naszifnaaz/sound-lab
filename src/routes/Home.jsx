import { BestSellers } from "../components/BestSellers";
import CartDrawer from "../components/CartDrawer";
import { Footer } from "../components/Footer";
import { HeroCarousel } from "../components/HeroCarousel";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <HeroCarousel />
      <BestSellers />
      <Footer />
    </>
  );
};
