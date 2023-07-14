import { BestSellers } from "../components/User/Home/BestSellers";
import { DailyDeals } from "../components/User/Home/DailyDeals";
import { Footer } from "../components/User/Footer";
import { HeroCarousel } from "../components/User/Home/HeroCarousel";
import { NavBar } from "../components/User/NavBar";
import { ShopByLifeStyle } from "../components/User/Home/ShopByLifestyle";
import { ShopCategories } from "../components/User/Home/ShopCategories";

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
