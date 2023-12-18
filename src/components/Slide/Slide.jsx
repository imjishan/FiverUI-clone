import { cards } from "../../data"
import Catcard from "../catCard/Catcard"
import "./Slide.scss"
import { Slider } from "infinite-react-carousel"

const Slide = (slidesToShow, arrowsScroll) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => (
            <Catcard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Slide