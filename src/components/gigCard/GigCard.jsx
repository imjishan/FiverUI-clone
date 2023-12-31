import "./GigCard.scss";
import star from "../../Assets/img/star.png";
import heart from "../../Assets/img/heart.png";
import { Link } from "react-router-dom";

const GigCard = (item) => {
  return (
    <Link to="/gig">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src={star} alt="" />
            <span>{item.star}</span>
          </div>
        </div>

        <hr />

        <div className="details">
          <img src={heart} alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default GigCard;
