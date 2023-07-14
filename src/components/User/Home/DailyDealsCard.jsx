import { AiFillStar } from "react-icons/ai";

export const DailyDealsCard = ({ product }) => {
  return (
    <div className="m-4">
      <img
        src={product.img}
        alt="daily-deal"
        width={"322px"}
        className="rounded-t-lg bg-slate-100"
      />

      <div className="flex-row p-4 bg-slate-200 mb-4 rounded-b-lg lg:flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <AiFillStar color="orange" />
            <h2 className="pl-1 font-light text-sm">{product.rating}</h2>
          </div>
          <h2 className="font-bold text-sm">{product.name}</h2>
          <div className="flex items-center">
            <h2 className="mr-2 p-0.5 font-bold text-sm">{product.price}</h2>
            <h2 className="mr-2 p-0.5 text-sm font-light text-cyab-300 line-through">
              {product.striked_price}
            </h2>
            <h2 className="mr-2 p-0.5 text-xs text-green-500 font-semibold">
              {product.offer}
            </h2>
          </div>
        </div>
        <button className=" bg-black text-white border-2 border-white p-3 rounded-md text-sm hover:bg-white hover:text-black hover:border-2 hover:border-black hover:font-extrabold mt-1">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
