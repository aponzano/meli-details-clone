import {reviewsData} from "../mock";

import {SingleReview} from "./SingleReview";

const Button = ({children}) => {
  return (
    <button className="bg-blue-100 rounded-full text-sm h-8 px-6 text-blue-400 font-semibold">
      <span className="flex items-center">
        {children}
        <svg
          className="w-2.5 h-2.5 ms-3"
          fill="none"
          viewBox="0 0 10 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      </span>
    </button>
  );
};

export const Reviews = () => {
  return (
    <div className=" w-full max-w-[466px]">
      <div className="flex mb-6 gap-5">
        <Button>Ordenar</Button>
        <Button>Calificación</Button>
      </div>
      <div className="">
        <h2 className="font-semibold text-lg leading-5 mb-4">Opiniones destacadas</h2>
        <div className="space-y-8">
          {[...reviewsData]
            // .sort((a, b) => b.likes - a.likes)
            // .slice(0, 3)
            .map((review) => {
              return <SingleReview key={review.id} review={review} />;
            })}
        </div>
      </div>
      <div className="mt-9 mb-5 text-sm text-blue-500">
        <span className="cursor-pointer">Mostrar todas las opiniones</span>
      </div>
    </div>
  );
};
