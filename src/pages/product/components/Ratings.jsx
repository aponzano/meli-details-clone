import {StarRating} from "../../../components/StarRating";
import {FullStar} from "../../../assets/FullStar";

const Characteristics = ({title, rating}) => {
  return (
    <div className="mb-3">
      <p className="text-sm mb-0.5">{title}</p>
      <StarRating classes={"h-4 space-x-1"} rate={rating} />
    </div>
  );
};
const RatingBar = ({progress = 0, star}) => {
  return (
    <div className="flex gap-4 items-center mb-0.5">
      <div className="w-full bg-neutral-300 rounded-full h-1">
        <div className={`bg-neutral-600 h-1 rounded-full `} style={{width: `${progress}%`}} />
      </div>
      <div className="text-xs flex justify-center items-center gap-1 text-neutral-500">
        {star}
        <span className="h-2.5 flex">
          <FullStar gray />
        </span>
      </div>
    </div>
  );
};

export const Ratings = () => {
  return (
    <div className="w-[271px]">
      <div className="flex mb-2">
        <p className="text-5xl text-blue-500 font-semibold mr-4">4.6</p>
        <div className="flex flex-col justify-center">
          <StarRating classes={"h-5 space-x-1.5 mb-1"} rate={4.6} />
          <p className="text-neutral-500 text-sm leading-none">60 calificaciones</p>
        </div>
      </div>
      <div className="">
        <RatingBar progress={78} star={5} />
        <RatingBar progress={12} star={4} />
        <RatingBar progress={5} star={3} />
        <RatingBar progress={0} star={2} />
        <RatingBar progress={5} star={1} />
      </div>
      <div className="mt-2">
        <p className="font-semibold mb-3">Calificación de características</p>

        <Characteristics rating={4.5} title={"Relación precio-calidad"} />
        <Characteristics rating={4.5} title={"Calidad de las terminaciones"} />
        <Characteristics rating={4.5} title={"Resistencia"} />
      </div>
    </div>
  );
};
