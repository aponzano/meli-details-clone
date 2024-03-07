import {FullStar} from "../assets/FullStar";
import {HalfStar} from "../assets/HalfStar";
import {EmptyStar} from "../assets/EmptyStar";

export const StarRating = ({rate = 0, classes = ""}) => {
  return (
    <div className={`flex ${classes}`}>
      {[...Array(5)].map((star, _index) => {
        let number = _index + 0.5;

        return rate >= _index + 1 ? <FullStar /> : rate >= number ? <HalfStar /> : <EmptyStar />;
      })}
    </div>
  );
};
