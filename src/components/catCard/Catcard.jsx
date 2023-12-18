import { Link } from "react-router-dom";
import "./Catcard.scss";
import { cards } from "../../data";

const Catcard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catcard">
        <img src="{item.img}" alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};
export default Catcard;
