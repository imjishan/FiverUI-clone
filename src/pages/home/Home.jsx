import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import Video from "../../Assets/img/video.mp4";
import Check from "../../Assets/img/check.png";
import ProjectSlide from "../../components/ProjectSlide/ProjectSlide";

const Home = () => {
  return (
    <div>
      <Featured></Featured>
      <TrustedBy></TrustedBy>
      <Slide></Slide>

      {/* features section which includes a video and some text */}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={Check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project based pricing.
            </p>
            <div className="title">
              <img src={Check} alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src={Check} alt="" />
              Protected payments, everytime.
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src={Check} alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project based pricing.
            </p>
          </div>
          <div className="item">
            <video src={Video} controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiver business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benifits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src={Check} alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={Check} alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={Check} alt="" />
              Connect to freelancers with proven business experience
            </div>
            <button>Explore fiver business</button>
          </div>
          <div className="item">
            <video src={Video} controls></video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
