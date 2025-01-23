import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/Paw print.svg";
import account from "../assets/account.svg";
import burger from "../assets/burger.svg";
import cart from "../assets/cart.svg"
import AccountButton from "./AccountButton";
import Logout from "@mui/icons-material/Logout";
const drawerWidth = 240;

export default function Navbar(props) {
  const { content } = props;
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    AxiosInstance.post(`logoutall/`, {}).then(() => {
      localStorage.removeItem("Token");
      navigate("/");
    });
  };

  return (
<header className="bg-slate-400/20 text-slate-900">
  <div className="flex items-center justify-between w-full p-4">
    {/* Left Section - Account Button */}
    <div className="flex items-center">
      <AccountButton icon={account}>
        <MenuItem onClick={handleClose}>
          <Link to="/profile" className="text-slate-900 text-xl hover:underline">
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/bookings" className="text-slate-900 text-xl hover:underline">
            My Bookings
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/rewards" className="text-slate-900 text-xl hover:underline">
            Rewards
          </Link>
        </MenuItem>
        <MenuItem onClick={logoutUser}>
          <Link to="/bookings" className="text-slate-900 text-xl hover:underline">
            Logout
          </Link>
        </MenuItem>
      </AccountButton>
    </div>

    {/* Middle Section - Logo */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <Link to="/home" className="flex items-center space-x-2">
        <img src={logo} className="h-14 w-14" alt="Logo" />
        <div className="text-4xl text-center font-bold text-slate-900">
          Riget Zoo
        </div>
      </Link>
    </div>

    {/* Right Section - Cart and Burger Icon */}
    <div className="flex items-center space-x-4">
      <Link to="/cart">
        <img src={cart} className="h-10 w-10" alt="Cart" />
      </Link>
      <AccountButton icon={burger}>
        <MenuItem onClick={handleClose}>
          <Link to="/tickets" className="text-slate-900 text-xl hover:underline">
            Tickets
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/hotel" className="text-slate-900 text-xl hover:underline">
            Hotels
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/events" className="text-slate-900 text-xl hover:underline">
            Events
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/animals" className="text-slate-900 text-xl hover:underline">
            Animals
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/facilities" className="text-slate-900 text-xl hover:underline">
            Facilities
          </Link>
        </MenuItem>
      </AccountButton>
    </div>
  </div>
</header>


  );
}
