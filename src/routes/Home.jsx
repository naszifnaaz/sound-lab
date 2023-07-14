import { BestSellers } from "../components/home/BestSellers";
import { DailyDeals } from "../components/home/DailyDeals";
import { Footer } from "../components/Footer";
import { HeroCarousel } from "../components/home/HeroCarousel";
import { NavBar } from "../components/NavBar";
import { ShopByLifeStyle } from "../components/home/ShopByLifestyle";
import { ShopCategories } from "../components/home/ShopCategories";

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
