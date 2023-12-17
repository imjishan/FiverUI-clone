import { useState, useEffect } from "react";
import "./Navbar.scss";
import profile from "../../../public/img/profile.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  //   function for check if we have scrolled our screen from y axis
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  //   use effect to change the bg using the function that we have created above
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  //   data for changing the top profile section to a seller profile so that he or she can take order froms others
  const currentUser = {
    id: 1,
    username: "Jishan Ahmed",
    isSeller: true,
  };

  // component start from here

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">fiver</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiver Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={profile} alt="" />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    LogOut
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menulink">Graphics & Design</Link>
            <Link className="link">Video & Animation</Link>
            <Link className="link">Writing & Translation</Link>
            <Link className="link">AI Services</Link>
            <Link className="link">Video & Animation</Link>
            <Link className="link">Video & Animation</Link>
            <Link className="link">Video & Animation</Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
