import { CategoryCard } from "./CategoryCard";

export const ShopCategories = () => {
  return (
    <div className="w-9/12 m-auto">
      <h2 className="text-2xl mt-5 ml-5 lg:my-5">
        Shop By{" "}
        <span className="text-2xl font-semibold link link-underline link-underline-black text-black ">
          Categories
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 m-3">
        {Categories.map((category, index) => {
          return <CategoryCard category={category} />;
        })}
      </div>
    </div>
  );
};

const Categories = [
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    title: "True Wireless Earbuds",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854",
    title: "Neckbands",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854",
    title: "Wireless Headphones",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854",
    title: "Wireless Speakers",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854",
    title: "Wired Headphones",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228",
    title: "Party Speakers",
  },
];
