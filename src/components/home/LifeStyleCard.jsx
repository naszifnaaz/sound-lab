import { BsArrowRightCircle } from "react-icons/bs";

export const LifeStyleCard = ({ lifestyle }) => {
  return (
    <div className="flex-col align-center items-center justify-center mb-5">
      <img src={lifestyle.img} alt="Lifestyle" className="m-auto" />
      <div className="bg-slate-100 p-5 rounded-b-xl">
        <h2 className="text-center text-2xl font-black p-1">
          {lifestyle.title}
        </h2>
        <div className="flex justify-center items-center">
          <h2 className="text-center text-xs font-bold text-blue-900 pr-2">
            View All
          </h2>
          <BsArrowRightCircle />
        </div>
      </div>
    </div>
  );
};
