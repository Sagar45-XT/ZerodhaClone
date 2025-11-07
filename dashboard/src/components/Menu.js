import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch username from backend
    axios.get("https://zerodhaapp-tjq6.onrender.com/profile", { withCredentials: true })
      .then(res => setUsername(res.data.username))
      .catch(() => setUsername("USER"));
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // const navigate = useNavigate(); //Using window object for navigation 

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
         "https://zerodhaapp-tjq6.onrender.com/logout",
         {},
         { withCredentials: true }
       );
       toast.success(data?.message || "Logged out");
       // Redirect to frontend login page (replace history so back doesn't return to dashboard)
       setTimeout(() => {
         window.location.replace("https://main.dluda969rbph4.amplifyapp.com/login");
       }, 400);
    } catch (err) {
      //  console.error("Logout failed:", err);
       console.error("Logout failed:", err);
       toast.error(err?.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo_Image" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {username ? username[0].toUpperCase() : "U"}
          </div>
          <p className="username" style={{fontSize:"15px", fontWeight:"500"}}>{username || "USERID"}</p>
        </div>
        <div className="">
        <button onClick={handleLogout} className="btn" 
        style={{border:"none", background: "none", color: "red", cursor: "pointer"}}>Logout</button>
      </div>
      <ToastContainer />
      </div>
    </div>
  );
};

export default Menu;
