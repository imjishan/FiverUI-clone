import { projects } from "../../data";
import Projectcard from "../ProjectCard/Projectcard";
import "./ProjectSlide.scss";
import { Slider } from "infinite-react-carousel";

const ProjectSlide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider
          slidesToShow={5}
          arrowsScroll={5}
          autoplay={true}
          wheelScroll={1}
        >
          {projects.map((card) => (
            <Projectcard item={projects} key={projects.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ProjectSlide;
