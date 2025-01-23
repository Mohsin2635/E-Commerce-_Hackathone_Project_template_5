import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingStarProps {
  stars: number; // The number of stars rating
}

const Rating_Star = ({ stars }: RatingStarProps) => {
  const rating_star = Array.from({ length: 5 }, (_, index) => {
    const num: number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar color="yellow" size={18} />
        ) : stars >= num ? (
          <FaStarHalfAlt color="yellow" size={18} />
        ) : (
          <AiOutlineStar color="yellow" size={20} />
        )}
      </span>
    );
  });

  return (
    <div className="flex gap-1">
      {rating_star}
    </div>
  );
};

export default Rating_Star;
