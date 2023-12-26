import "GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = (item) => {
  return (
    <Link to="/gig">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="giginfo"></div>
        <div className="gigdetails"></div>
      </div>
    </Link>
  );
};
export default GigCard;
