import { cards } from "../../data";
import Catcard from "../catCard/Catcard";
import "./Slide.scss";
import { Slider } from "infinite-react-carousel";
import Ai from "../../Assets/img/ai.jpg";
import Wordpress from "../../Assets/img/wordpress.jpg";
import Voiceover from "../../Assets/img/voiceover.jpg";
import Video from "../../Assets/img/video.jpg";
import Socialmedia from "../../Assets/img/socialmedia.jpg";
import Seo from "../../Assets/img/seo.jpg";
import Illustration from "../../Assets/img/illustration.jpg";

const Slide = () => {
  const Slideimg = [
    { id: 1, img: { Ai } },
    { id: 2, img: { Wordpress } },
    { id: 3, img: { Voiceover } },
    { id: 4, img: { Video } },
    { id: 5, img: { Socialmedia } },
    { id: 6, img: { Seo } },
    { id: 7, img: { Illustration } },
  ];
  return (
    <div className="slide">
      <div className="container">
        <Slider
          slidesToShow={5}
          arrowsScroll={5}
          autoplay={true}
          wheelScroll={1}
        >
          {cards.map((card) => (
            <Catcard item={card} key={card.id} />
          ))}
          {Slideimg.map((image) => (
            <Catcard item={image} key={image.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Slide;
