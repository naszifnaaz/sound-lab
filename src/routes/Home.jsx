import { BestSellers } from "../components/BestSellers";
import { DailyDeals } from "../components/DailyDeals";
import { Footer } from "../components/Footer";
import { HeroCarousel } from "../components/HeroCarousel";
import { NavBar } from "../components/NavBar";
import { ShopByLifeStyle } from "../components/ShopByLifestyle";
import { ShopCategories } from "../components/ShopCategories";

export const Home = () => {
  return (
    <>
      <NavBar />
      <HeroCarousel />
      <BestSellers />
      <DailyDeals />
      <ShopCategories />
      <ShopByLifeStyle />
      <Footer />
    </>
  );
};
