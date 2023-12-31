import "./Gigs.scss";
import down from "../../Assets/img/down.png";
import { useState } from "react";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVER {">"} GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with fiver's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortby">SortBy</span>
            <span className="sorttype">
              {sort === "Sales" ? "Best Selling" : "Newest"}
            </span>
            <img src={down} alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightmenu">
                {sort === "Sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("Sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => {
            <GigCard key={gig.id} item={gig} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Gigs;
