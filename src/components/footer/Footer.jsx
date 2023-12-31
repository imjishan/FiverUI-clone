import "./Footer.scss";
import twitter from "../../Assets/img/twitter.png";
import facebook from "../../Assets/img/facebook.png";
import linkedin from "../../Assets/img/linkedin.png";
import pinterest from "../../Assets/img/pinterest.png";
import instagram from "../../Assets/img/instagram.png";
import language from "../../Assets/img/language.png";
import coin from "../../Assets/img/coin.png";
import accessibility from "../../Assets/img/accessibility.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Fiver</h2>
            <span>
              &copy; This Website is not for commercial use, Created by Jishan
            </span>
          </div>
          <div className="right">
            <div className="social">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
            <div className="link">
              <img src={language} alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src={coin} alt="" />
              <span>USD</span>
            </div>
            <img src={accessibility} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
