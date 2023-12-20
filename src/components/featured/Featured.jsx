import "./Featured.scss";
import Search from "../../Assets/img/search.png";
import Man from "../../Assets/img/man.png";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <img src={Search} alt="" />
              <input type="text" placeholder="Try 'building mobile app'" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={Man} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Featured;
