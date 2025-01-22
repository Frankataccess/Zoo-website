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
      <div className="container mx-auto flex justify-between items-center p-4">
      <AccountButton icon={account}>
          <MenuItem onClick={handleClose}>
            <Link to="/profile">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Profile
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/bookings">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                My Bookings
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/rewards">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Rewards
              </a>
            </Link>
          </MenuItem>
                    <MenuItem onClick={logoutUser}>
            <Link to="/bookings">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Logout
              </a>
            </Link>
          </MenuItem>
        </AccountButton>

        <div>
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <img src={logo} className="h-14 w-14" />
            <div className="text-4xl text-center font-bold text-slate-900 ">
              Riget Zoo
            </div>
          </Link>
        </div>

        <div>
          <Link to="/cart" >
            <img src={cart} className="h-10 w-10"/>
          </Link>
        </div>

        <AccountButton icon={burger}>
          <MenuItem onClick={handleClose}>
            <Link to="/tickets">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Tickets
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/hotel">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Hotels
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/events">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Events
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/animals">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Animals
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/facilities">
              <a href="#" className="text-slate-900 text-xl hover:underline">
                Facilities
              </a>
            </Link>
          </MenuItem>
        </AccountButton>
      </div>
    </header>
  );
}
