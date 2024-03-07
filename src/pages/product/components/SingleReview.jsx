import {StarRating} from "../../../components/StarRating";

export const SingleReview = ({review}) => {
  const date = new Date(review.date_created);
  // const formattedDate = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;
  const formattedDate = `
  ${Intl.DateTimeFormat("es-ar", {day: "2-digit"}).format(date)}
  ${Intl.DateTimeFormat("es-ar", {month: "short"}).format(date)}.
  ${date.getFullYear()}`;

  return (
    <div className="space-y-2">
      <div className=" flex justify-between items-center">
        <StarRating classes="h-3 space-x-1" rate={review.rate} />
        <span className="text-xs text-neutral-500">{formattedDate}</span>
      </div>
      <div className="">{review.text}</div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <button className="border rounded-full text-xs text-neutral-500 h-8 px-2.5 flex items-center gap-1.5 border-neutral-400 group hover:bg-blue-50 hover:border-blue-500">
            <span className="group-hover:text-blue-500">Es útil</span>
            <span className="text-base group-hover:text-blue-500">👍🏻</span>
            <span className="group-hover:text-blue-500">{review.likes}</span>
          </button>
          <button className="border rounded-full text-neutral-500 h-8 px-1 flex items-center gap-1.5 border-neutral-400 group hover:bg-blue-50 hover:border-blue-500">
            👎🏻
          </button>
        </div>
        <div className="">
          <button className="size-8">|</button>
        </div>
      </div>
    </div>
  );
};
